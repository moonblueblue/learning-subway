// Shared lesson engine. Generated once from the identical copies in every lesson, now edited here.
// These are plain global function declarations, so lesson scripts call them exactly as before.
// A lesson that needs different behaviour declares a function with the same name in its own script;
// that later declaration replaces the shared one for that lesson only.
// Functions read lesson globals (lesson, state, view, ...) at call time, so they must keep these names.

// ---- Timeline routing --------------------------------------------------------------------------
function routeIndex() {
  const slug = location.pathname.split('/').at(-1).replace(/\.html$/, '');
  const match = /^#\/([\w-]+)\/(\d+)$/.exec(location.hash);
  const index = match?.[1] === slug ? Number(match[2]) - 1 : -1;
  const steps = Array.isArray(lesson) ? lesson : lesson.steps;
  return index >= 0 && index < steps.length ? index : 0;
}

let coursePracticeStarted = false;

function lessonDemoEnabled() {
  return !coursePracticeStarted && !motion.matches;
}

function startCoursePractice() {
  coursePracticeStarted = true;
  if ('playing' in state) state.playing = false;
  state.answers?.delete(0);
  if (state.index === 0) showStep(0);
  else goToStep(0);
}

function syncRoute() {
  const index = routeIndex();
  if (index !== state.index) showStep(index);
}

function showStep(index, announce = true) {
  cancelAll();
  state.index = index;
  state.playing = lessonDemoEnabled();
  const s = lesson[index];
  buildScene();
  byId('stage-list').replaceChildren(...s.stages.map((stage) => {
    const names = Object.fromEntries(s.stations.map(([id, name]) => [id, name]));
    return Object.assign(document.createElement('li'), { textContent: `${names[stage.from]} → ${names[stage.to]}` });
  }));
  byId('step-title').textContent = s.title;
  byId('body').textContent = s.body;
  byId('takeaway').textContent = s.takeaway;
  byId('scene-desc').textContent = s.description;
  byId('count').textContent = `${index + 1} / ${lesson.length}`;
  byId('prev').disabled = index === 0;
  byId('next').disabled = index === lesson.length - 1;
  stepButtons.forEach((button, i) => {
    if (i === index) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
  });
  resetRun();
  state.wait = 1000;
  syncPlayback();
  if (announce) byId('announcement').textContent = `${index + 1}단계. ${s.title}`;
}

// ---- Camera: zoom, pan and reset of the isometric scene ----------------------------------------
function svg(name, attrs, parent) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name);
  for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, value);
  if (parent) parent.append(element);
  return element;
}

function viewportPoint(event) {
  const rect = viewport.getBoundingClientRect();
  const scale = Math.min(rect.width / viewWidth, rect.height / viewHeight);
  return {
    x: center.x + (event.clientX - rect.left - rect.width / 2) / scale,
    y: center.y + (event.clientY - rect.top - rect.height / 2) / scale,
  };
}

function setCamera(x, y, zoom) {
  camera.zoom = clamp(zoom, 1, maxZoom);
  const width = viewWidth / camera.zoom;
  const height = viewHeight / camera.zoom;
  camera.x = clamp(x, 0, viewWidth - width);
  camera.y = clamp(y, 0, viewHeight - height);
  viewport.setAttribute('viewBox', `${camera.x} ${camera.y} ${width} ${height}`);
  viewport.classList.toggle('is-zoomed', camera.zoom > 1);
  byId('view-scale').textContent = `${Math.round(camera.zoom * 100)}%`;
  byId('zoom-out').setAttribute('aria-disabled', String(camera.zoom === 1));
  byId('zoom-in').setAttribute('aria-disabled', String(camera.zoom === maxZoom));
}

function zoomBy(delta) {
  if (clamp(camera.zoom + delta, 1, maxZoom) === camera.zoom) return;
  zoomBetween(camera.zoom + delta, center);
  byId('announcement').textContent = `장면 배율 ${Math.round(camera.zoom * 100)}%`;
}

function zoomBetween(nextZoom, from, to = from) {
  const zoom = clamp(nextZoom, 1, maxZoom);
  setCamera(camera.x + from.x / camera.zoom - to.x / zoom,
            camera.y + from.y / camera.zoom - to.y / zoom, zoom);
}

// Cached lesson HTML used this global before camera binding moved into the engine.
function pointerGeometry() {
  const [a, b] = pointers.values();
  if (!b) return { point: a, distance: 0 };
  return { point: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, distance: Math.hypot(a.x - b.x, a.y - b.y) };
}

let cameraDrag = null;

function enableCameraDrag() {
  viewport.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0 || camera.zoom === 1) return;
    cameraDrag = {id: event.pointerId, point: viewportPoint(event)};
    viewport.setPointerCapture(event.pointerId);
  });
  viewport.addEventListener('pointermove', event => {
    if (cameraDrag?.id !== event.pointerId) return;
    const point = viewportPoint(event);
    zoomBetween(camera.zoom, cameraDrag.point, point);
    cameraDrag.point = point;
    viewport.classList.add('is-dragging');
  });
  for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) {
    viewport.addEventListener(name, event => {
      if (cameraDrag?.id !== event.pointerId) return;
      cameraDrag = null;
      viewport.classList.remove('is-dragging');
    });
  }
}

function resetView() {
  if (typeof pointers !== 'undefined') pointers.clear();
  if (cameraDrag && viewport.hasPointerCapture(cameraDrag.id)) viewport.releasePointerCapture(cameraDrag.id);
  cameraDrag = null;
  viewport.classList.remove('is-dragging');
  setCamera(0, 0, 1);
  byId('announcement').textContent = '원래 보기로 돌아왔습니다';
}

// ---- Scene primitives: plates, boxes and shadows -----------------------------------------------
function addPlate(node, className, x, y, text, { pad = 1.4, round = false } = {}) {
  const group = svg('g', { class: className }, node);
  const plate = { group, rect: svg('rect', {}, group), label: svg('text', {}, group), x, y, pad, round };
  plate.label.textContent = text;
  plates.push(plate);
  sizePlate(plate);
  return plate;
}

function sizePlate(plate) {
  const size = parseFloat(getComputedStyle(plate.label).fontSize);
  const width = plate.label.getComputedTextLength() + size * plate.pad;
  const height = size + 8;
  plate.label.setAttribute('x', plate.x);
  plate.label.setAttribute('y', plate.y);
  Object.entries({ x: plate.x - width / 2, y: plate.y - height / 2, width, height, rx: plate.round ? height / 2 : 6 })
    .forEach(([key, value]) => plate.rect.setAttribute(key, value));
}

function setPlate(plate, text) {
  plate.group.classList.toggle('empty', !text);
  if (plate.label.textContent === text) return;
  plate.label.textContent = text;
  sizePlate(plate);
}

function drawBox(node, h, H) {
  const faces = {
    left: [[-h, -h, 0], [h, -h, 0], [h, -h, H], [-h, -h, H]],
    right: [[h, -h, 0], [h, h, 0], [h, h, H], [h, -h, H]],
    top: [[-h, -h, H], [h, -h, H], [h, h, H], [-h, h, H]],
  };
  for (const [name, corners] of Object.entries(faces)) svg('polygon', { class: 'face ' + name, points: corners.map((p) => point(...p)).join(' ') }, node);
  svg('path', { class: 'highlight', d: `M${point(-h, -h, H)}L${point(h, -h, H)}L${point(h, h, H)}` }, node);
}

function drawShadow(node, half) {
  const corners = [[-half + .4, -half - .25], [half + .9, -half - .25], [half + .9, half], [-half + .4, half]];
  svg('polygon', { class: 'shadow', points: corners.map(([x, y]) => point(x, y, 0)).join(' '), filter: 'url(#soft-shadow)' }, node);
}

// ---- Playback: demo loop, timers and handing control to the reader -----------------------------
function tick(now) {
  frame = null;
  const elapsed = lastFrame === null ? 0 : Math.min(now - lastFrame, 80);
  lastFrame = now;
  if (state.playing) {
    state.wait -= elapsed;
    if (state.wait <= 0) demoTick();
  }
  movePackets(now);
  if (state.playing || packets.length) frame = requestAnimationFrame(tick);
  else lastFrame = null;
}

function demoTick() {
  // While the reading diagram covers the scene, the demo waits instead of sending packets nobody can see.
  if (document.querySelector('.course-diagram-open:not(.course-diagram-native)')) { state.wait = 400; return; }
  document.querySelector('.course-step-preview')?.dispatchEvent(new Event('course-playback-start'));
  if (state.busy) { state.wait = 200; return; }
  if (state.s >= lesson[state.index].stages.length) { resetRun(); state.wait = 1400; return; }
  runStage();
  state.wait = state.s + 1 >= lesson[state.index].stages.length ? 4200 : 2600;
}

function syncPlayback() {
  const reduced = motion.matches;
  if (reduced) state.playing = false;
  if (state.playing) kick();
  paint();
  syncTask();
}

function kick() {
  if (frame === null) frame = requestAnimationFrame(tick);
}

// Example note: one line at the top centre of the scene that says what the still picture (reduced motion) shows,
// e.g. "지아 → 102,148 mod 13 = 7 → 7번 칸에 넣음". `content` is a string or a list of pieces (each piece is its own
// tspan, so the page translation finds every piece in the dictionary). `tone` 'ok' (green) or 'bad' (warning).
// The box is sized to the text, again after translation. A line too long for 560px (box 580 of the 620 scene) breaks into two lines between
// pieces (the split that leaves the longer line shortest); only a line still too long is set smaller. Shrinking alone
// left long notes touching both edges in letters too small to read (2026-11-26 scene review).
function exampleNote(content, tone = 'ok') {
  document.getElementById('example-note')?.remove();
  const g = svg('g', { id: 'example-note', class: 'example-note ' + tone }, document.getElementById('scene'));
  const rect = svg('rect', { rx: 6 }, g);
  const label = svg('text', { x: 310, y: 16 }, g);
  for (const part of [].concat(content)) svg('tspan', {}, label).textContent = part;
  const size = () => {
    const parts = [...label.children];
    label.style.fontSize = '';
    label.setAttribute('y', 16);
    parts.forEach((part) => { part.removeAttribute('x'); part.removeAttribute('dy'); });
    let lines = 1, widest = label.getComputedTextLength();
    if (widest > 560 && parts.length > 1) {
      const widths = parts.map((part) => part.getComputedTextLength());
      let best = 0, bestWidest = Infinity;
      for (let i = 1; i < parts.length; i++) {
        const a = widths.slice(0, i).reduce((x, y) => x + y, 0), b = widths.slice(i).reduce((x, y) => x + y, 0);
        if (Math.max(a, b) < bestWidest) { best = i; bestWidest = Math.max(a, b); }
      }
      // A piece that is only an arrow (" → ") stays at the end of the first line.
      if (/^\s*[→·,]\s*$/.test(parts[best].textContent) && best + 1 < parts.length) best += 1;
      const fontSize = parseFloat(getComputedStyle(label).fontSize);
      parts[best].setAttribute('x', 310);
      parts[best].setAttribute('dy', `${fontSize * 1.25}px`);
      lines = 2;
      widest = Math.max(...[parts.slice(0, best), parts.slice(best)].map((line) => line.reduce((x, part) => x + part.getComputedTextLength(), 0)));
    }
    // Text width does not scale exactly with font size (hinting, mixed scripts), so shrink until it fits.
    for (let k = 0; k < 4 && widest > 560; k++) {
      const factor = 554 / widest;
      label.style.fontSize = `${parseFloat(getComputedStyle(label).fontSize) * factor}px`;
      parts.forEach((part) => part.getAttribute('dy') && part.setAttribute('dy', `${parseFloat(getComputedStyle(label).fontSize) * 1.25}px`));
      widest *= factor;
    }
    const lineHeight = parseFloat(getComputedStyle(label).fontSize) * 1.25;
    const h = lines * lineHeight + 10, top = lines > 1 ? 4 : 16 - h / 2;
    label.setAttribute('y', top + 5 + lineHeight / 2);
    const w = widest + 20;
    Object.entries({ x: 310 - w / 2, y: top, width: w, height: h }).forEach(([k, v]) => rect.setAttribute(k, v));
  };
  size();
  new MutationObserver(() => requestAnimationFrame(size)).observe(label, { childList: true, characterData: true, subtree: true });
  document.fonts?.ready.then(() => label.isConnected && size());
}

function later(ms, fn) {
  if (motion.matches) { fn(); return; }
  timers.push(setTimeout(fn, ms));
}

function cancelAll() {
  timers.forEach(clearTimeout);
  timers = [];
  packets.forEach((packet) => packet.group.remove());
  packets = [];
  state.busy = false;
}

function takeOver() {
  if (!state.playing) return;
  state.playing = false;
  resetRun();
  syncPlayback();
}

function resetRun() {
  cancelAll();
  state.s = 0;
  state.wrong = '';
  state.solvedText = '';
  paint();
  syncTask();
}

function snapshot(s) {
  const step = lesson[state.index];
  const holds = { ...step.start.holds };
  const errors = new Set();
  let view = step.start;
  for (const stage of step.stages.slice(0, s)) {
    Object.assign(holds, stage.holds);
    if (stage.reset) errors.delete(stage.reset);
    if (stage.error) errors.add(stage.error);
    view = stage;
  }
  return { holds, errors, view };
}
