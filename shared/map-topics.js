// Home navigation reuses published lessons by catalog ID. A topic is an entry point, not a new lesson.
const mapTopics = [
  {id:'computer-science', title:'컴퓨터 공학', en:'Computer science'},
  {id:'requirements', title:'문제 정의·요구사항 설계', en:'Problem framing & requirements',
    refs:['ai/decision-owner', 'ai/method-choice', 'ai/error-cost-threshold', 'ai/group-failures-handoff']},
  {id:'ux', title:'UI/UX·접근성', en:'UI/UX & accessibility',
    refs:['hci/interface', 'hci/usability', 'hci/accessibility']},
  {id:'architecture', title:'시스템 아키텍처·API 설계', en:'System architecture & API design',
    refs:['platforms/webapp', 'software-engineering/modules', 'system-design/cache', 'system-design/queue', 'system-design/ratelimit']},
  {id:'data', title:'데이터 모델링·데이터 엔지니어링', en:'Data modeling & engineering',
    refs:['database/sql', 'database/indexing', 'database/transactions', 'database/storage', 'ai/rag-document-registry']},
  {id:'infrastructure', title:'운영체제·네트워크·인프라', en:'Operating systems, networking & infrastructure',
    refs:['os/process', 'os/virtual', 'os/filesystem', 'network/layers', 'network/forwarding', 'os/virtualization']},
  {id:'ai', title:'AI·머신러닝', en:'AI & machine learning'},
  {id:'agent-work', title:'AI 에이전트 작업 설계·위임', en:'AI agent task design & delegation',
    refs:['ai/rag-prompt-data-boundaries', 'ai/rag-tool-input-schema', 'ai/rag-document-tool-authorization', 'ai/rag-retries-idempotency-stop', 'projects/document-support-agent']},
  {id:'quality', title:'테스트 설계·코드 리뷰·인수 검수', en:'Test design, code review & acceptance',
    refs:['software-engineering/testing', 'software-engineering/debugging', 'ai/rag-evidence-test-set', 'ai/inspection-release-report']},
  {id:'security', title:'보안·권한·개인정보 보호', en:'Security, permissions & privacy',
    refs:['security/threatmodel', 'security/auth', 'security/tls', 'ai/rag-document-tool-authorization', 'ai/sensor-data-retention']},
  {id:'operations', title:'배포·서비스 운영·장애 대응', en:'Deployment, operations & incident response',
    refs:['ai/serving-version-bundle', 'ai/serving-shadow-canary-rollout', 'ai/serving-observability-trace-ids', 'ai/serving-quality-alert-rollback', 'projects/inference-service-operations']}
];

const mapTopicName = topic => courseI18n.lang === 'en' ? topic.en : topic.title;
function currentMapTopic() {
  if (document.body.hasAttribute('data-ai-map')) return mapTopics.find(topic => topic.id === 'ai');
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
      nav.append(link);
    }
    const entry = topic.id === 'ai' ? './ai-map.html?v=f151c1fc27eab65c' : './index.html';
    const [path, query] = entry.split('?');
    const params = new URLSearchParams(query);
    if (topic.refs) params.set('topic', topic.id);
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
