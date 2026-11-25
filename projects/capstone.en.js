// English for 9.3 A web service that holds up. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '버티는 웹 서비스 · 프로젝트 9.3': 'A web service that holds up · Project 9.3',
  '문구점 서비스에 부하를 올리며 사용률을 계산해 병목을 찾고, 앱 서버 늘리기, 캐시 붙이기, 큐와 레이트 리미터로 몰림 대비하기를 차례로 적용해 한계를 넓혀 보세요. 5–7장을 하나로 엮는 프로젝트입니다.':
    'Raise the load on the stationery shop service, calculate utilization to find the bottleneck, and widen the limit by adding app servers, attaching a cache, and preparing for rushes with a queue and a rate limiter in turn. A project that ties chapters 5–7 together.',
  '캐시, 로드밸런서, 큐를 갖춘 서비스는 어디까지 버틸까요? 부하를 올릴 때마다 가장 먼저 꽉 차는 곳을 찾고, 알맞은 도구로 넓히는 과정을 직접 계산해 보세요.':
    'How far can a service with a cache, a load balancer and a queue hold up? Each time the load goes up, find the first place to fill up and work out yourself how the right tool widens it.',
  '사용자 요청이 로드밸런서, 앱 서버, 캐시, 주문 큐와 일꾼을 지나 DB로 가는 장면': 'User requests passing through the load balancer, app servers, cache, order queue and worker to the DB',
  '부하를 올리며 병목 찾기': 'Finding bottlenecks under load', '앱 서버·일꾼': 'App servers, workers',
  
  // Stations
  '사용자들': 'Users', '앱 서버 1대': '1 app server', '앱 서버 1': 'App server 1', '앱 서버 2': 'App server 2', '앱 서버 3대': '3 app servers', '로드밸런서': 'Load balancer', '로드밸런서 + 리미터': 'LB + limiter',
  '캐시': 'Cache', '주문 큐': 'Order queue', '일꾼': 'Worker',
  '사용자들 → 앱 서버 1대': 'Users → 1 app server', '앱 서버 1대 → DB': '1 app server → DB', '사용자들 · 800/초': 'Users · 800/s',
  '사용자들 → 로드밸런서': 'Users → Load balancer', '로드밸런서 → 앱 서버 1': 'Load balancer → App server 1', '로드밸런서 → 앱 서버 2': 'Load balancer → App server 2',
  '앱 서버 1 → DB': 'App server 1 → DB', '앱 서버 1 → 캐시': 'App server 1 → Cache', '앱 서버 1 · 1,600 질의/초': 'App server 1 · 1,600 queries/s', '캐시 → DB': 'Cache → DB', '캐시 · MISS 160/초': 'Cache · MISS 160/s',
  '사용자들 → 로드밸런서 + 리미터': 'Users → LB + limiter', '앱 서버 3대 → 주문 큐': '3 app servers → Order queue', '앱 서버 3대 → 캐시': '3 app servers → Cache',
  '주문 큐 → 일꾼': 'Order queue → Worker', '일꾼 → DB': 'Worker → DB', '일꾼 · 200 쓰기/초': 'Worker · 200 writes/s',
  // Step 1
  '부하 걸기': 'Add load', '부하를 올리며 가장 먼저 꽉 차는 곳을 찾는다': 'Raise the load and find what fills up first',
  '6.9의 문구점을 직접 운영한다고 해 봅시다. 앱 서버 한 대는 1초에 페이지 500개를 만들 수 있고, 페이지마다 DB 질의 2번이 필요하며, DB는 1초에 질의 1,000개를 처리합니다. 부하를 조금씩 올리며 가장 먼저 꽉 차는 곳(병목)을 찾는 것이 한계 찾기입니다. 병목이 아닌 곳을 키워 봐야 소용이 없습니다.':
    'Say you run the stationery shop of 6.9 yourself. One app server can build 500 pages a second, each page needs 2 DB queries, and the DB handles 1,000 queries a second. Finding the limit means raising the load bit by bit to find what fills up first (the bottleneck). Growing anything that is not the bottleneck does no good.',
  '1초에 400개일 때는 앱 서버 80%, DB 80%로 버팁니다. 800개로 올리면 앱 서버가 500개에서 막혀 첫 병목이 됩니다. 숫자로 각 부품의 사용률을 계산하면 어디부터 고칠지 보입니다.':
    'At 400 a second, the app server at 80% and the DB at 80% hold up. Raise it to 800 and the app server is stuck at 500, the first bottleneck. Calculating each part\'s utilization in numbers shows where to fix first.',
  '왼쪽부터 사용자들, 앱 서버 한 대, DB가 한 줄로 놓여 있습니다.': 'From the left, users, one app server and the DB stand in a row.',
  '용량': 'Capacity', '앱 서버: 500 페이지/초 · DB: 1,000 질의/초': 'App server: 500 pages/s · DB: 1,000 queries/s', '페이지 하나 = DB 질의 2번': 'One page = 2 DB queries', '500/초까지': 'Up to 500/s', '1,000/초까지': 'Up to 1,000/s',
  '400/초': '400/s', '앱 서버: 400 / 500 = 80%': 'App server: 400 / 500 = 80%', '1초에 400개를 보냅니다.': 'Send 400 a second.',
  '800 질의/초': '800 queries/s', 'DB 사용률': 'DB utilization', 'DB: 400 × 2 = 800 / 1,000 = 80%': 'DB: 400 × 2 = 800 / 1,000 = 80%', '아직 버팀': 'Still holding', 'DB도 80%로 버팁니다.': 'The DB holds up at 80% too.',
  '800/초': '800/s', '800/초로 올림': 'Raise to 800/s', '앱 서버: 800 / 500 = 160% → 넘침': 'App server: 800 / 500 = 160% → overflow', '처리 못 한 요청이 줄을 서고 느려짐 (7.3)': 'Unhandled requests queue up and things slow down (7.3)',
  '부하를 두 배로 올리자 앱 서버가 넘칩니다.': 'Doubling the load overflows the app server.', '160% 넘침': '160% overflow',
  '1초에 800개일 때 가장 먼저 막히는 곳은?': 'At 800 a second, what blocks first?', '앱 서버 (500/초까지)': 'App server (up to 500/s)',
  '앱 서버는 500개까지만 만들 수 있어 800개를 받으면 넘칩니다. DB는 앱 서버가 넘겨준 만큼만 받습니다.': 'The app server can build only 500, so 800 overflows it. The DB receives only what the app server passes on.',
  // Step 2
  '서버 늘리기': 'Add servers', '병목을 넓히면 다음 병목이 드러난다': 'Widen a bottleneck and the next one shows',
  '앱 서버가 병목이니 7.3처럼 로드밸런서 뒤에 앱 서버를 두 대 둡니다. 이제 1초에 1,000개까지 페이지를 만들 수 있습니다. 그런데 페이지마다 DB 질의 2번이 필요하므로, 앱 서버가 처리량을 늘린 만큼 DB에 가는 질의도 늘어납니다.':
    'The app server is the bottleneck, so put two app servers behind a load balancer, as in 7.3. Now up to 1,000 pages a second can be built. But each page needs 2 DB queries, so as the app servers handle more, the queries reaching the DB grow too.',
  '앱 서버는 800 / 1,000 = 80%로 여유가 생겼지만, DB가 1,600 / 1,000 = 160%로 넘쳤습니다. 한 병목을 고치면 다음으로 좁은 곳이 병목이 됩니다. 한계 찾기는 이 과정을 되풀이하는 일입니다.':
    'The app servers now have room at 800 / 1,000 = 80%, but the DB overflowed at 1,600 / 1,000 = 160%. Fix one bottleneck and the next narrowest place becomes the bottleneck. Finding the limit means repeating this.',
  '왼쪽부터 사용자들, 로드밸런서, 위아래 앱 서버 두 대, 오른쪽에 DB가 있습니다.': 'From the left: users, the load balancer, two app servers above and below, and the DB on the right.',
  '1초에 800개 · 앱 서버 2대 (각 500/초)': '800 a second · 2 app servers (500/s each)',
  '400 / 500 = 80%': '400 / 500 = 80%', '로드밸런서가 400개씩 나눕니다.': 'The load balancer splits it 400 each.', '앱 서버 2도 80%입니다.': 'App server 2 is at 80% too.',
  '1,600 질의/초': '1,600 queries/s', 'DB로 몰림': 'Piling onto the DB', '800 × 2 = 1,600 질의/초 > 1,000': '800 × 2 = 1,600 queries/s > 1,000', '두 서버의 질의가 DB 한 곳으로 몰립니다.': 'Both servers\' queries pile onto the one DB.',
  '앱 서버를 늘린 뒤 새로 드러난 병목은?': 'After adding app servers, what new bottleneck shows up?', 'DB (1,600 / 1,000)': 'DB (1,600 / 1,000)',
  '페이지마다 질의 2번이라 800 페이지는 1,600 질의입니다. DB 한 대의 1,000을 넘습니다.': 'At 2 queries per page, 800 pages are 1,600 queries, more than one DB\'s 1,000.',
  // Step 3
  '캐시 붙이기': 'Add a cache', '자주 읽는 것은 캐시에서 끝내 DB를 지킨다': 'Serve frequent reads from a cache to protect the DB',
  '상품 목록과 상품 정보는 자주 읽히고 잘 바뀌지 않습니다. 7.2처럼 앱 서버와 DB 사이에 캐시를 두면, 캐시에 있는 질의는 DB까지 가지 않습니다. 질의의 90%가 캐시에서 끝난다면(적중률 90%) DB에는 10%만 갑니다.':
    'Product lists and product details are read often and rarely change. Put a cache between the app servers and the DB, as in 7.2, and queries found in the cache never reach the DB. If 90% of queries end at the cache (a 90% hit rate), only 10% go to the DB.',
  'DB 질의가 1,600에서 160으로 줄어 DB 사용률이 16%가 됐습니다. 이제 다시 앱 서버 두 대의 1,000 페이지/초가 한계입니다. 캐시는 싸게 DB를 몇 배 버티게 하지만, 상품 가격이 바뀌면 캐시를 비워야 하는 일이 생깁니다.':
    'DB queries dropped from 1,600 to 160, bringing DB utilization to 16%. Now the limit is again the two app servers\' 1,000 pages/s. A cache cheaply makes the DB hold several times more, but when a product price changes, the cache has to be cleared.',
  '왼쪽부터 사용자들, 로드밸런서, 위아래 앱 서버 두 대, 오른쪽 위 캐시, 오른쪽 아래 DB가 있습니다.': 'From the left: users, the load balancer, two app servers above and below, the cache at top right and the DB at bottom right.',
  '1초에 800 페이지 → 질의 1,600/초': '800 pages a second → 1,600 queries/s', '캐시 적중률 90%': 'Cache hit rate 90%',
  '캐시가 먼저 받음': 'The cache takes it first', '90%인 1,440개는 캐시에서 바로 답함 (HIT)': 'The 90%, 1,440 of them, are answered by the cache (HIT)', '질의는 먼저 캐시로 갑니다.': 'Queries go to the cache first.', 'HIT 1,440': 'HIT 1,440',
  'MISS 160/초': 'MISS 160/s', 'DB에는 10%만': 'Only 10% to the DB', 'DB: 160 / 1,000 = 16%': 'DB: 160 / 1,000 = 16%', '캐시에 없는 10%만 DB로 갑니다.': 'Only the 10% not in the cache go to the DB.',
  '캐시 적중률이 90%에서 50%로 떨어지면 DB 질의는?': 'If the cache hit rate drops from 90% to 50%, DB queries become?', '800/초 (1,600의 50%)': '800/s (50% of 1,600)', '160/초 그대로': 'Still 160/s',
  '캐시에 없는 비율만큼 DB로 갑니다. 적중률이 떨어지면 DB가 다시 바빠집니다.': 'The share not in the cache goes to the DB. When the hit rate drops, the DB gets busy again.',
  '1,200/초': '1,200/s', '부하를 더 올리면': 'Raise the load more', '앱 서버 2대: 1,200 / 1,000 = 120% → 다시 앱 서버가 병목': '2 app servers: 1,200 / 1,000 = 120% → app servers are the bottleneck again', 'DB: 2,400 × 10% = 240 → 24%': 'DB: 2,400 × 10% = 240 → 24%',
  '부하를 더 올리면 이번에는 앱 서버가 다시 한계입니다.': 'Raise the load more, and this time the app servers are the limit again.',
  '1초에 1,200개를 버티려면 앱 서버는 최소 몇 대가 필요할까요?': 'To hold 1,200 a second, at least how many app servers are needed?', '3대 (500 × 3 = 1,500)': '3 (500 × 3 = 1,500)', '2대': '2',
  '1,200 ÷ 500 = 2.4이므로 3대가 필요합니다. 실제로는 한 대가 죽어도 버티도록 한 대 더 둡니다.': '1,200 ÷ 500 = 2.4, so 3 are needed. In practice you add one more so it holds even if one dies.',
  // Step 4
  '몰림에 대비': 'Prepare for rushes', '갑자기 몰리는 쓰기는 큐에 담고 제 속도로 처리한다': 'Put sudden rushes of writes in a queue and process them at a steady pace',
  '반짝 세일에는 주문(쓰기)이 1초에 3,000개씩 10초 동안 몰립니다. 쓰기는 캐시로 줄일 수 없고, DB 한 대는 쓰기를 1초에 200개 정도만 안전하게 처리합니다. 7.6처럼 주문을 큐에 넣고 바로 "접수됨"이라고 답한 뒤, 일꾼이 DB가 감당할 속도로 꺼내 저장합니다. 7.7의 레이트 리미터로 한 사람이 너무 많이 보내는 것도 막습니다.':
    'In a flash sale, orders (writes) rush in at 3,000 a second for 10 seconds. A cache cannot reduce writes, and one DB safely handles only about 200 writes a second. As in 7.6, put orders in a queue and answer "received" right away; a worker then takes them out and saves them at a pace the DB can handle. The rate limiter of 7.7 also stops one person sending too many.',
  '30,000개 주문이 큐에 쌓였고, 일꾼이 200/초로 150초 동안 저장했습니다. 사용자는 0.1초 만에 접수 답을 받았고 DB는 넘치지 않았습니다. 한계 찾기의 결론은 "어디가 먼저 꽉 차는지 재고, 그 곳에 맞는 도구(서버 늘리기, 캐시, 큐, 제한)를 고른다"입니다.':
    '30,000 orders piled up in the queue, and the worker saved them at 200/s over 150 seconds. Users got a "received" answer in 0.1 s and the DB never overflowed. The lesson of finding limits: "measure what fills up first, and choose the tool that fits that spot (more servers, a cache, a queue, limits)".',
  '왼쪽부터 사용자들, 로드밸런서, 앱 서버들, 위로 캐시, 아래로 주문 큐와 일꾼, 오른쪽에 DB가 있습니다.': 'From the left: users, the load balancer and app servers, with the cache above, the order queue and worker below, and the DB on the right.',
  '반짝 세일 10초': '10-second flash sale', '주문 3,000/초 × 10초 = 30,000개': 'Orders 3,000/s × 10 s = 30,000', 'DB 안전한 쓰기: 200/초': 'Safe DB writes: 200/s', '쓰기 200/초': 'Writes 200/s', 
  '주문 3,000/초': 'Orders 3,000/s', '몰림': 'Rush', '한 사람이 1초에 10개 넘게 보내면 429 (7.7)': 'More than 10 a second from one person gets 429 (7.7)', '주문이 몰려듭니다. 리미터가 지나친 요청은 거릅니다.': 'Orders rush in. The limiter filters out excessive requests.', '3,000/초': '3,000/s',
  '쪽지 3,000/초': 'Notes 3,000/s', '큐에 담기': 'Into the queue', '주문을 큐에 넣고 바로 "접수됨" (0.1초)': 'Put the order in the queue and reply "received" at once (0.1 s)', '10초 뒤 큐: 30,000개': 'Queue after 10 s: 30,000',
  '주문을 큐에 넣고 바로 답합니다.': 'Put orders in the queue and answer right away.', '30,000개': '30,000',
  '주문을 큐에 넣지 않고 바로 DB에 쓰면?': 'What if orders were written straight to the DB, without the queue?', 'DB가 200/초를 넘는 3,000/초를 받아 넘친다': 'The DB gets 3,000/s, over its 200/s, and overflows', '아무 문제 없다': 'No problem at all',
  '쓰기는 캐시로 줄일 수 없습니다. 큐가 몰림을 담아 두어야 DB가 버팁니다.': 'A cache cannot reduce writes. The queue must hold the rush for the DB to hold up.',
  '200/초': '200/s', '제 속도로 꺼내기': 'Take out at a steady pace', '일꾼이 1초에 200개씩 꺼냄': 'The worker takes out 200 a second', '일꾼이 DB가 감당할 속도로 꺼냅니다.': 'The worker takes them out at a pace the DB can handle.',
  '200 쓰기/초': '200 writes/s', 'DB는 넘치지 않음': 'The DB does not overflow', '30,000 ÷ 200 = 150초 만에 모두 저장': '30,000 ÷ 200 = all saved in 150 s', 'DB는 안전한 속도로만 씁니다.': 'The DB writes only at a safe pace.', '100%, 넘치지 않음': '100%, no overflow',
  '큐의 30,000개를 모두 저장하는 데 걸리는 시간은?': 'How long does saving all 30,000 in the queue take?', '150초': '150 s', '10초': '10 s', '1,500초': '1,500 s',
  '30,000 ÷ 200 = 150초입니다. 그동안 주문 상태는 "접수됨"이고, 저장되면 "확정"으로 바뀝니다.': '30,000 ÷ 200 = 150 s. Meanwhile the order status is "received", turning to "confirmed" once saved.',
  '상품 보기': 'View products', '읽기는 그대로 캐시로': 'Reads still go to the cache', '세일 중에도 상품 보기는 캐시에서 빠르게': 'Even during the sale, product views are fast from the cache', '읽기는 여전히 캐시가 받아 줍니다.': 'The cache still takes the reads.', 'HIT 90%': 'HIT 90%',
  // Example note on the still picture.
  '앱 서버 500/초 · DB 1,000 질의/초까지': 'app 500/s · DB 1,000 q/s max', '400/초면 둘 다 80%': '400/s: both 80%', '800/초면 앱 서버가 160%로 먼저 넘침': '800/s: the app hits 160% first',
  '앱 서버 2대가 400/초씩 (80%)': '2 app servers at 400/s each (80%)', '페이지마다 질의 2번: 1,600 질의/초': '2 queries a page: 1,600 queries/s', 'DB 1,000/초를 넘어 160%': 'over the DB\'s 1,000/s: 160%',
  '질의 1,600/초 중 90%인 1,440이 캐시에서 끝남': '1,440 of 1,600 queries/s (90%) end in the cache', 'DB에는 160/초만 (16%)': 'only 160/s reach the DB (16%)',
  '세일 10초: 주문 3,000/초 = 30,000개': '10 s sale: 3,000/s = 30,000', '큐에 쌓고 일꾼이 200/초씩': 'queued, workers take 200/s', 'DB는 넘치지 않음 · 150초에 걸쳐 처리': 'DB never overflows · 150 s',
  '200/초 · 안전': '200/s · safe', 'HIT 1,440/초': 'HIT 1,440/s',
};
