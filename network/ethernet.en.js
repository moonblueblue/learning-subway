// English for Networking 1.2 Ethernet and MAC addresses. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '이더넷과 MAC 주소 · 레슨 1.2': 'Ethernet and MAC addresses · Lesson 1.2',
  '네트워크 1장 링크와 LAN · 레슨 1.2': 'Networking chapter 1 Links and LANs · Lesson 1.2',
  '허브에 이어진 컴퓨터 세 대 사이에서 이더넷 프레임의 MAC 주소, 모두에게 보내는 주소, FCS 검사, 신호 충돌을 한 구간씩 따라가 보세요.':
    'Follow, leg by leg, the MAC addresses of an Ethernet frame, the address that reaches everyone, the FCS check and colliding signals between three computers on a hub.',
  '같은 LAN에 보낸 프레임은 어떻게 받을 컴퓨터만 가져갈까요? 허브 하나에 이어진 컴퓨터 세 대 사이로 프레임을 한 구간씩 보내 보세요.':
    'How does a frame sent on a LAN get taken only by the computer it is for? Send frames, one leg at a time, between three computers on one hub.',
  '같은 LAN에 보낸 프레임은 어떻게 받을 컴퓨터만 가져갈까?': 'How does a frame sent on a LAN get taken only by the computer it is for?',
  '허브에 이어진 PC 세 대': 'Three PCs on a hub',
  '허브에 이어진 PC 세 대 사이로 이더넷 프레임이 퍼지고, 각 랜카드가 목적지 MAC과 FCS로 받을지 정하는 장면':
    'An Ethernet frame spreading between three PCs on a hub, and each network card deciding from the destination MAC and the FCS whether to take it',
  '프레임이 지나는 케이블': 'Cable the frames travel on', '컴퓨터': 'Computer', '허브': 'Hub', '오류': 'Error', '신호가 막 닿은 곳': 'Where the signal just arrived',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  'PC A · MAC aa': 'PC A · MAC aa', 'PC B · MAC bb': 'PC B · MAC bb', 'PC C · MAC cc': 'PC C · MAC cc',
  // Legs in the stage list and the example strip
  'PC A · MAC aa → 허브': 'PC A · MAC aa → hub', '허브 → PC C · MAC cc': 'Hub → PC C · MAC cc',
  'PC C · MAC cc → PC A · MAC aa': 'PC C · MAC cc → PC A · MAC aa', 'PC B · MAC bb → 허브': 'PC B · MAC bb → hub',
  '허브 · 모든 포트로 복사': 'Hub · copies to all', '허브 · 복사 · 잡음': 'Hub · copy · noise', '허브 · 섞인 신호': 'Hub · mixed signals',
  'PC C · MAC cc · aa ← cc': 'PC C · MAC cc · aa ← cc',
  // Work panel
  'PC A의 랜카드가 만든 프레임': 'The frame PC A\'s network card built',
  '목적지 MAC  cc': 'Destination MAC  cc', '출발지 MAC  aa': 'Source MAC  aa', '타입  0x0800 (IPv4)': 'Type  0x0800 (IPv4)',
  '데이터  IP 패킷 46–1500바이트': 'Data  IP packet, 46–1500 bytes', 'FCS  CRC-32 검사값': 'FCS  CRC-32 check value',
  'FCS  7c3e91a0 (앞부분 전체로 계산)': 'FCS  7c3e91a0 (computed over everything before it)',
  '목적지 MAC  ff (모두에게)': 'Destination MAC  ff (to everyone)', '데이터  C의 MAC을 알려 주세요': 'Data  please tell me C\'s MAC',
  '포트 1로 신호가 들어옴': 'A signal comes in on port 1', '주소는 읽지 않음': 'Does not read the addresses', '주소도 FCS도 읽지 않음': 'Reads neither the addresses nor the FCS',
  'PC B와 PC C의 랜카드': 'The network cards of PC B and PC C', 'PC A의 랜카드': 'PC A\'s network card', 'PC C의 랜카드': 'PC C\'s network card',
  'B: 목적지 cc ≠ 내 주소 bb → 버림': 'B: destination cc ≠ my address bb → drop', 'C: 목적지 cc = 내 주소 → 받음': 'C: destination cc = my address → take',
  'B: 목적지 ff → 받음 · 묻는 대상 아님': 'B: destination ff → take · not the one asked for', 'C: 목적지 ff → 받음 · 나를 찾음': 'C: destination ff → take · it is looking for me',
  'C의 답장: 목적지 aa · 출발지 cc': 'C\'s reply: destination aa · source cc', 'A가 C의 MAC cc를 기억함': 'A remembers C\'s MAC cc',
  '다시 계산한 값  5d02b4f1': 'Recomputed value  5d02b4f1', '프레임의 FCS    7c3e91a0': 'FCS in the frame  7c3e91a0', '다름 → 프레임 버림': 'Different → frame dropped',
  '같은 순간': 'The same moment', 'A: 선이 조용함 → 보내기 시작': 'A: the line is quiet → starts sending', 'B: 선이 조용함 → 보내기 시작': 'B: the line is quiet → starts sending',
  'A의 신호가 들어옴': 'A\'s signal comes in', 'B의 신호도 들어옴': 'B\'s signal comes in too', '두 신호가 한 선에서 섞임': 'The two signals mix on one line',
  '모든 랜카드': 'Every network card', 'A·B: 보내는 중에 다른 신호를 들음 → 멈춤': 'A·B: hear another signal while sending → stop',
  'A: 무작위로 51µs 기다림': 'A: waits a random 51µs', 'B: 무작위로 154µs 기다림': 'B: waits a random 154µs', 'C: 읽을 수 없는 신호 → 버림': 'C: unreadable signal → drop',
  'A의 신호만 들어옴': 'Only A\'s signal comes in', 'PC B와 PC C': 'PC B and PC C', 'B: 선이 바쁨 → 더 기다림': 'B: the line is busy → waits longer',
  // Badges and moving labels
  '프레임 준비': 'Frame ready', '보냄 · 목적지 cc': 'Sent · to cc', '신호 받음': 'Signal in', '모든 포트로 복사': 'Copies to all',
  'cc ≠ bb → 버림': 'cc ≠ bb → drop', 'cc = 나 → 받음': 'cc = me → take', 'cc ← aa': 'cc ← aa',
  'C의 MAC 모름': 'Does not know C\'s MAC', '보냄 · 목적지 ff': 'Sent · to ff', 'ff ← aa': 'ff ← aa',
  'ff → 받음 · 답 안 함': 'ff → take · silent', 'ff → 받음 · 나를 찾음': 'ff → take · looking for me', 'aa ← cc': 'aa ← cc',
  '답장 보냄 · 출발지 cc': 'Reply from cc', '답 받음 · C는 cc': 'Reply: C is cc',
  '보냄 · FCS 7c3e91a0': 'Sent · FCS 7c3e91a0', '복사 · 잡음': 'Copy · noise', '잡음 · FCS 다름 → 버림': 'Noise · FCS differs → drop', '버려진 줄 모름': 'Unaware of drop',
  '보낼 프레임 있음': 'Has a frame to send', '보내는 중': 'Sending', 'A 신호': 'A\'s signal', 'cc ← bb': 'cc ← bb', 'A·B 신호 섞임 · 충돌': 'A and B signals mixed · collision',
  '섞인 신호': 'Mixed signals', '충돌 · 51µs 기다림': 'Collision · waits 51µs', '충돌 · 154µs 기다림': 'Collision · waits 154µs', '깨진 신호 → 버림': 'Broken signal → drop',
  'cc ← aa · 다시': 'cc ← aa · again', '다시 보냄': 'Sent again', 'A 신호만': 'Only A\'s signal', '선이 바쁨 · 더 기다림': 'Busy · waits more',
  // Step 1
  'MAC으로 고르기': 'Choosing by MAC',
  '랜카드는 목적지 MAC이 자기 주소인 프레임만 받는다': 'A network card takes only frames whose destination MAC is its own address',
  'A가 C에게 보낼 데이터를 이더넷 프레임에 담습니다. 프레임 맨 앞에 받을 쪽의 MAC 주소, 그다음에 보낸 쪽의 MAC 주소가 붙습니다. MAC 주소는 랜카드마다 정해진 6바이트 주소이고, 그림에서는 aa:aa:aa:aa:aa:aa를 aa로 줄여 씁니다. 허브는 주소를 보지 않고 들어온 신호를 모든 포트로 그대로 내보냅니다. 그래서 B와 C가 같은 프레임을 받고, 각 랜카드가 목적지 MAC을 자기 주소와 비교해 C만 받고 B는 버립니다.':
    'A puts the data for C in an Ethernet frame. At the very front goes the receiver\'s MAC address, then the sender\'s. A MAC address is a 6-byte address fixed for each network card; the picture shortens aa:aa:aa:aa:aa:aa to aa. The hub does not look at addresses and sends the incoming signal out of every port as it is. So B and C get the same frame, each card compares the destination MAC with its own address, and only C takes it while B drops it.',
  'A에서 허브로 "cc ← aa" 프레임이 가고, 허브에서 같은 신호가 B와 C로 동시에 퍼집니다. B 이름표는 "cc ≠ bb → 버림", C 이름표는 "cc = 나 → 받음"이 됩니다.':
    'The frame "cc ← aa" goes from A to the hub, and from the hub the same signal spreads to B and C at once. B\'s badge becomes "cc ≠ bb → drop" and C\'s becomes "cc = me → take".',
  '허브 왼쪽에 PC A, 오른쪽에 PC C, 아래에 PC B가 각자 케이블로 이어져 있습니다. A가 목적지 MAC cc인 프레임을 보내고, 허브가 모든 포트로 복사하며, B는 버리고 C만 받습니다.':
    'PC A sits left of a hub, PC C right of it and PC B below it, each on its own cable. A sends a frame with destination MAC cc, the hub copies it to every port, B drops it and only C takes it.',
  'A: 목적지 cc · 출발지 aa': 'A: destination cc · source aa', '허브: 모든 포트로 복사': 'Hub: copies to all', 'B: cc ≠ bb → 버림': 'B: cc ≠ bb → drop', 'C: cc = 나 → 받음': 'C: cc = me → take',
  'A가 프레임을 케이블로 내보냅니다. 맨 앞 목적지 칸에 C의 MAC cc가 있습니다.': 'A sends the frame onto the cable. The destination field at the front holds C\'s MAC, cc.',
  '허브가 같은 신호를 B와 C로 모두 보냅니다. 두 랜카드가 목적지 MAC을 자기 주소와 비교해, C만 받아 위 계층으로 넘기고 B는 버립니다.':
    'The hub sends the same signal to both B and C. Each card compares the destination MAC with its own address; only C takes the frame and passes it up, and B drops it.',
  '허브가 B에게도 같은 프레임을 보냈습니다. B는 어떻게 할까요?': 'The hub sent the same frame to B as well. What does B do?',
  '받아서 C에게 전해 준다': 'Takes it and passes it on to C', '목적지 MAC이 자기 주소가 아니라 버린다': 'Drops it, because the destination MAC is not its address', 'A에게 잘못 왔다고 알린다': 'Tells A the frame came to the wrong place',
  '랜카드는 목적지 MAC이 자기 주소이거나 모두에게 보내는 주소인 프레임만 받고, 나머지는 조용히 버립니다.':
    'A network card takes only frames whose destination MAC is its own address or the address for everyone, and quietly drops the rest.',
  // Step 2
  '모두에게 보내기': 'Sending to everyone',
  '목적지가 ff:ff:ff:ff:ff:ff이면 모두가 받는다': 'When the destination is ff:ff:ff:ff:ff:ff, everyone takes the frame',
  'A가 C의 MAC 주소를 모르면 목적지 칸을 채울 수 없습니다. 이럴 때는 목적지 칸을 모두 1인 주소 ff:ff:ff:ff:ff:ff(브로드캐스트)로 채워 보냅니다. 랜카드는 이 주소를 자기 주소처럼 받아들이므로 같은 LAN의 모든 컴퓨터가 프레임을 읽습니다. 묻는 대상인 C만 자기 MAC을 출발지에 넣어 답하고, A는 그 답에서 C의 MAC을 배웁니다. 1.4 ARP가 이 방법으로 IP 주소의 주인을 찾습니다.':
    'If A does not know C\'s MAC address, it cannot fill in the destination field. It then fills the field with the all-ones address ff:ff:ff:ff:ff:ff (broadcast). Every card takes this address as if it were its own, so every computer on the LAN reads the frame. Only C, the one asked for, replies with its own MAC in the source field, and A learns C\'s MAC from the reply. 1.4 ARP finds the owner of an IP address this way.',
  'A의 "ff ← aa" 프레임이 허브에서 퍼지자 B와 C 이름표가 모두 "ff → 받음"으로 시작합니다. B는 답하지 않고, C가 보낸 "aa ← cc" 답장으로 A 이름표에 "C는 cc"가 남습니다.':
    'When A\'s frame "ff ← aa" spreads from the hub, the badges of B and C both start with "ff → take". B does not reply, and C\'s reply "aa ← cc" leaves "C is cc" on A\'s badge.',
  'PC A가 목적지 ff:ff:ff:ff:ff:ff인 프레임으로 C를 찾고, 허브가 모든 포트로 복사해 B와 C가 모두 받습니다. C만 목적지 aa로 답장합니다.':
    'PC A looks for C with a frame whose destination is ff:ff:ff:ff:ff:ff; the hub copies it to every port, and both B and C take it. Only C replies, to destination aa.',
  'A: 목적지 ff (모두) · cc는 누구?': 'A: destination ff (everyone) · who is C?', 'B·C 모두 받음': 'B and C both take it', 'C만 답함: 목적지 aa': 'Only C replies: destination aa',
  'A가 목적지 칸을 ff:ff:ff:ff:ff:ff로 채운 프레임을 보냅니다.': 'A sends a frame with ff:ff:ff:ff:ff:ff in the destination field.',
  'B와 C의 랜카드가 모두 이 프레임을 받습니다. 목적지 ff는 모두에게 보내는 주소이기 때문입니다.': 'The cards of B and C both take this frame, because the destination ff is the address for everyone.',
  '목적지가 ff:ff:ff:ff:ff:ff인 프레임은 누가 받을까요?': 'Who takes a frame whose destination is ff:ff:ff:ff:ff:ff?',
  '아무도 받지 않는다': 'Nobody', '허브에서 가장 가까운 B만': 'Only B, the nearest to the hub', 'B와 C 모두': 'Both B and C',
  '모든 비트가 1인 주소는 브로드캐스트입니다. 같은 LAN의 모든 랜카드가 받아들입니다.': 'The address with every bit set to 1 is broadcast. Every card on the LAN takes it.',
  'C만 답장을 보냅니다. 답장의 출발지 칸에서 A는 C의 MAC이 cc라는 것을 배웁니다.': 'Only C replies. From the source field of the reply, A learns that C\'s MAC is cc.',
  // Step 3
  '깨진 프레임': 'Broken frame',
  'FCS가 맞지 않는 프레임은 받는 쪽이 조용히 버린다': 'The receiver quietly drops a frame whose FCS does not match',
  '프레임 끝의 FCS는 보내는 쪽이 프레임 앞부분 전체로 계산한 CRC-32 검사값입니다. 받는 쪽은 같은 계산을 다시 해서 FCS와 비교합니다. 케이블의 잡음으로 비트 하나만 바뀌어도 값이 달라지므로, 맞지 않으면 그 프레임을 버립니다. 이더넷은 버렸다고 알리지도 다시 보내지도 않습니다. 잃어버린 데이터를 다시 보내는 일은 5.9 TCP 같은 위 계층이 맡습니다.':
    'The FCS at the end of the frame is a CRC-32 check value the sender computes over everything before it. The receiver does the same computation again and compares the result with the FCS. If noise on the cable flips even one bit the value changes, so a frame that does not match is dropped. Ethernet neither reports the drop nor sends again. Sending lost data again is the job of a higher layer such as 5.9 TCP.',
  'A의 이름표에 "FCS 7c3e91a0"이 적혀 나가고, 허브에서 C로 가는 길에 잡음이 끼어 C 이름표가 경고 색 "잡음 · FCS 다름 → 버림"이 됩니다. A 이름표는 "버려진 줄 모름"입니다.':
    'The frame leaves with "FCS 7c3e91a0" on A\'s badge, noise gets in on the way from the hub to C, and C\'s badge turns to the warning colour "noise · FCS differs → drop". A\'s badge reads "unaware of drop".',
  'PC A가 FCS 7c3e91a0을 붙여 C에게 프레임을 보냅니다. 허브에서 C로 가는 길에 잡음으로 비트 하나가 바뀌어, C가 다시 계산한 값 5d02b4f1과 맞지 않아 프레임을 버립니다. A에게는 아무 알림도 가지 않습니다.':
    'PC A sends C a frame with FCS 7c3e91a0. On the way from the hub to C, noise flips one bit, so the value C recomputes, 5d02b4f1, does not match and C drops the frame. A gets no notice.',
  'A: FCS 7c3e91a0 붙여 보냄': 'A: sends with FCS 7c3e91a0', '가는 길에 잡음 · 비트 1개 바뀜': 'Noise on the way · 1 bit flipped',
  'C: 다시 계산 5d02b4f1 ≠ 7c3e91a0': 'C: recomputed 5d02b4f1 ≠ 7c3e91a0', '버림 · 알림 없음': 'Dropped · no notice',
  'A가 FCS 7c3e91a0을 끝에 붙인 프레임을 보냅니다.': 'A sends a frame with FCS 7c3e91a0 at the end.',
  '허브에서 C로 가는 길에 잡음이 끼어 비트 하나가 바뀝니다. C가 다시 계산한 값이 FCS와 달라 프레임을 버립니다.': 'Noise on the way from the hub to C flips one bit. The value C recomputes differs from the FCS, so C drops the frame.',
  'C가 다시 계산한 값이 프레임의 FCS와 다릅니다. C는 어떻게 할까요?': 'The value C recomputed differs from the frame\'s FCS. What does C do?',
  '바뀐 비트를 찾아 고쳐서 받는다': 'Finds the flipped bit, fixes it and takes the frame', '버리고 아무에게도 알리지 않는다': 'Drops it and tells no one', 'A에게 다시 보내 달라고 한다': 'Asks A to send it again',
  'CRC는 오류가 있다는 것만 알려 주고 고치지는 못합니다. 이더넷은 알리지 않고 버리며, 다시 보내기는 위 계층의 몫입니다.':
    'A CRC only tells you there is an error; it cannot fix it. Ethernet drops the frame without telling anyone, and sending again is up to a higher layer.',
  // Step 4
  '신호 충돌': 'Colliding signals',
  '두 컴퓨터가 동시에 보내면 신호가 부딪혀 둘 다 다시 보낸다': 'When two computers send at once, the signals collide and both send again',
  '허브에 이어진 케이블들은 한 번에 한 신호만 실을 수 있습니다. 그래서 랜카드는 보내기 전에 선이 조용한지 듣고, 보내는 동안에도 다른 신호와 섞이는지 듣습니다(CSMA/CD). A와 B가 같은 순간에 보내면 신호가 섞여 둘 다 망가집니다. 둘은 충돌을 알아채고 멈춘 뒤, 각자 무작위로 고른 시간만큼 기다렸다가 다시 보냅니다. 기다리는 시간이 짧은 A가 먼저 보내 C에 닿습니다. 1.3 스위치는 포트마다 길을 따로 두어 이 충돌을 없앱니다.':
    'The cables on a hub can carry only one signal at a time. So a network card listens for a quiet line before sending, and keeps listening while it sends for another signal mixing in (CSMA/CD). If A and B send at the same moment, the signals mix and both are ruined. Both notice the collision, stop, wait a randomly chosen time and send again. A, which waits less, sends first and reaches C. 1.3 Switches remove this collision by giving each port its own path.',
  'A와 B가 모두 허브로 보내자 허브 이름표가 경고 색 "A·B 신호 섞임 · 충돌"이 됩니다. A는 51µs, B는 154µs를 기다리고, A가 다시 보낸 프레임에 C 이름표가 "cc = 나 → 받음"이 됩니다.':
    'When A and B both send to the hub, the hub\'s badge turns to the warning colour "A and B signals mixed · collision". A waits 51µs and B 154µs, and A\'s frame sent again turns C\'s badge to "cc = me → take".',
  'PC A와 PC B가 같은 순간에 허브로 프레임을 보내 신호가 섞입니다. 둘은 충돌을 알아채고 A는 51마이크로초, B는 154마이크로초를 기다립니다. A가 먼저 다시 보내 C가 받고, B는 선이 바빠 더 기다립니다.':
    'PC A and PC B send frames to the hub at the same moment and the signals mix. Both notice the collision; A waits 51 microseconds and B 154 microseconds. A sends again first and C takes the frame, while B finds the line busy and waits longer.',
  'A·B 동시에 보냄': 'A and B send at once', '허브에서 섞임 (충돌)': 'Mixed at the hub (collision)', 'A 51µs · B 154µs 무작위로 기다림': 'A 51µs · B 154µs random wait', 'A가 먼저 다시 보내 C가 받음': 'A sends again first and C takes it',
  'A가 선이 조용한 것을 확인하고 보내기 시작합니다.': 'A finds the line quiet and starts sending.',
  '같은 순간에 B도 선이 조용하다고 듣고 보내기 시작합니다. 두 신호가 섞입니다.': 'At the same moment B also hears a quiet line and starts sending. The two signals mix.',
  'A와 B가 같은 순간에 보냈습니다. 어떻게 될까요?': 'A and B sent at the same moment. What happens?',
  '허브가 차례로 줄을 세운다': 'The hub puts them in a queue', '신호가 섞여 둘 다 망가진다': 'The signals mix and both are ruined', '먼저 보낸 A만 살아남는다': 'Only A, which sent first, survives',
  '허브는 신호를 그대로 복사할 뿐 저장하지 않습니다. 두 신호가 한 선에서 섞이면 둘 다 읽을 수 없습니다.': 'A hub only copies signals as they are; it stores nothing. When two signals mix on one line, neither can be read.',
  'A와 B는 보내는 중에 다른 신호를 듣고 충돌을 알아챕니다. 둘 다 멈추고 각자 무작위로 고른 시간만큼 기다립니다.': 'A and B hear another signal while sending and notice the collision. Both stop and each waits a randomly chosen time.',
  '기다리는 시간이 짧은 A가 먼저 다시 보냅니다. 이번에는 다른 신호가 없습니다.': 'A, which waits less, sends again first. This time there is no other signal.',
  '허브가 A의 프레임을 모든 포트로 복사합니다. C가 받고, B는 선이 바쁜 것을 듣고 조금 더 기다립니다.': 'The hub copies A\'s frame to every port. C takes it, and B hears that the line is busy and waits a little longer.',
};
