// Shared lesson engine. Generated once from the identical copies in every lesson, now edited here.
// These are plain global function declarations, so lesson scripts call them exactly as before.
// A lesson that needs different behaviour declares a function with the same name in its own script;
// that later declaration replaces the shared one for that lesson only.
// Functions read lesson globals (lesson, state, view, ...) at call time, so they must keep these names.

// ---- Timeline routing --------------------------------------------------------------------------
function syncRoute() {
  const index = routeIndex();
  if (index !== state.index) showStep(index);
}

function showStep(index, announce = true) {
  cancelAll();
  state.index = index;
  if (!state.userPaused) state.playing = !motion.matches;
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
  try { localStorage.setItem(storageKey, String(index)); } catch {}
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

function pointerGeometry() {
  const [a, b] = pointers.values();
  if (!b) return { point: a, distance: 0 };
  return {
    point: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
    distance: Math.hypot(a.x - b.x, a.y - b.y),
  };
}

function resetView() {
  pointers.clear();
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
  document.querySelector('.course-step-preview')?.dispatchEvent(new Event('course-playback-start'));
  if (state.busy) { state.wait = 200; return; }
  if (state.s >= lesson[state.index].stages.length) { resetRun(); state.wait = 1400; return; }
  runStage();
  state.wait = state.s + 1 >= lesson[state.index].stages.length ? 4200 : 2600;
}

function syncPlayback() {
  const reduced = motion.matches;
  if (reduced) state.playing = false;
  byId('status').textContent = reduced ? '모션 감소 · 직접 실행' : state.playing ? '자동 실행 중' : '직접 실행';
  byId('pause').textContent = state.playing ? '일시정지' : '자동 실행';
  byId('pause').disabled = reduced;
  byId('replay').disabled = reduced;
  if (state.playing) kick();
  paint();
  syncTask();
}

function kick() {
  if (frame === null) frame = requestAnimationFrame(tick);
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
