// Home navigation lists the independent learning topics.
const mapTopics = [
  {id:'computer-science', title:'컴퓨터 공학', en:'Computer science'},
  {id:'requirements', title:'문제 정의·요구사항 설계', en:'Problem framing & requirements'},
  {id:'ux', title:'UI/UX·접근성', en:'UI/UX & accessibility'},
  {id:'architecture', title:'시스템 아키텍처·API 설계', en:'System architecture & API design'},
  {id:'data', title:'데이터 모델링·데이터 엔지니어링', en:'Data modeling & engineering'},
  {id:'infrastructure', title:'운영체제·네트워크·인프라', en:'Operating systems, networking & infrastructure'},
  {id:'quality', title:'테스트 설계·코드 리뷰·인수 검수', en:'Test design, code review & acceptance'},
  {id:'security', title:'보안·권한·개인정보 보호', en:'Security, permissions & privacy'},
  {id:'operations', title:'배포·서비스 운영·장애 대응', en:'Deployment, operations & incident response'},
  {id:'ai', line:'1'},
  {id:'ai-search', line:'2'},
  {id:'ai-applied', line:'3'},
  {id:'ai-vision', line:'4'},
  {id:'ai-robotics', line:'5'},
  {id:'ai-generative', line:'6'},
  {id:'ai-retrieval', line:'7'},
  {id:'ai-systems', line:'8'},
  {id:'agent-work', title:'AI 에이전트 작업 설계·위임', en:'AI agent task design & delegation'}
].map(topic => {
  if (!topic.line) return topic;
  const subject = courseCatalog.roadmaps.find(roadmap => roadmap.id === 'ai').chapters.find(line => line.id === topic.line);
  return {...topic, title: subject.subjectTitle ?? subject.title, en: subject.subjectTitleEn ?? subject.titleEn};
});

const mapTopicName = topic => courseI18n.lang === 'en' ? topic.en : topic.title;
function currentMapTopic() {
  if (document.body.hasAttribute('data-ai-map')) {
    const line = new URLSearchParams(location.search).get('line') || '1';
    return mapTopics.find(topic => topic.line === line) || mapTopics.find(topic => topic.id === 'ai');
  }
  const id = new URLSearchParams(location.search).get('topic');
  return mapTopics.find(topic => topic.id === id) || mapTopics[0];
}

function renderTopicNavigation() {
  const nav = document.querySelector('.map-topics');
  const current = currentMapTopic();
  nav.setAttribute('aria-label', courseI18n.lang === 'en' ? 'Learning topics' : '학습 주제');
  for (const topic of mapTopics) {
    let link = nav.querySelector('[data-topic="' + topic.id + '"]');
    if (!link) {
      link = document.createElement('a');
      link.dataset.topic = topic.id;
      if (topic.line) link.dataset.aiLine = topic.line;
      if (topic.id === 'ai') nav.append(document.createElement('hr'));
      nav.append(link);
    }
    const entry = topic.line ? './ai-map.html?v=f151c1fc27eab65c' : './index.html';
    const [path, query] = entry.split('?');
    const params = new URLSearchParams(query);
    if (topic.line) params.set('line', topic.line);
    else if (topic.id !== 'computer-science') params.set('topic', topic.id);
    if (courseI18n.lang === 'en') params.set('lang', 'en');
    link.setAttribute('href', path + (params.toString() ? '?' + params : ''));
    link.textContent = mapTopicName(topic);
    if (topic === current) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
}
// Lessons and their map-return links use the stored language. Honor a shared map URL on that round trip too.
if (new URLSearchParams(location.search).get('lang') === courseI18n.lang) {
  try { localStorage.setItem('learning-subway:lang', courseI18n.lang); } catch { /* storage unavailable */ }
}
renderTopicNavigation();
addEventListener('course:lang', renderTopicNavigation);
