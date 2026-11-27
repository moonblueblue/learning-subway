// Timeline and prediction practice for lessons with static reading diagrams.
function showStep(index, announce = true) {
  state.index = index;
  const step = lesson[index];
  byId('step-title').textContent = step.title;
  byId('body').textContent = step.body;
  byId('takeaway').textContent = step.takeaway;
  byId('scene-desc').textContent = step.readingDiagram.description;
  byId('count').textContent = `${index + 1} / ${lesson.length}`;
  byId('prev').disabled = index === 0;
  byId('next').disabled = index === lesson.length - 1;
  for (const [position, button] of stepButtons.entries()) {
    if (position === index) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
  }
  renderPractice();
  if (announce) byId('announcement').textContent = `${index + 1}단계. ${step.title}`;
}

function renderPractice() {
  const {index, answers} = state;
  const [question, correct, wrong, reason, other] = lesson[index].quiz;
  const options = index % 2 ? [correct, wrong] : [wrong, correct];
  if (other) options.splice(1, 0, other);
  byId('prompt').textContent = question;
  const chosen = answers.get(index);
  function markAnswer(answer) {
    for (const button of byId('choices').children) {
      button.setAttribute('aria-pressed', String(button.dataset.answer === answer));
    }
    const feedback = byId('feedback');
    feedback.replaceChildren();
    if (answer !== undefined) {
      feedback.append(document.createTextNode(feedbackMessages[answer === correct ? 0 : 1]));
      if (answer === correct) feedback.append(document.createElement('br'), document.createTextNode(reason));
    }
  }
  byId('choices').replaceChildren(...options.map(answer => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'action';
    button.dataset.answer = answer;
    button.textContent = answer;
    button.onclick = () => {
      answers.set(index, answer);
      markAnswer(answer);
    };
    return button;
  }));
  markAnswer(chosen);
}

function goToStep(index) {
  if (index < 0 || index >= lesson.length || index === state.index) return;
  history.pushState(null, '', `#/${slug}/${index + 1}`);
  showStep(index);
}

const stepButtons = lesson.map(({label}, index) => {
  const item = document.createElement('li');
  const button = document.createElement('button');
  const number = document.createElement('span');
  button.type = 'button';
  number.className = 'step-number';
  number.textContent = index + 1;
  button.append(number, document.createTextNode(label));
  button.onclick = () => goToStep(index);
  item.append(button);
  byId('steps').append(item);
  return button;
});
byId('prev').onclick = () => goToStep(state.index - 1);
byId('next').onclick = () => goToStep(state.index + 1);
window.addEventListener('popstate', syncRoute);
window.addEventListener('hashchange', syncRoute);
window.addEventListener('keydown', event => {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey ||
      event.target.closest?.('input, textarea, select, [contenteditable], [role="dialog"]')) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    goToStep(state.index + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
const initial = routeIndex();
history.replaceState(null, '', `#/${slug}/${initial + 1}`);
showStep(initial, false);
