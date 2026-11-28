window.lessonItems ||= {};
window.lessonItemsText ||= {};

window.drawLessonPart = function drawLessonPart(target, figure) {
  const hide = new Set(figure.hide);
  const changed = new Set(figure.changed);
  const descriptions = [];
  const grid = 620;

  function node(kind, attrs, parent, value) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', kind);
    for (const [name, content] of Object.entries(attrs)) element.setAttribute(name, content);
    if (value !== undefined) element.textContent = value;
    parent.append(element);
    return element;
  }
  function group(id, parent = target) {
    const element = node('g', {}, parent);
    if (id) element.setAttribute('data-name', id);
    if (hide.has(id)) element.setAttribute('visibility', 'hidden');
    return element;
  }
  function mark(element, id) {
    if (!changed.has(id)) return element;
    element.setAttribute('data-changed', '');
    // arrow() returns only the head; its shaft is the line drawn just before it and changes with it.
    const shaft = element.previousElementSibling;
    if (element.classList.contains('part-arrow') && shaft?.classList.contains('part-line')) shaft.setAttribute('data-changed', '');
    return element;
  }
  function line(g, x1, y1, x2, y2, tone = '') {
    return node('line', {x1, y1, x2, y2, class: 'part-line ' + tone}, g);
  }
  function arrow(g, x1, y1, x2, y2, tone = '') {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const bx = x2 - 10 * Math.cos(angle);
    const by = y2 - 10 * Math.sin(angle);
    const dx = 4 * Math.sin(angle);
    const dy = 4 * Math.cos(angle);
    line(g, x1, y1, bx, by, tone);
    return node('polygon', {points: [[x2, y2], [bx + dx, by - dy], [bx - dx, by + dy]].map(point => point.join(',')).join(' '),
      class: 'part-arrow ' + tone}, g);
  }
  function box(g, x, y, width, height, tone = '') {
    return node('rect', {x, y, width, height, rx: 4, class: 'part-box ' + tone}, g);
  }
  function label(g, x, y, value, options = {}) {
    const shown = window.courseI18n?.translate(String(value)) ?? value;
    const element = node('text', {x, y, class: 'part-label',
      'text-anchor': options.anchor ?? 'middle'}, g, shown);
    if (options.size) element.style.fontSize = options.size + 'px';
    const actual = element.getComputedTextLength();
    if (options.width && options.width < actual) {
      let current = '';
      const parts = String(shown).split(/\s+/);
      element.textContent = '';
      let row = 0;
      for (const part of parts) {
        const next = current ? current + ' ' + part : part;
        const span = element.lastElementChild ?? node('tspan', {x, dy: 0}, element);
        span.textContent = next;
        if (current && span.getComputedTextLength() > options.width) {
          span.textContent = current;
          node('tspan', {x, dy: options.size ?? 13}, element, part);
          current = part;
          row++;
        } else current = next;
      }
      if (row && options.center) element.setAttribute('y', y - row * (options.size ?? 13) / 2);
    }
    return element;
  }
  function say(...parts) {
    if (descriptions.length) descriptions.push('. ');
    parts.filter(part => part !== undefined && part !== '').forEach((part, i) => {
      if (i) descriptions.push(' ');
      descriptions.push(String(part));
    });
  }
  const kinds = ['a', 'b', 'c', 'd', 'idle'];
  function patterns() {
    const defs = node('defs', {}, target);
    for (const kind of kinds.slice(1)) {
      const pattern = node('pattern', {id: 'lesson-part-' + kind, patternUnits: 'userSpaceOnUse', width: 6, height: 6}, defs);
      node('rect', {width: 6, height: 6, class: 'part-pattern part-' + kind}, pattern);
      if (kind === 'b') node('path', {d: 'M-2 2L2 -2M0 6L6 0M4 8L8 4', class: 'part-pattern-line'}, pattern);
      if (kind === 'c') node('circle', {cx: 3, cy: 3, r: 1, class: 'part-pattern-dot'}, pattern);
      if (kind === 'd') node('path', {d: 'M0 3H6', class: 'part-pattern-line'}, pattern);
    }
  }
  function legend(entries, y) {
    if (!entries?.length) return;
    const width = (grid - 24) / entries.length;
    entries.forEach(({kind, label: value}, index) => {
      const x = 12 + width * index;
      box(target, x, y - 11, 16, 12, 'part-segment kind-' + kind);
      label(target, x + 21, y, value, {anchor: 'start', width: width - 25});
    });
  }
  function drawMap() {
    const {columns, links} = figure;
    const columnWidth = (grid - 28) / (figure.columnSlots ?? columns.length);
    const width = Math.min(145, columnWidth - 34);
    const max = Math.max(...columns.map(column => column.cells.length));
    const pitch = Math.min(55, 231 / max);
    const height = Math.min(pitch - 7, 48);
    const positions = new Map();
    columns.forEach((column, col) => {
      const x = 14 + columnWidth * (col + .5);
      label(target, x, 19, column.title, {width: columnWidth - 8});
      column.cells.forEach((cell, row) => positions.set(cell.id, {x, y: 34 + (row + .5) * pitch, cell}));
    });
    for (const link of links) {
      const {from, to, kind} = link;
      const a = positions.get(from), b = positions.get(to);
      const id = from + '→' + to;
      const g = group(id);
      if (hide.has(from) || hide.has(to)) g.setAttribute('visibility', 'hidden');
      const tone = 'link-' + kind;
      mark(arrow(g, a.x + width / 2, a.y, b.x - width / 2, b.y, tone), id);
      if (!hide.has(id) && !hide.has(from) && !hide.has(to)) {
        say(a.cell.label, a.cell.sub, kind === 'broken' ? '⇥' : '→', b.cell.label, b.cell.sub);
      }
    }
    for (const [id, {x, y, cell}] of positions) {
      const g = group(id);
      mark(box(g, x - width / 2, y - height / 2, width, height), id);
      const compact = height < 35;
      const size = compact ? Math.min(12, (height - 3) / 2) : undefined;
      const sub = cell.sub && label(g, x, y + (compact ? 8 : 12), cell.sub, {width: width - 8, size});
      const lines = sub ? Math.max(1, sub.childElementCount) : 0;
      const offset = lines === 0 ? 4 : -2 - 8 * (lines - 1);
      label(g, x, y + offset, cell.label, {width: width - 8, center: true, size});
      if (lines > 1) sub.setAttribute('y', y + 5);
    }
  }
  function drawTimeline() {
    const {axis, rows, marks = []} = figure;
    const start = 117, end = 589, axisY = 47;
    const x = at => start + (end - start) * at / axis.max;
    label(target, start, 16, axis.unit, {anchor: 'start'});
    arrow(target, start, axisY, end + 13, axisY);
    const pitch = Math.min(44, 167 / rows.length);
    for (const tick of axis.ticks) {
      line(target, x(tick), axisY - 5, x(tick), axisY + 5);
      label(target, x(tick), 34, tick);
    }
    for (const [index, markData] of marks.entries()) {
      const position = x(markData.at);
      const left = marks[index - 1];
      const right = marks[index + 1];
      // Neighbouring mark captions keep a clear gap, so two captions never read as one sentence.
      const low = left ? (position + x(left.at)) / 2 + 9 : 9;
      const high = right ? (position + x(right.at)) / 2 - 9 : grid - 9;
      const available = Math.min(174, high - low);
      const center = Math.max(low + available / 2, Math.min(high - available / 2, position));
      line(target, position, 55, position, 220, 'part-guide');
      label(target, center, 234, markData.label, {width: available});
    }
    rows.forEach((row, index) => {
      const y = 58 + index * pitch;
      label(target, start - 10, y + 14, row.label, {anchor: 'end', width: 99});
      for (const span of row.spans) {
        const g = group(span.id);
        const left = x(span.start), right = x(span.end);
        const segment = mark(box(g, left, y, right - left, Math.min(pitch - 6, 20), 'part-segment kind-' + span.kind), span.id);
        if (span.label) {
          const caption = label(g, (left + right) / 2, y + 14, span.label, {width: right - left - 4});
          if (caption.childElementCount === 2) segment.setAttribute('height', Math.min(pitch - 6, 30));
        }
        if (!hide.has(span.id)) say(row.label, span.label, `${span.start}–${span.end}`, axis.unit);
      }
    });
    legend(figure.legend, 262);
  }
  function drawBars() {
    const {bars, unit, labelWidth = 117} = figure;
    const max = figure.max ?? Math.max(...bars.map(bar => bar.total));
    const dense = figure.insideRowLabels;
    const x0 = labelWidth, width = (dense ? 588 : 603) - x0;
    const startY = figure.topLabel ? 28 : 9;
    const pitch = Math.min(57, (239 - startY) / (figure.barSlots ?? bars.length));
    if (figure.topLabel) label(target, x0, 15, figure.topLabel, {anchor: 'start'});
    const positive = bars.map(bar => bar.total).filter(value => value > 0);
    const shortest = Math.min(...positive), longest = Math.max(...positive);
    const disparity = longest / shortest > 100;
    bars.forEach((bar, row) => {
      const g = group(bar.id);
      const y = startY + row * pitch;
      if (bar.faded) g.setAttribute('opacity', '.55');
      const height = dense ? Math.min(pitch - 4, 21) : Math.min(pitch - 15, 21);
      const baseline = dense ? y + height / 2 + 3.8 : y + 14;
      label(g, x0 - 7, baseline, bar.label, {anchor: 'end', width: x0 - 13, size: dense ? 10 : undefined, center: true});
      let left = x0;
      const annotations = [];
      for (const [index, segment] of bar.segments.entries()) {
        const part = node('g', {}, g);
        if (hide.has(segment.id)) part.setAttribute('visibility', 'hidden');
        const scaled = width * segment.value / max;
        if (segment.value) {
          mark(box(part, left, y, Math.max(scaled, figure.proportional ? 0 : 4), height, 'part-segment kind-' + segment.kind), segment.id);
        }
        const amount = segment.value.toLocaleString('en-US');
        const text = figure.exactLabels || segment.label?.endsWith(amount) ? segment.label
          : [segment.label, amount].filter(Boolean).join(' ');
        if (text) {
          if (dense) {
            const shortBar = bar.total / max <= .25;
            const labelX = shortBar ? x0 + Math.max(width * bar.total / max, 5) + 6 + index * 93 : left + scaled / 2;
            const narrow = scaled < 60 && !shortBar;
            if (!hide.has(segment.id)) annotations.push({
              x: narrow ? Math.min(x0 + width - 3, left + scaled - 3) : labelX,
              text, anchor: shortBar ? 'start' : narrow ? 'end' : 'middle',
            });
          } else if (segment.callout === undefined && scaled >= (figure.exactLabels ? 50 : 112)) {
            label(part, left + scaled / 2, baseline, text, {width: scaled - 8});
          } else {
            const onLeft = left < x0 + width / 2;
            const textX = segment.callout === undefined
              ? (onLeft ? left + 6 : Math.min(left, x0 + width)) : x0 + segment.callout;
            if (segment.callout !== undefined) line(part, left + scaled / 2, y + height, textX - 4, y + height + 3, 'part-guide');
            label(part, textX, y + height + 13, text, {anchor: onLeft ? 'start' : 'end'});
          }
        }
        if (!hide.has(segment.id) && !hide.has(bar.id)) say(bar.label, text || amount, unit);
        left += scaled;
      }
      if (bar.placeholder) box(g, x0, y, width, height, 'part-bar-outline');
      if (changed.has(bar.id)) mark(box(g, x0, y, width * bar.total / max, height, 'part-bar-outline'), bar.id);
      if (annotations.length) {
        const noteGroup = node('g', {class: 'part-bar-labels'}, g);
        for (const note of annotations) label(noteGroup, note.x, baseline, note.text, {size: 10, anchor: note.anchor});
      }
      if (disparity && bar.total === shortest) {
        // One line, once, beside the short bar: '<short> 대 <long> · <N>배' (English '<a> vs <b> · <N>×', spec 3.8 rule 13).
        label(g, x0 + (dense ? 30 : 12), baseline, `${shortest.toLocaleString('en-US')} 대 ${longest.toLocaleString('en-US')} · ${(longest / shortest).toLocaleString('en-US')}배`, {anchor: 'start'});
      }
    });
    legend(figure.legend, 262);
  }
  function drawBranch() {
    const {nodes, edges, token, fadedNodes = []} = figure;
    const cols = Math.max(...nodes.map(item => item.col)) + 1;
    const rows = Math.max(...nodes.map(item => item.row)) + 1;
    const pitch = (grid - 28) / cols;
    const height = 236 / rows;
    const width = Math.min(140, pitch - 21);
    const positions = new Map(nodes.map(item => [item.id,
      {x: 14 + (item.col + .5) * pitch, y: 19 + (item.row + .5) * height, label: item.label}]));
    for (const [id, position] of positions) {
      const {x, y, label: text} = position;
      const g = group(id);
      if (fadedNodes.includes(id)) g.classList.add('part-branch-faded');
      const words = label(g, x, y + 4, text, {width: width - 8, center: true});
      const bounds = words.getBBox();
      const height = Math.max(34, bounds.height + 9);
      g.insertBefore(mark(box(g, x - width / 2, y - height / 2, width, height), id), words);
      Object.assign(position, {height, g});
    }
    for (const {from, to, label: text, taken} of edges) {
      const a = positions.get(from), b = positions.get(to);
      const g = group(from + '→' + to);
      if (hide.has(from) || hide.has(to)) g.setAttribute('visibility', 'hidden');
      const xSide = a.x === b.x ? 0 : Math.sign(b.x - a.x) * width / 2;
      const yDirection = a.x === b.x ? Math.sign(b.y - a.y) : 0;
      const edge = from + '→' + to;
      const tone = taken ? 'link-taken' : 'link-faded';
      arrow(g, a.x + xSide, a.y + yDirection * a.height / 2,
        b.x - xSide, b.y - yDirection * b.height / 2, tone);
      mark(g.querySelector('line'), edge);
      if (text) {
        const dx = b.x - a.x, dy = b.y - a.y;
        const length = Math.hypot(dx, dy);
        const centerX = (a.x + b.x) / 2 + 16 * dy / length;
        const centerY = (a.y + b.y) / 2 - 16 * dx / length;
        const anchor = dy < 0 ? 'end' : dy > 0 ? 'start' : 'middle';
        const words = label(g, centerX, centerY + 4, text, {anchor, width: pitch});
        if (dy === 0) {
          const bounds = words.getBBox();
          const overlap = bounds.y + bounds.height - (a.y - Math.max(a.height, b.height) / 2 - 4);
          if (overlap > 0) words.setAttribute('transform', `translate(0 ${-overlap})`);
        }
      }
      if (taken && !hide.has(from) && !hide.has(to) && !hide.has(from + '→' + to)) say(a.label, '→', b.label);
    }
    for (const {g} of positions.values()) target.append(g);
    if (token && !hide.has(token.at)) {
      const {x, y, height} = positions.get(token.at);
      const g = group('token');
      const atRight = x + 145 > grid;
      const anchorX = atRight ? grid - 13 : x + 9;
      const centerY = y - Math.min(46, y - 16);
      const text = label(g, anchorX, centerY + 4, token.label,
        {anchor: atRight ? 'end' : 'start', width: 125});
      const bounds = text.getBBox();
      const overlap = bounds.y + bounds.height - (y - height / 2 - 4);
      if (overlap > 0) g.setAttribute('transform', `translate(0 ${-overlap})`);
      node('circle', {cx: bounds.x - 9, cy: centerY, r: 5, class: 'part-token'}, g);
      if (!hide.has('token')) say(token.label, positions.get(token.at).label);
    }
  }
  function drawPlane() {
    const {origin, scale, xRange, yRange, elements} = figure;
    function point([x, y]) {
      return [origin[0] + scale * x, origin[1] - scale * y];
    }
    for (let x = Math.ceil(xRange[0]); x <= xRange[1]; x++) {
      if (x === 0) continue;
      line(target, ...point([x, yRange[0]]), ...point([x, yRange[1]]), 'plane-grid');
      const [px, py] = point([x, 0]);
      label(target, px, py + 14, x, {size: 10});
    }
    for (let y = Math.ceil(yRange[0]); y <= yRange[1]; y++) {
      if (y === 0) continue;
      line(target, ...point([xRange[0], y]), ...point([xRange[1], y]), 'plane-grid');
      const [px, py] = point([0, y]);
      label(target, px - 5, py + 4, y, {size: 10, anchor: 'end'});
    }
    const [xEnd, yAxis] = point([xRange[1], 0]);
    const [xAxis, yEnd] = point([0, yRange[1]]);
    line(target, ...point([xRange[0], 0]), xEnd, yAxis, 'plane-axis');
    line(target, ...point([0, yRange[0]]), xAxis, yEnd, 'plane-axis');
    label(target, xEnd + 12, yAxis + 4, 'x');
    label(target, xAxis + 12, Math.max(yEnd + 13, 15), 'y');
    label(target, origin[0] - 8, origin[1] + 14, 'O', {size: 10});
    // The triangle follows the tangent, and the shaft stops at its base.
    function curve(parent, data) {
      const center = point(data.center ?? [0, 0]);
      const radius = data.radiusPx ?? data.radius * scale;
      const rad = value => value * Math.PI / 180;
      const onArc = angle => [center[0] + radius * Math.cos(angle), center[1] - radius * Math.sin(angle)];
      const start = rad(data.start);
      const end = rad(data.end);
      const base = data.arrow ? end - 8 / radius : end;
      const endpoint = onArc(end);
      const back = onArc(base);
      const tone = data.tone === 'alternate' ? 'plane-dash plane-alternate' : 'plane-dash';
      const shaft = node('path', {
        d: `M ${onArc(start).join(' ')} A ${radius} ${radius} 0 ${base - start > Math.PI ? 1 : 0} 0 ${back.join(' ')}`,
        class: 'part-line ' + tone,
      }, parent);
      mark(shaft, data.id);
      if (data.arrow) {
        const direction = Math.atan2(endpoint[1] - back[1], endpoint[0] - back[0]);
        const dx = 3.5 * Math.sin(direction), dy = 3.5 * Math.cos(direction);
        const sides = [endpoint, [back[0] + dx, back[1] - dy], [back[0] - dx, back[1] + dy]];
        node('polygon', {points: sides.map(pair => pair.join(',')).join(' '), class: 'part-arrow ' + tone}, parent);
      }
    }
    function captions(parent, data, start) {
      const texts = Array.isArray(data.label) ? data.label : [data.label];
      for (const [index, text] of texts.entries()) {
        if (text === undefined) continue;
        const [x, y] = data.labelAt ?? start;
        const words = label(parent, x, y + index * (data.leading ?? 14), text, {
          anchor: data.anchor ?? 'start', size: data.size, width: data.labelWidth
        });
        mark(words, data.id);
        say(text);
      }
    }
    for (const data of elements) {
      const {id, type, tone = 'input'} = data;
      if (hide.has(id)) continue;
      const g = group(id);
      if (data.faded) g.setAttribute('opacity', '.3');
      const style = 'plane-' + tone;
      if (type === 'point') {
        const [x, y] = point(data.at);
        mark(node('circle', {cx: x, cy: y, r: 5, class: 'plane-dot ' + style}, g), id);
        captions(g, data, [x + 8, y - 8]);
      } else if (type === 'camera') {
        const [x, y] = point(data.at);
        mark(node('polygon', {points: `${x + 7},${y} ${x - 6},${y - 6} ${x - 6},${y + 6}`,
          class: 'plane-dot ' + style}, g), id);
        captions(g, data, [x + 9, y - 8]);
      } else if (type === 'line' || type === 'arrow') {
        const start = point(data.from), end = point(data.to);
        const draw = type === 'arrow' ? arrow : line;
        mark(draw(g, ...start, ...end, style), id);
        if (type === 'arrow') mark(g.firstElementChild, id);
        captions(g, data, [(start[0] + end[0]) / 2 + 5, (start[1] + end[1]) / 2 - 7]);
      } else if (type === 'arc') {
        curve(g, data);
        captions(g, data, origin);
      } else if (type === 'polygon' || type === 'path') {
        const points = (data.px ?? data.points.map(point)).map(pair => pair.join(',')).join(' ');
        const tag = type === 'path' ? 'polyline' : 'polygon';
        mark(node(tag, {points, class: 'part-line plane-outline ' + style}, g), id);
      } else if (type === 'label') {
        captions(g, data, data.at ? point(data.at) : origin);
      }
    }
  }
  function drawTree() {
    const surface = figure.canvasHeight
      ? node('svg', {x: 0, y: 0, width: grid, height: 280, viewBox: `0 0 ${grid} ${figure.canvasHeight}`}, target)
      : target;
    for (const panel of figure.panels ?? [figure]) {
      const parent = panel.transform ? node('g', {transform: panel.transform}, surface) : surface;
      renderTree(panel, parent);
    }
  }
  function renderTree(tree, parent) {
    const positions = new Map(tree.nodes.map(item => [item.id, item]));
    const pointOnBox = (source, destination) => {
      const dx = destination.x - source.x;
      const dy = destination.y - source.y;
      const fraction = 1 / Math.max(Math.abs(2 * dx / source.width), Math.abs(2 * dy / source.height));
      return [source.x + fraction * dx, source.y + fraction * dy];
    };
    if (tree.title) label(parent, 28, 34, tree.title, {anchor: 'start'});
    for (const route of tree.routes ?? []) {
      if (hide.has(route.id)) continue;
      const g = group(route.id, parent);
      const pts = route.points;
      const start = pts.at(-2), end = pts.at(-1);
      const angle = Math.atan2(end[1] - start[1], end[0] - start[0]);
      const dx = Math.cos(angle), dy = Math.sin(angle);
      const base = [end[0] - 9 * dx, end[1] - 9 * dy];
      const tone = route.dashed ? 'tree-memo-write' : 'tree-memo-read';
      mark(node('polyline', {points: [...pts.slice(0, -1), base].map(pair => pair.join(',')).join(' '),
        class: 'part-line ' + tone}, g), route.id);
      const arrowPoints = [end, [base[0] + 4 * dy, base[1] - 4 * dx], [base[0] - 4 * dy, base[1] + 4 * dx]];
      node('polygon', {points: arrowPoints.map(pair => pair.join(',')).join(' '), class: 'part-arrow ' + tone}, g);
      say(route.label);
    }
    for (const edge of tree.edges) {
      const id = edge.from + '→' + edge.to;
      if (hide.has(id) || hide.has(edge.from) || hide.has(edge.to)) continue;
      const source = positions.get(edge.from), destination = positions.get(edge.to);
      const start = pointOnBox(source, destination), finish = pointOnBox(destination, source);
      const g = group(id, parent);
      const tone = edge.tone === 'active' ? 'link-taken' : edge.tone === 'faded' ? 'link-faded' : '';
      const shape = edge.directed ? arrow(g, ...start, ...finish, tone) : line(g, ...start, ...finish, tone);
      mark(shape, id);
      if (edge.label) label(g, (start[0] + finish[0]) / 2 + 10, (start[1] + finish[1]) / 2 - 6, edge.label,
        {anchor: 'start', width: 65, size: 11});
    }
    for (const {id, x, y, width, height, lines, tone} of tree.nodes) {
      const g = group(id, parent);
      const kind = {active: 'tree-active', faded: 'tree-faded', blocked: 'tree-blocked'}[tone] ?? '';
      mark(box(g, x - width / 2, y - height / 2, width, height, kind), id);
      const leading = Math.min(16, (height - 5) / Math.max(1, lines.length));
      for (const [index, text] of lines.entries()) {
        if (!text) continue;
        const textY = y + 4 + (index - (lines.length - 1) / 2) * leading;
        const words = label(g, x, textY, text, {width: width - 8, center: true});
        const lineId = id + '-' + (index + 1);
        words.setAttribute('data-name', lineId);
        mark(words, lineId);
      }
      if (!hide.has(id)) say(...lines);
    }
    for (const item of tree.labels ?? []) {
      if (hide.has(item.id)) continue;
      mark(label(parent, item.x, item.y, item.text, {anchor: item.anchor, size: item.size}), item.id);
      say(item.text);
    }
    if (tree.memo && !hide.has(tree.memo.id)) {
      const {id, title, titleX, x, y, pitch, width, values, indexInside} = tree.memo;
      const g = group(id, parent);
      if (title) label(g, titleX, y + 5, title, {anchor: 'start', size: 12});
      for (const [index, value] of values.entries()) {
        const center = x + pitch * index;
        const slot = group('칸' + (index + 1), g);
        mark(box(slot, center - width / 2, y - 17, width, 34, 'tree-memo-slot'), id);
        if (changed.has('칸' + (index + 1))) mark(slot.firstElementChild, '칸' + (index + 1));
        label(slot, center, y - (indexInside ? 5 : 22), 'n=' + (index + 1), {size: 10});
        if (value !== '') label(slot, center, y + (indexInside ? 10 : 5), value);
        if (value !== '') say('n=' + (index + 1), value);
      }
    }
  }
  function drawRowPart() {
    const rows = figure.rows ?? [figure];
    const count = Math.max(...rows.map(row => row.cells.length));
    const left = rows.some(row => row.label) ? 83 : 18;
    const pitch = Math.min(69, (grid - left - 18) / count);
    const rowPitch = Math.min(85, 250 / rows.length);
    rows.forEach((row, index) => {
      const y = (280 - rowPitch * rows.length) / 2 + (index + .45) * rowPitch;
      if (row.label) label(target, left - 8, y + 5, row.label, {anchor: 'end'});
      const positions = new Map();
      row.cells.forEach((cell, i) => {
        const x = left + (i + .5) * pitch;
        positions.set(cell.id, x);
        const g = group(cell.id);
        mark(box(g, x - (pitch - 5) / 2, y - 13, pitch - 5, 26, 'cell-' + cell.state), cell.id);
        label(g, x, y + 4, cell.label, {width: pitch - 9, center: true});
        if (!hide.has(cell.id) && cell.state !== 'plain') say(row.label, cell.label, cell.state);
      });
      for (const range of row.ranges ?? []) {
        const from = positions.get(range.from), to = positions.get(range.to);
        const g = group(range.from + '→' + range.to);
        node('path', {d: `M${from} ${y + 17}v5H${to}v-5`, class: 'part-line range-' + range.kind}, g);
        label(g, (from + to) / 2, y + 36, range.label, {width: (to - from) + pitch});
      }
      for (const markData of row.marks ?? []) {
        if (hide.has(markData.at)) continue;
        const x = positions.get(markData.at);
        arrow(target, x, y - 29, x, y - 15);
        label(target, x, y - 34, markData.label, {width: Math.max(pitch, 70)});
      }
    });
  }
  patterns();
  ({map: drawMap, timeline: drawTimeline, bars: drawBars, branch: drawBranch, tree: drawTree, plane: drawPlane, row: drawRowPart})[figure.part]();
  return descriptions;
};

window.drawLessonNetwork = function drawLessonNetwork(target, spec) {
  const {places, roads, origin, scale, half = .8, height = 10} = spec;
  const pointAt = name => [14 * places[name][0], 7 * places[name][1]];
  const pointOnRoad = (name, fraction, {offset = 0, lift = 4} = {}) => {
    const [ax, ay] = pointAt(name[0]), [bx, by] = pointAt(name[1]);
    const angle = Math.atan2(by - ay, bx - ax);
    return [ax + (bx - ax) * fraction - Math.sin(angle) * offset,
      ay + (by - ay) * fraction + Math.cos(angle) * offset - lift];
  };
  const world = svg('g', {transform: `translate(${origin.join(' ')}) scale(${scale})`}, target);
  const edges = svg('g', {}, world);
  const nodes = svg('g', {}, world);
  const labels = svg('g', {}, world);
  const text = (parent, x, y, value, className = '') => {
    const label = svg('text', {x, y, class: 'network-label ' + className}, parent);
    label.textContent = window.courseI18n?.translate(String(value)) ?? value;
    return label;
  };
  const roadLine = (name, from = 0, to = 1, options = {}) => {
    const {tone = '', directed = false, offset = 0, id = name} = options;
    const [x, y] = pointOnRoad(name, from, {offset});
    const [tx, ty] = pointOnRoad(name, to, {offset});
    const angle = Math.atan2(ty - y, tx - x);
    const end = directed ? [tx - 5.5 * Math.cos(angle), ty - 5.5 * Math.sin(angle)] : [tx, ty];
    svg('path', {d: `M${x} ${y}L${end.join(' ')}`, class: 'network-road ' + tone, 'data-name': id}, edges);
    if (directed) svg('polygon', {points: '0,0 -5.5,-2.6 -5.5,2.6', class: 'network-tip ' + tone,
      transform: `translate(${tx} ${ty}) rotate(${angle * 180 / Math.PI})`}, edges);
  };
  for (const road of Object.keys(roads)) roadLine(road, 0, 1, {tone: 'network-plain'});
  const drawPlaces = () => {
    for (const [name] of Object.entries(places).sort(([,p],[,q]) => p[1] - q[1])) {
      const [x,y] = pointAt(name);
      const view = svg('g', {transform: `translate(${x} ${y})`, class: 'network-place ' + (spec.nodeTones?.[name] ?? ''),
        'data-name': '점 ' + name}, nodes);
      drawShadow(view, half);
      drawBox(view, half, height);
      text(view, 0, -height + 1, name, 'network-place-name');
      const number = spec.order?.[name];
      if (number) {
        const badge = svg('g', {transform: `translate(${14 * half + 10} ${-height - 10})`,
          class: 'network-badge', 'data-name': (spec.orderPrefix ?? '번호 ') + name}, view);
        svg('circle', {r: 6.8}, badge);
        text(badge, 0, .5, number);
      }
    }
  };
  drawPlaces();
  return {
    roadLine, pointAt, pointOnRoad,
    canvasPoint: name => pointAt(name).map((v,i) => origin[i] + scale*v),
    text, world, labels,
    highlight(ids) {
      const visible = new Set(ids);
      for (const element of target.querySelectorAll('[data-name]')) {
        if (visible.has(element.getAttribute('data-name'))) element.classList.add('network-changed');
      }
    }
  };
};
