// English for OS 4.3 Concurrency bugs. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '동시성 버그 · 레슨 4.3': 'Concurrency bugs · Lesson 4.3',
  '운영체제 4장 동시성 · 레슨 4.3': 'Operating systems chapter 4 Concurrency · Lesson 4.3',
  '동시성 버그': 'Concurrency bugs',
  '확인과 사용 사이에 끼어드는 원자성 위반, 만들기 전에 쓰는 순서 위반, 서로 기다리다 멈추는 교착 상태, 잠금 순서로 고리를 끊는 방법을 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, an atomicity violation that slips in between a check and a use, an order violation that uses something before it is made, a deadlock where threads stop waiting for each other, and how a lock order breaks the cycle.',
  '실제 프로그램에서 자주 나는 동시성 버그는 어떤 모양이고, 무엇으로 막을까요? 두 스레드가 공유 데이터와 잠금 사이를 오가며 버그가 나는 길을 한 정거장씩 따라가 보세요.':
    'What do the concurrency bugs that often hit real programs look like, and what prevents them? Follow, station by station, how two threads cause bugs moving between shared data and locks.',
  '실제 프로그램에서 자주 나는 동시성 버그는 어떤 모양이고, 무엇으로 막을까?': 'What do common concurrency bugs in real programs look like, and what prevents them?',
  '스레드 둘, 공유 데이터와 잠금, 커널': 'Two threads, shared data and locks, kernel',
  '두 스레드가 공유 데이터와 잠금을 사이에 두고 원자성 위반, 순서 위반, 교착 상태를 일으키는 장면': 'Two threads cause an atomicity violation, an order violation and a deadlock over shared data and locks',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware', '버그 · 멈춤': 'Bug · stuck',
  '스레드': 'Thread', '공유 데이터': 'Shared data', '커널': 'Kernel',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '스레드 1': 'Thread 1', '스레드 2': 'Thread 2', '공유 포인터 p': 'Shared pointer p', '공유 obj': 'Shared obj', '잠금 A': 'Lock A', '잠금 B': 'Lock B',
  // Legs in the stage list and the example strip
  '스레드 1 → 공유 포인터 p': 'Thread 1 → shared pointer p', '스레드 2 → 공유 포인터 p': 'Thread 2 → shared pointer p', '공유 포인터 p → 스레드 1': 'Shared pointer p → thread 1',
  '스레드 2 → 공유 obj': 'Thread 2 → shared obj', '공유 obj → 스레드 2': 'Shared obj → thread 2', '스레드 2 → 커널': 'Thread 2 → kernel',
  '스레드 1 → 잠금 A': 'Thread 1 → lock A', '스레드 2 → 잠금 B': 'Thread 2 → lock B', '스레드 1 → 잠금 B': 'Thread 1 → lock B', '스레드 2 → 잠금 A': 'Thread 2 → lock A', '잠금 A → 스레드 2': 'Lock A → thread 2',
  '공유 포인터 p · NULL': 'Shared pointer p · NULL', '스레드 2 · 해결: wait': 'Thread 2 · fix: wait', '스레드 2 · lock(A)?': 'Thread 2 · lock(A)?', '잠금 A · A 받음': 'Lock A · got A',
  // Badges and moving labels
  'p: 버퍼': 'p: buffer', 'if (p)': 'if (p)', '확인 통과': 'Check passed', 'p = NULL': 'p = NULL', 'p: 있음→NULL': 'p: set→NULL', '사이에 NULL': 'NULL in between', 'NULL': 'NULL', '확인 뒤 죽음': 'Died after check',
  '아직 없음': 'Not yet', '나중에 돎': 'Runs later', 'obj 사용': 'Use obj', 'obj 없음': 'No obj', '빈 값': 'Empty value', '먼저 씀 → 실패': 'Used first → fails', '해결: wait': 'Fix: wait',
  '비어 있음': 'Free', 'lock(A)': 'lock(A)', '스레드 1 보유': 'Held by thread 1', 'A 보유': 'Holds A', 'lock(B)': 'lock(B)', '스레드 2 보유': 'Held by thread 2', 'B 보유': 'Holds B',
  'lock(B)?': 'lock(B)?', 'A 쥐고 B 대기': 'Holds A, waits B', 'lock(A)?': 'lock(A)?', '1→B · 2→A 대기': '1→B · 2→A waiting', 'B 쥐고 A 대기': 'Holds B, waits A',
  '1 보유 · 2 대기': '1 holds · 2 waits', 'A 기다림': 'Waits for A', 'A→B 끝': 'A→B done', '1이 쓰고 풂': '1 used and released', 'A 받음': 'Got A', 'A 기다린 뒤 끝': 'Waited for A, done', '고리 없음': 'No cycle', '1 → 2 차례로': '1 then 2',
  // Step 1
  '원자성 위반': 'Atomicity violation',
  '확인과 사용 사이에 다른 스레드가 끼면 확인이 소용없다': 'If another thread slips in between a check and a use, the check is useless',
  '스레드 1이 if (p != NULL) 로 포인터를 확인한 다음 p가 가리키는 곳에 씁니다. 두 줄은 따로 실행되므로 그 사이에 스레드 2가 p = NULL로 바꿀 수 있습니다. 그러면 스레드 1은 이미 확인을 마쳤다고 믿고 NULL에 써서 죽습니다. 확인과 사용이 한 덩어리(원자적)로 일어나야 한다는 가정이 깨진 것입니다. 두 줄을 같은 락으로 감싸면 사이에 끼어들 수 없습니다.':
    'Thread 1 checks the pointer with if (p != NULL), then writes where p points. The two lines run separately, so thread 2 can set p = NULL in between. Then thread 1, believing the check is done, writes to NULL and dies. The assumption that the check and the use happen as one piece (atomically) is broken. Wrapping both lines in the same lock leaves no gap to slip into.',
  '스레드 1의 확인 뒤 스레드 2가 공유 데이터에 NULL을 써 이름표가 "p: 있음→NULL"이 됩니다. 스레드 1 이름표가 "확인 뒤 죽음"(주황)이 됩니다.':
    'After thread 1\'s check, thread 2 writes NULL to the shared data, whose label becomes "p: set→NULL". Thread 1\'s label becomes "Died after check" (orange).',
  '왼쪽 사용자 영역에 스레드 1, 스레드 2, 공유 포인터 p가, 경계 너머에 커널이 있습니다. p는 버퍼를 가리킵니다.': 'Thread 1, thread 2 and the shared pointer p are in user space on the left; across the boundary is the kernel. p points to a buffer.',
  '스레드 1: if (p) 확인': 'Thread 1: check if (p)', '그 사이 스레드 2: p = NULL': 'Meanwhile thread 2: p = NULL', '스레드 1: p->쓰기 → 죽음': 'Thread 1: p->write → dies', '해결: 확인과 사용을 같은 락으로': 'Fix: the same lock around check and use',
  'if (p != NULL)': 'if (p != NULL)', '    p->값 = 1': '    p->value = 1', 'p->값 = 1': 'p->value = 1', 'p는 버퍼를 가리킴 → 통과': 'p points to the buffer → passes', '스레드 2가 p를 NULL로 바꿈': 'Thread 2 sets p to NULL', 'NULL에 쓰기 → Segmentation fault': 'Write to NULL → Segmentation fault',
  '스레드 1이 p를 확인합니다. 아직 버퍼를 가리키니 통과합니다.': 'Thread 1 checks p. It still points to the buffer, so the check passes.',
  '바로 그 사이 스레드 2가 p를 NULL로 바꿉니다.': 'Right in between, thread 2 sets p to NULL.',
  '스레드 1이 NULL에 쓰려다 죽습니다. 확인과 사용을 같은 락으로 감쌌다면 스레드 2가 끼어들 수 없었습니다.': 'Thread 1 tries to write to NULL and dies. Had the check and use been wrapped in the same lock, thread 2 could not have slipped in.',
  '이제 스레드 1이 p->값 = 1을 실행하면?': 'What happens when thread 1 now runs p->value = 1?',
  '버퍼에 잘 쓴다': 'It writes to the buffer fine', 'NULL에 써서 죽는다': 'It writes to NULL and dies', '자동으로 다시 확인한다': 'It checks again automatically',
  '스레드 1의 확인은 이미 끝났습니다. 확인과 사용 사이에 바뀐 것을 스레드 1은 모릅니다.': 'Thread 1\'s check is already over. Thread 1 does not know what changed between the check and the use.',
  // Step 2
  '순서 위반': 'Order violation',
  '만들기 전에 쓰면 순서를 강제해야 한다': 'Using something before it is made means the order must be enforced',
  '스레드 1이 객체 obj를 만들고, 스레드 2가 그 obj를 쓴다고 합시다. 개발자는 1이 먼저 돌 것이라 기대했지만 스케줄러는 그런 약속을 하지 않습니다. 스레드 2가 먼저 돌면 아직 없는 obj를 씁니다. 이런 "A가 B보다 먼저" 가정은 4.2의 조건 변수로 강제합니다. 스레드 2는 "만들어짐"이 될 때까지 wait하고, 스레드 1은 만든 뒤 signal합니다.':
    'Say thread 1 makes an object obj and thread 2 uses it. The developer expected 1 to run first, but the scheduler makes no such promise. If thread 2 runs first, it uses an obj that does not exist yet. An "A before B" assumption like this is enforced with the condition variable of 4.2: thread 2 waits until "made", and thread 1 signals after making it.',
  '스레드 2가 먼저 공유 데이터에 가 이름표가 "obj 없음", 스레드 2 이름표가 "먼저 씀 → 실패"(주황), 스레드 1 이름표가 "나중에 돎"이 됩니다. 커널 이름표에 해결 "해결: wait"(만들어질 때까지 기다림)가 남습니다.':
    'Thread 2 reaches the shared data first; its label becomes "No obj", thread 2\'s "Used first → fails" (orange), and thread 1\'s "Runs later". The kernel\'s label shows the fix, "Fix: wait" (wait until it is made).',
  '1단계와 같은 정거장입니다. 스레드 1이 obj를 만들 차례인데 스레드 2가 먼저 실행됩니다.': 'The same stations as step 1. It is thread 1\'s turn to make obj, but thread 2 runs first.',
  '기대: 스레드 1이 obj 생성 → 스레드 2가 사용': 'Expected: thread 1 makes obj → thread 2 uses it', '실제: 스레드 2가 먼저 사용 → 빈 값': 'Actual: thread 2 uses it first → empty value', '해결: 조건 변수로 생성될 때까지 wait': 'Fix: wait on a condition variable until it is made',
  'obj->시작()': 'obj->start()', '(스레드 1이 먼저 만들었으리라 가정)': '(assumes thread 1 made it first)', 'obj가 아직 없음': 'obj does not exist yet', '빈 obj를 써서 실패': 'Fails using an empty obj',
  'while (!만들어짐) cond_wait': 'while (!made) cond_wait', '스레드 1: 만든 뒤 signal': 'Thread 1: signal after making it',
  '스케줄러가 스레드 2를 먼저 돌려 아직 없는 obj를 씁니다.': 'The scheduler runs thread 2 first, and it uses an obj that does not exist yet.',
  '스레드 2가 빈 값을 써서 실패합니다.': 'Thread 2 uses an empty value and fails.',
  '해결책은 스레드 2가 "만들어짐"이 될 때까지 조건 변수로 기다리고, 스레드 1이 만든 뒤 signal하는 것입니다.': 'The fix is for thread 2 to wait on a condition variable until "made", and for thread 1 to signal after making it.',
  '스레드 1이 항상 먼저 돈다고 믿어도 될까요?': 'Can we trust thread 1 to always run first?',
  '된다': 'Yes', '안 된다': 'No', '코어가 둘이면 된다': 'Yes, with two cores',
  '스레드 실행 순서는 스케줄러가 정하고 실행마다 다릅니다. 순서가 필요하면 직접 강제해야 합니다.': 'The scheduler decides the order threads run in, and it differs every run. If order matters, it must be enforced.',
  // Step 3
  '교착 상태': 'Deadlock',
  '서로 상대가 쥔 잠금을 기다리면 둘 다 영원히 멈춘다': 'When each waits for the lock the other holds, both stop forever',
  '스레드 1은 잠금 A를 잡고 B를 잡으려 하고, 스레드 2는 B를 잡고 A를 잡으려 합니다. 각자 하나씩 쥔 채 상대 것을 기다리니 누구도 풀지 않아 둘 다 영원히 멈춥니다. 교착 상태에는 네 조건이 함께 필요합니다: 한 번에 하나만 쥘 수 있음, 쥔 채로 더 기다림, 빼앗을 수 없음, 기다림이 고리를 이룸. 하나만 깨면 교착은 생기지 않습니다.':
    'Thread 1 takes lock A and then tries for B; thread 2 takes B and then tries for A. Each holds one and waits for the other\'s, so neither lets go and both stop forever. A deadlock needs four conditions together: only one can hold it at a time, holding while waiting for more, no taking away, and the waits forming a cycle. Breaking just one prevents deadlock.',
  '잠금 A 이름표가 "스레드 1 보유", 잠금 B 이름표가 "스레드 2 보유"가 됩니다. 두 스레드가 상대 잠금을 기다려 커널 이름표가 "1→B · 2→A 대기"가 되고, 두 스레드가 주황이 됩니다.':
    'Lock A\'s label becomes "Held by thread 1" and lock B\'s "Held by thread 2". The two threads wait for each other\'s lock, the kernel\'s label becomes "1→B · 2→A waiting", and both threads turn orange.',
  '왼쪽 사용자 영역에 스레드 1, 스레드 2, 잠금 A, 잠금 B가, 경계 너머에 커널이 있습니다. 스레드 1은 A→B, 스레드 2는 B→A 순서로 잠급니다.': 'Thread 1, thread 2, lock A and lock B are in user space on the left; across the boundary is the kernel. Thread 1 locks A then B, thread 2 locks B then A.',
  '스레드 1: A 잡음 → B 기다림': 'Thread 1: takes A → waits for B', '스레드 2: B 잡음 → A 기다림': 'Thread 2: takes B → waits for A', '기다림이 고리 → 둘 다 영원히 멈춤': 'The waits form a cycle → both stop forever',
  '스레드 1 · 스레드 2': 'Thread 1 · thread 2', '스레드 1: lock(A); lock(B)': 'Thread 1: lock(A); lock(B)', '스레드 2: lock(B); lock(A)': 'Thread 2: lock(B); lock(A)',
  '스레드 1이 A를 잡음': 'Thread 1 takes A', '스레드 2가 B를 잡음': 'Thread 2 takes B', 'B는 스레드 2가 쥠 → 대기': 'Thread 2 holds B → wait', 'A는 스레드 1이 쥠 → 대기': 'Thread 1 holds A → wait', '대기열: 1은 B, 2는 A': 'Waiting: 1 for B, 2 for A',
  '스레드 1이 잠금 A를 잡습니다.': 'Thread 1 takes lock A.',
  '같은 순간 스레드 2가 잠금 B를 잡습니다.': 'At the same moment thread 2 takes lock B.',
  '스레드 1이 B를 잡으려 하지만 스레드 2가 쥐고 있어 기다립니다.': 'Thread 1 tries to take B, but thread 2 holds it, so it waits.',
  '스레드 2도 A를 기다립니다. 둘 다 잠들어 영원히 깨어나지 못합니다.': 'Thread 2 waits for A too. Both sleep and never wake.',
  '이제 스레드 2가 A를 잡으려 하면?': 'What happens when thread 2 now tries to take A?',
  'A를 잡고 끝낸다': 'It takes A and finishes', '스레드 1이 쥔 A를 기다려 둘 다 멈춘다': 'It waits for A, held by thread 1, and both stop', '커널이 A를 빼앗아 준다': 'The kernel takes A away for it',
  '둘 다 상대가 쥔 잠금을 기다리며 자기 것은 놓지 않습니다. 고리가 생겨 누구도 나아가지 못합니다.': 'Both wait for the lock the other holds without letting go of their own. A cycle forms and neither can move on.',
  // Step 4
  '잠금 순서': 'Lock order',
  '모두 같은 순서로 잠그면 기다림이 고리를 이루지 않는다': 'If everyone locks in the same order, the waits never form a cycle',
  '네 조건 가운데 "고리"를 깨는 가장 흔한 방법은 잠그는 순서를 하나로 정하는 것입니다. 모든 스레드가 A를 먼저, B를 나중에 잡으면, 스레드 2는 B를 잡기 전에 A부터 기다립니다. 스레드 1이 A와 B를 다 쓰고 풀면 스레드 2가 차례로 잡습니다. 리눅스 커널도 잠금마다 순서를 정해 두고 lockdep이라는 검사기로 순서가 어긋나는 코드를 찾아냅니다.':
    'Of the four conditions, the most common one to break is the cycle, by fixing one locking order. If every thread takes A first and B second, thread 2 waits for A before it ever takes B. When thread 1 has used A and B and released them, thread 2 takes them in turn. The Linux kernel also fixes an order for its locks and finds code that breaks it with a checker called lockdep.',
  '잠금 A 이름표가 "1 보유 · 2 대기"가 되고, 스레드 1 이름표가 "A→B 끝"이 됩니다. 이어서 스레드 2 이름표가 "A 기다린 뒤 끝", 두 잠금 이름표가 "1 → 2 차례로", 커널 이름표가 "고리 없음"이 됩니다.':
    'Lock A\'s label becomes "1 holds · 2 waits" and thread 1\'s "A→B done". Then thread 2\'s label becomes "Waited for A, done", both locks\' labels "1 then 2", and the kernel\'s "No cycle".',
  '3단계와 같은 정거장입니다. 이번에는 두 스레드 모두 A를 먼저, B를 나중에 잠급니다.': 'The same stations as step 3. This time both threads lock A first and B second.',
  '규칙: 항상 A → B 순서': 'Rule: always A → B', '스레드 2도 A부터 기다림': 'Thread 2 also waits for A first', '스레드 1이 다 쓰고 풂': 'Thread 1 finishes and releases', '스레드 2가 차례로 · 고리 없음': 'Thread 2 in turn · no cycle',
  '둘 다: lock(A); lock(B)': 'Both: lock(A); lock(B)', 'B는 아직 건드리지 않음': 'B not touched yet', '스레드 1이 B도 잡고 일을 끝냄': 'Thread 1 takes B too and finishes', 'A, B 모두 풂': 'Releases both A and B', 'A, 다음 B를 잡고 끝냄': 'Takes A, then B, and finishes',
  '스레드 1이 먼저 A를 잡습니다.': 'Thread 1 takes A first.',
  '스레드 2도 A부터 잡으려 해 기다립니다. B는 건드리지 않았습니다.': 'Thread 2 also tries A first and waits. It has not touched B.',
  '스레드 1이 B도 잡아 일을 끝내고 둘 다 풉니다.': 'Thread 1 takes B too, finishes and releases both.',
  '스레드 2가 A와 B를 차례로 잡고 끝냅니다.': 'Thread 2 takes A and B in turn and finishes.',
  '이번에도 교착 상태가 생길까요?': 'Does a deadlock happen this time?',
  '생긴다': 'Yes', '생기지 않는다': 'No', '반반이다': 'Half the time',
  '스레드 2는 아무 잠금도 쥐지 않은 채 A를 기다립니다. 스레드 1은 B를 막힘 없이 잡고 끝낼 수 있어 고리가 생기지 않습니다.': 'Thread 2 waits for A holding no lock. Thread 1 can take B unhindered and finish, so no cycle forms.',
};
