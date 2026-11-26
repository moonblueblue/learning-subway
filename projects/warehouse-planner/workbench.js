'use strict';

(() => {
  const stages = [
    {
      counter: '동률과 확장 수를 비교합니다.',
      cases: ['open', 'closure-manhattan', 'closure-distance', 'equal-parent']
    },
    {
      counter: '재개방, 한도 도달, 도달 불가를 비교합니다.',
      cases: ['reopen', 'cutoff', 'isolated']
    },
    {
      counter: '계획의 작업 순서와 제출 검증 결과를 확인합니다.',
      cases: ['order', 'missing-inspection']
    },
    {
      counter: '완료한 5분과 새 구간 8분을 따로 확인합니다.',
      cases: ['repair', 'cost-mismatch']
    },
    {
      counter: '어떤 조항과 위치가 주문을 막는지 확인합니다.',
      cases: ['cycle', 'isolated-order']
    }
  ];
  const suite = structuredClone(window.warehouseFixture);
  const planner = window.WarehousePlanner;
  const editor = byId('case-editor');
  const output = byId('plan-results');
  const casePicker = byId('case-picker');
  const caseInput = byId('case-json');
  let selectedId;

  function element(tag, label, className) {
    const node = document.createElement(tag);
    if (label) node.textContent = label;
    if (className) node.className = className;
    return node;
  }

  function labelValue(label, value, target) {
    const line = element('p');
    const name = element('strong', label);
    line.append(name, document.createTextNode(' · ' + value));
    target.append(line);
  }

  function button(label, action, target, id) {
    const node = element('button', label, 'action');
    node.type = 'button';
    if (id) node.id = id;
    node.onclick = action;
    target.append(node);
  }

  function downloadLink(label, path, target) {
    const link = element('a', label, 'action');
    link.href = path;
    link.download = '';
    target.append(link);
  }

  function downloadJson(name, data) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2) + '\n'], {type: 'application/json'}));
    const link = element('a');
    link.href = url;
    link.download = name;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function caseById(id) {
    return suite.cases.find(row => row.id === id);
  }

  function fillEditor(id) {
    selectedId = id;
    caseInput.value = JSON.stringify(caseById(id), null, 2);
    byId('edit-feedback').textContent = '';
  }

  function openEditor() {
    const {cases} = stages[state.index];
    casePicker.replaceChildren(...cases.map(id => {
      const option = element('option', id);
      option.value = id;
      return option;
    }));
    fillEditor(cases[0]);
    editor.showModal();
  }

  casePicker.onchange = () => fillEditor(casePicker.value);
  byId('apply-case').onclick = () => {
    try {
      const changed = JSON.parse(caseInput.value);
      if (changed?.id !== selectedId) throw new Error('id: ' + selectedId);
      planner.run({cases: [changed]});
      const index = suite.cases.findIndex(row => row.id === selectedId);
      suite.cases[index] = changed;
      editor.close();
      byId('feedback').textContent = '입력을 적용했습니다. 계획을 다시 실행하세요.';
    } catch (error) {
      const note = error instanceof SyntaxError ? '올바른 JSON을 입력하세요.' : error.message.slice(0, 96);
      const status = byId('edit-feedback');
      status.replaceChildren(element('strong', '입력을 확인하세요.'), document.createTextNode(' · '), element('span', note));
    }
  };

  function reasonText(reason) {
    switch (reason.code) {
      case 'PRECEDENCE_CYCLE':
        return reason.cycle.join(' < ') + ' (' + reason.clauses.map(pair => pair.join(' < ')).join(', ') + ')';
      case 'UNREACHABLE_WAYPOINTS':
        return [...reason.tasks.map(({task, at}) => task + '@' + at), reason.goal].filter(Boolean).join(' · ');
      case 'UNREACHABLE_GOAL':
        return reason.goal;
      case 'EXPANSION_LIMIT':
        return reason.budget + ' · ' + reason.next.at + ' (g=' + reason.next.g + ', f=' + reason.next.f + ')';
      case 'MISSING_PREDECESSOR':
        return '#' + reason.step + ' · ' + reason.missing.join(', ') + ' < ' + reason.task;
      case 'EDGE_BLOCKED':
      case 'EDGE_MISSING':
        return '#' + reason.step + ' · ' + reason.from + ' → ' + reason.to;
      case 'COST_MISMATCH':
        return reason.claimed + ' ≠ ' + reason.calculated + ' min';
      default:
        return JSON.stringify(reason);
    }
  }

  function plotMap(input, result) {
    const namespace = 'http://www.w3.org/2000/svg';
    const chart = document.createElementNS(namespace, 'svg');
    chart.setAttribute('viewBox', '0 0 620 255');
    chart.setAttribute('role', 'img');
    chart.classList.add('result-map');
    function draw(tag, attrs, content) {
      const part = document.createElementNS(namespace, tag);
      for (const [key, value] of Object.entries(attrs)) part.setAttribute(key, value);
      if (content) part.textContent = content;
      chart.append(part);
    }
    const points = input.nodes;
    const xMin = Math.min(...points.map(p => p.x));
    const yMin = Math.min(...points.map(p => p.y));
    const xRange = Math.max(1, Math.max(...points.map(p => p.x)) - xMin);
    const yRange = Math.max(1, Math.max(...points.map(p => p.y)) - yMin);
    const coordinate = new Map(points.map(({id, x, y}) =>
      [id, [68 + 484 * (x - xMin) / xRange, 47 + 160 * (y - yMin) / yRange]]));
    const path = result.route ?? [];
    const pair = (a, b) => [a, b].sort().join(':');
    const traversed = new Set(path.slice(1).map((node, i) => pair(path[i], node)));
    const closed = new Set((input.blocked ?? []).map(([a, b]) => pair(a, b)));
    const visited = new Set(result.trace.map(item => item.at));
    draw('title', {}, path.length ? path.join(' → ') : result.reason.code);
    for (const [a, b, cost] of input.edges) {
      const [x1, y1] = coordinate.get(a);
      const [x2, y2] = coordinate.get(b);
      const key = pair(a, b);
      const tone = closed.has(key) ? 'closed' : traversed.has(key) ? 'selected' : 'open';
      draw('line', {x1, y1, x2, y2, class: tone});
      draw('text', {x: (x1 + x2) / 2, y: (y1 + y2) / 2 - 10}, closed.has(key) ? '× ' + cost : String(cost));
    }
    for (const [id, [cx, cy]] of coordinate) {
      draw('circle', {cx, cy, r: 22, class: visited.has(id) ? 'expanded' : ''});
      draw('text', {x: cx, y: cy + 6}, id);
    }
    return chart;
  }

  const resultPicker = byId('result-picker');
  const activeResult = byId('active-result');
  const resultTabs = [...output.querySelectorAll('[data-result-view]')];
  let shownReport;
  let shownView = 'comparison';
  let traceAlgorithm = 'astar';
  let traceIndex = 0;
  let reasonIndex = 0;

  function renderComparison(row) {
    const table = element('table', '', 'result-compare');
    const header = table.createTHead().insertRow();
    for (const label of ['탐색기', '총 비용', '확장', '재확장']) header.append(element('th', label));
    const body = table.createTBody();
    for (const [title, data] of [['UCS', row.ucs], ['A*', row.astar]]) {
      const tr = body.insertRow();
      const cost = data.cost === undefined ? '—' : data.cost + ' min';
      [title, cost, data.expanded, data.reopened].forEach(value => { tr.insertCell().textContent = value; });
    }
    activeResult.append(table);
    if (row.prefix?.cost) {
      const suffix = row.astar.suffixCost;
      labelValue('완료 구간', row.prefix.cost + ' min · ' + row.prefix.at + ' · {' + row.prefix.completed.join(', ') + '}', activeResult);
      if (suffix !== undefined) labelValue('새 구간', suffix + ' min', activeResult);
    }
    if (row.astar.taskOrder?.length) labelValue('작업 순서', row.astar.taskOrder.join(' → '), activeResult);
  }

  function renderMap(row) {
    activeResult.append(plotMap(caseById(row.id), row.astar));
    if (row.astar.route) labelValue('경로', row.astar.route.join(' → '), activeResult);
    activeResult.append(element('p', '굵은 선 · 선택 / × · 폐쇄 / 점선 테두리 · 확장', 'result-legend'));
  }

  function addPager(index, count, action) {
    const controls = element('div', '', 'result-pager');
    button('이전', () => action(index - 1), controls);
    controls.firstElementChild.disabled = index <= 0;
    controls.append(element('span', (index + 1) + ' / ' + count));
    button('다음', () => action(index + 1), controls);
    controls.lastElementChild.disabled = index + 1 >= count;
    activeResult.append(controls);
  }

  function renderTrace(row) {
    const algorithms = element('div', '', 'result-pager');
    for (const [name, id] of [['UCS', 'ucs'], ['A*', 'astar']]) {
      button(name, () => {
        traceAlgorithm = id;
        traceIndex = 0;
        renderActiveResult();
      }, algorithms);
      algorithms.lastElementChild.setAttribute('aria-pressed', String(traceAlgorithm === id));
    }
    activeResult.append(algorithms);
    const data = row[traceAlgorithm];
    if (!data.trace.length) {
      labelValue('확장', '0', activeResult);
      return;
    }
    const {at, completed, g, h, f} = data.trace[traceIndex];
    labelValue('확장 상태', at + ' · {' + completed.join(', ') + '} · g=' + g + ' · h=' + h + ' · f=' + f, activeResult);
    addPager(traceIndex, data.trace.length, index => {
      traceIndex = index;
      renderActiveResult();
      activeResult.querySelector('.result-pager:last-child button:not([disabled])')?.focus();
    });
  }

  function renderReasons(row) {
    const entries = [];
    for (const [name, result] of [['UCS', row.ucs], ['A*', row.astar], ['제출 검증', row.submission]]) {
      if (result?.reason) entries.push([name, result.reason.code, reasonText(result.reason)]);
      else if (result) entries.push([name, '✓', '']);
    }
    for (const check of row.checks.filter(check => !check.pass)) {
      entries.push([check.kind === 'fixed-answer' ? '기준 답안 차이' : '탐색기 비교 차이', check.field,
        JSON.stringify(check.actual) + ' ≠ ' + JSON.stringify(check.expected)]);
    }
    const [name, code, detail] = entries[reasonIndex];
    labelValue(name, code, activeResult);
    if (detail) activeResult.append(element('p', detail));
    addPager(reasonIndex, entries.length, index => {
      reasonIndex = index;
      renderActiveResult();
      activeResult.querySelector('.result-pager:last-child button:not([disabled])')?.focus();
    });
  }

  const renderers = {comparison: renderComparison, map: renderMap, trace: renderTrace, reasons: renderReasons};
  function renderActiveResult() {
    const row = shownReport.cases.find(result => result.id === resultPicker.value);
    const statuses = {
      'fixed-answer': ['기준 답안 검사를 통과했습니다.', '검사에서 일치하지 않는 결과가 나왔습니다.'],
      'algorithm-agreement': ['두 탐색기의 비용이 일치합니다.', '두 탐색기의 비용이 다릅니다.'],
      ungraded: ['비교 기준 없음 · 미채점']
    };
    byId('plan-status').textContent = statuses[row.validation.kind][Number(row.passed === false)];
    resultTabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab.dataset.resultView === shownView)));
    activeResult.replaceChildren();
    renderers[shownView](row);
  }

  resultTabs.forEach(tab => {
    tab.onclick = () => {
      shownView = tab.dataset.resultView;
      renderActiveResult();
    };
  });
  resultPicker.onchange = () => {
    traceIndex = 0;
    reasonIndex = 0;
    renderActiveResult();
  };

  function drawReport(report) {
    shownReport = report;
    shownView = 'comparison';
    traceAlgorithm = 'astar';
    traceIndex = 0;
    reasonIndex = 0;
    resultPicker.replaceChildren(...report.cases.map(row => {
      const option = element('option', row.id);
      option.value = row.id;
      return option;
    }));
    renderActiveResult();
  }

  function runSelected() {
    const ids = new Set(stages[state.index].cases);
    const report = planner.run({cases: suite.cases.filter(row => ids.has(row.id))});
    drawReport(report);
    output.showModal();
  }

  renderPractice = () => {
    byId('prompt').textContent = stages[state.index].counter;
    byId('feedback').replaceChildren();
    const menu = byId('choices');
    menu.replaceChildren();
    button('계획 실행', runSelected, menu, 'run-planner');
    button('입력 편집', openEditor, menu, 'edit-input');
    if (state.index === stages.length - 1) {
      button('전체 보고서 JSON', () => downloadJson('warehouse-report.json', planner.run(suite)), menu, 'download-report');
    } else {
      button('입력 JSON', () => downloadJson('warehouse-input.json', suite), menu, 'download-input');
      downloadLink('계획기 JS', './warehouse-planner/planner.js', menu);
    }
  };
  renderPractice();
})();
