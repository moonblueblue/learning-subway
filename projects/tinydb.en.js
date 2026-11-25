// English for 9.2 A tiny database. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '작은 데이터베이스 · 프로젝트 9.2': 'A tiny database · Project 9.2',
  '쓰기를 데이터 파일 끝에 붙이고, 해시 인덱스로 최신 줄을 바로 찾고, COMMIT 줄로 트랜잭션을 확정하고, 다시 켤 때 파일을 훑어 인덱스를 되살리는 작은 키-값 데이터베이스를 처음부터 끝까지 따라가 보세요. 4, 5, 6장을 하나로 엮는 프로젝트입니다.':
    'Follow a tiny key-value database from start to finish: it appends writes to the end of a data file, finds the latest line at once with a hash index, settles transactions with a COMMIT line, and on restart scans the file to rebuild the index. A project that ties chapters 4, 5 and 6 together.',
  '파일에 저장하고, 인덱스로 찾고, 트랜잭션을 지키는 저장소는 어떻게 만들까요? 명령 하나가 작은 데이터베이스 안의 인덱스와 데이터 파일을 지나는 길을 직접 따라가 보세요.':
    'How do you build a store that saves to a file, finds with an index and keeps transactions safe? Follow the path one command takes through the index and data file inside a tiny database.',
  '명령이 작은 DB를 지나 해시 인덱스와 데이터 파일에 쓰이고 읽히는 장면': 'A command passing through the tiny DB to be written to and read from the hash index and data file',
  '작은 DB의 정거장': 'Stations of the tiny DB', '명령과 결과': 'Commands and results', 
  '"다음 단계"를 누르면 명령이 오른쪽으로 움직입니다.': 'Press "Next step" and the command moves to the right.',
  '"다음 단계"를 눌러 명령을 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the command one station at a time. Prediction questions come up along the way.',
  // Stations
  '명령': 'Command', '작은 DB': 'Tiny DB', '해시 인덱스': 'Hash index', '데이터 파일': 'Data file', 
  '명령 → 데이터 파일': 'Command → data file', '명령 → 작은 DB': 'Command → tiny DB', '명령 → 결과': 'Command → result', '명령 · SET 연필 1100': 'Command · SET pencil 1100', '명령 · #8 첫 줄': 'Command · #8 first line',
  '작은 DB → 해시 인덱스': 'Tiny DB → hash index', '작은 DB → 데이터 파일': 'Tiny DB → data file', '작은 DB · 다시 만들기': 'Tiny DB · rebuild',
  '해시 인덱스 → 데이터 파일': 'Hash index → data file', '해시 인덱스 · 줄 2': 'Hash index · line 2', '데이터 파일 → 결과': 'Data file → result', '데이터 파일 → 작은 DB': 'Data file → tiny DB',
  // Step 1
  '파일 끝에 쓰기': 'Append to the file',
  '값을 고쳐도 원래 줄을 그대로 두고 끝에 쓴다': 'Changing a value leaves the old line and writes at the end',
  '기존 줄 0의 연필 1200과 줄 1의 공책 2500은 그대로 남고, 줄 2에 연필 1100이 추가됩니다.': 'The existing pencil 1200 on line 0 and notebook 2500 on line 1 stay as they are, and pencil 1100 is added on line 2.',
  'SET 연필 1100': 'SET pencil 1100', '줄 0 · 연필 1200 (옛 값)': 'Line 0 · pencil 1200 (old)', '줄 1 · 공책 2500': 'Line 1 · notebook 2500', '줄 2 · 연필 1100 (최신)': 'Line 2 · pencil 1100 (latest)', '끝에 추가': 'Append',
  '쓰기는 언제나 파일 끝에 한 줄을 붙인다': 'A write always appends one line to the end of the file',
  '가장 단순하면서 튼튼한 저장 방법부터 시작합니다. SET 명령이 올 때마다 데이터 파일 끝에 "키=값" 한 줄을 붙입니다(5.5의 파일, 8A.3의 로그). 같은 키를 다시 쓰면 옛 줄은 그대로 두고 새 줄을 또 붙입니다. 파일 중간을 고치지 않으므로 쓰기가 빠르고, 쓰다가 꺼져도 앞의 줄은 망가지지 않습니다.':
    'Start with the simplest, sturdiest way to store data. Every SET command appends one "key=value" line to the end of the data file (the files of 5.5, the log of 8A.3). Writing the same key again leaves the old line and appends another. The middle of the file is never changed, so writes are fast, and a power cut mid-write cannot damage earlier lines.',
  '연필 값을 1200에서 1100으로 바꾸자 파일에는 두 줄이 모두 남았습니다. 어느 줄이 최신인지는 나중 줄이 이깁니다. 이 규칙만으로 데이터베이스의 뼈대가 생겼습니다.':
    'Changing pencil from 1200 to 1100 left both lines in the file. As for which is current, the later line wins. This rule alone gives the skeleton of a database.',
  '왼쪽부터 명령, 작은 DB, 해시 인덱스(메모리), 데이터 파일(디스크), 결과가 한 줄로 놓여 있습니다.': 'From the left, the command, the tiny DB, the hash index (memory), the data file (disk) and the result stand in a row.',
  '빈 데이터 파일': 'Empty data file', 'data.db: (비어 있음)': 'data.db: (empty)', '0줄': '0 lines', '1줄': '1 line', '2줄': '2 lines', '3줄': '3 lines',
  'SET 연필 1200': 'SET pencil 1200', '첫 줄': 'First line', '줄 0: 연필=1200': 'Line 0: pencil=1200', '파일 끝에 첫 줄을 붙입니다.': 'Append the first line to the end of the file.',
  'SET 공책 2500': 'SET notebook 2500', '둘째 줄': 'Second line', '줄 1: 공책=2500': 'Line 1: notebook=2500', '둘째 줄을 붙입니다.': 'Append the second line.',
  '값 바꾸기도 붙이기': 'A change is an append too', '줄 0: 연필=1200 (옛 값, 그대로 남음)': 'Line 0: pencil=1200 (old value, left as is)', '줄 2: 연필=1100 (새 값)': 'Line 2: pencil=1100 (new value)',
  '값을 바꿔도 새 줄을 붙일 뿐입니다.': 'Changing a value just appends a new line.',
  '지금 연필의 값은?': 'What is pencil\'s value now?', '1100 (나중 줄이 이김)': '1100 (the later line wins)', '1200 (먼저 쓴 줄)': '1200 (the line written first)',
  '같은 키는 파일에서 더 아래(나중)에 있는 줄이 최신입니다.': 'For the same key, the line further down (later) in the file is the latest.',
  // Step 2
  '인덱스로 찾기': 'Find with an index',
  '해시 인덱스가 연필의 최신 줄을 바로 가리킨다': 'The hash index points straight at pencil\'s latest line',
  '해시 인덱스에서 연필의 최신 위치인 줄 2를 얻어 그 줄의 1100만 읽습니다.': 'Get line 2, pencil\'s latest position, from the hash index and read only that line\'s 1100.',
  'GET 연필': 'GET pencil', '연필 → 줄 2': 'pencil → line 2', '줄 0 · 연필 1200': 'Line 0 · pencil 1200', '줄 2 · 연필 1100': 'Line 2 · pencil 1100',
  '키마다 최신 줄의 위치를 해시 인덱스에 적어 둔다': 'Keep each key\'s latest line position in a hash index',
  '"연필 값은?"을 찾으려고 매번 파일 처음부터 끝까지 읽으면 줄이 백만 개일 때 너무 느립니다(6.5의 전체 스캔). 그래서 메모리에 해시 테이블(4.5)을 두고, 줄을 붙일 때마다 "키 → 그 줄의 위치"를 적어 둡니다. 찾을 때는 해시 테이블에서 위치를 얻고 그 줄 하나만 읽습니다.':
    'Reading the file from start to end every time to answer "what is pencil?" is far too slow with a million lines (the full scan of 6.5). So keep a hash table (4.5) in memory and, with every appended line, write down "key → position of that line". To find a value, get the position from the hash table and read just that one line.',
  '인덱스에는 연필 → 줄 2, 공책 → 줄 1만 있습니다. GET 연필은 인덱스에서 줄 2를 얻어 그 줄만 읽었습니다. 옛 줄 0은 인덱스가 가리키지 않아 읽을 일이 없습니다.':
    'The index holds only pencil → line 2 and notebook → line 1. GET pencil got line 2 from the index and read only that line. The old line 0 is not pointed to by the index, so it never needs reading.',
  '같은 장면입니다. 이번에는 쓸 때 인덱스도 함께 고치고, 읽을 때 인덱스를 거칩니다.': 'The same scene. This time writes update the index too, and reads go through the index.',
  '데이터 파일 (3줄)': 'Data file (3 lines)', '줄 2: 연필=1100': 'Line 2: pencil=1100', '연필→2, 공책→1': 'pencil→2, notebook→1',
  '찾기 요청': 'Lookup request', '연필의 값을 묻습니다.': 'Ask for pencil\'s value.', '찾기': 'Lookup',
  '연필?': 'pencil?', '해시(연필) → 칸 → "줄 2"': 'hash(pencil) → slot → "line 2"', '해시 인덱스에서 위치를 얻습니다.': 'Get the position from the hash index.',
  '인덱스가 있을 때 파일에서 읽는 줄은 몇 개일까요?': 'With the index, how many lines are read from the file?', '1줄 (줄 2만)': '1 line (just line 2)', '3줄 모두': 'All 3 lines',
  '인덱스가 최신 줄의 위치를 알려 주므로 그 줄 하나만 읽습니다. 4.5의 해시처럼 데이터가 늘어도 거의 바로 찾습니다.': 'The index gives the latest line\'s position, so only that line is read. As with the hashing of 4.5, it finds things almost at once even as data grows.',
  '줄 2': 'Line 2', '그 줄만 읽기': 'Read only that line', '파일에서 그 줄만 읽습니다.': 'Read only that line from the file.', '줄 2 읽음': 'Read line 2',
  '답': 'Answer', '연필 = 1100': 'pencil = 1100', '최신 값을 돌려줍니다.': 'Return the latest value.',
  // Step 3
  '트랜잭션': 'Transactions',
  'COMMIT이 기록된 묶음만 확정된다': 'Only batches with a COMMIT written are settled',
  '7번은 두 변경과 COMMIT까지 기록되어 확정됩니다. 8번은 민지 변경만 기록된 채 전원이 꺼져 확정되지 않습니다.': '#7 is settled, with both changes and the COMMIT written. #8 lost power with only Minji\'s change written, so it is not settled.',
  '#7 · 민지 70000 · 서준 130000': '#7 · Minji 70k · Seojun 130k', '두 변경 모두 확정': 'Both changes settled', '#8 · 민지 40000만 기록': '#8 · only Minji 40000 written',
  '전원 꺼짐 · COMMIT 없음': 'Power off · no COMMIT', '#8은 확정되지 않음': '#8 is not settled',
  'COMMIT 줄이 있어야 확정으로 본다': 'Only a COMMIT line makes it settled',
  '6.6의 이체처럼 두 키를 함께 바꿔야 할 때가 있습니다. 작은 DB는 트랜잭션 번호를 붙여 줄을 쓰고, 마지막에 "COMMIT #7" 줄을 붙입니다. 이 줄을 디스크에 확실히 쓴 뒤에야 인덱스를 고치고 "완료"라고 답합니다. COMMIT 줄이 없는 트랜잭션의 줄은 없었던 일로 봅니다.':
    'Sometimes two keys must change together, like the transfer of 6.6. The tiny DB writes lines tagged with a transaction number and finally appends a "COMMIT #7" line. Only after that line is safely on disk does it update the index and answer "done". Lines of a transaction with no COMMIT line are treated as if they never happened.',
  '#7은 COMMIT까지 써서 확정됐습니다. #8은 첫 줄만 쓰고 꺼져 COMMIT이 없으므로, 다시 켜면 그 줄을 무시합니다. 파일 끝에 붙이기만 하는 구조라 "어디까지 확정인가"를 COMMIT 줄 하나로 판단할 수 있습니다.':
    '#7 was written through its COMMIT and is settled. #8 wrote only its first line before power went, with no COMMIT, so on restart that line is ignored. Because the file is append-only, a single COMMIT line tells you "how far is settled".',
  '같은 장면입니다. 두 키를 함께 바꾸는 트랜잭션 두 개를 씁니다.': 'The same scene. Write two transactions that each change two keys together.',
  '계좌': 'Accounts', '민지=100000 · 서준=100000 (확정된 줄)': 'Minji=100000 · Seojun=100000 (settled lines)', '확정된 줄들': 'Settled lines',
  '#7 두 줄': '#7 two lines', '트랜잭션 #7': 'Transaction #7', '#7 민지=70000': '#7 Minji=70000', '#7 서준=130000': '#7 Seojun=130000', '트랜잭션 #7의 두 줄을 붙입니다.': 'Append transaction #7\'s two lines.',
  '확정': 'Settle', 'COMMIT #7 (디스크에 확실히 씀)': 'COMMIT #7 (safely written to disk)', '→ 인덱스 고치고 "완료"': '→ update the index and say "done"', 'COMMIT 줄을 쓴 뒤에야 확정입니다.': 'It is settled only after the COMMIT line is written.',
  '#7 확정': '#7 settled', '민지, 서준 → #7 줄': 'Minji, Seojun → #7 lines',
  '#8 첫 줄': '#8 first line', '트랜잭션 #8': 'Transaction #8', '#8 민지=40000': '#8 Minji=40000', '(서준 줄과 COMMIT을 쓰기 전에 전원이 꺼짐)': '(power goes before the Seojun line and COMMIT are written)',
  '#8은 첫 줄만 쓰고 꺼졌습니다.': '#8 wrote only its first line before power went.', '#8 COMMIT 없음': '#8 no COMMIT',
  '다시 켰을 때 민지의 값은?': 'After restarting, what is Minji\'s value?', '70000 (#8은 COMMIT이 없어 무시)': '70000 (#8 has no COMMIT, ignored)', '40000 (마지막 줄)': '40000 (the last line)',
  '"나중 줄이 이긴다"는 확정된 줄끼리의 규칙입니다. COMMIT 없는 #8의 줄은 없었던 일입니다.': '"The later line wins" is a rule among settled lines. #8\'s line, with no COMMIT, never happened.',
  // Step 4
  '다시 켜기': 'Restart',
  '재시작 때 로그를 읽고 확정된 줄로 복구한다': 'On restart, read the log and recover from settled lines',
  '디스크 로그를 다시 읽어 7번의 확정된 값만 인덱스에 반영하고 미확정 8번은 건너뜁니다.': 'Reread the disk log, put only #7\'s settled values into the index, and skip the unsettled #8.',
  '#7 · COMMIT 있음': '#7 · has COMMIT', '#8 · COMMIT 없음': '#8 · no COMMIT', '반영': 'Apply', '건너뜀': 'Skip', '복구한 인덱스': 'Recovered index', '민지 70000': 'Minji 70000', '서준 130000': 'Seojun 130000',
  '파일을 처음부터 읽어 인덱스를 다시 만든다': 'Read the file from the start to rebuild the index',
  '전원이 꺼지면 메모리의 해시 인덱스는 사라집니다. 하지만 데이터 파일이 디스크에 남아 있으니, 켤 때 파일을 처음부터 끝까지 한 번 읽으며 인덱스를 다시 만듭니다. 확정된 줄만 반영하고, COMMIT 없는 트랜잭션의 줄은 버립니다. 파일이 너무 커지면 키마다 최신 줄만 모아 새 파일로 다시 쓰고(8A.3의 합치기) 옛 파일을 지웁니다.':
    'When power goes, the hash index in memory is lost. But the data file remains on disk, so on startup the file is read once from start to end to rebuild the index. Only settled lines are applied; lines of transactions with no COMMIT are discarded. When the file grows too large, the latest line for each key is gathered and rewritten into a new file (the compaction of 8A.3) and the old file deleted.',
  '파일을 한 번 훑어 인덱스가 민지 → 70000(#7), 서준 → 130000(#7)으로 다시 만들어졌고 #8의 줄은 버려졌습니다. 파일에 붙이기, 해시 인덱스, COMMIT 줄, 다시 읽기, 이 네 가지가 작은 데이터베이스의 전부입니다. 실제 데이터베이스도 이 생각을 크게 키운 것입니다.':
    'One scan of the file rebuilt the index as Minji → 70000 (#7) and Seojun → 130000 (#7), and #8\'s line was discarded. Appending to a file, a hash index, COMMIT lines and rereading: these four are the whole tiny database. Real databases grow this same idea much bigger.',
  '같은 장면입니다. 다시 켠 작은 DB가 데이터 파일을 읽어 인덱스를 되살립니다.': 'The same scene. The restarted tiny DB reads the data file and brings the index back.',
  '다시 켬': 'Restarted', '해시 인덱스: 비어 있음 (메모리라 사라짐)': 'Hash index: empty (it was in memory, so it is gone)', '데이터 파일: 그대로 (디스크)': 'Data file: intact (on disk)', '모든 줄 남음': 'All lines kept',
  '처음부터 읽기': 'Read from start', '파일 훑기': 'Scan the file', '… 민지=100000, 서준=100000': '… Minji=100000, Seojun=100000', '#7 민지=70000, #7 서준=130000, COMMIT #7 → 반영': '#7 Minji=70000, #7 Seojun=130000, COMMIT #7 → apply',
  '#8 민지=40000, COMMIT 없음 → 버림': '#8 Minji=40000, no COMMIT → discard', '파일을 처음부터 읽으며 확정된 줄만 반영합니다.': 'Read the file from the start, applying only settled lines.', '훑는 중': 'Scanning',
  '다시 만들기': 'Rebuild', '인덱스 복구': 'Recover the index', '민지 → #7 줄 (70000)': 'Minji → #7 line (70000)', '서준 → #7 줄 (130000)': 'Seojun → #7 line (130000)', '인덱스가 다시 만들어졌습니다.': 'The index has been rebuilt.', '민지, 서준 → #7': 'Minji, Seojun → #7',
  '인덱스를 다시 만드는 시간은 무엇에 비례할까요?': 'What is the time to rebuild the index proportional to?', '데이터 파일의 줄 수': 'Lines in the data file', '키의 길이': 'Length of the keys',
  '파일을 처음부터 끝까지 한 번 읽기 때문입니다. 그래서 옛 줄을 치우는 합치기가 켜는 시간도 줄여 줍니다.': 'Because the file is read once from start to end. That is why compaction, which clears old lines, also shortens startup.',
  'GET 민지': 'GET Minji', 'GET 민지 → 70000 ✓': 'GET Minji → 70000 ✓', '전원이 꺼져도 확정된 값은 남고, 반쪽 트랜잭션은 사라짐': 'Settled values survive power loss; half-done transactions vanish',
  '확정된 값이 그대로 돌아옵니다.': 'The settled value comes back as is.',
};
