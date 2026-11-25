// English for 8B.4 Convolutional neural networks. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '합성곱 신경망 · 레슨 8B.4': 'Convolutional neural networks · Lesson 8B.4', '합성곱 신경망': 'Convolutional neural networks',
  '8장 심화 트랙 · 8B 인공지능 · 레슨 8B.4': 'Chapter 8: Advanced tracks · 8B AI · Lesson 8B.4',
  '5×5 그림 위에서 3×3 세로선 필터를 밀며 곱해서 더해 특징 지도를 만들고, 가장 큰 값을 골라 선이 옮겨 가도 알아보며, 필터를 쌓아 큰 모양을 찾는 과정을 따라가 보세요.':
    'Slide a 3×3 vertical-line filter over a 5×5 picture, multiplying and adding to make a feature map, pick the biggest value to recognize the line even when it moves, and stack filters to find bigger shapes.',
  '이미지에서 모양을 어떻게 찾아낼까요? 작은 필터 하나를 그림 위에서 밀어 보며, 같은 가중치를 모든 자리에 쓰는 합성곱을 직접 계산해 보세요.':
    'How are shapes found in an image? Slide one small filter over a picture and work out a convolution, which uses the same weights in every position.',
  '그림이 필터를 지나 특징 지도가 되고, 가장 큰 값을 골라 판단하는 장면': 'A picture passing through a filter to become a feature map, with the biggest value picked to decide',
  '필터를 미는 정거장': 'Stations for sliding a filter', '그림과 지도': 'Pictures and maps', '필터와 풀링': 'Filters and pooling', '파일': 'Data', '도구': 'Operation', '오류': 'Error',
  '"다음 단계"를 누르면 코드가 오른쪽으로 움직입니다.': 'Press "Next step" and the picture moves to the right.',
  '"다음 단계"를 눌러 그림을를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the picture one station at a time. Prediction questions come up along the way.',
  '그림 5×5': 'Picture 5×5', '필터 3×3': 'Filter 3×3', '특징 지도': 'Feature map', '가장 큰 값': 'Max value', '판단': 'Decision',
  '그림 5×5 → 필터 3×3': 'Picture 5×5 → filter 3×3', '필터 3×3 → 특징 지도': 'Filter 3×3 → feature map', '특징 지도 → 가장 큰 값': 'Feature map → max value', '가장 큰 값 → 판단': 'Max value → decision', '특징 지도 → 특징 지도': 'Feature map → feature map',
  '필터 3×3 · 3×3': 'Filter 3×3 · 3×3', '필터 3×3 · −3, 6': 'Filter 3×3 · −3, 6', '특징 지도 · 가장 큰 값': 'Feature map · max value', '특징 지도 · 다음 층': 'Feature map · next layer',
  '왼쪽부터 그림, 필터, 특징 지도, 가장 큰 값 고르기, 판단이 한 줄로 놓여 있습니다.': 'From the left: the picture, the filter, the feature map, picking the max value and the decision, in a row.',
  // Step 1
  '필터 하나': 'One filter', '작은 필터를 그림 위에서 밀며 곱해서 더한다': 'Slide a small filter over the picture, multiplying and adding',
  '7.11의 뉴런은 그림 전체 칸마다 가중치를 따로 가졌습니다. 합성곱 신경망은 대신 3×3짜리 작은 가중치 묶음(필터)을 하나 만들어 그림 위에서 한 칸씩 밀며, 겹친 9칸과 곱해서 더합니다. 이 필터는 줄마다 [−1, +2, −1]이라 가운데 세로줄이 밝고 양옆이 어두우면 큰 값을 냅니다. 세로선 찾기 필터입니다.':
    'The neurons of 7.11 had a separate weight for every cell of the picture. A convolutional neural network instead makes one small 3×3 bundle of weights (a filter), slides it over the picture one cell at a time, and multiplies and adds the 9 cells it covers. Each row of this filter is [−1, +2, −1], so it gives a big value when the middle column is bright and both sides are dark. It is a vertical-line finder.',
  '필터를 맨 왼쪽(0열)에 두면 선이 필터의 오른쪽 끝에 걸려 −3, 한 칸 오른쪽(1열)에 두면 선이 필터 가운데에 와서 6입니다. 같은 필터를 어디에나 대 보는 것이 합성곱입니다.':
    'With the filter at the far left (column 0) the line catches its right edge and gives −3; one cell to the right (column 1) the line sits in its middle and gives 6. Trying the same filter everywhere is convolution.',
  '그림 (2열에 세로선)': 'Picture (vertical line in column 2)', '필터 (세 줄 모두): −1 +2 −1': 'filter (all three rows): −1 +2 −1', '세로선': 'Vertical line', '세로 찾기': 'Find vertical',
  '0–2열': 'Cols 0–2', '1–3열': 'Cols 1–3', '맨 왼쪽에 대기': 'At the far left', '그림의 0–2열 × 필터': 'picture columns 0–2 × filter',
  '줄마다: 0×(−1) + 0×2 + 1×(−1) = −1': 'each row: 0×(−1) + 0×2 + 1×(−1) = −1', '세 줄 합 = −3': 'sum of three rows = −3',
  '필터를 맨 왼쪽에 대고 곱해서 더합니다.': 'Place the filter at the far left, multiply and add.',
  '한 칸 오른쪽': 'One cell right', '그림의 1–3열 × 필터': 'picture columns 1–3 × filter', '줄마다: 0×(−1) + 1×2 + 0×(−1) = 2': 'each row: 0×(−1) + 1×2 + 0×(−1) = 2', '세 줄 합 = ?': 'sum of three rows = ?',
  '필터를 한 칸 오른쪽으로 밉니다.': 'Slide the filter one cell right.', '선이 필터 가운데에 올 때 값은?': 'What is the value when the line is in the middle of the filter?',
  '줄마다 가운데 칸 1 × 2 = 2이고, 세 줄이라 6입니다. 찾는 모양과 겹칠 때 가장 큽니다.': 'Each row gives middle cell 1 × 2 = 2, and there are three rows, so 6. It is biggest when it overlaps the shape it looks for.',
  '특징 지도에 적기': 'Write into the feature map', '특징 지도 첫 줄: −3, 6, …': 'feature map row 1: −3, 6, …', '값을 특징 지도의 그 자리에 적습니다.': 'Write each value in its place in the feature map.',
  // Step 2
  '모든 자리에 대 보면 "어디에 세로선이 있는지" 지도가 생긴다': 'Trying every position makes a map of "where the vertical line is"',
  '5×5 그림에 3×3 필터를 댈 수 있는 자리는 가로 3 × 세로 3 = 9곳입니다. 9곳의 값을 모으면 3×3 특징 지도가 됩니다. 7.11처럼 음수는 0으로 바꿉니다(ReLU). 큰 값이 있는 자리가 "여기에 세로선이 있다"는 뜻입니다.':
    'A 3×3 filter fits on a 5×5 picture in 3 across × 3 down = 9 positions. The 9 values together make a 3×3 feature map. As in 7.11, negatives become 0 (ReLU). A position with a big value means "there is a vertical line here".',
  '특징 지도는 세 줄 모두 [0, 6, 0]입니다. 가운데 열이 6으로 밝아, 그림의 가운데에 세로선이 있다고 알려 줍니다. 필터가 그림을 "세로선이 어디 있는지"의 지도로 바꿨습니다.':
    'Every row of the feature map is [0, 6, 0]. The middle column lights up at 6, saying there is a vertical line in the middle of the picture. The filter turned the picture into a map of "where the vertical line is".',
  '같은 장면입니다. 필터를 9곳 모두에 대 특징 지도를 완성합니다.': 'The same scene. Place the filter in all 9 positions to complete the feature map.',
  '9곳': '9 spots', '9곳에 대기': 'At all 9 positions', '가로 3곳 × 세로 3곳': '3 across × 3 down', '선이 위아래로 이어져 세 줄 모두 같은 값': 'the line runs top to bottom, so all three rows match',
  '필터를 9곳 모두에 댑니다.': 'Place the filter in all 9 positions.', '9번 계산': '9 sums', '9개의 값이 3×3 지도가 됩니다.': 'The 9 values make a 3×3 map.',
  '음수는 0으로': 'Negatives to 0', '음수를 0으로 바꿉니다.': 'Turn negatives into 0.', '가운데 열 6': 'Middle column 6',
  '5×5 그림에 3×3 필터를 대는 자리는 모두 몇 곳일까요?': 'How many positions can a 3×3 filter take on a 5×5 picture?',
  '9곳 (3 × 3)': '9 (3 × 3)', '25곳': '25', '15곳': '15',
  '가로로 0, 1, 2열, 세로로 0, 1, 2줄에서 시작할 수 있어 3 × 3 = 9곳입니다.': 'It can start at columns 0, 1, 2 across and rows 0, 1, 2 down, so 3 × 3 = 9 positions.',
  // Step 3
  '위치가 달라도': 'Wherever it is', '가장 큰 값만 보면 선이 옮겨 가도 알아본다': 'Looking only at the biggest value recognizes the line even when it moves',
  '같은 세로선이 한 칸 오른쪽(3열)에 그려져도 알아봐야 합니다. 필터는 모든 자리에 똑같이 대 보므로, 선이 옮겨 가면 특징 지도의 6도 함께 옮겨 갑니다. 마지막에 지도에서 가장 큰 값만 고르면(최대 풀링) 위치와 상관없이 "세로선이 어딘가에 있다"를 얻습니다.':
    'The same vertical line drawn one cell to the right (column 3) must still be recognized. The filter is tried the same way in every position, so when the line moves, the 6 in the feature map moves with it. Picking only the biggest value from the map at the end (max pooling) gives "there is a vertical line somewhere", wherever it is.',
  '선이 2열이든 3열이든 가장 큰 값은 6입니다. 7.11의 뉴런은 칸마다 가중치가 달라 선이 옮겨 가면 다시 배워야 했지만, 합성곱은 같은 필터를 모든 자리에 쓰므로 위치가 달라도 알아봅니다.':
    'Whether the line is in column 2 or 3, the biggest value is 6. The neurons of 7.11 had a different weight per cell and had to learn again when the line moved, but convolution uses the same filter everywhere, so it recognizes the line in any position.',
  '같은 장면입니다. 이번에는 세로선이 3열에 있습니다.': 'The same scene. This time the vertical line is in column 3.',
  '그림 (3열에 세로선)': 'Picture (vertical line in column 3)', '옮겨 간 선': 'Moved line',
  '같은 필터를 9곳에': 'Same filter, 9 positions', '필터는 그대로 · 그림만 달라짐': 'the filter is unchanged · only the picture differs', '같은 필터를 모든 자리에 댑니다.': 'Place the same filter in every position.',
  '옮겨 간 지도': 'The moved map', '(ReLU 뒤) 6이 오른쪽 열로 옮겨 감': '(after ReLU) the 6 moved to the right column', '특징 지도의 6도 오른쪽으로 옮겨 갔습니다.': 'The 6 in the feature map moved right too.', '오른쪽 열 6': 'Right column 6',
  '최대 풀링': 'Max pooling', '지도 9칸 중 가장 큰 값 = 6': 'biggest of the map\'s 9 cells = 6', '가장 큰 값만 고릅니다.': 'Pick only the biggest value.',
  '선이 2열에 있을 때와 3열에 있을 때, 가장 큰 값은?': 'With the line in column 2 and in column 3, what is the biggest value?', '둘 다 6': '6 both times', '2열 6, 3열 0': '6 in column 2, 0 in column 3',
  '같은 필터를 모든 자리에 대므로 선이 어디 있든 한 곳에서는 6이 나옵니다.': 'The same filter is placed everywhere, so wherever the line is, one position gives 6.',
  '6 > 기준 → "세로선이 있다"': '6 > threshold → "there is a vertical line"', '위치와 상관없이 세로선을 찾았습니다.': 'The vertical line was found, wherever it was.', '세로선 있음': 'Line found',
  // Step 4
  '층 쌓기': 'Stacking layers', '작은 특징을 모아 큰 모양을 찾는다': 'Small features combine to find big shapes',
  '실제 합성곱 신경망은 필터를 수십 개 씁니다. 첫 층의 필터들은 세로선, 가로선, 대각선, 색 경계 같은 작은 특징을 찾습니다. 다음 층은 그 특징 지도들 위에서 다시 필터를 밀어 모서리, 원, 눈 같은 더 큰 모양을 찾고, 그다음 층은 얼굴이나 바퀴를 찾습니다. 필터의 숫자는 사람이 정하지 않고 8B.3의 경사 하강법으로 배웁니다.':
    'Real convolutional neural networks use dozens of filters. Filters in the first layer find small features such as vertical lines, horizontal lines, diagonals and color edges. The next layer slides filters again over those feature maps to find bigger shapes such as corners, circles and eyes, and the layer after that finds faces or wheels. The numbers in the filters are not set by people; they are learned with the gradient descent of 8B.3.',
  '필터 하나의 가중치는 그림 크기와 상관없이 9개입니다. 28×28 그림을 7.11처럼 뉴런 하나에 모두 이으면 784개가 필요하지만, 필터는 9개를 모든 자리에서 함께 씁니다. 적은 가중치로 위치에 강한 모델을 만드는 것이 합성곱의 힘입니다.':
    'One filter has 9 weights whatever the picture size. Connecting a 28×28 picture to one neuron as in 7.11 takes 784, but a filter shares its 9 across every position. Building a model that copes with position from few weights is the strength of convolution.',
  '같은 장면입니다. 큰 그림에 여러 필터를 쌓는 경우를 봅니다.': 'The same scene. See many filters stacked on a big picture.',
  '큰 그림': 'A big picture', '28 × 28 손글씨 숫자 그림': 'a 28 × 28 picture of a handwritten digit', '첫 층 필터 16개 (각 3×3)': '16 first-layer filters (3×3 each)',
  '필터 16개': '16 filters', '첫 층': 'First layer', '세로선, 가로선, 대각선 … 필터 16개': 'vertical, horizontal, diagonal … 16 filters', '필터마다 26 × 26 특징 지도': 'a 26 × 26 feature map per filter',
  '필터 16개가 각자 작은 특징을 찾습니다.': 'Each of the 16 filters finds a small feature.', '16개': '16',
  '3×3 필터 하나의 가중치는 몇 개일까요?': 'How many weights does one 3×3 filter have?',
  '9개 (그림 크기와 상관없음)': '9 (whatever the picture size)', '784개': '784', '676개': '676',
  '같은 9개를 모든 자리에 함께 씁니다(가중치 공유). 그림이 커져도 늘지 않습니다.': 'The same 9 are shared across every position (weight sharing). They do not grow with the picture.',
  '지도 16장': '16 maps', '특징 지도 16장': '16 feature maps', '지도마다 "여기에 이 특징이 있다"': 'each map says "this feature is here"', '특징 지도 16장이 생깁니다.': '16 feature maps appear.', '16장': '16 maps',
  '다음 층': 'Next layer', '지도 16장 위에서 다시 필터 → 모서리, 고리 모양': 'filters again over the 16 maps → corners, loops',
  '그다음 층 → 숫자 0의 동그라미, 7의 꺾임': 'the layer after → the ring of a 0, the bend of a 7', '작은 특징을 모아 더 큰 모양을 찾습니다.': 'Small features combine to find bigger shapes.', '큰 모양': 'Big shapes',
  '0–9 점수': 'Scores 0–9', '마지막에 7.11처럼 출력 뉴런 10개 → "7"': 'finally 10 output neurons as in 7.11 → "7"', '숫자를 알아봅니다.': 'It recognizes the digit.',
};
