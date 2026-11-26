// English for Networking 1.3 Switches. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '스위치 · 레슨 1.3': 'Switches · Lesson 1.3',
  '네트워크 1장 링크와 LAN · 레슨 1.3': 'Networking chapter 1 Links and LANs · Lesson 1.3',
  '스위치가 출발지 MAC으로 포트를 배우고, 모르는 목적지는 모든 포트로, 아는 목적지는 한 포트로만 보내고, 동시에 온 프레임을 줄 세우고, 오래된 주소를 잊는 과정을 따라가 보세요.':
    'Follow a switch as it learns ports from source MACs, sends unknown destinations to every port and known ones to a single port, queues frames that arrive together, and forgets old addresses.',
  '스위치는 프레임을 어느 포트로 보낼지 어떻게 알까요? 스위치 하나에 케이블 하나씩으로 이어진 컴퓨터 세 대 사이로 프레임을 보내 보세요.':
    'How does a switch know which port to send a frame to? Send frames between three computers joined to one switch by a cable each.',
  '스위치는 프레임을 어느 포트로 보낼지 어떻게 알까?': 'How does a switch know which port to send a frame to?',
  '스위치와 PC 세 대': 'A switch and three PCs',
  '스위치가 MAC 주소 표를 채우며 프레임을 모든 포트 또는 한 포트로만 내보내는 장면': 'A switch filling its MAC address table and sending frames to every port or to one port only',
  '프레임이 지나는 케이블': 'Cable the frames travel on', '컴퓨터': 'Computer', '스위치': 'Switch', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  'PC A · aa · 포트 1': 'PC A · aa · port 1', 'PC B · bb · 포트 2': 'PC B · bb · port 2', 'PC C · cc · 포트 3': 'PC C · cc · port 3',
  'PC A · aa · 포트 1 → 스위치': 'PC A · aa · port 1 → switch', 'PC B · bb · 포트 2 → 스위치': 'PC B · bb · port 2 → switch', 'PC C · cc · 포트 3 → 스위치': 'PC C · cc · port 3 → switch',
  '스위치 → PC A · aa · 포트 1': 'Switch → PC A · aa · port 1', '스위치 → PC B · bb · 포트 2': 'Switch → PC B · bb · port 2', '스위치 → PC C · cc · 포트 3': 'Switch → PC C · cc · port 3',
  '스위치 · cc 모름 → 포트 3': 'Switch · cc unknown → port 3', '스위치 · cc → 포트 3만': 'Switch · cc → port 3 only', '스위치 · aa 것 먼저': 'Switch · aa\'s first', '스위치 · aa → 포트 1만': 'Switch · aa → port 1 only', '스위치 · cc 모름 → 포트 2': 'Switch · cc unknown → port 2',
  // Work panel
  '스위치의 MAC 주소 표': 'The switch\'s MAC address table', '(비어 있음)': '(empty)',
  'aa → 포트 1  (출발지에서 배움)': 'aa → port 1  (learned from the source)', '목적지 cc → 표에 없음': 'Destination cc → not in the table',
  'PC A의 랜카드': 'PC A\'s network card', 'PC B의 랜카드': 'PC B\'s network card', 'PC C의 랜카드': 'PC C\'s network card',
  '목적지 cc ≠ 내 주소 bb → 버림': 'Destination cc ≠ my address bb → drop', '목적지 cc = 내 주소 → 받음': 'Destination cc = my address → take', '목적지 aa = 내 주소 → 받음': 'Destination aa = my address → take',
  'aa → 포트 1': 'aa → port 1', 'bb → 포트 2': 'bb → port 2', 'cc → 포트 3': 'cc → port 3',
  'cc → 포트 3  (출발지에서 배움)': 'cc → port 3  (learned from the source)', '목적지 aa → 포트 1': 'Destination aa → port 1', '목적지 cc → 포트 3': 'Destination cc → port 3',
  '포트 1에서 aa의 프레임을 받아 둠': 'Holds aa\'s frame from port 1', '같은 순간 포트 2에서 bb의 프레임도 받음': 'At the same moment also takes bb\'s frame from port 2',
  '포트 3이 aa 것을 보내는 중 → bb 것은 줄에': 'Port 3 is sending aa\'s → bb\'s waits in the queue',
  'aa의 프레임 받음': 'Got aa\'s frame', 'bb의 프레임 받음': 'Got bb\'s frame', '두 프레임 모두 도착 · 충돌 없음': 'Both frames arrived · no collision',
  'aa → 포트 1  (방금 봄)': 'aa → port 1  (seen just now)', 'cc → 포트 3  (300초 전에 봄)': 'cc → port 3  (seen 300 s ago)', 'cc → 300초 지나 지움': 'cc → removed after 300 s',
  // Badges and moving labels
  '표 비어 있음': 'Table empty', '보냄 · 목적지 cc': 'Sent · to cc', '표: aa → 1 · cc 모름': 'Table: aa → 1 · cc unknown', 'cc ← aa': 'cc ← aa',
  'cc 모름 → 포트 2': 'cc unknown → port 2', 'cc 모름 → 포트 3': 'cc unknown → port 3', 'cc ≠ bb → 버림': 'cc ≠ bb → drop', 'cc = 나 → 받음': 'cc = me → take',
  '표: aa → 1': 'Table: aa → 1', '표: aa → 1 · cc → 3': 'Table: aa → 1 · cc → 3', '답장 보냄': 'Replied', 'aa ← cc': 'aa ← cc',
  'aa → 포트 1만': 'aa → port 1 only', 'aa = 나 → 받음': 'aa = me → take', '아무것도 안 옴': 'Nothing arrives', '다시 보냄 · 목적지 cc': 'Sent again · to cc', 'cc → 포트 3만': 'cc → port 3 only',
  '표: aa→1 · bb→2 · cc→3': 'Table: aa→1 · bb→2 · cc→3', '보낼 프레임 있음': 'Has a frame to send', '보냄': 'Sent', 'aa 것 받음 → 포트 3': 'Holds aa\'s → port 3', 'cc ← bb': 'cc ← bb',
  '포트 3 바쁨 · bb 것 줄 섬': 'Port 3 busy · bb\'s queued', 'aa 것 먼저': 'aa\'s first', 'aa 것 받음': 'Got aa\'s', '포트 3 줄: bb 것 1개': 'Port 3 queue: 1 frame from bb', 'bb 것 다음': 'bb\'s next',
  '2개 모두 받음': 'Got both', '줄 비었음': 'Queue empty', '300초 동안 보낸 것 없음': 'Sent nothing for 300 s', 'cc 300초 소식 없음 → 지움': 'cc silent 300 s → removed',
  // Step 1
  '처음 보는 주소': 'A new address',
  '스위치는 출발지 MAC을 배우고, 모르는 목적지는 모든 포트로 보낸다': 'A switch learns source MACs and sends unknown destinations to every port',
  '스위치는 포트마다 케이블을 따로 받고, 어느 MAC 주소가 어느 포트 뒤에 있는지 적는 MAC 주소 표를 가집니다. 처음에는 표가 비어 있습니다. A의 프레임이 포트 1로 들어오면 스위치는 출발지 aa를 보고 "aa는 포트 1"이라고 적습니다. 목적지 cc는 아직 표에 없으므로, 들어온 포트를 뺀 모든 포트로 내보냅니다(플러딩). B는 버리고 C만 받습니다.':
    'A switch takes a separate cable on each port and keeps a MAC address table recording which MAC address is behind which port. At first the table is empty. When A\'s frame comes in on port 1, the switch reads the source aa and writes "aa is on port 1". The destination cc is not in the table yet, so the frame goes out of every port except the one it came in on (flooding). B drops it and only C takes it.',
  'A의 프레임이 들어오자 스위치 이름표가 "표: aa → 1 · cc 모름"이 됩니다. cc를 모르는 스위치는 아래 B와 오른쪽 C 두 케이블로 모두 보내고, B 이름표는 "cc ≠ bb → 버림", C 이름표는 "cc = 나 → 받음"이 됩니다.':
    'When A\'s frame comes in, the switch badge becomes "table: aa → 1 · cc unknown". Not knowing cc, the switch sends it down both cables, to B below and C on the right; B\'s badge becomes "cc ≠ bb → drop" and C\'s "cc = me → take".',
  '가운데 스위치에 왼쪽 PC A(포트 1), 아래 PC B(포트 2), 오른쪽 PC C(포트 3)가 케이블 하나씩으로 이어져 있습니다. 표가 빈 스위치가 A의 출발지 aa를 포트 1로 배우고, 목적지 cc를 몰라 포트 2와 3으로 모두 보냅니다.':
    'A switch in the middle is joined by one cable each to PC A on the left (port 1), PC B below (port 2) and PC C on the right (port 3). With an empty table, the switch learns A\'s source aa on port 1 and, not knowing the destination cc, sends the frame to both ports 2 and 3.',
  '포트 1로 cc ← aa': 'cc ← aa in on port 1', '표에 aa → 1 적음': 'Writes aa → 1 in the table', 'cc는 표에 없음': 'cc is not in the table', '포트 2·3 모두로 보냄 (B 버림 · C 받음)': 'Sends to ports 2 and 3 (B drops · C takes)',
  '프레임이 포트 1로 들어옵니다. 스위치는 출발지 aa를 표에 포트 1로 적고, 목적지 cc를 표에서 찾지만 없습니다.': 'The frame comes in on port 1. The switch writes the source aa in the table as port 1 and looks up the destination cc, which is not there.',
  '목적지 cc가 표에 없습니다. 스위치는 어떻게 할까요?': 'The destination cc is not in the table. What does the switch do?',
  '프레임을 버린다': 'Drops the frame', '들어온 포트를 뺀 모든 포트로 보낸다': 'Sends it to every port except the one it came in on', 'A에게 되돌려 보낸다': 'Sends it back to A',
  '모르는 목적지는 모든 포트로 보내 두면 주인이 받습니다. 처음 한 번은 허브처럼 퍼지는 셈입니다.': 'Sent to every port, an unknown destination still reaches its owner. The first time, it spreads as on a hub.',
  '스위치가 포트 2로 프레임을 내보냅니다. B는 자기 주소가 아니라 버립니다.': 'The switch sends the frame out of port 2. B drops it because it is not B\'s address.',
  '포트 3으로도 같은 프레임이 나갑니다. C가 받습니다.': 'The same frame also goes out of port 3. C takes it.',
  // Step 2
  '배운 포트로만': 'Only to the learned port',
  '표에 있는 목적지는 그 포트 하나로만 보낸다': 'A destination in the table goes out of that one port only',
  'C가 A에게 답장하면 스위치는 출발지 cc를 보고 "cc는 포트 3"을 배웁니다. 목적지 aa는 1단계에서 이미 배웠으므로 포트 1 하나로만 내보냅니다. 그다음 A가 다시 C에게 보낼 때도 cc가 표에 있어 포트 3으로만 갑니다. B의 케이블에는 두 프레임 모두 지나가지 않습니다. 허브와 달리 남의 프레임이 다른 포트로 새지 않고, 케이블마다 자기 일만 실립니다.':
    'When C replies to A, the switch reads the source cc and learns "cc is on port 3". It already learned the destination aa in step 1, so the reply goes out of port 1 only. When A sends to C again, cc is in the table and the frame goes to port 3 only. Neither frame travels on B\'s cable. Unlike a hub, no one else\'s frames leak to other ports; each cable carries only its own traffic.',
  'C의 답장이 들어오자 스위치 이름표가 "표: aa → 1 · cc → 3"이 됩니다. 답장은 왼쪽 A로만 가서 A 이름표가 "aa = 나 → 받음", 아래 B 이름표는 "아무것도 안 옴"입니다. A의 다음 프레임도 오른쪽 C로만 갑니다.':
    'When C\'s reply comes in, the switch badge becomes "table: aa → 1 · cc → 3". The reply goes only to A on the left, so A\'s badge becomes "aa = me → take" and B\'s badge below reads "nothing arrives". A\'s next frame also goes only to C on the right.',
  '스위치 표에 aa가 포트 1로 적혀 있습니다. C의 답장으로 cc가 포트 3으로 적히고, 답장은 포트 1로만, A의 다음 프레임은 포트 3으로만 나갑니다. 아래 B로는 아무것도 가지 않습니다.':
    'The switch table holds aa on port 1. C\'s reply adds cc on port 3; the reply leaves through port 1 only and A\'s next frame through port 3 only. Nothing goes down to B.',
  '포트 3으로 aa ← cc': 'aa ← cc in on port 3', '표에 cc → 3 적음': 'Writes cc → 3 in the table', 'aa는 포트 1로만': 'aa to port 1 only', 'A의 다음 프레임도 포트 3으로만 · B에는 안 감': 'A\'s next frame to port 3 only · nothing to B',
  'C의 답장이 포트 3으로 들어옵니다. 스위치는 cc를 포트 3으로 적고, 목적지 aa를 표에서 찾아 포트 1을 얻습니다.': 'C\'s reply comes in on port 3. The switch writes cc as port 3 and looks up the destination aa, getting port 1.',
  '목적지 aa는 표에 포트 1로 있습니다. 스위치는 어디로 보낼까요?': 'The destination aa is in the table as port 1. Where does the switch send it?',
  '모든 포트로': 'To every port', '포트 1로만': 'To port 1 only', '포트 2와 1로': 'To ports 2 and 1',
  '표에 있는 목적지는 그 포트 하나로만 내보냅니다. 다른 포트의 케이블은 비어 있습니다.': 'A destination in the table goes out of that one port only. The cables on the other ports stay empty.',
  '답장은 포트 1로만 나가 A가 받습니다.': 'The reply leaves through port 1 only and A takes it.',
  'A가 C에게 다시 보냅니다. 이번에는 cc가 표에 있습니다.': 'A sends to C again. This time cc is in the table.',
  '프레임은 포트 3으로만 나가 C가 받습니다. B에는 여전히 아무것도 가지 않습니다.': 'The frame leaves through port 3 only and C takes it. Still nothing goes to B.',
  // Step 3
  '동시에 보내기': 'Sending at once',
  '두 컴퓨터가 동시에 보내도 스위치가 받아 두었다가 차례로 내보낸다': 'Even when two computers send at once, the switch holds the frames and sends them in turn',
  '스위치의 포트는 보내는 선과 받는 선이 따로 있고(전이중), 들어온 프레임을 메모리에 받아 두었다가 내보냅니다. 그래서 A와 B가 같은 순간에 보내도 신호가 섞이지 않습니다. 두 프레임이 모두 포트 3으로 가야 하면, 하나를 먼저 내보내는 동안 다른 하나는 포트 3의 줄(버퍼)에서 기다립니다. 1.2에서 본 충돌과 무작위 대기가 없어집니다. 다만 줄이 가득 차면 스위치도 프레임을 버립니다.':
    'A switch port has separate lines for sending and receiving (full duplex), and the switch stores each incoming frame in memory before sending it on. So even when A and B send at the same moment, the signals do not mix. If both frames must go to port 3, one is sent first while the other waits in port 3\'s queue (buffer). The collisions and random waits of 1.2 are gone. When the queue is full, though, a switch drops frames too.',
  'A와 B의 프레임이 같은 순간에 스위치로 들어오고, 스위치 이름표가 "포트 3 바쁨 · bb 것 줄 섬"이 됩니다. aa의 프레임이 먼저 C에 닿고, 줄에 있던 bb의 프레임이 뒤이어 닿아 C 이름표가 "2개 모두 받음"이 됩니다.':
    'The frames from A and B come into the switch at the same moment, and the switch badge becomes "port 3 busy · bb\'s queued". aa\'s frame reaches C first, bb\'s frame follows from the queue, and C\'s badge becomes "got both".',
  'PC A와 PC B가 같은 순간에 PC C로 프레임을 보냅니다. 스위치는 두 프레임을 따로 받아, A의 것을 포트 3으로 먼저 보내고 B의 것은 줄에 세웠다가 이어서 보냅니다. 충돌은 없습니다.':
    'PC A and PC B send frames to PC C at the same moment. The switch takes the two frames separately, sends A\'s out of port 3 first and queues B\'s to send next. There is no collision.',
  'A·B 같은 순간에 cc로 보냄': 'A and B send to cc at the same moment', '스위치가 둘 다 받아 둠 (충돌 없음)': 'The switch holds both (no collision)', '포트 3: aa 것 먼저': 'Port 3: aa\'s first', 'bb 것은 줄에서 기다렸다 다음': 'bb\'s waits in the queue, then goes',
  'A가 C에게 보냅니다. 스위치가 포트 1에서 받아 둡니다.': 'A sends to C. The switch holds the frame from port 1.',
  '같은 순간 B도 C에게 보냅니다. 케이블이 따로라 신호는 섞이지 않고, 스위치가 두 프레임을 모두 받습니다.': 'At the same moment B also sends to C. The cables are separate, so the signals do not mix, and the switch takes both frames.',
  'A와 B가 같은 순간에 스위치로 보냈습니다. 어떻게 될까요?': 'A and B sent to the switch at the same moment. What happens?',
  '1.2처럼 신호가 섞여 둘 다 망가진다': 'As in 1.2, the signals mix and both are ruined', '스위치가 둘 다 받아 두고 차례로 내보낸다': 'The switch holds both and sends them in turn', 'B의 프레임은 버린다': 'B\'s frame is dropped',
  '포트마다 케이블이 따로 있고, 스위치는 프레임을 메모리에 받아 두었다가 내보냅니다. 같은 포트로 갈 프레임은 줄을 섭니다.': 'Each port has its own cable, and the switch stores frames in memory before sending them on. Frames for the same port wait in a queue.',
  '스위치가 먼저 받은 aa의 프레임을 포트 3으로 보냅니다.': 'The switch sends aa\'s frame, which it got first, out of port 3.',
  '포트 3이 비자 줄에 있던 bb의 프레임이 이어서 나갑니다.': 'When port 3 is free, bb\'s frame from the queue goes out next.',
  // Step 4
  '잊어버린 주소': 'A forgotten address',
  '오래 소식이 없는 주소는 표에서 지워지고 다시 모든 포트로 간다': 'An address silent for long is removed from the table, and frames for it go to every port again',
  '스위치는 표의 각 줄에 마지막으로 본 시각을 함께 적고, 그 주소에서 프레임이 오래 오지 않으면 줄을 지웁니다. 리눅스 브리지와 많은 스위치의 기본값은 300초입니다. 컴퓨터가 꺼지거나 다른 포트로 옮겨 가도 표가 언젠가 바로잡히게 하려는 것입니다. 지워진 주소로 프레임이 오면 스위치는 다시 모든 포트로 보내고, 답장이 오면 다시 배웁니다.':
    'The switch records, for each table entry, when it last saw that address, and removes the entry when no frame has come from it for a long time. The default on Linux bridges and many switches is 300 seconds. This lets the table correct itself when a computer is switched off or moved to another port. When a frame comes for a removed address, the switch sends it to every port again and learns the address again from the reply.',
  'C에서 300초 동안 프레임이 오지 않아 스위치의 cc 항목이 지워집니다. A의 프레임은 포트 2와 3으로 나가 B는 버리고 C는 받습니다.':
    'After 300 seconds without a frame from C, the switch removes its cc entry. A’s frame goes out through ports 2 and 3. B drops it, and C receives it.',
  '스위치 표에 cc가 포트 3으로 적혀 있었지만 300초 동안 C에게서 프레임이 오지 않아 지워졌습니다. A가 C에게 보낸 프레임은 다시 포트 2와 3으로 모두 나갑니다.':
    'The switch table had cc on port 3, but no frame came from C for 300 seconds, so the entry was removed. A\'s frame to C goes out of both ports 2 and 3 again.',
  'cc 300초 소식 없음 → 표에서 지움': 'cc silent 300 s → removed from the table', 'cc 모름': 'cc unknown', '다시 포트 2·3 모두로': 'To ports 2 and 3 again',
  'A가 C에게 보냅니다. 그 사이 cc 줄은 300초 동안 소식이 없어 지워졌습니다.': 'A sends to C. Meanwhile the cc entry, silent for 300 seconds, has been removed.',
  'cc 줄이 300초 동안 소식이 없어 지워졌습니다. A의 프레임은 어디로 갈까요?': 'The cc entry was silent for 300 seconds and has been removed. Where does A\'s frame go?',
  '예전처럼 포트 3으로만': 'To port 3 only, as before', '아무 데도 가지 않는다': 'Nowhere',
  '지워진 주소는 처음 보는 주소와 같습니다. 스위치는 다시 모든 포트로 보내고, 답장에서 다시 배웁니다.': 'A removed address is the same as a new one. The switch sends to every port again and learns from the reply.',
  '다시 포트 2로도 나갑니다. B는 버립니다.': 'It goes out of port 2 again. B drops it.',
  '포트 3으로도 나가 C가 받습니다. C가 답하면 스위치는 cc를 다시 배웁니다.': 'It also goes out of port 3 and C takes it. When C replies, the switch learns cc again.',
};
