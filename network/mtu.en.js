// English for Networking 2.5 MTU and fragmentation. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'MTU와 단편화 · 레슨 2.5': 'MTU and fragmentation · Lesson 2.5',
  '네트워크 2장 IP와 주소 · 레슨 2.5': 'Networking chapter 2 IP and addressing · Lesson 2.5',
  '길 중간의 MTU보다 큰 패킷을 라우터가 조각내는 길, DF가 켜져 있어 버리고 ICMP로 알리는 길, 그 알림이 방화벽에 막혀 큰 패킷만 멈추는 길을 따라가 보세요.':
    'Follow a router fragmenting a packet bigger than the MTU further along the path, dropping it and reporting by ICMP when DF is set, and that report being blocked by a firewall so that only large packets stall.',
  '길 중간에 더 작은 MTU가 있으면 큰 패킷은 어떻게 될까요? MTU 1400인 터널을 지나는 길로 패킷을 보내 보세요.':
    'What happens to a large packet when a smaller MTU lies along the path? Send packets along a path through a tunnel with MTU 1400.',
  '길 중간의 MTU보다 큰 패킷은 어떻게 될까?': 'What happens to a packet bigger than the MTU further along the path?',
  'MTU 1400인 길': 'A path with MTU 1400',
  'PC A의 패킷이 MTU 1400인 길 앞의 라우터에서 그대로 지나가거나, 조각나거나, 버려지고 ICMP 알림이 돌아오는 장면':
    'PC A\'s packet at the router before an MTU 1400 link, passing as it is, being fragmented, or being dropped with an ICMP report sent back',
  'MTU 1500 길': 'MTU 1500 link', 'MTU 1400 길 (터널)': 'MTU 1400 link (tunnel)', '컴퓨터': 'Computer', '라우터': 'Router', '방화벽': 'Firewall', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  'PC A · MTU 1500': 'PC A · MTU 1500', '라우터 · 다음 길 MTU 1400': 'Router · next link MTU 1400', 'PC B': 'PC B', 'PC A': 'PC A', '라우터 · MTU 1400 앞': 'Router · before MTU 1400',
  'PC A · MTU 1500 → 라우터 · 다음 길 MTU 1400': 'PC A · MTU 1500 → router · next link MTU 1400', '라우터 · 다음 길 MTU 1400 → PC B': 'Router · next link MTU 1400 → PC B', '라우터 · 다음 길 MTU 1400 → PC A · MTU 1500': 'Router · next link MTU 1400 → PC A · MTU 1500',
  'PC A → 방화벽': 'PC A → firewall', '방화벽 → 라우터 · MTU 1400 앞': 'Firewall → router · before MTU 1400', '라우터 · MTU 1400 앞 → 방화벽': 'Router · before MTU 1400 → firewall',
  '라우터 · 다음 길 MTU 1400 · 1400B': 'Router · next link MTU 1400 · 1400B', '라우터 · 다음 길 MTU 1400 · 조각 2 · 120B': 'Router · next link MTU 1400 · fragment 2 · 120B', 'PC A · 1500B · 또': 'PC A · 1500B · again',
  // Work panel
  '길의 MTU': 'Link MTUs', 'A → 라우터  1500바이트 (이더넷)': 'A → router  1500 bytes (Ethernet)', '라우터 → B  1400바이트 (터널)': 'Router → B  1400 bytes (tunnel)', 'A → 라우터  1500바이트': 'A → router  1500 bytes', '라우터 → B  1400바이트': 'Router → B  1400 bytes',
  '패킷 1400바이트 · 다음 길 MTU 1400': 'Packet 1400 bytes · next link MTU 1400', '1400 ≤ 1400 → 그대로 보냄': '1400 ≤ 1400 → sent as it is', '1400바이트 그대로 받음': 'Got 1400 bytes as they were',
  '패킷 1500바이트 · 다음 길 MTU 1400': 'Packet 1500 bytes · next link MTU 1400', '1500 > 1400 · DF 없음 → 쪼갬': '1500 > 1400 · no DF → fragment', '조각 1: 머리말 20 + 데이터 1380 = 1400': 'Fragment 1: header 20 + data 1380 = 1400', '조각 2: 머리말 20 + 데이터 100 = 120': 'Fragment 2: header 20 + data 100 = 120',
  '조각 1 받음 (1400) · 나머지 기다림': 'Got fragment 1 (1400) · waiting for the rest', '조각 2 받음 (120)': 'Got fragment 2 (120)', '데이터 1380 + 100 = 1480 → 원래 패킷 1500 복원': 'Data 1380 + 100 = 1480 → original 1500-byte packet rebuilt',
  'PC A가 보낼 것': 'What PC A will send', '1500바이트 · DF(쪼개지 마시오) 켜짐': '1500 bytes · DF (don\'t fragment) set', '1500 > 1400 이고 DF → 쪼갤 수 없음': '1500 > 1400 and DF → cannot fragment', '버리고 ICMP "다음 길 MTU 1400"을 A에게': 'Drop it and send ICMP "next link MTU 1400" to A',
  'ICMP: 너무 큼 · 다음 길 MTU 1400': 'ICMP: too big · next link MTU 1400', '이 길의 MTU를 1400으로 기억': 'Remembers this path\'s MTU as 1400', '1400 ≤ 1400 → 그대로': '1400 ≤ 1400 → as it is', '1400바이트 받음': 'Got 1400 bytes',
  'PC A의 연결': 'PC A\'s connection', '접속 인사(작은 패킷)는 지나감': 'The connection handshake (small packets) gets through', '큰 응답 1500바이트 · DF': 'A large reply, 1500 bytes · DF', '나가는 패킷은 통과': 'Outgoing packets pass',
  '1500 > 1400 · DF → 버림': '1500 > 1400 · DF → dropped', 'ICMP "MTU 1400"을 A에게 보냄': 'Sends ICMP "MTU 1400" to A', '들어오는 ICMP → 규칙: 모두 막음 → 버림': 'Incoming ICMP → rule: block all → dropped',
  '답도 알림도 없음 → 같은 1500을 다시 보냄': 'No reply, no report → sends the same 1500 again', '다시 버려짐 · 큰 응답에서 멈춤': 'Dropped again · stalls on the large reply',
  // Badges and moving labels
  '1400바이트 보낼 것': 'Has 1400 bytes to send', '1400B': '1400B', '1400 보냄': 'Sent 1400', '1400 받음': 'Got 1400',
  '1500바이트 보낼 것': 'Has 1500 bytes to send', '1500B': '1500B', '1500 보냄 · DF 없음': 'Sent 1500 · no DF', '1500 → 1400 + 120 (머리말 20씩)': '1500 → 1400 + 120 (20-byte header each)',
  '조각 1 · 1400B': 'Fragment 1 · 1400B', '조각 1 받음 · 기다림': 'Got fragment 1 · waiting', '조각 2 · 120B': 'Fragment 2 · 120B', '조각 2개 → 붙여 1500': '2 fragments → joined into 1500',
  '1500 · DF': '1500 · DF', '1500B · DF': '1500B · DF', 'DF · 1500 > 1400 → 버림 · 알림': 'DF · 1500 > 1400 → drop · report', 'ICMP · MTU 1400': 'ICMP · MTU 1400', 'ICMP: MTU 1400 → 다시 1400': 'ICMP: MTU 1400 → 1400 again',
  '1400B · DF': '1400B · DF', '1500은 DF라 버림 · 1400은 그대로': '1500 dropped for DF · 1400 passes',
  '규칙: ICMP 모두 막음': 'Rule: block all ICMP', '작은 것만 옴': 'Only small ones arrive', '나가는 것 통과': 'Outgoing passes', 'DF라 버림 · ICMP 보냄': 'Dropped for DF · ICMP sent', 'ICMP 막음': 'ICMP blocked', '1500B · 또': '1500B · again',
  '알림 없음 → 또 1500': 'No report → 1500 again', '큰 것만 안 옴': 'Only large ones missing',
  // Step 1
  'MTU 안이면 그대로': 'Within the MTU, as it is',
  '패킷이 길의 MTU보다 작거나 같으면 그대로 지나간다': 'A packet no larger than the link\'s MTU passes as it is',
  'MTU는 한 길(링크)이 한 번에 실을 수 있는 가장 큰 IP 패킷의 크기입니다. A와 라우터 사이는 보통 이더넷이라 1500바이트, 라우터와 B 사이는 VPN 터널이라 머리말 한 겹만큼 줄어든 1400바이트입니다. A가 보낸 1400바이트 패킷은 두 길 모두에 들어가므로 그대로 B에게 닿습니다.':
    'The MTU is the size of the largest IP packet a link can carry at once. Between A and the router is ordinary Ethernet, 1500 bytes; between the router and B is a VPN tunnel, 1400 bytes, smaller by one extra layer of headers. The 1400-byte packet A sends fits both links, so it reaches B as it is.',
  '라우터 이름표가 "1400 ≤ 1400 → 그대로"가 되고, 가는 선(MTU 1400)을 지나 B 이름표가 "1400 받음"이 됩니다.':
    'The router\'s badge becomes "1400 ≤ 1400 → as it is", and across the thin line (MTU 1400) B\'s badge becomes "got 1400".',
  '왼쪽 PC A(MTU 1500), 가운데 라우터, 오른쪽 PC B가 한 줄로 있습니다. 라우터와 B 사이는 MTU 1400인 가는 선입니다. A의 1400바이트 패킷이 그대로 B에게 닿습니다.':
    'PC A (MTU 1500) on the left, a router in the middle and PC B on the right stand in a row. Between the router and B is a thin line with MTU 1400. A\'s 1400-byte packet reaches B as it is.',
  'A: 1400바이트': 'A: 1400 bytes', '라우터: 다음 길 MTU 1400': 'Router: next link MTU 1400', ' · ': ' · ', '1400 ≤ 1400': '1400 ≤ 1400', '그대로 B에게': 'On to B as it is',
  'A의 1400바이트 패킷이 라우터에 닿습니다. 다음 길에 들어가는 크기입니다.': 'A\'s 1400-byte packet reaches the router. It fits the next link.',
  '패킷이 가는 선을 그대로 지나 B에게 닿습니다.': 'The packet crosses the thin line as it is and reaches B.',
  // Step 2
  '쪼개서 보내기': 'Fragmenting',
  '길보다 큰 패킷은 라우터가 조각내고, 받는 쪽이 다시 붙인다': 'A packet too big for the link is fragmented by the router and rejoined by the receiver',
  'A가 1500바이트 패킷을 보냅니다. 라우터 앞의 다음 길은 1400바이트까지라 그대로 실을 수 없습니다. IPv4에서는 "쪼개지 마시오"(DF) 표시가 없으면 라우터가 패킷을 조각냅니다. IP 머리말 20바이트를 빼면 실을 데이터는 1480바이트이므로, 첫 조각은 1400(머리말 20 + 데이터 1380), 둘째 조각은 120(머리말 20 + 데이터 100)이 됩니다. 조각을 다시 붙이는 일은 중간 라우터가 아니라 받는 쪽 B가 합니다.':
    'A sends a 1500-byte packet. The next link after the router takes only up to 1400 bytes, so the packet cannot go as it is. In IPv4, without the "don\'t fragment" (DF) flag, the router fragments it. Without its 20-byte IP header the packet carries 1480 bytes of data, so the first fragment is 1400 (header 20 + data 1380) and the second 120 (header 20 + data 100). Rejoining the fragments is done not by routers along the way but by the receiver, B.',
  '라우터 이름표가 "1500 → 1400 + 120 (머리말 20씩)"이 되고, 가는 선으로 조각 둘이 차례로 갑니다. B 이름표는 "조각 2개 → 붙여 1500"입니다.':
    'The router\'s badge becomes "1500 → 1400 + 120 (20-byte header each)", and the two fragments go one after the other along the thin line. B\'s badge reads "2 fragments → joined into 1500".',
  '같은 배치에서 A가 1500바이트 패킷을 보냅니다. MTU 1400인 길 앞에서 라우터가 1400바이트와 120바이트 두 조각으로 나눠 보내고, B가 다시 붙여 1500바이트 패킷을 얻습니다.':
    'In the same layout, A sends a 1500-byte packet. Before the MTU 1400 link, the router splits it into two fragments of 1400 and 120 bytes, and B joins them back into the 1500-byte packet.',
  'A: 1500바이트 (DF 없음)': 'A: 1500 bytes (no DF)', '라우터: 1500 > 1400': 'Router: 1500 > 1400', '조각 1400 + 120': 'Fragments 1400 + 120', 'B가 붙여 1500': 'B joins them into 1500',
  'A의 1500바이트 패킷이 다음 길보다 커서, 라우터가 두 조각으로 나눕니다.': 'A\'s 1500-byte packet is bigger than the next link, so the router splits it in two.',
  '1500바이트 패킷이 MTU 1400인 길을 만났습니다. DF 표시는 없습니다. 라우터는 어떻게 할까요?': 'A 1500-byte packet meets a link with MTU 1400. There is no DF flag. What does the router do?',
  '그대로 보낸다': 'Sends it as it is', '조각내서 보낸다': 'Fragments it and sends the pieces', '버린다': 'Drops it',
  'IPv4에서 DF가 없으면 라우터가 길에 맞는 크기로 패킷을 조각냅니다.': 'In IPv4, without DF, the router fragments the packet into pieces that fit the link.',
  '첫 조각 1400바이트가 B에 닿습니다.': 'The first fragment, 1400 bytes, reaches B.',
  '둘째 조각이 닿자 B가 두 조각을 붙여 원래 패킷을 복원합니다.': 'When the second fragment arrives, B joins the two and rebuilds the original packet.',
  // Step 3
  '쪼개지 말라면 알린다': 'When told not to fragment, report',
  'DF가 켜진 패킷은 버리고 "MTU 1400"을 알려, 보내는 쪽이 줄여 보낸다': 'A packet with DF set is dropped and "MTU 1400" is reported, so the sender sends smaller',
  '조각내기는 라우터에 부담이고 조각 하나만 잃어도 전체를 다시 보내야 해서, 요즘 TCP는 패킷에 DF(쪼개지 마시오)를 켜고 보냅니다. 그러면 라우터는 1500바이트 패킷을 조각내지 않고 버린 뒤, ICMP "너무 큼, 다음 길 MTU 1400"을 A에게 보냅니다. A는 이 길의 MTU를 1400으로 기억하고 1400바이트로 다시 보냅니다(경로 MTU 탐색). IPv6에서는 라우터가 조각내지 않으므로 항상 이렇게 합니다.':
    'Fragmenting burdens routers, and losing a single fragment means resending the whole packet, so TCP today sends packets with DF (don\'t fragment) set. The router then does not fragment the 1500-byte packet but drops it and sends A an ICMP message: "too big, next link MTU 1400". A remembers this path\'s MTU as 1400 and sends again at 1400 bytes (path MTU discovery). In IPv6 routers never fragment, so it always works this way.',
  '라우터 이름표가 "DF · 1500 > 1400 → 버림 · 알림"이 되고, ICMP가 A로 돌아갑니다. A 이름표가 "ICMP: MTU 1400 → 다시 1400"이 되고, 라우터 이름표는 "1500은 DF라 버림 · 1400은 그대로", B 이름표는 "1400 받음"으로 끝납니다.':
    'The router\'s badge becomes "DF · 1500 > 1400 → drop · report", and ICMP goes back to A. A\'s badge becomes "ICMP: MTU 1400 → 1400 again", and it ends with the router\'s badge at "1500 dropped for DF · 1400 passes" and B\'s at "got 1400".',
  '같은 배치에서 A가 DF를 켠 1500바이트 패킷을 보냅니다. 라우터가 버리고 ICMP로 MTU 1400을 알려 주자, A가 1400바이트로 줄여 다시 보내 B에게 닿습니다.':
    'In the same layout, A sends a 1500-byte packet with DF set. The router drops it and reports MTU 1400 by ICMP; A sends again at 1400 bytes and it reaches B.',
  'A: 1500바이트 · DF': 'A: 1500 bytes · DF', '라우터: 버림 · ICMP "MTU 1400"': 'Router: drop · ICMP "MTU 1400"', 'A: 1400으로 줄여 다시': 'A: again, cut to 1400', 'B 받음': 'B gets it',
  'DF가 켜져 있어 라우터는 조각내지 못하고 패킷을 버립니다.': 'With DF set, the router cannot fragment and drops the packet.',
  'DF(쪼개지 마시오)가 켜진 1500바이트 패킷이 MTU 1400인 길을 만났습니다. 라우터는?': 'A 1500-byte packet with DF (don\'t fragment) set meets a link with MTU 1400. What does the router do?',
  '조각낸다': 'Fragments it', '버리고 보낸 쪽에 MTU를 알린다': 'Drops it and tells the sender the MTU',
  'DF는 조각내지 말라는 뜻입니다. 라우터는 버리고 ICMP로 "다음 길 MTU 1400"을 알려 줍니다.': 'DF means do not fragment. The router drops the packet and reports "next link MTU 1400" by ICMP.',
  'A가 ICMP를 받고 이 길의 MTU를 1400으로 기억합니다.': 'A gets the ICMP and remembers this path\'s MTU as 1400.',
  'A가 1400바이트로 줄여 다시 보냅니다. 이번에는 지나갑니다.': 'A sends again at 1400 bytes. This time it passes.',
  'B가 받습니다.': 'B gets it.',
  // Step 4
  '알림이 막히면': 'When the report is blocked',
  '알림(ICMP)이 막히면 큰 패킷만 영영 가지 못한다': 'When the report (ICMP) is blocked, only large packets never get through',
  '어떤 방화벽은 "ICMP는 위험하다"며 모두 막습니다. 그러면 라우터가 보낸 "MTU 1400" 알림이 A에게 닿지 못합니다. A는 패킷이 왜 사라지는지 모른 채 같은 1500바이트를 계속 다시 보내고, 모두 버려집니다. 작은 패킷(접속 인사, 짧은 요청)은 지나가니 연결은 되는데, 큰 응답에서 멈춥니다. 이를 경로 MTU 블랙홀이라고 합니다. ICMP "너무 큼"(IPv4 유형 3 코드 4, IPv6 유형 2)은 막지 말아야 하고, 터널 쪽에서 TCP의 최대 크기(MSS)를 줄여 주기도 합니다.':
    'Some firewalls block all ICMP as "dangerous". Then the router\'s "MTU 1400" report never reaches A. Not knowing why its packets vanish, A keeps resending the same 1500 bytes, and every one is dropped. Small packets (the connection handshake, short requests) get through, so the connection is up, but it stalls on a large reply. This is called a path MTU black hole. ICMP "too big" (IPv4 type 3 code 4, IPv6 type 2) must not be blocked; the tunnel side may also lower TCP\'s maximum segment size (MSS).',
  '라우터가 보낸 ICMP가 방화벽에서 멈추고, 방화벽 이름표가 경고 색 "ICMP 막음"이 됩니다. A 이름표는 "알림 없음 → 또 1500", B 이름표는 "큰 것만 안 옴"입니다.':
    'The router\'s ICMP stops at the firewall, whose badge turns to the warning colour "ICMP blocked". A\'s badge reads "no report → 1500 again" and B\'s "only large ones missing".',
  '왼쪽부터 PC A, 방화벽, 라우터, PC B가 한 줄로 있고, 라우터와 B 사이는 MTU 1400입니다. A의 DF 1500바이트 패킷을 라우터가 버리고 ICMP를 보내지만, 방화벽이 ICMP를 막아 A는 알지 못하고 같은 크기를 계속 보냅니다.':
    'From the left, PC A, a firewall, a router and PC B stand in a row, with MTU 1400 between the router and B. The router drops A\'s 1500-byte DF packet and sends ICMP, but the firewall blocks the ICMP, so A never learns and keeps sending the same size.',
  'A: 1500 · DF': 'A: 1500 · DF', '라우터: 버림 · ICMP': 'Router: drop · ICMP', '방화벽: ICMP 막음': 'Firewall: ICMP blocked', 'A: 이유 모름 · 1500 또 보냄 (멈춤)': 'A: does not know why · sends 1500 again (stalls)',
  'A가 DF를 켠 1500바이트 패킷을 보냅니다. 방화벽은 나가는 것을 통과시킵니다.': 'A sends a 1500-byte packet with DF set. The firewall lets outgoing traffic pass.',
  '라우터가 버리고 ICMP로 MTU 1400을 알립니다.': 'The router drops it and reports MTU 1400 by ICMP.',
  '방화벽이 ICMP를 막아 버립니다. 알림이 A에게 가지 못합니다.': 'The firewall blocks the ICMP and drops it. The report never reaches A.',
  '방화벽이 ICMP를 모두 막습니다. A는 어떻게 될까요?': 'The firewall blocks all ICMP. What happens to A?',
  'MTU를 알게 되어 1400으로 보낸다': 'It learns the MTU and sends at 1400', '이유를 모른 채 1500을 계속 보내고 모두 버려진다': 'Not knowing why, it keeps sending 1500 and every packet is dropped', '연결이 바로 끊긴다': 'The connection is cut at once',
  '알림이 오지 않으니 A는 크기를 줄여야 한다는 것을 모릅니다. 작은 패킷만 지나가 연결은 살아 있는 채 멈춥니다.': 'With no report, A does not know it must send smaller. Only small packets pass, so the connection stays up but stalls.',
  'A는 이유를 모른 채 같은 1500바이트를 다시 보내고, 또 버려집니다.': 'Not knowing why, A sends the same 1500 bytes again, and it is dropped again.',
};
