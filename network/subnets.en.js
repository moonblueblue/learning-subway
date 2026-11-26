// English for Networking 2.1 IP addresses and subnets. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'IP 주소와 서브넷 · 레슨 2.1': 'IP addresses and subnets · Lesson 2.1',
  '네트워크 2장 IP와 주소 · 레슨 2.1': 'Networking chapter 2 IP and addressing · Lesson 2.1',
  '주소와 서브넷 마스크를 AND 해 같은 네트워크인지 가르고, 같으면 직접, 다르면 게이트웨이로 보내는 판단을 따라가 보세요. 마스크를 잘못 적었을 때와 더 잘게 나눌 때도 봅니다.':
    'Follow the decision that ANDs an address with the subnet mask to tell whether it is on the same network, sending directly if so and to the gateway if not. Also see a mistyped mask and a network split more finely.',
  'IP 주소의 어디까지가 네트워크이고, 목적지가 같은 네트워크인지 어떻게 가를까요? A가 계산한 결과에 따라 패킷이 직접 가거나 라우터를 거치는 길을 보세요.':
    'How much of an IP address is the network, and how do you tell whether a destination is on the same network? Watch the packet go directly or through the router depending on what A calculates.',
  '목적지가 같은 네트워크인지 어떻게 가를까?': 'How do you tell whether a destination is on the same network?',
  '두 네트워크와 라우터': 'Two networks and a router',
  'PC A가 목적지 주소와 서브넷 마스크를 AND 한 결과로 같은 네트워크면 직접, 다르면 라우터로 보내는 장면':
    'PC A ANDing the destination address with the subnet mask and sending directly when the network matches, or to the router when it does not',
  '케이블': 'Cable', '컴퓨터': 'Computer', '스위치': 'Switch', '라우터': 'Router', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  'PC A · 192.168.1.10/24': 'PC A · 192.168.1.10/24', 'PC A · 192.168.1.10/16': 'PC A · 192.168.1.10/16', 'PC A · 192.168.1.10/26': 'PC A · 192.168.1.10/26',
  'PC B · 192.168.1.20/24': 'PC B · 192.168.1.20/24', 'PC B · 192.168.1.20/26': 'PC B · 192.168.1.20/26', 'PC C · 192.168.2.5/24': 'PC C · 192.168.2.5/24', 'PC A · 192.168.1.10/16 (원래 /24)': 'PC A · 192.168.1.10/16 (was /24)', 'PC A · 192.168.1.10/16 (원래 /24) → 스위치': 'PC A · 192.168.1.10/16 (was /24) → switch', '스위치 → PC B · 192.168.1.20/24': 'Switch → PC B · 192.168.1.20/24', '라우터 → PC C · 192.168.2.5/24': 'Router → PC C · 192.168.2.5/24', 'PC C · 192.168.1.70/26': 'PC C · 192.168.1.70/26',
  'PC A · 192.168.1.10/24 → 스위치': 'PC A · 192.168.1.10/24 → switch', 'PC A · 192.168.1.10/16 → 스위치': 'PC A · 192.168.1.10/16 → switch', 'PC A · 192.168.1.10/26 → 스위치': 'PC A · 192.168.1.10/26 → switch',
  '스위치 → PC B · 192.168.1.20': 'Switch → PC B · 192.168.1.20', '스위치 → 라우터': 'Switch → router', '라우터 → PC C · 192.168.2.5': 'Router → PC C · 192.168.2.5', '라우터 → PC C · 192.168.1.70/26': 'Router → PC C · 192.168.1.70/26',
  '스위치 · 직접': 'Switch · direct', '스위치 · ARP 퍼짐': 'Switch · ARP spreads', '라우터 · 192.168.2.0 쪽': 'Router · toward 192.168.2.0', '라우터 · .64 서브넷 쪽': 'Router · toward the .64 subnet',
  // Work panel
  'PC A의 계산': 'PC A\'s calculation', 'PC A의 계산 (마스크가 잘못됨)': 'PC A\'s calculation (mask is wrong)',
  '내 주소  192.168.1.10/24': 'My address  192.168.1.10/24', '내 네트워크  192.168.1.10 AND 255.255.255.0 = 192.168.1.0': 'My network  192.168.1.10 AND 255.255.255.0 = 192.168.1.0', '목적지  192.168.1.20': 'Destination  192.168.1.20',
  '192.168.1.20 AND 255.255.255.0 = 192.168.1.0': '192.168.1.20 AND 255.255.255.0 = 192.168.1.0', '= 내 네트워크 → 직접 보냄 (ARP로 B의 MAC)': '= my network → send directly (B\'s MAC by ARP)',
  'PC B': 'PC B', 'PC C': 'PC C', '받음 · 라우터를 거치지 않음': 'Got it · did not pass the router', '받음 · 라우터를 거침': 'Got it · passed the router',
  '내 네트워크  192.168.1.0': 'My network  192.168.1.0', '목적지  192.168.2.5': 'Destination  192.168.2.5', '192.168.2.5 AND 255.255.255.0 = 192.168.2.0': '192.168.2.5 AND 255.255.255.0 = 192.168.2.0',
  '≠ 내 네트워크 192.168.1.0 → 게이트웨이로': '≠ my network 192.168.1.0 → to the gateway', '목적지 192.168.2.5 → 192.168.2.0 쪽 포트': 'Destination 192.168.2.5 → the 192.168.2.0 port',
  '내 주소  192.168.1.10/16  (원래 /24)': 'My address  192.168.1.10/16  (should be /24)', '내 네트워크  192.168.1.10 AND 255.255.0.0 = 192.168.0.0': 'My network  192.168.1.10 AND 255.255.0.0 = 192.168.0.0',
  '192.168.2.5 AND 255.255.0.0 = 192.168.0.0': '192.168.2.5 AND 255.255.0.0 = 192.168.0.0', '= 내 네트워크로 계산됨 → ARP로 직접 찾음': '= counted as my network → look it up directly by ARP',
  'PC A': 'PC A', '192.168.2.5의 ARP 답이 오지 않음': 'No ARP reply for 192.168.2.5', '→ 패킷을 보내지 못함': '→ cannot send the packet',
  '내 주소  192.168.1.10/26  (255.255.255.192)': 'My address  192.168.1.10/26  (255.255.255.192)', '내 서브넷  192.168.1.0 (.0–.63)': 'My subnet  192.168.1.0 (.0–.63)', '목적지  192.168.1.70': 'Destination  192.168.1.70',
  '192.168.1.70 AND 255.255.255.192 = 192.168.1.64': '192.168.1.70 AND 255.255.255.192 = 192.168.1.64', '≠ 내 서브넷 192.168.1.0 → 게이트웨이로': '≠ my subnet 192.168.1.0 → to the gateway', '목적지 192.168.1.70 → .64/26 쪽 포트': 'Destination 192.168.1.70 → the .64/26 port',
  // Badges and moving labels
  '내 네트워크 192.168.1.0': 'My network 192.168.1.0', '→ 192.168.1.20': '→ 192.168.1.20', '.1.20 AND /24 = 1.0 → 같음 · 직접': '.1.20 AND /24 = 1.0 → same · direct', '직접': 'Direct',
  '받음 · 라우터 안 거침': 'Got it · no router', '아무것도 안 옴': 'Nothing arrives', '→ 192.168.2.5': '→ 192.168.2.5', '.2.5 AND /24 = 2.0 → 다름 · 게이트웨이': '.2.5 AND /24 = 2.0 → different · gateway',
  '게이트웨이로': 'To the gateway', '192.168.2.0 쪽으로': 'Toward 192.168.2.0', '192.168.2.0 쪽': 'Toward 192.168.2.0', '받음 · 라우터 거침': 'Got it · via the router',
  '내 네트워크 192.168.0.0 (/16)': 'My network 192.168.0.0 (/16)', 'ARP: 2.5 누구?': 'ARP: who is 2.5?', '/16이라 2.5도 같다고 봄': '/16, so 2.5 counts as same', 'ARP: 192.168.2.5 누구?': 'ARP: who is 192.168.2.5?',
  '거치지 않음': 'Not passed', 'ARP 퍼짐': 'ARP spreads', '2.5 아님 → 무시': 'Not 2.5 → ignore', 'ARP는 라우터를 못 넘음': 'ARP cannot cross the router', '/16이라 2.5도 같다고 봄 → ARP 답 없음': '/16, so 2.5 counts as same → no ARP reply',
  '내 서브넷 .0–.63': 'My subnet .0–.63', '서브넷 .64–.127': 'Subnet .64–.127', '→ 192.168.1.70': '→ 192.168.1.70', '.70 AND /26 = .64 ≠ 내 .0 → 게이트웨이': '.70 AND /26 = .64 ≠ my .0 → gateway',
  '.64 서브넷 쪽으로': 'Toward the .64 subnet', '.64 서브넷 쪽': 'Toward the .64 subnet', '서브넷 .64–.127 · 받음': 'Subnet .64–.127 · got it',
  // Step 1
  '같은 네트워크': 'Same network',
  '목적지 AND 마스크가 내 네트워크와 같으면 직접 보낸다': 'When destination AND mask equals my network, send directly',
  'A의 주소는 192.168.1.10/24입니다. /24는 32비트 가운데 앞 24비트가 네트워크 부분이라는 뜻이고, 마스크로 쓰면 255.255.255.0입니다. 목적지 192.168.1.20을 마스크와 AND 하면(마스크가 0인 자리를 0으로 지우면) 192.168.1.0이 남습니다. A 자신의 네트워크 192.168.1.0과 같으므로, A는 1.4의 ARP로 B의 MAC을 찾아 직접 보냅니다. 라우터는 거치지 않습니다.':
    'A\'s address is 192.168.1.10/24. /24 means the first 24 of the 32 bits are the network part; written as a mask it is 255.255.255.0. ANDing the destination 192.168.1.20 with the mask (clearing every bit where the mask is 0) leaves 192.168.1.0. That equals A\'s own network 192.168.1.0, so A finds B\'s MAC with the ARP of 1.4 and sends directly. The router is not involved.',
  'A 이름표가 ".1.20 AND /24 = 1.0 → 같음 · 직접"이 되고, 패킷이 스위치에서 오른쪽 B로 바로 갑니다. B 이름표는 "받음 · 라우터 안 거침", 아래 라우터 이름표는 "아무것도 안 옴"입니다.':
    'A\'s badge becomes ".1.20 AND /24 = 1.0 → same · direct", and the packet goes from the switch straight to B on the right. B\'s badge reads "got it · no router" and the router\'s below "nothing arrives".',
  '왼쪽 PC A(192.168.1.10/24), 가운데 스위치, 오른쪽 PC B(192.168.1.20)가 한 네트워크이고, 스위치 아래 라우터 너머에 PC C(192.168.2.5)가 있습니다. 192.168.1.20 AND 255.255.255.0 = 192.168.1.0이 A의 네트워크와 같아 A가 B에게 직접 보냅니다.':
    'PC A (192.168.1.10/24) on the left, a switch in the middle and PC B (192.168.1.20) on the right form one network; past the router below the switch is PC C (192.168.2.5). 192.168.1.20 AND 255.255.255.0 = 192.168.1.0 equals A\'s network, so A sends to B directly.',
  '목적지 192.168.1.20': 'Destination 192.168.1.20', ' AND ': ' AND ', '255.255.255.0 (/24)': '255.255.255.0 (/24)', '192.168.1.0': '192.168.1.0', 'A의 네트워크 192.168.1.0 → 직접': 'A\'s network 192.168.1.0 → direct',
  'A가 목적지를 마스크와 AND 해 192.168.1.0을 얻습니다. 자기 네트워크와 같으므로 B에게 직접 보냅니다.': 'A ANDs the destination with the mask and gets 192.168.1.0. It matches its own network, so A sends to B directly.',
  '192.168.1.20 AND 255.255.255.0은 192.168.1.0입니다. A의 네트워크도 192.168.1.0입니다. A는 어떻게 보낼까요?': '192.168.1.20 AND 255.255.255.0 is 192.168.1.0. A\'s network is also 192.168.1.0. How does A send?',
  'B에게 직접': 'Directly to B', '라우터에게': 'To the router', '모두에게': 'To everyone',
  '네트워크 주소가 같으면 같은 LAN에 있으므로 ARP로 MAC을 찾아 직접 보냅니다.': 'The same network address means the same LAN, so A finds the MAC by ARP and sends directly.',
  '패킷이 스위치를 지나 B에게 바로 닿습니다.': 'The packet passes the switch and reaches B straight away.',
  // Step 2
  '다른 네트워크': 'Another network',
  '결과가 내 네트워크와 다르면 게이트웨이로 보낸다': 'When the result differs from my network, send to the gateway',
  '이번 목적지는 192.168.2.5입니다. 마스크와 AND 하면 192.168.2.0이 남고, A의 네트워크 192.168.1.0과 다릅니다. 같은 LAN에 없으니 ARP로 직접 찾을 수 없습니다. A는 기본 게이트웨이인 라우터에게 맡기고, 라우터가 192.168.2.0 네트워크 쪽으로 넘겨 C에게 닿습니다.':
    'This time the destination is 192.168.2.5. ANDing with the mask leaves 192.168.2.0, which differs from A\'s network 192.168.1.0. It is not on the same LAN, so ARP cannot find it directly. A hands it to the default gateway, the router, which passes it toward the 192.168.2.0 network and on to C.',
  'A 이름표가 ".2.5 AND /24 = 2.0 → 다름 · 게이트웨이"가 되고, 패킷이 스위치에서 아래 라우터로 갑니다. 라우터 이름표는 "192.168.2.0 쪽으로", C 이름표는 "받음 · 라우터 거침"입니다.':
    'A\'s badge becomes ".2.5 AND /24 = 2.0 → different · gateway", and the packet goes from the switch down to the router. The router\'s badge reads "toward 192.168.2.0" and C\'s "got it · via the router".',
  '같은 배치에서 A가 C(192.168.2.5)에게 보냅니다. 192.168.2.5 AND 255.255.255.0 = 192.168.2.0이 A의 네트워크와 달라, 패킷이 스위치에서 라우터로 갔다가 C에게 닿습니다.':
    'In the same layout, A sends to C (192.168.2.5). 192.168.2.5 AND 255.255.255.0 = 192.168.2.0 differs from A\'s network, so the packet goes from the switch to the router and then to C.',
  '목적지 192.168.2.5': 'Destination 192.168.2.5', '/24': '/24', '192.168.2.0': '192.168.2.0', ' ≠ ': ' ≠ ', '192.168.1.0 → 게이트웨이(라우터)로': '192.168.1.0 → to the gateway (router)',
  'A가 목적지를 마스크와 AND 해 192.168.2.0을 얻습니다. 자기 네트워크와 달라 게이트웨이로 보냅니다.': 'A ANDs the destination with the mask and gets 192.168.2.0. It differs from its own network, so A sends to the gateway.',
  '192.168.2.5 AND 255.255.255.0은 192.168.2.0입니다. A는 어떻게 보낼까요?': '192.168.2.5 AND 255.255.255.0 is 192.168.2.0. How does A send?',
  'C에게 직접': 'Directly to C', '게이트웨이(라우터)에게': 'To the gateway (router)', '보낼 수 없다': 'It cannot send',
  '네트워크 주소가 다르면 다른 LAN입니다. 다른 LAN으로 가는 패킷은 게이트웨이에게 맡깁니다.': 'A different network address means a different LAN. Packets for another LAN are handed to the gateway.',
  '스위치가 라우터에게 넘깁니다.': 'The switch passes it to the router.',
  '라우터가 192.168.2.0 네트워크 쪽으로 넘겨 C가 받습니다.': 'The router passes it toward the 192.168.2.0 network and C gets it.',
  // Step 3
  '잘못 적은 마스크': 'A mistyped mask',
  '마스크를 잘못 적으면 밖의 주소를 안에서 찾다가 못 보낸다': 'With a wrong mask, an outside address is looked for inside and the packet never leaves',
  '누군가 A의 마스크를 /24 대신 /16(255.255.0.0)으로 잘못 적었습니다. 그러면 A는 192.168.2.5 AND 255.255.0.0 = 192.168.0.0을 얻고, 자기 네트워크도 192.168.0.0으로 계산하므로 "같다"고 판단합니다. 그래서 라우터에게 맡기지 않고 ARP로 192.168.2.5를 직접 찾습니다. 그 주소는 이 LAN에 없으니 아무도 답하지 않고, 패킷은 나가지 못합니다. 같은 LAN의 B와는 여전히 잘 통해서 원인을 찾기 어려운 고장입니다.':
    'Someone typed A\'s mask as /16 (255.255.0.0) instead of /24. Now A gets 192.168.2.5 AND 255.255.0.0 = 192.168.0.0, computes its own network as 192.168.0.0 too, and decides they are "the same". So instead of handing it to the router, A looks for 192.168.2.5 directly with ARP. That address is not on this LAN, nobody answers, and the packet never leaves. Since A still talks fine with B on the same LAN, the fault is hard to track down.',
  'A 이름표가 경고 색 "/16이라 2.5도 같다고 봄 → ARP 답 없음"이 되고, 스위치 이름표가 "ARP: 192.168.2.5 누구?"가 됩니다. 라우터 이름표는 "거치지 않음", C 이름표는 "ARP는 라우터를 못 넘음"입니다.':
    'A\'s badge turns to the warning colour "/16, so 2.5 counts as same → no ARP reply", and the switch\'s badge becomes "ARP: who is 192.168.2.5?". The router\'s badge reads "not passed" and C\'s "ARP cannot cross the router".',
  '같은 배치에서 A의 마스크가 /16으로 잘못 적혀 있습니다. 192.168.2.5 AND 255.255.0.0 = 192.168.0.0이 A의 네트워크와 같다고 판단해 ARP로 직접 찾지만, 답이 없어 보내지 못합니다. 라우터와 C에는 아무것도 가지 않습니다.':
    'In the same layout, A\'s mask is mistyped as /16. A decides that 192.168.2.5 AND 255.255.0.0 = 192.168.0.0 matches its network and looks for it directly by ARP, but gets no reply and cannot send. Nothing reaches the router or C.',
  '마스크 /16으로 잘못 적음': 'Mask mistyped as /16', '192.168.2.5 AND 255.255.0.0 = 192.168.0.0': '192.168.2.5 AND 255.255.0.0 = 192.168.0.0', '내 네트워크로 봄': 'Counted as my network', 'ARP로 직접 찾음 · 답 없음': 'Looked up directly by ARP · no reply',
  'A가 /16 마스크로 계산해 192.168.2.5도 같은 네트워크라고 판단하고, ARP로 직접 찾습니다.': 'Calculating with the /16 mask, A decides 192.168.2.5 is on the same network and looks for it directly by ARP.',
  'A의 마스크가 /16으로 잘못 적혔습니다. 192.168.2.5에게 보낼 때 A는 어떻게 할까요?': 'A\'s mask is mistyped as /16. What does A do when sending to 192.168.2.5?',
  '게이트웨이에게 맡긴다': 'Hands it to the gateway', '같은 네트워크로 보고 ARP로 직접 찾는다': 'Treats it as the same network and looks it up by ARP', '마스크를 스스로 고친다': 'Fixes the mask by itself',
  '/16이면 192.168.x.x가 모두 같은 네트워크로 계산됩니다. 그래서 라우터를 거치지 않고 직접 찾습니다.': 'With /16, every 192.168.x.x is counted as the same network. So A looks for it directly, without the router.',
  'ARP 요청은 이 LAN에만 퍼지고, 192.168.2.5는 여기 없으니 아무도 답하지 않습니다. A는 패킷을 보내지 못합니다.': 'The ARP request spreads only on this LAN, and 192.168.2.5 is not here, so nobody answers. A cannot send the packet.',
  // Step 4
  '더 잘게 나누기': 'Splitting more finely',
  '마스크를 늘려 나누면 같은 192.168.1.x도 다른 서브넷이 된다': 'With a longer mask, addresses that all start 192.168.1. can be on different subnets',
  '192.168.1.0/24를 /26 넷으로 나눴습니다. /26은 앞 26비트가 네트워크라서, 마지막 바이트가 0–63, 64–127, 128–191, 192–255인 네 서브넷(주소 64개씩)이 생깁니다. A는 192.168.1.10/26이고 C는 192.168.1.70/26입니다. 192.168.1.70 AND 255.255.255.192 = 192.168.1.64로, A의 192.168.1.0과 다릅니다. 앞 세 자리가 같아도 다른 서브넷이므로 라우터를 거칩니다.':
    '192.168.1.0/24 is split into four /26s. With /26 the first 26 bits are the network, giving four subnets of 64 addresses each, where the last byte is 0–63, 64–127, 128–191 or 192–255. A is 192.168.1.10/26 and C is 192.168.1.70/26. 192.168.1.70 AND 255.255.255.192 = 192.168.1.64, which differs from A\'s 192.168.1.0. Even though the first three numbers match, they are different subnets, so the packet goes through the router.',
  'A 이름표가 ".70 AND /26 = .64 ≠ 내 .0 → 게이트웨이"가 되고, 패킷이 라우터를 거쳐 C에게 갑니다. 라우터 이름표는 ".64 서브넷 쪽으로", C 이름표는 "서브넷 .64–.127 · 받음"입니다.':
    'A\'s badge becomes ".70 AND /26 = .64 ≠ my .0 → gateway", and the packet reaches C through the router. The router\'s badge reads "toward the .64 subnet" and C\'s "subnet .64–.127 · got it".',
  '같은 배치에서 A는 192.168.1.10/26, 라우터 너머 C는 192.168.1.70/26입니다. 192.168.1.70 AND 255.255.255.192 = 192.168.1.64가 A의 서브넷 192.168.1.0과 달라, 패킷이 라우터를 거쳐 C에게 닿습니다.':
    'In the same layout, A is 192.168.1.10/26 and C, past the router, is 192.168.1.70/26. 192.168.1.70 AND 255.255.255.192 = 192.168.1.64 differs from A\'s subnet 192.168.1.0, so the packet reaches C through the router.',
  '/26 = 64개씩 넷 (.0 · .64 · .128 · .192)': '/26 = four blocks of 64 (.0 · .64 · .128 · .192)', '.70 AND /26 = .64': '.70 AND /26 = .64', 'A의 .0': 'A\'s .0', '라우터를 거침': 'Through the router',
  'A가 /26 마스크로 계산해 192.168.1.64를 얻습니다. 자기 서브넷 192.168.1.0과 달라 게이트웨이로 보냅니다.': 'Calculating with the /26 mask, A gets 192.168.1.64. It differs from its subnet 192.168.1.0, so A sends to the gateway.',
  'A는 192.168.1.10/26, 목적지는 192.168.1.70입니다. 앞 세 자리가 같은데 직접 보낼 수 있을까요?': 'A is 192.168.1.10/26 and the destination is 192.168.1.70. The first three numbers match; can A send directly?',
  '직접 보낸다': 'It sends directly', '다른 서브넷이라 라우터를 거친다': 'Different subnet, so through the router',
  '/26에서는 .0–.63과 .64–.127이 다른 서브넷입니다. .70 AND /26 = .64로 A의 .0과 다릅니다.': 'With /26, .0–.63 and .64–.127 are different subnets. .70 AND /26 = .64, which differs from A\'s .0.',
  '라우터가 .64 서브넷 쪽으로 넘겨 C가 받습니다.': 'The router passes it toward the .64 subnet and C gets it.',
};
