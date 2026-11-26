// English for Networking 1.5 VLANs. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'VLAN · 레슨 1.5': 'VLANs · Lesson 1.5',
  '네트워크 1장 링크와 LAN · 레슨 1.5': 'Networking chapter 1 Links and LANs · Lesson 1.5',
  '포트마다 VLAN을 정해 브로드캐스트가 VLAN 안에만 퍼지는 모습, 트렁크에서 붙는 VLAN 꼬리표, VLAN 사이를 잇는 라우터, 트렁크에서 빠진 VLAN을 따라가 보세요.':
    'Follow a broadcast that spreads only inside its VLAN once each port has a VLAN, the VLAN tag added on a trunk, the router that joins VLANs, and a VLAN missing from a trunk.',
  '스위치 한 대를 서로 못 보는 네트워크 여럿으로 어떻게 나눌까요? VLAN 10(초록)과 VLAN 20(분홍)의 컴퓨터 사이로 프레임을 보내 보세요.':
    'How do you split one switch into several networks that cannot see each other? Send frames between computers in VLAN 10 (green) and VLAN 20 (rose).',
  '스위치 한 대를 서로 못 보는 네트워크 여럿으로 어떻게 나눌까?': 'How do you split one switch into several networks that cannot see each other?',
  'VLAN 10과 VLAN 20': 'VLAN 10 and VLAN 20',
  'VLAN 10과 VLAN 20의 컴퓨터가 같은 스위치에 꽂혀 있어도 서로의 프레임이 닿지 않고, 트렁크와 라우터를 거쳐 오가는 장면':
    'Computers in VLAN 10 and VLAN 20 on the same switch not reaching each other\'s frames, and traffic passing through a trunk and a router',
  '케이블': 'Cable', '트렁크 (여러 VLAN)': 'Trunk (several VLANs)', 'VLAN 10 컴퓨터': 'VLAN 10 computer', 'VLAN 20 컴퓨터': 'VLAN 20 computer',
  '스위치': 'Switch', '라우터': 'Router', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  'PC A · VLAN 10': 'PC A · VLAN 10', 'PC B · VLAN 10': 'PC B · VLAN 10', 'PC C · VLAN 20': 'PC C · VLAN 20', 'PC D · VLAN 10': 'PC D · VLAN 10', 'PC E · VLAN 20': 'PC E · VLAN 20', 'PC F · VLAN 20': 'PC F · VLAN 20',
  'PC A · VLAN 10 · 10.0.10.1': 'PC A · VLAN 10 · 10.0.10.1', 'PC C · VLAN 20 · 10.0.20.3': 'PC C · VLAN 20 · 10.0.20.3', '스위치 1': 'Switch 1', '스위치 2': 'Switch 2',
  'PC A · VLAN 10 → 스위치': 'PC A · VLAN 10 → switch', '스위치 → PC B · VLAN 10': 'Switch → PC B · VLAN 10', 'PC A · VLAN 10 → 스위치 1': 'PC A · VLAN 10 → switch 1',
  '스위치 1 → 스위치 2': 'Switch 1 → switch 2', '스위치 2 → PC D · VLAN 10': 'Switch 2 → PC D · VLAN 10', 'PC A · VLAN 10 · 10.0.10.1 → 스위치': 'PC A · VLAN 10 · 10.0.10.1 → switch',
  '스위치 → 라우터': 'Switch → router', '라우터 → 스위치': 'Router → switch', '스위치 → PC C · VLAN 20 · 10.0.20.3': 'Switch → PC C · VLAN 20 · 10.0.20.3', 'PC F · VLAN 20 → 스위치 1': 'PC F · VLAN 20 → switch 1',
  '스위치 · ff → B 쪽': 'Switch · ff → toward B', '스위치 2 · 꼬리표 뗀 프레임': 'Switch 2 · untagged frame', '스위치 · 꼬리표 뗀 프레임': 'Switch · untagged frame', 'PC F · VLAN 20 · ff ← F': 'PC F · VLAN 20 · ff ← F',
  // Work panel
  '스위치의 포트 설정': 'The switch\'s port settings', '포트 1  VLAN 10  (A)': 'Port 1  VLAN 10  (A)', '포트 2  VLAN 10  (B)': 'Port 2  VLAN 10  (B)', '포트 3  VLAN 20  (C)': 'Port 3  VLAN 20  (C)',
  '포트 1로 들어옴 → VLAN 10의 프레임': 'Came in on port 1 → a VLAN 10 frame', '목적지 ff → VLAN 10의 다른 포트로만': 'Destination ff → only the other VLAN 10 ports',
  'PC B와 PC C': 'PC B and PC C', 'B: VLAN 10 포트 → 브로드캐스트 받음': 'B: VLAN 10 port → gets the broadcast', 'C: VLAN 20 포트 → 아무것도 안 옴': 'C: VLAN 20 port → nothing arrives',
  '포트 설정': 'Port settings', '스위치 1  A 쪽 VLAN 10 · 트렁크 10, 20': 'Switch 1  A\'s port VLAN 10 · trunk 10, 20', '스위치 2  D 쪽 VLAN 10 · E 쪽 VLAN 20 · 트렁크 10, 20': 'Switch 2  D\'s port VLAN 10 · E\'s port VLAN 20 · trunk 10, 20',
  'A 쪽 포트 → VLAN 10의 프레임': 'A\'s port → a VLAN 10 frame', 'VLAN 10의 다른 포트: 트렁크뿐': 'The only other VLAN 10 port: the trunk',
  '트렁크 위의 프레임': 'The frame on the trunk', '목적지 MAC  ff': 'Destination MAC  ff', '출발지 MAC  A': 'Source MAC  A', '꼬리표  802.1Q · VLAN 10': 'Tag  802.1Q · VLAN 10', '데이터 · FCS': 'Data · FCS',
  '스위치 2와 PC D': 'Switch 2 and PC D', '꼬리표 10 → VLAN 10 포트(D 쪽)로만': 'Tag 10 → only the VLAN 10 port (toward D)', '꼬리표를 떼고 보냄 → D는 보통 프레임으로 받음': 'Sends it with the tag removed → D gets an ordinary frame', 'E 쪽은 VLAN 20 → 보내지 않음': 'E\'s port is VLAN 20 → nothing sent',
  'PC A가 보낼 것': 'What PC A will send', 'IP 패킷: 10.0.10.1 → 10.0.20.3': 'IP packet: 10.0.10.1 → 10.0.20.3', '10.0.20.3은 내 네트워크 밖 → 게이트웨이(라우터)에게': '10.0.20.3 is outside my network → to the gateway (router)',
  'A 쪽 포트 → VLAN 10': 'A\'s port → VLAN 10', '목적지 MAC = 라우터 → 트렁크로, 꼬리표 10': 'Destination MAC = router → onto the trunk, tag 10',
  '꼬리표 10으로 받음 (VLAN 10)': 'Got it with tag 10 (VLAN 10)', '목적지 10.0.20.3 → VLAN 20 쪽': 'Destination 10.0.20.3 → the VLAN 20 side',
  '꼬리표 20을 붙여 같은 트렁크로 다시 보냄': 'Sends it back on the same trunk with tag 20', '목적지 MAC = C': 'Destination MAC = C', 'VLAN 20 포트로 받음': 'Got it on a VLAN 20 port', '출발지 IP 10.0.10.1': 'Source IP 10.0.10.1',
  '스위치 1  F 쪽 VLAN 20 · 트렁크 10만': 'Switch 1  F\'s port VLAN 20 · trunk 10 only', 'F 쪽 포트 → VLAN 20의 프레임': 'F\'s port → a VLAN 20 frame',
  'VLAN 20의 다른 포트: 트렁크 → 허용 목록에 20 없음': 'The other VLAN 20 port: the trunk → 20 is not on the allowed list', '→ 버림': '→ dropped',
  // Badges and moving labels
  '포트 1·2 = 10 · 3 = 20': 'Ports 1·2 = 10 · 3 = 20', 'ff ← A': 'ff ← A', '브로드캐스트 보냄': 'Broadcast sent', 'VLAN 10 포트로만': 'VLAN 10 ports only', 'ff → B 쪽': 'ff → toward B',
  'VLAN 10 · 받음': 'VLAN 10 · got it', 'VLAN 20 · 아무것도 안 옴': 'VLAN 20 · nothing arrives', '트렁크: 10, 20': 'Trunk: 10, 20', '트렁크: 10': 'Trunk: 10', 'VLAN 10 · 트렁크로': 'VLAN 10 · to the trunk',
  '꼬리표 10 + 프레임': 'Tag 10 + frame', '트렁크로 · 꼬리표 10 붙임': 'To the trunk · tag 10 added', '꼬리표 10 → D 쪽만': 'Tag 10 → toward D only', '꼬리표 뗀 프레임': 'Untagged frame',
  'C에게 보낼 것 있음': 'Has a packet for C', 'VLAN 10·20 게이트웨이': 'Gateway for VLAN 10·20', 'IP → 10.0.20.3': 'IP → 10.0.20.3', '게이트웨이로 보냄': 'Sent to the gateway', '라우터로 · 꼬리표 10': 'To the router · tag 10',
  '꼬리표 10': 'Tag 10', '꼬리표 10으로 받음': 'Got it with tag 10', '꼬리표 20': 'Tag 20', '꼬리표 10 → 20으로': 'Tag 10 → to 20', '꼬리표 20 → C 쪽': 'Tag 20 → toward C', 'VLAN 20 · 받음 · 출발지 10.0.10.1': 'VLAN 20 · got it · from 10.0.10.1',
  'VLAN 20': 'VLAN 20', 'ff ← F': 'ff ← F', '허용 10뿐 → 조용히 버림': 'Only 10 allowed → silently dropped', '라우터 (게이트웨이)': 'Router (gateway)', '스위치 → 라우터 (게이트웨이)': 'Switch → router (gateway)', '라우터 (게이트웨이) → 스위치': 'Router (gateway) → switch',
  // Step 1
  'VLAN 나누기': 'Splitting into VLANs',
  'VLAN이 다른 포트에는 브로드캐스트도 가지 않는다': 'Not even a broadcast reaches a port in another VLAN',
  '스위치 포트마다 VLAN 번호를 정해 두면 스위치 한 대가 서로 떨어진 LAN 여럿처럼 동작합니다. 포트 1과 2는 VLAN 10, 포트 3은 VLAN 20입니다. A가 ARP 요청 같은 브로드캐스트를 보내면 스위치는 같은 VLAN 10의 포트로만 퍼뜨립니다. 같은 스위치에 꽂혀 있어도 VLAN 20의 C에는 아무것도 가지 않습니다. 브로드캐스트가 닿는 범위(브로드캐스트 도메인)가 VLAN마다 나뉩니다.':
    'Give each switch port a VLAN number and one switch behaves like several separate LANs. Ports 1 and 2 are in VLAN 10, port 3 in VLAN 20. When A sends a broadcast such as an ARP request, the switch spreads it only to the ports of the same VLAN 10. Nothing reaches C in VLAN 20, even though it is plugged into the same switch. The reach of a broadcast (the broadcast domain) is split by VLAN.',
  'A의 브로드캐스트가 들어오자 스위치 이름표가 "VLAN 10 포트로만"이 됩니다. 아래 B 이름표는 "VLAN 10 · 받음", 오른쪽 분홍 C 이름표는 "VLAN 20 · 아무것도 안 옴"입니다.':
    'When A\'s broadcast comes in, the switch badge becomes "VLAN 10 ports only". B\'s badge below reads "VLAN 10 · got it", and the rose C\'s badge on the right "VLAN 20 · nothing arrives".',
  '가운데 스위치에 왼쪽 PC A(VLAN 10), 아래 PC B(VLAN 10), 오른쪽 PC C(VLAN 20)가 이어져 있습니다. A의 브로드캐스트가 VLAN 10인 B에게만 가고 VLAN 20인 C에는 가지 않습니다.':
    'A switch in the middle joins PC A (VLAN 10) on the left, PC B (VLAN 10) below and PC C (VLAN 20) on the right. A\'s broadcast reaches only B in VLAN 10 and not C in VLAN 20.',
  'A(VLAN 10) 브로드캐스트': 'A (VLAN 10) broadcasts', '스위치: VLAN 10 포트만': 'Switch: VLAN 10 ports only', 'B(VLAN 10) 받음': 'B (VLAN 10) gets it', 'C(VLAN 20)에는 안 감': 'Nothing to C (VLAN 20)',
  'A가 브로드캐스트를 보냅니다. 포트 1은 VLAN 10이므로 스위치는 이 프레임을 VLAN 10의 것으로 봅니다.': 'A sends a broadcast. Port 1 is in VLAN 10, so the switch treats the frame as a VLAN 10 frame.',
  '포트 1(VLAN 10)로 브로드캐스트가 들어왔습니다. 스위치는 어디로 보낼까요?': 'A broadcast came in on port 1 (VLAN 10). Where does the switch send it?',
  'B와 C 모두': 'Both B and C', 'VLAN 10인 B에게만': 'Only B, in VLAN 10', '아무 데도 보내지 않는다': 'Nowhere',
  '브로드캐스트도 같은 VLAN의 포트에만 퍼집니다. VLAN이 다르면 다른 LAN처럼 취급됩니다.': 'Even a broadcast spreads only to ports of the same VLAN. Different VLANs are treated as different LANs.',
  'VLAN 10인 B만 받습니다. VLAN 20인 C의 포트로는 나가지 않습니다.': 'Only B, in VLAN 10, gets it. Nothing goes out of the port of C, in VLAN 20.',
  // Step 2
  '트렁크와 꼬리표': 'Trunks and tags',
  '스위치 사이 트렁크에서는 프레임에 VLAN 꼬리표가 붙는다': 'On the trunk between switches, frames carry a VLAN tag',
  '스위치 두 대에 VLAN 10과 20이 모두 있으면, 둘 사이 케이블 하나로 두 VLAN의 프레임을 함께 실어야 합니다. 이 케이블을 트렁크라고 합니다. 스위치 1은 프레임을 트렁크로 내보낼 때 출발지 MAC 뒤에 4바이트 꼬리표(802.1Q)를 끼우고, 그 안에 VLAN 번호 10을 적습니다. 스위치 2는 꼬리표를 읽어 VLAN 10의 포트로만 보내고, PC로 나갈 때는 꼬리표를 뗍니다. PC는 꼬리표를 모릅니다.':
    'When both switches have VLAN 10 and VLAN 20, one cable between them must carry frames of both VLANs. This cable is called a trunk. When switch 1 sends a frame onto the trunk, it inserts a 4-byte tag (802.1Q) after the source MAC and writes the VLAN number 10 in it. Switch 2 reads the tag, sends the frame only to VLAN 10 ports, and removes the tag on the way out to a PC. The PCs never see the tag.',
  '스위치 1 이름표가 "트렁크로 · 꼬리표 10 붙임"이 되고, 굵은 트렁크를 지나 스위치 2 이름표가 "꼬리표 10 → D 쪽만"이 됩니다. 오른쪽 D 이름표는 "VLAN 10 · 받음", 아래 분홍 E 이름표는 "VLAN 20 · 아무것도 안 옴"입니다.':
    'Switch 1\'s badge becomes "to the trunk · tag 10 added", and across the thick trunk switch 2\'s badge becomes "tag 10 → toward D only". D\'s badge on the right reads "VLAN 10 · got it", and the rose E\'s badge below "VLAN 20 · nothing arrives".',
  '왼쪽부터 PC A(VLAN 10), 스위치 1, 스위치 2, PC D(VLAN 10)가 한 줄로, 스위치 2 아래에 PC E(VLAN 20)가 있습니다. 두 스위치 사이는 트렁크입니다. A의 브로드캐스트가 꼬리표 10을 달고 트렁크를 지나, 스위치 2가 VLAN 10인 D에게만 꼬리표를 떼고 보냅니다.':
    'From the left, PC A (VLAN 10), switch 1, switch 2 and PC D (VLAN 10) stand in a row, with PC E (VLAN 20) below switch 2. The two switches are joined by a trunk. A\'s broadcast crosses the trunk with tag 10, and switch 2 sends it, untagged, only to D in VLAN 10.',
  '스위치 1: 트렁크로 꼬리표 10 붙여 보냄': 'Switch 1: onto the trunk with tag 10', '스위치 2: 꼬리표 10 → D 쪽만, 떼고 보냄': 'Switch 2: tag 10 → toward D only, tag removed', 'E(VLAN 20)에는 안 감': 'Nothing to E (VLAN 20)',
  'A가 브로드캐스트를 보냅니다. 스위치 1에서 VLAN 10의 다른 포트는 트렁크뿐입니다.': 'A sends a broadcast. On switch 1, the only other VLAN 10 port is the trunk.',
  '스위치 1이 프레임에 꼬리표 10을 끼워 트렁크로 보냅니다.': 'Switch 1 inserts tag 10 into the frame and sends it onto the trunk.',
  '트렁크에는 VLAN 10과 20의 프레임이 함께 지나갑니다. 스위치 2는 이 프레임의 VLAN을 어떻게 알까요?': 'Frames of VLAN 10 and 20 share the trunk. How does switch 2 know this frame\'s VLAN?',
  '출발지 MAC으로 짐작한다': 'It guesses from the source MAC', '프레임에 붙은 꼬리표의 VLAN 번호를 읽는다': 'It reads the VLAN number in the frame\'s tag', '모든 VLAN으로 보낸다': 'It sends it to every VLAN',
  '트렁크로 나가는 프레임에는 802.1Q 꼬리표가 붙고, 그 안에 VLAN 번호가 적혀 있습니다.': 'A frame leaving on a trunk carries an 802.1Q tag with its VLAN number written inside.',
  '스위치 2가 꼬리표 10을 읽고, VLAN 10인 D의 포트로만 꼬리표를 떼고 보냅니다. VLAN 20인 E의 포트로는 나가지 않습니다.': 'Switch 2 reads tag 10 and sends the frame, tag removed, only out of D\'s VLAN 10 port. Nothing goes out of E\'s VLAN 20 port.',
  // Step 3
  'VLAN 사이는 라우터': 'A router between VLANs',
  'VLAN이 다르면 라우터를 거쳐야 이야기할 수 있다': 'Computers in different VLANs can talk only through a router',
  'VLAN 10과 20은 다른 LAN이므로 IP 주소도 다른 네트워크(10.0.10.0/24, 10.0.20.0/24)를 씁니다. A가 C에게 보내려면 1.4에서 본 것처럼 게이트웨이인 라우터에게 맡겨야 합니다. 라우터는 트렁크 하나로 스위치에 이어져, 꼬리표 10으로 들어온 패킷을 꼬리표 20을 붙여 같은 케이블로 돌려보냅니다. 스위치는 꼬리표 20을 보고 C에게 보냅니다.':
    'VLAN 10 and VLAN 20 are different LANs, so their IP addresses use different networks (10.0.10.0/24, 10.0.20.0/24). To send to C, A must hand the packet to the gateway router, as in 1.4. The router is joined to the switch by one trunk; it takes the packet that came in with tag 10 and sends it back on the same cable with tag 20. The switch sees tag 20 and sends it to C.',
  'A의 프레임이 꼬리표 10을 달고 아래 라우터로 가고, 라우터 이름표가 "꼬리표 10 → 20으로"가 됩니다. 꼬리표 20으로 돌아온 패킷을 스위치가 C 쪽으로 보내, 분홍 C 이름표가 "VLAN 20 · 받음 · 출발지 10.0.10.1"이 됩니다.':
    'A\'s frame goes down to the router with tag 10, and the router\'s badge becomes "tag 10 → to 20". The switch sends the packet that comes back with tag 20 toward C, and the rose C\'s badge becomes "VLAN 20 · got it · from 10.0.10.1".',
  '가운데 스위치에 왼쪽 PC A(VLAN 10, 10.0.10.1), 오른쪽 PC C(VLAN 20, 10.0.20.3), 아래 라우터가 트렁크로 이어져 있습니다. A의 패킷이 꼬리표 10으로 라우터에 가고, 라우터가 꼬리표 20으로 돌려보내 C가 받습니다.':
    'A switch in the middle joins PC A (VLAN 10, 10.0.10.1) on the left, PC C (VLAN 20, 10.0.20.3) on the right, and a router below over a trunk. A\'s packet reaches the router with tag 10, the router sends it back with tag 20, and C gets it.',
  'A → C (VLAN 10 → 20)': 'A → C (VLAN 10 → 20)', '게이트웨이 라우터로 · 꼬리표 10': 'To the gateway router · tag 10', '라우터: 꼬리표 20으로 다시 보냄': 'Router: sends it back with tag 20', '스위치: C 쪽 · C 받음': 'Switch: toward C · C gets it',
  'A가 목적지 MAC을 라우터로 해서 보냅니다. 스위치는 이 프레임을 VLAN 10의 것으로 봅니다.': 'A sends with the router as the destination MAC. The switch treats the frame as a VLAN 10 frame.',
  'A와 C는 같은 스위치에 꽂혀 있지만 VLAN이 다릅니다. A의 패킷은 어디를 거칠까요?': 'A and C are on the same switch but in different VLANs. What does A\'s packet pass through?',
  '스위치가 C에게 바로 보낸다': 'The switch sends it straight to C', '라우터를 거쳐 C에게 간다': 'It goes to C through the router', '갈 수 없다': 'It cannot get there',
  'VLAN이 다르면 다른 네트워크입니다. 네트워크 사이는 라우터가 잇습니다.': 'Different VLANs are different networks. A router joins networks.',
  '라우터가 꼬리표 10의 프레임을 받아 IP 목적지 10.0.20.3을 봅니다.': 'The router takes the tag-10 frame and reads the IP destination 10.0.20.3.',
  '라우터가 꼬리표 20을 붙여 같은 트렁크로 돌려보냅니다.': 'The router sends it back on the same trunk with tag 20.',
  '스위치가 꼬리표를 떼고 C에게 보냅니다.': 'The switch removes the tag and sends it to C.',
  // Step 4
  '트렁크에서 빠진 VLAN': 'A VLAN missing from the trunk',
  '트렁크가 허용하지 않은 VLAN의 프레임은 스위치에서 버려진다': 'Frames of a VLAN the trunk does not allow are dropped at the switch',
  '트렁크에는 지나가도 되는 VLAN 목록이 있습니다. 스위치 1에 VLAN 20의 F를 새로 꽂았는데 트렁크 허용 목록에 20을 넣지 않았다면, F의 프레임은 스위치 1에서 더 나가지 못하고 버려집니다. 오류 알림은 없습니다. 같은 VLAN 20의 E가 스위치 2에 있어도 둘은 서로를 볼 수 없습니다. 운영에서 자주 나는 실수이고, 트렁크 양쪽의 허용 목록을 맞춰야 고쳐집니다.':
    'A trunk has a list of VLANs allowed to cross it. If F in VLAN 20 is newly plugged into switch 1 but 20 was never added to the trunk\'s allowed list, F\'s frames go no further than switch 1 and are dropped. There is no error notice. Even though E, also in VLAN 20, is on switch 2, the two cannot see each other. It is a common mistake in operations, fixed by making the allowed lists on both ends of the trunk match.',
  'F의 프레임이 스위치 1에 닿자 스위치 1 이름표가 경고 색 "허용 10뿐 → 조용히 버림"이 됩니다. 트렁크 너머 분홍 E 이름표는 "VLAN 20 · 아무것도 안 옴"입니다.':
    'When F\'s frame reaches switch 1, switch 1\'s badge turns to the warning colour "only 10 allowed → silently dropped". Beyond the trunk, the rose E\'s badge reads "VLAN 20 · nothing arrives".',
  '2단계와 같은 배치에서 왼쪽 PC가 VLAN 20의 F입니다. 트렁크는 VLAN 10만 허용합니다. F의 브로드캐스트가 스위치 1에서 버려져 스위치 2와 E에 닿지 않습니다.':
    'In the same layout as step 2, the PC on the left is F in VLAN 20. The trunk allows only VLAN 10. F\'s broadcast is dropped at switch 1 and never reaches switch 2 or E.',
  'F(VLAN 20) 브로드캐스트': 'F (VLAN 20) broadcasts', '스위치 1: 트렁크 허용 목록 10뿐': 'Switch 1: trunk allowed list is 10 only', '버림 (알림 없음)': 'Dropped (no notice)', 'E(VLAN 20)에 안 감': 'Nothing to E (VLAN 20)',
  'F가 브로드캐스트를 보냅니다. 스위치 1은 VLAN 20을 트렁크로 내보낼 수 없어 버립니다.': 'F sends a broadcast. Switch 1 cannot send VLAN 20 onto the trunk, so it drops it.',
  '트렁크가 VLAN 10만 허용합니다. VLAN 20인 F의 프레임은 어떻게 될까요?': 'The trunk allows only VLAN 10. What happens to the frame from F, in VLAN 20?',
  '트렁크를 지나 E에게 간다': 'It crosses the trunk to E', '스위치 1에서 버려진다': 'It is dropped at switch 1', 'VLAN 10으로 바뀌어 D에게 간다': 'It becomes VLAN 10 and goes to D',
  '허용 목록에 없는 VLAN은 트렁크로 나가지 못합니다. 알림 없이 버려지므로 설정을 확인해야 찾을 수 있습니다.': 'A VLAN not on the allowed list cannot leave on the trunk. It is dropped without notice, so you find it only by checking the settings.',
};
