// English for 5.4 Virtual memory. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '가상 메모리 · 레슨 5.4': 'Virtual memory · Lesson 5.4',
  '프로세스의 가상 페이지가 페이지 테이블을 거쳐 RAM 프레임이나 디스크로 이어지는 길, 다른 프로세스 메모리 보호, 페이지 부재를 직접 확인해 보세요.':
    'See hands-on how a process\'s virtual pages lead through a page table to RAM frames or disk, how other processes\' memory is protected, and what a page fault is.',
  '프로그램마다 메모리를 혼자 쓰는 것처럼 보이는 이유는 무엇일까요? 가상 페이지가 페이지 테이블을 거쳐 RAM과 디스크로 이어지는 길을 따라가 보세요.':
    'Why does every program seem to have memory all to itself? Follow virtual pages through the page table to RAM and disk.',
  '프로세스 A와 B의 가상 페이지가 페이지 테이블을 따라 RAM 프레임이나 디스크로 이어지는 장면': 'Virtual pages of processes A and B leading along page tables to RAM frames or disk',
  '가상 페이지, RAM, 디스크': 'Virtual pages, RAM, disk', '가상 주소 (프로세스가 보는 것)': 'Virtual addresses (what the process sees)', 'RAM 프레임': 'RAM frames', '디스크': 'Disk',
  '프로세스 A': 'Process A', '프로세스 B': 'Process B', 'A의 페이지': 'A\'s pages', 'B의 페이지': 'B\'s pages', '디스크로 가는 연결': 'Link to disk', '허용된 접근': 'Allowed access', '차단된 접근': 'Blocked access', '✗ 길 없음': '✗ No route',
  '가상 페이지': 'Virtual page', '있는 곳': 'Where it is', 'A의 페이지 읽기': 'Read A\'s pages', 'B의 페이지 읽기': 'Read B\'s pages', '읽을 페이지를 눌러 보세요.': 'Press a page to read.',
  'A가 프레임 5(B의 것) 읽기': 'A reads frame 5 (B\'s)',
  // Readouts
  '프레임 {#0}': 'Frame {0}', '디스크 {0}': 'Disk {0}', '{0}의 페이지 테이블': '{0}\'s page table', '{0} 읽기': 'Read {0}', '{#0}번 페이지': 'Page {0}',
  '{0}의 {#1}번 페이지 → 페이지 테이블 → 프레임 {#2}. RAM에서 바로 읽습니다.': '{0}\'s page {1} → page table → frame {2}. Read straight from RAM.',
  '페이지 부재! {0}의 {#1}번은 디스크에 있습니다. 가장 오래 안 쓴 {2}의 {#3}번을 디스크로 내리고, 프레임 {#4}에 {5}의 {#6}번을 올렸습니다. (부재 {#7}번)':
    'Page fault! {0}\'s page {1} is on disk. {2}\'s page {3}, unused the longest, went down to disk, and {5}\'s page {6} came up into frame {4}. ({7} {7|fault|faults})',
  'A가 프레임 5(B의 1번 페이지)를 읽으려 했지만, A의 페이지 테이블에는 프레임 5로 가는 줄이 없습니다. MMU가 막고 운영체제가 A를 멈춥니다(세그멘테이션 오류).':
    'A tried to read frame 5 (B\'s page 1), but A\'s page table has no row leading to frame 5. The MMU blocks it and the operating system stops A (a segmentation fault).',
  // Step 1
  '주소 바꾸기': 'Translating addresses', 'A와 B 모두 페이지 0 읽기': 'A and B both read page 0', '각자의 페이지 표 조회': 'Each looks up its own page table', 'A는 프레임 1 · B는 프레임 2': 'A is frame 1 · B is frame 2',
  '주소 0 읽기': 'Read address 0', 'A의 표': 'A\'s table', 'B의 표': 'B\'s table', 'A의 데이터': 'A\'s data', 'B의 데이터': 'B\'s data', '가상 페이지 0': 'Virtual page 0',
  '프로그램이 보는 주소는 진짜 주소가 아니다': 'The addresses a program sees are not the real ones',
  '5.1에서 프로세스마다 메모리가 따로였습니다. 비결은 가상 메모리입니다. 프로그램은 0번 페이지, 1번 페이지처럼 자기만의 가상 주소를 쓰고, 운영체제가 만든 페이지 테이블이 이를 RAM의 실제 칸(프레임)으로 바꿉니다. 주소를 바꾸는 일은 CPU 안의 하드웨어(MMU)가 매번 해 줍니다.':
    'In 5.1 each process had its own memory. The secret is virtual memory. A program uses its own virtual addresses, such as page 0 and page 1, and a page table made by the operating system turns them into real cells (frames) in RAM. Hardware inside the CPU (the MMU) does this translation every time.',
  'A의 0번 페이지는 프레임 1에, B의 0번 페이지는 프레임 2에 있습니다. 둘 다 "0번"이라고 부르지만 실제 칸이 달라 서로 섞이지 않습니다.': 'A\'s page 0 is in frame 1 and B\'s page 0 in frame 2. Both are called "0", but the real cells differ, so they never mix.',
  '왼쪽에 프로세스 A와 B의 가상 페이지 0–3, 가운데에 RAM 프레임 여덟 개, 오른쪽에 디스크가 있습니다. 페이지마다 페이지 테이블이 가리키는 곳으로 선이 이어집니다.':
    'On the left are virtual pages 0–3 of processes A and B, in the middle eight RAM frames, and on the right a disk. A line runs from each page to where its page table points.',
  'A의 0번 페이지와 B의 0번 페이지를 차례로 읽어 보세요.': 'Read A\'s page 0 and then B\'s page 0.', '같은 0번인데 프레임 1과 프레임 2로 갑니다.': 'The same 0, yet they go to frame 1 and frame 2.',
  'A와 B가 둘 다 "0번 페이지"에 값을 쓰면?': 'What if A and B both write a value to "page 0"?', '서로 덮어쓴다': 'They overwrite each other', '각자 다른 프레임에 써서 섞이지 않는다': 'Each writes to a different frame, so they never mix',
  '페이지 테이블이 프로세스마다 따로 있어 같은 가상 번호도 다른 실제 칸으로 바뀝니다.': 'Each process has its own page table, so the same virtual number turns into a different real cell.',
  // Step 2
  '보호': 'Protection', 'A가 B의 프레임 5 요청': 'A asks for B\'s frame 5', 'A의 표에 경로 없음': 'No route in A\'s table', '접근 차단': 'Access blocked',
  'A가 B의 데이터를 노림': 'A goes after B\'s data', 'A의 표에 프레임 5 없음': 'Frame 5 is not in A\'s table', '차단': 'Blocked', 'B의 페이지 1': 'B\'s page 1', '세그멘테이션 오류': 'Segmentation fault',
  '페이지 테이블에 없는 곳은 갈 수 없다': 'Nowhere outside the page table can be reached',
  '프로세스는 자기 페이지 테이블에 적힌 프레임에만 갈 수 있습니다. A가 B의 프레임 주소를 알아내 읽으려 해도, A의 페이지 테이블에는 그 프레임으로 가는 줄이 없어서 MMU가 막고 운영체제가 A를 멈춥니다. 흔히 보는 "세그멘테이션 오류"가 이것입니다.':
    'A process can only reach the frames written in its own page table. Even if A finds out the address of B\'s frame and tries to read it, A\'s page table has no row leading there, so the MMU blocks it and the operating system stops A. This is the familiar "segmentation fault".',
  '"A가 프레임 5 직접 읽기"는 막히고 A가 멈춥니다. 5.3에서 장치 명령을 막은 것처럼, 메모리도 하드웨어와 운영체제가 함께 지킵니다.': '"A reads frame 5 directly" is blocked and A stops. Just as device instructions were blocked in 5.3, memory is guarded by hardware and the operating system together.',
  '같은 장면입니다. A가 B의 프레임을 읽으려 하면 길이 없어 빨간 막힘 표시가 뜹니다.': 'The same scene. When A tries to read B\'s frame, there is no route and a red blocked mark appears.',
  '"A가 프레임 5(B의 것) 읽기"를 눌러 보세요.': 'Press "A reads frame 5 (B\'s)".', 'A의 페이지 테이블에 프레임 5가 없어 막혔습니다.': 'Frame 5 is not in A\'s page table, so it was blocked.',
  '프로그램이 남의 메모리를 읽으려다 막히면 흔히 보는 오류는?': 'What error is commonly seen when a program is blocked reading someone else\'s memory?', '문법 오류': 'Syntax error', '0으로 나누기': 'Division by zero',
  '허락되지 않은 주소에 닿았다는 뜻입니다. 운영체제가 그 프로세스를 멈춥니다.': 'It means it touched an address it was not allowed. The operating system stops that process.',
  // Step 3
  '페이지 부재': 'Page faults', '원하는 페이지가 디스크에 있음': 'The wanted page is on disk', '다른 페이지를 내보내 RAM 확보': 'Push another page out to free RAM', '필요한 페이지를 올려 다시 읽기': 'Bring the needed page up and read again',
  'A의 페이지 3': 'A\'s page 3', '디스크 D0': 'Disk D0', '폴트 전': 'Before the fault', '폴트 처리': 'Handling the fault', '기존 페이지 내보냄': 'Push out an existing page', 'A3를 RAM에 적재': 'Load A3 into RAM', '재시도 성공': 'Retry succeeds',
  'RAM이 모자라면 페이지를 디스크에 잠시 내려놓는다': 'When RAM runs short, pages are set down on disk for a while',
  '모든 페이지가 RAM에 있을 필요는 없습니다. 당장 안 쓰는 페이지는 디스크(스왑)에 두고, 필요해지면 그때 RAM으로 올립니다. 디스크에 있는 페이지에 닿으면 "페이지 부재"가 일어나, 운영체제가 오래 안 쓴 프레임 하나를 디스크로 내리고 그 자리에 필요한 페이지를 올립니다. 3.7에서 본 것처럼 디스크는 RAM보다 수천 배 느립니다.':
    'Not every page needs to be in RAM. Pages not in use right now stay on disk (swap) and come up into RAM when needed. Touching a page on disk causes a "page fault": the operating system sends one frame unused the longest down to disk and brings the needed page up in its place. As seen in 3.7, disk is thousands of times slower than RAM.',
  'A의 3번 페이지는 디스크에 있습니다. 읽으면 페이지 부재가 나서, 가장 오래 안 쓴 B의 0번 페이지가 디스크로 내려가고 A의 3번이 그 프레임에 올라옵니다. 부재가 잦으면 컴퓨터가 확 느려집니다(스래싱).':
    'A\'s page 3 is on disk. Reading it causes a page fault: B\'s page 0, unused the longest, goes down to disk and A\'s page 3 comes up into that frame. Frequent faults make a computer suddenly slow (thrashing).',
  '같은 장면입니다. RAM 프레임이 모두 차 있고, 일부 페이지는 오른쪽 디스크에 있습니다. 디스크 페이지를 읽으면 페이지가 서로 자리를 바꿉니다.': 'The same scene. Every RAM frame is full, and some pages are on the disk on the right. Reading a disk page makes pages swap places.',
  '디스크에 있는 A의 3번 페이지를 읽어 보세요.': 'Read A\'s page 3, which is on disk.', '페이지 부재: 오래 안 쓴 페이지를 내리고 A의 3번을 올렸습니다.': 'Page fault: a page unused for a long time went down and A\'s page 3 came up.',
  '페이지 부재가 자주 나면 왜 느려질까요?': 'Why do frequent page faults make things slow?', '디스크를 오가야 해서': 'It has to go back and forth to disk', 'CPU가 꺼져서': 'The CPU turns off', '페이지 테이블이 사라져서': 'The page table disappears',
  '부재 한 번마다 디스크에서 페이지를 읽고 써야 해서 RAM 접근보다 수천 배 오래 걸립니다.': 'Each fault means reading and writing a page on disk, which takes thousands of times longer than reaching RAM.',
  // Step 4
  '왜 쓰나': 'Why use it', '서로 다른 프로세스의 같은 주소': 'The same address in different processes', '각자 가진 페이지 표로 변환': 'Translated by each one\'s own page table', '주소가 같아도 실제 데이터 분리': 'Same address, separate real data',
  '가상 메모리가 주는 세 가지': 'Three things virtual memory gives',
  '가상 메모리 덕분에 (1) 프로세스마다 메모리가 따로라 서로 지켜지고, (2) RAM보다 큰 프로그램도 필요한 부분만 올려 돌릴 수 있고, (3) 같은 프로그램 코드처럼 공유해도 되는 페이지는 여러 프로세스의 페이지 테이블이 같은 프레임을 가리키게 해 메모리를 아낍니다.':
    'Thanks to virtual memory, (1) each process has its own memory, so they are protected from each other, (2) a program bigger than RAM can run by loading only the parts it needs, and (3) pages that can be shared, such as the code of the same program, save memory by having several processes\' page tables point to the same frame.',
  '해 보기의 질문으로 정리해 보세요. 페이지를 더 읽어 보며 확인해도 됩니다.': 'Sum up with the questions in Try. You can read more pages to check, too.',
  '같은 장면입니다. 아무 페이지나 읽어 보며 페이지 테이블이 어디를 가리키는지 확인할 수 있습니다.': 'The same scene. Read any page to check where the page table points.',
  '메모장을 두 개 띄우면(5.1) 같은 코드 페이지는 어떻게 하면 메모리를 아낄까요?': 'With two Notepads running (5.1), how can the identical code pages save memory?',
  '두 페이지 테이블이 같은 프레임을 가리킨다': 'Both page tables point to the same frame', '코드를 두 번 올린다': 'Load the code twice', '한쪽은 디스크에서 바로 실행한다': 'One runs straight from disk',
  '코드는 바뀌지 않으므로 함께 써도 안전합니다. 데이터·스택만 따로 둡니다.': 'Code does not change, so sharing it is safe. Only data and stacks are kept separate.',
  'RAM이 8GB인데 10GB를 쓰는 프로그램도 돌 수 있는 이유는?': 'Why can a program using 10 GB run with 8 GB of RAM?',
  '당장 쓰는 페이지만 RAM에 두고 나머지는 디스크에 두니까': 'Only the pages in use right now are in RAM, the rest on disk', 'RAM이 늘어나서': 'RAM grows', '프로그램이 알아서 작아져서': 'The program shrinks by itself',
  '대신 디스크 페이지에 자주 닿으면 페이지 부재로 느려집니다.': 'But touching disk pages often slows it down with page faults.',
};
