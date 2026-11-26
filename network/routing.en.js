// English for 5.8 IP and routing. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Chapter 5 reading diagrams
  "단절을 반영하면 A의 다음 홉이 바뀐다": "A updates its next hop after the link breaks",
  "단절 전 · A의 표": "Before · A’s table",
  "E–H 사용": "Uses E–H",
  "단절 후 · A의 표": "After · A’s table",
  "E–H 단절": "E–H is down",
  "경로 재계산": "Recompute",
  // Page
  'IP와 라우팅 · 레슨 5.8': 'IP and routing · Lesson 5.8',
  '라우터마다 가진 라우팅 표를 따라 패킷을 한 칸씩 넘기고, 표를 열어 보고, 링크가 끊겼을 때 길이 바뀌는 모습을 확인해 보세요.':
    'Pass a packet along one hop at a time by each router\'s routing table, open the tables, and see the path change when a link breaks.',
  '패킷은 수많은 길 중에서 어떻게 다음 길을 고를까요? 라우터마다 가진 라우팅 표를 따라 패킷을 한 칸씩 넘겨 보세요.':
    'How does a packet pick its next road among so many? Pass it along one hop at a time by each router\'s routing table.',
  '라우터 아홉 개가 지연 시간이 적힌 링크로 이어져 있고, 패킷이 라우팅 표를 따라 한 칸씩 넘어가는 장면': 'Nine routers joined by links marked with delays, and a packet moving one hop at a time by the routing tables',
  '라우터와 링크': 'Routers and links', '라우팅 표': 'Routing table', '패킷': 'Packet', '패킷이 지난 라우터': 'Router the packet passed', '패킷이 지난 링크': 'Link the packet passed', '끊긴 링크': 'Broken link',
  '목적지': 'Destination', '다음 라우터': 'Next router', '거리': 'Distance',
  '한 칸 전달': 'Forward one hop', '끝까지 보내기': 'Send all the way', 'A로 되돌리기': 'Back to A',
  // Readouts and controls
  '라우터 {0}': 'Router {0}', '라우터 {0}({1})의 라우팅 표': 'Router {0} ({1}) routing table', '라우터 {0}의 라우팅 표': 'Router {0} routing table', '라우터 {0}의 라우팅 표를 엽니다.': 'Opening router {0}\'s routing table.',
  '라우터 {0}: 목적지 10.0.8.1(I) → 표에서 다음은 {1}. 패킷을 {1}로 넘깁니다.': 'Router {0}: destination 10.0.8.1 (I) → the table says next is {1}. Passing the packet to {1}.',
  '도착! {0} · 지연 합 {#1}ms': 'Arrived! {0} · total delay {1}ms',
  '라우터를 골라 라우팅 표를 열어 보세요.': 'Pick a router to open its routing table.', '"한 칸 전달"로 패킷을 한 라우터씩 넘겨 보세요.': 'Use "Forward one hop" to pass the packet one router at a time.',
  '패킷을 A로 되돌렸습니다.': 'Moved the packet back to A.',
  'E–H 링크 끊기': 'Break the E–H link', 'E–H 링크 잇기': 'Rejoin the E–H link',
  'E–H 링크가 끊겼습니다. 라우터들이 표를 다시 계산했습니다.': 'The E–H link is broken. The routers recalculated their tables.', 'E–H 링크를 다시 이었습니다.': 'Rejoined the E–H link.',
  // Step 1
  '한 칸씩 전달': 'Hop by hop',
  '라우터는 다음 한 칸만 안다': 'A router knows only the next hop',
  '0.7에서 본 라우터들은 지도 전체를 들고 다니지 않습니다. 패킷이 오면 IP 봉투(5.7)의 목적지 주소를 보고, 자기 라우팅 표에서 "그 목적지라면 다음은 누구"만 찾아 넘깁니다. 다음 라우터도 똑같이 합니다. 이렇게 한 칸씩 넘기다 보면 목적지에 닿습니다.':
    'The routers of 0.7 do not carry a map of everything. When a packet arrives, a router reads the destination address on the IP envelope (5.7), looks up only "for that destination, who is next" in its own routing table, and passes it on. The next router does the same. Passed along one hop at a time like this, the packet reaches its destination.',
  'A에서 I(10.0.8.1)로 보낸 패킷이 A → B → E → H → I로 넘어갑니다. 라우터마다 아래 표의 "I로 가려면 다음" 한 줄만 썼습니다.': 'A packet sent from A to I (10.0.8.1) goes A → B → E → H → I. Each router used only the one row of the table below that says "next, to reach I".',
  'A부터 I까지 라우터 아홉 개가 링크로 이어져 있고, 링크마다 지연 시간(ms)이 적혀 있습니다. 패킷이 라우터를 한 칸씩 건너며 지나간 링크가 금색이 됩니다.': 'Nine routers, A to I, are joined by links, each marked with its delay (ms). As the packet crosses router by router, the links it passed turn gold.',
  '"한 칸 전달"을 눌러 패킷을 I까지 보내 보세요.': 'Press "Forward one hop" to send the packet to I.',
  'A → B → E → H → I, 라우터마다 다음 한 칸만 골랐습니다.': 'A → B → E → H → I, each router picking only the next hop.',
  '라우터 E는 패킷을 넘길 때 무엇을 볼까요?': 'What does router E look at when passing the packet on?', '전체 지도': 'The whole map', '패킷의 목적지 IP와 자기 라우팅 표': 'The packet\'s destination IP and its own routing table', '패킷 안의 HTTP 내용': 'The HTTP contents inside the packet',
  '목적지만 보면 표에서 다음 라우터를 찾을 수 있습니다. 내용은 열지 않습니다.': 'The destination alone is enough to find the next router in the table. It does not open the contents.',
  // Diagram (step 1)
  'A에서 I로 전송': 'Send from A to I', 'B에서 목적지 I 조회': 'B looks up destination I', 'B의 표는 다음 홉 E를 지정': 'B\'s table names next hop E', 'E가 다시 H로 전달': 'E passes it on to H',
  'A에서 I까지 링크 네 개를 지나 전달': 'Forwarded from A to I over four links', 'A  ─4→  B  ─1→  E  ─2→  H  ─5→  I     합계 12ms': 'A  ─4→  B  ─1→  E  ─2→  H  ─5→  I     total 12ms',
  'B는 목적지 I에 대한 다음 홉 E만 고른다': 'For destination I, B picks only the next hop, E', 'B의 표: I → E   ·   E의 표: I → H   ·   H의 표: I → I': 'B\'s table: I → E   ·   E\'s table: I → H   ·   H\'s table: I → I',
  'A, B, E, H, I 순서로 4ms, 1ms, 2ms, 5ms를 더하면 12ms입니다.': 'In the order A, B, E, H, I, 4ms, 1ms, 2ms and 5ms add up to 12ms.', '합계 12ms': 'Total 12ms',
  '각 라우터는 자신의 표에서 목적지 I에 해당하는 다음 라우터를 고릅니다. B는 E, E는 H, H는 I를 고릅니다.': 'Each router picks the next router for destination I from its own table. B picks E, E picks H, H picks I.',
  // Step 2
  '라우팅 표는 목적지마다 다음 라우터를 적은 목록': 'A routing table lists the next router for each destination',
  '라우터마다 표를 가집니다. 표의 줄은 "목적지 → 다음 라우터, 거리"입니다. 라우터들은 이웃과 "나는 어디까지 얼마에 갈 수 있다"를 주고받으며(라우팅 프로토콜) 4.8의 최단 경로와 같은 계산으로 표를 채웁니다. 라우터를 골라 표를 보세요.':
    'Every router has a table. Each row is "destination → next router, distance". Routers tell their neighbours "I can reach here at this cost" (a routing protocol) and fill in their tables with the same calculation as the shortest paths of 4.8. Pick a router and look at its table.',
  '라우터 B의 표에서 I로 가는 다음은 E(8ms)입니다. 라우터 E의 표에서는 H입니다. 표만 따라가도 A의 패킷이 가장 빠른 길로 갑니다.': 'In router B\'s table, next toward I is E (8ms). In router E\'s table it is H. Just following the tables takes A\'s packet along the fastest path.',
  '같은 장면입니다. 고른 라우터가 노랗게 켜지고, 아래 표에 그 라우터의 라우팅 표가 나옵니다.': 'The same scene. The router you pick lights up yellow, and the table below shows its routing table.',
  '라우터 B와 라우터 E의 표를 차례로 열어 보세요.': 'Open router B\'s table, then router E\'s.', 'B는 I로 가려면 E로, E는 H로 보냅니다.': 'To reach I, B sends to E, and E sends to H.',
  '라우터 C의 표에서 목적지 B로 가는 다음 라우터는?': 'In router C\'s table, what is the next router for destination B?',
  'C→A→B는 2 + 4 = 6ms, C→E→B는 8 + 1 = 9ms라 A가 더 빠릅니다.': 'C→A→B is 2 + 4 = 6ms and C→E→B is 8 + 1 = 9ms, so A is faster.',
  // Step 3
  '링크가 끊기면': 'When a link breaks', 'E–H 링크 단절': 'E–H link broken', '라우터들이 표를 다시 계산해서': 'Routers recalculated their tables', '우회로 14ms': 'Detour 14ms', '길 고르기': 'Choosing a path', 'E–H가 끊기면 그 링크를 피해 간다': 'With E–H broken, traffic avoids that link',
  '길이 끊기면 표를 고쳐 돌아간다': 'When a path breaks, tables change and traffic goes around',
  'E–H 링크가 끊겼다고 해 봅시다. 이웃 라우터들이 이를 알리고, 모두가 표를 다시 계산합니다. 그러면 같은 목적지로 가는 패킷이 다른 길로 돌아갑니다. 인터넷이 한 곳이 고장 나도 계속 도는 이유입니다(0.7).':
    'Say the E–H link breaks. The neighbouring routers announce it, and everyone recalculates their tables. Then packets for the same destination go around another way. This is why the internet keeps running when one place fails (0.7).',
  'E–H를 끊고 보내면 패킷이 A → C → F → H → I로 돌아갑니다(14ms). 끊기 전 12ms보다 느리지만, 끊긴 줄 모르고 막히는 일은 없습니다.': 'Break E–H and send, and the packet goes around A → C → F → H → I (14ms). Slower than the 12ms before, but it never gets stuck not knowing the link is gone.',
  '같은 장면에서 E–H 링크를 끊고 이을 수 있습니다. 끊긴 링크는 빨간 점선이 됩니다.': 'In the same scene you can break and rejoin the E–H link. A broken link becomes a red dashed line.',
  '"E–H 링크 끊기"를 누른 뒤 패킷을 I까지 보내 보세요.': 'Press "Break the E–H link", then send the packet to I.', '표가 바뀌어 A → C → F → H → I로 돌아갔습니다.': 'The tables changed and it went around A → C → F → H → I.',
  '12ms 경로의 E–H 링크가 끊겨 A, C, F, H, I를 잇는 14ms 경로를 사용합니다.': 'The E–H link on the 12ms path is broken, so the 14ms path through A, C, F, H, I is used.',
  '링크가 끊긴 뒤 패킷이 다른 길로 가게 된 까닭은?': 'Why did the packet take another path after the link broke?', '패킷이 지도를 들고 있어서': 'The packet carries a map', '목적지 주소가 바뀌어서': 'The destination address changed',
  '라우팅 프로토콜이 끊긴 링크를 알리고, 각 라우터가 다음 라우터를 새로 고릅니다.': 'The routing protocol announces the broken link, and each router picks its next router again.',
  // Step 4
  '주소와 수명': 'Addresses and lifetime', 'TTL 3 · 네 홉 필요': 'TTL 3 · four hops needed', '라우터마다 TTL 1 감소': 'TTL drops by 1 at each router', 'TTL이 0이 된 H에서 전달을 멈춘다': 'Forwarding stops at H, where TTL hits 0', '목적지 전에 폐기': 'Dropped before the destination',
  'IP 주소는 묶음으로, 패킷은 수명을 가진다': 'IP addresses come in blocks; packets have a lifetime',
  'IP 주소는 10.0.8.1처럼 네 칸의 수입니다. 앞부분이 같은 주소들은 한 줄(예: 10.0.8.x는 모두 I 쪽)로 묶어 표를 짧게 합니다. 또 패킷에는 수명(TTL)이 있어 라우터를 지날 때마다 1씩 줄고 0이 되면 버려집니다. 표가 잘못돼 패킷이 빙빙 돌아도 언젠가 사라지게 하는 안전장치입니다.':
    'An IP address is four numbers, like 10.0.8.1. Addresses that share a front part are grouped into one row (for example, all of 10.0.8.x is toward I) to keep tables short. A packet also has a lifetime (TTL) that drops by 1 at each router and gets it dropped at 0. It is a safety net so a packet circling because of a wrong table disappears eventually.',
  '해 보기의 질문으로 정리해 보세요. 패킷을 다시 보내 봐도 됩니다.': 'Sum up with the questions in Try. You can send the packet again too.', '같은 장면에서 패킷을 다시 보낼 수 있습니다.': 'You can send the packet again in the same scene.',
  'A에서 TTL 3으로 출발한 패킷은 B에서 2, E에서 1, H에서 0이 됩니다. H에서 폐기되어 I에는 도착하지 않습니다.': 'A packet leaving A with TTL 3 has 2 at B, 1 at E and 0 at H. It is dropped at H and never reaches I.',
  'TTL 3으로 A에서 I로 보내면(네 칸 필요) 어떻게 될까요?': 'What happens if you send from A to I with TTL 3 (four hops needed)?', 'I에 도착한다': 'It reaches I', '중간에 버려진다': 'It is dropped on the way',
  '라우터를 지날 때마다 1씩 줄어 세 번째 라우터에서 0이 되어 버려집니다.': 'It drops by 1 at each router, hits 0 at the third router and is dropped.',
  '라우팅 표에 주소를 하나하나 적지 않고 "10.0.8.x" 같은 묶음으로 적는 이유는?': 'Why does a routing table list blocks like "10.0.8.x" instead of each address?', '주소를 숨기려고': 'To hide addresses', '표를 짧게 해 빨리 찾으려고': 'To keep the table short and quick to search',
  '인터넷의 주소는 수십억 개라, 같은 방향의 주소들을 묶어 한 줄로 적습니다.': 'The internet has billions of addresses, so addresses in the same direction are grouped into one row.',
};
