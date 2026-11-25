// English for 8A.2 The operating system kernel. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '운영체제 커널 · 레슨 8A.2': 'The operating system kernel · Lesson 8A.2',
  '전원을 켠 뒤 펌웨어가 장치를 검사하고, 부트로더가 커널을 RAM에 올리고, 커널이 메모리·인터럽트·장치·타이머를 차리고, 첫 사용자 프로세스가 서비스와 로그인 화면을 띄우기까지를 따라가 보세요.':
    'Follow the power coming on: the firmware checks the devices, the bootloader loads the kernel into RAM, the kernel sets up memory, interrupts, devices and the timer, and the first user process starts services and the login screen.',
  '전원을 켜면 운영체제는 어떻게 일을 시작할까요? 비어 있는 RAM에서 로그인 화면까지, 컴퓨터가 깨어나는 순서를 한 정거장씩 따라가 보세요.':
    'When the power comes on, how does the operating system get to work? Follow the computer waking up, station by station, from empty RAM to the login screen.',
  '펌웨어, 부트로더, 커널, 첫 프로세스가 차례로 실행되는 장면': 'The firmware, bootloader, kernel and first process running in turn',
  '컴퓨터가 깨어나는 순서': 'How a computer wakes up', '펌웨어·부트로더·타이머': 'Firmware, bootloader, timer', '파일과 화면': 'Files and screen',
  '"다음 단계"를 누르면 부팅이 오른쪽으로 움직입니다.': 'Press "Next step" and the code moves to the right.',
  '"다음 단계"를 눌러 부팅을 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the boot along one station at a time. Prediction questions come up along the way.',
  // Stations
  '전원 버튼': 'Power', '펌웨어 (ROM)': 'Firmware', '부트로더': 'Bootloader', '커널': 'Kernel', '장치 (키보드·SSD)': 'Devices', '타이머': 'Timer',
  '서비스들': 'Services', '로그인 화면': 'Login screen',
  '전원 버튼 → 펌웨어 (ROM)': 'Power → Firmware', '펌웨어 (ROM) → 펌웨어 (ROM)': 'Firmware → Firmware', '펌웨어 (ROM) → SSD': 'Firmware → SSD',
  'SSD → 부트로더': 'SSD → Bootloader', '부트로더 → SSD': 'Bootloader → SSD', 'SSD → RAM': 'SSD → RAM', 'RAM → 커널': 'RAM → Kernel',
  '커널 → RAM': 'Kernel → RAM', '커널 → 장치 (키보드·SSD)': 'Kernel → Devices', '커널 → 타이머': 'Kernel → Timer',
  '커널 → PID 1 (systemd)': 'Kernel → PID 1 (systemd)', 'PID 1 (systemd) → 서비스들': 'PID 1 (systemd) → Services', '서비스들 → 로그인 화면': 'Services → Login screen', '로그인 화면 → 커널': 'Login screen → Kernel',
  'SSD · 부트로더': 'SSD · bootloader', '커널 · 켜기': 'Kernel · switch on', '커널 · PID 1': 'Kernel · PID 1',
  // Labels and holds
  '전원': 'Power', '검사': 'Check', '부트로더 찾기': 'Find bootloader', '커널 파일 읽기': 'Read kernel file', '점프': 'Jump', '페이지 표': 'Page table', '드라이버': 'Drivers', '켜기': 'Switch on',
  '띄우기': 'Start', '로그인': 'Log in', '시스템 콜': 'System call',
  '실행 중': 'Running', '검사 통과': 'Passed', '부트로더 찾음': 'Found', '커널 파일': 'Kernel file', '커널 12MB': 'Kernel 12MB',
  '실행 시작': 'Started', '준비 시작': 'Setting up', '드라이버 준비': 'Drivers ready', '10ms마다': 'Every 10ms', '준비 완료': 'Ready', '서비스 12개': '12 services', '부를 때만': 'Only when called',
  // Work panel
  '전원을 켜기 직전': 'Just before power on', 'RAM: 비어 있음 · 운영체제: SSD 안에': 'RAM: empty · operating system: on the SSD',
  'CPU가 깨어남': 'The CPU wakes up', 'PC = 정해진 시작 주소 → 펌웨어 칩의 첫 명령': 'PC = fixed start address → first instruction on the firmware chip',
  '장치 검사': 'Device check', 'RAM, 키보드, SSD가 응답하는지 확인': 'Check that RAM, keyboard and SSD respond', '부팅 순서: SSD → USB': 'Boot order: SSD → USB',
  '부팅 디스크': 'Boot disk', 'SSD의 부팅 구역에서 부트로더 파일을 찾음': 'Finds the bootloader file in the SSD\'s boot area',
  '부트로더로 넘김': 'Handed to the bootloader', '부트로더를 RAM에 올리고 그 첫 명령으로 점프': 'Loads the bootloader into RAM and jumps to its first instruction',
  '부트로더 실행 중': 'Bootloader running', '커널 파일: /boot/vmlinuz (약 12MB)': 'Kernel file: /boot/vmlinuz (about 12MB)',
  '커널 찾기': 'Finding the kernel', '/boot/vmlinuz 읽기': 'Read /boot/vmlinuz',
  'RAM에 올리기': 'Loading into RAM', '커널을 RAM에 복사': 'Copy the kernel into RAM', '시작 설정과 RAM 크기 정보도 함께 둠': 'Start settings and the RAM size go with it',
  '커널로 넘김': 'Handed to the kernel', 'PC = 커널의 첫 명령': 'PC = the kernel\'s first instruction', '부트로더의 일은 끝': 'The bootloader\'s job is done',
  '커널 시작': 'Kernel starts', '아직 프로세스 없음 · 인터럽트 꺼짐': 'No processes yet · interrupts off',
  '메모리 차리기': 'Setting up memory', '커널 영역과 사용자 영역 나누기': 'Split kernel space and user space', '페이지 표 만들기 (5.4)': 'Build page tables (5.4)',
  '장치 깨우기': 'Waking devices', '인터럽트 표: 키보드 → 키보드 처리 코드, 디스크 → 디스크 처리 코드': 'Interrupt table: keyboard → keyboard handler, disk → disk handler',
  '드라이버 시작 · 파일 시스템 붙이기 (5.5)': 'Start drivers · mount the file system (5.5)',
  '타이머 켜기': 'Switching on the timer', '10ms마다 타이머 인터럽트': 'A timer interrupt every 10ms', '→ 스케줄러가 CPU를 다른 프로세스에 넘길 기회 (5.2)': '→ a chance for the scheduler to give the CPU to another process (5.2)',
  '판이 차려짐': 'The stage is set', '메모리, 인터럽트, 장치, 타이머 준비 완료': 'Memory, interrupts, devices and timer ready',
  '첫 프로세스': 'First process', '/sbin/init 실행 → PID 1': 'Run /sbin/init → PID 1', '사용자 영역에서 실행 (커널 권한 없음)': 'Runs in user space (no kernel rights)',
  '서비스 띄우기': 'Starting services', '네트워크, 시간 맞추기, 로그 기록 서비스': 'Network, time sync and logging services', '각각 PID 1의 자식 프로세스': 'Each a child process of PID 1',
  '화면 서비스가 로그인 화면을 그림': 'The display service draws the login screen', '부팅 끝 · 약 8초': 'Boot done · about 8 seconds',
  '이제 커널은': 'From now on, the kernel', '프로그램이 파일을 열 때(시스템 콜)': 'When a program opens a file (system call)', '키보드를 누를 때(인터럽트)': 'When a key is pressed (interrupt)',
  '타이머가 울릴 때만 커널이 일함': 'The kernel works only when the timer goes off',
  // Step 1
  '전원 켜기': 'Power on', 'CPU는 정해진 주소의 펌웨어부터 실행한다': 'The CPU starts with the firmware at a fixed address',
  '전원을 켠 순간 RAM은 비어 있고 운영체제도 아직 디스크에 잠들어 있습니다. CPU는 PC(3.5)를 제조사가 정한 주소로 맞춘 채 깨어나는데, 그 주소에는 전원이 꺼져도 지워지지 않는 칩(ROM)에 담긴 펌웨어(UEFI)가 있습니다. 펌웨어는 메모리와 장치가 살아 있는지 검사하고, 설정된 순서대로 부팅할 디스크를 찾습니다.':
    'The moment the power comes on, RAM is empty and the operating system is still asleep on the disk. The CPU wakes with its PC (3.5) set to an address the maker chose, and at that address is the firmware (UEFI), kept on a chip (ROM) that is not erased when the power goes off. The firmware checks that memory and devices are alive and looks for a disk to boot from, in the set order.',
  '첫 명령은 디스크가 아니라 메인보드의 펌웨어 칩에서 나옵니다. 펌웨어가 장치를 검사하고 SSD의 부트로더를 찾아 RAM에 올린 뒤 그쪽으로 넘어갑니다.':
    'The first instruction comes not from the disk but from the firmware chip on the motherboard. The firmware checks the devices, finds the bootloader on the SSD, loads it into RAM and hands over to it.',
  '왼쪽부터 전원, 펌웨어 칩, SSD, 부트로더가 한 줄로 놓여 있습니다.': 'In a row from the left: power, firmware chip, SSD, bootloader.',
  'CPU가 정해진 주소에서 펌웨어를 실행합니다.': 'The CPU runs the firmware at the fixed address.', '펌웨어가 장치를 검사합니다.': 'The firmware checks the devices.',
  'SSD에서 부트로더를 찾습니다.': 'It looks for the bootloader on the SSD.', '부트로더가 실행되기 시작합니다.': 'The bootloader starts running.',
  '전원을 켰을 때 CPU가 처음 실행하는 코드는 어디에 있을까요?': 'Where is the first code the CPU runs at power on?',
  '메인보드의 펌웨어 칩(ROM)': 'The firmware chip (ROM) on the motherboard', 'SSD의 운영체제': 'The operating system on the SSD',
  'RAM은 전원이 꺼지면 비고, SSD를 읽으려면 먼저 읽는 코드가 필요합니다. 그래서 꺼져도 남는 칩에 첫 코드가 있습니다.':
    'RAM empties when the power goes off, and reading the SSD first needs code that reads it. So the first code sits on a chip that keeps it with the power off.',
  // Step 2
  '커널 올리기': 'Loading the kernel', '부트로더가 커널을 RAM에 올리고 넘겨준다': 'The bootloader loads the kernel into RAM and hands over',
  '부트로더는 작은 프로그램으로, 할 일은 하나입니다. SSD에서 운영체제의 핵심인 커널 파일을 찾아 RAM에 올리고, 커널에게 필요한 정보(RAM 크기, 시작 설정)를 건넨 뒤 커널의 첫 명령으로 점프합니다. 그 뒤로는 커널이 컴퓨터를 넘겨받습니다. 3.8의 로더가 프로그램을 RAM에 올린 것과 비슷하지만, 이번에 올리는 것은 운영체제 자신입니다.':
    'The bootloader is a small program with one job. It finds the kernel file, the core of the operating system, on the SSD, loads it into RAM, passes the kernel what it needs (the RAM size, start settings) and jumps to the kernel\'s first instruction. From then on the kernel takes over the computer. It is like the loader of 3.8 putting a program in RAM, but this time what it loads is the operating system itself.',
  '커널 파일(약 12MB)이 RAM에 올라가고 CPU의 PC가 커널 첫 명령을 가리킵니다. 이 순간부터 컴퓨터의 주인은 커널입니다.':
    'The kernel file (about 12MB) goes into RAM and the CPU\'s PC points at the kernel\'s first instruction. From this moment the kernel runs the computer.',
  '왼쪽부터 부트로더, SSD, RAM, 커널이 놓여 있습니다.': 'From the left: bootloader, SSD, RAM, kernel.',
  '부트로더가 SSD에서 커널 파일을 읽습니다.': 'The bootloader reads the kernel file from the SSD.', '커널이 RAM에 올라갑니다.': 'The kernel goes into RAM.',
  '부트로더가 커널로 점프하고 물러납니다.': 'The bootloader jumps to the kernel and steps aside.',
  '부트로더의 일이 끝나는 시점은?': 'When is the bootloader\'s job done?',
  '커널을 RAM에 올리고 커널 첫 명령으로 점프했을 때': 'When it has loaded the kernel into RAM and jumped to its first instruction', '로그인 화면이 떴을 때': 'When the login screen appears',
  '부트로더는 커널을 올려 주는 다리일 뿐입니다. 그다음은 모두 커널이 합니다.': 'The bootloader is only a bridge that loads the kernel. The kernel does everything after that.',
  // Step 3
  '커널의 준비': 'The kernel sets up', '커널이 메모리, 인터럽트, 장치, 스케줄러를 차린다': 'The kernel sets up memory, interrupts, devices and the scheduler',
  '커널은 프로그램을 돌릴 판을 차립니다. 가상 메모리(5.4)를 위한 페이지 표를 만들고, 키보드·타이머·디스크가 신호를 보내면(인터럽트) 어느 코드를 실행할지 적은 표를 만듭니다. 장치마다 드라이버를 깨우고, 파일 시스템(5.5)을 붙이고, 타이머를 켜 스케줄러(5.2)가 CPU를 나눠 줄 수 있게 합니다.':
    'The kernel sets the stage for running programs. It builds page tables for virtual memory (5.4) and a table of which code to run when the keyboard, timer or disk sends a signal (an interrupt). It wakes a driver for each device, mounts the file system (5.5) and switches on the timer so the scheduler (5.2) can share out the CPU.',
  '이제 커널은 메모리를 나누고, 장치의 신호를 받고, 파일을 읽고, 시간을 나눌 수 있습니다. 5장에서 본 운영체제의 일들이 모두 이때 준비됩니다.':
    'Now the kernel can divide memory, take signals from devices, read files and share out time. Every operating system job from chapter 5 is made ready here.',
  '가운데 커널에서 RAM, 장치, 타이머로 차례로 준비가 이루어집니다.': 'From the kernel in the middle, RAM, the devices and the timer are set up in turn.',
  '가상 메모리를 쓸 수 있게 페이지 표를 만듭니다.': 'It builds page tables so virtual memory can be used.', '장치 드라이버를 깨우고 파일 시스템을 붙입니다.': 'It wakes the device drivers and mounts the file system.',
  '타이머를 켜 시간을 나눌 수 있게 합니다.': 'It switches on the timer so time can be shared out.',
  '키보드를 누르면 CPU가 어떻게 알까요?': 'When a key is pressed, how does the CPU know?',
  '키보드가 인터럽트 신호를 보내고, CPU가 표에 적힌 처리 코드로 뛴다': 'The keyboard sends an interrupt and the CPU jumps to the handler in the table', 'CPU가 1초마다 키보드를 물어본다': 'The CPU asks the keyboard every second',
  '장치가 먼저 알려 주는 인터럽트 덕분에 CPU는 계속 물어보며 기다리지 않아도 됩니다(6.10의 푸시와 비슷).': 'Because the device speaks first with an interrupt, the CPU need not keep asking and waiting (like push in 6.10).',
  // Step 4
  '커널은 첫 사용자 프로세스를 띄우고 뒤로 물러난다': 'The kernel starts the first user process and steps back',
  '판이 차려지면 커널은 첫 사용자 프로세스(PID 1, 보통 init 또는 systemd)를 만들어 사용자 영역(5.3)에서 실행합니다. PID 1은 네트워크, 로그인 화면 같은 서비스 프로세스를 차례로 띄우고, 그 프로세스들이 다시 다른 프로세스를 띄웁니다. 커널은 이제 시스템 콜이나 인터럽트가 올 때만 끼어듭니다.':
    'With the stage set, the kernel makes the first user process (PID 1, usually init or systemd) and runs it in user space (5.3). PID 1 starts service processes such as networking and the login screen one after another, and those start other processes in turn. From now on the kernel steps in only when a system call or an interrupt comes.',
  '전원 → 펌웨어 → 부트로더 → 커널 → PID 1 → 서비스 → 로그인 화면 순서로 컴퓨터가 깨어났습니다. 모든 프로세스는 PID 1의 자손입니다. 커널은 항상 메모리에 있지만, 평소에는 부름을 받을 때만 일합니다.':
    'The computer woke up in the order power → firmware → bootloader → kernel → PID 1 → services → login screen. Every process descends from PID 1. The kernel is always in memory, but normally works only when called.',
  '왼쪽부터 커널, PID 1, 서비스, 로그인 화면이 놓여 있습니다.': 'From the left: kernel, PID 1, services, login screen.',
  '커널이 첫 사용자 프로세스를 띄웁니다.': 'The kernel starts the first user process.', 'PID 1이 서비스들을 차례로 띄웁니다.': 'PID 1 starts the services one after another.',
  '로그인 화면이 뜨면 부팅이 끝납니다.': 'When the login screen appears, booting is done.', '이제 커널은 부를 때만 일합니다.': 'Now the kernel works only when called.',
  'PID 1은 커널 영역과 사용자 영역 중 어디서 실행될까요?': 'Does PID 1 run in kernel space or user space?', '사용자 영역': 'User space', '커널 영역': 'Kernel space',
  'PID 1도 보통 프로그램이라 장치를 직접 만지지 못하고, 필요하면 시스템 콜(5.3)로 커널에 부탁합니다.': 'PID 1 is an ordinary program too, so it cannot touch devices directly; when it needs to, it asks the kernel with a system call (5.3).',
  '부팅이 끝난 뒤 커널이 끼어드는 때가 아닌 것은?': 'After booting, which is not a time the kernel steps in?',
  '프로그램이 자기 변수끼리 더할 때': 'When a program adds its own variables', '프로그램이 파일을 열 때': 'When a program opens a file', '타이머 인터럽트가 울릴 때': 'When a timer interrupt goes off',
  '자기 메모리 안의 계산은 CPU가 바로 합니다. 커널은 시스템 콜과 인터럽트로만 끼어듭니다.': 'The CPU does arithmetic in a program\'s own memory directly. The kernel steps in only through system calls and interrupts.',
};
