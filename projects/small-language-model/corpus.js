/* Original synthetic examples for Learning Subway, released under CC0 1.0. */
globalThis.smallLanguageModelInput = {
  train: [
    "red fox trots home",
    "red fox waits home",
    "red fox naps here",
    "red fox rests here",
    "blue bird sings softly",
    "blue bird chirps softly",
    "blue bird hops away",
    "blue bird flies away",
    "green frog jumps high",
    "green frog leaps high",
    "green frog swims slowly",
    "green frog dives slowly"
  ],
  test: [
    "red fox sings here",
    "blue bird trots away",
    "green frog naps high",
    "amber bird waits outdoors"
  ],
  prompt: "red fox",
  alternatePrompt: "red bird",
  comparePosition: 1,
  probes: [
    {name: "red", prompt: "red", expectedFirst: "fox"},
    {name: "blue", prompt: "blue", expectedFirst: "bird"},
    {name: "amber", prompt: "amber", expectedFirst: "bird"}
  ],
  config: {seed: 412, steps: 300, batchSize: 8, contextSize: 2, hiddenSize: 12, learningRate: 0.16, maxNewTokens: 6}
};
