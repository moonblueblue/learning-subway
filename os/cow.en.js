// English for OS 3.7 Copy-on-write and mmap. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '쓰기 시 복사와 mmap · 레슨 3.7': 'Copy-on-write and mmap · Lesson 3.7',
  '운영체제 3장 메모리 · 레슨 3.7': 'Operating systems chapter 3 Memory · Lesson 3.7',
  '쓰기 시 복사와 mmap': 'Copy-on-write and mmap',
  'fork가 페이지 표만 복사하는 이유, 한쪽이 쓰는 순간 그 페이지만 복사하는 쓰기 시 복사, read 없이 파일을 읽는 mmap, 백 개의 프로세스가 libc 한 벌을 함께 쓰는 모습을 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, why fork copies only page tables, copy-on-write that copies a page only when one side writes, mmap that reads a file without read, and a hundred processes sharing one copy of libc.',
  'fork는 왜 메모리를 통째로 복사하지 않아도 될까요? 같은 프레임을 여러 프로세스와 파일이 함께 쓰다가 갈라지는 길을 한 정거장씩 따라가 보세요.':
    'Why doesn\'t fork have to copy all the memory? Follow, station by station, how processes and files share the same frame and when they split.',
  'fork는 왜 메모리를 통째로 복사하지 않아도 될까?': 'Why doesn\'t fork have to copy all the memory?',
  '프로세스, 커널, RAM': 'Processes, kernel, RAM',
  '여러 프로세스의 페이지 표가 같은 프레임을 가리키다가, 한쪽이 쓰는 순간 커널이 그 페이지만 복사해 갈라 주는 장면': 'Several processes\' page tables point at the same frame, and the moment one writes, the kernel copies just that page to split them',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '프로세스': 'Process', '커널': 'Kernel', '메모리': 'Memory', '저장장치': 'Storage',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '부모 PID 200': 'Parent PID 200', '자식 PID 201': 'Child PID 201', '프로그램': 'Program', '페이지 캐시': 'Page cache', '디스크': 'Disk', '프로세스 1': 'Process 1', '프로세스 2~100': 'Processes 2~100',
  // Legs in the stage list and the example strip
  '부모 PID 200 → 커널': 'Parent PID 200 → kernel', '커널 → 자식 PID 201': 'Kernel → child PID 201', '자식 PID 201 → RAM': 'Child PID 201 → RAM', '자식 PID 201 → 커널': 'Child PID 201 → kernel',
  '커널 → RAM': 'Kernel → RAM', '커널 → 부모 PID 200': 'Kernel → parent PID 200', '프로그램 → 커널': 'Program → kernel', '디스크 → 페이지 캐시': 'Disk → page cache', '페이지 캐시 → 커널': 'Page cache → kernel',
  '커널 → 프로그램': 'Kernel → program', '프로세스 1 → 커널': 'Process 1 → kernel', '프로세스 2~100 → 커널': 'Processes 2~100 → kernel',
  '자식 PID 201 · x 읽기': 'Child PID 201 · read x', '커널 · 그대로': 'Kernel · unchanged', '커널 · 다시 실행': 'Kernel · run again', '커널 · 같은 프레임': 'Kernel · same frame',
  // Badges and moving labels
  'x:프레임5': 'x: frame 5', '프레임5: x=1': 'Frame 5: x=1', 'fork()': 'fork()', '읽기전용 표 복사': 'Read-only table copy', '같은 표': 'Same table', 'x 읽기': 'Read x', '프레임5 공유': 'Frame 5 shared',
  'x = 2': 'x = 2', '폴트: 5→8 복사': 'Fault: copy 5→8', '5 → 8 복사': 'Copy 5 → 8', '프레임5·8 따로': 'Frames 5·8 apart', '칸 → 8': 'Entry → 8', 'x=2→프레임8': 'x=2→frame 8', 'x=2 → 폴트': 'x=2 → fault', '그대로': 'Unchanged', '그대로 프레임5': 'Still frame 5', 'data.bin 원본': 'data.bin original',
  '아직 안 읽음': 'Not read yet', 'p[0] 읽기': 'Read p[0]', '폴트→연결': 'Fault→link', 'data.bin': 'data.bin', '프레임': 'Frame', '다시 실행': 'Run again', 'mmap·read 없음': 'mmap·no read',
  'libc 씀': 'Uses libc', 'mmap libc': 'mmap libc', 'libc:프레임7': 'libc: frame 7', 'mmap libc ×99': 'mmap libc ×99', '100개 공유': '100 share it', '같은 프레임': 'Same frame', '프레임7 1벌': 'Frame 7, one copy',
  // Step 1
  'fork는 표만 복사': 'fork copies tables',
  'fork는 메모리 대신 페이지 표만 복사한다': 'fork copies only the page tables, not the memory',
  '1.4에서 fork가 부모를 그대로 복사한 자식을 만든다고 했습니다. 그런데 부모가 수 GiB를 쓰고 있다면 그 메모리를 다 복사하는 데 오래 걸립니다. 그래서 커널은 메모리가 아니라 페이지 표만 복사합니다. 부모와 자식의 표가 같은 프레임을 가리키고, 커널은 두 표의 칸을 모두 읽기 전용으로 바꿔 둡니다. 읽기만 하는 동안은 둘이 같은 프레임을 함께 씁니다.':
    'In 1.4, fork made a child that was a copy of the parent. But if the parent uses several GiB, copying all that memory takes a long time. So the kernel copies only the page tables, not the memory. The parent\'s and child\'s tables point at the same frames, and the kernel marks the entries in both tables read-only. As long as they only read, the two share the same frames.',
  '부모의 fork가 커널로 가 커널 이름표가 "읽기전용 표 복사"가 됩니다. 부모와 자식 이름표가 모두 "x:프레임5"이고, RAM 이름표가 "프레임5 공유"가 됩니다.':
    'The parent\'s fork goes to the kernel, whose label becomes "Read-only table copy". The parent\'s and child\'s labels both read "x: frame 5", and RAM\'s becomes "Frame 5 shared".',
  '왼쪽 사용자 영역에 부모(PID 200)와 자식(PID 201)이, 경계 너머에 커널과 RAM이 있습니다. 부모의 변수 x가 프레임 5에 있고, 부모가 fork를 부릅니다.':
    'The parent (PID 200) and child (PID 201) are in user space on the left; across the boundary are the kernel and RAM. The parent\'s variable x is in frame 5, and the parent calls fork.',
  '부모 fork': 'Parent forks', '커널이 페이지 표만 복사': 'The kernel copies only the page tables', '두 표 모두 x → 프레임 5 (읽기 전용)': 'Both tables: x → frame 5 (read-only)', '메모리 복사 0': '0 memory copied',
  'x = 1 (프레임 5)': 'x = 1 (frame 5)', '부모의 페이지 표를 복사': 'Copy the parent\'s page table', '두 표의 칸을 읽기 전용으로': 'Make both tables\' entries read-only',
  'x → 프레임 5 (읽기 전용)': 'x → frame 5 (read-only)', '프레임 5를 둘이 봄': 'Both see frame 5',
  '커널이 부모의 페이지 표를 자식에게 복사하고, 두 표의 칸을 읽기 전용으로 바꿉니다.': 'The kernel copies the parent\'s page table to the child and makes the entries in both tables read-only.',
  '자식의 표도 x를 프레임 5로 가리킵니다.': 'The child\'s table also points x at frame 5.',
  '자식이 x를 읽으면 부모와 같은 프레임 5를 읽습니다.': 'When the child reads x, it reads frame 5, the same as the parent.',
  'fork할 때 부모의 메모리 프레임은 복사될까요?': 'Are the parent\'s memory frames copied on fork?',
  '모두 복사된다': 'All are copied', '복사되지 않고 함께 쓴다': 'No, they are shared', '절반만 복사된다': 'Half are copied',
  '커널은 페이지 표만 복사합니다. 두 표가 같은 프레임을 가리키므로 메모리는 한 벌입니다.': 'The kernel copies only the page tables. Both tables point at the same frames, so there is one copy of the memory.',
  // Step 2
  '쓸 때 복사': 'Copy on write',
  '한쪽이 쓰는 순간에만 그 페이지를 복사한다': 'A page is copied only the moment one side writes it',
  '자식이 x에 쓰려고 하면, 칸이 읽기 전용이라 페이지 폴트가 납니다. 커널은 이것이 함께 쓰던 페이지라는 것을 알아보고, 프레임 5를 빈 프레임 8에 복사합니다. 자식의 칸만 프레임 8(쓰기 가능)로 바꾸고 같은 명령을 다시 실행합니다. 부모는 여전히 프레임 5를 봅니다. 이렇게 실제로 쓴 페이지만 복사하는 것을 쓰기 시 복사(copy-on-write)라고 합니다.':
    'When the child tries to write x, the entry is read-only, so a page fault occurs. The kernel sees that this is a shared page and copies frame 5 into free frame 8. It changes only the child\'s entry to frame 8 (writable) and runs the same instruction again. The parent still sees frame 5. Copying only the pages actually written like this is called copy-on-write.',
  '자식의 쓰기가 커널로 가 커널 이름표가 "폴트: 5→8 복사"가 됩니다. 자식 이름표가 "x=2→프레임8"이 되고, 부모 이름표는 "그대로 프레임5"입니다.':
    'The child\'s write goes to the kernel, whose label becomes "Fault: copy 5→8". The child\'s label becomes "x=2→frame 8", and the parent\'s reads "Still frame 5".',
  '1단계와 같은 정거장입니다. 부모와 자식이 x(프레임 5)를 함께 보는 상태에서 자식이 x에 2를 씁니다.': 'The same stations as step 1. With parent and child both seeing x (frame 5), the child writes 2 to x.',
  '자식: x = 2 (읽기 전용 칸에 쓰기)': 'Child: x = 2 (write to a read-only entry)', '페이지 폴트': 'Page fault', '커널이 프레임 5를 8로 복사': 'The kernel copies frame 5 to 8', '자식만 프레임 8 · 부모는 5 그대로': 'Only the child gets frame 8 · the parent keeps 5',
  'x는 프레임 5 (읽기 전용)': 'x is in frame 5 (read-only)', '읽기 전용 칸에 쓰기 → 폴트': 'Write to a read-only entry → fault', '함께 쓰던 페이지': 'A shared page',
  '프레임 5를 프레임 8로 복사': 'Copy frame 5 to frame 8', '자식 칸만 프레임 8 (쓰기 가능)': 'Only the child\'s entry → frame 8 (writable)', '다시 실행: x = 2': 'Run again: x = 2', 'x → 프레임 5, x = 1': 'x → frame 5, x = 1',
  '읽기 전용 칸에 쓰려 해 페이지 폴트가 납니다. 커널이 함께 쓰던 페이지임을 알아봅니다.': 'Trying to write a read-only entry causes a page fault. The kernel recognises it as a shared page.',
  '커널이 프레임 5의 내용을 빈 프레임 8에 복사합니다.': 'The kernel copies the contents of frame 5 into free frame 8.',
  '자식의 칸만 프레임 8로 바꾸고 다시 실행해 x = 2를 씁니다.': 'Only the child\'s entry is changed to frame 8, and running again writes x = 2.',
  '부모는 여전히 프레임 5의 x = 1을 봅니다.': 'The parent still sees x = 1 in frame 5.',
  '커널은 이 폴트를 어떻게 처리할까요?': 'How does the kernel handle this fault?',
  '자식을 끝낸다': 'It ends the child', '프레임을 복사해 자식에게 따로 준다': 'It copies the frame and gives the child its own', '부모의 값을 바꾼다': 'It changes the parent\'s value',
  '함께 쓰던 페이지에 처음 쓰는 것이라, 그 페이지만 복사해 갈라 줍니다. 부모의 x는 그대로 1입니다.': 'It is the first write to a shared page, so only that page is copied to split them. The parent\'s x stays 1.',
  // Step 3
  'mmap으로 파일': 'A file with mmap',
  'mmap한 파일은 read 없이 메모리처럼 읽는다': 'A file mapped with mmap is read like memory, without read',
  'mmap은 파일을 프로세스의 주소 공간에 붙입니다. 이때 커널은 파일을 읽지 않고 페이지 표에 "이 주소는 data.bin의 0번째 페이지"라고만 적어 둡니다. 프로그램이 그 주소를 처음 읽으면 페이지 폴트가 나고, 커널은 페이지 캐시(3.6)에 있는 그 파일 페이지의 프레임을 표에 연결합니다. 그다음부터는 read 시스템 콜 없이 평범한 메모리처럼 읽습니다.':
    'mmap attaches a file to the process\'s address space. The kernel does not read the file at that point; it only notes in the page table that "this address is page 0 of data.bin". When the program first reads that address, a page fault occurs and the kernel links the frame holding that file page in the page cache (3.6) into the table. From then on it is read like ordinary memory, without the read system call.',
  '첫 접근이 커널로 가 커널 이름표가 "폴트→연결"이 되고, 캐시 이름표가 "data.bin"이 됩니다. 프로그램 이름표가 "mmap·read 없음"이 되어 read 시스템 콜 없이 읽었음을 보입니다.':
    'The first access goes to the kernel, whose label becomes "Fault→link" and the cache\'s becomes "data.bin". The program\'s label becomes "mmap·no read", showing it read without the read system call.',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 커널, 페이지 캐시, 디스크가 있습니다. 프로그램이 data.bin을 mmap한 뒤 첫 바이트를 읽습니다.':
    'The program is in user space on the left; across the boundary are the kernel, the page cache and the disk. The program mmaps data.bin and then reads its first byte.',
  'mmap("data.bin")': 'mmap("data.bin")', '표에 "파일 0번째 페이지"만 적음': 'Only "file page 0" noted in the table', '첫 접근 폴트 → 캐시 프레임 연결': 'Fault on first access → link the cache frame', '이후 read 없이 메모리로 읽음': 'Afterwards read as memory, without read',
  'p = mmap("data.bin")': 'p = mmap("data.bin")', 'c = p[0]': 'c = p[0]', '표 칸: data.bin 0번째 페이지': 'Table entry: data.bin page 0', '프레임 없음 → 폴트': 'No frame → fault',
  '캐시에 없으면 디스크에서 읽어 둠': 'Read from disk if not cached', '캐시 프레임을 표 칸에 연결': 'Link the cache frame into the entry', 'p[0]을 메모리처럼 읽음': 'Read p[0] like memory', '이후 read 시스템 콜 없음': 'No read system call afterwards',
  '처음 읽는 주소라 표 칸에 프레임이 없어 페이지 폴트가 납니다.': 'It is the first read of the address, so the entry has no frame and a page fault occurs.',
  '그 페이지가 캐시에 없으면 디스크에서 읽어 캐시에 둡니다.': 'If the page is not cached, it is read from disk into the cache.',
  '커널이 캐시의 그 프레임을 프로그램의 표 칸에 연결합니다.': 'The kernel links that cache frame into the program\'s table entry.',
  '같은 명령을 다시 실행해 값을 읽습니다. 이후 이 페이지는 read 없이 메모리처럼 읽습니다.': 'The same instruction runs again and reads the value. From then on this page is read like memory, without read.',
  'mmap을 부른 순간 커널은 파일을 다 읽어 둘까요?': 'When mmap is called, does the kernel read the whole file?',
  '파일 전체를 읽는다': 'It reads the whole file', '표에 위치만 적고 쓸 때 읽는다': 'It notes the location and reads on use', '첫 페이지만 미리 읽는다': 'It reads only the first page ahead',
  '커널은 실제로 접근한 페이지만 폴트로 채웁니다. 큰 파일도 mmap 자체는 금방 끝납니다.': 'The kernel fills only pages actually accessed, through faults. Even for a large file, mmap itself finishes quickly.',
  // Step 4
  '공유 라이브러리': 'Shared libraries',
  '백 개의 프로세스가 libc 한 벌을 함께 쓴다': 'A hundred processes share one copy of libc',
  '거의 모든 프로그램이 C 표준 라이브러리 libc.so를 씁니다. 프로세스마다 libc를 따로 RAM에 두면 같은 코드가 백 벌이 됩니다. 실제로는 각 프로세스가 libc 파일을 mmap하고, 커널은 모든 표의 그 칸을 페이지 캐시의 같은 프레임(읽기 전용)에 연결합니다. 코드는 바꾸지 않으니 복사할 일도 없어, RAM에는 libc가 한 벌만 있습니다.':
    'Almost every program uses the C standard library libc.so. If each process kept its own libc in RAM, there would be a hundred copies of the same code. In fact each process mmaps the libc file, and the kernel links that entry in every table to the same frame (read-only) in the page cache. The code is never changed, so nothing is copied, and RAM holds one copy of libc.',
  '두 프로세스 이름표가 모두 "libc:프레임7"이고, 커널 이름표가 "100개 공유", RAM 이름표가 "프레임7 1벌"입니다.':
    'Both process labels read "libc: frame 7", the kernel\'s reads "100 share it", and RAM\'s reads "Frame 7, one copy".',
  '왼쪽 사용자 영역에 프로세스 1과 나머지 프로세스 99개가, 경계 너머에 커널과 RAM이 있습니다. 모두 libc.so를 씁니다.': 'Process 1 and the other 99 processes are in user space on the left; across the boundary are the kernel and RAM. All use libc.so.',
  '프로세스 100개가 모두 libc.so를 mmap': 'All 100 processes mmap libc.so', '모든 표가 같은 프레임(읽기 전용)': 'Every table: the same frame (read-only)', 'RAM에는 libc 1벌': 'One copy of libc in RAM',
  'libc.so를 쓰는 프로세스 100개': '100 processes using libc.so', 'libc 프레임을 표에 연결': 'Link the libc frame into the table', '99개 표도 같은 프레임에 연결': 'The 99 tables link to the same frame too', 'libc 코드 한 벌': 'One copy of libc code',
  '프로세스 1이 libc를 붙이자 커널이 캐시의 libc 프레임을 연결합니다.': 'When process 1 maps libc, the kernel links the libc frame in the cache.',
  '나머지 99개도 같은 libc 프레임에 연결됩니다.': 'The other 99 are linked to the same libc frame.',
  'RAM에는 libc가 한 벌만 있습니다.': 'RAM holds only one copy of libc.',
  'RAM에 libc 코드는 몇 벌 있을까요?': 'How many copies of libc code are in RAM?',
  '100벌': '100', '1벌': '1', '50벌': '50',
  '모든 표가 같은 읽기 전용 프레임을 가리킵니다. 코드는 바뀌지 않아 복사할 일이 없습니다.': 'Every table points at the same read-only frame. The code never changes, so nothing needs copying.',
};
