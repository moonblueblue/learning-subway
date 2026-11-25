// English for 8D.1 The rendering pipeline. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '렌더링 파이프라인 · 레슨 8D.1': 'The rendering pipeline · Lesson 8D.1',
  '상자의 꼭짓점 하나가 모델, 월드, 카메라 좌표를 지나 거리로 나누는 원근 투영으로 화면 픽셀이 되고, 보이지 않는 삼각형을 버리고, 한 프레임 16.7ms 예산 안에 그리기까지를 따라가 보세요.':
    'Follow one corner of a box through model, world and camera coordinates, into a screen pixel by perspective projection that divides by distance, past the culling of hidden triangles, until it is drawn within a 16.7ms frame budget.',
  '3D 장면은 어떤 단계를 거쳐 화면이 될까요? 6.7의 그리기 파이프라인을 열어, 꼭짓점이 여러 좌표계를 지나 픽셀이 되는 길을 계산해 보세요.':
    'What steps turn a 3D scene into a screen? Open up the drawing pipeline of 6.7 and work out the path a vertex takes through several coordinate systems to become a pixel.',
  '모델의 꼭짓점이 월드, 카메라 기준, 원근 나누기를 지나 화면 좌표가 되는 장면': 'A model\'s vertex passing through world, camera space and the perspective divide to become screen coordinates',
  '꼭짓점과 화면': 'Vertices and the screen', '꼭짓점의 여행': 'A vertex\'s trip', '변환 단계': 'Transform stage', 
  '"다음 단계"를 누르면 꼭짓점이 오른쪽으로 움직입니다.': 'Press "Next step" and the vertex moves to the right.',
  '"다음 단계"를 눌러 꼭짓점을 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the vertex one station at a time. Prediction questions come up along the way.',
  // Stations
  '모델': 'Model', '월드': 'World', '카메라': 'Camera', '원근': 'Perspective',
  // Step 1
  '좌표 공간 여행': 'Coordinate trip', '모델 → 월드': 'Model → world', '월드 → 카메라': 'World → camera', '월드 · (4, 1, 11)': 'World · (4, 1, 11)',
  '꼭짓점은 여러 좌표계를 거쳐 화면에 닿는다': 'A vertex reaches the screen through several coordinate systems',
  '6.7에서는 꼭짓점 처리가 "옮기고 늘린다"고만 했습니다. 실제로는 좌표계를 차례로 바꿉니다. 상자 모델은 자기 가운데를 원점으로 만든 좌표(모델 공간)를 가집니다. 장면 어디에 놓을지 정하면 월드 좌표가 되고, 카메라가 원점에서 앞(+z)을 보도록 다시 옮기면 카메라 좌표가 됩니다. 각 단계는 8B.1의 행렬 곱 한 번입니다.':
    '6.7 only said vertex processing "moves and stretches". In fact it changes coordinate systems one after another. The box model has coordinates built around its own center as the origin (model space). Deciding where in the scene to put it gives world coordinates, and moving everything again so the camera sits at the origin looking ahead (+z) gives camera coordinates. Each stage is one matrix multiplication from 8B.1.',
  '상자 모서리 (1, 1, 1)이 월드에서 (4, 1, 11), 카메라 기준으로 (4, 1, 8)이 되었습니다. 같은 꼭짓점이 "누구 기준이냐"에 따라 다른 숫자로 적힙니다.':
    'The box corner (1, 1, 1) became (4, 1, 11) in the world and (4, 1, 8) relative to the camera. The same vertex is written with different numbers depending on "relative to whom".',
  '왼쪽부터 모델, 월드, 카메라, 원근, 화면 정거장이 한 줄로 놓여 있습니다. 꼭짓점이 이 좌표계들을 차례로 지납니다.':
    'From the left, the model, world, camera, perspective and screen stations stand in a row. The vertex passes through these coordinate systems in turn.',
  '상자 모델': 'Box model', '모서리 꼭짓점 (1, 1, 1) · 상자 가운데가 원점': 'Corner vertex (1, 1, 1) · box center is the origin', '상자를 놓을 곳: (3, 0, 10)': 'Where to put the box: (3, 0, 10)',
  '카메라 위치: (0, 0, 3), +z 방향을 봄': 'Camera position: (0, 0, 3), looking along +z',
  '월드로 옮기기': 'Into the world', '상자를 장면의 제자리로 옮깁니다.': 'Move the box to its place in the scene.',
  '카메라 기준으로': 'Relative to the camera', '카메라를 원점으로: (4, 1, 11) − (0, 0, 3) = (4, 1, 8)': 'Camera to the origin: (4, 1, 11) − (0, 0, 3) = (4, 1, 8)', '카메라가 원점에 오도록 장면 전체를 옮깁니다.': 'Move the whole scene so the camera is at the origin.',
  '카메라가 (0, 0, 5)로 다가가면 이 꼭짓점의 카메라 좌표 z는?': 'If the camera moves up to (0, 0, 5), what is this vertex\'s camera z?',
  '6 (더 가까워짐)': '6 (closer)', '11 − 5 = 6입니다. 카메라가 다가가면 물체까지의 거리(z)가 줄어듭니다.': '11 − 5 = 6. As the camera moves closer, the distance to the object (z) shrinks.',
  // Step 2
  '모델 → 카메라': 'Model → camera', '카메라 → 원근': 'Camera → perspective', '원근 · (0.5, 0.125)': 'Persp. · (0.5, 0.125)', '원근 → 화면': 'Perspective → screen',
  '멀수록 작게: 거리로 나눈다': 'Farther means smaller: divide by distance',
  '사람 눈과 카메라는 먼 것을 작게 봅니다. 그래서 카메라 좌표의 x, y를 거리 z로 나눕니다(원근 나누기). 그다음 화면 크기에 맞게 늘려 픽셀 좌표로 바꿉니다. 같은 크기의 물체도 두 배 멀면 화면에서 절반 크기가 됩니다.':
    'Eyes and cameras see distant things as smaller. So the x and y of camera coordinates are divided by the distance z (the perspective divide). Then they are stretched to the screen size and turned into pixel coordinates. An object of the same size, twice as far away, is half as big on screen.',
  '(4, 1, 8)은 x 0.5, y 0.125가 되어, 가로 800·세로 600 화면에서 픽셀 (600, 250)에 찍혔습니다. 같은 꼭짓점이 z = 16으로 멀어지면 x가 0.25로 줄어 가운데 쪽으로 다가옵니다.':
    '(4, 1, 8) became x 0.5, y 0.125 and landed on pixel (600, 250) of an 800 × 600 screen. If the same vertex moves away to z = 16, x shrinks to 0.25 and it moves toward the center.',
  '같은 장면입니다. 카메라 좌표를 거리로 나눠 화면 좌표로 바꿉니다.': 'The same scene. Camera coordinates are divided by distance to become screen coordinates.',
  '카메라 좌표': 'Camera coordinates', '꼭짓점 (4, 1, 8)': 'Vertex (4, 1, 8)', '화면: 가로 800, 세로 600 · 가운데 (400, 300) · 1당 400픽셀': 'Screen: 800 wide, 600 tall · center (400, 300) · 400 pixels per 1',
  '거리로 나누기': 'Divide by distance', 'x와 y를 거리 8로 나눕니다.': 'Divide x and y by the distance 8.',
  '픽셀로': 'To pixels', '픽셀 x = 400 + 0.5 × 400 = 600': 'Pixel x = 400 + 0.5 × 400 = 600', '픽셀 y = 300 − 0.125 × 400 = 250 (화면은 y가 아래로)': 'Pixel y = 300 − 0.125 × 400 = 250 (screen y points down)',
  '화면 가운데를 기준으로 픽셀 좌표를 구합니다.': 'Work out pixel coordinates from the screen center.',
  '같은 꼭짓점이 두 배 먼 (4, 1, 16)에 있으면 x′는?': 'If the same vertex is twice as far, at (4, 1, 16), what is x′?',
  '4 ÷ 16 = 0.25입니다. 두 배 멀면 가운데에서 떨어진 정도가 절반이 됩니다.': '4 ÷ 16 = 0.25. Twice as far, it sits half as far from the center.',
  // Step 3
  '버리기': 'Culling', '삼각형 12개': '12 triangles', '카메라 · 12개': 'Camera · 12', '앞면 6개만 남음': 'Only 6 front faces left',
  '보이지 않는 삼각형은 일찍 버린다': 'Throw away invisible triangles early',
  '그리기 전에 버릴 수 있는 것은 버립니다. 카메라 뒤(z ≤ 0)나 화면 밖에 있는 삼각형은 잘라냅니다(클리핑). 닫힌 물체의 뒷면, 즉 카메라 반대쪽을 향한 삼각형은 앞면에 가려 어차피 안 보이므로 그리지 않습니다(뒷면 제거). 꼭짓점 세 개의 화면 좌표가 시계 방향이냐 반시계 방향이냐로 앞뒤를 가립니다.':
    'Whatever can be thrown away before drawing is thrown away. Triangles behind the camera (z ≤ 0) or off screen are cut away (clipping). The back faces of a closed object, the triangles facing away from the camera, are hidden by the front faces anyway, so they are not drawn (back-face culling). Whether the three vertices\' screen coordinates run clockwise or counterclockwise tells front from back.',
  '상자의 삼각형 12개 중 뒷면 6개를 버려, 래스터화(6.7)와 픽셀 색칠 일이 절반으로 줄었습니다. 장면 전체에서는 카메라 밖 물체를 통째로 버려 더 많이 아낍니다.':
    'Throwing away 6 back faces of the box\'s 12 triangles halved the rasterizing (6.7) and pixel shading work. Across a whole scene, objects outside the camera are thrown away entirely, saving even more.',
  '같은 장면입니다. 상자의 삼각형 12개가 정거장을 지나며 걸러집니다.': 'The same scene. The box\'s 12 triangles are filtered as they pass the stations.',
  '상자 하나': 'One box', '면 6개 × 삼각형 2개 = 12개': '6 faces × 2 triangles = 12',
  '12개': '12', '6개': '6', '12개 모두 카메라 앞 (z > 0)': 'All 12 in front of the camera (z > 0)', '모든 삼각형을 카메라 기준으로 옮깁니다.': 'Move every triangle relative to the camera.',
  '뒷면 가리기': 'Back-face culling', '꼭짓점 순서가 화면에서 시계 방향 → 뒷면 → 버림': 'Vertices clockwise on screen → back face → drop', '카메라 반대쪽을 향한 면을 버립니다.': 'Drop the faces pointing away from the camera.', '6개 남음': '6 left',
  '닫힌 상자를 볼 때 뒷면을 버려도 되는 까닭은?': 'Why is it fine to drop back faces when looking at a closed box?',
  '앞면에 가려 어차피 보이지 않아서': 'Front faces hide them anyway', '뒷면이 더 어두워서': 'Back faces are darker',
  '닫힌 물체의 뒤쪽 면은 언제나 앞쪽 면 뒤에 숨어 있습니다. 그리지 않아도 결과가 같습니다.': 'The back faces of a closed object always hide behind the front faces. Not drawing them gives the same result.',
  '그릴 것만': 'Only what to draw', '래스터화·색칠할 삼각형: 12 → 6': 'Triangles to rasterize and shade: 12 → 6', '절반만 래스터화로 넘깁니다.': 'Only half go on to rasterizing.', '6개 그림': '6 drawn',
  // Step 4
  '한 프레임': 'One frame', '원근 · 픽셀 200만 개': 'Persp. · 2 million px',
  '1초에 60번, 한 번에 16.7ms 안에 모두 끝낸다': 'Sixty times a second, all within 16.7ms each',
  '움직임이 부드러워 보이려면 화면을 1초에 60번 새로 그려야 합니다. 그러면 한 장(프레임)에 쓸 수 있는 시간은 1000 ÷ 60 ≈ 16.7ms입니다. 그 안에 모든 물체의 꼭짓점 변환, 버리기, 래스터화, 픽셀 색칠, 깊이 검사(6.7)를 끝내야 합니다. 넘치면 프레임이 밀려 화면이 뚝뚝 끊깁니다.':
    'For motion to look smooth, the screen must be redrawn 60 times a second. That leaves 1000 ÷ 60 ≈ 16.7ms for one picture (a frame). Within it, vertex transforms, culling, rasterizing, pixel shading and depth tests (6.7) must finish for every object. Go over and frames slip, and the screen stutters.',
  '이 장면은 꼭짓점 3ms, 래스터화 2ms, 색칠 9ms로 14ms 만에 끝나 60프레임을 지켰습니다. 그림자나 반사를 더하면 색칠 시간이 늘어 예산을 넘기 쉽습니다. 9.3의 부하 예산과 같은 계산입니다.':
    'This scene took 3ms for vertices, 2ms for rasterizing and 9ms for shading, finishing in 14ms and keeping 60 frames. Adding shadows or reflections makes shading longer and easily breaks the budget. It is the same arithmetic as the load budget of 9.3.',
  '같은 장면입니다. 한 프레임의 단계별 시간을 더해 봅니다.': 'The same scene. Add up the time of each stage in one frame.',
  '한 프레임의 예산': 'One frame\'s budget', '목표 60프레임/초 → 16.7ms': 'Target 60 frames/s → 16.7ms', '예산 16.7ms': 'Budget 16.7ms',
  '꼭짓점 50만 개': '500,000 vertices', '꼭짓점 처리': 'Vertex processing', '월드·카메라·원근 변환: 3ms': 'World, camera, perspective transforms: 3ms', '꼭짓점 변환에 3ms가 걸립니다.': 'Vertex transforms take 3ms.',
  '삼각형': 'Triangles', '버리기 · 래스터화': 'Culling · rasterizing', '클리핑, 뒷면 제거, 래스터화: 2ms': 'Clipping, back-face culling, rasterizing: 2ms', '버리고 래스터화하는 데 2ms입니다.': 'Culling and rasterizing take 2ms.',
  '픽셀 200만 개': '2 million pixels', '색칠 · 깊이': 'Shading · depth', '픽셀 색칠과 깊이 검사: 9ms': 'Pixel shading and depth tests: 9ms',
  '합계 3 + 2 + 9 = 14ms < 16.7ms → 60프레임': 'Total 3 + 2 + 9 = 14ms < 16.7ms → 60 frames', '합계가 예산 안에 들어옵니다.': 'The total fits in the budget.',
  '그림자를 더해 색칠이 9ms에서 14ms로 늘면?': 'If adding shadows makes shading grow from 9ms to 14ms?',
  '합계 19ms > 16.7ms → 60프레임을 못 지킨다': 'Total 19ms > 16.7ms → cannot keep 60 frames', '여전히 60프레임': 'Still 60 frames',
  '3 + 2 + 14 = 19ms로 예산을 넘습니다. 그림자 품질을 낮추거나 30프레임(33.3ms)을 목표로 합니다.': '3 + 2 + 14 = 19ms breaks the budget. Lower the shadow quality or aim for 30 frames (33.3ms).',
};
