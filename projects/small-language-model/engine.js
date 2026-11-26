/* A dependency-free model and runner factory. Its source is also downloadable from file://. */
function createSmallLanguageModel() {
  "use strict";
  const BOS = 0;
  const EOS = 1;
  const UNK = 2;
  const special = ["<BOS>", "<EOS>", "<UNK>"];
  const limits = {
    seed: [0, 0xffffffff], steps: [2, 800], batchSize: [1, 24],
    contextSize: [1, 5], hiddenSize: [2, 32], learningRate: [0.001, 0.5], maxNewTokens: [1, 20]
  };
  const words = (text) => text.normalize("NFC").trim().split(/\s+/u).filter(Boolean);
  const fail = (message) => { throw new Error(message); };

  function readInput(value) {
    if (!value || typeof value !== "object") fail("Expected a JSON input object.");
    function checkText(text, maximum, allowEmpty = false) {
      const tokens = typeof text === "string" && text.length <= 1200 ? words(text) : [];
      if (typeof text !== "string" || text.length > 1200 ||
          (!allowEmpty && !tokens.length) || tokens.length > maximum ||
          tokens.some((token) => token.length > 45 || special.includes(token))) {
        fail("Text exceeds the token limit or contains a reserved token.");
      }
      return tokens;
    }
    for (const split of ["train", "test"]) {
      if (!Array.isArray(value[split]) || !value[split].length || value[split].length > 32) {
        fail("Each split needs 1 to 32 documents.");
      }
      value[split].forEach((document) => checkText(document, 32));
    }
    const train = value.train.slice();
    const test = value.test.slice();
    const trainingTexts = new Set(train.map((document) => words(document).join(" ")));
    if (test.some((document) => trainingTexts.has(words(document).join(" ")))) {
      fail("Train and test share an identical normalized document.");
    }
    const config = {};
    for (const [name, [lowest, highest]] of Object.entries(limits)) {
      const number = value.config?.[name];
      if (!Number.isFinite(number) || number < lowest || number > highest ||
          (name !== "learningRate" && !Number.isInteger(number))) {
        fail("Invalid configuration: " + name + ".");
      }
      config[name] = number;
    }
    const prompt = value.prompt;
    const alternatePrompt = value.alternatePrompt;
    const primaryWords = checkText(prompt, 32, true);
    const alternateWords = checkText(alternatePrompt, 32, true);
    const comparePosition = value.comparePosition;
    if (!Number.isInteger(comparePosition) || comparePosition < 0 ||
        comparePosition >= primaryWords.length || comparePosition >= alternateWords.length ||
        primaryWords.slice(0, comparePosition).some((token, index) => token !== alternateWords[index]) ||
        primaryWords.slice(comparePosition).join(" ") === alternateWords.slice(comparePosition).join(" ")) {
      fail("Use the same prefix through the selected position and change at least one later token.");
    }
    const probes = value.probes ?? [];
    if (!Array.isArray(probes) || probes.length > 8) fail("Use up to eight generation probes.");
    const checkedProbes = probes.map((probe) => {
      if (!probe || typeof probe.name !== "string" || !probe.name.trim() || probe.name.length > 35) {
        fail("A probe needs a short name.");
      }
      checkText(probe.prompt, 32, true);
      if (probe.expectedFirst !== undefined && checkText(probe.expectedFirst, 1).join(" ") !== probe.expectedFirst) {
        fail("A probe's expected first token must be one word.");
      }
      return {name: probe.name, prompt: probe.prompt, ...(probe.expectedFirst === undefined ? {} : {expectedFirst: probe.expectedFirst})};
    });
    return {train, test, prompt, alternatePrompt, comparePosition, ...(value.probes === undefined ? {} : {probes: checkedProbes}), config};
  }

  function prepare(input) {
    const vocabulary = [...special, ...new Set(input.train.flatMap(words))];
    const {hiddenSize, contextSize, batchSize, steps} = input.config;
    if (vocabulary.length > 96 || steps * batchSize * hiddenSize * vocabulary.length > 8000000) {
      fail("The vocabulary or training configuration exceeds the local work budget.");
    }
    const ids = new Map(vocabulary.map((token, index) => [token, index]));
    const encode = (document, closed) => [BOS, ...words(document).map((token) => ids.get(token) ?? UNK), ...(closed ? [EOS] : [])];
    function split(documents) {
      return documents.map((document) => encode(document, true));
    }
    function pairs(documents) {
      return documents.flatMap((tokens, document) => tokens.slice(1).map((target, index) => ({
        document, position: index + 1, context: tokens.slice(Math.max(0, index + 1 - contextSize), index + 1), target
      })));
    }
    const train = split(input.train);
    const test = split(input.test);
    return {vocabulary, encode, train, test, trainPairs: pairs(train), testPairs: pairs(test)};
  }

  // Mulberry32 with an explicit unsigned state. One draw advances the batch sequence once.
  function nextRandom(random) {
    random.value = (random.value + 0x6D2B79F5) >>> 0;
    let mixed = Math.imul(random.value ^ (random.value >>> 15), 1 | random.value);
    mixed ^= mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed);
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  }

  function createBigram(documents, size) {
    const counts = Array.from({length: size}, () => Array(size).fill(0));
    const totals = Array(size).fill(0);
    for (const tokens of documents) {
      for (let position = 1; position < tokens.length; position++) {
        const previous = tokens[position - 1];
        counts[previous][tokens[position]]++;
        totals[previous]++;
      }
    }
    return (context) => {
      const previous = context.at(-1);
      const denominator = totals[previous] + size - 1;
      return counts[previous].slice(1).map((count) => (count + 1) / denominator);
    };
  }

  function fingerprint(value) {
    const text = JSON.stringify(value);
    let hash = 2166136261;
    for (let index = 0; index < text.length; index++) {
      hash = Math.imul(hash ^ text.charCodeAt(index), 16777619);
    }
    return (hash >>> 0).toString(16).padStart(8, "0");
  }

  function initialize(config, size) {
    const {seed, hiddenSize, contextSize} = config;
    const random = {value: seed};
    const weights = (length, radius) => Array.from({length: length}, () => (nextRandom(random) * 2 - 1) * radius);
    const values = {
      context: weights(contextSize * size * hiddenSize, 0.15),
      hiddenBias: Array(hiddenSize).fill(0),
      output: weights((size - 1) * hiddenSize, 0.15),
      outputBias: Array(size - 1).fill(0)
    };
    return {step: 0, rngState: random.value, history: [], weights: values};
  }

  function neuralForward(context, weights, size, hiddenSize) {
    const hidden = weights.hiddenBias.slice();
    for (let offset = 0; offset < context.length; offset++) {
      const token = context[context.length - 1 - offset];
      const start = (offset * size + token) * hiddenSize;
      for (let unit = 0; unit < hiddenSize; unit++) hidden[unit] += weights.context[start + unit];
    }
    for (let unit = 0; unit < hiddenSize; unit++) hidden[unit] = Math.tanh(hidden[unit]);
    const logits = weights.outputBias.map((bias, row) => {
      let score = bias;
      for (let unit = 0; unit < hiddenSize; unit++) score += hidden[unit] * weights.output[row * hiddenSize + unit];
      return score;
    });
    const max = Math.max(...logits);
    const exponentials = logits.map((logit) => Math.exp(logit - max));
    const denominator = exponentials.reduce((sum, entry) => sum + entry, 0);
    return {hidden, probabilities: exponentials.map((entry) => entry / denominator)};
  }

  function trainTo(state, stop, config, prepared) {
    const {batchSize, hiddenSize, learningRate} = config;
    const size = prepared.vocabulary.length;
    const pairs = prepared.trainPairs;
    const weights = state.weights;
    const random = {value: state.rngState};
    while (state.step < stop) {
      const gradients = Object.fromEntries(Object.entries(weights).map(([name, values]) => [name, Array(values.length).fill(0)]));
      const batch = [];
      let loss = 0;
      for (let sample = 0; sample < batchSize; sample++) {
        const index = Math.floor(nextRandom(random) * pairs.length);
        batch.push(index);
        const {context, target} = pairs[index];
        const {hidden, probabilities} = neuralForward(context, weights, size, hiddenSize);
        loss -= Math.log(probabilities[target - 1]);
        const hiddenGradient = Array(hiddenSize).fill(0);
        for (let row = 0; row < probabilities.length; row++) {
          const error = probabilities[row] - Number(target === row + 1);
          gradients.outputBias[row] += error;
          for (let unit = 0; unit < hiddenSize; unit++) {
            const offset = row * hiddenSize + unit;
            gradients.output[offset] += error * hidden[unit];
            hiddenGradient[unit] += error * weights.output[offset];
          }
        }
        for (let unit = 0; unit < hiddenSize; unit++) {
          const change = hiddenGradient[unit] * (1 - hidden[unit] * hidden[unit]);
          gradients.hiddenBias[unit] += change;
          for (let offset = 0; offset < context.length; offset++) {
            const token = context[context.length - 1 - offset];
            gradients.context[(offset * size + token) * hiddenSize + unit] += change;
          }
        }
      }
      for (const [name, values] of Object.entries(weights)) {
        for (let index = 0; index < values.length; index++) values[index] -= learningRate / batchSize * gradients[name][index];
      }
      state.step++;
      state.history.push({step: state.step, batch, meanNll: loss / batchSize});
    }
    state.rngState = random.value;
    return state;
  }

  function verifyCheckpoint(checkpoint, signature, initial, config, pairCount) {
    const validState = checkpoint && checkpoint.version === 1 && checkpoint.signature === signature &&
      Number.isInteger(checkpoint.step) && checkpoint.step >= 0 && checkpoint.step <= config.steps &&
      Number.isInteger(checkpoint.rngState) && checkpoint.rngState >= 0 && checkpoint.rngState <= 0xffffffff &&
      Array.isArray(checkpoint.history) && checkpoint.history.length === checkpoint.step &&
      checkpoint.history.every((item, index) => item && item.step === index + 1 && Number.isFinite(item.meanNll) &&
        Array.isArray(item.batch) && item.batch.length === config.batchSize &&
        item.batch.every((draw) => Number.isInteger(draw) && draw >= 0 && draw < pairCount)) &&
      checkpoint.weights && Object.entries(initial.weights).every(([name, values]) =>
        Array.isArray(checkpoint.weights[name]) && checkpoint.weights[name].length === values.length &&
        checkpoint.weights[name].every((number) => Number.isFinite(number) && Math.abs(number) <= 1000));
    if (!validState) fail("Checkpoint contents do not match this training input.");
    const {step, rngState} = checkpoint;
    const history = checkpoint.history.map(({step, batch, meanNll}) => ({step, batch: batch.slice(), meanNll}));
    const weights = Object.fromEntries(Object.keys(initial.weights).map((name) => [name, checkpoint.weights[name].slice()]));
    return {step, rngState, history, weights};
  }

  function evaluate(pairs, predict) {
    const predictions = pairs.map((pair) => {
      const probability = predict(pair.context)[pair.target - 1];
      return {...pair, probability, nll: -Math.log(probability)};
    });
    const tokenCount = predictions.length;
    const totalNll = predictions.reduce((sum, row) => sum + row.nll, 0);
    const meanNll = totalNll / tokenCount;
    return {tokenCount, totalNll, meanNll, perplexity: Math.exp(meanNll), predictions};
  }

  function compareSuffix(input, prepared, predict) {
    const {encode, vocabulary} = prepared;
    const left = encode(input.prompt, false);
    const right = encode(input.alternatePrompt, false);
    const {comparePosition: position, config: {contextSize}} = input;
    const distributionAt = (encoded) => predict(encoded.slice(Math.max(0, position + 1 - contextSize), position + 1));
    const leftDistribution = distributionAt(left);
    const rightDistribution = distributionAt(right);
    const maxDifference = Math.max(...leftDistribution.map((entry, index) => Math.abs(entry - rightDistribution[index])));
    return {position, left, right, candidateIds: vocabulary.slice(1).map((_, index) => index + 1),
      leftDistribution, rightDistribution, maxDifference, encodedSuffixDiffers: left.join(",") !== right.join(",")};
  }

  function generate(prompt, policy, input, prepared, predict) {
    const {contextSize, maxNewTokens, seed} = input.config;
    const {encode, vocabulary} = prepared;
    const random = {value: (seed ^ 0x9e3779b9) >>> 0};
    const ids = encode(prompt, false);
    const newTokens = [];
    const trace = [];
    let stop = "length";
    for (let step = 0; step < maxNewTokens; step++) {
      const context = ids.slice(-contextSize);
      const distribution = predict(context);
      const uniform = policy === "sample" ? nextRandom(random) : null;
      let winner = 0;
      if (uniform === null) {
        for (let index = 1; index < distribution.length; index++) {
          if (distribution[index] > distribution[winner]) winner = index;
        }
      } else {
        let cumulative = distribution[0];
        while (cumulative <= uniform && winner + 1 < distribution.length) cumulative += distribution[++winner];
      }
      const tokenId = winner + 1;
      trace.push({step: step + 1, context, uniform, distribution, tokenId, probability: distribution[winner]});
      if (tokenId === EOS) { stop = "EOS"; break; }
      newTokens.push(tokenId);
      ids.push(tokenId);
    }
    return {prompt, policy, newTokens, text: newTokens.map((token) => vocabulary[token]).join(" "), stop, trace};
  }

  function run(value, suppliedCheckpoint) {
    const input = readInput(value);
    const prepared = prepare(input);
    const {config} = input;
    const {vocabulary} = prepared;
    const {steps, hiddenSize, seed, learningRate, batchSize, contextSize} = config;
    const signature = fingerprint({train: input.train, seed, learningRate, batchSize, contextSize, hiddenSize});
    const fresh = () => initialize(config, vocabulary.length);
    const continuous = trainTo(fresh(), steps, config, prepared);
    const halfway = trainTo(fresh(), Math.floor(steps / 2), config, prepared);
    const checkpoint = {version: 1, signature, ...halfway};
    const resume = verifyCheckpoint(suppliedCheckpoint ?? checkpoint, signature, fresh(), config, prepared.trainPairs.length);
    const resumeFrom = resume.step;
    const restored = trainTo(resume, steps, config, prepared);
    const maxWeightDifference = Math.max(...Object.entries(continuous.weights).flatMap(([name, values]) =>
      values.map((number, index) => Math.abs(number - restored.weights[name][index]))));
    const tolerance = 1e-8;
    const sameRngState = continuous.rngState === restored.rngState;
    const sameBatches = continuous.history.every((update, index) =>
      update.batch.every((draw, slot) => draw === restored.history[index].batch[slot]));
    const maxLossDifference = Math.max(...continuous.history.map((update, index) =>
      Math.abs(update.meanNll - restored.history[index].meanNll)));
    const sameTrajectory = sameBatches && maxLossDifference === 0;
    const withinTolerance = sameBatches && sameRngState && maxWeightDifference <= tolerance && maxLossDifference <= tolerance;
    const predict = (context) => neuralForward(context, restored.weights, vocabulary.length, hiddenSize).probabilities;
    const bigram = evaluate(prepared.testPairs, createBigram(prepared.train, vocabulary.length));
    const neural = evaluate(prepared.testPairs, predict);
    const generation = {
      samplingSeed: (config.seed ^ 0x9e3779b9) >>> 0,
      greedy: generate(input.prompt, "greedy", input, prepared, predict),
      sample: generate(input.prompt, "sample", input, prepared, predict),
      probes: (input.probes ?? []).map(({name, prompt, expectedFirst}) => {
        const greedy = generate(prompt, "greedy", input, prepared, predict);
        const sample = generate(prompt, "sample", input, prepared, predict);
        return {name, expectedFirst: expectedFirst ?? null, greedy, sample, firstTokenMatches:
          expectedFirst === undefined ? null : vocabulary[greedy.trace[0].tokenId] === expectedFirst};
      })
    };
    const report = {
      version: 1, config, tokenizer: {vocabulary, trainingOnly: true, bosId: BOS, eosId: EOS, unknownId: UNK,
        outputIds: vocabulary.slice(1).map((_, index) => index + 1)},
      corpus: {train: prepared.train, test: prepared.test},
      models: {bigram: {...bigram, smoothing: 1}, neural: {...neural, architecture: "causal-window-tanh-mlp",
        parameterCount: Object.values(restored.weights).reduce((sum, values) => sum + values.length, 0)}},
      budget: {steps, stepsResumed: steps - resumeFrom, batchSize: config.batchSize, trainingTargets: prepared.trainPairs.length,
        processedTargets: steps * config.batchSize, sampling: "with replacement", optimizer: "mini-batch SGD"},
      causality: compareSuffix(input, prepared, predict), generation,
      checkpoint: {savedStep: halfway.step, restoredFrom: resumeFrom, trainingSignature: signature,
        maxWeightDifference, maxLossDifference, sameTrajectory, sameBatches, sameRngState, withinTolerance, tolerance,
        nextBatch: continuous.history[resumeFrom]?.batch ?? null, restoredNextBatch: restored.history[resumeFrom]?.batch ?? null,
        finalWeightFingerprint: fingerprint(restored.weights), referenceWeightFingerprint: fingerprint(continuous.weights)},
      history: restored.history
    };
    return {input, report, checkpoint, model: {version: 1, signature, ...restored}};
  }

  function cli() {
    const fs = require("node:fs");
    const [inputFile, ...args] = process.argv.slice(2);
    const checkpointFile = args[0] && args[0] !== "--save-checkpoint" ? args.shift() : undefined;
    const savePath = args.length === 2 && args[0] === "--save-checkpoint" ? args[1] : undefined;
    if (!inputFile || (args.length && !savePath)) {
      fail("Usage: node small-language-model-runner.js input.json [checkpoint.json] [--save-checkpoint path.json]");
    }
    const read = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
    const result = run(read(inputFile), checkpointFile ? read(checkpointFile) : undefined);
    if (savePath) fs.writeFileSync(savePath, JSON.stringify(result.checkpoint, null, 2) + "\n");
    process.stdout.write(JSON.stringify(result.report, null, 2) + "\n");
  }

  return {run, cli, source: () => '"use strict";\n' + createSmallLanguageModel.toString() + "\ncreateSmallLanguageModel().cli();\n"};
}

if (typeof module === "object" && module.exports) module.exports = createSmallLanguageModel();
else globalThis.SmallLanguageModel = createSmallLanguageModel();
