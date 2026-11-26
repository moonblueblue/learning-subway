// English for Networking 2.4 IPv6. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'IPv6 · 레슨 2.4': 'IPv6 · Lesson 2.4',
  '네트워크 2장 IP와 주소 · 레슨 2.4': 'Networking chapter 2 IP and addressing · Lesson 2.4',
  'IPv6 컴퓨터가 라우터 광고로 스스로 주소를 만들고, 겹치는지 확인하고, 멀티캐스트로 이웃의 MAC을 찾고, NAT 없이 인터넷과 오가는 길을 따라가 보세요.':
    'Follow an IPv6 computer making its own address from a router advertisement, checking that it is not taken, finding a neighbour\'s MAC by multicast, and talking to the internet without NAT.',
  'IPv6에서는 주소를 어디서 얻고, 이웃을 어떻게 찾으며, 왜 NAT가 필요 없을까요? 한 LAN의 컴퓨터와 라우터 사이로 패킷을 보내 보세요.':
    'Where does an IPv6 address come from, how are neighbours found, and why is NAT not needed? Send packets between computers and a router on one LAN.',
  'IPv6에서는 주소를 어디서 얻고 이웃을 어떻게 찾을까?': 'Where does an IPv6 address come from, and how are neighbours found?',
  'IPv6 LAN과 라우터': 'An IPv6 LAN and its router',
  'IPv6 컴퓨터가 라우터 광고의 접두사로 주소를 만들고, 이웃 요청을 멀티캐스트 무리에게만 보내고, 주소를 바꾸지 않는 공유기를 지나 인터넷과 오가는 장면':
    'IPv6 computers making addresses from the prefix in a router advertisement, sending neighbour solicitations only to a multicast group, and talking to the internet through a router that does not rewrite addresses',
  '케이블': 'Cable', '집 안': 'Home', '인터넷': 'Internet', '컴퓨터': 'Computer', '스위치': 'Switch', '라우터 · 공유기': 'Router', '서버': 'Server', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  'PC A · MAC aa': 'PC A · MAC aa', 'PC B · MAC bb': 'PC B · MAC bb', '라우터 · 2001:db8:0:1::1': 'Router · 2001:db8:0:1::1', 'PC A · ::a1': 'PC A · ::a1', 'PC B · ::b2': 'PC B · ::b2', 'PC C · ::c3': 'PC C · ::c3',
  'PC A · 2001:db8:0:1::a1': 'PC A · 2001:db8:0:1::a1', '공유기': 'Router', '서버 · 2001:db8:ffff::80': 'Server · 2001:db8:ffff::80',
  '라우터 · 2001:db8:0:1::1 → 스위치': 'Router · 2001:db8:0:1::1 → switch', '스위치 → PC B · MAC bb': 'Switch → PC B · MAC bb', '스위치 → PC A · MAC aa': 'Switch → PC A · MAC aa', 'PC A · MAC aa → 스위치': 'PC A · MAC aa → switch',
  'PC A · ::a1 → 스위치': 'PC A · ::a1 → switch', '스위치 → PC B · ::b2': 'Switch → PC B · ::b2', 'PC B · ::b2 → PC A · ::a1': 'PC B · ::b2 → PC A · ::a1',
  'PC A · 2001:db8:0:1::a1 → 공유기': 'PC A · 2001:db8:0:1::a1 → router', '공유기 → 서버 · 2001:db8:ffff::80': 'Router → server · 2001:db8:ffff::80',
  'PC A · MAC aa · 새 주소': 'PC A · MAC aa · new address', '스위치 · ::a1 쓰는 분?': 'Switch · anyone using ::a1?', 'PC B · ::b2 · ::b2는 bb': 'PC B · ::b2 · ::b2 is bb', '공유기 · 출발지 그대로': 'Router · source unchanged',
  // Work panel
  'PC A의 주소': 'PC A\'s address', '링크 로컬  fe80::a1  (같은 LAN 안에서만)': 'Link-local  fe80::a1  (this LAN only)', '전역 주소  아직 없음': 'Global address  none yet',
  '라우터 광고 (RA)': 'Router advertisement (RA)', '목적지  ff02::1 (이 LAN의 모든 노드)': 'Destination  ff02::1 (all nodes on this LAN)', '접두사  2001:db8:0:1::/64': 'Prefix  2001:db8:0:1::/64', '게이트웨이  나 (fe80::1)': 'Gateway  me (fe80::1)',
  'PC B': 'PC B', 'PC A': 'PC A', '2001:db8:0:1:: + ::b2 = 2001:db8:0:1::b2': '2001:db8:0:1:: + ::b2 = 2001:db8:0:1::b2', '2001:db8:0:1:: + ::a1 = 2001:db8:0:1::a1': '2001:db8:0:1:: + ::a1 = 2001:db8:0:1::a1',
  '링크 로컬  fe80::a1': 'Link-local  fe80::a1', '전역 주소  2001:db8:0:1::a1  (새로 만듦)': 'Global address  2001:db8:0:1::a1  (just made)',
  '2001:db8:0:1::a1  (아직 쓰지 않음 · 확인 전)': '2001:db8:0:1::a1  (not used yet · unchecked)', '이웃 요청 (중복 확인)': 'Neighbour solicitation (duplicate check)', '출발지  ::  (아직 주소 없음)': 'Source  ::  (no address yet)', '찾는 주소  2001:db8:0:1::a1': 'Target  2001:db8:0:1::a1',
  'PC B와 PC A': 'PC B and PC A', 'B: 내 주소 ::b2 ≠ ::a1 → 답 안 함': 'B: my address ::b2 ≠ ::a1 → no reply', 'A: 정해진 시간 동안 답 없음 → ::a1을 씀': 'A: no reply within the set time → uses ::a1',
  'PC A가 찾는 것': 'What PC A is looking for', '2001:db8:0:1::b2의 MAC': 'The MAC of 2001:db8:0:1::b2', '이웃 캐시에 없음': 'Not in the neighbour cache',
  '이웃 요청': 'Neighbour solicitation', '목적지  ff02::1:ff00:b2  (끝 24비트 00:00:b2의 무리)': 'Destination  ff02::1:ff00:b2  (the group for the last 24 bits 00:00:b2)', '찾는 주소  2001:db8:0:1::b2': 'Target  2001:db8:0:1::b2',
  'PC B와 PC C': 'PC B and PC C', 'B: ff02::1:ff00:b2 무리에 듦 → 받음': 'B: in the ff02::1:ff00:b2 group → takes it', 'C: 무리 ff02::1:ff00:c3 → 이 요청은 받지 않음': 'C: group ff02::1:ff00:c3 → does not get this request',
  '이웃 알림': 'Neighbour advertisement', '::b2의 MAC은 bb': 'The MAC of ::b2 is bb', 'A의 이웃 캐시: ::b2 → bb': 'A\'s neighbour cache: ::b2 → bb',
  'PC A가 보내는 패킷': 'The packet PC A sends', '출발지  2001:db8:0:1::a1': 'Source  2001:db8:0:1::a1', '목적지  2001:db8:ffff::80': 'Destination  2001:db8:ffff::80',
  '공유기가 넘긴 패킷': 'The packet after the router', '출발지  2001:db8:0:1::a1  (바뀌지 않음)': 'Source  2001:db8:0:1::a1  (unchanged)', '밖에서 먼저 오는 연결은 방화벽 규칙으로 막음': 'Connections that start from outside are blocked by firewall rules',
  // Badges and moving labels
  'fe80::a1만 있음': 'Only fe80::a1', 'fe80::b2만 있음': 'Only fe80::b2', 'RA': 'RA', 'RA: 2001:db8:0:1::/64': 'RA: 2001:db8:0:1::/64', 'ff02::1 → 모든 포트': 'ff02::1 → every port', '접두사 + ::b2': 'Prefix + ::b2',
  'RA 받음': 'Got the RA', '새 주소': 'New address', '접두사 + 스스로 정한 ::a1': 'Prefix + its own ::a1',
  '::a1 만듦 · 확인 전': '::a1 made · unchecked', '2001:db8:0:1::b2': '2001:db8:0:1::b2', '::a1 쓰는 분?': 'Anyone using ::a1?', '::a1 쓰는 분? 기다림': 'Anyone using ::a1? waiting', '::a1 무리에게': 'To the ::a1 group',
  '::a1 쓰는 분? → 답 없음 → 씀': 'Using ::a1? → no reply → take it', 'PC A · MAC aa · ::a1 쓰는 분?': 'PC A · MAC aa · anyone using ::a1?', '::a1 무리에게만 · 아무도 없음': 'Only to the ::a1 group · nobody there', '::a1 무리 아님 → 안 받음': 'Not in ::a1 group → skips it', '목적지  ff02::1:ff00:a1  (끝이 a1인 무리)': 'Destination  ff02::1:ff00:a1  (the group ending in a1)', '정해진 시간 동안 답 없음 → ::a1을 씀': 'No reply within the set time → uses ::a1', '목적지 ::a1의 무리': 'Destination: the ::a1 group', '아무도 없음 · 답 없음': 'Nobody there · no reply',
  '::b2의 MAC 모름': 'Does not know ::b2\'s MAC', '::b2의 MAC?': 'MAC of ::b2?', '::b2의 MAC? → 무리에게': 'MAC of ::b2? → to the group', 'ff02::1:ff00:b2 무리에게만': 'Only to the ff02::1:ff00:b2 group', '무리에게': 'To the group',
  '무리에 듦 → MAC bb 답함': 'In the group → replies MAC bb', '무리 아님 → 안 받음': 'Not in the group → does not get it', '::b2는 bb': '::b2 is bb', '::b2 → bb': '::b2 → bb',
  '출발지 2001:db8:0:1::a1': 'Source 2001:db8:0:1::a1', '출발지 ::a1 (내 주소)': 'Source ::a1 (my own)', '→ 서버': '→ server', '출발지 그대로': 'Source unchanged', '주소 그대로 · 밖에서 먼저 오면 막음': 'Address unchanged · blocks what starts outside', '보낸 이 = A의 주소 그대로': 'From = A\'s own address',
  // Step 1
  '스스로 주소 만들기': 'Making its own address',
  '라우터가 알려 준 접두사에 자기 뒷부분을 붙여 주소를 만든다': 'A computer makes its address by adding its own last part to the prefix the router announces',
  'IPv6 컴퓨터는 켜지자마자 fe80::로 시작하는 링크 로컬 주소를 스스로 정합니다. 이 주소로는 같은 LAN 안에서만 이야기할 수 있습니다. 라우터는 주기적으로 라우터 광고(RA)를 보내 이 네트워크의 접두사 2001:db8:0:1::/64를 알립니다. A는 그 앞 64비트에 자기가 정한 뒤 64비트(여기서는 ::a1)를 붙여 전역 주소 2001:db8:0:1::a1을 만듭니다. DHCP 서버 없이도 주소가 생깁니다(SLAAC).':
    'As soon as it starts, an IPv6 computer gives itself a link-local address beginning with fe80::, which works only within the same LAN. The router regularly sends a router advertisement (RA) announcing this network\'s prefix, 2001:db8:0:1::/64. A adds a last 64 bits of its own choosing (here ::a1) to those first 64 bits and makes the global address 2001:db8:0:1::a1. An address appears without any DHCP server (SLAAC).',
  '라우터 이름표가 "RA: 2001:db8:0:1::/64"가 되고, 광고가 스위치를 거쳐 A와 B에게 퍼집니다. A 이름표는 "접두사 + 스스로 정한 ::a1", B 이름표는 "접두사 + ::b2"가 됩니다.':
    'The router\'s badge becomes "RA: 2001:db8:0:1::/64", and the advertisement spreads through the switch to A and B. A\'s badge becomes "prefix + its own ::a1" and B\'s "prefix + ::b2".',
  '가운데 스위치에 왼쪽 PC A, 오른쪽 PC B, 아래 라우터(2001:db8:0:1::1)가 이어져 있습니다. 라우터가 접두사 2001:db8:0:1::/64를 광고하고, A와 B가 그 뒤에 자기 뒷부분을 붙여 주소를 만듭니다.':
    'A switch in the middle joins PC A on the left, PC B on the right and a router (2001:db8:0:1::1) below. The router advertises the prefix 2001:db8:0:1::/64, and A and B each add their own last part to make an address.',
  '라우터 광고(RA): 2001:db8:0:1::/64': 'Router advertisement (RA): 2001:db8:0:1::/64', 'A: 접두사 + ::a1': 'A: prefix + ::a1', ' = ': ' = ', '2001:db8:0:1::a1': '2001:db8:0:1::a1', 'B: 접두사 + ::b2': 'B: prefix + ::b2',
  '라우터가 이 네트워크의 접두사를 광고합니다.': 'The router advertises this network\'s prefix.',
  'B가 광고를 받아 접두사에 자기 뒷부분 ::b2를 붙입니다.': 'B gets the advertisement and adds its own last part ::b2 to the prefix.',
  'A가 광고를 받습니다.': 'A gets the advertisement.',
  'A는 접두사 2001:db8:0:1::/64를 받았습니다. A의 전역 주소는 어떻게 생길까요?': 'A received the prefix 2001:db8:0:1::/64. How does A get its global address?',
  'DHCP 서버에게 물어야 한다': 'It must ask a DHCP server', '접두사에 자기가 정한 뒤 64비트를 붙인다': 'It adds a last 64 bits of its own to the prefix', '라우터의 주소를 그대로 쓴다': 'It uses the router\'s address as it is',
  '앞 64비트는 네트워크, 뒤 64비트는 컴퓨터 몫입니다. 뒷부분은 컴퓨터가 스스로 정합니다.': 'The first 64 bits belong to the network, the last 64 to the computer. The computer chooses its last part itself.',
  'A가 접두사에 ::a1을 붙여 전역 주소를 만듭니다.': 'A adds ::a1 to the prefix and makes its global address.',
  // Step 2
  '겹치는지 먼저 묻기': 'Asking whether it is taken',
  '새 주소는 같은 주소를 쓰는 이웃이 없는지 확인한 뒤에 쓴다': 'A new address is used only after checking that no neighbour has it',
  '뒷부분을 스스로 정하니, 드물게 이웃과 같은 주소가 나올 수 있습니다. 그래서 A는 2001:db8:0:1::a1을 쓰기 전에 "이 주소 쓰는 분 있나요?"라는 이웃 요청을 보냅니다. 출발지는 아직 비워 둡니다(::). 정해진 시간 동안 답이 없으면 아무도 쓰지 않는 것이므로 그때부터 씁니다. 답이 오면 그 주소를 버리고 다른 뒷부분을 고릅니다(중복 주소 검출, DAD).':
    'Since each computer chooses its own last part, it may rarely pick a neighbour\'s address. So before using 2001:db8:0:1::a1, A sends a neighbour solicitation asking "is anyone using this address?", leaving its source empty (::). If no reply comes within a set time, nobody is using it, and A starts using it. If a reply comes, A drops that address and chooses another last part (duplicate address detection, DAD).',
  'A 이름표가 "::a1 쓰는 분? → 답 없음 → 씀"이 되고, 스위치 이름표는 "::a1 무리에게만 · 아무도 없음", B 이름표는 "::a1 무리 아님 → 안 받음"입니다.':
    'A\'s badge becomes "using ::a1? → no reply → take it"; the switch\'s reads "only to the ::a1 group · nobody there" and B\'s "not in ::a1 group → skips it".',
  '같은 배치에서 A가 새 주소 2001:db8:0:1::a1을 쓰기 전에 그 주소의 무리 ff02::1:ff00:a1에게 묻습니다. B는 그 무리가 아니라 받지 않고, 답이 없어 A가 그 주소를 씁니다.':
    'In the same layout, before using its new address 2001:db8:0:1::a1, A asks that address\'s group ff02::1:ff00:a1. B is not in the group and does not get it; with no reply, A uses the address.',
  'A: "::a1 쓰는 분?" (출발지 ::)': 'A: "anyone using ::a1?" (source ::)', 'A가 ::a1을 씀': 'A uses ::a1',
  'A가 새 주소의 무리에게 "이 주소 쓰는 분?"을 묻습니다. 그 무리에는 아무도 없어 답이 없고, A가 그 주소를 씁니다.': 'A asks its new address\'s group "is anyone using this address?". Nobody is in that group, no reply comes, and A uses the address.',
  'A가 "::a1 쓰는 분?"을 보냈는데 아무도 답하지 않습니다. A는 어떻게 할까요?': 'A sent "anyone using ::a1?" and nobody answers. What does A do?',
  '그 주소를 쓴다': 'Uses that address', '다른 주소를 고른다': 'Chooses another address', 'DHCP 서버를 찾는다': 'Looks for a DHCP server',
  '답이 없으면 아무도 그 주소를 쓰지 않는다는 뜻입니다. 답이 왔다면 다른 뒷부분을 골랐을 것입니다.': 'No reply means nobody uses that address. Had a reply come, A would have chosen another last part.',
  'B는 자기 주소가 아니라 답하지 않습니다. 답이 없으니 A가 그 주소를 씁니다.': 'B does not reply, since it is not its address. With no reply, A uses the address.',
  // Step 3
  'ARP 대신 이웃 요청': 'Neighbour solicitation instead of ARP',
  'MAC을 물을 때 모두가 아니라 그 주소 끝이 같은 무리에게만 묻는다': 'When asking for a MAC, ask only the group whose addresses end the same way, not everyone',
  'IPv4의 ARP는 모두에게(브로드캐스트) 물었습니다. IPv6에는 브로드캐스트가 없습니다. A가 B(2001:db8:0:1::b2)의 MAC을 알고 싶으면, B 주소의 끝 24비트(00:00:b2)로 정해지는 요청 노드 멀티캐스트 주소 ff02::1:ff00:b2로 이웃 요청을 보냅니다. 이 무리에는 주소 끝이 같은 컴퓨터만 들어 있어서, 주소 끝이 다른 C의 랜카드는 처음부터 받지 않습니다. B가 자기 MAC bb로 답합니다.':
    'IPv4\'s ARP asked everyone (broadcast). IPv6 has no broadcast. When A wants the MAC of B (2001:db8:0:1::b2), it sends a neighbour solicitation to the solicited-node multicast address ff02::1:ff00:b2, set by the last 24 bits of B\'s address (00:00:b2). Only computers whose addresses end that way are in this group, so C\'s network card, whose address ends differently, never takes it. B replies with its MAC bb.',
  '스위치 이름표가 "ff02::1:ff00:b2 무리에게만"이 되고, 오른쪽 B 이름표는 "무리에 듦 → MAC bb 답함", 아래 C 이름표는 "무리 아님 → 안 받음"입니다. A 이름표에는 "::b2 → bb"가 남습니다.':
    'The switch\'s badge becomes "only to the ff02::1:ff00:b2 group"; B\'s badge on the right reads "in the group → replies MAC bb" and C\'s below "not in the group → does not get it". "::b2 → bb" stays on A\'s badge.',
  '가운데 스위치에 왼쪽 PC A, 오른쪽 PC B(::b2), 아래 PC C(::c3)가 이어져 있습니다. A가 B의 MAC을 요청 노드 멀티캐스트 ff02::1:ff00:b2로 묻고, 그 무리에 든 B만 받아 답합니다. C는 받지 않습니다.':
    'A switch in the middle joins PC A on the left, PC B (::b2) on the right and PC C (::c3) below. A asks for B\'s MAC at the solicited-node multicast address ff02::1:ff00:b2; only B, which is in that group, takes it and replies. C does not get it.',
  'A: B(::b2)의 MAC?': 'A: MAC of B (::b2)?', '목적지 ff02::1:ff00:b2 (끝이 b2인 무리)': 'Destination ff02::1:ff00:b2 (the group ending in b2)', 'B만 받음 · C 안 받음': 'Only B gets it · not C', 'B: MAC bb': 'B: MAC bb',
  'A가 B의 주소 끝으로 정해지는 무리에게만 이웃 요청을 보냅니다.': 'A sends the neighbour solicitation only to the group set by the end of B\'s address.',
  'IPv6에는 브로드캐스트가 없습니다. A의 이웃 요청은 누가 받을까요?': 'IPv6 has no broadcast. Who gets A\'s neighbour solicitation?',
  '같은 LAN 모두': 'Everyone on the LAN', '주소 끝이 b2인 무리(B)만': 'Only the group ending in b2 (B)', '라우터만': 'Only the router',
  '요청 노드 멀티캐스트 주소는 찾는 주소의 끝 24비트로 정해집니다. 그 무리에 든 컴퓨터만 받습니다.': 'The solicited-node multicast address is set by the last 24 bits of the target address. Only computers in that group get it.',
  'B만 받습니다. C는 다른 무리라서 받지 않습니다.': 'Only B gets it. C is in a different group and does not.',
  'B가 자기 MAC bb를 A에게 알려 줍니다.': 'B tells A its MAC, bb.',
  // Step 4
  'NAT 없이 바로': 'Straight through, without NAT',
  '주소가 넉넉해 공유기가 주소를 바꾸지 않고, 대신 방화벽이 지킨다': 'With plenty of addresses, the router does not rewrite them; a firewall protects instead',
  'IPv6 주소는 2의 128제곱 개라서, 집 안 컴퓨터마다 전 세계에서 하나뿐인 주소를 줄 수 있습니다. 그래서 공유기는 2.3의 NAT처럼 출발지를 바꾸지 않고 그대로 넘깁니다. 서버는 A의 주소 2001:db8:0:1::a1을 그대로 봅니다. 주소를 바꾸지 않으니 변환 표로 막아 주던 효과도 없어서, 공유기는 밖에서 먼저 오는 연결을 방화벽 규칙으로 막습니다(6장).':
    'There are 2 to the power of 128 IPv6 addresses, enough to give every computer at home an address unique in the world. So the router does not rewrite the source as the NAT of 2.3 did; it passes the packet on as it is. The server sees A\'s address 2001:db8:0:1::a1 unchanged. With no rewriting there is also none of the blocking a translation table gave, so the router blocks connections that start from outside with firewall rules (chapter 6).',
  'A의 패킷이 경계의 공유기를 지나도 출발지가 그대로라, 공유기 이름표가 "주소 그대로 · 밖에서 먼저 오면 막음"이 됩니다. 인터넷 쪽 서버 이름표는 "보낸 이 = A의 주소 그대로"입니다.':
    'A\'s packet passes the router on the border with its source unchanged, so the router\'s badge becomes "address unchanged · blocks what starts outside". The server\'s badge on the internet side reads "from = A\'s own address".',
  '바닥 왼쪽은 집 안, 오른쪽은 인터넷입니다. A(2001:db8:0:1::a1)가 서버(2001:db8:ffff::80)에게 보냅니다. 공유기는 주소를 바꾸지 않고 넘기며, 서버가 A의 주소를 그대로 봅니다.':
    'The left of the floor is home, the right the internet. A (2001:db8:0:1::a1) sends to a server (2001:db8:ffff::80). The router passes it on without rewriting the address, and the server sees A\'s address as it is.',
  'A: 출발지 2001:db8:0:1::a1': 'A: source 2001:db8:0:1::a1', '공유기: 주소 그대로 (NAT 없음)': 'Router: address unchanged (no NAT)', '서버: 보낸 이 2001:db8:0:1::a1': 'Server: from 2001:db8:0:1::a1', '밖에서 먼저 오는 것은 방화벽이 막음': 'The firewall blocks what starts from outside',
  'A가 서버에게 보냅니다.': 'A sends to the server.',
  'IPv6에서 공유기는 A의 출발지 주소를 바꿀까요?': 'With IPv6, does the router rewrite A\'s source address?',
  '2.3처럼 공유기 주소로 바꾼다': 'It rewrites it to the router\'s address, as in 2.3', '바꾸지 않고 그대로 넘긴다': 'It passes it on unchanged',
  'A의 주소가 이미 전 세계에서 하나뿐이라 바꿀 필요가 없습니다.': 'A\'s address is already unique in the world, so there is no need to rewrite it.',
  '공유기가 주소를 바꾸지 않고 넘깁니다. 서버가 A의 주소를 그대로 봅니다.': 'The router passes it on without rewriting the address. The server sees A\'s address as it is.',
};
