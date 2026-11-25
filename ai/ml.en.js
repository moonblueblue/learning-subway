// English for 7.10 Machine learning basics. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '머신러닝 기초 · 레슨 7.10': 'Machine learning basics · Lesson 7.10',
  '기온과 아이스크림 판매량 예시에서 판매량 = w × 기온의 w를 찾아 보세요. 예측하고 오차를 재고 w를 고치는 경사 하강법, 처음 보는 데이터로 평가하기, 과적합과 데이터의 치우침을 따라가 봅니다.':
    'From examples of temperature and ice cream sales, find the w in sales = w × temperature. Follow gradient descent, which predicts, measures the error and adjusts w, then evaluating on unseen data, overfitting and biased data.',
  '컴퓨터는 어떻게 예시만 보고 규칙을 배울까요? 예시 세 개에서 시작해 예측, 오차, 고치기의 고리를 돌며 숫자 하나를 배워 가는 과정을 보세요.':
    'How does a computer learn a rule from examples alone? Start from three examples and watch it learn one number by going around the loop of predict, measure the error, adjust.',
  '예시 데이터가 모델을 지나 예측이 되고, 오차 계산이 다시 모델을 고치는 고리 장면': 'A loop where example data passes through a model to become predictions, and the error calculation feeds back to adjust the model',
  '"다음 단계"를 누르면 패킷이 오갑니다.': 'Press "Next step" and the data moves.',
  '"다음 단계"를 눌러 데이터를 하나씩 보내 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to send the data one stage at a time. Prediction questions come up along the way.',
  '데이터와 예측': 'Data and predictions', '틀린 예측': 'Wrong prediction',
  // Stations
  '계층': 'Layer', 
  '예시 데이터': 'Example data', '모델': 'Model', '예측': 'Prediction', '오차 계산': 'Error calculation',
  '예시 데이터 → 모델': 'Example data → Model', '모델 → 예측': 'Model → Prediction', '예측 → 오차 계산': 'Prediction → Error calculation', '오차 계산 → 모델': 'Error calculation → Model',
  '모델 · w = 1.64': 'Model · w = 1.64', '모델 · 28°C?': 'Model · 28°C?', '모델 · −5°C?': 'Model · −5°C?',
  '예측 · 비교': 'Prediction · compare', '예측 (1회)': 'Prediction (1st)', '예측 (2회)': 'Prediction (2nd)',
  // Labels and holds
  '{0}°C → {1}개': '{0}°C → {1} sold', '{#0}개': '{0} sold', '−10개 ???': '−10 sold ???', '−5°C → 2 × (−5) = −10개 ???': '−5°C → 2 × (−5) = −10 sold ???',
  '예시 {#0}개': '{0} {0|example|examples}', '시험 {#0}개': '{0} {0|test|tests}', '약 0.5': 'About 0.5', '약 2': 'About 2', '약 20': 'About 20',
  '오차 {#0}': 'Error {0}', '오차 재기': 'Measure the error', '오차(차이 제곱의 평균) ≈ 642': 'Error (mean of squared differences) ≈ 642', '오차 ≈ 82 (642에서 줄어듦)': 'Error ≈ 82 (down from 642)',
  'w 고치기': 'Adjust w', 'w를 키워': 'Raise w', '키운다': 'Raise it', '줄인다': 'Lower it',
  'w = 1에서 시작 · 학습률 0.0005': 'Start at w = 1 · learning rate 0.0005', 'w = 2라면 28°C → 56개': 'If w = 2, 28°C → 56 sold',
  'w: 1.64 → 1.87 → (되풀이) → 2에 가까워짐': 'w: 1.64 → 1.87 → (repeat) → nears 2', 'w는 아직 모름 → 예시에서 찾아야 함': 'w is unknown yet → must be found from the examples',
  '판매량 = w × 기온': 'Sales = w × temperature', '판매량 = 2 × 기온을 배움': 'Learned sales = 2 × temperature',
  '기온 20, 25, 30': 'Temperatures 20, 25, 30', '기온 20, 25, 30을 모델에 넣음': 'Temperatures 20, 25, 30 go into the model',
  '예시 데이터 (기온 → 판매량)': 'Example data (temperature → sales)', '정답: 40, 50, 60개': 'Answers: 40, 50, 60 sold',
  '예측: 20, 25, 30개': 'Predictions: 20, 25, 30 sold', '예측: 32.8, 41.0, 49.3개': 'Predictions: 32.8, 41.0, 49.3 sold',
  '차이: −20, −25, −30 → 모두 너무 작게 예측': 'Differences: −20, −25, −30 → all predicted too small', '차이 ±1': 'Difference ±1',
  '시험 데이터 (숨겨 둠): 22°C → 45개, 33°C → 65개': 'Test data (kept hidden): 22°C → 45 sold, 33°C → 65 sold',
  '실제: 45개, 65개 → 차이 −1, +1': 'Actual: 45, 65 sold → differences −1, +1',
  '시험 데이터': 'Test data', '시험 데이터 넣기': 'Feed in test data', '예시 넣기': 'Feed in examples', '학습 시작': 'Start learning', '학습이 끝난 모델': 'Trained model',
  '처음 보는 데이터': 'Unseen data', '처음 보는 데이터에서도 잘 맞음': 'Good on unseen data too', '학습 때 한 번도 보지 못한 기온': 'A temperature never seen in training',
  '시험 오차 큼': 'Large test error', '학습 오차 0': 'Training error 0', '시험 오차: 단순한 모델보다 훨씬 큼': 'Test error: far larger than the simple model\'s',
  '학습 예시 12개: 오차 0 (모두 정확히 맞힘)': '12 training examples: error 0 (all exactly right)',
  '① 복잡한 모델': '① Complex model', '① 시험해 보니': '① On testing', '① 점마다 꺾이는 복잡한 모델 (예시 12개를 모두 정확히 통과)': '① A complex model that bends at every point (passes all 12 examples exactly)',
  '② 겨울을 예측': '② Predicting winter', '② 여름만 본 모델': '② A model that saw only summer', '② 예시가 여름(20–33°C)뿐인 모델': '② A model whose examples are summer only (20–33°C)',
  '여름 예시': 'Summer examples', '여름 예시 12개': '12 summer examples', '비 온 날 덜 팔린 것까지 외움': 'Memorized even lower sales on a rainy day',
  '팔린 개수가 음수일 수는 없음': 'The number sold cannot be negative',
  '두 가지 문제': 'Two problems', '모델의 모양': 'Shape of the model', '배우는 고리': 'The learning loop', '배운 뒤에는': 'After learning', '비교': 'Compare', '평가': 'Evaluation',
  // Step 1
  '규칙 대신 예시': 'Examples instead of rules',
  '사람이 규칙을 쓰는 대신 예시에서 규칙을 찾게 한다': 'Instead of a person writing the rule, let the computer find it in examples',
  '지금까지는 사람이 규칙을 코드로 썼습니다("300보다 작으면 물 주기", 6.10). 그런데 "기온으로 아이스크림 판매량 예측하기"처럼 규칙을 정확히 모를 때가 많습니다. 머신러닝은 기온과 실제 판매량의 예시를 보여 주고, 컴퓨터가 둘 사이의 규칙을 찾게 합니다. 여기서는 "판매량 = w × 기온"이라는 모양만 정해 두고, 숫자 w를 예시로부터 배웁니다.':
    'So far people have written rules as code ("water if below 300", 6.10). But often we do not know the exact rule, as in "predict ice cream sales from the temperature". Machine learning shows the computer examples of temperatures and actual sales and has it find the rule between them. Here only the shape "sales = w × temperature" is fixed, and the number w is learned from the examples.',
  '예시 세 개를 보면 판매량이 기온의 두 배쯤입니다. 사람은 눈으로 찾았지만, 컴퓨터는 w를 조금씩 고치는 방법으로 찾습니다(다음 단계). 이렇게 정답이 붙은 예시로 배우는 것을 지도 학습이라 합니다.':
    'Looking at the three examples, sales are about twice the temperature. A person spots it by eye; a computer finds it by adjusting w bit by bit (next step). Learning from examples that come with answers like this is called supervised learning.',
  '왼쪽부터 예시 데이터, 모델, 예측이 놓여 있습니다.': 'From the left are the example data, the model and the predictions.',
  '예시의 기온을 모델에 넣습니다.': 'The examples\' temperatures go into the model.',
  '모델의 모양만 정하고 숫자 w는 비워 둡니다.': 'Only the model\'s shape is fixed; the number w is left blank.',
  '규칙을 배우면 처음 보는 기온도 예측할 수 있습니다.': 'Once it learns the rule, it can predict temperatures it has never seen.',
  '예시를 보면 w는 얼마쯤일까요?': 'Looking at the examples, about what is w?',
  '20 → 40, 25 → 50, 30 → 60이므로 판매량은 기온의 두 배입니다.': '20 → 40, 25 → 50, 30 → 60, so sales are twice the temperature.',
  // Step 2
  '틀린 만큼 고치기': 'Adjust by how wrong it was',
  '예측하고, 틀린 정도를 재고, w를 조금 고친다': 'Predict, measure how wrong, adjust w a little',
  '컴퓨터는 w = 1처럼 아무 값에서 시작합니다. 예시마다 예측하고 정답과 비교해 오차를 잽니다. 오차가 줄어드는 방향으로 w를 조금 옮기고 다시 예측합니다. 이것을 되풀이하는 것이 학습이고, 오차가 줄어드는 쪽으로 내려가는 방법을 경사 하강법이라 합니다. 한 번에 얼마나 옮길지(학습률)는 사람이 정합니다.':
    'The computer starts from any value, such as w = 1. It predicts for each example and measures the error against the answer. It moves w a little in the direction that lowers the error and predicts again. Repeating this is learning, and going downhill toward lower error is called gradient descent. How far to move at a time (the learning rate) is set by a person.',
  'w가 1 → 1.64 → 1.87로 2에 다가갑니다. 2와의 차이는 매번 3분의 1쯤으로, 오차(차이 제곱의 평균)는 8분의 1쯤으로 줄어듭니다. 컴퓨터는 "두 배"라는 규칙을 몰랐지만, 틀린 만큼 고치기를 되풀이해 찾아냈습니다.':
    'w goes 1 → 1.64 → 1.87, closing in on 2. The gap to 2 shrinks to about a third each time, and the error (mean of squared differences) to about an eighth. The computer did not know the rule "twice", but found it by repeatedly adjusting by how wrong it was.',
  '예시 데이터, 모델, 예측이 한 줄로 놓이고, 예측 아래의 오차 계산이 다시 모델로 이어지는 고리가 있습니다.': 'The example data, model and predictions sit in a row, and the error calculation below the predictions loops back to the model.',
  '예측이 모두 정답보다 작습니다.': 'Every prediction is below the answer.',
  'w = 1로 예측하면 정답의 절반입니다.': 'Predicting with w = 1 gives half the answer.',
  '오차가 줄어드는 쪽으로 w를 조금 옮깁니다.': 'w moves a little in the direction that lowers the error.',
  '다시 예측하니 정답에 가까워졌습니다.': 'Predicting again comes closer to the answers.',
  '오차가 크게 줄었습니다.': 'The error dropped a lot.', '되풀이할수록 w가 2에 다가갑니다.': 'The more it repeats, the closer w gets to 2.',
  '오차를 줄이려면 w를 어느 쪽으로 고쳐야 할까요?': 'Which way should w change to lower the error?',
  '예측이 모두 너무 작으니 w를 키워야 예측이 커집니다.': 'All predictions are too small, so w must go up to make them bigger.',
  '학습률을 너무 크게 하면 어떻게 될까요?': 'What happens if the learning rate is too large?',
  'w가 2를 지나쳐 왔다 갔다 하거나 멀어진다': 'w overshoots 2 and swings back and forth, or drifts away', '언제나 더 빨리 정확해진다': 'It always gets accurate faster',
  '한 번에 너무 많이 옮기면 목표를 건너뛰어 오차가 오히려 커질 수 있습니다.': 'Moving too far at once can jump past the target and make the error grow instead.',
  // Step 3
  '배운 데이터가 아니라 처음 보는 데이터로 평가한다': 'Evaluate on unseen data, not the data it learned from',
  '모델이 쓸모 있는지는 배울 때 본 예시가 아니라 처음 보는 데이터에서 잘 맞히는지로 판단합니다. 그래서 예시를 미리 나눠, 일부는 학습에 쓰고 일부(시험 데이터)는 숨겨 두었다가 평가에만 씁니다. 6.2의 테스트처럼, 시험 문제를 미리 보여 주면 실력을 잴 수 없습니다.':
    'Whether a model is useful is judged not by the examples it saw while learning but by how well it does on data it has never seen. So the examples are split in advance: some are used for learning and some (the test data) are hidden and used only for evaluation. As with the tests of 6.2, showing the exam questions beforehand makes it impossible to measure skill.',
  '숨겨 둔 22°C와 33°C에서 예측 44.0과 66.0이 실제 45개, 65개와 가깝습니다. 처음 보는 데이터에서도 잘 맞으니 규칙을 제대로 배운 것입니다(일반화).':
    'For the hidden 22°C and 33°C, the predictions 44.0 and 66.0 are close to the actual 45 and 65. It does well on unseen data too, so it learned the rule properly (generalization).',
  '같은 고리 장면입니다. 이번에는 학습에 쓰지 않은 시험 데이터로 예측해 봅니다.': 'The same loop scene. This time it predicts on test data not used in learning.',
  '숨겨 두었던 시험 데이터를 넣습니다.': 'The hidden test data goes in.', '처음 보는 기온을 예측합니다.': 'It predicts temperatures it has never seen.', '실제와 거의 같습니다.': 'Almost the same as the actual values.',
  '모델을 평가할 때 학습에 쓴 예시로 재면 안 되는 까닭은?': 'Why must a model not be evaluated on the examples it learned from?',
  '외워서 맞히는 것과 규칙을 배운 것을 구별할 수 없어서': 'You cannot tell memorizing from learning the rule', '계산이 느려서': 'The calculation is slow',
  '본 문제를 맞히는 것은 외워도 됩니다. 처음 보는 문제를 맞혀야 배운 것입니다.': 'Questions already seen can be answered by memory. Answering unseen ones shows real learning.',
  // Step 4
  '외우기와 치우침': 'Memorizing and bias',
  '너무 외우거나 치우친 예시로 배우면 틀린다': 'Memorizing too much or learning from biased examples goes wrong',
  '모델을 아주 복잡하게 만들면, 예시의 작은 우연(그날 비가 와서 덜 팔림)까지 외워 학습 예시는 완벽히 맞히지만 처음 보는 데이터는 틀립니다. 이것을 과적합이라 합니다. 또 예시가 여름 데이터뿐이라면 모델은 겨울을 본 적이 없어 영하의 기온에 음수 판매량을 예측합니다. 모델은 보여 준 예시만큼만 압니다.':
    'Make the model very complex and it memorizes even small accidents in the examples (fewer sold because it rained that day): it gets the training examples perfectly right but misses unseen data. This is called overfitting. And if the examples are summer data only, the model has never seen winter and predicts negative sales for temperatures below zero. A model knows only as much as the examples it was shown.',
  '과적합은 시험 데이터 점수로 알아채고, 모델을 단순하게 하거나 예시를 늘려 막습니다. 데이터의 치우침은 모델에 그대로 옮겨지므로, 어떤 예시로 배웠는지가 결과만큼 중요합니다(0.8 컴퓨팅의 영향).':
    'Overfitting is caught by the test data score and prevented by simplifying the model or adding examples. Bias in the data carries straight into the model, so which examples it learned from matters as much as the result (0.8 Impact of computing).',
  '같은 고리 장면입니다. 너무 복잡한 모델과 여름 예시만으로 배운 모델을 시험합니다.': 'The same loop scene. It tests an overly complex model and a model that learned from summer examples only.',
  '복잡한 모델이 학습 예시를 완벽히 맞힙니다.': 'The complex model gets the training examples perfectly right.',
  '처음 보는 데이터에서는 크게 틀립니다.': 'On unseen data it is far off.',
  '여름 예시만으로 배웠습니다.': 'It learned from summer examples only.',
  '본 적 없는 겨울에서는 엉뚱한 답을 냅니다.': 'In winter, which it has never seen, it gives an absurd answer.',
  '모델은 보여 준 범위 안에서만 믿을 만합니다. 데이터의 치우침은 모델의 치우침이 됩니다.': 'A model is trustworthy only within the range it was shown. Bias in the data becomes bias in the model.',
  '학습 오차는 0인데 시험 오차가 크다면?': 'Training error is 0 but test error is large. What does that mean?',
  '예시를 외웠다(과적합)': 'It memorized the examples (overfitting)', '완벽한 모델이다': 'It is a perfect model',
  '본 것만 맞히고 처음 보는 것을 못 맞히면 규칙이 아니라 우연까지 외운 것입니다.': 'Getting only what it saw right and missing the unseen means it memorized accidents, not the rule.',
  '이 엉뚱한 예측의 원인은?': 'What caused this absurd prediction?',
  '예시가 여름에 치우쳐 겨울을 배운 적이 없어서': 'The examples lean toward summer, so it never learned winter', '계산 실수': 'A calculation mistake',
  // Example note on the still picture.
  '예시 20°C → 40개 · 25°C → 50개 · 30°C → 60개': 'examples 20°C → 40 · 25°C → 50 · 30°C → 60', '판매량 = w × 기온에서 w = 2를 배움': 'learns w = 2 in sales = w × temperature', '28°C → 56개': '28°C → 56',
  'w = 1로 예측 20, 25, 30': 'with w = 1 predicts 20, 25, 30', '정답 40, 50, 60과 비교해 오차 642': 'vs answers 40, 50, 60: error 642', 'w를 1.64로 키우니 오차 82': 'w raised to 1.64: error 82',
  '처음 보는 22°C, 33°C': 'unseen 22°C, 33°C', 'w ≈ 2.0으로 예측 44, 66': 'w ≈ 2.0 predicts 44, 66', '실제 45, 65와 차이 ±1': 'real 45, 65: off by ±1',
  '여름(20–33°C) 예시로만 배운 w = 2': 'w = 2 learned from summer only (20–33°C)', '−5°C에 그대로 쓰면 −10개': 'at −5°C it says −10', '본 적 없는 겨울에서는 엉뚱함': 'wrong in a winter it never saw',
};
