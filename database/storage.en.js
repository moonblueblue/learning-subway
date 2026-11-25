// English for 8A.3 Storage engines. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '저장 엔진 · 레슨 8A.3': 'Storage engines · Lesson 8A.3',
  'B-트리 엔진이 4KB 페이지를 제자리에서 고치는 방법과, LSM 트리 엔진이 쓰기를 메모리 표에 모았다가 정렬 파일로 한 번에 내려 쓰고, 새것부터 찾아 읽고, 뒤에서 파일을 합치는 방법을 비교해 보세요.':
    'Compare how a B-tree engine changes a 4KB page in place with how an LSM tree engine gathers writes in a memory table, writes them out at once as a sorted file, reads newest first, and merges files in the background.',
  '데이터베이스는 디스크에 데이터를 어떻게 적고 다시 찾을까요? 같은 쓰기와 읽기를 B-트리 엔진과 LSM 트리 엔진이 처리하는 길을 따라가 보세요.':
    'How does a database write data to disk and find it again? Follow the same write and read as a B-tree engine and an LSM tree engine handle them.',
  '요청이 저장 엔진을 거쳐 로그, 메모리 표, 디스크의 페이지나 정렬 파일로 가는 장면': 'A request passing through the storage engine to the log, the memory table, and a page or sorted files on disk',
  '저장 엔진 안의 정거장': 'Stations inside the storage engine',
  '"다음 단계"를 누르면 요청이 오른쪽으로 움직입니다.': 'Press "Next step" and the work moves to the right.',
  '"다음 단계"를 눌러 요청을 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the request one station at a time. Prediction questions come up along the way.',
  // Stations and kinds
  '저장 엔진': 'Storage engine', '로그': 'Log', '메모리 표': 'Memory table', '정렬 파일들': 'Sorted files', 'B-트리 페이지': 'B-tree page',
  '요청 → 저장 엔진': 'Request → Storage engine', '저장 엔진 → 로그': 'Storage engine → Log', '저장 엔진 → 메모리 표': 'Storage engine → Memory table',
  '저장 엔진 → 저장 엔진': 'Storage engine → Storage engine', '저장 엔진 → 정렬 파일들': 'Storage engine → Sorted files',
  'B-트리 페이지 → 메모리': 'B-tree page → Memory', '메모리 → B-트리 페이지': 'Memory → B-tree page',
  '메모리 표 → 정렬 파일들': 'Memory table → Sorted files', '정렬 파일들 → 요청': 'Sorted files → Request', '정렬 파일들 → 저장 엔진': 'Sorted files → Storage engine',
  '저장 엔진 · id 1?': 'Storage engine · id 1?', '저장 엔진 · 파일 3': 'Storage engine · file 3',
  '메모리 · 4KB 쓰기': 'Memory · write 4KB', '메모리 표 · 64MB 한 번에': 'Memory table · 64MB at once',
  // Labels and holds
  '4KB 읽기': 'Read 4KB', '4KB 쓰기': 'Write 4KB', '64MB 한 번에': '64MB at once', '64MB 가득': '64MB full', '64MB 가득 참': '64MB full',
  '끝에 붙이기': 'Append', '끝에 1줄': '1 line at end', '1줄 추가': '1 line added', '거의 참': 'Nearly full', '없음': 'Not here',
  '병합 중': 'Merging', '3키 → 2키': '3 keys → 2', '합치기': 'Merge', '파일 {#0}': 'File {0}', '파일 1, 2': 'Files 1, 2', '파일 2에서 38': '38 in file 2',
  '페이지 {#0}': 'Page {0}', '페이지 317: id 1–40': 'Page 317: id 1–40', '페이지 317 고침': 'Page 317 changed', 'id 1 읽기': 'Read id 1', 'id 1 찾기': 'Find id 1', 'id 1 재고 38': 'id 1 stock 38', '재고 38': 'Stock 38',
  // Step 1
  '페이지 고치기': 'Changing pages', 'B-트리는 디스크의 페이지를 제자리에서 고친다': 'A B-tree changes pages on disk in place',
  '저장 엔진은 데이터베이스(6.4) 안에서 실제로 디스크에 쓰고 읽는 부분입니다. 6.5의 B-트리 엔진은 데이터를 4KB짜리 페이지에 나눠 담습니다. 한 행을 고치려면 그 행이 든 페이지를 디스크에서 읽어 와 메모리에서 고치고 페이지 전체를 제자리에 다시 씁니다. 6.6처럼 고치기 전에 로그부터 씁니다.':
    'The storage engine is the part of a database (6.4) that actually writes to and reads from disk. The B-tree engine of 6.5 splits data into 4KB pages. To change a row, it reads the page holding that row from disk, changes it in memory, and writes the whole page back in place. As in 6.6, it writes the log before changing anything.',
  '숫자 하나(재고 40 → 38)를 바꾸려고 4KB 페이지를 읽고 다시 썼습니다. 고칠 행들이 디스크 여기저기 흩어져 있으면 여기저기를 오가며 써야 합니다(임의 쓰기). 읽기는 빠르지만 쓰기가 많으면 부담이 큽니다.':
    'To change one number (stock 40 → 38), a 4KB page was read and written again. If the rows to change are scattered over the disk, writing has to jump all over it (random writes). Reads are fast, but many writes weigh heavily.',
  '왼쪽부터 요청, 저장 엔진, 로그, 메모리, 디스크의 페이지가 놓여 있습니다.': 'From the left: the request, the storage engine, the log, memory, and a page on disk.',
  '어느 페이지?': 'Which page?', 'B-트리를 내려가 id 1이 든 페이지 317을 찾음': 'Go down the B-tree and find page 317, which holds id 1',
  '엔진이 id 1이 든 페이지를 찾습니다.': 'The engine finds the page holding id 1.',
  '로그 먼저': 'Log first', '로그: 페이지 317, id 1 재고 40 → 38': 'Log: page 317, id 1 stock 40 → 38', '고치기 전에 로그부터 씁니다(6.6).': 'The log is written before the change (6.6).',
  '페이지 읽기': 'Read the page', '디스크의 페이지 317 (4KB)을 메모리로': 'Page 317 (4KB) from disk into memory', '페이지 전체를 메모리로 읽어 옵니다.': 'The whole page is read into memory.',
  '고쳐서 제자리에': 'Change it in place', 'id 1의 재고만 38로 고친 뒤': 'After changing only id 1\'s stock to 38', '페이지 317 전체를 제자리에 다시 씀': 'Write all of page 317 back in place',
  '숫자 하나를 고치고 4KB 페이지를 다시 씁니다.': 'One number changes and a 4KB page is written again.',
  '숫자 하나를 바꾸는 데 디스크에 다시 쓴 양은?': 'How much was written to disk again to change one number?',
  '페이지 하나 4KB': 'One page, 4KB', '숫자 하나 몇 바이트': 'A few bytes for the number',
  '디스크는 페이지 단위로 읽고 씁니다. 그래서 작은 고치기가 흩어져 많으면 디스크 일이 커집니다.': 'Disks read and write in pages. So many small, scattered changes make a lot of disk work.',
  // Step 2
  '모았다가 쓰기': 'Gather, then write', 'LSM 트리는 메모리에 모았다가 정렬된 파일로 한 번에 쓴다': 'An LSM tree gathers writes in memory and writes them at once as a sorted file',
  '쓰기가 아주 많은 서비스(메시지, 기록, 센서 값)는 다른 엔진을 씁니다. LSM 트리 엔진은 쓰기를 로그 끝에 붙이고(순차 쓰기), 메모리 표에 키 순서로 넣기만 합니다. 메모리 표가 차면(예: 64MB) 통째로 정렬된 파일(SSTable)로 디스크에 한 번에 내려 씁니다. 디스크의 파일은 한 번 쓰면 고치지 않습니다.':
    'Services with very many writes (messages, logs, sensor values) use another engine. An LSM tree engine only appends each write to the end of the log (a sequential write) and puts it into a memory table in key order. When the memory table fills (say 64MB), it is written to disk all at once as a sorted file (an SSTable). A file on disk, once written, is never changed.',
  '쓰기는 로그 끝에 붙이기와 메모리에 넣기뿐이라 매우 빠릅니다. 디스크에는 큰 덩어리로 한 번에 차례대로 씁니다. 대신 같은 키의 옛 값이 옛 파일에 남아 있게 됩니다.':
    'A write is just an append to the log and an insert in memory, so it is very fast. The disk is written in big chunks, in order, at once. In exchange, old values of the same key stay behind in old files.',
  '왼쪽부터 요청, 저장 엔진, 로그, 메모리 표, 디스크의 정렬 파일들이 놓여 있습니다.': 'From the left: the request, the storage engine, the log, the memory table, and the sorted files on disk.',
  '지금 상태': 'Current state', '메모리 표: 63.9MB / 64MB': 'Memory table: 63.9MB / 64MB', '정렬 파일: 파일 1 (id 1 재고 40 포함)': 'Sorted files: file 1 (includes id 1 stock 40)',
  '쓰기 요청': 'Write request', '같은 쓰기 요청이 옵니다.': 'The same write request arrives.',
  '로그 끝에 붙이기': 'Append to the log', '로그 맨 끝에 한 줄 (순차 쓰기)': 'One line at the very end of the log (sequential write)', '로그 끝에 붙이기만 합니다.': 'It just appends to the log.',
  '메모리 표에 넣기': 'Put in the memory table', '메모리 표 (키 순서): …, id 1 = 38, …': 'Memory table (key order): …, id 1 = 38, …', '메모리 표에 넣으니 가득 찼습니다.': 'Putting it in fills the memory table.',
  '이 쓰기에서 디스크의 옛 값(파일 1의 id 1 = 40)은 어떻게 될까요?': 'What happens to the old value on disk (id 1 = 40 in file 1) with this write?',
  '그대로 남는다 (파일은 고치지 않음)': 'It stays (files are not changed)', '38로 고쳐진다': 'It changes to 38',
  'LSM은 디스크 파일을 고치지 않습니다. 새 값은 메모리 표에, 옛 값은 옛 파일에 남습니다.': 'LSM never changes disk files. The new value is in the memory table; the old value stays in the old file.',
  '정렬 파일로 내려쓰기': 'Write out a sorted file', '메모리 표 → 파일 2 (정렬됨, 64MB) 한 번에 순차 쓰기': 'Memory table → file 2 (sorted, 64MB) in one sequential write',
  '메모리 표 비움 · 로그도 비움': 'Memory table emptied · log emptied too', '가득 찬 메모리 표를 정렬된 파일로 한 번에 내려 씁니다.': 'The full memory table is written out at once as a sorted file.',
  // Step 3
  'LSM 읽기': 'LSM reads', '읽을 때는 가장 새것부터 찾아본다': 'Reads look at the newest first',
  '같은 키가 여러 곳에 있을 수 있으므로, 읽을 때는 가장 최근 것부터 봅니다. 메모리 표 → 가장 새 파일 → 그다음 파일 순서입니다. 처음 찾은 값이 최신 값입니다. 파일이 많으면 여러 파일을 뒤져야 해서 읽기가 느려지므로, 파일마다 "이 키가 이 파일에 없다"를 빨리 알려 주는 작은 요약(블룸 필터)을 둡니다.':
    'The same key can be in several places, so a read looks at the most recent first: memory table → newest file → the next file. The first value found is the latest. With many files a read has to search many of them and slows down, so each file has a small summary (a Bloom filter) that quickly says "this key is not in this file".',
  'id 1은 메모리 표에 없고, 파일 2에서 38을 찾아 바로 끝났습니다. 파일 1의 옛 값 40은 볼 필요가 없습니다. 쓰기를 빠르게 한 대가로 읽기는 여러 곳을 볼 수 있습니다.':
    'id 1 was not in the memory table; 38 was found in file 2 and the read ended there. There was no need to see the old value 40 in file 1. The price of fast writes is that a read may look in several places.',
  '같은 장면입니다. id 1을 읽으려고 새것부터 차례로 찾아봅니다.': 'The same scene. To read id 1, it searches from the newest in turn.',
  '메모리 표: id 5 = 12, id 9 = 3': 'Memory table: id 5 = 12, id 9 = 3', '파일 2 (새것): id 1 = 38, …': 'File 2 (new): id 1 = 38, …', '파일 1 (옛것): id 1 = 40, …': 'File 1 (old): id 1 = 40, …',
  '읽기 요청': 'Read request', 'id 1을 읽습니다.': 'Read id 1.',
  '메모리 표 먼저': 'Memory table first', '메모리 표에 id 1 없음': 'id 1 not in the memory table', '가장 최신인 메모리 표부터 봅니다.': 'Look at the newest place, the memory table, first.',
  '메모리 표 다음에는 어디를 먼저 봐야 할까요?': 'After the memory table, where should it look first?',
  '가장 새 파일 (파일 2)': 'The newest file (file 2)', '가장 옛 파일 (파일 1)': 'The oldest file (file 1)',
  '새 파일일수록 최근 값입니다. 처음 찾은 값이 최신이라 옛 파일은 볼 필요가 없습니다.': 'The newer the file, the more recent the value. The first value found is the latest, so old files need not be seen.',
  '파일 2에서 찾음': 'Found in file 2', '파일 1 블룸 필터는 보지 않아도 됨': 'No need to check file 1\'s Bloom filter', '파일 2: id 1 = 38 → 최신 값': 'File 2: id 1 = 38 → latest value',
  '파일 2에서 38을 찾아 끝냅니다.': 'It finds 38 in file 2 and stops.',
  '답': 'Answer', '최신 값 38을 돌려줍니다.': 'It returns the latest value, 38.',
  // Step 4
  '정렬 파일들을 합치며 옛 값과 지운 것을 치운다': 'Merging sorted files clears out old values and deletions',
  '파일이 계속 늘면 읽을 곳도 늘고 옛 값이 디스크를 차지합니다. 그래서 엔진은 뒤에서 정렬된 파일 여러 개를 하나로 합칩니다(컴팩션). 이미 정렬되어 있어 4.4의 병합 정렬처럼 한 번 훑으며 합칠 수 있고, 같은 키는 최신 값만 남기고, 지운 표시(묘비)가 붙은 키는 버립니다.':
    'As files keep growing, there are more places to read and old values take up disk. So the engine merges several sorted files into one in the background (compaction). They are already sorted, so one pass merges them as in the merge sort of 4.4; for each key only the latest value is kept, and keys marked deleted (tombstones) are dropped.',
  '파일 1, 2가 합쳐져 id 1 = 38만 남고 40은 사라졌으며, 지운 id 7도 정리됐습니다. B-트리는 읽기에, LSM은 쓰기에 유리합니다. 어떤 일을 더 많이 하는지 보고 엔진을 고릅니다.':
    'Files 1 and 2 were merged: only id 1 = 38 is left, 40 is gone, and the deleted id 7 is cleared too. A B-tree favours reads, LSM favours writes. Choose the engine by which you do more.',
  '같은 장면입니다. 저장 엔진이 뒤에서 정렬 파일들을 합칩니다.': 'The same scene. The storage engine merges the sorted files in the background.',
  '합치기 전': 'Before merging', '파일 2 (새것): id 1 = 38, id 7 = 지움(묘비)': 'File 2 (new): id 1 = 38, id 7 = deleted (tombstone)',
  '파일 1 (옛것): id 1 = 40, id 3 = 9, id 7 = 5': 'File 1 (old): id 1 = 40, id 3 = 9, id 7 = 5',
  '두 파일 읽기': 'Read both files', '두 파일 모두 키 순서로 정렬되어 있음 → 앞에서부터 나란히 훑기': 'Both files are sorted by key → scan them side by side from the start',
  '정렬된 두 파일을 나란히 읽습니다.': 'It reads the two sorted files side by side.',
  '키마다 정리': 'Tidy each key', 'id 1: 38(새) vs 40(옛) → 38만 남김': 'id 1: 38 (new) vs 40 (old) → keep only 38', 'id 3: 9 → 그대로': 'id 3: 9 → unchanged',
  'id 7: 새 파일에 "지움" → 버림': 'id 7: "deleted" in the new file → dropped', '같은 키는 최신 값만 남기고, 지운 키는 버립니다.': 'For each key only the latest value is kept, and deleted keys are dropped.',
  '합친 파일에 남는 id 1의 값은?': 'Which value of id 1 is left in the merged file?', '38 (새 값)': '38 (new value)', '40 (옛 값)': '40 (old value)', '둘 다': 'Both',
  '같은 키는 가장 최근 값만 의미가 있습니다. 옛 값은 이때 치웁니다.': 'Only the most recent value of a key matters. Old values are cleared out now.',
  '새 파일 하나': 'One new file', '파일 3: id 1 = 38, id 3 = 9': 'File 3: id 1 = 38, id 3 = 9', '파일 1, 2 삭제 → 읽을 파일 수와 디스크 공간이 줄어듦': 'Files 1, 2 deleted → fewer files to read and less disk used',
  '합친 새 파일 하나만 남깁니다.': 'Only the one merged file is left.',
  '쓰기가 아주 많고 읽기는 적은 서비스(센서 기록)에 알맞은 엔진은?': 'Which engine suits a service with very many writes and few reads (sensor logs)?', 'LSM 트리': 'LSM tree', 'B-트리': 'B-tree',
  'LSM은 쓰기를 메모리와 순차 쓰기로 처리해 빠릅니다. 읽기가 많고 쓰기가 적으면 B-트리가 유리합니다.': 'LSM handles writes in memory and with sequential writes, so it is fast. With many reads and few writes, a B-tree is better.',
};
