(function () {
  'use strict';

  const get = id => document.getElementById('rag-' + id);
  const t = message => window.courseI18n?.translate(message) ?? message;
  const set = (id, text) => { get(id).textContent = text; };
  const dialog = get('dialog');
  const engine = globalThis.documentSupportEngine;
  const fixture = globalThis.documentSupportFixture;
  let installed;
  let report;
  let quoteIndex = 0;
  const json = value => JSON.stringify(value, null, 2) + '\n';
  const files = {
    input: 'document-support-input.json',
    state: 'document-support-state.json',
    runner: 'document-support-agent-runner.js',
    report: 'document-support-report.json'
  };
  const titles = { report: '실행 결과', editor: '입력 편집', downloads: '파일 받기' };
  const cases = {
    reset: '재설정 시간', 'no-evidence': '보증 기간', 'restricted-document': '제한 문서',
    'status-allowed': '허용 상태 조회', 'status-denied': '거절 상태 조회',
    'retrieval-failure': '검색 실패 비교', 'answer-failure': '응답 실패 비교'
  };
  const statuses = {
    answered: '인용 답변', abstain: '보류', denied: '권한 거절', invalid: '입력 오류',
    cited: '원문 근거 있음', 'no-evidence': '근거 부족', 'document-access': '문서 권한',
    'tool-access': '도구 권한', 'tool-schema': '호출 형식', identity: '사용자 확인',
    'tool-asset-mismatch': '질의와 도구의 장치가 다름', 'conflicting-evidence': '근거 충돌'
  };
  const stages = {
    identity: '사용자 확인', documents: '문서 권한', schema: '호출 형식', 'tool-access': '도구 권한',
    'tool-asset': '장치 일치', retrieval: '검색', answer: '답변', execute: '실행', result: '도구 결과',
    'tool-run': '도구 실행 정책'
  };
  const decisions = {
    allow: '허용', deny: '거절', filter: '접근 가능한 문서만', reject: '입력 오류',
    local: '로컬 자료', skipped: '실행 생략', ...statuses
  };
  const diagnosis = { retrieval: '검색 실패: 정답 문맥에서 복구', answer: '응답 실패: 정답 문맥에서도 불일치' };

  function table(id, rows, rowHeaders = false) {
    const items = rows.map(row => {
      const tr = document.createElement('tr');
      row.forEach((value, index) => {
        const cell = document.createElement(rowHeaders && index === 0 ? 'th' : 'td');
        if (cell.tagName === 'TH') cell.scope = 'row';
        cell.textContent = value;
        tr.append(cell);
      });
      return tr;
    });
    get(id).replaceChildren(...items);
  }

  function answer(result) {
    const citations = result.citation ? [result.citation] : result.conflicts;
    const quotes = citations.flatMap(citation => {
      const words = citation.quote.match(/.{1,110}(?:\s|$)|.{1,110}/gu) || [citation.quote];
      return words.map(word => ({ id: citation.id, quote: word.trim() }));
    });
    const currentQuote = quotes[quoteIndex % (quotes.length || 1)];
    set('outcome', t(statuses[result.status]) + ' · ' + t(statuses[result.reason]));
    set('request', result.request.user + ' · ' + result.request.question);
    set('citation', currentQuote?.id || '');
    set('quote', currentQuote?.quote || '');
    set('tool-result', result.toolResult ? result.toolResult.asset + ' · ' + result.toolResult.value + ' · ' +
      t('실행 횟수') + ' ' + result.toolCalls : t('실행 횟수') + ' 0');
    get('more-quote').hidden = quotes.length < 2;
    if (quotes.length > 1) set('more-quote', t('다음 원문') + ' · ' + (quoteIndex % quotes.length + 1) + '/' + quotes.length);
  }

  function retrieval(result) {
    set('limits', 'k=' + result.limits.topK + ' · ' + t('문맥 토큰') + ' ' +
      result.contextTokens + '/' + result.limits.contextTokens);
    table('ranking', result.ranking.length ? result.ranking.map(row => [
      row.rank, row.id, row.score.toFixed(4)
    ]) : [['—', t('허용된 검색 결과 없음'), '—']]);
  }

  function trace(result) {
    set('executions', t('실행 횟수') + ' ' + result.toolCalls);
    get('trace').replaceChildren(...result.trace.map(event => {
      const item = document.createElement('li');
      item.textContent = t(stages[event.stage]) + ' · ' + t(decisions[event.decision] ?? String(event.decision));
      return item;
    }));
  }

  function evaluation(result) {
    const grade = result.evaluation;
    if (!grade) {
      set('grade', t('관찰 결과 · 채점 기준 없음'));
      set('diagnosis', '');
      set('gold', '');
      set('gold-quote', '');
      return;
    }
    const bit = value => value === null ? '—' : value ? '✓' : '×';
    set('grade', [t('문서') + ' ' + bit(grade.documentHit), t('구절') + ' ' + bit(grade.passageHit),
      t('인용') + ' ' + bit(grade.citationMatch), t('판정') + ' ' + bit(grade.stanceMatch), t('도구') + ' ' + bit(grade.toolMatch)].join(' · '));
    set('diagnosis', grade.diagnosis ? t(diagnosis[grade.diagnosis]) : t(grade.pass ? '기대 결과 일치' : '기대 결과 불일치'));
    set('gold', grade.goldContext?.citation?.id || '');
    set('gold-quote', grade.goldContext?.citation?.quote || '');
  }

  function summary() {
    const totals = report.summary;
    set('summary', t(totals ? '기본 시험 · 고장 비교 포함' : '관찰 결과 · 채점 기준 없음'));
    table('scores', totals ? [
      [t('문서 Recall@k'), totals.documentHits + '/' + totals.evidenceQuestions],
      [t('구절 Recall@k'), totals.passageHits + '/' + totals.evidenceQuestions],
      [t('정확한 인용'), totals.exactCitations + '/' + totals.evidenceQuestions],
      [t('판정 일치'), totals.stanceMatches + '/' + totals.questions],
      [t('도구 일치'), totals.toolMatches + '/' + totals.questions]
    ] : [], true);
  }

  function render() {
    if (!report) return;
    const view = get('view').value;
    const result = report.results.find(item => item.id === get('case').value) ?? report.results[0];
    for (const element of dialog.querySelectorAll('[data-rag-view]')) element.hidden = element.dataset.ragView !== view;
    ({ answer, retrieval, trace, evaluation, summary })[view](result);
  }

  function show(panel) {
    set('heading', t(titles[panel]));
    for (const element of dialog.querySelectorAll('[data-rag-panel]')) element.hidden = element.dataset.ragPanel !== panel;
    if (!dialog.open) dialog.showModal();
    if (panel === 'report') render();
    if (panel === 'editor') {
      get('editor').value = json(installed?.data ?? fixture);
      set('error', '');
    }
    if (panel === 'downloads') command();
  }

  function renderCases() {
    const prior = get('case').value;
    const ui = report.results.map(result => new Option(t(cases[result.id] ?? result.id), result.id));
    get('case').replaceChildren(...ui);
    if (ui.some(option => option.value === prior)) get('case').value = prior;
  }

  async function install(input) {
    const next = await engine.install(input);
    const verified = await engine.restore(next);
    const nextReport = engine.report(verified);
    installed = verified;
    report = nextReport;
    quoteIndex = 0;
    renderCases();
    if (dialog.open && !get('report').hidden) render();
  }

  function command() {
    const mode = get('command-mode').value;
    const argv = mode === 'install' ? files.input + ' ' + files.state : files.state + ' > ' + files.report;
    set('command', 'node ' + files.runner + ' ' + mode + ' ' + argv);
  }

  function download(name, data, type) {
    const link = document.createElement('a');
    const url = URL.createObjectURL(new Blob([data], { type }));
    link.href = url;
    link.download = name;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function cli() {
    'use strict';
    const { readFile, writeFile, rename, unlink } = require('node:fs/promises');
    const read = async file => JSON.parse(await readFile(file, 'utf8'));
    const output = value => JSON.stringify(value, null, 2) + '\n';
    const engine = globalThis.documentSupportEngine;
    const [command, first, second, ...rest] = process.argv.slice(2);
    async function main() {
      if (rest.length || !first || (command === 'install' && !second) || !['install', 'run'].includes(command)) {
        throw new Error('Usage: install input.json state.json | run state.json [request.json]');
      }
      if (command === 'install') {
        const state = await engine.install(await read(first));
        const temporary = second + '.tmp-' + process.pid;
        try {
          await writeFile(temporary, output(state), { flag: 'wx' });
          await rename(temporary, second);
        } catch (error) {
          await unlink(temporary).catch(() => {});
          throw error;
        }
        process.stdout.write(output({ state: second, manifest: state.manifest, sha256: state.sha256 }));
      } else {
        const state = await engine.restore(await read(first));
        const result = second ? engine.runOne(state, await read(second)) : engine.report(state);
        process.stdout.write(output(result));
      }
    }
    main().catch(error => {
      process.stderr.write(error.message + '\n');
      process.exitCode = 1;
    });
  }

  get('open-workbench').onclick = () => show('report');
  get('open-editor').onclick = get('edit-from-report').onclick = () => show('editor');
  get('open-downloads').onclick = () => show('downloads');
  get('back').onclick = get('cancel-editor').onclick = () => show('report');
  get('case').onchange = get('view').onchange = () => { quoteIndex = 0; render(); };
  get('more-quote').onclick = () => { quoteIndex += 1; render(); };
  get('command-mode').onchange = command;
  get('reset-input').onclick = () => { get('editor').value = json(fixture); set('error', ''); };
  get('editor-form').onsubmit = async event => {
    event.preventDefault();
    const button = get('apply-input');
    button.disabled = true;
    try {
      await install(JSON.parse(get('editor').value));
      show('report');
    } catch (error) {
      set('error', t('JSON과 필드 값을 확인하세요.') + ' ' + error.message);
    } finally {
      button.disabled = false;
    }
  };
  for (const [name, value] of Object.entries({
    input: () => json(installed.data), state: () => json(installed), report: () => json(report)
  })) get('download-' + name).onclick = () => download(files[name], value(), 'application/json');
  get('download-runner').onclick = () => {
    const code = 'globalThis.crypto ??= require("node:crypto").webcrypto;\n' +
      'globalThis.documentSupportFixture = ' + json(fixture).trimEnd() + ';\n' + engine.source() + '\n(' + cli.toString() + ')();\n';
    download(files.runner, code, 'text/javascript');
  };
  addEventListener('course:lang', () => {
    if (!report) return;
    renderCases();
    render();
  });
  const launch = [get('open-workbench'), get('open-editor')];
  launch.forEach(button => { button.disabled = true; });
  install(fixture).then(() => {
    launch.forEach(button => { button.disabled = false; });
  }, error => {
    launch[0].disabled = false;
    get('open-downloads').disabled = true;
    set('load-error', t('로컬 색인을 시작할 수 없습니다.') + ' ' + error.message);
  });
})();
