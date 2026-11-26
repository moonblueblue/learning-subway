// English for 2.3 Proof and induction. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the code: 합계 total (1.2), 팩 fact (1.5).
window.lessonText = {
  // Page
  '증명과 귀납법 · 레슨 2.3': 'Proof and induction · Lesson 2.3',
  '예시와 증명의 차이, 도미노로 보는 귀납법, 합 공식의 증명, 반복문과 재귀가 맞다는 것을 보이는 방법을 문제로 익혀 보세요.':
    'Learn through questions the difference between examples and proof, induction seen as dominoes, a proof of the sum formula, and how to show that loops and recursion are correct.',
  '무한히 많은 경우가 모두 맞다고 어떻게 확신할까요? 반례와 도미노, 귀납법 증명을 차례로 따라가 보세요.':
    'How can you be sure that infinitely many cases are all correct? Follow counterexamples, dominoes and a proof by induction in turn.',
  // Step 1
  '예와 증명': 'Examples and proof', '여러 입력에서 참': 'True for several inputs', '반례 한 개 발견': 'One counterexample found', '모든 입력에서 참이라는 주장 기각': 'The claim "true for every input" is rejected',
  '예를 아무리 많이 확인해도 증명은 아니다': 'However many examples you check, it is not a proof',
  'n² + n + 41에 n = 0, 1, 2 …를 넣으면 41, 43, 47, 53 … 모두 소수가 나옵니다. 39까지 넣어도 계속 소수입니다. 그런데 n = 40을 넣으면 1681 = 41 × 41로 소수가 아닙니다. 그래서 수학과 컴퓨터 과학에서는 "모든 경우에 참"을 말하려면 예시가 아니라 증명이 필요합니다.':
    'Put n = 0, 1, 2 … into n² + n + 41 and you get 41, 43, 47, 53 …, all prime. It stays prime all the way to 39. But put in n = 40 and you get 1681 = 41 × 41, which is not prime. That is why maths and computer science need a proof, not examples, to say "true in every case".',
  '1.6에서 몇 번 실행해 맞게 나와도 경계(i가 3일 때)에서 틀리는 버그가 있었습니다. 테스트는 버그를 찾을 수 있지만, 버그가 없다는 것을 보여 주지는 못합니다.':
    'In 1.6 there was a bug that came out right over a few runs but went wrong at the boundary (when i was 3). Tests can find bugs, but they cannot show there are none.',
  '예를 100개 확인해 모두 맞으면, 모든 경우에 참이라고 확신할 수 있다.': 'If 100 examples all check out, you can be sure it is true in every case.',
  'n² + n + 41처럼 40번째에서 처음 틀리는 경우도 있습니다.': 'Some cases, like n² + n + 41, first go wrong at the 40th.',
  '반례 하나만 찾으면 "모든 경우에 참"이 거짓임을 보일 수 있다.': 'Finding a single counterexample can show that "true in every case" is false.',
  'n = 40 하나로 "항상 소수"가 거짓임이 드러납니다.': 'n = 40 alone shows that "always prime" is false.',
  '증명은 경우가 무한히 많아도 모두 참임을 보일 수 있다.': 'A proof can show that infinitely many cases are all true.',
  '논리로 모든 경우를 한꺼번에 다루기 때문입니다.': 'Because it uses logic to handle every case at once.',
  '프로그램을 몇 번 실행해 보고 맞으면 버그가 없다는 것이 증명된다.': 'If a program comes out right over a few runs, it is proven to have no bugs.',
  '실행해 본 입력에서만 맞는다는 것을 알 수 있을 뿐입니다.': 'You only learn that it is right for the inputs you ran.',
  '"모든 홀수는 소수다"가 거짓임을 보이려면 무엇이 필요할까요?': 'What is needed to show that "every odd number is prime" is false?',
  '반례 하나면 됩니다. 9는 홀수지만 3 × 3이라 소수가 아닙니다.': 'One counterexample is enough. 9 is odd but is 3 × 3, so it is not prime.',
  // Step 2
  '도미노': 'Dominoes', '첫 도미노가 넘어짐': 'The first domino falls', '각 도미노가 다음 칸을 넘어뜨림': 'Each domino knocks over the next', '모든 칸이 차례로 넘어짐': 'Every domino falls in turn',
  '첫 칸과 다음 칸이면 모든 칸이 넘어간다': 'The first one and the next one mean every one falls',
  '도미노를 끝없이 세워 두었다고 해 봅시다. 첫 번째가 넘어지고, "어떤 도미노가 넘어지면 바로 다음 것도 넘어진다"가 참이면, 모든 도미노가 넘어집니다. 이것이 수학적 귀납법입니다. ① n = 1일 때 참임을 보이고(시작), ② n = k일 때 참이면 n = k + 1일 때도 참임을 보이면(이어 감), 모든 자연수 n에서 참입니다.':
    'Imagine dominoes standing in an endless row. If the first falls, and "whenever a domino falls, the very next one falls too" is true, then every domino falls. This is mathematical induction. ① Show it is true for n = 1 (the start), and ② show that if it is true for n = k then it is true for n = k + 1 (the step), and it is true for every natural number n.',
  '0.1에서 1씩 더하면 다음 수가 되었습니다. 귀납법은 이 "1씩 늘려 가기"를 무한히 이어 가는 논리입니다.':
    'In 0.1, adding 1 gave the next number. Induction is the logic of carrying that "add 1 each time" on forever.',
  '도미노 이야기로 다음 문장이 참인지 고르세요.': 'Using the domino story, choose whether each sentence is true.',
  '첫 도미노만 넘어지면 나머지도 저절로 넘어진다.': 'As long as the first domino falls, the rest fall by themselves.',
  '도미노 사이가 멀면 다음 것이 넘어지지 않습니다. 이어 감도 보여야 합니다.': 'If the dominoes are far apart, the next one does not fall. The step must be shown too.',
  'k번째가 넘어지면 k + 1번째도 넘어진다. 이것만으로 모두 넘어진다.': 'If the kth falls, the (k + 1)th falls. That alone makes them all fall.',
  '첫 도미노를 넘어뜨리지 않으면 아무것도 시작되지 않습니다.': 'If the first domino is never knocked over, nothing starts.',
  '첫 도미노가 넘어지고, k번째가 넘어지면 k + 1번째도 넘어진다. 그러면 모두 넘어진다.': 'The first domino falls, and if the kth falls the (k + 1)th falls. Then they all fall.',
  '시작과 이어 감이 모두 있으므로 귀납법이 성립합니다.': 'Both the start and the step are there, so induction holds.',
  '귀납법은 1, 2, 3 …처럼 차례로 셀 수 있는 대상에 쓴다.': 'Induction is used on things that can be counted in order, like 1, 2, 3 ….',
  '다음 칸이 무엇인지 정해져 있어야 "k에서 k + 1로"를 말할 수 있습니다.': 'You can only say "from k to k + 1" if what comes next is settled.',
  '재귀 함수(1.5)의 "기저 조건"은 귀납법의 어느 부분과 닮았을까요?': 'Which part of induction does the "base case" of a recursive function (1.5) resemble?',
  '시작 단계(n = 1일 때)와 닮았습니다. 재귀의 나머지 부분인 "n − 1의 답으로 n의 답을 만든다"는 이어 감 단계와 닮았습니다.':
    'It resembles the start (n = 1). The rest of the recursion, "build the answer for n from the answer for n − 1", resembles the step.',
  // Step 3
  '증명 따라가기': 'Following a proof', '1부터 k까지 합을 알고 있음': 'The sum from 1 to k is known', '다음 항 k + 1을 더함': 'Add the next term, k + 1', '1부터 n까지의 합은 n(n + 1)/2다': 'The sum from 1 to n is n(n + 1)/2',
  '1 + 2 + … + n = n(n + 1)/2를 귀납법으로 증명해 봅시다. ① n = 1이면 왼쪽은 1, 오른쪽은 1 × 2 / 2 = 1로 같습니다. ② n = k일 때 1 + … + k = k(k + 1)/2라고 가정합니다. 양쪽에 k + 1을 더하면 오른쪽은 k(k + 1)/2 + (k + 1) = (k + 1)(k + 2)/2가 되어, n = k + 1일 때의 식과 같아집니다. 따라서 모든 n에서 참입니다.':
    'Let us prove 1 + 2 + … + n = n(n + 1)/2 by induction. ① For n = 1 the left side is 1 and the right is 1 × 2 / 2 = 1, the same. ② Assume 1 + … + k = k(k + 1)/2 for n = k. Adding k + 1 to both sides makes the right side k(k + 1)/2 + (k + 1) = (k + 1)(k + 2)/2, the formula for n = k + 1. So it is true for every n.',
  '1.2의 while 반복은 합계에 1, 2, 3을 차례로 더했습니다. 이 공식이 있으면 반복 없이 3 × 4 / 2 = 6을 바로 구할 수 있습니다.':
    'The while loop in 1.2 added 1, 2 and 3 to total in turn. With this formula you get 3 × 4 / 2 = 6 straight away, with no loop.',
  '증명의 각 문장이 맞는지 고르세요.': 'Choose whether each sentence of the proof is right.',
  'n = 1일 때: 1 = 1 × 2 / 2': 'For n = 1: 1 = 1 × 2 / 2', '시작 단계입니다. 양쪽 모두 1입니다.': 'This is the start. Both sides are 1.',
  'n = k일 때 식이 성립한다고 가정해도 된다.': 'We may assume the formula holds for n = k.',
  '이어 감 단계에서는 k일 때를 가정하고 k + 1일 때를 보입니다. 시작 단계가 이 가정의 출발점이 됩니다.': 'In the step, you assume the case k and show the case k + 1. The start is where this assumption begins.',
  'k(k + 1)/2 + (k + 1)은 (k + 1)(k + 2)/2와 같다.': 'k(k + 1)/2 + (k + 1) equals (k + 1)(k + 2)/2.',
  '(k + 1)로 묶으면 (k + 1)(k/2 + 1) = (k + 1)(k + 2)/2입니다.': 'Taking out (k + 1) gives (k + 1)(k/2 + 1) = (k + 1)(k + 2)/2.',
  'n = 1, 2, 3에서 맞으니 증명이 끝났다.': 'It is right for n = 1, 2, 3, so the proof is done.',
  '그것은 예시입니다. 이어 감 단계가 있어야 모든 n이 됩니다.': 'Those are examples. The step is needed to cover every n.',
  '1부터 100까지의 합은 얼마일까요?': 'What is the sum from 1 to 100?',
  '100 × 101 / 2 = 5050입니다. 반복으로 100번 더하지 않아도 공식 한 번이면 됩니다.': '100 × 101 / 2 = 5050. One use of the formula does it, without adding 100 times in a loop.',
  // Step 4
  '코드의 정확성': 'Correctness of code', '반복 전 합계 0': 'total is 0 before the loop', '매 바퀴 합계 = 1 + … + (i − 1) 유지': 'Each round keeps total = 1 + … + (i − 1)', '반복 종료 시 전체 합': 'The whole sum when the loop ends',
  '귀납법으로 프로그램이 맞다는 것을 보인다': 'Induction shows that a program is correct',
  '반복문이 맞다는 것은 "반복 불변식"으로 보입니다. 1.2의 합계 반복에서 "매 바퀴를 시작할 때 합계 = 1 + … + (i − 1)"이 처음에도 참이고, 한 바퀴가 지나도 계속 참이면, 반복이 끝났을 때 합계는 1 + … + n입니다. 재귀 함수도 같은 방식으로 보입니다.':
    'A loop is shown to be correct with a "loop invariant". In the total loop from 1.2, if "at the start of each round, total = 1 + … + (i − 1)" is true at first and stays true after each round, then when the loop ends total is 1 + … + n. Recursive functions are shown the same way.',
  '1.5의 팩(n)은 팩(1)이 맞고, 팩(n − 1)이 맞으면 n × 팩(n − 1)도 맞습니다. 바로 귀납법의 두 단계입니다.':
    'For fact(n) in 1.5, fact(1) is right, and if fact(n − 1) is right then n × fact(n − 1) is right too. Those are exactly the two parts of induction.',
  '반복 전에 합계 = 0, i = 1이면 "합계 = 1 + … + (i − 1)"은 참이다.': 'Before the loop, with total = 0 and i = 1, "total = 1 + … + (i − 1)" is true.',
  'i − 1 = 0이므로 더할 것이 없는 합 0과 같습니다.': 'i − 1 = 0, so it equals the empty sum, 0.',
  '한 바퀴에서 합계에 i를 더하고 i를 1 늘리면 불변식은 계속 참이다.': 'If one round adds i to total and increases i by 1, the invariant stays true.',
  '합계가 1 + … + i가 되고, 새 i로 보면 1 + … + (새 i − 1)입니다.': 'total becomes 1 + … + i, which in terms of the new i is 1 + … + (new i − 1).',
  '불변식이 있으면 반복이 반드시 끝난다.': 'If there is an invariant, the loop is sure to end.',
  '끝나는지는 따로 보여야 합니다. 1.2의 무한 반복처럼 i가 늘지 않으면 끝나지 않습니다.': 'Ending has to be shown separately. Like the infinite loop in 1.2, it never ends if i does not grow.',
  '팩(1)이 맞고 팩(n − 1)이 맞으면 팩(n)도 맞으므로, 모든 n에서 팩이 맞다.': 'fact(1) is right, and if fact(n − 1) is right then fact(n) is right, so fact is right for every n.',
  '시작과 이어 감, 귀납법 그대로입니다.': 'The start and the step: induction exactly.',
  '1.6의 하나 차이 버그(while i < 3)를 불변식으로 보면 어디서 어긋날까요?': 'Looking at the off-by-one bug in 1.6 (while i < 3) through the invariant, where does it go wrong?',
  '반복이 끝났을 때 i = 3이라 불변식은 합계 = 1 + 2만 말해 줍니다. 원하는 결과(1 + 2 + 3)가 되려면 끝날 때 i가 4여야 하므로, 끝나는 조건이 잘못되었다는 것을 알 수 있습니다.':
    'When the loop ends, i = 3, so the invariant only tells you total = 1 + 2. For the wanted result (1 + 2 + 3), i must be 4 at the end, so you can tell the stopping condition is wrong.',

  // Worked examples aligned with the chapter diagrams.
  "계산 예시": "Worked example",
  "n = 40에서 41 × 41": "At n = 40: 41 × 41",
  "항상 소수라는 주장 기각": "The claim “always prime” fails",
  "여러 값에서 맞아도 모든 값에서 맞는다는 뜻은 아닙니다. n² + n + 41은 0, 1, 2에서 소수를 만들지만 n = 40에서는 1681 = 41 × 41입니다. 이 한 반례로 항상 소수라는 주장은 거짓입니다.": "Success on several inputs does not prove a claim for all inputs. The formula n² + n + 41 gives primes at 0, 1 and 2, but at n = 40 it gives 1681 = 41 × 41. This one counterexample disproves the claim that it always gives primes.",
  "입력 n": "Input n",
  "판정": "Result",
  "소수": "Prime",
  "합성수 · 반례": "Composite · counterexample",
  "양쪽에 k + 1을 더함": "Add k + 1 to both sides",
  "단계": "Step",
  "합 S": "Sum S",
  "정리": "Factor",
  "3을 더하고 i를 4로": "Add 3 and set i to 4",
  "상태": "State",
  "합계 = 1 + … + (i − 1)": "Sum = 1 + … + (i − 1)",
  "반복 전": "Before the iteration",
  "3을 더하고 i를 1 증가": "Add 3 and increase i by 1",
  "종료 · i > n = 3": "Stop · i > n = 3",
};
