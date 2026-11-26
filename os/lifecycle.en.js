// English for OS 2.2 The life of a process. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '프로세스의 생애 · 레슨 2.2': 'The life of a process · Lesson 2.2',
  '운영체제 2장 프로세스와 CPU · 레슨 2.2': 'Operating systems chapter 2 Processes and the CPU · Lesson 2.2',
  '끝난 자식이 좀비로 남는 이유, 부모가 거두지 않을 때 좀비가 쌓이는 모습, 고아를 init이 맡는 과정, 좀비를 치우는 방법을 시스템 콜 단위로 따라가 보세요.':
    'Follow, one system call at a time, why an ended child stays as a zombie, how zombies pile up when the parent does not collect them, how init takes in orphans, and how zombies are cleared.',
  '끝난 프로세스는 누가 치울까요? exit, wait, 그리고 부모를 잃은 고아를 맡는 init 사이를 오가는 길을 한 정거장씩 따라가 보세요.':
    'Who cleans up a process that has ended? Follow, station by station, the road between exit, wait and init, which takes in orphans that have lost their parent.',
  '끝난 프로세스는 누가 치울까?': 'Who cleans up a process that has ended?',
  '부모, 자식, init, 커널': 'Parent, child, init, kernel',
  '끝난 자식 프로세스가 좀비로 남았다가 부모나 init의 wait로 거두어지는 장면': 'An ended child process staying as a zombie until the parent\'s or init\'s wait collects it',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware', '막힘': 'Blocked',
  '프로세스': 'Process', '창구': 'Gate', '커널': 'Kernel',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '부모 PID 200': 'Parent PID 200', '자식 PID 201': 'Child PID 201', '자식들': 'Children', 'init PID 1': 'init PID 1', '좀비 PID 201': 'Zombie PID 201',
  '시스템 콜': 'System call', '관리자 셸': 'Admin shell',
  // Legs in the stage list and the example strip
  '자식 PID 201 → 시스템 콜': 'Child PID 201 → system call', '시스템 콜 → 커널': 'System call → kernel', '부모 PID 200 → 시스템 콜': 'Parent PID 200 → system call',
  '커널 → 부모 PID 200': 'Kernel → parent PID 200', '시스템 콜 → 자식들': 'System call → children', '자식들 → 시스템 콜': 'Children → system call',
  '커널 → init PID 1': 'Kernel → init PID 1', 'init PID 1 → 시스템 콜': 'init PID 1 → system call', '시스템 콜 → 좀비 PID 201': 'System call → zombie PID 201',
  '시스템 콜 → 부모 PID 200': 'System call → parent PID 200', 'init PID 1 → 좀비 PID 201': 'init PID 1 → zombie PID 201',
  '커널 · 201, 코드 0': 'Kernel · 201, code 0', '시스템 콜 · exit ×3': 'System call · exit ×3',
  // Badges and moving labels
  '실행 중': 'Running', '좀비 · 코드 0만 남음': 'Zombie · only code 0 left', '표에 201만 남김': 'Only 201 left in the table', 'wait': 'wait',
  '201 · 코드 0 받음': '201 · got code 0', '완전히 사라짐': 'Gone completely', '표에서 201 지움': '201 removed from the table', '-9 무효 · kill 200': '-9 failed · kill 200', 'exit 0': 'exit 0',
  '요청 받는 중': 'Taking requests', 'fork ×3': 'fork ×3', 'wait 안 함': 'No wait', '실행 중 ×3': 'Running ×3', 'exit ×3': 'exit ×3', '좀비 Z ×3': 'Zombie Z ×3', 'PID 3칸 차지': 'Holds 3 PIDs',
  '실행 중 · 부모 200': 'Running · parent 200', '대기': 'Waiting', 'exit': 'exit', '먼저 끝남': 'Ended first', '부모 바꿈': 'Parent changed', '201의 새 부모': '201\'s new parent',
  '실행 중 · 부모 1': 'Running · parent 1', '좀비 · 부모 1': 'Zombie · parent 1', '201 거둠': 'Collected 201',
  '좀비 Z': 'Zombie Z', 'kill -9 201': 'kill -9 201', '그대로 Z': 'Still Z', 'kill 200': 'kill 200', '끝남': 'Ended',
  'exit(0)': 'exit(0)', 'wait()': 'wait()', '201, 코드 0': '201, code 0', 'fork() ×3': 'fork() ×3', '201·202·203': '201·202·203', 'exit(0) ×3': 'exit(0) ×3',
  'exit(1)': 'exit(1)', '201 입양': 'Adopt 201', 'SIGKILL': 'SIGKILL',
  // Step 1
  '좀비와 wait': 'Zombies and wait',
  '끝난 자식은 부모가 거둘 때까지 좀비로 남는다': 'An ended child stays a zombie until its parent collects it',
  '자식이 exit로 끝나면 커널은 메모리와 연 파일을 곧바로 거둡니다. 그러나 프로세스 표의 한 줄(PID와 종료 코드)은 남겨 둡니다. 부모가 그 종료 코드를 읽어 가야 하기 때문입니다. 이렇게 끝났지만 아직 거두어지지 않은 프로세스를 좀비라고 합니다. 부모가 wait를 부르면 커널은 종료 코드를 넘기고 그 한 줄까지 지웁니다.':
    'When a child ends with exit, the kernel takes back its memory and open files at once. But it keeps one line of the process table (the PID and exit code), because the parent has to read that exit code. A process that has ended but not yet been collected is called a zombie. When the parent calls wait, the kernel hands over the exit code and removes that last line too.',
  '자식에서 exit가 창구로 가면 자식 이름표가 "좀비 · 코드 0만 남음"이 됩니다. 부모의 wait가 커널을 거쳐 코드를 받아 가면 자식 이름표는 "완전히 사라짐"으로 바뀝니다.':
    'When exit goes from the child to the gate, the child\'s label becomes "Zombie · only code 0 left". When the parent\'s wait collects the code through the kernel, the child\'s label changes to "Gone completely".',
  '왼쪽 사용자 영역에 부모(PID 200)와 자식(PID 201)이, 경계 너머에 시스템 콜 창구와 커널이 있습니다.': 'The parent (PID 200) and child (PID 201) are in user space on the left; across the boundary are the system-call gate and the kernel.',
  '자식 201: exit(0)': 'Child 201: exit(0)', '좀비 (코드 0만 남김)': 'Zombie (only code 0 left)', '부모: wait()': 'Parent: wait()', '코드 받음 → 자식 완전히 지움': 'Code collected → child removed completely',
  '일을 마침': 'Work done', '곧 exit(0)': 'exit(0) soon',
  '자식 201이 끝남': 'Child 201 ends', '메모리·연 파일 거둠': 'Take back memory and open files', '표에 PID 201과 코드 0만 남김': 'Keep only PID 201 and code 0 in the table',
  '끝난 자식의 코드를 달라': 'Ask for the ended child\'s code', '자식 201, 코드 0 받음': 'Got child 201, code 0', '커널이 표에서 201을 지움': 'The kernel removes 201 from the table',
  '자식이 exit(0)으로 끝납니다. 이제 이 자식은 더 실행할 코드가 없습니다.': 'The child ends with exit(0). It has no more code to run.',
  '커널은 자식의 메모리와 연 파일을 거두고, 프로세스 표에 PID와 종료 코드만 남깁니다.': 'The kernel takes back the child\'s memory and open files, keeping only its PID and exit code in the process table.',
  '부모가 wait를 불러 끝난 자식의 종료 코드를 달라고 합니다.': 'The parent calls wait and asks for the ended child\'s exit code.',
  '부모가 종료 코드를 받자 커널은 표의 마지막 한 줄까지 지웁니다. 자식 201은 이제 완전히 사라졌습니다.': 'Once the parent has the exit code, the kernel removes the last line from the table. Child 201 is now gone completely.',
  'exit한 자식은 바로 완전히 사라질까요?': 'Does a child that exits disappear completely at once?',
  '바로 사라진다': 'It disappears at once', '종료 코드만 남긴 좀비가 된다': 'It becomes a zombie that keeps only its exit code', '처음부터 다시 실행된다': 'It runs again from the start',
  '부모가 종료 코드를 읽어 갈 때까지 커널은 프로세스 표의 한 줄을 남겨 둡니다.': 'The kernel keeps one line of the process table until the parent reads the exit code.',
  // Step 2
  '쌓이는 좀비': 'Zombies pile up',
  '부모가 거두지 않으면 좀비가 쌓인다': 'If the parent never collects them, zombies pile up',
  '요청이 올 때마다 fork로 자식을 만드는 서버가 wait를 부르지 않으면, 끝난 자식이 모두 좀비로 남습니다. 좀비는 메모리를 거의 쓰지 않지만 프로세스 표의 칸과 PID를 하나씩 차지합니다. PID에는 한계가 있어서, 좀비가 계속 쌓이면 결국 어떤 프로세스도 새로 만들 수 없게 됩니다. ps로 보면 상태가 Z, 이름 옆에 <defunct>로 나옵니다.':
    'If a server that makes a child with fork for every request never calls wait, every ended child stays as a zombie. Zombies use almost no memory, but each holds a slot in the process table and a PID. PIDs are limited, so if zombies keep piling up, in the end no new process can be made at all. In ps they show state Z, with <defunct> next to the name.',
  '부모의 fork가 세 번 나가고 자식들이 끝나지만, 부모에서 wait는 한 번도 나가지 않습니다. 자식 이름표에 "좀비 Z ×3"이 쌓이고 커널 이름표에 PID 세 칸이 남습니다.':
    'The parent\'s fork goes out three times and the children end, but wait never leaves the parent. "Zombie Z ×3" piles up on the children\'s label, and three PID slots stay on the kernel\'s label.',
  '부모(PID 200)가 요청마다 자식을 만들고 wait는 부르지 않습니다. 끝난 자식들이 좀비로 남습니다.': 'The parent (PID 200) makes a child for each request and never calls wait. The ended children stay as zombies.',
  '요청마다 fork · wait 없음': 'fork per request · no wait', '자식 201·202·203 exit': 'Children 201·202·203 exit', 'ps에 <defunct>, PID만 차지': 'ps shows <defunct>, only holding PIDs',
  'while 요청이 옴:': 'while a request comes:', 'fork()   # wait는 부르지 않음': 'fork()   # never calls wait',
  'fork() 세 번': 'fork() three times', '자식 201, 202, 203': 'Children 201, 202, 203', '자식 셋이 요청을 처리': 'Three children handle the requests',
  '자식 셋이 모두 exit(0)': 'All three children exit(0)', '표에 201·202·203이 남음': '201·202·203 stay in the table', 'ps: Z <defunct> 세 줄': 'ps: three Z <defunct> lines',
  '요청이 세 번 와서 부모가 fork를 세 번 부릅니다.': 'Three requests come, and the parent calls fork three times.',
  '자식 셋이 생겨 요청을 하나씩 처리합니다.': 'Three children appear and each handles a request.',
  '자식 셋이 일을 마치고 끝납니다. 부모는 wait를 부르지 않습니다.': 'The three children finish and end. The parent does not call wait.',
  '커널은 세 자식의 메모리를 거두지만, 부모가 읽어 가지 않은 표 세 줄은 지우지 못합니다.': 'The kernel takes back the three children\'s memory but cannot remove the three table lines the parent has not read.',
  '부모가 wait를 끝내 부르지 않고 좀비가 계속 쌓이면?': 'If the parent never calls wait and zombies keep piling up?',
  'PID가 바닥나 새 프로세스를 못 만든다': 'PIDs run out and no new process can be made', '메모리를 다 써 버린다': 'Memory runs out', '시간이 지나면 저절로 사라진다': 'They vanish by themselves in time',
  '좀비는 메모리를 거의 쓰지 않지만 PID와 표의 칸을 하나씩 차지합니다. PID 수에는 한계가 있습니다.': 'Zombies use almost no memory, but each holds a PID and a table slot. The number of PIDs is limited.',
  // Step 3
  '고아와 init': 'Orphans and init',
  '부모가 먼저 끝나면 init이 자식을 맡는다': 'If the parent ends first, init takes in the child',
  '부모가 자식보다 먼저 끝나면, 남은 자식을 고아라고 합니다. 커널은 고아의 부모를 init(리눅스에서는 보통 systemd, PID 1)으로 바꿉니다. init은 맡은 자식이 끝날 때마다 wait를 불러 거두도록 만들어져 있어서, 고아는 좀비로 오래 남지 않습니다.':
    'If a parent ends before its child, the child left behind is called an orphan. The kernel changes the orphan\'s parent to init (usually systemd on Linux, PID 1). init is built to call wait whenever a child in its care ends, so orphans do not stay zombies for long.',
  '부모가 먼저 exit하자 커널에서 init으로 "201 입양"이 갑니다. 나중에 자식이 끝나면 init의 wait가 나가 자식 이름표가 "완전히 사라짐"이 됩니다.':
    'When the parent exits first, "Adopt 201" goes from the kernel to init. Later, when the child ends, init\'s wait goes out and the child\'s label becomes "Gone completely".',
  '왼쪽 사용자 영역에 부모(PID 200), 자식(PID 201), init(PID 1)이, 경계 너머에 시스템 콜 창구와 커널이 있습니다.': 'The parent (PID 200), child (PID 201) and init (PID 1) are in user space on the left; across the boundary are the system-call gate and the kernel.',
  '부모 200 먼저 끝남': 'Parent 200 ends first', '고아 201을 init(PID 1)이 입양': 'init (PID 1) adopts orphan 201', '201 exit': '201 exits', 'init이 wait로 거둠': 'init collects it with wait',
  '자식 201을 만든 뒤': 'After making child 201', '먼저 끝나려 함': 'about to end first',
  '부모 200이 먼저 끝남': 'Parent 200 ends first', '201의 부모를 200 → 1로 바꿈': 'Change 201\'s parent from 200 to 1', 'init이 wait()': 'init calls wait()', '201 코드 0 받음': 'Got 201\'s code 0', '표에서 201을 지움': 'Remove 201 from the table',
  '부모가 자식보다 먼저 끝납니다. 자식 201은 부모를 잃은 고아가 됩니다.': 'The parent ends before the child. Child 201 becomes an orphan that has lost its parent.',
  '커널이 고아 201의 부모를 init(PID 1)으로 바꿉니다.': 'The kernel changes orphan 201\'s parent to init (PID 1).',
  '얼마 뒤 자식 201도 끝납니다. 잠시 좀비가 됩니다.': 'A little later child 201 ends too. For a moment it is a zombie.',
  'init이 곧바로 wait를 불러 자식의 종료 코드를 받습니다.': 'init calls wait right away and gets the child\'s exit code.',
  'init이 코드를 받아 가자 커널이 마지막 한 줄을 지웁니다. 고아는 좀비로 오래 남지 않습니다.': 'Once init has the code, the kernel removes the last line. Orphans do not stay zombies for long.',
  '부모가 먼저 끝난 자식(고아)은 누가 맡을까요?': 'Who takes in a child whose parent ended first (an orphan)?',
  '아무도 없어 영원히 남는다': 'Nobody, so it stays forever', 'init(PID 1)이 새 부모가 된다': 'init (PID 1) becomes its new parent', '자식도 같이 끝난다': 'The child ends too',
  '커널은 고아를 init에 붙입니다. init은 맡은 자식이 끝나면 늘 wait로 거둡니다.': 'The kernel attaches orphans to init. init always collects a child in its care with wait when it ends.',
  // Step 4
  '좀비 치우기': 'Clearing zombies',
  '좀비는 죽일 수 없고, 부모를 정리해야 사라진다': 'A zombie cannot be killed; it goes when its parent is dealt with',
  '좀비는 이미 끝난 프로세스라 kill -9을 보내도 받을 수 없습니다. 남은 것은 부모가 읽어 갈 종료 코드뿐입니다. 그래서 좀비를 없애려면 부모가 wait를 부르게 고치거나, 부모를 끝내야 합니다. 부모가 끝나면 좀비는 고아가 되어 init에 맡겨지고, init이 곧바로 거둡니다.':
    'A zombie has already ended, so it cannot receive even kill -9. All that is left is the exit code its parent should read. So to get rid of zombies, fix the parent to call wait, or end the parent. When the parent ends, the zombie becomes an orphan, is handed to init, and init collects it at once.',
  '좀비에 보낸 SIGKILL은 아무것도 바꾸지 못합니다. 부모에 보낸 SIGKILL로 부모가 끝나자 init이 좀비를 입양해 wait로 거두고, 좀비 이름표가 "완전히 사라짐"이 됩니다.':
    'The SIGKILL sent to the zombie changes nothing. When the SIGKILL sent to the parent ends it, init adopts the zombie and collects it with wait, and the zombie\'s label becomes "Gone completely".',
  '왼쪽 사용자 영역에 부모(PID 200), 좀비(PID 201), init(PID 1)이, 경계 너머에 시스템 콜 창구와 커널이 있습니다. 관리자가 kill 명령을 보냅니다.':
    'The parent (PID 200), the zombie (PID 201) and init (PID 1) are in user space on the left; across the boundary are the system-call gate and the kernel. An administrator sends kill commands.',
  'kill -9 201 → 변화 없음 (이미 끝남)': 'kill -9 201 → no change (already ended)', 'kill 200 (부모)': 'kill 200 (the parent)', 'init이 201 입양 후 wait': 'init adopts 201, then waits', '좀비 사라짐': 'Zombie gone',
  '$ ps': '$ ps', '201  Z  worker <defunct>': '201  Z  worker <defunct>',
  '$ kill -9 201': '$ kill -9 201', '변화 없음: 이미 끝난 프로세스': 'No change: the process has already ended', '$ kill 200': '$ kill 200', '부모가 끝남': 'The parent ends',
  '좀비 201의 부모를 1로 바꿈': 'Change zombie 201\'s parent to 1', 'init이 wait()로 코드를 받음': 'init gets the code with wait()',
  '관리자가 좀비에 SIGKILL을 보냅니다. 이미 끝난 프로세스라 받을 수 없어 아무 일도 일어나지 않습니다.': 'The administrator sends SIGKILL to the zombie. It has already ended and cannot receive it, so nothing happens.',
  '이번에는 좀비를 거두지 않는 부모를 끝냅니다.': 'This time end the parent that is not collecting the zombie.',
  '부모가 끝나자 좀비 201은 고아가 되고, 커널이 init에 맡깁니다.': 'Once the parent ends, zombie 201 becomes an orphan and the kernel hands it to init.',
  'init이 바로 wait로 종료 코드를 받아 가자 좀비가 사라집니다.': 'init collects the exit code with wait right away, and the zombie disappears.',
  '좀비에 kill -9을 보내면 어떻게 될까요?': 'What happens if you send kill -9 to a zombie?',
  '좀비가 사라진다': 'The zombie disappears', '아무 일도 없다': 'Nothing happens', '부모가 끝난다': 'The parent ends',
  '좀비는 이미 끝나서 신호를 받을 코드가 없습니다. 남은 것은 부모가 읽어 갈 종료 코드뿐입니다.': 'A zombie has ended, so there is no code left to receive a signal. All that remains is the exit code for its parent to read.',
};
