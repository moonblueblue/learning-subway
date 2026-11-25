// English for 7.3 Load balancing. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '로드밸런싱 · 레슨 7.3': 'Load balancing · Lesson 7.3',
  '서버 한 대에 요청이 몰려 줄이 길어지는 모습, 로드밸런서의 라운드 로빈과 최소 연결, 건강 검사로 죽은 서버를 빼고 나누는 과정을 따라가 보세요.':
    'Follow the queue growing as requests pile onto one server, a load balancer\'s round robin and least connections, and health checks taking a dead server out and sharing the load among the rest.',
  '요청이 한 서버에 몰리면 어떻게 되고, 나누면 무엇이 달라질까요? 1초에 300개씩 오는 요청을 서버 한 대와 로드밸런서 뒤의 서버 세 대가 받는 모습을 비교해 보세요.':
    'What happens when requests pile onto one server, and what changes when they are shared? Compare one server with three servers behind a load balancer taking 300 requests a second.',
  '사용자들의 요청이 로드밸런서를 지나 서버 세 대로 나뉘는 장면': 'Users\' requests passing through a load balancer and being shared among three servers',
  '요청 나누기': 'Sharing requests',
  
  '사용자들': 'Users', '로드밸런서': 'Load balancer', '과부하·고장': 'Overload, failure', '과부하': 'Overload', 
  '서버 A': 'Server A', '서버 B': 'Server B', '서버 C': 'Server C',
  '사용자들 → 서버 A': 'Users → Server A', '서버 A → 사용자들': 'Server A → Users', '사용자들 → 로드밸런서': 'Users → Load balancer', '로드밸런서 → 로드밸런서': 'Load balancer → Load balancer',
  '로드밸런서 → 서버 A': 'Load balancer → Server A', '로드밸런서 → 서버 B': 'Load balancer → Server B', '로드밸런서 → 서버 C': 'Load balancer → Server C',
  '로드밸런서 · 목록': 'Load balancer · List', '로드밸런서 · 요청': 'Load balancer · Request', '로드밸런서 · 요청 4': 'Load balancer · Request 4', '서버 A · 시간 초과': 'Server A · Timed out',
  '요청 1': 'Request 1', '요청 2': 'Request 2', '요청 3': 'Request 3', '요청 4': 'Request 4', '요청 1–4': 'Requests 1–4', '새 요청': 'New request',
  '0개': '0', '200개': '200', '300개': '300', '2,000개': '2,000', '150/초': '150/s', '300/초': '300/s', '처리 100/초': 'Handles 100/s', '정상': 'OK', '목록': 'List', '어디로?': 'Where?',
  '처리 중 0': '0 in progress', '처리 중 1': '1 in progress', '처리 중 2': '2 in progress', '지금 처리 중': 'In progress now',
  // Step 1
  '한 서버에 몰리면': 'Piling onto one server',
  '서버 하나가 감당할 수 있는 양을 넘으면 줄이 길어진다': 'When load exceeds what one server can handle, the queue grows',
  '6.9의 문구점이 인기를 얻어 1초에 요청이 300개씩 옵니다. 서버 한 대는 1초에 100개를 처리할 수 있습니다. 처리하지 못한 요청은 줄을 서고, 줄이 길어질수록 응답이 늦어지다가 결국 시간 초과와 오류가 납니다. 서버 한 대를 더 좋은 것으로 바꾸는 방법(수직 확장)은 한계가 있고 비쌉니다.':
    'The stationery shop of 6.9 has become popular, and 300 requests come in a second. One server can handle 100 a second. Requests it cannot handle queue up; the longer the queue, the slower the responses, until in the end there are timeouts and errors. Swapping the one server for a better one (vertical scaling) has limits and is expensive.',
  '들어오는 양(300/초)이 처리량(100/초)보다 많으면 줄은 1초에 200개씩 늘어납니다. 서버를 여러 대 두고 요청을 나눠야 합니다(수평 확장).': 'When the incoming rate (300/s) exceeds the throughput (100/s), the queue grows by 200 a second. You need several servers sharing the requests (horizontal scaling).',
  '왼쪽에 사용자들, 오른쪽에 서버 A 한 대가 놓여 있습니다.': 'Users are on the left and a single server A on the right.',
  '들어오는 요청: 1초에 300개': 'Incoming requests: 300 a second', '서버 A 처리량: 1초에 100개': 'Server A throughput: 100 a second',
  '1초 뒤': 'After 1 s', '2초 뒤': 'After 2 s', '100개 처리, 200개 줄 섬': '100 handled, 200 queue up', '처리하지 못한 200개가 줄을 섭니다.': 'The 200 it could not handle queue up.', '줄 200': 'Queue 200', '응답 시간: 2초': 'Response time: 2 s',
  '이대로 10초가 지나면 줄은 몇 개일까요?': 'If this goes on for 10 seconds, how long is the queue?', '1초에 300 − 100 = 200개씩 늘어나므로 10초면 2,000개입니다.': 'It grows by 300 − 100 = 200 a second, so after 10 seconds it is 2,000.',
  '또 새 요청': 'More new requests', '또 요청이 옵니다.': 'More requests come.', '또 100개 처리, 줄 400개': 'Another 100 handled, queue 400', '줄이 계속 길어집니다.': 'The queue keeps growing.', '줄 400': 'Queue 400', '응답 시간: 4초': 'Response time: 4 s',
  '시간 초과': 'Timeout', '응답 시간 20초 → 사용자 쪽에서 시간 초과': 'Response time 20 s → times out on the user\'s side', '너무 오래 걸려 요청이 실패합니다.': 'It takes too long and the request fails.',
  // Step 2
  '돌아가며 나누기': 'Taking turns',
  '로드밸런서가 요청을 서버들에 차례로 나눠 준다': 'The load balancer hands requests to the servers in turn',
  '로드밸런서는 사용자 앞에 서서 요청을 받아 뒤의 서버 여러 대에 나눠 줍니다. 사용자는 로드밸런서 주소 하나만 압니다. 가장 간단한 방법은 A, B, C, A, B, C… 차례로 돌아가며 주는 라운드 로빈입니다. 서버 셋이면 1초에 300개를 100개씩 나눠 받아 줄이 생기지 않습니다.':
    'A load balancer stands in front of the users, takes their requests and hands them out to several servers behind it. Users know only the load balancer\'s address. The simplest way is round robin, giving them out in turn: A, B, C, A, B, C… With three servers, 300 a second are shared 100 each and no queue forms.',
  '요청 1, 2, 3이 A, B, C로 가고 4는 다시 A로 갑니다. 같은 사용자의 요청이 매번 다른 서버로 갈 수 있으므로, 6.12의 세션은 서버 메모리가 아니라 모든 서버가 함께 보는 저장소에 둬야 합니다.': 'Requests 1, 2 and 3 go to A, B and C, and 4 goes back to A. One user\'s requests can go to a different server each time, so the sessions of 6.12 must be kept not in server memory but in a store all servers share.',
  '왼쪽부터 사용자들, 로드밸런서, 위아래로 놓인 서버 A, B, C가 있습니다. 로드밸런서에서 세 갈래로 나뉩니다.': 'From the left are the users, the load balancer, and servers A, B and C stacked top to bottom. The path splits three ways at the load balancer.',
  '서버 3대': '3 servers', '서버 2대': '2 servers', '라운드 로빈: A → B → C → A → …': 'Round robin: A → B → C → A → …', '서버마다 1초에 100개': '100 a second per server',
  '요청 1, 2, 3, 4가 로드밸런서로': 'Requests 1, 2, 3, 4 go to the load balancer', '요청 도착': 'Requests arrive', '요청이 로드밸런서에 도착합니다.': 'The requests arrive at the load balancer.', '4개 받음': 'Got 4', '다음: A': 'Next: A', '다음: B': 'Next: B', '다음: C': 'Next: C',
  '요청 1 → 서버 A': 'Request 1 → Server A', '첫 요청은 A로 갑니다.': 'The first request goes to A.', '요청 2 → 서버 B': 'Request 2 → Server B', '다음은 B입니다.': 'Next is B.', '요청 3 → 서버 C': 'Request 3 → Server C', '다음은 C입니다.': 'Next is C.',
  '요청 4는 어느 서버로 갈까요?': 'Which server does request 4 go to?', '라운드 로빈은 C 다음에 다시 A부터 돕니다.': 'Round robin goes back to A after C.', '다시 A로 돌아왔습니다.': 'It is back to A.',
  '서버마다 1초에 100개씩 → 줄 없음': '100 a second per server → no queue', 'A, B, C가 100개씩': 'A, B, C get 100 each',
  '로그인 세션을 서버 A의 메모리에만 저장했다면, 다음 요청이 B로 가면?': 'If the login session were stored only in server A\'s memory, what happens when the next request goes to B?',
  'B는 세션을 몰라 로그아웃된 것처럼 보인다': 'B does not know the session, so the user seems logged out', '아무 문제 없다': 'Nothing goes wrong',
  '세션은 모든 서버가 함께 보는 저장소(데이터베이스나 캐시)에 둬야 어느 서버로 가도 같습니다.': 'Sessions belong in a store all servers share (a database or a cache), so it is the same whichever server a request goes to.',
  // Step 3
  '가장 한가한 서버': 'The least busy server',
  '요청마다 무게가 다르면 한가한 서버를 고른다': 'When requests differ in weight, pick the least busy server',
  '요청은 무게가 다릅니다. 상품 목록은 10ms면 되지만, 엑셀 보고서 만들기는 3초가 걸립니다. 라운드 로빈은 무게를 모르고 차례만 지키므로, 무거운 요청이 몰린 서버는 바쁘고 다른 서버는 놉니다. 그래서 지금 처리 중인 요청이 가장 적은 서버로 보내는 방법(최소 연결)을 씁니다.':
    'Requests differ in weight. A product list takes 10 ms, but making an Excel report takes 3 seconds. Round robin knows nothing of weight and only keeps the turn, so a server stuck with heavy requests is busy while others sit idle. So requests are sent to the server with the fewest requests in progress right now (least connections).',
  '서버 A가 무거운 보고서 두 개를 처리하느라 바쁠 때, 최소 연결은 새 요청을 처리 중인 것이 없는 B나 C로 보냅니다. 로드밸런서가 각 서버의 처리 중 개수를 세고 있어야 합니다.': 'While server A is busy with two heavy reports, least connections sends new requests to B or C, which have nothing in progress. The load balancer has to keep count of how many requests each server has in progress.',
  '같은 장면입니다. 서버 A에 무거운 요청이 둘 걸려 있습니다.': 'The same scene. Server A has two heavy requests in progress.',
  '지금 상태': 'Current state', 'A: 보고서 2개 (각 3초)': 'A: 2 reports (3 s each)', 'B: 1개 · C: 0개': 'B: 1 · C: 0', '규칙: 처리 중이 가장 적은 서버로': 'Rule: to the server with the fewest in progress', '나누는 규칙': 'Sharing rule',
  '상품 목록 요청 하나': 'One product list request', '새 요청이 옵니다.': 'A new request comes.',
  '최소 연결 규칙이면 새 요청은 어디로 갈까요?': 'Under the least-connections rule, where does the new request go?', '서버 C (처리 중 0)': 'Server C (0 in progress)', '서버 A (차례상 다음)': 'Server A (next in turn)',
  '처리 중인 요청이 가장 적은 C가 가장 빨리 처리할 가능성이 큽니다.': 'C, with the fewest requests in progress, is the most likely to handle it fastest.',
  '한가한 C로 보냅니다.': 'It is sent to the idle C.', 'C: 처리 중 1': 'C: 1 in progress', 'B와 C가 1로 같음 → 그중 하나(B)': 'B and C tie at 1 → one of them (B)', '바쁜 A는 피하고 B로 보냅니다.': 'Busy A is avoided; it goes to B.',
  'A는 보고서가 끝날 때까지 새 요청을 덜 받음': 'A gets fewer new requests until its reports finish',
  // Step 4
  '서버가 죽으면': 'When a server dies',
  '건강 검사로 죽은 서버를 빼고 나머지로 나눈다': 'Health checks take out the dead server and share among the rest',
  '서버는 고장 나고, 배포하느라 다시 켜지기도 합니다. 로드밸런서는 몇 초마다 각 서버에 "살아 있니?"(건강 검사, 예: GET /health)를 보내고, 연속으로 답이 없으면 그 서버를 목록에서 뺍니다. 그동안 요청은 살아 있는 서버들이 나눠 받습니다. 서버가 돌아오면 다시 넣습니다.':
    'Servers break, and they also restart for deployments. Every few seconds the load balancer sends each server "Are you alive?" (a health check, e.g. GET /health), and if one fails to answer several times in a row it takes that server off the list. Meanwhile the live servers share the requests. When the server comes back, it is put back in.',
  '서버 B가 죽어도 사용자는 오류를 거의 보지 않습니다. 다만 남은 A, C가 1초에 150개씩 받아야 하므로, 평소에 여유를 두거나 서버를 자동으로 더 띄워야 합니다. 로드밸런서 자신도 하나면 그곳이 고장 지점이 되므로 보통 두 대 이상 둡니다.': 'Even when server B dies, users see almost no errors. But A and C, the ones left, must each take 150 a second, so you need headroom in normal times or must start more servers automatically. If there is only one load balancer, it becomes the point of failure itself, so usually there are two or more.',
  '같은 장면입니다. 서버 B가 고장 나고, 로드밸런서가 건강 검사로 알아챕니다.': 'The same scene. Server B breaks, and the load balancer notices through health checks.',
  'A, B, C 모두 살아 있음': 'A, B and C all alive', '건강 검사: 5초마다 GET /health': 'Health check: GET /health every 5 s',
  '건강 검사': 'Health check', 'B에게 "살아 있니?"': '"Are you alive?" to B', '응답 없음 (B가 멈춤)': 'No answer (B has stopped)', 'B가 건강 검사에 답하지 않습니다.': 'B does not answer the health check.', '응답 없음': 'No answer',
  'B 빼기': 'Remove B', '연속 2번 응답 없음 → B를 목록에서 뺌': 'No answer twice in a row → B off the list', '서버 목록: A, C': 'Server list: A, C', '로드밸런서가 B를 목록에서 뺍니다.': 'The load balancer takes B off the list.', '목록 고침': 'List updated',
  '요청은 계속': 'Requests keep coming', '사용자는 B가 죽은 줄 모름': 'Users do not know B is dead', '요청은 평소처럼 로드밸런서로 옵니다.': 'Requests come to the load balancer as usual.',
  'A, C로만': 'Only to A and C', 'A, C가 번갈아 받음': 'A and C take turns', '살아 있는 서버에만 보냅니다.': 'It sends only to the live servers.', '정상 응답': 'Normal response',
  'B를 뺀 뒤 1초에 300개 요청은 어떻게 나뉠까요?': 'With B out, how are 300 requests a second shared?', 'A와 C가 150개씩': 'A and C get 150 each',
  'B는 목록에 없으므로 남은 두 서버가 나눠 받습니다. 서버마다 여유가 있어야 버팁니다.': 'B is not on the list, so the two remaining servers share them. Each server needs headroom to cope.',
  'B가 돌아옴': 'B is back', 'B가 다시 켜져 200 OK': 'B restarts: 200 OK', '연속 2번 정상 → 목록에 다시 넣음': 'OK twice in a row → back on the list', 'B가 돌아오자 다시 목록에 넣습니다.': 'With B back, it is put on the list again.',
  '로드밸런서를 한 대만 두면 어떤 위험이 있을까요?': 'What is the risk of having only one load balancer?',
  '로드밸런서가 고장 나면 서버가 살아 있어도 아무도 접속하지 못한다': 'If the load balancer breaks, nobody can connect even though the servers are alive', '아무 위험 없다': 'No risk at all',
  '모든 요청이 지나는 곳이 하나면 그곳이 단일 고장 지점입니다. 그래서 로드밸런서도 두 대 이상 둡니다.': 'If every request passes through one place, that place is a single point of failure. So load balancers come in twos or more as well.',
};
