// English for OS 3.4 The heap and memory allocation. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '힙과 메모리 할당 · 레슨 3.4': 'The heap and memory allocation · Lesson 3.4',
  '운영체제 3장 메모리 · 레슨 3.4': 'Operating systems chapter 3 Memory · Lesson 3.4',
  '힙과 메모리 할당': 'The heap and memory allocation',
  'malloc이 힙을 늘리는 brk, free한 자리를 다시 쓰는 할당기, 큰 덩어리를 따로 받는 mmap, 흩어진 빈 칸이 만드는 단편화를 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, brk that grows the heap for malloc, the allocator that reuses freed blocks, mmap that takes large blocks separately, and the fragmentation scattered free space causes.',
  'malloc이 돌려준 메모리는 어디서 오고, free한 자리는 어디로 갈까요? 프로그램과 할당기, 커널 사이를 오가는 길을 한 정거장씩 따라가 보세요.':
    'Where does the memory malloc returns come from, and where does a freed block go? Follow, station by station, the road between the program, the allocator and the kernel.',
  'malloc이 돌려준 메모리는 어디서 오고, free한 자리는 어디로 갈까?': 'Where does the memory malloc returns come from, and where does a freed block go?',
  '프로그램, 할당기, 커널': 'Program, allocator, kernel',
  '할당기가 힙 안에서 메모리를 나눠 주고, 모자랄 때만 brk나 mmap으로 커널에 더 달라고 하는 장면': 'The allocator hands out memory inside the heap and asks the kernel for more with brk or mmap only when it runs short',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '프로세스': 'Process', '창구': 'Gate', '커널': 'Kernel',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '프로그램': 'Program', '할당기 malloc': 'malloc allocator', '시스템 콜': 'System call',
  // Legs in the stage list and the example strip
  '프로그램 → 할당기 malloc': 'Program → malloc allocator', '할당기 malloc → 시스템 콜': 'malloc allocator → system call', '시스템 콜 → 커널': 'System call → kernel',
  '커널 → 할당기 malloc': 'Kernel → malloc allocator', '할당기 malloc → 프로그램': 'malloc allocator → program', '할당기 malloc → 커널': 'malloc allocator → kernel',
  '할당기 malloc · p': 'malloc allocator · p', '할당기 malloc · q': 'malloc allocator · q', '할당기 malloc · munmap': 'malloc allocator · munmap', '시스템 콜 · +132KiB': 'System call · +132 KiB',
  // Badges and moving labels
  'malloc(100)': 'malloc(100)', '빈 칸 없음': 'No free block', '빈 칸 없음→brk': 'No free block→brk', 'brk': 'brk', '+132KiB': '+132 KiB', '힙 끝 +132KiB': 'Heap end +132 KiB', '힙 132KiB': 'Heap 132 KiB',
  'p': 'p', 'p: 힙 100B': 'p: 100 B in heap',
  'p 다 씀': 'Done with p', '호출 없음': 'No call', 'free(p)': 'free(p)', '빈 칸: 100B': 'Free: 100 B', 'malloc(80)': 'malloc(80)', 'free 자리 재사용': 'Freed spot reused', 'q': 'q', 'q = 옛 p 자리': 'q = old p spot',
  'malloc(1MiB)': 'malloc(1 MiB)', '≥128KiB→mmap': '≥128 KiB→mmap', 'mmap 1MiB': 'mmap 1 MiB', 'mmap': 'mmap', 'big 받음': 'Got big', 'free(big)': 'free(big)', 'munmap': 'munmap', '1MiB 돌려받음': 'Took back 1 MiB',
  '빈 칸 100·100·100': 'Free 100·100·100', 'malloc(250)': 'malloc(250)', '칸마다 100 < 250': 'Each block 100 < 250', '250B 요청': 'Asks 250 B', '힙 끝 또 올림': 'Heap end raised again',
  // Step 1
  '힙 늘리기': 'Growing the heap',
  '빈 칸이 없으면 할당기가 커널에 힙을 늘려 달라고 한다': 'With no free block, the allocator asks the kernel to grow the heap',
  'malloc은 커널이 아니라 프로그램 안에 함께 들어 있는 라이브러리(glibc의 할당기)입니다. 할당기는 힙이라는 큰 구역을 받아 두고 그 안을 잘라 나눠 줍니다. 처음에는 힙이 비어 있으니, 할당기가 brk 시스템 콜로 커널에 힙의 끝을 올려 달라고 합니다. 한 번에 넉넉히(예: 132KiB) 늘려 두고, 그 가운데 100바이트를 떼어 줍니다.':
    'malloc is not the kernel but a library (glibc\'s allocator) that lives inside the program. The allocator holds a large region called the heap and cuts it up to hand out. At first the heap is empty, so the allocator asks the kernel with the brk system call to raise the end of the heap. It grows it generously at once (132 KiB, for example) and hands out 100 bytes of it.',
  '할당기 이름표가 "빈 칸 없음→brk"가 되고 brk가 창구를 지나 커널 이름표가 "힙 끝 +132KiB"가 됩니다. 프로그램 이름표에 "p: 힙 100B"가 남습니다.':
    'The allocator\'s label becomes "No free block→brk", brk passes the gate, and the kernel\'s label becomes "Heap end +132 KiB". The program\'s label shows "p: 100 B in heap".',
  '왼쪽 사용자 영역에 프로그램과 할당기(malloc)가, 경계 너머에 시스템 콜 창구와 커널이 있습니다. 힙은 비어 있고 프로그램이 malloc(100)을 부릅니다.':
    'The program and the allocator (malloc) are in user space on the left; across the boundary are the system-call gate and the kernel. The heap is empty and the program calls malloc(100).',
  '할당기: 빈 칸 없음': 'Allocator: no free block', 'brk로 힙 끝 +132KiB': 'brk raises the heap end by 132 KiB', '그 안에서 100B를 떼어 p로 줌': 'Cut 100 B from it and give it as p',
  'p = malloc(100)': 'p = malloc(100)', '힙은 아직 비어 있음': 'The heap is still empty', '빈 칸 목록이 비어 있음': 'The free list is empty', 'brk(힙 끝 + 132KiB)': 'brk(heap end + 132 KiB)',
  '힙 끝을 132KiB 올림': 'Raise the heap end by 132 KiB', 'RAM은 처음 쓸 때 페이지 폴트로 채움': 'RAM is filled by page faults on first use',
  '132KiB 가운데 100B를 떼어 줌': 'Cut 100 B out of the 132 KiB', '나머지는 빈 칸으로 둠': 'Keep the rest as free space', 'p = 0x5600_0010': 'p = 0x5600_0010', '힙 안의 100B': '100 B in the heap',
  '프로그램이 100바이트를 달라고 합니다. 할당기의 빈 칸 목록은 비어 있습니다.': 'The program asks for 100 bytes. The allocator\'s free list is empty.',
  '할당기가 brk 시스템 콜로 힙의 끝을 올려 달라고 합니다. 한 번에 넉넉히 132KiB를 부탁합니다.': 'The allocator asks with the brk system call for the heap end to be raised. It asks for a generous 132 KiB at once.',
  '커널이 힙의 끝을 올립니다. 실제 RAM 프레임은 3.2처럼 처음 쓰는 순간 페이지 폴트로 채웁니다.': 'The kernel raises the heap end. Actual RAM frames are filled by page faults the moment they are first used, as in 3.2.',
  '할당기는 늘어난 힙에서 100바이트를 떼고, 나머지는 빈 칸으로 둡니다.': 'The allocator cuts 100 bytes from the grown heap and keeps the rest as free space.',
  '프로그램은 힙 안의 100바이트를 가리키는 주소 p를 받습니다.': 'The program gets the address p pointing at 100 bytes in the heap.',
  '할당기가 커널에 부탁하는 것은 언제일까요?': 'When does the allocator ask the kernel?',
  'malloc을 부를 때마다': 'Every time malloc is called', '나눠 줄 빈 칸이 없을 때만': 'Only when it has no free block to hand out', '프로그램이 끝날 때': 'When the program ends',
  '할당기는 받아 둔 힙 안에서 먼저 나눠 줍니다. 모자랄 때만 시스템 콜로 커널에 더 달라고 합니다.': 'The allocator first hands out from the heap it already has. Only when it runs short does it ask the kernel for more with a system call.',
  // Step 2
  'free와 재사용': 'free and reuse',
  'free한 자리는 커널로 가지 않고 다음 malloc이 다시 쓴다': 'A freed block does not go to the kernel; the next malloc reuses it',
  'free(p)는 보통 메모리를 커널에 돌려주지 않습니다. 할당기는 그 100바이트를 자기 빈 칸 목록에 넣어 둡니다. 다음에 malloc(80)이 오면 목록에서 맞는 칸을 찾아 같은 자리를 다시 줍니다. 두 번 모두 시스템 콜이 없어, 경계를 넘는 비용 없이 프로세스 안에서 끝납니다.':
    'free(p) usually does not give memory back to the kernel. The allocator puts the 100 bytes on its own free list. When malloc(80) comes next, it finds a fitting block on the list and hands out the same spot again. Neither call makes a system call, so both finish inside the process without the cost of crossing the boundary.',
  'free가 할당기까지만 가고 할당기 이름표가 "빈 칸: 100B"가 됩니다. malloc(80) 뒤 할당기 이름표가 "free 자리 재사용", 프로그램 이름표가 "q = 옛 p 자리"가 되고, 창구와 커널 이름표는 "호출 없음"입니다.':
    'free goes only as far as the allocator, whose label becomes "Free: 100 B". After malloc(80) the allocator\'s label becomes "Freed spot reused" and the program\'s "q = old p spot", while the gate and kernel labels read "No call".',
  '1단계와 같은 정거장입니다. 프로그램이 p를 free한 뒤 malloc(80)을 부릅니다.': 'The same stations as step 1. The program frees p, then calls malloc(80).',
  '할당기 빈 칸 목록에 100B': '100 B on the allocator\'s free list', '같은 자리를 q로 줌': 'The same spot given as q', '시스템 콜 0번': '0 system calls',
  'q = malloc(80)': 'q = malloc(80)', '100B를 빈 칸 목록에 넣음': 'Put 100 B on the free list', '커널에는 돌려주지 않음': 'Not given back to the kernel',
  '80B가 들어가는 칸: 100B': 'A block that fits 80 B: 100 B', '같은 자리를 다시 줌': 'Give the same spot again', 'q = 0x5600_0010 (p와 같음)': 'q = 0x5600_0010 (same as p)',
  'free는 할당기에서 끝납니다. 100바이트 자리를 빈 칸 목록에 넣습니다.': 'free ends at the allocator. It puts the 100-byte spot on the free list.',
  '프로그램이 80바이트를 달라고 합니다. 할당기가 빈 칸 목록에서 방금 free한 100바이트 칸을 찾아 다시 줍니다.': 'The program asks for 80 bytes. The allocator finds the 100-byte block just freed on its free list and hands it out again.',
  'q의 주소가 p와 같습니다. 이 모든 일이 시스템 콜 없이 끝났습니다.': 'q has the same address as p. All of this finished without a system call.',
  'free(p)를 하면 그 100B는 커널에 돌아갈까요?': 'After free(p), do those 100 B go back to the kernel?',
  '곧바로 커널에 돌아간다': 'They go straight back to the kernel', '할당기의 빈 칸 목록에 남는다': 'They stay on the allocator\'s free list', '사라진다': 'They disappear',
  '작은 조각마다 시스템 콜을 부르면 느립니다. 할당기는 빈 칸으로 모아 두었다가 다시 씁니다.': 'Making a system call for every small piece would be slow. The allocator keeps them as free blocks and reuses them.',
  // Step 3
  '큰 할당은 mmap': 'Large blocks use mmap',
  '큰 덩어리는 mmap으로 따로 받고 free하면 바로 돌려준다': 'A large block is taken separately with mmap and given back at once on free',
  '큰 덩어리를 힙에서 떼어 주면, free한 뒤에도 힙 가운데 큰 구멍이 남아 커널에 돌려주기 어렵습니다. 그래서 glibc 할당기는 기본으로 128KiB 이상인 요청을 mmap 시스템 콜로 따로 받습니다. 이 덩어리는 free하면 munmap으로 곧바로 커널에 돌아갑니다. 기준값은 mallopt의 M_MMAP_THRESHOLD로 바꿀 수 있습니다.':
    'If a large block is cut from the heap, a big hole is left in the middle of the heap after free and is hard to give back to the kernel. So by default the glibc allocator takes requests of 128 KiB or more separately with the mmap system call. Such a block goes straight back to the kernel with munmap when it is freed. The threshold can be changed with mallopt\'s M_MMAP_THRESHOLD.',
  '할당기 이름표가 "≥128KiB→mmap"이 되고 커널 이름표가 "mmap 1MiB"가 됩니다. free 뒤 munmap이 커널로 가서 커널 이름표가 "1MiB 돌려받음"이 됩니다.':
    'The allocator\'s label becomes "≥128 KiB→mmap" and the kernel\'s "mmap 1 MiB". After free, munmap goes to the kernel and the kernel\'s label becomes "Took back 1 MiB".',
  '1단계와 같은 정거장입니다. 프로그램이 malloc(1MiB)을 부르고, 다 쓴 뒤 free합니다.': 'The same stations as step 1. The program calls malloc(1 MiB) and frees it when done.',
  '128KiB 이상이라 mmap': '128 KiB or more, so mmap', 'free': 'free', 'munmap으로 곧바로 커널에 돌려줌': 'Given straight back to the kernel with munmap',
  'big = malloc(1MiB)': 'big = malloc(1 MiB)', '…': '…', '1MiB ≥ 128KiB': '1 MiB ≥ 128 KiB', '힙 대신 mmap': 'mmap instead of the heap', '힙과 떨어진 곳에 1MiB 영역': 'A 1 MiB region away from the heap',
  'mmap으로 받은 덩어리': 'A block taken with mmap', '1MiB를 곧바로 돌려받음': 'Take back 1 MiB at once',
  '1MiB는 기준값 128KiB보다 커서 할당기가 힙 대신 mmap을 고릅니다.': '1 MiB is above the 128 KiB threshold, so the allocator chooses mmap instead of the heap.',
  '커널이 힙과 떨어진 주소에 1MiB 영역을 만들어 줍니다.': 'The kernel makes a 1 MiB region at an address away from the heap.',
  '프로그램이 다 쓰고 free합니다. mmap으로 받은 덩어리라 할당기가 붙잡아 두지 않습니다.': 'The program is done and frees it. Because it came from mmap, the allocator does not hold on to it.',
  '할당기가 munmap으로 1MiB를 곧바로 커널에 돌려줍니다.': 'The allocator gives the 1 MiB straight back to the kernel with munmap.',
  '1MiB 같은 큰 덩어리는 어디서 받을까요?': 'Where does a large block like 1 MiB come from?',
  '힙 끝을 늘려서': 'By growing the heap end', 'mmap으로 따로': 'Separately, with mmap', '스택에서': 'From the stack',
  '큰 덩어리를 힙에 두면 free 뒤에도 구멍이 남습니다. 따로 받아 두면 통째로 돌려줄 수 있습니다.': 'A large block in the heap leaves a hole even after free. Taken separately, it can be given back whole.',
  // Step 4
  '조각난 빈 칸': 'Fragmented free space',
  '빈 공간이 흩어져 있으면 합이 충분해도 못 넣는다': 'If free space is scattered, it does not fit even when the total is enough',
  '작은 덩어리를 받고 풀기를 되풀이하면 힙 안의 빈 칸이 사이사이 흩어집니다. 빈 칸 셋이 각각 100바이트면 모두 300바이트가 비어 있지만, 250바이트는 한 칸에 들어가지 않습니다. 할당기는 결국 힙을 또 늘립니다. 이것을 단편화라고 하고, 오래 도는 서버의 메모리가 쓰는 양보다 커 보이는 까닭 가운데 하나입니다.':
    'Taking and freeing small blocks over and over scatters free space throughout the heap. With three free blocks of 100 bytes each, 300 bytes are free in all, but 250 bytes do not fit in any one block. In the end the allocator grows the heap again. This is called fragmentation, and it is one reason a long-running server seems to use more memory than it needs.',
  '할당기 이름표가 "칸마다 100 < 250"이 되고, brk가 다시 나가 커널 이름표가 "힙 끝 또 올림"이 됩니다.':
    'The allocator\'s label becomes "Each block 100 < 250", brk goes out again, and the kernel\'s label becomes "Heap end raised again".',
  '1단계와 같은 정거장입니다. 할당기의 빈 칸 목록에 떨어진 100B 칸이 셋 있고, 프로그램이 malloc(250)을 부릅니다.': 'The same stations as step 1. The allocator\'s free list has three separate 100 B blocks, and the program calls malloc(250).',
  '빈 칸 100B · 100B · 100B (합 300B)': 'Free 100 B · 100 B · 100 B (300 B in all)', '한 칸에 안 들어감': 'Does not fit in one block', 'brk로 힙을 또 늘림': 'brk grows the heap again',
  '빈 칸: 100B, 100B, 100B': 'Free: 100 B, 100 B, 100 B', '사이사이 쓰는 칸이 끼어 있음': 'Used blocks sit in between', '빈 공간 합계 300B': '300 B free in all', '가장 큰 칸 100B': 'Largest block 100 B',
  '힙을 또 늘려 달라고 함': 'Ask to grow the heap again', '힙 끝을 또 올림': 'Raise the heap end again', '흩어진 300B는 그대로 남음': 'The scattered 300 B stay as they are',
  '빈 공간은 모두 300바이트지만 한 칸이 100바이트라 250바이트가 들어갈 곳이 없습니다.': 'There are 300 bytes free in all, but each block is 100 bytes, so there is no place for 250 bytes.',
  '할당기가 다시 brk를 부릅니다.': 'The allocator calls brk again.',
  '커널이 힙을 또 늘립니다. 흩어진 300바이트는 쓰이지 못한 채 남습니다.': 'The kernel grows the heap again. The scattered 300 bytes stay unused.',
  '빈 공간 합계 300B에 250B를 넣을 수 있을까요?': 'Can 250 B go into 300 B of total free space?',
  '넣을 수 있다': 'Yes, it fits', '칸이 흩어져 넣을 수 없다': 'No, the blocks are scattered', '칸을 이어 붙여 넣는다': 'The blocks are joined to fit it',
  'malloc은 이어진 한 덩어리를 줘야 합니다. 떨어진 칸 셋을 하나로 합칠 수는 없습니다.': 'malloc must hand out one contiguous block. Three separate blocks cannot be merged into one.',
};
