/* Reference implementation. Run with Node.js or load as a classic browser script. */
const faultInspection = (() => {
  const version = 'fault-inspection-v1';
  const oneHour = 60 * 60 * 1000;
  const labelHours = 24;
  const maximumAgeMinutes = 30;
  const cutoffs = [0.35, 0.55, 0.75];
  const bins = ['00', '10', '01', '11'];

  function requireCondition(condition, message) {
    if (!condition) throw new Error(message);
  }

  function utc(value) {
    const time = typeof value === 'string' && value.endsWith('Z') ? Date.parse(value) : NaN;
    requireCondition(Number.isFinite(time), 'Expected an ISO-8601 UTC timestamp: ' + value);
    return time;
  }

  function validateRows(rows, start, end) {
    const ids = new Set();
    requireCondition(Array.isArray(rows) && rows.length > 0, 'Expected a nonempty row list');
    for (const row of rows) {
      const {id, equipment_id: equipment} = row;
      requireCondition(typeof id === 'string' && id.length > 0 && !ids.has(id), 'Invalid or duplicate row ID: ' + id);
      requireCondition(typeof equipment === 'string' && equipment.length > 0, 'Missing equipment ID: ' + id);
      ids.add(id);
      const prediction = utc(row.prediction_at);
      const windowEnd = prediction + labelHours * oneHour;
      const known = utc(row.label_available_at);
      requireCondition(prediction >= start && prediction < end, 'Prediction outside the split: ' + id);
      requireCondition(known >= windowEnd && known < end, 'Outcome not matured before the next split: ' + id);
      if (row.failure_at !== null) {
        const failure = utc(row.failure_at);
        requireCondition(failure > prediction && failure <= windowEnd, 'Failure outside the label window: ' + id);
      }
    }
  }

  function observation(row) {
    const {temperature_c: temperature, vibration_mm_s: vibration} = row;
    if (!Number.isFinite(temperature) || !Number.isFinite(vibration) ||
        !row.sensor_at || !row.sensor_available_at) {
      return {review: 'missing-reading'};
    }
    const prediction = utc(row.prediction_at);
    const measured = utc(row.sensor_at);
    const available = utc(row.sensor_available_at);
    requireCondition(available >= measured, 'Received before measured: ' + row.id);
    if (available > prediction) return {review: 'late-reading'};
    if (prediction - measured > maximumAgeMinutes * oneHour / 60) return {review: 'stale-reading'};
    return {temperature, vibration, bin: String(Number(temperature >= 80)) + String(Number(vibration >= 4))};
  }

  function fit(training) {
    const counts = Object.fromEntries(bins.map(bin => [bin, {failures: 0, total: 0}]));
    for (const row of training) {
      const {bin} = observation(row);
      if (bin === undefined) continue;
      counts[bin].total++;
      counts[bin].failures += Number(row.failure_at !== null);
    }
    for (const count of Object.values(counts)) {
      count.score = (count.failures + 1) / (count.total + 2);
    }
    return counts;
  }

  function score(rows, frequencies, cutoff) {
    const counts = {tp: 0, fn: 0, fp: 0, tn: 0, cost: 0};
    const cases = rows.map(row => {
      const {bin, temperature, review} = observation(row);
      const item = {id: row.id, equipment_id: row.equipment_id, prediction_at: row.prediction_at, label: row.failure_at !== null};
      if (review) return {...item, status: 'review', reason: review, owner: 'inspection-lead'};
      const risk = frequencies[bin].score;
      const alert = cutoff === null ? temperature >= 80 : risk >= cutoff;
      const outcome = item.label ? (alert ? 'tp' : 'fn') : (alert ? 'fp' : 'tn');
      counts[outcome]++;
      return {...item, status: alert ? 'alert' : 'no-alert', risk, bin, outcome};
    });
    counts.cost = counts.fn * 5 + counts.fp;
    return {counts, cases};
  }

  function lock(development) {
    requireCondition(development.label_hours === labelHours, 'Expected a 24-hour label window');
    const validationStart = utc(development.validation_start);
    const holdoutStart = utc(development.holdout_start);
    requireCondition(validationStart < holdoutStart, 'Validation must precede the holdout');
    validateRows(development.training, -Infinity, validationStart);
    validateRows(development.validation, validationStart, holdoutStart);
    const frequencies = fit(development.training);
    const validation = cutoffs.map(cutoff => ({cutoff, ...score(development.validation, frequencies, cutoff).counts}));
    const [best] = [...validation].sort((a, b) => a.cost - b.cost || b.cutoff - a.cutoff);
    return {
      version,
      development_version: development.version,
      holdout_start: development.holdout_start,
      frequencies,
      cutoff: best.cutoff,
      validation_baseline: score(development.validation, frequencies, null).counts,
      validation
    };
  }

  function compareIds(a, b) {
    return a < b ? -1 : Number(a !== b);
  }

  function verifiedGraph(map) {
    const nodes = new Set(map.nodes);
    const ids = new Set();
    requireCondition(nodes.size === map.nodes.length && nodes.has(map.start), 'Invalid map nodes or start');
    for (const edge of map.edges) {
      requireCondition(!ids.has(edge.id) && nodes.has(edge.from) && nodes.has(edge.to) &&
        Number.isFinite(edge.minutes) && edge.minutes >= 0, 'Invalid map edge: ' + edge.id);
      ids.add(edge.id);
    }
    for (const closed of Object.values(map.scenarios)) {
      requireCondition(Array.isArray(closed) && closed.every(id => ids.has(id)), 'Unknown closure ID');
    }
    requireCondition(Number.isInteger(map.capacity) && map.capacity >= 0, 'Invalid inspection capacity');
    return nodes;
  }

  function shortestPath(map, destination, closed) {
    const distances = new Map([[map.start, 0]]);
    const predecessors = new Map();
    const queue = [{node: map.start, cost: 0}];
    const adjacency = new Map(map.nodes.map(node => [node, []]));
    for (const edge of map.edges) {
      if (!closed.includes(edge.id)) adjacency.get(edge.from).push(edge);
    }
    while (queue.length > 0) {
      queue.sort((a, b) => a.cost - b.cost || compareIds(a.node, b.node));
      const {node, cost} = queue.shift();
      if (cost !== distances.get(node)) continue;
      if (node === destination) {
        const path = [destination];
        while (path.at(-1) !== map.start) path.push(predecessors.get(path.at(-1)));
        return {status: 'reachable', path: path.reverse(), minutes: cost};
      }
      for (const edge of adjacency.get(node)) {
        const nextCost = cost + edge.minutes;
        if (nextCost >= (distances.get(edge.to) ?? Infinity)) continue;
        distances.set(edge.to, nextCost);
        predecessors.set(edge.to, node);
        queue.push({node: edge.to, cost: nextCost});
      }
    }
    return {status: 'unreachable', path: null, minutes: null, owner: 'inspection-lead'};
  }

  function evaluate(policy, holdout, map) {
    requireCondition(policy.version === version && cutoffs.includes(policy.cutoff), 'Use a locked policy from this reference version');
    requireCondition(holdout.label_hours === labelHours, 'Expected a 24-hour label window');
    validateRows(holdout.rows, utc(policy.holdout_start), Infinity);
    const nodes = verifiedGraph(map);
    const baseline = score(holdout.rows, policy.frequencies, null);
    const candidate = score(holdout.rows, policy.frequencies, policy.cutoff);
    const ranked = candidate.cases.filter(row => row.status === 'alert')
      .sort((a, b) => b.risk - a.risk || compareIds(a.equipment_id, b.equipment_id) || compareIds(a.id, b.id));
    const selected = ranked.slice(0, map.capacity);
    const scenarioRows = Object.entries(map.scenarios).map(([scenario, closed]) => {
      const inspections = selected.map(row => {
        const id = row.equipment_id;
        const destination = Object.prototype.hasOwnProperty.call(map.equipment_to_node, id) ? map.equipment_to_node[id] : null;
        const route = nodes.has(destination) ? shortestPath(map, destination, closed)
          : {status: 'unmapped', path: null, minutes: null, owner: 'inspection-lead'};
        return {id: row.id, equipment_id: id, destination, ...route};
      });
      return {scenario, closed, inspections};
    });
    const review = candidate.cases.filter(row => row.status === 'review');
    const alertErrors = candidate.cases.filter(row => row.outcome === 'fn' || row.outcome === 'fp');
    return {
      policy_version: policy.version,
      development_version: policy.development_version,
      holdout_version: holdout.version,
      map_version: map.version,
      cutoff: policy.cutoff,
      validation: policy.validation,
      baseline,
      candidate,
      review,
      alertErrors,
      selected,
      waiting: ranked.slice(map.capacity),
      routes: scenarioRows
    };
  }

  return {lock, evaluate};
})();

if (typeof module !== 'undefined' && module.exports) module.exports = faultInspection;
if (typeof window !== 'undefined') window.faultInspection = faultInspection;

if (typeof require !== 'undefined' && require.main === module) {
  const {readFileSync, writeFileSync} = require('node:fs');
  const {createHash} = require('node:crypto');
  const digest = file => createHash('sha256').update(readFileSync(file)).digest('hex');
  const read = file => JSON.parse(readFileSync(file, 'utf8'));
  const write = (file, value) => writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
  const [command, ...paths] = process.argv.slice(2);
  try {
    if (command === 'lock' && paths.length === 2) {
      const [development, policyFile] = paths;
      const policy = faultInspection.lock(read(development));
      write(policyFile, {...policy, development_sha256: digest(development)});
    } else if (command === 'evaluate' && paths.length === 4) {
      const [policyFile, holdout, map, reportFile] = paths;
      const report = faultInspection.evaluate(read(policyFile), read(holdout), read(map));
      write(reportFile, {...report, run: {
        runtime: process.version,
        reference_sha256: digest(__filename),
        policy_sha256: digest(policyFile),
        holdout_sha256: digest(holdout),
        map_sha256: digest(map)
      }});
    } else {
      throw new Error('Usage: node reference.js lock development.json policy.json\n' +
        '       node reference.js evaluate policy.json holdout.json plant-map.json report.json');
    }
  } catch (error) {
    process.stderr.write(error.message + '\n');
    process.exitCode = 1;
  }
}
