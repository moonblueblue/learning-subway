(() => {
  const main = document.querySelector('main');
  const lessonHeader = main?.querySelector(':scope > header');
  // A lesson is identified by its <topic>/<lesson> path; roadmaps only point at it.
  const pathParts = location.pathname.split('/');
  const pageRef = pathParts.at(-2) + '/' + pathParts.at(-1).replace(/\.html$/, '');
  const lessonsByRef = new Map(courseCatalog.topics.flatMap((topic) =>
    topic.lessons.map((lesson) => [topic.id + '/' + lesson.id, {...lesson, topic}])));
  const current = lessonsByRef.get(pageRef);
  if (!main || !current) return;

  // The menu follows the roadmap the reader came through, else the first roadmap listing this lesson.
  const listsLesson = (roadmap) => roadmap.chapters.some((chapter) =>
    [chapter, ...chapter.tracks].some((group) => group.lessons.some((lesson) => lesson.ref === pageRef)));
  let storedRoadmap = null;
  try { storedRoadmap = sessionStorage.getItem('course-roadmap'); } catch { /* storage unavailable */ }
  const params = new URLSearchParams(location.search);
  const wantedRoadmap = params.get('roadmap') || storedRoadmap;
  const roadmap = courseCatalog.roadmaps.find((item) => item.id === wantedRoadmap && listsLesson(item)) ||
    courseCatalog.roadmaps.find(listsLesson);
  const aiChapters = roadmap?.id === 'ai' ? roadmap.chapters.filter(chapter =>
    chapter.lessons.some(lesson => lesson.ref === pageRef)) : [];
  const aiLine = aiChapters.find(chapter => chapter.id === params.get('line')) || aiChapters[0];
  if (aiLine) document.body.classList.add('ai-journey');
  try { if (roadmap) sessionStorage.setItem('course-roadmap', roadmap.id); } catch { /* storage unavailable */ }
  // The hub marks the last lesson opened ("현재 위치"), on the line it was opened through. It survives a reload.
  try { localStorage.setItem('learning-subway:here', JSON.stringify({ ref: pageRef, roadmap: roadmap?.id, line: aiLine?.id })); } catch { /* storage unavailable */ }
  const resolve = (lesson, line) => ({
    id: lesson.id, ref: lesson.ref, title: lessonsByRef.get(lesson.ref).title, page: '../' + lesson.ref + '.html' + (aiLine ? '?roadmap=ai&line=' + line : '')
  });
  const chapters = roadmap
    ? roadmap.chapters.map((chapter) => ({
      ...chapter, lessons: chapter.lessons.map(lesson => resolve(lesson, chapter.id)),
      tracks: chapter.tracks.map((track) => ({...track, lessons: track.lessons.map(resolve)}))
    }))
    : [{
      id: '', title: current.topic.title, tracks: [],
      lessons: current.topic.lessons.map((lesson, index) =>
        resolve({id: String(index + 1), ref: current.topic.id + '/' + lesson.id}))
    }];

  const fitSlots = [];
  function fitSlot(className, children) {
    const slot = document.createElement('div');
    const content = document.createElement('div');
    slot.className = className + ' course-fit-slot';
    content.className = 'course-fit-content';
    children[0].before(slot);
    slot.append(content);
    content.append(...children);
    fitSlots.push({slot, content});
    return slot;
  }

  // Keep navigation and controls in view while the activity and text fit their panes.
  const timeline = main.querySelector('.timeline');
  if (timeline) {
    const panel = timeline.parentElement;
    const contents = [];
    for (const child of panel.children) {
      if (child === timeline || child.matches('.view-controls, .controls')) break;
      if (!child.matches('.stage-top')) contents.push(child);
    }
    if (contents.length) {
      const activity = fitSlot('course-activity', contents);
      panel.classList.add('course-lesson-panel');
      activity.querySelector('.stage:has(> svg#scene:only-child)')?.classList.add('course-scene');
    }
    const cameraTools = panel.querySelector(':scope > .view-controls');
    const stageHeader = panel.querySelector(':scope > .stage-top');
    if (cameraTools && stageHeader) {
      cameraTools.classList.add('course-camera');
      stageHeader.classList.add('course-stage-header');
      stageHeader.append(cameraTools);
    }
  }
  const explanation = main.querySelector('.explanation');
  const explanationBody = explanation && [...explanation.children].filter((child) => !child.matches('.navigation'));
  const explanationSlot = explanationBody?.length && fitSlot('course-explanation-body', explanationBody);

  const prose = element('div', 'course-prose');
  const title = explanation.querySelector('#step-title');
  title.before(prose);
  prose.append(title, explanation.querySelector('#body'));

  const workspace = main.querySelector('.workspace');
  const canvas = workspace.firstElementChild;
  canvas.classList.add('course-canvas');
  const rail = document.createElement('div');
  rail.className = 'course-rail';
  workspace.append(rail);
  rail.append(explanation);
  const handsOn = canvas.querySelector('.hands-on');
  let practice;
  if (handsOn) {
    practice = fitSlot('course-practice panel', [handsOn]);
    rail.prepend(practice);
    const prompt = element('div', 'course-prompt');
    const inputs = element('div', 'course-inputs');
    const results = handsOn.querySelector(':scope > table:last-child, :scope > .tables:last-child');
    for (const child of [...handsOn.children]) {
      if (child !== results) (child.matches('.try, .readout') ? prompt : inputs).append(child);
    }
    handsOn.prepend(prompt, inputs);
  }

  // All views share one timeline, including the guide on a phone.
  if (timeline) {
    workspace.after(timeline);
    const navigation = explanation.querySelector('.navigation');
    for (const [button, caption] of [[navigation.querySelector('#prev'), ['‹ 이전 단계', '‹ 이전']], [navigation.querySelector('#next'), ['다음 단계 ›', '다음 ›']]]) {
      const label = '타임라인 ' + button.textContent.trim();
      button.setAttribute('aria-label', label);
      button.title = label;
      // A low landscape screen shows the short caption; both say which way the step goes.
      button.replaceChildren(element('span', 'course-step-long', caption[0]), element('span', 'course-step-short', caption[1]));
    }
    timeline.append(navigation);
    timeline.style.setProperty('--step-count', timeline.querySelector('.steps').children.length);
  }

  // Previous and next lesson in course order: a row of two cards under the timeline, shown where the sidebar is not
  // (phones). Step buttons stay in the timeline, so moving a step and moving a lesson are always separate.
  const ordered = aiLine ? chapters.find(chapter => chapter.id === aiLine.id).lessons : chapters.flatMap((chapter) => [...chapter.lessons, ...chapter.tracks.flatMap((track) => track.lessons)]);
  const at = ordered.findIndex((lesson) => lesson.ref === pageRef);
  if (at >= 0 && ordered.length > 1) {
    const pager = element('nav', 'course-pager');
    pager.setAttribute('aria-label', '레슨 이동');
    for (const [lesson, label, className] of [[ordered[at - 1], '← 이전 레슨', 'course-pager-prev'], [ordered[at + 1], '다음 레슨 →', 'course-pager-next']]) {
      if (!lesson) continue;
      const link = element('a', 'course-pager-link ' + className);
      link.href = lesson.page;
      link.title = `${lesson.id} ${lesson.title}`;
      link.append(element('span', 'course-pager-label', label), element('span', 'course-pager-title', `${lesson.id} ${lesson.title}`));
      pager.append(link);
    }
    (timeline ?? main).append(pager);
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  const quizItems = main.querySelector('.course-activity .items');
  if (quizItems) {
    const quiz = element('div', 'course-quiz');
    const quizBar = element('div', 'course-quiz-bar');
    const previous = element('button', 'course-button', '이전 문항');
    const indicator = element('span', 'course-count');
    const next = element('button', 'course-button', '다음 문항');
    previous.type = next.type = 'button';
    indicator.setAttribute('aria-live', 'polite');
    quizBar.append(previous, indicator, next);
    quizItems.before(quiz);
    quiz.append(quizBar, quizItems);
    let itemIndex = 0;
    function showQuizItem() {
      const count = quizItems.children.length;
      quiz.classList.toggle('course-multiple-items', count > 1);
      indicator.textContent = (itemIndex + 1) + ' / ' + count;
      previous.disabled = itemIndex === 0;
      next.disabled = itemIndex >= count - 1;
      [...quizItems.children].forEach((item, index) => {
        item.classList.toggle('course-quiz-current', index === itemIndex);
      });
      scheduleFit();
    }
    previous.addEventListener('click', () => { itemIndex--; showQuizItem(); });
    next.addEventListener('click', () => { itemIndex++; showQuizItem(); });
    new MutationObserver(() => { itemIndex = 0; showQuizItem(); }).observe(quizItems, {childList: true});
    // The lesson renders its initial questions before the deferred course script.
    queueMicrotask(showQuizItem);
  }

  // Preserve the full command transcript without shrinking the prompt as it grows.
  const transcript = main.querySelector('.term-out');
  if (transcript) {
    const pageSize = 5;
    let page = 0;
    const pager = element('div', 'course-log-pages');
    const previous = element('button', 'course-button', '이전 출력');
    const next = element('button', 'course-button', '다음 출력');
    const position = element('span', 'course-count');
    previous.type = next.type = 'button';
    pager.append(previous, position, next);
    transcript.before(pager);
    function showOutput() {
      const lines = [...transcript.children];
      const pages = Math.ceil(lines.length / pageSize);
      pager.hidden = pages <= 1;
      previous.disabled = page === 0;
      next.disabled = page + 1 >= pages;
      position.textContent = (page + 1) + ' / ' + pages;
      lines.forEach((line, index) => { line.hidden = Math.floor(index / pageSize) !== page; });
      scheduleFit();
    }
    previous.addEventListener('click', () => { page--; showOutput(); });
    next.addEventListener('click', () => { page++; showOutput(); });
    new MutationObserver(() => {
      page = Math.max(0, Math.ceil(transcript.childElementCount / pageSize) - 1);
      showOutput();
    }).observe(transcript, {childList: true});
    queueMicrotask(showOutput);
  }

  function lessonList(lessons) {
    const list = element('ul', 'course-lessons');
    for (const lesson of lessons) {
      const item = element('li');
      const link = element('a', 'course-lesson');
      link.href = lesson.page;
      link.append(element('span', 'course-number', lesson.id), element('span', '', lesson.title));
      if (lesson.ref === pageRef && (!aiLine || lesson.id.split('.')[0] === aiLine.id)) link.setAttribute('aria-current', 'page');
      item.append(link);
      list.append(item);
    }
    return list;
  }

  function section(group, isTrack = false) {
    const details = element('details', isTrack ? 'course-track' : 'course-chapter');
    if (!isTrack) details.setAttribute('name', 'course-chapters');
    const summary = element('summary', 'course-summary');
    const prefix = isTrack || !group.id ? group.id : group.id + '장';
    const count = group.lessons.length + (group.tracks ?? []).reduce((total, track) => total + track.lessons.length, 0);
    summary.append(element('span', 'course-number', prefix), element('span', '', group.title),
      element('span', 'course-count', String(count)));
    details.append(summary);
    if (group.lessons.length) details.append(lessonList(group.lessons));
    for (const track of group.tracks ?? []) details.append(section(track, true));
    details.open = details.querySelector('[aria-current="page"]') !== null;
    return details;
  }

  const bar = element('div', 'course-bar');
  const menu = element('button', 'course-button course-menu', '레슨 메뉴');
  menu.type = 'button';
  menu.setAttribute('aria-controls', 'course-drawer');
  menu.setAttribute('aria-haspopup', 'dialog');
  menu.setAttribute('aria-expanded', 'false');
  const brand = element('a', 'course-brand', aiLine ? 'AI 노선도' : 'Learning Subway');
  brand.href = aiLine ? '../ai-map.html?v=1bb1d8ccac5e9eca&' + new URLSearchParams({line: aiLine.id, lesson: pageRef}) : '../index.html';
  bar.append(menu, brand);
  // Language switch (Korean default, English second); CSS keeps it at the right end of the bar.
  const langSwitch = element('div');
  window.courseI18n?.buildSwitch(langSwitch);
  bar.append(langSwitch);
  // A reflection or file tree can use the whole mobile pane without resetting its state.
  const detail = canvas.querySelector('.think, .side');
  const detailAnchor = document.createComment('lesson detail');
  let detailSlot;
  if (detail) {
    detail.before(detailAnchor);
    detailSlot = fitSlot('course-detail panel', [detail]);
    rail.append(detailSlot);
  }
  const views = element('div', 'course-views');
  views.setAttribute('role', 'group');
  views.setAttribute('aria-label', '레슨 화면 선택');
  const viewOptions = [
    ['canvas', canvas.querySelector('#scene') ? '레슨' : '실습', canvas],
    ...(practice ? [['practice', '직접 해 보기', practice]] : []),
    ...(detail ? [['detail', detail.matches('.think') ? '생각해 보기' : '폴더·기록', detailSlot]] : []),
    ['guide', '단계 설명', explanation]
  ];
  for (const [id, title, section] of viewOptions) {
    const button = element('button', '', title);
    button.type = 'button';
    button.dataset.view = id;
    section.id ||= 'course-' + id;
    button.setAttribute('aria-controls', section.id);
    views.append(button);
  }
  if (practice) views.insertBefore(views.querySelector('[data-view=guide]'), views.querySelector('[data-view=practice]'));
  rail.prepend(views);

  const sidebar = element('aside', 'course-sidebar');
  const drawer = element('dialog', 'course-drawer');
  drawer.id = 'course-drawer';
  drawer.setAttribute('aria-labelledby', 'course-drawer-title');
  const drawerTop = element('div', 'course-drawer-top');
  const drawerTitle = element('strong', '', '목차');
  drawerTitle.id = 'course-drawer-title';
  const close = element('button', 'course-button', '닫기');
  close.type = 'button';
  drawerTop.append(drawerTitle, close);
  drawer.append(drawerTop);
  // On a phone the brand is hidden in the bar, so the drawer starts with the way back to the home page.
  const home = element('a', 'course-home', '첫 화면으로');
  home.href = '../index.html';
  drawer.append(home);

  const nav = element('nav', 'course-nav');
  nav.setAttribute('aria-label', '코스 목차');
  const total = chapters.reduce((sum, chapter) =>
    sum + chapter.lessons.length + chapter.tracks.reduce((n, track) => n + track.lessons.length, 0), 0);
  const label = element('div', 'course-nav-heading');
  label.append(element('strong', '', roadmap ? roadmap.title : current.topic.title),
    element('span', 'course-count', total + '개 레슨'));
  nav.append(label, ...chapters.map((chapter) => section(chapter)));
  document.body.classList.add('course-shell');
  document.body.prepend(bar, sidebar, drawer);

  const fitted = matchMedia('(min-width: 960px) and (min-height: 550px)');
  if (lessonHeader) {
    const current = nav.querySelector('[aria-current="page"] .course-number').textContent;
    const number = element('span', 'course-lesson-id', current);
    lessonHeader.prepend(number);
    bar.append(lessonHeader);
    const lead = lessonHeader.querySelector('p:not(.eyebrow)');
    function placeHeader() {
      if (!lead || !explanationSlot) return;
      if (fitted.matches) lessonHeader.append(lead);
      else prose.insertBefore(lead, prose.querySelector('#body'));
    }
    placeHeader();
    fitted.addEventListener('change', placeHeader);
  }
  const barSize = new ResizeObserver(() => {
    document.body.style.setProperty('--course-sidebar-top', bar.offsetHeight + 'px');
  });
  barSize.observe(bar);
  const landscape = matchMedia('(min-width: 620px) and (max-height: 549px)');
  const hasScene = Boolean(canvas.querySelector('#scene'));
  const example = element('figure', 'course-example');
  example.setAttribute('aria-label', '이 단계의 예시');
  const parts = ['before', 'change', 'after'].map(key => {
    const part = element('span', 'course-example-part');
    part.dataset.part = key;
    return part;
  });
  for (const part of parts) {
    if (example.childElementCount) {
      const arrow = element('span', 'course-example-arrow', '→');
      arrow.setAttribute('aria-hidden', 'true');
      example.append(arrow);
    }
    example.append(part);
  }
  if (hasScene) canvas.querySelector('.course-scene').after(example);
  else prose.after(example);

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  reducedMotion.addEventListener('change', showExample);
  // Keep the existing camera and exercise diagram. A motion-free reading can compare
  // two states side by side in time without advancing the simulation or its answers.
  const scene = canvas.querySelector('#scene');
  let previewStep = null;
  workspace.addEventListener('course-playback-start', () => {
    workspace.classList.remove('course-step-preview');
    if (!workspace.classList.contains('course-diagram-open')) showExample();
  });
  function drawSvg(parent, tag, attrs, value) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [key, val] of Object.entries(attrs)) node.setAttribute(key, val);
    if (value !== undefined) node.textContent = value;
    parent.append(node);
    return node;
  }
  const drawingControl = element('div', 'course-diagram-tools');
  const drawingButton = element('button', 'action', '실행 장면 보기');
  drawingButton.type = 'button';
  drawingButton.setAttribute('aria-controls', 'scene');
  drawingControl.append(drawingButton);
  let worldFrame;
  if (scene && lesson.some(step => step.readingDiagram)) {
    const controls = canvas.querySelector('.controls');
    let actions = controls.querySelector(':scope > .actions');
    if (!actions) controls.append(actions = element('div', 'actions'));
    actions.append(drawingControl);
    if (lesson.some(step => step.readingDiagram?.keepWorld)) {
      const world = scene.querySelector('#world');
      worldFrame = drawSvg(scene, 'g', {});
      worldFrame.append(world);
    }
  }
  let showSimulation = false;
  drawingButton.addEventListener('click', () => {
    showSimulation = !showSimulation;
    showExample();
  });

  function drawDiagram(diagram) {
    scene?.querySelector('.course-diagram')?.remove();
    const reading = Boolean(diagram && workspace.classList.contains('course-reading'));
    const visible = reading && !showSimulation;
    drawingControl.hidden = !reading;
    drawingButton.textContent = visible ? '실행 장면 보기' : '도식 보기';
    workspace.classList.toggle('course-diagram-open', visible);
    workspace.classList.toggle('course-diagram-native', visible && Boolean(diagram.keepWorld));
    if (worldFrame) worldFrame.setAttribute('transform', visible && diagram.keepWorld ? 'translate(37 20) scale(.88 .79)' : '');
    if (drawingControl.isConnected) scene.setAttribute('aria-labelledby', visible ? 'scene-title course-diagram-desc' : 'scene-title scene-desc');
    if (!visible) return false;

    const group = drawSvg(scene, 'g', {class: 'course-diagram'});
    drawSvg(group, 'desc', {id: 'course-diagram-desc'}, diagram.description);
    drawSvg(group, 'text', {x: 28, y: 34, class: 'course-diagram-title'}, diagram.title);
    const nodes = new Map(diagram.nodes.map(([id, ...node]) => [id, node]));
    const defs = drawSvg(group, 'defs', {});
    for (const tone of ['plain', 'active', 'blocked', 'muted']) {
      const marker = drawSvg(defs, 'marker', {
        id: 'diagram-tip-' + tone, viewBox: '0 0 10 10',
        markerWidth: 8, markerHeight: 8, markerUnits: 'userSpaceOnUse',
        refX: 8, refY: 5, orient: 'auto'
      });
      drawSvg(marker, 'path', {d: 'M 1 1 L 8 5 L 1 9', class: 'diagram-tip ' + tone});
    }
    // Edges end at each object's boundary, so the arrow points to the destination.
    for (const [from, to, tone = 'plain', label = '', bend = 0] of diagram.edges) {
      const [x, y, width, height] = nodes.get(from);
      const [tx, ty, targetWidth, targetHeight] = nodes.get(to);
      const dx = tx - x;
      const dy = ty - y;
      const border = (w, h) => Math.min((w / 2 + 3) / Math.abs(dx), (h / 2 + 3) / Math.abs(dy));
      const a = border(width, height);
      const b = border(targetWidth, targetHeight);
      const cx = (x + tx) / 2;
      const cy = (y + ty) / 2 + bend;
      const arrow = tone !== 'undirected' ? {'marker-end': `url(#diagram-tip-${tone})`} : {};
      drawSvg(group, 'path', {
        d: `M ${x + a * dx} ${y + a * dy} Q ${cx} ${cy} ${tx - b * dx} ${ty - b * dy}`,
        class: 'diagram-edge ' + tone, ...arrow
      });
      if (label) drawSvg(group, 'text', {x: cx, y: cy - 10, class: 'diagram-edge-label', 'text-anchor': 'middle'}, label);
    }
    for (const [x, y, width, height, lines, tone = 'plain'] of nodes.values()) {
      drawSvg(group, 'rect', {x: x - width / 2, y: y - height / 2, width, height, rx: 6, class: 'diagram-node ' + tone});
      lines.forEach((line, i) => {
        drawSvg(group, 'text', {
          x, y: y + 5 + (i - (lines.length - 1) / 2) * 20,
          'text-anchor': 'middle', class: i === 0 ? 'diagram-node-name' : 'diagram-node-detail'
        }, line);
      });
    }
    for (const [x, y, width, height, value, tone] of diagram.bars || []) {
      drawSvg(group, 'rect', {x, y, width, height, rx: 5, class: 'diagram-node ' + tone});
      drawSvg(group, 'text', {x: x + width + 10, y: y + height / 2 + 5, class: 'diagram-note'}, value);
    }
    for (const [x, y, value] of diagram.labels || []) {
      drawSvg(group, 'text', {x, y, class: 'diagram-note'}, value);
    }
    return true;
  }

  function drawComparison(step) {
    scene?.querySelector('.course-comparison')?.remove();
    const visible = step.readingRows && workspace.classList.contains('course-reading') && (reducedMotion.matches || step.staticComparison || workspace.classList.contains('course-step-preview'));
    workspace.classList.toggle('course-static-comparison', Boolean(visible && (reducedMotion.matches || step.staticComparison)));
    if (!visible) return;
    const group = drawSvg(scene, 'g', {class: 'course-comparison', 'aria-hidden': 'true'});
    step.readingRows.forEach(([label, ...items], row) => {
      const y = 73 + row * 112;
      drawSvg(group, 'text', {x: 30, y: y - 22, class: 'course-row-label'}, label);
      const gap = 14;
      const width = (560 - gap * (items.length - 1)) / items.length;
      items.forEach((item, i) => {
        const x = 30 + i * (width + gap);
        drawSvg(group, 'rect', {x, y, width, height: 44, rx: 6, class: row ? 'course-row-result' : 'course-row-input'});
        drawSvg(group, 'text', {x: x + width / 2, y: y + 28, 'text-anchor': 'middle'}, item);
        if (i < items.length - 1) drawSvg(group, 'path', {d: 'M' + (x + width + 2) + ' ' + (y + 22) + 'h9m-4 -4 4 4 -4 4', class: 'course-row-link'});
      });
    });
  }
  function showExample() {
    const current = timeline.querySelector('[aria-current="step"]');
    const index = [...timeline.querySelectorAll('.steps button')].indexOf(current);
    const step = lesson[index];
    if (!step) return;
    if (step !== previewStep) {
      previewStep = step;
      showSimulation = false;
      workspace.classList.toggle('course-step-preview', Boolean(step.readingRows || step.readingStage || step.readingMemory || step.readingSearch || step.readingRoute || step.readingSchedule));
    }
    drawDiagram(step.readingDiagram);
    drawComparison(step.readingDiagram ? {} : step);
    let values = step.example;
    if (step.readingStage) {
      const event = step.stages[step.readingStage - 1];
      const names = new Map(step.stations.map(([id, name]) => [id, name]));
      values = [names.get(event.from) + ' · ' + event.label, event.title, event.text];
    }
    // Refresh the diagram from the preview or the learner’s own simulation state.
    if (step.readingStage || step.readingMemory || step.readingSearch || step.readingRoute || step.readingSchedule) paint();
    example.hidden = !values;
    if (values) parts.forEach((part, i) => { part.textContent = values[i]; });
    scheduleFit();
  }
  new MutationObserver(showExample).observe(timeline.querySelector('.steps'), {
    attributes: true, subtree: true, attributeFilter: ['aria-current']
  });
  let selectedView = hasScene ? 'canvas' : 'guide';
  function placeViews() {
    if (fitted.matches) rail.prepend(views);
    else if (landscape.matches) bar.append(views);
    else workspace.before(views);
    if (detail) {
      if (fitted.matches) detailAnchor.after(detail);
      else detailSlot.firstElementChild.append(detail);
    }
    const desktop = fitted.matches;
    const reading = hasScene && selectedView !== 'practice';
    const summary = !aiLine && !desktop && hasScene && selectedView === 'canvas';
    workspace.classList.toggle('course-reading', reading);
    const hint = canvas.querySelector('.view-hint');
    if (hint) hint.setAttribute('aria-hidden', String(reading));
    workspace.classList.toggle('course-summary-open', summary);
    views.hidden = desktop && !practice;
    const selected = desktop && practice && reading ? 'guide' : selectedView;
    for (const [id, , section] of viewOptions) {
      const visible = desktop
        ? id === 'canvas' || (id === 'guide' && (!practice || reading)) || (id === 'practice' && !reading)
        : id === selectedView || (summary && id === 'guide');
      section.hidden = !visible;
      const button = views.querySelector('[data-view="' + id + '"]');
      button.hidden = desktop && (id === 'canvas' || id === 'detail');
      button.setAttribute('aria-pressed', String(id === selected));
    }
    showExample();
  }
  views.addEventListener('click', (event) => {
    const id = event.target.closest('button')?.dataset.view;
    if (!id) return;
    selectedView = id;
    placeViews();
  });
  fitted.addEventListener('change', placeViews);
  landscape.addEventListener('change', placeViews);

  let fitFrame = null;
  function scheduleFit() {
    if (fitFrame !== null) return;
    fitFrame = requestAnimationFrame(() => {
      fitFrame = null;
      for (const {slot, content} of fitSlots) {
        if (!slot.clientWidth || !slot.clientHeight) continue;
        const applyScale = (scale) => {
          content.style.setProperty('--course-fit', scale);
          return slot.scrollHeight <= slot.clientHeight + 1 && slot.scrollWidth <= slot.clientWidth + 1;
        };
        if (applyScale(1)) continue;
        let low = 0.05;
        let high = 1;
        for (let step = 0; step < 9; step++) {
          const middle = (low + high) / 2;
          if (applyScale(middle)) low = middle;
          else high = middle;
        }
        applyScale(low);
      }
    });
  }
  const slotSize = new ResizeObserver(scheduleFit);
  const slotContent = new MutationObserver((records) => {
    if (records.some(({target}) => !(target.nodeType === 1 ? target : target.parentElement)?.closest('svg'))) {
      scheduleFit();
    }
  });
  for (const {slot, content} of fitSlots) {
    slotSize.observe(slot);
    slotContent.observe(content, {subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['hidden']});
    content.addEventListener('input', scheduleFit);
  }
  placeViews();

  const desktop = matchMedia('(min-width: 1100px)');
  // The sidebar keeps its scroll position from the previous lesson, so it does not jump while the content changes.
  function placeNav() {
    if (desktop.matches && drawer.open) drawer.close();
    (desktop.matches ? sidebar : drawer).append(nav);
    if (!desktop.matches) return;
    try { sidebar.scrollTop = Number(sessionStorage.getItem('course-sidebar-scroll')) || 0; } catch { /* storage unavailable */ }
    nav.querySelector('[aria-current="page"]')?.scrollIntoView({block: 'nearest'});
  }
  addEventListener('pagehide', () => {
    try { sessionStorage.setItem('course-sidebar-scroll', String(sidebar.scrollTop)); } catch { /* storage unavailable */ }
  });
  placeNav();
  desktop.addEventListener('change', placeNav);
  menu.addEventListener('click', () => {
    drawer.showModal();
    menu.setAttribute('aria-expanded', 'true');
    document.body.classList.add('course-drawer-open');
    nav.querySelector('[aria-current="page"]')?.scrollIntoView({block: 'nearest'});
    close.focus({preventScroll: true});
  });
  close.addEventListener('click', () => drawer.close());
  drawer.addEventListener('click', (event) => {
    if (event.target === drawer || event.target.closest('.course-lesson')) drawer.close();
  });
  drawer.addEventListener('close', () => {
    menu.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('course-drawer-open');
    if (!desktop.matches) menu.focus({preventScroll: true});
  });
  for (const surface of [nav, bar, drawer]) {
    surface.addEventListener('keydown', (event) => {
      if (event.key.startsWith('Arrow')) event.stopPropagation();
    });
  }
})();
