// Two languages for every page: Korean (default, written in the pages) and English (from dictionaries).
// Pages stay written in Korean. In English mode this script replaces each Korean text node and attribute with
// its entry from the dictionaries, and keeps watching so text that lesson scripts write later is translated too.
//   Dictionaries: SHARED below (course shell and hub), titles from courseCatalog, and the page's own
//   `<lesson>.en.js`, which sets `window.lessonText = { '한국어': 'English', '레슨 {0}개': '{0} lessons' }`.
//   A key with {0}, {1} ... matches any text in that place and carries it into the English value.
// Rules are in DESIGN.md ("두 언어"). scripts/check-i18n.py reports Korean left on an English page.
(() => {
  const LANGS = ['ko', 'en'];
  const STORE = 'how-it-runs:lang';
  const HANGUL = /[가-힣]/;
  const ATTRS = ['aria-label', 'title', 'placeholder', 'alt', 'aria-description', 'aria-roledescription'];

  const SHARED = {
    // Course shell (dist/shared/course.js, engine.js)
    '레슨 메뉴': 'Lessons', '목차': 'Contents', '코스 목차': 'Course contents', '닫기': 'Close',
    '레슨': 'Lesson', '실습': 'Practice', '직접 해 보기': 'Try it', '단계 설명': 'Step guide',
    '생각해 보기': 'Think about it', '폴더·기록': 'Files and log', '레슨 화면 선택': 'Lesson view',
    '도식 보기': 'Show diagram', '실행 장면 보기': 'Show live scene', '이 단계의 예시': 'Example for this step',
    '다음 ›': 'Next ›', '다음': 'Next', '이전': 'Previous', '다음 문항': 'Next question', '이전 문항': 'Previous question',
    '다음 출력': 'Next output', '이전 출력': 'Previous output', '장면을 처음 배율과 위치로 되돌리기': 'Reset the scene zoom and position',
    '원래 보기': 'Reset view', '원래 보기로 돌아왔습니다': 'Back to the original view', '일시정지': 'Pause',
    '재생': 'Play', '다시 보기': 'Replay', '자동 실행': 'Auto run', '자동 실행 중': 'Running', '직접 실행': 'Manual run',
    '모션 감소 · 직접 실행': 'Reduced motion · manual run', '모션 감소 · 직접 조작': 'Reduced motion · hands-on',
    '타임라인': 'Timeline', '타임라인 {0}': 'Timeline: {0}', '{#0}장': 'Ch. {0}', '{#0}개 레슨': '{0} {0|lesson|lessons}',
    '관찰 포인트': 'What to notice', '해 보기': 'Try', '확대': 'Zoom in', '축소': 'Zoom out',
    '언어': 'Language', '한국어': '한국어',
    // Lesson page parts every lesson shares
    '{#0}장 {1} · 레슨 {#2}': 'Chapter {0}: {1} · Lesson {2}', '{0} · 레슨 {#1}': '{0} · Lesson {1}',
    '{#0}단계. {1}': 'Step {0}. {1}', '이전 단계': 'Previous step', '다음 단계': 'Next step',
    '이전 및 다음 단계': 'Previous and next step', '장면 보기': 'Scene', '장면 확대': 'Zoom in on the scene',
    '장면 축소': 'Zoom out of the scene', '현재 배율': 'Current zoom', '범례': 'Legend', '다음 문제': 'Next problem',
    '✓ 맞았습니다. {0}': '✓ Correct. {0}', '{0} · 이 단계의 문제를 모두 풀었습니다.': '{0} · You solved every problem in this step.',
    '이 단계의 문제를 모두 풀었습니다. {0}': 'You solved every problem in this step. {0}',
    // Pixel screens (0.3, 0.4 and others)
    '{#0}행 {#1}열, 켜짐': 'Row {0}, column {1}, on', '{#0}행 {#1}열, 꺼짐': 'Row {0}, column {1}, off',
    '{#0}행 {#1}열, 밝기 {2}': 'Row {0}, column {1}, brightness {2}', '{#0}행 {#1}열 켬.': 'Turned on row {0}, column {1}.',
    '{#0}행 {#1}열 끔.': 'Turned off row {0}, column {1}.', '{#0}행 {#1}열 밝기 바꿈.': 'Changed the brightness of row {0}, column {1}.',
    '{#0}비트': '{0} {0|bit|bits}', '{#0}바이트': '{0} {0|byte|bytes}', '= {#0}바이트': '= {0} {0|byte|bytes}',
    '그림을 모두 지웠습니다.': 'Cleared the whole picture.', '밝기를 반전했습니다.': 'Inverted the brightness.',
    '모두 지우기': 'Clear all', '반전': 'Invert', '화면': 'Screen', '픽셀 칠하기': 'Painting pixels',
    '이 단계의 문제를 모두 풀었습니다. 자유롭게 바꿔 보세요.': 'You solved every problem in this step. Change anything you like.',
    '장면의 픽셀을 눌러도 됩니다 · 확대 후 드래그로 이동': 'You can also press the pixels in the scene · zoom in, then drag to move',
    '장면의 픽셀을 눌러도 됩니다 · 두 손가락으로 확대': 'You can also press the pixels in the scene · pinch to zoom',
    '장면의 스위치를 눌러도 됩니다 · 확대 후 드래그로 이동': 'You can also press the switches in the scene · zoom in, then drag to move',
    '장면의 스위치를 눌러도 됩니다 · 두 손가락으로 확대': 'You can also press the switches in the scene · pinch to zoom',
    '값이 흐르는 선': 'Line a value flows along', '켜짐 = 1': 'On = 1', '꺼짐 = 0': 'Off = 0',
    // Practice lessons (questions, answers, reflection)
    '{#0}장 {1} · 레슨 {#2} · 실습': 'Chapter {0}: {1} · Lesson {2} · Practice',
    '{#0}장 {1} · 프로젝트 {#2}': 'Chapter {0}: {1} · Project {2}', '{#0}장 {1} · 프로젝트 {#2} · 실습': 'Chapter {0}: {1} · Project {2} · Practice',
    '✓ 맞았습니다.': '✓ Correct.', '✗ 다시 생각해 보세요.': '✗ Think again.', '맞았습니다.': 'Correct.', '다시 생각해 보세요.': 'Think again.',
    '예시 답 보기': 'Show a sample answer', '예시 답 숨기기': 'Hide the sample answer', '정답 보기': 'Show the answer', '정답 숨기기': 'Hide the answer',
    '자유롭게 적어 보세요. 저장되거나 채점되지 않습니다.': 'Write freely. Nothing is saved or graded.',
    '{#0} / {#1} 맞힘': '{0} / {1} correct', '생각해 보기 ·': 'Think about it ·', '앞 레슨과 이어 보기': 'Linking back to earlier lessons',
    '일시정지됨': 'Paused', '재생 중': 'Playing', '현재 단계 다시 재생': 'Replay this step', '다시 재생': 'Replay',
    '자리올림': 'Carry', '이진수 {0}': 'Binary {0}', '1을 더했습니다.': 'Added 1.', '모두 껐습니다.': 'All off.',
    // Hub (dist/index.html)
    '어디까지 가 볼까요': 'Where do you want to go?',
    '컴퓨터와 시스템이 실제로 어떻게 돌아가는지, 노선을 따라 한 역씩 단계별 그림으로 봅니다. 역을 누르면 그 장의 첫 레슨으로 갑니다.':
      'See how computers and systems actually run, one station at a time along a line, in step-by-step diagrams. Choose a station to open the first lesson of that chapter.',
    '노선 {#0}개 · 레슨 {#1}개 · 주제 {#2}개': '{0} {0|line|lines} · {1} {1|lesson|lessons} · {2} {2|topic|topics}',
    '{0} 노선': '{0} line', '{0} 노선의 첫 역': 'First station of the {0} line', '{0}부터 타기': 'Board at {0}',
    '레슨 {#0}개': '{0} {0|lesson|lessons}', '레슨 {#0}개 · 환승 {1}': '{0} {0|lesson|lessons} · transfer to {1}',
    '{0}, 레슨 {#1}개': '{0}, {1} {1|lesson|lessons}', '{0}, 레슨 {#1}개, 환승 {2}': '{0}, {1} {1|lesson|lessons}, transfer to {2}',
    '역 = 장. 누르면 첫 레슨으로': 'Station = chapter. Opens its first lesson', '종점': 'Terminus',
    '환승역 = 다른 노선과 함께 쓰는 레슨이 있는 장': 'Transfer = a chapter with lessons another line shares',
    '주제별 레슨': 'Lessons by topic',
    '레슨은 주제 하나에만 속하고, 여러 노선이 같은 레슨을 함께 지납니다.':
      'Each lesson belongs to one topic, and several lines can pass through the same lesson.',
    '컴퓨터와 시스템이 실제로 어떻게 돌아가는지, 개념 하나하나를 단계별 도식과 직접 조작하는 데모로 들여다봅니다.':
      'See how computers and systems actually run, one concept at a time, with step-by-step diagrams and hands-on demos.',
  };

  const params = new URLSearchParams(location.search);
  let stored = null;
  try { stored = localStorage.getItem(STORE); } catch { /* storage unavailable */ }
  let lang = [params.get('lang'), stored].find((value) => LANGS.includes(value)) || 'ko';

  const exact = new Map();
  const patterns = [];
  function register(dict) {
    for (const [ko, en] of Object.entries(dict || {})) {
      if (/\{#?\d\}/.test(ko)) {
        // {#0} accepts only a number (3, 0.1, 8A, 1,024), so '{#0}장' matches '3장' but never '저장'.
        // A place used twice ('{#0}×{#0}') must hold the same text both times.
        const seen = new Set();
        const source = '^' + ko.replace(/[.*+?^$()|[\]\\]/g, '\\$&').replace(/\{(#?)(\d)\}/g, (_, number, n) => {
          if (seen.has(n)) return `\\k<g${n}>`;
          seen.add(n);
          return number ? `(?<g${n}>-?[\\d.,]+[A-Z]?)` : `(?<g${n}>.+?)`;
        }) + '$';
        // The most specific pattern (most fixed characters) is tried first, so a short pattern such as
        // '{0} · 레슨 {1}' never claims text a longer one was written for.
        const fixed = ko.replace(/\{#?\d\}/g, '').length;
        let pattern;
        try { pattern = new RegExp(source); } catch (error) { console.warn('i18n: skipped pattern', ko, error); continue; }
        const at = patterns.findIndex((entry) => entry[2] < fixed);
        patterns.splice(at < 0 ? patterns.length : at, 0, [pattern, en, fixed]);
      } else if (!exact.has(ko)) exact.set(ko, en);
    }
  }
  function translate(text) {
    const lead = text.match(/^\s*/)[0], tail = text.match(/\s*$/)[0];
    const core = text.trim();
    if (!core) return null;
    if (exact.has(core)) return lead + exact.get(core) + tail;
    // A lesson or chapter number before a known title: "0.1 비트와 이진수", "8A 시스템·인프라", "5 운영체제와 네트워크".
    const numbered = core.match(/^(\d+[A-Z]?(?:\.\d+)?) (.+)$/);
    if (numbered && exact.has(numbered[2])) return lead + numbered[1] + ' ' + exact.get(numbered[2]) + tail;
    for (const [pattern, en] of patterns) {
      const match = core.match(pattern);
      // {0} inserts the matched text (translated when known); {0|line|lines} picks a word by whether it is 1.
      if (match) return lead + en.replace(/\{(\d)(?:\|([^|}]*)\|([^}]*))?\}/g, (_, n, one, many) => {
        const value = match.groups['g' + n];
        if (one !== undefined) return value.trim() === '1' ? one : many;
        return translate(value)?.trim() ?? value;
      }) + tail;
    }
    return null;
  }

  register(typeof window.lessonText === 'object' ? window.lessonText : null);
  register(SHARED);
  if (typeof courseCatalog === 'object') {
    for (const roadmap of courseCatalog.roadmaps) {
      register({ [roadmap.title]: roadmap.titleEn });
      for (const chapter of roadmap.chapters) {
        register({ [chapter.title]: chapter.titleEn });
        for (const track of chapter.tracks) register({ [track.title]: track.titleEn });
      }
    }
    for (const topic of courseCatalog.topics) {
      register({ [topic.title]: topic.titleEn });
      for (const lesson of topic.lessons) register({ [lesson.title]: lesson.titleEn });
    }
  }

  // Originals are kept so switching back to Korean restores the exact text the page wrote.
  const textOriginal = new WeakMap();
  const attrOriginal = new WeakMap();
  // What a reader typed (textarea text) is never touched; the textarea's placeholder and labels still are.
  const SKIP = 'script, style, textarea, [data-no-i18n]';
  const SKIP_ATTRS = 'script, style, [data-no-i18n]';
  let applying = false;

  function setText(node) {
    const parent = node.parentElement;
    if (!parent || parent.closest(SKIP)) return;
    let original = textOriginal.get(node);
    if (original === undefined || (node.data !== original && node.data !== translate(original))) {
      if (!HANGUL.test(node.data)) return;
      original = node.data;
      textOriginal.set(node, original);
    }
    const want = lang === 'en' ? (translate(original) ?? original) : original;
    if (node.data !== want) node.data = want;
  }
  function setAttrs(element) {
    if (element.closest(SKIP_ATTRS)) return;
    let saved = attrOriginal.get(element);
    for (const name of ATTRS) {
      const value = element.getAttribute(name);
      if (value === null) continue;
      const known = saved?.[name];
      if (known === undefined || (value !== known && value !== translate(known))) {
        if (!HANGUL.test(value)) continue;
        saved = { ...saved, [name]: value };
        attrOriginal.set(element, saved);
      }
      const original = attrOriginal.get(element)[name];
      const want = lang === 'en' ? (translate(original) ?? original) : original;
      if (value !== want) element.setAttribute(name, want);
    }
  }
  function walk(root) {
    if (root.nodeType === Node.TEXT_NODE) return setText(root);
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    setAttrs(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (node.nodeType === Node.TEXT_NODE) setText(node); else setAttrs(node);
    }
  }
  // Lessons size their label plates to the text when they draw it (engine.js sizePlate). Translation changes
  // the text afterwards, so plates are measured again whenever text changed.
  function relayout() {
    try {
      if (typeof plates !== 'undefined' && Array.isArray(plates) && typeof sizePlate === 'function')
        plates.forEach((plate) => plate.label?.isConnected && sizePlate(plate));
    } catch { /* a lesson without plates */ }
  }
  const documentTitle = document.title;
  const description = document.querySelector('meta[name=description]');
  const descriptionText = description?.content;
  function apply() {
    applying = true;
    document.documentElement.lang = lang;
    document.title = lang === 'en' ? (translate(documentTitle) ?? documentTitle) : documentTitle;
    if (description) description.content = lang === 'en' ? (translate(descriptionText) ?? descriptionText) : descriptionText;
    walk(document.body);
    relayout();
    document.querySelectorAll('[data-lang-choice]').forEach((button) =>
      button.setAttribute('aria-pressed', String(button.dataset.langChoice === lang)));
    applying = false;
  }

  new MutationObserver((records) => {
    if (applying) return;
    applying = true;
    for (const record of records) {
      if (record.type === 'characterData') setText(record.target);
      else if (record.type === 'attributes') setAttrs(record.target);
      else record.addedNodes.forEach(walk);
    }
    relayout();
    applying = false;
  }).observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });

  function setLang(next) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORE, lang); } catch { /* storage unavailable */ }
    apply();
    dispatchEvent(new CustomEvent('course:lang', { detail: { lang } }));
  }

  // The language switch: Korean first (default), English second. Pages place `[data-lang-switch]` where it belongs.
  function buildSwitch(holder) {
    holder.classList.add('lang-switch');
    holder.setAttribute('role', 'group');
    holder.setAttribute('aria-label', '언어');
    holder.setAttribute('data-no-i18n', '');
    for (const [code, label, short] of [['ko', '한국어', '한'], ['en', 'English', 'EN']]) {
      const button = document.createElement('button');
      button.type = 'button';
      button.lang = code;
      button.dataset.langChoice = code;
      button.innerHTML = `<span class="lang-long">${label}</span><span class="lang-short" aria-hidden="true">${short}</span>`;
      button.setAttribute('aria-pressed', String(code === lang));
      button.addEventListener('click', () => setLang(code));
      holder.append(button);
    }
  }

  window.courseI18n = { get lang() { return lang; }, setLang, translate: (text) => (lang === 'en' ? translate(text) ?? text : text), buildSwitch };
  document.querySelectorAll('[data-lang-switch]').forEach(buildSwitch);
  apply();
})();
