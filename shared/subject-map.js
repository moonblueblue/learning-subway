// One map per subject (dist/map.html?subject=<id>). A station is a lesson; a line is a chain of prerequisites.
// Positions come ready from scripts/subject_maps.py (dist/shared/subject-maps.js); this file only draws them.
(() => {
  const W = 1400, LEADING = 15, MIN_FONT_SCALE = .92, MIN_SCALE = .8, MAX_SCALE = 1.5;
  const INK = '#142620', MUTED = '#5b6f66', PANEL = '#eaf3eb';
  const subject = subjectMaps.find(map => map.id === new URLSearchParams(location.search).get('subject')) || subjectMaps[0];
  const network = document.querySelector('.network');
  const scroll = document.querySelector('.map-scroll');
  const text = (ko, en) => courseI18n.lang === 'en' ? en : ko;
  const name = entry => text(entry.ko, entry.en);
  const flat = entry => name(entry).replace('\n', ' ');
  let done = new Set();
  try { done = new Set(JSON.parse(localStorage.getItem('learning-subway:done') || '[]')); } catch { /* storage unavailable */ }

  function svg(tag, attrs, label) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [key, value] of Object.entries(attrs || {})) element.setAttribute(key, value);
    if (label !== undefined) element.textContent = label;
    return element;
  }
  function html(tag, props, ...children) {
    const element = Object.assign(document.createElement(tag), props);
    element.append(...children);
    return element;
  }

  function mark(station) {
    const {x, y, color, kind} = station;
    const planned = kind === 'planned';
    const dash = planned ? {'stroke-dasharray': '3 3'} : {};
    const seen = station.ref && done.has(station.ref);
    if (kind === 'transfer') {
      return [svg('rect', {x: x - 9, y: y - 9, width: 18, height: 18, rx: 5, fill: '#fff', stroke: INK, 'stroke-width': 2.5}),
        svg('path', {d: `M${x - 3},${y - 4.5} L${x + 4},${y} L${x - 3},${y + 4.5} Z`, fill: INK})];
    }
    if (station.capsule) {
      return [svg('rect', {x: x - 14, y: y - 8.5, width: 28, height: 17, rx: 8.5, fill: seen ? '#d5efeb' : '#fff', stroke: INK, 'stroke-width': 2.5, ...dash})];
    }
    return [svg('circle', {cx: x, cy: y, r: 7, fill: station.terminal || seen ? color : '#fff', stroke: planned ? MUTED : color, 'stroke-width': 3, ...dash})];
  }
  function label(station) {
    const rows = name(station).split('\n');
    return rows.map((row, i) => svg('text', {
      class: 'name', x: station.x, 'text-anchor': 'middle',
      y: station.side === 'below' ? station.y + 28 + LEADING * i : station.y - 18 - LEADING * (rows.length - 1 - i),
    }, row));
  }
  const waiting = () => text('준비 중', 'Coming soon');
  const leaving = station => text(station.ko.replace(/로$/, '') + ' 지도로', 'To the ' + station.en.replace(/^To /, '') + ' map');

  function drawMap() {
    network.setAttribute('viewBox', `0 ${subject.top} ${W} ${subject.height}`);
    network.setAttribute('aria-label', text(subject.ko + ' 지도', subject.en + ' map'));
    const parts = [];
    for (const rail of subject.rails) {
      parts.push(svg('path', {d: rail.d, fill: 'none', stroke: rail.color, 'stroke-width': 8, 'stroke-linecap': 'round',
        'stroke-linejoin': 'round', 'aria-hidden': 'true', ...(rail.faded ? {opacity: .4} : {})}));
    }
    for (const badge of subject.badges) {
      const group = svg('g', {class: 'badge', 'aria-hidden': 'true'});
      group.append(svg('circle', {cx: badge.x, cy: badge.y, r: 10.5, fill: badge.color, stroke: PANEL, 'stroke-width': 2.5}),
        svg('text', {x: badge.x, y: badge.y + 4.3, 'text-anchor': 'middle'}, badge.num));
      parts.push(group);
    }
    for (const title of subject.labels) {
      parts.push(svg('text', {class: 'title', x: title.x, y: title.y, 'text-anchor': title.anchor, fill: title.color, 'aria-hidden': 'true'}, name(title)));
    }
    for (const station of subject.stations) {
      const line = subject.lines[station.line];
      const lineName = flat(line);
      let holder;
      if (station.href) {
        const described = station.kind === 'transfer' ? leaving(station) : flat(station) + ' · ' + lineName;
        holder = svg('a', {href: station.href, class: station.kind, 'aria-label': described});
        // A larger target than the 14 px mark.
        holder.append(svg('circle', {cx: station.x, cy: station.y, r: 15, fill: 'transparent'}));
      } else {
        const described = station.kind === 'planned' ? flat(station) + ' · ' + lineName + ' · ' + waiting() : flat(station);
        holder = svg('g', {class: station.kind, role: 'img', 'aria-label': described});
      }
      if (station.ref) holder.dataset.ref = station.ref;
      holder.append(...mark(station), ...label(station));
      parts.push(holder);
    }
    network.replaceChildren(...parts);
    fit();
  }

  function fit() {
    const width = scroll.clientWidth, height = scroll.clientHeight;
    if (!width || !height) return;
    const both = Math.min(width / W, height / subject.height, MAX_SCALE);
    // Show the whole map when its names stay readable; otherwise fill the width and scroll.
    const whole = both >= MIN_FONT_SCALE;
    const scale = whole ? both : Math.min(MAX_SCALE, Math.max(MIN_SCALE, width / W));
    scroll.classList.toggle('fits', whole);
    network.setAttribute('width', Math.floor(W * scale));
    network.setAttribute('height', Math.floor(subject.height * scale));
  }

  function drawChrome() {
    document.title = text(subject.ko + ' 지도 · Learning Subway', subject.en + ' map · Learning Subway');
    document.querySelector('#subject-name').replaceChildren(
      html('strong', {textContent: name(subject)}), html('span', {textContent: text(subject.question, subject.questionEn)}));

    const nav = document.querySelector('.subject-list');
    nav.setAttribute('aria-label', text('주제 지도', 'Subject maps'));
    const entries = [];
    let group;
    for (const map of subjectMaps) {
      // Like the hub's list: no group headings, one rule before the AI subjects.
      if (map.group === 'AI' && group && group !== 'AI') entries.push(document.createElement('hr'));
      group = map.group;
      const link = html('a', {href: './map.html?subject=' + map.id, textContent: name(map)});
      if (map === subject) link.setAttribute('aria-current', 'page');
      entries.push(link);
    }
    nav.replaceChildren(...entries);


    const icon = children => { const picture = svg('svg', {width: 30, height: 18, viewBox: '0 0 30 18', 'aria-hidden': 'true'}); picture.append(...children); return picture; };
    const legend = [
      [[svg('circle', {cx: 15, cy: 9, r: 6, fill: '#fff', stroke: INK, 'stroke-width': 3})], text('공개된 레슨', 'Available lesson')],
      [[svg('circle', {cx: 15, cy: 9, r: 6, fill: '#fff', stroke: MUTED, 'stroke-width': 3, 'stroke-dasharray': '3 3'})], text('만들 레슨', 'Lesson to come')],
      [[svg('rect', {x: 2, y: 1.5, width: 26, height: 15, rx: 7.5, fill: '#fff', stroke: INK, 'stroke-width': 2.5})], text('노선이 갈라지는 역', 'A line leaves here')],
      [[svg('rect', {x: 7, y: 1, width: 16, height: 16, rx: 5, fill: '#fff', stroke: INK, 'stroke-width': 2.5}),
        svg('path', {d: 'M12.5,5 L19,9 L12.5,13 Z', fill: INK})], text('다른 주제로 갈아타는 곳', 'Change to another subject')],
    ];
    // Only the marks this map uses.
    const used = [subject.stations.some(station => station.kind === 'lesson'), subject.stations.some(station => station.kind === 'planned'), subject.stations.some(station => station.capsule),
      subject.stations.some(station => station.kind === 'transfer')];
    document.querySelector('.map-legend').replaceChildren(
      ...legend.filter((entry, i) => used[i]).map(([shapes, words]) => html('span', {}, icon(shapes), words)));
  }

  function draw() {
    drawChrome();
    drawMap();
  }

  addEventListener('course:lang', draw);
  new ResizeObserver(fit).observe(scroll);
  draw();
})();
