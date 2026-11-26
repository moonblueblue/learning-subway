// The roadmap owns station order, transfer points, terminal projects and both languages.
(() => {
  const chapters = courseCatalog.roadmaps.find(roadmap => roadmap.id === 'ai').chapters.map(chapter =>
    ({...chapter, ...aiStationMap[chapter.id]}));
  const lessons = new Map(courseCatalog.topics.flatMap(topic => topic.lessons.map(lesson => [topic.id + '/' + lesson.id, lesson])));
  const lines = chapters.map((chapter, index) => ({
    ...chapter, code: index ? String.fromCharCode(64 + index) : 'AI',
    color: chapter.transfer?.color || '#009184',
    stops: [...chapter.stations.map(s => ({...lessons.get(s.ref), ...s})),
      {id:'end', ref:chapter.projectRef, title:chapter.destination, titleEn:chapter.destinationEn, terminal:true}]
  }));
  const trunk = lines[0], network = document.querySelector('.network');
  const get = id => document.getElementById(id);
  const select = get('lessons'), enter = get('enter');
  const params = new URLSearchParams(location.search);
  const t = (record, key) => record[courseI18n.lang === 'en' ? key + 'En' : key];
  let here;
  try { here = JSON.parse(localStorage.getItem('learning-subway:here')); } catch {}
  const last = here?.roadmap === 'ai' ? here : {};
  let line = lines.find(item => item.id === (params.get('line') || last.line)) || trunk;
  const initial = params.get('lesson') || params.get('stop') || (last.line === line.id && last.ref);
  const value = stop => stop.ref || stop.id;
  let stop = line.stops.find(s => value(s) === initial || s.id === initial) || line.stops[0];
  const legend = new Map();
  const lessonURL = (route, station) => './' + station.ref + '.html?' + new URLSearchParams({roadmap:'ai', line:route.id});

  function selectStation(route, station) {
    line = route;
    stop = station;
    const url = new URL(location.href);
    url.searchParams.delete('stop');
    url.searchParams.delete('lesson');
    url.searchParams.set('line', line.id);
    url.searchParams.set(stop.ref ? 'lesson' : 'stop', value(stop));
    history.replaceState(null, '', url);
    get('line-name').textContent = t(line, 'title');
    get('destination').textContent = t(line, 'destination');
    select.replaceChildren(...line.stops.map(s => {
      const option = new Option(t(s,'title') + (s.ref ? '' : ' · ' + courseI18n.translate('준비 중')), value(s));
      if (s.ref) option.dataset.published = '';
      return option;
    }));
    select.value = value(stop);
    enter.hidden = !stop.ref;
    get('planned').hidden = !!stop.ref;
    if (stop.ref) enter.href = lessonURL(line, stop);
    else enter.removeAttribute('href');
    draw();
  }

  function svg(tag, attrs = {}, text) {
    const node = document.createElementNS(network.namespaceURI, tag);
    for (const [key,val] of Object.entries(attrs)) node.setAttribute(key, val);
    if (text) node.textContent = text;
    return node;
  }
  const measure = document.createElement('canvas').getContext('2d');
  function wrap(name, width) {
    const rows = [];
    for (const word of name.split(' ')) {
      const tail = rows.at(-1);
      if (tail && measure.measureText(tail + ' ' + word).width <= width) rows[rows.length-1] += ' ' + word;
      else rows.push(word);
    }
    return rows;
  }

  // Draw an overview when a line outgrows its rail. The station picker always has every lesson.
  // Endpoints and transfer coordinates stay fixed while a reader selects individual lessons.
  function stationPoints(route, start, end, y, capacity, interchanges, currentStop) {
    const kept = new Set([0, route.stops.length - 1]);
    route.stops.forEach((station, i) => {
      if (route === trunk && interchanges.has(station.ref)) kept.add(i);
    });
    const indices = [...kept].sort((a,b) => a-b);
    while (indices.length < Math.min(capacity, route.stops.length)) {
      let gap = 1;
      for (let i = 2; i < indices.length; i++) {
        if (indices[i]-indices[i-1] > indices[gap]-indices[gap-1]) gap = i;
      }
      indices.splice(gap, 0, Math.floor((indices[gap-1]+indices[gap])/2));
    }
    const segment = (end-start) / (indices.length-1);
    const points = [];
    indices.forEach((index, i) => {
      const x = start + segment * i;
      points.push({station:route.stops[index], x, y});
      if (i === indices.length-1) return;
      const selected = route.stops.slice(index+1, indices[i+1]).filter(s => s===stop || s===currentStop);
      selected.forEach((station, j) => points.push({station, x:x+segment*(j+1)/(selected.length+1), y}));
    });
    return points;
  }

  function draw() {
    const w = network.clientWidth, h = network.clientHeight;
    if (!w || !h) return;
    const compact = w < 735 || h < 340;
    network.closest('.sheet').classList.toggle('compact', compact);
    const activeKey = network.contains(document.activeElement) ? document.activeElement.dataset.key : null;
    const fragment = document.createDocumentFragment();
    const ink = '#142620', muted = '#51695f', paper = '#fcfdfb';
    const size = compact ? 11 : w < 1050 ? 12 : 13;
    measure.font = '650 ' + size + 'px system-ui,sans-serif';
    const top = compact ? 19 : 33, bottom = compact ? 16 : 34;
    const gap = (h - top - bottom) / 7, mid = top + 4 * gap;
    const left = compact ? Math.min(119, w * .31) : Math.max(44,w*.046);
    const right = w - (compact ? 16 : Math.max(52,w*.05));
    const currentLine = lines.find(r=>r.id===last.line && r.stops.some(s=>s.ref===last.ref)) || trunk;
    const currentStop = (last.ref && currentLine.stops.find(s=>s.ref===last.ref)) || currentLine.stops[0];
    const interchanges = new Set(lines.slice(1).map(r=>r.transfer.ref));
    const capacity = span => Math.max(2, Math.floor(span / (compact ? 18 : 75)) + 1);
    const trunkPoints = stationPoints(trunk,left,right,mid,capacity(right-left),interchanges,currentStop);
    const places = new Map([[trunk,trunkPoints]]);
    const risers = [];
    // Real rails are painted first, then all interchange and station markers sit on top.
    function rail(d, color, finished) {
      fragment.append(svg('path',{d, fill:'none', stroke:color, 'stroke-width':compact ? 4 : 7,
        opacity:finished ? 1 : .53, 'stroke-linecap':'round','stroke-linejoin':'round'}));
    }
    for (const route of lines.slice(1)) {
      const hint = route.transfer, dir = hint.direction, sign = Math.sign(hint.row);
      const x = trunkPoints.find(point=>point.station.ref===hint.ref).x;
      const y = mid + hint.row*gap, end = dir > 0 ? right : left;
      const bend = Math.min(compact ? 9 : 24, Math.abs(y-mid)*.45, Math.abs(end-x)*.16);
      const first = x + dir * Math.min(Math.abs(end-x)*.20,compact ? 20 : Math.max(48,w*.048));
      const pts = stationPoints(route,first,end,y,capacity(Math.abs(end-first)),interchanges,currentStop);
      places.set(route,pts);
      risers.push({l:x-2,r:x+2,t:Math.min(y,mid)+6,b:Math.max(y,mid)-6});
      rail(`M${x} ${mid}V${y-sign*bend}Q${x} ${y} ${x+dir*bend} ${y}H${end}`,route.color,route.lessons.length);
    }
    rail(`M${left} ${mid}H${right}`,trunk.color,true);
    const positions = [...risers];
    const collision = (a,b) => a.l<b.r+2 && a.r>b.l-2 && a.t<b.b+2 && a.b>b.t-2;
    const labels = [], pins = [];
    const activate = (anchor, action) => anchor.addEventListener('click', event => {event.preventDefault(); action();});
    for (const route of lines) {
      const points = places.get(route), button = legend.get(route);
      const title = t(route,'title'), short = route.transfer ? t(route.transfer,'short') : title;
      button.textContent = (route===trunk ? '' : route.code+' ') + (compact ? short : title);
      button.title = title;
      button.setAttribute('aria-pressed',String(route===line));
      const y = points[0].y;
      if (compact) {
        const link = svg('a',{href:'?line='+route.id,'aria-label':title,'data-key':'line'+route.id,class:'line-link','data-line':route.id,'aria-pressed':String(route===line)});
        link.append(svg('rect',{x:1,y:y-Math.min(gap/2,19),width:left-6,height:Math.min(gap,38),fill:'transparent'}));
        link.append(svg('text',{x:5,y:y+4,fill:ink,'font-size':size},(route===trunk?'':route.code+' ')+short));
        activate(link,()=>selectStation(route,route.stops.find(s=>s.ref) || route.stops[0]));
        fragment.append(link);
      }
      points.forEach(({station,x,y},i)=>{
        const isTransfer=route===trunk && interchanges.has(station.ref);
        const radius=compact ? 3.7 : 6.4;
        const key=route.id+':'+station.id;
        const accessible = t(station,'title')+(station.ref ? '' : ', '+courseI18n.translate('준비 중'));
        const marker = compact ? svg('g') : svg('a',{href:station.ref ? lessonURL(route,station) : '?line='+route.id+'&stop='+station.id,
          'aria-label':accessible,'data-key':key,'data-ref':station.ref || '', 'data-line':route.id});
        marker.append(svg('title',{},accessible));
        if (!compact && !station.ref) activate(marker,()=>selectStation(route,station));
        marker.append(svg('circle',{cx:x,cy:y,r:compact?4:12,fill:'transparent'}));
        if (isTransfer) {
          const rx=compact?5.5:11, ry=compact?3.8:7;
          marker.append(svg('rect',{x:x-rx,y:y-ry,width:2*rx,height:2*ry,rx:ry,fill:paper,stroke:ink,'stroke-width':compact?1.8:2.5}));
        } else {
          marker.append(svg('circle',{cx:x,cy:y,r:radius,fill:station.terminal && station.ref ? route.color : paper,stroke:route.color,
            'stroke-width':compact?1.8:2.8,...(station.ref ? {} : {'stroke-dasharray':compact?'2 1.8':'3.5 2.6'})}));
        }
        fragment.append(marker);
        positions.push({l:x-radius-1,r:x+radius+1,t:y-radius-1,b:y+radius+1});
        if (station===currentStop && route===currentLine) pins.push({x,y});
        const compactLabel = i === 0 || i === points.length-1 || (route === trunk && i === Math.floor(points.length/2));
        if (!compact || (compactLabel && gap > 39)) {
          const spacing=Math.abs(points[1].x-points[0].x);
          labels.push({marker,x,y,rows:wrap(t(station,'title'),compact ? Math.max(50, Math.min(88,Math.abs(points.at(-1).x-points[0].x)*.52)) : Math.max(41,spacing*1.85-8)),below:i%2===1,
            color:station.ref ? ink : muted});
        }
      });
    }
    // Place the location marker before the labels so text can use the other side of its station.
    for (const {x,y} of pins) {
      const a=compact?.63:.90;
      const mark=svg('g',{transform:`translate(${x} ${y-(compact?4:8)}) scale(${a})`, 'aria-label':courseI18n.translate('현재 위치')});
      mark.append(svg('title',{},courseI18n.translate('현재 위치')),
        svg('path',{d:'M0 0C-2 -4 -11 -14 -11 -21a11 11 0 1 1 22 0C11 -14 2 -4 0 0Z',fill:'#d92d20',stroke:'#fff','stroke-width':2}),
        svg('circle',{cx:0,cy:-21,r:4,fill:'#fff'}));
      fragment.append(mark);
      const hereLabel=courseI18n.translate('현재 위치'), labelWidth=measure.measureText(hereLabel).width;
      const candidate={l:x+13,r:x+13+labelWidth,t:y-34,b:y-18};
      if (!compact && candidate.r<w-5 && candidate.t>0 && !positions.some(other=>collision(candidate,other))) {
        fragment.append(svg('text',{x:candidate.l,y:y-21,fill:'#b42318','font-size':size},hereLabel));
        positions.push(candidate);
      }
      positions.push({l:x-12*a,r:x+12*a,t:y-34*a-8,b:y-4});
    }
    for (const item of labels) {
      const {marker,x,y,rows,color}=item;
      const width=Math.max(...rows.map(s=>measure.measureText(s).width));
      const cx=Math.max((compact ? left-12 : 5)+width/2,Math.min(w-5-width/2,x));
      for (const below of [item.below,!item.below]) {
        const ty=below ? y+size+11 : y-17-(rows.length-1)*(size+1);
        const box={l:cx-width/2,r:cx+width/2,t:ty-size,b:ty+3+(rows.length-1)*(size+1)};
        if (box.t<0 || box.b>h || positions.some(other=>collision(box,other))) continue;
        const label=svg('text',{x:cx,y:ty,'text-anchor':'middle','font-size':size,fill:color});
        rows.forEach((s,i)=>label.append(svg('tspan',{x:cx,dy:i?size+1:0},s)));
        marker.append(label);
        positions.push(box);
        break;
      }
    }
    network.setAttribute('viewBox',`0 0 ${w} ${h}`);
    network.replaceChildren(fragment);
    if (activeKey) [...network.querySelectorAll('a')].find(a=>a.dataset.key===activeKey)?.focus({preventScroll:true});
  }

  for (const route of lines) {
    const button=document.createElement('button');
    button.type='button'; button.className='route'; button.dataset.line=route.id;
    button.style.setProperty('--route',route.color);
    button.addEventListener('click',()=>selectStation(route,route.stops.find(s=>s.ref===last.ref && route.id===last.line) || route.stops.find(s=>s.ref) || route.stops[0]));
    legend.set(route,button);
    get(route===trunk?'trunk':'branches').append(button);
  }
  select.addEventListener('change',()=>selectStation(line,line.stops.find(s=>value(s)===select.value)));
  addEventListener('course:lang',()=>selectStation(line,stop));
  new ResizeObserver(draw).observe(network);
  selectStation(line,stop);
})();
