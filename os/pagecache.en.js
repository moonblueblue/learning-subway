// English for OS 3.6 The page cache and OOM. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '페이지 캐시와 OOM · 레슨 3.6': 'The page cache and OOM · Lesson 3.6',
  '운영체제 3장 메모리 · 레슨 3.6': 'Operating systems chapter 3 Memory · Lesson 3.6',
  '페이지 캐시와 OOM': 'The page cache and OOM',
  '한 번 읽은 파일이 RAM에 남는 페이지 캐시, 나중에 디스크에 쓰는 write, 메모리가 모자랄 때 캐시부터 비우는 순서, 끝내 프로세스를 끝내는 OOM 킬러를 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, the page cache that keeps a file read once in RAM, a write that reaches the disk later, the order in which cache is freed first when memory runs short, and the OOM killer that finally ends a process.',
  '리눅스는 남는 RAM을 왜 파일 캐시로 채우고, 메모리가 모자라면 무엇부터 비울까요? 파일과 메모리가 RAM과 디스크 사이를 오가는 길을 한 정거장씩 따라가 보세요.':
    'Why does Linux fill spare RAM with a file cache, and what does it free first when memory runs short? Follow, station by station, files and memory moving between RAM and the disk.',
  '리눅스는 남는 RAM을 왜 파일 캐시로 채우고, 모자라면 무엇부터 비울까?': 'Why does Linux fill spare RAM with a file cache, and what does it free first when memory runs short?',
  '프로그램, 커널, 페이지 캐시, 디스크': 'Program, kernel, page cache, disk',
  '커널이 읽고 쓴 파일을 RAM의 페이지 캐시에 남기고, 메모리가 모자라면 캐시를 비우거나 가장 큰 프로세스를 끝내는 장면': 'The kernel keeps files it read and wrote in the page cache in RAM, and when memory runs short it frees cache or ends the biggest process',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '프로세스': 'Process', '커널': 'Kernel', '메모리': 'Memory', '저장장치': 'Storage',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '프로그램': 'Program', '페이지 캐시': 'Page cache', '디스크': 'Disk', 'java 12GiB': 'java 12 GiB', '디스크 · 스왑': 'Disk · swap',
  // Legs in the stage list and the example strip
  '프로그램 → 커널': 'Program → kernel', '커널 → 디스크': 'Kernel → disk', '디스크 → 페이지 캐시': 'Disk → page cache', '프로그램 → 페이지 캐시': 'Program → page cache', '페이지 캐시 → 프로그램': 'Page cache → program',
  '페이지 캐시 → 디스크': 'Page cache → disk', '커널 → 페이지 캐시': 'Kernel → page cache', 'java 12GiB → 커널': 'java 12 GiB → kernel', '커널 → java 12GiB': 'Kernel → java 12 GiB',
  '페이지 캐시 · log.txt': 'Page cache · log.txt', '페이지 캐시 · 나중에': 'Page cache · later', '페이지 캐시 · 2GiB': 'Page cache · 2 GiB', '커널 · SIGKILL': 'Kernel · SIGKILL',
  // Badges and moving labels
  '비어 있음': 'Empty', 'read 1': 'read 1', '첫 read': 'First read', '캐시에 없음': 'Not cached', '1번 읽힘': 'Read once', 'log.txt': 'log.txt', 'log.txt 있음': 'log.txt cached', 'read 2': 'read 2', '두 번째 read': 'Second read',
  '두 번째 0번': 'Second: 0 disk', '1번만 읽힘': 'Read only once',
  'write': 'write', '더러움 → 나중에 씀': 'Dirty → write later', '끝': 'Done', 'write 바로 끝': 'write done at once', '나중에': 'Later', '나중에 씀': 'Written later',
  '12GiB · 대부분 깨끗': '12 GiB · mostly clean', '메모리 2GiB': '2 GiB memory', '캐시에서 2GiB': '2 GiB from cache', '2GiB 원함': 'Wants 2 GiB', '2GiB 비움': 'Free 2 GiB', '깨끗한 것 버림': 'Drop clean pages', '2GiB': '2 GiB', '+2GiB 받음': 'Got +2 GiB',
  '메모리 가장 큼': 'Largest memory', '거의 비었음': 'Almost empty', '스왑 가득': 'Swap full', '더 달라': 'Want more', 'OOM: java': 'OOM: java', 'SIGKILL': 'SIGKILL', 
  // Step 1
  '두 번 읽기': 'Reading twice',
  '한 번 읽은 파일은 RAM에 남아 두 번째는 디스크에 가지 않는다': 'A file read once stays in RAM, so the second read does not touch the disk',
  '프로그램이 파일을 읽으면 커널은 디스크에서 읽은 내용을 RAM의 페이지 캐시에 남겨 둡니다. 같은 파일을 다시 읽으면 캐시에 있으니 디스크에 가지 않고 RAM에서 바로 줍니다. 디스크 읽기는 RAM보다 수천~수만 배 느리므로, 같은 파일을 여러 번 읽는 서버는 이 캐시 덕분에 빨라집니다. 그래서 리눅스는 남는 RAM을 놀리지 않고 캐시로 채웁니다.':
    'When a program reads a file, the kernel keeps what it read from disk in the page cache in RAM. When the same file is read again it is in the cache, so it comes straight from RAM without going to the disk. Disk reads are thousands to tens of thousands of times slower than RAM, so servers that read the same files repeatedly get faster thanks to this cache. That is why Linux does not leave spare RAM idle but fills it with cache.',
  '첫 read는 캐시를 지나 디스크까지 가고, 캐시 이름표가 "log.txt 있음"이 됩니다. 두 번째 read는 캐시에서 돌아와 디스크 이름표가 "1번만 읽힘", 프로그램 이름표가 "두 번째 0번"(디스크 읽기 0번)이 됩니다.':
    'The first read goes past the cache to the disk, and the cache\'s label becomes "log.txt cached". The second read comes back from the cache, so the disk\'s label becomes "Read only once" and the program\'s "Second: 0 disk" (0 disk reads).',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 커널, RAM의 페이지 캐시, 디스크가 있습니다. 캐시는 비어 있고 프로그램이 log.txt를 두 번 읽습니다.':
    'The program is in user space on the left; across the boundary are the kernel, the page cache in RAM and the disk. The cache is empty, and the program reads log.txt twice.',
  '첫 read: 캐시에 없음 → 디스크에서 읽어 캐시에 남김': 'First read: not cached → read from disk and kept in cache', '두 번째 read: 캐시에 있음': 'Second read: cached', '디스크 0번 · RAM에서 바로': '0 disk reads · straight from RAM',
  'read("log.txt") 두 번': 'read("log.txt") twice', '캐시는 비어 있음': 'The cache is empty', '캐시에 log.txt가 있나?': 'Is log.txt in the cache?', '디스크에서 읽음': 'Read from disk', '읽은 내용을 캐시에 남김': 'Keep what was read in the cache',
  '캐시에 있음': 'In the cache', '디스크에 가지 않음': 'Does not go to the disk', 'RAM에서 바로 받음': 'Got it straight from RAM',
  '프로그램이 log.txt를 처음 읽습니다.': 'The program reads log.txt for the first time.',
  '캐시에 없어 디스크에서 읽습니다.': 'It is not cached, so it is read from disk.',
  '읽은 내용을 페이지 캐시에 남기고 프로그램에 줍니다.': 'What was read is kept in the page cache and given to the program.',
  '같은 파일을 다시 읽으니 캐시에 있습니다.': 'Reading the same file again, it is in the cache.',
  'RAM에서 바로 받아 훨씬 빠릅니다.': 'It comes straight from RAM, much faster.',
  '두 번째 read는 디스크를 몇 번 읽을까요?': 'How many disk reads does the second read make?',
  '1번': '1', '0번': '0', '2번': '2',
  '첫 read 때 남겨 둔 캐시에서 바로 줍니다. 디스크까지 가지 않습니다.': 'It is served straight from the cache kept on the first read. It does not go to the disk.',
  // Step 2
  '쓰기는 나중에': 'Writes come later',
  'write는 캐시만 고치고 돌아오고, 디스크에는 나중에 쓴다': 'write only changes the cache and returns; the disk is written later',
  'write도 먼저 페이지 캐시에 씁니다. 커널은 그 페이지에 "더러움"(디스크와 다름) 표시를 하고 곧바로 돌아오므로, 프로그램은 디스크를 기다리지 않습니다. 더러운 페이지는 커널이 모아 두었다가 보통 30초 안에 디스크에 씁니다. 그 전에 전원이 나가면 그 내용은 사라질 수 있어서, 데이터베이스처럼 꼭 남겨야 하는 프로그램은 fsync로 지금 당장 쓰라고 합니다(5장).':
    'write also goes to the page cache first. The kernel marks the page "dirty" (different from the disk) and returns at once, so the program does not wait for the disk. The kernel gathers dirty pages and usually writes them to disk within 30 seconds. If the power fails before that, the content can be lost, so programs that must keep data, such as databases, ask for it to be written right now with fsync (chapter 5).',
  'write가 캐시까지만 가 캐시 이름표가 "더러움 → 나중에 씀", 프로그램 이름표가 "write 바로 끝"이 됩니다. 나중에 캐시에서 디스크로 가 디스크 이름표가 "나중에 씀"이 됩니다.':
    'write goes only as far as the cache, whose label becomes "Dirty → write later", and the program\'s becomes "write done at once". Later it goes from the cache to the disk, and the disk\'s label becomes "Written later".',
  '1단계와 같은 정거장입니다. 프로그램이 log.txt에 한 줄을 씁니다.': 'The same stations as step 1. The program writes a line to log.txt.',
  'write: 캐시만 고침 · 더러움 표시': 'write: change the cache only · mark dirty', '프로그램은 바로 다음 일': 'The program moves straight on', '약 30초 안에 커널이 디스크에 씀': 'The kernel writes to disk within about 30 s', '꼭 남기려면 fsync': 'fsync to be sure',
  'write("log.txt", "새 줄")': 'write("log.txt", "new line")', '캐시의 log.txt를 고침': 'Change log.txt in the cache', '더러움 표시': 'Mark dirty', '디스크를 기다리지 않음': 'Does not wait for the disk', '약 30초 안에 커널이 씀': 'The kernel writes within about 30 s',
  'write는 캐시의 페이지만 고치고 더러움 표시를 합니다.': 'write only changes the page in the cache and marks it dirty.',
  '프로그램은 디스크를 기다리지 않고 바로 다음 일을 합니다.': 'The program does not wait for the disk and goes straight on.',
  '조금 뒤 커널이 더러운 페이지를 디스크에 씁니다.': 'A little later the kernel writes the dirty page to disk.',
  'write가 돌아올 때 내용은 디스크에 있을까요?': 'When write returns, is the content on the disk?',
  '이미 디스크에 있다': 'Yes, already on disk', '아직 캐시에만 있다': 'No, only in the cache so far', '어디에도 없다': 'It is nowhere',
  '커널은 캐시만 고치고 바로 돌아옵니다. 디스크에는 나중에 씁니다.': 'The kernel only changes the cache and returns at once. The disk is written later.',
  // Step 3
  '캐시부터 비움': 'Cache goes first',
  '메모리가 모자라면 깨끗한 캐시부터 버려 내준다': 'When memory runs short, clean cache is dropped first to hand memory over',
  '페이지 캐시는 남는 RAM을 빌려 쓰는 것이라, 프로그램이 메모리를 더 원하면 먼저 내놓습니다. 디스크와 내용이 같은 깨끗한 캐시 페이지는 버려도 다시 읽으면 되므로 쓰기 없이 곧바로 비울 수 있습니다. 그래서 free 명령의 free 열이 작아도 걱정할 일이 아니고, 실제로 쓸 수 있는 양은 캐시를 포함한 available 열로 봅니다.':
    'The page cache only borrows spare RAM, so when a program wants more memory the cache gives it up first. Clean cache pages that match the disk can be read again if needed, so they can be freed at once without writing. That is why a small free column in the free command is nothing to worry about; the memory actually usable is the available column, which includes the cache.',
  '프로그램의 2GiB 요청이 커널로 가 커널 이름표가 "캐시에서 2GiB"가 됩니다. 캐시 이름표가 "깨끗한 것 버림"이 되고, 프로그램 이름표가 "+2GiB 받음"이 됩니다.':
    'The program\'s request for 2 GiB goes to the kernel, whose label becomes "2 GiB from cache". The cache\'s label becomes "Drop clean pages", and the program\'s becomes "Got +2 GiB".',
  '1단계와 같은 정거장입니다. RAM 대부분이 페이지 캐시로 차 있고, 프로그램이 메모리를 더 달라고 합니다.': 'The same stations as step 1. Most of RAM is filled with page cache, and the program asks for more memory.',
  'RAM 대부분이 캐시': 'Most of RAM is cache', '프로그램이 메모리를 더 원함': 'The program wants more memory', '깨끗한 캐시 페이지를 버려 내줌': 'Drop clean cache pages and hand them over', 'free의 available에 캐시가 포함됨': 'free\'s available includes the cache',
  'RAM 16GiB 가운데 12GiB가 캐시': '12 GiB of 16 GiB RAM is cache', '대부분 깨끗함': 'Mostly clean', '빈 RAM이 모자람': 'Not enough free RAM', '캐시에서 가져옴': 'Take from the cache',
  '깨끗한 페이지 2GiB를 버림': 'Drop 2 GiB of clean pages', '디스크 쓰기 없음': 'No disk writes', '메모리 2GiB 받음': 'Got 2 GiB of memory',
  '프로그램이 2GiB를 더 원합니다. 빈 RAM이 모자라 커널이 캐시에서 가져옵니다.': 'The program wants 2 GiB more. There is not enough free RAM, so the kernel takes it from the cache.',
  '깨끗한 캐시 페이지 2GiB를 버립니다. 디스크에 쓸 필요가 없습니다.': 'It drops 2 GiB of clean cache pages. Nothing needs to be written to disk.',
  '비운 자리를 프로그램에 줍니다.': 'The freed space goes to the program.',
  '커널은 무엇부터 비울까요?': 'What does the kernel free first?',
  '다른 프로그램의 힙': 'Another program\'s heap', '디스크와 같은 깨끗한 캐시': 'Clean cache that matches the disk', '커널 코드': 'Kernel code',
  '깨끗한 캐시는 디스크에 같은 내용이 있어 쓰지 않고 버릴 수 있습니다. 가장 싸게 비울 수 있습니다.': 'Clean cache has the same content on disk, so it can be dropped without writing. It is the cheapest to free.',
  // Step 4
  'OOM 킬러': 'The OOM killer',
  '더 비울 것이 없으면 가장 큰 프로세스를 끝낸다': 'When nothing more can be freed, the biggest process is ended',
  '캐시를 다 비우고 스왑까지 찼는데도 메모리를 더 달라는 요청이 오면, 커널은 프로세스 하나를 끝내 메모리를 되찾습니다. 이것이 OOM(Out Of Memory) 킬러입니다. 주로 메모리를 가장 많이 쓰는 프로세스를 고르며(oom_score), SIGKILL로 끝내므로 정리할 기회가 없습니다. 컨테이너는 cgroup의 메모리 한도를 넘으면 그 컨테이너 안에서 같은 일이 일어납니다.':
    'If requests for memory keep coming after the cache is emptied and swap is full, the kernel ends a process to get memory back. This is the OOM (Out Of Memory) killer. It mostly picks the process using the most memory (oom_score) and ends it with SIGKILL, so there is no chance to clean up. In a container, going over the cgroup memory limit makes the same thing happen inside that container.',
  '커널 이름표가 "OOM: java"가 되고, java 이름표가 "SIGKILL"이 됩니다(종료 코드 137).': 'The kernel\'s label becomes "OOM: java", and java\'s becomes "SIGKILL" (exit code 137).',
  '왼쪽 사용자 영역에 메모리를 가장 많이 쓰는 java 프로세스가, 경계 너머에 커널, 페이지 캐시, 디스크(스왑)가 있습니다. 캐시와 스왑이 모두 바닥났습니다.':
    'A java process using the most memory is in user space on the left; across the boundary are the kernel, the page cache and the disk (swap). Cache and swap are both used up.',
  '캐시도 스왑도 바닥': 'Cache and swap both used up', '할당 요청이 계속 옴': 'Allocation requests keep coming', 'oom_score가 가장 큰 java를 SIGKILL': 'SIGKILL java, with the highest oom_score', 'dmesg: Out of memory: Killed process': 'dmesg: Out of memory: Killed process',
  '캐시 거의 0 · 스왑 가득': 'Cache almost 0 · swap full', 'java가 12GiB로 가장 큼': 'java is the largest at 12 GiB', '비울 캐시 없음 · 스왑도 가득': 'No cache to free · swap full too', 'oom_score 가장 큰 java 고름': 'Pick java, with the highest oom_score',
  '정리 없이 끝남': 'Ended without cleanup', '종료 코드 137': 'Exit code 137',
  'java가 메모리를 더 달라고 하지만 더 비울 곳이 없습니다. 커널이 oom_score를 비교해 java를 고릅니다.': 'java asks for more memory, but there is nothing left to free. The kernel compares oom_score values and picks java.',
  'java가 SIGKILL로 끝나고 12GiB가 돌아옵니다. 받던 요청은 정리되지 못합니다.': 'java ends with SIGKILL and 12 GiB come back. The requests in progress are not cleaned up.',
  '커널은 어떻게 메모리를 되찾을까요?': 'How does the kernel get memory back?',
  '요청을 영원히 기다리게 한다': 'It makes the request wait forever', '메모리를 가장 많이 쓰는 프로세스를 끝낸다': 'It ends the process using the most memory', '컴퓨터를 다시 켠다': 'It restarts the computer',
  'OOM 킬러는 oom_score가 가장 큰 프로세스, 대개 메모리를 가장 많이 쓰는 프로세스를 SIGKILL로 끝냅니다.': 'The OOM killer ends the process with the highest oom_score, usually the one using the most memory, with SIGKILL.',
};
