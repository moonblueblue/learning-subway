// English for OS 5.3 File descriptors. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '파일 디스크립터 · 레슨 5.3': 'File descriptors · Lesson 5.3',
  '운영체제 5장 장치와 파일 · 레슨 5.3': 'Operating systems chapter 5 Devices and files · Lesson 5.3',
  '파일 디스크립터': 'File descriptors',
  'open이 돌려주는 번호가 가리키는 fd 표와 열린 파일, 1번 칸만 바꾸는 리다이렉션, fork한 부모와 자식이 나눠 쓰는 오프셋, close를 잊어 바닥나는 fd를 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, the fd table and open file behind the number open returns, redirection that changes only slot 1, the offset a forked parent and child share, and fds running out when close is forgotten.',
  '프로그램이 받는 파일 번호 3, 1은 무엇을 가리킬까요? 번호가 fd 표와 열린 파일을 거쳐 파일에 닿는 길을 한 정거장씩 따라가 보세요.':
    'What do the file numbers a program gets, like 3 and 1, point to? Follow, station by station, a number\'s road through the fd table and the open file to the file.',
  '프로그램이 받는 파일 번호 3, 1은 무엇을 가리킬까?': 'What do the file numbers a program gets, like 3 and 1, point to?',
  '프로그램, fd 표, 열린 파일, 파일': 'Program, fd table, open file, file',
  '프로그램의 파일 번호가 커널의 fd 표 칸을 거쳐 열린 파일(오프셋)과 디스크의 파일에 닿는 장면': 'A program\'s file number goes through a slot in the kernel\'s fd table to an open file (with its offset) and the file on disk',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '프로세스': 'Process', '커널': 'Kernel', '파일': 'File',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '프로그램': 'Program', 'fd 표': 'fd table', '열린 파일': 'Open file', 'log.txt': 'log.txt', '셸의 자식 → ls': 'Shell\'s child → ls', 'out.txt': 'out.txt', '부모': 'Parent', '자식': 'Child', '열린 파일들': 'Open files', '파일들': 'Files',
  // Legs in the stage list and the example strip
  '프로그램 → fd 표': 'Program → fd table', 'fd 표 → 열린 파일': 'fd table → open file', '열린 파일 → log.txt': 'Open file → log.txt', 'log.txt → 열린 파일': 'log.txt → open file',
  '셸의 자식 → ls → fd 표': 'Shell\'s child → ls → fd table', '셸의 자식 → ls → 열린 파일': 'Shell\'s child → ls → open file', '열린 파일 → out.txt': 'Open file → out.txt',
  '자식 → 열린 파일': 'Child → open file', '부모 → 열린 파일': 'Parent → open file', 'fd 표 → 프로그램': 'fd table → program',
  'log.txt · +100': 'log.txt · +100', '열린 파일 · 파일 목록': 'Open file · file list', '열린 파일 · 12B': 'Open file · 12 B', 'fd 표 · EMFILE': 'fd table · EMFILE',
  // Badges and moving labels
  '0·1·2 터미널': '0·1·2 terminal', 'open': 'open', '3 → log.txt': '3 → log.txt', '칸 3': 'Slot 3', '오프셋 0': 'Offset 0', 'fd = 3': 'fd = 3', 'read 100B': 'read 100 B', '아이노드 12': 'Inode 12', '+100': '+100', '오프셋 0→100': 'Offset 0→100',
  '1 → 터미널': '1 → terminal', 'open(out.txt)': 'open(out.txt)', '1 터미널 · 3 out.txt': '1 terminal · 3 out.txt', 'dup2(3, 1)': 'dup2(3, 1)', 'dup2: 1→out.txt': 'dup2: 1→out.txt', 'exec ls · write(1)': 'exec ls · write(1)', 'ls: write(1)': 'ls: write(1)', '파일 목록': 'File list', 'out.txt에 씀': 'Written to out.txt',
  'fd 3': 'fd 3', 'fd 3 (복사)': 'fd 3 (copy)', '3번 칸': 'Slot 3', '3: 같은 오프셋': '3: same offset', 'write "부모\\n"': 'write "parent\\n"', 'write "자식\\n"': 'write "child\\n"', '오프셋 0→6': 'Offset 0→6', '오프셋 0→6→12': 'Offset 0→6→12', '12B': '12 B', '부모·자식 이어짐': 'Parent·child in order',
  '한도 1024': 'Limit 1024', 'open ×1021': 'open ×1021', '1024칸 가득': '1024 slots full', '3~1023 열림': '3~1023 open', 'EMFILE': 'EMFILE',
  // Step 1
  'open이 번호를 준다': 'open gives a number',
  '파일 번호는 프로세스마다 있는 표의 칸 번호다': 'A file number is a slot number in a per-process table',
  '프로세스마다 커널 안에 fd 표가 있고, 칸 0·1·2는 처음부터 표준 입력·출력·오류(보통 터미널)를 가리킵니다. open("log.txt")를 부르면 커널은 "열린 파일" 칸을 하나 만들어 읽은 위치(오프셋)를 0으로 두고, fd 표의 가장 작은 빈 칸인 3에 연결합니다. 프로그램이 받는 3은 그 칸 번호입니다. read(3, 100)는 3번 칸을 따라가 파일을 읽고 오프셋을 100으로 옮깁니다.':
    'Each process has an fd table inside the kernel, and slots 0, 1 and 2 point from the start to standard input, output and error (usually the terminal). When open("log.txt") is called, the kernel makes an "open file" entry with the read position (offset) at 0 and links it to the lowest free slot in the fd table, 3. The 3 the program gets is that slot number. read(3, 100) follows slot 3, reads the file and moves the offset to 100.',
  'open이 fd 표로 가 fd 표 이름표가 "3 → log.txt"가 되고, 프로그램 이름표가 "fd = 3"이 됩니다. read 뒤 열린 파일 이름표가 "오프셋 0→100", 파일 이름표가 "아이노드 12"가 됩니다.':
    'open goes to the fd table, whose label becomes "3 → log.txt", and the program\'s becomes "fd = 3". After read, the open file\'s label becomes "Offset 0→100" and the file\'s "Inode 12".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 커널의 fd 표, 열린 파일 칸, 디스크의 log.txt가 있습니다. fd 0·1·2는 이미 터미널을 가리킵니다.': 'The program is in user space on the left; across the boundary are the kernel\'s fd table, an open-file entry and log.txt on disk. fds 0, 1 and 2 already point to the terminal.',
  'open("log.txt")': 'open("log.txt")', '열린 파일 칸(오프셋 0) 만듦': 'Make an open-file entry (offset 0)', 'fd 표의 빈 칸 3에 연결': 'Link to free slot 3 of the fd table', 'read(3, 100): 오프셋 100': 'read(3, 100): offset 100',
  '0 → 터미널': '0 → terminal', '2 → 터미널': '2 → terminal', '가장 작은 빈 칸: 3': 'Lowest free slot: 3', '아이노드 12를 가리킴': 'Points to inode 12', '처음 100바이트를 읽음': 'Read the first 100 bytes',
  'open이 커널에 닿습니다. fd 표에서 가장 작은 빈 칸은 3입니다.': 'open reaches the kernel. The lowest free slot in the fd table is 3.',
  '커널이 열린 파일 칸을 만들어 오프셋을 0에 둡니다.': 'The kernel makes an open-file entry with the offset at 0.',
  'read(3, 100)이 3번 칸을 따라가 파일의 처음 100바이트를 읽습니다.': 'read(3, 100) follows slot 3 and reads the first 100 bytes of the file.',
  '읽은 만큼 오프셋이 100으로 옮겨 갑니다. 다음 read는 100번째 바이트부터 읽습니다.': 'The offset moves to 100 by the amount read. The next read starts at byte 100.',
  '0·1·2가 차 있을 때 open이 돌려주는 번호는?': 'With 0, 1 and 2 in use, what number does open return?',
  '0': '0', '3': '3', '100': '100',
  'open은 fd 표의 가장 작은 빈 칸 번호를 돌려줍니다. 0·1·2는 표준 입출력이 이미 쓰고 있습니다.': 'open returns the lowest free slot number in the fd table. 0, 1 and 2 are already used by standard input and output.',
  // Step 2
  '리다이렉션': 'Redirection',
  '리다이렉션은 1번 칸이 가리키는 곳만 바꾼다': 'Redirection changes only where slot 1 points',
  '셸에서 ls > out.txt를 치면, 셸은 fork한 자식에서 out.txt를 열어 fd 3을 받고 dup2(3, 1)을 부릅니다. dup2는 1번 칸이 3번 칸과 같은 열린 파일을 가리키게 합니다. 그다음 exec한 ls는 평소처럼 1번(표준 출력)에 쓰지만, 1번이 이제 out.txt를 가리키니 결과가 파일로 갑니다. ls 코드는 하나도 바뀌지 않았습니다.':
    'When you type ls > out.txt in the shell, the shell\'s forked child opens out.txt, gets fd 3 and calls dup2(3, 1). dup2 makes slot 1 point to the same open file as slot 3. Then ls, after exec, writes to 1 (standard output) as always, but 1 now points to out.txt, so the output goes to the file. Not a line of ls changed.',
  'dup2가 fd 표로 가 fd 표 이름표가 "dup2: 1→out.txt"가 됩니다. ls의 write(1)이 그대로 내려가 파일 이름표가 "out.txt에 씀"이 되고, 프로그램 이름표가 "ls: write(1)"(코드는 그대로)입니다.':
    'dup2 goes to the fd table, whose label becomes "dup2: 1→out.txt". ls\'s write(1) goes down as always, the file\'s label becomes "Written to out.txt", and the program\'s reads "ls: write(1)" (code unchanged).',
  '왼쪽 사용자 영역에 셸의 자식(곧 ls가 됨)이, 경계 너머에 fd 표, 열린 파일 칸, out.txt가 있습니다.': 'The shell\'s child (soon to be ls) is in user space on the left; across the boundary are the fd table, an open-file entry and out.txt.',
  'ls > out.txt': 'ls > out.txt', 'out.txt를 열어 fd 3': 'Open out.txt as fd 3', 'dup2(3, 1): 1번이 out.txt를 가리킴': 'dup2(3, 1): slot 1 points to out.txt', 'ls의 write(1)이 파일로': 'ls\'s write(1) goes to the file',
  '셸': 'Shell', '$ ls > out.txt': '$ ls > out.txt', '3 → out.txt': '3 → out.txt', '1번 칸이 3번과 같은 곳을 가리킴': 'Slot 1 points where slot 3 does', '3은 닫음': 'Close 3', 'ls가 평소대로 1번에 씀': 'ls writes to 1 as usual', 'ls의 출력이 파일에 저장됨': 'ls\'s output is saved in the file',
  '자식이 out.txt를 열어 fd 3을 받습니다.': 'The child opens out.txt and gets fd 3.',
  'dup2(3, 1)로 1번 칸이 out.txt를 가리키게 하고 3번은 닫습니다.': 'With dup2(3, 1), slot 1 points to out.txt, and slot 3 is closed.',
  'exec한 ls가 평소대로 1번에 씁니다. fd 표는 exec 뒤에도 그대로 남습니다.': 'ls, after exec, writes to 1 as usual. The fd table stays the same after exec.',
  'ls의 출력이 터미널이 아니라 out.txt에 들어갑니다.': 'ls\'s output goes into out.txt, not the terminal.',
  '이제 ls가 표준 출력(1)에 쓰면 어디로 갈까요?': 'Now when ls writes to standard output (1), where does it go?',
  '터미널': 'The terminal', '아무 데도 안 감': 'Nowhere',
  'ls는 늘 1번에 씁니다. 1번 칸이 out.txt를 가리키게 바뀌었으므로 결과가 파일로 갑니다.': 'ls always writes to 1. Slot 1 now points to out.txt, so the output goes to the file.',
  // Step 3
  'fork와 오프셋': 'fork and the offset',
  'fork한 부모와 자식은 같은 열린 파일의 오프셋을 함께 쓴다': 'A forked parent and child share the same open file\'s offset',
  'fork는 fd 표를 복사하지만, 칸이 가리키는 열린 파일 칸은 복사하지 않습니다. 그래서 부모의 3과 자식의 3이 같은 열린 파일, 곧 같은 오프셋을 가리킵니다. 부모가 6바이트를 쓰면 오프셋이 6이 되고, 자식이 이어서 쓰면 6부터 씁니다. 서로 덮어쓰지 않고 이어 붙는 대신, 둘이 같은 파일 위치를 나눠 쓴다는 것을 알아야 합니다. 따로 open하면 열린 파일 칸이 둘이라 오프셋도 따로입니다.':
    'fork copies the fd table but not the open-file entries the slots point to. So the parent\'s 3 and the child\'s 3 point to the same open file, and so the same offset. When the parent writes 6 bytes the offset becomes 6, and the child\'s next write starts at 6. They append rather than overwrite, but you must know that the two share one file position. Opening separately gives two open-file entries and two offsets.',
  '부모와 자식 이름표가 모두 "3: 같은 오프셋"이 됩니다. 두 쓰기가 열린 파일로 가 이름표가 "오프셋 0→6→12"가 되고, 파일 이름표가 "부모·자식 이어짐"이 됩니다.':
    'The parent\'s and child\'s labels both become "3: same offset". The two writes go to the open file, whose label becomes "Offset 0→6→12", and the file\'s becomes "Parent·child in order".',
  '왼쪽 사용자 영역에 부모와 자식이, 경계 너머에 fd 표, 열린 파일 칸, log.txt가 있습니다. 부모가 log.txt를 fd 3으로 연 뒤 fork했습니다.': 'The parent and child are in user space on the left; across the boundary are an open-file entry and log.txt. The parent opened log.txt as fd 3 and then forked.',
  '부모 open → fd 3, 그리고 fork': 'Parent opens → fd 3, then forks', '두 fd 표의 3이 같은 열린 파일': 'The 3 in both fd tables → the same open file', '부모 write 6B: 오프셋 6': 'Parent writes 6 B: offset 6', '자식 write 6B: 6부터 → 12': 'Child writes 6 B: from 6 → 12',
  'fd = open("log.txt")': 'fd = open("log.txt")', 'fork()': 'fork()', '부모 3과 자식 3이 같은 칸': 'Parent\'s 3 and child\'s 3: the same entry', '0부터 6바이트': '6 bytes from 0', '오프셋 6': 'Offset 6', '6부터 6바이트': '6 bytes from 6', '오프셋 12': 'Offset 12', '"부모\\n자식\\n"': '"parent\\nchild\\n"',
  'fork가 fd 표만 복사해 두 3번 칸이 같은 열린 파일을 가리킵니다.': 'fork copies only the fd table, so both slot 3s point to the same open file.',
  '부모가 6바이트를 씁니다. 오프셋이 6이 됩니다.': 'The parent writes 6 bytes. The offset becomes 6.',
  '자식이 이어서 씁니다. 같은 오프셋을 쓰므로 6부터 씁니다.': 'The child writes next. It uses the same offset, so it writes from 6.',
  '파일에는 두 줄이 이어 붙어 있습니다.': 'The file has the two lines one after the other.',
  '자식의 쓰기는 파일의 어디부터 들어갈까요?': 'Where in the file does the child\'s write go?',
  '0부터 (부모 것을 덮어씀)': 'From 0 (overwriting the parent\'s)', '6부터 (이어서)': 'From 6 (after it)', '아무 데나': 'Anywhere',
  '부모와 자식의 3번이 같은 열린 파일 칸을 가리켜 오프셋도 하나입니다. 부모가 옮긴 6에서 이어 씁니다.': 'The parent\'s and child\'s 3 point to the same open-file entry, so there is one offset. The child continues from the 6 the parent moved it to.',
  // Step 4
  '너무 많이 열면': 'Too many open',
  'close를 잊으면 fd 표가 차서 open이 실패한다': 'Forgetting close fills the fd table and open fails',
  'fd 표의 칸 수에는 한도가 있습니다(흔한 기본값 1024, ulimit -n으로 확인). 요청마다 파일이나 소켓을 열고 close를 잊는 프로그램은 칸을 하나씩 잃다가, 한도에 닿으면 open이 EMFILE(Too many open files)로 실패합니다. 서버라면 새 연결을 받지 못합니다. 쓰고 난 fd는 반드시 close하고, 필요하면 한도를 올립니다.':
    'The fd table has a limit on slots (a common default is 1024; check with ulimit -n). A program that opens a file or socket per request and forgets close loses a slot each time, and when it hits the limit, open fails with EMFILE (Too many open files). A server then cannot accept new connections. Always close fds you are done with, and raise the limit if needed.',
  '프로그램의 open이 계속 fd 표로 가 fd 표 이름표가 "1024칸 가득"이 됩니다. 다음 open이 돌아와 프로그램 이름표가 "EMFILE"(주황, open 실패)이 됩니다.':
    'The program\'s opens keep going to the fd table until its label becomes "1024 slots full". The next open comes back and the program\'s label becomes "EMFILE" (orange, open failed).',
  '왼쪽 사용자 영역에 close를 잊은 프로그램이, 경계 너머에 fd 표, 열린 파일 칸들, 파일이 있습니다. fd 한도는 1024입니다.': 'A program that forgets close is in user space on the left; across the boundary are the fd table, open-file entries and files. The fd limit is 1024.',
  '요청마다 open · close 없음': 'open per request · no close', 'fd 표 1024칸 가득': 'fd table: 1024 slots full', 'open → EMFILE (Too many open files)': 'open → EMFILE (Too many open files)',
  'while 요청: f = open(...)': 'while request: f = open(...)', '# close를 잊음': '# close forgotten', '3부터 1023까지 다 참': 'Slots 3 to 1023 all full', '빈 칸 없음': 'No free slot', 'open 실패': 'open failed', 'Too many open files': 'Too many open files',
  'close 없이 open을 되풀이해 3번부터 1023번까지 다 찹니다.': 'Repeated opens without close fill slots 3 through 1023.',
  '다음 open이 왔지만 빈 칸이 없습니다.': 'The next open arrives, but there is no free slot.',
  'open이 EMFILE로 실패합니다. 서버라면 새 연결을 받지 못합니다.': 'open fails with EMFILE. A server could not accept new connections.',
  '빈 칸이 없을 때 open은 어떻게 될까요?': 'What happens to open when there is no free slot?',
  '가장 오래된 fd를 닫고 준다': 'It closes the oldest fd and returns that', 'EMFILE로 실패한다': 'It fails with EMFILE', '한도를 자동으로 늘린다': 'It raises the limit automatically',
  '커널은 대신 닫아 주지 않습니다. 한도에 닿으면 open이 Too many open files로 실패합니다.': 'The kernel does not close anything for you. At the limit, open fails with Too many open files.',
};
