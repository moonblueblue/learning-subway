// English for 8B.2 Probability and statistics. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '확률과 통계 · 레슨 8B.2': 'Probability and statistics · Lesson 8B.2', '확률과 통계': 'Probability and statistics',
  '평균과 중앙값, 드문 병 검사로 보는 조건부 확률, 표본의 크기와 치우침, 상관과 인과의 차이를 문제로 익혀 보세요.':
    'Learn through questions the mean and the median, conditional probability seen through a test for a rare disease, sample size and bias, and the difference between correlation and causation.',
  '불확실한 것을 어떻게 수로 다룰까요? 용돈, 병 검사, 동전, A/B 테스트 예로 데이터를 요약하고 확률로 판단하는 방법을 문제로 확인해 보세요.':
    'How do we handle uncertainty with numbers? Through questions about pocket money, disease tests, coins and A/B tests, see how to summarize data and judge with probability.',
  // Step 1
  '대푯값': 'Averages', '용돈 3, 3, 4, 5, 35': 'Pocket money 3, 3, 4, 5, 35', '총 50을 5로 나눔': 'Total 50 divided by 5', '평균 10 · 중앙값 4': 'Mean 10 · median 4',
  '평균은 튀는 값 하나에 크게 흔들린다': 'One outlier pulls the mean a long way',
  '데이터를 한 숫자로 요약할 때 평균(모두 더해 개수로 나눔)과 중앙값(크기순으로 줄 세운 가운데 값)을 씁니다. 대부분은 비슷하고 한 값만 크게 튀면, 평균은 그 값 쪽으로 끌려가지만 중앙값은 거의 그대로입니다. 그래서 소득이나 응답 시간처럼 튀는 값이 있는 데이터는 중앙값이나 상위 몇 %를 함께 봅니다.':
    'To sum data up in one number we use the mean (add everything and divide by the count) and the median (the middle value once lined up by size). When most values are similar and just one is far off, the mean is pulled toward it but the median barely moves. So for data with outliers, like income or response time, we also look at the median or the top few percent.',
  '2.4에서 경우의 수와 확률을 셌습니다. 7.10의 오차(차이 제곱의 평균)도 평균의 한 가지입니다.': 'In 2.4 we counted cases and probabilities. The error in 7.10 (the mean of squared differences) is a kind of mean too.',
  '다섯 명의 한 달 용돈(만 원)입니다. 다음 문장이 참인지 고르세요.': 'Five people\'s monthly pocket money (in 10,000 won). Choose whether each sentence is true.',
  '평균은 10만 원이다.': 'The mean is 10.', '(3 + 3 + 4 + 5 + 35) ÷ 5 = 50 ÷ 5 = 10입니다.': '(3 + 3 + 4 + 5 + 35) ÷ 5 = 50 ÷ 5 = 10.',
  '중앙값은 4만 원이다.': 'The median is 4.', '크기순 3, 3, 4, 5, 35의 가운데(세 번째) 값은 4입니다.': 'In size order, 3, 3, 4, 5, 35, the middle (third) value is 4.',
  '평균 10만 원이 이 다섯 명의 보통 용돈을 잘 나타낸다.': 'The mean of 10 represents these five people\'s usual pocket money well.',
  '다섯 명 중 네 명이 5만 원 이하입니다. 35만 원 한 명이 평균을 끌어올렸습니다.': 'Four of the five get 5 or less. The one person on 35 pulled the mean up.',
  '35를 5로 바꾸면 평균은 크게 바뀌지만 중앙값은 그대로다.': 'Changing 35 to 5 changes the mean a lot but leaves the median as it is.',
  '평균은 (3 + 3 + 4 + 5 + 5) ÷ 5 = 4로 떨어지지만, 중앙값은 여전히 4입니다.': 'The mean drops to (3 + 3 + 4 + 5 + 5) ÷ 5 = 4, but the median is still 4.',
  '웹 서비스 응답 시간을 "평균 0.2초"로만 보고하면 무엇을 놓칠 수 있을까요?': 'If a web service reports its response time only as "0.2 seconds on average", what can be missed?',
  '100명 중 1명이 10초씩 기다리는 일을 놓칩니다. 그래서 응답 시간은 중앙값과 함께 "상위 1%가 겪는 시간(p99)"을 같이 봅니다.':
    'It misses 1 in 100 people waiting 10 seconds. So response time is read with the median and "the time the slowest 1% see (p99)".',
  // Step 2
  '조건부 확률': 'Conditional probability', '1,000명 중 실제 환자 10명': '10 real patients in 1,000 people', '진짜 양성과 거짓 양성이 각각 약 10명': 'About 10 true positives and 10 false positives', '양성 중 환자는 약 절반': 'About half the positives are ill',
  '양성이 나와도 병일 확률은 생각보다 낮을 수 있다': 'A positive result may mean a lower chance of illness than you think',
  '"A가 일어났을 때 B일 확률"을 조건부 확률이라 합니다. 1,000명 중 10명(1%)만 걸리는 병이 있고, 검사는 병이 있으면 99% 양성, 병이 없어도 1%는 잘못 양성이 나온다고 합시다. 양성이 나온 사람만 모으면, 진짜 환자 약 10명과 잘못 양성인 약 10명(990명의 1%)이 섞여 있습니다.':
    '"The probability of B given that A happened" is called conditional probability. Say a disease affects only 10 in 1,000 people (1%), and the test is positive 99% of the time for the ill but also wrongly positive for 1% of the healthy. Gather just the people who tested positive and you find about 10 real patients mixed with about 10 false positives (1% of 990).',
  '스팸 필터는 "이 단어가 있을 때 스팸일 확률"을, 그림을 분류하는 신경망(7.11)은 "이 그림일 때 세로선일 확률"을 계산합니다. 모두 조건부 확률입니다.':
    'A spam filter computes "the probability of spam given this word", and the picture-sorting neural network (7.11) computes "the probability of a vertical line given this picture". Both are conditional probabilities.',
  '1,000명 중 10명이 병, 검사 정확도 99%(병 있으면 99% 양성, 없으면 1% 양성)입니다. 다음 문장이 참인지 고르세요.':
    '10 in 1,000 people are ill, and the test is 99% accurate (99% positive if ill, 1% positive if not). Choose whether each sentence is true.',
  '병이 없는 990명 중 약 10명이 잘못 양성이 나온다.': 'Of the 990 healthy people, about 10 test wrongly positive.', '990 × 1% ≈ 9.9명입니다.': '990 × 1% ≈ 9.9 people.',
  '양성이 나온 사람은 약 20명이다.': 'About 20 people test positive.', '진짜 환자 약 10명(10 × 99%) + 잘못 양성 약 10명입니다.': 'About 10 real patients (10 × 99%) + about 10 false positives.',
  '양성이 나온 사람이 실제로 병일 확률은 99%다.': 'The probability that someone who tests positive is really ill is 99%.',
  '양성 약 20명 중 진짜 환자는 약 10명이라 약 50%입니다. 병이 드물수록 잘못된 양성의 비중이 커집니다.': 'About 10 of about 20 positives are real patients, so it is about 50%. The rarer the disease, the bigger the share of false positives.',
  '한 번 더 검사해 또 양성이면 병일 확률이 크게 올라간다.': 'If a second test is positive too, the probability of illness rises a lot.',
  '잘못 양성이 두 번 연속 나올 확률은 1% × 1% = 0.01%라, 두 번 양성인 사람은 대부분 진짜 환자입니다.': 'The chance of two false positives in a row is 1% × 1% = 0.01%, so most people positive twice are really ill.',
  '하루 1억 건의 로그인 중 0.01%가 공격이고, 탐지기가 공격의 99%를 잡지만 정상 로그인의 1%도 공격이라고 잘못 경보를 냅니다. 경보의 대부분은 무엇일까요?':
    'Of 100 million logins a day, 0.01% are attacks. A detector catches 99% of attacks but also wrongly raises an alarm on 1% of normal logins. What are most of the alarms?',
  '공격 1만 건 중 9,900건, 정상 9,999만 건 중 약 100만 건이 경보를 냅니다. 경보 대부분(99% 가까이)이 잘못된 경보라 사람이 다 볼 수 없습니다. 드문 일을 찾을 때는 잘못 경보율이 아주 낮아야 합니다.':
    '9,900 of the 10,000 attacks raise alarms, and so do about 1 million of the 99.99 million normal logins. Nearly 99% of alarms are false, too many for people to check. When looking for rare events, the false-alarm rate has to be very low.',
  // Step 3
  '표본과 오차': 'Samples and error', '운동장에서만 조사': 'Survey only at the sports field', '운동을 자주 하는 사람이 많이 뽑힘': 'Many people who exercise often get picked', '표본을 키워도 편향이 남음': 'A bigger sample still keeps the bias',
  '적게 보면 우연에 속고, 치우치게 보면 크게 봐도 틀린다': 'Look at too few and chance fools you; look at a biased few and even many are wrong',
  '전체를 다 볼 수 없으니 일부(표본)를 보고 추측합니다. 표본이 작으면 우연 때문에 크게 틀릴 수 있고, 표본이 클수록 비율이 참값에 가까워집니다(큰 수의 법칙). 하지만 표본을 한쪽에서만 뽑으면 아무리 많아도 틀립니다. 7.10에서 여름 데이터만으로 배운 모델이 겨울을 틀린 것과 같습니다.':
    'We cannot see the whole, so we guess from a part (a sample). A small sample can be far off by chance, and the bigger the sample, the closer the proportion gets to the true value (the law of large numbers). But a sample drawn from one side only is wrong however large it is, just as the model in 7.10 that learned only from summer data got winter wrong.',
  '7.10에서 학습 데이터와 시험 데이터를 나눈 것도 표본으로 실력을 추측하는 일입니다.': 'Splitting training data from test data in 7.10 is also guessing skill from a sample.',
  '동전을 10번 던져 앞면이 7번 나왔으니 이 동전은 앞면이 잘 나오는 동전이다.': 'A coin came up heads 7 times in 10 tosses, so it is a coin that favors heads.',
  '공정한 동전도 10번 중 7번 이상 앞면이 나올 확률이 약 17%입니다. 10번은 너무 적습니다.': 'Even a fair coin has about a 17% chance of 7 or more heads in 10 tosses. 10 tosses is far too few.',
  '공정한 동전을 1만 번 던지면 앞면 비율은 50%에 아주 가까워진다.': 'Toss a fair coin 10,000 times and the share of heads gets very close to 50%.',
  '큰 수의 법칙입니다. 던질수록 우연의 영향이 줄어듭니다.': 'That is the law of large numbers. The more tosses, the less chance matters.',
  '무작위로 뽑은 1,000명 여론조사의 오차는 대략 ±3%p다.': 'A poll of 1,000 people picked at random has an error of about ±3 percentage points.',
  '무작위 표본의 오차는 대략 1 ÷ √n입니다. 1 ÷ √1000 ≈ 0.032입니다.': 'The error of a random sample is roughly 1 ÷ √n. 1 ÷ √1000 ≈ 0.032.',
  '앱 사용자 10만 명에게만 물어본 설문은 크기가 크니 전 국민의 생각을 나타낸다.': 'A survey that asked only 100,000 users of one app is big, so it shows what the whole country thinks.',
  '그 앱을 쓰는 사람에게 치우친 표본입니다. 크기가 커도 치우침은 사라지지 않습니다.': 'The sample is biased toward people who use that app. Size does not remove bias.',
  '새 기능을 써 본 사용자 20명 중 15명이 좋다고 했습니다. 이것만으로 모든 사용자가 좋아한다고 말할 수 있을까요?': '15 of 20 users who tried a new feature said they liked it. Is that enough to say all users like it?',
  '어렵습니다. 20명은 적고, 새 기능을 먼저 써 본 사람은 원래 새것을 좋아하는 쪽으로 치우쳤을 수 있습니다. 무작위로 고른 더 많은 사용자로 확인해야 합니다.':
    'Hardly. 20 is few, and people who try a new feature first may lean toward liking new things anyway. It needs checking with more users picked at random.',
  // Step 4
  '상관과 인과': 'Correlation and causation', '더운 날이 늘어남': 'More hot days', '아이스크림 판매와 물놀이 모두 증가': 'Ice cream sales and swimming both rise', '함께 늘어도 직접 원인은 미확정': 'Rising together does not settle the cause',
  '함께 변한다고 원인이라는 뜻은 아니다': 'Changing together does not mean one causes the other',
  '두 값이 함께 오르내리는 것을 상관이라 합니다. 상관이 있어도 하나가 다른 하나의 원인이라는 보장은 없습니다. 둘 다 제3의 원인 때문일 수도 있고, 방향이 거꾸로일 수도 있고, 우연일 수도 있습니다. 원인을 확인하는 가장 확실한 방법은 무작위로 두 집단을 나눠 하나만 바꾸고 비교하는 실험(A/B 테스트)입니다.':
    'Two values rising and falling together is called correlation. Correlation does not guarantee that one causes the other. Both may come from a third cause, the direction may be the other way round, or it may be chance. The surest way to check a cause is an experiment that splits people into two groups at random, changes one thing for one group and compares (an A/B test).',
  '6.8의 화면 설계나 9.3의 성능 개선도 "바꾸기 전과 후"를 무작위 집단으로 비교해야 효과를 믿을 수 있습니다.': 'For screen design in 6.8 or performance work in 9.3 too, the effect can be trusted only when "before and after" are compared on random groups.',
  '이 근거로 "원인"이라고 말할 수 있을까요?': 'Does this evidence let you say "cause"?',
  '원인이라고 볼 근거가 있다': 'There is evidence of a cause', '함께 변할 뿐, 원인이라 단정 못 한다': 'They only change together; no cause can be claimed',
  '아이스크림 판매량이 늘 때 물놀이 사고도 는다. → 아이스크림이 사고를 부른다.': 'When ice cream sales rise, swimming accidents rise too. → Ice cream causes accidents.',
  '둘 다 더운 날씨라는 제3의 원인 때문에 함께 늘어납니다.': 'Both rise together because of a third cause: hot weather.',
  '사용자를 무작위로 반씩 나눠 B 집단에만 새 버튼을 보여 줬더니 B의 구매율만 올랐다.': 'Users were split in half at random and only group B saw a new button; only B\'s purchase rate went up.',
  '무작위로 나눠 버튼만 달리했으므로, 다른 차이는 고르게 섞여 버튼이 원인이라고 볼 수 있습니다.': 'The split was random and only the button differed, so other differences are evenly mixed and the button can be taken as the cause.',
  '앱을 오래 쓰는 사용자가 구매도 많다. → 앱 사용 시간을 늘리면 구매가 는다.': 'Users who spend long in the app also buy more. → More time in the app means more purchases.',
  '원래 물건을 살 마음이 있는 사람이 앱을 오래 볼 수도 있습니다. 방향이 거꾸로일 수 있습니다.': 'People who already mean to buy may spend longer in the app. The direction may be the other way round.',
  '서버를 무작위로 반씩 나눠 한쪽에만 새 캐시 설정을 켰더니 그쪽 응답 시간만 줄었다.': 'Servers were split in half at random and a new cache setting was turned on for one half; only that half got faster.',
  '무작위로 나눈 실험에서 설정만 달랐으므로 설정이 원인입니다.': 'In a randomly split experiment only the setting differed, so the setting is the cause.',
  '"우리 앱 알림을 켠 사용자는 재방문율이 2배"라는 보고를 보고 "모든 사용자에게 알림을 강제로 켜자"고 하면 무엇이 문제일까요?':
    'A report says "users who turned on our app\'s notifications come back twice as often", and someone proposes "turn notifications on for every user". What is wrong with that?',
  '알림을 스스로 켠 사람은 원래 앱을 좋아하는 사람일 수 있습니다. 무작위로 고른 일부에게만 알림을 켜는 실험으로 효과를 먼저 확인해야 합니다.':
    'People who turned notifications on themselves may simply like the app already. The effect should first be checked with an experiment that turns notifications on for a randomly chosen part of users.',
};
