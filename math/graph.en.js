// English for 2.5 Graphs. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// People: 가람 Garam, 나래 Narae, 다온 Daon, 라희 Rahee, 마루 Maru.
window.lessonText = {
  // Page
  '그래프 · 레슨 2.5': 'Graphs · Lesson 2.5',
  '사람과 친구 관계를 점과 선으로 나타내며 그래프, 방향, 차수, 경로를 살펴보세요.':
    'Show people and friendships as points and lines, and look at graphs, direction, degree and paths.',
  '점과 선으로 연결 관계를 어떻게 나타낼까요? 친구 관계를 그래프로 그리고, 소식이 퍼지는 길을 따라가 보세요.':
    'How do points and lines show connections? Draw friendships as a graph and follow the way news spreads.',
  '사람을 점, 관계를 선으로 나타낸 그래프': 'A graph with people as points and relationships as lines',
  '가람': 'Garam', '나래': 'Narae', '다온': 'Daon', '라희': 'Rahee', '마루': 'Maru',
  // Step 1
  '점과 선': 'Points and lines', '가람과 나래가 연결': 'Garam and Narae are linked', '두 점 사이 선 하나': 'One line between two points', '서로 이웃': 'Neighbours of each other',
  '그래프는 점과 그 사이를 잇는 선이다': 'A graph is points and the lines joining them',
  '그래프는 점(정점)과 두 점을 잇는 선(간선)으로 관계를 나타냅니다. 사람을 점으로, 친구 사이를 선으로 그리면 친구 관계 그래프가 됩니다. 0.7의 라우터 그물, 지도 앱의 도로, 웹 페이지의 링크도 모두 그래프입니다.':
    'A graph shows relationships with points (vertices) and lines joining two points (edges). Draw people as points and friendships as lines and you get a friendship graph. The router mesh in 0.7, the roads in a map app and the links between web pages are all graphs too.',
  '다섯 사람 사이에 선이 네 개 있습니다. 나래가 가람, 다온, 라희와 연결된 가운데 점이고, 마루는 다온하고만 연결되어 있습니다.':
    'There are four lines among five people. Narae is the middle point, linked with Garam, Daon and Rahee, and Maru is linked only with Daon.',
  '가람, 나래, 다온, 라희, 마루 다섯 점이 있습니다. 나래는 가람·다온·라희와, 다온은 마루와 선으로 이어져 있습니다.':
    'There are five points: Garam, Narae, Daon, Rahee and Maru. Narae is joined by lines to Garam, Daon and Rahee, and Daon to Maru.',
  '가람과 나래 등 다섯 사람의 친구 관계를 네 개의 선으로 표시합니다. 친구 관계에는 방향이 없습니다.':
    'The friendships of five people, Garam, Narae and the others, are shown with four lines. Friendship has no direction.',
  '사람 = 점     ·     친구 관계 = 방향 없는 선': 'person = point     ·     friendship = line without direction',
  '친구 한 쌍을 잇는 선 하나': 'One line joins a pair of friends', '실선과 점선이 함께 있으면 양방향': 'A solid and a dotted line together mean both ways',
  // Step 2
  '차수': 'Degree', '선 4개': '4 lines', '선마다 양 끝을 한 번씩 셈': 'Each line counts once at each end', '차수의 합 8': 'Degrees add up to 8',
  '차수 {#0}': 'degree {0}',
  '한 점에 붙은 선의 수가 차수다': 'The number of lines at a point is its degree',
  '한 점에 이어진 선의 개수를 그 점의 차수라고 합니다. 친구 그래프에서 차수는 친구 수입니다. 모든 점의 차수를 더하면 선 수의 두 배가 됩니다. 선 하나가 양 끝 두 점의 차수를 하나씩 올리기 때문입니다.':
    'The number of lines joined to a point is called its degree. In a friendship graph, degree is the number of friends. Adding up every point\'s degree gives twice the number of lines, because each line raises the degree of the two points at its ends by one each.',
  '점 위에 차수가 뜹니다. 나래 3, 다온 2, 가람·라희·마루 1이고, 모두 더하면 8 = 선 4개 × 2입니다.':
    'The degrees appear above the points: Narae 3, Daon 2, and Garam, Rahee and Maru 1. Together they make 8 = 4 lines × 2.',
  '각 점 위에 차수가 표시되어 있습니다. 나래 3, 다온 2, 나머지 1이며 합은 8로 선 수의 두 배입니다.':
    'Each point shows its degree: Narae 3, Daon 2, the rest 1. The sum, 8, is twice the number of lines.',
  '나래 3, 다온 2, 가람과 라희와 마루가 각각 1입니다. 네 선의 양 끝을 세므로 합은 8입니다.':
    'Narae is 3, Daon 2, and Garam, Rahee and Maru 1 each. Both ends of the four lines are counted, so the sum is 8.',
  '한 사람에게 닿는 선의 수가 차수': 'Degree is the number of lines reaching a person', '네 선에는 끝점이 두 개씩 → 차수의 합 4 × 2 = 8': 'Four lines with two ends each → degrees add up to 4 × 2 = 8',
  // Step 3
  '방향이 있는 선': 'Lines with direction', '가람 → 나래': 'Garam → Narae', '가람이 나래를 팔로우': 'Garam follows Narae', '반대 방향은 별도 관계': 'The other direction is a separate relationship',
  '팔로워 {#0}': '{0} {0|follower|followers}',
  '한쪽으로만 가는 관계는 화살표로 그린다': 'A one-way relationship is drawn as an arrow',
  'SNS의 팔로우는 한쪽만 할 수도 있습니다. 이런 관계는 방향이 있는 선(방향 그래프)으로 그립니다. 가람이 나래를 팔로우해도 나래가 가람을 팔로우한다는 뜻은 아닙니다. 웹 페이지의 링크, 1.3의 함수 호출 관계도 방향 그래프입니다.':
    'A follow on social media can go one way only. Such relationships are drawn as lines with direction (a directed graph). Garam following Narae does not mean Narae follows Garam. Links between web pages and the function calls in 1.3 are directed graphs too.',
  '이번에는 실선 하나씩만 있습니다. 가람 → 나래, 라희 → 나래, 나래 → 다온, 다온 → 마루, 마루 → 다온입니다. 다온과 마루는 서로 팔로우합니다.':
    'This time each link is a single solid line: Garam → Narae, Rahee → Narae, Narae → Daon, Daon → Maru and Maru → Daon. Daon and Maru follow each other.',
  '방향이 있는 선이 다섯 개 있습니다. 가람과 라희가 나래를, 나래가 다온을 팔로우하고, 다온과 마루는 서로 팔로우합니다.':
    'There are five lines with direction. Garam and Rahee follow Narae, Narae follows Daon, and Daon and Maru follow each other.',
  '가람에서 나래로 화살표가 갑니다. 반대 방향의 화살표는 없습니다.': 'An arrow goes from Garam to Narae. There is no arrow the other way.',
  '가람 → 나래     ·     나래 → 가람은 없음': 'Garam → Narae     ·     no Narae → Garam',
  '화살표가 가리키는 쪽을 팔로우': 'Follows the one the arrow points to', '한쪽 방향 관계': 'One-way relationship', '반대 방향 관계': 'Relationship the other way',
  // Step 4
  '경로': 'Paths', '가람에서 마루로': 'From Garam to Maru', '나래와 다온을 거침': 'Through Narae and Daon', '선 3개 · 경로 길이 3': '3 lines · path length 3',
  '출발': 'Start', '도착 · 길이 {#0}': 'Arrive · length {0}',
  '선을 따라 이어 가면 경로가 된다': 'Following lines from point to point makes a path',
  '가람이 마루에게 소식을 전하려면 가람 → 나래 → 다온 → 마루 순서로 선을 따라가야 합니다. 이렇게 선을 따라 이어진 점들의 줄을 경로라고 하고, 지나는 선의 수를 경로의 길이라고 합니다. 두 점 사이 가장 짧은 경로를 찾는 방법은 4.7과 4.8에서 다룹니다.':
    'For Garam to pass news to Maru, it has to follow the lines Garam → Narae → Daon → Maru. A chain of points joined along lines like this is called a path, and the number of lines it crosses is the path\'s length. How to find the shortest path between two points is covered in 4.7 and 4.8.',
  '패킷이 가람에서 나래, 다온을 거쳐 마루에 닿습니다. 경로의 길이는 3입니다. 라희는 이 경로에 없습니다.':
    'A packet goes from Garam through Narae and Daon to Maru. The path length is 3. Rahee is not on this path.',
  '가람에서 마루까지 소식이 나래와 다온을 거쳐 전해집니다. 선 세 개를 지나는 길이 3의 경로입니다.':
    'News travels from Garam to Maru through Narae and Daon: a path of length 3 crossing three lines.',
  '가람, 나래, 다온, 마루를 순서대로 지나면 선을 세 개 건넙니다.': 'Passing Garam, Narae, Daon and Maru in order crosses three lines.',
  '가람  →¹  나래  →²  다온  →³  마루': 'Garam  →¹  Narae  →²  Daon  →³  Maru', '가람에서 마루까지 선 세 개': 'Three lines from Garam to Maru',
};
