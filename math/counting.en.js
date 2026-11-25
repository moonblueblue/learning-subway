// English for 2.4 Counting and probability. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '경우의 수와 확률 · 레슨 2.4': 'Counting and probability · Lesson 2.4',
  '곱의 법칙, 순열과 조합, 확률과 독립, 비밀번호와 생일 문제까지 경우의 수와 확률을 문제로 익혀 보세요.':
    'Learn counting and probability through questions: the product rule, permutations and combinations, probability and independence, up to passwords and the birthday problem.',
  '가능한 경우는 몇 가지이고, 그중 무엇이 얼마나 자주 일어날까요? 세는 법과 확률을 문제로 익혀 보세요.':
    'How many cases are possible, and how often does each happen? Learn counting and probability through questions.',
  '다음 경우의 수가 맞는지 고르세요.': 'Choose whether each count is right.',
  // Step 1
  '곱의 법칙': 'The product rule', '상의 3가지 · 하의 2가지': '3 tops · 2 bottoms', '각 상의에 하의 2가지 대응': '2 bottoms for each top', '조합 6가지': '6 outfits',
  '선택이 이어지면 가짓수를 곱한다': 'When choices follow one another, multiply the counts',
  '티셔츠 3벌과 바지 2벌로 옷을 입는 방법은 티셔츠마다 바지 2가지씩이라 3 × 2 = 6가지입니다. 이렇게 선택이 차례로 이어지면 각 단계의 가짓수를 곱합니다. 이것을 곱의 법칙이라고 합니다.':
    'With 3 T-shirts and 2 pairs of trousers, each T-shirt goes with 2 pairs, so there are 3 × 2 = 6 ways to dress. When choices follow one another like this, multiply the count at each stage. This is called the product rule.',
  '0.1에서 스위치 하나가 늘 때마다 가짓수가 두 배가 되어, 8개면 2 × 2 × … × 2 = 256가지였습니다. 바로 곱의 법칙입니다.':
    'In 0.1, each extra switch doubled the count, so 8 switches gave 2 × 2 × … × 2 = 256. That is the product rule.',
  '숫자 4자리 비밀번호(0000–9999)는 10,000가지다.': 'There are 10,000 four-digit PINs (0000–9999).',
  '자리마다 10가지씩, 10 × 10 × 10 × 10 = 10,000입니다.': '10 for each digit: 10 × 10 × 10 × 10 = 10,000.',
  '동전을 3번 던지면 나오는 결과는 6가지다.': 'Tossing a coin 3 times gives 6 possible outcomes.',
  '한 번에 2가지씩이라 2 × 2 × 2 = 8가지입니다.': '2 for each toss, so 2 × 2 × 2 = 8.',
  '비트 8개로 나타낼 수 있는 값은 256가지다.': '8 bits can show 256 values.', '2⁸ = 256. 0.1에서 확인한 수입니다.': '2⁸ = 256, the number checked in 0.1.',
  '메뉴가 전식 2개, 본식 3개, 후식 2개면 코스는 7가지다.': 'With 2 starters, 3 mains and 2 desserts, there are 7 set meals.',
  '더하지 않고 곱합니다. 2 × 3 × 2 = 12가지입니다.': 'Multiply, do not add: 2 × 3 × 2 = 12.',
  '알파벳 대문자 26개와 숫자 10개로 만든 3자리 코드는 몇 가지일까요?': 'How many 3-character codes can be made from 26 capital letters and 10 digits?',
  '자리마다 36가지라 36 × 36 × 36 = 46,656가지입니다.': '36 for each place, so 36 × 36 × 36 = 46,656.',
  // Step 2
  '순서가 있을 때와 없을 때': 'With and without order', '세 명 중 두 명 선택': 'Choose two of three people', 'A,B와 B,A는 같은 조': 'A,B and B,A are the same pair', '조는 3개 · 줄 세우면 6개': '3 pairs · 6 when lined up',
  '줄 세우기와 뽑기는 가짓수가 다르다': 'Lining up and picking give different counts',
  '3명을 한 줄로 세우는 방법은 첫 자리 3명, 둘째 자리 2명, 셋째 자리 1명이라 3 × 2 × 1 = 6가지입니다(순열). 5명 중 회장과 부회장을 뽑는 방법은 5 × 4 = 20가지지만, 순서 없이 대표 2명만 뽑는다면 (가, 나)와 (나, 가)가 같으니 20 ÷ 2 = 10가지입니다(조합).':
    'Lining up 3 people has 3 choices for the first place, 2 for the second and 1 for the third, so 3 × 2 × 1 = 6 ways (permutations). Picking a president and vice-president from 5 people has 5 × 4 = 20 ways, but picking just 2 representatives with no order makes (A, B) and (B, A) the same, so 20 ÷ 2 = 10 ways (combinations).',
  '1.5의 팩토리얼 4! = 4 × 3 × 2 × 1이 바로 4명을 줄 세우는 방법의 수입니다.': 'The factorial 4! = 4 × 3 × 2 × 1 from 1.5 is exactly the number of ways to line up 4 people.',
  '3명을 한 줄로 세우는 방법은 6가지다.': 'There are 6 ways to line up 3 people.', '3! = 3 × 2 × 1 = 6입니다.': '3! = 3 × 2 × 1 = 6.',
  '5명 중 회장 1명, 부회장 1명을 뽑는 방법은 20가지다.': 'There are 20 ways to pick a president and a vice-president from 5 people.',
  '역할이 달라 순서가 중요합니다. 5 × 4 = 20입니다.': 'The roles differ, so order matters: 5 × 4 = 20.',
  '5명 중 순서 없이 대표 2명을 뽑는 방법은 20가지다.': 'There are 20 ways to pick 2 representatives from 5 people, with no order.',
  '순서를 따지면 20, 따지지 않으면 20 ÷ 2 = 10가지입니다.': 'With order it is 20; without, 20 ÷ 2 = 10.',
  '카드 5장을 섞는 방법은 5! = 120가지다.': 'There are 5! = 120 ways to shuffle 5 cards.', '5장을 한 줄로 세우는 순열입니다.': 'It is the permutations of lining up 5 cards.',
  '45개 번호 중 6개를 순서 없이 고르는 복권은 몇 가지일까요?': 'How many tickets are there in a lottery that picks 6 of 45 numbers, with no order?',
  '(45 × 44 × 43 × 42 × 41 × 40) ÷ (6 × 5 × 4 × 3 × 2 × 1) = 8,145,060가지입니다. 한 장으로 1등이 될 확률은 약 814만분의 1입니다.':
    '(45 × 44 × 43 × 42 × 41 × 40) ÷ (6 × 5 × 4 × 3 × 2 × 1) = 8,145,060. The chance of one ticket winning first prize is about 1 in 8.14 million.',
  // Step 3
  '확률': 'Probability', '공정한 주사위': 'A fair die', '짝수 눈은 2, 4, 6': 'The even faces are 2, 4, 6', '확률 3/6 = 1/2': 'Probability 3/6 = 1/2',
  '확률은 원하는 경우 ÷ 모든 경우다': 'Probability is wanted cases ÷ all cases',
  '모든 경우가 똑같이 일어날 만하다면, 확률은 원하는 경우의 수를 모든 경우의 수로 나눈 값입니다. 주사위에서 6이 나올 확률은 1/6입니다. 동전처럼 앞의 결과가 다음에 영향을 주지 않는 일을 독립적이라고 하며, 앞면이 몇 번 연속 나왔어도 다음 앞면 확률은 그대로 1/2입니다.':
    'If every case is equally likely, the probability is the number of wanted cases divided by the number of all cases. The probability of rolling a 6 is 1/6. Events where earlier results do not affect the next, like coin tosses, are called independent: however many heads came in a row, the next head is still 1/2.',
  '0.6의 상자 16개 중 찾는 수가 어디 있을지 모를 때, 첫 상자에 있을 확률은 1/16이었습니다.': 'In 0.6, when you did not know which of 16 boxes held the number, the chance it was in the first box was 1/16.',
  '주사위 하나를 던져 짝수가 나올 확률은 1/2이다.': 'The probability of rolling an even number with one die is 1/2.',
  '2, 4, 6 세 경우 ÷ 여섯 경우 = 1/2입니다.': 'Three cases, 2, 4 and 6, ÷ six cases = 1/2.',
  '동전 앞면이 3번 연속 나왔다면 다음에 앞면이 나올 확률은 1/2보다 작다.': 'After 3 heads in a row, the probability of heads next is less than 1/2.',
  '동전은 앞 결과를 기억하지 않습니다. 여전히 1/2입니다.': 'A coin does not remember earlier results. It is still 1/2.',
  '주사위 두 개의 합이 7일 확률은 6/36 = 1/6이다.': 'The probability that two dice add up to 7 is 6/36 = 1/6.',
  '(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) 여섯 경우 ÷ 36입니다.': 'Six cases, (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), ÷ 36.',
  '확률이 1/2이면 두 번 하면 꼭 한 번은 일어난다.': 'If the probability is 1/2, doing it twice is sure to make it happen once.',
  '두 번 모두 안 일어날 확률도 1/2 × 1/2 = 1/4입니다.': 'The chance it happens neither time is still 1/2 × 1/2 = 1/4.',
  '동전을 두 번 던져 한 번이라도 앞면이 나올 확률은?': 'Tossing a coin twice, what is the probability of at least one head?',
  '두 번 모두 뒷면일 확률 1/4을 1에서 빼면 3/4입니다. "적어도 한 번"은 반대 경우를 빼는 것이 쉽습니다.': 'Take the chance of two tails, 1/4, away from 1 to get 3/4. For "at least once", subtracting the opposite case is easiest.',
  // Step 4
  '컴퓨터 속 확률': 'Probability in computers', '비트 한 자리 추가': 'Add one bit', '각 기존 값 뒤에 0 또는 1': 'A 0 or 1 after each existing value', '가능한 값 두 배': 'Twice as many values',
  '보안과 해시는 경우의 수와 확률 위에 서 있다': 'Security and hashing stand on counting and probability',
  '비밀번호가 안전한 이유는 경우의 수가 너무 커서 하나씩 다 시도할 수 없기 때문입니다. 반대로 경우의 수가 넉넉해 보여도 겹칠 확률은 생각보다 빨리 커집니다. 23명만 모여도 생일이 같은 두 사람이 있을 확률이 50%를 넘습니다(생일 문제). 이 생각이 4.5 해시 테이블과 6.11 암호화에서 다시 나옵니다.':
    'A password is safe because there are too many cases to try one by one. On the other hand, even when the number of cases looks ample, the chance of a clash grows faster than you think. With just 23 people, the chance that two share a birthday is over 50% (the birthday problem). This idea comes back in 4.5 Hash tables and 6.11 Encryption.',
  '0.6에서 1부터 100 사이의 수를 반씩 줄여 맞히면 7번이면 충분했습니다. 2⁷ = 128 ≥ 100이기 때문입니다.': 'In 0.6, guessing a number from 1 to 100 by halving took 7 tries at most, because 2⁷ = 128 ≥ 100.',
  '소문자 26개로 만든 12자리 비밀번호는 26¹² ≈ 95조 가지다.': 'There are 26¹² ≈ 95 trillion 12-character passwords made of 26 lower-case letters.',
  '26을 12번 곱하면 약 9.5 × 10¹⁶입니다. 조 단위를 훌쩍 넘습니다.': '26 multiplied 12 times is about 9.5 × 10¹⁶, far beyond trillions.',
  '23명이 모이면 생일이 같은 두 사람이 있을 확률이 50%를 넘는다.': 'With 23 people, the probability that two share a birthday is over 50%.',
  '두 사람 짝이 253쌍이나 되어, 모두 다를 확률이 50% 아래로 떨어집니다.': 'There are as many as 253 pairs of people, so the chance that all differ falls below 50%.',
  '1–100 중 하나를 "크다/작다" 힌트로 맞히려면 최대 7번이면 된다.': 'Guessing one of 1–100 with "higher/lower" hints takes at most 7 tries.',
  '반씩 줄이면 100 → 50 → 25 → 13 → 7 → 4 → 2 → 1, 7번입니다.': 'Halving gives 100 → 50 → 25 → 13 → 7 → 4 → 2 → 1: 7 tries.',
  '프로그래밍 언어의 random 함수는 진짜로 예측할 수 없는 값을 만든다.': 'A programming language\'s random function makes truly unpredictable values.',
  '대부분은 정해진 계산으로 무작위처럼 보이는 수를 만듭니다(의사 난수). 시작값을 알면 다음 수를 알 수 있어, 보안에는 따로 만든 난수를 씁니다.':
    'Most make random-looking numbers with a fixed calculation (pseudo-random numbers). Knowing the starting value tells you the next number, so security uses specially made random numbers.',
  '비밀번호에 대문자, 숫자, 기호를 섞으라고 하는 이유는 무엇일까요?': 'Why are you told to mix capitals, digits and symbols into a password?',
  '자리마다 고를 수 있는 글자가 26개에서 90개 정도로 늘어나, 곱의 법칙에 따라 전체 경우의 수가 엄청나게 커지기 때문입니다. 길이를 늘리는 것도 같은 효과를 냅니다.':
    'Because the characters to choose from at each place grow from 26 to about 90, and by the product rule the total number of cases becomes enormous. Making it longer has the same effect.',
};
