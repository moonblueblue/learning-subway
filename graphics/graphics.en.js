// English for 6.7 Rasterization. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '화면 그리기 · 레슨 6.7': 'Rasterization · Lesson 6.7',
  '점 하나가 프레임 버퍼의 칸이 되고, 비스듬한 선이 계단 모양 칸이 되고, 삼각형이 꼭짓점 처리, 래스터화, 픽셀 색칠을 거쳐 칸으로 채워지고, 깊이 버퍼가 가까운 것만 남기는 과정을 따라가 보세요.':
    'Follow how a point becomes a cell in the frame buffer, a slanted line becomes a staircase of cells, a triangle is filled with cells through vertex processing, rasterization and pixel shading, and the depth buffer keeps only what is nearest.',
  '점, 선, 삼각형은 어떻게 화면의 픽셀이 될까요? 좌표가 GPU의 그리기 파이프라인을 지나 프레임 버퍼의 칸으로 바뀌는 과정을 한 정거장씩 옮겨 보세요.':
    'How do points, lines and triangles become pixels on screen? Move coordinates one station at a time through the GPU\'s drawing pipeline until they become cells in the frame buffer.',
  '좌표와 삼각형이 래스터화와 픽셀 색칠을 거쳐 프레임 버퍼와 화면에 켜지는 장면': 'Coordinates and triangles going through rasterization and pixel shading to light up in the frame buffer and on screen',
  '그리기 파이프라인': 'Drawing pipeline', '"다음 단계"를 누르면 코드가 오른쪽으로 움직입니다.': 'Press "Next step" and the shape moves to the right.', '"다음 단계"를 눌러 도형를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the shape one station at a time. Prediction questions come up along the way.',
  '그릴 것': 'What to draw', '그리기 단계': 'Drawing stages', '그릴 것과 버퍼': 'What to draw and buffers', '파일': 'File', '도구': 'Tool', '오류': 'Error', '읽기': 'Read',
  '좌표': 'Coordinates', '래스터화': 'Rasterize', '프레임 버퍼': 'Frame buffer', '깊이 버퍼': 'Depth buffer', '꼭짓점 처리': 'Vertex stage', '픽셀 색칠': 'Pixel shading', '선': 'Line', '삼각형': 'Triangle',
  // Legs and badges
  '좌표 → 래스터화': 'Coordinates → rasterize', '래스터화 → 프레임 버퍼': 'Rasterize → frame buffer', '프레임 버퍼 → 화면': 'Frame buffer → screen', '꼭짓점 3개 → 꼭짓점 처리': '3 vertices → vertex stage', '꼭짓점 처리 → 래스터화': 'Vertex stage → rasterize', '래스터화 → 픽셀 색칠': 'Rasterize → pixel shading', '픽셀 색칠 → 프레임 버퍼': 'Pixel shading → frame buffer', '삼각형 2개 → 래스터화': '2 triangles → rasterize', '래스터화 → 깊이 버퍼': 'Rasterize → depth buffer', '깊이 버퍼 → 프레임 버퍼': 'Depth buffer → frame buffer',
  '래스터화 · 칸 고르기': 'Rasterize · pick cells', '래스터화 · (255, 0, 0)': 'Rasterize · (255, 0, 0)', '래스터화 · x마다 y 고르기': 'Rasterize · y for each x', '래스터화 · 칸 8개': 'Rasterize · 8 cells', '래스터화 · 안에 든 칸': 'Rasterize · cells inside', '래스터화 · 칸 20개': 'Rasterize · 20 cells', '꼭짓점 처리 · 화면 좌표로': 'Vertex stage · to screen coords', '깊이 버퍼 · A': 'Depth buffer · A', '깊이 버퍼 · 비교 통과': 'Depth buffer · test passed',
  '점 하나': 'One point', '빨간 점': 'Red dot', '칸 1개': '1 cell', '칸 1개 칠함': '1 cell painted', '10 × 7 칸': '10 × 7 cells', '8 × 4 칸': '8 × 4 cells', '8 × 5 칸': '8 × 5 cells', '끝점 2개': '2 endpoints', '칸 8개': '8 cells', '계단 8칸': '8-cell staircase', '기울기 3/7 ≈ 0.43': 'Slope 3/7 ≈ 0.43',
  '꼭짓점 3개': '3 vertices', '꼭짓점 3번 계산': '3 calcs', '칸 20개': '20 cells', '색 20개': '20 colours', '20칸 색칠': '20 painted', '삼각형 20칸이 칠해짐': 'The triangle\'s 20 cells are painted', '삼각형 2개': '2 triangles', '모두 ∞': 'All ∞', '깊이 9': 'Depth 9', 'A 20칸': 'A 20 cells', 'B 칸들': 'B\'s cells', 'B가 앞': 'B in front', '비교 통과': 'Test passed', '겹친 칸 = 3': 'Overlap = 3', 'A칸 = 9': 'A cells = 9',
  // Window lines
  '점 (3, 2), 빨강': 'Point (3, 2), red', 'x = 3 → 왼쪽에서 4번째 칸 (0부터 셈)': 'x = 3 → 4th cell from the left (counting from 0)', 'y = 2 → 위에서 3번째 줄': 'y = 2 → 3rd row from the top', '(3, 2) 칸 = 빨강 (255, 0, 0)': 'Cell (3, 2) = red (255, 0, 0)', '모니터가 프레임 버퍼를 1초에 60번 읽어 빛으로 바꿈': 'The monitor reads the frame buffer 60 times a second and turns it into light',
  '선 (0, 0) → (7, 3)': 'Line (0, 0) → (7, 3)', 'y 0 0 1 1 2 2 3 3  (0.43·x를 반올림)': 'y 0 0 1 1 2 2 3 3  (0.43·x rounded)',
  '모델 좌표의 삼각형': 'Triangle in model coordinates', '가로로 2배 늘려 화면 가운데 (5, 3.5)로 옮겨 그리기': 'Stretch 2× sideways and move to the screen centre (5, 3.5)', '가로로 2배 늘림: A (−4, 2.5), B (4, 2.5), C (0, −2.5)': 'Stretched 2× sideways: A (−4, 2.5), B (4, 2.5), C (0, −2.5)', '가운데 (5, 3.5)로 옮김: A (1, 6), B (9, 6), C (5, 1)': 'Moved to the centre (5, 3.5): A (1, 6), B (9, 6), C (5, 1)',
  '칸마다 중심점이 세 변 안쪽에 있는지 확인': 'For each cell, check its centre is inside all three edges', '칸마다 색 계산: 기본색 × 빛의 밝기': 'Colour for each cell: base colour × light brightness', '20칸을 따로따로, 동시에 계산할 수 있음': 'The 20 cells can be computed separately, at the same time',
  'A: 앞 단계의 삼각형, 깊이 9 (멀리)': 'A: the triangle from the last step, depth 9 (far)', 'B: 왼쪽 위 작은 삼각형, 깊이 3 (가까이)': 'B: a small triangle at top left, depth 3 (near)', '그리는 순서: A 다음 B': 'Drawing order: A, then B',
  'A의 20칸: 깊이 ∞ → 9 (더 가까우니 칠함)': 'A\'s 20 cells: depth ∞ → 9 (nearer, so painted)', '겹친 칸: 지금 깊이 9, B의 깊이 3': 'Overlapping cells: depth now 9, B\'s depth 3', '겹친 칸은 B, 나머지는 A': 'Overlapping cells are B, the rest A',
  // Step 1
  '화면은 픽셀 칸의 격자이고, 점 하나는 칸 하나다': 'The screen is a grid of pixel cells, and a point is one cell',
  '화면은 작은 칸(픽셀)이 가로세로로 늘어선 격자입니다. 0.3에서 본 것처럼 칸마다 빨강·초록·파랑 세기를 숫자로 가집니다. 이 숫자들을 담은 메모리를 프레임 버퍼라 하고, 모니터는 이것을 1초에 수십 번 읽어 빛으로 바꿉니다. 좌표 (3, 2)에 빨간 점을 찍는다는 것은 프레임 버퍼의 그 칸에 (255, 0, 0)을 쓰는 일입니다.':
    'A screen is a grid of small cells (pixels) in rows and columns. As in 0.3, each cell holds red, green and blue strengths as numbers. The memory holding these numbers is called the frame buffer, and the monitor reads it dozens of times a second and turns it into light. Putting a red dot at coordinate (3, 2) means writing (255, 0, 0) into that cell of the frame buffer.',
  '좌표의 x는 왼쪽에서 몇 번째 칸, y는 위에서 몇 번째 줄입니다(화면은 y가 아래로 커집니다). 1920×1080 화면은 칸이 207만 개, 칸마다 3바이트라 프레임 버퍼 하나가 약 6MB입니다.': 'A coordinate\'s x is which cell from the left and y is which row from the top (on screen, y grows downward). A 1920×1080 screen has 2.07 million cells at 3 bytes each, so one frame buffer is about 6MB.',
  '왼쪽부터 좌표, 래스터화, 프레임 버퍼, 화면이 놓여 있습니다. 점의 좌표가 칸 하나로 바뀌어 화면에 켜집니다.': 'From the left stand the coordinates, the rasterizer, the frame buffer and the screen. The point\'s coordinates become one cell and light up on screen.',
  '좌표를 격자의 칸으로 바꿉니다.': 'The coordinates become a cell of the grid.', '그 칸에 빨강 값을 씁니다.': 'The red value is written to that cell.', '모니터가 프레임 버퍼를 읽어 빨간 점을 켭니다.': 'The monitor reads the frame buffer and lights the red dot.',
  '1920 × 1080 화면에서 칸마다 3바이트를 쓰면 프레임 버퍼는 얼마쯤일까요?': 'On a 1920 × 1080 screen with 3 bytes per cell, about how big is the frame buffer?', '약 6MB': 'About 6MB', '약 6KB': 'About 6KB', '약 6GB': 'About 6GB',
  '1920 × 1080 × 3 = 6,220,800바이트, 약 6MB입니다.': '1920 × 1080 × 3 = 6,220,800 bytes, about 6MB.',
  // Step 2
  '선 긋기': 'Drawing a line',
  '비스듬한 선은 계단 모양의 칸이 된다': 'A slanted line becomes a staircase of cells',
  '칸은 네모라서 비스듬한 선을 그대로 그릴 수 없습니다. 래스터화는 선이 지나가는 자리와 가장 가까운 칸들을 골라 칠합니다. (0, 0)에서 (7, 3)까지의 선은 가로로 더 길므로, x마다 한 칸씩 고르고 그 x에서 선의 높이에 가장 가까운 y를 고릅니다.':
    'Cells are square, so a slanted line cannot be drawn as it is. Rasterization picks and paints the cells nearest to where the line passes. The line from (0, 0) to (7, 3) is longer sideways, so it picks one cell for each x, choosing the y nearest the line\'s height at that x.',
  '여덟 칸이 두 칸씩 계단처럼 내려갑니다. 칸이 클수록 계단이 눈에 띄고(앨리어싱), 화면이 촘촘할수록 매끈해 보입니다. 가장자리 칸을 반쯤 칠해 계단을 숨기는 것이 안티앨리어싱입니다.': 'The eight cells step down two at a time like stairs. The bigger the cells, the more the steps show (aliasing); the finer the screen, the smoother it looks. Half-painting the edge cells to hide the steps is anti-aliasing.',
  '같은 장면입니다. 선의 두 끝점이 계단 모양의 칸 여덟 개로 바뀝니다.': 'The same scene. The line\'s two endpoints turn into eight cells shaped like stairs.',
  'x를 하나씩 늘리며 선의 높이에 가장 가까운 줄을 고릅니다.': 'Increasing x one at a time, it picks the row nearest the line\'s height.', '고른 여덟 칸을 칠합니다.': 'It paints the eight cells it picked.', '화면에 계단 모양 선이 켜집니다.': 'A staircase-shaped line lights up on screen.',
  '이 선은 몇 칸으로 그려질까요?': 'How many cells is this line drawn with?', '4칸': '4 cells', '8칸': '8 cells', '32칸': '32 cells',
  '가로로 더 긴 선이라 x 0–7마다 한 칸씩, 여덟 칸입니다.': 'The line is longer sideways, so one cell for each x from 0 to 7: eight cells.',
  '같은 크기 화면에 칸을 가로세로 두 배로 촘촘하게 하면?': 'On a screen of the same size, what if the cells were twice as dense each way?', '계단이 더 작아져 선이 매끈해 보인다': 'The steps get smaller and the line looks smoother', '선이 사라진다': 'The line disappears',
  '칸이 작을수록 계단 한 칸이 작아집니다. 고해상도 화면이 선명해 보이는 까닭입니다.': 'The smaller the cells, the smaller each step. That is why high-resolution screens look sharp.',
  '멀리서 보면 비스듬한 선, 가까이 보면 계단': 'A slanted line from afar, stairs up close',
  // Step 3
  '삼각형 채우기': 'Filling a triangle',
  '3D 모델도 결국 삼각형을 칸으로 채우는 일이다': 'Even a 3D model comes down to filling triangles with cells',
  '게임 속 사람, 건물, 지형은 모두 수많은 삼각형으로 만든 겉면입니다. 그리는 순서는 늘 같습니다. 꼭짓점 처리가 꼭짓점을 옮기고 돌려 화면 좌표로 바꾸고(곱하기와 더하기 몇 번), 래스터화가 세 꼭짓점 안에 중심이 들어오는 칸을 고르고, 픽셀 색칠이 칸마다 색을 정해 프레임 버퍼에 씁니다.':
    'People, buildings and terrain in a game are all surfaces made of countless triangles. The drawing order is always the same. Vertex processing moves and rotates the vertices into screen coordinates (a few multiplications and additions), rasterization picks the cells whose centres fall inside the three vertices, and pixel shading decides each cell\'s colour and writes it to the frame buffer.',
  '꼭짓점 세 개가 칸 20개가 됐습니다. 꼭짓점 처리는 꼭짓점 수만큼, 픽셀 색칠은 칸 수만큼 일합니다. 화면을 가득 채우는 장면에서는 칸 수가 훨씬 많습니다.': 'Three vertices became 20 cells. Vertex processing works once per vertex, pixel shading once per cell. In a scene that fills the screen, there are far more cells.',
  '왼쪽부터 꼭짓점, 꼭짓점 처리, 래스터화, 픽셀 색칠, 프레임 버퍼가 놓여 있습니다. 이것이 GPU의 그리기 파이프라인입니다.': 'From the left stand the vertices, vertex processing, rasterization, pixel shading and the frame buffer. This is the GPU\'s drawing pipeline.',
  '꼭짓점마다 옮기고 늘려 화면 좌표로 바꿉니다.': 'Each vertex is moved and stretched into screen coordinates.', '칸의 중심이 삼각형 안에 있는 칸을 고릅니다.': 'It picks the cells whose centres are inside the triangle.', '칸마다 색을 정합니다. 각 칸의 계산은 서로 상관이 없습니다.': 'It decides each cell\'s colour. Each cell\'s calculation is independent of the others.', '색을 프레임 버퍼에 씁니다.': 'The colours are written to the frame buffer.',
  '래스터화가 고른 칸은 몇 개일까요?': 'How many cells did rasterization pick?', '3개': '3', '20개': '20', '70개': '70',
  '아래로 갈수록 2, 4, 6, 8칸씩 넓어져 모두 20칸입니다. 꼭짓점은 3개지만 칠할 칸은 그보다 훨씬 많습니다.': 'Going down it widens by 2, 4, 6, 8 cells, 20 cells in all. There are 3 vertices, but far more cells to paint.',
  '픽셀 색칠을 GPU가 잘하는 까닭은?': 'Why is the GPU good at pixel shading?', '칸마다 계산이 서로 상관없어 수천 개를 한꺼번에 할 수 있어서': 'Each cell\'s calculation is independent, so thousands can be done at once', 'GPU가 CPU보다 한 번 계산이 훨씬 빨라서': 'A single GPU calculation is much faster than a CPU one',
  'GPU는 단순한 계산기를 수천 개 가지고 있어, 서로 기다릴 필요 없는 칸 계산을 동시에 합니다.': 'A GPU has thousands of simple calculators, so it does cell calculations that need not wait for each other all at the same time.',
  '꼭짓점 처리': 'Vertex stage',
  // Step 4
  '앞뒤 가리기': 'Front and back',
  '깊이 버퍼로 가까운 것만 남긴다': 'The depth buffer keeps only what is nearest',
  '3D 장면에서는 삼각형이 겹칩니다. 그리는 순서대로 덮어쓰면 뒤에 있는 것이 앞의 것을 가릴 수 있습니다. 그래서 칸마다 지금 칠한 것의 거리(깊이)를 따로 적어 두는 깊이 버퍼를 둡니다. 새 색을 칠하기 전에 깊이를 비교해 더 가까울 때만 덮어씁니다.':
    'In a 3D scene, triangles overlap. Overwriting in drawing order can let something behind cover what is in front. So there is a depth buffer that notes, for each cell, how far away (the depth) the thing painted there is. Before painting a new colour, the depths are compared, and it overwrites only when nearer.',
  '먼 삼각형 A(깊이 9)를 먼저 그리고 가까운 B(깊이 3)를 그리면, 겹친 칸은 B가 차지합니다. 순서를 거꾸로 해도 A는 깊이 비교에서 져서 B를 덮지 못합니다. 그리는 순서와 상관없이 맞는 그림이 나옵니다.': 'Draw the far triangle A (depth 9) first and the near B (depth 3) after, and B takes the overlapping cells. Reverse the order and A loses the depth test and cannot cover B. Whatever the drawing order, the picture comes out right.',
  '왼쪽부터 삼각형 두 개, 래스터화, 깊이 버퍼, 프레임 버퍼가 놓여 있습니다. 가까운 삼각형이 늦게 와도, 일찍 와도 앞에 보입니다.': 'From the left stand two triangles, the rasterizer, the depth buffer and the frame buffer. The nearer triangle shows in front whether it comes late or early.',
  '먼 삼각형 A를 먼저 칠합니다.': 'The far triangle A is painted first.', '비어 있던(∞) 칸이라 A가 모두 칠하고 깊이 9를 적습니다.': 'The cells were empty (∞), so A paints them all and writes depth 9.', '가까운 삼각형 B를 칠하려 합니다.': 'The near triangle B is about to be painted.', '깊이를 비교해 더 가까운 B만 덮어썼습니다.': 'Comparing depths, only the nearer B overwrote.',
  '겹친 칸은 누구 색이 될까요?': 'Whose colour do the overlapping cells get?', 'B (깊이 3, 더 가까움)': 'B (depth 3, nearer)', 'A (먼저 칠함)': 'A (painted first)',
  'B를 먼저, A를 나중에 그렸다면 겹친 칸은?': 'If B were drawn first and A after, what would the overlapping cells be?', '그래도 B': 'Still B', 'A로 덮인다': 'Covered by A',
  'A의 깊이 9가 이미 적힌 3보다 멀어 비교에서 집니다. 순서와 상관없이 가까운 것이 남습니다.': 'A\'s depth 9 is farther than the 3 already written, so it loses the test. Whatever the order, the nearer one stays.',
  'A 그리기': 'Draw A', 'B 그리기': 'Draw B', 'A (깊이 9)': 'A (depth 9)', 'B (깊이 3)': 'B (depth 3)', 'B가 덮는 칸 중 A와 겹치는 칸이 있음': 'Some of B\'s cells overlap A',
};
