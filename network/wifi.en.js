// English for Networking 1.6 Wireless LANs. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '무선 LAN · 레슨 1.6': 'Wireless LANs · Lesson 1.6',
  '네트워크 1장 링크와 LAN · 레슨 1.6': 'Networking chapter 1 Links and LANs · Lesson 1.6',
  '노트북이 AP를 거쳐 이야기하는 길, 프레임마다 돌아오는 ACK, 무작위로 기다려 부딪힘을 피하는 모습, 서로 들리지 않는 노트북이 RTS/CTS로 순서를 정하는 모습을 따라가 보세요.':
    'Follow laptops talking through an access point, the ACK that comes back for every frame, random waiting that avoids collisions, and laptops that cannot hear each other taking turns with RTS/CTS.',
  '충돌을 알아챌 수 없는 무선에서, 잃어버리거나 부딪히는 프레임을 어떻게 알아내고 피할까요? AP 하나에 연결된 노트북 사이로 프레임을 보내 보세요.':
    'On radio, where collisions cannot be detected, how are lost and colliding frames found and avoided? Send frames between laptops on one access point.',
  '충돌을 알아챌 수 없는 무선에서 잃어버리거나 부딪히는 프레임을 어떻게 다룰까?': 'On radio, where collisions cannot be detected, how are lost and colliding frames handled?',
  'AP와 노트북': 'Access point and laptops',
  '노트북이 AP를 거쳐 프레임을 주고받고, ACK와 무작위 대기와 RTS/CTS로 잃어버림과 부딪힘을 다루는 장면':
    'Laptops exchanging frames through an access point, handling loss and collisions with ACKs, random waits and RTS/CTS',
  '전파': 'Radio', '노트북': 'Laptop', 'AP (무선 공유기)': 'AP (wireless access point)', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations, ranges and legs
  '노트북 A · aa': 'Laptop A · aa', '노트북 B · bb': 'Laptop B · bb', 'AP · ap': 'AP · ap', '노트북 A': 'Laptop A', '노트북 B': 'Laptop B', '노트북 C': 'Laptop C', 'AP': 'AP',
  '노트북 A의 전파 범위': 'Laptop A\'s radio range', '노트북 C의 전파 범위': 'Laptop C\'s radio range',
  '노트북 A · aa → AP · ap': 'Laptop A · aa → AP · ap', 'AP · ap → 노트북 B · bb': 'AP · ap → laptop B · bb', 'AP · ap → 노트북 A · aa': 'AP · ap → laptop A · aa',
  '노트북 A → AP': 'Laptop A → AP', '노트북 C → AP': 'Laptop C → AP', 'AP → 노트북 A': 'AP → laptop A', 'AP → 노트북 C': 'AP → laptop C',
  'AP · ap · 받는 곳 bb': 'AP · ap · to bb', '노트북 A · aa · 프레임 2 다시': 'Laptop A · aa · frame 2 again', '노트북 A · A 프레임': 'Laptop A · A\'s frame', 'AP · CTS: A에게 300µs': 'AP · CTS: 300µs for A', 'AP · CTS': 'AP · CTS',
  // Work panel
  '노트북 A가 보낼 것': 'What laptop A will send', 'B에게 보낼 데이터': 'Data for B', '연결된 AP: ap': 'Connected AP: ap',
  '무선 프레임의 주소 셋': 'The three addresses of a wireless frame', '주소 1 받을 곳  ap (AP)': 'Address 1 receiver  ap (AP)', '주소 2 보낸 곳  aa': 'Address 2 sender  aa', '주소 3 최종 목적지  bb': 'Address 3 final destination  bb',
  '주소 1 받을 곳  bb': 'Address 1 receiver  bb', '주소 2 보낸 곳  ap': 'Address 2 sender  ap', '주소 3 처음 보낸 곳  aa': 'Address 3 original sender  aa',
  '프레임 1, 2': 'Frames 1, 2', '각 프레임마다 ACK를 기다림': 'Waits for an ACK for each frame', '프레임 1 받음 → ACK 보냄': 'Got frame 1 → sends ACK', 'ACK 1 받음 → 1은 잘 갔음': 'Got ACK 1 → 1 arrived',
  '전자레인지 잡음에 신호가 묻힘': 'The signal is drowned by microwave noise', '프레임 2를 읽지 못함 → ACK 없음': 'Cannot read frame 2 → no ACK', '다시 온 프레임 2 받음 → ACK 보냄': 'Got the resent frame 2 → sends ACK', 'ACK 2 받음 → 2도 잘 갔음': 'Got ACK 2 → 2 arrived too',
  '같은 순간': 'The same moment', '다른 전송이 채널을 쓰는 중': 'Another transmission is using the channel', 'A, C 모두 보낼 것 있음': 'A and C both have something to send',
  '노트북 A와 C': 'Laptops A and C', '채널이 빔': 'The channel is free', 'A: 무작위 3칸 뽑음': 'A: draws a random 3 slots', 'C: 무작위 7칸 뽑음': 'C: draws a random 7 slots',
  '3칸이 지나 A가 보냄': 'After 3 slots, A sends', 'C: 3칸 셈 · 4칸 남음 · 채널 바쁨 → 멈춤': 'C: counted 3 · 4 left · channel busy → pauses', 'ACK 받음': 'Got the ACK',
  '채널이 다시 빔 → C가 남은 4칸을 마저 셈': 'The channel is free again → C counts its remaining 4 slots', 'C가 보냄': 'C sends',
  '전파 범위': 'Radio ranges', 'A의 전파: AP까지 닿음 · C에는 안 닿음': 'A\'s radio: reaches the AP · not C', 'C의 전파: AP까지 닿음 · A에는 안 닿음': 'C\'s radio: reaches the AP · not A',
  'A의 RTS: 300µs 동안 쓰겠음': 'A\'s RTS: will use 300µs', 'A의 전파는 안 들림': 'Cannot hear A\'s radio', 'AP의 CTS는 들림 → 300µs 동안 보내지 않음': 'Hears the AP\'s CTS → sends nothing for 300µs',
  'CTS 받음 → 보내도 됨': 'Got the CTS → clear to send', 'A의 프레임 받음': 'Got A\'s frame', 'C는 조용히 기다리는 중 → 부딪힘 없음': 'C is waiting quietly → no collision',
  // Badges and moving labels
  'B에게 보낼 것 있음': 'Has data for B', '연결: A, B': 'Connected: A, B', '받는 곳 ap': 'To ap', '받는 곳 ap · 목적지 bb': 'To ap · destination bb', '받음 · 목적지 bb': 'Got it · destination bb',
  '받는 곳 bb': 'To bb', 'bb에게 다시 보냄': 'Sends it on to bb', '받음 · 출발지 aa': 'Got it · from aa',
  '프레임 1·2 보낼 것': 'Frames 1·2 to send', '프레임 1': 'Frame 1', '1 보냄 · ACK 기다림': '1 sent · waiting for ACK', '1 받음': 'Got 1', 'ACK 1': 'ACK 1', '1 확인됨': '1 confirmed',
  '프레임 2 · 잡음': 'Frame 2 · noise', '2 보냄 · ACK 기다림': '2 sent · waiting for ACK', '2 못 받음 (잡음)': 'Missed 2 (noise)', '프레임 2 다시': 'Frame 2 again',
  '1 확인됨 · 2 ACK 없음 → 다시': '1 confirmed · no ACK for 2 → again', '2 잡음에 묻힘 → 다시 받음': '2 lost in noise → got it again', 'ACK 2': 'ACK 2', '2 확인됨': '2 confirmed',
  '보낼 것 있음': 'Has something to send', '채널 바쁨': 'Channel busy', '앞 전송 끝': 'Previous send ends', '채널 빔': 'Channel free', '무작위 3칸 셈': 'Counting a random 3 slots', '무작위 7칸 셈': 'Counting a random 7 slots',
  'A 프레임': 'A\'s frame', '무작위 3칸 뒤 보냄': 'Sent after a random 3 slots', '7칸 중 3칸 · A 들림 → 멈춤': '3 of 7 · hears A → paused', 'A 것 받음 · 부딪힘 없음': 'Got A\'s · no collision', 'ACK': 'ACK',
  'C 프레임': 'C\'s frame', '남은 4칸 뒤 보냄': 'Sent after the remaining 4', 'C 것 받음': 'Got C\'s',
  '큰 프레임 보낼 것': 'Has a large frame to send', 'RTS: 300µs': 'RTS: 300µs', 'RTS 보냄': 'RTS sent', 'RTS 받음': 'Got the RTS', 'A 안 들림 · 채널 빈 줄 앎': 'Cannot hear A · thinks the channel is free',
  'CTS: A에게 300µs': 'CTS: 300µs for A', 'CTS 들음 → 300µs 조용히': 'Heard the CTS → quiet for 300µs', 'CTS': 'CTS', 'RTS 뒤 CTS 받음 → 보냄': 'RTS, then got the CTS → sends', '큰 프레임': 'Large frame',
  // Step 1
  'AP를 거쳐 가기': 'Through the access point',
  '같은 무선 LAN 안에서도 프레임은 AP를 거쳐 간다': 'Even within one wireless LAN, frames go through the access point',
  '노트북들은 AP(무선 공유기)에 연결되어 있고, 서로 직접이 아니라 AP를 거쳐 이야기합니다. 그래서 무선 프레임에는 주소가 셋 있습니다. 지금 받을 곳(AP), 처음 보낸 곳(aa), 최종 목적지(bb)입니다. AP는 받은 프레임의 최종 목적지를 보고, 받을 곳을 bb로 바꿔 다시 보냅니다. 1.2의 이더넷 프레임에는 주소가 둘뿐이었습니다.':
    'The laptops are connected to an access point (AP) and talk through it, not directly to each other. So a wireless frame carries three addresses: the receiver now (the AP), the original sender (aa) and the final destination (bb). The AP reads the final destination and sends the frame on with bb as the receiver. The Ethernet frame in 1.2 had only two addresses.',
  'A 이름표가 "받는 곳 ap · 목적지 bb"가 되고, 프레임이 AP를 거쳐 아래 B로 갑니다. AP 이름표는 "bb에게 다시 보냄", B 이름표는 "받음 · 출발지 aa"입니다.':
    'A\'s badge becomes "to ap · destination bb", and the frame goes through the AP down to B. The AP\'s badge reads "sends it on to bb" and B\'s "got it · from aa".',
  '가운데 AP에 왼쪽 노트북 A(aa)와 아래 노트북 B(bb)가 전파로 이어져 있습니다. A의 프레임은 받는 곳이 AP, 최종 목적지가 bb이고, AP가 B에게 다시 보냅니다.':
    'An AP in the middle reaches laptop A (aa) on the left and laptop B (bb) below by radio. A\'s frame has the AP as its receiver and bb as its final destination, and the AP sends it on to B.',
  'A: 받는 곳 ap · 목적지 bb': 'A: to ap · destination bb', 'AP: 목적지 bb를 보고 다시 보냄': 'AP: reads destination bb and sends it on', 'B 받음 · 출발지 aa': 'B gets it · from aa',
  'A가 받을 곳을 AP로, 최종 목적지를 bb로 적어 보냅니다.': 'A sends with the AP as the receiver and bb as the final destination.',
  'A와 B는 같은 AP에 연결되어 있습니다. A의 프레임은 어디로 먼저 갈까요?': 'A and B are connected to the same AP. Where does A\'s frame go first?',
  'B에게 바로': 'Straight to B', 'AP에게': 'To the AP', '모두에게': 'To everyone',
  '무선 LAN의 노트북은 AP를 통해 이야기합니다. 프레임의 받을 곳 주소가 AP입니다.': 'Laptops on a wireless LAN talk through the AP. The frame\'s receiver address is the AP.',
  'AP가 받을 곳을 bb로 바꿔 다시 보냅니다. B는 처음 보낸 곳이 aa임을 압니다.': 'The AP sends it on with bb as the receiver. B knows the original sender was aa.',
  // Step 2
  '프레임마다 ACK': 'An ACK for every frame',
  '받은 쪽은 프레임마다 ACK를 보내고, ACK가 없으면 다시 보낸다': 'The receiver sends an ACK for every frame, and a frame without an ACK is sent again',
  '무선 랜카드는 보내는 동안 다른 신호를 들을 수 없어서, 이더넷처럼 충돌이나 잡음을 보내면서 알아챌 수 없습니다. 그래서 받은 쪽이 프레임 하나를 제대로 받을 때마다 ACK를 돌려줍니다. 보낸 쪽은 ACK가 정해진 시간 안에 오지 않으면 그 프레임이 잃어버려졌다고 보고 다시 보냅니다. 1.2의 이더넷은 깨진 프레임을 알리지 않았지만, 무선은 이 자리에서 바로 다시 보냅니다.':
    'A wireless card cannot hear other signals while it sends, so unlike Ethernet it cannot notice a collision or noise while sending. So the receiver returns an ACK each time it gets a frame correctly. If the ACK does not come within a set time, the sender treats the frame as lost and sends it again. Ethernet in 1.2 did not report a broken frame, but wireless resends right there.',
  '프레임 1에는 ACK가 돌아옵니다. 프레임 2는 잡음에 묻혀 ACK가 오지 않고, A 이름표가 "1 확인됨 · 2 ACK 없음 → 다시", AP 이름표가 "2 잡음에 묻힘 → 다시 받음"이 됩니다.':
    'Frame 1 gets an ACK back. Frame 2 is drowned by noise and no ACK comes, so A\'s badge becomes "1 confirmed · no ACK for 2 → again" and the AP\'s "2 lost in noise → got it again".',
  '노트북 A가 AP에 프레임 1과 2를 보냅니다. 1에는 ACK가 돌아오고, 2는 전자레인지 잡음에 묻혀 ACK가 오지 않습니다. A가 2를 다시 보내 AP가 받고 ACK를 돌려줍니다.':
    'Laptop A sends frames 1 and 2 to the AP. Frame 1 gets an ACK; frame 2 is drowned by microwave noise and gets none. A sends 2 again, the AP gets it and returns an ACK.',
  '프레임 1 → ACK 1': 'Frame 1 → ACK 1', '프레임 2 잡음에 묻힘 · ACK 없음': 'Frame 2 drowned by noise · no ACK', 'A가 2를 다시 보냄': 'A sends 2 again', 'AP 받음 · ACK 2': 'AP gets it · ACK 2',
  'A가 프레임 1을 보내고 AP가 받습니다.': 'A sends frame 1 and the AP gets it.', 'AP가 ACK 1을 돌려줍니다.': 'The AP returns ACK 1.',
  '프레임 2가 잡음에 묻혀 AP가 읽지 못합니다. ACK도 보내지 않습니다.': 'Frame 2 is drowned by noise and the AP cannot read it. It sends no ACK.',
  'A가 프레임 2의 ACK를 기다리는데 오지 않습니다. A는 어떻게 할까요?': 'A waits for frame 2\'s ACK but it does not come. What does A do?',
  '잘 갔다고 보고 넘어간다': 'Assumes it arrived and moves on', '프레임 2를 다시 보낸다': 'Sends frame 2 again', 'AP 연결을 끊는다': 'Disconnects from the AP',
  'ACK가 정해진 시간 안에 오지 않으면 잃어버린 것으로 보고 다시 보냅니다.': 'If the ACK does not come within a set time, the frame is treated as lost and sent again.',
  'ACK가 오지 않자 A가 프레임 2를 다시 보냅니다. 이번에는 AP가 받습니다.': 'With no ACK, A sends frame 2 again. This time the AP gets it.',
  'AP가 ACK 2를 돌려줍니다.': 'The AP returns ACK 2.',
  // Step 3
  '무작위로 기다리기': 'Waiting at random',
  '채널이 비어도 무작위 칸 수만큼 기다린 뒤 보낸다': 'Even when the channel is free, a sender waits a random number of slots first',
  'A와 C가 보낼 것을 들고, 다른 전송이 끝나기를 기다립니다. 채널이 비는 순간 둘이 바로 보내면 부딪힙니다. 그래서 각자 무작위로 칸 수를 뽑아, 채널이 빈 채로 그만큼 지나야 보냅니다(CSMA/CA). A는 3칸, C는 7칸을 뽑았습니다. 3칸이 지나 A가 보내기 시작하면, C는 채널이 바빠진 것을 듣고 남은 4칸에서 세기를 멈췄다가, A가 끝나면 이어서 셉니다.':
    'A and C both have something to send and wait for another transmission to end. If both sent the moment the channel became free, they would collide. So each draws a random number of slots and sends only after the channel has stayed free that long (CSMA/CA). A drew 3 slots and C drew 7. When A starts sending after 3 slots, C hears the channel go busy, pauses its count with 4 slots left, and carries on once A is done.',
  '채널이 비자 A는 "무작위 3칸 뒤 보냄", C는 "7칸 중 3칸 · A 들림 → 멈춤"이 됩니다. A의 프레임만 AP에 닿아 AP 이름표가 "A 것 받음 · 부딪힘 없음"이 됩니다.':
    'When the channel is free, A becomes "sent after a random 3 slots" and C "3 of 7 · hears A → paused". Only A\'s frame reaches the AP, whose badge becomes "got A\'s · no collision".',
  '가운데 AP 양쪽에 노트북 A와 C가 있습니다. 채널이 비자 A는 무작위 3칸, C는 7칸을 센 뒤 보내려 합니다. 3칸이 먼저 끝난 A가 보내고, C는 남은 4칸에서 멈춥니다.':
    'Laptops A and C are on either side of an AP in the middle. When the channel is free, A counts a random 3 slots and C 7 before sending. A finishes its 3 first and sends; C pauses with 4 left.',
  'A 무작위 3칸 · C 무작위 7칸': 'A random 3 · C random 7', 'A가 먼저 보냄': 'A sends first', 'C: 4칸 남기고 멈춤 · 부딪힘 없음': 'C: pauses with 4 left · no collision',
  '앞의 전송이 끝나 채널이 빕니다. A와 C가 각자 무작위 칸 수를 뽑아 세기 시작합니다.': 'The previous transmission ends and the channel is free. A and C each draw a random number of slots and start counting.',
  '3칸이 먼저 끝난 A가 보냅니다. C는 채널이 바빠진 것을 듣고 남은 4칸에서 멈춥니다.': 'A finishes its 3 slots first and sends. C hears the channel go busy and pauses with 4 left.',
  'A는 3칸, C는 7칸을 뽑았습니다. 어떻게 될까요?': 'A drew 3 slots and C drew 7. What happens?',
  '둘이 동시에 보내 부딪힌다': 'Both send at once and collide', 'A가 먼저 보내고 C는 기다린다': 'A sends first and C waits', 'C가 먼저 보낸다': 'C sends first',
  '칸 수가 작은 쪽이 먼저 끝나 보냅니다. 다른 쪽은 채널이 바빠진 것을 듣고 남은 칸을 들고 멈춥니다.': 'The one with fewer slots finishes first and sends. The other hears the channel go busy and pauses, keeping its remaining slots.',
  'AP가 A에게 ACK를 보냅니다.': 'The AP sends A an ACK.',
  '채널이 다시 비자 C가 남은 4칸을 마저 세고 보냅니다.': 'When the channel is free again, C counts its remaining 4 slots and sends.',
  // Step 4
  '숨은 노트북과 RTS/CTS': 'Hidden laptops and RTS/CTS',
  '서로 들리지 않는 노트북은 AP의 CTS를 듣고 순서를 지킨다': 'Laptops that cannot hear each other take turns by listening to the AP\'s CTS',
  'A와 C가 AP 양쪽 끝에 있어, 둘의 전파는 AP에는 닿지만 서로에게는 닿지 않습니다. C는 A가 보내는 줄 모르고 채널이 비었다고 생각해 보낼 수 있고, 두 신호는 AP에서 부딪힙니다(숨은 단말 문제). 그래서 큰 프레임은 먼저 RTS로 "300µs 쓰겠다"고 AP에 알립니다. AP가 모두에게 CTS로 "A에게 300µs"를 알리면, A의 전파는 못 듣던 C도 AP의 CTS는 듣고 그동안 보내지 않습니다.':
    'A and C are at opposite ends of the AP: both radios reach the AP but not each other. C does not know A is sending, may think the channel is free and send, and the two signals collide at the AP (the hidden-terminal problem). So before a large frame, A first tells the AP with an RTS, "I will use 300µs". When the AP announces to everyone with a CTS, "300µs for A", C, which could not hear A, hears the AP\'s CTS and stays quiet for that time.',
  '바닥의 두 타원이 A와 C의 전파 범위이고, 둘은 AP에서만 겹칩니다. AP 이름표가 "CTS: A에게 300µs"가 되고, C 이름표가 "A 안 들림 · CTS 들음 → 300µs 조용히"가 됩니다.':
    'The two ellipses on the floor are the radio ranges of A and C, overlapping only at the AP. The AP\'s badge becomes "CTS: 300µs for A" and C\'s "heard the CTS → quiet for 300µs".',
  '바닥의 두 타원이 A와 C의 전파 범위이고, 둘은 AP에서만 겹칩니다. AP 이름표가 "CTS: A에게 300µs"가 되고, C 이름표가 "CTS 들음 → 300µs 조용히"가 됩니다.':
    'The two ellipses on the floor are the radio ranges of A and C, overlapping only at the AP. The AP\'s badge becomes "CTS: 300µs for A" and C\'s "heard the CTS → quiet for 300µs".',
  '노트북 A와 C가 AP 양쪽 멀리 있습니다. 바닥의 타원은 각자의 전파 범위로, 서로에게는 닿지 않고 AP에서 겹칩니다. A가 RTS를 보내고 AP가 CTS로 A에게 300µs를 알리자, C가 CTS를 듣고 그동안 조용히 합니다.':
    'Laptops A and C are far out on either side of the AP. The ellipses on the floor are their radio ranges, which do not reach each other but overlap at the AP. A sends an RTS, the AP announces 300µs for A with a CTS, and C hears the CTS and stays quiet meanwhile.',
  'A·C 서로 안 들림 (범위가 AP에서만 겹침)': 'A and C cannot hear each other (ranges overlap only at the AP)', 'A: RTS 300µs': 'A: RTS 300µs', 'AP: CTS "A에게 300µs"': 'AP: CTS "300µs for A"', 'C: CTS 듣고 300µs 조용히': 'C: hears the CTS, quiet for 300µs',
  'A가 큰 프레임을 보내기 전에 RTS로 300µs를 쓰겠다고 AP에 알립니다. C에게는 이 전파가 닿지 않습니다.': 'Before its large frame, A tells the AP with an RTS that it will use 300µs. This signal does not reach C.',
  'C에게는 A의 전파가 닿지 않습니다. RTS/CTS가 없다면 어떻게 될까요?': 'A\'s radio does not reach C. Without RTS/CTS, what would happen?',
  'C가 A를 듣고 기다린다': 'C hears A and waits', 'C도 보내 AP에서 부딪힌다': 'C sends too and they collide at the AP', 'AP가 둘 다 받는다': 'The AP gets both',
  'C는 A가 보내는 줄 모르고 채널이 비었다고 여깁니다. 두 신호는 둘 다 닿는 AP에서 부딪힙니다.': 'C does not know A is sending and thinks the channel is free. The two signals collide at the AP, which both reach.',
  'AP가 모두에게 CTS로 "A에게 300µs"를 알립니다. C는 AP의 CTS를 듣고 그동안 조용히 합니다.': 'The AP announces "300µs for A" to everyone with a CTS. C hears the AP\'s CTS and stays quiet meanwhile.',
  'A도 CTS를 받고 보내기 시작합니다.': 'A gets the CTS too and starts sending.',
  'A의 큰 프레임이 부딪힘 없이 AP에 닿습니다.': 'A\'s large frame reaches the AP without a collision.',
};
