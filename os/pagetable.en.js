// English for OS 3.2 Page tables. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '페이지 테이블 · 레슨 3.2': 'Page tables · Lesson 3.2',
  '운영체제 3장 메모리 · 레슨 3.2': 'Operating systems chapter 3 Memory · Lesson 3.2',
  '페이지 테이블': 'Page tables',
  'MMU가 가상 주소를 나눠 2단계 페이지 표를 읽는 길, 쓰는 곳에만 표를 두는 이유, 빈 칸에서 일어나는 페이지 폴트, 64비트의 4단계 표를 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, how the MMU splits a virtual address to read a two-level page table, why tables exist only where memory is used, the page fault an empty entry causes, and the four-level tables of 64-bit machines.',
  '가상 주소 하나를 실제 주소로 바꾸려면 MMU는 어떤 표를 몇 번 읽을까요? 주소가 표를 차례로 지나 RAM에 닿는 길을 한 정거장씩 따라가 보세요.':
    'To turn one virtual address into a physical one, which tables does the MMU read, and how many times? Follow, station by station, how the address passes through the tables to reach RAM.',
  '가상 주소 하나를 실제 주소로 바꾸려면 MMU는 어떤 표를 몇 번 읽을까?': 'To turn one virtual address into a physical one, which tables does the MMU read, and how many times?',
  '프로그램, MMU, 페이지 표, RAM': 'Program, MMU, page tables, RAM',
  'MMU가 가상 주소를 나눠 페이지 표를 차례로 읽고 RAM의 실제 주소에 닿는 장면': 'The MMU splits a virtual address, reads the page tables in turn and reaches the physical address in RAM',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '프로세스': 'Process', '커널': 'Kernel', '메모리': 'Memory',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '프로그램': 'Program', '1단계 표': 'Level-1 table', '2단계 표 B': 'Level-2 table B', '2단계 표들': 'Level-2 tables', '2단계 표': 'Level-2 table',
  '64비트 프로그램': '64-bit program', 'L4·L3·L2 표': 'L4·L3·L2 tables', 'L1 표': 'L1 table',
  // Legs in the stage list and the example strip
  '프로그램 → MMU': 'Program → MMU', '64비트 프로그램 → MMU': '64-bit program → MMU', 'MMU → 1단계 표': 'MMU → level-1 table', '1단계 표 → 2단계 표 B': 'Level-1 table → level-2 table B', '2단계 표 B → RAM': 'Level-2 table B → RAM', 'RAM → 프로그램': 'RAM → program',
  '프로그램 → 1단계 표': 'Program → level-1 table', '1단계 표 → 2단계 표들': 'Level-1 table → level-2 tables', '2단계 표들 → RAM': 'Level-2 tables → RAM',
  'MMU → 2단계 표': 'MMU → level-2 table', 'MMU → 커널': 'MMU → kernel', '커널 → 2단계 표': 'Kernel → level-2 table', 'MMU → RAM': 'MMU → RAM',
  'MMU → L4·L3·L2 표': 'MMU → L4·L3·L2 tables', 'L4·L3·L2 표 → L1 표': 'L4·L3·L2 tables → L1 table', 'L1 표 → RAM': 'L1 table → RAM',
  'RAM · 42': 'RAM · 42', '2단계 표들 · 16KiB': 'Level-2 tables · 16 KiB', 'MMU · 다시 실행': 'MMU · run again', 'L1 표 · + 오프셋': 'L1 table · + offset',
  // Badges and moving labels
  'load 0x00805A4C': 'load 0x00805A4C', '0x00805A4C': '0x00805A4C', '2 | 5 | A4C': '2 | 5 | A4C', '칸 2': 'Entry 2', '칸 2 → 표 B': 'Entry 2 → table B', '칸 5': 'Entry 5', '칸 5 → 프레임 9': 'Entry 5 → frame 9',
  '0x9A4C': '0x9A4C', '0x9A4C 읽음': 'Read 0x9A4C', '42': '42', '42 받음': 'Got 42',
  '세 곳만 씀': 'Uses three places', '코드·힙·스택': 'Code·heap·stack', '4KiB · 3칸 씀': '4 KiB · 3 used', '표 3장': '3 tables', '3장 · 12KiB': '3 × 4 KiB', '16KiB': '16 KiB',
  '표 합계 16KiB': 'Tables total 16 KiB', '한 장이면 4MiB': 'One flat table: 4 MiB',
  'store 0x00C01000': 'store 0x00C01000', '0x00C01000': '0x00C01000', '3|1|000': '3|1|000', '칸 1?': 'Entry 1?', '칸 1: 없음': 'Entry 1: empty', '페이지 폴트': 'Page fault',
  '폴트 → 12 배정': 'Fault → frame 12', '잠시 멈춤': 'Paused', '칸 1 채움': 'Fill entry 1', '없음→프레임 12': 'empty→frame 12', '다시 실행': 'Run again', '재실행 · 씀': 'Rerun · written', '프레임 12에 씀': 'Write to frame 12', '쓰기 성공': 'Write succeeded',
  'load (48비트)': 'load (48-bit)', '48비트 주소': '48-bit address', '9·9·9·9·12': '9·9·9·9·12', 'L4→L3→L2': 'L4→L3→L2', 'L4~L2 · 3번': 'L4~L2 · 3 reads', 'L1': 'L1', '4번째: 프레임': '4th: frame',
  '+ 오프셋': '+ offset', '데이터 · 5번째': 'Data · 5th read', '값 받음': 'Got the value',
  // Step 1
  '2단계 표로 찾기': 'Two-level lookup',
  'MMU는 주소를 셋으로 나눠 표 두 장을 차례로 읽는다': 'The MMU splits the address in three and reads two tables in turn',
  '프로그램이 가상 주소를 읽으면 CPU 안의 MMU가 실제 주소로 바꿉니다. 32비트 x86에서는 주소를 앞 10비트, 다음 10비트, 마지막 12비트로 나눕니다. 앞 10비트는 1단계 표의 칸 번호, 다음 10비트는 그 칸이 가리키는 2단계 표의 칸 번호입니다. 2단계 표의 칸에 적힌 프레임 번호에 마지막 12비트(페이지 안의 위치)를 붙이면 실제 주소가 됩니다.':
    'When a program reads a virtual address, the MMU inside the CPU turns it into a physical one. On 32-bit x86 the address is split into the first 10 bits, the next 10 bits and the last 12 bits. The first 10 bits are an entry number in the level-1 table, and the next 10 bits are an entry number in the level-2 table that entry points to. The frame number in that level-2 entry, joined with the last 12 bits (the position inside the page), is the physical address.',
  'MMU 이름표에 "2 | 5 | A4C"가 뜹니다. 1단계 표 "칸 2 → 표 B", 2단계 표 "칸 5 → 프레임 9"를 지나 RAM 이름표가 "0x9A4C 읽음"이 되고, 프로그램이 "42 받음"이 됩니다.':
    'The MMU\'s label shows "2 | 5 | A4C". Through the level-1 table\'s "Entry 2 → table B" and the level-2 table\'s "Entry 5 → frame 9", RAM\'s label becomes "Read 0x9A4C" and the program\'s becomes "Got 42".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 MMU, 1단계 표, 2단계 표, RAM이 있습니다. 프로그램이 가상 주소 0x00805A4C를 읽습니다.':
    'The program is in user space on the left; across the boundary are the MMU, the level-1 table, the level-2 table and RAM. The program reads virtual address 0x00805A4C.',
  '0x00805A4C = 2 | 5 | A4C': '0x00805A4C = 2 | 5 | A4C', '1단계 표 칸 2 → 2단계 표 B': 'Level-1 entry 2 → level-2 table B', '표 B 칸 5 → 프레임 9': 'Table B entry 5 → frame 9', '9 × 4096 + 0xA4C = 0x9A4C': '9 × 4096 + 0xA4C = 0x9A4C',
  '가상 주소를 읽으려 함': 'About to read a virtual address',
  '앞 10비트 2 · 다음 10비트 5 · 끝 12비트 A4C': 'First 10 bits 2 · next 10 bits 5 · last 12 bits A4C', '칸 2: 2단계 표 B가 있는 곳': 'Entry 2: where level-2 table B is', '칸 5: 프레임 9': 'Entry 5: frame 9',
  '그 자리의 값 42': 'The value there is 42', '값 42 받음': 'Got the value 42',
  'MMU가 가상 주소를 세 조각으로 나눕니다.': 'The MMU splits the virtual address into three pieces.',
  '1단계 표의 칸 2를 읽으니 2단계 표 B가 어디 있는지 적혀 있습니다.': 'Entry 2 of the level-1 table says where level-2 table B is.',
  '2단계 표 B의 칸 5를 읽으니 프레임 9가 적혀 있습니다.': 'Entry 5 of level-2 table B says frame 9.',
  '프레임 9의 시작에 A4C를 더한 실제 주소 0x9A4C를 읽습니다.': 'It reads physical address 0x9A4C, the start of frame 9 plus A4C.',
  '값 42가 프로그램에 돌아옵니다. 프로그램은 실제 주소를 끝내 몰랐습니다.': 'The value 42 comes back to the program. The program never learned the physical address.',
  '실제 주소는 어떻게 만들까요?': 'How is the physical address made?',
  '가상 주소를 그대로 쓴다': 'Use the virtual address as is', '프레임 9 위치 + A4C': 'Frame 9\'s position + A4C', '칸 번호 2와 5를 더한다': 'Add entry numbers 2 and 5',
  '프레임 번호로 4KiB 칸의 시작을 찾고, 끝 12비트로 그 안의 위치를 정합니다. 9 × 4096 + 0xA4C = 0x9A4C.': 'The frame number finds the start of a 4 KiB slot, and the last 12 bits pick the position inside it. 9 × 4096 + 0xA4C = 0x9A4C.',
  // Step 2
  '쓰는 곳만 표': 'Tables only where used',
  '쓰지 않는 구역에는 2단계 표를 만들지 않는다': 'No level-2 table is made for unused regions',
  '4GiB 주소 공간을 4KiB 페이지로 나누면 칸이 약 100만 개입니다. 칸 하나가 4바이트이니, 표를 한 장으로 만들면 프로세스마다 4MiB가 듭니다. 실제 프로그램은 코드, 힙, 스택처럼 몇 군데만 씁니다. 2단계 표로 나누면 1단계 표의 1024칸 가운데 쓰는 곳만 2단계 표를 가리키고 나머지는 비워 둡니다. 그래서 표 4장, 16KiB면 됩니다.':
    'Dividing a 4 GiB address space into 4 KiB pages gives about a million entries. At 4 bytes an entry, one flat table would cost 4 MiB per process. A real program uses only a few places, such as code, heap and stack. With two levels, only the used entries among the level-1 table\'s 1024 point to level-2 tables and the rest stay empty. So four tables, 16 KiB, are enough.',
  '1단계 표 이름표가 "4KiB · 3칸 씀"이 되고, 2단계 표 이름표가 "3장 · 12KiB"가 됩니다. RAM 이름표 "표 합계 16KiB"와 프로그램 이름표 "한 장이면 4MiB"를 나란히 비교합니다.':
    'The level-1 table\'s label becomes "4 KiB · 3 used" and the level-2 tables\' becomes "3 × 4 KiB". Compare RAM\'s label "Tables total 16 KiB" with the program\'s "One flat table: 4 MiB".',
  '왼쪽 사용자 영역에 코드·힙·스택 세 곳만 쓰는 프로그램이, 경계 너머에 MMU, 1단계 표, 2단계 표, RAM이 있습니다.': 'A program that uses only code, heap and stack is in user space on the left; across the boundary are the MMU, the level-1 table, the level-2 tables and RAM.',
  '한 장짜리 표: 100만 칸 × 4B = 4MiB': 'One flat table: 1M entries × 4 B = 4 MiB', '1단계 표 1024칸 중 3칸만 씀': 'Only 3 of the level-1 table\'s 1024 entries used', '2단계 표 3장': '3 level-2 tables', '표 4장 × 4KiB = 16KiB': '4 tables × 4 KiB = 16 KiB',
  '코드 · 힙 · 스택 세 곳만 씀': 'Uses only code · heap · stack', '나머지 주소는 비어 있음': 'The other addresses are empty',
  '1024칸 중 3칸만 채움': 'Fill only 3 of 1024 entries', '나머지 1021칸은 비움': 'Leave the other 1021 empty', '채운 칸마다 2단계 표 1장': 'One level-2 table per filled entry', '3장 × 4KiB = 12KiB': '3 tables × 4 KiB = 12 KiB',
  '표 4장 × 4KiB = 16KiB': '4 tables × 4 KiB = 16 KiB', '한 장짜리 표 4MiB의 1/256': '1/256 of a 4 MiB flat table',
  '커널은 1단계 표에서 프로그램이 쓰는 세 구역의 칸만 채웁니다.': 'In the level-1 table the kernel fills only the entries for the three regions the program uses.',
  '채운 칸마다 2단계 표를 한 장씩 만듭니다. 비운 칸 아래에는 표가 없습니다.': 'It makes one level-2 table for each filled entry. There is no table under an empty entry.',
  '표 4장을 합쳐도 16KiB입니다. 한 장짜리 표 4MiB보다 훨씬 작습니다.': 'All four tables together are 16 KiB, far smaller than a 4 MiB flat table.',
  '표를 나누지 않고 한 장으로 만들면 크기는?': 'How big would one flat table be?',
  '16KiB': '16 KiB', '4MiB': '4 MiB', '4GiB': '4 GiB',
  '4GiB ÷ 4KiB = 약 100만 칸이고, 칸마다 4바이트이니 4MiB입니다. 쓰지 않는 칸까지 모두 있어야 합니다.': '4 GiB ÷ 4 KiB = about a million entries, at 4 bytes each that is 4 MiB. Every entry must exist, even unused ones.',
  // Step 3
  '빈 칸과 폴트': 'Empty entries and faults',
  '빈 칸을 만나면 커널이 채우고 다시 실행한다': 'On an empty entry the kernel fills it and the instruction runs again',
  '힙을 처음 쓰는 자리처럼 2단계 표의 칸이 비어 있으면 MMU는 주소를 바꿀 수 없습니다. 그러면 페이지 폴트(1.3의 예외 14)를 일으켜 커널을 부릅니다. 커널은 그 주소가 프로그램이 쓸 수 있는 구역인지 확인하고, 빈 프레임을 하나 골라 칸에 적은 뒤 같은 명령을 다시 실행시킵니다. 쓸 수 없는 구역이었다면 프로그램을 끝냅니다(Segmentation fault).':
    'When a level-2 entry is empty, as at a heap address used for the first time, the MMU cannot translate the address. It raises a page fault (exception 14 from 1.3) and calls the kernel. The kernel checks that the address is in a region the program may use, picks a free frame, writes it into the entry and has the same instruction run again. If the region was not allowed, it ends the program (Segmentation fault).',
  'MMU가 "3|1|000"으로 나눈 뒤 2단계 표 이름표가 "칸 1: 없음"이 됩니다. 페이지 폴트로 커널 이름표가 "폴트 → 12 배정"이 되자 표 이름표가 "없음→프레임 12"가 되고, 다시 실행해 RAM 이름표가 "재실행 · 씀"이 됩니다.':
    'After the MMU splits it as "3|1|000", the level-2 table\'s label becomes "Entry 1: empty". On the page fault the kernel\'s label becomes "Fault → frame 12", the table\'s becomes "empty→frame 12", and after running again RAM\'s label becomes "Rerun · written".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 MMU, 2단계 표, 커널, RAM이 있습니다. 프로그램이 처음 쓰는 힙 주소 0x00C01000에 씁니다.':
    'The program is in user space on the left; across the boundary are the MMU, the level-2 table, the kernel and RAM. The program writes to heap address 0x00C01000 for the first time.',
  '0x00C01000 = 3 | 1 | 000': '0x00C01000 = 3 | 1 | 000', '2단계 표 칸 1이 비어 있음': 'Level-2 entry 1 is empty', '페이지 폴트 → 커널이 프레임 12 배정': 'Page fault → the kernel gives frame 12', '같은 명령을 다시 실행': 'The same instruction runs again',
  '힙을 처음 씀': 'First write to the heap', '3 | 1 | 000': '3 | 1 | 000', '칸 1: 비어 있음': 'Entry 1: empty', '힙 구역이 맞음': 'It is the heap region', '빈 프레임 12를 고름': 'Pick free frame 12', '칸 1 → 프레임 12': 'Entry 1 → frame 12',
  '같은 store를 다시 실행': 'Run the same store again',
  'MMU가 주소를 나눕니다. 2단계 표의 칸 1을 봐야 합니다.': 'The MMU splits the address. It must look at entry 1 of the level-2 table.',
  '2단계 표의 칸 1이 비어 있습니다. 이 페이지는 아직 RAM에 자리가 없습니다.': 'Entry 1 of the level-2 table is empty. This page has no place in RAM yet.',
  '커널이 확인하니 힙 구역이 맞습니다. 빈 프레임 12를 고릅니다.': 'The kernel checks: it is the heap region. It picks free frame 12.',
  '커널이 칸 1에 프레임 12를 적습니다.': 'The kernel writes frame 12 into entry 1.',
  '같은 명령을 다시 실행하니 이번에는 칸이 채워져 있어 프레임 12에 씁니다. 프로그램은 폴트가 있었는지 모릅니다.': 'Running the same instruction again, the entry is filled this time, so it writes to frame 12. The program does not know there was a fault.',
  '칸이 비어 있으면 어떻게 될까요?': 'What happens when the entry is empty?',
  '프로그램이 바로 끝난다': 'The program ends at once', 'MMU가 페이지 폴트로 커널을 부른다': 'The MMU calls the kernel with a page fault', '아무 프레임에나 쓴다': 'It writes to any frame',
  'MMU는 혼자 결정하지 않습니다. 예외를 일으켜 커널에 맡기고, 커널이 채울지 끝낼지 정합니다.': 'The MMU does not decide on its own. It raises an exception and leaves it to the kernel, which decides whether to fill the entry or end the program.',
  // Step 4
  '64비트는 4단계': 'Four levels on 64-bit',
  '64비트에서는 표 4장을 거쳐야 프레임이 나온다': 'On 64-bit, the frame comes only after four tables',
  'x86-64는 가상 주소 48비트를 9, 9, 9, 9, 12비트로 나눕니다. 표가 네 단계라 MMU는 L4, L3, L2, L1 표를 차례로 읽어야 프레임 번호를 얻고, 그다음에야 데이터를 읽습니다. 주소 하나에 메모리 읽기가 다섯 번입니다. 이 비용을 줄이는 장치가 다음 레슨의 TLB입니다. 더 큰 주소가 필요한 서버를 위해 5단계 표(57비트)도 있습니다.':
    'x86-64 splits a 48-bit virtual address into 9, 9, 9, 9 and 12 bits. With four levels, the MMU must read the L4, L3, L2 and L1 tables in turn to get the frame number, and only then reads the data: five memory reads for one address. The TLB in the next lesson cuts this cost. For servers that need larger addresses there are also five-level tables (57 bits).',
  'MMU 이름표에 "9·9·9·9·12"가 뜹니다. 위쪽 표 이름표가 "L4~L2 · 3번", L1 표 이름표가 "4번째: 프레임"이 되고, RAM 이름표가 "데이터 · 5번째"가 됩니다.':
    'The MMU\'s label shows "9·9·9·9·12". The upper tables\' label becomes "L4~L2 · 3 reads", the L1 table\'s becomes "4th: frame", and RAM\'s becomes "Data · 5th read".',
  '왼쪽 사용자 영역에 64비트 프로그램이, 경계 너머에 MMU, L4·L3·L2 표, L1 표, RAM이 있습니다.': 'A 64-bit program is in user space on the left; across the boundary are the MMU, the L4·L3·L2 tables, the L1 table and RAM.',
  '48비트 주소 = 9 | 9 | 9 | 9 | 12': '48-bit address = 9 | 9 | 9 | 9 | 12', 'L4 → L3 → L2 → L1 표 4번 읽기': 'L4 → L3 → L2 → L1: 4 table reads', '프레임 + 오프셋': 'Frame + offset', '데이터까지 메모리 읽기 5번 → 그래서 TLB': '5 memory reads to the data → hence the TLB',
  'load 0x7ffd_2a41_0c38': 'load 0x7ffd_2a41_0c38', '48비트 가상 주소': '48-bit virtual address', '9 | 9 | 9 | 9 | 12': '9 | 9 | 9 | 9 | 12',
  '표 세 장을 차례로 읽음': 'Read three tables in turn', '메모리 읽기 3번': '3 memory reads', '네 번째 읽기에서 프레임 번호': 'Frame number on the fourth read', '프레임 + 끝 12비트': 'Frame + last 12 bits', '다섯 번째 읽기에서 데이터': 'Data on the fifth read',
  'MMU가 48비트 주소를 다섯 조각으로 나눕니다.': 'The MMU splits the 48-bit address into five pieces.',
  'L4 표에서 L3 표를, L3 표에서 L2 표를, L2 표에서 L1 표를 찾습니다. 벌써 메모리를 세 번 읽었습니다.': 'From the L4 table it finds the L3 table, from L3 the L2 table, from L2 the L1 table. That is already three memory reads.',
  'L1 표를 읽어 마침내 프레임 번호를 얻습니다.': 'Reading the L1 table finally gives the frame number.',
  '프레임에 끝 12비트를 더한 곳에서 데이터를 읽습니다. 주소 하나에 메모리를 다섯 번 읽었습니다.': 'It reads the data at the frame plus the last 12 bits. One address took five memory reads.',
  '프레임 번호를 알기까지 표를 모두 몇 번 읽을까요?': 'How many table reads does it take to learn the frame number?',
  '1번': 'Once', '2번': 'Twice', '4번': '4 times',
  '표가 네 단계라 L4, L3, L2, L1을 하나씩 읽어야 합니다. 데이터까지 합치면 메모리 읽기가 5번입니다.': 'With four levels, L4, L3, L2 and L1 must each be read. Counting the data, that is 5 memory reads.',
};
