// English for 3.7 The memory hierarchy. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// "N번" is a RAM cell number here ("cell N"), except in the tick column of the table, where it is a count.
window.lessonText = {
  // Page
  '메모리 계층 · 레슨 3.7': 'The memory hierarchy · Lesson 3.7',
  '레지스터, 캐시, RAM, SSD에서 값을 읽어 보며 층마다 속도와 크기가 다른 이유, 캐시 적중과 지역성, 휘발성을 살펴보세요.':
    'Read values from registers, cache, RAM and SSD and see why each layer differs in speed and size, along with cache hits, locality and volatility.',
  '레지스터, 캐시, RAM, 디스크는 왜 속도가 이렇게 다를까요? 층마다 값을 읽어 보고, 캐시가 시간을 아끼는 방법을 확인해 보세요.':
    'Why do registers, cache, RAM and disk differ so much in speed? Read a value from each layer and see how a cache saves time.',
  'CPU 코어에서 레지스터, 캐시, RAM, SSD까지 값을 가지러 가는 장면': 'Fetching values from the CPU core out to registers, cache, RAM and SSD',
  'CPU에서 가까운 층과 먼 층': 'Layers near and far from the CPU', '층': 'Layer', '읽기 조작': 'Read controls', '가지러 가는 길': 'Going to fetch', '값을 들고 오는 길': 'Bringing the value back', '가지러': 'fetch', '값': 'value', '계산': 'compute',
  '자동 실행 중': 'Autoplaying', '이 단계의 문제를 모두 풀었습니다. 자유롭게 눌러 보세요.': 'You solved every problem in this step. Press anything you like.',
  '버튼을 눌러 값을 읽어 보세요.': 'Press a button to read a value.', '각 층 위에 지금 담긴 내용이 적혀 있습니다.': 'What each layer holds now is written above it.',
  // Layers and the timing table
  'CPU 코어': 'CPU core', '레지스터': 'Registers', 'L1 캐시': 'L1 cache', '읽는 중': 'Reading', '여기서 가져옴': 'Fetched from here',
  '층마다 한 번 읽는 데 걸리는 시간': 'Time for one read at each layer', '시간': 'Time', '클럭': 'Ticks', '1클럭이 1초라면': 'If 1 tick were 1 second', '크기': 'Size',
  '수백 바이트': 'A few hundred bytes', '{#0}번': '{0}', '30만 번': '300,000', '1초': '1 second', '4초': '4 seconds', '5분': '5 minutes', '3일 반': '3½ days',
  '{0}에서 읽기': 'Read from {0}', '{0}에서 읽기: {1} · 클럭 {2} · 1클럭이 1초라면 {3}': 'Read from {0}: {1} · ticks {2} · if 1 tick were 1 second, {3}',
  // Cache cells and readouts
  '캐시 칸': 'Cache slots', '빈칸': 'empty', '비어 있음': 'Empty', '적중 ✓': 'Hit ✓', '실패 ✗': 'Miss ✗', '적중·담김': 'Hit · held', '실패·비어 있음': 'Miss · empty',
  '{#0}번?': 'cell {0}?', '{#0}–{#1}번': 'cells {0}–{1}', '{#0}번 = {1}': 'cell {0} = {1}', '{#0}번 읽기': 'Read cell {0}',
  '{#0}번 칸: 캐시 적중 · 1 ns': 'cell {0}: cache hit · 1 ns', '{#0}번 칸: 캐시 실패 → RAM까지 · 약 101 ns': 'cell {0}: cache miss → all the way to RAM · about 101 ns',
  '{#0}번 칸: 캐시 실패 → RAM까지 · 약 101 ns · 오래된 값이 밀려남': 'cell {0}: cache miss → all the way to RAM · about 101 ns · an old value was pushed out',
  '적중 {#0} · 실패 {#1} · 적중률 {#2}% · 걸린 시간 약 {#3} ns': 'hits {0} · misses {1} · hit rate {2}% · time taken about {3} ns',
  '{0}: 적중 {#1}번, 실패 {#2}번 · 걸린 시간 약 {#3} ns': '{0}: {1} hits, {2} misses · time taken about {3} ns',
  '차례로 16칸': 'In order, 16 cells', '건너뛰며 16번': 'Skipping, 16 reads', '라인 {#0}/{#1}': 'lines {0}/{1}', '{#0}/{#1}칸': '{0}/{1} slots',
  '캐시 비우기': 'Empty the cache', '캐시를 비웠습니다.': 'The cache was emptied.', '차례로 16칸 읽기': 'Read 16 cells in order', '건너뛰며 16번 읽기': 'Read 16 times, skipping',
  '전원 끄기': 'Power off', '파일 열기': 'Open the file', '사진.jpg': 'photo.jpg', '사진.jpg 전체': 'All of photo.jpg', '사진 일부': 'Photo part', '일부': 'part', '픽셀 몇 개': 'a few pixels', '픽셀 값': 'Pixels',
  '전원을 껐다 켰습니다. 휘발성 메모리(레지스터, 캐시, RAM)는 비었고 SSD의 파일만 남았습니다.': 'The power was turned off and on. Volatile memory (registers, cache, RAM) is empty, and only the file on the SSD is left.',
  '파일 열기: SSD의 파일이 RAM으로 올라오고, CPU가 쓰는 부분이 캐시와 레지스터까지 올라왔습니다.': 'Open the file: the file on the SSD comes up into RAM, and the part the CPU uses comes all the way up to the cache and registers.',
  // Step 1
  '거리와 크기': 'Distance and size', 'CPU가 값 요청': 'The CPU asks for a value', '레지스터와 SSD의 거리 차이': 'How far registers and SSD are', '가까운 층에서 더 빨리 읽음': 'Nearer layers read faster',
  '가까울수록 빠르고, 멀수록 크다': 'The nearer, the faster; the farther, the bigger',
  'CPU가 값을 읽는 곳은 여러 층으로 나뉩니다. CPU 안의 레지스터는 클럭 한 번이면 읽지만 몇 백 바이트뿐입니다. 캐시, RAM, SSD로 갈수록 크기는 커지고 값싸지지만 느려집니다. 빠르고 크고 싼 메모리는 만들기 어려워서, 작고 빠른 층과 크고 느린 층을 겹쳐 씁니다.':
    'The places a CPU reads values from are split into layers. Registers inside the CPU read in one clock tick but hold only a few hundred bytes. Going out through cache, RAM and SSD, they get bigger and cheaper but slower. Memory that is fast, big and cheap is hard to make, so small fast layers and big slow layers are stacked together.',
  '각 층에서 읽기를 눌러 보세요. 점이 오가는 시간이 길어지고, 아래 표의 "1클럭이 1초라면" 칸이 1초, 4초, 5분, 3일 반으로 늘어납니다. RAM은 레지스터보다 300배, SSD는 30만 배 느립니다.':
    'Press read at each layer. The dot takes longer to go and come back, and the "If 1 tick were 1 second" column in the table below grows: 1 second, 4 seconds, 5 minutes, 3½ days. RAM is 300 times slower than registers, and SSD 300,000 times.',
  '왼쪽의 CPU 코어에서 오른쪽으로 레지스터, L1 캐시, RAM, SSD가 차례로 놓여 있습니다. 멀리 있을수록 상자가 크고, 값을 가지러 가는 점이 오래 걸립니다.':
    'From the CPU core on the left, registers, L1 cache, RAM and SSD sit in turn to the right. The farther away, the bigger the box and the longer the dot takes to fetch a value.',
  'L1 캐시에서 값을 읽어 보세요.': 'Read a value from the L1 cache.', '1 ns, 클럭 4번입니다.': '1 ns, 4 clock ticks.',
  'RAM에서 읽어 보세요. 캐시보다 얼마나 걸릴까요?': 'Read from RAM. How much longer than the cache does it take?',
  '100 ns로 캐시의 100배입니다. 1클럭이 1초라면 5분을 기다리는 셈입니다.': '100 ns, 100 times the cache. If 1 tick were 1 second, it would be a 5-minute wait.',
  '가장 큰 SSD에서 읽어 보세요.': 'Read from the biggest, the SSD.', '100 µs, 1클럭이 1초라면 3일 반입니다. 그래서 자주 쓰는 값은 위층에 둡니다.': '100 µs: if 1 tick were 1 second, 3½ days. That is why often-used values are kept in the upper layers.',
  // Step 2
  '캐시 적중': 'Cache hits', '캐시에 없는 주소': 'An address not in the cache', 'RAM에서 가져와 캐시에 저장': 'Fetched from RAM and kept in the cache', '같은 주소의 다음 읽기는 적중': 'The next read of the same address hits',
  '캐시에 있으면 적중, 없으면 RAM까지 간다': 'If it is in the cache it hits; if not, it goes all the way to RAM',
  'CPU는 RAM의 값을 읽을 때 먼저 캐시를 봅니다. 캐시에 있으면 적중(hit)이라 1 ns에 끝나고, 없으면 실패(miss)라 RAM까지 가서 가져온 뒤 캐시에 한 부 복사해 둡니다. 캐시는 작아서 꽉 차면 가장 오래 안 쓴 값을 내보냅니다. 7.2의 서버 캐시도 같은 원리입니다.':
    'When a CPU reads a value from RAM, it looks in the cache first. If it is there, it is a hit and takes 1 ns; if not, it is a miss: it goes to RAM, fetches the value and keeps a copy in the cache. The cache is small, so when full it pushes out the value unused the longest. The server cache in 7.2 works the same way.',
  '처음 읽는 칸은 언제나 실패입니다. 같은 칸을 다시 읽으면 캐시에서 바로 돌아옵니다. 다섯 번째 다른 칸을 읽으면 캐시 칸 중 가장 오래 안 쓴 값이 밀려납니다.':
    'A cell read for the first time always misses. Read the same cell again and it comes straight back from the cache. Read a fifth different cell and the value unused the longest is pushed out of the cache slots.',
  'CPU 코어, L1 캐시, RAM이 있습니다. 읽기마다 점이 캐시에 먼저 들렀다가, 없으면 RAM까지 가서 값을 가져와 캐시에 넣습니다.':
    'There is a CPU core, an L1 cache and RAM. On each read the dot calls at the cache first, and if the value is not there it goes on to RAM, fetches it and puts it in the cache.',
  '아무 칸이나 읽어 보세요. 처음 읽는 칸은 어떻게 될까요?': 'Read any cell. What happens to a cell read for the first time?', '캐시에 없어서 RAM까지 다녀왔습니다(실패, 약 100 ns).': 'It was not in the cache, so it went to RAM and back (a miss, about 100 ns).',
  '방금 읽은 칸을 다시 읽어 적중시켜 보세요.': 'Read the cell you just read again to get a hit.', '캐시에 있어서 1 ns에 끝났습니다(적중).': 'It was in the cache, so it took 1 ns (a hit).',
  '서로 다른 칸을 더 읽어 캐시에서 값이 밀려나게 해 보세요.': 'Read more different cells so a value is pushed out of the cache.', '캐시 4칸이 차서 가장 오래 안 쓴 값을 내보냈습니다.': 'The cache\'s 4 slots filled, so the value unused the longest was pushed out.',
  // Step 3
  '지역성': 'Locality', '연속한 주소 읽기': 'Read consecutive addresses', '첫 실패 때 이웃 4칸을 적재': 'Load 4 neighbouring cells on the first miss', '같은 라인의 다음 주소는 적중': 'The next address in the same line hits',
  '이웃한 값을 함께 가져오면 적중이 는다': 'Fetching neighbouring values together means more hits',
  '프로그램은 방금 쓴 값을 곧 다시 쓰고(시간 지역성), 방금 읽은 칸의 이웃을 곧 읽는 경향(공간 지역성)이 있습니다. 그래서 캐시는 실패할 때 값 하나가 아니라 이웃한 4칸(캐시 라인)을 한꺼번에 가져옵니다. 배열을 차례로 읽으면 이 덕을 크게 봅니다.':
    'Programs tend to use a value again soon after using it (temporal locality) and to read the neighbours of a cell soon after reading it (spatial locality). So on a miss the cache fetches not one value but 4 neighbouring cells at once (a cache line). Reading an array in order benefits a lot from this.',
  '"차례로 16칸"은 4칸마다 한 번만 실패해서 적중 12번, 실패 4번입니다. "4칸씩 건너뛰며 16번"은 매번 새 라인이라 거의 모두 실패합니다. 같은 16번 읽기인데 걸린 시간이 몇 배 차이 납니다.':
    '"16 cells in order" misses only once every 4 cells: 12 hits and 4 misses. "16 reads skipping 4 at a time" lands in a new line every time, so nearly all miss. The same 16 reads take several times as long.',
  'CPU 코어, L1 캐시, RAM이 있습니다. 캐시는 4칸짜리 라인 두 개를 담고, 실패하면 이웃한 4칸을 한꺼번에 가져옵니다.':
    'There is a CPU core, an L1 cache and RAM. The cache holds two lines of 4 cells, and on a miss it fetches 4 neighbouring cells at once.',
  '"차례로 16칸 읽기"를 눌러 보세요.': 'Press "Read 16 cells in order".', '실패 4번, 적중 12번. 한 번 가져온 라인을 네 번 씁니다.': '4 misses, 12 hits. Each line fetched is used four times.',
  '이번에는 "건너뛰며 16번 읽기"를 눌러 보세요.': 'Now press "Read 16 times, skipping".', '거의 모든 읽기가 실패해 RAM까지 갑니다. 읽는 순서만 바꿨는데 훨씬 느립니다.': 'Nearly every read misses and goes to RAM. Only the reading order changed, but it is much slower.',
  // Step 4
  '전원과 저장': 'Power and storage', '레지스터·캐시·RAM 비워짐': 'Registers, cache and RAM emptied', 'SSD의 파일은 유지': 'The file on the SSD stays',
  '전원이 꺼져도 남는 층은 SSD뿐이다': 'Only the SSD layer survives a power-off',
  '레지스터, 캐시, RAM은 3.4의 래치처럼 전기로 값을 붙잡는 휘발성 메모리입니다. SSD와 하드디스크는 전원이 없어도 값이 남는 비휘발성 저장장치입니다. 그래서 프로그램과 파일은 SSD에 두고, 실행할 때 RAM으로 올리고, 자주 쓰는 부분은 캐시와 레지스터까지 끌어 올립니다.':
    'Registers, cache and RAM are volatile memory that holds values with electricity, like the latches in 3.4. SSDs and hard disks are non-volatile storage that keeps values without power. So programs and files live on the SSD, are brought up into RAM when run, and the often-used parts are pulled up to the cache and registers.',
  '전원을 끄면 SSD를 뺀 모든 층이 빈칸이 됩니다. "파일 열기"를 누르면 SSD의 파일이 RAM으로, 다시 캐시와 레지스터로 올라오는 길을 봅니다. 0.5에서 본 "저장"과 "열기"를 층으로 나누어 본 것입니다.':
    'Turn the power off and every layer except the SSD becomes empty. Press "Open the file" to see the file on the SSD come up into RAM, then into the cache and registers. It is the "save" and "open" from 0.5, seen layer by layer.',
  'CPU 코어, 레지스터, 캐시, RAM, SSD가 모두 있습니다. 각 층 위에 지금 담긴 내용이 적혀 있습니다.': 'The CPU core, registers, cache, RAM and SSD are all there. What each layer holds now is written above it.',
  '"전원 끄기"를 눌러 보세요. 어느 층이 남을까요?': 'Press "Power off". Which layer will be left?', 'SSD의 파일만 남고 나머지는 비었습니다.': 'Only the file on the SSD is left; the rest is empty.',
  '"파일 열기"로 파일을 다시 올려 보세요.': 'Bring the file up again with "Open the file".', 'SSD → RAM → 캐시 → 레지스터로 올라와 CPU가 쓸 수 있게 됐습니다.': 'It came up SSD → RAM → cache → registers and the CPU can use it now.',
};
