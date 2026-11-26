(() => {
  const engine = window.DefectInspection;
  const get = id => document.getElementById(id);
  const dialog = get('inspection-workbench');
  const svgNS = 'http://www.w3.org/2000/svg';
  const resultPanels = [...dialog.querySelectorAll('[data-result]')];
  const editPanels = [...dialog.querySelectorAll('[data-edit]')];
  const views = [...dialog.querySelectorAll('[data-panel]')];
  const stages = {capture:'촬영', detection:'검출', retrieval:'검색'};
  const detection = {matched:'영역 적중', missed:'미검출', mislocalized:'위치 오류',
    'false-positive':'오검출', clean:'정상 영상', unscored:'정답 없음'};
  const translate = text => window.courseI18n?.translate(text) ?? text;
  const json = data => JSON.stringify(data, null, 2) + '\n';
  let input = engine.sampleInput();
  let report = engine.evaluate(input);

  function setText(id, text) {
    get(id).textContent = text;
  }

  function populate(id, choices, selected = get(id).value) {
    const select = get(id);
    select.replaceChildren(...choices.map(([value, label]) => new Option(label, value)));
    if (choices.some(([value]) => value === selected)) select.value = selected;
  }

  function download(name, contents, type) {
    const url = URL.createObjectURL(new Blob([contents], {type}));
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  function shape(parent, tag, attrs) {
    const node = document.createElementNS(svgNS, tag);
    for (const [key,value] of Object.entries(attrs)) node.setAttribute(key, value);
    parent.append(node);
    return node;
  }

  function drawOverlay(result) {
    const svg = get('inspection-image');
    const width = result.pixels[0].length;
    const height = result.pixels.length;
    svg.setAttribute('viewBox', `-0.12 -0.12 ${width + 0.24} ${height + 0.24}`);
    svg.replaceChildren();
    result.pixels.forEach((row, y) => row.forEach((pixel, x) =>
      shape(svg, 'rect', {x,y,width:1,height:1,fill:`rgb(${pixel},${pixel},${pixel})`,stroke:'#768188','stroke-width':'.025'})));
    const visible = get('overlay-mode').value;
    const outlines = [
      [result.truth?.box, '#2fe4fb', 'none', 'truth'],
      [result.prediction?.box, '#ffac3c', '0.28 0.14', 'prediction']
    ];
    for (const [box, color, dash, kind] of outlines) {
      if (!box || (visible !== 'both' && visible !== kind)) continue;
      const [x,y,width,height] = box;
      shape(svg, 'rect', {x,y,width,height,fill:'none',stroke:color,'stroke-width':'.12','stroke-dasharray':dash});
    }
    const overlap = result.overlap;
    const current = translate(detection[result.detection]);
    const coords = result.prediction?.box.join(',') ?? '∅';
    const label = overlap ? `${current} · IoU ${overlap.intersection}/${overlap.union} = ${overlap.iou}`
      : `${current} · P ${coords}`;
    setText('overlap-status', label);
    svg.setAttribute('aria-label', label);
  }

  function renderRankings(result) {
    const expected = result.truth?.manualId;
    const top = search => search?.ranking[0].id ?? '∅';
    if (expected) {
      setText('expected-manual', `기대 ${expected} · 예측 순위 ${result.predictedExpectedRank ?? '∅'} · 정답 순위 ${result.oracleExpectedRank ?? '∅'}`);
    } else {
      setText('expected-manual', '평가 지침 없음');
    }
    setText('top-manuals', `1위 · 예측 ${top(result.predictedSearch)} / 정답 ${top(result.oracleSearch)}`);
    const search = get('search-mode').value === 'predicted' ? result.predictedSearch : result.oracleSearch;
    const ranking = search?.ranking ?? [];
    populate('rank-select', ranking.map(({id},i) => [String(i),`#${i+1} ${id}`]));
    get('rank-select').disabled = ranking.length === 0;
    const ranked = ranking[Number(get('rank-select').value)];
    if (!ranked) {
      setText('manual-detail', '이 영역에서 검색하지 않았습니다.');
      setText('manual-distance', '');
      return;
    }
    const manual = input.manuals.find(item => item.id === ranked.id);
    const lang = document.documentElement.lang === 'en' ? 'en' : 'ko';
    setText('manual-detail', manual.title[lang] + ' · ' + manual.text[lang]);
    setText('manual-distance', `d² = ${Number(ranked.distance2.toPrecision(4))} · q = (${search.features.join(', ')})`);
  }

  function renderConditions(result) {
    setText('capture-metadata', `${result.camera} / ${result.session} · ${result.capturedAt}`);
    setText('capture-role', result.role === 'calibration' ? '보정' : '시험');
    const {split} = report;
    setText('condition-status', split.separated ? '카메라·세션·시간 분리' : '촬영 조건 분리 실패');
    setText('split-cameras', `겹친 카메라 ${split.cameraOverlap.join(', ') || '∅'} · 겹친 세션 ${split.sessionOverlap.join(', ') || '∅'}`);
    setText('split-time', `${split.latestCalibration ?? '∅'} ${split.timeSeparated ? '<' : '↛'} ${split.earliestTest ?? '∅'}`);
  }

  function renderPair() {
    const pair = report.lightingPairs.find(row => row.id === get('pair-select').value);
    const first = pair?.firstChangedStage;
    setText('pair-status', pair?.valid ? `최초 분석 차이 · ${first ? translate(stages[first]) : '∅'}` :
      pair ? '쌍의 조건이 다릅니다.' : '조명 쌍 없음');
    get('pair-paths').hidden = !pair?.valid;
    if (!pair?.valid) return;
    for (const [field,id] of [['reference','pair-a'],['variant','pair-b']]) {
      const result = report.results.find(row => row.id === pair[field]);
      const box = result.prediction?.box.join(',') ?? '∅';
      const peak = result.surface === null ? 0 : Math.max(0, ...result.pixels.flat()
        .filter(value => value > 64).map(value => result.surface - value));
      setText(id, `${result.id} · ×${result.lighting.gain} · Δ${peak} → P ${box}`);
    }
    setText('pair-capture', pair.captureChanged ? '촬영 픽셀 변화 → 분석 비교' : '촬영 픽셀 동일');
  }

  function renderSummary() {
    const s = report.summary;
    setText('summary-detection', `정답 결함 ${s.positives} · 적중 ${s.matched} · 미검출 ${s.missed}`);
    setText('summary-localization', `위치 오류 ${s.mislocalized} · 오검출 ${s.falsePositives}`);
    setText('summary-retrieval', `검색 오류 · 예측 ${s.predictedSearchErrors}/${s.predictedSearches} · 정답 ${s.oracleSearchErrors}/${s.oracleSearches}`);
    setText('summary-cases', `정답 있는 시험 ${s.annotated}/${s.cases}`);
  }

  function renderResults() {
    const selected = get('case-select').value;
    const result = report.results.find(row => row.id === selected);
    const view = get('view-select').value;
    for (const panel of resultPanels) panel.hidden = panel.dataset.result !== view;
    setText('reference-status', report.fixture ? (report.referencePassed ? '기준 예제 통과' : '기준 예제 실패')
      : '사용자 입력 실행 · 기준과 별도');
    if (view === 'overlay') drawOverlay(result);
    if (view === 'rankings') renderRankings(result);
    if (view === 'conditions') renderConditions(result);
    if (view === 'lighting') renderPair();
    if (view === 'summary') renderSummary();
  }

  function fillEdit() {
    const mode = get('edit-mode').value;
    const item = input.cases.find(row => row.id === get('edit-case-select').value);
    for (const panel of editPanels) panel.hidden = panel.dataset.edit !== mode;
    get('edit-case-field').hidden = mode === 'settings' || mode === 'import';
    get('light-gain').value = item.lighting.gain;
    get('condition-contrast').value = input.settings.contrastThreshold;
    get('condition-min-cells').value = input.settings.minPixels;
    get('condition-iou').value = input.settings.iouThreshold;
    get('pixel-x').max = item.pixels[0].length - 1;
    get('pixel-y').max = item.pixels.length - 1;
    get('pixel-x').value = 0;
    get('pixel-y').value = 0;
    get('pixel-value').value = item.pixels[0][0];
    setText('input-status', '');
  }

  function loadPixel() {
    const item = input.cases.find(row => row.id === get('edit-case-select').value);
    const x = get('pixel-x').valueAsNumber;
    const y = get('pixel-y').valueAsNumber;
    const value = item.pixels[y]?.[x];
    if (value !== undefined) get('pixel-value').value = value;
  }

  function setInput(next, preferredId) {
    const evaluated = engine.evaluate(next);
    input = next;
    report = evaluated;
    populate('case-select', input.cases.map(item => [item.id, item.id]),
      preferredId ?? input.cases.find(item => item.role === 'test')?.id);
    populate('pair-select', report.lightingPairs.map(pair => [pair.id, pair.id]));
    populate('edit-case-select', input.cases.map(item => [item.id, item.id]), get('case-select').value);
    renderResults();
  }

  function showPanel(panel, focus = true) {
    for (const view of views) view.hidden = view.dataset.panel !== panel;
    const heading = panel === 'edit' ? '검사 입력 편집' : panel === 'downloads' ? '실행 파일 내려받기' : '검사 결과';
    setText('inspection-heading', heading);
    if (panel === 'edit') {
      get('edit-case-select').value = get('case-select').value;
      fillEdit();
    }
    if (!dialog.open) dialog.showModal();
    if (focus) (panel === 'edit' ? get('edit-mode') : panel === 'downloads' ? get('download-data') : get('case-select')).focus();
  }

  get('edit-form').addEventListener('submit', async event => {
    event.preventDefault();
    const mode = get('edit-mode').value;
    const preferredId = mode === 'gain' || mode === 'pixel' ? get('edit-case-select').value : get('case-select').value;
    const ids = {gain:['light-gain'], pixel:['pixel-x','pixel-y','pixel-value'],
      settings:['condition-contrast','condition-min-cells','condition-iou'], import:['input-json']};
    if (!ids[mode].every(id => get(id).reportValidity())) return;
    get('run-input').disabled = true;
    try {
      let next = structuredClone(input);
      const item = next.cases.find(row => row.id === preferredId);
      const value = id => get(id).valueAsNumber;
      if (mode === 'gain') item.lighting.gain = value('light-gain');
      if (mode === 'pixel') item.pixels[value('pixel-y')][value('pixel-x')] = value('pixel-value');
      if (mode === 'settings') {
        next.settings = {contrastThreshold:value('condition-contrast'), minPixels:value('condition-min-cells'),
          iouThreshold:value('condition-iou')};
      }
      if (mode === 'import') {
        const file = get('input-json').files[0];
        if (file.size > 512 * 1024) throw new Error('512 KiB');
        next = JSON.parse(await file.text());
      }
      setInput(next, preferredId);
      showPanel('results');
    } catch (error) {
      const field = error instanceof SyntaxError ? 'JSON' : error.message;
      setText('input-status', `입력 확인 · ${field}`);
    } finally {
      get('run-input').disabled = false;
    }
  });

  for (const id of ['case-select','view-select','overlay-mode','search-mode','rank-select','pair-select']) {
    get(id).addEventListener('change', renderResults);
  }
  for (const id of ['edit-case-select','edit-mode']) get(id).addEventListener('change', fillEdit);
  for (const id of ['pixel-x','pixel-y']) get(id).addEventListener('input', loadPixel);
  for (const id of ['open-results', 'practice-open-results']) {
    get(id).addEventListener('click', () => showPanel('results'));
  }
  for (const id of ['edit-data', 'practice-edit-data', 'edit-from-results']) {
    get(id).addEventListener('click', () => showPanel('edit'));
  }
  get('open-downloads').addEventListener('click', () => showPanel('downloads'));
  for (const id of ['results-from-edit','results-from-downloads']) {
    get(id).addEventListener('click', () => showPanel('results'));
  }
  get('reset-data').addEventListener('click', () => {
    setInput(engine.sampleInput());
    showPanel('results');
  });
  get('download-data').addEventListener('click', () => download('inspection-input.json',json(input),'application/json'));
  get('download-runner').addEventListener('click', () => download('defect-inspection.js',engine.source(),'text/javascript'));
  get('download-report').addEventListener('click', () => download('inspection-report.json',json(report),'application/json'));
  window.addEventListener('course:lang', renderResults);
  document.addEventListener('DOMContentLoaded', () => setInput(input), {once:true});
})();
