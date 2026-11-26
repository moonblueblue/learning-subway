// English for Networking 1.4 ARP. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'ARP · 레슨 1.4': 'ARP · Lesson 1.4',
  '네트워크 1장 링크와 LAN · 레슨 1.4': 'Networking chapter 1 Links and LANs · Lesson 1.4',
  'IP 주소만 아는 상대의 MAC 주소를 ARP 요청과 답장으로 알아내고, 캐시에 적어 두고, 다른 네트워크로 갈 때는 라우터의 MAC을 묻는 과정을 따라가 보세요.':
    'Follow how ARP requests and replies find the MAC address of a host known only by its IP address, how the answer is cached, and how the router\'s MAC is asked for when the packet is for another network.',
  'IP 주소만 아는 상대의 MAC 주소는 어떻게 알아낼까요? 스위치 하나에 이어진 컴퓨터 두 대와 라우터 사이로 ARP 요청과 답장을 보내 보세요.':
    'How do you find the MAC address of a host when you know only its IP address? Send ARP requests and replies between two computers and a router on one switch.',
  'IP 주소만 아는 상대의 MAC 주소는 어떻게 알아낼까?': 'How do you find the MAC address of a host when you know only its IP address?',
  'PC 두 대, 스위치, 라우터': 'Two PCs, a switch and a router',
  'PC A가 ARP 요청을 모두에게 보내 IP 주소의 주인에게서 MAC 주소를 답으로 받고, 다른 네트워크로 갈 때는 라우터의 MAC을 묻는 장면':
    'PC A sending an ARP request to everyone and getting the MAC address back from the owner of the IP address, and asking for the router\'s MAC when the packet is for another network',
  '프레임이 지나는 케이블': 'Cable the frames travel on', '컴퓨터': 'Computer', '스위치': 'Switch', '라우터': 'Router', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  'PC A · 10.0.0.1 · aa': 'PC A · 10.0.0.1 · aa', 'PC C · 10.0.0.3 · cc': 'PC C · 10.0.0.3 · cc', '라우터 · 10.0.0.254 · rr': 'Router · 10.0.0.254 · rr',
  'PC A · 10.0.0.1 · aa → 스위치': 'PC A · 10.0.0.1 · aa → switch', 'PC C · 10.0.0.3 · cc → 스위치': 'PC C · 10.0.0.3 · cc → switch', '라우터 · 10.0.0.254 · rr → 스위치': 'Router · 10.0.0.254 · rr → switch',
  '스위치 → PC A · 10.0.0.1 · aa': 'Switch → PC A · 10.0.0.1 · aa', '스위치 → PC C · 10.0.0.3 · cc': 'Switch → PC C · 10.0.0.3 · cc', '스위치 → 라우터 · 10.0.0.254 · rr': 'Switch → router · 10.0.0.254 · rr',
  '스위치 · ff → C 쪽': 'Switch · ff → toward C', '스위치 · aa → A 쪽': 'Switch · aa → toward A', '스위치 · cc → C 쪽': 'Switch · cc → toward C', '스위치 · rr → 라우터 쪽': 'Switch · rr → toward the router', 'C 받음': 'C takes it',
  // Work panel
  'PC A가 보낼 것': 'What PC A will send', 'PC C가 보낼 것': 'What PC C will send', 'PC A가 보내는 프레임': 'The frame PC A sends', 'PC A의 ARP 캐시': 'PC A\'s ARP cache',
  'ARP 요청 프레임': 'ARP request frame', 'ARP 답장 프레임': 'ARP reply frame', 'PC C': 'PC C',
  'IP 패킷: 목적지 10.0.0.3': 'IP packet: destination 10.0.0.3', 'ARP 캐시에서 10.0.0.3 찾기 → 없음': 'Look up 10.0.0.3 in the ARP cache → not there', '→ ARP 요청을 모두에게': '→ ARP request to everyone',
  '목적지 MAC  ff (모두에게)': 'Destination MAC  ff (to everyone)', '출발지 MAC  aa': 'Source MAC  aa', '출발지 MAC  cc': 'Source MAC  cc', '목적지 MAC  aa': 'Destination MAC  aa', '목적지 MAC  cc': 'Destination MAC  cc',
  '내용  10.0.0.3의 MAC? 답은 10.0.0.1 · aa로': 'Content  10.0.0.3\'s MAC? Reply to 10.0.0.1 · aa',
  '묻는 IP 10.0.0.3 ≠ 내 IP 10.0.0.254': 'Asked IP 10.0.0.3 ≠ my IP 10.0.0.254', '→ 답하지 않음': '→ no reply',
  '묻는 IP 10.0.0.3 = 내 IP → 답함': 'Asked IP 10.0.0.3 = my IP → reply', '요청에 적힌 10.0.0.1 → aa를 캐시에 적음': 'Writes 10.0.0.1 → aa from the request in the cache',
  'ARP 답장: 10.0.0.3은 cc': 'ARP reply: 10.0.0.3 is cc', '목적지 MAC aa (요청에 적혀 있던 주소)': 'Destination MAC aa (the address in the request)', '내용  10.0.0.3은 cc': 'Content  10.0.0.3 is cc',
  '10.0.0.3 → cc  (방금 배움)': '10.0.0.3 → cc  (just learned)', '목적지 MAC  cc   (ARP로 배움)': 'Destination MAC  cc   (learned by ARP)', '안의 IP 패킷  목적지 10.0.0.3': 'IP packet inside  destination 10.0.0.3',
  '목적지 MAC cc = 나 → 받음': 'Destination MAC cc = me → take', 'IP 목적지 10.0.0.3 = 나 → 위 계층으로': 'IP destination 10.0.0.3 = me → up the layers',
  '10.0.0.3 → cc  (12초 전 · REACHABLE)': '10.0.0.3 → cc  (12 s ago · REACHABLE)', '보낼 IP 패킷: 목적지 10.0.0.3': 'IP packet to send: destination 10.0.0.3', '캐시에서 10.0.0.3 → cc 찾음': 'Found 10.0.0.3 → cc in the cache',
  'IP 패킷 받음': 'Got the IP packet',
  'IP 패킷: 목적지 8.8.8.8': 'IP packet: destination 8.8.8.8', '내 네트워크 10.0.0.0/24 밖 → 게이트웨이 10.0.0.254에게': 'Outside my network 10.0.0.0/24 → to gateway 10.0.0.254', '캐시에서 10.0.0.254 찾기 → 없음': 'Look up 10.0.0.254 in the cache → not there',
  '내용  10.0.0.254의 MAC? 답은 10.0.0.1 · aa로': 'Content  10.0.0.254\'s MAC? Reply to 10.0.0.1 · aa', '묻는 IP 10.0.0.254 ≠ 내 IP → 무시': 'Asked IP 10.0.0.254 ≠ my IP → ignore', '묻는 IP 10.0.0.254 = 내 IP → 답함': 'Asked IP 10.0.0.254 = my IP → reply',
  '내용  10.0.0.254는 rr': 'Content  10.0.0.254 is rr', '10.0.0.3 → cc': '10.0.0.3 → cc', '10.0.0.254 → rr  (방금 배움)': '10.0.0.254 → rr  (just learned)',
  '목적지 MAC  rr   (라우터)': 'Destination MAC  rr   (the router)', '안의 IP 패킷  목적지 8.8.8.8   (그대로)': 'IP packet inside  destination 8.8.8.8   (unchanged)',
  '목적지 MAC rr = 나 → 받음': 'Destination MAC rr = me → take', 'IP 목적지 8.8.8.8 → 밖으로 전달': 'IP destination 8.8.8.8 → forward outside',
  // Badges and moving labels
  'ff → 라우터 쪽': 'ff → toward the router', 'ff → C 쪽': 'ff → toward C', 'aa → A 쪽으로만': 'aa → toward A only', 'aa → A 쪽': 'aa → toward A', 'cc → C 쪽으로만': 'cc → toward C only', 'cc → C 쪽': 'cc → toward C', 'rr → 라우터 쪽으로만': 'rr → toward the router only', 'rr → 라우터 쪽': 'rr → toward the router',
  'ARP 캐시 비어 있음': 'ARP cache empty', '10.0.0.3 물어봄': 'Asking for 10.0.0.3', 'ff → 모든 포트': 'ff → every port', 'ARP: 10.0.0.3 누구?': 'ARP: who is 10.0.0.3?',
  '10.0.0.3 아님 → 무시': 'Not 10.0.0.3 → ignore', '나다 · .1 → aa 적음': 'That\'s me · noted .1 → aa',
  '답 기다림': 'Waiting for the reply', 'ARP 답: .3은 cc': 'ARP reply: .3 is cc', '답장 보냄 · 목적지 aa': 'Replied · to aa', '캐시: 10.0.0.3 → cc': 'Cache: 10.0.0.3 → cc', 'IP 패킷 → cc': 'IP packet → cc', '아무것도 안 옴': 'Nothing arrives',
  '캐시에 있음 → 묻지 않음': 'Cached → no asking', 'ARP: .254 누구?': 'ARP: who is .254?', '밖 → .254 물어봄': 'Outside → asking for .254', '.254 아님 → 무시': 'Not .254 → ignore',
  '나다 · 답함': 'That\'s me · replying', 'ARP 답: .254는 rr': 'ARP reply: .254 is rr', '캐시: 10.0.0.254 → rr': 'Cache: 10.0.0.254 → rr', '8.8.8.8은 밖 → rr로 보냄': '8.8.8.8 is outside → send to rr', 'IP 8.8.8.8 → rr': 'IP 8.8.8.8 → rr',
  '받음 · IP 목적지 8.8.8.8': 'Got it · IP destination 8.8.8.8',
  // Step 1
  '모두에게 묻기': 'Asking everyone',
  'IP 주소의 MAC을 모르면 ARP 요청을 모두에게 보낸다': 'When the MAC for an IP address is unknown, an ARP request goes to everyone',
  'A가 10.0.0.3에게 IP 패킷을 보내려면 이더넷 프레임의 목적지 MAC을 알아야 합니다. A는 먼저 자기 ARP 캐시(IP 주소와 MAC 주소의 짝을 적은 표)를 봅니다. 비어 있으면 "10.0.0.3은 누구입니까? 10.0.0.1, aa에게 알려 주세요"라는 ARP 요청을 목적지 ff:ff:ff:ff:ff:ff로 보냅니다. 스위치가 모든 포트로 퍼뜨리고, IP가 다른 라우터는 무시하며, 10.0.0.3인 C만 답할 준비를 합니다. C는 요청에 적힌 A의 짝(10.0.0.1 → aa)도 자기 캐시에 적어 둡니다.':
    'To send an IP packet to 10.0.0.3, A must know the destination MAC for the Ethernet frame. A first checks its ARP cache (a table of IP-address and MAC-address pairs). If it is empty, A sends the ARP request "Who is 10.0.0.3? Tell 10.0.0.1, aa" to destination ff:ff:ff:ff:ff:ff. The switch spreads it to every port, the router, whose IP differs, ignores it, and only C, which is 10.0.0.3, gets ready to answer. C also writes A\'s pair from the request (10.0.0.1 → aa) in its own cache.',
  'A 이름표가 "10.0.0.3의 MAC 모름 · 물어봄"이 되고, 스위치가 ARP 요청을 아래 라우터와 오른쪽 C로 모두 보냅니다. 라우터 이름표는 "10.0.0.3 아님 → 무시", C 이름표는 "10.0.0.3 = 나 · .1 → aa 적음"이 됩니다.':
    'A\'s badge becomes "asking for 10.0.0.3", and the switch sends the ARP request both to the router below and to C on the right. The router\'s badge becomes "not 10.0.0.3 → ignore" and C\'s "that\'s me · noted .1 → aa".',
  'A 이름표가 "10.0.0.3 물어봄"이 되고, 스위치가 ARP 요청을 아래 라우터와 오른쪽 C로 모두 보냅니다. 라우터 이름표는 "10.0.0.3 아님 → 무시", C 이름표는 "나다 · .1 → aa 적음"이 됩니다.':
    'A\'s badge becomes "asking for 10.0.0.3", and the switch sends the ARP request both to the router below and to C on the right. The router\'s badge becomes "not 10.0.0.3 → ignore" and C\'s "that\'s me · noted .1 → aa".',
  '가운데 스위치에 왼쪽 PC A(10.0.0.1, MAC aa), 오른쪽 PC C(10.0.0.3, MAC cc), 아래 라우터(10.0.0.254, MAC rr)가 이어져 있습니다. ARP 캐시가 빈 A가 10.0.0.3의 MAC을 묻는 요청을 브로드캐스트하고, 라우터는 무시하며 C만 자기 주소임을 확인합니다.':
    'A switch in the middle joins PC A (10.0.0.1, MAC aa) on the left, PC C (10.0.0.3, MAC cc) on the right and a router (10.0.0.254, MAC rr) below. With an empty ARP cache, A broadcasts a request for 10.0.0.3\'s MAC; the router ignores it and only C finds its own address.',
  'A 캐시에 10.0.0.3 없음': '10.0.0.3 not in A\'s cache', 'ARP 요청 "10.0.0.3 누구?" 목적지 ff': 'ARP request "who is 10.0.0.3?" to ff', '라우터: 아님 → 무시': 'Router: not me → ignore', 'C: 나다': 'C: that\'s me',
  'A가 ARP 요청을 브로드캐스트로 보냅니다. 요청 안에 자기 IP와 MAC도 적어 둡니다.': 'A broadcasts the ARP request, with its own IP and MAC written inside.',
  'A는 10.0.0.3의 MAC을 모릅니다. ARP 요청의 목적지 MAC은 무엇일까요?': 'A does not know 10.0.0.3\'s MAC. What is the destination MAC of the ARP request?',
  'cc': 'cc', 'ff:ff:ff:ff:ff:ff': 'ff:ff:ff:ff:ff:ff', '00:00:00:00:00:00': '00:00:00:00:00:00',
  '누구의 MAC인지 모르니 모두에게 묻습니다. 1.2에서 본 브로드캐스트 주소입니다.': 'Not knowing whose MAC it is, A asks everyone. It is the broadcast address from 1.2.',
  '라우터도 요청을 받지만, 묻는 IP가 자기 것이 아니라 답하지 않습니다.': 'The router gets the request too, but the IP asked for is not its own, so it does not reply.',
  'C는 자기 IP를 묻는 것을 알고 답할 준비를 합니다. 요청에 적힌 A의 짝도 캐시에 적어 둡니다.': 'C sees that its own IP is being asked for and gets ready to reply. It also writes A\'s pair from the request in its cache.',
  // Step 2
  '답 받고 보내기': 'Reply, then send',
  'ARP 답장은 A에게만 가고, A는 배운 MAC으로 IP 패킷을 보낸다': 'The ARP reply goes only to A, and A sends the IP packet to the MAC it learned',
  'C는 "10.0.0.3은 cc입니다"라는 ARP 답장을 A의 MAC aa로 보냅니다. 요청에 A의 MAC이 적혀 있었으므로 모두에게 보낼 필요가 없습니다. A는 캐시에 10.0.0.3 → cc를 적고, 기다리던 IP 패킷을 목적지 MAC cc인 프레임에 담아 보냅니다. 스위치는 cc의 포트를 알고 있어 C에게만 보냅니다.':
    'C sends the ARP reply "10.0.0.3 is cc" to A\'s MAC aa. A\'s MAC was in the request, so there is no need to send to everyone. A writes 10.0.0.3 → cc in its cache and sends the waiting IP packet in a frame with destination MAC cc. The switch knows cc\'s port and sends it only to C.',
  'C 이름표가 "답장 보냄 · 목적지 aa"가 되고, 답장이 A에게만 가서 A 이름표가 "캐시: 10.0.0.3 → cc"가 됩니다. 라우터 이름표는 "아무것도 안 옴"입니다. 이어서 A의 IP 패킷이 C로만 갑니다.':
    'C\'s badge becomes "replied · to aa", and the reply goes only to A, whose badge becomes "cache: 10.0.0.3 → cc". The router\'s badge reads "nothing arrives". Then A\'s IP packet goes only to C.',
  'C가 ARP 답장을 A에게만 보내고, A는 캐시에 10.0.0.3 → cc를 적습니다. A가 목적지 MAC cc로 IP 패킷을 보내 C만 받습니다. 아래 라우터로는 아무것도 가지 않습니다.':
    'C sends the ARP reply only to A, and A writes 10.0.0.3 → cc in its cache. A sends the IP packet to destination MAC cc and only C takes it. Nothing goes down to the router.',
  'C: ARP 답 "10.0.0.3은 cc" → A에게만': 'C: ARP reply "10.0.0.3 is cc" → only to A', 'A 캐시: 10.0.0.3 → cc': 'A\'s cache: 10.0.0.3 → cc', 'IP 패킷을 목적지 MAC cc로': 'IP packet to destination MAC cc', 'C 받음': 'C takes it',
  'C가 ARP 답장을 A의 MAC aa로 보냅니다.': 'C sends the ARP reply to A\'s MAC aa.',
  'C의 ARP 답장은 누구에게 갈까요?': 'Who does C\'s ARP reply go to?', '모두에게 (ff)': 'Everyone (ff)', 'A에게만 (aa)': 'Only A (aa)', '라우터에게': 'The router',
  '요청에 A의 MAC이 적혀 있으므로 답장은 A 한 명에게 보냅니다.': 'A\'s MAC is in the request, so the reply goes to A alone.',
  'A가 답장을 받아 캐시에 10.0.0.3 → cc를 적습니다.': 'A gets the reply and writes 10.0.0.3 → cc in its cache.',
  'A가 기다리던 IP 패킷을 목적지 MAC cc인 프레임에 담아 보냅니다.': 'A sends the waiting IP packet in a frame with destination MAC cc.',
  'C가 프레임을 받아 IP 패킷을 위 계층으로 넘깁니다.': 'C takes the frame and passes the IP packet up the layers.',
  // Step 3
  '캐시에 있으면': 'When it is cached',
  'ARP 캐시에 짝이 있으면 묻지 않고 바로 보낸다': 'With the pair in the ARP cache, the packet goes at once without asking',
  'A가 몇 초 뒤 10.0.0.3에게 또 보냅니다. 이번에는 캐시에 10.0.0.3 → cc가 있으므로 ARP 요청 없이 바로 목적지 MAC cc로 보냅니다. 패킷마다 모두에게 묻는다면 LAN이 브로드캐스트로 가득 찰 것입니다. 캐시의 짝은 영원하지 않습니다. 리눅스는 한동안 쓰이지 않은 짝을 STALE로 바꾸었다가, 다음에 쓸 때 상대가 아직 그 MAC인지 다시 확인합니다. 짝은 `ip neigh`로 볼 수 있습니다.':
    'A few seconds later A sends to 10.0.0.3 again. This time the cache holds 10.0.0.3 → cc, so A sends straight to destination MAC cc with no ARP request. If every packet asked everyone, the LAN would fill with broadcasts. Cached pairs do not last forever: Linux marks a pair unused for a while as STALE and, the next time it is used, checks that the host still has that MAC. The pairs are shown by `ip neigh`.',
  'A 이름표가 "캐시에 있음 → 묻지 않음"이 되고, ARP 요청 없이 IP 패킷이 C로 바로 갑니다. 라우터 이름표는 "아무것도 안 옴"입니다.':
    'A\'s badge becomes "cached → no asking", and the IP packet goes straight to C with no ARP request. The router\'s badge reads "nothing arrives".',
  'PC A의 ARP 캐시에 10.0.0.3 → cc가 있습니다. A는 ARP 요청을 보내지 않고 목적지 MAC cc로 IP 패킷을 보내 C가 받습니다.':
    'PC A\'s ARP cache holds 10.0.0.3 → cc. A sends no ARP request and sends the IP packet to destination MAC cc, and C takes it.',
  'A 캐시에 10.0.0.3 → cc 있음': '10.0.0.3 → cc in A\'s cache', 'ARP 요청 없이': 'No ARP request', 'A가 캐시에서 cc를 찾아 바로 보냅니다. ARP 요청은 나가지 않습니다.': 'A finds cc in its cache and sends at once. No ARP request goes out.',
  'A가 10.0.0.3에게 다시 보냅니다. 또 ARP로 물어볼까요?': 'A sends to 10.0.0.3 again. Will it ask with ARP again?',
  '매번 물어본다': 'It asks every time', '캐시에 있으니 묻지 않는다': 'It is cached, so no asking', '라우터에게 물어본다': 'It asks the router',
  '한 번 배운 짝은 캐시에 남아, 한동안은 묻지 않고 바로 씁니다.': 'A pair once learned stays in the cache and is used directly for a while, without asking.',
  'C가 받습니다. 브로드캐스트가 한 번도 나가지 않았습니다.': 'C takes it. Not a single broadcast went out.',
  // Step 4
  '다른 네트워크로': 'To another network',
  '다른 네트워크로 갈 패킷은 라우터의 MAC을 물어 라우터에게 맡긴다': 'A packet for another network is handed to the router, after asking for the router\'s MAC',
  'A가 8.8.8.8에게 보내려 합니다. A는 자기 주소 10.0.0.1/24로 같은 네트워크가 10.0.0.0–10.0.0.255임을 압니다(2.1에서 자세히 봅니다). 8.8.8.8은 그 밖이라 ARP로 물어도 답할 컴퓨터가 없습니다. 그래서 A는 기본 게이트웨이인 라우터 10.0.0.254의 MAC을 묻습니다. 프레임의 목적지 MAC은 라우터의 rr, 안의 IP 목적지는 8.8.8.8 그대로입니다. 라우터가 그 패킷을 밖으로 전달합니다.':
    'A wants to send to 8.8.8.8. From its own address 10.0.0.1/24, A knows its network is 10.0.0.0–10.0.0.255 (more in 2.1). 8.8.8.8 is outside it, so no computer would answer an ARP request for it. So A asks for the MAC of its default gateway, the router 10.0.0.254. The frame\'s destination MAC is the router\'s rr; the IP destination inside stays 8.8.8.8. The router forwards the packet outside.',
  'A 이름표가 "8.8.8.8은 밖 → .254를 물음"으로 시작합니다. C는 "10.0.0.254 아님 → 무시", 라우터는 답한 뒤 "받음 · IP 목적지 8.8.8.8"이 되고, A 이름표에 "캐시: 10.0.0.254 → rr"이 남습니다.':
    'A\'s badge starts as "outside → asking for .254". C becomes "not .254 → ignore", the router replies and then becomes "got it · IP destination 8.8.8.8", and "cache: 10.0.0.254 → rr" stays on A\'s badge.',
  'A 이름표가 "밖 → .254 물어봄"으로 시작합니다. C는 ".254 아님 → 무시", 라우터는 답한 뒤 "받음 · IP 목적지 8.8.8.8"이 되고, A 이름표는 "8.8.8.8은 밖 → rr로 보냄"으로 끝납니다.':
    'A\'s badge starts as "outside → asking for .254". C becomes "not .254 → ignore", the router replies and then becomes "got it · IP destination 8.8.8.8", and A\'s badge ends as "8.8.8.8 is outside → send to rr".',
  'PC A가 8.8.8.8이 같은 네트워크 밖임을 알고, 라우터 10.0.0.254의 MAC을 ARP로 묻습니다. 라우터가 rr로 답하고, A는 목적지 MAC rr, IP 목적지 8.8.8.8인 프레임을 라우터에게 보냅니다.':
    'PC A sees that 8.8.8.8 is outside its network and asks for router 10.0.0.254\'s MAC by ARP. The router answers rr, and A sends the router a frame with destination MAC rr and IP destination 8.8.8.8.',
  '8.8.8.8은 10.0.0.0/24 밖': '8.8.8.8 is outside 10.0.0.0/24', '게이트웨이 10.0.0.254를 ARP로 물음': 'Asks for gateway 10.0.0.254 by ARP', '라우터: rr': 'Router: rr', '프레임 목적지 MAC rr · IP 목적지 8.8.8.8': 'Frame destination MAC rr · IP destination 8.8.8.8',
  'A는 8.8.8.8이 아니라 게이트웨이 10.0.0.254의 MAC을 묻습니다.': 'A asks not for 8.8.8.8 but for the MAC of gateway 10.0.0.254.',
  '8.8.8.8은 A의 네트워크 밖입니다. A는 누구의 MAC을 물을까요?': '8.8.8.8 is outside A\'s network. Whose MAC does A ask for?',
  '8.8.8.8': '8.8.8.8', '라우터 10.0.0.254': 'Router 10.0.0.254', 'C 10.0.0.3': 'C 10.0.0.3',
  '같은 네트워크 밖의 주소에는 ARP로 닿을 수 없습니다. 밖으로 가는 패킷은 기본 게이트웨이인 라우터에게 맡깁니다.': 'ARP cannot reach an address outside the network. A packet going outside is handed to the default gateway, the router.',
  'C는 자기 IP가 아니라 무시합니다.': 'C ignores it, since it is not C\'s IP.',
  '라우터가 자기 IP를 묻는 것을 알고 답할 준비를 합니다.': 'The router sees that its own IP is being asked for and gets ready to reply.',
  '라우터가 A에게만 답장을 보냅니다.': 'The router sends the reply only to A.',
  'A가 캐시에 10.0.0.254 → rr을 적습니다.': 'A writes 10.0.0.254 → rr in its cache.',
  'A가 목적지 MAC은 라우터의 rr, 안의 IP 목적지는 8.8.8.8인 프레임을 보냅니다.': 'A sends a frame whose destination MAC is the router\'s rr and whose inner IP destination is 8.8.8.8.',
  '라우터가 프레임을 받아, IP 목적지 8.8.8.8을 보고 밖으로 전달합니다.': 'The router takes the frame, reads the IP destination 8.8.8.8 and forwards it outside.',
};
