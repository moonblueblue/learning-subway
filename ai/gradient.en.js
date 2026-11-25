// English for 8B.3 Gradient descent. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '경사하강법 · 레슨 8B.3': 'Gradient descent · Lesson 8B.3',
  '손실 (w − 3)²의 기울기를 보고 반대로 걷기, 학습률이 작을 때·딱 맞을 때·너무 클 때, 가중치 여러 개를 기울기 벡터로 함께 옮기기, 미니배치로 자주 걷기를 따라가 보세요.':
    'Follow walking against the gradient of the loss (w − 3)², a learning rate that is too small, just right and too big, moving many weights together with a gradient vector, and taking frequent steps with mini-batches.',
  '오차를 줄이는 방향은 어떻게 찾을까요? 가중치, 손실, 기울기, 고치기의 고리를 돌며 그릇 모양 손실의 바닥을 찾아가 보세요.':
    'How do you find the direction that shrinks the error? Go round the loop of weight, loss, gradient and update to find the bottom of a bowl-shaped loss.',
  '가중치에서 손실과 기울기를 구해 가중치를 고치는 고리 장면': 'A loop that takes a weight, finds the loss and gradient, and updates the weight',
  '내려가는 고리': 'The descent loop', '계층': 'Layer', 
  '"다음 단계"를 누르면 패킷이 오갑니다.': 'Press "Next step" and the values move round the loop.',
  '"다음 단계"를 눌러 가중치를 하나씩 보내 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to send the weight round one leg at a time. Prediction questions come up along the way.',
  '가중치 w': 'Weight w', '손실 계산': 'Loss', '기울기': 'Gradient', '고치기': 'Update',
  '가중치 w → 손실 계산': 'Weight w → loss', '손실 계산 → 기울기': 'Loss → gradient', '기울기 → 고치기': 'Gradient → update', '고치기 → 가중치 w': 'Update → weight w',
  '가중치·고치기': 'Weight · update', '고치기 · (0.6, −0.2)': 'Update · (0.6, −0.2)', '고치기 · w = 0.6': 'Update · w = 0.6', '기울기 · 학습률 1.1': 'Gradient · rate 1.1', '기울기 · 한 걸음': 'Gradient · one step',
  '가중치 w, 손실 계산, 기울기, 고치기가 고리를 이루고 있습니다.': 'Weight w, loss, gradient and update form a loop.',
  // Step 1
  '기울기 보기': 'Reading the gradient', '손실이 줄어드는 방향은 기울기의 반대쪽이다': 'The loss goes down in the direction opposite the gradient',
  '7.10에서 w를 "오차가 줄어드는 쪽"으로 옮겼습니다. 그 방향을 어떻게 알까요? 손실 L(w) = (w − 3)²을 그래프로 그리면 w = 3에서 바닥인 그릇 모양입니다. 지금 위치의 기울기(미분)를 구하면, 기울기가 음수일 때는 오른쪽이 내리막, 양수일 때는 왼쪽이 내리막입니다. 그래서 언제나 기울기의 반대쪽으로 갑니다.':
    'In 7.10 we moved w "the way the error shrinks". How do we know that way? Graph the loss L(w) = (w − 3)² and it is a bowl with its bottom at w = 3. Take the gradient (the derivative) where you are: when it is negative the downhill is to the right, when positive it is to the left. So you always go opposite the gradient.',
  'w = 0에서 기울기는 2 × (0 − 3) = −6입니다. 음수이므로 w를 키우는 쪽(오른쪽)이 내리막입니다. "w ← w − 학습률 × 기울기" 한 줄이 경사 하강법의 전부입니다.':
    'At w = 0 the gradient is 2 × (0 − 3) = −6. It is negative, so making w bigger (to the right) is downhill. The one line "w ← w − learning rate × gradient" is all of gradient descent.',
  '손실 함수': 'Loss function', 'L(w) = (w − 3)² · 바닥은 w = 3': 'L(w) = (w − 3)² · bottom at w = 3', '기울기 = 2 × (w − 3)': 'gradient = 2 × (w − 3)', '시작: w = 0': 'start: w = 0',
  '손실': 'Loss', '지금 w의 손실을 잽니다.': 'Measure the loss at the current w.', '지금 자리의 기울기를 구합니다.': 'Find the gradient where you are.',
  '음수 → 오른쪽(w를 키우는 쪽)이 내리막': 'negative → downhill is to the right (bigger w)',
  '기울기가 −6일 때 손실을 줄이려면 w를?': 'With a gradient of −6, to lower the loss, w should be…', '키운다': 'Made bigger', '줄인다': 'Made smaller',
  '기울기가 음수면 w가 커질수록 손실이 작아집니다. 기울기의 반대쪽으로 갑니다.': 'With a negative gradient, the loss gets smaller as w gets bigger. Go opposite the gradient.',
  '학습률 0.1만큼 기울기 반대로 움직입니다.': 'Move against the gradient by the learning rate, 0.1.',
  '새 위치': 'New position', '9 → 5.76으로 줄어듦': 'down from 9 to 5.76', '손실이 줄었습니다.': 'The loss went down.',
  // Step 2
  '학습률': 'Learning rate', '걸음이 너무 작으면 느리고, 너무 크면 튕겨 나간다': 'Too small a step is slow; too big a step bounces away',
  '학습률은 한 걸음의 크기입니다. 0.1이면 매번 바닥까지 남은 거리의 20%씩 다가가 0 → 0.6 → 1.08 → 1.46…으로 천천히 다가갑니다. 이 그릇에서는 0.5가 딱 맞아 한 걸음에 3에 닿습니다. 1.1처럼 너무 크면 바닥을 건너뛰어 반대편으로, 매번 더 멀리 튕겨 나갑니다(발산).':
    'The learning rate is the size of one step. At 0.1 each step closes 20% of the distance left to the bottom, so it creeps up 0 → 0.6 → 1.08 → 1.46…. In this bowl 0.5 is just right and reaches 3 in one step. Too big, like 1.1, jumps over the bottom to the other side and bounces farther each time (divergence).',
  '학습률 1.1에서 w는 0 → 6.6 → −1.32 → 8.18로 바닥에서 점점 멀어졌습니다. 실제 모델은 바닥의 모양을 모르므로, 작은 학습률로 시작하거나 손실이 튀면 학습률을 줄입니다.':
    'At learning rate 1.1, w went 0 → 6.6 → −1.32 → 8.18, farther and farther from the bottom. Real models do not know the shape of the bottom, so they start with a small learning rate or lower it when the loss jumps.',
  '같은 고리입니다. 학습률을 바꿔 가며 w가 어떻게 움직이는지 봅니다.': 'The same loop. Change the learning rate and watch how w moves.',
  '같은 시작': 'Same start', 'w = 0 · 기울기 −6': 'w = 0 · gradient −6', '학습률 0.1 / 0.5 / 1.1을 비교': 'compare learning rates 0.1 / 0.5 / 1.1',
  '학습률 0.1': 'Rate 0.1', '학습률 0.5': 'Rate 0.5', '학습률 1.1': 'Rate 1.1',
  '0.1: 천천히': '0.1: slowly', '남은 거리가 매번 0.8배': 'the distance left shrinks to 0.8× each time', '작은 학습률은 천천히 다가갑니다.': 'A small learning rate creeps closer.',
  '0.5: 한 번에': '0.5: in one go', '한 걸음에 바닥': 'bottom in one step', '이 그릇에서는 0.5가 딱 맞습니다.': 'In this bowl, 0.5 is just right.',
  '1.1: 튕겨 나감': '1.1: bounces away', '0 − 1.1 × (−6) = 6.6 (바닥 3을 건너뜀)': '0 − 1.1 × (−6) = 6.6 (jumps over the bottom, 3)',
  '너무 큰 걸음은 바닥을 건너뛰며 점점 멀어집니다.': 'Too big a step jumps over the bottom and gets farther each time.',
  '손실이 매 걸음 커지며 튄다면 무엇을 바꿔야 할까요?': 'If the loss jumps up with every step, what should change?',
  '학습률을 줄인다': 'Lower the learning rate', '학습률을 키운다': 'Raise the learning rate',
  '걸음이 너무 커서 바닥을 건너뛰는 것입니다. 걸음을 줄이면 다시 내려갑니다.': 'The steps are so big they jump over the bottom. Smaller steps go down again.',
  '0.05로 다시': 'Again at 0.05', '다시 시작': 'Start again', '학습률 0.05 → 남은 거리가 매번 0.9배': 'learning rate 0.05 → the distance left shrinks to 0.9× each time',
  '느리지만 안정적으로 3에 다가감': 'slowly but steadily nearing 3', '학습률을 줄여 다시 시작합니다.': 'Lower the learning rate and start again.', '안정': 'Steady', '발산': 'Diverges',
  // Step 3
  '가중치 여러 개': 'Many weights', '가중치마다 자기 기울기를 따라 동시에 움직인다': 'Each weight moves along its own gradient, all at once',
  '실제 모델은 가중치가 수백만 개입니다. 손실이 가중치 여러 개에 달려 있으면, 가중치마다 "나만 조금 바꾸면 손실이 얼마나 변하나"(편미분)를 구합니다. 그 기울기들을 모은 것이 기울기 벡터(8B.1)이고, 모든 가중치를 동시에 각자 기울기 반대로 옮깁니다. 7.11의 역전파는 이 기울기들을 층마다 거꾸로 효율적으로 구하는 방법입니다.':
    'Real models have millions of weights. When the loss depends on many weights, each weight gets "how much does the loss change if only I change a little" (a partial derivative). Those gradients together form the gradient vector (8B.1), and every weight moves at once, each against its own gradient. Backpropagation in 7.11 is an efficient way to find these gradients layer by layer, backwards.',
  '(w1, w2) = (0, 0)에서 기울기 벡터는 (−6, 2)이고, 한 걸음 뒤 (0.6, −0.2)가 됐습니다. w1은 오른쪽, w2는 왼쪽으로, 각자 자기 바닥(3과 −1)을 향해 갑니다.':
    'At (w1, w2) = (0, 0) the gradient vector is (−6, 2), and one step later they are (0.6, −0.2). w1 goes right and w2 goes left, each toward its own bottom (3 and −1).',
  '같은 고리입니다. 이번에는 가중치가 두 개입니다.': 'The same loop. This time there are two weights.',
  'L = (w1 − 3)² + (w2 + 1)² · 바닥은 (3, −1)': 'L = (w1 − 3)² + (w2 + 1)² · bottom at (3, −1)', '시작 (w1, w2) = (0, 0) · 학습률 0.1': 'start (w1, w2) = (0, 0) · learning rate 0.1',
  '손실을 잽니다.': 'Measure the loss.', '편미분': 'Partial derivatives', '기울기 벡터': 'Gradient vector',
  'w1 방향: 2 × (0 − 3) = −6': 'w1 direction: 2 × (0 − 3) = −6', 'w2 방향: 2 × (0 + 1) = 2': 'w2 direction: 2 × (0 + 1) = 2', '기울기 벡터 = (−6, 2)': 'gradient vector = (−6, 2)',
  '가중치마다 기울기를 구합니다.': 'Find a gradient for each weight.',
  '한 걸음(학습률 0.1) 뒤 (w1, w2)는?': 'After one step (learning rate 0.1), what is (w1, w2)?',
  'w1 = 0 − 0.1 × (−6) = 0.6, w2 = 0 − 0.1 × 2 = −0.2입니다. 각자 기울기 반대로 갑니다.': 'w1 = 0 − 0.1 × (−6) = 0.6 and w2 = 0 − 0.1 × 2 = −0.2. Each goes against its own gradient.',
  '동시에 고치기': 'Update together', '두 가중치를 동시에 옮깁니다.': 'Move both weights at once.', 'L = 5.76 + 0.64 = 6.4 (10에서 줄어듦)': 'L = 5.76 + 0.64 = 6.4 (down from 10)',
  // Step 4
  '조금씩 나눠 보기': 'A little at a time', '예시 일부만 보고 자주 걷는다': 'Look at only some examples and step often',
  '손실은 원래 예시 전체의 평균 오차입니다. 예시가 백만 개면 기울기를 한 번 구하는 데 백만 번 계산해야 합니다. 그래서 무작위로 고른 32개(미니배치)만으로 기울기를 어림해 한 걸음 걷고, 다음 32개로 또 걷습니다. 기울기가 조금 흔들리지만 훨씬 자주 걸을 수 있어 전체적으로 빨리 내려갑니다. 흔들림은 평평한 곳이나 얕은 웅덩이에서 빠져나오는 데 도움이 되기도 합니다.':
    'The loss is really the average error over all examples. With a million examples, one gradient takes a million calculations. So you estimate the gradient from just 32 examples picked at random (a mini-batch), take one step, then step again with the next 32. The gradient wobbles a little, but you can step far more often, so overall you go down faster. The wobble can even help escape flat places and shallow dips.',
  '같은 계산량으로 전체 데이터 기울기는 1걸음, 미니배치는 31,250걸음을 걸었습니다. 8B.2의 표본처럼 32개로도 방향을 꽤 정확히 어림할 수 있기 때문입니다.':
    'For the same amount of computing, the full-data gradient took 1 step and mini-batches took 31,250. As with the samples in 8B.2, 32 examples estimate the direction fairly well.',
  '같은 고리입니다. 손실 계산이 예시 전체 대신 무작위 32개만 봅니다.': 'The same loop. The loss now looks at 32 random examples instead of all of them.',
  '학습 예시 1,000,000개': '1,000,000 training examples', '미니배치 크기 32': 'mini-batch size 32', '학습 중': 'Training',
  '32개': '32', '무작위 32개': '32 at random', '예시 1,000,000개 중 무작위 32개로 손실 계산': 'loss from 32 random examples out of 1,000,000',
  '무작위로 고른 32개만 봅니다.': 'Look at only 32 picked at random.', '32개 평균': 'Mean of 32',
  '백만 개를 다 보는 계산 한 번이면, 32개짜리 미니배치로는 몇 걸음을 걸을 수 있을까요?': 'For the cost of one pass over all million, how many steps can 32-example mini-batches take?',
  '31,250걸음': '31,250 steps', '32걸음': '32 steps', '1걸음': '1 step',
  '1,000,000 ÷ 32 = 31,250입니다. 한 걸음은 덜 정확해도 훨씬 많이 걷습니다.': '1,000,000 ÷ 32 = 31,250. Each step is less exact, but there are far more of them.',
  '어림 기울기': 'Estimate', '조금 흔들리는 기울기': 'A slightly wobbly gradient', '전체 기울기와 방향이 비슷하지만 조금 흔들림': 'close to the full gradient\'s direction, but wobbles a little',
  '32개로 어림한 기울기는 조금 흔들립니다.': 'A gradient estimated from 32 wobbles a little.', '어림': 'Estimate',
  '한 걸음': 'One step', '걷기': 'Step', 'w ← w − 학습률 × 어림 기울기': 'w ← w − learning rate × estimated gradient', '어림한 기울기로 한 걸음 걷습니다.': 'Take one step with the estimated gradient.',
  '다음 32개': 'Next 32', '되풀이': 'Repeat', '다음 무작위 32개로 다시': 'again with the next 32 at random', '전체를 한 바퀴 돌면 1 에포크': 'one pass over everything is 1 epoch',
  '다음 32개로 다시 걷습니다.': 'Step again with the next 32.', '빨리 내려감': 'Going down fast',
  '미니배치 기울기의 흔들림이 도움이 되는 경우는?': 'When does the wobble of a mini-batch gradient help?',
  '평평한 곳이나 얕은 웅덩이에 갇혔을 때 빠져나오기': 'Escaping when stuck in a flat place or shallow dip', '바닥을 정확히 찾을 때': 'Finding the bottom exactly',
  '조금씩 흔들리는 걸음이 작은 웅덩이를 넘어가게 해 줍니다. 대신 바닥 근처에서는 학습률을 줄여 흔들림을 가라앉힙니다.': 'Slightly wobbly steps can carry you over small dips. Near the bottom, though, the learning rate is lowered to calm the wobble.',
  // Example note on the still picture.
  'w = 0에서 L = (w − 3)² = 9': 'at w = 0, L = (w − 3)² = 9', '기울기 2 × (0 − 3) = −6': 'slope 2 × (0 − 3) = −6', '학습률 0.1로 반대쪽 +0.6': 'rate 0.1: +0.6 the other way',
  'w = 0에서 세 걸음씩': 'three steps from w = 0', '학습률 0.1은 1.46…로 천천히': 'rate 0.1: slowly to 1.46…', '0.5는 3에 멈춤': '0.5: stops at 3', '1.1은 8.18로 바닥을 건너뜀': '1.1: past the bottom to 8.18',
  '(0, 0)에서 L = 10': 'at (0, 0), L = 10', '가중치마다 기울기 (−6, 2)': 'a slope per weight (−6, 2)', '학습률 0.1로 (+0.6, −0.2)': 'rate 0.1: (+0.6, −0.2)',
  '예시 100만 개 중 32개만 평균': 'average just 32 of 1M examples', '어림한 기울기로 한 걸음': 'one step on a rough slope', '다음 32개로 또 한 걸음': 'another step on the next 32',
  '8.18 (튕김)': '8.18 (bounced)', '고치기 · 다음 32개': 'Update · next 32',
};
