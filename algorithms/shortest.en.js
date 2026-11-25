// English for 4.8 Shortest paths. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = (() => {
const minutes = (text) => text.replace(/(\d+)분은 더 느려 그대로/g, '$1 min is slower, unchanged').replace(/(\d+)분/g, '$1 min').replace('새로 볼 길 없음', 'no new roads to check');
return {
  // Notes on the still pictures
  'A → I: {0} = {1} = {#2}분': 'A → I: {0} = {1} = {2} min',
  'H–I 정체 5 → 12분 · A → I: {0} = {1} = {#2}분': 'Jam on H–I, 5 → 12 min · A → I: {0} = {1} = {2} min',
  '미확정 중 가장 가까운 {0}를 {#1}분으로 확정': 'The nearest unsettled place, {0}, is settled at {1} min',
  '후보 {0} → 가장 작은 {1}를 꺼냄': (list, place) => `Candidates ${list.replace(/(\d+)분/g, '$1 min')} → the smallest, ${place}, is taken`,
  // Page
  '최단 경로 · 레슨 4.8': 'Shortest paths · Lesson 4.8',
  '길마다 걸리는 시간이 적힌 그래프에서 다익스트라 알고리즘을 한 걸음씩 돌려 가장 빠른 길을 찾고, 정체가 생기면 답이 어떻게 바뀌는지 확인해 보세요.':
    'Run Dijkstra\'s algorithm step by step on a graph with a travel time on each road to find the fastest way, and see how the answer changes when there is a jam.',
  '지도 앱은 가장 빠른 길을 어떻게 찾을까요? 길마다 걸리는 시간이 적힌 그래프에서 다익스트라 알고리즘을 한 걸음씩 돌려 보세요.':
    'How does a map app find the fastest way? Run Dijkstra\'s algorithm step by step on a graph with a travel time on each road.',
  '길마다 걸리는 시간이 적힌 그래프에서 A로부터의 가장 빠른 시간을 구하는 장면': 'Working out the fastest times from A on a graph with a travel time on each road',
  '시간이 적힌 길': 'Roads with times', '확정된 곳': 'Settled place', '시간을 줄인 길': 'Road that cut a time', '지금 쓰는 앞 곳 길': 'Road to the current previous place', '찾은 경로': 'Path found',
  '거리표 · A에서 걸리는 시간': 'Distance table · time from A', '시간': 'Time', '앞 곳': 'Previous', '확정': 'Settled', '출발': 'start',
  '길 고르기': 'Choose a path', '한 걸음': 'One step', '끝까지': 'To the end',   '"한 걸음"으로 하나씩, "끝까지"로 한 번에 실행해 보세요.': 'Run it one at a time with "One step", or all at once with "To the end".',
  '두 버튼으로 두 길의 시간을 비교해 보세요.': 'Compare the times of the two paths with the two buttons.',
    // Readouts
  '{#0}분': '{0} min', '{0} = {#1}분': '{0} = {1} min', '{0} 확정 ({#1}분) · {2}': (place, time, changes) => `${place} settled (${time} min) · ${minutes(changes)}`,
  '모두 확정했습니다. I까지 가장 빠른 길: {0}, {#1}분': 'All settled. Fastest way to I: {0}, {1} min',
  '모두 확정했습니다. I까지 가장 빠른 길: {0}, {#1}분 (H–I 정체 중)': 'All settled. Fastest way to I: {0}, {1} min (H–I jammed)',
  '{0}: {1} · 길 {#2}개 · {3} = {#4}분': '{0}: {1} · {2} {2|road|roads} · {3} = {4} min',
  '길 수가 가장 적은 길': 'Fewest roads', '가장 빠른 길': 'Fastest way', '길 수가 가장 적은 길 (너비 우선)': 'Fewest roads (breadth-first)',
  'H–I 정체: 꺼짐': 'H–I jam: off', 'H–I 정체: 켜짐 (12분)': 'H–I jam: on (12 min)', 'H–I 정체를 껐습니다.': 'The H–I jam was turned off.', 'H–I 길이 막혀 12분이 됐습니다. 다시 실행해 보세요.': 'The H–I road is jammed and now takes 12 min. Run it again.',
  // Step 1
  '길마다 시간': 'A time on each road', 'A에서 I까지': 'From A to I', 'A–B–E–H–I 비용을 합산': 'Add up the cost of A–B–E–H–I',
  '길 수가 적다고 가장 빠른 것은 아니다': 'Fewer roads does not mean fastest',
  '4.7의 그래프에 길마다 걸리는 시간(분)을 적었습니다. 이렇게 선에 값이 붙은 그래프를 가중 그래프라고 합니다. 너비 우선 탐색이 찾은 A–B–D–G–I는 길 4개로 가장 적지만 4 + 5 + 2 + 3 = 14분입니다. 길 수가 같아도 더 빠른 길이 있을 수 있습니다.':
    'The graph from 4.7 now has a travel time (in minutes) on each road. A graph with values on its lines like this is called a weighted graph. The A–B–D–G–I found by breadth-first search has the fewest roads, 4, but takes 4 + 5 + 2 + 3 = 14 minutes. Even with the same number of roads, there can be a faster way.',
  '두 버튼을 눌러 비교해 보세요. A–B–E–H–I도 길 4개인데 4 + 1 + 2 + 5 = 12분입니다. 지도 앱이 알려 줘야 하는 것은 시간의 합이 가장 작은 길, 곧 최단 경로입니다.':
    'Press the two buttons to compare. A–B–E–H–I is also 4 roads, but takes 4 + 1 + 2 + 5 = 12 minutes. What a map app should show is the path with the smallest total time: the shortest path.',
  'A부터 I까지 아홉 곳이 길로 이어져 있고, 길마다 가운데에 걸리는 시간(분)이 적혀 있습니다.': 'Nine places, A to I, are joined by roads, with each road\'s travel time (in minutes) written in its middle.',
  '"길 수가 가장 적은 길"과 "가장 빠른 길"을 모두 눌러 보세요.': 'Press both "Fewest roads" and "Fastest way".', '둘 다 길 4개인데 14분과 12분입니다.': 'Both are 4 roads, but take 14 and 12 minutes.',
  '지도 앱이 "가장 빠른 길"로 알려 줘야 하는 것은?': 'What should a map app show as "the fastest way"?',
  '지나는 길이 가장 적은 길': 'The path with the fewest roads', '걸리는 시간의 합이 가장 작은 길': 'The path with the smallest total time', '이름 순서가 빠른 길': 'The path earliest in name order',
  '길마다 시간이 다르므로 길의 개수가 아니라 시간의 합을 비교해야 합니다.': 'Each road takes a different time, so you must compare total time, not the number of roads.',
  // Step 2
  '다익스트라': 'Dijkstra', 'A에서 거리 0': 'Distance 0 from A', '가장 가까운 미확정 정점 선택': 'Pick the nearest unsettled point', 'C를 2분으로 확정': 'Settle C at 2 min',
  '가장 가까운 곳부터 하나씩 확정한다': 'Settle places one by one, nearest first',
  '다익스트라 알고리즘은 "지금까지 알아낸 시간"이 가장 작은 곳을 하나 골라 확정하고, 그곳에서 나가는 길로 이웃의 시간을 줄일 수 있는지 봅니다(줄일 수 있으면 표를 고칩니다). 이것을 모든 곳이 확정될 때까지 되풀이합니다. 확정된 곳의 시간은 다시 바뀌지 않습니다.':
    'Dijkstra\'s algorithm picks the place with the smallest "time found so far", settles it, and checks whether the roads leaving it can cut its neighbours\' times (updating the table if so). It repeats this until every place is settled. A settled place\'s time never changes again.',
  'A(0), C(2), B(4), E(5), F(5), H(7), D(9), G(11), I(12) 순서로 확정됩니다. E는 처음에 C를 거쳐 10분으로 적혔다가, B를 거치는 5분으로 고쳐집니다. 표에서 줄어든 칸이 초록으로 빛납니다.':
    'Places are settled in the order A(0), C(2), B(4), E(5), F(5), H(7), D(9), G(11), I(12). E is first written as 10 min via C, then corrected to 5 min via B. Cells that shrink in the table glow green.',
  '같은 그래프입니다. 곳마다 지금까지 알아낸 시간이 적혀 있고, 확정된 곳은 초록으로 바뀝니다. 아래 표에 곳마다 시간과 바로 앞 곳이 적힙니다.':
    'The same graph. Each place shows the time found so far, and settled places turn green. The table below gives each place\'s time and the place just before it.',
  'A 확정 (0분) · B: ∞ → 4분, C: ∞ → 2분': 'A settled (0 min) · B: ∞ → 4 min, C: ∞ → 2 min',
  '"한 걸음"이나 "끝까지"로 다익스트라를 끝까지 실행해 보세요.': 'Run Dijkstra to the end with "One step" or "To the end".', 'I까지 12분, A–B–E–H–I입니다.': '12 min to I, by A–B–E–H–I.',
  '다익스트라가 매번 다음으로 확정하는 곳은?': 'Which place does Dijkstra settle next each time?',
  '아직 확정 안 된 곳 중 시간이 가장 작은 곳': 'The unsettled place with the smallest time', '이름이 가장 빠른 곳': 'The place earliest by name', '방금 확정한 곳의 첫 이웃': 'The first neighbour of the place just settled',
  '그곳보다 짧게 가는 길은 이제 없으므로 안심하고 확정할 수 있습니다(시간이 음수가 아니라면).': 'No shorter way to it can exist now, so it can safely be settled (as long as no time is negative).',
  // Step 3
  '정체가 생기면': 'When a jam happens', 'H–I에 정체': 'A jam on H–I', 'A–B–D–G–I로 우회': 'Detour by A–B–D–G–I', '새 최단 시간 14분': 'New shortest time 14 min',
  '길의 시간이 바뀌면 답도 바뀐다': 'When road times change, the answer changes',
  '지도 앱은 실시간 교통 정보로 길의 시간을 계속 고칩니다. H–I 길이 막혀 5분에서 12분이 되었다고 해 봅시다. 같은 다익스트라를 다시 돌리면 다른 길이 가장 빨라집니다. 알고리즘은 그대로이고, 바뀐 것은 그래프의 가중치뿐입니다.':
    'A map app keeps updating road times with live traffic. Say the H–I road jams and goes from 5 to 12 minutes. Run the same Dijkstra again and a different path becomes fastest. The algorithm is unchanged; only the graph\'s weights changed.',
  '정체를 켜고 다시 실행하면 I까지 A–B–D–G–I, 14분이 됩니다. 정체 전에는 이 길이 2분 더 느렸습니다.': 'Turn the jam on and run again, and the way to I becomes A–B–D–G–I, 14 min. Before the jam this path was 2 minutes slower.',
  '같은 그래프에서 H–I 길에 정체를 켜고 끌 수 있습니다. 켜면 그 길의 시간이 12분으로 바뀌고 빨간 점선이 됩니다.': 'On the same graph a jam can be turned on and off on the H–I road. When on, that road takes 12 minutes and becomes a red dotted line.',
  '"H–I 정체"를 켜고 다익스트라를 끝까지 실행해 보세요.': 'Turn on "H–I jam" and run Dijkstra to the end.', '가장 빠른 길이 A–B–D–G–I, 14분으로 바뀌었습니다.': 'The fastest way changed to A–B–D–G–I, 14 min.',
  '정체가 생겼을 때 다시 계산해야 하는 이유는?': 'Why must it be worked out again when a jam happens?',
  '알고리즘이 바뀌어서': 'The algorithm changed', '길의 시간(가중치)이 바뀌어서': 'A road\'s time (weight) changed', '곳의 이름이 바뀌어서': 'A place\'s name changed',
  '같은 방법이라도 입력인 가중치가 바뀌면 최단 경로가 달라집니다.': 'Even with the same method, when the input weights change, the shortest path changes.',
  // Step 4
  '지도 앱': 'Map apps', '미확정 후보가 많음': 'Many unsettled candidates', '우선순위 큐에서 최소 비용 선택': 'Pick the lowest cost from a priority queue', '다음 정점을 빠르게 찾음': 'Find the next point quickly',
  '수백만 개의 길에서도 빠르게': 'Fast even with millions of roads',
  '실제 도로망은 곳이 수백만 개입니다. 다익스트라는 "가장 작은 시간"을 빨리 꺼내기 위해 우선순위 큐(힙)를 쓰고, 지도 앱은 목적지 방향을 어림해 먼저 살피는 A* 같은 변형과, 미리 계산해 둔 지름길 정보를 함께 씁니다. 그래도 바탕은 "가까운 곳부터 확정"이라는 이 레슨의 생각입니다.':
    'Real road networks have millions of places. Dijkstra uses a priority queue (a heap) to take out "the smallest time" quickly, and map apps also use variants such as A*, which looks first in the rough direction of the destination, along with shortcut information worked out in advance. Still, the foundation is this lesson\'s idea: "settle the nearest first".',
  '해 보기의 질문으로 정리해 보세요. 그래프를 다시 돌려 봐도 됩니다.': 'Sum up with the questions in Try. You can run the graph again too.', '같은 그래프에서 다익스트라를 다시 실행해 볼 수 있습니다.': 'Dijkstra can be run again on the same graph.',
  '다익스트라에서 "시간이 가장 작은 곳 꺼내기"를 빠르게 해 주는 자료구조는?': 'Which data structure makes Dijkstra\'s "take out the place with the smallest time" fast?',
  '우선순위 큐(힙)': 'Priority queue (heap)', '연결 리스트': 'Linked list', '가장 작은 값을 꺼내고 넣는 일을 O(log n)에 해 줍니다.': 'It takes out and puts in the smallest value in O(log n).',
  '너비 우선 탐색만으로 가장 빠른 길을 찾을 수 있는 경우는?': 'When can breadth-first search alone find the fastest way?',
  '모든 길의 시간이 같을 때': 'When every road takes the same time', '길이 많을 때': 'When there are many roads', '언제나': 'Always',
  '그때는 길 수가 적을수록 빠르므로 4.7의 너비 우선이 곧 최단 경로입니다.': 'Then fewer roads means faster, so the breadth-first search of 4.7 gives the shortest path.',
};
})();
