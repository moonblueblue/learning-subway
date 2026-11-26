// English for 5.1 Processes and threads. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Chapter 5 reading diagrams
  "호출하면 쌓이고 반환하면 사라진다": "A call pushes a frame; return pops it",
  "호출 전": "Before call",
  "호출자 · PC 12": "Caller · PC 12",
  "호출 중": "During call",
  "함수 · PC 28": "Function · PC 28",
  "반환 후": "After return",
  "호출": "Call",
  "반환": "Return",
  "함수의 지역 변수는 반환할 때 함수 프레임과 함께 사라진다.": "The function’s frame and local variables are removed on return.",
  "같은 PID 안에서만 바뀐 값을 읽는다": "Only threads in the same PID see the change",
  "PID 101 데이터": "PID 101 data",
  "PID 102 데이터": "PID 102 data",
  "쓰기": "Write",
  "읽기": "Read",
  "PID 101의 T1이 x를 9로 변경": "T1 in PID 101 sets x to 9",
  "PID 101의 T2가 같은 변수 읽기": "T2 in PID 101 reads that variable",
  "PID 101은 9 · PID 102는 7": "PID 101 reads 9 · PID 102 reads 7",
  "PID 101의 쓰기 x: 7 → 9 · PID 102는 7 유지": "PID 101 writes x: 7 → 9 · PID 102 stays at 7",
  // Notes on the still pictures
  '메모장.exe 실행 → 운영체제가 RAM에 자리를 만들어 프로세스 PID 101': 'notepad.exe runs → the OS makes room in RAM for process PID 101',
  '함수 호출 → 스택에 층이 하나 쌓임 (2층) · 함수가 끝나면 그 층이 사라짐': 'A function call adds a layer to the stack (2 layers) · it goes away when the function ends',
  '스레드 2개: 코드·데이터·힙은 함께 쓰고 · 스택과 PC는 각자': 'Two threads: they share code, data and heap · each has its own stack and PC',
  'A의 스레드가 데이터를 덮어씀 → A의 다른 스레드도 망가진 값 · B는 메모리가 따로라 그대로': 'A thread in A overwrites data → A’s other thread sees the broken value · B has its own memory and is untouched',
  // Page
  '프로세스와 스레드 · 레슨 5.1': 'Processes and threads · Lesson 5.1',
  '프로그램을 실행해 프로세스를 띄우고, 코드·데이터·힙·스택 구역과 스레드, 프로세스 사이의 격리를 직접 살펴보세요.':
    'Run a program to start a process, and look hands-on at the code, data, heap and stack areas, threads, and the isolation between processes.',
  '실행 중인 프로그램은 무엇을 가지고 있을까요? 프로그램을 실행해 프로세스를 띄우고, 메모리 구역과 스레드를 살펴보세요.':
    'What does a running program hold? Run a program to start a process, and look at its memory areas and threads.',
  'RAM 위에 프로세스마다 코드, 데이터, 힙, 스택으로 나뉜 메모리 탑이 서 있는 장면': 'Memory towers standing on RAM, one per process, split into code, data, heap and stack',
  'RAM 위의 프로세스': 'Processes on RAM', '코드': 'Code', '데이터 ✗': 'Data ✗', '힙': 'Heap', '빈 공간': 'Free space', '스레드': 'Threads', '함께 쓰는 메모리': 'Shared memory', '종료됨': 'Ended',
  '조작': 'Controls', '메모장': 'Notepad', '메모장.exe': 'notepad.exe', '{0} · PID {#1}': '{0} · PID {1}', '스레드 {#0}': 'Thread {0}',
  // Buttons and readouts
  '메모장 실행': 'Run Notepad', '함수 호출': 'Call a function', '함수 반환': 'Return from a function', '새 값 만들기': 'Make a new value', '스레드 추가': 'Add a thread',
  'B에서 오류 내기': 'Cause an error in B', 'A의 스레드가 데이터 망가뜨리기': 'Have A\'s thread corrupt data',
  '메모장을 실행했습니다. 운영체제가 RAM에 자리를 만들고 PID {#0}를 붙였습니다. 프로세스 {#1}개.': 'Notepad started. The operating system made room in RAM and gave it PID {0}. {1} {1|process|processes}.',
  '이 장면에서는 세 개까지 띄웁니다.': 'This scene runs up to three.',
  '함수를 불러 스택에 층이 쌓였습니다({#0}층). PC는 함수의 코드 {#1}번지로 갑니다.': 'A function was called and a level piled onto the stack ({0} {0|level|levels}). PC goes to the function\'s code at address {1}.',
  '함수가 끝나 스택 맨 위 층이 사라졌습니다({#0}층).': 'The function ended and the top level of the stack vanished ({0} {0|level|levels}).', '맨 바깥 층만 남아 돌아갈 곳이 없습니다.': 'Only the outermost level is left; there is nowhere to return to.',
  '새 값을 만들어 힙이 커졌습니다({#0}칸). 지역 변수와 달리 함수가 끝나도 남습니다.': 'A new value was made and the heap grew ({0} {0|cell|cells}). Unlike local variables, it stays after the function ends.',
  '스택과 힙이 만났습니다. 더 부르면 스택 넘침입니다.': 'The stack and heap have met. One more call would overflow the stack.', '힙과 스택이 만났습니다. 메모리가 부족합니다.': 'The heap and stack have met. Memory is running out.',
  '스레드 {#0}를 만들었습니다. 자기 스택과 PC를 가지고, 코드·데이터·힙은 함께 씁니다.': 'Thread {0} was made. It has its own stack and PC, and shares the code, data and heap.',
  '이 장면에서는 스레드를 셋까지 둡니다.': 'This scene allows up to three threads.',
  'B에서 0으로 나누기 오류가 나 운영체제가 B를 끝냈습니다. A는 메모리가 따로라 아무 일 없이 계속 돕니다.': 'B hit a divide-by-zero error and the operating system ended B. A has its own memory and keeps running untouched.',
  'B는 이미 끝났습니다.': 'B has already ended.',
  'A의 스레드 1이 데이터 구역의 값을 잘못 덮어썼습니다. 같은 데이터를 쓰는 A의 다른 스레드도 망가진 값을 읽게 됩니다. B는 영향이 없습니다.':
    'A\'s thread 1 wrongly overwrote a value in the data area. A\'s other threads, which use the same data, now read the corrupted value too. B is unaffected.',
  // Step 1
  '프로그램과 프로세스': 'Programs and processes', 'SSD의 메모장 파일': 'The Notepad file on the SSD', '프로그램 실행': 'Run the program', 'RAM에 프로세스 생성': 'A process is made in RAM',
  '실행 중인 프로그램이 프로세스다': 'A running program is a process',
  '프로그램은 SSD에 저장된 실행 파일(3.8)일 뿐입니다. 실행하면 운영체제가 RAM에 자리를 마련해 코드를 올리고, 번호(PID)를 붙여 하나의 프로세스로 관리합니다. 같은 프로그램을 두 번 실행하면 프로세스가 둘 생기고, 각자 자기 메모리를 따로 가집니다.':
    'A program is just an executable file stored on the SSD (3.8). When run, the operating system makes room in RAM, loads the code, gives it a number (PID) and manages it as one process. Run the same program twice and there are two processes, each with its own memory.',
  '"메모장 실행"을 두 번 누르면 PID가 다른 탑이 둘 섭니다. 코드는 같은 파일에서 왔지만, 한쪽에 글을 써도 다른 쪽에는 나타나지 않습니다. 각자 메모리가 따로이기 때문입니다.':
    'Press "Run Notepad" twice and two towers with different PIDs stand. Their code came from the same file, but writing in one does not show up in the other, because each has its own memory.',
  '왼쪽 SSD에 메모장 실행 파일이 있습니다. 실행하면 오른쪽 RAM 위에 프로세스의 메모리 탑이 하나씩 섭니다.': 'On the SSD on the left is the Notepad executable. Each run puts up one process memory tower on RAM on the right.',
  '"메모장 실행"을 두 번 눌러 보세요.': 'Press "Run Notepad" twice.', 'PID가 다른 프로세스가 둘 생겼습니다.': 'Two processes with different PIDs appeared.',
  '두 메모장 중 하나에 글을 쓰면 다른 메모장의 메모리는?': 'If you write in one of the two Notepads, what happens to the other\'s memory?', '같이 바뀐다': 'It changes too', '그대로다': 'It stays the same',
  '프로세스마다 메모리가 따로라 서로의 데이터를 볼 수 없습니다.': 'Each process has its own memory, so they cannot see each other\'s data.',
  // Step 2
  '프로세스의 메모리': 'A process\'s memory', '프로세스가 함수 호출': 'The process calls a function', '호출 정보를 스택에 쌓음': 'Call information piles onto the stack', '돌아오면 그 층 해제': 'Returning frees that level',
  '프로세스는 코드, 데이터, 힙, 스택을 가진다': 'A process has code, data, a heap and a stack',
  '프로세스의 메모리는 네 구역으로 나뉩니다. 코드는 실행할 기계어, 데이터는 전역 변수, 힙은 실행 중에 새로 만드는 값(1.4의 리스트 같은 것), 스택은 1.3의 호출 스택입니다. 힙은 아래에서 위로, 스택은 위에서 아래로 자라고 그 사이가 빈 공간입니다. 여기에 CPU 상태(PC, 레지스터)와 연 파일 목록이 더해져 프로세스가 됩니다.':
    'A process\'s memory is split into four areas. Code is the machine code to run, data the global variables, the heap values made while running (like the lists of 1.4), and the stack the call stack of 1.3. The heap grows upward from below and the stack downward from above, with free space between. Add the CPU state (PC, registers) and the list of open files, and you have a process.',
  '"함수 호출"을 누르면 스택이 위에서 한 칸씩 내려오고, "새 값 만들기"를 누르면 힙이 아래에서 올라옵니다. 둘이 만나면 메모리가 부족한 것입니다(1.3의 스택 넘침).':
    'Press "Call a function" and the stack comes down one cell from the top; press "Make a new value" and the heap rises from below. If they meet, memory has run out (the stack overflow of 1.3).',
  'RAM 위에 프로세스 하나의 메모리 탑이 있습니다. 아래부터 코드, 데이터, 힙이 쌓이고, 맨 위에서 스택이 내려옵니다.': 'On RAM stands one process\'s memory tower. Code, data and heap pile up from the bottom, and the stack comes down from the top.',
  '"함수 호출"을 두 번 눌러 스택을 키워 보세요.': 'Press "Call a function" twice to grow the stack.', '함수를 부를 때마다 스택에 층이 하나씩 쌓입니다.': 'Each function call piles one level onto the stack.',
  '"새 값 만들기"로 힙을 키워 보세요.': 'Grow the heap with "Make a new value".', '실행 중에 만든 값은 힙에 들어갑니다.': 'Values made while running go into the heap.',
  '함수 안의 지역 변수는 어느 구역에 있을까요?': 'Which area holds a function\'s local variables?',
  '함수를 부를 때 생긴 층(프레임)에 지역 변수가 들고, 함수가 끝나면 함께 사라집니다.': 'Local variables live in the level (frame) made when the function is called, and vanish with it when the function ends.',
  // Step 3
  '스레드 둘이 같은 변수 사용': 'Two threads use the same variable', '데이터·힙은 공유': 'Data and heap are shared', '각자 PC와 스택으로 실행': 'Each runs with its own PC and stack',
  '스레드는 한 프로세스 안에서 함께 일한다': 'Threads work together inside one process',
  '프로세스 하나 안에서 여러 일을 동시에 하고 싶을 때 스레드를 씁니다. 스레드마다 자기 PC와 스택을 따로 가지지만, 코드, 데이터, 힙은 같은 프로세스 것을 함께 씁니다. 그래서 스레드끼리는 값을 주고받기 쉽고, 프로세스를 새로 만드는 것보다 가볍습니다.':
    'Threads are used to do several things at once inside one process. Each thread has its own PC and stack, but they share the process\'s code, data and heap. So threads can pass values easily, and they are lighter than making a new process.',
  '"스레드 추가"를 누르면 탑 옆에 일꾼이 하나씩 서고, 각자 작은 스택과 PC를 가집니다. 모든 스레드에서 탑의 데이터·힙으로 선이 이어집니다. 함께 쓰는 곳입니다.':
    'Press "Add a thread" and a worker stands beside the tower each time, with its own small stack and PC. Lines run from every thread to the tower\'s data and heap: the parts they share.',
  'RAM 위에 프로세스 탑이 있고, 옆에 스레드가 서 있습니다. 스레드마다 작은 스택 기둥과 PC 이름표가 있고, 탑의 데이터와 힙으로 선이 이어집니다.': 'A process tower stands on RAM with threads beside it. Each thread has a small stack pillar and a PC tag, and lines run to the tower\'s data and heap.',
  '"스레드 추가"로 스레드를 셋으로 만들어 보세요.': 'Make three threads with "Add a thread".', '스레드 셋이 같은 탑을 함께 씁니다.': 'Three threads share the same tower.',
  '스레드끼리 함께 쓰지 않고 각자 따로 가지는 것은?': 'What does each thread keep for itself rather than share?', '스택과 PC': 'Stack and PC',
  '스레드마다 지금 실행하는 위치(PC)와 함수 호출 기록(스택)이 다르기 때문입니다.': 'Because each thread is running at a different place (PC) with a different record of function calls (stack).',
  // Step 4
  '격리와 공유': 'Isolation and sharing', 'A와 B가 각각 메모리 소유': 'A and B each own memory', '프로세스 간 주소 공간 분리': 'Separate address spaces between processes', 'A의 쓰기가 B의 값을 보존': 'A\'s writes leave B\'s values intact',
  '프로세스는 서로를 지키고, 스레드는 서로를 믿는다': 'Processes protect each other; threads trust each other',
  '프로세스끼리는 메모리가 나뉘어 있어서 한 프로세스가 죽어도 다른 프로세스는 멀쩡합니다. 웹 브라우저가 탭마다 프로세스를 따로 쓰는 이유입니다. 반대로 스레드는 메모리를 함께 쓰므로, 한 스레드가 공유 데이터를 망가뜨리면 같은 프로세스의 모든 스레드가 영향을 받습니다. 5.6에서 이 문제를 더 봅니다.':
    'Processes have separate memory, so when one dies the others are fine. That is why web browsers use a separate process for each tab. Threads, on the other hand, share memory, so when one thread corrupts shared data, every thread in the same process is affected. 5.6 looks at this problem further.',
  '"B에서 오류 내기"를 누르면 B 탑만 빨갛게 무너지고 A는 그대로입니다. "A의 스레드가 데이터 망가뜨리기"를 누르면 A의 데이터 구역이 빨갛게 되고 A의 스레드가 모두 주황 경고를 받습니다.':
    'Press "Cause an error in B" and only B\'s tower collapses in red while A stays as it is. Press "Have A\'s thread corrupt data" and A\'s data area turns red and all of A\'s threads get an orange warning.',
  'RAM 위에 프로세스 A와 B의 탑이 있고, 각자 스레드 둘을 가집니다.': 'On RAM stand the towers of processes A and B, each with two threads.',
  '"B에서 오류 내기"를 눌러 보세요.': 'Press "Cause an error in B".', 'B만 끝났고 A는 계속 돕니다. 메모리가 나뉘어 있기 때문입니다.': 'Only B ended; A keeps running, because their memory is separate.',
  '"A의 스레드가 데이터 망가뜨리기"를 눌러 보세요.': 'Press "Have A\'s thread corrupt data".', '같은 데이터를 쓰는 A의 스레드가 모두 영향을 받았습니다.': 'Every one of A\'s threads using the same data was affected.',
  '웹 브라우저가 탭마다 프로세스를 따로 쓰는 가장 큰 이유는?': 'What is the main reason a web browser uses a separate process per tab?',
  '한 탭이 죽어도 다른 탭은 살리려고': 'So other tabs survive when one dies', '메모리를 아끼려고': 'To save memory', '탭끼리 값을 쉽게 나누려고': 'To share values between tabs easily',
  '프로세스는 서로 격리되어 있어 한쪽의 오류나 해킹이 다른 쪽으로 번지지 않습니다. 대신 메모리는 더 씁니다.': 'Processes are isolated from each other, so an error or attack in one does not spread to the other. In exchange they use more memory.',
};
