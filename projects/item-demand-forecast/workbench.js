(() => {
  'use strict';

  const engine = window.DemandForecast;
  const sample = engine.sampleInput();
  const editor = byId('edit-demand');
  const results = byId('forecast-results');
  const itemPicker = byId('results-item');
  const monthPicker = byId('results-month');
  const viewPicker = byId('results-view');
  const filePicker = byId('import-data');
  const form = byId('edit-form');
  const settingsFields = {
    ridge: byId('setting-ridge'),
    adoptGain: byId('setting-adopt'),
    rollbackGap: byId('setting-gap')
  };

  let input = structuredClone(sample);
  let report;

  function node(tag, text, className) {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    if (className) element.className = className;
    return element;
  }

  function appendLabel(parent, label, value, className) {
    const line = node('p', undefined, className);
    line.append(node('strong', label), ' · ' + value);
    parent.append(line);
  }

  function appendText(parent, label, value) {
    const line = node('p');
    line.append(node('strong', label), ' · ', node('span', value));
    parent.append(line);
  }

  function number(value) {
    return value === null || value === undefined ? '—' : String(Math.round(value * 100) / 100);
  }

  function utc(value) {
    return value ? value.slice(0, 16).replace('T', ' ') : '—';
  }

  function table(headers, rows) {
    const output = node('table');
    const heading = output.createTHead().insertRow();
    for (const title of headers) {
      const cell = node('th', title);
      cell.scope = 'col';
      heading.append(cell);
    }
    const body = output.createTBody();
    for (const row of rows) {
      const line = body.insertRow();
      row.forEach((value, i) => {
        const cell = node(i ? 'td' : 'th', value);
        if (!i) cell.scope = 'row';
        line.append(cell);
      });
    }
    return output;
  }

  function download(name, content, type) {
    const link = node('a');
    const url = URL.createObjectURL(new Blob([content], {type}));
    link.href = url;
    link.download = name;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function downloadJson(name, data) {
    download(name, JSON.stringify(data, null, 2) + '\n', 'application/json');
  }

  function button(id, text, action) {
    const control = node('button', text, 'action');
    control.id = id;
    control.type = 'button';
    control.addEventListener('click', action);
    byId('forecast-actions').append(control);
    return control;
  }

  function options(select, values, selected) {
    select.replaceChildren(...values.map(value => new Option(value, value)));
    if (values.includes(selected)) select.value = selected;
    else select.value = values.at(-1) ?? '';
  }

  function refreshMonths() {
    const months = report.predictions.filter(row => row.item === itemPicker.value).map(row => row.month);
    options(monthPicker, months, monthPicker.value);
  }

  function showError(error) {
    const status = byId('edit-status');
    const detail = error instanceof SyntaxError ? '올바른 JSON 파일을 선택하세요.' : error.message.slice(0, 88);
    status.replaceChildren(node('strong', '입력 오류'), ' · ', node('span', detail));
  }

  function openEditor() {
    Object.entries(settingsFields).forEach(([key, field]) => { field.value = input.settings[key]; });
    filePicker.value = '';
    byId('edit-status').textContent = '';
    editor.showModal();
  }

  function useInput(candidate) {
    engine.evaluate(candidate);
    input = candidate;
    report = undefined;
    byId('download-report').disabled = true;
    editor.close();
    byId('forecast-feedback').textContent = '입력을 적용했습니다. 예측을 실행하세요.';
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const apply = byId('apply-config');
    apply.disabled = true;
    try {
      const file = filePicker.files[0];
      if (file?.size > 2_000_000) throw new Error('파일은 2MB 이하여야 합니다.');
      const candidate = file ? JSON.parse(await file.text()) : structuredClone(input);
      if (!file) {
        Object.entries(settingsFields).forEach(([key, field]) => { candidate.settings[key] = field.valueAsNumber; });
      }
      if (editor.open) useInput(candidate);
    } catch (error) {
      if (editor.open) showError(error);
    } finally {
      apply.disabled = false;
    }
  });
  byId('reset-input').onclick = () => useInput(structuredClone(sample));

  function matchesReference() {
    return report.overall.paired === 12 && report.overall.baselineMAE === 11 &&
      report.overall.modelMAE === 5.5 && report.hiddenFailure === 'B' &&
      report.items.find(item => item.item === 'A')?.decision?.status === 'rollback' &&
      report.predictions.find(row => row.item === 'A' && row.month === '2026-06')?.features?.inventory?.units === 52;
  }

  function comparison(output, row, item) {
    const {overall, hiddenFailure} = report;
    output.append(table(['', '기준선', '모델', '쌍'], [
      ['전체 MAE', number(overall.baselineMAE), number(overall.modelMAE), overall.paired + '/' + overall.rows],
      ['품목 MAE', number(item.baselineMAE), number(item.modelMAE), item.paired + '/' + item.rows]
    ]));
    appendLabel(output, '월별 예측(개)', number(row.baseline) + ' / ' + number(row.model));
    if (row.actual !== null) {
      appendLabel(output, '관측', number(row.actual) + ' @ ' + utc(row.actualAvailableAt), 'demand-context');
    } else {
      appendText(output, '관측', row.excluded === 'stockout' ? '품절 제외' : '실제 대기');
    }
    if (hiddenFailure) appendLabel(output, '가려진 실패 품목', hiddenFailure);
  }

  function decision(output, row) {
    const settings = report.settings;
    const {status, served, paired, monitored} = row.decision;
    const states = {shadow: '그림자 비교', baseline: '기준선 유지', model: '모델 도입', rollback: '기준선 복귀'};
    appendText(output, '운영 결정', states[status]);
    appendText(output, '사용 예측', served === 'baseline' ? '기준선' : served === 'model' ? '모델' : '예측 없음');
    appendLabel(output, '비교 쌍', paired + ' / ' + settings.minPairs + ' · ΔMAE ≥ ' + settings.adoptGain);
    appendLabel(output, '복귀 기준', 'Δ ≥ ' + settings.rollbackGap + ' × ' + settings.rollbackStreak);
    output.append(table(['확정 근거', '기준선', '모델', '격차(개)'], monitored.slice(-2).map(event =>
      [event.month, event.baselineError, event.modelError, event.modelError - event.baselineError])));
  }

  function features(output, row) {
    appendLabel(output, '발행(UTC)', utc(row.forecastAt) + ' · n=' + row.trainingRows);
    const names = {seasonalSales: '계절 판매', recentSales: '직전 판매', inventory: '직전 재고', returns: '직전 반품'};
    output.append(table(['기록', '수량', '등록(UTC)'], Object.entries(row.features).map(([name, value]) =>
      [names[name], number(value?.units), utc(value?.recordedAt)])));
  }

  function showResult() {
    const output = byId('result-content');
    output.replaceChildren();
    const row = report.predictions.find(value => value.item === itemPicker.value && value.month === monthPicker.value);
    if (!row) {
      output.append(node('p', '발행 가능한 품목이 없습니다.'));
      return;
    }
    if (viewPicker.value === 'features') features(output, row);
    else if (viewPicker.value === 'decision') decision(output, row);
    else comparison(output, row, report.items.find(value => value.item === row.item));
  }

  function run() {
    report = engine.evaluate(input);
    byId('download-report').disabled = false;
    const reference = JSON.stringify(input) === JSON.stringify(sample);
    byId('reference-status').textContent = reference
      ? matchesReference() ? '기준 대조 통과' : '기준 대조 불일치'
      : '사용자 입력 · 미채점';
    options(itemPicker, report.items.map(value => value.item), itemPicker.value || 'A');
    refreshMonths();
    showResult();
    results.showModal();
  }

  itemPicker.onchange = () => { refreshMonths(); showResult(); };
  monthPicker.onchange = showResult;
  viewPicker.onchange = showResult;

  button('run-forecast', '예측 실행', run).classList.add('primary');
  button('edit-input', '입력 변경', openEditor);
  button('download-input', '입력 저장', () => downloadJson('item-demand-input.json', input));
  button('download-source', '소스 받기', () =>
    download('item-demand-forecast.js', engine.source(), 'text/javascript'));
  button('download-report', '보고서 받기', () => downloadJson('item-demand-report.json', report)).disabled = true;
})();
