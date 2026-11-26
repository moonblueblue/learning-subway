// Chapter order and published station IDs come from roadmaps/ai.md via sync-course.py.
(() => {
  const lines = courseCatalog.roadmaps.find(roadmap => roadmap.id === 'ai').chapters;
  const titles = new Map(courseCatalog.topics.flatMap(topic =>
    topic.lessons.map(lesson => [topic.id + '/' + lesson.id, lesson])));
  const byId = id => document.getElementById(id);
  const network = document.querySelector('.network');
  const svg = network.querySelector('.rails');
  const params = new URLSearchParams(location.search);
  let here;
  try { here = JSON.parse(localStorage.getItem('learning-subway:here')); } catch {}
  const last = here?.roadmap === 'ai' ? here : {};
  let selected = lines.find(line => line.id === (params.get('line') || last.line)) || lines[0];
  const lessonSelect = byId('lessons');
  const enter = byId('enter');
  const buttons = new Map();
  const localized = (record, field) => courseI18n.lang === 'en' ? record[field + 'En'] : record[field];

  function drawRails() {
    const bounds = svg.getBoundingClientRect();
    const centers = [...buttons.values()].map(button => {
      const r = button.firstElementChild.getBoundingClientRect();
      return {x: r.x + r.width / 2 - bounds.x, y: r.y + r.height / 2 - bounds.y};
    });
    const [start, ...stops] = centers;
    if (!stops.length) return;
    const upright = matchMedia('(max-width:680px) and (min-height:481px)').matches;
    const junction = upright ? start.x : (start.x + stops[0].x) / 2;
    const d = [`M${start.x} ${start.y}H${junction}`, `M${junction} ${Math.min(start.y, stops[0].y)}V${Math.max(start.y, stops.at(-1).y)}`];
    for (const stop of stops) d.push(`M${junction} ${stop.y}H${stop.x}`);
    const rail = document.createElementNS(svg.namespaceURI, 'path');
    for (const [name, value] of Object.entries({d: d.join(' '), stroke: '#aa5a91', 'stroke-width': 5, 'stroke-linecap': 'round', fill: 'none'}))
      rail.setAttribute(name, value);
    svg.replaceChildren(rail);
  }

  function remember() {
    const url = new URL(location.href);
    url.searchParams.set('line', selected.id);
    if (lessonSelect.value) url.searchParams.set('lesson', lessonSelect.value);
    else url.searchParams.delete('lesson');
    history.replaceState(null, '', url);
    if (lessonSelect.value) enter.href = './' + lessonSelect.value + '.html?' + new URLSearchParams({roadmap: 'ai', line: selected.id});
    else enter.removeAttribute('href');
  }
  function showLine(ref) {
    for (const line of lines) {
      const button = buttons.get(line.id);
      button.querySelector('.route-name').textContent = localized(line, 'title');
      const count = line.lessons.length;
      const status = count ? (courseI18n.lang === 'en' ? count + (count === 1 ? ' lesson' : ' lessons') : '레슨 ' + count + '개') : courseI18n.translate('준비 중');
      button.setAttribute('aria-description', status);
      const goal = button.parentElement.querySelector('.terminus');
      if (goal) {
        goal.firstElementChild.textContent = localized(line, 'destination');
        goal.lastElementChild.textContent = status;
      }
      button.setAttribute('aria-pressed', String(line === selected));
    }
    byId('line-name').textContent = localized(selected, 'title');
    byId('destination').textContent = localized(selected, 'destination');
    lessonSelect.replaceChildren(...selected.lessons.map(({id, ref}) =>
      new Option(id + ' ' + localized(titles.get(ref), 'title'), ref)));
    if (selected.lessons.some(lesson => lesson.ref === ref)) lessonSelect.value = ref;
    const planned = !selected.lessons.length;
    lessonSelect.hidden = enter.hidden = byId('available').hidden = planned;
    byId('planned').hidden = !planned;
    remember();
    requestAnimationFrame(drawRails);
  }

  lines.forEach((line, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'route';
    button.dataset.line = line.id;
    button.dataset.planned = String(!line.lessons.length);
    const marker = document.createElement('span');
    marker.className = 'marker';
    marker.setAttribute('aria-hidden', 'true');
    marker.textContent = index ? String.fromCharCode(64 + index) : 'AI';
    const name = document.createElement('span');
    name.className = 'route-name';
    button.append(marker, name);
    buttons.set(line.id, button);
    if (index) {
      const row = document.createElement('div');
      row.className = 'branch-row';
      const goal = document.createElement('div');
      goal.className = 'terminus';
      goal.append(document.createElement('strong'), document.createElement('small'));
      row.append(button, goal);
      byId('branches').append(row);
    } else byId('trunk').append(button);
    button.addEventListener('click', () => {
      if (line === selected) return;
      selected = line;
      showLine(last.line === line.id ? last.ref : null);
    });
  });
  lessonSelect.addEventListener('change', remember);
  addEventListener('course:lang', () => showLine(lessonSelect.value));
  new ResizeObserver(drawRails).observe(network);
  showLine(params.get('lesson') || (last.line === selected.id ? last.ref : null));
})();
