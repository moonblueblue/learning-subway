// English for 6.5 Indexes. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Data in the tables: 지우 Jiwoo, 하준 Hajun (emails stay as written).
window.lessonText = {
  // Page
  '인덱스 · 레슨 6.5': 'Indexes · Lesson 6.5',
  '인덱스가 없을 때의 전체 스캔, B-트리 인덱스 만들기, 나무를 몇 층만 내려가 한 행을 찾기, 쓰기가 느려지고 끝부분 검색에는 쓰지 못하는 대가를 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, the full scan without an index, building a B-tree index, going down just a few levels of the tree to find one row, and the cost: slower writes and no help for searches by the end of a value.',
  '데이터가 백만 개여도 한 줄을 빨리 찾는 방법은 무엇일까요? 같은 질의가 인덱스 없이, 그리고 인덱스와 함께 데이터베이스 엔진을 지나가는 길을 비교해 보세요.':
    'How can you find one row fast even among a million? Compare the path the same query takes through the database engine without an index and with one.',
  'SQL 질의가 데이터베이스 엔진에서 인덱스를 거쳐 표의 한 행으로 가는 장면': 'An SQL query going from the database engine through an index to one row of a table',
  '질의가 지나가는 정거장': 'Stations the query passes through', '"다음 단계"를 누르면 질의가 오른쪽으로 움직입니다.': 'Press "Next step" and the code moves to the right.', '"다음 단계"를 눌러 질의를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the query one station at a time. Prediction questions come up along the way.',
  '질의, 인덱스, 결과': 'Query, index, result', '데이터베이스 엔진': 'Database engine', 'SQL 질의': 'SQL query', 'DB 엔진': 'DB engine', 'users 표': 'users table', 'email 인덱스': 'email index', 'email 인덱스 (B-트리)': 'email index (B-tree)', '없음': 'None', '질의 두 개': 'Two queries',
  // Legs and badges
  'SQL 질의 → DB 엔진': 'SQL query → DB engine', 'DB 엔진 → users 표': 'DB engine → users table', 'DB 엔진 → email 인덱스': 'DB engine → email index', 'users 표 → email 인덱스': 'users table → email index', 'email 인덱스 → users 표': 'email index → users table', 'users 표 → 결과': 'users table → result',
  '한 행씩': 'Row by row', 'DB 엔진 · 한 행씩': 'DB engine · row by row', '첫 행': 'First row', '다음 행': 'Next row', '… 마지막 행': '… last row', '… 반복': '… and so on', '전체 스캔': 'Full scan', '다시 전체 스캔': 'Full scan again', '비교 1,000,000번': '1,000,000 comparisons', '100만 번 비교': '1M comparisons', '100만 행': '1M rows', '1행': '1 row', '734,201행': 'Row 734,201', '행 734,201': 'Row 734,201', '해당 행만': 'That row only', '그 행만 읽기': 'Read that row only',
  '1,000,000행 모두': 'All 1,000,000 rows', '1,000,001행을 모두 비교': 'Compare all 1,000,001 rows', '1행만 읽음': 'Read 1 row only', '734,201행만 표에서 읽음': 'Read only row 734,201 from the table',
  '1행 minji@… ✗': 'Row 1 minji@… ✗', '2행 seojun@… ✗': 'Row 2 seojun@… ✗', '734,201행 jiu@example.com ✓': 'Row 734,201 jiu@example.com ✓', '1,000,000행 yejun@… ✗': 'Row 1,000,000 yejun@… ✗',
  '734,201 | 지우 | jiu@example.com': '734,201 | Jiwoo | jiu@example.com', '1,000,001 | 하준 | hajun@example.com': '1,000,001 | Hajun | hajun@example.com',
  'users: 1,000,000행 · 인덱스 없음': 'users: 1,000,000 rows · no index', 'users: 1,000,000행 · email 인덱스 있음': 'users: 1,000,000 rows · email index', 'email 인덱스가 있음': 'There is an email index', 'email에 인덱스가 없음': 'No index on email',
  '엔진 · 계획 세우기': 'Engine · planning', '엔진 · 인덱스 만들기': 'Engine · building index', '→ 전체 스캔으로 찾기로 함': '→ decides to find it by full scan', '→ 인덱스로 찾기로 함': '→ decides to find it by index', '→ 인덱스를 쓸 수 없음, 전체 스캔': '→ cannot use the index, full scan',
  '검색 키 jiu': 'Search key jiu', '검색 키: jiu…': 'Key: jiu…',
  // Index
  '만드는 중': 'Building', '한 번 훑음': 'One pass', 'users 표 · 정렬': 'users table · sorted', 'email 읽기': 'Read email', 'email과 행 위치 뽑기': 'Pick out email and row position', 'email과 다른 열': 'email and other columns', 'email → 행 번호': 'email → row number',
  'users의 email 칸으로 B-트리를 만들기로 함': 'Decides to build a B-tree on users\' email column', 'email과 행 번호만 골라 범위별로 나눈다': 'Picks just email and row number and splits them by range', '표는 한 번 읽고, 인덱스는 email 순으로 저장': 'The table is read once; the index is stored in email order',
  'minji@… → 1행': 'minji@… → row 1', 'seojun@… → 2행': 'seojun@… → row 2', 'jiu@example.com → 734,201행': 'jiu@example.com → row 734,201',
  'B-트리 3층': 'B-tree, 3 levels', '뿌리': 'Root', '뿌리:  a–f | g–m | n–s | t–z': 'Root:  a–f | g–m | n–s | t–z', '├ g–m 가지:  ga–ha | hb–jh | ji–ka | …': '├ g–m branch:  ga–ha | hb–jh | ji–ka | …',
  '│  └ ji–ka 잎:  jihun@ → 52,310행': '│  └ ji–ka leaf:  jihun@ → row 52,310', '│              jiu@example.com → 734,201행': '│              jiu@example.com → row 734,201', '│              jiwon@ → 9,876행': '│              jiwon@ → row 9,876',
  // Step 1
  '인덱스가 없으면 백만 행을 모두 본다': 'Without an index, all million rows are looked at',
  '회원 백만 명이 담긴 users 표에서 이메일 하나로 회원을 찾는다고 해 봅시다. 행은 가입한 순서로 쌓여 있어 이메일 순서와 관계가 없습니다. 6.4에서 본 것처럼 엔진은 첫 행부터 끝 행까지 하나씩 비교할 수밖에 없습니다. 4.1의 O(n)입니다.':
    'Say you look up a member by email in a users table of a million members. Rows pile up in sign-up order, which has nothing to do with email order. As in 6.4, the engine has no choice but to compare row by row from the first to the last. It is the O(n) of 4.1.',
  '찾는 회원이 73만 번째 줄에 있어도, 같은 이메일이 더 없다는 것을 확인하려면 백만 행을 끝까지 봐야 합니다. 로그인할 때마다 이렇게 하면 서버가 버티지 못합니다.': 'Even when the member is on row 730,000, making sure there is no other row with the same email means looking through all million rows. Do this on every login and the server cannot cope.',
  '왼쪽부터 SQL 질의, DB 엔진, email 인덱스, users 표, 결과가 놓여 있습니다. 아직 인덱스가 비어 있어 엔진이 표로 바로 갑니다.': 'From the left stand the SQL query, the DB engine, the email index, the users table and the result. The index is still empty, so the engine goes straight to the table.',
  '엔진이 쓸 수 있는 인덱스가 없는 것을 확인합니다.': 'The engine finds there is no index it can use.', '엔진이 백만 행을 처음부터 끝까지 비교합니다.': 'The engine compares a million rows from start to end.', '한 명을 찾는 데 백만 번 비교했습니다.': 'It took a million comparisons to find one person.',
  '엔진은 몇 행을 비교할까요?': 'How many rows does the engine compare?', '찾은 뒤에도 같은 이메일이 더 있을 수 있어서, 아무 정보가 없으면 끝까지 봐야 합니다.': 'Even after finding it, there might be another row with the same email, so with no other information it must look to the end.',
  '인덱스 없이 jiu를 찾으면 각 행을 비교한다': 'Finding jiu without an index compares every row', '검색 키 jiu를 찾기 위해 표의 백만 행을 검사합니다. 734,201번 행이 일치합니다.': 'To find search key jiu, a million rows of the table are checked. Row 734,201 matches.',
  // Step 2
  '인덱스 만들기': 'Building an index',
  '찾을 칸을 정렬해 따로 적어 둔다': 'Sort the column you search by and write it down separately',
  'CREATE INDEX는 email 칸만 뽑아 정렬하고, 각 이메일 옆에 그 행이 표의 어디에 있는지 적어 둔 자료구조를 만듭니다. 책 뒤의 "찾아보기"와 같습니다. 실제 데이터베이스는 이것을 B-트리로 만듭니다. 4.6의 이진 탐색 트리처럼 정렬되어 있지만, 한 노드에 가지가 수백 개라 백만 개도 서너 층이면 끝납니다.':
    'CREATE INDEX picks out just the email column, sorts it, and builds a data structure noting beside each email where its row is in the table, like the index at the back of a book. Real databases build it as a B-tree. It is sorted like the binary search tree of 4.6, but each node has hundreds of branches, so even a million entries take only three or four levels.',
  '인덱스에는 email과 행 위치만 들어 있습니다. 맨 위 노드는 "a–f는 왼쪽, g–m은 가운데…"처럼 범위만 나눠 가리키고, 맨 아래 잎에 실제 이메일과 행 위치가 있습니다.': 'The index holds only emails and row positions. The top node just divides ranges, like "a–f to the left, g–m in the middle…", and the leaves at the bottom hold the actual emails and row positions.',
  '같은 장면입니다. 엔진이 표를 한 번 훑어 email 인덱스를 만듭니다.': 'The same scene. The engine makes one pass over the table and builds the email index.',
  '엔진이 인덱스를 만들기 시작합니다.': 'The engine starts building the index.', '표를 한 번 훑어 email과 행 위치 짝을 모읍니다.': 'One pass over the table gathers email and row-position pairs.', '정렬된 B-트리가 만들어졌습니다.': 'A sorted B-tree is built.',
  '인덱스에 들어 있는 것은?': 'What is in the index?', '정렬된 email과 그 행의 위치': 'Sorted emails and their row positions', '표 전체의 복사본': 'A copy of the whole table',
  '찾는 데 필요한 칸과 행 위치만 둡니다. 나머지 칸은 표에서 가져옵니다.': 'It keeps only the column needed for searching and the row positions. The other columns come from the table.',
  '전체 표를 한 번 읽어 email과 행 위치만 추립니다. 정렬된 email을 a–f, g–m, n–z 범위에 나눕니다.': 'One read of the whole table picks out only email and row position. The sorted emails are split into ranges a–f, g–m, n–z.',
  // Step 3
  '인덱스로 찾기': 'Finding with the index', '인덱스 사용': 'Using index', '3층 내려감': 'Down 3 levels', '나무 내려가기': 'Going down the tree',
  '나무를 몇 층만 내려가 행 위치를 얻는다': 'Go down just a few levels of the tree to get the row position',
  '이제 같은 질의를 보내면 엔진은 email 인덱스를 쓰기로 계획합니다. 뿌리에서 "j는 g–m 쪽", 가지에서 "jiu는 ji–ka 쪽"을 골라 내려가면 잎에서 행 위치 734,201을 얻습니다. 그 행 하나만 표에서 읽으면 끝입니다. 4.1의 O(log n)입니다.':
    'Now when the same query is sent, the engine plans to use the email index. Choosing "j is toward g–m" at the root and "jiu is toward ji–ka" at the branch, it goes down and gets row position 734,201 at the leaf. Reading just that one row from the table finishes it. It is the O(log n) of 4.1.',
  '비교는 노드 세 개를 거치며 몇십 번, 표에서 읽는 행은 하나입니다. 행이 10억 개로 늘어도 한두 층이 더해질 뿐입니다.': 'It takes a few dozen comparisons across three nodes, and one row is read from the table. Even with a billion rows, only a level or two is added.',
  '같은 장면입니다. 엔진이 인덱스를 거쳐 표의 한 행으로 바로 갑니다.': 'The same scene. The engine goes through the index straight to one row of the table.',
  '엔진이 이번에는 인덱스를 쓰기로 합니다.': 'This time the engine decides to use the index.', '엔진이 뿌리, 가지, 잎 세 노드를 거쳐 행 위치를 얻습니다.': 'The engine gets the row position through three nodes: root, branch, leaf.', '얻은 위치의 행 하나만 표에서 읽습니다.': 'It reads just the one row at that position from the table.', '같은 답을 백만 배 가까이 적은 일로 얻었습니다.': 'It got the same answer with nearly a million times less work.',
  '뿌리: j → g–m 가지로': 'Root: j → to the g–m branch', '가지: ji → ji–ka 잎으로': 'Branch: ji → to the ji–ka leaf', '잎: jiu@example.com → 734,201행': 'Leaf: jiu@example.com → row 734,201', '노드 3개 + 행 1개 읽음 (전에는 100만 행)': 'Read 3 nodes + 1 row (1M rows before)', '잎: ji–ka': 'Leaf: ji–ka',
  '인덱스를 쓰면 엔진이 읽는 노드는 몇 개쯤일까요?': 'With the index, about how many nodes does the engine read?', '3개 정도': 'About 3', '1,000,000개': '1,000,000',
  '한 노드에 가지가 수백 개라 백만 개도 세 층이면 닿습니다.': 'Each node has hundreds of branches, so even a million entries are reached in three levels.',
  '행이 10억 개로 늘면 인덱스로 찾는 일은 어떻게 될까요?': 'If the rows grow to a billion, what happens to finding with the index?', '한두 층이 더해질 뿐이다': 'Only a level or two is added', '1,000배 늘어난다': 'It grows 1,000 times',
  'O(log n)이라 데이터가 1,000배 늘어도 층은 조금만 늘어납니다.': 'It is O(log n), so even with 1,000 times more data the levels grow only a little.',
  'jiu는 g–m 가지에 있으므로 다른 가지를 건너뛴다': 'jiu is in the g–m branch, so the other branches are skipped', '뿌리에서 범위를 고르고 잎에서 행 번호를 얻는다.': 'Pick a range at the root and get the row number at the leaf.',
  'jiu는 g–m 범위에 있으므로 해당 가지만 내려갑니다. 잎에서 734,201번 위치를 확인하고 표에서 그 행 하나만 읽습니다.': 'jiu is in the g–m range, so only that branch is followed down. At the leaf it finds position 734,201 and reads just that one row from the table.',
  // Step 4
  '대가': 'The cost', '새 회원 추가': 'New member', '새 행': 'New row', '새 행 넣기': 'Insert new row', '표에 쓰기': 'Write to table', '인덱스도 고치기': 'Fix the index too', '쓰기 두 곳': 'Writes in two places', '잎 고침': 'Leaf fixed', '행 추가': 'Row added', '행 1개 추가': '1 row added', '해당 범위에 추가': 'Added to its range', '끝으로 찾기': 'Search by ending',
  '인덱스는 쓰기를 느리게 하고 모든 질의를 돕지는 않는다': 'An index slows writes and does not help every query',
  '인덱스는 공짜가 아닙니다. 행을 넣거나 email을 바꿀 때마다 인덱스도 제자리를 찾아 고쳐야 하고, 저장 공간도 더 듭니다. 또 인덱스는 정렬된 칸의 앞부분으로 찾는 데에만 도움이 됩니다. email이 "example.com으로 끝나는" 행처럼 중간이나 끝으로 찾으면 정렬 순서를 쓸 수 없어 다시 전체 스캔이 됩니다.':
    'An index is not free. Every time a row is inserted or an email changes, the index must be updated in the right place too, and it takes more storage. And an index helps only when searching by the start of the sorted column. Searching by the middle or end, like rows whose email "ends with example.com", cannot use the sort order and becomes a full scan again.',
  '자주 찾는 칸에만 인덱스를 둡니다. 읽기가 많은 로그인 email에는 꼭 두고, 거의 찾지 않는 칸에는 두지 않습니다. 엔진이 실제로 인덱스를 쓰는지는 EXPLAIN으로 확인합니다.': 'Put indexes only on columns you search often. A login email that is read a lot should have one; a column you rarely search should not. Whether the engine really uses an index you check with EXPLAIN.',
  '같은 장면입니다. 새 행을 넣을 때 인덱스도 함께 고쳐지고, 인덱스를 쓸 수 없는 질의는 다시 표를 훑습니다.': 'The same scene. Inserting a new row updates the index too, and a query that cannot use the index scans the table again.',
  '새 회원을 넣습니다.': 'A new member is inserted.', '표에 행을 씁니다.': 'The row is written to the table.', '인덱스에도 제자리를 찾아 끼워 넣습니다.': 'It is slotted into its place in the index too.', '엔진이 다시 모든 행을 훑습니다.': 'The engine scans every row again.', '끝부분으로 찾는 질의는 인덱스 순서를 쓸 수 없습니다.': 'A query by the ending cannot use the index order.',
  "① INSERT INTO users VALUES (1000001, '하준', 'hajun@example.com');": "① INSERT INTO users VALUES (1000001, 'Hajun', 'hajun@example.com');",
  '표 끝에 1,000,001행 추가': 'Row 1,000,001 added at the end of the table', '뿌리: h → g–m 가지': 'Root: h → g–m branch', '가지: ha → ga–ha 잎': 'Branch: ha → ga–ha leaf', '잎: hajun@ → 1,000,001행 끼워 넣기': 'Leaf: slot in hajun@ → row 1,000,001',
  "'%@example.com' → 앞부분을 모름": "'%@example.com' → the start is unknown", 'users 표 · hajun@…': 'users table · hajun@…', 'email 인덱스 · 734,201행': 'email index · row 734,201',
  '인덱스를 다섯 개 둔 표에 행을 넣으면?': 'What happens when you insert a row into a table with five indexes?', '다섯 인덱스를 모두 고쳐야 해서 쓰기가 느려진다': 'All five indexes must be updated, so writes slow down', '인덱스가 많을수록 쓰기도 빨라진다': 'The more indexes, the faster writes get',
  '인덱스마다 정렬을 지켜야 하므로 쓸 때마다 할 일이 늘어납니다.': 'Each index must stay sorted, so every write has more work to do.',
  "WHERE email LIKE 'ji%'(ji로 시작)는 인덱스를 쓸 수 있을까요?": "Can WHERE email LIKE 'ji%' (starts with ji) use the index?", '쓸 수 있다': 'Yes', '쓸 수 없다': 'No',
  '앞부분이 정해져 있으면 정렬된 나무에서 ji로 시작하는 구간으로 바로 갈 수 있습니다.': 'With the start fixed, it can go straight to the stretch starting with ji in the sorted tree.',
  '인덱스가 있으면 읽기는 줄고 쓰기는 늘어난다': 'With an index, reads shrink and writes grow', 'email 인덱스는 앞부분 순서로 정렬됨': 'The email index is sorted by the start', 'email 끝부분으로 검색하면 범위를 못 골라 다시 전체 스캔': 'Searching by the end of email cannot pick a range, so it is a full scan again',
  '새 회원을 표에 쓰고, email 인덱스에도 같은 회원의 행 번호를 적어야 합니다. 끝부분 검색은 앞에서부터 정렬한 범위로 가지를 고를 수 없습니다.': 'A new member is written to the table, and the same member\'s row number must also be written in the email index. A search by the ending cannot choose a branch by ranges sorted from the start.',
};
