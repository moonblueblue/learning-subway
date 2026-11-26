// English for OS 3.3 The TLB. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'TLB · 레슨 3.3': 'The TLB · Lesson 3.3',
  '운영체제 3장 메모리 · 레슨 3.3': 'Operating systems chapter 3 Memory · Lesson 3.3',
  'TLB': 'TLB',
  'TLB에 없어 표를 다 읽는 미스, 표를 건너뛰는 적중, 문맥 교환 때 남의 짝을 막는 방법, 큰 페이지로 넓게 덮는 TLB를 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, a miss that reads every table because the TLB does not have the pair, a hit that skips the tables, how someone else\'s pair is blocked on a context switch, and a TLB that covers more with huge pages.',
  '같은 페이지를 다시 읽을 때 MMU는 왜 페이지 표를 다시 읽지 않아도 될까요? 주소가 TLB에서 끝나는 길과 표까지 가는 길을 한 정거장씩 비교해 보세요.':
    'When the same page is read again, why does the MMU not have to read the page tables again? Compare, station by station, the road that ends at the TLB with the road that goes on to the tables.',
  '같은 페이지를 다시 읽을 때 MMU는 왜 페이지 표를 다시 읽지 않아도 될까?': 'When the same page is read again, why does the MMU not have to read the page tables again?',
  '프로그램, MMU, TLB, 페이지 표, RAM': 'Program, MMU, TLB, page tables, RAM',
  'MMU가 TLB에서 페이지 짝을 찾고, 없으면 페이지 표를 읽어 TLB에 적어 두는 장면': 'The MMU looks up a page pair in the TLB and, if it is missing, reads the page tables and saves the pair in the TLB',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware', 'CPU 안 장치': 'Device inside the CPU',
  '프로세스': 'Process', '커널': 'Kernel', '메모리': 'Memory',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '프로그램': 'Program', '페이지 표': 'Page tables', '프로세스 B': 'Process B', '1GiB 배열 훑기': 'Scanning a 1 GiB array', 'TLB 64칸': 'TLB, 64 entries',
  // Legs in the stage list and the example strip
  '프로그램 → MMU': 'Program → MMU', 'MMU → TLB': 'MMU → TLB', 'TLB → 페이지 표': 'TLB → page tables', '페이지 표 → TLB': 'Page tables → TLB', 'TLB → RAM': 'TLB → RAM',
  '커널 → TLB': 'Kernel → TLB', '프로세스 B → MMU': 'Process B → MMU', 'TLB 64칸 → 페이지 표': 'TLB, 64 entries → page tables', '페이지 표 → TLB 64칸': 'Page tables → TLB, 64 entries', 'TLB 64칸 → RAM': 'TLB, 64 entries → RAM',
  'TLB · 프레임 9': 'TLB · frame 9', 'TLB · 프레임 31': 'TLB · frame 31', 'TLB 64칸 · 적중': 'TLB, 64 entries · hit',
  // Badges and moving labels
  'load …2a41_0c38': 'load …2a41_0c38', '비어 있음': 'Empty', '…2a41_0c38': '…2a41_0c38', '7ffd2a41': '7ffd2a41', '7ffd2a41?': '7ffd2a41?', '7ffd2a41 없음': '7ffd2a41 missing',
  '표 4장': '4 tables', '표 4장 → 9': '4 tables → 9', '7ffd2a41 → 9': '7ffd2a41 → 9', '미스→저장 9': 'Miss→saved 9', '프레임 9': 'Frame 9', '프레임 9 읽음': 'Read frame 9', '메모리 5번': '5 memory reads',
  'load …2a41_0c40': 'load …2a41_0c40', '…2a41_0c40': '…2a41_0c40', '적중 → 9': 'Hit → 9', '건너뜀': 'Skipped', '메모리 1번': '1 memory read',
  'A: 7ffd2a41 → 9': 'A: 7ffd2a41 → 9', '이제 실행': 'Runs now', 'CR3 = B의 표': 'CR3 = B\'s tables', 'CR3·PCID': 'CR3·PCID', 'A 것 · B 못 씀': 'A\'s · not for B',
  'B의 7ffd2a41?': 'B\'s 7ffd2a41?', 'B: 없음 → 표 읽기': 'B: missing → read tables', '프레임 31': 'Frame 31', 'A:9 · B:31': 'A:9 · B:31', 'B의 31': 'B\'s 31', 'B: 미스→31': 'B: miss→31',
  '1GiB 훑는 중': 'Scanning 1 GiB', '256KiB만 덮음': 'Covers only 256 KiB', '미스': 'Miss', '자주 읽음': 'Read often', '미스 잦음': 'Frequent misses', '2MiB 페이지': '2 MiB pages',
  '덮는 범위 ×512': 'Coverage ×512', '4KiB→2MiB 칸': '4 KiB→2 MiB pages', 'B: 7ffd2a41': 'B: 7ffd2a41', '커널 · B의 표': 'Kernel · B\'s tables', '커널 · B의 표 → RAM': 'Kernel · B\'s tables → RAM', '표 덜 읽음': 'Fewer table reads', '커널 · B의 표 → TLB': 'Kernel · B\'s tables → TLB', '적중': 'Hit', '미스 줄어듦': 'Fewer misses', 
  // Step 1
  'TLB 미스': 'TLB miss',
  '처음 보는 페이지는 표를 다 읽고 TLB에 적어 둔다': 'For a page never seen before, every table is read and the pair is saved in the TLB',
  'TLB는 MMU 안에 있는 작은 표로, 최근에 바꾼 "가상 페이지 → 프레임" 짝을 기억합니다. 처음 읽는 페이지라 TLB에 없으면(미스) MMU는 3.2처럼 페이지 표 4장을 차례로 읽어 프레임을 찾습니다. 찾은 짝은 TLB에 적어 두고 데이터를 읽습니다. 이번 읽기에는 메모리 접근이 5번 들었습니다.':
    'The TLB is a small table inside the MMU that remembers recently translated "virtual page → frame" pairs. When a page is read for the first time it is not in the TLB (a miss), so the MMU reads the four page tables in turn as in 3.2 to find the frame. It saves the pair in the TLB and reads the data. This read took 5 memory accesses.',
  'TLB 이름표가 "미스→저장 9"가 되고 페이지 표 이름표가 "표 4장 → 9"가 됩니다. 프로그램 이름표에 "메모리 5번"이 남습니다.':
    'The TLB\'s label becomes "Miss→saved 9" and the page tables\' becomes "4 tables → 9". The program\'s label shows "5 memory reads".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 MMU, TLB, 페이지 표, RAM이 있습니다. TLB는 비어 있고, 프로그램이 페이지 7ffd2a41의 주소를 처음 읽습니다.':
    'The program is in user space on the left; across the boundary are the MMU, the TLB, the page tables and RAM. The TLB is empty, and the program reads an address in page 7ffd2a41 for the first time.',
  '페이지 7ffd2a41 첫 읽기': 'First read of page 7ffd2a41', 'TLB에 없음 (미스)': 'Not in the TLB (miss)', '표 4장 읽어 프레임 9': 'Read 4 tables, frame 9', 'TLB에 7ffd2a41 → 9 저장': 'Save 7ffd2a41 → 9 in the TLB',
  'load 0x7ffd2a41_0c38': 'load 0x7ffd2a41_0c38', 'TLB는 비어 있음': 'The TLB is empty', '페이지 7ffd2a41 · 오프셋 c38': 'Page 7ffd2a41 · offset c38', '7ffd2a41 → ? 없음': '7ffd2a41 → ? missing',
  'L4 → L3 → L2 → L1': 'L4 → L3 → L2 → L1', '7ffd2a41 → 9 저장': 'Save 7ffd2a41 → 9', '프레임 9 + c38 읽음': 'Read frame 9 + c38', '메모리 읽기 모두 5번': '5 memory reads in all',
  'MMU가 주소에서 페이지 번호 7ffd2a41을 떼어 냅니다.': 'The MMU takes page number 7ffd2a41 out of the address.',
  'TLB에서 먼저 찾아봅니다. 처음 보는 페이지라 없습니다.': 'It looks in the TLB first. The page is new, so it is not there.',
  '페이지 표 4장을 차례로 읽어 프레임 9를 찾습니다. 메모리 읽기 4번입니다.': 'It reads the four page tables in turn and finds frame 9. That is 4 memory reads.',
  '찾은 짝을 TLB에 적어 둡니다. 다음에는 표를 읽지 않아도 됩니다.': 'It saves the pair it found in the TLB. Next time the tables need not be read.',
  '프레임 9에서 데이터를 읽습니다. 이번 한 번의 읽기에 메모리를 다섯 번 읽었습니다.': 'It reads the data from frame 9. This one read took five memory reads.',
  'TLB에 없으면 MMU는 어떻게 할까요?': 'What does the MMU do when the pair is not in the TLB?',
  '페이지 폴트를 낸다': 'Raise a page fault', '페이지 표를 차례로 읽는다': 'Read the page tables in turn', '프레임 0을 쓴다': 'Use frame 0',
  'TLB는 기억해 둔 짝만 압니다. 없으면 3.2처럼 표 4장을 읽어 찾습니다. 표에도 없을 때만 페이지 폴트입니다.': 'The TLB knows only the pairs it remembers. If the pair is missing, the four tables are read as in 3.2. It is a page fault only when the tables do not have it either.',
  // Step 2
  'TLB 적중': 'TLB hit',
  '같은 페이지를 다시 읽으면 표를 건너뛴다': 'Reading the same page again skips the tables',
  '프로그램은 방금 읽은 곳 가까이를 다시 읽는 일이 많습니다. 바로 옆 변수는 같은 4KiB 페이지에 있으니 TLB에 짝이 이미 있습니다(적중). MMU는 표를 읽지 않고 TLB에서 프레임 9를 바로 얻어 RAM을 한 번만 읽습니다. 실제 프로그램에서는 대부분의 주소 변환이 이렇게 TLB에서 끝납니다.':
    'Programs often read again near where they just read. The next variable is in the same 4 KiB page, so its pair is already in the TLB (a hit). The MMU gets frame 9 straight from the TLB without reading the tables and reads RAM only once. In real programs most address translations end in the TLB like this.',
  'TLB 이름표가 "적중 → 9", 페이지 표 이름표가 "건너뜀"이 되고, 프로그램 이름표가 "메모리 1번"이 됩니다. 1단계의 "메모리 5번"과 비교합니다.':
    'The TLB\'s label becomes "Hit → 9", the page tables\' becomes "Skipped", and the program\'s becomes "1 memory read". Compare it with "5 memory reads" in step 1.',
  '1단계와 같은 정거장입니다. TLB에 7ffd2a41 → 9가 있고, 프로그램이 같은 페이지의 바로 옆 주소를 읽습니다.': 'The same stations as step 1. The TLB holds 7ffd2a41 → 9, and the program reads the address right next to it in the same page.',
  '같은 페이지 7ffd2a41의 옆 변수': 'Next variable in the same page 7ffd2a41', 'TLB에 있음 (적중)': 'In the TLB (hit)', '표를 건너뛰고 프레임 9': 'Skip the tables, frame 9', '메모리 1번 (1단계는 5번)': '1 memory read (step 1 took 5)',
  'load 0x7ffd2a41_0c40': 'load 0x7ffd2a41_0c40', '바로 옆 변수': 'The next variable', '같은 페이지 7ffd2a41': 'Same page 7ffd2a41', '7ffd2a41 → 9 있음': '7ffd2a41 → 9 present',
  '프레임 9 + c40 읽음': 'Read frame 9 + c40', '메모리 읽기 1번': '1 memory read',
  '바로 옆 변수라 페이지 번호가 1단계와 같습니다.': 'It is the next variable, so the page number is the same as in step 1.',
  'TLB에 1단계에서 적어 둔 짝이 있습니다.': 'The TLB has the pair saved in step 1.',
  '표를 건너뛰고 RAM을 한 번만 읽습니다.': 'It skips the tables and reads RAM only once.',
  '이번에는 메모리를 몇 번 읽을까요?': 'How many memory reads this time?',
  '5번': '5', '1번': '1', '0번': '0',
  'TLB에서 프레임을 바로 얻으니 표 4장은 건너뜁니다. 데이터 한 번만 읽습니다.': 'The frame comes straight from the TLB, so the four tables are skipped. Only the data is read, once.',
  // Step 3
  '문맥 교환': 'Context switch',
  '다른 프로세스로 바뀌면 남의 짝을 쓰면 안 된다': 'After switching process, someone else\'s pair must not be used',
  '프로세스마다 페이지 표가 따로라, 같은 가상 페이지 번호가 프로세스 A에서는 프레임 9, B에서는 프레임 31일 수 있습니다. CPU가 A에서 B로 바뀌었는데 TLB에 남은 A의 짝을 쓰면 B가 A의 데이터를 읽게 됩니다. 그래서 커널은 페이지 표를 바꿀 때(CR3) TLB를 비우거나, 칸마다 주인 표시(PCID)를 붙여 B가 A의 칸을 쓰지 못하게 합니다. B는 미스부터 다시 시작합니다.':
    'Each process has its own page tables, so the same virtual page number can be frame 9 in process A and frame 31 in B. If the CPU switches from A to B and uses A\'s pair left in the TLB, B reads A\'s data. So when the kernel switches page tables (CR3) it either empties the TLB or tags each entry with its owner (PCID) so that B cannot use A\'s entries. B starts again with a miss.',
  'TLB 이름표가 "A 것 · B 못 씀"이 되고 커널 이름표가 "CR3·PCID"가 됩니다. B가 표를 읽은 뒤 TLB 이름표가 "A:9 · B:31"이 되어, 같은 번호가 주인마다 다른 프레임으로 따로 적힙니다.':
    'The TLB\'s label becomes "A\'s · not for B" and the kernel\'s becomes "CR3·PCID". After B reads its tables the TLB\'s label becomes "A:9 · B:31": the same number is kept separately per owner with different frames.',
  '왼쪽 사용자 영역에 프로세스 B가, 경계 너머에 MMU, TLB, 커널, RAM이 있습니다. TLB에는 프로세스 A가 쓰던 7ffd2a41 → 9가 남아 있습니다.':
    'Process B is in user space on the left; across the boundary are the MMU, the TLB, the kernel and RAM. The TLB still holds 7ffd2a41 → 9 from process A.',
  'A: 7ffd2a41 → 9 · B: 7ffd2a41 → 31': 'A: 7ffd2a41 → 9 · B: 7ffd2a41 → 31', 'A에서 B로 교환': 'Switch from A to B', '커널이 CR3를 바꾸고 TLB를 구분(PCID)': 'The kernel changes CR3 and separates the TLB (PCID)', 'B는 미스 → 표 읽고 31': 'B misses → reads tables, 31',
  '프로세스 A에서 B로 교환': 'Switch from process A to B', 'TLB에 A의 7ffd2a41 → 9가 남음': 'A\'s 7ffd2a41 → 9 is left in the TLB',
  'B의 페이지 표로 바꿈': 'Switch to B\'s page tables', 'A의 칸은 B가 못 씀': 'B cannot use A\'s entries', 'B도 페이지 7ffd2a41을 읽음': 'B also reads page 7ffd2a41', 'B의 칸에는 없음 → 미스': 'Not in B\'s entries → miss',
  'B의 표: 7ffd2a41 → 31': 'B\'s tables: 7ffd2a41 → 31', 'TLB에 B: → 31 저장': 'Save B: → 31 in the TLB',
  '커널이 CR3를 B의 페이지 표로 바꾸면서 TLB의 A 칸을 B가 쓰지 못하게 합니다.': 'As the kernel points CR3 at B\'s page tables, it keeps B from using A\'s TLB entries.',
  'B가 같은 번호의 페이지 7ffd2a41을 읽습니다.': 'B reads page 7ffd2a41, the same number.',
  'B의 짝은 TLB에 없습니다. B는 미스부터 시작해 자기 표를 읽습니다.': 'B\'s pair is not in the TLB. B starts with a miss and reads its own tables.',
  'B의 표에서 프레임 31을 얻어 TLB에 적고 B의 데이터를 읽습니다.': 'It gets frame 31 from B\'s tables, saves it in the TLB and reads B\'s data.',
  'B가 TLB에 남은 A의 짝(7ffd2a41 → 9)을 그대로 쓰면?': 'What if B used A\'s pair left in the TLB (7ffd2a41 → 9)?',
  '더 빨라질 뿐이다': 'It would just be faster', 'B가 A의 데이터를 읽게 된다': 'B would read A\'s data', '아무 일 없다': 'Nothing happens',
  '같은 가상 페이지 번호라도 B의 표에서는 프레임 31입니다. A의 짝을 쓰면 프레임 9, 곧 A의 메모리를 읽습니다.': 'Even with the same virtual page number, B\'s tables say frame 31. Using A\'s pair reads frame 9, which is A\'s memory.',
  // Step 4
  '큰 페이지': 'Huge pages',
  '큰 페이지를 쓰면 같은 TLB 칸이 더 넓게 덮는다': 'With huge pages, the same TLB entries cover more',
  'TLB는 빨라야 해서 칸이 적습니다. 예를 들어 칸이 64개면 4KiB 페이지로는 256KiB만 덮습니다. 1GiB 배열을 훑는 프로그램은 거의 매번 미스가 나 표를 읽습니다. x86-64는 2MiB 큰 페이지(huge page)도 쓸 수 있어, 같은 64칸이 128MiB를 덮습니다. 리눅스는 투명 큰 페이지(THP)로 이를 자동으로 쓰기도 합니다. 대신 큰 페이지는 조금만 써도 2MiB를 통째로 차지합니다.':
    'The TLB must be fast, so it has few entries. With 64 entries, for example, 4 KiB pages cover only 256 KiB. A program scanning a 1 GiB array misses almost every time and reads the tables. x86-64 can also use 2 MiB huge pages, and then the same 64 entries cover 128 MiB. Linux can use them automatically through Transparent Huge Pages (THP). In return, a huge page takes a whole 2 MiB even if only a little of it is used.',
  'TLB 이름표가 "256KiB만 덮음"에서 "덮는 범위 ×512"(128MiB)로 바뀌고, 프로그램 이름표가 "미스 줄어듦"이 됩니다.':
    'The TLB\'s label changes from "Covers only 256 KiB" to "Coverage ×512" (128 MiB), and the program\'s label becomes "Fewer misses".',
  '왼쪽 사용자 영역에 1GiB 배열을 훑는 프로그램이, 경계 너머에 MMU, TLB, 페이지 표, RAM이 있습니다. TLB 칸은 64개입니다.': 'A program scanning a 1 GiB array is in user space on the left; across the boundary are the MMU, the TLB, the page tables and RAM. The TLB has 64 entries.',
  'TLB 64칸': 'TLB, 64 entries', '4KiB 페이지: 256KiB만 덮음 · 미스 잦음': '4 KiB pages: cover only 256 KiB · frequent misses', '2MiB 큰 페이지: 128MiB 덮음': '2 MiB huge pages: cover 128 MiB', '같은 칸 수로 512배': '512 times as much with the same entries',
  '4KiB 페이지': '4 KiB pages', '64칸 × 4KiB = 256KiB': '64 entries × 4 KiB = 256 KiB', '256KiB를 넘을 때마다 미스': 'A miss every time 256 KiB is passed', '표를 자주 읽음': 'Tables read often',
  '칸 하나가 2MiB를 덮음': 'One entry covers 2 MiB', '64칸 × 2MiB = 128MiB': '64 entries × 2 MiB = 128 MiB', '대부분 TLB에서 끝남': 'Most end in the TLB',
  '256KiB를 넘어갈 때마다 TLB에 없는 페이지라 표를 다시 읽습니다.': 'Every time it goes past 256 KiB the page is not in the TLB, so the tables are read again.',
  '커널이 큰 페이지로 바꾸자 TLB 칸 하나가 2MiB를 덮습니다.': 'When the kernel switches to huge pages, one TLB entry covers 2 MiB.',
  '같은 배열을 훑어도 대부분 TLB에서 프레임을 찾습니다.': 'Scanning the same array, the frame is found in the TLB most of the time.',
  '2MiB 큰 페이지를 쓰면 TLB 64칸이 덮는 범위는?': 'With 2 MiB huge pages, how much do 64 TLB entries cover?',
  '256KiB 그대로': 'Still 256 KiB', '128MiB': '128 MiB', '2MiB': '2 MiB',
  '칸 하나가 2MiB를 덮으니 64 × 2MiB = 128MiB입니다. 4KiB보다 512배 넓습니다.': 'Each entry covers 2 MiB, so 64 × 2 MiB = 128 MiB, 512 times wider than with 4 KiB.',
};
