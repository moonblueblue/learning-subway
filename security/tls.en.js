// English for 8C.2 TLS. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'TLS · 레슨 8C.2': 'TLS · Lesson 8C.2', '8장 심화 트랙 · 8C 보안 · 레슨 8C.2': 'Chapter 8: Advanced tracks · 8C Security · Lesson 8C.2',
  '인증 기관의 서명 사슬로 서버의 공개 키를 믿고, TLS 1.3 악수로 왕복 한 번에 키를 나누며 상대를 확인하고, 가짜 서버가 경고에 걸리는 모습과, 자물쇠가 보장하지 않는 것(피싱)을 따라가 보세요.':
    'Trust a server\'s public key through a chain of certificate-authority signatures, share a key and check the other side in one round trip with the TLS 1.3 handshake, watch a fake server trip a warning, and see what the padlock does not promise (phishing).',
  '브라우저의 자물쇠 표시는 무엇을 보장할까요? 브라우저, 인증 기관, 서버 사이의 인증서와 악수를 따라가며 자물쇠의 뜻을 정확히 알아보세요.':
    'What does the padlock in the browser promise? Follow the certificates and handshake between the browser, the certificate authority and the server, and learn exactly what the padlock means.',
  '브라우저와 서버, 인증 기관': 'Browser, server and certificate authority', '브라우저가 서버의 인증서 사슬을 인증 기관의 공개 키로 확인하고 키를 나누는 장면': 'A browser checking a server\'s certificate chain with certificate-authority public keys and sharing a key',
  '브라우저': 'Browser', '인증 기관': 'CA', '진짜 서버': 'Real server', '가짜·피싱 서버': 'Fake or phishing server', '응용': 'Application', '계층': 'Layers', '전선': 'Wire', '라우터': 'Router',
  '"다음 단계"를 누르면 패킷이 오갑니다.': 'Press "Next step" and the messages go back and forth.',
  '"다음 단계"를 눌러 메시지를 하나씩 보내 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to send the messages one at a time. Prediction questions come up along the way.',
  '가짜 shop.example.com': 'Fake shop.example.com',
  '브라우저 → 인증 기관': 'Browser → CA', '인증 기관 → shop.example.com': 'CA → shop.example.com', 'shop.example.com → 브라우저': 'shop.example.com → browser', '브라우저 → shop.example.com': 'Browser → shop.example.com',
  '브라우저 → 브라우저': 'Browser → browser', '브라우저 → 가짜 shop.example.com': 'Browser → fake shop.example.com', '가짜 shop.example.com → 브라우저': 'Fake shop.example.com → browser',
  '브라우저 → shop-example-login.test': 'Browser → shop-example-login.test', 'shop-example-login.test → 브라우저': 'shop-example-login.test → browser',
  '브라우저 · 사슬 확인': 'Browser · check chain', '브라우저 · 이름 확인': 'Browser · check name', '브라우저 · 🔒 GET /cart': 'Browser · 🔒 GET /cart',
  // Step 1
  '인증서 사슬': 'Certificate chain', '믿는 기관의 서명이 이어지면 서버의 공개 키를 믿는다': 'An unbroken line of signatures from a trusted authority makes the server\'s public key trusted',
  '8C.1의 중간자 공격을 막으려면 "이 공개 키가 정말 shop.example.com의 것"이라는 증명이 필요합니다. 그것이 인증서입니다. 인증서에는 도메인 이름, 서버의 공개 키, 유효 기간이 적혀 있고, 인증 기관(CA)이 개인 키로 서명합니다. 브라우저와 운영체제에는 믿을 만한 루트 기관 수십 곳의 공개 키가 처음부터 들어 있어, 서명을 따라 올라가 루트에 닿으면 믿습니다.':
    'Stopping the man-in-the-middle attack of 8C.1 needs proof that "this public key really belongs to shop.example.com". That is a certificate. It holds the domain name, the server\'s public key and a validity period, and a certificate authority (CA) signs it with its private key. Browsers and operating systems come with the public keys of a few dozen trusted root authorities, so if the signatures lead up to a root, the key is trusted.',
  '서버 인증서는 중간 기관이, 중간 기관 인증서는 루트가 서명했고, 루트 공개 키는 브라우저에 이미 있었습니다. 서명 사슬이 끊김 없이 이어져 "이 공개 키는 shop.example.com의 것"을 믿게 됐습니다.':
    'An intermediate authority signed the server certificate, the root signed the intermediate\'s certificate, and the root public key was already in the browser. The chain of signatures ran unbroken, so "this public key belongs to shop.example.com" came to be trusted.',
  '왼쪽에 브라우저, 위에 인증 기관, 오른쪽에 shop.example.com 서버가 있습니다. 브라우저는 루트 기관의 공개 키를 미리 가지고 있습니다.': 'The browser is on the left, the certificate authority above, and the shop.example.com server on the right. The browser already holds the root authorities\' public keys.',
  '미리 준비된 것': 'Prepared in advance', '브라우저: 루트 기관 공개 키 목록 (설치할 때부터)': 'browser: list of root public keys (since installation)', '서버: 인증 기관에서 받은 인증서': 'server: certificates from a certificate authority',
  '루트 목록': 'Root list', '루트 · 중간 기관': 'Root · intermediate', '인증서 2장': '2 certificates',
  '인증서 발급': 'Issue certs', '미리 받아 둔 인증서': 'Certificates obtained in advance',
  '인증서 1: shop.example.com, 서버 공개 키, 90일 — 중간 기관 서명': 'cert 1: shop.example.com, server public key, 90 days — signed by the intermediate',
  '인증서 2: 중간 기관 공개 키 — 루트 서명': 'cert 2: intermediate public key — signed by the root', '(도메인 주인임을 확인한 뒤 발급)': '(issued after checking domain ownership)',
  '서버는 미리 인증 기관에서 인증서를 받아 두었습니다.': 'The server got its certificates from a certificate authority in advance.',
  '브라우저에 보냄': 'Sent to the browser', '접속하면 인증서 사슬을 보냄': 'on connect, it sends the certificate chain', '서버가 인증서 사슬을 보냅니다.': 'The server sends its certificate chain.', '인증서 받음': 'Got certs',
  '사슬 확인': 'Check chain', '사슬 따라 올라가기': 'Climbing the chain',
  '인증서 1의 서명 → 중간 기관 공개 키로 확인 ✓': 'cert 1 signature → verified with the intermediate public key ✓', '인증서 2의 서명 → 루트 공개 키(브라우저에 있음)로 확인 ✓': 'cert 2 signature → verified with the root public key (in the browser) ✓',
  '이름 shop.example.com = 주소창 ✓ · 기간 안 ✓': 'name shop.example.com = address bar ✓ · within dates ✓', '서명을 따라 올라가 루트에 닿습니다.': 'Follow the signatures up to the root.', '사슬 확인 ✓': 'Chain OK ✓',
  '브라우저가 처음 보는 서버의 공개 키를 믿을 수 있는 까닭은?': 'Why can the browser trust the public key of a server it has never seen?',
  '이미 가진 루트 기관의 공개 키까지 서명 사슬이 이어져서': 'The chain of signatures leads to a root public key it already has', '서버가 자기 공개 키라고 말해서': 'The server says it is its public key',
  '서버의 말이 아니라, 브라우저가 미리 믿기로 한 기관의 서명이 근거입니다.': 'The basis is not the server\'s word but the signature of an authority the browser already chose to trust.',
  // Step 2
  '악수': 'Handshake', '한 번 왕복으로 키를 나누고 상대를 확인한다': 'One round trip shares a key and checks the other side',
  'TLS 1.3의 악수는 짧습니다. 브라우저는 첫 인사에 디피–헬만(8C.1) 공개 수를 담아 보냅니다. 서버는 자기 공개 수, 인증서 사슬, 그리고 지금까지 주고받은 내용 전체에 대한 서명을 한 번에 돌려줍니다. 브라우저는 인증서와 서명을 확인하고, 양쪽은 디피–헬만으로 같은 비밀을 얻어 대칭 키(6.11의 AES)를 만듭니다.':
    'The TLS 1.3 handshake is short. The browser puts a Diffie–Hellman (8C.1) public number in its first hello. The server returns, all at once, its own public number, its certificate chain and a signature over everything exchanged so far. The browser checks the certificate and the signature, and both sides get the same secret through Diffie–Hellman to make a symmetric key (AES from 6.11).',
  '왕복 한 번 만에 키를 나누고 서버가 진짜임을 확인했습니다. 서버가 악수 내용에 서명했으므로, 가운데에서 공개 수를 바꿔치면 서명이 맞지 않아 들킵니다. 8C.1의 중간자 공격이 막혔습니다.':
    'In one round trip a key was shared and the server confirmed as real. The server signed the handshake, so swapping a public number in the middle breaks the signature and is caught. The man-in-the-middle attack of 8C.1 is blocked.',
  '같은 장면입니다. 브라우저와 서버가 TLS 1.3 악수를 합니다.': 'The same scene. The browser and server do a TLS 1.3 handshake.',
  'TLS 1.3 악수': 'TLS 1.3 handshake', 'TCP 연결(5.9) 위에서 시작': 'starts on top of a TCP connection (5.9)', '인증서 · 개인 키': 'Cert · private key',
  '안녕 + 공개 수': 'Hello + public no.', '첫 인사': 'First hello', '쓸 수 있는 암호 방식 + 디피–헬만 공개 수 (예: 8)': 'supported ciphers + Diffie–Hellman public number (e.g. 8)',
  '브라우저가 첫 인사에 공개 수를 담아 보냅니다.': 'The browser sends a public number in its first hello.', '공개 수 받음': 'Got public no.',
  '공개 수 + 인증서 + 서명': 'Public no. + cert + sig', '서버의 답': 'The server\'s reply', '서버 공개 수 (예: 19)': 'server public number (e.g. 19)',
  '지금까지의 악수 내용에 대한 서버의 서명': 'the server\'s signature over the handshake so far', '→ 서버 쪽은 이미 같은 비밀로 키를 만듦': '→ the server has already made the key from the shared secret',
  '서버가 공개 수, 인증서, 악수 내용의 서명을 한 번에 보냅니다.': 'The server sends its public number, certificate and handshake signature at once.', '확인 중': 'Checking',
  '서버가 악수 내용 전체에 서명하는 까닭은?': 'Why does the server sign the whole handshake?',
  '가운데에서 공개 수를 바꿔치면 서명이 맞지 않게 하려고': 'So that swapping a public number in the middle breaks the signature', '악수를 더 빠르게 하려고': 'To make the handshake faster',
  '8C.1의 중간자는 공개 수를 바꿔쳤습니다. 서버가 실제로 주고받은 수에 서명하면 바꿔치기가 드러납니다.': 'The man in the middle of 8C.1 swapped public numbers. If the server signs the numbers actually exchanged, any swap shows.',
  '확인 + 키': 'Check + key', '브라우저의 확인': 'The browser checks', '인증서 사슬 ✓ · 악수 서명 ✓': 'certificate chain ✓ · handshake signature ✓',
  '디피–헬만 → 같은 비밀 → AES 키': 'Diffie–Hellman → same secret → AES key', '왕복 1번으로 끝': 'done in 1 round trip',
  '모두 확인되면 같은 키로 암호화를 시작합니다.': 'When everything checks out, encryption starts with the same key.', '🔒 AES 키': '🔒 AES key',
  '암호화된 요청': 'Encrypted request', '이제부터 요청과 응답은 AES로 잠김 (5.11)': 'from now on requests and responses are locked with AES (5.11)', '이제부터 오가는 내용은 모두 잠깁니다.': 'From now on, everything passing between them is locked.',
  // Step 3
  '가짜 서버': 'Fake server', '사슬이 끊기거나 이름이 다르면 경고한다': 'A broken chain or a wrong name brings a warning',
  '공격자가 같은 와이파이에서 shop.example.com인 척하는 가짜 서버로 브라우저를 끌어들였다고 해 봅시다. 공격자는 shop.example.com의 진짜 인증서를 보내도 그 공개 키에 맞는 개인 키가 없어 악수 서명을 만들 수 없습니다. 스스로 만든 인증서를 보내면 루트까지 사슬이 이어지지 않습니다. 브라우저는 어느 경우든 접속을 멈추고 경고를 띄웁니다.':
    'Say an attacker on the same Wi-Fi lures the browser to a fake server pretending to be shop.example.com. Even if the attacker sends shop.example.com\'s real certificate, it has no private key to match that public key, so it cannot make the handshake signature. If it sends a certificate it made itself, the chain does not reach a root. Either way the browser stops the connection and shows a warning.',
  '스스로 서명한 인증서는 루트에 닿지 않아 "연결이 비공개로 설정되어 있지 않습니다" 경고가 떴습니다. 이 경고를 무시하고 들어가면 TLS의 보호가 모두 사라집니다.':
    'A self-signed certificate does not reach a root, so the "Your connection is not private" warning appeared. Ignoring the warning and going in throws away all of TLS\'s protection.',
  '오른쪽 서버 자리에 가짜 서버가 끼어들었습니다.': 'A fake server has taken the server\'s place on the right.',
  '같은 주소, 다른 서버': 'Same address, different server', '주소창: https://shop.example.com': 'address bar: https://shop.example.com', '가짜 서버: 스스로 서명한 인증서': 'fake server: self-signed certificate', '가짜 인증서': 'Fake cert',
  '브라우저는 진짜 서버인 줄 알고 인사': 'the browser says hello, thinking it is the real server', '브라우저가 평소처럼 인사합니다.': 'The browser says hello as usual.', '인사 받음': 'Got hello',
  'shop.example.com — 서명: 자기 자신': 'shop.example.com — signed by: itself', '가짜 서버가 스스로 서명한 인증서를 보냅니다.': 'The fake server sends a certificate it signed itself.',
  '루트에 닿지 않음': 'Does not reach a root', '서명한 기관이 루트 목록에 없음 ✗': 'the signer is not on the root list ✗', '접속 중단 · 경고 화면': 'connection stopped · warning page',
  '사슬이 루트에 닿지 않아 경고합니다.': 'The chain does not reach a root, so it warns.', '⚠ 경고': '⚠ Warning',
  '공격자가 진짜 shop.example.com 인증서를 그대로 복사해 보내면?': 'What if the attacker copies the real shop.example.com certificate and sends it?',
  '그 인증서의 개인 키가 없어 악수 서명을 못 만들어 실패한다': 'It fails: without that certificate\'s private key it cannot make the handshake signature', '진짜 서버로 인정된다': 'It is accepted as the real server',
  '인증서는 공개된 정보라 복사할 수 있지만, 그 공개 키에 맞는 개인 키는 진짜 서버만 가지고 있습니다.': 'A certificate is public and can be copied, but only the real server has the private key that matches its public key.',
  // Step 4
  '자물쇠의 뜻': 'What the padlock means', '자물쇠는 "이 이름의 주인과 비밀 대화 중"이라는 뜻일 뿐이다': 'The padlock only means "a private conversation with whoever owns this name"',
  '자물쇠가 보장하는 것은 두 가지입니다. 주소창의 이름을 가진 주인과 대화하고 있다는 것, 그리고 그 대화가 중간에서 읽히거나 바뀌지 않는다는 것입니다. 그 사이트가 착한 사이트라는 뜻은 아닙니다. 사기꾼도 shop-example-login.test 같은 비슷한 이름을 사서 진짜 인증서를 받을 수 있습니다. 그 사이트에서는 자물쇠가 떠도 비밀번호를 넣으면 안 됩니다.':
    'The padlock promises two things: that you are talking to the owner of the name in the address bar, and that the conversation is not read or changed on the way. It does not mean the site is a good one. A scammer can also buy a lookalike name such as shop-example-login.test and get a real certificate. On that site, never enter a password even if the padlock shows.',
  '피싱 사이트에도 정상 자물쇠가 떴습니다. 자물쇠는 "누구와"를 이름으로만 보장하므로, 주소창의 이름을 직접 확인하는 습관이 필요합니다. 서버 쪽은 6.12처럼 비밀번호 대신 다른 확인 수단(일회용 코드, 패스키)을 더합니다.':
    'A normal padlock showed on the phishing site too. The padlock promises "with whom" only by name, so you need the habit of checking the name in the address bar yourself. On the server side, as in 6.12, other checks are added besides passwords (one-time codes, passkeys).',
  '오른쪽 서버 자리에 비슷한 이름의 피싱 사이트가 있습니다.': 'A phishing site with a lookalike name is in the server\'s place on the right.',
  '문자로 온 링크': 'A link in a text message', '"주문 확인: https://shop-example-login.test"': '"Confirm your order: https://shop-example-login.test"',
  '사기꾼이 이 이름을 사서 진짜 인증서를 받음': 'the scammer bought this name and got a real certificate', '진짜 인증서': 'Real cert',
  '정상 악수': 'A normal handshake', '인증서 사슬 ✓ · 서명 ✓ · 이름 = 주소창 ✓': 'certificate chain ✓ · signature ✓ · name = address bar ✓', '악수가 정상으로 끝납니다.': 'The handshake finishes normally.', '🔒 자물쇠': '🔒 Padlock',
  '로그인 화면': 'Login page', '진짜처럼 보이는 화면': 'A page that looks real', '문구점과 똑같은 로그인 화면': 'a login page just like the stationery shop\'s',
  '진짜와 똑같은 로그인 화면이 뜹니다.': 'A login page identical to the real one appears.', '🔒 + 가짜 화면': '🔒 + fake page',
  '이 사이트의 자물쇠가 보장하는 것은?': 'What does this site\'s padlock promise?',
  'shop-example-login.test의 주인과 비밀 대화 중이라는 것': 'That you are talking privately with the owner of shop-example-login.test', '믿을 만한 문구점이라는 것': 'That it is a trustworthy stationery shop',
  '자물쇠는 이름과 비밀 대화만 보장합니다. 그 이름의 주인이 사기꾼이면 사기꾼과 안전하게 대화하는 셈입니다.': 'The padlock promises only the name and a private conversation. If the owner of that name is a scammer, you are talking safely with a scammer.',
  '이름 확인': 'Check name', '주소창 확인': 'Checking the address bar', 'shop.example.com ≠ shop-example-login.test': 'shop.example.com ≠ shop-example-login.test',
  '→ 비밀번호를 넣지 않고 닫음': '→ close it without entering the password', '주소창의 이름을 확인하고 닫습니다.': 'Check the name in the address bar and close the page.', '피싱 피함': 'Avoided phishing',
};
