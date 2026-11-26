// English for OS 4.2 Condition variables and semaphores. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '조건 변수와 세마포어 · 레슨 4.2': 'Condition variables and semaphores · Lesson 4.2',
  '운영체제 4장 동시성 · 레슨 4.2': 'Operating systems chapter 4 Concurrency · Lesson 4.2',
  '조건 변수와 세마포어': 'Condition variables and semaphores',
  'CPU를 태우며 기다리는 바쁜 대기, 잠들었다 신호에 깨어나는 조건 변수, 남은 개수를 세는 세마포어, 깨어나도 다시 확인해야 하는 이유를 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, busy waiting that burns CPU, a condition variable that sleeps and wakes on a signal, a semaphore that counts what is left, and why a woken thread must check again.',
  '스레드가 일이 생길 때까지 기다려야 할 때, CPU를 태우지 않고 잠들었다가 필요한 때 깨어나려면 무엇을 쓸까요? 스레드, 공유 큐, 커널 사이를 오가는 길을 한 정거장씩 따라가 보세요.':
    'When a thread must wait until there is work, what lets it sleep without burning CPU and wake when needed? Follow, station by station, the road between threads, a shared queue and the kernel.',
  '스레드가 일이 생길 때까지 CPU를 쓰지 않고 기다리려면 무엇을 쓸까?': 'What lets a thread wait for work without using CPU?',
  '스레드, 공유 큐, 커널': 'Threads, shared queue, kernel',
  '스레드가 공유 큐를 기다리며 커널의 대기열에서 잠들고, 다른 스레드의 신호로 깨어나는 장면': 'A thread waiting for a shared queue sleeps in the kernel\'s wait queue and wakes on another thread\'s signal',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '스레드': 'Thread', '공유 데이터': 'Shared data', '커널': 'Kernel',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '소비자': 'Consumer', '생산자': 'Producer', '공유 큐': 'Shared queue', '스레드 1~3': 'Threads 1~3', '스레드 4': 'Thread 4', '세마포어': 'Semaphore', '소비자 A': 'Consumer A', '소비자 B': 'Consumer B',
  // Legs in the stage list and the example strip
  '소비자 → 공유 큐': 'Consumer → shared queue', '생산자 → 공유 큐': 'Producer → shared queue', '공유 큐 → 소비자': 'Shared queue → consumer', '소비자 → 커널': 'Consumer → kernel', '생산자 → 커널': 'Producer → kernel', '커널 → 소비자': 'Kernel → consumer',
  '스레드 1~3 → 세마포어': 'Threads 1~3 → semaphore', '스레드 4 → 세마포어': 'Thread 4 → semaphore', '세마포어 → 커널': 'Semaphore → kernel', '커널 → 스레드 4': 'Kernel → thread 4',
  '커널 → 소비자 A': 'Kernel → consumer A', '소비자 A → 공유 큐': 'Consumer A → shared queue', '소비자 B → 공유 큐': 'Consumer B → shared queue', '소비자 B → 커널': 'Consumer B → kernel',
  '공유 큐 · 항목 1': 'Shared queue · item 1', '소비자 · 꺼냄': 'Consumer · take', '커널 · post → 깨움': 'Kernel · post → wake', '소비자 B · cond_wait': 'Consumer B · cond_wait',
  // Badges and moving labels
  '0개': '0 items', '확인 중': 'Checking', '비었니? ×수백만': 'Empty? ×millions', '0개 · 계속 확인': '0 · checking on', 'CPU 100% 낭비': 'CPU 100% wasted', '항목 1': 'Item 1', '1개 넣음': 'Added 1',
  'cond_wait': 'cond_wait', '대기열: 소비자': 'Queue: consumer', '잠듦 · CPU 0': 'Asleep · CPU 0', '1개': '1 item', '넣고 signal': 'Added, signal', 'cond_signal': 'cond_signal', 'signal→깨움': 'signal→wake',
  '깨어남': 'Woken', '깨어남 · 락 잡음': 'Woken · holds lock', '꺼냄': 'Take', '1개 → 0개': '1 → 0', '잠들었다 꺼냄': 'Slept, then took it',
  '3': '3', 'sem_wait ×3': 'sem_wait ×3', '3 → 0': '3 → 0', '연결 3개 씀': 'Using 3 connections', 'sem_wait': 'sem_wait', '0 · 넷째 대기': '0 · fourth waits', '스레드 4 재움': 'Put thread 4 to sleep',
  '대기열: 스레드 4': 'Queue: thread 4', '잠듦': 'Asleep', 'post → 깨움': 'post → wake', '0에 잠듦→깸': 'Slept at 0→woke', '3→0→1→0': '3→0→1→0', '스레드1 post': 'Thread 1 posts', '스레드 4 깨움': 'Wake thread 4',
  '1개 들어옴': '1 item in', '대기열: A, B': 'Queue: A, B', '깨움': 'Wake', 'A·B 깨움': 'Wake A·B', '1개 먼저 꺼냄': 'Took the 1 first', '소비자 · 비었니? ×수백만': 'Consumer · empty? ×millions', 'A·B 깸→B 재움': 'A·B woke→B sleeps', '비었니?': 'Empty?', '재확인→잠듦': 'Recheck→sleep', '대기열: B': 'Queue: B',
  // Step 1
  '바쁜 대기': 'Busy waiting',
  '계속 확인하며 기다리면 CPU 한 코어를 통째로 쓴다': 'Waiting by checking over and over uses a whole CPU core',
  '소비자 스레드가 큐에 일이 들어오기를 기다린다고 합시다. 가장 단순한 방법은 while (큐가 비었음) {}처럼 계속 확인하는 것입니다. 하지만 기다리는 동안에도 이 스레드는 CPU에서 계속 돌며 같은 확인만 되풀이합니다. 일이 1초 뒤에 온다면 그 1초 동안 코어 하나를 통째로 버리는 셈입니다(1.3의 폴링과 같은 문제).':
    'Say a consumer thread waits for work to arrive in a queue. The simplest way is to keep checking, as in while (queue is empty) {}. But while waiting, this thread keeps running on the CPU, repeating the same check. If the work comes a second later, a whole core is wasted for that second (the same problem as polling in 1.3).',
  '소비자가 큐를 계속 확인해 큐 이름표가 "0개 · 계속 확인", 소비자 이름표가 "CPU 100% 낭비"가 됩니다. 1초 뒤 생산자 이름표가 "1개 넣음"이 되고서야 소비자가 꺼냅니다.':
    'The consumer keeps checking the queue, so the queue\'s label becomes "0 · checking on" and the consumer\'s "CPU 100% wasted". Only when, a second later, the producer\'s label becomes "Added 1" does the consumer take it.',
  '왼쪽 사용자 영역에 소비자 스레드, 생산자 스레드, 공유 큐가, 경계 너머에 커널이 있습니다. 큐는 비어 있고 소비자가 계속 확인합니다.':
    'The consumer thread, producer thread and shared queue are in user space on the left; across the boundary is the kernel. The queue is empty and the consumer keeps checking.',
  '큐 0개': 'Queue 0', 'while (비었음) {} 로 계속 확인': 'Keep checking with while (empty) {}', '1초 동안 CPU 100%': 'CPU 100% for a second', '생산자가 넣은 뒤에야 꺼냄': 'Takes it only after the producer adds',
  'while (큐가 비었음) {}': 'while (queue is empty) {}', '항목이 오면 꺼냄': 'Take the item when it comes', '비었음, 비었음, 비었음…': 'Empty, empty, empty…', '1초 뒤 생산자가 항목을 넣음': 'A second later the producer adds an item', '드디어 꺼냄': 'Finally takes it',
  '소비자가 큐를 계속 확인합니다. 매번 비었습니다.': 'The consumer keeps checking the queue. It is empty every time.',
  '1초 뒤 생산자가 항목 하나를 넣습니다.': 'A second later the producer adds an item.',
  '소비자가 다음 확인에서 항목을 꺼냅니다. 그 사이 1초 동안 CPU를 낭비했습니다.': 'On its next check the consumer takes the item. It wasted a second of CPU in between.',
  '기다리는 1초 동안 소비자는 CPU를 얼마나 쓸까요?': 'How much CPU does the consumer use during the second it waits?',
  '거의 안 쓴다': 'Almost none', '코어 하나를 통째로 쓴다': 'A whole core', '절반만 쓴다': 'Half',
  '확인을 되풀이하는 것도 실행입니다. 스케줄러가 보기엔 바쁘게 일하는 스레드라 CPU를 계속 줍니다.': 'Repeating a check is still running. To the scheduler it is a busy thread, so it keeps getting the CPU.',
  // Step 2
  '조건 변수': 'Condition variables',
  '조건 변수로 잠들면 CPU를 쓰지 않고 신호에 깨어난다': 'Sleeping on a condition variable uses no CPU and wakes on a signal',
  '조건 변수는 "조건이 바뀌면 알려 줘"라는 약속입니다. 소비자는 락을 잡고 큐가 비었음을 보면 cond_wait를 부릅니다. wait는 락을 풀고 스레드를 커널의 대기열에 넣어 재웁니다. 잠든 동안 CPU를 쓰지 않습니다. 생산자가 락을 잡고 항목을 넣은 뒤 cond_signal을 부르면 커널이 소비자를 깨우고, 소비자는 락을 다시 잡은 채로 돌아와 항목을 꺼냅니다.':
    'A condition variable is a promise to "tell me when the condition changes". The consumer takes the lock, sees the queue is empty and calls cond_wait. wait releases the lock and puts the thread to sleep in the kernel\'s wait queue. It uses no CPU while asleep. When the producer takes the lock, adds an item and calls cond_signal, the kernel wakes the consumer, which returns holding the lock again and takes the item.',
  '소비자의 wait가 커널로 가 커널 이름표가 "대기열: 소비자", 소비자 이름표가 "잠듦 · CPU 0"이 됩니다. 생산자의 signal 뒤 커널 이름표가 "signal→깨움", 큐 이름표가 "1개 → 0개", 소비자 이름표가 "잠들었다 꺼냄"이 됩니다.':
    'The consumer\'s wait goes to the kernel, whose label becomes "Queue: consumer", and the consumer\'s becomes "Asleep · CPU 0". After the producer\'s signal, the kernel\'s label becomes "signal→wake", the queue\'s "1 → 0", and the consumer\'s "Slept, then took it".',
  '1단계와 같은 정거장입니다. 큐가 비어 소비자가 조건 변수로 기다립니다.': 'The same stations as step 1. The queue is empty, so the consumer waits on a condition variable.',
  '소비자 cond_wait: 락 풀고 잠듦 (CPU 0)': 'Consumer cond_wait: release the lock and sleep (CPU 0)', '생산자: 넣고 cond_signal': 'Producer: add and cond_signal', '커널이 소비자를 깨움': 'The kernel wakes the consumer', '락 다시 잡고 꺼냄': 'Take the lock again and take the item',
  'lock()': 'lock()', 'while (큐가 비었음) cond_wait()': 'while (queue is empty) cond_wait()', '꺼냄 · unlock()': 'Take · unlock()', '락을 풀고 소비자를 대기열에 넣음': 'Release the lock and put the consumer in the wait queue',
  '생산자가 락을 잡고 넣음': 'The producer takes the lock and adds', '대기열의 소비자를 깨움': 'Wake the consumer in the wait queue', '락을 다시 잡고 돌아옴': 'Returns holding the lock again', '항목을 꺼내고 unlock': 'Take the item and unlock',
  'wait는 락을 풀고 소비자를 커널의 대기열에 넣어 재웁니다.': 'wait releases the lock and puts the consumer to sleep in the kernel\'s wait queue.',
  '생산자가 락을 잡고 항목을 넣습니다.': 'The producer takes the lock and adds an item.',
  '생산자의 signal로 커널이 소비자를 깨웁니다.': 'On the producer\'s signal, the kernel wakes the consumer.',
  '소비자는 락을 다시 잡은 채로 wait에서 돌아옵니다.': 'The consumer returns from wait holding the lock again.',
  '큐가 비지 않았음을 확인하고 항목을 꺼냅니다.': 'It checks that the queue is not empty and takes the item.',
  '잠든 소비자는 CPU를 쓸까요?': 'Does the sleeping consumer use CPU?',
  '계속 쓴다': 'It keeps using it', '쓰지 않는다': 'It does not',
  '잠든 스레드는 스케줄러의 실행 줄에 없습니다. 깨워 줄 때까지 CPU를 받지 않습니다.': 'A sleeping thread is not in the scheduler\'s run queue. It gets no CPU until it is woken.',
  // Step 3
  '세마포어는 남은 개수를 세어 0이면 재운다': 'A semaphore counts what is left and puts threads to sleep at 0',
  '세마포어는 0 이상의 숫자 하나입니다. sem_wait는 숫자가 1 이상이면 1을 빼고 지나가고, 0이면 잠듭니다. sem_post는 1을 더하고 잠든 스레드가 있으면 하나를 깨웁니다. 그래서 "동시에 셋까지만" 같은 개수 제한에 씁니다. DB 연결이 3개뿐이면 세마포어를 3으로 두어, 넷째 스레드는 누가 연결을 돌려줄 때까지 기다리게 합니다.':
    'A semaphore is a single number, 0 or more. sem_wait subtracts 1 and passes if the number is 1 or more, and sleeps if it is 0. sem_post adds 1 and wakes one sleeping thread if there is any. So it is used for limits such as "at most three at once". With only 3 DB connections, the semaphore starts at 3, and a fourth thread waits until someone gives a connection back.',
  '스레드 셋이 wait를 지나 세마포어 이름표가 "3 → 0"이 되고, 넷째의 wait가 커널로 가 커널 이름표가 "대기열: 스레드 4"가 됩니다. 스레드 1의 post 뒤 세마포어 이름표가 "3→0→1→0", 커널 이름표가 "스레드 4 깨움", 넷째 이름표가 "0에 잠듦→깸"이 됩니다.':
    'Three threads pass wait and the semaphore\'s label becomes "3 → 0"; the fourth\'s wait goes to the kernel, whose label becomes "Queue: thread 4". After thread 1\'s post, the semaphore\'s label becomes "3→0→1→0", the kernel\'s "Wake thread 4", and the fourth\'s "Slept at 0→woke".',
  '왼쪽 사용자 영역에 스레드 1~3, 스레드 4, DB 연결을 지키는 세마포어(값 3)가, 경계 너머에 커널이 있습니다.': 'Threads 1~3, thread 4 and a semaphore (value 3) guarding DB connections are in user space on the left; across the boundary is the kernel.',
  '세마포어 = DB 연결 3개': 'Semaphore = 3 DB connections', '스레드 1~3 sem_wait: 3 → 0': 'Threads 1~3 sem_wait: 3 → 0', '스레드 4 sem_wait: 0이라 잠듦': 'Thread 4 sem_wait: 0, so it sleeps', '스레드 1 sem_post: 0 → 1 → 스레드 4 깨어남': 'Thread 1 sem_post: 0 → 1 → thread 4 wakes',
  '값 3 = DB 연결 3개': 'Value 3 = 3 DB connections', '3 → 2 → 1 → 0': '3 → 2 → 1 → 0', '값이 0 → 지나갈 수 없음': 'Value 0 → cannot pass', '스레드 4를 대기열에 넣음': 'Put thread 4 in the wait queue',
  '스레드 1이 sem_post: 0 → 1': 'Thread 1 sem_post: 0 → 1', '스레드 4가 1을 빼고 지나감': 'Thread 4 subtracts 1 and passes',
  '스레드 셋이 차례로 wait를 지나며 값이 0이 됩니다. 셋이 연결을 하나씩 씁니다.': 'Three threads pass wait in turn and the value reaches 0. Each of the three uses a connection.',
  '넷째 스레드가 wait를 부르지만 값이 0입니다.': 'The fourth thread calls wait, but the value is 0.',
  '커널이 넷째 스레드를 대기열에 넣어 재웁니다.': 'The kernel puts the fourth thread to sleep in the wait queue.',
  '스레드 1이 연결을 돌려주며 post를 부르자 커널이 넷째를 깨웁니다. 넷째가 그 연결을 씁니다.': 'Thread 1 gives its connection back and calls post, and the kernel wakes the fourth, which uses that connection.',
  '값이 0일 때 sem_wait를 부른 스레드는?': 'What happens to a thread that calls sem_wait when the value is 0?',
  '그냥 지나간다': 'It just passes', '값이 1이 될 때까지 잠든다': 'It sleeps until the value becomes 1', '오류로 끝난다': 'It ends with an error',
  '0은 남은 연결이 없다는 뜻입니다. 누가 post로 돌려줄 때까지 커널의 대기열에서 잡니다.': '0 means no connection is left. It sleeps in the kernel\'s wait queue until someone gives one back with post.',
  // Step 4
  '다시 확인': 'Check again',
  '깨어난 스레드는 조건을 다시 확인해야 한다': 'A woken thread must check its condition again',
  '잠들었던 스레드가 깨어났다고 해서 기다리던 조건이 아직 맞다는 보장은 없습니다. 소비자 둘이 잠든 사이 항목이 하나 들어오면 둘 다 깨어날 수 있고, 먼저 락을 잡은 쪽이 항목을 가져갑니다. 뒤에 깨어난 쪽이 if로 한 번만 확인했다면 빈 큐에서 꺼내려 합니다. 그래서 cond_wait는 반드시 while (조건이 안 맞음) 안에서 부르고, 깨어나면 다시 확인합니다. POSIX는 이유 없이 깨어나는 일(가짜 깨어남)도 있을 수 있다고 밝힙니다.':
    'Being woken does not guarantee that the awaited condition still holds. If one item arrives while two consumers sleep, both may wake, and whichever takes the lock first gets the item. If the later one checked only once with if, it would try to take from an empty queue. So cond_wait is always called inside while (condition not met), and the condition is checked again on waking. POSIX also says a thread may wake for no reason (a spurious wakeup).',
  '소비자 A 이름표가 "1개 먼저 꺼냄", 큐 이름표가 "1개 → 0개"가 됩니다. 뒤에 깨어난 소비자 B 이름표가 "재확인→잠듦"(while로 다시 확인해 다시 잠듦)이 되고, 커널 이름표가 "A·B 깸→B 재움"가 됩니다.':
    'Consumer A\'s label becomes "Took the 1 first" and the queue\'s "1 → 0". Consumer B, woken later, gets "Recheck→sleep" (checked again with while and slept again), and the kernel\'s label becomes "A·B woke→B sleeps".',
  '왼쪽 사용자 영역에 소비자 A, 소비자 B, 공유 큐가, 경계 너머에 커널이 있습니다. 소비자 둘이 잠들어 있고 항목이 하나 들어옵니다.': 'Consumers A and B and the shared queue are in user space on the left; across the boundary is the kernel. Both consumers are asleep and one item arrives.',
  '소비자 A·B 잠듦': 'Consumers A·B asleep', '항목 1개 들어옴 · 둘 다 깨어날 수 있음': 'One item arrives · both may wake', 'A가 먼저 꺼냄': 'A takes it first', 'B는 while로 다시 확인 → 비었음 → 다시 잠듦': 'B checks again with while → empty → sleeps again',
  'A가 먼저 락을 잡음': 'A takes the lock first', 'A가 항목을 꺼냄': 'A takes the item', 'B가 락을 잡고 다시 확인': 'B takes the lock and checks again', '비었음': 'Empty', 'B를 다시 대기열에 넣음': 'Put B back in the wait queue',
  '항목이 들어오자 A와 B가 모두 깨어납니다. A가 먼저 락을 잡습니다.': 'When the item arrives, both A and B wake. A takes the lock first.',
  'A가 항목을 꺼내 큐가 다시 비었습니다.': 'A takes the item and the queue is empty again.',
  'B가 락을 잡고 while 조건을 다시 확인하니 큐가 비어 있습니다.': 'B takes the lock and checks the while condition again: the queue is empty.',
  'B는 다시 wait로 잠듭니다. 다음 항목이 들어오면 깨어납니다.': 'B sleeps again in wait. It will wake when the next item arrives.',
  'B가 깨어난 뒤 다시 확인하지 않고 바로 꺼내면?': 'What if B took an item right after waking, without checking again?',
  'A와 같은 항목을 꺼낸다': 'It takes the same item as A', '빈 큐에서 꺼내려다 잘못된다': 'It tries to take from an empty queue and goes wrong', '아무 문제 없다': 'No problem',
  '항목은 이미 A가 가져갔습니다. 깨어난 것만으로는 조건이 맞다는 보장이 없어 while로 다시 확인합니다.': 'A has already taken the item. Waking alone does not guarantee the condition, so it is checked again with while.',
};
