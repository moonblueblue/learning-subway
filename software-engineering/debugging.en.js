// English for 1.6 Debugging. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the code: 합계 total, 평균 average (the same as 1.2 and 1.3).
window.lessonText = {
  // Page
  '디버깅 · 레슨 1.6': 'Debugging · Lesson 1.6',
  '평균을 잘못 구하는 프로그램을 한 줄씩 실행하며, 기대와 실제를 비교하고 버그가 있는 줄을 좁혀 찾는 연습을 해 보세요.':
    'Run a program that gets an average wrong one line at a time, compare what you expected with what happened, and practise narrowing down the line with the bug.',
  '버그가 있는 곳을 어떻게 좁혀 갈까요? 2, 4, 6의 평균을 구하려다 틀리는 프로그램을 한 줄씩 실행하며 찾아보세요.':
    'How do you narrow down where a bug is? Run a program that tries to average 2, 4 and 6 and gets it wrong, one line at a time, and find out.',
  '버그가 있는 프로그램이 실행되며 메모리 칸이 바뀌는 장면': 'Memory cells changing as a program with a bug runs',
  '"한 줄 실행"을 눌러 다음 줄을 실행해 보세요. 예측 문제가 나오면 먼저 답을 고릅니다.':
    'Press "Run one line" to run the next line. When a prediction question appears, choose your answer first.',
  // Code and cells
  '합계': 'total', '평균': 'average',
  '합계 = 0': 'total = 0', '합계 = 합계 + i * 2': 'total = total + i * 2', '평균 = 합계 / 2': 'average = total / 2', '평균 = 합계 / 3': 'average = total / 3',
  '합계: {0}': 'total: {0}', '평균: {0}': 'average: {0}', '합계 {#0}': 'total {0}',
  // Readouts
  '반복이 끝나지 않아 강제로 멈췄습니다. 처음부터 다시 볼 수 있습니다.': 'The loop never ended, so it was stopped. You can watch it again from the start.',
  '강제로 멈춤': 'Stopped', '강제로 멈췄습니다': 'Stopped by force', '다음 줄로': 'To the next line', 'else 건너뛰기': 'Skip else',
  // Step 1
  '증상 확인': 'Seeing the symptom',
  '먼저 기대한 값과 실제 값을 비교한다': 'First compare the expected value with the actual one',
  '이 프로그램은 2, 4, 6의 평균인 4.0을 구하려고 만들었습니다. 그런데 실행해 보면 다른 값이 나옵니다. 디버깅의 첫걸음은 "무엇을 기대했고 실제로 무엇이 나왔는지"를 정확히 적는 것입니다. 그래야 어디서 어긋났는지 찾을 수 있습니다.':
    'This program was written to work out 4.0, the average of 2, 4 and 6. But when it runs, a different value comes out. The first step in debugging is to write down exactly "what you expected and what actually came out". Only then can you find where it went wrong.',
  '마지막 줄을 실행하면 평균 칸에 6.0이 적힙니다. 기대한 4.0과 다르니 어딘가에 버그가 있습니다.':
    'Running the last line writes 6.0 into the average cell. It is not the 4.0 expected, so there is a bug somewhere.',
  '합계에 2, 4, 6을 차례로 더해 12를 만들고, 평균을 계산합니다. 결과는 기대한 4.0이 아니라 6.0입니다.':
    '2, 4 and 6 are added to total in turn to make 12, and the average is worked out. The result is 6.0, not the 4.0 expected.',
  '입력 2, 4, 6': 'Input 2, 4, 6', '잘못된 평균 6': 'Wrong average 6', '기대 4 · 실제 6': 'Expected 4 · actual 6',
  '이 줄을 실행하면 평균 칸에는 무엇이 들어갈까요?': 'When this line runs, what goes into the average cell?',
  '합계 12를 2로 나눠 6.0이 됩니다. 기대한 4.0과 다르니 버그입니다.': 'total 12 divided by 2 is 6.0. It is not the 4.0 expected, so it is a bug.',
  // Step 2
  '반씩 좁히기': 'Narrowing by halves',
  '중간 값을 확인해 버그가 있는 쪽을 좁힌다': 'Check a value in the middle to narrow down the side with the bug',
  '프로그램 중간에서 값이 맞는지 확인하면, 버그가 그 앞에 있는지 뒤에 있는지 알 수 있습니다. 0.6의 이진 탐색처럼 의심 구간을 반씩 줄이는 방법입니다. 반복이 끝났을 때 합계가 2 + 4 + 6 = 12로 맞다면, 버그는 반복 뒤에 있습니다.':
    'Checking that a value is right in the middle of a program tells you whether the bug is before that point or after it. Like the binary search in 0.6, it halves the suspect stretch each time. If total is correctly 2 + 4 + 6 = 12 when the loop ends, the bug is after the loop.',
  '반복이 끝난 뒤 합계 칸이 12인지 확인하세요. 맞다면 남은 줄은 마지막 줄 하나뿐입니다.':
    'Check that the total cell is 12 after the loop ends. If it is, the only line left is the last one.',
  '반복이 끝난 뒤 합계 칸에 12가 들어 있습니다. 반복은 맞게 동작했으므로 버그는 마지막 줄에 있습니다.':
    'After the loop ends, the total cell holds 12. The loop worked correctly, so the bug is in the last line.',
  '중간값 합계는 12로 정상': 'The middle value, total, is a correct 12', '마지막 나눗셈 확인': 'Check the last division', '합 12를 2로 나눔': 'Sum 12 divided by 2',
  '반복이 끝난 지금 합계 칸은 12입니다. 버그는 어디에 있을까요?': 'Now the loop has ended, the total cell is 12. Where is the bug?',
  '3–5번째 줄 (반복)': 'Lines 3–5 (the loop)', '6번째 줄 (평균)': 'Line 6 (the average)',
  '합계가 맞게 12이므로 반복은 문제없습니다. 값이 세 개인데 2로 나눈 6번째 줄이 버그입니다.':
    'total is correctly 12, so the loop is fine. There are three values but line 6 divides by 2: that is the bug.',
  // Step 3
  '고치고 확인': 'Fix and check',
  '고친 뒤에는 다시 실행해 확인한다': 'After a fix, run it again to check',
  '값이 세 개이니 3으로 나눠야 합니다. 고친 뒤에는 반드시 다시 실행해서 기대한 값이 나오는지 확인합니다. 고쳤다고 생각한 곳이 사실은 다른 버그를 만들 수도 있기 때문입니다.':
    'There are three values, so it must divide by 3. After fixing, always run it again to check that the expected value comes out, because the place you think you fixed may actually have made another bug.',
  '6번째 줄이 / 3으로 바뀌었습니다. 다시 실행하면 평균 칸에 4.0이 적힙니다.': 'Line 6 now has / 3. Running it again writes 4.0 into the average cell.',
  '마지막 줄을 합계 / 3으로 고친 프로그램입니다. 실행하면 평균은 기대한 4.0이 됩니다.':
    'This is the program with the last line fixed to total / 3. When it runs, average is the expected 4.0.',
  '나누는 수 2 → 3': 'Divisor 2 → 3', '실제 4 = 기대 4': 'Actual 4 = expected 4',
  '고친 뒤 평균은?': 'What is average after the fix?', '12 / 3 = 4.0. 기대한 값과 같습니다.': '12 / 3 = 4.0. It matches the expected value.',
  // Step 4
  '하나 차이 버그': 'Off-by-one bug',
  '경계 조건은 한 끗 차이로 틀린다': 'A boundary condition goes wrong by a hair',
  '이번에는 while 조건이 i <= 3이 아니라 i < 3으로 잘못 적혔습니다. 그러면 i가 3일 때 반복이 끝나 버려 6이 더해지지 않습니다. 반복 횟수가 하나 모자라거나 남는 실수를 "하나 차이(off-by-one) 버그"라고 하며, 프로그래머가 가장 자주 만드는 버그 중 하나입니다.':
    'This time the while condition was miswritten as i < 3 instead of i <= 3. Then the loop ends when i is 3, and 6 is never added. A loop that runs one time too few or too many is called an "off-by-one bug", one of the bugs programmers make most often.',
  'i가 3이 되자 "3 < 3 → 거짓"이 뜨고 반복이 끝납니다. 합계는 6, 평균은 2.0입니다.':
    'When i reaches 3, "3 < 3 → false" appears and the loop ends. total is 6 and average is 2.0.',
  'while 조건이 i < 3이라 i가 1, 2일 때만 반복합니다. 합계는 2 + 4 = 6이고 평균은 2.0입니다.':
    'The while condition is i < 3, so it loops only while i is 1 or 2. total is 2 + 4 = 6 and average is 2.0.',
  '마지막 값 6을 건너뜀': 'The last value, 6, is skipped', '합 6 ÷ 3 = 2': 'Sum 6 ÷ 3 = 2',
  'i가 3일 때 i < 3은?': 'When i is 3, is i < 3?',
  '3은 3보다 작지 않으므로 거짓입니다. 6을 더하기 전에 반복이 끝납니다.': '3 is not less than 3, so it is false. The loop ends before 6 is added.',
  '버그를 고치려면 무엇을 바꿔야 할까요?': 'What must change to fix the bug?',
  'i < 3을 i <= 3으로': 'i < 3 to i <= 3', '/ 3을 / 2로': '/ 3 to / 2',
  'i가 3일 때도 반복해야 6이 더해집니다. 나누는 수는 이미 맞습니다.': 'It must also loop when i is 3 for 6 to be added. The divisor is already right.',
};
