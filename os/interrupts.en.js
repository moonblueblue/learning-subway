// English for OS 1.3 Interrupts and exceptions. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '인터럽트와 예외 · 레슨 1.3': 'Interrupts and exceptions · Lesson 1.3',
  '운영체제 1장 시작과 실행 · 레슨 1.3': 'Operating systems chapter 1 Starting and running · Lesson 1.3',
  '키보드와 타이머의 인터럽트, 실행 중인 명령이 일으키는 예외가 인터럽트 표와 커널의 처리기를 거쳐 처리되고, 프로그램이 멈춘 자리로 돌아오는 길을 따라가 보세요.':
    'Follow how keyboard and timer interrupts, and exceptions raised by the running instruction, are handled through the interrupt table and a handler in the kernel, and how the program returns to where it stopped.',
  '키를 누르면 CPU는 하던 일을 어떻게 멈추고 돌아올까요? 장치의 신호와 명령의 실수가 커널의 처리기를 거쳐 처리되는 길을 한 정거장씩 따라가 보세요.':
    'When you press a key, how does the CPU stop what it is doing and come back to it? Follow, station by station, how a device\'s signal and an instruction\'s mistake are handled by a handler in the kernel.',
  '키를 누르면 CPU는 하던 일을 어떻게 멈추고 돌아올까?': 'When you press a key, how does the CPU stop what it is doing and come back?',
  '프로그램, 인터럽트 표, 처리기, 장치': 'Program, interrupt table, handler, device',
  '장치나 프로그램에서 온 신호가 인터럽트 표를 지나 커널의 처리기로 가고, 프로그램으로 돌아오는 장면': 'A signal from a device or a program passing the interrupt table to a handler in the kernel and coming back to the program',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware', '막힘': 'Blocked',
  '표': 'Table', '커널': 'Kernel', '장치': 'Device',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '계산 프로그램': 'Calculator', '키보드 드라이버': 'Keyboard driver', '키보드': 'Keyboard', '인터럽트 표': 'IRQ table', '키보드 처리기': 'Key handler',
  'A (무한 반복)': 'A (endless loop)', '스케줄러': 'Scheduler', '타이머': 'Timer', '내 프로그램': 'My program', '페이지 폴트 처리기': 'Fault handler', '터미널': 'Terminal',
  // Legs in the stage list and the example strip
  '계산 프로그램 → 키보드': 'Calculator → keyboard', '키보드 → 계산 프로그램': 'Keyboard → calculator',
  '키보드 → 인터럽트 표': 'Keyboard → IRQ table', '인터럽트 표 → 키보드 처리기': 'IRQ table → key handler', '키보드 처리기 → 계산 프로그램': 'Key handler → calculator',
  '타이머 → 인터럽트 표': 'Timer → IRQ table', '인터럽트 표 → 스케줄러': 'IRQ table → scheduler', '스케줄러 → B': 'Scheduler → B',
  '내 프로그램 → 인터럽트 표': 'My program → IRQ table', '인터럽트 표 → 페이지 폴트 처리기': 'IRQ table → fault handler',
  '페이지 폴트 처리기 → 내 프로그램': 'Fault handler → my program', '페이지 폴트 처리기 → 터미널': 'Fault handler → terminal',
  '키보드 · A': 'Keyboard · A', '키보드 처리기 · 복귀': 'Key handler · Return', '스케줄러 · B 실행': 'Scheduler · Run B', '페이지 폴트 처리기 · 종료 이유': 'Fault handler · Why it ended',
  // Badges and moving labels
  '키 기다림': 'Waiting for a key', '아니': 'No', '다시 물음': 'Asks again', '아니 ×100만': 'No ×1 million', 'CPU 1초 버림': 'CPU lost 1 s', 'A 눌림': 'A pressed',
  '눌렸니?': 'Pressed?', '눌렸니? ×100만': 'Pressed? ×1 million',
  '계산 중 · PC 42': 'Calculating · PC 42', '멈춤 · PC 42 저장': 'Paused · PC 42 saved', 'IRQ 1 → 키보드': 'IRQ 1 → keys', '버퍼에 A': 'A buffered', 'PC 42부터': 'From PC 42', 'PC 42부터 계속': 'Carries on from PC 42',
  '처리기 실행': 'Run handler', '복귀': 'Return',
  '실행 중': 'Running', '기다림': 'Waiting', '멈춤 · PC 저장': 'Paused · PC saved', 'IRQ 0 → 스케줄러': 'IRQ 0 → sched', '4ms 지남': '4 ms up', 'A 끝 → B 차례': 'A done → B', '기다림 · PC 저장': 'Waiting · PC saved',
  '스케줄러 실행': 'Run scheduler', 'B 실행': 'Run B',
  '주소 0 읽기': 'Read address 0', '멈춤 · 명령 실패': 'Paused · instruction failed', '14번 → 페이지 폴트': '14 → page fault', '고칠 수 없음': 'Cannot fix', '종료됨': 'Ended',
  '예외 14': 'Exception 14', '종료 이유': 'Why it ended',
  // Step 1
  '계속 물어보기': 'Asking again and again',
  'CPU가 장치에 계속 물어보면 다른 일을 못 한다': 'If the CPU keeps asking a device, it can do nothing else',
  '키보드는 사람이 키를 누를 때까지 아무 말도 하지 않습니다. 그래서 CPU가 "눌렸니?"를 계속 물어보는 방법이 있는데, 이것을 폴링이라고 합니다. 사람이 키를 누르기까지 1초는 CPU에게 수십억 번 계산할 시간이지만, 그동안 CPU는 묻는 일만 합니다.':
    'A keyboard says nothing until someone presses a key. So one way is for the CPU to keep asking "pressed?"; this is called polling. The one second before someone presses a key is time for billions of calculations, but all that time the CPU only asks.',
  '점이 프로그램에서 키보드까지 갔다가 "아니"를 들고 돌아오기를 되풀이합니다. 백만 번을 넘게 물은 뒤에야 A가 돌아옵니다.':
    'The dot goes from the program to the keyboard and comes back with "no", again and again. Only after asking over a million times does A come back.',
  '왼쪽 사용자 영역에 계산 프로그램이, 경계 너머 커널 영역에 키보드 드라이버가, 오른쪽 끝에 키보드가 있습니다. 프로그램이 키보드에 계속 묻습니다.':
    'The calculator is in user space on the left, the keyboard driver in kernel space across the boundary, and the keyboard at the far right. The program keeps asking the keyboard.',
  '눌렸니? → 아니': 'Pressed? → no', '눌렸니? ×100만 → 아니': 'Pressed? ×1 million → no', 'A 받음': 'Got A', 'CPU는 1초 동안 묻기만 함': 'For 1 second the CPU only asks',
  'while 키가 안 눌림:': 'while no key is pressed:', '키보드에 물어봄': 'ask the keyboard',
  '물음 1번째: 아니': 'Question 1: no', '아직 아님 → 다시 물어봄': 'Not yet → ask again', '물음 1,000,000번째: 아니': 'Question 1,000,000: no', 'CPU는 묻기만 함': 'The CPU only asks',
  '드디어 A 받음': 'Finally got A', '묻느라 쓴 CPU 시간: 1초': 'CPU time spent asking: 1 second',
  'CPU가 드라이버를 거쳐 키보드에 키가 눌렸는지 묻습니다. 아직 아닙니다.': 'Through the driver, the CPU asks the keyboard whether a key has been pressed. Not yet.',
  '"아니"가 돌아오자 프로그램은 곧바로 다시 묻습니다.': 'When "no" comes back, the program asks again right away.',
  '사람이 키를 누르기까지 1초 동안 이 질문이 백만 번 넘게 오갑니다.': 'In the one second before someone presses a key, this question goes back and forth over a million times.',
  '키가 눌리자 A가 돌아옵니다. 그 1초 동안 CPU는 계산을 하나도 하지 못했습니다.': 'When the key is pressed, A comes back. In that one second the CPU did no calculation at all.',
  '키가 눌릴 때까지 CPU가 계속 물어보면 무슨 문제가 생길까요?': 'If the CPU keeps asking until a key is pressed, what goes wrong?',
  '키를 놓친다': 'It misses the key', '그동안 다른 일을 못 한다': 'It can do nothing else meanwhile', '키보드가 고장 난다': 'The keyboard breaks',
  '묻는 동안 CPU는 묻는 일만 합니다. 기다리는 시간이 길수록 버리는 계산이 많아집니다.': 'While asking, the CPU does nothing but ask. The longer the wait, the more calculation is wasted.',
  // Step 2
  '키보드 인터럽트': 'Keyboard interrupt',
  '장치가 먼저 알리면 CPU는 하던 일을 잠깐 멈추고 처리한다': 'When a device speaks first, the CPU pauses its work and handles it',
  '인터럽트는 장치가 CPU에 "일이 생겼다"고 먼저 알리는 신호입니다. CPU는 지금 명령을 마친 뒤 프로그램이 어디까지 했는지(PC와 레지스터, CPU의 한 사이클 레슨)를 저장하고 커널 모드로 바뀝니다. 인터럽트 표에서 이 신호를 맡을 처리기를 찾아 실행하고, 끝나면 저장한 자리로 돌아가 프로그램을 이어서 돌립니다.':
    'An interrupt is a signal a device sends first to tell the CPU "something happened". The CPU finishes the current instruction, saves how far the program got (the PC and registers, from the One CPU cycle lesson) and switches to kernel mode. It finds the handler for this signal in the interrupt table, runs it, and when it ends goes back to the saved place and carries on running the program.',
  '이번에는 점이 키보드에서 출발해 인터럽트 표와 키보드 처리기를 거쳐 프로그램으로 돌아옵니다. 프로그램은 묻지 않고 계산만 하다가, PC 42에서 멈췄던 계산을 그대로 이어 갑니다.':
    'This time the dot starts at the keyboard and comes to the program through the interrupt table and the keyboard handler. The program never asks; it just calculates, then carries on the calculation it paused at PC 42.',
  '왼쪽 사용자 영역에 계산 프로그램이, 경계 너머에 인터럽트 표와 키보드 처리기가, 오른쪽 끝에 키보드가 있습니다. 신호는 키보드에서 출발해 왼쪽으로 옵니다.':
    'The calculator is in user space on the left, the interrupt table and keyboard handler across the boundary, and the keyboard at the far right. The signal starts at the keyboard and comes leftwards.',
  'A 눌림 → IRQ 1': 'A pressed → IRQ 1', 'PC 42 저장 · 커널 모드': 'Saves PC 42 · kernel mode', '처리기: 버퍼에 A': 'Handler: A in the buffer',
  '합계 계산 중 (PC 42)': 'Calculating a total (PC 42)', '키를 묻지 않음': 'Does not ask for keys',
  'PC 42와 레지스터 저장': 'Save PC 42 and the registers', 'CPU가 커널 모드로 바뀜': 'CPU switches to kernel mode', 'IRQ 1 → 키보드 처리기': 'IRQ 1 → keyboard handler',
  '키 코드 30 읽음 → A': 'Read key code 30 → A', '입력 버퍼에 A 넣음': 'Put A in the input buffer',
  'PC 42와 레지스터 되살림': 'Restore PC 42 and the registers', '사용자 모드로 돌아옴': 'Back to user mode', '합계 계산 이어서': 'Carry on calculating the total',
  'A 키가 눌리자 키보드가 IRQ 1 신호를 보냅니다. CPU는 지금 명령을 마치고 PC 42를 저장한 뒤 인터럽트 표에서 처리기를 찾습니다.':
    'When the A key is pressed, the keyboard sends an IRQ 1 signal. The CPU finishes the current instruction, saves PC 42 and looks up the handler in the interrupt table.',
  '키보드 처리기가 키 코드를 읽어 A로 바꾸고 입력 버퍼에 넣습니다. 처리기는 짧게 끝내는 것이 규칙입니다.': 'The keyboard handler reads the key code, turns it into A and puts it in the input buffer. The rule is that a handler finishes quickly.',
  '처리기가 끝나면 CPU는 저장한 값을 되살리고 사용자 모드로 돌아갑니다. 프로그램은 멈췄던 자리부터 이어서 계산합니다.': 'When the handler ends, the CPU restores the saved values and returns to user mode. The program carries on calculating from where it paused.',
  '인터럽트가 오면 CPU가 처리기로 가기 전에 꼭 하는 일은?': 'When an interrupt comes, what must the CPU do before going to the handler?',
  '프로그램을 끝낸다': 'End the program', '지금 위치(PC)와 레지스터를 저장한다': 'Save the current position (PC) and the registers', '메모리를 비운다': 'Clear the memory',
  '저장해 두어야 처리가 끝난 뒤 프로그램이 멈춘 바로 그 자리에서 이어 갈 수 있습니다.': 'Saving them is what lets the program carry on from exactly where it paused once the handling is done.',
  '처리가 끝나면 계산 프로그램은 어디서부터 이어 갈까요?': 'When the handling is done, where does the calculator carry on from?',
  '처음부터 다시': 'From the beginning again', '멈춘 자리(PC 42)부터': 'From where it paused (PC 42)', '다음 프로그램으로 넘어감': 'It moves on to the next program',
  '저장해 둔 PC와 레지스터를 그대로 되살리므로, 프로그램은 중간에 끼어든 일이 있었는지조차 모릅니다.': 'The saved PC and registers are restored exactly, so the program does not even know that something broke in.',
  // Step 3
  '타이머 인터럽트': 'Timer interrupt',
  '타이머 인터럽트가 운영체제에 CPU를 돌려준다': 'The timer interrupt gives the CPU back to the operating system',
  '프로그램이 while True처럼 끝나지 않는 반복에 빠지면 스스로 CPU를 내놓지 않습니다. 그래서 운영체제는 켜질 때 타이머가 몇 밀리초마다 인터럽트를 보내게 맞춰 둡니다. 타이머 인터럽트가 오면 커널의 스케줄러(CPU 스케줄링 레슨)가 돌아가, 이 프로그램이 받은 시간이 끝났는지 보고 다음 프로그램에 CPU를 넘깁니다.':
    'A program caught in a loop that never ends, like while True, never gives up the CPU by itself. So at start-up the operating system sets the timer to send an interrupt every few milliseconds. When a timer interrupt comes, the kernel\'s scheduler (from the CPU scheduling lesson) runs, checks whether this program\'s time is up, and hands the CPU to the next program.',
  '무한 반복 중인 A가 멈추고, 타이머에서 온 신호가 인터럽트 표와 스케줄러를 거쳐 B를 실행합니다. A는 PC를 저장한 채 기다렸다가 자기 차례에 이어서 돕니다.':
    'A, in its endless loop, stops, and the signal from the timer runs B through the interrupt table and the scheduler. A waits with its PC saved and carries on when its turn comes.',
  '왼쪽 사용자 영역에 프로그램 A와 B가, 경계 너머에 인터럽트 표와 스케줄러가, 오른쪽 끝에 타이머가 있습니다.': 'Programs A and B are in user space on the left, the interrupt table and scheduler across the boundary, and the timer at the far right.',
  'A: while True (스스로 안 멈춤)': 'A: while True (never stops itself)', '4ms 뒤 IRQ 0': 'IRQ 0 after 4 ms', '스케줄러: A 시간 끝': 'Scheduler: A\'s time is up', 'B 실행 · A 기다림': 'B runs · A waits',
  'while True:': 'while True:', 'pass   # 스스로 멈추지 않음': 'pass   # never stops by itself',
  '4ms 지남 → 타이머 신호': '4 ms passed → timer signal', 'A의 PC 저장, 커널 모드': 'Save A\'s PC, kernel mode',
  'A: 받은 4ms 다 씀': 'A: used up its 4 ms', '다음 차례: B': 'Next turn: B',
  'B가 멈췄던 PC와 레지스터 되살림': 'Restore the PC and registers where B paused', '사용자 모드로 B 실행': 'Run B in user mode',
  '4ms가 지나자 타이머가 IRQ 0을 보냅니다. CPU는 A가 어디까지 했는지 저장하고 커널로 들어갑니다.': 'After 4 ms the timer sends IRQ 0. The CPU saves how far A got and enters the kernel.',
  '스케줄러는 A가 받은 시간을 다 썼으니 B의 차례라고 정합니다.': 'A has used up its time, so the scheduler decides it is B\'s turn.',
  'CPU는 B가 지난번에 멈춘 자리를 되살려 B를 돌립니다. A는 다음 차례까지 기다립니다.': 'The CPU restores where B paused last time and runs B. A waits for its next turn.',
  'A가 while True에서 스스로 멈추지 않는데도 B가 돌 수 있는 까닭은?': 'A never stops its while True by itself, so why can B run?',
  'A가 결국 지쳐서 멈춘다': 'A gets tired and stops in the end', '타이머 인터럽트가 CPU를 커널에 돌려준다': 'The timer interrupt gives the CPU back to the kernel', 'B가 A를 끈다': 'B switches A off',
  '프로그램이 무엇을 하든 타이머 신호는 정해진 간격으로 옵니다. 그때마다 커널이 CPU를 다시 쥡니다.': 'Whatever a program does, the timer signal comes at a set interval. Each time, the kernel takes the CPU back.',
  // Step 4
  '예외': 'Exceptions',
  '실행 중인 명령이 문제를 일으키면 예외가 된다': 'When the running instruction causes a problem, it becomes an exception',
  '인터럽트는 바깥 장치가 보내지만, 예외는 지금 실행 중인 명령이 일으킵니다. 0으로 나누기나 없는 주소 읽기가 그렇습니다. CPU는 인터럽트와 같은 길로 커널의 처리기를 부릅니다. 페이지가 디스크에 내려가 있었다면(가상 메모리 레슨) 처리기가 페이지를 올리고 같은 명령을 다시 실행하지만, 이 프로그램의 주소가 아니면 프로그램을 끝냅니다.':
    'An outside device sends an interrupt, but the instruction running now raises an exception, such as dividing by zero or reading an address that does not exist. The CPU calls a handler in the kernel by the same road as an interrupt. If the page had been moved out to disk (from the Virtual memory lesson), the handler brings it back and runs the same instruction again; if the address is not this program\'s, it ends the program.',
  '이번에는 점이 프로그램에서 출발합니다. 예외 14번이 페이지 폴트 처리기로 가고, 처리기가 주소 0을 고칠 수 없다고 판정해 프로그램을 끝내고 터미널에 Segmentation fault를 남깁니다.':
    'This time the dot starts at the program. Exception 14 goes to the page-fault handler, which decides address 0 cannot be fixed, ends the program and leaves Segmentation fault in the terminal.',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 인터럽트 표와 페이지 폴트 처리기가, 오른쪽에 터미널 화면이 있습니다.': 'The program is in user space on the left, the interrupt table and page-fault handler across the boundary, and a terminal screen on the right.',
  '예외 14 (페이지 폴트)': 'Exception 14 (page fault)', '처리기: 고칠 수 없음': 'Handler: cannot fix', '프로그램 종료 · Segmentation fault': 'Program ended · Segmentation fault',
  'p = 주소 0   # 비어 있는 포인터': 'p = address 0   # an empty pointer', 'x = p가 가리키는 값 읽기': 'x = read the value p points to',
  '주소 0 읽기 → 페이지 표에 없음': 'Read address 0 → not in the page table', '예외 14번(페이지 폴트)': 'Exception 14 (page fault)', '14번 → 페이지 폴트 처리기': '14 → page-fault handler',
  '주소 0: 이 프로그램 영역 아님': 'Address 0: not in this program\'s area', '디스크에도 없음 → 고칠 수 없음': 'Not on disk either → cannot fix',
  '종료 신호 SIGSEGV 받음': 'Receives the SIGSEGV end signal', '프로그램 끝남': 'Program ends', 'Segmentation fault': 'Segmentation fault',
  '주소 0을 읽으려는 명령에서 CPU가 페이지 표(가상 메모리 레슨)에 길이 없음을 알고 예외 14번을 일으킵니다.': 'At the instruction that reads address 0, the CPU finds no road in the page table (from the Virtual memory lesson) and raises exception 14.',
  '처리기는 주소 0이 디스크로 내려간 페이지인지 봅니다. 이 프로그램에 속한 주소가 아니어서 고칠 수 없습니다.': 'The handler checks whether address 0 is a page moved out to disk. It does not belong to this program, so it cannot be fixed.',
  '커널은 종료 신호(SIGSEGV)를 보내 프로그램을 끝냅니다. 다른 프로그램은 아무 영향을 받지 않습니다.': 'The kernel sends an end signal (SIGSEGV) and ends the program. No other program is affected.',
  '프로그램을 실행한 셸이 종료 이유를 받아 터미널에 Segmentation fault를 적습니다.': 'The shell that ran the program gets the reason it ended and writes Segmentation fault in the terminal.',
  '인터럽트와 예외는 무엇이 다를까요?': 'How do interrupts and exceptions differ?',
  '예외는 실행 중인 명령이 일으킨다': 'The running instruction raises an exception', '예외는 장치가 보낸다': 'A device sends an exception', '차이가 없다': 'There is no difference',
  '키보드나 타이머처럼 바깥에서 오면 인터럽트, 지금 명령 때문에 생기면 예외입니다. 처리하는 길(표 → 커널 처리기)은 같습니다.':
    'If it comes from outside, like the keyboard or timer, it is an interrupt; if the current instruction causes it, it is an exception. The road that handles them (table → kernel handler) is the same.',
};
