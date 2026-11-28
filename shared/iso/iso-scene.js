// Shared 2.5D scene for lesson figures (docs/redesign/figure-guide.md, sections 1, 3, 3-1 and 8).
// Solids, the camera and shading come from anatomy's kit (IsoKit, iso-kit.js). This layer adds what lessons
// share: lanes that run across the screen, blocks and standing panels, floor wires with one filled triangle
// arrowhead, value dots, a faint floor grid, painter's order, and the flow motion.
//
// Coordinates: u runs left to right across the screen, v runs from the back to the front, z is up.
// One unit is about one figure pixel before the scene is fitted into the 620 x 280 figure.
window.IsoScene = (() => {
  const K = window.IsoKit;
  const NS = 'http://www.w3.org/2000/svg';
  const half = Math.SQRT1_2;
  const world = (u, v, z = 0) => [(u + v) * half, (v - u) * half, z];
  const make = (tag, attrs = {}, parent) => {
    const element = document.createElementNS(NS, tag);
    for (const [key, value] of Object.entries(attrs)) if (value !== undefined) element.setAttribute(key, value);
    parent?.append(element);
    return element;
  };
  const fromMarkup = (markup, parent) => {
    const holder = make('g');
    holder.innerHTML = markup;
    const element = holder.firstElementChild;
    parent.append(element);
    return element;
  };

  // A scene fitted into the figure. `bounds` lists [u, v, z] points that must stay inside, so every step
  // that shares the same bounds keeps every object in the same place.
  function scene(group, {bounds, width = 620, height = 280, pad = 12, headroom = 0}) {
    const P = K.fitProjection(bounds.map(point => world(...point)), width, height, {pad, headroom});
    const root = make('g', {class: 'iso-scene'}, group);
    const layers = Object.fromEntries(['grid', 'wires', 'solids', 'labels', 'motion']
      .map(name => [name, make('g', {class: 'iso-layer-' + name}, root)]));
    const at = (u, v, z = 0) => K.iso(world(u, v, z), P);
    const depth = (u, v, z = 0) => K.depthOf(world(u, v, z), P);

    // A solid standing on the floor. `facing: 'front'` lines the plan up with the lane, so its front face looks
    // straight at the reader (screens, cards, plates). Otherwise the plan lines up with the floor grid and its
    // top reads as a diamond (platforms, boxes).
    function block(u, v, {w, d, h, z = 0, r = 2, kind = 'base', name, changed = false, facing}) {
      let ring;
      if (facing === 'front') {
        ring = [[u - w / 2, v - d / 2], [u + w / 2, v - d / 2], [u + w / 2, v + d / 2], [u - w / 2, v + d / 2]]
          .map(([pu, pv]) => world(pu, pv).slice(0, 2));
      } else {
        const [x, y] = world(u, v);
        ring = K.roundedPlan({x: x - w / 2, y: y - d / 2, w, d, r});
      }
      const paths = K.extrude(ring, z, h, P);
      const solid = fromMarkup(K.solidSvg(paths, {tone: 'mid', className: 'kind-' + kind}), layers.solids);
      solid.dataset.depth = depth(u, v, z + h / 2);
      if (name) solid.dataset.name = name;
      if (changed) solid.querySelector('.iso-edge').setAttribute('data-changed', '');
      return solid;
    }

    // Text on the front face of a front-facing block: the face looks at the reader, so the text stays upright.
    function faceText(u, v, z, text, className, parent = layers.labels) {
      const [x, y] = at(u, v, z);
      const label = make('text', {x, y, class: className}, parent);
      label.textContent = text;
      return label;
    }

    // A wire on the floor through [u, v] points. It runs under the blocks at both ends; the arrowhead is a
    // filled triangle on the open stretch. `travel` is the open stretch a moving value follows (two [u, v]),
    // `seq` orders the motion, `carry` is the value written on the moving dot, and `moveFrom` ([u, v]) starts the
    // moving dot somewhere on the open stretch, such as at the value dot it copies.
    function wire(points, {state = 'flow', arrowAt = .5, travel, seq, carry, moveFrom} = {}) {
      const screen = points.map(([u, v]) => at(u, v, .6));
      const path = make('path', {class: 'iso-wire wire-' + state, d: K.pathOf(screen)}, layers.wires);
      const [a, b] = travel ? travel.map(([u, v]) => at(u, v, .6)) : [screen[0], screen.at(-1)];
      const tip = [a[0] + (b[0] - a[0]) * arrowAt, a[1] + (b[1] - a[1]) * arrowAt];
      const angle = Math.atan2(b[1] - a[1], b[0] - a[0]);
      const corner = (along, across) => [tip[0] + along * Math.cos(angle) - across * Math.sin(angle),
                                         tip[1] + along * Math.sin(angle) + across * Math.cos(angle)];
      make('polygon', {class: 'iso-arrow arrow-' + state,
        points: [corner(5, 0), corner(-5, -4.5), corner(-5, 4.5)].map(point => point.map(n => n.toFixed(1)).join(',')).join(' ')},
        layers.wires);
      if (seq !== undefined && travel) {
        path.dataset.seq = seq;
        const start = moveFrom ? at(moveFrom[0], moveFrom[1], .6) : a;
        path.dataset.route = [start, b].map(point => point.map(n => n.toFixed(1)).join(',')).join(' ');
        if (carry !== undefined) path.dataset.carry = carry;
      }
      return path;
    }

    // A value dot sitting on a wire: what is handed over, written in the page's language.
    function dot(u, v, value) {
      const [x, y] = at(u, v, .6);
      const shown = window.courseI18n?.translate(String(value)) ?? String(value);
      const width = [...shown].reduce((sum, ch) => sum + (/[가-힣]/.test(ch) ? 15 : 8.5), 0);
      const g = make('g', {class: 'iso-dot'}, layers.labels);
      make('circle', {cx: x, cy: y, r: Math.max(13, width / 2 + 6)}, g);
      make('text', {x, y: y + 5, class: 'iso-dot-label'}, g).textContent = value;
      return g;
    }

    // A faint grid on the floor along the floor axes, fading towards its edges.
    function grid(uRange, vRange, step = 24) {
      const g = make('g', {class: 'iso-grid'}, layers.grid);
      const [u0, u1] = uRange, [v0, v1] = vRange;
      const corners = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]].map(([u, v]) => world(u, v));
      const xs = corners.map(c => c[0]), ys = corners.map(c => c[1]);
      const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
      const line = (p, q) => make('path', {d: K.pathOf([K.iso([...p, 0], P), K.iso([...q, 0], P)])}, g);
      for (let x = Math.ceil(x0 / step) * step; x <= x1; x += step) line([x, y0], [x, y1]);
      for (let y = Math.ceil(y0 / step) * step; y <= y1; y += step) line([x0, y], [x1, y]);
      return g;
    }

    // Painter's order: solids further back are painted first (anatomy's depthOf at each solid's centre).
    function settle() {
      const solids = [...layers.solids.children].sort((a, b) => a.dataset.depth - b.dataset.depth);
      layers.solids.append(...solids);
    }

    return {P, at, depth, layers, block, faceText, wire, dot, grid, settle};
  }

  // Flow motion (figure guide 3-1). Every wire with a route sends a packet along its open stretch in `seq`
  // order; wires with the same seq move together. An element marked `data-after="n"` appears when the packets
  // of seq n arrive. The figure as drawn is the end of the motion, so reduced motion simply keeps it.
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let run = 0;
  function play(figure) {
    const token = ++run;
    const routes = [...figure.querySelectorAll('[data-route]')];
    if (reduced.matches || document.hidden || !routes.length) return Promise.resolve();
    const after = [...figure.querySelectorAll('[data-after]')];
    for (const element of after) element.classList.add('iso-waiting');
    const motion = figure.querySelector('.iso-layer-motion') ?? make('g', {}, figure);
    const steps = [...new Set(routes.map(path => Number(path.dataset.seq)))].sort((a, b) => a - b);
    const ease = t => 1 - Math.pow(1 - t, 3);
    const travel = path => new Promise(done => {
      const [[x0, y0], [x1, y1]] = path.dataset.route.split(' ').map(point => point.split(',').map(Number));
      const g = make('g', {class: 'iso-packet'}, motion);
      const label = path.dataset.carry;
      const shown = label === undefined ? '' : (window.courseI18n?.translate(label) ?? label);
      // The moving dot is the same size as the value dot it starts from, so its word stays readable.
      const width = [...shown].reduce((sum, ch) => sum + (/[가-힣]/.test(ch) ? 15 : 8.5), 0);
      make('circle', {r: Math.max(13, width / 2 + 6)}, g);
      if (shown) make('text', {y: 5}, g).textContent = shown;
      const ms = 750, start = performance.now();
      const frame = now => {
        if (token !== run) return g.remove(), done();
        const t = Math.min(1, (now - start) / ms), k = ease(t);
        g.setAttribute('transform', `translate(${(x0 + (x1 - x0) * k).toFixed(1)} ${(y0 + (y1 - y0) * k).toFixed(1)})`);
        if (t < 1) requestAnimationFrame(frame);
        else { g.remove(); done(); }
      };
      requestAnimationFrame(frame);
    });
    return steps.reduce((previous, seq) => previous.then(() => {
      if (token !== run) return;
      return Promise.all(routes.filter(path => Number(path.dataset.seq) === seq).map(travel)).then(() => {
        if (token !== run) return;
        for (const element of after.filter(element => Number(element.dataset.after) === seq)) element.classList.remove('iso-waiting');
      });
    }), Promise.resolve()).finally(() => {
      // Stopped or finished, the figure ends as drawn: nothing stays hidden.
      for (const element of after) element.classList.remove('iso-waiting');
      for (const packet of motion.querySelectorAll('.iso-packet')) packet.remove();
    });
  }
  document.addEventListener('visibilitychange', () => { if (document.hidden) run++; });

  return {scene, play, world};
})();
