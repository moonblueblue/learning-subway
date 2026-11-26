(() => {
  "use strict";
  const get = (id) => document.getElementById("lm-" + id);
  const t = (message) => window.courseI18n?.translate(message) ?? message;
  const dialog = get("dialog");
  const initialText = JSON.stringify(globalThis.smallLanguageModelInput, null, 2);
  const engine = globalThis.SmallLanguageModel;
  let result;
  let panel = "report";

  const labels = {
    bigram: "바이그램", neural: "인과 신경망", report: "시험 결과",
    input: "입력 편집", downloads: "파일 받기"
  };
  const errors = {
    "Expected a JSON input object.": "JSON 객체를 입력하세요.",
    "Text exceeds the token limit or contains a reserved token.": "글이나 토큰 수가 제한을 넘었거나 예약 토큰이 들어 있습니다.",
    "Each split needs 1 to 32 documents.": "각 분할에 문서가 1~32개 필요합니다.",
    "Train and test share an identical normalized document.": "공백을 정리한 같은 문서가 훈련·시험에 모두 있습니다.",
    "Use the same prefix through the selected position and change at least one later token.": "선택한 위치까지 같은 접두사를 두고 그 뒤 단어를 하나 이상 바꾸세요.",
    "Use up to eight generation probes.": "생성 사례는 최대 여덟 개입니다.",
    "A probe needs a short name.": "생성 사례마다 짧은 이름을 입력하세요.",
    "A probe's expected first token must be one word.": "기대 첫 토큰은 단어 한 개여야 합니다.",
    "The vocabulary or training configuration exceeds the local work budget.": "어휘 크기 또는 학습 설정이 실행 예산을 넘었습니다.",
    "Checkpoint contents do not match this training input.": "체크포인트 내용이 이 훈련 입력과 맞지 않습니다."
  };
  const set = (id, text) => { get(id).textContent = text; };
  const json = (value) => JSON.stringify(value, null, 2) + "\n";

  function options(id, entries, fallback) {
    const select = get(id);
    const previous = select.value || String(fallback ?? "");
    select.replaceChildren(...entries.map(([value, text]) => new Option(text, value)));
    if (entries.some(([value]) => String(value) === previous)) select.value = previous;
  }

  function table(id, rows) {
    const body = get(id);
    body.replaceChildren(...rows.map(([name, ...values]) => {
      const row = document.createElement("tr");
      const heading = document.createElement("th");
      heading.scope = "row";
      heading.textContent = t(name);
      row.append(heading);
      for (const value of values) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      }
      return row;
    }));
  }

  function render() {
    if (panel !== "report" || !result) return;
    const {models, causality, budget, generation, checkpoint, config, tokenizer} = result.report;
    const vocabulary = tokenizer.vocabulary;
    const name = (id) => vocabulary[id];
    const view = get("view").value;
    for (const element of dialog.querySelectorAll("[data-lm-view]")) element.hidden = element.dataset.lmView !== view;
    for (const element of dialog.querySelectorAll("[data-lm-filter]")) element.hidden = element.dataset.lmFilter !== view;
    if (view === "summary") {
      set("budget", `${t("시드")} ${config.seed} · ${budget.steps} × ${budget.batchSize} = ${budget.processedTargets} ${t("훈련 정답 처리")}`);
      table("scores", Object.entries(models).map(([key, model]) =>
        [labels[key], model.tokenCount, model.meanNll.toFixed(5), model.perplexity.toFixed(2)]));
    }
    if (view === "prediction") {
      options("prediction", models.neural.predictions.map(({document, position, target}, index) =>
        [index, `#${document + 1}/${position} · ${name(target)}`]));
      const index = Number(get("prediction").value);
      const row = models.neural.predictions[index];
      set("position", `${row.context.map(name).join(" ")} → ${name(row.target)}`);
      table("probabilities", Object.entries(models).map(([key, model]) => {
        const prediction = model.predictions[index];
        return [labels[key], prediction.probability.toFixed(6), prediction.nll.toFixed(6)];
      }));
    }
    if (view === "causality") {
      options("candidate", causality.candidateIds.map((id) => [id, name(id)]),
        causality.leftDistribution.indexOf(Math.max(...causality.leftDistribution)) + 1);
      const candidate = Number(get("candidate").value) - 1;
      const prefix = causality.left.slice(0, causality.position + 1).map(name).join(" ");
      const suffix = (ids) => ids.slice(causality.position + 1).map(name).join(" ");
      set("prefix", `${prefix} │ ${suffix(causality.left)} ↔ ${suffix(causality.right)}`);
      const difference = causality.encodedSuffixDiffers ? `max |Δp| = ${causality.maxDifference}` : t("인코딩한 접미부가 같아 비교할 수 없습니다.");
      set("difference", difference + ` · ${causality.candidateIds.length} ${t("출력 후보")}`);
      set("distribution", `${name(candidate + 1)}: ${causality.leftDistribution[candidate].toPrecision(8)} ↔ ${causality.rightDistribution[candidate].toPrecision(8)}`);
    }
    if (view === "checkpoint") {
      const {restoredFrom, nextBatch, restoredNextBatch, maxWeightDifference, sameTrajectory, sameRngState, withinTolerance} = checkpoint;
      set("replay-state", `${t("복원 단계")} ${restoredFrom} → ${budget.steps} · ${t("최대 가중치 차이")} ${maxWeightDifference.toPrecision(4)}`);
      set("replay-batch", `${t("다음 배치")} [${nextBatch ?? "—"}] ↔ [${restoredNextBatch ?? "—"}]`);
      const equality = sameTrajectory && sameRngState ? "배치·손실 이력과 난수 상태 일치" :
        withinTolerance ? "배치·난수 일치 · 수치 차이는 1e−8 이내" : "배치·손실 이력 또는 난수 상태가 다름";
      set("replay-equality", t(equality));
    }
    if (view === "generation") {
      const probes = [{name: t("비교 프롬프트"), greedy: generation.greedy, sample: generation.sample}, ...generation.probes];
      options("probe", probes.map((probe, index) => [index, probe.name]));
      const probe = probes[Number(get("probe").value)];
      const policy = get("policy").value;
      const generated = probe[policy];
      options("sample-step", generated.trace.map((item, index) => [index, `${item.step} · ${name(item.tokenId)}`]));
      const item = generated.trace[Number(get("sample-step").value)];
      set("text", `${generated.prompt || "<BOS>"} → ${generated.text || "∅"} · ${t(generated.stop === "EOS" ? "EOS 종료" : "길이 한도")}`);
      set("generated-token", `${item.context.map(name).join(" ")} → ${name(item.tokenId)} · p=${item.probability.toFixed(4)}` +
        (item.uniform === null ? "" : ` · u=${item.uniform.toFixed(6)}`));
      const expected = probe.expectedFirst;
      const actual = name(generated.trace[0].tokenId);
      set("probe-check", expected == null ? t("관찰용 · 정답 기준 없음") :
        `${t(expected === actual ? "첫 토큰 일치" : "첫 토큰 불일치")} · ${t("기대")} ${expected} / ${t("실제")} ${actual}`);
    }
  }

  function show(next) {
    panel = next;
    set("heading", t(labels[next]));
    for (const element of dialog.querySelectorAll("[data-lm-panel]")) element.hidden = element.dataset.lmPanel !== panel;
    if (!dialog.open) dialog.showModal();
    if (next === "input") {
      get("input").value = result ? json(result.input) : initialText;
      get("checkpoint-input").value = "";
      set("error", "");
    }
    render();
  }

  function download(filename, content, type = "application/json") {
    const url = URL.createObjectURL(new Blob([content], {type}));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 3000);
  }

  get("open-report").addEventListener("click", () => {
    result ??= engine.run(globalThis.smallLanguageModelInput);
    show("report");
  });
  get("open-input").addEventListener("click", () => show("input"));
  get("edit-from-report").addEventListener("click", () => show("input"));
  get("open-downloads").addEventListener("click", () => show("downloads"));
  get("back").addEventListener("click", () => show("report"));
  get("download-input").addEventListener("click", () => download("input.json", json(result.input)));
  get("download-report").addEventListener("click", () => download("report.json", json(result.report)));
  get("download-checkpoint").addEventListener("click", () => download("checkpoint.json", json(result.checkpoint)));
  get("download-model").addEventListener("click", () => download("model.json", json(result.model)));
  get("download-runner").addEventListener("click", () => download("small-language-model-runner.js", engine.source(), "text/javascript"));
  get("reset").addEventListener("click", () => {
    get("input").value = initialText;
    get("checkpoint-input").value = "";
    set("error", "");
  });
  get("edit-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = get("run");
    button.disabled = true;
    try {
      const file = get("checkpoint-input").files[0];
      if (file?.size > 2000000) throw new Error(t("체크포인트 파일은 2 MB 이하여야 합니다."));
      const input = JSON.parse(get("input").value);
      const checkpoint = file ? JSON.parse(await file.text()) : undefined;
      result = engine.run(input, checkpoint);
      show("report");
    } catch (error) {
      let message = errors[error.message] ?? error.message;
      if (error instanceof SyntaxError) message = "JSON 형식을 확인하세요.";
      if (error.message.startsWith("Invalid configuration: ")) {
        message = t("잘못된 설정") + " · " + error.message.slice("Invalid configuration: ".length);
      }
      set("error", `${t("입력 확인")} · ${t(message)}`);
    } finally {
      button.disabled = false;
    }
  });
  for (const id of ["view", "prediction", "candidate", "probe", "policy", "sample-step"]) {
    get(id).addEventListener("change", render);
  }
  window.addEventListener("course:lang", () => {
    if (dialog.open) set("heading", t(labels[panel]));
    render();
  });
})();
