// English for OS 2.5 Multicore scheduling. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '멀티코어 스케줄링 · 레슨 2.5': 'Multicore scheduling · Lesson 2.5',
  '운영체제 2장 프로세스와 CPU · 레슨 2.5': 'Operating systems chapter 2 Processes and the CPU · Lesson 2.5',
  '멀티코어 스케줄링': 'Multicore scheduling',
  '코어가 여럿일 때 리눅스 스케줄러가 코어마다 실행 줄을 두는 이유, 캐시가 따뜻한 코어로 돌려보내는 방법, 노는 코어가 일을 당겨 오는 부하 분산, CPU 고정을 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, why the Linux scheduler keeps a run queue per core when there are several, how it sends work back to the core with a warm cache, how an idle core pulls work in load balancing, and CPU pinning.',
  '코어가 여럿이면 스케줄러는 일을 어느 코어에 둘까요? 스레드가 스케줄러를 거쳐 코어로 가고, 코어 사이를 옮겨 가는 길을 한 정거장씩 따라가 보세요.':
    'With several cores, which core does the scheduler put work on? Follow, station by station, how threads go through the scheduler to a core and move between cores.',
  '코어가 여럿이면 스케줄러는 일을 어느 코어에 둘까?': 'With several cores, which core does the scheduler put work on?',
  '스레드, 스케줄러, 코어 둘': 'Threads, scheduler, two cores',
  '스케줄러가 스레드를 코어 0과 코어 1의 실행 줄에 나눠 두고 코어 사이로 옮기는 장면': 'The scheduler places threads on the run queues of core 0 and core 1 and moves them between cores',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware', 'CPU 코어': 'CPU core',
  '프로세스': 'Process', '커널': 'Kernel',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '스레드 T1·T2': 'Threads T1·T2', '스레드 T1': 'Thread T1', '스레드 T1·T2·T3': 'Threads T1·T2·T3', '관리자 셸': 'Admin shell',
  '스케줄러': 'Scheduler', '코어 0': 'Core 0', '코어 1': 'Core 1',
  // Legs in the stage list and the example strip
  '코어 0 → 스케줄러': 'Core 0 → scheduler', '코어 1 → 스케줄러': 'Core 1 → scheduler', '스케줄러 → 코어 0': 'Scheduler → core 0', '스케줄러 → 코어 1': 'Scheduler → core 1',
  '스레드 T1 → 스케줄러': 'Thread T1 → scheduler', '코어 0 → 코어 1': 'Core 0 → core 1', '코어 1 → 코어 0': 'Core 1 → core 0', '관리자 셸 → 스케줄러': 'Admin shell → scheduler',
  '코어 0 · 다음 일?': 'Core 0 · next job?', '코어 1 · 다음 일?': 'Core 1 · next job?', '스케줄러 · T1': 'Scheduler · T1', '스케줄러 · T2': 'Scheduler · T2', '코어 0 · T3 이동': 'Core 0 · move T3', '코어 1 · 웹 이동': 'Core 1 · move web',
  // Badges and moving labels
  '실행 준비': 'Ready', '줄 1개: T1 T2': '1 queue: T1 T2', '빔': 'Empty', '잠금: 코어 0': 'Lock: core 0', '잠금 기다림': 'Waiting for lock',
  'T1 실행': 'Running T1', '줄: T2': 'Queue: T2', 'T2 · 늦게 받음': 'T2 · got it late', '리눅스: 코어마다 줄': 'Linux: a queue per core', '다음 일?': 'Next job?',
  '잠듦': 'Asleep', 'T1 캐시 있음': 'T1 in cache', 'T1 캐시 없음': 'T1 not in cache', '깨어남': 'Awake', '마지막: 코어 0': 'Last: core 0', 'T1 캐시 적중': 'T1 cache hit', 'T1 깨어남': 'T1 wakes',
  'T1 · 줄 T2 T3': 'T1 · queue T2 T3', '줄 비었음': 'Queue empty', '가장 바쁜 줄: 코어 0': 'Busiest queue: core 0', 'T1 · 줄 T2': 'T1 · queue T2', 'T3 실행': 'Running T3', 'T3 옮겨 와 실행': 'T3 moved here, running', 'DB 고정': 'DB pinned', 'DB 못 옮김 → 웹': 'DB stays → web moves', '2 : 1로 나뉨': 'Split 2 : 1', 'T3 이동': 'Move T3',
  '줄: 웹': 'Queue: web', 'DB 허용: 코어 1': 'DB allowed: core 1', '줄: 웹 DB': 'Queue: web DB', 'DB는 코어 1만': 'DB: core 1 only', '웹 실행': 'Running web', 'DB 실행': 'Running DB',
  'taskset -c 1 db': 'taskset -c 1 db', '웹 이동': 'Move web',
  // Step 1
  '코어마다 줄': 'A queue per core',
  '줄이 하나면 코어들이 잠금 앞에서 기다린다': 'With one queue, cores wait at the lock',
  '모든 코어가 실행할 일을 줄 하나에서 꺼내 가면, 두 코어가 같은 일을 꺼내지 않도록 줄에 잠금을 걸어야 합니다. 한 코어가 잠금을 쥔 동안 다른 코어는 기다리고, 코어가 많을수록 이 기다림이 길어집니다. 그래서 리눅스는 코어마다 실행 줄(run queue)을 따로 둡니다. 코어는 자기 줄에서만 일을 꺼내므로 서로 기다리지 않습니다.':
    'If every core takes its next job from a single queue, the queue needs a lock so that two cores never take the same job. While one core holds the lock the others wait, and the more cores there are, the longer the wait. So Linux keeps a separate run queue for each core. Each core takes jobs only from its own queue, so the cores do not wait for each other.',
  '코어 0이 줄의 잠금을 쥐자 코어 0 이름표는 "잠금 쥠", 코어 1 이름표는 "잠금 기다림"이 됩니다. 코어 0이 T1을 받고 나서야 코어 1이 T2를 받고, 스케줄러 이름표에 "리눅스: 코어마다 줄"이 남습니다.':
    'When core 0 takes the queue\'s lock, core 0\'s label becomes "Holds lock" and core 1\'s becomes "Waiting for lock". Only after core 0 gets T1 does core 1 get T2, and the scheduler\'s label shows "Linux: a queue per core".',
  '왼쪽 사용자 영역에 스레드 T1과 T2가, 경계 너머에 스케줄러와 CPU 코어 0, 코어 1이 있습니다. 스케줄러의 실행 줄은 하나뿐입니다.':
    'Threads T1 and T2 are in user space on the left; across the boundary are the scheduler and CPU core 0 and core 1. The scheduler has only one run queue.',
  '줄 하나 · 잠금 하나': 'One queue · one lock', '코어 0이 잠금을 쥠': 'Core 0 takes the lock', '코어 1은 잠금 앞에서 기다림': 'Core 1 waits at the lock', '그래서 리눅스는 코어마다 줄을 둠': 'So Linux keeps a queue per core', '잠금 쥠': 'Holds lock',
  '실행 줄 하나: T1, T2': 'One run queue: T1, T2', '잠금 하나': 'One lock',
  '줄에서 T1을 꺼냄': 'Take T1 from the queue', '잠금이 풀리길 기다림': 'Wait for the lock to be released', '잠금 풀어 줌': 'Release the lock', '이제야 T2 실행': 'Only now runs T2',
  '코어 0이 다음 일을 꺼내려고 줄의 잠금을 쥡니다.': 'Core 0 takes the queue\'s lock to take its next job.',
  '같은 순간 코어 1도 일을 꺼내려 하지만, 잠금이 풀릴 때까지 기다려야 합니다.': 'At the same moment core 1 also wants a job, but it must wait until the lock is released.',
  '코어 0이 T1을 받고 잠금을 풀어 줍니다.': 'Core 0 gets T1 and releases the lock.',
  '그제야 코어 1이 T2를 받습니다. 그래서 리눅스는 코어마다 줄을 두어 이 기다림을 없앱니다.': 'Only then does core 1 get T2. That is why Linux keeps a queue per core and removes this wait.',
  '코어가 64개이고 줄이 하나라면 어떻게 될까요?': 'What happens with 64 cores and one queue?',
  '64배 빨라진다': 'It gets 64 times faster', '잠금 앞의 기다림이 길어진다': 'The wait at the lock gets longer', '아무 차이가 없다': 'Nothing changes',
  '줄이 하나면 한 번에 한 코어만 꺼낼 수 있습니다. 코어가 늘수록 잠금을 기다리는 코어도 늘어납니다.': 'With one queue only one core can take a job at a time. The more cores, the more of them wait for the lock.',
  // Step 2
  '캐시 친화성': 'Cache affinity',
  '깨어난 스레드는 캐시가 따뜻한 코어로 돌아간다': 'A woken thread goes back to the core with a warm cache',
  '스레드가 한 코어에서 달리면 그 코어의 캐시에 스레드가 쓰던 데이터가 남습니다. 잠깐 잠들었다 깨어난 스레드를 같은 코어에 두면 캐시에서 바로 읽어 빠르게 이어 갑니다. 다른 코어로 옮기면 그 코어의 캐시에는 데이터가 없어 메모리에서 다시 읽어야 합니다. 그래서 스케줄러는 할 수 있는 한 스레드를 같은 코어에 둡니다.':
    'When a thread runs on a core, the data it was using stays in that core\'s cache. If a thread that slept briefly is put back on the same core, it reads straight from the cache and carries on quickly. Moved to another core, it finds no data in that core\'s cache and must read it from memory again. So the scheduler keeps a thread on the same core whenever it can.',
  'T1이 깨어나자 스케줄러 이름표에 "마지막: 코어 0"이 뜨고, T1이 코어 0으로 갑니다. 코어 0 이름표는 "T1 캐시 적중", 데이터가 없는 코어 1 이름표는 "T1 캐시 없음"입니다.':
    'When T1 wakes, the scheduler\'s label shows "Last: core 0" and T1 goes to core 0. Core 0\'s label reads "T1 cache hit"; core 1, which lacks the data, reads "T1 not in cache".',
  '왼쪽 사용자 영역에 방금 깨어난 스레드 T1이, 경계 너머에 스케줄러와 코어 0, 코어 1이 있습니다. T1은 잠들기 전에 코어 0에서 달렸습니다.':
    'Thread T1, just woken, is in user space on the left; across the boundary are the scheduler, core 0 and core 1. Before sleeping, T1 ran on core 0.',
  'T1이 코어 0에서 달리다 잠듦': 'T1 sleeps while running on core 0', '캐시에 T1 데이터가 남은 코어 0에 둠': 'Put on core 0, whose cache still holds T1\'s data', '메모리 다시 읽지 않음': 'No reading from memory again',
  '코어 0에서 달리다': 'Was running on core 0', '디스크를 기다리며 잠듦': 'Sleeps waiting for the disk',
  'T1이 마지막으로 달린 곳: 코어 0': 'Where T1 last ran: core 0', 'T1을 코어 0의 줄에 넣음': 'Put T1 on core 0\'s queue', 'T1 실행 · 캐시에서 바로 읽음': 'Running T1 · reads straight from the cache',
  '디스크 읽기가 끝나 T1이 깨어납니다. 스케줄러는 T1이 마지막에 달린 코어를 기억합니다.': 'The disk read finishes and T1 wakes. The scheduler remembers the core T1 last ran on.',
  'T1이 코어 0에서 다시 달립니다. 필요한 데이터가 캐시에 있어 바로 이어 갑니다.': 'T1 runs on core 0 again. The data it needs is in the cache, so it carries on at once.',
  '두 코어가 다 비어 있다면 T1을 어디에 둘까요?': 'If both cores are free, where should T1 go?',
  '아무 데나': 'Anywhere',
  '코어 0의 캐시에 T1이 쓰던 데이터가 남아 있어 메모리에서 다시 읽지 않아도 됩니다.': 'Core 0\'s cache still holds the data T1 was using, so nothing has to be read from memory again.',
  // Step 3
  '부하 분산': 'Load balancing',
  '노는 코어는 가장 바쁜 코어의 줄에서 일을 당겨 온다': 'An idle core pulls work from the busiest core\'s queue',
  '코어마다 줄이 따로 있으면, 한 코어의 줄에 일이 몰리고 다른 코어는 놀 수 있습니다. 리눅스는 타이머가 울릴 때 주기적으로, 그리고 코어가 할 일이 없어졌을 때 부하를 나눕니다. 일을 나누는 쪽은 한가한 코어입니다. 가장 바쁜 줄을 찾아 그 줄에서 일을 자기 줄로 당겨 옵니다.':
    'With a separate queue per core, work can pile up on one core while another sits idle. Linux balances the load periodically when the timer fires, and also when a core runs out of work. The idle core does the balancing: it finds the busiest queue and pulls work from it into its own.',
  '코어 1이 "줄 비었음"을 알리자 스케줄러가 "가장 바쁜 줄: 코어 0"을 찾습니다. T3이 코어 0 줄에서 코어 1로 옮겨 가 코어 0 이름표는 "T1 · 줄 T2", 코어 1 이름표는 "T3 옮겨 와 실행"이 됩니다.':
    'When core 1 reports "Queue empty", the scheduler finds "Busiest queue: core 0". T3 moves from core 0\'s queue to core 1, so core 0\'s label becomes "T1 · queue T2" and core 1\'s becomes "T3 moved here, running".',
  '왼쪽 사용자 영역에 스레드 T1, T2, T3이, 경계 너머에 스케줄러와 코어 0, 코어 1이 있습니다. 세 스레드가 모두 코어 0의 줄에 있고 코어 1의 줄은 비어 있습니다.':
    'Threads T1, T2 and T3 are in user space on the left; across the boundary are the scheduler, core 0 and core 1. All three threads are on core 0\'s queue and core 1\'s queue is empty.',
  '코어 0 줄: T1 T2 T3 · 코어 1 줄: 없음': 'Core 0 queue: T1 T2 T3 · core 1 queue: none', '코어 1이 놀게 됨': 'Core 1 goes idle', '가장 바쁜 코어 0에서 T3을 당겨 옴': 'Pulls T3 from the busiest, core 0',
  '코어 0 줄: T1(실행) T2 T3': 'Core 0 queue: T1 (running) T2 T3', '코어 1 줄: 비어 있음': 'Core 1 queue: empty',
  '코어 1이 할 일이 없음': 'Core 1 has nothing to do', '가장 바쁜 줄을 찾음': 'Find the busiest queue', '코어 0 줄의 T3을 코어 1 줄로 옮김': 'Move T3 from core 0\'s queue to core 1\'s', '코어 0 줄: T2 하나만 기다림': 'Core 0 queue: only T2 waits',
  '코어 1의 줄이 비어 할 일이 없습니다. 코어 1이 부하 분산을 시작합니다.': 'Core 1\'s queue is empty and it has nothing to do. Core 1 starts load balancing.',
  '코어 0의 줄에서 기다리던 T3을 코어 1의 줄로 옮겨 실행합니다. 이제 두 코어가 모두 일을 합니다.': 'T3, which was waiting on core 0\'s queue, moves to core 1\'s queue and runs. Now both cores are working.',
  '노는 코어 1은 어떻게 할까요?': 'What does idle core 1 do?',
  '일이 올 때까지 계속 논다': 'It stays idle until work arrives', '바쁜 코어의 줄에서 일을 당겨 온다': 'It pulls work from a busy core\'s queue', '코어 0이 끝날 때까지 기다린다': 'It waits until core 0 is done',
  '리눅스에서는 한가한 코어가 가장 바쁜 줄을 찾아 기다리는 일을 자기 줄로 옮겨 옵니다.': 'In Linux an idle core finds the busiest queue and moves a waiting job into its own queue.',
  // Step 4
  'CPU 고정': 'CPU pinning',
  'CPU를 고정한 프로세스는 부하 분산도 옮기지 않는다': 'Load balancing does not move a process pinned to a CPU',
  'taskset이나 sched_setaffinity로 프로세스가 달릴 수 있는 코어를 정할 수 있습니다. 고정하면 캐시를 옮겨 다니지 않고, 다른 일과 코어를 나눠 쓰지 않게 떼어 둘 수 있습니다. 대신 스케줄러는 그 약속을 지킵니다. 다른 코어가 놀아도 고정된 프로세스는 옮기지 않고, 옮길 수 있는 일만 당겨 옵니다. fork로 만든 자식도 같은 고정을 물려받습니다.':
    'With taskset or sched_setaffinity you can choose which cores a process may run on. Pinning keeps its cache from moving around and can set it apart from other work. In return the scheduler keeps that promise: even when another core is idle it does not move the pinned process, and pulls only work that may move. A child made with fork inherits the same pinning.',
  '셸의 "taskset -c 1 db"로 DB가 코어 1에 고정됩니다. 코어 0이 "줄 비었음"을 알려도 스케줄러 이름표는 "DB는 코어 1만"이고, 고정이 없는 웹만 코어 0으로 옮겨 가 스케줄러 이름표가 "DB 못 옮김 → 웹"이 됩니다.':
    '"taskset -c 1 db" in the shell pins the DB to core 1. Even when core 0 reports "Queue empty", the scheduler\'s label reads "DB: core 1 only", and only the unpinned web server moves to core 0, so the scheduler\'s label becomes "DB stays → web moves".',
  '왼쪽 사용자 영역에 관리자 셸이, 경계 너머에 스케줄러와 코어 0, 코어 1이 있습니다. 코어 1의 줄에 웹과 DB가 있습니다.':
    'An admin shell is in user space on the left; across the boundary are the scheduler, core 0 and core 1. The web server and the DB are on core 1\'s queue.',
  'taskset -c 1 db → DB는 코어 1만': 'taskset -c 1 db → DB on core 1 only', '코어 0이 놂': 'Core 0 is idle', 'DB는 못 옮김': 'DB cannot move', '고정 없는 웹만 코어 0으로': 'Only the unpinned web server goes to core 0',
  'DB를 코어 1에만 둠': 'Keep the DB on core 1 only', 'DB 허용 코어: 1': 'DB allowed cores: 1', '코어 1 줄: 웹, DB': 'Core 1 queue: web, DB',
  '코어 0이 일을 찾음': 'Core 0 looks for work', 'DB는 코어 0에서 못 달림': 'The DB may not run on core 0', '고정 없는 웹만 옮김': 'Move only the unpinned web server', '코어 1: DB · 코어 0: 웹': 'Core 1: DB · core 0: web',
  '관리자가 DB를 코어 1에만 두라고 정합니다.': 'The admin says the DB may run only on core 1.',
  'DB가 코어 1의 줄에 들어갑니다. 코어 1에는 이제 일이 둘입니다.': 'The DB joins core 1\'s queue. Core 1 now has two jobs.',
  '코어 0이 놀게 되어 코어 1의 줄에서 일을 찾습니다.': 'Core 0 goes idle and looks for work on core 1\'s queue.',
  '고정이 없는 웹은 코어 0으로 옮겨 갑니다. DB는 코어 1에 그대로 남습니다.': 'The unpinned web server moves to core 0. The DB stays on core 1.',
  '코어 0이 DB를 당겨 올 수 있을까요?': 'Can core 0 pull the DB?',
  '당겨 온다': 'Yes, it pulls it', '못 당겨 온다': 'No, it cannot', 'DB가 둘로 나뉜다': 'The DB splits in two',
  'DB의 허용 코어는 1뿐입니다. 스케줄러는 놀고 있는 코어가 있어도 이 약속을 깨지 않습니다.': 'The DB is allowed only on core 1. The scheduler does not break that promise even when a core is idle.',
};
