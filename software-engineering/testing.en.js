// English for 6.2 Testing. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the code: 현재_시각 current_time, 진짜_카드사.결제 real_card_company.charge; "좋은 아침" "Good morning", "안녕하세요" "Hello".
// Entries with line breaks are also registered with the breaks written as \n, the form the page source holds.
window.lessonText = (() => {
const text = {
  // Page
  '테스트 · 레슨 6.2': 'Testing · Lesson 6.2',
  'assert로 결과 확인하기, 경계값과 이상한 입력 고르기, 고칠 때마다 다시 돌려 회귀 잡기, 시험하기 쉬운 코드로 나누기를 문제로 익혀 보세요.':
    'Practise with questions: checking results with assert, choosing boundary values and odd inputs, catching regressions by rerunning after every change, and splitting code so it is easy to test.',
  '코드가 맞게 동작한다는 것을 어떻게 확인할까요? 테스트가 무엇을 확인하고, 어떤 입력을 골라야 하고, 왜 시험하기 쉬운 코드가 따로 있는지 문제로 익혀 보세요.':
    'How do you make sure code works correctly? Practise with questions on what a test checks, which inputs to choose, and why some code is easier to test than other code.',
  '통과': 'Pass', '실패': 'Fail',
  // Step 1
  '확인하는 코드': 'Code that checks',
  '테스트는 "이 입력이면 이 결과"를 적어 둔 코드다': 'A test is code that writes down "this input gives this result"',
  '테스트는 함수에 정해진 입력을 넣고, 나와야 할 결과와 같은지 확인하는 작은 코드입니다. assert 결과 == 기대값이 거짓이면 테스트가 실패하며 어디가 틀렸는지 알려 줍니다. 사람이 매번 손으로 확인하는 대신, 컴퓨터가 몇 초 만에 수백 가지를 다시 확인합니다.':
    'A test is a small piece of code that gives a function a set input and checks the result is what it should be. If assert result == expected is false, the test fails and tells you what went wrong. Instead of a person checking by hand every time, the computer rechecks hundreds of cases in seconds.',
  '1.6의 디버깅에서는 버그가 생긴 뒤에 찾아 나섰습니다. 테스트는 버그가 들어오는 순간 알아채게 해 줍니다.': 'In the debugging of 1.6 you went looking for a bug after it appeared. Tests let you notice a bug the moment it comes in.',
  '아래 함수에 대해 이 테스트는 통과할까요?': 'For the functions below, does this test pass?',
  '아래 함수에 대해 이 테스트는 통과할까요?\n\ndef double(n):\n    return n * 2\n\ndef is_even(n):\n    return n % 2 == 1': 'For the functions below, does this test pass?\n\ndef double(n):\n    return n * 2\n\ndef is_even(n):\n    return n % 2 == 1',
  '3 × 2 = 6이므로 참입니다.': '3 × 2 = 6, so it is true.', '음수도 2를 곱하면 됩니다.': 'A negative number is just multiplied by 2 too.',
  '4 % 2는 0이라 0 == 1은 거짓, 함수가 False를 돌려줍니다. 테스트가 is_even의 버그(== 1이 아니라 == 0이어야 함)를 찾았습니다.': '4 % 2 is 0, so 0 == 1 is false and the function returns False. The test found is_even\'s bug (it should be == 0, not == 1).',
  '7 % 2 == 1이 참이라 함수가 True를 돌려줍니다. 같은 버그가 반대쪽에서도 드러납니다.': '7 % 2 == 1 is true, so the function returns True. The same bug shows from the other side too.',
  'is_even의 버그를 고친 뒤 위 네 테스트를 다시 돌리면 결과가 어떻게 될까요?': 'After fixing is_even\'s bug, what happens when you rerun the four tests above?',
  'return n % 2 == 0으로 고치면 네 테스트가 모두 통과합니다. 테스트를 남겨 두면 나중에 누가 다시 망가뜨려도 바로 알 수 있습니다.': 'Change it to return n % 2 == 0 and all four tests pass. Keep the tests and you will know at once if someone breaks it again later.',
  // Diagram (step 1)
  // Step 2
  '경계값': 'Boundary values',
  '경계와 이상한 입력을 골라 시험한다': 'Choose boundaries and odd inputs to test',
  '모든 입력을 시험할 수는 없으니 대표 값을 골라야 합니다. 버그는 주로 경계에 숨어 있습니다. 90점 이상이 A라면 90과 89가 경계입니다. 빈 목록, 0, 음수처럼 이상한 입력도 따로 시험해야 합니다. 이미 있는 테스트와 같은 경우를 하나 더 넣어도 새로 알게 되는 것은 없습니다.':
    'You cannot test every input, so you pick representative values. Bugs mostly hide at boundaries. If 90 and above is an A, 90 and 89 are the boundary. Odd inputs such as an empty list, 0 and negative numbers need their own tests too. Adding one more test of a case already covered teaches you nothing new.',
  '4.4의 정렬에서 이미 정렬된 입력과 거꾸로 된 입력을 따로 본 것도 같은 생각입니다. 1.2에서 >=를 >로 잘못 쓰는 실수가 바로 경계 버그입니다.': 'Looking separately at already-sorted and reversed input in the sorting of 4.4 is the same idea. Writing > instead of >= in 1.2 is exactly a boundary bug.',
  'grade(score)는 90점 이상이면 "A", 아니면 "B"를 돌려줍니다(점수는 0–100). 이미 95점과 50점 테스트가 있습니다. 이 테스트를 더할 가치가 있을까요?': 'grade(score) returns "A" for 90 or above and "B" otherwise (scores are 0–100). There are already tests for 95 and 50. Is this test worth adding?',
  '더할 가치가 있다': 'Worth adding', '이미 있는 것과 같다': 'Same as an existing one',
  'assert grade(-1) raises 오류': 'assert grade(-1) raises Error',
  '경계의 바로 위입니다. >=를 >로 잘못 쓰면 이 테스트만 실패합니다.': 'It is just above the boundary. Write > instead of >= by mistake and only this test fails.',
  '경계의 바로 아래입니다. 경계를 양쪽에서 붙잡습니다.': 'It is just below the boundary. It pins the boundary from both sides.',
  '95점 테스트와 같은 경우(경계에서 먼 A)라 새로 확인하는 것이 없습니다.': 'It is the same case as the 95 test (an A far from the boundary), so it checks nothing new.',
  '범위 밖 입력에서 조용히 "B"를 주는 것보다 오류를 내는 편이 안전합니다. 이상한 입력도 시험해야 합니다.': 'Raising an error is safer than quietly giving "B" for out-of-range input. Odd inputs need testing too.',
  '50점 테스트와 같은 경우입니다.': 'It is the same case as the 50 test.',
  '목록의 최댓값을 돌려주는 max_of(xs)를 시험한다면, 어떤 입력들을 고르겠어요?': 'If you were testing max_of(xs), which returns the largest value in a list, which inputs would you choose?',
  '보통 목록 [3, 7, 2], 맨 앞이나 맨 끝이 최댓값인 목록, 원소가 하나인 목록, 같은 값이 여럿인 목록, 음수만 있는 목록, 그리고 빈 목록(오류를 내야 함)입니다.': 'An ordinary list [3, 7, 2], lists with the largest value first or last, a one-element list, a list with repeated values, a list of only negatives, and an empty list (which should raise an error).',
  // Diagram (step 2)
  'A 기준 90점': 'A starts at 90',
  // Step 3
  '테스트의 쓰임': 'What tests are for',
  '고칠 때마다 다시 돌려 망가진 곳을 잡는다': 'Rerun after every change to catch what broke',
  '테스트의 진짜 값어치는 코드를 바꿀 때 나옵니다. 기능을 더하거나 구조를 고친 뒤 모든 테스트를 다시 돌리면, 예전에 되던 것이 망가졌는지(회귀) 바로 압니다. 버그를 고칠 때는 그 버그를 재현하는 테스트를 먼저 써서 실패를 확인하고, 고친 뒤 통과하는지 봅니다.':
    'The real worth of tests shows when code changes. Rerun every test after adding a feature or restructuring, and you know at once whether something that used to work has broken (a regression). When fixing a bug, first write a test that reproduces it and see it fail, then check it passes after the fix.',
  '6.1에서 인터페이스를 지키면 구현을 마음대로 바꿀 수 있다고 했습니다. 인터페이스를 확인하는 테스트가 있으면 정말 지켰는지 자신 있게 말할 수 있습니다.': '6.1 said that keeping the interface lets you change the implementation freely. With tests that check the interface, you can say with confidence that you really kept it.',
  '테스트가 모두 통과하면 프로그램에 버그가 하나도 없다.': 'If every test passes, the program has no bugs at all.',
  '테스트는 시험한 경우에 버그가 없다는 것만 보여 줍니다. 시험하지 않은 경우의 버그는 남아 있을 수 있습니다.': 'Tests show only that the cases tested have no bugs. Bugs in untested cases may remain.',
  '버그를 고치기 전에 그 버그 때문에 실패하는 테스트를 먼저 쓰면 좋다.': 'Before fixing a bug, it is good to first write a test that fails because of it.',
  '실패를 눈으로 확인해야 테스트가 그 버그를 정말 잡는지 알 수 있고, 다시 생기는 것도 막습니다.': 'Seeing the failure tells you the test really catches that bug, and it also keeps the bug from coming back.',
  '코드를 고칠 때마다 예전 테스트까지 모두 다시 돌리는 것이 좋다.': 'Every time code changes, it is good to rerun all the old tests as well.',
  '고친 곳과 멀리 떨어진 기능이 망가지는 회귀를 잡습니다. 그래서 테스트는 자동으로 빨리 돌아야 합니다.': 'It catches regressions where a feature far from the change breaks. That is why tests should run automatically and quickly.',
  '가끔 이유 없이 실패하는 테스트는 무시해도 괜찮다.': 'A test that sometimes fails for no reason can safely be ignored.',
  '들쭉날쭉한 테스트를 무시하는 습관이 생기면 진짜 실패도 놓칩니다. 원인(시간, 순서, 네트워크)을 찾아 고쳐야 합니다.': 'Get into the habit of ignoring flaky tests and you will miss real failures too. Find the cause (time, order, network) and fix it.',
  '팀원이 "급하니 테스트는 나중에 쓰자"고 합니다. 어떤 위험이 있을까요?': 'A teammate says "We\'re in a hurry, let\'s write tests later." What is the risk?',
  '나중은 잘 오지 않고, 테스트 없이 쌓인 코드는 고칠 때마다 무엇이 망가질지 몰라 점점 손대기 무서워집니다. 최소한 핵심 경로와 방금 고친 버그의 테스트는 바로 남기는 편이 좋습니다.': '"Later" rarely comes, and code piled up without tests becomes scarier to touch, since every change might break something unknown. At least keep tests for the core paths and the bug you just fixed right away.',
  // Diagram (step 3)
  // Step 4
  '시험하기 쉬운 코드': 'Code easy to test',
  '입력과 출력이 분명한 코드가 시험하기 쉽다': 'Code with clear input and output is easy to test',
  '같은 입력에 언제나 같은 결과를 돌려주고 바깥을 건드리지 않는 함수는 시험하기 쉽습니다. 현재 시각, 실제 결제, 네트워크, 화면 출력처럼 바깥에 기대는 부분은 매번 결과가 달라지거나 시험할 때마다 진짜 일이 벌어집니다. 그런 것은 인자로 받거나 6.1처럼 인터페이스 뒤로 감춰서, 테스트에서는 가짜로 바꿔 끼웁니다.':
    'A function that always returns the same result for the same input and does not touch the outside world is easy to test. Parts that depend on the outside, such as the current time, real payments, the network or screen output, give different results each time or make real things happen on every test. Take those in as arguments or hide them behind an interface as in 6.1, and swap in fakes for tests.',
  '6.1의 "느슨하게 잇기"가 여기서 값을 냅니다. 결제 모듈이 pay(amount) 하나로만 이어져 있으면, 테스트에서는 돈이 나가지 않는 가짜 pay로 바꿔 끼울 수 있습니다.': 'The "loose coupling" of 6.1 pays off here. If the payment module is joined only by pay(amount), a test can swap in a fake pay that spends no money.',
  '이 함수는 시험하기 쉬울까요, 어려울까요?': 'Is this function easy or hard to test?', '쉽다': 'Easy', '어렵다': 'Hard',
  'def greeting():\n    hour = 현재_시각().hour\n    return "좋은 아침" if hour < 12 else "안녕하세요"': 'def greeting():\n    hour = current_time().hour\n    return "Good morning" if hour < 12 else "Hello"',
  'def checkout(cart):\n    진짜_카드사.결제(order_total(cart))': 'def checkout(cart):\n    real_card_company.charge(order_total(cart))',
  '같은 입력에 언제나 같은 결과, 바깥을 건드리지 않습니다. 경계값 몇 개로 끝납니다.': 'Same input, always the same result, and nothing outside is touched. A few boundary values and you are done.',
  '결과가 테스트를 돌리는 시각에 달려 있습니다. greeting(hour)처럼 시각을 인자로 받으면 쉬워집니다.': 'The result depends on when the test runs. Taking the time as an argument, like greeting(hour), makes it easy.',
  '테스트할 때마다 실제로 돈이 나갑니다. 결제 기능을 인자로 받으면 테스트에서는 가짜를 넣을 수 있습니다.': 'Real money goes out on every test. Take the payment function as an argument and a test can pass in a fake.',
  '결과를 돌려주지 않고 화면에만 찍어서 assert로 비교하기 어렵습니다. 계산(order_total)과 출력을 나누면 계산은 쉽게 시험할 수 있습니다.': 'It prints to the screen instead of returning a result, so assert cannot easily compare it. Separate the calculation (order_total) from the output and the calculation is easy to test.',
  'greeting()을 시험하기 쉽게 바꾸려면 어떻게 고치면 될까요?': 'How would you change greeting() to make it easy to test?',
  'def greeting(hour)로 시각을 인자로 받게 하고, 부르는 쪽에서 greeting(현재_시각().hour)로 넘깁니다. 테스트는 greeting(9)와 greeting(12)처럼 경계를 바로 시험할 수 있습니다.': 'Make it take the time as an argument, def greeting(hour), and have the caller pass greeting(current_time().hour). Tests can then hit the boundary directly, as in greeting(9) and greeting(12).',
  // Diagram (step 4)
  // Reading examples
  'is_even(4) == True라고 적어 둠': 'Write down is_even(4) == True', '실행하니 False가 나옴': 'Running it gives False', '기대와 달라 실패 · % 2 == 1이 버그': 'Fails: not as expected · % 2 == 1 is the bug', '89점은 "B", 90점은 "A"인지 확인': 'Check 89 gives "B" and 90 gives "A"', '실수로 >를 쓰면 90점에서 실패': 'With > by mistake, 90 fails', 'is_even의 버그를 고침': 'Fix the is_even bug', 'double 테스트까지 네 개를 다시 실행': 'Rerun all four, double tests too', '다른 기능이 망가졌다면(회귀) 바로 발견': 'Any other feature broken (regression) shows up at once', 'greeting()이 안에서 현재 시각을 읽음': 'greeting() reads the current time inside', '시각을 인자 hour로 받게 고침': 'Take the time as hour', 'greeting(9)는 늘 "좋은 아침"': 'greeting(9) is always "Good morning"',
};
for (const [ko, en] of Object.entries(text)) if (ko.includes('\n')) text[ko.replace(/\n/g, '\\n')] = en.replace(/\n/g, '\\n');
return text;
})();

Object.assign(window.lessonText, {
  "입력": "Input",
  "기대": "Expected",
  "실제": "Actual",
  "판정": "Result",
  "실패": "Fail",
  "통과": "Pass",
  "점수": "Score",
  "기대 등급": "Expected grade",
  "조건 > 90": "Condition > 90",
  "같은 테스트": "Same tests",
  "수정 전": "Before fix",
  "== 0으로 수정 후": "After fix to == 0",
  "실행 시각": "Run time",
  "고정한 호출": "Fixed call",
  "결과": "Result",
  "좋은 아침": "Good morning",
  "이 단계의 비교 예시": "Worked comparison for this step",
});
