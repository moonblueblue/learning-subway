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
  function group(id) {
    const element = node('g', {}, target);
    if (id) element.setAttribute('data-name', id);
    if (hide.has(id)) element.setAttribute('visibility', 'hidden');
    return element;
  }
  function mark(element, id) {
    if (changed.has(id)) element.setAttribute('data-changed', '');
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
    const element = node('text', {x, y, class: 'part-label',
      'text-anchor': options.anchor ?? 'middle'}, g, value);
    const actual = element.getComputedTextLength();
    if (options.width && options.width < actual) {
      let current = '';
      const parts = String(value).split(/\s+/);
      element.textContent = '';
      let row = 0;
      for (const part of parts) {
        const next = current ? current + ' ' + part : part;
        const span = element.lastElementChild ?? node('tspan', {x, dy: 0}, element);
        span.textContent = next;
        if (current && span.getComputedTextLength() > options.width) {
          span.textContent = current;
          node('tspan', {x, dy: 13}, element, part);
          current = part;
          row++;
        } else current = next;
      }
      if (row && options.center) element.setAttribute('y', y - row * 6.5);
    }
    return element;
  }
  function say(text) {
    if (text) descriptions.push(text);
  }
  function nameOf(entry) {
    return entry.sub ? entry.label + ' ' + entry.sub : entry.label;
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
    const columnWidth = (grid - 28) / columns.length;
    const width = Math.min(145, columnWidth - 34);
    const max = Math.max(...columns.map(column => column.cells.length));
    const pitch = Math.min(43, 231 / max);
    const height = Math.min(pitch - 3, 34);
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
        say([nameOf(a.cell), kind === 'broken' ? '⇥' : '→', nameOf(b.cell)].join(' '));
      }
    }
    for (const [id, {x, y, cell}] of positions) {
      const g = group(id);
      mark(box(g, x - width / 2, y - height / 2, width, height), id);
      label(g, x, y + (cell.sub ? -1 : 4), cell.label, {width: width - 8, center: true});
      if (cell.sub) label(g, x, y + 12, cell.sub, {width: width - 8});
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
    for (const markData of marks) {
      line(target, x(markData.at), 55, x(markData.at), 220, 'part-guide');
      label(target, x(markData.at), 238, markData.label, {width: 130});
    }
    rows.forEach((row, index) => {
      const y = 58 + index * pitch;
      label(target, start - 10, y + 14, row.label, {anchor: 'end', width: 99});
      for (const span of row.spans) {
        const g = group(span.id);
        const left = x(span.start), right = x(span.end);
        mark(box(g, left, y, right - left, Math.min(pitch - 6, 20), 'part-segment kind-' + span.kind), span.id);
        if (span.label) label(g, (left + right) / 2, y + 14, span.label, {width: right - left - 4});
        if (!hide.has(span.id)) say(`${row.label} ${span.label ?? ''} ${span.start}–${span.end} ${axis.unit}`);
      }
    });
    legend(figure.legend, 262);
  }
  function drawBars() {
    const {bars, unit, labelWidth = 117} = figure;
    const max = figure.max ?? Math.max(...bars.map(bar => bar.total));
    const x0 = labelWidth, width = 603 - x0;
    const pitch = Math.min(57, 230 / bars.length);
    const positive = bars.map(bar => bar.total).filter(value => value > 0);
    const shortest = Math.min(...positive), longest = Math.max(...positive);
    const disparity = longest / shortest > 100;
    bars.forEach((bar, row) => {
      const g = group(bar.id);
      const y = 9 + row * pitch;
      const height = Math.min(pitch - 15, 21);
      label(g, x0 - 7, y + 14, bar.label, {anchor: 'end', width: x0 - 13, center: true});
      let left = x0;
      for (const segment of bar.segments) {
        const part = node('g', {}, g);
        if (hide.has(segment.id)) part.setAttribute('visibility', 'hidden');
        const scaled = width * segment.value / max;
        if (segment.value) {
          mark(box(part, left, y, Math.max(scaled, 4), height, 'part-segment kind-' + segment.kind), segment.id);
        }
        const text = segment.label.endsWith(segment.value.toLocaleString('en-US')) ? segment.label
          : segment.label + ' ' + segment.value.toLocaleString('en-US');
        if (scaled >= 112) label(part, left + scaled / 2, y + 14, text, {width: scaled - 8});
        else label(part, left < x0 + width / 2 ? left + 6 : Math.min(left, x0 + width), y + height + 13, text,
          {anchor: left < x0 + width / 2 ? 'start' : 'end'});
        if (!hide.has(segment.id) && !hide.has(bar.id)) say(bar.label + ' ' + text + ' ' + unit);
        left += scaled;
      }
      if (disparity && bar.total === shortest) {
        label(g, x0 + 12, y + 14, `${shortest} ${unit} · ${longest} ${unit} · ${(longest / shortest).toLocaleString('en-US')}×`, {anchor: 'start'});
      }
    });
    legend(figure.legend, 262);
  }
  function drawBranch() {
    const {nodes, edges, token} = figure;
    const cols = Math.max(...nodes.map(item => item.col)) + 1;
    const rows = Math.max(...nodes.map(item => item.row)) + 1;
    const pitch = (grid - 28) / cols;
    const height = 236 / rows;
    const width = Math.min(140, pitch - 21);
    const positions = new Map(nodes.map(item => [item.id,
      {x: 14 + (item.col + .5) * pitch, y: 19 + (item.row + .5) * height, label: item.label}]));
    for (const {from, to, label: text, taken} of edges) {
      const a = positions.get(from), b = positions.get(to);
      const g = group(from + '→' + to);
      if (hide.has(from) || hide.has(to)) g.setAttribute('visibility', 'hidden');
      const xSide = a.x === b.x ? 0 : Math.sign(b.x - a.x) * width / 2;
      const ySide = a.x === b.x ? Math.sign(b.y - a.y) * 17 : 0;
      arrow(g, a.x + xSide, a.y + ySide, b.x - xSide, b.y - ySide, taken ? 'link-taken' : 'link-faded');
      if (text) {
        const dx = b.x - a.x, dy = b.y - a.y;
        const length = Math.hypot(dx, dy);
        const centerX = (a.x + b.x) / 2 + 16 * dy / length;
        const centerY = (a.y + b.y) / 2 - 16 * dx / length;
        const anchor = dy < 0 ? 'end' : dy > 0 ? 'start' : 'middle';
        label(g, centerX, centerY + 4, text, {anchor, width: pitch});
      }
      if (taken && !hide.has(from) && !hide.has(to) && !hide.has(from + '→' + to)) say(a.label + ' → ' + b.label);
    }
    for (const [id, position] of positions) {
      const {x, y, label: text} = position;
      const g = group(id);
      mark(box(g, x - width / 2, y - 17, width, 34), id);
      label(g, x, y + 4, text, {width: width - 8, center: true});
    }
    if (token && !hide.has(token.at)) {
      const {x, y} = positions.get(token.at);
      const g = group('token');
      node('circle', {cx: x, cy: y - 25, r: 5, class: 'part-token'}, g);
      label(g, x + 9, y - 21, token.label, {anchor: 'start'});
      if (!hide.has('token')) say(token.label + ' ' + positions.get(token.at).label);
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
        if (!hide.has(cell.id) && cell.state !== 'plain') say([row.label, cell.label, cell.state].filter(Boolean).join(' '));
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
  ({map: drawMap, timeline: drawTimeline, bars: drawBars, branch: drawBranch, row: drawRowPart})[figure.part]();
  return descriptions.join('. ');
};
