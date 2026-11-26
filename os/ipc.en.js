// English for OS 2.7 Inter-process communication. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '프로세스 간 통신 · 레슨 2.7': 'Inter-process communication · Lesson 2.7',
  '운영체제 2장 프로세스와 CPU · 레슨 2.7': 'Operating systems chapter 2 Processes and the CPU · Lesson 2.7',
  '프로세스 간 통신': 'Inter-process communication',
  '파이프 버퍼로 흐르는 데이터, 가득 찬 파이프에서 기다리는 쓰기, 같은 RAM 프레임을 함께 쓰는 공유 메모리, 양쪽으로 말하는 유닉스 도메인 소켓을 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, data flowing through a pipe buffer, a write that waits on a full pipe, shared memory where two processes use the same RAM frame, and a Unix domain socket that talks both ways.',
  '서로의 메모리를 읽을 수 없는 프로세스끼리 데이터를 어떻게 주고받을까요? 커널이 데이터를 건네주는 길을 한 정거장씩 따라가 보세요.':
    'Processes cannot read each other\'s memory, so how do they exchange data? Follow, station by station, how the kernel hands data across.',
  '서로의 메모리를 읽을 수 없는 프로세스끼리 데이터를 어떻게 주고받을까?': 'Processes cannot read each other\'s memory, so how do they exchange data?',
  '프로세스 둘, 커널': 'Two processes, kernel',
  '두 프로세스가 파이프, 공유 메모리, 유닉스 도메인 소켓으로 커널을 거쳐 데이터를 주고받는 장면': 'Two processes exchanging data through the kernel with a pipe, shared memory and a Unix domain socket',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '프로세스': 'Process', '창구': 'Gate', '커널': 'Kernel', '셸': 'Shell',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '시스템 콜': 'System call', '파이프 버퍼': 'Pipe buffer', '압축기': 'Compressor', '업로더': 'Uploader', '카메라': 'Camera', '분석기': 'Analyser',
  'RAM 공유 영역': 'RAM shared area', 'docker 명령': 'docker command', 'docker 데몬': 'docker daemon',
  // Legs in the stage list and the example strip
  'ls → 시스템 콜': 'ls → system call', '시스템 콜 → 파이프 버퍼': 'System call → pipe buffer', 'grep → 시스템 콜': 'grep → system call', '파이프 버퍼 → grep': 'Pipe buffer → grep',
  '압축기 → 파이프 버퍼': 'Compressor → pipe buffer', '압축기 → 시스템 콜': 'Compressor → system call', '파이프 버퍼 → 업로더': 'Pipe buffer → uploader',
  '카메라 → 커널': 'Camera → kernel', '분석기 → 커널': 'Analyser → kernel', '카메라 → RAM 공유 영역': 'Camera → RAM shared area', 'RAM 공유 영역 → 분석기': 'RAM shared area → analyser',
  'docker 명령 → 커널': 'docker command → kernel', '커널 → docker 데몬': 'Kernel → docker daemon', 'docker 명령 → docker 데몬': 'docker command → docker daemon', 'docker 데몬 → docker 명령': 'docker daemon → docker command',
  '파이프 버퍼 · 3줄': 'Pipe buffer · 3 lines', '압축기 · write 32KiB': 'Compressor · write 32 KiB', '압축기 · write 더': 'Compressor · write more', 'RAM 공유 영역 · 사진 읽음': 'RAM shared area · read photo', 'docker 데몬 · 컨테이너 2개': 'docker daemon · 2 containers',
  // Badges and moving labels
  '출력 준비': 'Output ready', '입력 기다림': 'Waiting for input', '버퍼 0줄': 'Buffer 0 lines', 'write 3줄': 'write 3 lines', 'write': 'write', '버퍼 3줄': 'Buffer 3 lines',
  'read': 'read', 'a.txt b.txt': 'a.txt b.txt', '3줄': '3 lines',
  '압축 중': 'Compressing', '느린 전송 중': 'Sending slowly', '버퍼 0': 'Buffer 0', '64KiB · 가득': '64 KiB · full', 'write 64KiB': 'write 64 KiB', 'write 멈춤': 'write blocked', '자리 없음': 'No room',
  '32KiB · 자리 남': '32 KiB · room left', '32KiB 받음': 'Got 32 KiB', '다시 씀': 'Writing again', '쓰기 이어감': 'Write resumes', '다시 채움': 'Filling again', '업로더가 읽어 자리가 나면 다시 씀': 'When the uploader reads and frees room, it writes again', 'write 더': 'write more', '32KiB': '32 KiB', 'write 32KiB': 'write 32 KiB',
  '사진 준비': 'Photo ready', '사진 기다림': 'Waiting for photo', '카메라 → 공유 영역': 'Camera → shared area', '같은 영역 연결': 'Same area linked', '사진 씀': 'Wrote photo', '사진 6MB': 'Photo 6 MB',
  '읽음 · 복사 0': 'Read · 0 copies', 'mmap': 'mmap', '사진 읽음': 'Read photo',
  '$ docker ps': '$ docker ps', 'listen 중': 'Listening', '연결 1개': '1 connection', 'connect': 'connect', '연결 받음': 'Connection accepted', '요청 ps 받음': 'Got request ps',
  '컨테이너 2개': '2 containers', '답 받음 · 2개': 'Answer · 2', '답 보냄': 'Answer sent', '연결': 'Connection', '요청: ps': 'Request: ps',
  // Step 1
  '파이프': 'Pipes',
  '파이프는 커널 버퍼를 거쳐 한쪽으로 흐른다': 'A pipe flows one way through a kernel buffer',
  '프로세스는 서로의 메모리를 읽을 수 없습니다. 그래서 데이터를 주고받으려면 커널을 거칩니다. 셸에서 ls | grep .txt라고 치면 셸은 파이프 하나를 만들고 ls의 출력을 쓰는 쪽에, grep의 입력을 읽는 쪽에 잇습니다. ls가 write로 쓴 바이트는 커널 안의 파이프 버퍼에 쌓였다가, grep이 read로 꺼내 갑니다. 데이터는 한 방향으로만 흐릅니다.':
    'Processes cannot read each other\'s memory, so exchanging data goes through the kernel. When you type ls | grep .txt in the shell, it makes one pipe and connects ls\'s output to the write end and grep\'s input to the read end. The bytes ls writes with write pile up in the pipe buffer inside the kernel, and grep takes them out with read. Data flows one way only.',
  'ls의 write가 창구를 지나 커널 이름표에 "버퍼 3줄"이 쌓입니다. grep의 read가 버퍼를 꺼내 가면 커널 이름표는 "버퍼 0줄", grep 이름표는 "a.txt b.txt"가 됩니다.':
    'ls\'s write passes the gate and the kernel\'s label shows "Buffer 3 lines". When grep\'s read takes the buffer, the kernel\'s label becomes "Buffer 0 lines" and grep\'s becomes "a.txt b.txt".',
  '왼쪽 사용자 영역에 ls와 grep이, 경계 너머에 시스템 콜 창구와 커널의 파이프 버퍼가 있습니다. ls의 출력이 파이프로 grep의 입력에 이어져 있습니다.':
    'ls and grep are in user space on the left; across the boundary are the system-call gate and the kernel\'s pipe buffer. ls\'s output is connected by the pipe to grep\'s input.',
  'ls | grep .txt': 'ls | grep .txt', 'ls write → 커널 파이프 버퍼 3줄': 'ls write → kernel pipe buffer 3 lines', 'grep read': 'grep read', '버퍼 비움 · grep이 a.txt b.txt 출력': 'Buffer emptied · grep prints a.txt b.txt',
  '$ ls | grep .txt': '$ ls | grep .txt', 'ls의 출력 → 파이프 → grep의 입력': 'ls output → pipe → grep input',
  'write(파이프, "a.txt b.c b.txt")': 'write(pipe, "a.txt b.c b.txt")', '커널 버퍼에 3줄이 쌓임': '3 lines pile up in the kernel buffer', 'read(파이프)': 'read(pipe)', '3줄 받음': 'Got 3 lines', '.txt만 남김: a.txt b.txt': 'Keep only .txt: a.txt b.txt',
  'ls가 결과 세 줄을 파이프에 씁니다.': 'ls writes its three result lines into the pipe.',
  '쓴 바이트는 커널 안의 파이프 버퍼에 쌓입니다. 아직 grep은 읽지 않았습니다.': 'The written bytes pile up in the pipe buffer inside the kernel. grep has not read them yet.',
  'grep이 파이프에서 읽기를 부탁합니다.': 'grep asks to read from the pipe.',
  '커널이 버퍼의 세 줄을 grep에 넘기고 버퍼를 비웁니다. grep은 .txt로 끝나는 줄만 출력합니다.': 'The kernel hands the three lines to grep and empties the buffer. grep prints only the lines ending in .txt.',
  'ls가 쓴 데이터는 지금 어디에 있을까요?': 'Where is the data ls wrote right now?',
  'grep의 메모리': 'In grep\'s memory', '커널의 파이프 버퍼': 'In the kernel\'s pipe buffer', '디스크의 파일': 'In a file on disk',
  '두 프로세스는 서로의 메모리를 읽을 수 없습니다. 쓴 데이터는 커널이 가진 버퍼에서 읽힐 때를 기다립니다.': 'The two processes cannot read each other\'s memory. The written data waits in a buffer the kernel holds until it is read.',
  // Step 2
  '가득 찬 파이프': 'A full pipe',
  '버퍼가 가득 차면 쓰는 쪽이 기다린다': 'When the buffer is full, the writer waits',
  '파이프 버퍼에는 한계가 있습니다. 리눅스에서는 기본 64KiB입니다. 읽는 쪽이 느려 버퍼가 가득 차면, 쓰는 쪽의 write는 자리가 날 때까지 멈춰 기다립니다. 읽는 쪽이 꺼내 가 자리가 나면 쓰기가 이어집니다. 그래서 빠른 프로그램과 느린 프로그램을 파이프로 이어도 데이터가 넘치거나 사라지지 않고, 빠른 쪽이 느린 쪽에 속도를 맞춥니다.':
    'A pipe buffer has a limit: 64 KiB by default on Linux. If the reader is slow and the buffer fills, the writer\'s write stops and waits until there is room. When the reader takes data out and frees room, the write carries on. So when a fast program is piped to a slow one, no data overflows or is lost; the fast one keeps pace with the slow one.',
  '압축기가 64KiB를 쓰자 커널 이름표가 "64KiB · 가득"이 되고, 다음 write에서 압축기 이름표가 "write 멈춤"이 됩니다. 업로더가 32KiB를 읽어 가자 압축기 이름표가 "다시 씀", 커널 이름표가 "다시 채움"이 됩니다.':
    'After the compressor writes 64 KiB the kernel\'s label becomes "64 KiB · full", and on the next write the compressor\'s label becomes "write blocked". When the uploader reads 32 KiB, the compressor\'s label becomes "Writing again" and the kernel\'s becomes "Filling again".',
  '왼쪽 사용자 영역에 빠른 압축기와 느린 업로더가, 경계 너머에 시스템 콜 창구와 커널의 파이프 버퍼가 있습니다.': 'A fast compressor and a slow uploader are in user space on the left; across the boundary are the system-call gate and the kernel\'s pipe buffer.',
  'gzip -c 큰파일 | 업로드': 'gzip -c bigfile | upload', '버퍼 64KiB 가득': 'Buffer 64 KiB full', '압축기 write 멈춤': 'Compressor write blocked', '업로더가 32KiB 읽음': 'Uploader reads 32 KiB', 
  '$ gzip -c 큰파일 | ./upload': '$ gzip -c bigfile | ./upload', '압축은 빠르고 업로드는 느림': 'Compressing is fast, uploading slow',
  '버퍼가 64KiB로 가득 참': 'The buffer is full at 64 KiB', 'write가 돌아오지 않음': 'write does not return', '자리가 날 때까지 잠듦': 'Sleeps until there is room', 'read로 32KiB 꺼냄': 'Takes out 32 KiB with read', '압축기가 깨어나 다시 씀': 'The compressor wakes and writes again',
  '압축기가 빠르게 써서 버퍼 64KiB가 가득 찹니다.': 'The compressor writes fast and fills the 64 KiB buffer.',
  '압축기가 더 쓰려 하지만 자리가 없어 write가 멈춥니다. 압축기는 잠들어 기다립니다.': 'The compressor tries to write more, but there is no room, so write stops. The compressor sleeps and waits.',
  '업로더가 32KiB를 읽어 가 버퍼에 자리가 생깁니다.': 'The uploader reads 32 KiB and frees room in the buffer.',
  '자리가 나자 커널이 압축기를 깨워 쓰기를 이어 갑니다. 데이터는 하나도 사라지지 않았습니다.': 'With room free, the kernel wakes the compressor and the write continues. No data was lost.',
  '버퍼가 가득 찬 파이프에 더 쓰면 어떻게 될까요?': 'What happens when you write more to a full pipe?',
  '넘친 데이터가 버려진다': 'The overflow is thrown away', '자리가 날 때까지 write가 멈춘다': 'write stops until there is room', '버퍼가 저절로 커진다': 'The buffer grows by itself',
  '파이프는 데이터를 버리지 않습니다. 쓰는 쪽을 재워 읽는 쪽 속도에 맞춥니다.': 'A pipe never throws data away. It puts the writer to sleep to match the reader\'s pace.',
  // Step 3
  '공유 메모리': 'Shared memory',
  '공유 메모리는 같은 프레임을 두 프로세스에 붙인다': 'Shared memory attaches the same frame to two processes',
  '파이프는 쓸 때 한 번, 읽을 때 한 번 커널이 데이터를 복사합니다. 큰 데이터를 자주 주고받으면 이 복사가 부담입니다. 공유 메모리는 커널이 RAM의 같은 프레임을 두 프로세스의 페이지 표에 함께 연결해 줍니다. 그다음부터는 커널을 거치지 않고, 한쪽이 쓴 값을 다른 쪽이 바로 읽습니다. 대신 동시에 고치지 않도록 4장의 락 같은 동기화를 직접 해야 합니다.':
    'With a pipe the kernel copies the data once on write and once on read. Exchanging large data often makes this copying a burden. With shared memory the kernel links the same RAM frame into both processes\' page tables. From then on, without going through the kernel, what one side writes the other reads at once. In return, the programs must synchronise themselves, with locks as in chapter 4, so they do not change the data at the same time.',
  '두 프로세스의 mmap 요청에 커널 이름표가 "같은 영역 연결"이 됩니다. 카메라가 쓰자 공유 영역 이름표가 "사진 6MB"가 되고, 분석기 이름표가 커널을 거치지 않고 "읽음 · 복사 0"이 됩니다.':
    'After both processes\' mmap requests the kernel\'s label becomes "Same area linked". When the camera writes, the shared area\'s label becomes "Photo 6 MB", and without going through the kernel the analyser\'s label becomes "Read · 0 copies".',
  '왼쪽 사용자 영역에 카메라 프로세스와 분석기 프로세스가, 경계 너머에 커널과 RAM 공유 영역이 있습니다.': 'A camera process and an analyser process are in user space on the left; across the boundary are the kernel and the RAM shared area.',
  'shm_open + mmap': 'shm_open + mmap', '커널이 두 페이지 표에 같은 프레임들을 연결': 'The kernel links the same frames into both page tables', '카메라가 쓰고 분석기가 바로 읽음': 'The camera writes and the analyser reads at once', '커널 복사 없음 · 동기화는 직접': 'No kernel copy · sync is up to you',
  'shm_open("/frames")': 'shm_open("/frames")', '두 프로세스가 같은 이름을 엶': 'Both processes open the same name',
  '카메라의 페이지 표 → 공유 영역': 'Camera\'s page table → shared area', '분석기의 페이지 표 → 공유 영역': 'Analyser\'s page table → shared area', '같은 프레임을 둘이 봄': 'Both see the same frame',
  '카메라가 사진 6MB를 씀': 'The camera writes a 6 MB photo', '시스템 콜 없음': 'No system call', '자기 주소에서 사진을 읽음': 'Reads the photo at its own address', '복사 0번': '0 copies',
  '카메라가 공유 메모리를 자기 주소 공간에 붙여 달라고 합니다.': 'The camera asks to attach the shared memory to its address space.',
  '분석기도 같은 이름으로 붙여 달라고 하자, 커널은 같은 공유 영역을 연결합니다.': 'When the analyser asks for the same name, the kernel links the same shared area.',
  '카메라가 자기 주소에 사진을 쓰면 그대로 공유 영역에 들어갑니다. 커널을 거치지 않습니다.': 'When the camera writes the photo at its own address, it lands straight in the shared area. The kernel is not involved.',
  '분석기가 자기 주소에서 같은 사진을 읽습니다. 커널 복사가 없어 빠르지만, 다 쓰기 전에 읽지 않도록 맞추는 일은 두 프로그램 몫입니다.': 'The analyser reads the same photo at its own address. With no kernel copy it is fast, but making sure it does not read before writing is done is up to the two programs.',
  '이제 카메라가 쓴 사진을 분석기가 읽으려면?': 'Now, how does the analyser read the photo the camera wrote?',
  '커널이 매번 복사해 준다': 'The kernel copies it each time', '같은 프레임을 바로 읽는다': 'It reads the same frame directly', '파일로 저장해야 한다': 'It must be saved to a file',
  '두 페이지 표가 같은 프레임을 가리키므로, 한쪽이 쓴 값이 다른 쪽 주소에도 그대로 보입니다.': 'Both page tables point to the same frame, so what one side writes shows up at the other\'s address as is.',
  // Step 4
  '유닉스 소켓': 'Unix sockets',
  '유닉스 도메인 소켓은 파일 이름으로 찾아 양쪽으로 말한다': 'A Unix domain socket is found by a file name and talks both ways',
  '파이프는 한쪽으로만 흐르고, 보통 부모와 자식처럼 관계가 있는 프로세스끼리 씁니다. 유닉스 도메인 소켓은 파일 시스템의 이름(예: /run/docker.sock)으로 서버를 찾아 연결하고, 연결 하나로 양쪽이 주고받습니다. 네트워크 소켓과 같은 방식으로 쓰지만 같은 컴퓨터 안에서만 오가며, 데이터는 커널 안에서 바로 건너갑니다. docker 명령이 docker 데몬과 이야기하는 길이 이것입니다.':
    'A pipe flows one way and is usually used between related processes such as a parent and child. A Unix domain socket finds the server by a name in the file system (for example /run/docker.sock), connects, and both sides exchange data over that one connection. It is used like a network socket but stays within one computer, and the data crosses straight inside the kernel. This is how the docker command talks to the docker daemon.',
  'docker 명령의 connect가 커널을 거쳐 데몬 이름표에 "연결 받음"을 띄웁니다. 요청 "ps"가 데몬으로 가고, 같은 연결로 답이 돌아와 docker 명령 이름표가 "답 받음 · 2개"가 됩니다.':
    'The docker command\'s connect goes through the kernel and the daemon\'s label shows "Connection accepted". The request "ps" goes to the daemon, and the answer comes back over the same connection, so the docker command\'s label becomes "Answer · 2".',
  '왼쪽 사용자 영역에 docker 명령과 docker 데몬이, 경계 너머에 시스템 콜 창구와 커널이 있습니다. 데몬은 /run/docker.sock에서 연결을 기다립니다.':
    'The docker command and the docker daemon are in user space on the left; across the boundary are the system-call gate and the kernel. The daemon waits for connections on /run/docker.sock.',
  'connect("/run/docker.sock")': 'connect("/run/docker.sock")', '요청 ps': 'Request ps', '같은 연결로 답: 컨테이너 2개': 'Answer on the same connection: 2 containers', '양방향 · 같은 컴퓨터 안': 'Both ways · within one computer',
  'listen("/run/docker.sock")': 'listen("/run/docker.sock")', '연결을 기다림': 'Waits for connections',
  '/run/docker.sock을 찾음': 'Find /run/docker.sock', '데몬과 연결 하나를 만듦': 'Make one connection to the daemon', 'accept: 새 연결 받음': 'accept: new connection', 'GET /containers/json': 'GET /containers/json',
  '같은 연결로 답을 받음': 'Get the answer on the same connection', 'web, db': 'web, db',
  'docker 명령이 소켓 파일 이름으로 데몬에 연결합니다.': 'The docker command connects to the daemon by the socket\'s file name.',
  '데몬이 연결을 받아들입니다. 이제 둘 사이에 양쪽으로 쓸 수 있는 통로가 생겼습니다.': 'The daemon accepts the connection. Now there is a channel between them that both can write to.',
  'docker 명령이 컨테이너 목록을 달라는 요청을 씁니다.': 'The docker command writes a request for the list of containers.',
  '데몬이 같은 연결로 답을 보냅니다. docker 명령이 컨테이너 두 개를 출력합니다.': 'The daemon sends the answer on the same connection. The docker command prints two containers.',
  '이 연결로 데몬이 답을 보낼 수 있을까요?': 'Can the daemon send an answer over this connection?',
  '못 보낸다, 한쪽으로만 흐른다': 'No, it flows one way only', '같은 연결로 보낼 수 있다': 'Yes, over the same connection', '파이프를 하나 더 만들어야 한다': 'Another pipe must be made',
  '소켓 연결은 양방향입니다. 파이프처럼 방향마다 따로 만들 필요가 없습니다.': 'A socket connection goes both ways. Unlike pipes, there is no need for one per direction.',
};
