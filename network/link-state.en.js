// English for Networking 3.3 Link-state routing. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '링크 상태 라우팅 · 레슨 3.3': 'Link-state routing · Lesson 3.3',
  '네트워크 3장 라우팅 · 레슨 3.3': 'Networking chapter 3 Routing · Lesson 3.3',
  '라우터들이 링크 상태를 알려 같은 지도를 갖고, 비용 합이 가장 작은 길을 계산하고, 링크가 끊기면 다시 계산하는 길을 라우터 네 대로 따라가 보세요.':
    'Follow four routers sharing their link states to build the same map, computing the path with the smallest total cost, and recomputing when a link breaks.',
  '라우팅 표의 줄은 누가 채울까요? 비용이 붙은 링크로 이어진 라우터 네 대 사이로 알림과 패킷을 보내 보세요.':
    'Who fills in the lines of a routing table? Send announcements and packets between four routers joined by links with costs.',
  '라우터들은 서로 무엇을 주고받아 길을 스스로 찾을까?': 'What do routers exchange to find routes by themselves?',
  '라우터 네 대와 링크 비용': 'Four routers and link costs',
  '사각형으로 이어진 라우터 넷이 링크 상태 알림을 퍼뜨려 같은 지도를 갖고, 비용 합이 가장 작은 길로 패킷을 보내며, 링크가 끊기면 다시 계산하는 장면':
    'Four routers joined in a square spreading link-state announcements to share one map, sending packets along the path with the smallest total cost, and recomputing when a link breaks',
  '링크 (가운데 숫자 = 비용)': 'Link (number in the middle = cost)', '끊긴 링크': 'Broken link', '라우터': 'Router', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  'R1 → R2': 'R1 → R2', 'R1 → R3': 'R1 → R3', 'R2 → R4': 'R2 → R4', 'R2 → R1': 'R2 → R1', 'R3 → R4': 'R3 → R4', '끊김': 'broken',
  'R2 · LSA: R1 (다시)': 'R2 · LSA: R1 (again)', 'R3 · 패킷 2': 'R3 · packet 2', 'R2 · 패킷 1': 'R2 · packet 1', 'R2 · → R4': 'R2 · → R4', 'R3 · → R4': 'R3 · → R4',
  // Work panel
  'R1이 아는 것': 'What R1 knows', '내 링크  R2 비용 1 · R3 비용 5': 'My links  R2 cost 1 · R3 cost 5', '다른 라우터의 링크는 아직 모름': 'Other routers\' links not known yet',
  'R2의 지도': 'R2\'s map', 'R3의 지도': 'R3\'s map', 'R4의 지도': 'R4\'s map', 'R1의 지도': 'R1\'s map', '받은 줄  R1: R2 1 · R3 5': 'Line received  R1: R2 1 · R3 5', '받은 곳(R1) 말고 R4에게 다시 보냄': 'Sent on to R4, not back to R1',
  'R2가 다시 보낸 R1의 줄  R2 1 · R3 5': 'R1\'s line, sent on by R2  R2 1 · R3 5', 'R1과 직접 이어지지 않아도 지도에 생김': 'In the map even without a direct link to R1',
  'R1–R2 1 · R2–R4 1': 'R1–R2 1 · R2–R4 1', 'R1–R3 5 · R3–R4 1': 'R1–R3 5 · R3–R4 1', 'R1의 계산': 'R1\'s calculation', 'R2 거쳐  1 + 1 = 2': 'Via R2  1 + 1 = 2', 'R3 거쳐  5 + 1 = 6': 'Via R3  5 + 1 = 6', '2 < 6 → 다음 길은 R2': '2 < 6 → next hop R2',
  'R4': 'R4', '받음 · 지나온 비용 1 + 1 = 2': 'Got it · path cost 1 + 1 = 2',
  'R2의 링크': 'R2\'s links', 'R1  비용 1': 'R1  cost 1', 'R4  끊김': 'R4  broken', 'R1의 다시 계산': 'R1 recalculates', '지도에서 R2–R4를 지움': 'R2–R4 removed from the map', 'R2 거쳐  길 없음': 'Via R2  no path',
  'R3 거쳐  5 + 1 = 6 → 다음 길은 R3': 'Via R3  5 + 1 = 6 → next hop R3', 'R3': 'R3', '다음: R4': 'Next: R4', '받음 · 지나온 비용 5 + 1 = 6': 'Got it · path cost 5 + 1 = 6',
  'R1–R2 1 · R2–R4 1 (복구)': 'R1–R2 1 · R2–R4 1 (restored)', 'R1–R3 1 (5에서 낮춤) · R3–R4 1': 'R1–R3 1 (lowered from 5) · R3–R4 1', 'R3 거쳐  1 + 1 = 2': 'Via R3  1 + 1 = 2', '같음 → 두 길 모두 다음 길로': 'Equal → both are next hops',
  '패킷 1 받음 (R2 쪽)': 'Got packet 1 (via R2)', '패킷 2 · 다음: R4': 'Packet 2 · next: R4', '패킷 2 받음 (R3 쪽)': 'Got packet 2 (via R3)', '두 길로 나눠 받음': 'Received over two paths',
  // Badges and moving labels
  '내 링크만 앎': 'Knows only its own links', 'LSA: R1': 'LSA: R1', '알림: R2 1 · R3 5': 'Announces: R2 1 · R3 5', '지도에 R1 줄 적음': 'R1\'s line in the map', 'R2가 다시 보낸 R1 줄 적음': 'R1\'s line, passed on by R2', '1 (복구)': '1 (restored)', '5 → 1': '5 → 1', '1번 패킷 · 다음 R4': 'Packet 1 · next R4', '2번 패킷 · 다음 R4': 'Packet 2 · next R4', 'LSA: R1 (다시)': 'LSA: R1 (again)',
  '지도 완성': 'Map complete', '→ R4': '→ R4', 'R4: R2 거쳐 2 < R3 거쳐 6': 'R4: via R2 2 < via R3 6', '받음 · 비용 2': 'Got it · cost 2', '안 거침': 'Not on the path',
  'R4 쪽 링크 끊김': 'Link to R4 broken', 'LSA: R2–R4 끊김': 'LSA: R2–R4 broken', 'R4 링크 끊김 알림': 'Announces: R4 link broken', '다시 계산: R3 거쳐 6': 'Recalculated: via R3 6', 'R3 쪽으로 받음 · 비용 6': 'Got it via R3 · cost 6',
  'R1–R3 비용 1로 바뀜': 'R1–R3 cost changed to 1', '패킷 1': 'Packet 1', 'R2 거쳐 2 = R3 거쳐 2 → 둘 다': 'Via R2 2 = via R3 2 → both', '패킷 1 받음': 'Got packet 1', '패킷 2': 'Packet 2', '패킷 2 · 다음 R4': 'Packet 2 · next R4', '두 길로 받음': 'Received over two paths',
  // Step 1
  '링크 상태 알리기': 'Announcing link states',
  '라우터는 자기 링크와 비용을 알리고, 받은 알림을 다시 퍼뜨린다': 'Routers announce their links and costs, and pass on the announcements they receive',
  '라우터는 처음에 자기에게 붙은 링크와 그 비용만 압니다. R1은 "나는 R2와 비용 1, R3와 비용 5로 이어져 있다"는 링크 상태 알림(LSA)을 이웃 R2와 R3에게 보냅니다. 알림을 받은 라우터는 자기 지도(링크 상태 데이터베이스)에 그 줄을 적고, 받은 곳이 아닌 다른 이웃에게 다시 보냅니다. 그래서 R1과 직접 이어지지 않은 R4도 R1의 줄을 갖게 됩니다. 모든 라우터가 같은 방식으로 알리면 모두 같은 지도를 갖습니다.':
    'At first a router knows only its own links and their costs. R1 sends its neighbours R2 and R3 a link-state announcement (LSA): "I am linked to R2 at cost 1 and to R3 at cost 5". A router that receives it writes the line in its own map (the link-state database) and sends it on to its other neighbours, not back where it came from. So R4, with no direct link to R1, also gets R1\'s line. When every router announces the same way, they all hold the same map.',
  'R1 이름표가 "알림: R2 1 · R3 5"가 되고, 알림이 R2와 R3로, 다시 R2에서 R4로 퍼집니다. R2·R3 이름표는 "지도에 R1 줄 적음", R1과 이어지지 않은 R4 이름표는 "R2가 다시 보낸 R1 줄 적음"이 됩니다.':
    'R1\'s badge becomes "announces: R2 1 · R3 5", and the announcement spreads to R2 and R3, and on from R2 to R4. R2 and R3 read "R1\'s line in the map"; R4, not linked to R1, reads "R1\'s line, passed on by R2".',
  '라우터 넷이 사각형으로 이어져 있습니다. 왼쪽 위 R1, 오른쪽 위 R2, 왼쪽 아래 R3, 오른쪽 아래 R4이고, 링크 비용은 R1–R2 1, R2–R4 1, R1–R3 5, R3–R4 1입니다. R1의 링크 상태 알림이 R2, R3을 거쳐 R4까지 퍼져 모두의 지도에 적힙니다.':
    'Four routers are joined in a square: R1 top left, R2 top right, R3 bottom left, R4 bottom right, with link costs R1–R2 1, R2–R4 1, R1–R3 5 and R3–R4 1. R1\'s link-state announcement spreads through R2 and R3 to R4 and is written in everyone\'s map.',
  'R1: "R2까지 1 · R3까지 5" 알림': 'R1 announces "R2 at 1 · R3 at 5"', 'R2·R3가 지도에 적고': 'R2 and R3 write it in their maps', '다른 이웃에게 다시 보냄': 'and send it on to other neighbours', 'R4도 R1 줄을 가짐': 'R4 gets R1\'s line too',
  'R1이 링크 상태 알림을 R2에게 보냅니다. R2는 지도에 적습니다.': 'R1 sends its link-state announcement to R2. R2 writes it in its map.',
  'R3도 같은 알림을 받아 지도에 적습니다.': 'R3 gets the same announcement and writes it in its map.',
  'R2가 받은 알림을 R4에게 다시 보냅니다. R4도 R1의 줄을 갖습니다.': 'R2 sends the announcement on to R4. R4 gets R1\'s line too.',
  'R4는 R1과 바로 이어져 있지 않습니다. R4는 R1의 링크를 어떻게 알게 될까요?': 'R4 has no direct link to R1. How does R4 learn R1\'s links?',
  '알 수 없다': 'It cannot', '이웃이 받은 알림을 다시 퍼뜨려 받는다': 'Neighbours pass the announcement on to it', 'R1에게 직접 묻는다': 'It asks R1 directly',
  '링크 상태 알림은 받은 라우터가 다른 이웃에게 다시 보내, 망 전체로 퍼집니다(플러딩).': 'Each router that receives a link-state announcement sends it on to its other neighbours, so it spreads across the whole network (flooding).',
  // Step 2
  '가장 싼 길 계산': 'Computing the cheapest path',
  '같은 지도에서 비용 합이 가장 작은 길을 골라 다음 길로 정한다': 'From the shared map, the path with the smallest total cost sets the next hop',
  '이제 모든 라우터가 같은 지도를 갖습니다. R1은 이 지도로 R4까지 가는 길의 비용 합을 계산합니다(다익스트라 알고리즘). R2를 거치면 1 + 1 = 2, R3를 거치면 5 + 1 = 6입니다. 합이 작은 R2 쪽을 골라, 라우팅 표에 "R4 쪽은 R2로"를 적습니다. 비용은 보통 빠른 링크일수록 작게 매기므로, 합이 작은 길은 대개 빠른 길입니다.':
    'Now every router holds the same map. With it, R1 computes the total cost of each path to R4 (Dijkstra\'s algorithm): via R2, 1 + 1 = 2; via R3, 5 + 1 = 6. It picks the smaller, via R2, and writes "toward R4, go to R2" in its routing table. Faster links usually get smaller costs, so the cheapest path is usually the fastest.',
  'R1 이름표가 "R4: R2 거쳐 2 < R3 거쳐 6"이 되고, 패킷이 R1에서 R2를 거쳐 R4로 갑니다. R4 이름표는 "받음 · 비용 2", R3 이름표는 "안 거침"입니다.':
    'R1\'s badge becomes "R4: via R2 2 < via R3 6", and the packet goes from R1 through R2 to R4. R4\'s badge reads "got it · cost 2" and R3\'s "not on the path".',
  '같은 사각형에서 R1이 R4까지의 길을 계산합니다. R2 거쳐 비용 2, R3 거쳐 비용 6이라 R2 쪽을 고르고, 패킷이 R1 → R2 → R4로 갑니다.':
    'In the same square, R1 computes its path to R4. Via R2 costs 2 and via R3 costs 6, so it picks R2, and the packet goes R1 → R2 → R4.',
  'R1 → R4': 'R1 → R4', ' : ': ': ', 'R2 거쳐 1 + 1 = 2': 'via R2 1 + 1 = 2', 'R3 거쳐 5 + 1 = 6': 'via R3 5 + 1 = 6', '2인 R2 쪽으로': 'via R2, at 2',
  'R1이 두 길의 비용 합을 비교해 R2 쪽으로 보냅니다.': 'R1 compares the two total costs and sends toward R2.',
  'R1에서 R4로: R2 거쳐 1 + 1, R3 거쳐 5 + 1입니다. 어느 쪽으로 보낼까요?': 'From R1 to R4: via R2 is 1 + 1, via R3 is 5 + 1. Which way does it send?',
  'R2 쪽 (합 2)': 'Via R2 (total 2)', 'R3 쪽 (합 6)': 'Via R3 (total 6)', '둘 다': 'Both',
  '링크 상태 라우팅은 비용 합이 가장 작은 길을 고릅니다. 2가 6보다 작습니다.': 'Link-state routing picks the path with the smallest total cost. 2 is less than 6.',
  '패킷이 R2를 거쳐 R4에 닿습니다. R3는 거치지 않습니다.': 'The packet reaches R4 through R2. It does not pass R3.',
  // Step 3
  '링크가 끊기면': 'When a link breaks',
  '링크가 끊기면 그 소식이 퍼지고, 모두 다시 계산한다': 'When a link breaks, the news spreads and everyone recomputes',
  'R2와 R4 사이 링크가 끊겼습니다. R2는 곧바로 "R4 쪽 링크가 끊겼다"는 새 링크 상태 알림을 퍼뜨립니다. R1은 지도에서 그 링크를 지우고 다시 계산합니다. 이제 R4로 가는 길은 R3를 거치는 5 + 1 = 6뿐이라, 라우팅 표를 "R4 쪽은 R3로"로 바꿉니다. 사람이 손대지 않아도 길이 바뀝니다. 알림이 퍼지고 계산이 끝날 때까지의 짧은 시간(수렴 시간)에는 패킷이 잃어버려질 수 있습니다.':
    'The link between R2 and R4 has broken. R2 immediately spreads a new link-state announcement: "my link to R4 is broken". R1 removes that link from its map and recomputes. The only path left to R4 is via R3, at 5 + 1 = 6, so it changes its routing table to "toward R4, go to R3". The route changes with nobody touching it. During the short time until the announcement has spread and the calculation is done (convergence time), packets can be lost.',
  'R2–R4 케이블에 "끊김"이 보이고, R2 이름표가 경고 색 "R4 링크 끊김 알림"이 됩니다. R1 이름표가 "다시 계산: R3 거쳐 6"이 되고, 패킷이 R1 → R3 → R4로 가서 R4 이름표가 "R3 쪽으로 받음 · 비용 6"이 됩니다.':
    'The R2–R4 cable shows "broken", and R2\'s badge turns to the warning colour "announces: R4 link broken". R1\'s badge becomes "recalculated: via R3 6", and the packet goes R1 → R3 → R4, where R4\'s badge becomes "got it via R3 · cost 6".',
  '같은 사각형에서 R2–R4 링크가 끊겼습니다. R2가 끊김을 알리고, R1이 다시 계산해 R3 거쳐 비용 6인 길로 바꿉니다. 패킷이 R1 → R3 → R4로 갑니다.':
    'In the same square, the R2–R4 link has broken. R2 announces it, R1 recomputes and switches to the path via R3 at cost 6, and the packet goes R1 → R3 → R4.',
  'R2–R4 끊김': 'R2–R4 broken', 'R2: 끊김 알림': 'R2: announces the break', 'R1: 다시 계산 · R3 거쳐 5 + 1 = 6': 'R1: recomputes · via R3 5 + 1 = 6', 'R1 → R3 → R4': 'R1 → R3 → R4',
  'R2가 끊김을 알리고, R1이 지도에서 그 링크를 지운 뒤 다시 계산합니다.': 'R2 announces the break, and R1 removes that link from its map and recomputes.',
  'R2–R4가 끊겼다는 알림을 받았습니다. R1은 R4로 가는 패킷을 어디로 보낼까요?': 'R1 has heard that R2–R4 is broken. Where does it send packets for R4?',
  '그대로 R2 쪽': 'Still via R2', '보내지 않는다': 'It does not send them',
  '지도에서 끊긴 링크를 지우고 다시 계산하면 남은 길은 R3를 거치는 길뿐입니다.': 'With the broken link removed from the map, the only path left goes via R3.',
  '패킷이 이번에는 R3 쪽으로 갑니다.': 'This time the packet goes toward R3.',
  '패킷이 R3를 거쳐 R4에 닿습니다.': 'The packet reaches R4 through R3.',
  // Step 4
  '같은 비용 두 길': 'Two paths of equal cost',
  '비용 합이 같은 길이 둘이면 둘 다 써서 나눠 보낸다': 'When two paths have the same total cost, both are used to share the traffic',
  'R2–R4가 다시 이어지고, 관리자가 R1–R3 링크를 더 빠른 회선으로 바꿔 비용을 1로 낮췄습니다. 새 알림이 퍼진 뒤 R1이 계산하면 R2 거쳐 1 + 1 = 2, R3 거쳐 1 + 1 = 2로 같습니다. 이럴 때 라우터는 한 길만 고르지 않고 두 길을 모두 표에 넣어 패킷을 나눠 보냅니다(같은 비용 다중 경로, ECMP). 같은 연결의 패킷은 같은 길로 보내 순서가 뒤바뀌지 않게 합니다. 데이터센터는 이 방식으로 길 여럿을 함께 씁니다(7.4).':
    'R2–R4 is back up, and an administrator has replaced the R1–R3 link with a faster line and lowered its cost to 1. After the new announcement spreads, R1 computes via R2 1 + 1 = 2 and via R3 1 + 1 = 2: equal. Then a router does not pick just one; it puts both paths in its table and shares packets between them (equal-cost multipath, ECMP). Packets of the same connection keep to the same path so their order is not mixed up. Data centres use many paths together this way (7.4).',
  'R1–R3 케이블 글자가 "5 → 1", R2–R4가 "1 (복구)"로 강조되고, R1 이름표가 "R2 거쳐 2 = R3 거쳐 2 → 둘 다"가 됩니다. 패킷 1은 R2로, 패킷 2는 R3로 가서 R4 이름표가 "두 길로 받음"이 됩니다.':
    'The R1–R3 cable is highlighted "5 → 1" and R2–R4 "1 (restored)", and R1\'s badge becomes "via R2 2 = via R3 2 → both". Packet 1 goes via R2 and packet 2 via R3, and R4\'s badge becomes "received over two paths".',
  '같은 사각형에서 R2–R4가 복구되고 R1–R3 비용이 1이 되었습니다. R1에서 R4까지 R2 거쳐 2, R3 거쳐 2로 같아, R1이 두 길로 패킷을 나눠 보냅니다.':
    'In the same square, R2–R4 is restored and the R1–R3 cost is now 1. From R1 to R4, via R2 is 2 and via R3 is 2, so R1 shares packets across both paths.',
  'R1–R3 비용 5 → 1': 'R1–R3 cost 5 → 1', 'R2 거쳐 2 = R3 거쳐 2': 'Via R2 2 = via R3 2', '두 길 모두 표에': 'Both paths in the table', '패킷을 나눠 보냄 (ECMP)': 'Packets shared (ECMP)',
  'R1이 두 길이 같은 비용임을 알고 둘 다 씁니다. 패킷 1은 R2 쪽으로 갑니다.': 'R1 sees the two paths cost the same and uses both. Packet 1 goes toward R2.',
  'R4까지 R2 거쳐 2, R3 거쳐 2로 같습니다. R1은?': 'To R4, via R2 is 2 and via R3 is 2. What does R1 do?',
  'R2 쪽만 쓴다': 'Uses only R2', '두 길을 모두 써서 나눠 보낸다': 'Uses both paths and shares packets', 'R3 쪽만 쓴다': 'Uses only R3',
  '비용 합이 같은 길이 여럿이면 모두 표에 넣고 패킷을 나눠 보냅니다(ECMP).': 'When several paths have the same total cost, all go in the table and packets are shared among them (ECMP).',
  '패킷 1이 R2를 거쳐 R4에 닿습니다.': 'Packet 1 reaches R4 through R2.',
  '다른 연결의 패킷 2는 R3 쪽으로 갑니다.': 'Packet 2, from another connection, goes toward R3.',
  '패킷 2가 R3를 거쳐 R4에 닿습니다. 두 길을 함께 씁니다.': 'Packet 2 reaches R4 through R3. Both paths are in use.',
};
