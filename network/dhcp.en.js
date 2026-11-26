// English for Networking 2.2 DHCP. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'DHCP · 레슨 2.2': 'DHCP · Lesson 2.2',
  '네트워크 2장 IP와 주소 · 레슨 2.2': 'Networking chapter 2 IP and addressing · Lesson 2.2',
  '주소가 없는 컴퓨터가 DHCP로 주소를 묻고, 제안받고, 확정받는 과정과 임대 갱신, 다른 네트워크의 서버에 닿게 해 주는 릴레이를 따라가 보세요.':
    'Follow a computer with no address asking for one with DHCP, getting an offer and a confirmation, renewing its lease, and reaching a server on another network through a relay.',
  '새로 켠 컴퓨터는 자기 IP 주소를 어떻게 받을까요? 주소 없는 PC A와 DHCP 서버 사이로 메시지를 보내 보세요.':
    'How does a computer that has just been switched on get its IP address? Send messages between PC A, which has no address, and a DHCP server.',
  '새로 켠 컴퓨터는 자기 IP 주소를 어떻게 받을까?': 'How does a computer that has just been switched on get its IP address?',
  'PC A와 DHCP 서버': 'PC A and a DHCP server',
  '주소가 없는 PC A가 DHCP 서버와 Discover, Offer, Request, Ack를 주고받아 주소를 받고, 라우터의 릴레이를 거쳐 다른 네트워크의 서버에 닿는 장면':
    'PC A, with no address, exchanging Discover, Offer, Request and Ack with a DHCP server to get an address, and reaching a server on another network through the router\'s relay',
  '케이블': 'Cable', '컴퓨터': 'Computer', '스위치': 'Switch', '라우터': 'Router', 'DHCP 서버': 'DHCP server', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  'PC A · MAC aa': 'PC A · MAC aa', 'PC B · 192.168.1.20': 'PC B · 192.168.1.20', 'DHCP 서버 · 192.168.1.2': 'DHCP server · 192.168.1.2', 'DHCP 서버 · 192.168.9.2': 'DHCP server · 192.168.9.2', '라우터(릴레이) · 192.168.1.1': 'Router (relay) · 192.168.1.1',
  'PC A · MAC aa → 스위치': 'PC A · MAC aa → switch', '스위치 → PC B · 192.168.1.20': 'Switch → PC B · 192.168.1.20', '스위치 → DHCP 서버 · 192.168.1.2': 'Switch → DHCP server · 192.168.1.2',
  'DHCP 서버 · 192.168.1.2 → 스위치': 'DHCP server · 192.168.1.2 → switch', '스위치 → PC A · MAC aa': 'Switch → PC A · MAC aa', 'PC A · MAC aa → DHCP 서버 · 192.168.1.2': 'PC A · MAC aa → DHCP server · 192.168.1.2',
  'DHCP 서버 · 192.168.1.2 → PC A · MAC aa': 'DHCP server · 192.168.1.2 → PC A · MAC aa', '스위치 → 라우터(릴레이) · 192.168.1.1': 'Switch → router (relay) · 192.168.1.1', '라우터(릴레이) · 192.168.1.1 → DHCP 서버 · 192.168.9.2': 'Router (relay) · 192.168.1.1 → DHCP server · 192.168.9.2',
  'DHCP 서버 · 192.168.9.2 → 라우터(릴레이) · 192.168.1.1': 'DHCP server · 192.168.9.2 → router (relay) · 192.168.1.1', '라우터(릴레이) · 192.168.1.1 → 스위치': 'Router (relay) · 192.168.1.1 → switch',
  '스위치 · ff → 서버 쪽': 'Switch · ff → toward the server', 'DHCP 서버 · 192.168.1.2 · Ack': 'DHCP server · 192.168.1.2 · Ack', 'PC A · MAC aa · Request 연장': 'PC A · MAC aa · Request renewal', '라우터(릴레이) · 192.168.1.1 · Discover · giaddr .1.1': 'Router (relay) · 192.168.1.1 · Discover · giaddr .1.1',
  // Work panel
  'PC A의 상태': 'PC A\'s state', 'IP 주소  없음': 'IP address  none', 'MAC 주소  aa': 'MAC address  aa', 'DHCP 서버의 주소도 모름': 'Does not know the DHCP server\'s address either',
  'DHCP Discover': 'DHCP Discover', '출발지 IP  0.0.0.0 (아직 없음)': 'Source IP  0.0.0.0 (none yet)', '목적지 IP  255.255.255.255 (모두)': 'Destination IP  255.255.255.255 (everyone)', '내용  aa에게 줄 주소 있나요?': 'Content  any address for aa?',
  'PC B': 'PC B', 'DHCP 서버가 아님 → 무시': 'Not a DHCP server → ignore', 'aa의 Discover 받음': 'Got aa\'s Discover', '풀에서 비어 있는 192.168.1.50을 고름': 'Picks the free 192.168.1.50 from the pool',
  'DHCP 서버가 보낼 것': 'What the DHCP server will send', 'Offer  192.168.1.50 · 1시간': 'Offer  192.168.1.50 · 1 hour', '마스크 /24 · 게이트웨이 192.168.1.1 · DNS 192.168.1.2': 'Mask /24 · gateway 192.168.1.1 · DNS 192.168.1.2',
  'DHCP Offer': 'DHCP Offer', '제안 주소  192.168.1.50': 'Offered address  192.168.1.50', '마스크 /24 · 게이트웨이 .1 · DNS .2': 'Mask /24 · gateway .1 · DNS .2', '임대 1시간': 'Lease 1 hour',
  'PC A': 'PC A', 'Offer 받음 · 192.168.1.50': 'Got the Offer · 192.168.1.50', 'DHCP Request': 'DHCP Request', '192.168.1.50을 쓰겠음': 'Will use 192.168.1.50', '모두에게 보냄 (다른 서버도 알게)': 'Sent to everyone (so other servers know)',
  'PC A의 설정': 'PC A\'s settings', 'IP 192.168.1.50/24': 'IP 192.168.1.50/24', '게이트웨이 192.168.1.1 · DNS 192.168.1.2': 'Gateway 192.168.1.1 · DNS 192.168.1.2',
  'PC A의 임대': 'PC A\'s lease', '192.168.1.50 · 임대 1시간': '192.168.1.50 · 1-hour lease', '30분 지남 → 연장할 때': '30 minutes gone → time to renew',
  'DHCP Request (연장)': 'DHCP Request (renewal)', '출발지 192.168.1.50 → 목적지 192.168.1.2 (서버에게 직접)': 'Source 192.168.1.50 → destination 192.168.1.2 (straight to the server)', '.50을 계속 쓰겠음': 'Will keep using .50', '192.168.1.50 · 다시 1시간': '192.168.1.50 · another hour',
  '라우터의 설정': 'The router\'s settings', '192.168.1.0 쪽: 192.168.1.1': '192.168.1.0 side: 192.168.1.1', 'DHCP 릴레이 켜짐 → 서버 192.168.9.2': 'DHCP relay on → server 192.168.9.2',
  '0.0.0.0 → 255.255.255.255': '0.0.0.0 → 255.255.255.255', '서버는 이 LAN에 없음': 'The server is not on this LAN', '라우터의 DHCP 릴레이': 'The router\'s DHCP relay',
  '브로드캐스트는 라우터를 넘지 못함': 'A broadcast cannot cross the router', '릴레이: 서버 192.168.9.2에게 직접 보냄': 'Relay: sends it straight to server 192.168.9.2', 'giaddr  192.168.1.1 (들어온 네트워크)': 'giaddr  192.168.1.1 (the network it came from)',
  'giaddr 192.168.1.1 → 192.168.1.0 네트워크에서 온 요청': 'giaddr 192.168.1.1 → a request from the 192.168.1.0 network', '192.168.1.x 풀에서 .50을 고름': 'Picks .50 from the 192.168.1.x pool', '답은 릴레이(192.168.1.1)에게': 'Reply goes to the relay (192.168.1.1)',
  '서버의 답(Offer, Ack)이 릴레이에게 옴': 'The server\'s reply (Offer, Ack) reaches the relay', '서버의 답을 192.168.1.0 쪽으로 돌려보냄': 'Sends the server\'s reply back to the 192.168.1.0 side',
  '릴레이를 거쳐 Offer, Ack를 받음': 'Got the Offer and Ack through the relay', '192.168.1.50/24 · 게이트웨이 192.168.1.1': '192.168.1.50/24 · gateway 192.168.1.1',
  // Badges and moving labels
  '주소 없음': 'No address', '풀: 192.168.1.50–.99': 'Pool: 192.168.1.50–.99', 'Discover': 'Discover', 'IP 없음 → 모두에게': 'No IP → asks everyone', 'ff → 모든 포트': 'ff → every port',
  'ff → B 쪽': 'ff → toward B', 'DHCP 서버 아님 → 무시': 'Not a DHCP server → ignore', 'ff → 서버 쪽': 'ff → toward the server', 'Discover → .50 고름': 'Discover → picks .50',
  'Offer .50': 'Offer .50', '.50 제안 · 1시간': 'Offers .50 · 1 hour', 'Offer 받음 · 아직 설정 안 함': 'Got the Offer · not set yet', 'Request .50': 'Request .50', '.50을 쓰겠음': 'Will use .50', 'Ack': 'Ack',
  'Offer → Ack: .50 · 1시간': 'Offer → Ack: .50 · 1 hour', 'Request → .50/24 받음': 'Request → got .50/24',
  '.50 · 30분 남음': '.50 · 30 min left', '.50 → aa · 30분 남음': '.50 → aa · 30 min left', 'Request 연장': 'Request renewal', '30분 지남 → 연장 요청': '30 min gone → asks to renew', '연장 요청 받음': 'Got the renewal request',
  '직접 온 연장 → 다시 1시간': 'Direct renewal → another hour', '30분 뒤 연장 · .50 그대로': 'Renewed at 30 min · same .50',
  '릴레이 → 192.168.9.2': 'Relay → 192.168.9.2', '주소 없음 · 모두에게': 'No address · to everyone', 'ff → 라우터': 'ff → router', 'giaddr .1.1 붙여 서버로': 'Adds giaddr .1.1 → to the server', 'Discover · giaddr .1.1': 'Discover · giaddr .1.1',
  'giaddr 보고 192.168.1.x 풀에서': 'Reads giaddr → 192.168.1.x pool', 'Offer → 릴레이': 'Offer → relay', '답 받음 → A 쪽으로': 'Got the reply → toward A', 'Offer · Ack': 'Offer · Ack', 'aa → A 쪽': 'aa → toward A', '192.168.1.50 받음': 'Got 192.168.1.50',
  // Step 1
  '모두에게 묻기': 'Asking everyone',
  '주소가 없는 컴퓨터는 0.0.0.0에서 모두에게 Discover를 보낸다': 'A computer with no address sends a Discover from 0.0.0.0 to everyone',
  '방금 켠 A는 아직 IP 주소가 없습니다. 그래서 출발지를 0.0.0.0, 목적지를 모두에게 가는 255.255.255.255로 채워 DHCP Discover를 보냅니다. 이더넷 프레임의 목적지도 ff:ff:ff:ff:ff:ff라서 스위치가 모든 포트로 퍼뜨립니다. DHCP 서버만 이 메시지에 답할 준비를 하고, 보통 컴퓨터인 B는 무시합니다. 서버는 A의 MAC aa를 보고 빌려줄 주소를 고릅니다.':
    'A, just switched on, has no IP address yet. So it sends a DHCP Discover with source 0.0.0.0 and destination 255.255.255.255, the address for everyone. The Ethernet frame\'s destination is ff:ff:ff:ff:ff:ff too, so the switch spreads it to every port. Only the DHCP server gets ready to answer; B, an ordinary computer, ignores it. The server reads A\'s MAC aa and picks an address to lend.',
  'A 이름표가 "IP 없음 → 모두에게"가 되고, 스위치가 Discover를 오른쪽 서버와 아래 B로 모두 보냅니다. 서버 이름표는 "Discover → .50 고름", B 이름표는 "DHCP 서버 아님 → 무시"입니다.':
    'A\'s badge becomes "no IP → asks everyone", and the switch sends the Discover both to the server on the right and to B below. The server\'s badge reads "Discover → picks .50" and B\'s "not a DHCP server → ignore".',
  '가운데 스위치에 왼쪽 PC A(MAC aa, 주소 없음), 오른쪽 DHCP 서버(192.168.1.2), 아래 PC B가 이어져 있습니다. A가 출발지 0.0.0.0, 목적지 255.255.255.255로 Discover를 보내고, 서버만 답할 준비를 합니다.':
    'A switch in the middle joins PC A (MAC aa, no address) on the left, a DHCP server (192.168.1.2) on the right and PC B below. A sends a Discover from 0.0.0.0 to 255.255.255.255, and only the server gets ready to answer.',
  'A: 주소 없음': 'A: no address', 'Discover 0.0.0.0 → 255.255.255.255': 'Discover 0.0.0.0 → 255.255.255.255', '서버: .50을 고름': 'Server: picks .50', 'B: 무시': 'B: ignores it',
  'A가 주소 없이 Discover를 모두에게 보냅니다.': 'A sends a Discover to everyone, with no address.',
  'A는 아직 IP 주소도, DHCP 서버의 주소도 모릅니다. Discover의 목적지 IP는 무엇일까요?': 'A knows neither its own IP address nor the DHCP server\'s. What is the Discover\'s destination IP?',
  '192.168.1.2': '192.168.1.2', '255.255.255.255': '255.255.255.255', '0.0.0.0': '0.0.0.0',
  '서버를 모르니 모두에게 묻습니다. 255.255.255.255는 이 LAN의 모든 컴퓨터에게 가는 주소입니다.': 'Not knowing the server, A asks everyone. 255.255.255.255 is the address for every computer on this LAN.',
  'B도 받지만 DHCP 서버가 아니라 무시합니다.': 'B gets it too but ignores it, since it is not a DHCP server.',
  '서버가 Discover를 받고, 풀에서 비어 있는 192.168.1.50을 고릅니다.': 'The server gets the Discover and picks the free 192.168.1.50 from its pool.',
  // Step 2
  '제안과 확정': 'Offer and confirmation',
  'Offer, Request, Ack를 거쳐 A가 주소와 설정을 받는다': 'Through Offer, Request and Ack, A gets an address and settings',
  '서버는 Offer로 "192.168.1.50을 1시간 쓰세요"라고 제안하고, 마스크(/24), 게이트웨이(192.168.1.1), DNS 서버도 함께 적어 보냅니다. A는 그 주소를 쓰겠다는 Request를 보냅니다. 이때도 모두에게 보내서, 다른 서버가 있었다면 자기 제안이 선택되지 않았음을 알게 합니다. 서버가 Ack로 확정하면 A는 그제서야 주소를 설정합니다. 네 메시지의 머리글자를 따서 DORA라고 부릅니다.':
    'The server offers "use 192.168.1.50 for an hour" with an Offer, which also carries the mask (/24), the gateway (192.168.1.1) and the DNS server. A sends a Request saying it will use that address. This too goes to everyone, so any other server learns its own offer was not chosen. Only when the server confirms with an Ack does A set the address. The four messages are known by their initials, DORA.',
  '서버의 Offer와 A의 Request가 오간 뒤 서버 Ack가 A에 닿습니다. 서버 이름표는 "Offer → Ack: .50 · 1시간", A 이름표는 "Request → .50/24 받음"이 됩니다.':
    'After the server\'s Offer and A\'s Request, the server\'s Ack reaches A. The server\'s badge becomes "Offer → Ack: .50 · 1 hour" and A\'s "Request → got .50/24".',
  '같은 배치에서 서버가 A에게 192.168.1.50을 제안하고(Offer), A가 그것을 고르고(Request), 서버가 확정합니다(Ack). A가 주소, 마스크, 게이트웨이, 임대 시간을 갖습니다.':
    'In the same layout, the server offers A 192.168.1.50 (Offer), A chooses it (Request) and the server confirms it (Ack). A now has an address, a mask, a gateway and a lease time.',
  'Offer: .50 · 1시간': 'Offer: .50 · 1 hour', 'Request: .50을 쓰겠음': 'Request: will use .50', 'Ack: 확정': 'Ack: confirmed', 'A: 192.168.1.50/24 · 게이트웨이 .1': 'A: 192.168.1.50/24 · gateway .1',
  '서버가 192.168.1.50을 1시간 쓰라고 제안합니다.': 'The server offers 192.168.1.50 for an hour.',
  'A가 Offer를 받습니다. 아직 주소를 설정하지는 않습니다.': 'A gets the Offer. It does not set the address yet.',
  'A가 Offer를 받았습니다. 바로 192.168.1.50을 써도 될까요?': 'A got the Offer. Can it use 192.168.1.50 right away?',
  '바로 쓴다': 'Use it at once', 'Request를 보내고 Ack를 받은 뒤 쓴다': 'Use it after sending a Request and getting an Ack', '다시 Discover를 보낸다': 'Send another Discover',
  'Offer는 제안일 뿐입니다. A가 고른다고 알리고(Request) 서버가 확정해야(Ack) 씁니다.': 'An Offer is only a proposal. A announces its choice (Request) and uses it once the server confirms (Ack).',
  'A가 .50을 쓰겠다는 Request를 보냅니다.': 'A sends a Request saying it will use .50.',
  '서버가 Ack로 확정하고, A가 주소와 설정을 적용합니다.': 'The server confirms with an Ack, and A applies the address and settings.',
  // Step 3
  '임대 갱신': 'Renewing the lease',
  '임대 시간의 절반이 지나면 같은 주소를 연장한다': 'Halfway through the lease, the same address is renewed',
  'DHCP 주소는 빌린 것이라 임대 시간이 있습니다. A는 1시간 임대의 절반인 30분이 지나면 서버에게 직접 연장을 요청합니다. 이제 서버 주소를 알고 자기 주소도 있으니 모두에게 보낼 필요가 없습니다. 서버가 Ack를 보내면 같은 주소 .50을 다시 1시간 씁니다. 꺼진 컴퓨터는 연장하지 않으니, 임대가 끝난 주소는 서버가 다른 컴퓨터에게 줄 수 있습니다.':
    'A DHCP address is borrowed, so it has a lease time. After 30 minutes, half of the 1-hour lease, A asks the server directly to renew. It now knows the server\'s address and has its own, so there is no need to ask everyone. When the server sends an Ack, A keeps the same .50 for another hour. A computer that has been switched off does not renew, so the server can give an expired address to another computer.',
  'A 이름표가 "30분 지남 → 연장 요청"으로 시작하고, 서버 이름표가 "직접 온 연장 → 다시 1시간"이 됩니다. A 이름표는 "30분 뒤 연장 · .50 그대로"가 됩니다. 주소는 바뀌지 않고 시간만 늘어납니다.':
    'A\'s badge starts as "30 min gone → asks to renew", and the server\'s becomes "direct renewal → another hour". A\'s badge becomes "renewed at 30 min · same .50". The address stays the same; only the time grows.',
  '같은 배치에서 A가 192.168.1.50을 30분째 쓰고 있습니다. A가 서버에게 직접 연장을 요청하고, 서버가 확정해 같은 주소를 1시간 더 씁니다.':
    'In the same layout, A has used 192.168.1.50 for 30 minutes. A asks the server directly to renew, the server confirms, and A keeps the same address for another hour.',
  '임대 1시간 중 30분 지남': '30 of the 60 minutes gone', 'A → 서버: .50 연장 요청 (직접)': 'A → server: renew .50 (directly)', '.50 그대로 · 다시 1시간': 'Same .50 · another hour',
  'A가 서버에게 직접 연장을 요청합니다.': 'A asks the server directly to renew.',
  '임대 1시간 중 30분이 지났습니다. A는 어떻게 할까요?': '30 minutes of the 1-hour lease are gone. What does A do?',
  '임대가 끝날 때까지 기다린다': 'Waits until the lease ends', '서버에게 같은 주소의 연장을 요청한다': 'Asks the server to renew the same address', '새 주소를 Discover로 찾는다': 'Looks for a new address with a Discover',
  '절반 시간에 미리 연장해, 서버가 잠시 답하지 않아도 남은 시간 안에 다시 시도할 수 있게 합니다.': 'Renewing at the halfway point leaves time to try again if the server does not answer for a while.',
  '서버가 Ack로 연장을 확정합니다. 주소는 그대로입니다.': 'The server confirms the renewal with an Ack. The address stays the same.',
  // Step 4
  '릴레이': 'Relay',
  '서버가 다른 네트워크에 있으면 라우터의 릴레이가 전해 준다': 'When the server is on another network, the router\'s relay passes the message on',
  '회사에서는 DHCP 서버 하나가 여러 네트워크에 주소를 나눠 줍니다. 그런데 Discover는 브로드캐스트라서 라우터를 넘지 못합니다. 그래서 라우터에 DHCP 릴레이를 켜 둡니다. 릴레이는 받은 Discover를 서버의 주소로 직접 보내면서, 이 메시지가 들어온 네트워크의 라우터 주소 192.168.1.1을 giaddr 칸에 적습니다. 서버는 giaddr을 보고 192.168.1.x 풀에서 주소를 고르고, 답도 릴레이를 거쳐 A에게 돌아옵니다.':
    'In a company, one DHCP server hands out addresses for several networks. But a Discover is a broadcast and cannot cross a router. So a DHCP relay is switched on in the router. The relay sends the Discover straight to the server\'s address and writes the router\'s address on the network it came from, 192.168.1.1, in the giaddr field. The server reads giaddr, picks an address from the 192.168.1.x pool, and its reply returns to A through the relay.',
  'A의 Discover가 아래 라우터에 닿자 라우터 이름표가 "giaddr .1.1 붙여 서버로"가 되고, 오른쪽 아래 서버 이름표가 "giaddr 보고 192.168.1.x 풀에서"가 됩니다. 답이 돌아와 A 이름표가 "192.168.1.50 받음"이 됩니다.':
    'When A\'s Discover reaches the router below, the router\'s badge becomes "adds giaddr .1.1 → to the server", and the server\'s badge at the lower right becomes "reads giaddr → 192.168.1.x pool". The reply comes back and A\'s badge becomes "got 192.168.1.50".',
  '왼쪽 PC A(주소 없음), 가운데 스위치, 오른쪽 PC B가 192.168.1.0 네트워크이고, 아래 라우터 너머 192.168.9.0 네트워크에 DHCP 서버(192.168.9.2)가 있습니다. 라우터의 릴레이가 Discover를 giaddr 192.168.1.1과 함께 서버에게 직접 보내고, 서버가 192.168.1.x 주소를 골라 릴레이를 거쳐 돌려줍니다.':
    'PC A (no address) on the left, a switch in the middle and PC B on the right are on the 192.168.1.0 network; past the router below, on the 192.168.9.0 network, is a DHCP server (192.168.9.2). The router\'s relay sends the Discover straight to the server with giaddr 192.168.1.1, and the server picks a 192.168.1.x address and returns it through the relay.',
  'A: Discover (브로드캐스트)': 'A: Discover (broadcast)', '릴레이: 서버에게 직접 · giaddr .1.1': 'Relay: straight to the server · giaddr .1.1', '서버: 192.168.1.x 풀에서 .50': 'Server: .50 from the 192.168.1.x pool', '답은 릴레이 거쳐 A로': 'Reply goes to A through the relay',
  'A가 평소처럼 Discover를 모두에게 보냅니다.': 'A sends a Discover to everyone, as usual.',
  '라우터의 릴레이가 Discover를 받아, giaddr에 192.168.1.1을 적고 서버에게 직접 보냅니다.': 'The router\'s relay takes the Discover, writes 192.168.1.1 in giaddr and sends it straight to the server.',
  'DHCP 서버는 라우터 너머 다른 네트워크에 있습니다. A의 Discover는 어떻게 서버에 닿을까요?': 'The DHCP server is on another network past the router. How does A\'s Discover reach it?',
  '브로드캐스트가 라우터를 넘어 간다': 'The broadcast crosses the router', '라우터의 릴레이가 서버에게 직접 보내 준다': 'The router\'s relay sends it straight to the server', '닿지 않는다': 'It does not reach it',
  '브로드캐스트는 라우터를 넘지 못합니다. 릴레이가 받은 메시지를 서버의 주소로 다시 보내 줍니다.': 'A broadcast cannot cross a router. The relay resends the message to the server\'s address.',
  '서버가 giaddr을 보고 192.168.1.x 풀에서 .50을 고릅니다. 답은 릴레이에게 보냅니다.': 'The server reads giaddr and picks .50 from the 192.168.1.x pool. It sends the reply to the relay.',
  '서버의 답이 릴레이에게 옵니다.': 'The server\'s reply reaches the relay.',
  '서버의 답이 릴레이에게 오고, 릴레이가 192.168.1.0 쪽으로 돌려보냅니다.': 'The server\'s reply reaches the relay, which sends it back to the 192.168.1.0 side.',
  'A가 192.168.1.50을 받습니다.': 'A gets 192.168.1.50.',
};
