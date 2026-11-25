// English for 8C.5 Network defense. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '네트워크 방어 · 레슨 8C.5': 'Network defense · Lesson 8C.5', 
  '방화벽 규칙으로 필요한 연결만 들여보내고, 웹 서버를 DMZ에 두어 뚫려도 번지지 않게 나누고, 비밀번호 대입과 포트 스캔을 탐지해 막고, 여러 겹의 방어가 한 공격을 어디서 멈추는지 따라가 보세요.':
    'Let in only the connections you need with firewall rules, put the web server in a DMZ so a breach does not spread, detect and block password guessing and port scans, and follow where layered defenses stop an attack.',
  '방화벽과 침입 탐지는 무엇을 어디서 막을까요? 문구점의 네트워크에서 인터넷, 방화벽, DMZ의 웹 서버, 안쪽의 DB와 관리 서버 사이를 오가는 연결을 보세요.':
    'What do firewalls and intrusion detection stop, and where? Watch the connections in the stationery shop\'s network between the internet, the firewall, the web server in the DMZ, and the DB and admin server inside.',
  '문구점의 네트워크': 'The shop\'s network', '인터넷에서 방화벽을 지나 DMZ의 웹 서버와 안쪽의 DB, 관리 서버로 연결이 오가는 장면': 'Connections passing from the internet through a firewall to a web server in the DMZ and to the DB and admin server inside',
  '인터넷': 'Internet', '방화벽·탐지': 'Firewall and detection', '웹 서버 (DMZ)': 'Web (DMZ)', '내부': 'Internal', 
  '"다음 단계"를 누르면 패킷이 오갑니다.': 'Press "Next step" and the packets go back and forth.',
  '"다음 단계"를 눌러 연결을 하나씩 보내 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to send the connections one at a time. Prediction questions come up along the way.',
  '방화벽': 'Firewall', '관리 서버 (내부)': 'Admin (internal)', 'DB (내부)': 'DB (internal)',
  '인터넷 → 방화벽': 'Internet → firewall', '방화벽 → 웹 서버 (DMZ)': 'Firewall → web (DMZ)', '방화벽 → 방화벽': 'Firewall → firewall',
  '웹 서버 (DMZ) → DB (내부)': 'Web (DMZ) → DB (internal)', '웹 서버 (DMZ) → 관리 서버 (내부)': 'Web (DMZ) → admin (internal)', '웹 서버 (DMZ) → 방화벽': 'Web (DMZ) → firewall',
  '방화벽 · 경보': 'Firewall · alert', '인터넷 · → DB :5432': 'Internet · → DB :5432', '웹 서버 (DMZ) · SELECT * FROM users': 'Web (DMZ) · SELECT * FROM users', '웹 서버 (DMZ) · users 표?': 'Web (DMZ) · users table?',
  // Step 1
  '정해 둔 규칙에 맞는 연결만 들여보낸다': 'Only connections that match the rules get in',
  '방화벽은 네트워크 입구에서 들어오는 패킷(5.8)을 규칙과 비교해 통과시키거나 버립니다. 규칙은 "어디서, 어디로, 몇 번 포트(5.9)"로 적습니다. 가장 중요한 규칙은 마지막 줄의 "나머지는 모두 막기"입니다. 열어 둔 것만 지나가므로, 실수로 켜 둔 서비스가 있어도 밖에서는 닿지 않습니다.':
    'A firewall at the network\'s entrance compares incoming packets (5.8) with its rules and lets them through or drops them. Rules are written as "from where, to where, which port (5.9)". The most important rule is the last line: "block everything else". Only what was opened gets through, so even a service left on by mistake cannot be reached from outside.',
  '443번(HTTPS)으로 웹 서버에 오는 연결은 통과하고, 인터넷에서 DB의 5432번으로 바로 오는 연결은 버려졌습니다. "필요한 것만 열고 나머지는 막기"가 방화벽의 기본입니다.':
    'Connections to the web server on 443 (HTTPS) got through, and a connection straight from the internet to the DB\'s port 5432 was dropped. "Open only what is needed and block the rest" is the basis of a firewall.',
  '왼쪽부터 인터넷, 방화벽, 위의 웹 서버(DMZ), 아래의 관리 서버(내부), 오른쪽의 DB(내부)가 있습니다.': 'From the left: the internet, the firewall, the web server (DMZ) above, the admin server (internal) below, and the DB (internal) on the right.',
  '방화벽 규칙 (위에서부터)': 'Firewall rules (from the top)', '1. 인터넷 → 웹 서버 :443 허용': '1. internet → web server :443 allow',
  '2. 사무실 IP 203.0.113.7 → 관리 서버 :22 허용': '2. office IP 203.0.113.7 → admin server :22 allow', '3. 나머지 모두 막기': '3. block everything else', '규칙 3줄': '3 rules',
  '→ 웹 :443': '→ web :443', '웹 접속': 'A web connection', '규칙 1에 맞음 → 통과': 'matches rule 1 → through', '웹 서버 443번 연결이 옵니다.': 'A connection to web server port 443 arrives.', '규칙 1 ✓': 'Rule 1 ✓',
  '웹 서버 도착': 'Reaching the web server', 'HTTPS 연결 시작 (8C.2)': 'HTTPS connection starts (8C.2)', '웹 서버로 통과합니다.': 'It passes to the web server.', '접속 받음': 'Connected',
  'DB로 바로': 'Straight to the DB', '규칙 1, 2에 안 맞음 → 규칙 3: 막기': 'matches neither rule 1 nor 2 → rule 3: block', '패킷 버림': 'packet dropped',
  '인터넷에서 DB로 바로 오는 연결은 막힙니다.': 'A connection straight from the internet to the DB is blocked.', '규칙 3 ✗': 'Rule 3 ✗',
  '인터넷의 아무 IP에서 관리 서버 22번(원격 접속)으로 오면?': 'What if any IP on the internet connects to the admin server\'s port 22 (remote login)?',
  '막힌다 (사무실 IP만 허용)': 'Blocked (only the office IP is allowed)', '통과한다': 'Let through',
  '규칙 2는 사무실 IP에서 온 것만 허용합니다. 나머지는 규칙 3에 걸립니다.': 'Rule 2 allows only the office IP. Everything else hits rule 3.',
  // Step 2
  '망 나누기': 'Segmentation', '뚫려도 번지지 않게 네트워크를 칸으로 나눈다': 'Split the network into zones so a breach does not spread',
  '밖에서 닿아야 하는 웹 서버는 DMZ라는 따로 떨어진 칸에 두고, DB와 관리 서버는 안쪽 칸에 둡니다. 칸 사이에도 규칙을 둬서, 웹 서버는 DB의 5432번에만 말할 수 있고 관리 서버에는 아예 닿지 못하게 합니다. 웹 서버가 8C.4 같은 공격으로 뚫려도, 공격자가 갈 수 있는 곳이 좁아집니다.':
    'The web server, which must be reachable from outside, goes in a separate zone called the DMZ, and the DB and admin server go in an inner zone. Rules between zones too let the web server talk only to the DB\'s port 5432 and never reach the admin server. Even if the web server is broken into by an attack like those in 8C.4, the attacker has fewer places to go.',
  '뚫린 웹 서버에서 관리 서버로 가려는 연결은 칸 사이 규칙에 막혔습니다. DB에는 닿지만 웹 서버용 계정의 권한만큼만 할 수 있습니다. 한 곳이 뚫려도 전부 뚫리지 않게 하는 것이 망 나누기입니다.':
    'The connection from the breached web server to the admin server was blocked by the rules between zones. It can reach the DB, but only do what the web server\'s account is allowed. Segmentation keeps one breach from becoming a breach of everything.',
  '같은 장면입니다. 웹 서버가 뚫린 상황입니다. 웹 서버에서 관리 서버로 가는 길은 막혀 있습니다.': 'The same scene, with the web server breached. The way from the web server to the admin server is blocked.',
  '칸 사이 규칙': 'Rules between zones', 'DMZ(웹) → DB :5432 허용': 'DMZ (web) → DB :5432 allow', 'DMZ(웹) → 관리 서버 막기': 'DMZ (web) → admin server block',
  '웹 서버의 DB 계정: 상품·주문 표만 읽고 쓰기': 'web server\'s DB account: read and write only the product and order tables', '뚫림': 'Breached', '칸 규칙': 'Zone rules',
  '관리 서버로?': 'To admin?', '안쪽으로 번지기 시도': 'Trying to spread inward', '뚫린 웹 서버 → 관리 서버 :22': 'breached web server → admin server :22', 'DMZ → 내부 관리망: 막기': 'DMZ → internal admin network: block',
  '공격자가 웹 서버에서 관리 서버로 가려 합니다.': 'The attacker tries to get from the web server to the admin server.', '막힘': 'Blocked',
  '웹 서버가 뚫려도 관리 서버가 안전한 까닭은?': 'Why is the admin server safe even when the web server is breached?',
  '칸 사이 규칙이 DMZ에서 관리망으로 가는 연결을 막아서': 'Rules between zones block connections from the DMZ to the admin network', '관리 서버가 더 비싸서': 'The admin server is more expensive',
  '네트워크를 칸으로 나누고 칸 사이에 필요한 길만 열어 두면, 한 칸이 뚫려도 다른 칸으로 번지기 어렵습니다.': 'Split the network into zones and open only the paths needed between them, and a breach in one zone has a hard time spreading to others.',
  'DB에는 닿지만': 'It reaches the DB, but', '웹 서버의 DB 계정은 users 표를 읽을 권한이 없음 → 거절': 'the web server\'s DB account may not read the users table → refused',
  '최소 권한 (6.12의 인가와 같은 생각)': 'least privilege (the same idea as authorization in 6.12)', 'DB에는 닿지만 계정 권한만큼만 할 수 있습니다.': 'It reaches the DB but can do only what the account allows.', '권한 없음': 'No permission',
  // Step 3
  '침입 탐지': 'Intrusion detection', '수상한 패턴을 찾아 알린다': 'Find suspicious patterns and raise an alert',
  '규칙으로 막는 것만으로는 모자랍니다. 침입 탐지 시스템은 로그와 트래픽을 지켜보다 수상한 패턴을 찾으면 알립니다. 한 IP가 1분에 로그인을 500번 실패하거나, 짧은 시간에 포트 1,000개를 차례로 두드리면(포트 스캔) 공격 신호입니다. 다만 8B.2처럼 드문 공격을 찾을수록 잘못된 경보가 많아지므로, 경보의 기준을 잘 맞춰야 합니다.':
    'Blocking with rules is not enough. An intrusion detection system watches logs and traffic and raises an alert when it finds a suspicious pattern. One IP failing to log in 500 times a minute, or knocking on 1,000 ports in turn within a short time (a port scan), is a sign of attack. But as in 8B.2, the rarer the attack you look for, the more false alarms you get, so the alert threshold must be set well.',
  '한 IP의 로그인 실패 500번이 경보를 울렸고, 방화벽이 그 IP를 1시간 막았습니다. 탐지와 차단이 이어지면 사람이 보기 전에도 막을 수 있습니다. 기준이 너무 낮으면 비밀번호를 몇 번 틀린 사용자까지 막게 됩니다.':
    '500 failed logins from one IP raised an alert, and the firewall blocked that IP for an hour. When detection leads straight to blocking, attacks can be stopped even before a person looks. Set the threshold too low and users who mistype their password a few times get blocked too.',
  '같은 장면입니다. 방화벽 자리에서 침입 탐지가 트래픽을 지켜봅니다.': 'The same scene. Intrusion detection watches the traffic at the firewall.',
  '탐지 규칙': 'Detection rules', '같은 IP, 1분에 로그인 실패 100번 이상 → 경보 + 1시간 차단': 'same IP, 100+ failed logins in 1 minute → alert + block for 1 hour', '같은 IP, 1분에 포트 50개 이상 → 경보': 'same IP, 50+ ports in 1 minute → alert', '지켜보는 중': 'Watching',
  '로그인 실패 ×500': 'Login fails ×500', '비밀번호 대입': 'Password guessing', '198.51.100.9: 1분에 로그인 500번 실패': '198.51.100.9: 500 failed logins in 1 minute',
  '한 IP가 비밀번호를 마구 대입합니다.': 'One IP tries password after password.', '실패 500': '500 fails',
  '경보': 'Alert', '경보와 차단': 'Alert and block', '기준 100번 초과 → 경보': 'over the threshold of 100 → alert', '198.51.100.9 1시간 차단': 'block 198.51.100.9 for 1 hour',
  '기준을 넘자 경보를 울리고 그 IP를 막습니다.': 'Past the threshold, it raises an alert and blocks that IP.', 'IP 차단': 'IP blocked',
  '기준을 "1분에 실패 3번"으로 낮추면 생기는 문제는?': 'What goes wrong if the threshold is lowered to "3 failures a minute"?',
  '비밀번호를 몇 번 틀린 보통 사용자까지 막힌다': 'Ordinary users who mistype their password a few times get blocked too', '공격을 하나도 못 막는다': 'It stops no attacks at all',
  '기준이 너무 낮으면 잘못된 경보가 쏟아집니다(8B.2). 공격과 실수를 가를 수 있는 기준을 데이터로 정합니다.': 'A threshold that is too low floods you with false alarms (8B.2). Set a threshold from data that separates attacks from mistakes.',
  '포트 1~1000': 'Ports 1–1000', '포트 스캔': 'Port scan', '203.0.113.50: 10초에 포트 1,000개 두드림': '203.0.113.50: knocks on 1,000 ports in 10 seconds', '→ 경보 (무엇이 열려 있는지 찾는 정찰)': '→ alert (scouting for what is open)',
  '포트 스캔도 경보를 울립니다.': 'A port scan raises an alert too.', '스캔 경보': 'Scan alert',
  // Step 4
  '여러 겹': 'Layers', '한 겹이 뚫려도 다음 겹이 막는다': 'If one layer is breached, the next one stops it',
  '완벽한 방어 한 겹은 없습니다. 그래서 방화벽, 망 나누기, 최소 권한, 탐지, 암호화(8C.2), 안전한 코드(8C.3, 8C.4), 빠른 보안 업데이트를 겹겹이 둡니다. 공격자는 모든 겹을 뚫어야 하고, 방어자는 그중 한 겹에서만 막으면 됩니다. 마지막 겹은 백업과 복구 계획입니다.':
    'No single layer of defense is perfect. So firewalls, segmentation, least privilege, detection, encryption (8C.2), safe code (8C.3, 8C.4) and prompt security updates are stacked in layers. The attacker has to get through every layer; the defender only has to stop it at one. The last layer is backups and a recovery plan.',
  '이번 공격은 웹 서버의 알려진 취약점으로 들어왔지만, 망 나누기와 DB 권한에 막혀 고객 정보에 닿지 못했고, 탐지가 이상한 연결을 알렸습니다. 업데이트를 미루지 않았다면 첫 겹에서 막혔을 것입니다.':
    'This attack got in through a known weakness in the web server, but segmentation and DB permissions kept it from customer data, and detection reported the strange connection. Had the update not been put off, it would have been stopped at the first layer.',
  '같은 장면입니다. 공격 하나가 여러 겹을 지나며 어디서 멈추는지 봅니다.': 'The same scene. Follow one attack through the layers and see where it stops.',
  '공격': 'The attack', '웹 서버 프로그램의 알려진 취약점 (3달째 업데이트 안 함)': 'a known weakness in the web server software (not updated for 3 months)', '규칙 · 탐지': 'Rules · detection',
  ':443 공격 요청': 'Attack on :443', '첫 겹: 방화벽': 'Layer 1: firewall', '443은 열린 포트라 통과 (정상 요청처럼 보임)': '443 is an open port, so it passes (looks like a normal request)',
  '공격 요청은 정상 포트로 들어옵니다.': 'The attack comes in through a normal port.', '통과': 'Passed',
  '취약점 공격': 'Exploit', '둘째 겹: 업데이트': 'Layer 2: updates', '업데이트를 안 해 취약점이 남아 있음 → 뚫림': 'no update, so the weakness is still there → breached',
  '업데이트하지 않은 취약점으로 웹 서버가 뚫립니다.': 'The web server is breached through the unpatched weakness.',
  '이 공격을 가장 앞에서 막을 수 있었던 방법은?': 'What could have stopped this attack earliest?', '보안 업데이트를 제때 하기': 'Installing security updates on time', '방화벽에 443을 닫기': 'Closing 443 on the firewall',
  '443을 닫으면 손님도 못 들어옵니다. 알려진 취약점은 업데이트로 막습니다.': 'Closing 443 shuts out customers too. Known weaknesses are fixed with updates.',
  'users 표?': 'Users table?', '셋째 겹: 권한': 'Layer 3: permissions', '웹 서버 계정은 users 표 권한 없음 → 거절': 'the web server account has no rights on the users table → refused',
  '최소 권한이 고객 정보를 지킵니다.': 'Least privilege protects the customer data.', '거절': 'Refused',
  '수상한 바깥 연결': 'Odd outbound link', '넷째 겹: 탐지': 'Layer 4: detection', '웹 서버가 낯선 곳으로 연결 → 경보 → 사람이 확인 · 서버 격리': 'the web server connects somewhere strange → alert → a person checks · server isolated',
  '탐지가 이상한 연결을 알립니다.': 'Detection reports the strange connection.',
  // Example note on the still picture.
  '인터넷 → 웹 :443은 규칙 1로 허용': 'internet → web :443 allowed by rule 1', '인터넷 → DB :5432는 규칙 3으로 막음': 'internet → DB :5432 blocked by rule 3',
  '웹 서버가 뚫려도': 'web server broken into', '관리 서버로는 칸 규칙에 막힘': 'admin server: blocked by zone', 'DB에는 닿지만 users 표는 권한 없음': 'DB reached, users not allowed',
  '같은 IP에서 1분에 로그인 실패 500번': '500 failed logins in 1 minute from one IP', '기준 100을 넘어 경보': 'over the limit of 100: alert', '그 IP를 1시간 차단': 'that IP blocked for 1 hour',
  '3달 묵은 취약점으로 웹 서버가 뚫림': 'a 3-month-old hole: web server broken', '다음 겹: DB가 users 표를 거절': 'next layer: DB refuses users', '수상한 바깥 연결에 경보': 'alert on odd outbound link',
  '규칙 1 허용': 'Rule 1 allows', '웹 서버 (DMZ) · 수상한 바깥 연결': 'Web server (DMZ) · suspicious outbound link', '규칙 3 막음': 'Rule 3 blocks',
};
