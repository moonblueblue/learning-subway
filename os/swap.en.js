// English for OS 3.5 Swapping and page replacement. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '스와핑과 페이지 교체 · 레슨 3.5': 'Swapping and page replacement · Lesson 3.5',
  '운영체제 3장 메모리 · 레슨 3.5': 'Operating systems chapter 3 Memory · Lesson 3.5',
  '스와핑과 페이지 교체': 'Swapping and page replacement',
  'RAM이 가득 찼을 때 내보낼 페이지를 고르는 법, 스왑으로 내보내기, 내보낸 페이지를 다시 읽는 느린 폴트, 스래싱을 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, how a page is chosen to send out when RAM is full, swapping out, the slow fault that reads an evicted page back, and thrashing.',
  'RAM이 가득 차면 커널은 어느 페이지를 내보낼까요? 페이지가 RAM과 디스크의 스왑 사이를 오가는 길을 한 정거장씩 따라가 보세요.':
    'When RAM is full, which page does the kernel send out? Follow, station by station, how pages travel between RAM and swap on disk.',
  'RAM이 가득 차면 커널은 어느 페이지를 내보낼까?': 'When RAM is full, which page does the kernel send out?',
  '프로그램, 커널, RAM, 스왑': 'Program, kernel, RAM, swap',
  '커널이 RAM에서 최근에 쓰이지 않은 페이지를 골라 스왑으로 내보내고, 다시 필요할 때 읽어 오는 장면': 'The kernel picks a page in RAM that was not used recently, sends it to swap and reads it back when it is needed',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '프로세스': 'Process', '커널': 'Kernel', '메모리': 'Memory', '저장장치': 'Storage',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '프로그램': 'Program', 'RAM 4프레임': 'RAM, 4 frames', '스왑': 'Swap',
  // Legs in the stage list and the example strip
  '프로그램 → 커널': 'Program → kernel', '커널 → RAM 4프레임': 'Kernel → RAM, 4 frames', 'RAM 4프레임 → 커널': 'RAM, 4 frames → kernel', 'RAM 4프레임 → 스왑': 'RAM, 4 frames → swap',
  '스왑 → 커널': 'Swap → kernel', 'RAM 4프레임 → 프로그램': 'RAM, 4 frames → program', '커널 → 스왑': 'Kernel → swap', '스왑 → RAM 4프레임': 'Swap → RAM, 4 frames',
  'RAM 4프레임 · B': 'RAM, 4 frames · B', 'RAM 4프레임 · E 준비': 'RAM, 4 frames · E ready', '커널 · F 내보냄 · A 읽음': 'Kernel · F out · A read',
  // Badges and moving labels
  'A1 B0 C1 D1': 'A1 B0 C1 D1', '비어 있음': 'Empty', 'E 필요': 'E needed', '빈 프레임 없음': 'No free frame', '한 바퀴': 'One round', 'A1→0 · B0 고름': 'A1→0 · pick B0', 'B': 'B', '최근 안 쓴 B 고름': 'Pick B (unused)',
  'A B C D': 'A B C D', 'B 내보냄': 'Send B out', '슬롯 7: B': 'Slot 7: B', '슬롯 7': 'Slot 7', '표: B = 스왑 7': 'Table: B = swap 7', 'E': 'E', 'B 자리 → E': 'B\'s spot → E', 'E 준비': 'E ready', 'E 씀': 'Using E',
  'B 읽기': 'Read B', 'A E C D': 'A E C D', '폴트: 스왑 7': 'Fault: swap 7', '슬롯 7 읽기': 'Read slot 7', '슬롯 7 → RAM': 'Slot 7 → RAM', '기다림': 'Waiting', 'B 돌아옴': 'B is back', 'B 읽음 · 느림': 'Read B · slow',
  '6페이지를 번갈아': 'Cycling 6 pages', '6페이지 > 4칸': '6 pages > 4', 'E 폴트': 'E fault', '폴트 계속': 'Faults go on', 'A 내보냄 · E 읽음': 'A out · E read', '읽기·쓰기 계속': 'Swapping on',
  'A 폴트': 'A fault', 'F 내보냄 · A 읽음': 'F out · A read', 'CPU 대기만': 'CPU just waits',
  // Step 1
  '내보낼 페이지': 'Choosing a page',
  '최근에 쓰이지 않은 페이지를 골라 내보낸다': 'A page not used recently is chosen to send out',
  'RAM이 가득 찼는데 새 페이지가 필요하면 커널은 이미 있는 페이지 하나를 내보내야 합니다. 앞으로 오래 안 쓸 페이지를 고르면 좋지만 미래는 알 수 없으니, 최근에 쓰였는지를 기준으로 삼습니다. 페이지를 쓸 때마다 하드웨어가 페이지 표의 참조 비트를 1로 켭니다. 커널은 프레임을 한 바퀴 돌며 1인 페이지는 비트만 0으로 지우고 넘어가고(한 번 더 기회), 0인 페이지를 고릅니다.':
    'When RAM is full and a new page is needed, the kernel must send out a page already there. It would be best to pick the page that will go unused longest, but the future is unknown, so recent use is the guide. Each time a page is used, the hardware sets its reference bit in the page table to 1. The kernel goes round the frames; for a page with 1 it only clears the bit to 0 and moves on (one more chance), and it picks a page with 0.',
  'RAM 이름표가 "A1 B0 C1 D1"이고, 커널이 돌며 A의 비트를 지우고 B를 골라 이름표가 "A1→0 · B0 고름"이 됩니다. 프로그램 이름표에 "E 필요"가 남습니다.':
    'RAM\'s label reads "A1 B0 C1 D1"; going round, the kernel clears A\'s bit and picks B, and the label becomes "A1→0 · pick B0". The program\'s label shows "E needed".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 커널, RAM, 스왑 영역이 있습니다. RAM 프레임 넷이 페이지 A, B, C, D로 가득 찼고, 프로그램이 새 페이지 E를 씁니다.':
    'The program is in user space on the left; across the boundary are the kernel, RAM and the swap area. RAM\'s four frames are full with pages A, B, C and D, and the program uses a new page E.',
  'RAM 가득: A B C D': 'RAM full: A B C D', '새 페이지 E 필요': 'New page E needed', '참조 비트 A1 B0 C1 D1': 'Reference bits A1 B0 C1 D1', '1은 0으로 지우고 넘어감 · 0인 B를 고름': 'Clear 1s to 0 and move on · pick B, which is 0',
  'A B C D 가득': 'A B C D, full', '빈 프레임이 없음': 'No free frame', '하나를 내보내야 함': 'One must be sent out', 'A: 1 → 0으로 지우고 넘어감': 'A: 1 → clear to 0 and move on', 'B: 0 → 고름': 'B: 0 → pick it', '내보낼 페이지: B': 'Page to send out: B',
  '프로그램이 새 페이지 E를 씁니다. 빈 프레임이 없어 커널이 하나를 내보내야 합니다.': 'The program uses a new page E. There is no free frame, so the kernel must send one out.',
  '커널이 참조 비트를 보며 돕니다. A는 최근에 쓰여 비트만 지우고 넘어가고, B는 0이라 고릅니다.': 'The kernel goes round looking at reference bits. A was used recently, so it only clears its bit and moves on; B is 0, so it picks B.',
  '커널이 B를 내보낼 페이지로 정합니다.': 'The kernel decides B is the page to send out.',
  '참조 비트 A1 B0 C1 D1에서 커널은 어느 페이지를 내보낼까요?': 'With reference bits A1 B0 C1 D1, which page does the kernel send out?',
  'A': 'A', 'D': 'D',
  '참조 비트 0은 최근에 쓰이지 않았다는 뜻입니다. 곧 다시 쓸 가능성이 가장 낮은 B를 고릅니다.': 'A reference bit of 0 means not used recently. It picks B, the least likely to be used again soon.',
  // Step 2
  '스왑으로 내보내기': 'Swapping out',
  '원본이 없는 페이지는 스왑에 써 두고 자리를 비운다': 'A page with no copy on disk is written to swap and its frame freed',
  'B는 프로그램이 힙에 쓴 페이지라 디스크 어디에도 원본이 없습니다. 그냥 버리면 데이터가 사라지므로 커널은 B를 스왑 영역(디스크의 전용 구역)의 슬롯 7에 씁니다. 그리고 페이지 표의 B 칸에 "스왑 7"이라고 적어 둡니다. 비운 프레임에는 E를 넣습니다. 실행 파일의 코드처럼 디스크에 원본이 있고 바뀌지 않은 페이지는 쓰지 않고 그냥 버립니다.':
    'B is a page the program wrote in its heap, so there is no copy of it anywhere on disk. Throwing it away would lose the data, so the kernel writes B to slot 7 of the swap area (a dedicated region on disk). It then writes "swap 7" into B\'s page table entry and puts E into the freed frame. A page that has an unchanged copy on disk, such as program code, is simply dropped without writing.',
  'B가 RAM에서 스왑으로 가 스왑 이름표가 "슬롯 7: B"가 되고, 커널 이름표가 "표: B = 스왑 7"이 됩니다. RAM 이름표는 "B 자리 → E"가 됩니다.':
    'B goes from RAM to swap, swap\'s label becomes "Slot 7: B", and the kernel\'s becomes "Table: B = swap 7". RAM\'s label becomes "B\'s spot → E".',
  '1단계와 같은 정거장입니다. 커널이 고른 페이지 B를 스왑 영역으로 내보냅니다.': 'The same stations as step 1. The kernel sends the chosen page B to the swap area.',
  'B는 힙 페이지 · 디스크에 원본 없음': 'B is a heap page · no copy on disk', '스왑 슬롯 7에 씀': 'Write to swap slot 7', '페이지 표 B 칸: 스왑 7': 'Page table entry B: swap 7', '빈 프레임에 E': 'E into the free frame',
  'B는 힙 페이지': 'B is a heap page', '슬롯 7에 B를 씀': 'Write B to slot 7', '디스크 쓰기': 'Disk write', '프레임 비움': 'Free the frame', '빈 프레임에 E를 넣음': 'Put E into the free frame', 'E를 씀': 'Use E',
  'B는 디스크에 원본이 없어 스왑의 슬롯 7에 써 둡니다.': 'B has no copy on disk, so it is written to slot 7 of swap.',
  '커널이 페이지 표의 B 칸에 "스왑 7"이라고 적고 프레임을 비웁니다.': 'The kernel writes "swap 7" into B\'s page table entry and frees the frame.',
  '비운 프레임에 새 페이지 E를 넣습니다.': 'It puts the new page E into the freed frame.',
  '프로그램은 E를 쓰기 시작합니다.': 'The program starts using E.',
  '힙에 쓴 페이지 B를 그냥 버리면 어떻게 될까요?': 'What happens if heap page B is simply thrown away?',
  '다시 만들 수 있다': 'It can be made again', '데이터가 사라진다': 'The data is lost', '실행 파일에서 다시 읽는다': 'It is read again from the program file',
  '힙에 쓴 값은 디스크 어디에도 원본이 없습니다. 그래서 스왑에 써 두어야 합니다.': 'Values written to the heap have no copy anywhere on disk. So they must be written to swap.',
  // Step 3
  '다시 읽기': 'Reading back',
  '내보낸 페이지를 다시 쓰면 디스크에서 읽어 오느라 느리다': 'Using an evicted page again is slow because it is read from disk',
  '프로그램이 B를 다시 읽으면 페이지 표의 B 칸에는 프레임이 아니라 "스왑 7"이 적혀 있습니다. MMU는 페이지 폴트를 내고, 커널은 프레임 하나를 비운 뒤 스왑 슬롯 7을 읽어 B를 RAM에 되돌립니다. 그리고 같은 명령을 다시 실행합니다. 3.2의 폴트와 달리 이번에는 디스크를 읽어야 하므로 수 밀리초가 걸립니다. RAM 읽기보다 수만 배 느립니다.':
    'When the program reads B again, B\'s page table entry holds "swap 7" instead of a frame. The MMU raises a page fault; the kernel frees a frame, reads swap slot 7 and brings B back into RAM, then runs the same instruction again. Unlike the fault in 3.2, this one must read the disk, so it takes a few milliseconds, tens of thousands of times slower than reading RAM.',
  '프로그램의 B 읽기가 커널로 가 커널 이름표가 "폴트: 스왑 7"이 됩니다. 스왑에서 RAM으로 B가 돌아와 RAM 이름표가 "B 돌아옴"이 되고, 프로그램 이름표가 "B 읽음 · 느림"이 됩니다.':
    'The program\'s read of B goes to the kernel, whose label becomes "Fault: swap 7". B comes back from swap to RAM, RAM\'s label becomes "B is back", and the program\'s becomes "Read B · slow".',
  '1단계와 같은 정거장입니다. 스왑 슬롯 7에 B가 있고, 프로그램이 B를 다시 읽습니다.': 'The same stations as step 1. B is in swap slot 7, and the program reads B again.',
  'B 다시 읽기': 'Read B again', '표 B 칸: 스왑 7 → 페이지 폴트': 'Table entry B: swap 7 → page fault', '스왑 슬롯 7을 RAM으로 읽어 옴(디스크)': 'Read swap slot 7 into RAM (disk)', '다시 실행 · 수 밀리초': 'Run again · a few milliseconds',
  'B를 다시 읽음': 'Reads B again', '표 B 칸: 스왑 7': 'Table entry B: swap 7', 'B 칸: 스왑 7 → 페이지 폴트': 'Entry B: swap 7 → page fault', '디스크에서 B를 읽음': 'Read B from disk', '수 밀리초': 'A few milliseconds',
  'B를 프레임에 되돌림': 'Put B back into a frame', '표 B 칸: 프레임': 'Table entry B: frame', '같은 명령을 다시 실행': 'Run the same instruction again', 'B 읽음': 'Read B',
  'B 칸에 프레임이 없고 "스왑 7"이 있어 페이지 폴트가 납니다.': 'Entry B has no frame but "swap 7", so a page fault occurs.',
  '커널이 디스크의 슬롯 7을 읽습니다. 그동안 프로그램은 기다립니다.': 'The kernel reads slot 7 from disk. Meanwhile the program waits.',
  'B가 RAM 프레임으로 돌아오고 표의 B 칸에 다시 프레임 번호가 적힙니다.': 'B comes back into a RAM frame, and B\'s table entry holds a frame number again.',
  '같은 명령을 다시 실행해 B를 읽습니다. 프로그램에는 한 번의 읽기가 몇 밀리초 걸린 것으로 보입니다.': 'The same instruction runs again and reads B. To the program, one read seems to have taken a few milliseconds.',
  '이 페이지 폴트는 3.2의 빈 칸 폴트보다 빠를까요, 느릴까요?': 'Is this page fault faster or slower than the empty-entry fault in 3.2?',
  '빠르다': 'Faster', '훨씬 느리다': 'Much slower', '같다': 'The same',
  '빈 칸은 새 프레임만 주면 되지만, 이번에는 디스크에서 B를 읽어 와야 합니다.': 'An empty entry only needs a new frame, but this time B must be read from disk.',
  // Step 4
  '스래싱': 'Thrashing',
  '자주 쓰는 페이지가 RAM보다 많으면 내보내고 들이기만 한다': 'When busy pages outnumber RAM, it only sends out and brings in',
  '프로그램이 자주 쓰는 페이지가 6개인데 프레임이 4개뿐이면, 하나를 들이자마자 곧 쓸 다른 페이지를 내보내야 합니다. 폴트가 끝없이 이어지고 CPU는 거의 디스크만 기다립니다. 이것을 스래싱이라고 하며, 컴퓨터가 멈춘 것처럼 느려집니다. 해결은 메모리를 늘리거나 동시에 돌리는 프로그램을 줄이는 것입니다. 리눅스는 끝내 감당하지 못하면 다음 레슨의 OOM 킬러로 프로세스를 끝냅니다.':
    'If the program uses 6 pages often but there are only 4 frames, bringing one in means sending out another that will be needed soon. Faults go on without end and the CPU mostly waits for the disk. This is called thrashing, and the computer slows down as if frozen. The fix is more memory or fewer programs running at once. When Linux cannot cope at all, it ends a process with the OOM killer of the next lesson.',
  'RAM 이름표가 "6페이지 > 4칸"이고, 커널 이름표가 "폴트 계속", 스왑 이름표가 "읽기·쓰기 계속"이 됩니다. 마지막에 프로그램 이름표가 "CPU 대기만"이 됩니다.':
    'RAM\'s label reads "6 pages > 4", the kernel\'s becomes "Faults go on" and swap\'s "Swapping on". Finally the program\'s label becomes "CPU just waits".',
  '1단계와 같은 정거장입니다. 프로그램이 페이지 여섯 개를 번갈아 쓰는데 RAM 프레임은 넷입니다.': 'The same stations as step 1. The program uses six pages in turn, but RAM has four frames.',
  '자주 쓰는 페이지 6 > 프레임 4': '6 busy pages > 4 frames', '들이면 곧 쓸 것을 내보냄': 'Bringing one in sends out one needed soon', '폴트와 디스크 읽기·쓰기 계속': 'Faults and disk reads and writes go on', 'CPU는 기다리기만 함': 'The CPU only waits',
  '페이지 A~F 여섯 개를 번갈아 씀': 'Uses six pages A~F in turn', '프레임은 4개': '4 frames', 'E가 스왑에 있음': 'E is in swap', 'A를 내보내고 E를 들임': 'Send A out, bring E in',
  '디스크 쓰기와 읽기': 'Disk write and read', 'A가 방금 스왑으로 감': 'A has just gone to swap', 'F를 내보내고 A를 들임': 'Send F out, bring A in', '디스크만 바쁨': 'Only the disk is busy', 'CPU는 기다림': 'The CPU waits',
  'E가 필요해 A를 내보내고 E를 들입니다.': 'E is needed, so A is sent out and E brought in.',
  '디스크에 A를 쓰고 E를 읽습니다.': 'A is written to disk and E read.',
  '바로 A가 필요해져 또 폴트가 나고, 이번에는 F를 내보냅니다.': 'Right away A is needed, so another fault occurs, and this time F is sent out.',
  '이런 일이 끝없이 이어져 CPU는 디스크만 기다립니다.': 'This goes on without end, and the CPU only waits for the disk.',
  '곧이어 프로그램이 A를 쓰면?': 'What if the program uses A right after?',
  'RAM에 있어 바로 읽는다': 'It is in RAM and read at once', '방금 내보내서 또 폴트가 난다': 'It was just sent out, so another fault', '프로그램이 끝난다': 'The program ends',
  '여섯 페이지를 번갈아 쓰는데 네 칸뿐이라, 무엇을 내보내도 곧 다시 필요합니다.': 'Six pages are used in turn but there are only four frames, so whatever is sent out is needed again soon.',
};
