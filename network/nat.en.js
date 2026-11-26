// English for Networking 2.3 NAT. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'NAT · 레슨 2.3': 'NAT · Lesson 2.3',
  '네트워크 2장 IP와 주소 · 레슨 2.3': 'Networking chapter 2 IP and addressing · Lesson 2.3',
  '공유기가 나가는 패킷의 출발지를 공인 주소와 새 포트로 바꾸고 표에 적는 모습, 돌아온 답을 되돌리는 모습, 같은 포트를 쓴 두 컴퓨터를 가르는 모습, 밖에서 먼저 온 패킷을 버리는 모습을 따라가 보세요.':
    'Follow a home router rewriting the source of outgoing packets to its public address and a new port and noting it in a table, translating replies back, telling apart two computers that used the same port, and dropping packets that arrive from outside first.',
  '집 안 컴퓨터 여러 대가 공인 주소 하나로 어떻게 인터넷을 쓸까요? 공유기를 사이에 두고 집 안과 인터넷 사이로 패킷을 보내 보세요.':
    'How do several computers at home use the internet with a single public address? Send packets between the home network and the internet, with the router in between.',
  '집 안 컴퓨터 여러 대가 공인 주소 하나로 어떻게 인터넷을 쓸까?': 'How do several computers at home use the internet with a single public address?',
  '집 안, 공유기, 인터넷': 'Home, router, internet',
  '집 안과 인터넷의 경계에 선 공유기가 나가는 패킷의 출발지를 공인 주소와 포트로 바꾸고 변환 표로 답을 되돌리는 장면':
    'A home router on the border between the home network and the internet rewriting the source of outgoing packets to a public address and port, and translating replies back with its table',
  '케이블': 'Cable', '집 안 · 사설 주소': 'Home · private addresses', '인터넷 · 공인 주소': 'Internet · public addresses', '컴퓨터': 'Computer', '공유기': 'Router', '서버': 'Server', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  'PC A · 192.168.0.10': 'PC A · 192.168.0.10', 'PC B · 192.168.0.20': 'PC B · 192.168.0.20', '공유기 · 203.0.113.7': 'Router · 203.0.113.7', '웹 서버 · 93.184.216.34': 'Web server · 93.184.216.34', '낯선 컴퓨터 · 198.51.100.66': 'Stranger · 198.51.100.66',
  'PC A · 192.168.0.10 → 공유기 · 203.0.113.7': 'PC A · 192.168.0.10 → router · 203.0.113.7', '공유기 · 203.0.113.7 → 웹 서버 · 93.184.216.34': 'Router · 203.0.113.7 → web server · 93.184.216.34',
  '웹 서버 · 93.184.216.34 → 공유기 · 203.0.113.7': 'Web server · 93.184.216.34 → router · 203.0.113.7', '공유기 · 203.0.113.7 → PC A · 192.168.0.10': 'Router · 203.0.113.7 → PC A · 192.168.0.10',
  'PC B · 192.168.0.20 → 공유기 · 203.0.113.7': 'PC B · 192.168.0.20 → router · 203.0.113.7', '낯선 컴퓨터 · 198.51.100.66 → 공유기 · 203.0.113.7': 'Stranger · 198.51.100.66 → router · 203.0.113.7',
  '공유기 · 203.0.113.7 · .7:40001 → 서버': 'Router · 203.0.113.7 · .7:40001 → server', '공유기 · 203.0.113.7 · 답 → .10:51000': 'Router · 203.0.113.7 · reply → .10:51000',
  '공유기 · 203.0.113.7 · .7:40002 → 서버': 'Router · 203.0.113.7 · .7:40002 → server', '낯선 컴퓨터 · 198.51.100.66 · → .7:22': 'Stranger · 198.51.100.66 · → .7:22',
  // Work panel
  'PC A가 보내는 패킷': 'The packet PC A sends', 'PC B가 보내는 패킷': 'The packet PC B sends', '공유기가 바꾼 패킷': 'The packet after the router', '공유기의 변환 표': 'The router\'s translation table', '서버가 보낸 답': 'The server\'s reply', '공유기가 되돌린 답': 'The reply after the router',
  '출발지  192.168.0.10:51000': 'Source  192.168.0.10:51000', '목적지  93.184.216.34:443': 'Destination  93.184.216.34:443', '출발지  192.168.0.10:51000  (사설)': 'Source  192.168.0.10:51000  (private)',
  '출발지  203.0.113.7:40001  (공인 · 바뀜)': 'Source  203.0.113.7:40001  (public · rewritten)', '표에 적음: 40001 ↔ 192.168.0.10:51000': 'Noted in the table: 40001 ↔ 192.168.0.10:51000',
  '40001 ↔ 192.168.0.10:51000': '40001 ↔ 192.168.0.10:51000', '40002 ↔ 192.168.0.20:51000': '40002 ↔ 192.168.0.20:51000', '출발지  93.184.216.34:443': 'Source  93.184.216.34:443', '목적지  203.0.113.7:40001': 'Destination  203.0.113.7:40001',
  '표: 40001 → 192.168.0.10:51000': 'Table: 40001 → 192.168.0.10:51000', '목적지  192.168.0.10:51000  (바뀜)': 'Destination  192.168.0.10:51000  (rewritten)',
  '출발지  192.168.0.20:51000': 'Source  192.168.0.20:51000', '출발지  203.0.113.7:40002  (40001은 이미 씀)': 'Source  203.0.113.7:40002  (40001 already taken)', '표에 적음: 40002 ↔ 192.168.0.20:51000': 'Noted in the table: 40002 ↔ 192.168.0.20:51000',
  '목적지  203.0.113.7:22': 'Destination  203.0.113.7:22', '표에 22 없음 → 누구 것인지 모름 → 버림': 'No 22 in the table → owner unknown → dropped',
  // Badges and moving labels
  '표 비어 있음': 'Table empty', '.10:51000 → 서버': '.10:51000 → server', '출발지 .10:51000': 'Source .10:51000', '.7:40001 → 서버': '.7:40001 → server', '표: 40001 ↔ .10:51000': 'Table: 40001 ↔ .10:51000', '보낸 이: 203.0.113.7:40001': 'From: 203.0.113.7:40001',
  '답 → .7:40001': 'Reply → .7:40001', '받는 이 .7:40001': 'To .7:40001', '답 → .10:51000': 'Reply → .10:51000', '40001 → .10:51000으로': '40001 → to .10:51000', '답 받음 · 받는 이 .10:51000': 'Got the reply · to .10:51000',
  '.20:51000 → 서버': '.20:51000 → server', '출발지 .20:51000 · A와 같은 포트': 'Source .20:51000 · same port as A', '.7:40002 → 서버': '.7:40002 → server', '40001은 A 것 → B는 40002': '40001 is A\'s → B gets 40002', '보낸 이 .7:40002': 'From .7:40002',
  '표: 40001 · 40002': 'Table: 40001 · 40002', '→ .7:22': '→ .7:22', '먼저 접속 시도 · :22': 'Tries first · :22', '22는 표에 없음 → 버림': '22 not in the table → dropped', '아무것도 안 옴': 'Nothing arrives',
  // Step 1
  '나갈 때 바꾸기': 'Rewriting on the way out',
  '공유기는 나가는 패킷의 출발지를 공인 주소와 새 포트로 바꾸고 적어 둔다': 'The router rewrites an outgoing packet\'s source to its public address and a new port, and notes it',
  'A의 주소 192.168.0.10은 사설 주소라서 인터넷에서는 아무도 그 주소로 답을 보낼 수 없습니다. 그래서 공유기는 A의 패킷이 나갈 때 출발지 192.168.0.10:51000을 자기 공인 주소와 새 포트 203.0.113.7:40001로 바꿉니다. 그리고 변환 표에 "40001은 192.168.0.10:51000"이라고 적어 둡니다. 웹 서버는 203.0.113.7에서 온 패킷으로만 봅니다.':
    'A\'s address 192.168.0.10 is private, so nobody on the internet can send a reply to it. So when A\'s packet leaves, the router rewrites the source 192.168.0.10:51000 to its own public address and a new port, 203.0.113.7:40001, and notes in its translation table that "40001 is 192.168.0.10:51000". The web server sees only a packet from 203.0.113.7.',
  'A 이름표가 "출발지 .10:51000"이고, 경계의 공유기 이름표가 "표: 40001 ↔ .10:51000"이 됩니다. 오른쪽 인터넷의 서버 이름표는 "보낸 이: 203.0.113.7:40001"입니다.':
    'A\'s badge reads "source .10:51000", and the router on the border gets "table: 40001 ↔ .10:51000". The server\'s badge on the internet side reads "from: 203.0.113.7:40001".',
  '바닥 왼쪽은 집 안(사설 주소), 오른쪽은 인터넷(공인 주소)입니다. 경계에 공유기(203.0.113.7), 왼쪽에 PC A(192.168.0.10), 아래에 PC B, 오른쪽에 웹 서버(93.184.216.34)가 있습니다. A의 패킷 출발지가 공유기에서 203.0.113.7:40001로 바뀌고, 공유기 표에 한 줄이 적힙니다.':
    'The left of the floor is the home network (private addresses), the right is the internet (public addresses). On the border is the router (203.0.113.7), with PC A (192.168.0.10) on the left, PC B below and a web server (93.184.216.34) on the right. At the router, A\'s packet source becomes 203.0.113.7:40001, and a line is written in the router\'s table.',
  'A: 출발지 192.168.0.10:51000': 'A: source 192.168.0.10:51000', '공유기: 203.0.113.7:40001로 바꿈': 'Router: rewrites to 203.0.113.7:40001', '표에 40001 ↔ .10:51000': 'Table: 40001 ↔ .10:51000',
  'A가 웹 서버에게 보냅니다. 출발지는 사설 주소입니다.': 'A sends to the web server. The source is a private address.',
  '출발지가 사설 주소 192.168.0.10인 채로 인터넷에 나가면 어떻게 될까요?': 'What happens if the packet goes out to the internet with the private source 192.168.0.10?',
  '서버가 그 주소로 답을 잘 보낸다': 'The server replies to that address without trouble', '인터넷에서 그 주소로 가는 길이 없어 답이 돌아오지 못한다': 'There is no route to that address on the internet, so the reply cannot come back', '아무 문제 없다': 'No problem at all',
  '사설 주소는 집집마다 같은 것을 씁니다. 인터넷의 라우터들은 그 주소로 가는 길을 갖지 않습니다.': 'Every home uses the same private addresses. Routers on the internet have no route to them.',
  '공유기가 출발지를 203.0.113.7:40001로 바꾸고 표에 적은 뒤 내보냅니다.': 'The router rewrites the source to 203.0.113.7:40001, notes it in the table and sends it out.',
  // Step 2
  '돌아올 때 되돌리기': 'Translating back on the way in',
  '돌아온 답은 변환 표를 보고 원래 컴퓨터의 주소로 되돌린다': 'A returning reply is translated back to the original computer using the table',
  '웹 서버는 자기가 본 출발지 203.0.113.7:40001로 답을 보냅니다. 공유기는 목적지 포트 40001을 변환 표에서 찾아 "192.168.0.10:51000"을 얻고, 목적지를 그것으로 바꿔 집 안으로 들여보냅니다. A는 자기가 보낸 그 주소와 포트로 답을 받습니다. A도 서버도 중간에서 주소가 바뀐 것을 모릅니다.':
    'The web server replies to the source it saw, 203.0.113.7:40001. The router looks up destination port 40001 in its table, gets "192.168.0.10:51000", rewrites the destination to it and lets the reply into the home network. A gets the reply at the very address and port it sent from. Neither A nor the server knows the address was changed in between.',
  '서버 이름표가 "받는 이 .7:40001"이고, 공유기 이름표가 "40001 → .10:51000으로"가 됩니다. A 이름표는 "답 받음 · 받는 이 .10:51000"입니다.':
    'The server\'s badge reads "to .7:40001", and the router\'s becomes "40001 → to .10:51000". A\'s badge reads "got the reply · to .10:51000".',
  '같은 배치에서 웹 서버가 203.0.113.7:40001로 답합니다. 공유기가 표의 40001 줄을 보고 목적지를 192.168.0.10:51000으로 바꿔, A가 답을 받습니다.':
    'In the same layout, the web server replies to 203.0.113.7:40001. The router reads the 40001 line of its table and rewrites the destination to 192.168.0.10:51000, and A gets the reply.',
  '서버 → 203.0.113.7:40001': 'Server → 203.0.113.7:40001', '공유기: 표에서 40001 = .10:51000': 'Router: table says 40001 = .10:51000', '목적지를 192.168.0.10:51000으로': 'Destination rewritten to 192.168.0.10:51000', 'A 받음': 'A gets it',
  '서버가 자기가 본 출발지 203.0.113.7:40001로 답합니다.': 'The server replies to the source it saw, 203.0.113.7:40001.',
  '답의 목적지는 203.0.113.7:40001입니다. 공유기는 이 답을 누구에게 줄까요?': 'The reply\'s destination is 203.0.113.7:40001. Who does the router give it to?',
  '집 안 모두에게': 'Everyone at home', '표에서 40001을 찾아 A에게': 'To A, after finding 40001 in the table', '버린다': 'Drops it',
  '나갈 때 적어 둔 표에 40001은 192.168.0.10:51000이라고 적혀 있습니다.': 'The table written on the way out says 40001 is 192.168.0.10:51000.',
  '공유기가 표에서 찾은 주소로 목적지를 바꿔 A에게 보냅니다.': 'The router rewrites the destination to the address it found in the table and sends it to A.',
  // Step 3
  '같은 포트를 쓴 둘': 'Two using the same port',
  '같은 포트를 쓴 두 컴퓨터는 바깥 포트를 달리 받아 구별된다': 'Two computers using the same port get different outside ports and are told apart',
  '집 안의 B도 같은 웹 서버에 접속하는데, 우연히 출발지 포트가 A와 같은 51000입니다. 두 패킷을 모두 203.0.113.7:40001로 바꾸면 돌아온 답이 누구 것인지 알 수 없습니다. 그래서 공유기는 40001이 이미 쓰인 것을 보고 B에게는 40002를 줍니다. 표에 두 줄이 생기고, 서버는 포트로 두 연결을 다르게 봅니다. 공인 주소 하나로 수천 개의 연결을 나눌 수 있는 이유입니다.':
    'B at home also connects to the same web server, and by chance uses the same source port as A, 51000. If both packets became 203.0.113.7:40001, nobody could tell whose reply was whose. So the router sees that 40001 is taken and gives B 40002. The table now has two lines, and the server sees the two connections apart by port. This is how one public address can carry thousands of connections.',
  'B 이름표가 "출발지 .20:51000 · A와 같은 포트"이고, 공유기 이름표가 "40001은 A 것 → B는 40002"가 됩니다. 서버 이름표는 "보낸 이 .7:40002"입니다.':
    'B\'s badge reads "source .20:51000 · same port as A", and the router\'s becomes "40001 is A\'s → B gets 40002". The server\'s badge reads "from .7:40002".',
  '같은 배치에서 PC B(192.168.0.20)가 출발지 포트 51000으로 같은 서버에게 보냅니다. 공유기 표에 A의 40001이 이미 있어, B에게는 40002를 주고 표에 두 번째 줄을 적습니다.':
    'In the same layout, PC B (192.168.0.20) sends to the same server from source port 51000. A\'s 40001 is already in the router\'s table, so B gets 40002 and a second line is written.',
  'B: .20:51000 (A와 같은 포트)': 'B: .20:51000 (same port as A)', '40001은 이미 A 것': '40001 already belongs to A', 'B에게 40002': '40002 for B', '서버는 둘을 포트로 가름': 'The server tells them apart by port',
  'B가 같은 서버에게 보냅니다. 출발지 포트가 A와 같은 51000입니다.': 'B sends to the same server. Its source port is 51000, the same as A\'s.',
  '40001은 이미 A에게 쓰였습니다. B의 패킷은 바깥에서 어떤 포트가 될까요?': '40001 is already used for A. Which outside port does B\'s packet get?',
  'A와 같은 40001': 'The same 40001 as A', '다른 포트 40002': 'A different port, 40002', '51000 그대로': '51000 as it is',
  '같은 바깥 포트를 두 컴퓨터에 주면 답이 누구 것인지 가를 수 없습니다. 공유기는 비어 있는 다른 포트를 줍니다.': 'Giving two computers the same outside port would make replies impossible to tell apart. The router hands out another free port.',
  '공유기가 B에게 40002를 주고 표에 두 번째 줄을 적습니다.': 'The router gives B 40002 and writes a second line in the table.',
  // Step 4
  '밖에서 먼저 오면': 'When the outside starts first',
  '표에 없는 포트로 밖에서 먼저 온 패킷은 버려진다': 'A packet that starts from outside, to a port not in the table, is dropped',
  '인터넷의 낯선 컴퓨터가 203.0.113.7의 22번 포트(SSH)로 먼저 접속을 시도합니다. 공유기 표에는 안에서 먼저 나간 연결만 적혀 있고 22는 없습니다. 어느 집 안 컴퓨터의 것인지 알 수 없으니 공유기는 패킷을 버립니다. 그래서 NAT 뒤의 컴퓨터는 밖에서 먼저 접속할 수 없습니다. 서버를 집 안에 두려면 "22로 오면 192.168.0.10:22로" 같은 포트 포워딩 규칙을 따로 넣어야 합니다(6.2에서 봅니다).':
    'A stranger on the internet tries to connect first, to port 22 (SSH) of 203.0.113.7. The router\'s table holds only connections that went out from inside, and 22 is not there. Since it cannot tell which home computer it is for, the router drops the packet. That is why computers behind NAT cannot be reached first from outside. To run a server at home you add a separate port-forwarding rule such as "anything to 22 goes to 192.168.0.10:22" (see 6.2).',
  '낯선 패킷이 공유기에 닿자 공유기 이름표가 경고 색 "22는 표에 없음 → 버림"이 됩니다. 집 안의 A와 B 이름표는 "아무것도 안 옴"입니다.':
    'When the stranger\'s packet reaches the router, the router\'s badge turns to the warning colour "22 not in the table → dropped". A\'s and B\'s badges at home read "nothing arrives".',
  '같은 배치에서 오른쪽 인터넷의 낯선 컴퓨터가 203.0.113.7:22로 보냅니다. 공유기 표에 22가 없어 패킷을 버리고, 집 안의 A와 B에는 아무것도 가지 않습니다.':
    'In the same layout, a stranger on the internet side sends to 203.0.113.7:22. The router\'s table has no 22, so it drops the packet, and nothing reaches A or B at home.',
  '인터넷 → 203.0.113.7:22': 'Internet → 203.0.113.7:22', '표: 40001, 40002뿐 · 22 없음': 'Table: only 40001, 40002 · no 22', '누구 것인지 모름': 'Owner unknown', '버림': 'Dropped',
  '낯선 컴퓨터가 22번 포트로 먼저 보냅니다. 표에 없어 공유기가 버립니다.': 'The stranger sends to port 22 first. It is not in the table, so the router drops it.',
  '밖에서 203.0.113.7:22로 먼저 패킷이 왔습니다. 표에는 22가 없습니다. 공유기는 어떻게 할까요?': 'A packet arrived from outside first, to 203.0.113.7:22. The table has no 22. What does the router do?',
  'A에게 보낸다': 'Sends it to A', '집 안 모두에게 보낸다': 'Sends it to everyone at home', '누구 것인지 몰라 버린다': 'Drops it, since the owner is unknown',
  '표는 안에서 나간 연결로만 채워집니다. 밖에서 먼저 온 패킷은 받을 컴퓨터를 알 수 없습니다.': 'The table is filled only by connections going out. For a packet that starts from outside, the receiving computer is unknown.',
};
