// English for 9.4 Track project. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '트랙 프로젝트 · 프로젝트 9.4': 'Track project · Project 9.4',
  '8장에서 고른 트랙으로 스스로 문제를 정할 때, 알맞은 크기 고르기, 확인할 수 있는 완료 기준 적기, 가장 작은 판부터 나눠 만들기, 기준으로 확인하고 기록 남기기를 문제로 익혀 보세요.':
    'When you set your own problem in the track you chose in chapter 8, learn through exercises how to pick the right size, write checkable completion criteria, build in pieces starting from the smallest version, and check against the criteria and leave a record.',
  '8장에서 고른 트랙의 주제로 스스로 문제를 정해 해결하려면 어떻게 시작할까요? 프로젝트를 고르고, 기준을 정하고, 나누고, 마무리하는 방법을 문제로 확인해 보세요.':
    'How do you start setting and solving your own problem on the topic of the track you chose in chapter 8? Work through choosing a project, setting criteria, splitting it up and wrapping it up.',
  // Step 1
  '문제 고르기': 'Choose a problem', '몇 주 안에 완성할 주제': 'A topic done in a few weeks', '대상과 한 가지 기능을 한정': 'Limit to one user and one feature', '끝까지 시연할 범위 확보': 'A scope you can demo end to end',
  '고른 트랙 안에서, 몇 주 안에 끝낼 수 있는 크기로 정한다': 'Within your track, pick a size you can finish in a few weeks',
  '트랙 프로젝트는 8장에서 고른 트랙의 주제로 스스로 문제를 정해 끝까지 해결하는 일입니다. 가장 흔한 실패는 문제를 너무 크게 잡는 것입니다. 좋은 문제는 트랙의 레슨 몇 개를 실제로 써야 하고, 혼자 몇 주 안에 끝낼 수 있으며, 다 됐는지 확인할 방법이 있습니다.':
    'A track project means setting your own problem on the topic of the track you chose in chapter 8 and solving it to the end. The most common failure is making the problem too big. A good problem actually uses a few of the track\'s lessons, can be finished alone in a few weeks, and has a way to check that it is done.',
  '9.1–9.3이 좋은 크기의 예입니다. 각각 여러 장을 엮지만 하나의 분명한 결과(답 6, 다시 켜도 남는 값, 버티는 부하)로 끝납니다.': '9.1–9.3 are examples of a good size. Each ties several chapters together but ends in one clear result (the answer 6, values that survive a restart, a load that holds).',
  '트랙 프로젝트로 알맞은 크기일까요?': 'Is this the right size for a track project?',
  '알맞다': 'Right size', '너무 크거나 흐릿하다': 'Too big or vague',
  '8B: 손글씨 숫자 0–9를 알아보는 작은 신경망을 만들어 시험 데이터 정확도 90% 넘기기': '8B: Build a small neural network that reads handwritten digits 0–9 and beats 90% accuracy on test data',
  '8B.1–8B.4를 직접 쓰고, 정확도라는 분명한 끝이 있습니다.': 'It uses 8B.1–8B.4 directly and has a clear end: accuracy.',
  '8B: 사람처럼 대화하는 인공지능 만들기': '8B: Build an AI that talks like a person',
  '8B.6의 대규모 언어 모델은 거대한 데이터와 계산이 필요합니다. 몇 주 안에 혼자 끝낼 수 없습니다.': 'The large language models of 8B.6 need huge amounts of data and computation. You cannot finish one alone in a few weeks.',
  '8A: 서버 3대짜리 Raft로 값 하나를 지키는 저장소, 리더를 꺼도 확정 값이 남는지 테스트': '8A: A store that guards one value with 3-server Raft, tested so a committed value survives the leader going down',
  '8A.4–8A.5를 실제로 구현하고, 테스트로 끝을 확인할 수 있습니다.': 'It actually implements 8A.4–8A.5, and tests can confirm it is done.',
  '8C: 우리 학교 홈페이지 보안을 완벽하게 만들기': '8C: Make my school\'s website perfectly secure',
  '"완벽"은 끝이 없고, 허락받지 않은 시스템을 시험하면 안 됩니다. 내가 만든 앱의 위협 모델과 수정으로 좁힙니다(8C.6).': '"Perfect" has no end, and you must not test systems without permission. Narrow it to a threat model and fixes for an app you built (8C.6).',
  '고른 트랙에서 해 보고 싶은 문제를 한 문장으로 적어 보세요. "무엇을, 어디까지"가 들어 있나요?': 'Write the problem you want to try in your track in one sentence. Does it say "what, and how far"?',
  '예: "8D: 키보드만으로 끝까지 할 수 있는 작은 퍼즐 게임을 만들고, 사용자 5명 중 4명이 도움 없이 첫 판을 끝내게 하기."': 'For example: "8D: Build a small puzzle game playable to the end with the keyboard alone, and have 4 of 5 users finish the first round without help."',
  // Step 2
  '완료 기준': 'Completion criteria', '‘빠르게’라는 목표': 'A goal of ‘fast’', '100건 처리 시간을 측정': 'Measure time for 100 items', '완료 여부를 재현해 판정': 'Judge done-ness repeatably',
  '다 됐는지 숫자나 테스트로 확인할 수 있게 적는다': 'Write it so numbers or tests can confirm it is done',
  '"잘 동작한다"는 끝을 정해 주지 않습니다. 완료 기준은 누가 봐도 됐는지 아닌지 판단할 수 있게 적습니다. 정확도, 응답 시간, 통과해야 할 테스트, 사용자 과제 성공률처럼 잴 수 있는 것으로 적고, 시작할 때 미리 정해 둡니다.':
    '"It works well" does not define an end. Write completion criteria so anyone can judge whether it is done. Write them as measurable things such as accuracy, response time, tests to pass or user task success rate, and set them before you start.',
  '6.2의 테스트, 8B.2와 8D.5의 숫자 재기, 9.3의 사용률 계산이 완료 기준을 적는 도구입니다.': 'The tests of 6.2, the measuring of 8B.2 and 8D.5 and the utilization math of 9.3 are tools for writing completion criteria.',
  '완료 기준으로 쓸 수 있을까요?': 'Can this serve as a completion criterion?',
  '확인할 수 있다': 'Checkable', '흐릿하다': 'Vague',
  '시험 데이터 1,000장 중 900장 이상을 맞힌다.': 'Gets 900 or more of 1,000 test images right.', '숫자로 바로 확인할 수 있습니다.': 'A number confirms it right away.',
  '코드가 깔끔하고 보기 좋다.': 'The code is clean and nice to look at.', '사람마다 판단이 달라 끝을 정할 수 없습니다.': 'People judge it differently, so it cannot define an end.',
  '리더를 무작위로 100번 꺼도 확정된 값이 한 번도 바뀌지 않는 테스트를 통과한다.': 'Passes a test where shutting down the leader at random 100 times never changes a committed value.',
  '자동으로 되풀이해 확인할 수 있는 테스트입니다.': 'It is a test that can be repeated and checked automatically.',
  '사용자가 좋아할 것이다.': 'Users will like it.', '8D.5처럼 과제 성공률이나 시간으로 바꿔 적어야 확인할 수 있습니다.': 'It must be rewritten as a task success rate or time, as in 8D.5, before it can be checked.',
  '앞에서 적은 문제의 완료 기준을 숫자나 테스트로 두 가지 적어 보세요.': 'Write two completion criteria, as numbers or tests, for the problem you wrote earlier.',
  '예: "사용자 5명 중 4명이 도움 없이 첫 판 완료", "Tab과 Enter만으로 모든 버튼에 닿는 자동 테스트 통과".': 'For example: "4 of 5 users finish the first round without help", "pass an automated test that reaches every button with Tab and Enter alone".',
  // Step 3
  '작게 나누기': 'Split it small', '입력·계산·출력을 한 번 연결': 'Connect input, compute, output once', '작은 데이터로 끝까지 실행': 'Run end to end on small data', '어디가 끊기는지 일찍 확인': 'Find breaks early',
  '처음부터 끝까지 도는 가장 작은 판을 먼저 만든다': 'First build the smallest version that runs end to end',
  '큰 계획을 한 번에 다 만들면 마지막에야 문제가 드러납니다. 그래서 가장 작지만 처음부터 끝까지 도는 판(예: 숫자 두 개만 구별하는 신경망)을 먼저 만들고, 확인한 뒤 조금씩 키웁니다. 9.3에서 병목을 하나씩 넓혔듯, 한 번에 한 가지만 바꾸고 재면 무엇이 효과가 있었는지 압니다.':
    'Build a big plan all at once and problems show up only at the end. So first build the smallest version that still runs end to end (say, a neural network that tells just two digits apart), check it, then grow it bit by bit. As 9.3 widened one bottleneck at a time, changing one thing at a time and measuring tells you what worked.',
  '9.3의 "재고, 하나 고치고, 다시 재기"와 7.10의 "작은 예시로 고리 돌리기"가 같은 방법입니다.': 'The "measure, fix one thing, measure again" of 9.3 and the "run the loop on a small example" of 7.10 are the same method.',
  '이 일은 먼저 할까요, 나중에 할까요?': 'Do this first, or later?',
  '먼저': 'First', '나중': 'Later',
  '숫자 0과 1만 구별하는 가장 작은 신경망을 학습해 정확도를 재 본다.': 'Train the smallest neural network that tells only 0 and 1 apart and measure its accuracy.',
  '처음부터 끝까지 도는 가장 작은 판입니다. 데이터, 학습, 평가가 연결되는지 먼저 확인합니다.': 'It is the smallest version that runs end to end. First check that data, training and evaluation connect.',
  '결과 화면의 색과 글꼴을 다듬는다.': 'Polish the colors and fonts of the results screen.', '핵심이 동작한 뒤에 해도 늦지 않습니다.': 'It is not too late once the core works.',
  '데이터를 학습용과 시험용으로 나누는 코드를 만든다.': 'Write the code that splits data into training and test sets.', '처음부터 나눠야 나중의 모든 숫자를 믿을 수 있습니다(7.10).': 'Split from the start, or no later number can be trusted (7.10).',
  '층을 10개로 늘려 정확도를 0.5%p 더 올려 본다.': 'Grow to 10 layers to squeeze out 0.5 more points of accuracy.', '기본이 완료 기준을 넘은 뒤의 개선입니다.': 'An improvement for after the basics clear the completion criteria.',
  '여러분의 문제에서 "처음부터 끝까지 도는 가장 작은 판"은 무엇일까요?': 'In your problem, what is "the smallest version that runs end to end"?',
  '예: 퍼즐 게임이라면 칸 2개짜리 판 하나를 키보드로 끝까지 풀 수 있는 버전입니다. 화면 꾸미기와 레벨 추가는 그다음입니다.': 'For example, for a puzzle game it is a version where one 2-cell board can be solved to the end by keyboard. Decorating the screen and adding levels come after.',
  // Step 4
  '확인과 공유': 'Check and share', '처음 정한 기준으로 재측정': 'Remeasure against the first criteria', '예상과 실제 결과 비교': 'Compare expected and actual', '남은 한계와 다음 개선 기록': 'Record limits and next steps',
  '완료 기준으로 확인하고, 배운 것을 남긴다': 'Check against the criteria and record what you learned',
  '끝났다고 느껴질 때 처음에 적은 완료 기준으로 다시 확인합니다. 그리고 무엇을 만들었고, 어떻게 확인했고, 무엇이 어려웠고, 다음엔 무엇을 하겠는지 짧게 적어 남깁니다. 다른 사람이 따라 해 볼 수 있게 실행 방법과 시험 결과를 함께 둡니다. 이 저장소의 실험 가이드(docs)가 그런 기록입니다.':
    'When it feels finished, check again against the completion criteria you wrote at the start. Then write down briefly what you built, how you checked it, what was hard and what you would do next. Include how to run it and the test results so others can follow. This repository\'s lab guides (docs) are such records.',
  '6.2의 테스트, 8D.5의 다시 재기, 8C.6의 위협 모델처럼 "확인한 근거"를 남기는 습관이 프로젝트를 마무리합니다.': 'The habit of leaving "evidence that you checked", like the tests of 6.2, the remeasuring of 8D.5 and the threat model of 8C.6, is what finishes a project.',
  '마무리 방법으로 좋을까요?': 'Is this a good way to wrap up?',
  '좋다': 'Good', '근거가 약하다': 'Weak evidence',
  '처음에 적은 완료 기준 두 가지를 다시 재서, 통과했는지 숫자와 함께 적는다.': 'Remeasure the two completion criteria written at the start and record whether they passed, with numbers.',
  '끝났다는 근거가 남습니다.': 'It leaves evidence that it is done.',
  '"잘 된 것 같다"고 적고 끝낸다.': 'Write "seems to work" and stop.', '확인한 근거가 없습니다.': 'There is no evidence of checking.',
  '실행 방법, 시험 결과, 어려웠던 점과 다음 계획을 한 페이지로 남긴다.': 'Leave one page with how to run it, test results, what was hard and next plans.',
  '다른 사람이 따라 하고, 나도 나중에 이어서 할 수 있습니다.': 'Others can follow it, and you can pick it up again later.',
  '실패한 시도는 부끄러우니 기록에서 뺀다.': 'Leave failed attempts out of the record because they are embarrassing.',
  '무엇이 안 됐는지가 가장 값진 배움입니다. 다음 사람이 같은 길을 피할 수 있습니다.': 'What did not work is the most valuable lesson. The next person can avoid the same path.',
  '프로젝트를 마치고 남길 한 페이지 기록의 목차를 적어 보세요.': 'Write the table of contents for the one-page record you will leave after the project.',
  '예: ① 문제와 완료 기준 ② 만든 것과 실행 방법 ③ 확인 결과(숫자, 테스트) ④ 어려웠던 점과 실패한 시도 ⑤ 다음에 해 볼 것.': 'For example: ① the problem and completion criteria ② what was built and how to run it ③ check results (numbers, tests) ④ what was hard and failed attempts ⑤ what to try next.',
};
