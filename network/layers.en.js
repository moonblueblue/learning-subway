// English for 5.7 Network layers. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Data in the message: GET /인사 → GET /greeting, "안녕" → "hello".
window.lessonText = {
  // Page
  '네트워크 계층 · 레슨 5.7': 'Network layers · Lesson 5.7',
  '메시지가 HTTP, TCP, IP, 링크, 물리 계층을 내려가며 봉투를 한 겹씩 쓰고, 라우터를 지나 받는 쪽에서 벗겨지는 과정을 따라가 보세요.':
    'Follow a message as it goes down the HTTP, TCP, IP, link and physical layers putting on one envelope at a time, passes routers, and has them taken off at the receiving end.',
  '데이터는 왜 여러 겹의 봉투에 싸여 이동할까요? 메시지가 계층을 내려가며 봉투를 쓰고, 받는 쪽에서 벗겨지는 과정을 따라가 보세요.':
    'Why does data travel wrapped in several layers of envelopes? Follow a message as it puts on envelopes going down the layers and has them removed at the receiving end.',
  '메시지가 응용, 전송, 네트워크, 링크, 물리 계층을 지나며 봉투가 한 겹씩 씌워지거나 벗겨지는 장면': 'A message passing the application, transport, network, link and physical layers, gaining or losing one envelope at each',
  '계층과 봉투': 'Layers and envelopes', '받는 프로그램': 'Receiving program', '응용 프로그램': 'Application', 
  '"다음 단계"를 누르면 메시지가 오른쪽으로 움직입니다.': 'Press "Next step" and the message moves to the right.',
  '"다음 단계"를 눌러 메시지를 한 계층씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the message one layer at a time. Prediction questions come up along the way.',
  // Layers, stations and badges
  '전송': 'Transport', '물리 계층': 'Physical layer',
  '응용 · HTTP': 'App · HTTP', '전송 · TCP': 'Transport · TCP', '네트워크 · IP': 'Network · IP', '링크 · 와이파이': 'Link · Wi-Fi', '링크 · 5G': 'Link · 5G', '링크 · 이더넷': 'Link · Ethernet',
  '물리 · 전파': 'Phys · radio', '물리 · 광케이블': 'Phys · fibre', '응용 · 웹 서버': 'App · server',
  '내 기기 링크': 'My device\'s link', '라우터 링크': 'Router link', '라우터 IP': 'Router IP', '라우터 링크(새로)': 'Router link (new)', '서버 링크': 'Server link',
  '네트워크 · IP · TCP': 'Network · IP · TCP', '네트워크 · IP · IP': 'Network · IP · IP', '라우터 IP · IP': 'Router IP · IP',
  '응용 · HTTP → 전송 · TCP': 'App · HTTP → transport · TCP', '전송 · TCP → 네트워크 · IP': 'Transport · TCP → network · IP',
  '네트워크 · IP → 링크 · 와이파이': 'Network · IP → link · Wi-Fi', '네트워크 · IP → 링크 · 5G': 'Network · IP → link · 5G',
  '링크 · 와이파이 → 물리 · 전파': 'Link · Wi-Fi → phys · radio', '링크 · 5G → 물리 · 전파': 'Link · 5G → phys · radio',
  '물리 · 광케이블 → 링크 · 이더넷': 'Phys · fibre → link · Ethernet', '링크 · 이더넷 → 네트워크 · IP': 'Link · Ethernet → network · IP',
  '네트워크 · IP → 전송 · TCP': 'Network · IP → transport · TCP', '전송 · TCP → 응용 · 웹 서버': 'Transport · TCP → app · server',
  '내 기기 링크 → 라우터 링크': 'My device\'s link → router link', '라우터 링크 → 라우터 IP': 'Router link → router IP', '라우터 IP → 라우터 링크(새로)': 'Router IP → router link (new)', '라우터 링크(새로) → 서버 링크': 'Router link (new) → server link',
  'HTTP 요청': 'HTTP request', '요청 받음': 'Request received', '+ IP 머리말': '+ IP header', '+ TCP 머리말': '+ TCP header', '+ 링크 머리말': '+ link header', '+ 광케이블': '+ fibre',
  '− 링크': '− link', '− 와이파이': '− Wi-Fi', '와이파이 봉투': 'Wi-Fi envelope', '목적지 확인': 'Check destination', '도착': 'Arrived', '비트 받음': 'Bits received', '비트 전송': 'Bits sent', '비트': 'bits',
  // Envelopes
  'GET /인사 HTTP': 'GET /greeting HTTP', '"안녕"': '"hello"', 'GET /인사 HTTP "안녕"': 'GET /greeting HTTP "hello"', '{0} GET /인사 HTTP "안녕"': '{0} GET /greeting HTTP "hello"',
  '[TCP 보내는 포트 51000 → 받는 포트 443, 순서 1]': '[TCP sending port 51000 → receiving port 443, sequence 1]',
  '[와이파이 내 기기 → 공유기]': '[Wi-Fi my device → home router]', '[이더넷 라우터 → 서버]': '[Ethernet router → server]', '[광케이블 라우터 → 통신사]': '[fibre router → carrier]',
  '(봉투 네 겹 전체가 비트가 되어 전파로 나감)': '(all four envelopes become bits and go out as radio waves)', '(TCP 봉투는 열지 않음)': '(the TCP envelope is not opened)',
  '응용 계층의 내용': 'Application-layer contents', 'TCP 봉투': 'TCP envelope', 'IP 봉투': 'IP envelope', '받은 비트': 'Bits received', '이더넷 봉투 벗김': 'Ethernet envelope removed', 'IP 봉투 벗김': 'IP envelope removed', 'TCP 봉투 벗김': 'TCP envelope removed',
  '→ 443번 포트의 웹 서버에게': '→ to the web server on port 443', '웹 서버': 'Web server', '5G 봉투': '5G envelope', '전파로 보냅니다.': 'Sends it as radio waves.',
  '라우터: 링크 봉투 벗김': 'Router: link envelope removed', '라우터: 목적지만 봄': 'Router: looks only at the destination', '라우터: 새 링크 봉투': 'Router: new link envelope',
  '목적지 142.250.1.1 → 다음 구간: 통신사 라우터': 'Destination 142.250.1.1 → next leg: carrier router', 'IP 봉투는 처음 그대로 도착': 'The IP envelope arrives as it started',
  // Step 1
  '봉투 싸기': 'Wrapping envelopes',
  '계층마다 자기 봉투를 하나씩 씌운다': 'Each layer puts on its own envelope',
  '웹 브라우저가 보내는 "안녕"은 그대로 전선을 타지 않습니다. 응용 계층(HTTP)의 내용을 전송 계층(TCP)이 포트 번호를 적은 봉투에 넣고, 네트워크 계층(IP)이 주소를 적은 봉투에 다시 넣고, 링크 계층(와이파이·이더넷)이 다음 기계의 주소를 적은 봉투로 한 번 더 싼 뒤, 물리 계층이 비트(0.1)로 바꿔 보냅니다.':
    'The "hello" a web browser sends does not ride the wire as it is. The transport layer (TCP) puts the application layer\'s (HTTP) contents in an envelope marked with port numbers, the network layer (IP) puts that in an envelope marked with addresses, the link layer (Wi-Fi, Ethernet) wraps it once more in an envelope marked with the next machine\'s address, and the physical layer turns it into bits (0.1) and sends it.',
  '아래 창에서 봉투가 한 겹씩 늘어납니다. 각 계층은 자기 봉투의 머리말만 읽고 씁니다. 안의 내용은 몰라도 됩니다.': 'In the window below the envelopes grow one layer at a time. Each layer reads and writes only its own envelope\'s header; it need not know what is inside.',
  '왼쪽부터 응용(HTTP), 전송(TCP), 네트워크(IP), 링크, 물리(전선) 계층이 한 줄로 놓여 있고, 메시지가 오른쪽으로 갈 때마다 봉투가 한 겹씩 씌워집니다.':
    'From the left, the application (HTTP), transport (TCP), network (IP), link and physical (wire) layers stand in a row, and each time the message moves right, it gets another envelope.',
  '전송 계층이 포트 번호(어느 프로그램에게)와 순서 번호를 적은 봉투로 쌉니다(5.9).': 'The transport layer wraps it in an envelope marked with port numbers (which program it is for) and a sequence number (5.9).',
  'TCP 봉투를 씌웁니다.': 'Puts on the TCP envelope.', 'IP 봉투를 씌웁니다.': 'Puts on the IP envelope.',
  '네트워크 계층이 보내는 컴퓨터와 받는 컴퓨터의 IP 주소를 적은 봉투로 쌉니다(5.8).': 'The network layer wraps it in an envelope marked with the IP addresses of the sending and receiving computers (5.8).',
  '링크 계층은 바로 다음 기계(공유기)까지만 가는 봉투를 씌웁니다. 최종 목적지는 IP 봉투에 있습니다.': 'The link layer puts on an envelope that goes only as far as the very next machine (the home router). The final destination is in the IP envelope.',
  '물리 계층이 봉투 전체를 비트로 바꿔 전파나 전기 신호로 보냅니다.': 'The physical layer turns the whole envelope into bits and sends them as radio waves or electrical signals.',
  'TCP 봉투의 포트 번호는 무엇을 가리킬까요?': 'What does the port number on the TCP envelope point to?', '어느 컴퓨터': 'Which computer', '그 컴퓨터의 어느 프로그램': 'Which program on that computer', '어느 나라': 'Which country',
  '443번 포트는 웹 서버 프로그램처럼, 한 컴퓨터 안의 받는 프로그램을 정합니다.': 'Port 443 picks the receiving program inside a computer, such as the web server program.',
  '링크 계층 봉투에 적는 받는 쪽은?': 'Who is written as the receiver on the link-layer envelope?', '최종 목적지 서버': 'The final destination server', '바로 다음 기계(공유기)': 'The very next machine (the home router)',
  '링크 계층은 한 구간만 책임집니다. 구간마다 봉투를 새로 씌웁니다.': 'The link layer is responsible for one leg only. Each leg gets a new envelope.',
  // Step 2
  '봉투 벗기기': 'Removing envelopes',
  '받는 쪽은 아래에서부터 한 겹씩 벗긴다': 'The receiving end removes them one at a time from the bottom',
  '받는 컴퓨터는 거꾸로 합니다. 물리 계층이 비트를 받아 링크 계층에 넘기면, 링크 계층은 자기 봉투를 벗겨 IP 계층에, IP 계층은 주소가 자기 것인지 확인하고 벗겨 TCP에, TCP는 포트 번호를 보고 맞는 프로그램에 내용을 건넵니다.':
    'The receiving computer does it in reverse. The physical layer takes the bits and hands them to the link layer, which removes its envelope and passes it to the IP layer; the IP layer checks the address is its own, removes its envelope and passes it to TCP; and TCP reads the port number and hands the contents to the right program.',
  '봉투가 한 겹씩 줄어 마지막에 "GET /인사 HTTP 안녕"만 웹 서버 프로그램에 닿습니다. 보낼 때 씌운 순서의 거꾸로, 4.3의 스택처럼 벗깁니다.': 'The envelopes shrink one at a time until only "GET /greeting HTTP hello" reaches the web server program. They come off in the reverse of the order they went on, like the stack of 4.3.',
  '받는 서버 쪽입니다. 왼쪽 물리 계층부터 링크, IP, TCP, 응용 계층 순서로 봉투를 벗깁니다.': 'This is the receiving server. Envelopes come off in the order physical, link, IP, TCP, application, from the left.',
  '링크 계층이 "받는 쪽: 서버"를 확인하고 자기 봉투를 벗깁니다.': 'The link layer checks "receiver: server" and removes its envelope.',
  'IP 계층이 받는 주소 142.250.1.1이 자기 것인지 확인하고 벗깁니다.': 'The IP layer checks that the receiving address 142.250.1.1 is its own and removes its envelope.',
  'TCP가 포트 443을 보고 웹 서버 프로그램에 내용을 건넵니다.': 'TCP reads port 443 and hands the contents to the web server program.',
  '웹 서버가 보낸 사람이 쓴 그대로의 요청을 받았습니다.': 'The web server received the request exactly as the sender wrote it.',
  '받는 쪽에서 봉투를 벗기는 순서는?': 'In what order does the receiving end remove the envelopes?', '씌운 순서 그대로': 'The same order they went on', '씌운 순서의 거꾸로': 'The reverse of the order they went on',
  '마지막에 씌운 링크 봉투가 가장 바깥이라 먼저 벗깁니다. 스택과 같습니다.': 'The link envelope, put on last, is outermost, so it comes off first, just like a stack.',
  // Step 3
  '라우터는 어디까지': 'How far a router looks', '내 기기에서 나간 봉투': 'The envelope leaving my device', '구간마다 링크 봉투만 바뀌고': 'Only the link envelope changes on each leg', '여러 구간 뒤 서버': 'The server after several legs',
  '길목의 라우터는 IP 봉투까지만 연다': 'Routers along the way open only as far as the IP envelope',
  '내 기기와 서버 사이에는 공유기와 라우터가 여럿 있습니다(0.7). 라우터는 링크 봉투를 벗기고 IP 봉투의 목적지 주소만 본 뒤, 다음 구간용 링크 봉투를 새로 씌워 내보냅니다. TCP 봉투와 그 안의 내용은 열지 않습니다.':
    'Between my device and the server are a home router and several routers (0.7). A router removes the link envelope, looks only at the destination address on the IP envelope, puts on a new link envelope for the next leg and sends it on. It does not open the TCP envelope or what is inside.',
  '라우터에서 링크 봉투만 "와이파이"에서 "광케이블"로 바뀌고, IP 봉투와 안쪽은 그대로 지나갑니다. 계층을 나눠 두었기에 라우터는 응용 프로그램을 몰라도 됩니다.': 'At the router only the link envelope changes, from "Wi-Fi" to "fibre"; the IP envelope and everything inside pass through unchanged. Because the layers are separate, a router need not know anything about applications.',
  '내 기기의 링크 계층에서 공유기·라우터를 거쳐 서버의 링크 계층으로 갑니다. 라우터는 IP 계층까지만 올라갔다가 다시 내려갑니다.': 'It goes from my device\'s link layer through the home router and routers to the server\'s link layer. A router climbs only as high as the IP layer, then goes back down.',
  '라우터가 와이파이 봉투를 벗깁니다.': 'The router removes the Wi-Fi envelope.',
  '라우터는 IP 머리말의 목적지만 보고 다음에 보낼 곳을 고릅니다(5.8의 라우팅 표).': 'The router looks only at the destination in the IP header and picks where to send it next (the routing table of 5.8).',
  '다음 구간에 맞는 광케이블 링크 봉투를 새로 씌웁니다.': 'It puts on a new fibre link envelope suited to the next leg.',
  '여러 라우터를 거쳐도 IP 봉투는 처음 그대로 서버에 닿습니다.': 'Even through many routers, the IP envelope reaches the server as it started.',
  '라우터는 HTTP 내용("안녕")을 읽을까요?': 'Does a router read the HTTP contents ("hello")?', '읽는다': 'It reads them', '읽지 않는다': 'It does not',
  '라우터는 IP 계층까지만 다룹니다. 안쪽은 그대로 넘깁니다. (암호화하면 읽을 수도 없습니다.)': 'A router handles only up to the IP layer and passes the inside on unchanged. (Encrypted, it could not read it anyway.)',
  // Step 4
  '왜 나누나': 'Why split into layers', '와이파이': 'Wi-Fi', '광케이블': 'Fibre', '전파로 전송': 'Send as radio waves',
  '계층을 나누면 갈아 끼울 수 있다': 'Splitting into layers lets parts be swapped',
  '각 계층은 바로 아래 계층이 무엇을 해 주는지만 알면 됩니다. 그래서 와이파이를 5G로 바꿔도 IP와 TCP와 브라우저는 그대로 돌고, 새 앱을 만들어도 라우터를 바꿀 필요가 없습니다. 3.8의 컴파일러 단계, 5.3의 운영체제 경계처럼 "나누고 약속하기"가 큰 시스템을 만드는 방법입니다.':
    'Each layer only needs to know what the layer just below does for it. So swapping Wi-Fi for 5G leaves IP, TCP and the browser running as before, and making a new app requires no change to routers. Like the compiler stages of 3.8 and the operating-system boundary of 5.3, "split and agree" is how big systems are built.',
  '해 보기의 질문으로 정리해 보세요. 봉투 싸기를 다시 따라가 봐도 됩니다.': 'Sum up with the questions in Try. You can follow the wrapping again too.',
  '보내는 쪽의 다섯 계층이 다시 한 줄로 놓여 있습니다.': 'The sending end\'s five layers stand in a row again.',
  '와이파이 대신 5G 링크 봉투를 씌웁니다. 위 계층은 바뀐 것이 없습니다.': 'A 5G link envelope goes on instead of Wi-Fi. Nothing changed in the layers above.',
  '휴대폰이 와이파이에서 5G로 바뀌면 다시 만들어야 하는 계층은?': 'When a phone switches from Wi-Fi to 5G, which layers must be rebuilt?', 'HTTP부터 전부': 'Everything from HTTP down', 'TCP만': 'Only TCP', '링크·물리 계층만': 'Only the link and physical layers',
  '위 계층들은 "아래가 봉투를 다음 기계로 보내 준다"는 약속만 믿고 돕니다.': 'The layers above run trusting only the promise that "the layer below will send the envelope to the next machine".',
  '봉투(머리말)가 겹겹이 붙는 대가는?': 'What does piling up envelopes (headers) cost?', '보내는 바이트가 조금 늘어난다': 'A few more bytes are sent', '보안이 사라진다': 'Security disappears', '내용이 바뀐다': 'The contents change',
  '머리말만큼 데이터가 늘지만, 그 덕에 각 계층이 따로 발전할 수 있습니다.': 'The data grows by the size of the headers, but in return each layer can develop on its own.',
};
