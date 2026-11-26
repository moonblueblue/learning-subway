/* Run locally: node motion-policy.js motion-input.json > motion-report.json */
(function motionPolicyRuntime() {
  'use strict';
  const actions = [
    {name: 'E', dx: 1, dy: 0},
    {name: 'S', dx: 0, dy: 1},
    {name: 'W', dx: -1, dy: 0},
    {name: 'N', dx: 0, dy: -1},
  ];
  const fields = ['step', 'collision', 'goal', 'beacon'];
  const settings = {trainSeed: 20261126, tickMs: 100, range: 2, slipProbability: 0.04, alpha: 0.3, gamma: 0.92};

  function validate(input) {
    const ids = new Set();
    const int = (v, min, max) => Number.isInteger(v) && v >= min && v <= max;
    if (!input || input.version !== 1 || !int(input.episodes, 1, 6000) ||
        !int(input.maxSteps, 3, 60) || !int(input.sensorTimeout, 1, input.maxSteps - 1) ||
        !int(input.faultAt, 0, input.maxSteps - input.sensorTimeout - 1)) {
      throw new Error('version / episodes / maxSteps / sensorTimeout / faultAt');
    }
    if (!Array.isArray(input.seeds) || !int(input.seeds.length, 1, 8) ||
        new Set(input.seeds).size !== input.seeds.length ||
        input.seeds.some(seed => !int(seed, 0, 0xffffffff))) {
      throw new Error('seeds');
    }
    for (const key of ['reward', 'revisedReward']) {
      if (!input[key] || fields.some(name => !Number.isFinite(input[key][name]) || Math.abs(input[key][name]) > 1000)) {
        throw new Error(key);
      }
    }
    function split(key) {
      if (!Array.isArray(input[key]) || !int(input[key].length, 1, 6)) throw new Error(key);
      return input[key].map((map, i) => {
        const name = key + '[' + i + ']';
        if (!map || typeof map.id !== 'string' || !/^[A-Za-z0-9_-]{1,24}$/.test(map.id) ||
            ids.has(map.id) || !Array.isArray(map.grid) || !int(map.grid.length, 2, 12) ||
            map.grid.some(row => typeof row !== 'string' || !/^[#.SGB]{2,12}$/.test(row) || row.length !== map.grid[0].length)) {
          throw new Error(name);
        }
        ids.add(map.id);
        const flat = map.grid.join('');
        if ((flat.match(/S/g) || []).length !== 1 || (flat.match(/G/g) || []).length !== 1) {
          throw new Error(name + ' · S / G');
        }
        const width = map.grid[0].length;
        const locate = tile => {
          const index = flat.indexOf(tile);
          return {x: index % width, y: Math.floor(index / width)};
        };
        return {id: map.id, grid: map.grid, start: locate('S'), goal: locate('G')};
      });
    }
    const train = split('train');
    const test = split('test');
    for (const trial of test) {
      const reused = train.find(map => map.grid.join('\n') === trial.grid.join('\n'));
      if (reused) throw new Error(trial.id + ' = ' + reused.id + ' (train/test grid)');
    }
    return {train, test};
  }

  function random(seed) {
    let value = seed >>> 0;
    return () => {
      value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
      return value / 4294967296;
    };
  }

  function tile(map, x, y) {
    return map.grid[y]?.[x] ?? '#';
  }

  function observe(map, position) {
    return {
      dx: map.goal.x - position.x,
      dy: map.goal.y - position.y,
      ranges: actions.map(action => {
        let clear = 0;
        while (clear < settings.range && tile(map, position.x + action.dx * (clear + 1),
          position.y + action.dy * (clear + 1)) !== '#') clear++;
        return clear;
      }),
    };
  }

  function key(observation) {
    return [observation.dx, observation.dy, ...observation.ranges].join(',');
  }

  function best(values) {
    return values.reduce((index, value, i) => value > values[index] ? i : index, 0);
  }

  function baseline(observation) {
    let bestAction = -1;
    let bestDistance = Math.abs(observation.dx) + Math.abs(observation.dy);
    for (const [i, action] of actions.entries()) {
      const distance = Math.abs(observation.dx - action.dx) + Math.abs(observation.dy - action.dy);
      if (observation.ranges[i] && distance < bestDistance) {
        bestAction = i;
        bestDistance = distance;
      }
    }
    return bestAction;
  }

  function move(map, from, command, roll) {
    if (command < 0) return {to: from, collision: false, slipped: false, goal: false, beacon: false};
    const slipped = roll < settings.slipProbability;
    const action = actions[command];
    const x = from.x + action.dx;
    const y = from.y + action.dy;
    const target = tile(map, x, y);
    const collision = !slipped && target === '#';
    const moved = !slipped && !collision;
    return {
      to: moved ? {x, y} : from, collision, slipped,
      goal: moved && target === 'G', beacon: moved && target === 'B',
    };
  }

  function score(outcome, reward) {
    return reward.step + (outcome.collision ? reward.collision : 0) +
      (outcome.goal ? reward.goal : 0) + (outcome.beacon ? reward.beacon : 0);
  }

  function trainPolicy(input, maps, reward) {
    const rng = random(settings.trainSeed);
    const table = new Map();
    function values(observation) {
      const index = key(observation);
      if (!table.has(index)) table.set(index, [0, 0, 0, 0]);
      return table.get(index);
    }
    for (let episode = 0; episode < input.episodes; episode++) {
      const map = maps[episode % maps.length];
      const epsilon = 0.3 - 0.25 * episode / input.episodes;
      let position = map.start;
      for (let step = 0; step < input.maxSteps; step++) {
        const state = values(observe(map, position));
        const command = rng() < epsilon ? Math.floor(rng() * actions.length) : best(state);
        const outcome = move(map, position, command, rng());
        const terminal = outcome.goal || step + 1 === input.maxSteps;
        const target = score(outcome, reward) + (terminal ? 0 : settings.gamma * Math.max(...values(observe(map, outcome.to))));
        state[command] += settings.alpha * (target - state[command]);
        position = outcome.to;
        if (outcome.goal) break;
      }
    }
    return Object.fromEntries(Array.from(table).sort(([a], [b]) => a < b ? -1 : Number(a > b)));
  }

  function run(input, map, seed, policy, table, fault) {
    const rng = random(seed);
    const trace = [];
    let position = map.start;
    let lastObservation = null;
    let sampleTick = null;
    let reason = 'limit';
    let originalScore = 0;
    let revisedScore = 0;
    let collisions = 0;
    for (let tick = 0; tick < input.maxSteps; tick++) {
      const fresh = !fault || tick < input.faultAt;
      if (fresh) {
        lastObservation = observe(map, position);
        sampleTick = tick;
      }
      const age = sampleTick === null ? null : tick - sampleTick;
      const unsafe = age === null || age >= input.sensorTimeout;
      const learned = !unsafe && table ? table[key(lastObservation)] : null;
      const command = unsafe ? -1 : learned ? best(learned) : baseline(lastObservation);
      const roll = rng();
      const outcome = move(map, position, command, roll);
      const originalReward = score(outcome, input.reward);
      const revisedReward = score(outcome, input.revisedReward);
      originalScore += originalReward;
      revisedScore += revisedReward;
      collisions += Number(outcome.collision);
      trace.push({
        tick, timeMs: tick * settings.tickMs, sampleMs: sampleTick === null ? null : sampleTick * settings.tickMs,
        ageMs: age === null ? null : age * settings.tickMs, fresh, observation: lastObservation,
        from: position, action: command < 0 ? 'STOP' : actions[command].name, to: outcome.to,
        source: unsafe ? 'watchdog' : learned ? 'q-table' : table ? 'unseen-fallback' : 'rule',
        roll, collision: outcome.collision, slipped: outcome.slipped, goal: outcome.goal, beacon: outcome.beacon,
        originalReward, revisedReward,
      });
      position = outcome.to;
      if (outcome.goal || command < 0) {
        reason = outcome.goal ? 'goal' : unsafe ? 'sensor-stop' : 'rule-stop';
        break;
      }
    }
    return {policy, reason, success: reason === 'goal', collisions, originalScore, revisedScore,
      steps: trace.length, trace, terminal: position};
  }

  function evaluate(input) {
    const {train, test} = validate(input);
    const original = trainPolicy(input, train, input.reward);
    const revised = trainPolicy(input, train, input.revisedReward);
    const cases = [];
    for (const map of test) {
      for (const seed of input.seeds) {
        for (const fault of [false, true]) {
          cases.push({
            id: map.id + '/' + seed + '/' + (fault ? 'dropout' : 'normal'),
            map, seed, fault, faultAtMs: fault ? input.faultAt * settings.tickMs : null,
            timeoutMs: input.sensorTimeout * settings.tickMs,
            runs: [
              run(input, map, seed, 'rule', null, fault),
              run(input, map, seed, 'original', original, fault),
              run(input, map, seed, 'revised', revised, fault),
            ],
          });
        }
      }
    }
    const normal = cases.filter(trial => !trial.fault);
    const summary = ['rule', 'original', 'revised'].map((policy, i) => {
      const sampled = normal.map(trial => trial.runs[i]);
      return {
        policy, trials: sampled.length,
        successes: sampled.filter(run => run.success).length,
        runsWithCollision: sampled.filter(run => run.collisions > 0).length,
        collisions: sampled.reduce((sum, run) => sum + run.collisions, 0),
        steps: sampled.reduce((sum, run) => sum + run.steps, 0),
      };
    });
    return {version: 1, input, settings, actions: actions.map(action => action.name), trainingMapIds: train.map(map => map.id),
      policyTables: {original, revised}, cases, summary};
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = {evaluate, validate};
    if (require.main === module) {
      try {
        const input = JSON.parse(require('node:fs').readFileSync(process.argv[2], 'utf8'));
        process.stdout.write(JSON.stringify(evaluate(input), null, 2) + '\n');
      } catch (error) {
        process.stderr.write(error.message + '\n');
        process.exitCode = 1;
      }
    }
  } else {
    window.motionPolicy = {evaluate, source: () => '(' + motionPolicyRuntime.toString() + ')();\n'};
  }
})();
