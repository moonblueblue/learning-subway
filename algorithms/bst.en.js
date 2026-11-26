// English for 4.6 Trees and binary search trees. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = (() => {
const sides = (text) => text.replace(/왼쪽/g, 'left').replace(/오른쪽/g, 'right');
const plural = (n, word) => `${n} ${word}${n === '1' ? '' : 's'}`;
return {
  // Notes on the still pictures
  '뿌리 40 · 넣을 값 20 → 20 < 40 → 왼쪽 자식에 20': 'Root 40 · new value 20 → 20 < 40 → 20 becomes the left child',
  '65 > 50 → 오른쪽 (왼쪽 7개는 버림) → 70 → 60 → 65 찾음 · 비교 4번': '65 > 50 → right (the 7 on the left are dropped) → 70 → 60 → 65 found · 4 comparisons',
  '10, 20, …, 70을 차례로 넣음 → 늘 오른쪽 → 70까지 비교 7번': '10, 20, …, 70 inserted in order → always right → 7 comparisons to reach 70',
  '왼쪽 → 자신 → 오른쪽: {0} (작은 값부터)': 'Left → self → right: {0} (smallest first)',
  // Page
  '트리와 이진 탐색 트리 · 레슨 4.6': 'Trees and binary search trees · Lesson 4.6',
  '작으면 왼쪽, 크면 오른쪽 규칙으로 이진 탐색 트리에 값을 넣고 찾으며, 고른 트리와 기울어진 트리, 중위 순회를 비교해 보세요.':
    'Put values into and find them in a binary search tree with the rule "smaller to the left, larger to the right", and compare a balanced tree, a lopsided tree and in-order traversal.',
  '값을 나무 모양으로 두면 찾기가 왜 빨라질까요? 작으면 왼쪽, 크면 오른쪽 규칙으로 값을 넣고 찾아 보세요.':
    'Why does arranging values as a tree make finding faster? Put values in and find them with the rule "smaller to the left, larger to the right".',
  '뿌리에서 작은 값은 왼쪽 아래, 큰 값은 오른쪽 아래로 가지가 뻗은 트리 장면': 'A tree branching from the root, smaller values to the lower left and larger to the lower right',
  '이진 탐색 트리': 'Binary search tree', '뿌리': 'root', '비교한 노드': 'Node compared', '내려간 길': 'Path taken', '새로 넣은 노드': 'Node just inserted', '찾은·읽은 노드': 'Node found or read',
  '값 고르기': 'Choose a value', '넣기': 'Insert', '찾기': 'Find',   '넣을 값을 눌러 보세요.': 'Press a value to insert.', '찾을 값을 눌러 보세요.': 'Press a value to find.', '읽은 순서': 'Order read',
  '차례로 7개 넣기 (10, 20, …, 70)': 'Insert 7 in order (10, 20, …, 70)', '작은 값부터 읽기': 'Read smallest first',
    // Readouts
  '{#0}은(는) 이미 있습니다.': '{0} is already there.',
  '{#0} 넣기: 트리가 비어 있어 뿌리가 됩니다.': 'Insert {0}: the tree is empty, so it becomes the root.',
  '{#0} 넣기: {1} · 빈자리에 붙음 (비교 {#2}번)': (value, steps, n) => `Insert ${value}: ${sides(steps)} · attached to an empty spot (${plural(n, 'comparison')})`,
  '{0} → 왼쪽': '{0} → left', '{0} → 오른쪽': '{0} → right', '{0} → 빈자리': '{0} → empty spot', '{#0} = {#1} → 찾음': '{0} = {1} → found',
  '{#0} 찾기: {1} · 비교 {#2}번 · 찾음 (값 {#3}개를 리스트로 뒤지면 많게는 {#4}번)': 'Find {0}: {1} · {2} {2|comparison|comparisons} · found (searching {3} values as a list could take up to {4})',
  '{#0} 찾기: {1} · 비교 {#2}번 · 없음 (값 {#3}개를 리스트로 뒤지면 많게는 {#4}번)': 'Find {0}: {1} · {2} {2|comparison|comparisons} · not there (searching {3} values as a list could take up to {4})',
  '중위 순회: {#0} 읽음 ({#1}/{#2})': 'In-order traversal: read {0} ({1}/{2})', '작은 값부터 읽기 끝: {0}': 'Reading smallest first, done: {0}',
  '노드 {#0}개 · 높이 {#1}층': '{0} {0|node|nodes} · height {1}', '노드 {#0}개 · 높이 {#1}층 · 고르게 퍼졌다면 {#2}층': '{0} {0|node|nodes} · height {1} · {2} if balanced',
  '{#0} 찾기': 'Find {0}', '{#0}의 왼쪽': 'Left of {0}', '{#0}의 오른쪽': 'Right of {0}',
  // Step 1
  '트리에 넣기': 'Inserting into a tree', '뿌리 40 · 입력 20': 'Root 40 · input 20', '왼쪽 자식에 20': '20 as the left child',
  '작으면 왼쪽, 크면 오른쪽으로 내려간다': 'Smaller goes down left, larger goes down right',
  '트리는 맨 위의 뿌리(root)에서 가지가 갈라지는 구조입니다. 이진 탐색 트리는 노드마다 자식이 둘까지이고, 왼쪽 아래에는 그보다 작은 값만, 오른쪽 아래에는 큰 값만 둡니다. 새 값은 뿌리부터 비교하며 작으면 왼쪽, 크면 오른쪽으로 내려가 빈자리에 붙습니다.':
    'A tree is a structure whose branches split from the root at the top. In a binary search tree each node has up to two children, with only smaller values below to the left and only larger values below to the right. A new value is compared from the root, going down left if smaller and right if larger, and attaches to an empty spot.',
  '50, 30, 70을 차례로 넣으면 50이 뿌리, 30이 왼쪽, 70이 오른쪽 자식이 됩니다. 값을 넣을 때마다 비교한 노드가 노랗게 켜지고, 내려간 길이 남습니다.':
    'Insert 50, 30, 70 in turn and 50 becomes the root, 30 the left child and 70 the right child. Each time a value goes in, the nodes compared light yellow and the path taken stays visible.',
  '빈 바닥에 값을 넣으면 첫 값이 뿌리가 되고, 다음 값들은 뿌리부터 비교하며 왼쪽 또는 오른쪽 아래로 내려가 자리를 잡습니다.':
    'Insert values on an empty floor and the first becomes the root; the following values are compared from the root and go down to the lower left or right to find their place.',
  '50, 30, 70을 차례로 넣어 보세요.': 'Insert 50, 30, 70 in turn.', '50이 뿌리, 30은 왼쪽, 70은 오른쪽입니다.': '50 is the root, 30 on the left, 70 on the right.',
  '20, 40, 60, 80도 넣어 세 층짜리 트리를 만들어 보세요.': 'Insert 20, 40, 60, 80 too to make a three-level tree.', '노드 7개가 세 층에 꽉 찬 트리가 됐습니다.': 'Seven nodes fill three levels completely.',
  '이제 45를 넣으면 어디에 붙을까요?': 'If 45 goes in now, where does it attach?',
  '45 < 50이라 왼쪽, 45 > 30이라 오른쪽, 45 > 40이라 오른쪽 빈자리입니다.': '45 < 50 so left, 45 > 30 so right, 45 > 40 so the empty spot on the right.',
  // Step 2
  '균형 트리 15개': 'Balanced tree of 15', '뿌리보다 큰 값 찾기': 'Find a value larger than the root', '왼쪽 7개 제외': 'Skip the 7 on the left',
  '한 번 비교할 때마다 절반을 버린다': 'Each comparison throws away half',
  '값을 찾을 때도 뿌리부터 비교해 작으면 왼쪽, 크면 오른쪽으로 내려갑니다. 한 번 내려갈 때마다 반대쪽 가지 전체를 보지 않아도 되므로 0.6의 이진 탐색과 같습니다. 노드 15개인 고른 트리는 높이가 4라서 많아야 4번 비교하면 찾거나, 없다는 것을 압니다.':
    'Finding a value also compares from the root, going down left if smaller and right if larger. Each step down means the whole branch on the other side need not be looked at, just like the binary search in 0.6. A balanced tree of 15 nodes is 4 high, so at most 4 comparisons find the value or show it is not there.',
  '65를 찾으면 50 → 70 → 60 → 65, 비교 4번입니다. 리스트에서 찾으면 많게는 15번입니다. 없는 99도 4번 만에 빈자리에 닿아 없다는 것을 압니다.':
    'Finding 65 goes 50 → 70 → 60 → 65: 4 comparisons. Searching a list could take up to 15. Even 99, which is not there, reaches an empty spot in 4 steps, showing it is missing.',
  '값 15개가 고르게 퍼진 트리가 있습니다. 찾을 값을 고르면 점이 뿌리부터 내려가며 비교하고, 찾은 노드가 켜집니다.': 'There is a tree of 15 values spread evenly. Choose a value to find and a dot goes down from the root comparing, and the node found lights up.',
  '65를 찾아 보세요.': 'Find 65.', '비교 4번. 리스트였다면 더 걸렸을 수 있습니다.': '4 comparisons. A list could have taken longer.',
  '트리에 없는 99를 찾아 보세요.': 'Find 99, which is not in the tree.', '90의 오른쪽이 비어 있어 4번 만에 없다는 것을 알았습니다.': 'The right of 90 is empty, so in 4 steps it knew 99 was not there.',
  // Step 3
  '기울어진 트리': 'A lopsided tree', '10, 20, …, 70 삽입': 'Insert 10, 20, …, 70', '늘 오른쪽으로 이동': 'Always move right', '70까지 7개 비교': '7 comparisons to reach 70',
  '정렬된 순서로 넣으면 한쪽으로 기운다': 'Inserting in sorted order tips the tree to one side',
  '같은 값이라도 넣는 순서에 따라 트리 모양이 달라집니다. 10, 20, 30…처럼 이미 정렬된 순서로 넣으면 새 값이 늘 가장 오른쪽 아래에 붙어 트리가 한 줄로 기웁니다. 그러면 4.2의 연결 리스트와 같아져서 찾기가 O(n)이 됩니다.':
    'The same values make different tree shapes depending on the order they go in. Insert them already sorted, like 10, 20, 30…, and each new value attaches at the far lower right, so the tree leans into a single line. Then it is the same as the linked list of 4.2, and finding becomes O(n).',
  '"차례로 7개 넣기"를 누르면 오른쪽 아래로 내려가는 사다리가 생기고 높이가 7이 됩니다. 70을 찾으려면 7번 비교해야 합니다. 실무의 트리(레드-블랙 트리, B-트리)는 넣을 때마다 회전해 높이를 낮게 유지합니다.':
    'Press "Insert 7 in order" and a ladder forms going down to the right, 7 high. Finding 70 takes 7 comparisons. Trees used in practice (red-black trees, B-trees) rotate on each insert to keep their height low.',
  '빈 바닥에 10부터 70까지 차례로 넣으면 노드가 오른쪽 아래로 한 줄로 이어집니다.': 'Insert 10 to 70 in order on an empty floor and the nodes run in one line down to the right.',
  '"차례로 7개 넣기"를 눌러 보세요.': 'Press "Insert 7 in order".', '높이가 7, 한 줄짜리 트리가 됐습니다.': 'Height 7: the tree became a single line.',
  '70을 찾아 보세요.': 'Find 70.', '비교 7번. 고른 트리였다면 3번이면 됩니다.': '7 comparisons. A balanced tree would need only 3.',
  // Step 4
  '왼쪽 20 · 뿌리 40 · 오른쪽 60': 'Left 20 · root 40 · right 60', '왼쪽부터 중위 순회': 'In-order traversal from the left',
  '왼쪽–자신–오른쪽으로 돌면 정렬된다': 'Going left, self, right gives sorted order',
  '노드마다 "왼쪽 가지를 모두 읽고, 자신을 읽고, 오른쪽 가지를 읽는다"를 재귀(1.5)로 되풀이하면 값이 작은 것부터 차례로 나옵니다. 이를 중위 순회라고 합니다. 이진 탐색 트리는 찾기뿐 아니라 정렬된 순서로 읽기도 쉬운 구조입니다.':
    'Repeat "read the whole left branch, read yourself, read the right branch" at each node with recursion (1.5) and the values come out smallest first. This is called in-order traversal. A binary search tree makes not only finding but also reading in sorted order easy.',
  '"작은 값부터 읽기"를 누르면 점이 왼쪽 맨 아래부터 노드를 차례로 들르고, 아래 줄에 10, 20, 25, 30…이 정렬된 순서로 쌓입니다.':
    'Press "Read smallest first" and a dot visits the nodes in turn from the bottom left, while 10, 20, 25, 30… pile up in sorted order on the line below.',
  '값 15개가 고르게 퍼진 트리가 있습니다. 중위 순회를 하면 노드가 작은 값부터 차례로 켜집니다.': 'There is a tree of 15 values spread evenly. In-order traversal lights the nodes smallest first.',
  '"작은 값부터 읽기"를 눌러 보세요.': 'Press "Read smallest first".', '값이 작은 것부터 차례로 나왔습니다.': 'The values came out smallest first.',
  '고르게 퍼진 트리에 값이 100만 개면 높이는 대략?': 'With a million values in a balanced tree, about how high is it?', '50만': '500,000',
  '층마다 노드 수가 두 배가 되므로 2를 20번 곱하면 100만을 넘습니다. 찾기가 20번 비교로 끝납니다.': 'Each level doubles the number of nodes, and 2 multiplied 20 times passes a million. Finding takes 20 comparisons.',
  "10 → … → 70: 7회": "10 → … → 70: 7 visits",
  "40 → 60 → 70: 3회": "40 → 60 → 70: 3 visits",
  "70까지 3회 또는 7회": "3 or 7 visits to reach 70",
  "같은 일곱 값": "Same seven values",
  "같은 일곱 값도 삽입 순서에 따라 다르다": "Insertion order changes the tree for the same seven values",
  "비교할 때마다 한쪽 가지를 버린다": "Each comparison rules out one branch",
  "뿌리 40 · 왼쪽 20과 30 · 오른쪽 60": "Root 40 · left 20 and 30 · right 60",
  "삽입 순서만 바꿈": "Change only insertion order",
  "왼쪽 → 부모 → 오른쪽": "Left → parent → right",
  "왼쪽을 끝낼 때까지 40 대기": "40 waits for the left subtree",
  "왼쪽을 출력한 뒤 부모를 출력한다": "Output the left subtree before its parent",
  "출력": "Output",
  "균형 있게 값이 들어간 이진 탐색 트리에서 65를 찾아 봅니다. 50보다 크므로 오른쪽 70, 70보다 작으므로 왼쪽 60, 60보다 크므로 오른쪽 65로 갑니다. 비교할 때마다 한쪽 가지를 버립니다. 두 갈래의 크기가 비슷한 트리에서는 후보를 빠르게 줄일 수 있습니다.": "Find 65 in a balanced binary search tree. It is larger than 50, so go right to 70; smaller than 70, so go left to 60; and larger than 60, so go right to 65. Each comparison rules out one branch. A balanced tree cuts down the candidates quickly.",
};
})();
