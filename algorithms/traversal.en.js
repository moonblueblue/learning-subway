// English for 4.7 Graph search. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Notes on the still pictures
  '너비 우선 · 큐: 방문 {0} · 다음 {1}': 'Breadth first · queue: visited {0} · next {1}',
  '깊이 우선 · 스택: 방문 {0} · 다음 {1}': 'Depth first · stack: visited {0} · next {1}',
  '너비 우선 · 큐: 방문 {0} · A → {1} 경로 선 {#2}개': 'Breadth first · queue: visited {0} · path A → {1} uses {2} {2|edge|edges}',
  'A → B 다음: 큐면 C (가까운 점부터, 너비 우선) · 스택이면 D (한 갈래 끝까지, 깊이 우선)': 'After A → B: a queue takes C (nearest first, breadth first) · a stack takes D (one branch to the end, depth first)',
  // Page
  '그래프 탐색 · 레슨 4.7': 'Graph search · Lesson 4.7',
  '같은 그래프를 너비 우선(큐)과 깊이 우선(스택)으로 한 걸음씩 탐색하며 방문 순서와 찾은 길을 비교해 보세요.':
    'Search the same graph step by step breadth-first (with a queue) and depth-first (with a stack), and compare the visit order and the path found.',
  '너비 우선과 깊이 우선은 어떤 순서로 길을 찾을까요? 같은 그래프를 큐와 스택으로 한 걸음씩 탐색해 보세요.':
    'In what order do breadth-first and depth-first search find their way? Search the same graph step by step with a queue and a stack.',
  'A부터 I까지 아홉 곳이 길로 이어져 있고, 탐색 순서대로 번호가 붙는 장면': 'Nine places, A to I, joined by roads and numbered in the order searched',
  '길로 이어진 아홉 곳': 'Nine places joined by roads', '방문함 (짙을수록 먼 겹)': 'Visited (darker = farther ring)', '방문 대기': 'Waiting to be visited', '처음 들어온 길': 'Road first arrived by', '찾은 경로': 'Path found',
  '탐색 고르기': 'Choose a search', '탐색': 'Search', '한 걸음': 'One step', '끝까지': 'To the end', '방문 순서': 'Visit order', 
  '"한 걸음"으로 하나씩, "끝까지"로 한 번에 탐색해 보세요.': 'Search one at a time with "One step", or all at once with "To the end".',
    '너비 우선': 'Breadth-first', '깊이 우선': 'Depth-first', '너비 우선 (BFS)': 'Breadth-first (BFS)', '깊이 우선 (DFS)': 'Depth-first (DFS)', '둘 다': 'Both',
  '큐 (앞에서 꺼냄)': 'Queue (take from the front)', '스택 (맨 위에서 꺼냄)': 'Stack (take from the top)', '해시 테이블': 'Hash table',
  // Readouts
  '{#0}번째: 큐 앞에서 {1}를 꺼내 방문 · 이웃 {2}를 큐 뒤에 넣음': 'Visit {0}: take {1} from the front of the queue · put neighbours {2} at the back of the queue',
  '{#0}번째: 큐 앞에서 {1}를 꺼내 방문 · 새로 넣을 이웃 없음': 'Visit {0}: take {1} from the front of the queue · no new neighbours to add',
  '{#0}번째: 스택 맨 위에서 {1}를 꺼내 방문 · 이웃 {2}를 스택에 넣음': 'Visit {0}: take {1} off the top of the stack · put neighbours {2} on the stack',
  '{#0}번째: 스택 맨 위에서 {1}를 꺼내 방문 · 새로 넣을 이웃 없음': 'Visit {0}: take {1} off the top of the stack · no new neighbours to add',
  '{0}: {1}에 닿았습니다. 찾은 길 {2} · 길 {#3}개 · 방문 {#4}곳': '{0}: reached {1}. Path found {2} · {3} {3|road|roads} · {4} places visited',
  '{0} 끝: 방문 순서 {1}': '{0} done: visit order {1}', '{0}를 골랐습니다.': 'Chose {0}.',
  // Step 1
  'A의 이웃을 큐에 넣음': 'Put A\'s neighbours in the queue', '먼저 발견한 순서대로 방문': 'Visit in the order found', '거리 1인 점부터 탐색': 'Search the points at distance 1 first',
  '가까운 곳부터 한 겹씩 넓혀 간다': 'Spread out one ring at a time from the nearest',
  '그래프(2.5)에서 A부터 모든 곳을 빠짐없이 방문해 봅시다. 너비 우선 탐색(BFS)은 큐(4.3)를 씁니다. A를 꺼내 방문하고, A의 이웃을 큐 뒤에 넣고, 다시 큐 앞에서 꺼냅니다. 그러면 A에서 한 칸 떨어진 곳, 두 칸 떨어진 곳 순서로 물결처럼 퍼져 나갑니다.':
    'Let us visit every place in a graph (2.5) starting from A, missing none. Breadth-first search (BFS) uses a queue (4.3). It takes A out and visits it, puts A\'s neighbours at the back of the queue, and takes the next one from the front. So it spreads out like a ripple: places one step from A, then two steps, and so on.',
  '방문 순서는 A, B, C, D, E, F, G, H, I입니다. 노드 위 숫자는 방문 순서이고, 색이 짙을수록 A에서 먼 겹입니다. 장면 아래 큐에서 앞의 것이 먼저 나갑니다.':
    'The visit order is A, B, C, D, E, F, G, H, I. The number above a node is its visit order, and the darker the colour, the farther the ring from A. In the queue under the scene, the front goes out first.',
  'A부터 I까지 아홉 곳이 길로 이어진 그래프가 있습니다. 탐색이 진행되면 방문한 곳에 순서 번호가 붙고, 방문할 차례를 기다리는 곳은 테두리가 점선으로 바뀝니다.':
    'There is a graph of nine places, A to I, joined by roads. As the search goes on, visited places get order numbers, and places waiting their turn get dotted borders.',
  '"끝까지"를 눌러 너비 우선 탐색을 끝까지 해 보세요.': 'Press "To the end" to run breadth-first search all the way.', '한 칸 떨어진 B, C를 먼저, 그다음 두 칸 떨어진 D, E, F를 방문했습니다.': 'It visited B and C, one step away, first, then D, E and F, two steps away.',
  '너비 우선 탐색에서 I는 왜 마지막에 방문할까요?': 'Why is I visited last in breadth-first search?', '이름이 마지막이라서': 'Its name comes last', 'A에서 가장 멀어서': 'It is farthest from A', '이웃이 적어서': 'It has few neighbours',
  'I는 A에서 길 4개를 지나야 닿는 가장 바깥 겹이라 마지막에 방문합니다.': 'I is in the outermost ring, reached from A only after 4 roads, so it is visited last.',
  // Step 2
  '한 이웃을 골라 내려감': 'Pick one neighbour and go down', '막다른 곳에서 스택을 되감음': 'At a dead end, unwind the stack', '다른 갈래를 계속 탐색': 'Go on searching another branch',
  '한 길로 끝까지 갔다가 되돌아온다': 'Go to the end of one road, then come back',
  '깊이 우선 탐색(DFS)은 스택(4.3)을 씁니다. 방금 넣은 이웃을 먼저 꺼내므로, 한 방향으로 갈 수 있는 데까지 깊이 들어갔다가 막히면 되돌아와 다른 길로 갑니다. 1.5의 재귀로도 같은 일을 할 수 있습니다. 미로를 손으로 더듬어 가는 방식과 비슷합니다.':
    'Depth-first search (DFS) uses a stack (4.3). It takes out the neighbour just put in first, so it goes as deep as it can in one direction and, when blocked, comes back and takes another road. The recursion of 1.5 can do the same. It is like feeling your way through a maze by hand.',
  '방문 순서는 A, B, D, G, E, C, F, H, I입니다. B에서 D, G로 쭉 내려간 뒤 G의 이웃 E로, 다시 C, F, H로 이어 갑니다. 너비 우선과 같은 그래프인데 순서가 전혀 다릅니다.':
    'The visit order is A, B, D, G, E, C, F, H, I. From B it runs straight down to D and G, then to G\'s neighbour E, then on to C, F, H. The same graph as breadth-first, but a completely different order.',
  '같은 그래프에서 깊이 우선 탐색을 합니다. 방문한 곳에 순서 번호가 붙고, 장면 아래 스택의 맨 위가 다음에 방문할 곳입니다.': 'Depth-first search on the same graph. Visited places get order numbers, and the top of the stack under the scene is the next place to visit.',
  '"끝까지"를 눌러 깊이 우선 탐색을 끝까지 해 보세요.': 'Press "To the end" to run depth-first search all the way.', 'A, B, D, G로 깊이 들어간 뒤 되돌아가며 나머지를 방문했습니다.': 'It went deep through A, B, D, G, then visited the rest on the way back.',
  '깊이 우선 탐색이 다음 방문할 곳을 꺼내는 구조는?': 'From which structure does depth-first search take the next place to visit?',
  '가장 나중에 넣은 이웃을 먼저 꺼내야 한 방향으로 깊이 들어갈 수 있습니다.': 'Taking out the neighbour put in last is what lets it go deep in one direction.',
  // Step 3
  'I까지 길 찾기': 'Finding a path to I', 'A에서 I까지 같은 비용의 길': 'Roads of equal cost from A to I', 'BFS로 거리별 방문': 'BFS visits by distance', '처음 도착한 경로가 최소 홉': 'The first path to arrive has the fewest hops',
  '너비 우선은 가장 짧은 길을 찾는다': 'Breadth-first finds the shortest path',
  '이번에는 A에서 I까지 가는 길을 찾고, I에 닿으면 멈춥니다. 노드마다 "어디서 왔는지"를 적어 두면 I에서 거꾸로 따라가 길을 얻습니다. 너비 우선은 가까운 겹부터 보므로 처음 닿은 길이 지나는 길 수가 가장 적은 길입니다. 깊이 우선은 먼저 들어간 길이 멀리 돌아가더라도 그 길을 씁니다.':
    'This time find a path from A to I, stopping on reaching I. Noting at each node "where it came from" lets you follow back from I to get the path. Breadth-first looks at the nearest rings first, so the path it reaches first crosses the fewest roads. Depth-first uses whichever road it entered first, even if it goes the long way round.',
  '너비 우선은 A–B–D–G–I, 길 4개로 찾습니다. 깊이 우선은 A–B–D–G–E–C–F–H–I, 길 8개짜리 먼 길을 찾습니다. 길마다 걸리는 시간이 다르면 4.8의 최단 경로 알고리즘이 필요합니다.':
    'Breadth-first finds A–B–D–G–I, 4 roads. Depth-first finds the long way, A–B–D–G–E–C–F–H–I, 8 roads. When roads take different amounts of time, the shortest-path algorithm in 4.8 is needed.',
  '같은 그래프에서 A부터 I까지 길을 찾습니다. I에 닿으면 탐색을 멈추고, 찾은 길이 굵은 금색으로 표시됩니다.': 'On the same graph, find a path from A to I. The search stops on reaching I, and the path found is marked in thick gold.',
  '너비 우선과 깊이 우선으로 각각 I까지 길을 찾아 보세요.': 'Find a path to I with breadth-first and with depth-first.', '너비 우선은 길 4개, 깊이 우선은 길 8개짜리 길을 찾았습니다.': 'Breadth-first found a path of 4 roads, depth-first one of 8.',
  '지나는 길의 수가 가장 적은 경로를 언제나 찾는 것은?': 'Which always finds the path crossing the fewest roads?', '가까운 겹부터 차례로 보므로 처음 닿은 순간이 가장 적은 길 수입니다.': 'It looks at the nearest rings in turn, so the moment it first arrives uses the fewest roads.',
  // Step 4
  '어디에 쓰나': 'Where they are used', '가까운 점부터 찾기': 'Find the nearest points first', '큐로 다음 이웃 선택': 'Pick the next neighbour with a queue', '한 갈래를 끝까지 볼 때는 스택': 'Use a stack to follow one branch to the end',
  '물을 질문에 따라 탐색 방법을 고른다': 'Choose the search to suit the question',
  '두 탐색 모두 모든 노드와 길을 한 번씩 보므로 일의 양은 O(노드 수 + 길 수)로 같습니다. 차이는 순서입니다. "가장 가까운 것", "몇 단계 만에"를 묻는다면 너비 우선, "갈 수 있나", "모든 경우를 끝까지"를 묻는다면 깊이 우선이 편합니다. 웹 크롤러, SNS의 친구 추천, 미로 풀기, 4.10의 문제들에서 다시 만납니다.':
    'Both searches look at every node and road once, so the work is the same, O(nodes + roads). The difference is the order. For "the nearest" or "in how many steps", breadth-first is handy; for "can it get there" or "every case to the end", depth-first. You meet them again in web crawlers, friend suggestions on social media, maze solving and the problems of 4.10.',
  '아래 상황마다 어느 탐색이 어울리는지 골라 보세요. 직접 두 탐색을 다시 돌려 봐도 됩니다.': 'For each situation below, choose which search fits. You can also run both searches again yourself.',
  '같은 그래프에서 두 탐색을 모두 돌려 볼 수 있습니다.': 'Both searches can be run on the same graph.',
  'SNS에서 "친구의 친구"까지만 추천하려고 합니다. 어울리는 탐색은?': 'A social network wants to suggest only "friends of friends". Which search fits?', '나에게서 1단계, 2단계 떨어진 사람을 겹 순서대로 볼 수 있습니다.': 'It can look at people 1 step, then 2 steps away from you, ring by ring.',
  '미로에서 출구로 가는 길이 하나라도 있는지만 알고 싶습니다. 메모리를 적게 쓰려면?': 'You only want to know whether there is any way to the exit of a maze. To use little memory?',
  '한 길만 따라가며 되돌아올 길만 기억하면 됩니다. 너비 우선은 한 겹의 노드를 모두 큐에 들고 있어야 합니다.': 'It follows one road and only has to remember the way back. Breadth-first has to hold a whole ring of nodes in its queue.',
};
