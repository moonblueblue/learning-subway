(function demandForecast(root) {
  'use strict';

  const monthPattern = /^20[0-9]{2}-(0[1-9]|1[0-2])$/;
  const timePattern = /^20[0-9]{2}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}Z$/;
  const itemPattern = /^[A-Za-z0-9][A-Za-z0-9_-]{0,11}$/;
  const sources = ['sales', 'inventory', 'returns'];

  function offset(month, count) {
    return new Date(Date.UTC(+month.slice(0, 4), +month.slice(5) - 1 + count, 1))
      .toISOString().slice(0, 7);
  }

  function start(month) {
    return month + '-01T00:00:00.000Z';
  }

  function labelDeadline(month) {
    return offset(month, 1) + '-10T00:00:00.000Z';
  }

  function isTime(value) {
    return typeof value === 'string' && timePattern.test(value) &&
      Number.isFinite(Date.parse(value)) && new Date(value).toISOString() === value;
  }

  function isMonth(value) {
    return typeof value === 'string' && monthPattern.test(value);
  }

  function check(condition, field) {
    if (!condition) throw new Error(field);
  }

  function index(input) {
    const settings = input?.settings;
    check(settings && typeof settings === 'object', 'settings');
    const {testStart, testEnd, reportAsOf, seasonMonths, ridge,
      minPairs, adoptGain, rollbackGap, rollbackStreak} = settings;
    check(isMonth(testStart), 'settings.testStart');
    check(isMonth(testEnd) && testEnd >= testStart && testEnd < offset(testStart, 24), 'settings.testEnd');
    check(isTime(reportAsOf) && reportAsOf >= start(testStart), 'settings.reportAsOf');
    check(Number.isInteger(seasonMonths) && seasonMonths >= 1 && seasonMonths <= 24, 'settings.seasonMonths');
    check(Number.isFinite(ridge) && ridge >= .01 && ridge <= 1000, 'settings.ridge');
    check(Number.isInteger(minPairs) && minPairs >= 1 && minPairs <= 12, 'settings.minPairs');
    check(Number.isFinite(adoptGain) && adoptGain >= 0 && adoptGain <= 10000, 'settings.adoptGain');
    check(Number.isFinite(rollbackGap) && rollbackGap > 0 && rollbackGap <= 10000, 'settings.rollbackGap');
    check(Number.isInteger(rollbackStreak) && rollbackStreak >= 1 && rollbackStreak <= 12, 'settings.rollbackStreak');

    const firstSeen = new Map();
    const ledgers = {sales: new Map(), inventory: new Map(), returns: new Map()};
    for (const source of sources) {
      check(Array.isArray(input[source]) && input[source].length <= 6000, source);
      input[source].forEach((row, i) => {
        const field = source + '[' + i + ']';
        check(row && typeof row.item === 'string' && itemPattern.test(row.item), field + '.item');
        check(isMonth(row.month) && row.month >= offset(testStart, -96), field + '.month');
        check(isTime(row.recordedAt) && row.recordedAt >= start(offset(row.month, 1)), field + '.recordedAt');
        check(Number.isInteger(row.units) && row.units >= 0 && row.units <= 1_000_000, field + '.units');
        check(source !== 'sales' || typeof row.stockout === 'boolean', field + '.stockout');
        if (row.recordedAt <= reportAsOf && (!firstSeen.has(row.item) || row.recordedAt < firstSeen.get(row.item))) {
          firstSeen.set(row.item, row.recordedAt);
        }
        const key = row.item + '/' + row.month;
        const versions = ledgers[source].get(key) || [];
        check(!versions.some(version => version.recordedAt === row.recordedAt), field + '.recordedAt (duplicate)');
        versions.push(row);
        ledgers[source].set(key, versions);
      });
      for (const versions of ledgers[source].values()) {
        versions.sort((a, b) => a.recordedAt.localeCompare(b.recordedAt));
      }
    }
    check(firstSeen.size > 0 && firstSeen.size <= 20, 'records (1–20 observed items)');
    return {ledgers, firstSeen, settings};
  }

  function asOf(ledger, item, month, cutoff) {
    const versions = ledger.get(item + '/' + month) || [];
    for (let i = versions.length - 1; i >= 0; i--) {
      if (versions[i].recordedAt <= cutoff) return versions[i];
    }
    return null;
  }

  function label(sales, item, month, cutoff) {
    const deadline = labelDeadline(month);
    return asOf(sales, item, month, cutoff < deadline ? cutoff : deadline);
  }

  function featuresAt(ledgers, item, month, seasonMonths) {
    const cutoff = start(month);
    const prior = offset(month, -1);
    const seasonal = asOf(ledgers.sales, item, offset(month, -seasonMonths), cutoff);
    const recent = asOf(ledgers.sales, item, prior, cutoff);
    return {
      seasonalSales: seasonal?.stockout ? null : seasonal,
      recentSales: recent?.stockout ? null : recent,
      inventory: asOf(ledgers.inventory, item, prior, cutoff),
      returns: asOf(ledgers.returns, item, prior, cutoff)
    };
  }

  function vector(features) {
    return [features.recentSales, features.inventory, features.returns].map(record => record?.units ?? null);
  }

  function mean(values) {
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  function solve(matrix, target) {
    const rows = matrix.map((row, i) => [...row, target[i]]);
    const n = rows.length;
    for (let i = 0; i < n; i++) {
      let pivot = i;
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(rows[j][i]) > Math.abs(rows[pivot][i])) pivot = j;
      }
      [rows[i], rows[pivot]] = [rows[pivot], rows[i]];
      const divisor = rows[i][i];
      rows[i] = rows[i].map(value => value / divisor);
      for (let j = 0; j < n; j++) {
        if (j === i) continue;
        const scale = rows[j][i];
        rows[j] = rows[j].map((value, k) => value - scale * rows[i][k]);
      }
    }
    return rows.map(row => row[n]);
  }

  function ridgeFit(rows, penalty) {
    const centers = rows[0].x.map((_, i) => mean(rows.map(row => row.x[i])));
    const scales = centers.map((center, i) =>
      Math.sqrt(mean(rows.map(row => (row.x[i] - center) ** 2))) || 1);
    const transform = values => values.map((value, i) => (value - centers[i]) / scales[i]);
    const samples = rows.map(row => transform(row.x));
    const intercept = mean(rows.map(row => row.y));
    const gram = centers.map((_, i) => centers.map((_, j) =>
      samples.reduce((sum, row) => sum + row[i] * row[j], i === j ? penalty : 0)));
    const cross = centers.map((_, i) => samples.reduce((sum, row, j) =>
      sum + row[i] * (rows[j].y - intercept), 0));
    const coefficients = solve(gram, cross);
    return values => transform(values).reduce((sum, value, i) => sum + value * coefficients[i], intercept);
  }

  function train(ledgers, months, item, forecastAt, seasonMonths, ridge) {
    const rows = [];
    for (const month of months) {
      if (start(month) >= forecastAt) break;
      const actual = label(ledgers.sales, item, month, forecastAt);
      if (!actual || actual.stockout) continue;
      const features = featuresAt(ledgers, item, month, seasonMonths);
      const x = vector(features);
      if (!features.seasonalSales || x.includes(null)) continue;
      rows.push({x, y: actual.units - features.seasonalSales.units});
    }
    return {rows: rows.length, predict: rows.length >= 4 ? ridgeFit(rows, ridge) : null};
  }

  function score(row, sales, cutoff) {
    const actual = label(sales, row.item, row.month, cutoff);
    const paired = actual && !actual.stockout && row.baseline !== null && row.model !== null;
    return {
      ...row,
      actual: actual && !actual.stockout ? actual.units : null,
      actualAvailableAt: actual?.recordedAt ?? null,
      paired: Boolean(paired),
      excluded: paired ? null : !actual ? 'label-pending' : actual.stockout ? 'stockout' : 'prediction-unavailable',
      baselineError: paired ? Math.abs(actual.units - row.baseline) : null,
      modelError: paired ? Math.abs(actual.units - row.model) : null
    };
  }

  function summary(scored) {
    const pairs = scored.filter(row => row.paired);
    const baselineMAE = pairs.length ? mean(pairs.map(row => row.baselineError)) : null;
    const modelMAE = pairs.length ? mean(pairs.map(row => row.modelError)) : null;
    return {
      rows: scored.length,
      paired: pairs.length,
      pending: scored.filter(row => row.excluded === 'label-pending').length,
      stockouts: scored.filter(row => row.excluded === 'stockout').length,
      unavailable: scored.filter(row => row.excluded === 'prediction-unavailable').length,
      baselineMAE, modelMAE, gain: pairs.length ? baselineMAE - modelMAE : null
    };
  }

  function decide(previous, sales, forecastAt, settings, state) {
    const scored = previous.map(row => score(row, sales, forecastAt));
    const totals = summary(scored);
    const eligible = scored.filter(row => row.paired);
    const last = eligible.slice(-settings.rollbackStreak);
    const streak = last.length === settings.rollbackStreak &&
      last.every(row => row.forecastAt >= (state.adoptedAt ?? forecastAt) &&
        row.modelError - row.baselineError >= settings.rollbackGap);
    let status = state.status;
    if (status === 'model' && streak) status = 'rollback';
    if ((status === 'shadow' || status === 'baseline') && totals.paired >= settings.minPairs) {
      status = totals.gain >= settings.adoptGain ? 'model' : 'baseline';
      if (status === 'model') state.adoptedAt = forecastAt;
    }
    state.status = status;
    return {
      status, served: status === 'model' ? 'model' : 'baseline',
      paired: totals.paired,
      baselineMAE: totals.baselineMAE,
      modelMAE: totals.modelMAE,
      monitored: last.map(row => ({
        month: row.month, availableAt: row.actualAvailableAt,
        baselineError: row.baselineError, modelError: row.modelError
      }))
    };
  }

  function evaluate(input) {
    const {ledgers, firstSeen, settings} = index(input);
    const {testStart, testEnd, reportAsOf, seasonMonths, ridge} = settings;
    const months = [];
    for (let month = offset(testStart, -96); month <= testEnd; month = offset(month, 1)) months.push(month);
    const predictions = [];
    const itemResults = [];
    for (const item of [...firstSeen.keys()].sort()) {
      const previous = [];
      const state = {status: 'shadow', adoptedAt: null};
      for (const month of months) {
        if (month < testStart) continue;
        const forecastAt = start(month);
        if (forecastAt > reportAsOf) break;
        if (forecastAt < firstSeen.get(item)) continue;
        const features = featuresAt(ledgers, item, month, seasonMonths);
        const x = vector(features);
        const baseline = features.seasonalSales?.units ?? null;
        const fit = train(ledgers, months, item, forecastAt, seasonMonths, ridge);
        const model = baseline !== null && fit.predict && !x.includes(null)
          ? Math.max(0, Math.round(baseline + fit.predict(x))) : null;
        const decision = decide(previous, ledgers.sales, forecastAt, settings, state);
        if (decision.served === 'model' && model === null) decision.served = 'baseline';
        if (decision.served === 'baseline' && baseline === null) decision.served = null;
        previous.push({item, month, forecastAt, baseline, model, trainingRows: fit.rows, features, decision});
      }
      if (!previous.length) continue;
      const scored = previous.map(row => score(row, ledgers.sales, reportAsOf));
      predictions.push(...scored);
      itemResults.push({item, ...summary(scored), decision: scored.at(-1)?.decision ?? null});
    }
    const overall = summary(predictions);
    const hiddenFailure = overall.gain > 0
      ? itemResults.filter(item => item.gain < 0).sort((a, b) => a.gain - b.gain)[0]?.item ?? null : null;
    const windows = [...new Set(predictions.map(row => row.month))].map(month => {
      const rows = predictions.filter(row => row.month === month);
      return {month, ...summary(rows), training: Object.fromEntries(rows.map(row => [row.item, row.trainingRows]))};
    });
    return {settings, predictions, windows, overall, items: itemResults, hiddenFailure};
  }

  function sampleInput() {
    const settings = {testStart: '2026-01', testEnd: '2026-06', reportAsOf: '2026-07-10T00:00:00.000Z',
      seasonMonths: 12, ridge: 2, minPairs: 2, adoptGain: 2, rollbackGap: 5, rollbackStreak: 2};
    const input = {settings, sales: [], inventory: [], returns: []};
    const season = [0, 10, 4, 12, 16, 6, 20, 18, 8, 4, 10, 25];
    for (const item of ['A', 'B']) {
      for (let i = 0; i < 42; i++) {
        const month = offset('2023-01', i);
        const position = i % 12;
        const year = Math.floor(i / 12);
        const stockout = item === 'B' && month === '2024-08';
        let units = item === 'A' ? 80 + 32 * year + season[position] : 24 + Math.round(season[position] / 4) + 2 * year;
        if (item === 'A' && year === 3 && position >= 3) units -= 20;
        if (item === 'B' && year === 3) units -= 2;
        const record = {item, month, recordedAt: start(offset(month, 1))};
        input.sales.push({...record, units, stockout});
        input.inventory.push({...record, units: 45 + (i * 7 % 13)});
        input.returns.push({...record, units: i % 5});
      }
    }
    input.inventory.push({item: 'A', month: '2026-05', recordedAt: '2026-06-03T00:00:00.000Z', units: 79});
    return input;
  }

  // Export the loaded implementation even when the page is opened from a local file.
  const api = {evaluate, sampleInput, source: () => '(' + demandForecast.toString() + ')(globalThis);\n'};
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.DemandForecast = api;

  if (typeof require === 'function' && typeof module === 'object' && require.main === module) {
    const fs = require('node:fs');
    try {
      const [, , inputPath, outputPath] = process.argv;
      if (!inputPath || !outputPath) throw new Error('node item-demand-forecast.js INPUT.json REPORT.json');
      const report = evaluate(JSON.parse(fs.readFileSync(inputPath, 'utf8')));
      fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
    } catch (error) {
      process.stderr.write(error.message + '\n');
      process.exitCode = 1;
    }
  }
})(globalThis);
