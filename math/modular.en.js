// English for 2.6 Modular arithmetic. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '나머지 연산 · 레슨 2.6': 'Modular arithmetic · Lesson 2.6',
  '시계 계산, 짝수와 자릿수, 해시의 칸 고르기, 암호의 바탕까지 나머지 연산을 문제로 익혀 보세요.':
    'Learn modular arithmetic through questions: clock arithmetic, even numbers and digits, picking hash slots, and the basis of encryption.',
  '시계처럼 도는 수는 암호와 해시에서 어떻게 쓰일까요? 나머지 연산을 문제로 익혀 보세요.':
    'How are numbers that wrap around like a clock used in encryption and hashing? Learn modular arithmetic through questions.',
  '다음 식이 맞는지 고르세요.': 'Choose whether each expression is right.',
  // Step 1
  '시계 계산': 'Clock arithmetic', '시계가 11시': 'The clock says 11', '3시간 뒤 12를 넘어 순환': '3 hours later it passes 12 and wraps', '2시': '2 o\'clock',
  '나머지 연산은 시계처럼 돌아간다': 'Modular arithmetic wraps around like a clock',
  '지금 10시에서 5시간 뒤는 15시가 아니라 3시입니다(12시간 시계). 12로 나눈 나머지만 보기 때문입니다. 이것을 나머지 연산이라 하고, 파이썬에서는 %로 씁니다. 15 % 12 = 3, 7 % 2 = 1처럼 나눈 뒤 남는 수를 줍니다.':
    'Five hours after 10 o\'clock is not 15 but 3 o\'clock (on a 12-hour clock), because only the remainder after dividing by 12 counts. This is called modular arithmetic, written % in Python. It gives what is left after dividing, as in 15 % 12 = 3 and 7 % 2 = 1.',
  '1.2의 while 반복에서 i를 1씩 늘렸습니다. i % 2를 쓰면 반복할 때마다 0, 1, 0, 1로 번갈아 바뀌는 값을 얻을 수 있습니다.':
    'The while loop in 1.2 increased i by 1. Using i % 2 gives a value that alternates 0, 1, 0, 1 each time round.',
  '15를 12로 나누면 몫 1, 나머지 3입니다.': '15 divided by 12 is 1 with remainder 3.',
  '10시에서 30시간 뒤는 4시다 (12시간 시계)': '30 hours after 10 o\'clock is 4 o\'clock (12-hour clock)',
  '(10 + 30) % 12 = 40 % 12 = 4입니다.': '(10 + 30) % 12 = 40 % 12 = 4.',
  '7은 7로 나누어떨어지므로 나머지는 0입니다.': '7 divides by 7 exactly, so the remainder is 0.',
  '어떤 수를 5로 나눈 나머지는 0부터 4 중 하나다': 'Any number divided by 5 leaves a remainder from 0 to 4',
  '나머지는 언제나 나누는 수보다 작습니다.': 'The remainder is always smaller than the number divided by.',
  '오늘이 수요일이면 100일 뒤는 무슨 요일일까요?': 'If today is Wednesday, what day is it 100 days from now?',
  '100 % 7 = 2이므로 수요일에서 이틀 뒤인 금요일입니다. 일주일이 7일마다 돌아오기 때문입니다.': '100 % 7 = 2, so it is Friday, two days after Wednesday, because the week comes round every 7 days.',
  // Step 2
  '짝수와 자릿수': 'Even numbers and digits', '17을 2로 나눔': 'Divide 17 by 2', '나머지 1': 'Remainder 1', '홀수': 'Odd',
  '나머지로 성질을 빠르게 알아낸다': 'Remainders reveal properties quickly',
  'n % 2가 0이면 짝수, 1이면 홀수입니다. n % 10은 맨 끝 자릿수입니다. 0.1에서 본 이진수로 보면, n % 2는 맨 오른쪽 비트이고 n % 256은 맨 아래 8비트(1바이트)입니다. 나머지는 수의 "끝부분"을 잘라 보는 도구입니다.':
    'If n % 2 is 0, n is even; if 1, odd. n % 10 is the last digit. In the binary from 0.1, n % 2 is the rightmost bit and n % 256 is the lowest 8 bits (1 byte). A remainder is a tool for cutting off and looking at the "end" of a number.',
  '0.1에서 가장 오른쪽 스위치(1을 맡은 비트)가 켜져 있으면 홀수였습니다. 그것이 바로 n % 2 == 1입니다.':
    'In 0.1, a number was odd when the rightmost switch (the bit for 1) was on. That is exactly n % 2 == 1.',
  '2024 % 2 == 0이므로 2024는 짝수다.': '2024 % 2 == 0, so 2024 is even.', '2로 나누어떨어지면 짝수입니다.': 'A number that divides by 2 exactly is even.',
  '10으로 나눈 나머지는 끝 자릿수입니다.': 'The remainder after dividing by 10 is the last digit.',
  '홀수의 이진수는 맨 오른쪽 비트가 0이다.': 'An odd number has 0 as the rightmost bit in binary.', '홀수는 1을 맡은 맨 오른쪽 비트가 1입니다.': 'An odd number has 1 in the rightmost bit, the bit for 1.',
  '300 − 256 = 44. 1바이트에 담으면 넘친 부분이 잘리고 44만 남습니다.': '300 − 256 = 44. Put into 1 byte, the overflow is cut off and only 44 is left.',
  '3의 배수인지 빠르게 확인하려면 어떤 식을 쓸까요?': 'What expression quickly checks for a multiple of 3?',
  'n % 3 == 0입니다. 같은 방식으로 n % k == 0이면 n은 k의 배수입니다.': 'n % 3 == 0. In the same way, if n % k == 0 then n is a multiple of k.',
  // Step 3
  '해시의 칸 고르기': 'Picking hash slots', '해시값 27 · 표 10칸': 'Hash 27 · table of 10 slots', '7번 칸': 'Slot 7',
  '나머지로 값을 정해진 칸에 나눠 담는다': 'Remainders spread values across a fixed set of slots',
  '칸이 10개인 표에 이름을 나눠 담는다고 해 봅시다. 이름을 어떤 규칙으로 수로 바꾼 뒤(해시) % 10을 하면, 결과는 항상 0–9 중 하나라 바로 칸 번호가 됩니다. 다시 찾을 때도 같은 계산으로 그 칸 하나만 보면 됩니다. 1.4에서 딕셔너리가 한 칸만 읽었던 비밀이 이것입니다.':
    'Say names are spread over a table with 10 slots. Turn a name into a number by some rule (a hash) and take % 10: the result is always one of 0–9, so it is a slot number straight away. To find it again, the same calculation says to look in just that one slot. This is the secret of how the dictionary in 1.4 read only one cell.',
  '1.4에서 딕셔너리는 키로 한 칸만 읽었고, 2.4의 생일 문제처럼 칸이 적으면 두 키가 같은 칸에 들어가는 충돌이 생각보다 자주 일어납니다. 자세한 구조는 4.5에서 다룹니다.':
    'In 1.4 a dictionary read only one cell by key, and as in the birthday problem in 2.4, with few slots two keys landing in the same slot, a collision, happens more often than you think. The details are covered in 4.5.',
  '칸이 10개인 표에서 칸 번호 = 해시값 % 10일 때 다음 문장이 참인지 고르세요.': 'In a table of 10 slots where slot number = hash % 10, choose whether each sentence is true.',
  '해시값 1234인 키는 4번 칸에 들어간다.': 'A key with hash 1234 goes into slot 4.', '1234 % 10 = 4입니다.': '1234 % 10 = 4.',
  '해시값 57과 87인 키는 같은 칸에 들어간다.': 'Keys with hashes 57 and 87 go into the same slot.', '둘 다 % 10이 7입니다. 이것이 충돌입니다.': 'Both give 7 with % 10. This is a collision.',
  '칸 번호는 10이 나올 수도 있다.': 'The slot number can come out as 10.', '% 10의 결과는 0–9뿐이라 칸 0–9에 꼭 맞습니다.': '% 10 gives only 0–9, a perfect fit for slots 0–9.',
  '같은 키는 언제 계산해도 같은 칸 번호가 나온다.': 'The same key always gives the same slot number, whenever it is worked out.',
  '해시와 나머지가 정해진 계산이라 같은 입력에는 같은 결과가 나옵니다. 그래서 다시 찾을 수 있습니다.': 'The hash and the remainder are fixed calculations, so the same input gives the same result. That is why it can be found again.',
  '칸을 10개에서 100개로 늘리면 충돌은 어떻게 될까요?': 'What happens to collisions if the slots go from 10 to 100?',
  '같은 수의 키를 담을 때 칸이 많을수록 같은 칸에 몰릴 확률이 줄어 충돌이 줄어듭니다. 대신 빈 칸이 늘어 메모리를 더 씁니다.':
    'For the same number of keys, more slots make crowding into one slot less likely, so there are fewer collisions. In exchange there are more empty slots, using more memory.',
  // Step 4
  '암호 맛보기': 'A taste of encryption', '3⁴ % 7': '3⁴ % 7', '81을 7로 나눈 나머지 4 (쉬움)': '81 divided by 7 leaves 4 (easy)', '4에서 지수 4를 거꾸로 찾기는 하나씩 시도': 'Finding the exponent 4 back from 4 means trying one by one',
  '나머지 연산은 거꾸로 풀기 어렵게 만든다': 'Modular arithmetic makes things hard to undo',
  '3⁴ % 7 = 81 % 7 = 4처럼 거듭제곱의 나머지는 계산하기 쉽습니다. 그런데 "3을 몇 번 곱해야 7로 나눈 나머지가 4가 될까?"를 거꾸로 찾기는 수가 커질수록 엄청나게 어려워집니다. 인터넷의 자물쇠(6.11, 8C.1)는 이런 "한쪽은 쉽고 거꾸로는 어려운" 나머지 계산 위에 만들어졌습니다.':
    'The remainder of a power is easy to work out, as in 3⁴ % 7 = 81 % 7 = 4. But working backwards, "how many times must 3 be multiplied to leave 4 when divided by 7?", gets enormously hard as the numbers grow. The internet\'s locks (6.11, 8C.1) are built on remainder calculations like this, "easy one way, hard backwards".',
  '0.7에서 패킷이 여러 기계를 거치는 동안 누구나 엿볼 수 있었습니다. 내용을 지키려면 이런 수학이 필요합니다.':
    'In 0.7, anyone could peek at packets as they passed through many machines. Keeping the contents safe takes maths like this.',
  '3⁴ = 81, 81 = 7 × 11 + 4입니다.': '3⁴ = 81, and 81 = 7 × 11 + 4.',
  '(a × b) % n은 (a % n) × (b % n)을 다시 % n 한 것과 같다.': '(a × b) % n is the same as (a % n) × (b % n), taken % n again.',
  '나머지끼리 곱해도 결과의 나머지는 같습니다. 그래서 큰 거듭제곱도 중간중간 나머지를 내며 작은 수로 계산할 수 있습니다.':
    'Multiplying the remainders gives the same remainder in the result. So even a large power can be worked out with small numbers by taking remainders along the way.',
  '나머지 연산의 결과를 보면 원래 수를 항상 정확히 알 수 있다.': 'Looking at the result of a remainder always tells you the original number exactly.',
  '15와 27은 둘 다 % 12가 3입니다. 결과 하나에 원래 수가 무한히 많습니다.': '15 and 27 both give 3 with % 12. One result has infinitely many original numbers.',
  '수가 아주 크면 "몇 번 곱했는지"를 거꾸로 찾는 데 오래 걸린다.': 'With very large numbers, working backwards to "how many times it was multiplied" takes a long time.',
  '알려진 빠른 방법이 없어 하나씩 시도하는 것과 비슷해집니다. 이 어려움이 보안의 바탕입니다.': 'There is no known fast way, so it comes close to trying one at a time. This difficulty is the basis of security.',
  '시계에서 지금 몇 시인지만 보고 "몇 시간이 흘렀는지" 알 수 있을까요?': 'Looking only at what time the clock shows, can you tell "how many hours have passed"?',
  '알 수 없습니다. 3시는 3시간 뒤일 수도, 15시간이나 27시간 뒤일 수도 있습니다. 나머지만 보면 정보가 사라지는 이 성질이 암호에서 쓰입니다.':
    'No. 3 o\'clock could be 3 hours later, or 15 or 27. This property, that information disappears when you see only the remainder, is used in encryption.',

  // Worked examples aligned with the chapter diagrams.
  "계산 예시": "Worked example",
  "11시에서 3시간 전진": "Move forward 3 hours from 11",
  "12 → 1 → 2를 지남": "Pass 12 → 1 → 2",
  "14 % 12 = 2 · 2시": "14 % 12 = 2 · 2 o’clock",
  "출발": "Start",
  "세 시간 뒤": "Three hours later",
  "나머지": "Remainder",
  "11시": "11 o’clock",
  "두 나머지 모두 7": "Both remainders are 7",
  "둘 다 7번 칸": "Both go in slot 7",
  "값": "Value",
  "10으로 나눈 식": "Division by 10",
  "나머지와 위치": "Remainder and slot",
  "n = 1, 2, 3, 4를 차례로 대입": "Try n = 1, 2, 3, 4 in order",
  "목표 4의 첫 지수는 4": "First exponent for target 4 is 4",
  "양의 지수 n": "Positive exponent n",
  "목표 나머지 4가 처음 나오는 지수는 4": "The target remainder 4 first appears at exponent 4",
  "표의 0번부터 9번까지": "Table slots 0 to 9",
};
