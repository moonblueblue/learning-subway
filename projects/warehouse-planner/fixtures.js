'use strict';

const warehouseFixture = (() => {
  const point = (id, x, y) => ({id, x, y});
  const success = (cost, expanded) => ({status: 'ok', cost, expanded});
  const route = {
    start: 'S', goal: 'G', budget: 50,
    nodes: [point('S', 0, 0), point('A', 1, 0), point('B', 0, 1), point('C', 1, 1),
      point('D', 2, 0), point('G', 3, 0), point('X', 0, 2)],
    edges: [['S', 'A', 2], ['S', 'B', 1], ['B', 'C', 1], ['A', 'C', 1],
      ['A', 'D', 2], ['C', 'D', 3], ['D', 'G', 2], ['B', 'X', 1]]
  };
  const reopen = {
    id: 'reopen', start: 'S', goal: 'G', budget: 50,
    nodes: [point('S', 0, 0), point('B', 0, 1), point('A', 1, 0), point('G', 2, 0)],
    edges: [['S', 'A', 5], ['S', 'B', 2], ['B', 'A', 1], ['A', 'G', 5]],
    heuristic: 'table', estimates: {S: 0, A: 0, B: 4, G: 0},
    expected: {ucs: success(8, 3), astar: {...success(8, 4), reopened: 1}}
  };
  const closed = {...route, blocked: [['A', 'D']]};
  const order = {
    ...route,
    tasks: [{id: 'P', at: 'S', minutes: 1}, {id: 'I', at: 'A', minutes: 2},
      {id: 'K', at: 'D', minutes: 1}, {id: 'H', at: 'G', minutes: 1}],
    before: [['P', 'I'], ['I', 'K'], ['K', 'H']]
  };
  const deliver = {status: 'ok', cost: 11, taskOrder: ['P', 'I', 'K', 'H']};
  const repair = {
    ...order, id: 'repair', blocked: closed.blocked,
    prefix: [{task: 'P'}, {move: 'A'}, {task: 'I'}],
    submission: {remainingCost: 6, actions: [{move: 'D'}, {task: 'K'}, {move: 'G'}, {task: 'H'}]},
    expected: {ucs: {status: 'ok', cost: 13, suffixCost: 8},
      astar: {status: 'ok', cost: 13, suffixCost: 8, route: ['A', 'C', 'D', 'G']},
      submission: {code: 'EDGE_BLOCKED'}}
  };
  return {cases: [
    {...route, id: 'open', expected: {ucs: success(6, 6),
      astar: {...success(6, 5), route: ['S', 'A', 'D', 'G']}}},
    {...closed, id: 'closure-manhattan', expected: {ucs: success(7, 6),
      astar: {...success(7, 5), route: ['S', 'B', 'C', 'D', 'G']}}},
    {...closed, id: 'closure-distance', heuristic: 'reverse-distance',
      expected: {ucs: success(7, 6), astar: success(7, 4)}},
    {id: 'equal-parent', start: 'S', goal: 'G', budget: 50,
      nodes: [point('S', 0, 0), point('A', 1, 0), point('B', 0, 1), point('G', 1, 1)],
      edges: [['S', 'A', 1], ['S', 'B', 1], ['A', 'G', 1], ['B', 'G', 1]],
      expected: {ucs: {...success(2, 3), route: ['S', 'A', 'G']},
        astar: {...success(2, 2), route: ['S', 'A', 'G']}}},
    reopen,
    {...route, id: 'cutoff', budget: 3, expected: {astar: {status: 'limit', expanded: 3, code: 'EXPANSION_LIMIT'}}},
    {...route, id: 'isolated', budget: 12, blocked: [['D', 'G']],
      expected: {astar: {status: 'unreachable', expanded: 6, code: 'UNREACHABLE_GOAL'}}},
    {...order, id: 'order', expected: {ucs: deliver, astar: deliver}},
    {...order, id: 'missing-inspection',
      submission: {remainingCost: 9, actions: [{task: 'P'}, {move: 'A'}, {move: 'D'}, {task: 'K'}, {move: 'G'}, {task: 'H'}]},
      expected: {submission: {code: 'MISSING_PREDECESSOR'}}},
    repair,
    {...repair, id: 'cost-mismatch',
      submission: {remainingCost: 7,
        actions: [{move: 'C'}, {move: 'D'}, {task: 'K'}, {move: 'G'}, {task: 'H'}]},
      expected: {submission: {code: 'COST_MISMATCH', suffixCost: 8}}},
    {...order, id: 'cycle', before: [...order.before, ['H', 'P']],
      expected: {ucs: {status: 'impossible', code: 'PRECEDENCE_CYCLE'},
        astar: {status: 'impossible', code: 'PRECEDENCE_CYCLE'}}},
    {...order, id: 'isolated-order', prefix: repair.prefix, blocked: [['A', 'D'], ['D', 'G']],
      expected: {astar: {status: 'unreachable', code: 'UNREACHABLE_WAYPOINTS'}}}
  ]};
})();

if (typeof module === 'object' && module.exports) module.exports = warehouseFixture;
else window.warehouseFixture = warehouseFixture;
