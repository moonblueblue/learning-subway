// One overview per subject. A station on the map opens that chapter's lesson list.
(() => {
  const lessons = new Map(courseCatalog.topics.flatMap(topic =>
    topic.lessons.map(lesson => [topic.id + '/' + lesson.id, lesson])));
  const subjects = courseCatalog.roadmaps.find(route => route.id === 'ai').chapters;
  const params = () => new URLSearchParams(location.search);
  const line = subjects.find(chapter => chapter.id === params().get('line')) || subjects[0];
  const topic = mapTopics.find(item => item.line === line.id);
  const data = aiStationMap[line.id];
  const stops = data.stations.map(stop => ({...lessons.get(stop.ref), ...stop}));
  const starts = data.parts.map(part => stops.findIndex(stop => stop.id === part.start));
  const chapters = data.parts.map((part, i) => ({...part, number:i+1, stops:stops.slice(starts[i], starts[i+1])}));
  const required = chapters.filter(chapter => !chapter.elective);
  const electives = chapters.filter(chapter => chapter.elective);
  const lastRequired = required.at(-1);
  const project = {id:'end', ref:line.projectRef, title:line.destination, titleEn:line.destinationEn};
  lastRequired.stops.push(project);

  const network = document.querySelector('.network');
  const dialog = document.querySelector('.chapter-dialog');
  const list = dialog.querySelector('.chapter-lessons');
  const close = document.getElementById('close-chapter');
  const legend = document.querySelector('.map-legend');
  const text = (ko,en) => courseI18n.lang === 'en' ? en : ko;
  const name = entry => text(entry.title,entry.titleEn);
  const trunkColor = data.transfer?.color || '#008579';
  const branchColor = trunkColor === '#796bb5' ? '#a57415' : '#835888';
  const measure = document.createElement('canvas').getContext('2d');
  let current, selected, focusOnDismiss;

  function match(key) {
    if (!key) return;
    return chapters.flatMap(chapter => chapter.stops).find(stop =>
      stop.id === key || stop.ref === key || stop.aliases?.includes(key));
  }
  function chapterURL(chapter) {
    const url = new URL(location.href);
    for (const key of ['part','chapter','stop','lesson']) url.searchParams.delete(key);
    url.searchParams.set('line',line.id);
    if (chapter) url.searchParams.set('chapter',chapter.number);
    return url;
  }
  function lessonURL(ref) {
    return './'+ref+'.html?'+new URLSearchParams({roadmap:'ai',line:line.id});
  }
  function fillList() {
    document.getElementById('chapter-name').textContent = name(selected);
    close.textContent = text('닫기','Close');
    const rows = selected.stops.map(stop => {
      const item = document.createElement('li');
      const link = document.createElement(stop.ref ? 'a' : 'span');
      link.dataset.key = line.id + ':' + stop.id;
      link.dataset.line = line.id;
      link.dataset.ref = stop.ref || '';
      link.textContent = name(stop);
      if (stop === current) link.setAttribute('aria-current','location');
      if (stop.ref) link.href = lessonURL(stop.ref);
      else {
        link.setAttribute('aria-disabled','true');
        const status = document.createElement('small');
        status.textContent = text('준비 중','Coming soon');
        link.append(status);
      }
      item.append(link);
      return item;
    });
    list.replaceChildren(...rows);
  }
  function svg(tag,attrs,label) {
    const element = document.createElementNS(network.namespaceURI,tag);
    for (const [key,value] of Object.entries(attrs)) element.setAttribute(key,value);
    if (label !== undefined) element.textContent = label;
    return element;
  }
  function wrap(label, width) {
    const rows = [];
    let row = '';
    for (const word of label.split(/\s+/)) {
      const candidate = row ? row+' '+word : word;
      if (measure.measureText(candidate).width <= width) { row=candidate; continue; }
      if (row) rows.push(row);
      row='';
      for (const char of word) {
        if (row && measure.measureText(row+char).width > width) { rows.push(row); row=''; }
        row+=char;
      }
    }
    if (row) rows.push(row);
    return rows;
  }
  function rail(parent, path, color) {
    parent.append(svg('path',{d:path, fill:'none', stroke:color,'stroke-width':7,
      'stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true'}));
  }
  function draw() {
    const w=network.clientWidth, h=network.clientHeight;
    if (!w || !h) return;
    const focused=network.contains(document.activeElement) ? document.activeElement.dataset.chapter : '';
    const frag=document.createDocumentFragment();
    const core=[...required, project];
    const columns=Math.max(2,Math.floor(w/112));
    const rowCount=Math.ceil(core.length/columns);
    const slots=Math.ceil(core.length/rowCount);
    const pitch=w/slots;
    const laneCount=rowCount+(electives.length ? 1 : 0);
    const rowHeight=h/laneCount;
    const font=Math.max(12,Math.min(16,Math.floor(w/72),Math.floor(rowHeight/6)));
    const step=font*1.22;
    measure.font='650 '+font+'px system-ui,sans-serif';
    const points=core.map((entry,i) => {
      const row=Math.floor(i/slots), col=i%slots;
      return {entry,x:((row%2 ? slots-1-col : col)+.5)*pitch,y:(row+.5)*rowHeight};
    });
    let track='M'+points[0].x+' '+points[0].y;
    points.slice(1).forEach((p,i) => {
      const prev=points[i];
      if (p.y===prev.y) track+=' H'+p.x;
      else {
        const edge = prev.x>w/2 ? w-16 : 16;
        const sign = edge>prev.x ? 1 : -1;
        const r=Math.min(24,Math.abs(edge-prev.x)*.7,rowHeight/4);
        track+=' H'+(edge-sign*r)+' Q'+edge+' '+prev.y+' '+edge+' '+(prev.y+r)
          +' V'+(p.y-r)+' Q'+edge+' '+p.y+' '+(edge-sign*r)+' '+p.y+' H'+p.x;
      }
    });
    rail(frag,track,trunkColor);
    const interchange=points[required.length-1];
    let branches=[];
    if (electives.length) {
      const y=(laneCount-.5)*rowHeight;
      const dir=interchange.x>w/2 ? -1 : 1;
      const far=dir<0 ? w*.09 : w*.91;
      const span=far-interchange.x;
      const radius=Math.min(28,Math.abs(span)/4,(y-interchange.y)/3);
      rail(frag,'M'+interchange.x+' '+interchange.y+' V'+(y-radius)+' Q'+interchange.x+' '+y+' '+(interchange.x+dir*radius)+' '+y+' H'+far,branchColor);
      branches=electives.map((entry,i)=>({entry,x:interchange.x+span*(i+1)/electives.length,y}));
    }
    function station(point,index,branch=false) {
      const {entry,x,y}=point;
      const terminal=entry===project;
      const here=current && (terminal ? current===project : current!==project && entry.stops.includes(current));
      const color=branch ? branchColor : trunkColor;
      const open=terminal ? Boolean(project.ref) : true;
      const label=name(entry);
      const attrs={class:terminal?'capstone-stop':'chapter-stop','data-line':line.id,'aria-label':label};
      if (!terminal) { attrs['data-chapter']=entry.number; attrs.href=chapterURL(entry); }
      else if (open) attrs.href=lessonURL(project.ref);
      else attrs['aria-disabled']='true';
      const node=svg(open ? 'a':'g',attrs);
      if (here) node.setAttribute('aria-current','location');
      const isJunction=entry===lastRequired && electives.length;
      const available=terminal ? open : entry.stops.some(stop=>stop.ref);
      const size=isJunction ? 12 : 7;
      node.append(svg('title',{},label));
      if (isJunction) node.append(svg('rect',{x:x-size,y:y-8,width:2*size,height:16,rx:8,fill:'#fcfdfb',stroke:'#142620','stroke-width':2.6}));
      else node.append(svg('circle',{cx:x,cy:y,r:size,fill:terminal && open ? color : '#fcfdfb',
        stroke:color,'stroke-width':3,...(available?{}:{'stroke-dasharray':'3 3'})}));
      const spacing=branch ? Math.abs(branches[0].x-interchange.x) : pitch;
      const max=Math.max(48,Math.min(2*(Math.min(x,w-x)-4),spacing*.94));
      const rows=wrap(terminal ? label : entry.number+' '+label,max);
      const above=!here && (isJunction || index%2===1);
      const top=above ? y-16-step*(rows.length-1) : y+font+12;
      const caption=svg('text',{class:'name',x,y:top,'text-anchor':'middle','font-size':font,'font-weight':650,fill:available?'#142620':'#52675d'});
      rows.forEach((row,i)=>caption.append(svg('tspan',{x,dy:i?step:0},row)));
      const halfWidth=Math.max(17,...rows.map(row=>measure.measureText(row).width/2+3));
      const hitTop=Math.min(y-16,top-font);
      node.insertBefore(svg('rect',{x:x-halfWidth,y:hitTop,width:2*halfWidth,
        height:Math.max(y+16,top+(rows.length-1)*step+5)-hitTop,fill:'transparent'}),node.firstChild);
      node.append(caption);
      if (here) {
        const pin=svg('g',{transform:'translate('+x+' '+(y-10)+')','aria-label':text('현재 위치','You are here')});
        pin.append(svg('path',{d:'M0 0C-2 -4 -10 -12 -10 -19a10 10 0 1 1 20 0C10 -12 2 -4 0 0Z',fill:'#d92d20',stroke:'#fff','stroke-width':2}),
          svg('circle',{cx:0,cy:-19,r:3.5,fill:'#fff'}));
        if (w>700 && y>64 && rowHeight>115) pin.append(svg('text',{x:0,y:-39,
          'text-anchor':'middle','font-size':12,fill:'#aa3024','font-weight':650},
          text('현재 위치','You are here')));
        node.append(pin);
      }
      frag.append(node);
    }
    points.forEach((point,i)=>station(point,i));
    branches.forEach((point,i)=>station(point,i,true));
    network.setAttribute('viewBox','0 0 '+w+' '+h);
    network.replaceChildren(frag);
    if (focused) network.querySelector('[data-chapter="'+focused+'"]')?.focus({preventScroll:true});
  }
  function show() {
    const query=params(), key=query.get('lesson') || query.get('stop');
    let last;
    try { last=JSON.parse(localStorage.getItem('learning-subway:here')); } catch {}
    const addressed=match(key);
    current=addressed || (last?.roadmap==='ai' && last.line===line.id ? match(last.ref) : null);
    if (!current && !last && line===subjects[0]) current=chapters[0].stops[0];
    selected=addressed ? chapters.find(chapter=>chapter.stops.includes(addressed)) :
      chapters[Number(query.get('chapter') || query.get('part'))-1];
    const url=chapterURL(selected);
    if (addressed) url.searchParams.set(addressed.ref?'lesson':'stop',addressed.ref || addressed.id);
    if (url.href!==location.href) history.replaceState(history.state,'',url);
    document.getElementById('line-name').textContent=mapTopicName(topic);
    document.title=mapTopicName(topic)+' | Learning Subway';
    network.setAttribute('aria-label',mapTopicName(topic));
    legend.hidden=!electives.length;
    if (!legend.hidden) legend.replaceChildren(...[[text('본선','Main line'),trunkColor],[text('선택 심화','Electives'),branchColor]].map(([label,color])=>{
      const item=document.createElement('span'); item.textContent=label; item.style.setProperty('--rail',color); return item;
    }));
    draw();
    if (selected) {
      fillList();
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
      if (focusOnDismiss) network.querySelector('[data-chapter="'+focusOnDismiss+'"]')?.focus({preventScroll:true});
      focusOnDismiss=null;
    }
  }
  network.addEventListener('click', event=>{
    const link=event.target.closest('a[data-chapter]');
    if (!link || event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    history.pushState({chapterOpened:true},'',link.href.baseVal);
    show();
  });
  function dismiss() {
    const chapter=selected;
    if (!chapter) return;
    focusOnDismiss=chapter.number;
    if (history.state?.chapterOpened) history.back();
    else { history.replaceState(null,'',chapterURL()); show(); }
  }
  close.addEventListener('click',dismiss);
  dialog.addEventListener('cancel',event=>{ event.preventDefault(); dismiss(); });
  dialog.addEventListener('click', event=>{ if (event.target===dialog) {
    const r=dialog.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dismiss();
  } });
  addEventListener('popstate',show);
  addEventListener('course:lang',show);
  show();
  new ResizeObserver(draw).observe(network);
})();
