'use strict';

// The browser and Node run the same implementation.
const WarehousePlanner = (() => {
  const compareId = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
  const orderedPair = (a, b) => compareId(a, b) < 0 ? a + ':' + b : b + ':' + a;
  const isId = value => typeof value === 'string' && /^[A-Za-z][A-Za-z0-9_-]{0,19}$/.test(value);
  const isInt = (value, min, max) => Number.isInteger(value) && value >= min && value <= max;
  const has = (object, property) => Object.prototype.hasOwnProperty.call(object, property);

  function requireInput(condition, field) {
    if (!condition) throw new Error('INVALID_INPUT: ' + field);
  }

  class Queue {
    items = [];

    constructor(compare) {
      this.compare = compare;
    }

    push(item) {
      const items = this.items;
      let index = items.length;
      while (index > 0) {
        const parent = (index - 1) >> 1;
        if (this.compare(items[parent], item) <= 0) break;
        items[index] = items[parent];
        index = parent;
      }
      items[index] = item;
    }

    pop() {
      const items = this.items;
      const top = items[0];
      const tail = items.pop();
      if (items.length === 0) return top;
      let index = 0;
      while (2 * index + 1 < items.length) {
        let child = 2 * index + 1;
        if (child + 1 < items.length && this.compare(items[child + 1], items[child]) < 0) child++;
        if (this.compare(tail, items[child]) <= 0) break;
        items[index] = items[child];
        index = child;
      }
      items[index] = tail;
      return top;
    }
  }

  function prepare(input) {
    requireInput(input && typeof input === 'object', 'case');
    const {id, start, goal, nodes, edges, blocked = [], tasks = [], before = [],
      prefix = [], budget = 50, heuristic = 'manhattan'} = input;
    requireInput(isId(id), 'id');
    requireInput(Array.isArray(nodes) && nodes.length >= 1 && nodes.length <= 60, 'nodes (1..60)');
    requireInput(Array.isArray(edges) && edges.length <= 300, 'edges (0..300)');
    requireInput(Array.isArray(tasks) && tasks.length <= 10, 'tasks (0..10)');
    requireInput(Array.isArray(before) && before.length <= 100, 'before (0..100)');
    requireInput(Array.isArray(blocked) && blocked.length <= edges.length, 'blocked');
    requireInput(Array.isArray(prefix) && prefix.length <= 300, 'prefix (0..300)');
    requireInput(isInt(budget, 0, 2000), 'budget (0..2000)');
    requireInput(['manhattan', 'reverse-distance', 'table'].includes(heuristic), 'heuristic');

    const points = new Map();
    for (const node of nodes) {
      requireInput(node && isId(node.id) && !points.has(node.id)
        && isInt(node.x, -100, 100) && isInt(node.y, -100, 100), 'node id/x/y');
      points.set(node.id, node);
    }
    requireInput(points.has(start) && points.has(goal), 'start/goal');
    const graph = new Map([...points.keys()].map(point => [point, new Map()]));
    for (const edge of edges) {
      requireInput(Array.isArray(edge) && edge.length === 3, 'edge [from,to,minutes]');
      const [a, b, minutes] = edge;
      requireInput(a !== b && points.has(a) && points.has(b)
        && isInt(minutes, 1, 1000) && !graph.get(a).has(b), 'edge ' + a + ':' + b);
      graph.get(a).set(b, minutes);
      graph.get(b).set(a, minutes);
    }
    const closures = new Set();
    for (const pair of blocked) {
      requireInput(Array.isArray(pair) && pair.length === 2 && graph.get(pair[0])?.has(pair[1]), 'closed edge');
      closures.add(orderedPair(pair[0], pair[1]));
    }
    const open = new Map([...graph].map(([a, neighbors]) => [a, [...neighbors]
      .filter(([b]) => !closures.has(orderedPair(a, b))).sort(([a], [b]) => compareId(a, b))]));

    const jobs = new Map();
    for (const task of tasks) {
      requireInput(task && isId(task.id) && !jobs.has(task.id)
        && points.has(task.at) && isInt(task.minutes, 1, 1000), 'task id/at/minutes');
      jobs.set(task.id, {...task, dependencies: [], successors: []});
    }
    const sortedJobs = [...jobs.values()].sort((a, b) => compareId(a.id, b.id));
    sortedJobs.forEach((job, i) => { job.bit = 1 << i; });
    for (const pair of before) {
      requireInput(Array.isArray(pair) && pair.length === 2 && pair.every(job => jobs.has(job)), 'before [task,task]');
      const [a, b] = pair;
      if (!jobs.get(b).dependencies.includes(a)) {
        jobs.get(b).dependencies.push(a);
        jobs.get(a).successors.push(b);
      }
    }
    for (const job of sortedJobs) {
      job.dependencies.sort(compareId);
      job.successors.sort(compareId);
      job.requires = job.dependencies.reduce((mask, id) => mask | jobs.get(id).bit, 0);
    }
    return {id, start, goal, points, edges, graph, open, closures, jobs, sortedJobs,
      allDone: (1 << jobs.size) - 1, prefix, budget, heuristic, estimates: input.estimates};
  }

  function precedenceCycle(map) {
    const active = new Set();
    const finished = new Set();
    const path = [];
    function visit(id) {
      if (active.has(id)) return [...path.slice(path.indexOf(id)), id];
      if (finished.has(id)) return null;
      path.push(id);
      active.add(id);
      for (const successor of map.jobs.get(id).successors) {
        const cycle = visit(successor);
        if (cycle) return cycle;
      }
      path.pop();
      active.delete(id);
      finished.add(id);
      return null;
    }
    for (const {id} of map.sortedJobs) {
      const cycle = visit(id);
      if (cycle) return {code: 'PRECEDENCE_CYCLE', cycle, clauses: cycle.slice(1).map((id, i) => [cycle[i], id])};
    }
    return null;
  }

  function doneIds(map, mask) {
    return map.sortedJobs.filter(job => mask & job.bit).map(job => job.id);
  }

  function taskOrder(actions) {
    return actions.filter(action => has(action, 'task')).map(action => action.task);
  }

  function replay(map, first, actions, useClosures) {
    if (!Array.isArray(actions) || actions.length > 5000) return {ok: false, reason: {code: 'INVALID_ACTIONS'}};
    let {at, mask} = first;
    let cost = 0;
    const route = [at];
    for (const [i, action] of actions.entries()) {
      const fail = (code, fields = {}) => ({ok: false, reason: {code, step: i + 1, ...fields}});
      if (!action || typeof action !== 'object' || has(action, 'move') === has(action, 'task')) {
        return fail('INVALID_ACTION');
      }
      if (has(action, 'move')) {
        const to = action.move;
        const minutes = map.graph.get(at).get(to);
        if (minutes === undefined) return fail('EDGE_MISSING', {from: at, to});
        if (useClosures && map.closures.has(orderedPair(at, to))) return fail('EDGE_BLOCKED', {from: at, to});
        cost += minutes;
        at = to;
        route.push(at);
        continue;
      }
      const job = map.jobs.get(action.task);
      if (!job) return fail('UNKNOWN_TASK', {task: action.task});
      if (at !== job.at) return fail('WRONG_TASK_LOCATION', {task: job.id, at, required: job.at});
      if (mask & job.bit) return fail('DUPLICATE_TASK', {task: job.id});
      if ((mask & job.requires) !== job.requires) {
        return fail('MISSING_PREDECESSOR', {
          task: job.id, missing: job.dependencies.filter(id => !(mask & map.jobs.get(id).bit))
        });
      }
      cost += job.minutes;
      mask |= job.bit;
    }
    return {ok: true, at, mask, cost, route};
  }

  function validatePlan(map, first, submission) {
    const suffix = replay(map, first, submission?.actions, true);
    if (!suffix.ok) return {status: 'invalid', reason: suffix.reason};
    const result = {route: suffix.route, completed: doneIds(map, suffix.mask),
      suffixCost: suffix.cost, totalCost: first.cost + suffix.cost};
    const issue = suffix.mask !== map.allDone ? {code: 'TASKS_INCOMPLETE',
      missing: doneIds(map, map.allDone ^ suffix.mask)}
      : suffix.at !== map.goal ? {code: 'WRONG_GOAL', at: suffix.at, required: map.goal}
      : suffix.cost !== submission.remainingCost ? {code: 'COST_MISMATCH',
        claimed: submission.remainingCost ?? null, calculated: suffix.cost} : null;
    return issue ? {status: 'invalid', reason: issue, ...result} : {status: 'valid', ...result};
  }

  function reverseDistances(map) {
    const lengths = new Map([[map.goal, 0]]);
    const pending = new Queue((a, b) => a.cost - b.cost);
    pending.push({id: map.goal, cost: 0});
    while (pending.items.length) {
      const {id, cost} = pending.pop();
      if (cost !== lengths.get(id)) continue;
      for (const [neighbor, minutes] of map.open.get(id)) {
        const total = cost + minutes;
        if (total >= (lengths.get(neighbor) ?? Infinity)) continue;
        lengths.set(neighbor, total);
        pending.push({id: neighbor, cost: total});
      }
    }
    return lengths;
  }

  function heuristicFor(map) {
    const taskMinutes = mask => map.sortedJobs.reduce((sum, job) => sum + (mask & job.bit ? 0 : job.minutes), 0);
    if (map.heuristic !== 'manhattan') {
      const lengths = reverseDistances(map);
      if (map.heuristic === 'reverse-distance') {
        return (at, mask) => (lengths.get(at) ?? 0) + taskMinutes(mask);
      }
      requireInput(map.estimates && typeof map.estimates === 'object', 'estimates');
      for (const id of map.points.keys()) {
        requireInput(has(map.estimates, id) && isInt(map.estimates[id], 0, 100000)
          && map.estimates[id] <= (lengths.get(id) ?? Infinity), 'admissible estimates.' + id);
      }
      return (at, mask) => map.estimates[at] + taskMinutes(mask);
    }
    function distance(a, b) {
      const left = map.points.get(a);
      const right = map.points.get(b);
      return Math.abs(left.x - right.x) + Math.abs(left.y - right.y);
    }
    // Use an integer cost floor per grid unit, even if an input edge spans multiple units.
    const ratios = map.edges.filter(([a, b]) => distance(a, b) > 0)
      .map(([a, b, cost]) => Math.floor(cost / distance(a, b)));
    const scale = ratios.length ? Math.min(...ratios) : 0;
    return (at, mask) => scale * distance(at, map.goal) + taskMinutes(mask);
  }

  function unreachableReason(map, first) {
    const seen = new Set([first.at]);
    const frontier = [first.at];
    for (const at of frontier) {
      for (const [next] of map.open.get(at)) {
        if (seen.has(next)) continue;
        seen.add(next);
        frontier.push(next);
      }
    }
    const tasks = map.sortedJobs.filter(job => !(first.mask & job.bit) && !seen.has(job.at))
      .map(job => ({task: job.id, at: job.at}));
    const goal = seen.has(map.goal) ? null : map.goal;
    return tasks.length ? {code: 'UNREACHABLE_WAYPOINTS', tasks, goal} : {code: 'UNREACHABLE_GOAL', goal};
  }

  function search(map, first, estimate) {
    const key = (at, mask) => at + ':' + mask;
    const queue = new Queue((a, b) => a.f - b.f || a.h - b.h || compareId(a.key, b.key));
    const best = new Map();
    const expandedBefore = new Set();
    const trace = [];
    const stats = {expanded: 0, reopened: 0, stale: 0};
    function propose(at, mask, g, parent, action) {
      const id = key(at, mask);
      if (g >= (best.get(id) ?? Infinity)) return;
      best.set(id, g);
      const h = estimate(at, mask);
      queue.push({key: id, at, mask, g, h, f: g + h, parent, action});
    }
    propose(first.at, first.mask, 0, null, null);
    while (queue.items.length) {
      const current = queue.pop();
      const {at, mask, g, h, f} = current;
      if (g !== best.get(current.key)) {
        stats.stale++;
        continue;
      }
      if (at === map.goal && mask === map.allDone) {
        const actions = [];
        for (let entry = current; entry.parent; entry = entry.parent) actions.push(entry.action);
        actions.reverse();
        const checked = validatePlan(map, first, {actions, remainingCost: g});
        if (checked.status !== 'valid') throw new Error('INTERNAL_INVALID_PLAN');
        return {...stats, status: 'ok', cost: checked.totalCost, suffixCost: g,
          route: checked.route, taskOrder: taskOrder([...map.prefix, ...actions]), actions, trace};
      }
      if (stats.expanded === map.budget) {
        return {...stats, status: 'limit', reason: {code: 'EXPANSION_LIMIT', budget: map.budget,
          next: {at, completed: doneIds(map, mask), g, h, f}}, trace};
      }
      stats.expanded++;
      if (expandedBefore.has(current.key)) stats.reopened++;
      expandedBefore.add(current.key);
      trace.push({at, completed: doneIds(map, mask), g, h, f});
      for (const [next, minutes] of map.open.get(at)) propose(next, mask, g + minutes, current, {move: next});
      for (const job of map.sortedJobs) {
        if (job.at === at && !(mask & job.bit) && (mask & job.requires) === job.requires) {
          propose(at, mask | job.bit, g + job.minutes, current, {task: job.id});
        }
      }
    }
    return {...stats, status: 'unreachable', reason: unreachableReason(map, first), trace};
  }

  function checkExpected(expected, result) {
    const checks = [];
    for (const [section, fields] of Object.entries(expected ?? {})) {
      requireInput(['ucs', 'astar', 'submission'].includes(section), 'expected section');
      for (const [name, wanted] of Object.entries(fields)) {
        const actual = name === 'code' ? result[section]?.reason?.code : result[section]?.[name];
        checks.push({kind: 'fixed-answer', field: section + '.' + name, expected: wanted, actual: actual ?? null,
          pass: JSON.stringify(actual) === JSON.stringify(wanted)});
      }
    }
    if (result.ucs.status === 'ok' && result.astar.status === 'ok') {
      checks.push({kind: 'algorithm-agreement', field: 'equal-optimal-cost', expected: result.ucs.cost, actual: result.astar.cost,
        pass: result.ucs.cost === result.astar.cost});
    }
    return checks;
  }

  function checkSummary(checks) {
    const fixedChecks = checks.filter(check => check.kind === 'fixed-answer').length;
    const comparisonChecks = checks.length - fixedChecks;
    return {
      validation: {
        kind: fixedChecks ? 'fixed-answer' : comparisonChecks ? 'algorithm-agreement' : 'ungraded',
        fixedChecks,
        comparisonChecks
      },
      passed: checks.length ? checks.every(check => check.pass) : null
    };
  }

  function runCase(input) {
    const map = prepare(input);
    const cycle = precedenceCycle(map);
    const first = cycle ? null : replay(map, {at: map.start, mask: 0}, map.prefix, false);
    const reason = cycle ?? (first.ok ? null : {code: 'INVALID_PREFIX', cause: first.reason});
    const failure = reason ? {status: 'impossible', expanded: 0, reopened: 0, stale: 0, reason, trace: []} : null;
    const result = {id: map.id, budget: map.budget, heuristic: map.heuristic,
      prefix: reason ? null : {at: first.at, completed: doneIds(map, first.mask), cost: first.cost, route: first.route},
      ucs: failure ?? search(map, first, () => 0),
      astar: failure ?? search(map, first, heuristicFor(map))};
    if (!reason && has(input, 'submission')) result.submission = validatePlan(map, first, input.submission);
    result.checks = checkExpected(input.expected, result);
    return {...result, ...checkSummary(result.checks)};
  }

  function run(input, caseId) {
    const cases = input?.cases;
    requireInput(Array.isArray(cases) && cases.length > 0 && cases.length <= 24, 'cases (1..24)');
    requireInput(new Set(cases.map(item => item?.id)).size === cases.length, 'unique case ids');
    const selected = caseId ? cases.filter(item => item?.id === caseId) : cases;
    requireInput(selected.length > 0, 'case id');
    const results = selected.map(runCase);
    const summary = checkSummary(results.flatMap(row => row.checks));
    return {format: 'warehouse-planner-v1',
      rules: {ucs: 'g, state id', astar: 'g+h, h, state id', equalCost: 'keep first parent',
        expansion: 'non-stale pop whose successors are enumerated, excluding the goal'},
      ...summary, cases: results};
  }

  return {run};
})();

if (typeof module === 'object' && module.exports) {
  module.exports = WarehousePlanner;
  if (require.main === module) {
    const [path, caseId] = process.argv.slice(2);
    if (!path) {
      console.error('Usage: node planner.js warehouse-input.json [case-id]');
      process.exitCode = 2;
    } else {
      try {
        const input = JSON.parse(require('node:fs').readFileSync(path, 'utf8'));
        const report = WarehousePlanner.run(input, caseId);
        process.stdout.write(JSON.stringify(report, null, 2) + '\n');
        if (report.passed === false) process.exitCode = 1;
      } catch (error) {
        console.error(error.message);
        process.exitCode = 2;
      }
    }
  }
} else {
  window.WarehousePlanner = WarehousePlanner;
}
