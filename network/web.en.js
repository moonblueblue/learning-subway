// English for 5.11 The journey of a web request. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Data in the page: the products 연필, 공책, 지우개 → pencil, notebook, eraser.
window.lessonText = {
  // Page
  '웹 요청의 여정 · 레슨 5.11': 'The journey of a web request · Lesson 5.11',
  '주소를 입력한 뒤 DNS, TCP, TLS, HTTP 요청과 데이터베이스 조회, 추가 파일 요청을 거쳐 화면이 뜨기까지를 한 단계씩 따라가 보세요.':
    'Follow, one stage at a time, everything from typing an address to the page appearing: DNS, TCP, TLS, the HTTP request and database lookup, and requests for more files.',
  '주소를 입력한 뒤 화면이 뜨기까지 어떤 일이 일어날까요? 5장에서 배운 DNS, TCP와 새로 만나는 TLS, HTTP가 한 번의 페이지 열기에서 어떻게 이어지는지 따라가 보세요.':
    'What happens between typing an address and the page appearing? Follow how DNS and TCP from chapter 5 and the new TLS and HTTP link up in opening a single page.',
  '리졸버, 브라우저, 웹 서버, 데이터베이스 사이로 웹 요청과 응답이 오가는 장면': 'Web requests and responses travelling between the resolver, the browser, the web server and the database',
  '페이지 하나를 열기까지': 'Opening one page', '"다음 단계"를 누르면 패킷이 오갑니다.': 'Press "Next step" and packets go back and forth.', '"다음 단계"를 눌러 패킷을 하나씩 보내 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to send the packets one at a time. Prediction questions come up along the way.',
  '리졸버': 'Resolver', '브라우저': 'Browser', '웹 서버': 'Web server', '계층': 'Layers', '응용': 'Application', '라우터': 'Router', '전선': 'Wire', '주소창': 'Address bar', '지금 상태': 'Now', '보낼 요청': 'Request to send', '브라우저와 웹 서버': 'Browser and web server',
  // Badges
  '엔터 누름': 'Enter pressed', '찾는 중': 'Looking up', '주소 앎': 'Knows address', '아는 것: 이름뿐': 'Knows: the name only', 'SYN 받음': 'SYN received', 'SYN-ACK 받음': 'SYN-ACK received', '연결됨': 'Connected', '양쪽: 연결됨': 'Both: connected',
  'TLS 시작': 'TLS start', 'TLS 요청 받음': 'TLS request in', '인증서': 'Certificate', '인증서 받음': 'Cert. received', '인증서 확인': 'Cert. checked', '암호 키 정함': 'Key agreed', '키 정하기': 'Agree on a key', '안녕(TLS)': 'Hello (TLS)', '🔒 암호화': '🔒 Encrypted', '🔒 연결 유지': '🔒 Kept open',
  '요청 받음': 'Request in', '요청 도착': 'Request arrives', '응답 도착': 'Response arrives', '상품 조회': 'Product lookup', '데이터베이스에 묻기': 'Ask the database', '데이터 받음': 'Data received', '답함': 'Answered', 'HTML 만듦': 'HTML made', 'HTML 받음': 'HTML received', 'HTML 읽는 중': 'Reading HTML', '상품 3개': '3 products',
  'CSS 요청': 'CSS request', 'CSS 도착': 'CSS arrives', 'CSS 받음': 'CSS received', '그림 요청': 'Image request', '그림 도착': 'Image arrives', '그림 받음': 'Image received', '그리기': 'Drawing', '화면 완성': 'Page done', 'DNS 질문': 'DNS question', 'DNS 답': 'DNS answer', 'HTTP 요청': 'HTTP request',
  '브라우저 · ACK': 'Browser · ACK', '브라우저 · 키 정하기': 'Browser · agree on key', '브라우저 · 그리기': 'Browser · draw', '웹 서버 · 200 OK': 'Web server · 200 OK',
  '브라우저 → 리졸버': 'Browser → resolver', '리졸버 → 브라우저': 'Resolver → browser', '브라우저 → 웹 서버': 'Browser → web server', '웹 서버 → 브라우저': 'Web server → browser', '웹 서버 → 데이터베이스': 'Web server → database', '데이터베이스 → 웹 서버': 'Database → web server', '브라우저 → 브라우저': 'Browser → browser',
  'TCP 연결됨 · 아직 암호화 전': 'TCP connected · not yet encrypted', '양쪽: 둘만 아는 키를 정함': 'Both: agreed on a key only they know', '🔒 이제부터 내용은 암호화됨': '🔒 Contents are encrypted from now on', '같은 연결 다시 씀 · DNS와 인사 생략': 'Same connection reused · DNS and handshake skipped',
  '"좋아, 너도 들려?"': '"Sure, can you hear me?"', '203.0.113.10:443으로 "연결할래?"': '"Shall we connect?" to 203.0.113.10:443',
  '브라우저 → 리졸버: "shop.example.com의 주소는?"': 'Browser → resolver: "What is shop.example.com\'s address?"',
  '브라우저: "TLS로 이야기하자. 내가 쓸 수 있는 암호 방식은 이것들"': 'Browser: "Let\'s talk TLS. These are the ciphers I can use"',
  '서버: "나는 shop.example.com. 믿을 만한 기관이 서명한 인증서야"': 'Server: "I am shop.example.com. Here is a certificate signed by a trusted authority"',
  '브라우저: 서명 확인 → 진짜 서버': 'Browser: signature checked → the real server',
  '웹 서버: 상품 목록이 필요함': 'Web server: needs the product list', '웹 서버 → DB: "상품 목록을 줘"': 'Web server → DB: "Give me the product list"', 'DB: 연필, 공책, 지우개': 'DB: pencil, notebook, eraser', '웹 서버: HTML 만들기': 'Web server: making HTML',
  '<html>… 연필, 공책, 지우개 …</html>': '<html>… pencil, notebook, eraser …</html>',
  'HTML에서 찾은 파일': 'Files found in the HTML', '색, 글꼴, 배치 규칙': 'Colours, fonts, layout rules', '그림 데이터 수십 KB': 'Tens of KB of image data', 'HTML 구조 + CSS 규칙 → 배치 계산 → 화면에 칠함': 'HTML structure + CSS rules → layout → painted on screen', '상품 목록 페이지가 뜸': 'The product list page appears',
  // Step 1
  '찾고 잇기': 'Find and connect', 'DNS 질문, TCP 인사, TLS 인사': 'DNS question, TCP handshake, TLS handshake',
  '주소를 찾고 연결을 맺는다': 'Find the address and make a connection',
  '주소창에 https://shop.example.com/products를 치고 엔터를 누르면, 브라우저는 먼저 이름을 IP 주소로 바꿉니다(5.10). 주소를 알면 그 서버의 443번 포트로 TCP 연결을 맺습니다(5.9). 아직 페이지 내용은 한 글자도 오가지 않았습니다.':
    'Type https://shop.example.com/products in the address bar and press Enter, and the browser first turns the name into an IP address (5.10). Knowing the address, it makes a TCP connection to port 443 on that server (5.9). Not a single character of the page has travelled yet.',
  'DNS 질문과 답 한 번, TCP 인사 세 번이 지나야 "연결됨"이 뜹니다. 서버가 멀수록 이 왕복 하나하나가 시간을 잡아먹습니다.': '"Connected" appears only after one DNS question and answer and three TCP greetings. The farther the server, the more time each of these round trips eats up.',
  '왼쪽부터 리졸버, 브라우저, 웹 서버, 데이터베이스가 놓여 있습니다. 브라우저가 먼저 왼쪽 리졸버에 묻고, 그다음 오른쪽 웹 서버와 연결합니다.': 'From the left stand the resolver, the browser, the web server and the database. The browser first asks the resolver on its left, then connects to the web server on its right.',
  '브라우저가 이름의 주소를 묻습니다.': 'The browser asks for the name\'s address.', '리졸버가 주소를 알려 줍니다.': 'The resolver gives the address.', '웹 서버에 연결 인사를 보냅니다.': 'It sends a connection greeting to the web server.', '서버가 답합니다.': 'The server answers.', '세 번째 인사로 연결이 맺어졌습니다.': 'The third greeting makes the connection.',
  '브라우저가 서버에 연결하기 전에 꼭 알아야 하는 것은?': 'What must the browser know before connecting to the server?', '서버의 IP 주소': 'The server\'s IP address', '서버의 운영체제': 'The server\'s operating system',
  '패킷은 IP 주소로만 갈 수 있어 이름을 먼저 주소로 바꿉니다.': 'Packets can only go by IP address, so the name is turned into an address first.',
  '여기까지 페이지 내용은 얼마나 받았을까요?': 'How much of the page has been received so far?', '아직 하나도 없다': 'None yet', '절반쯤': 'About half',
  '주소 찾기와 연결 맺기는 준비일 뿐, 내용은 다음 요청부터 오갑니다.': 'Finding the address and connecting are only preparation; the contents travel from the next request on.',
  // Step 2
  '안전한 통로': 'A safe channel',
  'TLS로 상대를 확인하고 암호화한다': 'TLS checks who is on the other end and encrypts',
  '주소가 https로 시작하면 TCP 연결 위에 TLS라는 안전한 통로를 하나 더 만듭니다. 서버는 인증서를 보내 "나는 진짜 shop.example.com"임을 증명하고, 양쪽은 둘만 아는 암호 키를 정합니다. 이후 오가는 내용은 중간의 라우터가 엿봐도 읽을 수 없습니다.':
    'When an address starts with https, another safe channel called TLS is built on top of the TCP connection. The server sends a certificate to prove "I am the real shop.example.com", and both sides agree on a secret key only they know. From then on, routers in between can peek but cannot read what travels.',
  '인증서 확인과 키 정하기가 끝나면 브라우저 주소창에 자물쇠가 뜹니다. 연결 준비에 왕복이 더 들지만, 그 대가로 내용을 숨기고 가짜 서버를 막습니다.': 'When the certificate check and key agreement are done, a padlock appears in the address bar. Setting up costs more round trips, but in return the contents are hidden and fake servers are stopped.',
  '같은 장면입니다. 연결된 브라우저와 웹 서버 사이에 TLS 인사가 오갑니다.': 'The same scene. The TLS handshake travels between the connected browser and web server.',
  '브라우저가 TLS 인사를 보냅니다.': 'The browser sends the TLS hello.', '서버가 인증서를 보내고 브라우저가 확인합니다.': 'The server sends its certificate and the browser checks it.', '둘만 아는 키를 정하면 안전한 통로가 열립니다.': 'Agreeing on a key only they know opens the safe channel.',
  '인증서는 무엇을 증명할까요?': 'What does the certificate prove?', '이 서버가 정말 shop.example.com이라는 것': 'That this server really is shop.example.com', '서버가 빠르다는 것': 'That the server is fast',
  '믿을 만한 기관의 서명이 있어야 가짜 서버가 진짜인 척할 수 없습니다.': 'The signature of a trusted authority is what keeps a fake server from posing as the real one.',
  '중간 라우터가 이후 패킷을 엿보면 무엇을 알 수 있을까요?': 'If a router in between peeks at later packets, what can it learn?', '요청한 페이지와 비밀번호까지 전부': 'Everything, down to the page requested and passwords', '어느 IP끼리 주고받는지 정도': 'Little more than which IPs are talking',
  '주소 헤더(5.7)는 보여야 배달되지만, 안쪽 내용은 암호화되어 읽을 수 없습니다.': 'The address headers (5.7) must be visible to be delivered, but the contents inside are encrypted and unreadable.',
  // Step 3
  '요청과 응답': 'Request and response',
  'HTTP로 요청하고, 서버는 데이터를 꺼내 답한다': 'Request over HTTP; the server fetches the data and answers',
  '이제 브라우저는 HTTP 요청을 보냅니다. "GET /products"는 상품 목록 페이지를 달라는 뜻입니다. 웹 서버는 데이터베이스(6장)에서 상품을 꺼내 HTML을 만들고, 상태 코드와 함께 돌려줍니다. 200은 성공, 404는 그런 페이지 없음, 500은 서버 안 오류입니다.':
    'Now the browser sends an HTTP request. "GET /products" means "give me the product list page". The web server fetches the products from the database (chapter 6), builds the HTML and sends it back with a status code. 200 is success, 404 is no such page, and 500 is an error inside the server.',
  '요청 하나에 웹 서버와 데이터베이스 사이 왕복이 한 번 더 숨어 있습니다. 브라우저는 "200 OK"와 HTML을 받습니다.': 'Hidden inside one request is one more round trip between the web server and the database. The browser gets "200 OK" and the HTML.',
  '같은 장면입니다. 요청이 웹 서버를 거쳐 데이터베이스까지 갔다가 돌아옵니다.': 'The same scene. The request goes through the web server to the database and comes back.',
  '브라우저가 페이지를 요청합니다.': 'The browser requests the page.', '웹 서버가 데이터베이스에 상품을 묻습니다.': 'The web server asks the database for the products.', '데이터베이스가 상품을 돌려주고, 웹 서버가 페이지를 만듭니다.': 'The database returns the products and the web server builds the page.', '웹 서버가 "200 OK"와 HTML을 돌려줍니다.': 'The web server sends back "200 OK" and the HTML.',
  '웹 서버가 데이터베이스에 따로 묻는 까닭은?': 'Why does the web server ask a separate database?', '상품 정보가 데이터베이스에 저장되어 있어서': 'The product information is stored in the database', '브라우저가 시켜서': 'The browser told it to',
  '웹 서버는 요청을 받아 처리하고, 오래 보관할 데이터는 데이터베이스가 맡습니다.': 'The web server takes and handles requests; the database looks after data kept for the long term.',
  '주소를 잘못 쳐서 /prodcts를 요청했다면 어떤 상태 코드가 올까요?': 'If you mistyped and requested /prodcts, which status code would come back?',
  '404는 "그런 페이지가 없다"는 뜻입니다. 500은 서버 쪽 코드가 실패했을 때입니다.': '404 means "no such page". 500 is when code on the server side fails.',
  // Step 4
  'HTML을 읽고 필요한 파일을 더 받아 화면을 그린다': 'Read the HTML, fetch the files it needs, and draw the page',
  'HTML 안에는 스타일(CSS), 그림, 스크립트(JS) 주소가 적혀 있습니다. 브라우저는 HTML을 읽으면서 이 파일들을 더 요청하고, 다 모이면 글자와 그림을 화면에 배치해 그립니다. 같은 서버라면 이미 맺은 연결을 다시 써서, DNS·TCP·TLS 준비를 되풀이하지 않습니다.':
    'The HTML lists the addresses of styles (CSS), images and scripts (JS). As the browser reads the HTML it requests these files too, and once they are all in, it lays out the text and images and draws them. For the same server it reuses the connection it already has, so DNS, TCP and TLS setup are not repeated.',
  '페이지 하나에 요청이 여러 개입니다. 연결을 다시 쓰고, 자주 쓰는 파일은 브라우저 캐시에 두면(3.7) 다음 방문이 빨라집니다.': 'One page takes several requests. Reusing the connection and keeping often-used files in the browser cache (3.7) makes the next visit faster.',
  '같은 장면입니다. 이미 맺은 연결로 CSS와 그림을 더 받아 옵니다.': 'The same scene. CSS and an image are fetched over the connection already made.',
  '브라우저가 스타일 파일을 요청합니다.': 'The browser requests the style file.', 'CSS가 도착합니다.': 'The CSS arrives.', '그림 파일을 요청합니다.': 'It requests the image file.', '그림이 도착합니다.': 'The image arrives.', '모인 파일로 화면을 그립니다.': 'It draws the page from the files gathered.',
  '같은 서버에 두 번째 요청을 보낼 때 다시 하지 않아도 되는 것은?': 'Sending a second request to the same server, what need not be done again?',
  '이미 맺은 연결을 다시 쓰므로 준비 왕복 없이 바로 요청합니다.': 'The connection already made is reused, so the request goes straight out without setup round trips.',
  '다음 방문 때 페이지가 더 빨리 뜨게 하는 방법은?': 'How can the page appear faster on the next visit?', '자주 바뀌지 않는 CSS와 그림을 브라우저 캐시에 둔다': 'Keep CSS and images that rarely change in the browser cache', '요청을 더 많이 나눈다': 'Split into more requests',
  '캐시에 있으면 요청 자체를 건너뜁니다. DNS 캐시와 같은 생각입니다.': 'If it is in the cache, the request is skipped entirely. The same idea as the DNS cache.',
};
