(function servingRunner() {
  'use strict';

  const fail = (path, rule) => { throw new Error(path + ' · ' + rule); };
  const between = (value, path, min, max, integer = true) => {
    if (!Number.isFinite(value) || value < min || value > max || (integer && !Number.isInteger(value))) {
      fail(path, (integer ? 'integer ' : 'number ') + min + '…' + max);
    }
    return value;
  };
  function validate(input) {
    if (!input || input.schemaVersion !== 1 || !input.hardware || !input.budgets || !input.model) {
      fail('schemaVersion', '1 + hardware + budgets + model + requests');
    }
    const { hardware, budgets, model, requests } = input;
    const checkedHardware = {};
    [
      ['capacityBytes', 1, 10 ** 10], ['weightsBytes', 0, 10 ** 10],
      ['workspaceBytes', 0, 10 ** 10], ['kvBytesPerToken', 1, 10 ** 8],
      ['maxContextTokens', 2, 128], ['maxBatch', 2, 8], ['prefixTokens', 1, 32],
      ['prefillBaseMs', 1, 1000], ['prefillMsPerToken', 1, 1000],
      ['decodeMs', 1, 1000], ['extraBatchDecodeMs', 0, 1000]
    ].forEach(([name, min, max]) => {
      checkedHardware[name] = between(hardware[name], 'hardware.' + name, min, max);
    });
    checkedHardware.usdPerHour = between(hardware.usdPerHour, 'hardware.usdPerHour', 0, 10000, false);
    if (checkedHardware.weightsBytes + checkedHardware.workspaceBytes > checkedHardware.capacityBytes) {
      fail('hardware.capacityBytes', '≥ weightsBytes + workspaceBytes');
    }
    const limits = {};
    [
      ['minQuality', 0, 1], ['minCompletionRate', 0, 1], ['minRequestsPerSecond', 0, 1000],
      ['maxP95Ms', 1, 10 ** 8], ['maxPeakBytes', 1, 10 ** 10], ['maxUsdPerCompletion', 0, 1]
    ].forEach(([name, min, max]) => {
      limits[name] = between(budgets[name], 'budgets.' + name, min, max, false);
    });
    if (!Array.isArray(model.vocabulary) || model.vocabulary.length < 2 || model.vocabulary.length > 16 ||
      new Set(model.vocabulary).size !== model.vocabulary.length ||
      !model.vocabulary.every(token => typeof token === 'string' && /^[A-Za-z0-9_-]{1,16}$/.test(token))) {
      fail('model.vocabulary', '2…16 distinct tokens matching [A-Za-z0-9_-]{1,16}');
    }
    const size = model.vocabulary.length;
    if (!Array.isArray(model.weights) || model.weights.length !== size ||
      !model.weights.every(row => Array.isArray(row) && row.length === size)) {
      fail('model.weights', size + ' × ' + size);
    }
    const weights = model.weights.map((row, i) => row.map((value, j) => (
      between(value, 'model.weights[' + i + '][' + j + ']', -100, 100, false)
    )));
    if (!Array.isArray(requests) || requests.length < 1 || requests.length > 80) {
      fail('requests', '1…80 requests');
    }
    const ids = new Set();
    const checkedRequests = requests.map((request, index) => {
      const path = 'requests[' + index + ']';
      if (!request || typeof request.id !== 'string' || !/^[A-Za-z0-9_-]{1,20}$/.test(request.id) || ids.has(request.id)) {
        fail(path + '.id', 'distinct [A-Za-z0-9_-]{1,20}');
      }
      ids.add(request.id);
      const arrivalMs = between(request.arrivalMs, path + '.arrivalMs', 0, 1e6);
      if (!Array.isArray(request.inputTokens) || request.inputTokens.length < 1 || request.inputTokens.length > 128 ||
        !request.inputTokens.every(token => model.vocabulary.includes(token))) {
        fail(path + '.inputTokens', '1…128 known tokens');
      }
      const outputTokens = between(request.outputTokens, path + '.outputTokens', 1, 32);
      const expectedTokens = request.expectedTokens ?? null;
      if (expectedTokens !== null && (!Array.isArray(expectedTokens) || expectedTokens.length !== outputTokens ||
        !expectedTokens.every(token => model.vocabulary.includes(token)))) {
        fail(path + '.expectedTokens', 'null or outputTokens entries from model.vocabulary');
      }
      const deadlineMs = request.deadlineMs == null ? null : between(request.deadlineMs, path + '.deadlineMs', 1, 1e6);
      return { id: request.id, arrivalMs, inputTokens: request.inputTokens.slice(), outputTokens,
        expectedTokens: expectedTokens?.slice() ?? null, deadlineMs };
    });
    return { schemaVersion: 1, hardware: checkedHardware, budgets: limits,
      model: { vocabulary: model.vocabulary.slice(), weights }, requests: checkedRequests };
  }

  // FNV-1a identifies the deterministic JSON in this exercise, not its authenticity.
  function fingerprint(value) {
    let hash = 2166136261;
    for (const character of JSON.stringify(value)) {
      hash = Math.imul(hash ^ character.codePointAt(0), 16777619);
    }
    return (hash >>> 0).toString(16).padStart(8, '0');
  }

  // A small deterministic recurrent token predictor. The rolling state summarizes all prior tokens.
  const consume = (state, token) => ({ last: token, rolling: (state.rolling * 31 + token + 1) % 997 });
  const emptyState = { last: 0, rolling: 0 };
  function predict(state, weights) {
    const preferred = state.rolling % weights.length;
    const scores = weights[state.last].map((value, index) => value + (index === preferred ? 0.125 : 0));
    return scores.reduce((best, score, index) => score > scores[best] ? index : best, 0);
  }
  const same = (left, right) => JSON.stringify(left) === JSON.stringify(right);
  function percentile(samples) {
    const ranked = samples.slice().sort((a, b) => a - b);
    const rank = Math.ceil(0.95 * samples.length);
    return { n: samples.length, rank, valueMs: ranked[rank - 1] ?? null };
  }

  function simulate(input, config, weights) {
    const { hardware, model } = input;
    const records = input.requests.map(request => ({
      ...request, status: 'waiting', startMs: null, prefillStartMs: null, firstTokenMs: null, prefillEndMs: null,
      decodeStartMs: null, decodeEndMs: null, completionMs: null, terminalMs: null,
      reservedBytes: (request.inputTokens.length + request.outputTokens) * hardware.kvBytesPerToken,
      reclaimMs: null, prefillTokensComputed: null, prefixHitTokens: 0, actualTokens: [], tokenTimesMs: []
    }));
    const arrivals = records.slice().sort((a, b) => a.arrivalMs - b.arrivalMs);
    const active = [];
    const kernelEvents = [];
    const memoryEvents = [];
    const cached = new Map();
    const fixedBytes = hardware.weightsBytes + hardware.workspaceBytes;
    let head = 0;
    let clock = arrivals[0].arrivalMs;
    const activeBytes = () => active.reduce((sum, request) => sum + request.record.reservedBytes, 0);
    function memory(kind, record = null) {
      const kvBytes = activeBytes();
      memoryEvents.push({ timeMs: clock, kind, id: record?.id ?? null, bytes: fixedBytes + kvBytes,
        weightsBytes: hardware.weightsBytes, workspaceBytes: hardware.workspaceBytes, kvBytes,
        requests: active.map(({ record: activeRecord }) => ({ id: activeRecord.id, bytes: activeRecord.reservedBytes })) });
    }
    function release(request, status, terminalMs) {
      request.record.status = status;
      request.record.terminalMs = terminalMs;
      request.record.reclaimMs = clock;
      active.splice(active.indexOf(request), 1);
      memory('release', request.record);
    }
    const deadlineAt = record => record.deadlineMs === null ? Infinity : record.arrivalMs + record.deadlineMs;
    memory('fixed');
    while (head < arrivals.length || active.length) {
      if (!active.length && head < arrivals.length) clock = Math.max(clock, arrivals[head].arrivalMs);
      while (head < arrivals.length && arrivals[head].arrivalMs <= clock) {
        const record = arrivals[head];
        const contextLength = record.inputTokens.length + record.outputTokens;
        if (deadlineAt(record) <= clock) {
          record.status = 'deadline';
          record.terminalMs = deadlineAt(record);
        } else if (contextLength > hardware.maxContextTokens) {
          record.status = 'context-limit';
          record.terminalMs = clock;
        } else if (fixedBytes + record.reservedBytes > hardware.capacityBytes) {
          record.status = 'memory-reject';
          record.terminalMs = clock;
        } else {
          if (active.length === config.maxBatch || fixedBytes + activeBytes() + record.reservedBytes > hardware.capacityBytes) break;
          active.push({ record, state: emptyState });
          record.startMs = clock;
          record.prefillStartMs = clock;
          record.status = 'active';
          memory('reserve', record);
        }
        head++;
      }
      if (!active.length) continue;

      const prefilling = active.filter(({ record }) => record.prefillEndMs === null);
      const decoding = active.filter(({ record }) => record.prefillEndMs !== null);
      const warm = prefilling.map(({ record }) => {
        const tokens = record.inputTokens.map(token => model.vocabulary.indexOf(token));
        const prefix = Math.min(hardware.prefixTokens, tokens.length);
        const key = tokens.slice(0, prefix).join(',');
        const hit = config.cache && cached.has(key);
        record.prefixHitTokens = hit ? prefix : 0;
        record.prefillTokensComputed = tokens.length - record.prefixHitTokens;
        return { key, prefix, hit, tokens };
      });
      const n = active.length;
      const prefillMs = prefilling.length ? hardware.prefillBaseMs + hardware.prefillMsPerToken *
        Math.max(...prefilling.map(({ record }) => record.prefillTokensComputed)) : 0;
      const decodeMs = decoding.length ? hardware.decodeMs + (n - 1) * hardware.extraBatchDecodeMs : 0;
      const ends = clock + prefillMs + decodeMs;
      kernelEvents.push({ startMs: clock, endMs: ends, prefilling: prefilling.map(({ record }) => record.id),
        decoding: decoding.map(({ record }) => record.id), prefillMs, decodeMs });

      // Work runs at modeled kernel boundaries. Cancellation suppresses subsequent tokens and frees memory at the boundary.
      prefilling.forEach((request, index) => {
        const { record } = request;
        const prefillEnd = clock + prefillMs;
        if (deadlineAt(record) < prefillEnd) return;
        const { key, tokens, prefix, hit } = warm[index];
        const prefixState = hit ? cached.get(key) : tokens.slice(0, prefix).reduce(consume, emptyState);
        if (config.cache) cached.set(key, prefixState);
        request.state = tokens.slice(prefix).reduce(consume, prefixState);
        record.prefillEndMs = prefillEnd;
        record.firstTokenMs = prefillEnd;
        emit(request, prefillEnd);
      });
      decoding.forEach(request => {
        const { record } = request;
        record.decodeStartMs ??= clock + prefillMs;
        if (deadlineAt(record) < ends) return;
        record.decodeEndMs = ends;
        emit(request, ends);
      });
      clock = ends;
      for (const request of active.slice()) {
        const { record } = request;
        if (record.actualTokens.length === record.outputTokens) {
          record.completionMs = record.tokenTimesMs[record.tokenTimesMs.length - 1];
          release(request, 'completed', record.completionMs);
        } else if (deadlineAt(record) <= clock) {
          release(request, 'deadline', deadlineAt(record));
        }
      }
    }

    function emit(request, timeMs) {
      const token = predict(request.state, weights);
      request.state = consume(request.state, token);
      request.record.actualTokens.push(model.vocabulary[token]);
      request.record.tokenTimesMs.push(timeMs);
    }

    for (const record of records) {
      record.exactMatch = record.expectedTokens === null ? null :
        record.status === 'completed' && same(record.actualTokens, record.expectedTokens);
      record.queueMs = record.startMs === null ? null : record.startMs - record.arrivalMs;
      record.ttftMs = record.firstTokenMs === null ? null : record.firstTokenMs - record.arrivalMs;
      record.latencyMs = record.completionMs === null ? null : record.completionMs - record.arrivalMs;
    }
    const completed = records.filter(record => record.status === 'completed');
    const measured = records.filter(record => record.exactMatch !== null);
    const matched = measured.filter(record => record.exactMatch).length;
    const startMs = arrivals[0].arrivalMs;
    const endMs = Math.max(clock, ...records.map(record => record.terminalMs));
    const elapsedMs = endMs - startMs;
    const totalUsd = elapsedMs * hardware.usdPerHour / 3600000;
    return {
      config, modelHash: fingerprint({ vocabulary: model.vocabulary, weights }), workloadHash: fingerprint(input.requests),
      requests: records, memoryEvents, kernelEvents,
      metrics: {
        submitted: records.length, completed: completed.length, correct: matched, labeled: measured.length,
        quality: measured.length ? matched / measured.length : null, completionRate: completed.length / records.length,
        startMs, endMs, elapsedMs, requestsPerSecond: elapsedMs ? 1000 * completed.length / elapsedMs : 0,
        queueP95: percentile(records.filter(record => record.queueMs !== null).map(record => record.queueMs)),
        p95: percentile(completed.map(record => record.latencyMs)),
        ttftP95: percentile(completed.map(record => record.ttftMs)),
        tokenGapP95: percentile(completed.flatMap(record => record.tokenTimesMs.slice(1).map((time, i) => time - record.tokenTimesMs[i]))),
        peakBytes: Math.max(...memoryEvents.map(event => event.bytes)), totalUsd,
        usdPerCompletion: completed.length ? totalUsd / completed.length : null,
        statusCounts: Object.fromEntries(['completed', 'deadline', 'memory-reject', 'context-limit']
          .map(status => [status, records.filter(record => record.status === status).length]))
      }
    };
  }

  function evaluate(metrics, budgets) {
    const checks = {
      quality: metrics.labeled === metrics.submitted ? metrics.quality >= budgets.minQuality : null,
      completion: metrics.completionRate >= budgets.minCompletionRate,
      throughput: metrics.requestsPerSecond >= budgets.minRequestsPerSecond,
      latency: metrics.p95.valueMs !== null && metrics.p95.valueMs <= budgets.maxP95Ms,
      memory: metrics.peakBytes <= budgets.maxPeakBytes,
      cost: metrics.usdPerCompletion !== null && metrics.usdPerCompletion <= budgets.maxUsdPerCompletion
    };
    const values = Object.values(checks);
    return { checks, decision: values.includes(false) ? 'hold' : values.includes(null) ? 'unverified' : 'ship' };
  }

  function run(raw) {
    const input = validate(raw);
    const baseline = { version: 'v1', maxBatch: 1, cache: false };
    const candidate = { version: 'v2', maxBatch: input.hardware.maxBatch, cache: true };
    const runs = {
      baseline: simulate(input, baseline, input.model.weights),
      candidate: simulate(input, candidate, input.model.weights),
      ablation: simulate(input, { ...candidate, cache: false }, input.model.weights)
    };
    // A deliberately incompatible output head rotates the logits while keeping the same workload and hardware.
    const shiftedWeights = input.model.weights.map(row => [row[row.length - 1], ...row.slice(0, -1)]);
    runs.fault = simulate(input, { ...candidate, version: 'v-bad' }, shiftedWeights);
    runs.rollback = simulate(input, baseline, input.model.weights);
    for (const result of Object.values(runs)) result.budget = evaluate(result.metrics, input.budgets);

    const canaryRequests = runs.fault.requests.slice().sort((a, b) => a.arrivalMs - b.arrivalMs).slice(0, 3);
    const labeledCanaries = canaryRequests.filter(record => record.exactMatch !== null);
    const matchedCanaries = labeledCanaries.filter(record => record.exactMatch).length;
    const canaryQuality = labeledCanaries.length ? matchedCanaries / labeledCanaries.length : null;
    const canariesFullyLabeled = labeledCanaries.length === canaryRequests.length;
    const alert = canariesFullyLabeled && canaryQuality < input.budgets.minQuality;
    const base = runs.baseline;
    const restored = runs.rollback;
    const recovery = {
      sameModel: base.modelHash === restored.modelHash, sameWorkload: base.workloadHash === restored.workloadHash,
      sameOutputs: same(base.requests.map(record => [record.id, record.status, record.actualTokens]),
        restored.requests.map(record => [record.id, record.status, record.actualTokens])),
      sameTiming: same(base.requests.map(record => [record.id, record.startMs, record.terminalMs, record.tokenTimesMs]),
        restored.requests.map(record => [record.id, record.startMs, record.terminalMs, record.tokenTimesMs])),
      sameCost: base.metrics.totalUsd === restored.metrics.totalUsd
    };
    recovery.restored = Object.values(recovery).every(Boolean);
    return {
      schemaVersion: 1, hardware: input.hardware, budgets: input.budgets,
      timeSource: 'simulated-gpu-ms', outputSource: 'local-recurrent-token-model', runs,
      rollout: {
        canaryIds: canaryRequests.map(record => record.id), matchedCanaries, labeledCanaries: labeledCanaries.length,
        canaryQuality, qualityFloor: input.budgets.minQuality, alert, recovery,
        events: [
          { sequence: 1, action: 'baseline', version: baseline.version },
          { sequence: 2, action: 'canary', version: runs.fault.config.version, requestIds: canaryRequests.map(record => record.id) },
          { sequence: 3, action: alert ? 'quality-alert' : canariesFullyLabeled ? 'alert-not-triggered' : 'quality-unverified', quality: canaryQuality },
          { sequence: 4, action: alert ? 'rollback' : 'rollback-drill', version: baseline.version },
          { sequence: 5, action: 'replay-confirmed', restored: recovery.restored }
        ]
      }
    };
  }

  const api = { run, validate, source: () => '(' + servingRunner.toString() + ')();\n' };
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
    if (require.main === module) {
      const fs = require('node:fs');
      try {
        if (process.argv.length < 3 || process.argv.length > 4) throw new Error('node runner.js workload.json [report.json]');
        const report = JSON.stringify(run(JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))), null, 2) + '\n';
        if (process.argv[3]) fs.writeFileSync(process.argv[3], report);
        else process.stdout.write(report);
      } catch (error) {
        process.stderr.write(error.message + '\n');
        process.exitCode = 1;
      }
    }
  } else {
    window.ServingLab = api;
  }
}());
