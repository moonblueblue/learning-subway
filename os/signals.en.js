// English for OS 2.6 Signals. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '시그널 · 레슨 2.6': 'Signals · Lesson 2.6',
  '운영체제 2장 프로세스와 CPU · 레슨 2.6': 'Operating systems chapter 2 Processes and the CPU · Lesson 2.6',
  '시그널': 'Signals',
  'Ctrl+C의 SIGINT, kill의 SIGTERM과 처리기, 막을 수 없는 SIGKILL, 자식이 끝날 때의 SIGCHLD를 커널에서 프로세스까지 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time from the kernel to the process, SIGINT from Ctrl+C, SIGTERM from kill and its handler, SIGKILL that cannot be stopped, and SIGCHLD when a child ends.',
  '실행 중인 프로세스에게 "그만" 같은 소식은 어떻게 전할까요? 커널이 시그널을 보내고 프로세스가 처리기나 기본 동작으로 답하는 길을 한 정거장씩 따라가 보세요.':
    'How do you tell a running process something like "stop"? Follow, station by station, how the kernel sends a signal and the process answers with a handler or the default action.',
  '실행 중인 프로세스에게 "그만" 같은 소식은 어떻게 전할까?': 'How do you tell a running process something like "stop"?',
  '프로세스, 커널, 시그널': 'Processes, kernel, signals',
  '커널이 프로세스에 시그널을 보내고 프로세스가 처리기를 실행하거나 기본 동작으로 끝나는 장면': 'The kernel sends a signal to a process, which runs a handler or ends by the default action',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware', '멈춤·끝남': 'Stuck or ended',
  '프로세스': 'Process', '창구': 'Gate', '커널': 'Kernel', '화면': 'Screen',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '웹 서버 PID 300': 'Web server PID 300', '터미널': 'Terminal', '관리자 셸': 'Admin shell', '시스템 콜': 'System call', 'docker': 'docker',
  '부모 PID 200': 'Parent PID 200', '자식 PID 201': 'Child PID 201',
  // Legs in the stage list and the example strip
  '터미널 → 커널': 'Terminal → kernel', '커널 → 웹 서버 PID 300': 'Kernel → web server PID 300', '관리자 셸 → 시스템 콜': 'Admin shell → system call',
  '시스템 콜 → 커널': 'System call → kernel', '웹 서버 PID 300 → 시스템 콜': 'Web server PID 300 → system call', 'docker → 커널': 'docker → kernel',
  '자식 PID 201 → 시스템 콜': 'Child PID 201 → system call', '커널 → 부모 PID 200': 'Kernel → parent PID 200', '부모 PID 200 → 시스템 콜': 'Parent PID 200 → system call',
  '웹 서버 PID 300 · exit(0)': 'Web server PID 300 · exit(0)', '커널 · 201, 코드 0': 'Kernel · 201, code 0', '커널 · SIGINT': 'Kernel · SIGINT', '커널 · SIGKILL': 'Kernel · SIGKILL',
  // Badges and moving labels
  '실행 중': 'Running', '$ ./web-server': '$ ./web-server', '^C': '^C', '기본: 끝남': 'Default: ended',
  '처리기 등록됨': 'Handler set', '$': '$', 'kill 300': 'kill 300', 'kill · SIGTERM': 'kill · SIGTERM', 'SIGTERM 표시': 'SIGTERM marked', '처리기: 요청 마무리': 'Handler: finishing requests',
  '처리기 → 끝남': 'Handler → ended', 'exit 0': 'exit 0',
  'stop web': 'stop web', '300에 SIGTERM': 'SIGTERM to 300', '10초 기다림': 'Waiting 10 s', '처리기에서 멈춤': 'Stuck in the handler', 
  '처리기 없이 끝냄': 'Ended without the handler', '강제 종료 · 137': 'Killed · 137',
  '자기 일 하는 중': 'Doing its own work', '좀비': 'Zombie', '200에 SIGCHLD': 'SIGCHLD to 200', '처리기: waitpid': 'Handler: waitpid', 'waitpid': 'waitpid',
  'SIGCHLD · 코드 0': 'SIGCHLD · code 0', 'kill · TERM': 'kill · TERM', 'kill · KILL': 'kill · KILL', '좀비 없음': 'No zombie', '표에서 201 지움': '201 removed from the table',
  'Ctrl+C': 'Ctrl+C', 'SIGINT': 'SIGINT', 'SIGTERM': 'SIGTERM', 'SIGKILL': 'SIGKILL', 'SIGCHLD': 'SIGCHLD', 'exit(0)': 'exit(0)', 'waitpid()': 'waitpid()', '201, 코드 0': '201, code 0',
  // Step 1
  'Ctrl+C는 커널이 보내는 SIGINT 시그널이다': 'Ctrl+C is a SIGINT signal sent by the kernel',
  '시그널은 커널이 프로세스에 보내는 짧은 알림입니다. 터미널에서 Ctrl+C를 누르면 키가 프로그램으로 가는 대신, 커널의 터미널 드라이버가 그 터미널에서 돌던 프로세스에 SIGINT를 보냅니다. 프로그램이 따로 정해 둔 처리기가 없으면 SIGINT의 기본 동작대로 프로세스가 끝납니다.':
    'A signal is a short notice the kernel sends to a process. When you press Ctrl+C in a terminal, the key does not go to the program; the kernel\'s terminal driver sends SIGINT to the process running in that terminal. If the program has not set its own handler, the process ends by SIGINT\'s default action.',
  'Ctrl+C가 터미널에서 커널로 가고, 커널 이름표에 "SIGINT"가 뜹니다. 커널에서 웹 서버로 SIGINT가 가자 웹 서버 이름표가 "기본: 끝남"이 됩니다.':
    'Ctrl+C goes from the terminal to the kernel, and the kernel\'s label shows "SIGINT". When SIGINT goes from the kernel to the web server, the web server\'s label becomes "Default: ended".',
  '왼쪽 사용자 영역에 웹 서버(PID 300)가, 경계 너머에 커널과 터미널이 있습니다. 웹 서버는 이 터미널에서 실행 중입니다.':
    'The web server (PID 300) is in user space on the left; across the boundary are the kernel and the terminal. The web server is running in this terminal.',
  '커널: 그 터미널의 프로세스에 SIGINT': 'Kernel: SIGINT to that terminal\'s process', '처리기 없음': 'No handler', '기본 동작: 프로세스 끝남': 'Default action: the process ends',
  '요청 처리 중…': 'Handling requests…', '터미널 드라이버가 Ctrl+C를 봄': 'The terminal driver sees Ctrl+C', 'PID 300에 SIGINT를 보냄': 'Send SIGINT to PID 300', '기본 동작: 끝남': 'Default action: ended',
  'Ctrl+C는 프로그램이 읽는 글자가 아닙니다. 커널의 터미널 드라이버가 받아 SIGINT로 바꿉니다.': 'Ctrl+C is not a character the program reads. The kernel\'s terminal driver takes it and turns it into SIGINT.',
  '웹 서버에는 SIGINT 처리기가 없어 기본 동작대로 곧바로 끝납니다.': 'The web server has no SIGINT handler, so it ends at once by the default action.',
  '처리기가 없는 프로세스가 SIGINT를 받으면?': 'What happens when a process with no handler gets SIGINT?',
  '무시하고 계속 돈다': 'It ignores it and keeps running', '기본 동작대로 끝난다': 'It ends by the default action', '처음부터 다시 실행된다': 'It runs again from the start',
  'SIGINT의 기본 동작은 프로세스를 끝내는 것입니다. 처리기를 등록하면 바꿀 수 있습니다.': 'SIGINT\'s default action is to end the process. Setting a handler changes that.',
  // Step 2
  '처리기로 정리': 'Clean up in a handler',
  '처리기를 둔 프로세스는 정리하고 끝낼 수 있다': 'A process with a handler can clean up before it ends',
  'kill 명령은 기본으로 SIGTERM을 보냅니다. 프로그램이 sigaction으로 SIGTERM 처리기를 등록해 두었다면, 커널은 프로세스가 다음에 사용자 모드로 돌아갈 때 하던 일을 멈추고 그 처리기를 먼저 실행하게 합니다. 처리기는 받던 요청을 마무리하고 파일을 저장한 뒤 스스로 exit합니다. 서버를 안전하게 끄는 방법이 이것입니다.':
    'The kill command sends SIGTERM by default. If the program has set a SIGTERM handler with sigaction, the next time the process returns to user mode the kernel makes it stop what it was doing and run that handler first. The handler finishes the requests in progress, saves files, then calls exit itself. This is how a server is shut down safely.',
  '셸의 kill 300이 창구로 가서 SIGTERM이 됩니다. 커널에서 웹 서버로 SIGTERM이 가면 웹 서버 이름표가 "처리기: 요청 마무리"가 되고, 웹 서버가 직접 exit(0)를 부릅니다.':
    'kill 300 from the shell goes to the gate and becomes SIGTERM. When SIGTERM goes from the kernel to the web server, its label becomes "Handler: finishing requests", and the web server calls exit(0) itself.',
  '왼쪽 사용자 영역에 SIGTERM 처리기를 등록한 웹 서버(PID 300)와 관리자 셸이, 경계 너머에 시스템 콜 창구와 커널이 있습니다.':
    'The web server (PID 300), which has set a SIGTERM handler, and an admin shell are in user space on the left; across the boundary are the system-call gate and the kernel.',
  'kill 300 = SIGTERM': 'kill 300 = SIGTERM', '커널이 300에 표시': 'The kernel marks 300', '웹 서버가 처리기 실행: 요청 마무리·저장': 'The web server runs its handler: finish requests, save', '스스로 exit(0)': 'exit(0) on its own',
  'sigaction(SIGTERM, 정리 처리기)': 'sigaction(SIGTERM, cleanup handler)', 'kill(300, SIGTERM)': 'kill(300, SIGTERM)', 'PID 300에 SIGTERM 표시': 'Mark SIGTERM on PID 300', '다음에 사용자 모드로 돌아갈 때 전달': 'Delivered on the next return to user mode',
  '하던 일을 멈추고 처리기 실행': 'Stop what it was doing and run the handler', '받던 요청 마무리 · 파일 저장': 'Finish requests in progress · save files', '정리를 마치고 exit(0)': 'Cleanup done, exit(0)',
  '관리자가 kill 300을 실행합니다. 시그널 이름을 적지 않으면 SIGTERM입니다.': 'The admin runs kill 300. Without a signal name, it is SIGTERM.',
  '커널은 PID 300에 SIGTERM이 왔다고 표시해 둡니다.': 'The kernel marks that SIGTERM has arrived for PID 300.',
  '웹 서버가 사용자 모드로 돌아가는 순간 처리기가 먼저 실행됩니다. 처리기가 받던 요청을 마무리합니다.': 'The moment the web server returns to user mode, the handler runs first. It finishes the requests in progress.',
  '정리를 마친 웹 서버가 스스로 exit(0)를 부릅니다. 데이터를 잃지 않고 끝났습니다.': 'Done cleaning up, the web server calls exit(0) itself. It ended without losing data.',
  'SIGTERM 처리기를 등록한 프로세스는 어떻게 될까요?': 'What happens to a process that has set a SIGTERM handler?',
  '그 자리에서 바로 끝난다': 'It ends on the spot', '처리기에서 정리한 뒤 스스로 끝낼 수 있다': 'It can clean up in the handler and then end itself', '시그널을 받지 못한다': 'It cannot receive the signal',
  '처리기가 있으면 기본 동작(끝남) 대신 처리기가 실행됩니다. 무엇을 할지는 프로그램이 정합니다.': 'With a handler, the handler runs instead of the default action (ending). The program decides what to do.',
  // Step 3
  'SIGKILL은 처리기를 거치지 않고 프로세스를 끝낸다': 'SIGKILL ends a process without going through a handler',
  '처리기가 멈춰 버리면 SIGTERM으로는 프로세스가 끝나지 않습니다. 그래서 docker stop은 SIGTERM을 보낸 뒤 기본 10초를 기다리고, 그래도 살아 있으면 SIGKILL을 보냅니다. SIGKILL은 처리기를 등록할 수도, 무시할 수도, 막을 수도 없습니다. 커널이 프로세스 코드를 한 줄도 실행시키지 않고 바로 끝내므로 정리할 기회가 없고, 셸에는 종료 코드 137(128 + 9)로 보입니다.':
    'If the handler gets stuck, SIGTERM does not end the process. So docker stop sends SIGTERM, waits 10 seconds by default, and sends SIGKILL if the process is still alive. SIGKILL cannot be handled, ignored or blocked. The kernel ends the process without running a single line of its code, so there is no chance to clean up, and the shell shows exit code 137 (128 + 9).',
  'SIGTERM을 받은 웹 서버 이름표가 "처리기에서 멈춤"이 됩니다. 10초 뒤 docker의 SIGKILL이 커널로 가자 커널 이름표가 "처리기 없이 끝냄", 웹 서버 이름표가 "강제 종료 · 137"이 됩니다.':
    'After SIGTERM the web server\'s label becomes "Stuck in the handler". Ten seconds later docker\'s SIGKILL goes to the kernel, the kernel\'s label becomes "Ended without the handler" and the web server\'s becomes "Killed · 137".',
  '왼쪽 사용자 영역에 컨테이너 안의 웹 서버(PID 300)와 docker가, 경계 너머에 시스템 콜 창구와 커널이 있습니다.':
    'The web server (PID 300) inside a container and docker are in user space on the left; across the boundary are the system-call gate and the kernel.',
  'docker stop: SIGTERM': 'docker stop: SIGTERM', '처리기가 멈춰 끝나지 않음': 'The handler is stuck and does not end', '10초 뒤 SIGKILL': 'SIGKILL after 10 s', '커널이 바로 끝냄 · 정리 못 함 · 코드 137 = 128 + 9': 'The kernel ends it at once · no cleanup · code 137 = 128 + 9',
  '$ docker stop web': '$ docker stop web', 'SIGTERM 뒤 10초 기다림': 'Wait 10 s after SIGTERM', 'PID 300에 SIGTERM': 'SIGTERM to PID 300', '처리기 실행': 'Run the handler', '처리기가 끝없이 기다림': 'The handler waits forever',
  '10초가 지나도 살아 있음': 'Still alive after 10 s', 'PID 300에 SIGKILL': 'SIGKILL to PID 300', '처리기 없이 끝남': 'Ended without the handler', '종료 코드 137 = 128 + 9': 'Exit code 137 = 128 + 9',
  'docker stop이 먼저 SIGTERM을 보냅니다.': 'docker stop sends SIGTERM first.',
  '처리기가 돌지만 응답 없는 DB를 끝없이 기다리느라 멈춰 버립니다.': 'The handler runs but gets stuck waiting forever for a database that does not answer.',
  '10초가 지나도 웹 서버가 살아 있어 docker가 SIGKILL을 보냅니다.': 'After 10 seconds the web server is still alive, so docker sends SIGKILL.',
  '커널이 웹 서버를 바로 끝냅니다. 받던 요청은 정리되지 못합니다.': 'The kernel ends the web server at once. The requests in progress are not cleaned up.',
  'SIGKILL을 받으면 웹 서버의 처리기가 실행될까요?': 'Does the web server\'s handler run when SIGKILL arrives?',
  '실행된다': 'Yes, it runs', '실행되지 않고 바로 끝난다': 'No, the process ends at once', '웹 서버가 고를 수 있다': 'The web server can choose',
  'SIGKILL은 처리기를 등록하거나 무시하거나 막을 수 없습니다. 커널이 직접 끝냅니다.': 'SIGKILL cannot be handled, ignored or blocked. The kernel ends the process itself.',
  // Step 4
  '자식이 끝나면 커널이 부모에게 SIGCHLD를 보낸다': 'When a child ends, the kernel sends SIGCHLD to the parent',
  '시그널은 끝내라는 명령만이 아닙니다. 자식 프로세스가 끝나면 커널은 부모에게 SIGCHLD를 보냅니다. 부모는 SIGCHLD 처리기에서 waitpid를 불러 끝난 자식의 종료 코드를 받습니다. 이렇게 하면 부모가 자식을 계속 지켜보지 않아도 2.2에서 본 좀비가 쌓이지 않습니다.':
    'Signals are not only orders to end. When a child process ends, the kernel sends SIGCHLD to the parent. The parent calls waitpid in its SIGCHLD handler and gets the ended child\'s exit code. This way the zombies seen in 2.2 do not pile up, even though the parent does not keep watching its children.',
  '자식의 exit가 창구로 가면 커널에서 부모로 SIGCHLD가 갑니다. 부모 이름표가 "처리기: waitpid"가 되고, 코드 0을 받자 부모 이름표는 "SIGCHLD · 코드 0", 자식 이름표는 "좀비 없음"이 됩니다.':
    'When the child\'s exit reaches the gate, SIGCHLD goes from the kernel to the parent. The parent\'s label becomes "Handler: waitpid", and once it gets code 0 the parent\'s label becomes "SIGCHLD · code 0" and the child\'s becomes "No zombie".',
  '왼쪽 사용자 영역에 부모(PID 200)와 자식(PID 201)이, 경계 너머에 시스템 콜 창구와 커널이 있습니다. 부모는 SIGCHLD 처리기를 등록해 두었습니다.':
    'The parent (PID 200) and child (PID 201) are in user space on the left; across the boundary are the system-call gate and the kernel. The parent has set a SIGCHLD handler.',
  '자식 201 exit(0)': 'Child 201 exit(0)', '커널: 부모에 SIGCHLD': 'Kernel: SIGCHLD to the parent', '부모 처리기에서 waitpid': 'waitpid in the parent\'s handler', '코드 0 받음 · 좀비 남지 않음': 'Got code 0 · no zombie left',
  'sigaction(SIGCHLD, 거두는 처리기)': 'sigaction(SIGCHLD, reaping handler)', '자기 일을 계속함': 'Carries on with its own work', '자식 201이 끝남': 'Child 201 ends',
  'waitpid(-1, …, WNOHANG)': 'waitpid(-1, …, WNOHANG)', '201 코드 0 받음': 'Got 201\'s code 0', '처리기를 마치고 하던 일로 돌아감': 'Handler done, back to its work',
  '자식이 exit(0)으로 끝나 잠시 좀비가 됩니다.': 'The child ends with exit(0) and is a zombie for a moment.',
  '커널이 부모에게 SIGCHLD를 보내 자식이 끝났다고 알립니다.': 'The kernel sends SIGCHLD to tell the parent the child has ended.',
  '부모의 처리기가 waitpid를 불러 끝난 자식을 거둡니다.': 'The parent\'s handler calls waitpid and collects the ended child.',
  '부모가 코드를 받자 커널이 자식의 마지막 한 줄을 지웁니다. 부모는 하던 일로 돌아갑니다.': 'Once the parent has the code, the kernel removes the child\'s last line. The parent goes back to its work.',
  '부모는 자식이 끝난 것을 어떻게 알까요?': 'How does the parent know the child has ended?',
  '계속 물어봐야만 안다': 'Only by asking over and over', '커널이 SIGCHLD로 알려 준다': 'The kernel tells it with SIGCHLD', '알 방법이 없다': 'There is no way to know',
  '자식이 끝나면 커널이 부모에게 SIGCHLD를 보냅니다. 부모는 그때 waitpid를 부르면 됩니다.': 'When a child ends the kernel sends SIGCHLD to the parent. The parent just calls waitpid then.',
};
