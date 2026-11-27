// Each sidebar field has a sequence of maps. Station IDs stay stable across curriculum edits.
(() => {
  const lessons = new Map(courseCatalog.topics.flatMap(topic =>
    topic.lessons.map(lesson => [topic.id + '/' + lesson.id, lesson])));
  const lines = courseCatalog.roadmaps.find(route => route.id === 'ai').chapters.map(chapter => {
    const {stations, parts, transfer} = aiStationMap[chapter.id];
    const stops = stations.map(station => ({...lessons.get(station.ref), ...station}));
    const starts = parts.map(part => stops.findIndex(stop => stop.id === part.start));
    const groups = parts.map((part, i) => ({...part, stops:stops.slice(starts[i], starts[i+1])}));
    const firstElective = groups.findIndex(part => part.elective);
    groups[(firstElective < 0 ? groups.length : firstElective) - 1].stops.push({
      id:'end', ref:chapter.projectRef, title:chapter.destination, titleEn:chapter.destinationEn, terminal:true
    });
    return {...chapter, parts:groups, color:transfer?.color || '#008579'};
  });
  const get = id => document.getElementById(id);
  const network = document.querySelector('.network');
  const picker = document.querySelector('.part-picker');
  const menu = document.querySelector('.parts');
  const text = (ko,en) => courseI18n.lang === 'en' ? en : ko;
  const name = entry => text(entry.title,entry.titleEn);
  const find = (stations, key) => stations.find(s => s.ref === key || s.id === key || s.aliases?.includes(key));
  const measure = document.createElement('canvas').getContext('2d');
  let line, part, position, current;
  function mapURL(index) {
    const url = new URL(location.href);
    url.searchParams.delete('stop');
    url.searchParams.delete('lesson');
    url.searchParams.set('line',line.id);
    url.searchParams.set('part',index + 1);
    return url;
  }
  function partTitle(group) {
    return (group.elective ? text('선택 · ','Elective · ') : '') + name(group);
  }
  function show() {
    const params = new URLSearchParams(location.search);
    line = lines.find(item => item.id === params.get('line')) || lines[0];
    const key = params.get('lesson') || params.get('stop');
    const addressed = key ? line.parts.find(group => find(group.stops,key)) : null;
    part = addressed || line.parts[Number(params.get('part')) - 1] || line.parts[0];
    position = line.parts.indexOf(part);
    let last;
    try { last = JSON.parse(localStorage.getItem('learning-subway:here')); } catch {}
    current = addressed ? find(part.stops,key) : last?.roadmap === 'ai' && last.line === line.id
      ? find(part.stops,last.ref) : null;
    if (!current && !last && !position && line === lines[0]) current = part.stops[0];
    const url = mapURL(position);
    if (addressed) url.searchParams.set(current.ref ? 'lesson' : 'stop',current.ref || current.id);
    if (url.href !== location.href) history.replaceState(null,'',url);
    const topic = mapTopics.find(topic => topic.line === line.id);
    get('line-name').textContent = mapTopicName(topic);
    get('part-name').textContent = partTitle(part);
    get('part-count').textContent = (position + 1) + ' / ' + line.parts.length;
    picker.querySelector('summary').setAttribute('aria-label',text('파트 선택 · ','Choose part · ') + partTitle(part));
    menu.setAttribute('aria-label',text('파트 목록','Map parts'));
    document.querySelector('.part-pager').setAttribute('aria-label',text('파트 이동','Navigate parts'));
    menu.replaceChildren(...line.parts.map((entry,i) => {
      const link = document.createElement('a');
      link.href = mapURL(i); link.dataset.part = i+1; link.textContent = partTitle(entry);
      if (entry === part) link.setAttribute('aria-current','page');
      return link;
    }));
    for (const [id,index,label] of [['prev-part', position-1,text('이전 파트','Previous part')],
                                      ['next-part', position+1,text('다음 파트','Next part')]]) {
      const link = get(id);
      link.textContent = label;
      if (line.parts[index]) { link.href=mapURL(index); link.removeAttribute('aria-disabled'); }
      else { link.removeAttribute('href'); link.setAttribute('aria-disabled','true'); }
    }
    document.title = partTitle(part) + ' · ' + mapTopicName(topic) + ' | Learning Subway';
    network.setAttribute('aria-label',mapTopicName(topic) + ' · ' + partTitle(part));
    draw();
  }
  function svg(tag,attrs,content) {
    const el = document.createElementNS(network.namespaceURI,tag);
    for (const [key,val] of Object.entries(attrs)) el.setAttribute(key,val);
    if (content !== undefined) el.textContent = content;
    return el;
  }
  function wrap(label,width) {
    const rows = [];
    let row = '';
    for (const word of label.split(/\s+/)) {
      const candidate = row ? row + ' ' + word : word;
      if (measure.measureText(candidate).width <= width) { row=candidate; continue; }
      if (row) rows.push(row);
      row = '';
      for (const char of word) {
        if (row && measure.measureText(row + char).width > width) { rows.push(row); row=''; }
        row += char;
      }
    }
    if (row) rows.push(row);
    return rows;
  }
  function draw() {
    const w=network.clientWidth, h=network.clientHeight;
    if (!w || !h || !part) return;
    const key = network.contains(document.activeElement) && document.activeElement.dataset.key;
    const frag=document.createDocumentFragment(), stops=part.stops, n=stops.length;
    const vertical = w < 595;
    const size = vertical ? Math.min(15,Math.max(12,Math.floor(h/n/3))) : Math.min(20,Math.max(15,Math.round(w/70)));
    measure.font='620 ' + size + 'px system-ui,sans-serif';
    const columns = Math.ceil(n/2);
    const margin = Math.max(32,Math.min(90,w*.07));
    const pitch = (w-2*margin)/(columns + .15);
    const x0 = margin+pitch*.5;
    const top = h*.24, lower = h*.67;
    const left = vertical ? Math.min(68,w*.14) : x0;
    const rowGap = Math.min(100,(h-24)/n);
    const points=stops.map((station,i) => vertical ? {x:left,y:(h-rowGap*(n-1))/2+i*rowGap} :
      {x:x0+(i < columns ? i : 2*columns-1-i)*pitch,y:i < columns ? top : lower});
    const end=points.at(-1), turn=x0+(columns-.5)*pitch;
    const r=Math.min(36,(lower-top)/3,pitch*.27);
    let path='M'+points[0].x+' '+points[0].y;
    if (vertical) path+='V'+end.y;
    else if (n>1) path+='H'+(turn-r)+'Q'+turn+' '+top+' '+turn+' '+(top+r)+'V'+(lower-r)
      +'Q'+turn+' '+lower+' '+(turn-r)+' '+lower+'H'+end.x;
    frag.append(svg('path',{d:path,fill:'none',stroke:line.color,'stroke-width':6,'stroke-linecap':'round'}));
    points.forEach(({x,y},i) => {
      const station=stops[i], label=name(station);
      const node=svg(station.ref ? 'a':'g',{'data-line':line.id,'data-key':line.id+':'+station.id,
        'data-ref':station.ref || '', 'aria-label':label+(station.ref ? '' : text(' · 준비 중',' · In preparation'))});
      if (station.ref) node.setAttribute('href','./'+station.ref+'.html?'+new URLSearchParams({roadmap:'ai',line:line.id}));
      else node.setAttribute('aria-disabled','true');
      if (station===current) node.setAttribute('aria-current','location');
      const rows=wrap(label,vertical ? w-x-46 : pitch-22);
      const lineHeight=size*1.33;
      const tx=vertical ? x+23 : x, ty=vertical ? y+size*.34-(rows.length-1)*lineHeight/2 : y+size+20;
      node.append(svg('title',{},node.getAttribute('aria-label')));
      node.append(svg('rect',{x:vertical ? x-15:x-pitch*.47,y:Math.min(y-14,ty-size),
        width:vertical ? w-x-4:pitch*.94,height:Math.max(y+15,ty+(rows.length-1)*lineHeight+6)-Math.min(y-14,ty-size),
        fill:'transparent'}));
      node.append(svg('circle',{cx:x,cy:y,r:8,stroke:line.color,'stroke-width':3.5,
        fill:station.terminal ? line.color : '#fcfdfb',...(station.ref ? {} : {'stroke-dasharray':'4 3'})}));
      const nameLabel=svg('text',{class:'name',x:tx,y:ty,fill:'#172c24','font-size':size,'font-weight':620,
        'text-anchor':vertical ? 'start' : 'middle'});
      rows.forEach((row,j)=>nameLabel.append(svg('tspan',{x:tx,dy:j ? lineHeight : 0},row)));
      node.append(nameLabel);
      if (station===current) {
        const pin=svg('g',{'aria-label':text('현재 위치','You are here'),transform:'translate('+x+' '+(y-10)+')'});
        pin.append(svg('title',{},text('현재 위치','You are here')),
          svg('path',{d:'M0 0C-2 -4 -10 -12 -10 -19a10 10 0 1 1 20 0C10 -12 2 -4 0 0Z',fill:'#d92d20',stroke:'#fff','stroke-width':2}),
          svg('circle',{cx:0,cy:-19,r:3.7,fill:'#fff'}));
        if (!vertical) pin.append(svg('text',{x:0,y:-35,'text-anchor':'middle',fill:'#a92c24','font-size':12,'font-weight':650},text('현재 위치','You are here')));
        node.append(pin);
      }
      frag.append(node);
      if (i<n-1 && (vertical || i!==columns-1)) {
        const next=points[i+1], mx=(x+next.x)/2, my=(y+next.y)/2;
        const angle=vertical ? 90 : next.x<x ? 180 : 0;
        frag.append(svg('path',{d:'M-3 -3L1 0L-3 3',transform:'translate('+mx+' '+my+') rotate('+angle+')',
          fill:'none',stroke:'#fff','stroke-width':1.6,'stroke-linecap':'round','aria-hidden':'true'}));
      }
    });
    network.setAttribute('viewBox','0 0 '+w+' '+h);
    network.replaceChildren(frag);
    if (key) [...network.querySelectorAll('a')].find(link => link.dataset.key===key)?.focus({preventScroll:true});
  }
  document.querySelector('.part-header').addEventListener('click',event => {
    const link=event.target.closest('a[href]');
    if (!link || event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (link.href !== location.href) history.pushState(null,'',link.href);
    const inPicker=picker.contains(link);
    picker.open=false;
    show();
    if (inPicker || !link.hasAttribute('href')) picker.querySelector('summary').focus();
  });
  document.addEventListener('click',event => { if (!picker.contains(event.target)) picker.open=false; });
  picker.addEventListener('keydown',event => {
    if (event.key==='Escape') { picker.open=false; picker.querySelector('summary').focus(); }
  });
  addEventListener('popstate',()=>{ picker.open=false; show(); });
  addEventListener('course:lang',show);
  show();
  new ResizeObserver(draw).observe(network);
})();
