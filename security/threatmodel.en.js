// English for 8C.6 Threat modeling. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '위협 모델링 · 레슨 8C.6': 'Threat modeling · Lesson 8C.6',
  '무엇을 누구로부터 지킬지 어떻게 정할까요? 지금까지 만든 문구점 웹 앱을 놓고 자산, 위협, 우선순위, 대응을 차례로 정해 보세요.':
    'How do you decide what to protect, and from whom? Take the stationery shop web app built so far and settle its assets, threats, priorities and defenses in turn.',
  '문구점 웹 앱을 대상으로 지킬 자산을 정하고, STRIDE로 위협을 분류하고, 가능성과 피해로 순서를 매기고, 위협마다 알맞은 대응을 짝짓는 위협 모델링을 문제로 익혀 보세요.':
    'Learn threat modeling through exercises on the stationery shop web app: decide the assets to protect, classify threats with STRIDE, rank them by likelihood and harm, and pair each threat with the right defense.',
  // Step 1
  '무엇을 지킬까': 'What to protect',
  '먼저 잃으면 안 되는 것(자산)을 정한다': 'First decide what must not be lost (the assets)',
  '위협 모델링은 "무엇을, 누구로부터, 어떻게 지킬지"를 만들기 전에 따져 보는 일입니다. 첫 질문은 "잃거나 새면 큰일 나는 것이 무엇인가"입니다. 모든 것을 똑같이 지킬 수는 없으니, 새거나 바뀌면 피해가 큰 것을 골라 집중합니다. 이 실험에서는 지금까지 만든 문구점 웹 앱(6.9–6.12, 9.3)을 대상으로 합니다.':
    'Threat modeling means working out "what to protect, from whom, and how" before you build. The first question is "what would be a disaster to lose or leak?" You cannot protect everything equally, so pick what does great harm if leaked or changed and focus on it. This lab uses the stationery shop web app built so far (6.9–6.12, 9.3).',
  '6.12의 비밀번호 해시, 6.9의 결제 회사 비밀 키, 8C.4의 비밀 설정 파일이 모두 지켜야 할 자산이었습니다.':
    'The password hashes of 6.12, the payment company\'s secret key of 6.9 and the secret config file of 8C.4 were all assets to protect.',
  '문구점에서 이것이 새거나 바뀌면 피해가 클까요?': 'Would it do great harm to the shop if this leaked or changed?',
  '꼭 지킬 자산': 'Must protect', '새도 피해가 작다': 'Little harm if leaked',
  '결제 회사 비밀 키': 'Payment company\'s secret key', '새면 남이 우리 이름으로 결제를 부를 수 있습니다(6.9).': 'If it leaks, others can call payments in our name (6.9).',
  '상품 사진과 설명': 'Product photos and descriptions', '원래 누구나 보는 공개 정보입니다. 다만 바뀌지 않게는 지켜야 합니다.': 'It is public information anyone can see anyway. It still must be kept from being changed, though.',
  '고객 비밀번호 해시와 주소': 'Customer password hashes and addresses', '개인정보 유출은 고객에게 직접 피해를 주고 법적 책임도 따릅니다.': 'Leaking personal data harms customers directly and brings legal liability too.',
  '주문과 결제 기록': 'Order and payment records', '바뀌면 돈이 어긋나고, 지워지면 누가 무엇을 샀는지 증명할 수 없습니다.': 'Changed, the money no longer adds up; deleted, no one can prove who bought what.',
  '여러분이 만드는 서비스(또는 쓰는 앱)에서 새면 가장 곤란한 것 세 가지를 꼽아 보세요.': 'Name the three things whose leak would hurt most in a service you build (or an app you use).',
  '예를 들어 메신저라면 대화 내용, 로그인 정보, 연락처 목록입니다. 이것들이 어디에 저장되고 어디로 오가는지부터 그려 봅니다.':
    'For a messenger, say: the conversations, the login details and the contact list. Start by drawing where these are stored and where they travel.',
  // Step 2
  '위협 분류': 'Classify threats',
  'STRIDE로 빠뜨린 위협이 없는지 훑는다': 'Sweep with STRIDE so no threat is missed',
  '위협을 빠짐없이 떠올리려고 STRIDE라는 목록을 씁니다. 위장(남인 척), 변조(내용 바꾸기), 부인(했는데 안 했다고 하기), 정보 유출, 서비스 거부(못 쓰게 만들기), 권한 상승(할 수 없는 일 하기)입니다. 시스템의 부품과 데이터 흐름마다 이 여섯 가지를 차례로 물어봅니다.':
    'To think of every threat, use the list called STRIDE: Spoofing (pretending to be someone else), Tampering (changing content), Repudiation (denying what you did), Information disclosure, Denial of service (making it unusable) and Elevation of privilege (doing what you are not allowed to). Ask these six in turn for every part of the system and every data flow.',
  '앞 레슨의 공격들이 모두 이 목록에 들어갑니다. 8C.1의 중간자, 6.9의 가격 조작, 8C.4의 경로 조작, 8C.3의 버퍼 넘침입니다.':
    'The attacks of earlier lessons all fit this list: the man in the middle of 8C.1, the price tampering of 6.9, the path manipulation of 8C.4 and the buffer overflow of 8C.3.',
  '이 위협은 STRIDE의 어디에 속할까요?': 'Where in STRIDE does this threat belong?',
  '위장': 'Spoofing', '변조': 'Tampering', '정보 유출': 'Info disclosure', '권한 상승': 'Elevation',
  '훔친 세션 쿠키로 남의 계정에 로그인한다 (6.12)': 'Logging in to someone\'s account with a stolen session cookie (6.12)', '다른 사람인 척하는 것이 위장입니다.': 'Pretending to be someone else is spoofing.',
  '요청의 가격을 10원으로 바꿔 보낸다 (6.9)': 'Changing the price in the request to 10 won and sending it (6.9)', '오가는 데이터를 바꾸는 것이 변조입니다.': 'Changing data in transit is tampering.',
  '../ 경로로 비밀 설정 파일을 내려받는다 (8C.4)': 'Downloading the secret config file through a ../ path (8C.4)', '보면 안 되는 정보를 보는 것이 정보 유출입니다.': 'Seeing information you should not see is information disclosure.',
  '버퍼 넘침으로 is_admin을 바꿔 관리자가 된다 (8C.3)': 'Changing is_admin with a buffer overflow to become admin (8C.3)', '원래 권한보다 높은 일을 하게 되는 것이 권한 상승입니다.': 'Getting to do more than your permissions allow is elevation of privilege.',
  '레이트 리미터(7.7)와 서킷 브레이커(7.8)는 STRIDE의 어떤 위협을 줄일까요?': 'Which STRIDE threat do the rate limiter (7.7) and circuit breaker (7.8) reduce?',
  '서비스 거부입니다. 한 사용자나 한 고장 때문에 모두가 서비스를 못 쓰게 되는 것을 막습니다.': 'Denial of service. They stop one user or one failure from making the service unusable for everyone.',
  // Step 3
  '먼저 막을 것': 'What to block first',
  '일어날 가능성과 피해 크기로 순서를 정한다': 'Order by likelihood and size of harm',
  '찾은 위협을 한꺼번에 다 막을 수는 없습니다. 각 위협이 일어날 가능성(쉽게 시도할 수 있나, 이미 흔한가)과 일어났을 때 피해 크기를 매기고, 둘을 곱해 큰 것부터 막습니다. 가능성은 낮아도 피해가 아주 큰 것(결제 키 유출)은 일찍 막습니다.':
    'You cannot block every threat you found at once. Rate each threat\'s likelihood (is it easy to try, is it already common?) and the size of the harm if it happens, multiply the two, and block the biggest first. Something with low likelihood but huge harm (a leaked payment key) gets blocked early.',
  '9.3에서 부하의 병목을 먼저 찾았듯, 보안에서도 가장 위험한 곳부터 손봅니다.': 'Just as 9.3 found the load bottleneck first, security fixes the riskiest spot first.',
  '가능성(1–5) × 피해(1–5) 점수입니다. 먼저 막을까요, 나중에 해도 될까요?': 'Score is likelihood (1–5) × impact (1–5). Block it first, or can it wait?',
  '먼저 막는다': 'Block first', '나중에 해도 된다': 'Can wait',
  '로그인 비밀번호 대입: 가능성 5 × 피해 4 = 20': 'Login password guessing: likelihood 5 × impact 4 = 20', '자동화된 대입 공격은 매일 일어나고 계정을 빼앗깁니다. 레이트 리미터와 일회용 코드를 먼저 둡니다.': 'Automated guessing attacks happen every day and take over accounts. Put a rate limiter and one-time codes in first.',
  '상품 사진 페이지의 작은 글자 깨짐: 가능성 2 × 피해 1 = 2': 'Small garbled text on the product photo page: likelihood 2 × impact 1 = 2', '보안 피해가 거의 없습니다.': 'It does almost no security harm.',
  '결제 키가 프론트엔드 코드에 들어감: 가능성 3 × 피해 5 = 15': 'Payment key ends up in front-end code: likelihood 3 × impact 5 = 15', '피해가 매우 크고 코드만 열면 보입니다. 서버로 옮깁니다(6.9).': 'The harm is huge and anyone who opens the code sees it. Move it to the server (6.9).',
  '관리자 페이지 글꼴이 오래됨: 가능성 1 × 피해 1 = 1': 'Admin page uses an old font: likelihood 1 × impact 1 = 1', '위협이라 보기 어렵습니다.': 'It is hardly a threat.',
  '가능성은 1이지만 피해가 5인 위협(데이터센터 화재로 DB 전부 소실)은 어떻게 다뤄야 할까요?': 'How should you handle a threat of likelihood 1 but impact 5 (a data center fire wiping out the whole DB)?',
  '자주 일어나지 않아도 한 번이면 회사가 끝날 수 있습니다. 다른 지역에 백업과 복제본(7.4)을 두고, 복구 연습을 정기적으로 합니다.': 'It rarely happens, but once could end the company. Keep backups and replicas (7.4) in another region and practice recovery regularly.',
  // Step 4
  '대응 고르기': 'Choose defenses',
  '위협마다 알맞은 대응을 짝짓는다': 'Pair each threat with the right defense',
  '마지막으로 위협마다 대응을 정하고, 정말 막히는지 테스트(6.2)로 확인합니다. 대응은 앞 레슨들에서 이미 배웠습니다. 중요한 것은 위협과 대응을 표로 남겨, 서비스가 바뀔 때마다 다시 훑어보는 것입니다. 위협 모델은 한 번 쓰고 끝내는 문서가 아니라 함께 자라는 지도입니다.':
    'Finally, choose a defense for each threat and check with tests (6.2) that it really blocks it. You have already learned the defenses in earlier lessons. What matters is keeping threats and defenses in a table and sweeping it again whenever the service changes. A threat model is not a document you write once; it is a map that grows with the service.',
  'SameSite와 CSRF 토큰(8C.4), 매개변수 질의(6.12), 레이트 리미터(7.7), 서명과 인증서(8C.1, 8C.2)를 다시 꺼내 씁니다.': 'SameSite and CSRF tokens (8C.4), parameterized queries (6.12), the rate limiter (7.7) and signatures and certificates (8C.1, 8C.2) come back into use.',
  '이 위협에 가장 알맞은 대응은?': 'What is the best defense against this threat?',
  '매개변수 질의': 'Parameterized query', 'SameSite·CSRF 토큰': 'SameSite · CSRF token', '레이트 리미터': 'Rate limiter', '전자 서명 확인': 'Check digital signature',
  '로그인 칸에 \' OR \'1\'=\'1을 넣어 모든 사용자를 꺼낸다': 'Typing \' OR \'1\'=\'1 in the login box to pull out every user', 'SQL 인젝션입니다. 입력을 값으로만 넘기면 막힙니다(6.12).': 'SQL injection. Passing input only as a value blocks it (6.12).',
  '다른 사이트의 숨은 양식이 로그인한 사용자의 포인트를 보낸다': 'A hidden form on another site sends a logged-in user\'s points', '사이트 간 요청 위조입니다(8C.4).': 'Cross-site request forgery (8C.4).',
  '한 IP가 1초에 수천 번 쿠폰 번호를 대입한다': 'One IP tries thousands of coupon codes a second', '대입 공격과 서비스 거부를 함께 줄입니다(7.7).': 'It reduces both guessing attacks and denial of service (7.7).',
  '중간에서 앱 업데이트 파일을 악성 파일로 바꿔치기한다': 'Someone in the middle swaps the app update file for a malicious one', '업데이트 파일에 개발사의 서명을 붙이고 설치 전에 확인합니다(8C.1).': 'Attach the developer\'s signature to the update file and check it before installing (8C.1).',
  '새 기능 "친구에게 선물 보내기"를 만든다면, 어떤 위협을 먼저 떠올리겠어요?': 'If you built a new "send a gift to a friend" feature, which threats would you think of first?',
  '받는 사람을 바꿔치기(변조), 남의 계정으로 선물 보내기(위장), 선물을 끝없이 보내 포인트 빼돌리기(권한·남용), 선물 기록을 부인하기(부인)입니다. 각각 서버 검사, 인증, 레이트 리미터, 기록 남기기로 대응합니다.':
    'Swapping the recipient (tampering), sending gifts from someone else\'s account (spoofing), sending gifts endlessly to drain points (privilege and abuse), and denying a gift record (repudiation). Defend with server checks, authentication, a rate limiter and logging, in that order.',
  // Reading examples
  '결제 회사 비밀 키가 샘': 'the payment company\'s secret key leaks', '남의 이름으로 돈이 나감': 'money goes out in your name', '먼저 지킬 자산': 'an asset to guard first', '훔친 세션 쿠키로 남의 계정에 들어감': 'a stolen session cookie gets into someone\'s account', '남인 척하기': 'pretending to be someone else', 'STRIDE의 S: 위장': 'STRIDE S: spoofing', '비밀번호 대입: 5 × 4 = 20': 'password guessing: 5 × 4 = 20', '결제 키 노출: 3 × 5 = 15': 'payment key exposed: 3 × 5 = 15', '점수 큰 20부터, 15도 곧': 'the 20 first, the 15 soon after', '로그인 칸에 \' OR \'1\'=\'1': '\' OR \'1\'=\'1 in the login box', '입력을 값으로 넘기는 매개변수 질의': 'a parameterized query passes it as a value', '사용자 목록이 새지 않음': 'the user list does not leak',
};
