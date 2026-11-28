// The lesson owns its drawings and practical controls. This frame owns navigation and questions.
const lessonFrame = (() => {
  const lessonSteps = lesson.steps;
  const bookmarks = lessonSteps.map((step, position) => step.bookmark ?? position + 1);
  bookmarks.push(lessonSteps.length + 1);
  const fragment = position => '#/' + slug + '/' + bookmarks[position];
  const slug = location.pathname.split('/').at(-1).replace(/\.html$/, '');
  const ref = location.pathname.split('/').slice(-2).join('/').replace(/\.html$/, '');
  const workspace = document.querySelector('.workspace');
  const figure = document.getElementById('figure');
  const description = document.getElementById('scene-desc');
  const heading = document.getElementById('step-title');
  const body = document.getElementById('body');
  const takeaway = document.getElementById('takeaway');
  const announcement = document.getElementById('announcement');
  const timeline = document.querySelector('.steps');
  const previous = document.getElementById('prev');
  const next = document.getElementById('next');
  const practice = workspace.querySelector('.hands-on');
  const terms = create('ul', '', 'lesson-terms');
  const code = create('ol', '', 'lesson-code');
  const questions = create('div', '', 'lesson-questions');
  const practiceQuestions = create('div', '', 'lesson-questions');
  const explanation = workspace.querySelector('.explanation');
  const scrollHint = create('div', '', 'lesson-review-more');
  scrollHint.hidden = true;
  scrollHint.setAttribute('aria-hidden', 'true');
  const hooks = typeof lessonHooks === 'undefined' ? {} : lessonHooks;
  const predictionKey = 'learning-subway:predict:' + ref;
  const reviewKey = 'learning-subway:review:' + ref;
  const predictions = read(predictionKey, {});
  const review = read(reviewKey, {});
  let index = -1;
  let practiceOpen = false;
  let prerequisite;

  function create(tag, text = '', className = '') {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.className = className;
    return element;
  }

  function read(key, fallback, storage = 'sessionStorage') {
    try { return JSON.parse(window[storage].getItem(key)) ?? fallback; }
    catch { return fallback; }
  }

  function save(key, value, storage = 'sessionStorage') {
    try { window[storage].setItem(key, JSON.stringify(value)); }
    catch { /* Private browsing or disabled storage must not stop a lesson. */ }
  }

  function questionCard(question, record, key, prediction, onAnswer, {label, showPrompt = !prediction} = {}) {
    const card = create('section');
    card.dataset.question = question.id ?? '';
    const selected = question.options[record.answer];
    if (prediction) card.append(create('h3', selected ? '내 예측' : '먼저 예측해 보세요'));
    else if (label) card.append(create('h3', label));
    const field = create('div', '', 'lesson-options');
    const feedback = create('div', '', 'lesson-feedback');
    if (showPrompt) card.append(create('p', question.prompt));
    feedback.setAttribute('role', 'status');
    feedback.tabIndex = -1;
    card.append(field, feedback);
    record.order ||= [0, 1, 2];
    if (!record.shuffled) {
      for (let i = record.order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [record.order[i], record.order[j]] = [record.order[j], record.order[i]];
      }
      record.shuffled = true;
      save(key, prediction ? predictions : review);
    }

    for (const position of record.order) {
      const option = question.options[position];
      const control = create('button', option.text, 'action');
      control.type = 'button';
      control.setAttribute('aria-pressed', String(position === record.answer));
      control.disabled = Boolean(selected && (prediction || selected.correct));
      if (option.correct) control.dataset.correct = 'true';
      if (prediction && selected) {
        if (option.correct) {
          control.classList.add('lesson-prediction-answer');
          control.append(create('span', '정답', 'lesson-prediction-label'));
        } else if (position === record.answer) {
          control.append(create('span', '고른 답', 'lesson-prediction-label'));
        }
      }
      control.addEventListener('click', () => {
        record.answer = position;
        save(key, prediction ? predictions : review);
        onAnswer(position);
      });
      field.append(control);
    }

    if (selected) {
      feedback.append(create('strong', selected.correct ? '맞습니다' : prediction ? '예측과 다릅니다' : '다시 골라 보세요'));
      feedback.append(create('p', selected.why));
      if (prediction || selected.correct) {
        const details = create('details');
        const explanations = create('ul');
        for (const position of record.order) {
          if (position === record.answer) continue;
          const option = question.options[position];
          const row = create('li');
          row.append(create('b', option.text), create('p', option.why));
          explanations.append(row);
        }
        details.append(create('summary', '다른 선택지 설명'), explanations);
        feedback.append(details);
      }
    }
    return card;
  }

  function draw(definition, stepIndex) {
    figure.replaceChildren();
    figure.removeAttribute('class');
    if (definition.custom) {
      drawFigure(stepIndex, {hide: definition.hide ?? [], changed: definition.changed ?? []});
    } else if (definition.template) {
      const template = document.getElementById(definition.template);
      figure.append(template.content.querySelector('svg > g').cloneNode(true));
      for (const id of definition.changed ?? []) {
        for (const element of figure.querySelectorAll('[data-name="' + CSS.escape(id) + '"]')) {
          element.setAttribute('data-changed', '');
        }
      }
    } else {
      return window.drawLessonPart(figure, definition);
    }
    return [];
  }

  function reviewItems() {
    const own = lessonItems[ref];
    const items = lesson.review.own.map(id => ({item: own.find(item => item.id === id)}));
    if (lesson.review.prereq) {
      const fallback = own.find(item => item.id === lesson.review.fallback);
      items.push(prerequisite ? {item: prerequisite, label: '앞 레슨에서'} : {item: fallback});
    }
    return items;
  }

  function updateReviewScroll() {
    scrollHint.hidden = !workspace.classList.contains('lesson-review-open')
      || reviewScroll.scrollHeight - reviewScroll.scrollTop <= reviewScroll.clientHeight + 1;
  }

  function renderReview() {
    heading.textContent = '되짚기';
    description.textContent = '되짚기';
    figure.replaceChildren();
    workspace.classList.add('lesson-review-open');
    const done = read('learning-subway:done', [], 'localStorage');
    if (Array.isArray(done) && !done.includes(ref)) save('learning-subway:done', [...done, ref], 'localStorage');

    function renderItem(container, item, label, focus) {
      const record = review[item.id] ||= {};
      const card = questionCard(item, record, reviewKey, false, answer => {
        renderItem(container, item, label, answer);
      }, {label});
      container.replaceChildren(card);
      if (focus !== undefined) {
        const button = card.querySelectorAll('button')[record.order.indexOf(focus)];
        (button.disabled ? card.querySelector('[role=status]') : button).focus();
      }
    }

    questions.replaceChildren(...reviewItems().map(({item, label}) => {
      const container = create('div');
      renderItem(container, item, label);
      return container;
    }));
  }

  function renderFigure(step, waiting) {
    const drawn = draw(waiting ? step.predict.before : step.figure, index);
    const captions = waiting
      ? [step.predict.prompt, ' ', step.predict.before.description]
      : [...drawn, ...(drawn.length && step.description ? ['. '] : []), step.description];
    description.replaceChildren(...captions.filter(Boolean).map(text => document.createTextNode(text)));
  }

  function renderBody(step, waiting) {
    body.replaceChildren();
    if (waiting) return;
    if (!step.links?.length) {
      body.textContent = step.body;
      return;
    }
    const translate = window.courseI18n?.translate ?? (text => text);
    let rest = translate(step.body);
    for (const link of step.links) {
      const text = translate(link.label);
      const start = rest.indexOf(text);
      if (start < 0) continue;
      const anchor = create('a', text);
      anchor.href = link.href;
      body.append(rest.slice(0, start), anchor);
      rest = rest.slice(start + text.length);
    }
    body.append(rest);
  }

  function refreshPart() {
    const step = lessonSteps[index];
    if (!step || practiceOpen) return;
    const waiting = step.predict && predictions[index]?.answer === undefined;
    if ((waiting ? step.predict.before : step.figure).part) renderFigure(step, waiting);
    if (step.links?.length) renderBody(step, waiting);
  }

  function render() {
    const step = lessonSteps[index];
    const record = step?.predict ? predictions[index] ||= {} : null;
    const waiting = record && record.answer === undefined;
    reviewScroll.scrollTop = 0;
    document.getElementById('count').textContent = step ? (index + 1) + '단계 / ' + lessonSteps.length : '되짚기';
    previous.disabled = index === 0;
    next.disabled = !step;
    workspace.classList.toggle('lesson-review-open', !step);
    reviewScroll.tabIndex = step ? -1 : 0;
    scrollHint.hidden = true;
    for (const [position, button] of [...buttons, reviewButton].entries()) {
      if (index === position) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    }
    body.hidden = takeaway.parentElement.hidden = !step || Boolean(waiting);
    terms.replaceChildren();
    code.replaceChildren();
    questions.replaceChildren();
    if (!step) return renderReview();

    heading.textContent = waiting ? step.predict.prompt : step.title;
    renderBody(step, waiting);
    takeaway.textContent = waiting ? '' : step.takeaway;
    renderFigure(step, waiting);

    if (step.predict) questions.append(questionCard(step.predict, record, predictionKey, true, () => {
      render();
      heading.setAttribute('tabindex', '-1');
      heading.focus();
      workspace.dispatchEvent(new Event('lesson-frame-change'));
    }));
    // The program is the step's input, so it shows before the answer too. Only before.code: null hides it (3.8 #7).
    const example = waiting && step.predict.before.code !== undefined ? step.predict.before.code : step.code;
    if (example) {
      code.append(...example.lines.map((line, position) => {
        const item = create('li', line);
        if (position + 1 === example.current) item.setAttribute('aria-current', 'step');
        return item;
      }));
    }
    if (waiting) return;
    for (const term of lesson.terms.filter(term => term.step === index + 1)) {
      const item = create('li');
      item.append(create('b', term.term), ' — ', create('span', term.meaning));
      terms.append(item);
    }
  }

  function setPractice(open) {
    if (practiceOpen === open) return;
    practiceOpen = open;
    const step = lessonSteps[index];
    const record = predictions['practice-' + index] ||= {};
    const ready = open && record.answer !== undefined;
    hooks.onPractice?.(ready);
    practice?.classList.toggle('lesson-practice-locked', open && !ready);
    workspace.classList.toggle('lesson-practice-visible', open && ready);
    if (!open) return;
    practice.prepend(practiceQuestions);
    practiceQuestions.replaceChildren(questionCard(step.practice.predict, record, predictionKey, true, () => {
      practiceOpen = false;
      setPractice(true);
    }, {showPrompt: true}));
  }

  function move(position, push = false) {
    if (position === index || position < 0 || position > lessonSteps.length) return;
    if (practiceOpen) setPractice(false);
    index = position;
    if (push) history.pushState(null, '', fragment(index));
    hooks.onStep?.(index);
    render();
    announcement.textContent = heading.textContent;
    workspace.dispatchEvent(new Event('lesson-frame-change'));
  }

  function fromLocation() {
    const match = /^#\/([\w-]+)\/(\d+)$/.exec(location.hash);
    const position = match?.[1] === slug ? bookmarks.indexOf(Number(match[2])) : -1;
    return Math.max(0, position);
  }

  const buttons = lessonSteps.map(({label}, position) => {
    const item = create('li');
    const button = create('button');
    button.type = 'button';
    // Only the number shows, so a narrow timeline never breaks a title. The title stays in the name and tooltip,
    // and the count beside the heading says where the learner is.
    button.append(create('span', String(position + 1), 'step-number'));
    button.setAttribute('aria-label', (position + 1) + '단계: ' + label);
    button.title = button.getAttribute('aria-label');
    button.addEventListener('click', () => move(position, true));
    item.append(button);
    timeline.append(item);
    return button;
  });
  let reviewScroll = explanation;
  addEventListener('DOMContentLoaded', () => {
    reviewScroll = explanation.querySelector('.course-explanation-body');
    heading.after(questions);
    body.before(code);
    explanation.append(scrollHint);
    reviewScroll.addEventListener('scroll', updateReviewScroll);
    const reviewSize = new ResizeObserver(updateReviewScroll);
    reviewSize.observe(reviewScroll);
    reviewSize.observe(questions);
    if (workspace.classList.contains('lesson-review-open')) reviewScroll.tabIndex = 0;
    refreshPart();
  });
  addEventListener('course:lang', refreshPart);

  const reviewButton = create('button', '되짚기', 'action review-step');
  reviewButton.type = 'button';
  reviewButton.addEventListener('click', () => move(lessonSteps.length, true));
  timeline.after(reviewButton);
  body.after(terms);
  practice?.prepend(practiceQuestions);
  previous.addEventListener('click', () => move(index - 1, true));
  next.addEventListener('click', () => move(index + 1, true));
  for (const event of ['popstate', 'hashchange']) window.addEventListener(event, () => move(fromLocation()));
  window.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey ||
        event.target.closest?.('input, textarea, select, [contenteditable], [role="dialog"]')) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(index + (event.key === 'ArrowRight' ? 1 : -1), true);
  });
  const url = document.querySelector('meta[name="lesson-prereq-items"]')?.content;
  if (url && lesson.review.prereq) {
    const script = document.createElement('script');
    script.src = url;
    script.addEventListener('load', () => {
      const earlier = lesson.review.prereq;
      prerequisite = lessonItems[earlier.ref]?.find(item => item.id === earlier.id && item.novel);
      if (prerequisite) window.courseI18n?.register(lessonItemsText[earlier.ref]);
      if (prerequisite && index === lessonSteps.length) renderReview();
    });
    document.head.append(script);
  }

  const initial = fromLocation();
  history.replaceState(null, '', fragment(initial));
  move(initial);
  return {
    setPractice,
    get canPractice() {
      const step = lessonSteps[index];
      return Boolean(step?.practice && (!step.predict || predictions[index]?.answer !== undefined));
    }
  };
})();

function startCoursePractice() {
  lessonFrame.setPractice(true);
}
