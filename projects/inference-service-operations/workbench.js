(function () {
  'use strict';

  const get = id => document.getElementById(id);
  const ui = name => get('project-' + name);
  const t = text => window.courseI18n?.translate(text) ?? text;
  const { run, source } = window.ServingLab;
  const regular = JSON.parse(ui('regular-input').textContent);
  const burst = { ...regular, requests: regular.requests.map(request => ({ ...request, arrivalMs: 0 })) };
  const presets = { regular, burst };
  const reports = { regular: run(regular), burst: run(burst) };
  const dialog = ui('dialog');
  const selectView = ui('result-view');
  const selectRun = ui('run');
  const selectScenario = ui('scenario');
  const selectRecord = ui('record');
  const runNames = { baseline: '기준판', candidate: '후보판', ablation: '제거판', fault: '불량판', rollback: '복귀판' };
  const decisions = { ship: '승인', hold: '보류', unverified: '미검증' };
  const states = { completed: '완료', deadline: '기한 초과', 'memory-reject': '메모리 부족', 'context-limit': '문맥 초과' };
  const allocation = { fixed: '고정', reserve: '예약', release: '반환' };
  const fixed = (value, digits) => value === null ? '—' : Number(value.toFixed(digits)).toString();
  const percent = value => fixed(value === null ? null : 100 * value, 2) + (value === null ? '' : '%');
  const timestamp = value => value === null ? '—' : value + ' ms';
  const json = value => JSON.stringify(value, null, 2) + '\n';
  const list = (entries, max = 9) => entries?.length ?
    entries.slice(0, max).join(' ') + (entries.length > max ? ' … (+' + (entries.length - max) + ')' : '') : '—';
  const equality = value => value ? '✓' : '×';
  const setting = value => value ? t('켬') : t('끔');
  const selected = () => reports[selectScenario.value];
  let recordKey;

  function setText(name, text) {
    ui(name).textContent = text;
  }

  function detail(name, rows) {
    ui(name).replaceChildren(...rows.flatMap(([label, value]) => {
      const term = document.createElement('dt');
      term.textContent = t(label);
      const result = document.createElement('dd');
      result.textContent = value;
      return [term, result];
    }));
  }

  function table(name, rows) {
    ui(name).replaceChildren(...rows.map(([label, ...values]) => {
      const row = document.createElement('tr');
      const header = document.createElement('th');
      header.scope = 'row';
      header.textContent = t(label);
      row.append(header);
      for (const value of values) {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.append(cell);
      }
      return row;
    }));
  }

  function rank(p) {
    return timestamp(p.valueMs) + ' (' + p.rank + '/' + p.n + ')';
  }

  function summary(report) {
    const total = report.runs.baseline.metrics.submitted;
    const scenario = selectScenario.value;
    const edited = scenario === 'edited';
    const distinct = new Set(presets[scenario].requests.map(request => request.arrivalMs)).size;
    setText('mixture', total + ' ' + t('제출') + ' · ' + distinct + ' ' + t('도착 시각'));
    table('metrics', Object.entries(report.runs).map(([key, { metrics: m }]) => [
      runNames[key], m.correct + '/' + m.labeled, fixed(m.requestsPerSecond, 1), m.p95.valueMs ?? '—', m.peakBytes,
      fixed(m.usdPerCompletion === null ? null : m.usdPerCompletion * 1e6, 3)
    ]));
    const candidate = report.runs.candidate;
    const usedBudget = edited ? t('편집 예산') : t('기본 예산');
    setText('summary-status', t('후보판') + ' · ' + usedBudget + ' · ' + t(decisions[candidate.budget.decision]) +
      ' · ' + candidate.metrics.completed + '/' + total + ' ' + t('완료'));
  }

  function checks(report, result) {
    const m = result.metrics;
    const b = report.budgets;
    const marker = key => result.budget.checks[key] === null ? '—' : equality(result.budget.checks[key]);
    const costMicro = m.usdPerCompletion === null ? null : m.usdPerCompletion * 1e6;
    table('budget-rows', [
      ['정확도', m.correct + '/' + m.labeled + ' · ' + marker('quality'), '≥ ' + percent(b.minQuality)],
      ['완료율', m.completed + '/' + m.submitted + ' · ' + marker('completion'), '≥ ' + percent(b.minCompletionRate)],
      ['처리량', fixed(m.requestsPerSecond, 2) + ' req/s · ' + marker('throughput'), '≥ ' + b.minRequestsPerSecond + ' req/s'],
      ['완료 p95', rank(m.p95) + ' · ' + marker('latency'), '≤ ' + b.maxP95Ms + ' ms'],
      ['피크 메모리', m.peakBytes + ' B · ' + marker('memory'), '≤ ' + b.maxPeakBytes + ' B'],
      ['완료당 비용', fixed(costMicro, 5) + ' µ$ · ' + marker('cost'), '≤ ' + fixed(b.maxUsdPerCompletion * 1e6, 5) + ' µ$']
    ]);
    setText('budget-status', t(decisions[result.budget.decision]) + ' · ' + t('대기 p95') + ' ' + rank(m.queueP95) +
      ' · TTFT p95 ' + rank(m.ttftP95) + ' · ' + t('토큰 간격 p95') + ' ' + rank(m.tokenGapP95));
  }

  function request(record, config) {
    detail('request-detail', [
      ['상태', record.id + ' · ' + t(states[record.status])],
      ['입력', record.inputTokens.length + ' · ' + list(record.inputTokens)],
      ['실제 / 기대', list(record.actualTokens) + ' / ' + list(record.expectedTokens) +
        (record.exactMatch === null ? '' : ' · ' + equality(record.exactMatch))],
      ['도착 → 시작', timestamp(record.arrivalMs) + ' → ' + timestamp(record.startMs)],
      ['프리필 / 디코드', timestamp(record.prefillStartMs) + '–' + timestamp(record.prefillEndMs) + ' / ' +
        timestamp(record.decodeStartMs) + '–' + timestamp(record.decodeEndMs)],
      ['토큰 시각 (ms)', list(record.tokenTimesMs)],
      ['종료 / 반환', timestamp(record.terminalMs) + ' / ' + timestamp(record.reclaimMs)],
      ['프리필 / 캐시', (record.prefillTokensComputed ?? '—') + ' ' + t('계산 토큰') + ' / ' + record.prefixHitTokens +
        ' ' + t('재사용 토큰') + ' · ' + setting(config.cache)],
      ['KV 예약', record.reservedBytes + ' B']
    ]);
  }

  function memory(event, metrics, hardware) {
    detail('memory-detail', [
      ['상태', timestamp(event.timeMs) + ' · ' + t(allocation[event.kind]) + ' · ' + (event.id ?? '—')],
      ['가중치 / 작업 공간', event.weightsBytes + ' B / ' + event.workspaceBytes + ' B'],
      ['요청별 KV', list(event.requests.map(item => item.id + ' ' + item.bytes + ' B'), 5)],
      ['예약 / 한도', event.bytes + ' B / ' + hardware.capacityBytes + ' B'],
      ['실행 피크', metrics.peakBytes + ' B']
    ]);
  }

  function kernel(event) {
    detail('kernel-detail', event ? [
      ['커널 경계', timestamp(event.startMs) + ' → ' + timestamp(event.endMs)],
      ['프리필', timestamp(event.prefillMs) + ' · ' + list(event.prefilling)],
      ['디코드', timestamp(event.decodeMs) + ' · ' + list(event.decoding)]
    ] : [['커널 경계', '—']]);
  }

  function rollback(report) {
    const { rollout, runs } = report;
    const base = runs.baseline;
    const recovery = rollout.recovery;
    const canary = rollout.matchedCanaries + '/' + rollout.labeledCanaries + ' · ' + rollout.canaryIds.join(' ') +
      ' · ' + t('하한') + ' ' + percent(rollout.qualityFloor);
    detail('rollback-detail', [
      ['버전 전환', 'v1 → v-bad → v1'],
      ['품질 표본', canary],
      ['경보', t(rollout.alert ? '품질 하한 위반' : rollout.labeledCanaries !== rollout.canaryIds.length ? '미검증' : '경보 없음')],
      ['모델 / 입력 지문', base.modelHash + ' ' + equality(recovery.sameModel) + ' / ' +
        base.workloadHash + ' ' + equality(recovery.sameWorkload)],
      ['출력 / 시간 / 비용', [recovery.sameOutputs, recovery.sameTiming, recovery.sameCost].map(equality).join(' / ')],
      ['기준 회복', t(recovery.restored ? '회복 확인' : '불일치')],
      ['복귀판 예산', t(decisions[runs.rollback.budget.decision])]
    ]);
  }

  function selectedRecord(view, result) {
    const keys = [
      selectScenario.value, selectRun.value, view
    ];
    const records = view === 'requests' ? result.requests : view === 'memory' ? result.memoryEvents : result.kernelEvents;
    if (recordKey !== keys.join(':')) {
      recordKey = keys.join(':');
      selectRecord.replaceChildren(...records.map((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = view === 'requests' ? item.id : (index + 1) + ' · ' + timestamp(item.timeMs ?? item.startMs) +
          (item.id ? ' · ' + item.id : '');
        return option;
      }));
    }
    ui('record-field').hidden = !records.length;
    return records[Number(selectRecord.value)];
  }

  function render() {
    const view = selectView.value;
    const report = selected();
    const result = report.runs[selectRun.value];
    ui('run-field').hidden = !['checks', 'requests', 'memory', 'kernels'].includes(view);
    ui('record-field').hidden = true;
    for (const section of dialog.querySelectorAll('.serving-result')) section.hidden = section.id !== 'project-' + view;
    if (view === 'summary') summary(report);
    if (view === 'checks') checks(report, result);
    if (view === 'requests') request(selectedRecord(view, result), result.config);
    if (view === 'memory') memory(selectedRecord(view, result), result.metrics, report.hardware);
    if (view === 'kernels') kernel(selectedRecord(view, result));
    if (view === 'rollback') rollback(report);
  }

  function show(page) {
    const editing = page === 'editor';
    ui('editor').hidden = !editing;
    ui('results').hidden = editing;
    setText('dialog-title', t(editing ? '입력 편집' : '실행 결과'));
    if (!dialog.open) dialog.showModal();
    if (editing) ui('input').focus();
    else {
      render();
      selectView.focus();
    }
  }

  function download(filename, content, mimeType) {
    const link = document.createElement('a');
    const url = URL.createObjectURL(new Blob([content], { type: mimeType }));
    link.href = url;
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  get('open-results').onclick = () => show('results');
  get('open-editor').onclick = () => {
    ui('input').value = json(presets[selectScenario.value]);
    ui('error').hidden = true;
    show('editor');
  };
  ui('close').onclick = () => dialog.close();
  ui('reset').onclick = () => {
    ui('input').value = json(regular);
    ui('error').hidden = true;
  };
  ui('editor').onsubmit = event => {
    event.preventDefault();
    try {
      const data = JSON.parse(ui('input').value);
      const result = run(data);
      presets.edited = data;
      reports.edited = result;
      recordKey = undefined;
      selectScenario.querySelector('[value="edited"]').disabled = false;
      selectScenario.value = 'edited';
      selectView.value = 'summary';
      show('results');
    } catch (error) {
      setText('error', t('JSON 또는 값 범위를 확인하세요.') + ' ' + error.message.slice(0, 115));
      ui('error').hidden = false;
    }
  };
  for (const select of [selectView, selectScenario, selectRun, selectRecord]) select.onchange = render;
  get('download-workload').onclick = () => download('workload.json', json(presets[selectScenario.value]), 'application/json');
  get('download-report').onclick = () => download('report.json', json(selected()), 'application/json');
  get('download-runner').onclick = () => download('runner.js', source(), 'text/javascript');
  addEventListener('course:lang', () => {
    if (!dialog.open) return;
    if (ui('editor').hidden) show('results');
    else setText('dialog-title', t('입력 편집'));
  });
}());
