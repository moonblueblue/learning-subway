(() => {
  'use strict';
  const get = id => document.getElementById(id);
  const dialog = get('motion-dialog');
  const panels = dialog.querySelectorAll('[data-motion-panel]');
  const views = dialog.querySelectorAll('[data-motion-view]');
  const t = text => window.courseI18n?.translate(text) ?? text;
  const names = {rule: '규칙', original: '원본 Q', revised: '수정 Q'};
  const reasons = {goal: '도착', limit: '한도', 'rule-stop': '규칙 정지', 'sensor-stop': '센서 정지'};
  const sources = {rule: '규칙', 'q-table': 'Q 표', 'unseen-fallback': '미관측 → 규칙', watchdog: '감시 정지'};
  const json = data => JSON.stringify(data, null, 2) + '\n';
  const initialText = get('motion-default').textContent.trim();
  let report = window.motionPolicy.evaluate(JSON.parse(initialText));
  let panel = 'results';

  function set(id, text) {
    get(id).textContent = text;
  }

  function options(id, list, fallback) {
    const select = get(id);
    const previous = select.value;
    select.replaceChildren(...list.map(([value, label]) => new Option(label, value)));
    if (list.some(([value]) => String(value) === previous)) select.value = previous;
    else if (fallback !== undefined) select.value = fallback;
  }

  function table(id, rows) {
    get(id).replaceChildren(...rows.map(values => {
      const row = document.createElement('tr');
      for (const [index, value] of values.entries()) {
        const cell = document.createElement(index === 0 ? 'th' : 'td');
        if (index === 0) cell.scope = 'row';
        cell.textContent = value;
        row.append(cell);
      }
      return row;
    }));
  }

  function svgShape(svg, tag, attributes, text) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
    if (text) node.textContent = text;
    svg.append(node);
  }

  function draw(map, run, frame) {
    const svg = get('motion-map');
    svg.replaceChildren();
    svg.setAttribute('viewBox', `0 0 ${map.grid[0].length} ${map.grid.length}`);
    for (const [y, row] of map.grid.entries()) {
      for (const [x, tile] of [...row].entries()) {
        const fill = {'#': '#465b67', G: '#cbe7d9', B: '#f6dacb', S: '#c9e8f6'}[tile] ?? '#ebf4f7';
        svgShape(svg, 'rect', {x, y, width: 1, height: 1, fill, stroke: '#78909c', 'stroke-width': .025});
        if ('SGB'.includes(tile)) svgShape(svg, 'text', {
          x: x + .5, y: y + .28, 'text-anchor': 'middle', 'font-size': .28, fill: '#17354b',
        }, tile);
      }
    }
    const points = [map.start, ...run.trace.slice(0, frame.tick + 1).map(step => step.to)];
    svgShape(svg, 'polyline', {points: points.map(p => `${p.x + .5},${p.y + .55}`).join(' '),
      stroke: '#12649c', 'stroke-width': .1, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', fill: 'none'});
    svgShape(svg, 'circle', {cx: frame.to.x + .5, cy: frame.to.y + .55, r: .17,
      fill: frame.action === 'STOP' || frame.collision ? '#a34123' : '#12649c', stroke: '#fff', 'stroke-width': .035});
  }

  const xy = p => `(${p.x},${p.y})`;
  function render() {
    if (panel !== 'results') return;
    const labels = trial => `${trial.map.id} / ${trial.seed} / ${t(trial.fault ? '단절' : '정상')}`;
    options('motion-case', report.cases.map(trial => [trial.id, labels(trial)]));
    const trial = report.cases.find(trial => trial.id === get('motion-case').value);
    const view = get('motion-view').value;
    for (const section of views) section.hidden = section.dataset.motionView !== view;
    if (view === 'compare') {
      const fault = trial.fault ? ` · ${t('단절')} ${trial.faultAtMs} ms · ${t('한도')} ${trial.timeoutMs} ms` : '';
      set('motion-case-meta', `S ${xy(trial.map.start)} → G ${xy(trial.map.goal)}${fault}`);
      table('motion-comparison', trial.runs.map(run => [
        t(names[run.policy]), t(reasons[run.reason]), run.collisions, run.steps,
        Number(run.originalScore.toFixed(2)),
      ]));
    }
    if (view === 'summary') {
      set('motion-split', t('정상 시험만 · 충돌률은 충돌을 경험한 실행 비율'));
      table('motion-summary', report.summary.map(line => [
        t(names[line.policy]), `${line.successes}/${line.trials}`,
        `${line.runsWithCollision}/${line.trials}`, (line.steps / line.trials).toFixed(1),
      ]));
    }
    if (view === 'trace') {
      options('motion-policy', trial.runs.map(run => [run.policy, t(names[run.policy])]));
      const run = trial.runs.find(run => run.policy === get('motion-policy').value);
      options('motion-tick', run.trace.map(step => [step.tick, `${step.tick} · ${step.timeMs} ms`]), run.steps - 1);
      const frame = run.trace[Number(get('motion-tick').value)];
      draw(trial.map, run, frame);
      set('motion-move', `${xy(frame.from)} → ${frame.action} → ${xy(frame.to)}`);
      set('motion-sensor', `${t('샘플')} ${frame.sampleMs ?? '—'} ms · ${t('나이')} ${frame.ageMs ?? '—'} ms`);
      const observation = frame.observation;
      set('motion-observation', observation
        ? `Δ (${observation.dx},${observation.dy}) · ESWN [${observation.ranges}]`
        : t('관측 없음'));
      set('motion-event', `${t(sources[frame.source])}${frame.collision ? ' · ' + t('충돌') : ''} · r ${frame.originalReward} / ${frame.revisedReward}`);
    }
  }

  function show(next) {
    panel = next;
    const headings = {results: '시험 결과', edit: '입력 편집', downloads: '파일 받기'};
    set('motion-heading', t(headings[next]));
    for (const section of panels) section.hidden = section.dataset.motionPanel !== next;
    if (!dialog.open) dialog.showModal();
    if (next === 'edit') {
      get('motion-input').value = json(report.input);
      set('motion-error', '');
    }
    render();
  }

  function download(name, contents, type = 'application/json') {
    const url = URL.createObjectURL(new Blob([contents], {type}));
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  get('motion-results').addEventListener('click', () => show('results'));
  get('motion-edit').addEventListener('click', () => show('edit'));
  get('motion-edit-from-results').addEventListener('click', () => show('edit'));
  get('motion-downloads').addEventListener('click', () => show('downloads'));
  get('motion-back').addEventListener('click', () => show('results'));
  get('motion-download-input').addEventListener('click', () => download('motion-input.json', json(report.input)));
  get('motion-download-report').addEventListener('click', () => download('motion-report.json', json(report)));
  get('motion-download-code').addEventListener('click', () => download('motion-policy.js', window.motionPolicy.source(), 'text/javascript'));
  get('motion-reset').addEventListener('click', () => {
    get('motion-input').value = initialText;
    set('motion-error', '');
  });
  get('motion-form').addEventListener('submit', event => {
    event.preventDefault();
    try {
      report = window.motionPolicy.evaluate(JSON.parse(get('motion-input').value));
      show('results');
    } catch (error) {
      set('motion-error', `${t('입력 확인')} · ${error.message}`);
    }
  });
  for (const id of ['motion-case', 'motion-view', 'motion-policy', 'motion-tick']) {
    get(id).addEventListener('change', render);
  }
  window.addEventListener('course:lang', render);
})();
