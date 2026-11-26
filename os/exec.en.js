// English for OS 1.4 Running a program. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '프로그램 실행 · 레슨 1.4': 'Running a program · Lesson 1.4',
  '운영체제 1장 시작과 실행 · 레슨 1.4': 'Operating systems chapter 1 Starting and running · Lesson 1.4',
  '셸이 fork로 자기 자신을 복사하고, 복사본이 exec로 새 프로그램이 되고, 셸이 wait로 끝나기를 기다리는 길을 시스템 콜 단위로 따라가 보세요.':
    'Follow, one system call at a time, how a shell copies itself with fork, the copy becomes a new program with exec, and the shell waits for it to end with wait.',
  '셸에 명령을 치면 새 프로세스는 어떻게 태어날까요? fork, exec, wait 세 시스템 콜이 셸과 자식 프로세스 사이를 오가는 길을 한 정거장씩 따라가 보세요.':
    'When you type a command in a shell, how is a new process born? Follow, station by station, how three system calls, fork, exec and wait, travel between the shell and a child process.',
  '셸에 명령을 치면 새 프로세스는 어떻게 태어날까?': 'When you type a command in a shell, how is a new process born?',
  '셸, 자식 프로세스, 커널': 'Shell, child process, kernel',
  '셸이 시스템 콜로 커널에 부탁해 자기 복사본을 만들고, 복사본이 SSD의 새 프로그램으로 바뀌는 장면': 'A shell asking the kernel through system calls for a copy of itself, and the copy turning into a new program from the SSD',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware', '막힘': 'Blocked',
  '프로세스': 'Process', '창구': 'Gate', '커널': 'Kernel', '저장장치': 'Storage', '화면': 'Screen',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '셸 (bash)': 'Shell (bash)', '자식 프로세스': 'Child process', '자식 PID 101': 'Child PID 101', 'SSD → 자식 PID 101': 'SSD → Child PID 101', '자식 PID 101 → 시스템 콜': 'Child PID 101 → System call', '커널 → 자식 PID 101': 'Kernel → Child PID 101', '시스템 콜': 'System call', '터미널': 'Terminal', '셸 자리': 'Where the shell was',
  // Legs in the stage list and the example strip
  '셸 (bash) → 시스템 콜': 'Shell (bash) → system call', '시스템 콜 → 커널': 'System call → kernel', '커널 → 자식 프로세스': 'Kernel → child process', '커널 → 셸 (bash)': 'Kernel → shell (bash)',
  '자식 프로세스 → 시스템 콜': 'Child process → system call', '커널 → SSD': 'Kernel → SSD', 'SSD → 자식 프로세스': 'SSD → child process',
  '시스템 콜 → SSD': 'System call → SSD', 'SSD → 셸 (bash)': 'SSD → shell (bash)', '셸 (bash) → 터미널': 'Shell (bash) → terminal',
  '커널 · 101': 'Kernel · 101', 'SSD · ls 코드': 'SSD · ls code', '커널 · 종료 코드 0': 'Kernel · Exit code 0', '셸 (bash) · exit(0)': 'Shell (bash) · exit(0)',
  // Badges and moving labels
  'bash · PID 100': 'bash · PID 100', 'fork': 'fork', '통째로 복사': 'Whole copy', 'fork → 0 받음': 'got 0 from fork', 'fork → 101': 'fork → 101',
  'bash 복사본 · PID 101': 'bash copy · PID 101', 'exec': 'exec', '자식 메모리 비움': 'Child emptied', 'ls 실행 파일': 'ls file', 'ls로 바뀜': 'became ls', 'ls · PID 101 그대로': 'ls · still PID 101',
  'PID 100': 'PID 100', 'ls · PID 101': 'ls · PID 101', 'wait': 'wait', '잠듦 · wait': 'Asleep · wait', 'exit 0': 'exit 0', '끝남 · 코드 0': 'Ended · code 0', '자식 101 정리': 'Child 101 cleaned up', '0 받음 · $': 'Got 0 · $',
  '셸 메모리 비움': 'Shell emptied', 'ls · PID 100 (셸 없음)': 'ls · PID 100 (no shell)', '끝남': 'Ended', 'bash → ls': 'bash → ls', 'bash→ls→끝': 'bash→ls→end', 'PID 100 → 시스템 콜': 'PID 100 → system call', 'SSD → PID 100': 'SSD → PID 100', 'PID 100 → 터미널': 'PID 100 → terminal', 'bash': 'bash', 'PID 100': 'PID 100', '셸 없음 · 창 닫힘': 'No shell · closed',
  'fork()': 'fork()', 'PID 101': 'PID 101', '101': '101', 'exec("/bin/ls")': 'exec("/bin/ls")', '/bin/ls 읽기': 'read /bin/ls', 'ls 코드': 'ls code', 'wait()': 'wait()', 'exit(0)': 'exit(0)', '종료 코드 0': 'exit code 0',
  // Step 1
  '셸에 ls를 치면 셸은 먼저 fork 시스템 콜을 부릅니다. 커널은 셸 프로세스의 메모리, 연 파일 목록, 다음에 실행할 위치까지 그대로 복사해 자식 프로세스를 만들고 새 번호(PID)를 붙입니다. 두 프로세스는 같은 코드의 같은 줄에서 함께 이어 가는데, fork가 돌려준 값만 다릅니다. 부모는 자식의 번호를, 자식은 0을 받아 자기가 누구인지 압니다.':
    'When you type ls, the shell first calls the fork system call. The kernel copies the shell process exactly, its memory, its list of open files and even the next place to run, to make a child process, and gives it a new number (PID). Both processes carry on from the same line of the same code; only the value fork returns differs. The parent gets the child\'s number and the child gets 0, so each knows which one it is.',
  'fork는 지금 프로세스를 그대로 복사한다': 'fork copies the current process exactly',
  '점이 셸에서 시스템 콜 창구와 커널로 들어갔다가, 오른쪽 자식 자리에 bash 복사본(PID 101)을 만들고 셸로 돌아옵니다. 두 이름표에 적힌 fork의 결과(101과 0)를 견줘 보세요.':
    'The dot goes from the shell into the system-call gate and the kernel, makes a bash copy (PID 101) in the child\'s place, and comes back to the shell. Compare the two results of fork written on the labels (101 and 0).',
  '왼쪽 사용자 영역에 셸(PID 100)과 비어 있는 자식 자리가, 경계 너머에 시스템 콜 창구, 커널, SSD가 있습니다.': 'The shell (PID 100) and an empty child place are in user space on the left; across the boundary are the system-call gate, the kernel and the SSD.',
  '셸 PID 100: fork()': 'Shell PID 100: fork()', '커널이 통째로 복사': 'The kernel copies it whole', '자식 PID 101은 fork → 0': 'Child PID 101 gets fork → 0', '부모는 fork → 101': 'Parent gets fork → 101',
  '$ ls': '$ ls', '명령을 받음 → 먼저 fork': 'Command received → fork first',
  'CPU가 커널 모드로 바뀜': 'CPU switches to kernel mode', '셸의 메모리 복사': 'Copy the shell\'s memory', '연 파일 목록 복사': 'Copy the list of open files', '새 번호 PID 101': 'New number PID 101',
  'fork가 돌려준 값: 0': 'Value fork returned: 0', 'fork가 돌려준 값: 101': 'Value fork returned: 101', '자식이 할 일을 기다림': 'Waits for the child\'s work',
  '셸이 fork 시스템 콜을 부릅니다. 새 프로그램을 바로 띄우지 않고, 먼저 자기 자신을 복사해 달라고 부탁합니다.': 'The shell calls the fork system call. Instead of starting the new program at once, it first asks for a copy of itself.',
  '커널은 셸의 메모리와 연 파일 목록, 다음에 실행할 위치까지 복사합니다. 새 프로세스에는 PID 101을 붙입니다.': 'The kernel copies the shell\'s memory, its list of open files and even the next place to run. It gives the new process PID 101.',
  '자식 프로세스가 생겼습니다. 셸과 같은 코드를 같은 위치에서 이어 가지만, fork의 결과로 0을 받습니다.': 'A child process now exists. It carries on the same code from the same place as the shell, but gets 0 as fork\'s result.',
  '부모인 셸은 fork의 결과로 자식의 번호 101을 받습니다. 같은 코드가 이 값을 보고 부모와 자식이 할 일을 나눕니다.': 'The parent shell gets the child\'s number, 101, as fork\'s result. The same code looks at this value to split the work between parent and child.',
  'fork가 끝나면 이 셸과 관련된 프로세스는 몇 개일까요?': 'After fork, how many processes belong to this shell?',
  '1개': '1', '2개': '2', '3개': '3',
  '부모(셸)는 그대로 있고, 똑같은 자식이 하나 더 생깁니다.': 'The parent (shell) stays, and one identical child is added.',
  'fork는 부모와 자식에게 각각 무엇을 돌려줄까요?': 'What does fork return to the parent and to the child?',
  '둘 다 0': 'Both 0', '부모에 자식 번호, 자식에 0': 'The child\'s number to the parent, 0 to the child', '둘 다 자식 번호': 'Both the child\'s number',
  '같은 코드가 두 프로세스에서 돌기 때문에, 돌려받은 값으로 자기가 부모인지 자식인지 구별합니다.': 'Because the same code runs in two processes, each tells from the returned value whether it is the parent or the child.',
  // Step 2
  'exec는 프로세스 안의 프로그램을 갈아 끼운다': 'exec swaps the program inside a process',
  '자식은 fork에서 0을 받았으니 자기가 자식인 줄 압니다. 그래서 exec 시스템 콜로 "/bin/ls를 실행해 달라"고 부탁합니다. 커널은 자식의 메모리를 비우고, SSD에서 ls 실행 파일을 읽어 그 자리에 코드와 데이터를 새로 채운 뒤 ls의 첫 명령부터 실행합니다. 프로세스 번호는 바뀌지 않습니다.':
    'The child got 0 from fork, so it knows it is the child. It asks with the exec system call: "run /bin/ls". The kernel empties the child\'s memory, reads the ls program file from the SSD, fills that space with new code and data, and runs from ls\'s first instruction. The process number does not change.',
  '점이 자식에서 커널을 지나 SSD까지 가서 ls 코드를 들고 자식으로 돌아옵니다. 자식 이름표가 bash 복사본에서 ls로 바뀌어도 PID 101은 그대로입니다.':
    'The dot goes from the child through the kernel to the SSD and comes back to the child carrying ls code. The child\'s label changes from bash copy to ls, but PID 101 stays.',
  '같은 줄입니다. 자식(bash 복사본, PID 101)이 exec를 부르고, 커널이 SSD의 ls 실행 파일로 자식의 메모리를 다시 채웁니다.': 'The same row. The child (bash copy, PID 101) calls exec, and the kernel refills the child\'s memory with the ls program file from the SSD.',
  '자식 101: exec("/bin/ls")': 'Child 101: exec("/bin/ls")', '메모리를 비우고 ls를 읽어 채움': 'Empties memory and fills it with ls',
  'if fork() == 0:': 'if fork() == 0:', 'exec("/bin/ls")': 'exec("/bin/ls")',
  '자식의 메모리를 비움': 'Empty the child\'s memory', 'PID 101은 그대로 둠': 'Keep PID 101', '/bin/ls 실행 파일 읽음': 'Read the /bin/ls program file', 'ls의 첫 명령부터 실행': 'Run from ls\'s first instruction',
  '자식이 exec 시스템 콜로 /bin/ls를 실행해 달라고 부탁합니다.': 'The child asks with the exec system call for /bin/ls to be run.',
  '커널은 자식이 가지고 있던 bash의 코드와 데이터를 비웁니다. 프로세스 번호와 연 파일은 남깁니다.': 'The kernel empties the bash code and data the child had. It keeps the process number and open files.',
  '커널이 SSD에서 ls 실행 파일을 읽어 옵니다.': 'The kernel reads the ls program file from the SSD.',
  '자식의 메모리가 ls의 코드와 데이터로 채워지고, ls의 첫 명령부터 실행됩니다. 이 프로세스는 이제 ls입니다.': 'The child\'s memory is filled with ls\'s code and data, and ls runs from its first instruction. This process is now ls.',
  'exec 뒤에 자식의 PID는 어떻게 될까요?': 'After exec, what happens to the child\'s PID?',
  '새 번호로 바뀐다': 'It changes to a new number', '101 그대로다': 'It stays 101', '셸의 100이 된다': 'It becomes the shell\'s 100',
  'exec는 새 프로세스를 만들지 않습니다. 같은 프로세스 안의 프로그램만 바꿉니다.': 'exec makes no new process. It only changes the program inside the same process.',
  // Step 3
  '부모는 wait로 자식이 끝나기를 기다린다': 'The parent waits with wait for the child to end',
  '자식이 ls를 실행하는 동안 셸은 wait 시스템 콜을 불러 잠듭니다. ls가 목록을 출력하고 exit로 끝나면, 커널은 자식의 메모리를 거두고 종료 코드(0이면 성공)를 부모에게 넘깁니다. 셸은 깨어나 다음 명령을 받을 프롬프트를 띄웁니다. 셸에서 echo $?로 이 종료 코드를 볼 수 있습니다.':
    'While the child runs ls, the shell calls the wait system call and sleeps. When ls prints the list and ends with exit, the kernel takes back the child\'s memory and hands the exit code (0 means success) to the parent. The shell wakes and shows the prompt for the next command. In the shell, echo $? shows this exit code.',
  '셸에서 wait가, 자식에서 exit(0)이 창구로 갑니다. 커널이 자식을 정리한 뒤 종료 코드 0을 셸에 돌려주면 셸 이름표가 다시 "0 받음 · $"가 됩니다.':
    'wait goes from the shell and exit(0) from the child to the gate. After the kernel cleans up the child and returns exit code 0 to the shell, the shell\'s label becomes "Got 0 · $".',
  '셸이 wait로 잠들고, 자식(ls)이 exit(0)으로 끝나면 커널이 자식을 정리하고 종료 코드를 셸에 돌려줍니다.': 'The shell sleeps in wait; when the child (ls) ends with exit(0), the kernel cleans up the child and returns the exit code to the shell.',
  '셸: wait()로 잠듦': 'Shell: sleeps in wait()', 'ls 출력 후 exit(0)': 'ls prints, then exit(0)', '커널이 자식 101 정리': 'The kernel cleans up child 101', '셸이 0을 받고 $ 다시': 'Shell gets 0 and shows $ again',
  '자식 101이 ls 실행 중': 'Child 101 is running ls', '셸은 기다려야 함': 'The shell has to wait',
  '셸은 잠듦': 'The shell sleeps', 'ls가 목록을 출력함': 'ls prints the list', 'exit(0): 성공으로 끝냄': 'exit(0): ends as a success', '자식 101의 메모리 거둠': 'Take back child 101\'s memory', '종료 코드 0을 부모에게': 'Exit code 0 to the parent',
  'wait가 돌려준 값: 자식 101, 코드 0': 'Value wait returned: child 101, code 0', '$ (다음 명령)': '$ (next command)',
  '셸이 wait 시스템 콜을 부르고 잠듭니다. 자식이 끝날 때까지 CPU를 쓰지 않습니다.': 'The shell calls the wait system call and sleeps. It uses no CPU until the child ends.',
  'ls가 파일 목록을 출력하고 exit(0)으로 끝납니다. 0은 성공했다는 뜻입니다.': 'ls prints the file list and ends with exit(0). 0 means it succeeded.',
  '커널은 자식 101의 메모리를 거두고, 종료 코드를 부모에게 넘길 준비를 합니다.': 'The kernel takes back child 101\'s memory and gets the exit code ready to hand to the parent.',
  '셸이 깨어나 자식 101이 0으로 끝났음을 받고, 다음 명령을 받을 프롬프트를 띄웁니다.': 'The shell wakes, learns that child 101 ended with 0, and shows the prompt for the next command.',
  'ls가 끝나면 그 종료 코드는 누가 받을까요?': 'When ls ends, who gets its exit code?',
  '부모인 셸': 'The parent shell', '커널만 알고 버린다': 'Only the kernel knows, then drops it', '아무도 받지 않는다': 'Nobody gets it',
  '커널은 종료 코드를 wait한 부모에게 넘깁니다. 셸에서 echo $?로 볼 수 있습니다.': 'The kernel hands the exit code to the parent that waited. In the shell you can see it with echo $?.',
  // Step 4
  'fork 없이 exec': 'exec without fork',
  '그래서 셸은 먼저 복사하고, 복사본을 바꾼다': 'So the shell copies first, then changes the copy',
  'fork 없이 셸이 직접 exec를 부르면 어떻게 될까요? exec는 부른 프로세스 자신의 프로그램을 갈아 끼우므로, 셸이 ls로 바뀝니다. ls가 끝나면 그 프로세스도 끝나고, 돌아갈 셸이 없어 터미널 창이 닫힙니다. 셸에 exec ls를 쳐 보면 실제로 이렇게 됩니다. 그래서 셸은 늘 fork로 복사본을 만든 뒤 그 복사본에서 exec합니다.':
    'What if the shell calls exec itself, without fork? exec swaps the program of the very process that calls it, so the shell turns into ls. When ls ends, that process ends too, and with no shell to go back to, the terminal window closes. Type exec ls in a shell and this really happens. That is why a shell always makes a copy with fork and runs exec in the copy.',
  '이번에는 셸 자신에서 exec가 나가고, ls 코드가 같은 PID 100 으로 돌아옵니다. PID 100 이름표가 bash→ls→끝으로 바뀌고, 터미널이 주황 오류색으로 닫힙니다.':
    'This time exec leaves from the shell itself, and ls code comes back to the shell\'s place. The shell\'s label turns into ls, and when ls ends the terminal closes in the orange error colour.',
  '왼쪽 사용자 영역에 셸(PID 100)이, 경계 너머에 시스템 콜 창구, 커널, SSD, 오른쪽 끝에 터미널이 있습니다. 셸이 fork 없이 exec를 부릅니다.': 'The shell is in user space on the left; across the boundary are the system-call gate, the kernel and the SSD, with the terminal at the far right. The shell calls exec without fork.',
  '셸 PID 100: exec("/bin/ls")': 'Shell PID 100: exec("/bin/ls")', '셸이 ls로 바뀜': 'The shell turns into ls', 'ls 끝 = 그 프로세스도 끝': 'ls ends = that process ends', '터미널 닫힘': 'Terminal closes',
  '$ exec ls': '$ exec ls', 'fork 없이 바로 exec': 'exec straight away, without fork',
  '부른 프로세스: 셸 자신': 'Calling process: the shell itself', '셸의 메모리를 비움': 'Empty the shell\'s memory', 'SSD에서 /bin/ls 읽음': 'Read /bin/ls from the SSD',
  'ls · PID 100': 'ls · PID 100', 'bash는 이제 없음': 'bash is gone now', 'ls 끝 → PID 100 끝남': 'ls ends → PID 100 ends', '기다리던 셸이 없음 → 창 닫힘': 'No shell waiting → window closes',
  '셸이 fork 없이 자기 자신에서 exec를 부릅니다.': 'The shell calls exec on itself, without fork.',
  '커널이 셸의 메모리를 비우고 SSD에서 ls를 읽어 옵니다.': 'The kernel empties the shell\'s memory and reads ls from the SSD.',
  '셸이 있던 프로세스가 ls가 됐습니다. bash는 이제 메모리에 없습니다.': 'The process that was the shell has become ls. bash is no longer in memory.',
  'ls가 끝나면서 그 프로세스(PID 100)도 끝납니다. 돌아갈 셸이 없어 터미널 창이 닫힙니다.': 'As ls ends, that process (PID 100) ends too. With no shell to go back to, the terminal window closes.',
  '셸이 fork 없이 바로 exec하면 어떻게 될까요?': 'What happens if the shell runs exec straight away, without fork?',
  '셸이 ls로 바뀌어 사라진다': 'The shell turns into ls and disappears', '셸과 ls가 함께 돈다': 'The shell and ls run together', 'ls가 실행되지 않는다': 'ls does not run',
  'exec는 부른 프로세스 자신의 프로그램을 바꿉니다. 복사본이 없으니 바뀌는 것은 셸입니다.': 'exec changes the program of the process that calls it. With no copy, what changes is the shell.',
};
