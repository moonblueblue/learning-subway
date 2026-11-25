(() => {
  const main = document.querySelector('main');
  const lessonHeader = main?.querySelector(':scope > header');
  const pageName = location.pathname.split('/').pop() || 'index.html';
  const currentChapter = courseCatalog.find((chapter) =>
    [chapter, ...chapter.tracks].some((group) =>
      group.lessons.some((lesson) => lesson.page === pageName)));
  if (!main || !currentChapter) return;

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
      const reset = cameraTools.querySelector('#view-reset');
      if (reset) {
        const label = reset.textContent.trim();
        reset.setAttribute('aria-label', label);
        reset.title = label;
        reset.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M7 3H3v4m10-4h4v4M3 13v4h4m10-4v4h-4"/></svg>';
      }
      stageHeader.classList.add('course-stage-header');
      stageHeader.append(cameraTools);
      const status = stageHeader.querySelector('.status');
      if (status) panel.querySelector('.controls .actions').prepend(status);
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
    for (const [button, caption] of [[navigation.querySelector('#prev'), '‹'], [navigation.querySelector('#next'), '다음 ›']]) {
      const label = '타임라인 ' + button.textContent.trim();
      button.setAttribute('aria-label', label);
      button.title = label;
      button.textContent = caption;
    }
    timeline.append(navigation);
    timeline.style.setProperty('--step-count', timeline.querySelector('.steps').children.length);
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
      link.href = './' + lesson.page;
      link.append(element('span', 'course-number', lesson.id), element('span', '', lesson.title));
      if (lesson.page === pageName) link.setAttribute('aria-current', 'page');
      item.append(link);
      list.append(item);
    }
    return list;
  }

  function section(group, isTrack = false) {
    const details = element('details', isTrack ? 'course-track' : 'course-chapter');
    const summary = element('summary', 'course-summary');
    const prefix = isTrack ? group.id : group.id + '장';
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
  const brand = element('a', 'course-brand', 'System Design');
  brand.href = './bits.html';
  bar.append(menu, brand);
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

  const nav = element('nav', 'course-nav');
  nav.setAttribute('aria-label', '코스 목차');
  const total = courseCatalog.reduce((sum, chapter) =>
    sum + chapter.lessons.length + chapter.tracks.reduce((n, track) => n + track.lessons.length, 0), 0);
  const label = element('div', 'course-nav-heading');
  label.append(element('strong', '', '커리큘럼'), element('span', 'course-count', total + '개 레슨'));
  nav.append(label, ...courseCatalog.map((chapter) => section(chapter)));
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
  let selectedView = 'canvas';
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
    const summary = !desktop && hasScene && selectedView === 'canvas';
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
    scheduleFit();
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
  function placeNav() {
    if (desktop.matches && drawer.open) drawer.close();
    (desktop.matches ? sidebar : drawer).append(nav);
    if (desktop.matches) nav.querySelector('[aria-current="page"]')?.scrollIntoView({block: 'nearest'});
  }
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
