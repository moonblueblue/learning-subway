// English for 6.6 Transactions. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names: 민지 Minji, 서준 Seojun (also inside the SQL text); money in won, 3만 = 30,000.
window.lessonText = {
  // Page
  '트랜잭션 · 레슨 6.6': 'Transactions · Lesson 6.6',
  '계좌 이체 도중 전원이 꺼질 때 반쪽 이체가 남는 문제, BEGIN과 COMMIT으로 묶는 원자성, 로그를 먼저 써서 되돌리기, COMMIT한 일은 다시 실행해 남기는 지속성을 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, the half-done transfer left when power fails mid-transfer, atomicity from wrapping in BEGIN and COMMIT, undoing by writing the log first, and the durability that redoes committed work so it stays.',
  '계좌 이체 도중 전원이 꺼지면 돈은 어떻게 될까요? 같은 3만 원 이체를 트랜잭션 없이, 트랜잭션으로, 그리고 정전이 끼어든 상황에서 따라가 보세요.':
    'What happens to the money if power fails in the middle of a bank transfer? Follow the same 30,000 won transfer without a transaction, with one, and with a power cut in between.',
  '이체 요청이 데이터베이스 엔진에서 로그와 두 계좌로 가는 장면': 'A transfer request going from the database engine to the log and two accounts',
  '이체가 지나가는 정거장': 'Stations the transfer passes through', '"다음 단계"를 누르면 코드가 오른쪽으로 움직입니다.': 'Press "Next step" and the code moves to the right.', '"다음 단계"를 눌러 이체를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the transfer one station at a time. Prediction questions come up along the way.',
  '데이터베이스 엔진': 'Database engine', '요청과 로그': 'Request and log', '파일': 'File', '도구': 'Tool', '오류': 'Error', '요청': 'Request', '이체 요청': 'Transfer request', 'DB 엔진': 'DB engine', '로그 (디스크)': 'Log (disk)', '민지 계좌': 'Minji acct', '서준 계좌': 'Seojun acct', '비어 있음': 'Empty',
  // Legs and badges
  '이체 요청 → DB 엔진': 'Transfer request → DB engine', 'DB 엔진 → 민지 계좌': 'DB engine → Minji\'s account', 'DB 엔진 → 서준 계좌': 'DB engine → Seojun\'s account', 'DB 엔진 → DB 엔진': 'DB engine → DB engine', 'DB 엔진 → 로그 (디스크)': 'DB engine → log (disk)', '로그 (디스크) → 민지 계좌': 'Log (disk) → Minji\'s account', '로그 (디스크) → 서준 계좌': 'Log (disk) → Seojun\'s account', 'DB 엔진 → 이체 요청': 'DB engine → transfer request',
  'DB 엔진 · COMMIT': 'DB engine · COMMIT', 'DB 엔진 · 재시작': 'DB engine · restart', '로그 (디스크) · 되돌리기': 'Log (disk) · undo', '로그 (디스크) · 다시 실행': 'Log (disk) · redo', '재시작 · 되돌리기': 'Restart · undo', '재시작 · 다시 실행': 'Restart · redo',
  '3만 원 이체': '30,000 won transfer', '민지 −3만': 'Minji −30,000', '민지 −3만 (임시)': 'Minji −30,000 (temp)', '서준 +3만 (임시)': 'Seojun +30,000 (temp)', '민지 −30000': 'Minji −30000', '서준 +30000': 'Seojun +30000', '고치기 2개': '2 updates',
  '−30,000 (임시)': '−30,000 (temp)', '+30,000 (임시)': '+30,000 (temp)', '70,000 임시': '70,000 temp', '130,000 임시': '130,000 temp', '100,000 그대로': '100,000 unchanged', '민지 70,000원': 'Minji 70,000 won',
  '꺼짐': 'Off', '정전': 'Power cut', '전원이 꺼짐': 'Power off', '다시 켜짐': 'Back on', '재시작': 'Restart', '다시 켠 뒤': 'After restart', '되돌리기': 'Undo', '다시 실행': 'Redo', '기록': 'Logged', '기록 + COMMIT': 'Logged + COMMIT', '완료': 'Done', '완료 받음': 'Got "done"', '"이체 완료"': '"Transfer done"', '트랜잭션 시작': 'Transaction start', '민지 반영': 'Minji applied', '서준 반영 전에 꺼짐': 'Off before Seojun applied', '로그에 COMMIT까지': 'Log through COMMIT',
  '#42 민지 기록': '#42 Minji logged', '#42 되돌림': '#42 undone', '#43 다시 실행': '#43 redone', '트랜잭션 #41': 'Transaction #41', '트랜잭션 #42': 'Transaction #42', '트랜잭션 #43': 'Transaction #43',
  // Window lines
  '이체 전': 'Before the transfer', '민지 100,000원 · 서준 100,000원': 'Minji 100,000 won · Seojun 100,000 won', '합계 200,000원': 'Total 200,000 won', '민지 70,000원 · 서준 100,000원': 'Minji 70,000 won · Seojun 100,000 won', '합계 170,000원 · 3만 원 사라짐': 'Total 170,000 won · 30,000 won gone',
  '두 번째 UPDATE를 하기 전에 서버가 꺼짐': 'The server goes off before the second UPDATE',
  "UPDATE accounts SET balance = balance - 30000 WHERE name = '민지';": "UPDATE accounts SET balance = balance - 30000 WHERE name = 'Minji';",
  "UPDATE accounts SET balance = balance + 30000 WHERE name = '서준';": "UPDATE accounts SET balance = balance + 30000 WHERE name = 'Seojun';",
  'BEGIN; 민지 −30000; 서준 +30000; COMMIT;': 'BEGIN; Minji −30000; Seojun +30000; COMMIT;',
  '민지 70,000원 (아직 확정 아님)': 'Minji 70,000 won (not final yet)', '서준 130,000원 (아직 확정 아님)': 'Seojun 130,000 won (not final yet)', '민지 70,000원 (COMMIT 전)': 'Minji 70,000 won (before COMMIT)', '다른 사용자에게는 여전히 100,000원으로 보임': 'Other users still see 100,000 won',
  '민지 70,000원 · 서준 130,000원 확정': 'Minji 70,000 won · Seojun 130,000 won final', '민지 70,000 · 서준 130,000 · 합계 200,000원': 'Minji 70,000 · Seojun 130,000 · total 200,000 won',
  '로그: 비어 있음': 'Log: empty', '로그: 트랜잭션 #41 COMMIT': 'Log: transaction #41 COMMIT', '로그: #42 민지 100,000 → 70,000': 'Log: #42 Minji 100,000 → 70,000', '로그 읽기: #42에 COMMIT 없음': 'Reading log: no COMMIT for #42', '민지 70,000 → 100,000으로 되돌림': 'Minji 70,000 → restored to 100,000',
  '로그: #43 민지 100,000 → 70,000': 'Log: #43 Minji 100,000 → 70,000', '로그: #43 서준 100,000 → 130,000': 'Log: #43 Seojun 100,000 → 130,000', '로그: #43 COMMIT': 'Log: #43 COMMIT', '민지에게 "이체 완료" 화면이 뜸': 'Minji sees a "Transfer done" screen', '서준 표에는 아직 100,000원': 'Seojun\'s table still shows 100,000 won',
  '로그 읽기: #43은 COMMIT됨': 'Reading log: #43 committed', '서준 100,000 → 130,000 다시 실행': 'Seojun 100,000 → 130,000 redone', '서준을 고치기 전, COMMIT 전에 꺼짐': 'Off before Seojun was updated, before COMMIT',
  // Step 1
  '반쪽 이체': 'Half a transfer',
  '두 번 고치는 사이에 꺼지면 돈이 사라진다': 'Power failing between two updates makes money vanish',
  '민지가 서준에게 3만 원을 보냅니다. 데이터베이스에서는 "민지 −3만"과 "서준 +3만" 두 번의 고치기입니다. 그런데 첫 번째만 끝나고 전원이 꺼지면 어떻게 될까요? 각 고치기를 따로 하면, 민지 돈은 빠졌는데 서준 돈은 늘지 않은 반쪽 상태가 남습니다.':
    'Minji sends Seojun 30,000 won. In the database that is two updates: "Minji −30,000" and "Seojun +30,000". But what if power fails after only the first is done? Done as separate updates, it leaves a half state where Minji\'s money is gone but Seojun\'s has not grown.',
  '두 계좌 합이 20만 원에서 17만 원이 됐습니다. 3만 원이 어디에도 없습니다. 여러 번의 고치기를 "전부 되거나 전부 안 되거나"로 묶는 방법이 필요합니다.': 'The two accounts\' total went from 200,000 won to 170,000 won. The 30,000 won is nowhere. You need a way to tie several updates together as "all or nothing".',
  '왼쪽부터 이체 요청, DB 엔진, 디스크의 로그, 민지 계좌, 서준 계좌가 놓여 있습니다. 이번에는 로그를 쓰지 않고 계좌를 바로 고칩니다.': 'From the left stand the transfer request, the DB engine, the log on disk, Minji\'s account and Seojun\'s account. This time the accounts are changed directly, without the log.',
  '이체 요청이 두 개의 UPDATE로 옵니다.': 'The transfer request comes as two UPDATEs.', '민지 계좌를 고칩니다.': 'Minji\'s account is updated.', '첫 번째 고치기가 끝났습니다.': 'The first update is done.', '서준 계좌를 고치기 전에 전원이 꺼졌습니다.': 'Power failed before Seojun\'s account was updated.', '다시 켜 보니 반쪽만 된 상태가 그대로 남아 있습니다.': 'Back on, the half-done state is still there.',
  '다시 켜면 두 계좌의 합은?': 'Back on, what is the two accounts\' total?', '200,000원': '200,000 won', '170,000원': '170,000 won',
  '민지 돈은 이미 빠졌고 서준 돈은 늘지 않았습니다. 3만 원이 사라졌습니다.': 'Minji\'s money is already gone and Seojun\'s did not grow. 30,000 won vanished.',
  // Step 2
  '트랜잭션': 'Transactions',
  'BEGIN과 COMMIT 사이는 전부 되거나 전부 안 된다': 'Between BEGIN and COMMIT it is all or nothing',
  '트랜잭션은 여러 고치기를 한 덩어리로 묶습니다. BEGIN으로 시작하고 COMMIT으로 확정합니다. COMMIT 전까지의 고치기는 임시이고, 중간에 문제가 생기면 ROLLBACK으로 전부 되돌립니다. 이 "전부 아니면 전무" 성질을 원자성이라 합니다. 다른 사용자는 COMMIT 전의 임시 값을 보지 못합니다(격리성, 5.6의 잠금으로 지킴).':
    'A transaction ties several updates into one piece. It starts with BEGIN and is made final with COMMIT. Updates before COMMIT are temporary, and if something goes wrong midway, ROLLBACK undoes them all. This "all or nothing" property is called atomicity. Other users cannot see temporary values before COMMIT (isolation, kept by the locks of 5.6).',
  '임시로 고친 두 계좌가 COMMIT 순간 함께 확정됩니다. 합계는 언제 보아도 20만 원입니다.': 'The two temporarily updated accounts become final together at the moment of COMMIT. Whenever you look, the total is 200,000 won.',
  '같은 장면입니다. 이번에는 두 고치기를 BEGIN과 COMMIT으로 묶습니다.': 'The same scene. This time the two updates are wrapped in BEGIN and COMMIT.',
  '두 고치기를 하나의 트랜잭션으로 묶어 보냅니다.': 'The two updates are sent wrapped in one transaction.', '민지 계좌를 임시로 고칩니다.': 'Minji\'s account is updated temporarily.', '서준 계좌도 임시로 고칩니다.': 'Seojun\'s account is updated temporarily too.', 'COMMIT이 기록되는 순간 두 고치기가 함께 확정됩니다.': 'The moment COMMIT is recorded, both updates become final together.',
  '이때 다른 사용자가 민지 잔액을 조회하면?': 'If another user checks Minji\'s balance now?', '100,000원 (확정된 값)': '100,000 won (the final value)', '70,000원 (임시 값)': '70,000 won (the temporary value)',
  '격리성 때문에 COMMIT 전의 임시 값은 다른 트랜잭션에 보이지 않습니다.': 'Because of isolation, temporary values before COMMIT are invisible to other transactions.',
  'COMMIT 직전에 오류가 났다면?': 'What if an error happened just before COMMIT?', '두 고치기가 모두 되돌려진다': 'Both updates are undone', '민지 고치기만 남는다': 'Only Minji\'s update remains',
  'COMMIT하지 않은 트랜잭션은 ROLLBACK되어 시작 전 상태로 돌아갑니다. 원자성입니다.': 'A transaction that did not COMMIT is rolled back to the state before it began. That is atomicity.',
  // Step 3
  '꺼져도 되돌리기': 'Undo after power loss', '로그 먼저': 'Log first',
  '로그를 먼저 쓰면 꺼져도 되돌릴 수 있다': 'Writing the log first makes undo possible after power loss',
  '전원이 꺼지면 메모리의 임시 값은 사라지고, 디스크에 반쯤 쓰인 값이 남을 수 있습니다. 그래서 데이터베이스는 표를 고치기 전에 "무엇을 무엇으로 바꾼다"를 디스크의 로그에 먼저 적습니다(먼저 쓰는 로그, WAL). 다시 켜면 로그를 읽어, COMMIT이 없는 트랜잭션의 고치기를 거꾸로 되돌립니다.':
    'When power fails, temporary values in memory vanish, and half-written values may be left on disk. So before changing a table, the database first writes "change this to that" in a log on disk (write-ahead logging, WAL). Back on, it reads the log and reverses the updates of any transaction with no COMMIT.',
  '로그에 "#42 민지 100,000 → 70,000"은 있지만 COMMIT이 없습니다. 재시작한 엔진은 이것을 되돌려 민지를 100,000원으로 돌려놓습니다. 반쪽 이체가 남지 않습니다.': 'The log has "#42 Minji 100,000 → 70,000" but no COMMIT. The restarted engine reverses it, putting Minji back to 100,000 won. No half transfer is left.',
  '같은 장면입니다. 엔진이 계좌를 고치기 전에 로그부터 씁니다. 중간에 전원이 꺼집니다.': 'The same scene. The engine writes the log before changing the accounts. Power fails midway.',
  '같은 이체를 트랜잭션으로 보냅니다.': 'The same transfer is sent as a transaction.', '계좌를 고치기 전에 바꿀 내용을 로그에 먼저 적습니다.': 'Before changing the account, it writes the change to the log first.', '민지 70,000원 (임시)': 'Minji 70,000 won (temp)',
  '엔진이 로그를 읽고 민지 계좌를 되돌립니다.': 'The engine reads the log and restores Minji\'s account.',
  '다시 켜면 엔진은 #42를 어떻게 처리할까요?': 'Back on, how does the engine handle #42?', '로그에 COMMIT이 없으니 되돌린다': 'No COMMIT in the log, so it undoes it', '로그에 있으니 끝까지 마친다': 'It is in the log, so it finishes it',
  'COMMIT되지 않은 트랜잭션은 없었던 일로 해야 원자성이 지켜집니다. 로그에 적힌 옛 값(100,000)으로 되돌립니다.': 'A transaction that did not COMMIT must be treated as never having happened for atomicity to hold. It is restored to the old value in the log (100,000).',
  // Step 4
  '확정은 남는다': 'Commits stay',
  'COMMIT한 것은 꺼져도 남는다': 'What was committed survives power loss',
  '반대로 COMMIT이 끝났다는 답을 받았다면, 그 직후 전원이 꺼져도 이체는 남아야 합니다. 이것이 지속성입니다. 엔진은 COMMIT 기록을 디스크의 로그에 확실히 쓴 뒤에야 "완료"라고 답합니다. 계좌 표에 아직 반영되지 않았더라도, 재시작 때 로그를 다시 실행해 채워 넣습니다.':
    'Conversely, once you are told COMMIT is done, the transfer must survive even if power fails right after. This is durability. The engine answers "done" only after the COMMIT record is safely written to the log on disk. Even if the account table has not caught up yet, the log is redone at restart to fill it in.',
  '원자성, 일관성(합계 20만 원 같은 규칙), 격리성, 지속성을 묶어 ACID라 부릅니다. 은행, 결제, 재고처럼 틀리면 안 되는 일에 트랜잭션을 씁니다.': 'Atomicity, consistency (rules like the 200,000 won total), isolation and durability together are called ACID. Transactions are used where mistakes are not allowed, such as banking, payments and stock.',
  '같은 장면입니다. COMMIT까지 끝난 뒤, 서준 계좌 표에 반영하기 전에 전원이 꺼집니다.': 'The same scene. After COMMIT is done, power fails before Seojun\'s account table is updated.',
  '같은 이체를 보냅니다.': 'The same transfer is sent.', '두 고치기와 COMMIT을 로그에 확실히 씁니다.': 'The two updates and the COMMIT are safely written to the log.', 'COMMIT이 디스크에 남은 뒤에야 완료라고 답합니다.': 'Only after the COMMIT is on disk does it answer "done".', '표에 반영하기 시작합니다.': 'It starts applying to the tables.', '서준 계좌 표에 반영하기 전에 전원이 꺼졌습니다.': 'Power failed before Seojun\'s account table was updated.', '엔진이 로그를 다시 실행해 서준 계좌를 채웁니다.': 'The engine redoes the log and fills in Seojun\'s account.',
  '엔진이 "완료"라고 답하기 전에 꼭 해야 하는 일은?': 'What must the engine do before answering "done"?', 'COMMIT 기록을 디스크에 쓰기': 'Write the COMMIT record to disk', '두 계좌 표를 모두 고치기': 'Update both account tables',
  '로그에 남아 있으면 표 반영은 나중에 해도 됩니다. 메모리에만 있으면 꺼질 때 사라집니다.': 'If it is in the log, applying to the tables can wait. If it is only in memory, it vanishes when power fails.',
  '재시작한 엔진이 #43을 되돌리지 않고 다시 실행하는 까닭은?': 'Why does the restarted engine redo #43 instead of undoing it?', '로그에 COMMIT이 있어 확정된 일이므로': 'The log has its COMMIT, so it is final', '서준이 요청해서': 'Seojun asked for it',
  '"완료"라고 답한 일은 꺼져도 남아야 합니다. 지속성입니다.': 'Work reported as "done" must survive power loss. That is durability.',
};
