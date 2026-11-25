// English for 5.6 Concurrency and locks. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '동시성과 락 · 레슨 5.6': 'Concurrency and locks · Lesson 5.6',
  '두 스레드가 같은 count에 1씩 더할 때 걸음을 섞어 경쟁 상태를 만들고, 잠금으로 막고, 교착 상태까지 살펴보세요.':
    'When two threads each add 1 to the same count, mix their steps to cause a race condition, prevent it with a lock, and look at deadlock too.',
  '두 스레드가 같은 값을 동시에 고치면 무슨 일이 생길까요? 두 스레드의 걸음을 직접 섞어 보며 경쟁 상태와 잠금을 확인해 보세요.':
    'What happens when two threads change the same value at once? Mix the two threads\' steps yourself and see race conditions and locks.',
  '가운데 공유 메모리 칸 count를 두 스레드가 양쪽에서 읽고 쓰는 장면': 'Two threads on either side reading and writing the shared memory cell count in the middle',
  '공유 메모리와 두 스레드': 'Shared memory and two threads', '공유 메모리': 'Shared memory', '레지스터': 'Register', '스레드': 'Thread', '한 일': 'Action',
  '스레드 1의 코드': 'Thread 1\'s code', '스레드 2의 코드': 'Thread 2\'s code', '스레드 1 한 걸음': 'Thread 1, one step', '스레드 2 한 걸음': 'Thread 2, one step',
  '스레드를 한 걸음씩 진행해 보세요.': 'Move the threads one step at a time.', '실행 기록 · 걸음 순서대로': 'Run log · in step order', '스레드를 한 걸음씩 진행하면 여기에 쌓입니다': 'Steps pile up here as you move the threads',
  // Steps and readouts
  '읽기: 레지스터 ← count': 'Read: register ← count', '더하기: 레지스터 + 1': 'Add: register + 1', '쓰기: count ← 레지스터': 'Write: count ← register',
  '읽기': 'Read', '더하기': 'Add', '잠금 얻기': 'Get lock', '잠금 풀기': 'Release lock', '잠금 얻음': 'Got the lock', '잠금 풂': 'Released the lock', '끝': 'Done', '다음: {0}': 'Next: {0}',
  '스레드 {#0}': 'Thread {0}', '🔒 스레드 {#0}': '🔒 Thread {0}', '🔓 잠금 열림': '🔓 Lock open', '레지스터 {0}': 'Register {0}', 'count = {#0}': 'count = {0}',
  '결과 count = {#0} ✓ 바름': 'Result count = {0} ✓ right', '결과 count = {#0} ✗ 더한 값 하나를 잃음': 'Result count = {0} ✗ one addition lost',
  '잠금 기다림 (스레드 {#0}가 가짐)': 'Waiting for the lock (thread {0} has it)',
  '스레드 {#0}는 잠금을 얻지 못해 기다립니다. 스레드 {#1}가 풀어야 들어갈 수 있습니다.': 'Thread {0} cannot get the lock and waits. It can go in only when thread {1} releases it.',
  '스레드 {#0}: {1} · 레지스터 {2}, count {#3}': 'Thread {0}: {1} · register {2}, count {3}',
  // Step 1
  '차례대로': 'One at a time', 'T1이 1 쓴 뒤 T2가 읽음': 'T2 reads after T1 writes 1', '두 번 더해 2': 'Added twice: 2', '이어서 스레드 2': 'Then thread 2', '읽기 0': 'Read 0', '읽기 1': 'Read 1', '더하기 1': 'Add 1', '쓰기 1': 'Write 1', '쓰기 2': 'Write 2',
  '한 스레드씩 하면 아무 문제가 없다': 'One thread at a time causes no trouble',
  '5.1의 스레드 둘이 같은 변수 count에 1씩 더한다고 해 봅시다. count = count + 1은 CPU에서 읽기, 더하기, 쓰기 세 걸음입니다(3.5). 스레드 1이 세 걸음을 다 마친 뒤 스레드 2가 하면 count는 0 → 1 → 2로 바르게 늘어납니다.':
    'Say the two threads of 5.1 each add 1 to the same variable count. count = count + 1 is three steps on the CPU: read, add, write (3.5). If thread 1 finishes all three steps before thread 2 goes, count rises correctly, 0 → 1 → 2.',
  '스레드 1 세 걸음, 이어서 스레드 2 세 걸음을 하면 count는 2입니다. 아래 기록에 걸음마다 레지스터와 count가 남습니다.': 'Three steps of thread 1, then three of thread 2, and count is 2. The log below keeps the register and count for each step.',
  '가운데에 공유 메모리 칸 count가 있고, 양쪽에 스레드 1과 2가 각자의 레지스터를 들고 서 있습니다. 스레드가 한 걸음 갈 때마다 값이 칸과 레지스터 사이를 오갑니다.':
    'In the middle is the shared memory cell count, with threads 1 and 2 on either side holding their own registers. With each step a thread takes, a value moves between the cell and a register.',
  '스레드 1을 세 번, 그다음 스레드 2를 세 번 진행해 보세요.': 'Move thread 1 three times, then thread 2 three times.', 'count = 2. 한 스레드씩 하면 바르게 늘어납니다.': 'count = 2. One thread at a time, it rises correctly.',
  'count = count + 1은 CPU에서 몇 걸음일까요?': 'How many steps on the CPU is count = count + 1?', '1걸음': '1 step', '3걸음(읽기, 더하기, 쓰기)': '3 steps (read, add, write)',
  '메모리 값을 바로 더할 수 없어 레지스터로 읽고, 더하고, 다시 씁니다.': 'A value in memory cannot be added to directly, so it is read into a register, added to, and written back.',
  // Step 2
  '경쟁 상태': 'Race conditions', 'T1·T2 모두 0을 읽음': 'T1 and T2 both read 0', '각자 1을 써서 덮어씀': 'Each writes 1, overwriting', '두 번 더했지만 1': 'Added twice, but 1', '겹친 스레드 2': 'Thread 2 overlapping', '최종 1': 'Final 1', '최종 2': 'Final 2', '잠금 보유 스레드 1': 'Thread 1 holds the lock', '기다린 스레드 2': 'Thread 2, after waiting', '잠금 A 보유': 'Holds lock A', '잠금 B 보유': 'Holds lock B', '잠금 A 대기': 'Waits for lock A', '잠금 B 대기': 'Waits for lock B',
  '걸음이 섞이면 더한 값을 잃는다': 'When steps mix, an addition is lost',
  '스케줄러(5.2)는 스레드를 아무 때나 바꿉니다. 스레드 1이 count(0)를 읽은 직후 스레드 2로 바뀌어 스레드 2도 0을 읽으면, 둘 다 1을 써서 count는 2가 아니라 1이 됩니다. 실행 순서에 따라 결과가 달라지는 이런 버그를 경쟁 상태라고 합니다.':
    'The scheduler (5.2) switches threads at any moment. If it switches to thread 2 just after thread 1 reads count (0), and thread 2 reads 0 too, both write 1 and count becomes 1, not 2. A bug like this, where the result depends on the order of execution, is called a race condition.',
  '스레드 1 읽기 → 스레드 2 읽기 → 1 더하기 → 2 더하기 → 1 쓰기 → 2 쓰기 순서로 진행하면 count가 1로 끝납니다. 한 번의 더하기를 잃었습니다. 매번 생기지 않아 찾기 어려운 버그입니다.':
    'Go in the order thread 1 read → thread 2 read → 1 add → 2 add → 1 write → 2 write and count ends at 1. One addition was lost. It does not happen every time, which makes the bug hard to find.',
  '같은 장면입니다. 두 스레드의 걸음을 섞어 진행하면 두 레지스터가 같은 옛 값을 읽어 한쪽의 쓰기가 다른 쪽을 덮어씁니다.': 'The same scene. Mixing the two threads\' steps makes both registers read the same old value, so one write overwrites the other.',
  '두 스레드가 모두 읽기를 한 뒤에 더하기·쓰기를 하도록 섞어서, count가 1로 끝나게 만들어 보세요.': 'Mix the steps so both threads read before either adds and writes, and make count end at 1.',
  '두 번 더했는데 count는 1. 한쪽의 결과를 덮어써서 잃었습니다.': 'Added twice, yet count is 1. One result was overwritten and lost.',
  '이 버그가 테스트에서 잘 안 잡히는 까닭은?': 'Why is this bug hard to catch in tests?', '스레드가 바뀌는 순간이 실행할 때마다 달라서': 'The moment threads switch differs on every run', '컴퓨터가 고장 나서': 'The computer is broken', '파이썬이라서': 'Because it is Python',
  '대부분은 운 좋게 맞는 순서로 돌다가, 드물게 섞일 때만 틀립니다.': 'Mostly it luckily runs in a right order and goes wrong only on the rare mixes.',
  // Step 3
  '잠금': 'Locks', 'T1이 잠금 획득': 'T1 gets the lock', 'T2는 T1이 쓸 때까지 대기': 'T2 waits until T1 writes', 'T2가 1을 읽고 2를 씀': 'T2 reads 1 and writes 2',
  '잠금 보유 T1': 'T1 holds the lock', '잠금 획득': 'Get lock', '잠금 해제': 'Release lock', '대기하던 T2': 'T2, which was waiting',
  '잠금으로 세 걸음을 한 덩어리로 만든다': 'A lock makes the three steps one piece',
  '잠금(락)은 한 번에 한 스레드만 들어갈 수 있는 구역을 만듭니다. 스레드는 count를 고치기 전에 잠금을 얻고, 다 고친 뒤 풉니다. 다른 스레드가 잠금을 가지고 있으면 풀릴 때까지 기다립니다. 그러면 읽기·더하기·쓰기가 섞이지 않습니다.':
    'A lock makes an area that only one thread can enter at a time. A thread gets the lock before changing count and releases it when done. If another thread has the lock, it waits until it is released. Then read, add and write never mix.',
  '스레드 1이 잠금을 얻은 뒤에는 스레드 2를 눌러도 "기다림"이 됩니다. 스레드 1이 잠금을 풀어야 스레드 2가 들어갑니다. 어떤 순서로 눌러도 count는 2입니다.':
    'Once thread 1 has the lock, pressing thread 2 just makes it "wait". Thread 2 goes in only when thread 1 releases the lock. Whatever order you press, count is 2.',
  '같은 장면에 잠금 자물쇠가 생겼습니다. 잠금을 가진 스레드만 count에 손댈 수 있고, 다른 스레드는 자물쇠 앞에서 기다립니다.': 'The same scene now has a padlock. Only the thread holding the lock can touch count; the other waits at the padlock.',
  '잠금이 있는 상태에서 두 스레드를 섞어 눌러, 둘 다 끝까지 진행해 보세요.': 'With the lock in place, press the two threads in a mixed order and take both to the end.', '중간에 기다림이 생겼지만 count는 2입니다.': 'There was waiting along the way, but count is 2.',
  '잠금의 대가는?': 'What does a lock cost?', '다른 스레드가 기다리느라 덜 동시에 돈다': 'Other threads wait, so less runs at the same time', 'count가 틀린다': 'count comes out wrong', '메모리가 사라진다': 'Memory disappears',
  '잠금 구역은 한 번에 한 스레드만 돌므로 그만큼 동시에 할 수 있는 일이 줄어듭니다.': 'Only one thread runs in the locked area at a time, so that much less can be done at once.',
  // Step 4
  '교착 상태': 'Deadlock', 'T1은 A 보유 · T2는 B 보유': 'T1 holds A · T2 holds B', '각자 상대의 잠금을 기다림': 'Each waits for the other\'s lock', '둘 다 진행할 수 없음': 'Neither can go on',
  'A 보유': 'Holds A', 'A 대기': 'Waits for A', 'B 보유': 'Holds B', 'B 대기': 'Waits for B', '진행 정지': 'Stuck',
  '잠금 둘을 엇갈려 잡으면 서로 기다린다': 'Taking two locks in crossed order makes threads wait for each other',
  '잠금이 둘 이상이면 새 문제가 생깁니다. 스레드 1이 잠금 A를 잡고 B를 기다리는데, 스레드 2는 B를 잡고 A를 기다리면 둘 다 영원히 멈춥니다. 이것이 교착 상태(데드락)입니다. 모든 스레드가 잠금을 같은 순서(A 다음 B)로 잡게 하면 막을 수 있습니다.':
    'With two or more locks a new problem appears. If thread 1 holds lock A and waits for B while thread 2 holds B and waits for A, both stop forever. This is a deadlock. Having every thread take locks in the same order (A, then B) prevents it.',
  '두 스레드가 서로 가진 잠금을 기다리면 어느 쪽도 먼저 풀 수 없습니다. 두 스레드 모두 A를 먼저 얻도록 순서를 정하면 이 순환이 사라집니다.': 'When two threads wait for the locks the other holds, neither can release first. Setting the order so both threads get A first makes this cycle disappear.',
  '잠금이 있는 같은 장면입니다. 직접 진행해 보며 질문에 답할 수 있습니다.': 'The same scene with the lock. You can step through it yourself while answering the questions.',
  '스레드 1은 A를 잡고 B를, 스레드 2는 B를 잡고 A를 기다립니다. 무슨 일이 생길까요?': 'Thread 1 holds A and waits for B; thread 2 holds B and waits for A. What happens?',
  '둘 다 영원히 기다린다': 'Both wait forever', '하나가 이긴다': 'One of them wins', 'count가 3이 된다': 'count becomes 3',
  '서로 상대가 가진 잠금을 기다리므로 누구도 풀지 않습니다. 교착 상태입니다.': 'Each waits for the lock the other holds, so neither releases. It is a deadlock.',
  '교착 상태를 막는 간단한 규칙은?': 'What simple rule prevents deadlock?', '모든 스레드가 잠금을 같은 순서로 잡는다': 'Every thread takes locks in the same order', '잠금을 더 많이 만든다': 'Make more locks', '스레드를 더 만든다': 'Make more threads',
  '모두 A 다음 B 순서로 잡으면 서로 엇갈려 기다리는 고리가 생기지 않습니다.': 'If all take A, then B, no crossed loop of waiting can form.',
};
