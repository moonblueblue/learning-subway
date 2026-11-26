// English for 8D.2 Transforms and cameras. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  "길이 ×2 → 원점 둘레 90° → 오른쪽 3, 위 1": "Double length → rotate 90° → right 3, up 1",
  "같은 꼭짓점에 확대·회전·이동을 적용": "Scale, rotate and move the same point",
  "A 회전 → 이동     B 이동 → 원점 회전": "A rotate then move    B move then rotate",
  "같은 출발점에서 결과가 달라진다": "The same start has two different results",
  "오른쪽 행렬부터 계산해 같은 점으로": "Rightmost matrix acts first",
  "월드 점": "World point",
  "같은 월드 점": "Same world point",
  "카메라 x=0": "Camera x=0",
  "카메라 x=2": "Camera x=2",
  "카메라가 오른쪽으로 가면 상대 x는 작아진다": "Moving the camera right reduces relative x",
  // Page
  '변환과 카메라 · 레슨 8D.2': 'Transforms and cameras · Lesson 8D.2',
  '점 (1, 0)을 늘리고 돌리고 옮겨 보고, 순서가 바뀌면 결과가 달라지는 까닭, 동차 좌표로 변환 여러 개를 행렬 하나로 묶는 방법, 카메라 이동이 세상을 반대로 옮기는 뷰 행렬이라는 것을 따라가 보세요.':
    'Scale, rotate and move the point (1, 0), then follow why changing the order changes the result, how homogeneous coordinates bundle several transforms into one matrix, and how moving the camera is a view matrix that moves the world the opposite way.',
  '물체를 움직이고 바라보는 일을 어떻게 수로 나타낼까요? 점 하나에 크기, 회전, 이동 변환을 걸고 카메라를 움직여 보며 직접 계산해 보세요.':
    'How do you write moving and looking at objects as numbers? Apply scale, rotation and translation to one point, move the camera, and do the math yourself.',
  '점이 크기, 회전, 이동 변환을 차례로 지나 결과가 되는 장면': 'A point passing through scale, rotation and translation in turn to become the result',
  '점과 결과': 'Point and result', '변환 정거장': 'Transform stations', 
  '"다음 단계"를 누르면 점이 오른쪽으로 움직입니다.': 'Press "Next step" and the point moves to the right.',
  '"다음 단계"를 눌러 점을 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the point one station at a time. Prediction questions come up along the way.',
  // Stations
  '점': 'Point', '크기': 'Scale', '회전': 'Rotate', '이동': 'Move', 
  '변환': 'Transform', '카메라': 'Camera',
  '점 → 크기': 'Point → scale', '크기 → 회전': 'Scale → rotate', '회전 → 이동': 'Rotate → move', '이동 → 결과': 'Move → result', '점 → 회전': 'Point → rotate', '점 → 이동': 'Point → move',
  '이동 · (3, 3)': 'Move · (3, 3)', '이동 · B 결과': 'Move · B result', '점 (x, y, 1) → 합친 행렬 M': '(x, y, 1) → matrix M', '합친 행렬 M → 결과': 'Matrix M → result', '합친 행렬 M · (3, 3, 1)': 'Matrix M · (3, 3, 1)',
  '월드의 점 · (3, 3)': 'World point · (3, 3)', '월드의 점 → 뷰 행렬 (반대로)': 'World point → view matrix', '카메라 위치 → 뷰 행렬 (반대로)': 'Camera position → view matrix', '뷰 행렬 (반대로) → 카메라 기준': 'View matrix → camera space',
  // Step 1
  '세 가지 변환': 'Three transforms', '늘리고, 돌리고, 옮긴다': 'Scale, rotate, move',
  '물체를 움직이는 일은 세 가지 변환의 조합입니다. 크기 바꾸기는 좌표에 수를 곱하고, 회전은 8B.1의 회전 행렬을 곱하고(90°면 (x, y) → (−y, x)), 이동은 수를 더합니다. 점 (1, 0)에 차례로 적용해 봅니다. 3D에서도 축이 하나 늘 뿐 같습니다.':
    'Moving an object is a combination of three transforms. Scaling multiplies the coordinates by a number, rotation multiplies by the rotation matrix of 8B.1 (for 90°, (x, y) → (−y, x)), and translation adds numbers. Apply them in turn to the point (1, 0). In 3D it is the same with one more axis.',
  '(1, 0)이 크기 ×2로 (2, 0), 90° 회전으로 (0, 2), (+3, +1) 이동으로 (3, 3)이 됐습니다. 게임 캐릭터가 걷고, 돌고, 커지는 것이 모두 이 계산입니다.':
    '(1, 0) became (2, 0) by scale ×2, (0, 2) by a 90° rotation and (3, 3) by a (+3, +1) move. A game character walking, turning and growing is all this arithmetic.',
  '왼쪽부터 점, 크기, 회전, 이동, 결과가 한 줄로 놓여 있습니다.': 'From the left, point, scale, rotate, move and result stand in a row.',
  '점과 변환': 'Point and transforms', '점 (1, 0)': 'Point (1, 0)', '크기 ×2 → 회전 90° (반시계) → 이동 (+3, +1)': 'Scale ×2 → rotate 90° (counterclockwise) → move (+3, +1)',
  '크기 ×2': 'Scale ×2', '좌표에 2를 곱해 늘립니다.': 'Multiply the coordinates by 2 to stretch.',
  '회전 90°': 'Rotate 90°', '90° 돌립니다.': 'Turn it 90°.',
  '(0, 2)를 다시 90° 돌리면?': 'Rotate (0, 2) 90° again and you get?',
  '(x, y) → (−y, x)에서 (0, 2) → (−2, 0)입니다. 두 번 돌리면 180°라 처음 (2, 0)의 반대편입니다.': 'With (x, y) → (−y, x), (0, 2) → (−2, 0). Two turns make 180°, the opposite side of the first (2, 0).',
  '이동 (+3, +1)': 'Move (+3, +1)', '수를 더해 옮깁니다.': 'Add numbers to move it.', '세 변환을 거친 결과입니다.': 'The result after the three transforms.',
  // Step 2
  '순서': 'Order', '같은 변환도 순서가 바뀌면 결과가 다르다': 'The same transforms in another order give another result',
  '"돌린 다음 옮기기"와 "옮긴 다음 돌리기"는 다릅니다. 회전은 원점을 중심으로 돌기 때문에, 먼저 옮겨 두면 멀리서 원점을 중심으로 크게 돕니다. 그래서 물체는 보통 "제자리에서 크기 → 제자리에서 회전 → 마지막에 이동" 순서로 변환합니다.':
    '"Rotate, then move" and "move, then rotate" differ. Rotation turns around the origin, so if you move first, the object swings wide around the origin from far away. That is why objects are usually transformed in the order "scale in place → rotate in place → move last".',
  '(1, 0)을 돌린 다음 옮기면 (3, 2), 옮긴 다음 돌리면 (−1, 4)입니다. 제자리에서 돌던 팽이가, 순서를 바꾸면 원점 둘레를 크게 도는 것과 같습니다.':
    'Rotating (1, 0) then moving it gives (3, 2); moving then rotating gives (−1, 4). It is like a top spinning in place that, with the order swapped, swings in a big circle around the origin.',
  '같은 장면입니다. 크기는 건너뛰고 회전과 이동의 순서를 바꿔 봅니다.': 'The same scene. Skip scaling and swap the order of rotation and translation.',
  'A: 회전 90° → 이동 (+3, +1)': 'A: rotate 90° → move (+3, +1)', 'B: 이동 (+3, +1) → 회전 90°': 'B: move (+3, +1) → rotate 90°',
  'A: 회전 먼저': 'A: rotate first', 'A: 회전': 'A: rotate', 'A는 먼저 돌립니다.': 'A rotates first.',
  'A: 이동': 'A: move', '그다음 옮깁니다. A의 결과는 (3, 2)입니다.': 'Then it moves. A\'s result is (3, 2).',
  'B: 이동 먼저': 'B: move first', 'B: 이동': 'B: move', 'B는 먼저 옮깁니다.': 'B moves first.',
  'B에서 (4, 1)을 90° 돌리면?': 'In B, rotating (4, 1) by 90° gives?',
  '(x, y) → (−y, x)에서 (4, 1) → (−1, 4)입니다. A의 (3, 2)와 다릅니다.': 'With (x, y) → (−y, x), (4, 1) → (−1, 4). Different from A\'s (3, 2).',
  'B 결과': 'B result', '비교': 'Compare', 'A (돌리고 옮기기) = (3, 2)': 'A (rotate, then move) = (3, 2)', 'B (옮기고 돌리기) = (−1, 4)': 'B (move, then rotate) = (−1, 4)',
  '순서만 바꿨는데 결과가 다릅니다.': 'Only the order changed, yet the result differs.',
  // Step 3
  '한 행렬로': 'One matrix', '변환 여러 개를 행렬 하나로 묶어 둔다': 'Bundle several transforms into one matrix',
  '꼭짓점이 백만 개인데 변환 세 개를 하나씩 적용하면 계산이 세 배입니다. 그런데 크기와 회전은 행렬 곱이고, 좌표에 1을 하나 더 붙여 (x, y, 1)로 쓰면 이동도 3×3 행렬 곱이 됩니다(동차 좌표). 그러면 세 행렬을 미리 곱해 행렬 하나로 만들고, 꼭짓점마다 한 번만 곱하면 됩니다.':
    'With a million vertices, applying three transforms one by one triples the work. But scaling and rotation are matrix multiplications, and writing coordinates with an extra 1 as (x, y, 1) makes translation a 3×3 matrix multiplication too (homogeneous coordinates). Then the three matrices can be multiplied ahead of time into one, and each vertex needs only one multiplication.',
  '이동 · 회전 · 크기를 미리 곱한 행렬 하나로 (1, 0, 1)을 곱했더니 한 번에 (3, 3, 1)이 나왔습니다. 1단계의 세 번 계산과 같은 결과를 꼭짓점마다 한 번의 곱으로 얻습니다. GPU(6.7)는 이 곱을 동시에 합니다.':
    'Multiplying (1, 0, 1) by one matrix premultiplied from move · rotate · scale gave (3, 3, 1) in one go. Each vertex gets the same result as step 1\'s three calculations with a single multiplication. A GPU (6.7) does these multiplications in parallel.',
  '같은 장면입니다. 이번에는 세 변환을 합친 행렬 하나로 계산합니다.': 'The same scene. This time it computes with one matrix that combines the three transforms.',
  '점 (x, y, 1)': '(x, y, 1)', '합친 행렬 M': 'Matrix M',
  '동차 좌표': 'Homogeneous coordinates', '크기 S = [[2,0,0],[0,2,0],[0,0,1]]': 'Scale S = [[2,0,0],[0,2,0],[0,0,1]]', '회전 R = [[0,−1,0],[1,0,0],[0,0,1]]': 'Rotate R = [[0,−1,0],[1,0,0],[0,0,1]]',
  '이동 T = [[1,0,3],[0,1,1],[0,0,1]]': 'Move T = [[1,0,3],[0,1,1],[0,0,1]]', 'M 미리 계산': 'M precomputed',
  'M 한 번 곱하기': 'Multiply by M once', '첫 줄 [0, −2, 3] · (1, 0, 1) = 3': 'Row 1 [0, −2, 3] · (1, 0, 1) = 3', '둘째 줄 [2, 0, 1] · (1, 0, 1) = 3': 'Row 2 [2, 0, 1] · (1, 0, 1) = 3', '셋째 줄 [0, 0, 1] · (1, 0, 1) = 1': 'Row 3 [0, 0, 1] · (1, 0, 1) = 1',
  '합친 행렬을 한 번만 곱합니다.': 'Multiply by the combined matrix just once.', '곱 1번': '1 multiply',
  '같은 결과': 'Same result', '(3, 3) — 1단계와 같음': '(3, 3) — same as step 1', '세 번 계산한 것과 같은 (3, 3)입니다.': 'The same (3, 3) as calculating three times.',
  '꼭짓점 100만 개에 변환 3개를 줄 때, 행렬을 미리 합치면 꼭짓점마다 행렬 곱은 몇 번일까요?': 'Giving 3 transforms to a million vertices, how many matrix multiplications per vertex if the matrices are combined first?',
  '1번': 'Once', '3번': '3 times', '세 행렬을 한 번만 미리 곱해 두면, 꼭짓점마다는 합친 행렬 하나만 곱하면 됩니다.': 'Multiply the three matrices together once ahead of time, and each vertex needs just the one combined matrix.',
  // Step 4
  '카메라를 움직이는 것은 세상을 반대로 움직이는 것이다': 'Moving the camera is moving the world the opposite way',
  '8D.1에서 카메라 기준 좌표를 만들 때 장면 전체를 옮겼습니다. 카메라를 오른쪽으로 2만큼 옮기는 것은, 카메라는 그대로 두고 세상 전체를 왼쪽으로 2만큼 옮기는 것과 화면에서 똑같이 보입니다. 그래서 카메라의 변환을 거꾸로 한 행렬(뷰 행렬)을 모든 물체에 곱합니다. 카메라를 돌리는 것도 세상을 반대로 돌리는 것입니다.':
    'In 8D.1 the whole scene moved to make camera coordinates. Moving the camera 2 to the right looks exactly the same on screen as leaving the camera alone and moving the whole world 2 to the left. So every object is multiplied by the inverse of the camera\'s transform (the view matrix). Turning the camera is turning the world the opposite way too.',
  '카메라를 x로 +2 옮기자, 카메라 기준으로 물체 (3, 3)은 (1, 3)이 되었습니다. 게임에서 캐릭터를 따라가는 카메라는 매 프레임 이 뷰 행렬만 바꾸고, 물체들의 행렬은 그대로 둡니다.':
    'Moving the camera +2 in x made the object (3, 3) become (1, 3) relative to the camera. A game camera following a character changes only this view matrix every frame and leaves the objects\' matrices alone.',
  '같은 장면입니다. 결과 점을 카메라 기준으로 다시 봅니다.': 'The same scene. Look at the result point again relative to the camera.',
  '월드의 점': 'World point', '카메라 위치': 'Camera', '뷰 행렬 (반대로)': 'View⁻¹', '카메라 기준': 'Camera space',
  '월드의 점과 카메라': 'World point and camera', '점 (3, 3)': 'Point (3, 3)', '카메라: 원점에서 x로 +2 이동': 'Camera: moved +2 in x from the origin',
  '+2의 반대': 'Inverse of +2', '뷰 행렬': 'View matrix', '카메라 변환: 이동 (+2, 0)': 'Camera transform: move (+2, 0)', '뷰 행렬: 이동 (−2, 0) (반대로)': 'View matrix: move (−2, 0) (inverse)',
  '카메라 변환을 거꾸로 한 것이 뷰 행렬입니다.': 'The view matrix is the camera transform reversed.', '이동 (−2, 0)': 'Move (−2, 0)',
  '세상을 반대로': 'World the other way', '모든 물체에 뷰 행렬을 곱합니다.': 'Multiply every object by the view matrix.',
  '카메라를 오른쪽으로 옮기면 화면 속 물체는 어느 쪽으로 움직여 보일까요?': 'Move the camera right, and which way do objects on screen seem to move?',
  '왼쪽': 'Left', '오른쪽': 'Right',
  '카메라 기준 좌표는 카메라 이동의 반대만큼 바뀝니다. 기차가 앞으로 가면 창밖 풍경이 뒤로 가는 것과 같습니다.': 'Camera coordinates change by the opposite of the camera\'s move. It is like scenery outside a train window going backward as the train goes forward.',
  '(1, 3) → 8D.1의 원근 나누기로': '(1, 3) → to the perspective divide of 8D.1', '카메라 기준 좌표가 원근 단계로 넘어갑니다.': 'The camera coordinates go on to the perspective stage.',
  // Example note on the still picture.
  '크기 ×2: (2, 0)': 'scale ×2: (2, 0)', '반시계 90°: (0, 2)': '90° counterclockwise: (0, 2)', '이동 (+3, +1): (3, 3)': 'move (+3, +1): (3, 3)',
  'A: 회전 → 이동 = (3, 2)': 'A: rotate → move = (3, 2)', 'B: 이동 → 회전 = (−1, 4)': 'B: move → rotate = (−1, 4)', '순서만 바꿔도 다름': 'only the order changed, yet different',
  'M = T × R × S로 미리 묶음': 'bundle M = T × R × S first', '(1, 0, 1)에 한 번 곱함': 'multiply (1, 0, 1) once', '세 번 계산한 것과 같은 (3, 3)': 'same (3, 3) as three steps',
  '카메라가 x로 +2': 'the camera moves +2 in x', '세상을 반대로 (−2, 0) 옮김': 'move the world the other way (−2, 0)', '점 (3, 3)이 카메라 기준 (1, 3)': 'point (3, 3) is (1, 3) for the camera',
  '뷰 행렬 (반대로) · (1, 3)': 'View⁻¹ · (1, 3)',
};
