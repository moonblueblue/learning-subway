// English for 7.7 Rate limiters. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the scene: 지우 → Jiwoo (a normal user).
window.lessonText = {
  // Page
  '레이트 리미터 · 레슨 7.7': 'Rate limiters · Lesson 7.7',
  '봇 하나가 서버를 가득 채워 보통 사용자까지 실패하는 모습, 사용자마다 토큰 양동이로 세어 429로 거절하기, 토큰이 다시 차는 속도, 리미터 여러 대가 함께 세는 방법을 따라가 보세요.':
    'Follow one bot filling a server until even normal users fail, counting each user with a token bucket and refusing with 429, the rate tokens refill at, and how several limiters count together.',
  '요청이 너무 많을 때 어디서 어떻게 막을까요? 1초에 만 번씩 보내는 봇과 보통 사용자 지우의 요청이 레이트 리미터를 지나는 모습을 비교해 보세요.':
    'When there are too many requests, where and how do you stop them? Compare a bot sending ten thousand a second with requests from Jiwoo, a normal user, as they pass a rate limiter.',
  '보통 사용자와 봇의 요청이 레이트 리미터를 지나 API 서버로 가거나 거절되는 장면': 'Requests from a normal user and a bot passing a rate limiter to an API server, or being refused',
  '"다음 단계"를 누르면 패킷이 오갑니다.': 'Press "Next step" and the packets move.',
  '"다음 단계"를 눌러 요청을 하나씩 보내 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to send the requests one at a time. Prediction questions come up along the way.',
  // Stations
  '응용': 'Application', '계층': 'Layer', '전선': 'Wire', '라우터': 'Router',
  '지우 (보통 사용자)': 'Jiwoo (normal user)', '봇': 'Bot', '레이트 리미터': 'Rate limiter', 'API 서버': 'API server',
  '지우 (보통 사용자) · 내 주문 보기': 'Jiwoo (normal user) · View my orders',
  '지우 (보통 사용자) → API 서버': 'Jiwoo (normal user) → API server', '지우 (보통 사용자) → 레이트 리미터': 'Jiwoo (normal user) → Rate limiter',
  '봇 → API 서버': 'Bot → API server', '봇 → 레이트 리미터': 'Bot → Rate limiter',
  '레이트 리미터 → API 서버': 'Rate limiter → API server', '레이트 리미터 → 레이트 리미터': 'Rate limiter → Rate limiter', '레이트 리미터 → 봇': 'Rate limiter → Bot',
  '레이트 리미터 · 429 × 2': 'Rate limiter · 429 × 2', '레이트 리미터 · 공유 저장소 확인': 'Rate limiter · check shared store',
  // Labels and holds
  '{#0}개': '{0}', '{#0}개 보냄': '{0} sent', '{#0}개 거절': '{0} refused', '{#0}개 거절됨': '{0} refused', '{#0}개 처리': '{0} handled', '{#0}개 통과': '{0} pass',
  '요청 {#0}개': '{0} {0|request|requests}', '1/초': '1/s', '10,000/초': '10,000/s', '1만 개/초': '10,000/s', '60만 개': '600,000',
  '봇 {#0} · 지우 {#1}': 'Bot {0} · Jiwoo {1}', '봇 0 (공유)': 'Bot 0 (shared)',
  '내 주문 보기': 'View my orders', '지우의 요청': 'Jiwoo\'s request', '시간 초과': 'Timed out', '정상 응답': 'Normal reply',
  '보통 사용자': 'Normal user', '서버 보호': 'Server protected', '부하': 'Load', '과부하': 'Overload', '규칙': 'Rules', '통과': 'Pass', '거절과 안내': 'Refusal and advice',
  '봇이 몰아침': 'The bot floods in', '봇이 한꺼번에 7개': 'The bot sends 7 at once', '봇이 막혀도 지우는 통과': 'The bot is blocked, Jiwoo gets through',
  '지우는 영향 없음': 'Jiwoo is not affected', '다시 5개': '5 again', '다시 채워짐': 'Refilled', '3초가 지남': '3 seconds pass',
  '리미터 두 대': 'Two limiters', '두 리미터로 나뉘어 도착': 'Split across two limiters', '함께 세기': 'Counting together',
  '로드밸런서 뒤에 리미터 A, B': 'Limiters A and B behind a load balancer', '토큰: 공유 저장소': 'Tokens: shared store', '토큰은 공유 저장소에 둠': 'Tokens kept in a shared store',
  '공유 저장소 확인': 'Check shared store', '합쳐서 5개만 통과': 'Only 5 pass in total',
  '5개는 리미터 A로, 5개는 리미터 B로': '5 to limiter A, 5 to limiter B', '10개 (리미터마다 5개)': '10 (5 per limiter)',
  'A와 B 모두 같은 저장소의 "봇 토큰"을 깎음': 'A and B both take from the same store\'s "bot tokens"',
  'Retry-After: 1 → 1초 뒤 다시 시도하라는 안내': 'Retry-After: 1 → advice to try again in 1 second',
  '길게 보면 봇은 1초에 1개까지만': 'In the long run the bot gets only 1 a second',
  '서버에 닿은 것: 5개': 'Reached the server: 5', '서버가 1초에 9,000개씩 밀림': 'The server falls behind by 9,000 a second',
  'API 서버 처리량: 1초에 1,000개': 'API server capacity: 1,000 a second', '봇: 1초에 10,000개 · 지우: 1초에 1개': 'Bot: 10,000 a second · Jiwoo: 1 a second',
  '봇 요청 뒤에 줄을 섬 → 시간 초과': 'Queues behind the bot\'s requests → timed out',
  '사용자마다 양동이: 최대 토큰 5개, 1초에 1개씩 채움': 'A bucket per user: at most 5 tokens, refilled 1 a second',
  '요청 1개 = 토큰 1개, 토큰 없으면 429': '1 request = 1 token; no token, 429',
  '봇 양동이: 토큰 {#0}개': 'Bot bucket: {0} {0|token|tokens}', '봇 양동이: {#0}개': 'Bot bucket: {0}',
  '봇 양동이: 0개 + 3초 × 1개 = 3개': 'Bot bucket: 0 + 3 s × 1 = 3',
  '지우 양동이: 토큰 5개 → 4개': 'Jiwoo\'s bucket: 5 tokens → 4',
  // Step 1
  '막지 않으면': 'Without limits', '누군가 너무 많이 보내면 모두가 느려진다': 'When someone sends too much, everyone slows down',
  '공개된 API에는 사람만 오지 않습니다. 잘못 짠 프로그램이 같은 요청을 끝없이 되풀이하거나, 봇이 1초에 만 번씩 로그인을 시도하기도 합니다. 서버가 1초에 1,000개를 처리할 수 있다면, 한 봇이 그 몫을 다 차지해 보통 사용자의 요청까지 줄을 서다 실패합니다(7.3의 과부하).':
    'Not only people come to a public API. A badly written program may repeat the same request without end, or a bot may try to log in ten thousand times a second. If the server can handle 1,000 a second, one bot takes all of it and even normal users\' requests queue up and fail (the overload of 7.3).',
  '봇 하나 때문에 지우의 요청도 시간 초과가 났습니다. 누가 얼마나 보내는지 세어서, 정해진 양을 넘으면 서버에 닿기 전에 거절해야 합니다.':
    'Because of one bot, Jiwoo\'s request timed out too. You need to count who sends how much and refuse anything over the set amount before it reaches the server.',
  '왼쪽 위에 보통 사용자 지우, 왼쪽 아래에 봇, 오른쪽에 API 서버가 있습니다. 아직 막는 장치가 없습니다.':
    'At the top left is Jiwoo, a normal user; at the bottom left, a bot; on the right, the API server. Nothing stops anything yet.',
  '봇의 요청이 서버를 가득 채웁니다.': 'The bot\'s requests fill the server.',
  '지우의 요청도 줄 뒤에서 기다리다 실패합니다.': 'Jiwoo\'s request waits at the back of the queue and fails too.',
  '봇 하나 때문에 지우의 요청이 실패한 까닭은?': 'Why did Jiwoo\'s request fail because of one bot?',
  '서버의 처리량을 봇이 다 차지해서': 'The bot took all the server\'s capacity', '지우의 인터넷이 느려서': 'Jiwoo\'s internet is slow',
  '서버는 누가 보냈는지 가리지 않고 들어온 순서대로 처리하다 넘쳤습니다.': 'The server handled requests in arrival order without caring who sent them, and overflowed.',
  // Step 2
  '토큰 양동이': 'Token bucket', '서버 앞에서 세기': 'Counting in front of the server',
  '사용자마다 양동이의 토큰만큼만 통과시킨다': 'Let each user through only as many times as the tokens in their bucket',
  '레이트 리미터는 서버 앞에서 요청을 셉니다. 흔한 방법인 토큰 양동이는 사용자마다 토큰을 최대 5개 담는 양동이를 두고, 1초에 1개씩 채웁니다. 요청 하나가 토큰 하나를 쓰고, 토큰이 없으면 서버로 보내지 않고 "429 Too Many Requests"로 바로 거절합니다. 잠깐 몰아서 5개까지는 허용하고, 길게 보면 1초에 1개로 제한됩니다.':
    'A rate limiter counts requests in front of the server. The common token bucket gives each user a bucket holding at most 5 tokens, refilled 1 a second. Each request uses one token; with no token left, the request is not sent on but refused at once with "429 Too Many Requests". A short burst of up to 5 is allowed; in the long run it is limited to 1 a second.',
  '봇의 요청 7개 중 5개만 통과하고 2개는 429로 거절됐습니다. 거절은 서버에 닿기 전에 일어나므로 서버는 일을 하지 않습니다.':
    'Only 5 of the bot\'s 7 requests passed; 2 were refused with 429. The refusal happens before the server, so the server does no work.',
  '봇과 지우의 요청이 이제 레이트 리미터를 지나 API 서버로 갑니다.': 'Requests from the bot and Jiwoo now pass the rate limiter on the way to the API server.',
  '봇이 한순간에 요청 7개를 보냅니다.': 'The bot sends 7 requests in an instant.',
  '토큰 5개를 써서 5개가 통과합니다.': '5 tokens are used and 5 pass.',
  '토큰이 없는 2개는 서버에 닿기 전에 거절됩니다.': 'The 2 with no token are refused before reaching the server.',
  '나머지는 거절됩니다.': 'The rest are refused.',
  '지우는 자기 양동이의 토큰을 씁니다.': 'Jiwoo uses a token from a separate bucket.',
  '봇의 토큰이 다 떨어져도 지우의 양동이는 그대로입니다. 누구 기준으로 셀지가 중요합니다.': 'Even with the bot out of tokens, Jiwoo\'s bucket is untouched. Who you count by matters.',
  '봇의 요청 7개 중 몇 개가 서버로 갈까요?': 'How many of the bot\'s 7 requests reach the server?',
  '양동이에 토큰이 5개뿐이라 5개만 통과하고 나머지 2개는 거절됩니다.': 'The bucket holds only 5 tokens, so only 5 pass and the other 2 are refused.',
  '봇이 막혀도 지우가 통과한 까닭은?': 'Why did Jiwoo get through even though the bot was blocked?',
  '사용자마다 양동이가 따로 있어서': 'Each user has a separate bucket', '지우의 요청이 더 중요해서': 'Jiwoo\'s request matters more',
  '사용자마다 양동이가 따로라 지우는 영향을 받지 않습니다.': 'Each user has a separate bucket, so Jiwoo is not affected.',
  // Step 3
  '시간이 지나면 토큰이 다시 찬다': 'Tokens refill over time',
  '토큰은 1초에 1개씩 다시 찹니다. 봇이 3초를 기다렸다가 다시 보내면 토큰 3개만큼은 통과합니다. 그래서 길게 보면 봇은 1초에 1개, 1분에 약 60개까지만 서버에 닿습니다. 양동이 크기는 잠깐 몰아서 보내는 것을 얼마나 봐줄지, 채우는 속도는 평균 허용량을 정합니다.':
    'Tokens refill 1 a second. If the bot waits 3 seconds and sends again, 3 tokens\' worth get through. So in the long run the bot reaches the server only 1 a second, about 60 a minute. The bucket size sets how much of a short burst to allow; the refill rate sets the average allowed.',
  '양동이 크기(5)와 채우는 속도(1/초) 두 숫자로 "잠깐 몰림은 허용, 계속 몰아치기는 차단"을 표현했습니다. 로그인처럼 민감한 곳은 더 작게, 상품 보기처럼 가벼운 곳은 더 넉넉하게 정합니다.':
    'Two numbers, the bucket size (5) and the refill rate (1/s), express "allow a short burst, block a steady flood". Sensitive places like login get smaller numbers; light ones like viewing products get more room.',
  '같은 장면입니다. 3초 뒤 봇이 다시 요청을 보냅니다.': 'The same scene. After 3 seconds the bot sends requests again.',
  '봇이 다시 5개를 보냅니다.': 'The bot sends 5 again.', '세 개가 통과합니다.': 'Three pass.',
  '나머지는 거절하며 언제 다시 보낼지 알려 줍니다.': 'The rest are refused with advice on when to send again.',
  '3초 뒤 보낸 5개 중 몇 개가 통과할까요?': 'How many of the 5 sent after 3 seconds pass?',
  '3초 동안 토큰이 3개 찼습니다. 3개는 통과, 2개는 거절입니다.': 'In 3 seconds 3 tokens refilled. 3 pass and 2 are refused.',
  '봇이 1분 내내 쉬지 않고 보내면 서버에 닿는 요청은 대략 몇 개일까요?': 'If the bot sends nonstop for a whole minute, about how many requests reach the server?',
  '약 65개 (처음 5 + 1초에 1개씩 60)': 'About 65 (the first 5 + 60 at 1 a second)',
  '처음 양동이 5개를 쓰고 나면 1초에 채워지는 1개씩만 통과합니다.': 'Once the first bucket of 5 is used, only the 1 refilled each second gets through.',
  // Step 4
  '어디서 셀까': 'Where to count',
  '누구 기준으로, 어디서 함께 셀지 정한다': 'Decide who to count by and where to count together',
  '레이트 리미터는 보통 서버 앞의 게이트웨이나 로드밸런서(7.3)에 둡니다. 셀 기준은 로그인한 사용자, API 키, IP 주소 등입니다. 리미터도 여러 대라면, 각자 따로 세면 봇이 리미터마다 5개씩 써 버립니다. 그래서 토큰 수를 모든 리미터가 함께 보는 빠른 저장소(7.2의 캐시 같은 것)에 둡니다.':
    'A rate limiter usually sits in the gateway or load balancer (7.3) in front of the servers. You count by logged-in user, API key, IP address and so on. With several limiters each counting on its own, the bot uses 5 at every limiter. So the token counts go in a fast store that all limiters read (like the cache of 7.2).',
  '리미터가 두 대여도 토큰을 함께 세면 봇은 합쳐서 5개만 씁니다. 거절할 때는 언제 다시 시도할지(Retry-After)를 알려 주어, 잘 만든 프로그램은 기다렸다 다시 보냅니다.':
    'Even with two limiters, counting tokens together lets the bot use only 5 in total. A refusal says when to try again (Retry-After), so a well-made program waits and sends again.',
  '같은 장면입니다. 리미터가 여러 대일 때 토큰을 어디에 두는지 봅니다.': 'The same scene. See where the tokens go when there are several limiters.',
  '봇의 요청이 두 리미터로 나뉘어 들어옵니다.': 'The bot\'s requests come in split across two limiters.',
  '공유 저장소에서 함께 세면 합쳐서 5개만 통과합니다.': 'Counting together in the shared store, only 5 pass in total.',
  '서버는 정해진 양만 받습니다.': 'The server takes only the set amount.',
  '리미터 A, B가 토큰을 각자 따로 세면 봇은 몇 개를 통과시킬까요?': 'If limiters A and B each count tokens separately, how many does the bot get through?',
  '각자 양동이를 가지면 봇은 리미터 수만큼 더 보낼 수 있습니다.': 'With a bucket each, the bot can send as many more as there are limiters.',
  '로그인 시도에 IP 주소 기준으로만 제한을 두면 생길 수 있는 문제는?': 'What can go wrong if login attempts are limited by IP address alone?',
  '같은 와이파이를 쓰는 여러 사람이 함께 막힐 수 있다': 'Many people on the same Wi-Fi can be blocked together', '아무 문제 없다': 'Nothing at all',
  '학교나 회사는 많은 사람이 한 IP를 씁니다. 그래서 계정, API 키 같은 기준을 함께 씁니다.': 'At a school or office many people share one IP. So account, API key and similar are used alongside it.',
};
