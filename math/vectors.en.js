// English for 8B.1 Vectors and matrices. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '벡터와 행렬 · 레슨 8B.1': 'Vectors and matrices · Lesson 8B.1',
  '8장 심화 트랙 · 8B 인공지능 · 레슨 8B.1': 'Chapter 8: Advanced tracks · 8B AI · Lesson 8B.1',
  '취향과 그림을 숫자 묶음(벡터)으로 적고, 더하기와 곱하기, 내적으로 닮은 정도 재기, 행렬로 점을 늘이고 돌리기, 신경망의 한 층을 행렬 곱 한 번으로 계산하기를 따라가 보세요.':
    'Write tastes and pictures as bundles of numbers (vectors), then follow adding and multiplying, measuring likeness with the dot product, stretching and turning a point with a matrix, and computing a whole neural-network layer as one matrix product.',
  '데이터를 숫자 묶음으로 담고 바꾸는 방법은 무엇일까요? 영화 취향, 평면의 점, 7.11의 그림을 벡터로 적고 내적과 행렬 곱으로 계산해 보세요.':
    'How is data held and changed as bundles of numbers? Write movie tastes, points on a plane and the picture from 7.11 as vectors, and compute with dot products and matrix products.',
  '입력 벡터가 계산을 거쳐 결과 벡터가 되는 장면': 'An input vector going through a calculation and becoming a result vector',
  '벡터 계산 정거장': 'Vector calculation stations', '파일': 'Data', '도구': 'Operation', '오류': 'Error',
  '"다음 단계"를 누르면 코드가 오른쪽으로 움직입니다.': 'Press "Next step" and the vector moves to the right.',
  '"다음 단계"를 눌러 벡터를를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the vector one station at a time. Prediction questions come up along the way.',
  // Step 1
  '숫자 묶음': 'Bundles of numbers', '벡터는 순서 있는 숫자 묶음이다': 'A vector is an ordered bundle of numbers',
  '인공지능은 모든 것을 숫자 묶음으로 다룹니다. 순서가 정해진 숫자 묶음을 벡터라 합니다. 영화 취향을 [액션 점수, 로맨스 점수]로 적으면 지우는 [5, 1]입니다. 7.11의 3×3 그림은 칸 9개를 한 줄로 늘어놓은 [0, 1, 0, 0, 1, 0, 0, 1, 0]이고, 0.3의 소리도 표본들의 벡터입니다. 같은 자리끼리 더하고, 숫자 하나를 곱해 늘리거나 줄일 수 있습니다.':
    'AI handles everything as bundles of numbers. A bundle of numbers in a fixed order is called a vector. Write a movie taste as [action score, romance score] and Jiwoo is [5, 1]. The 3×3 picture from 7.11 is its 9 cells laid out in a row, [0, 1, 0, 0, 1, 0, 0, 1, 0], and the sound in 0.3 is a vector of samples too. You can add place by place, and multiply by one number to stretch or shrink.',
  '[5, 1] + [4, 2] = [9, 3]처럼 같은 자리끼리 더하고, 2 × [5, 1] = [10, 2]처럼 모든 자리에 같은 수를 곱합니다. 두 수로 된 벡터는 평면의 화살표로 그릴 수 있고, 수가 많아도 같은 계산을 합니다.':
    'Add place by place, as in [5, 1] + [4, 2] = [9, 3], and multiply every place by the same number, as in 2 × [5, 1] = [10, 2]. A vector of two numbers can be drawn as an arrow on a plane, and with many numbers the calculation is the same.',
  '왼쪽부터 입력 벡터, 계산, 결과 벡터가 한 줄로 놓여 있습니다.': 'From the left, the input vector, the calculation and the result vector sit in a row.',
  '입력 벡터': 'Input vector', '계산': 'Calculation', '결과 벡터': 'Result vector', '벡터': 'Vectors',
  '입력 벡터 → 계산': 'Input vector → calculation', '계산 → 결과 벡터': 'Calculation → result vector', '계산 · [9, 3]': 'Calculation · [9, 3]',
  '지우 = [5, 1]': 'Jiwoo = [5, 1]', '민지 = [4, 2]': 'Minji = [4, 2]', '서준 = [0, 5]': 'Seojun = [0, 5]',
  '두 벡터의 더하기': 'Adding two vectors', '같은 자리끼리 더하기': 'Adding place by place', '같은 자리끼리 더합니다.': 'Add place by place.',
  '두 사람의 취향을 합친 묶음': 'The two people\'s tastes added together', '결과 벡터가 나왔습니다.': 'The result vector is out.',
  '숫자 곱하기': 'Multiplying by a number', '모든 자리에 2를 곱합니다.': 'Multiply every place by 2.',
  '방향은 같고 길이만 두 배': 'Same direction, twice as long', '3 × [2, 0, 1]은?': 'What is 3 × [2, 0, 1]?',
  '모든 자리에 3을 곱합니다. 0은 0으로 남습니다.': 'Multiply every place by 3. 0 stays 0.',
  // Step 2
  '닮은 정도': 'Likeness', '내적으로 두 벡터가 얼마나 닮았는지 잰다': 'The dot product measures how alike two vectors are',
  '두 벡터의 같은 자리끼리 곱해서 모두 더한 값을 내적이라 합니다. 두 벡터가 같은 방향을 가리킬수록 내적이 큽니다. 그래서 취향 벡터의 내적으로 "누구와 누가 비슷한가"를 잴 수 있습니다. 7.11의 뉴런이 한 일(칸 × 가중치의 합)도 바로 입력과 가중치의 내적입니다.':
    'Multiply two vectors place by place and add it all up: that is the dot product. The more two vectors point the same way, the bigger it is. So the dot product of taste vectors measures "who is like whom". What the neurons in 7.11 did (the sum of cell × weight) is exactly the dot product of the input and the weights.',
  '지우·민지 = 22, 지우·서준 = 5입니다. 지우와 민지가 훨씬 닮았으니, 민지가 좋아한 영화를 지우에게 추천할 수 있습니다. 검색, 추천, 언어 모델이 "의미가 가까운 것"을 찾을 때 이 계산을 씁니다.':
    'Jiwoo·Minji = 22 and Jiwoo·Seojun = 5. Jiwoo and Minji are far more alike, so movies Minji liked can be recommended to Jiwoo. Search, recommendation and language models use this calculation to find "things close in meaning".',
  '같은 장면입니다. 두 취향 벡터의 내적을 계산합니다.': 'The same scene. It computes the dot product of two taste vectors.',
  '두 벡터': 'Two vectors', '내적': 'Dot product', '두 벡터 → 내적': 'Two vectors → dot product', '내적 → 닮은 정도': 'Dot product → likeness', '내적 · 22 > 5': 'Dot product · 22 > 5',
  '영화 취향 [액션, 로맨스]': 'Movie taste [action, romance]', '지우, 민지, 서준': '3 tastes',
  '지우 · 민지': 'Jiwoo · Minji', '지우 · 서준': 'Jiwoo · Seojun', '지우와 민지': 'Jiwoo and Minji', '지우와 서준': 'Jiwoo and Seojun',
  '같은 자리끼리 곱해 더합니다.': 'Multiply place by place and add.', '이번에는 지우와 서준입니다.': 'Now Jiwoo and Seojun.',
  '지우 · 서준의 내적은?': 'What is Jiwoo · Seojun?',
  '5 × 0 + 1 × 5 = 5입니다. 지우는 액션, 서준은 로맨스를 좋아해 방향이 많이 다릅니다.': '5 × 0 + 1 × 5 = 5. Jiwoo likes action and Seojun likes romance, so they point in very different directions.',
  '누가 더 닮았나': 'Who is more alike?', '지우·민지 22 > 지우·서준 5': 'Jiwoo·Minji 22 > Jiwoo·Seojun 5', '→ 지우에게 민지가 좋아한 영화를 추천': '→ recommend Minji\'s movies to Jiwoo',
  '내적이 큰 쪽이 더 닮았습니다.': 'The bigger dot product is the more alike pair.', '민지와 닮음': 'Like Minji',
  '7.11의 뉴런이 입력 칸과 가중치로 한 계산은?': 'What did the neurons in 7.11 compute from the input cells and weights?',
  '입력 벡터와 가중치 벡터의 내적': 'The dot product of the input and weight vectors', '두 벡터의 더하기': 'The sum of two vectors',
  '칸마다 곱해서 모두 더했으니 내적입니다. 가중치와 닮은 입력일수록 큰 값이 나옵니다.': 'They multiplied cell by cell and added it all, so it is a dot product. The more the input looks like the weights, the bigger the value.',
  // Step 3
  '행렬은 변환': 'Matrices transform', '행렬을 곱하면 벡터가 늘어나고 돈다': 'Multiplying by a matrix stretches and turns a vector',
  '행렬은 숫자를 직사각형으로 늘어놓은 것입니다. 행렬 × 벡터는 행렬의 각 줄과 벡터의 내적을 차례로 구해 새 벡터를 만듭니다. 어떤 행렬은 벡터를 늘이고, 어떤 행렬은 돌립니다. 8D의 그래픽에서 물체를 움직이고 돌리는 것도, 6.7의 꼭짓점 처리도 이 계산입니다.':
    'A matrix is numbers laid out in a rectangle. Matrix × vector takes the dot product of each row of the matrix with the vector in turn to make a new vector. Some matrices stretch a vector, some turn it. Moving and turning objects in the graphics of 8D, and the vertex processing in 6.7, are this calculation.',
  '[[2, 0], [0, 1]]은 가로만 두 배로 늘이고, [[0, −1], [1, 0]]은 90° 돌립니다. 점 (1, 2)가 (2, 2)가 되고, 돌리면 (−2, 1)이 됩니다. 행렬 하나가 "어떻게 바꿀지"를 담고 있습니다.':
    '[[2, 0], [0, 1]] doubles only the width, and [[0, −1], [1, 0]] turns by 90°. The point (1, 2) becomes (2, 2), and turned it becomes (−2, 1). One matrix holds "how to change".',
  '왼쪽부터 점 벡터, 행렬 곱하기, 바뀐 점이 놓여 있습니다.': 'From the left: the point vector, the matrix product and the changed point.',
  '점 (1, 2)': 'Point (1, 2)', '행렬 곱하기': 'Multiply', '바뀐 점': 'New point', '더하기': 'Add',
  '점 (1, 2) → 행렬 곱하기': 'Point (1, 2) → matrix product', '행렬 곱하기 → 바뀐 점': 'Matrix product → changed point', '행렬 곱하기 · [−2, 1]': 'Matrix product · [−2, 1]',
  '점과 행렬': 'A point and matrices', '점 = [1, 2]': 'point = [1, 2]', '늘이기 A = [[2, 0], [0, 1]]': 'stretch A = [[2, 0], [0, 1]]', '돌리기 R = [[0, −1], [1, 0]]': 'turn R = [[0, −1], [1, 0]]',
  '늘이기': 'Stretch', '돌리기': 'Turn', '돌리기 끝': 'Turn done',
  '첫 줄 [2, 0] · [1, 2] = 2': 'row 1 [2, 0] · [1, 2] = 2', '둘째 줄 [0, 1] · [1, 2] = 2': 'row 2 [0, 1] · [1, 2] = 2',
  '첫 줄 [0, −1] · [1, 2] = −2': 'row 1 [0, −1] · [1, 2] = −2', '둘째 줄 [1, 0] · [1, 2] = ?': 'row 2 [1, 0] · [1, 2] = ?',
  '행렬의 줄마다 내적을 구합니다.': 'Take a dot product for each row of the matrix.', '이번에는 돌리는 행렬입니다.': 'This time it is a turning matrix.',
  'R × [1, 2]의 결과는?': 'What is R × [1, 2]?',
  '첫 줄은 0 × 1 + (−1) × 2 = −2, 둘째 줄은 1 × 1 + 0 × 2 = 1입니다. 90° 돌아갔습니다.': 'Row 1 is 0 × 1 + (−1) × 2 = −2 and row 2 is 1 × 1 + 0 × 2 = 1. It turned 90°.',
  '돌아간 점': 'The turned point', '(1, 2) → (−2, 1): 원점을 중심으로 왼쪽으로 90°': '(1, 2) → (−2, 1): 90° to the left around the origin', '점이 90° 돌았습니다.': 'The point turned 90°.',
  // Step 4
  '층은 행렬 곱': 'A layer is a matrix product', '신경망의 한 층은 행렬 곱 한 번이다': 'One neural-network layer is one matrix product',
  '7.11의 숨은 층에서는 뉴런마다 입력과 자기 가중치의 내적을 구했습니다. 뉴런 가중치를 한 줄씩 쌓으면 행렬이 되고, 층 전체는 "가중치 행렬 × 입력 벡터" 한 번입니다. 그래서 신경망 계산은 거의 모두 행렬 곱이고, 수많은 곱셈을 동시에 하는 GPU(6.7)가 잘 맞습니다.':
    'In the hidden layer of 7.11, each neuron took the dot product of the input with its own weights. Stack the neurons\' weights one row each and you get a matrix, and the whole layer is one "weight matrix × input vector". So neural-network work is almost all matrix products, a good fit for the GPU (6.7), which does huge numbers of multiplications at once.',
  '3×3 그림(9칸)과 뉴런 2개면 2 × 9 가중치 행렬이고, 곱셈 18번으로 숨은 층 [2, 0]이 나옵니다. 784칸 그림과 뉴런 100개면 곱셈 78,400번입니다. 큰 모델은 이런 행렬 곱을 수십억 번 합니다.':
    'A 3×3 picture (9 cells) and 2 neurons make a 2 × 9 weight matrix, and 18 multiplications give the hidden layer [2, 0]. A 784-cell picture and 100 neurons take 78,400 multiplications. Large models do matrix products like this billions of times.',
  '왼쪽부터 그림 벡터, 가중치 행렬 곱, 숨은 층 벡터가 놓여 있습니다.': 'From the left: the picture vector, the weight-matrix product and the hidden-layer vector.',
  '그림 벡터 (9칸)': 'Picture (9)', '가중치 행렬 × 그림': 'W × picture', '숨은 층 (2개)': 'Hidden (2)', '숨은 층': 'Hidden layer',
  '그림 벡터 (9칸) → 가중치 행렬 × 그림': 'Picture vector → weight matrix × picture', '가중치 행렬 × 그림 → 숨은 층 (2개)': 'Weight matrix × picture → hidden layer', '가중치 행렬 × 그림 · [2, 0]': 'Weight matrix × picture · [2, 0]',
  '7.11의 세로선 그림과 가중치': 'The vertical-line picture and weights from 7.11', '9칸': '9 cells',
  '그림 x = [0,1,0, 0,1,0, 0,1,0]': 'picture x = [0,1,0, 0,1,0, 0,1,0]',
  'W 첫 줄 (뉴런 1) = [0,+1,0, −1,0,−1, 0,+1,0]': 'W row 1 (neuron 1) = [0,+1,0, −1,0,−1, 0,+1,0]',
  'W 둘째 줄 (뉴런 2) = [0,−1,0, +1,0,+1, 0,−1,0]': 'W row 2 (neuron 2) = [0,−1,0, +1,0,+1, 0,−1,0]',
  '행렬 곱': 'Matrix product', '뉴런 1 = W 첫 줄 · x = 1 + 1 = 2': 'neuron 1 = W row 1 · x = 1 + 1 = 2', '뉴런 2 = W 둘째 줄 · x = −1 − 1 = −2': 'neuron 2 = W row 2 · x = −1 − 1 = −2',
  '가중치 행렬의 줄마다 그림과 내적을 구합니다.': 'Take the dot product of the picture with each row of the weight matrix.', '2 × 9 행렬': '2 × 9 matrix',
  '2 × 9 가중치 행렬과 9칸 벡터를 곱할 때 곱셈은 몇 번일까요?': 'How many multiplications does a 2 × 9 weight matrix times a 9-cell vector take?',
  '18번': '18', '9번': '9', '81번': '81',
  '줄 하나(9칸)와 내적에 곱셈 9번, 줄이 2개라 18번입니다.': 'A dot product with one row (9 cells) takes 9 multiplications, and there are 2 rows, so 18.',
  '[2, 0] → 7.11의 출력층으로': '[2, 0] → on to the output layer of 7.11', '숨은 층 벡터가 나왔습니다. 7.11과 같은 값입니다.': 'The hidden-layer vector is out. It is the same value as in 7.11.',
  '784칸': '784 cells', '큰 그림이라면': 'For a bigger picture', '28 × 28 = 784칸, 뉴런 100개': '28 × 28 = 784 cells, 100 neurons',
  '→ 100 × 784 행렬, 곱셈 78,400번': '→ 100 × 784 matrix, 78,400 multiplications', 'GPU가 동시에 계산': 'The GPU computes them at once',
  '그림과 층이 커져도 계산 모양은 같습니다.': 'Bigger pictures and layers, same shape of calculation.',
};
