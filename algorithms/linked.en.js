// English for 4.2 Arrays and linked lists. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Reading diagrams: the array as touching cells, the list as a chain
  '배열 맨 앞에 넣으면 여섯 칸이 모두 한 칸씩 뒤로 간다': 'Inserting at the front of an array moves all six cells back by one',
  '붙어 있는 칸 0–5번에 A–F가 있습니다. 맨 앞에 새 값을 넣으려고 F부터 A까지 여섯 값을 한 칸씩 뒤로 옮기고, 비워진 0번 칸에 새 값을 씁니다.':
    'A–F sit in touching cells 0–5. To put a new value at the front, the six values from F back to A each move one cell back, and the new value goes into the freed cell 0.',
  '삽입 전 · 붙어 있는 칸': 'Before inserting · touching cells', '한 칸씩 뒤로 옮긴 뒤 0번 칸에 새 값': 'After moving each back one cell, the new value goes into cell 0',
  '위치 4: 배열은 바로, 리스트는 다섯 노드를 거쳐': 'Position 4: the array goes straight there, the list through five nodes',
  '배열은 시작 주소에 4를 더해 4번 칸의 E로 바로 갑니다. 연결 리스트는 head에서 A, B, C, D를 거쳐 E에 닿습니다.':
    'The array adds 4 to its start address and goes straight to E in cell 4. The linked list starts at head and passes A, B, C and D to reach E.',
  '배열: 계산 한 번': 'Array: one calculation', '연결 리스트: 링크 다섯 번': 'Linked list: five links', '시작 주소': 'Start',
  // Page
  '배열과 연결 리스트 · 레슨 4.2': 'Arrays and linked lists · Lesson 4.2',
  '같은 값을 배열과 연결 리스트에 담고, k번째 읽기와 중간에 끼워 넣기의 걸음 수를 비교해 보세요.':
    'Put the same values in an array and a linked list, and compare the steps to read the kth value and to insert in the middle.',
  '중간에 값을 끼워 넣을 때 두 구조는 무엇이 다를까요? 같은 값을 배열과 연결 리스트에 담고 읽기와 끼워 넣기의 걸음 수를 세어 보세요.':
    'How do the two structures differ when a value is inserted in the middle? Put the same values in an array and a linked list and count the steps to read and to insert.',
  '붙어 있는 배열 칸과 화살표로 이어진 연결 리스트 노드가 있는 장면': 'Array cells side by side and linked-list nodes joined by arrows',
  '메모리 속 두 구조': 'Two structures in memory', '찾은 칸': 'Cell found', '밀린 칸': 'Shifted cell', '지나간 노드': 'Node passed', '다음 노드를 가리키는 화살표': 'Arrow to the next node', '새 값': 'New value',
  '위치 고르기': 'Choose a position', '위치 k': 'Position k', '한 일': 'Action', '읽기': 'Read', '끼워 넣기': 'Insert', '처음 값으로': 'Reset values', '처음 값 A–F로 되돌렸습니다.': 'Reset to the starting values A–F.',
  '할 일': 'Task', '위치 k를 고르고 읽기나 끼워 넣기를 눌러 보세요.': 'Choose a position k and press read or insert.',
  '걸음 수 기록 · 최근 것이 위': 'Step log · newest on top', '읽기나 끼워 넣기를 하면 여기에 쌓입니다': 'Reads and inserts pile up here',
    // Structures and readouts
  '배열': 'Array', '연결 리스트': 'Linked list', '끝': 'end', '{0} 노드': '{0} node', '새 {0} → {1}': 'new {0} → {1}', '{0} → 새 {1}': '{0} → new {1}',
  '번': ' steps', '시작': 'Start', '{#0}번': '{0}', '{#0}걸음': '{0} {0|step|steps}', '{#0}칸 이동': 'Shift {0} {0|cell|cells}',
  '배열: {#0} + {#1} = {#2}번지로 바로 감 · {#3}번': 'Array: {0} + {1} = address {2}, straight there · {3} {3|step|steps}',
  '연결 리스트: head부터 노드 {#0}개를 거침 · {#1}번': 'Linked list: passes {0} {0|node|nodes} from head · {1} {1|step|steps}',
  '배열: 밀 값 없이 빈 칸에 바로 넣음 · 1번': 'Array: nothing to shift, straight into the empty cell · 1 step',
  '배열: 뒤의 값 {#0}개를 한 칸씩 밀고 넣음 · {#1}번': 'Array: shifts the {0} {0|value|values} after it by one cell and inserts · {1} steps',
  '연결 리스트: 화살표 2개를 바꿈 · {#0}번': 'Linked list: changes 2 arrows · {0} steps',
  '연결 리스트: 노드 {#0}개를 걸어간 뒤 화살표 2개를 바꿈 · {#1}번': 'Linked list: walks {0} {0|node|nodes}, then changes 2 arrows · {1} steps',
  '배열: 칸이 가득 찼습니다. 더 큰 배열을 새로 만들어 모두 옮겨야 합니다.': 'Array: the cells are full. A bigger array must be made and everything moved into it.',
  '읽기 k = {#0} (값 {#1}개)': 'Read k = {0} ({1} {1|value|values})', '끼워 넣기 k = {#0} (값 {#1}개)': 'Insert k = {0} ({1} {1|value|values})',
  '맨 끝(끼워 넣기만)': 'At the end (insert only)',
  // Step 1
  '배열 맨 앞에 삽입': 'Insert at the front of an array', '기존 6칸을 뒤로 이동': 'Move the 6 cells back', '빈 첫 칸에 새 값': 'New value in the emptied first cell',
  '배열은 칸이 붙어 있어 바로 찾는다': 'An array\'s cells sit together, so it finds values at once',
  '배열은 값을 메모리의 이웃한 칸에 차례로 둡니다. 시작 주소가 100이면 k번째 값은 100 + k번지에 있으므로 계산 한 번으로 바로 갑니다. 대신 중간에 값을 끼워 넣으려면 그 뒤의 값을 모두 한 칸씩 밀어야 합니다. 1.4의 파이썬 리스트가 배열입니다.':
    'An array keeps values in neighbouring memory cells in order. If it starts at address 100, the kth value is at address 100 + k, so one calculation goes straight there. But inserting a value in the middle means shifting every value after it by one cell. The Python list in 1.4 is an array.',
  '읽기는 몇 번째든 1번에 끝납니다. 1번 자리에 끼워 넣으면 뒤의 값 다섯 개가 오른쪽 끝부터 한 칸씩 밀리고, 맨 끝에 넣으면 밀 것이 없습니다.':
    'A read takes 1 step whatever the position. Insert at position 1 and the five values after it shift one cell each, starting from the right end; insert at the very end and there is nothing to shift.',
  '주소 100부터 109까지 붙어 있는 배열 칸 열 개가 있고, 앞의 여섯 칸에 값이 들어 있습니다.': 'There are ten array cells side by side at addresses 100 to 109, and the first six hold values.',
  '위치 3을 고르고 "읽기"를 눌러 보세요.': 'Choose position 3 and press "Read".', '100 + 3 = 103번지로 바로 갔습니다. 1번이면 끝납니다.': 'It went straight to 100 + 3 = address 103. One step is enough.',
  '위치 1에 "끼워 넣기"를 해 보세요.': '"Insert" at position 1.', '뒤의 값을 모두 한 칸씩 밀었습니다. 값이 n개면 최악에 n번 밉니다(O(n)).': 'Every value after it shifted one cell. With n values, the worst case is n shifts (O(n)).',
  '이번에는 맨 끝 위치에 끼워 넣어 보세요.': 'Now insert at the last position.', '밀 값이 없어 바로 넣었습니다.': 'There was nothing to shift, so it went straight in.',
  // Step 2
  '리스트의 위치 4 읽기': 'Read position 4 of the list', 'head에서 링크 4개 따라감': 'Follow 4 links from head', '다섯 번째 노드 도착': 'Arrive at the fifth node',
  '연결 리스트는 화살표로 다음을 가리킨다': 'A linked list points to the next with arrows',
  '연결 리스트의 각 칸(노드)은 값과 함께 "다음 노드의 주소"를 가집니다. 노드는 메모리 아무 곳에나 있어도 됩니다. k번째 값을 읽으려면 맨 앞(head)부터 화살표를 k번 따라가야 합니다. 대신 끼워 넣을 때는 새 노드를 만들고 화살표 두 개만 바꾸면 됩니다.':
    'Each cell (node) of a linked list holds a value along with "the address of the next node". Nodes can be anywhere in memory. To read the kth value you must follow the arrows k times from the front (head). But to insert, you make a new node and change just two arrows.',
  '위치 4를 읽으면 점이 head부터 노드 다섯 개를 차례로 거칩니다. 맨 앞에 끼워 넣기는 화살표 두 개만 바꾸므로 값이 몇 개든 금방입니다. 다만 가운데에 넣으려면 그 자리까지 걸어가는 시간이 듭니다.':
    'Read position 4 and the dot passes five nodes in turn from head. Inserting at the front changes just two arrows, so it is quick however many values there are. But inserting in the middle takes time to walk to that spot.',
  '노드 여섯 개가 메모리 여기저기에 흩어져 있고, head에서 시작하는 화살표가 다음 노드를 차례로 가리킵니다.': 'Six nodes are scattered around memory, and arrows starting from head point to each next node in turn.',
  '위치 4를 읽어 보세요.': 'Read position 4.', 'head부터 화살표를 4번 따라갔습니다. 읽기가 O(n)입니다.': 'It followed the arrows 4 times from head. Reading is O(n).',
  '위치 0(맨 앞)에 끼워 넣어 보세요.': 'Insert at position 0 (the front).', '새 노드가 옛 head를 가리키고, head가 새 노드를 가리키게 바꿨습니다. 2번이면 끝납니다.': 'The new node points at the old head, and head was changed to point at the new node. Two steps are enough.',
  '위치 3에 끼워 넣어 보세요.': 'Insert at position 3.', '앞의 노드 세 개를 걸어간 뒤 화살표 두 개를 바꿨습니다. 아무것도 밀지 않았습니다.': 'It walked past the three nodes in front, then changed two arrows. Nothing was shifted.',
  // Step 3
  '나란히 비교': 'Side by side', '맨 앞에 새 값': 'A new value at the front', '배열 6칸 이동 vs 링크 변경': '6 array cells moved vs links changed', '예시 비용 7걸음 vs 2걸음': 'Example cost: 7 steps vs 2 steps',
  '같은 일도 구조에 따라 걸음 수가 다르다': 'The same job takes different steps in different structures',
  '같은 값을 가진 배열과 연결 리스트에 같은 일을 시켜 봅시다. 아래 표에 걸음 수가 쌓입니다. 앞쪽에 끼워 넣기는 연결 리스트가, k번째 읽기는 배열이 유리합니다. 어느 쪽이 늘 낫지는 않고, 자주 하는 일에 맞춰 고릅니다.':
    'Give the same job to an array and a linked list holding the same values. The steps pile up in the table below. Inserting near the front favours the linked list; reading the kth favours the array. Neither is always better; you choose to suit what you do often.',
  '위치 0에 넣으면 배열은 값 6개를 모두 밀고 넣느라 7번, 연결 리스트는 2번. 마지막 위치를 읽으면 배열은 1번, 연결 리스트는 끝까지 걸어갑니다. 4.1의 말로 하면 배열 읽기 O(1)·삽입 O(n), 리스트 읽기 O(n)·맨 앞 삽입 O(1)입니다.':
    'Inserting at position 0 takes the array 7 steps, shifting all 6 values, and the linked list 2. Reading the last position takes the array 1 step while the linked list walks to the end. In the words of 4.1: array read O(1), insert O(n); list read O(n), insert at front O(1).',
  '위에는 배열, 아래에는 같은 값의 연결 리스트가 있습니다. 한 번 누르면 두 구조가 같은 일을 하고, 각자의 걸음 수를 셉니다.': 'Above is an array, below a linked list with the same values. One press makes both do the same job, each counting its own steps.',
  '배열 위치 4': 'Array position 4', '리스트 위치 4': 'List position 4', '시작 주소 + 4': 'Start address + 4', '위치 4까지': 'Up to position 4', '배열 앞 삽입': 'Array: insert at front', '리스트 앞 삽입': 'List: insert at front',
  '삽입 전': 'Before insert', '한 칸씩 이동': 'Shift one cell each', '새 값 쓰기': 'Write the new value', '새 노드 연결': 'Link the new node', 'head 변경': 'Change head', '{#0} → 새 1': '{0} → new 1', '새 1 → 1': 'new 1 → 1', '1 → 새 1': '1 → new 1',
  '위치 0에 끼워 넣어 두 구조의 걸음 수를 비교해 보세요.': 'Insert at position 0 and compare the steps of the two structures.', '배열은 전부 밀고, 리스트는 화살표 두 개만 바꿨습니다.': 'The array shifted everything; the list changed just two arrows.',
  '마지막 위치를 읽어 비교해 보세요.': 'Read the last position and compare.', '배열은 1번, 리스트는 끝까지 걸어갔습니다.': 'The array took 1 step; the list walked to the end.',
  // Step 4
  '언제 무엇을': 'Which, when', '위치로 반복 조회': 'Repeated lookups by position', '배열 시작 주소 + 위치': 'Array start address + position', '앞 노드를 거치지 않고 읽음': 'Read without passing the nodes in front',
  '자주 하는 일에 맞는 구조를 고른다': 'Choose the structure that suits what you do often',
  '자료구조를 고르는 기준은 "무엇을 자주 하나"입니다. 번호로 자주 찾으면 배열, 앞이나 중간에 자주 넣고 빼면 연결 리스트가 어울립니다. 배열은 칸이 붙어 있어서 3.7의 캐시 라인 덕도 크게 봅니다. 그래서 실무에서는 대개 배열(파이썬 리스트)을 먼저 쓰고, 필요할 때만 바꿉니다.':
    'The test for choosing a data structure is "what do you do often". Looking up by number often suits an array; often adding and removing at the front or middle suits a linked list. Because an array\'s cells sit together, it also gains a lot from the cache lines in 3.7. So in practice an array (a Python list) usually comes first, changed only when needed.',
  '해 보기의 상황마다 어느 쪽이 걸음 수가 적은지 따져 고르세요. 직접 두 구조로 실행해 봐도 됩니다.': 'For each situation in Try, work out which takes fewer steps and choose. You can also run both structures yourself.',
  '위에는 배열, 아래에는 연결 리스트가 있습니다. 상황을 읽고 어울리는 구조를 고른 뒤 직접 실행해 확인할 수 있습니다.': 'Above is an array, below a linked list. Read the situation, choose the structure that suits it, then run it to check.',
  '음악 앱에서 "37번째 곡 재생"을 자주 누릅니다. 어울리는 구조는?': 'In a music app you often press "play song 37". Which structure suits it?', '번호로 바로 가는 읽기가 1번이면 끝납니다.': 'A read that goes straight by number takes 1 step.',
  '실행 취소 기록처럼 맨 앞에 계속 새 항목을 넣습니다. 어울리는 구조는?': 'Like an undo history, new items keep going in at the front. Which structure suits it?', '맨 앞 삽입이 화살표 두 개로 끝납니다. 배열이면 매번 전부 밀어야 합니다.': 'Inserting at the front takes two arrows. An array would have to shift everything every time.',
  '값을 처음부터 끝까지 차례로 자주 읽습니다. 3.7의 캐시를 생각하면?': 'You often read the values from start to end in order. Thinking of the cache in 3.7?', '이웃한 칸이 함께 캐시에 올라와 적중이 많습니다. 흩어진 노드는 매번 실패하기 쉽습니다.': 'Neighbouring cells come into the cache together, giving many hits. Scattered nodes tend to miss every time.',
};
