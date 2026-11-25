// English for 1.2 Conditions and loops. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the code: 점수 score, 결과 result, 합계 total; strings "합격" "pass", "다시" "retry".
window.lessonText = {
  // Page
  '조건과 반복 · 레슨 1.2': 'Conditions and loops · Lesson 1.2',
  'if와 while이 있는 파이썬 코드를 한 줄씩 실행하며, 프로그램이 갈림길을 고르고 같은 줄을 되풀이하는 모습을 살펴보세요.':
    'Run Python code with if and while one line at a time and watch the program choose a branch and repeat lines.',
  '프로그램은 어떻게 갈림길을 고르고 같은 일을 되풀이할까요? 다음에 실행될 줄을 예측하며 한 줄씩 실행해 보세요.':
    'How does a program choose a branch and repeat the same work? Run it line by line, predicting the next line to run.',
  '조건을 확인하고 반복하며 메모리 칸이 바뀌는 장면': 'Memory cells changing as conditions are checked and lines repeat',
  // Code and cells
  '점수': 'score', '합계': 'total', '합격': 'pass', '다시': 'retry',
  '점수 = 75': 'score = 75', '점수 = 45': 'score = 45', 'if 점수 >= 60:': 'if score >= 60:',
  '결과 = "합격"': 'result = "pass"', '결과 = "다시"': 'result = "retry"', '"합격" 적기': 'Write "pass"', '"다시" 적기': 'Write "retry"',
  '합계 = 0': 'total = 0', '합계 = 합계 + i': 'total = total + i',
  '점수: {0}': 'score: {0}', '결과: {0}': 'result: {0}', '합계: {0}': 'total: {0}',
  '점수 {#0}': 'score {0}', '결과 ‘합격’': 'result ‘pass’', '결과 ‘다시’': 'result ‘retry’', 'else에서 ‘다시’': '‘retry’ in else',
  // Readouts
  '반복이 끝나지 않아 강제로 멈췄습니다. 처음부터 다시 볼 수 있습니다.': 'The loop never ended, so it was stopped. You can watch it again from the start.',
  '강제로 멈춤': 'Stopped', '강제로 멈췄습니다': 'Stopped by force', '다음 줄로': 'To the next line',
  'i = 1 · 합계 0': 'i = 1 · total 0', 'i = 4에서 종료 · 합계 6': 'Ends at i = 4 · total 6', '1 + 2 + 3 누적': '1 + 2 + 3 added up',
  'i가 4가 되면': 'When i reaches 4', '반복 중 i가 그대로': 'i stays the same in the loop', '종료 조건에 도달하지 못함': 'Never reaches the stop condition', '끝나지 않는다': 'Never ends',
  // Step 1
  '갈림길 if': 'Branching with if',
  '조건이 참이면 그 아래 줄을 실행한다': 'If the condition is true, the lines below it run',
  'if 뒤의 조건은 참(True) 아니면 거짓(False) 둘 중 하나입니다. 참이면 들여 쓴 줄을 실행하고, 거짓이면 그 줄들을 건너뛰어 else 아래로 갑니다. 프로그램은 이렇게 한 갈래만 골라 갑니다.':
    'The condition after if is either true (True) or false (False). If true, the indented lines run; if false, they are skipped and the program goes to the lines under else. This way the program takes only one branch.',
  'CPU가 점수 칸을 읽어 "75 >= 60 → 참"을 띄우고, 코드 창의 밝은 줄이 3번 줄로 갑니다. else 아래 5번 줄은 실행하지 않고 건너뜁니다.':
    'The CPU reads the score cell and shows "75 >= 60 → true", and the highlighted line in the code window moves to line 3. Line 5 under else is skipped.',
  '점수 칸에 75를 적은 뒤, CPU가 점수가 60 이상인지 확인합니다. 참이므로 결과 칸에 "합격"을 적고 else 쪽은 건너뜁니다.':
    'After 75 is written into the score cell, the CPU checks whether score is 60 or more. It is true, so "pass" is written into the result cell and the else side is skipped.',
  '75 ≥ 60은 참': '75 ≥ 60 is true', 'else 건너뛰기': 'Skip else',
  '점수 >= 60은 참일까요, 거짓일까요?': 'Is score >= 60 true or false?',
  '점수는 75이고 75는 60보다 크므로 참입니다.': 'score is 75, and 75 is more than 60, so it is true.',
  '그러면 다음에 실행할 줄은 몇 번째 줄일까요?': 'Then which line runs next?',
  '조건이 참이므로 if 바로 아래 들여 쓴 3번째 줄로 갑니다.': 'The condition is true, so it goes to line 3, indented right under if.',
  // Step 2
  'else 쪽': 'The else side',
  '거짓이면 else 아래로 건너뛴다': 'If false, it jumps to the lines under else',
  '같은 코드라도 값이 바뀌면 다른 길로 갑니다. 점수가 45라면 조건이 거짓이 되어, if 아래 줄을 건너뛰고 else 아래 줄을 실행합니다. 프로그램을 짤 때는 두 갈래 모두 맞게 동작하는지 따져 봐야 합니다.':
    'The same code takes another path when a value changes. With a score of 45 the condition is false, so the line under if is skipped and the line under else runs. When writing a program you have to check that both branches work.',
  'CPU에 "45 >= 60 → 거짓"이 뜨고, 밝은 줄이 3번 줄을 건너뛰어 5번 줄로 바로 갑니다.':
    '"45 >= 60 → false" appears at the CPU, and the highlighted line skips line 3 and goes straight to line 5.',
  '점수 칸에 45를 적은 뒤 조건을 확인합니다. 거짓이므로 결과 칸에 "다시"를 적습니다.':
    'After 45 is written into the score cell, the condition is checked. It is false, so "retry" is written into the result cell.',
  '45 ≥ 60은 거짓': '45 ≥ 60 is false',
  '이번에는 다음에 어느 줄을 실행할까요?': 'This time, which line runs next?',
  '45 >= 60은 거짓이라 if 아래를 건너뛰고 else 아래 5번째 줄로 갑니다.': '45 >= 60 is false, so it skips the lines under if and goes to line 5 under else.',
  // Step 3
  '반복 while': 'Looping with while',
  '조건이 참인 동안 같은 줄을 되풀이한다': 'While the condition is true, the same lines repeat',
  'while은 조건이 참인 동안 들여 쓴 줄들을 반복합니다. 반복 안의 마지막 줄을 실행하면 다시 while로 올라가 조건을 확인합니다. 아래 프로그램은 i를 1, 2, 3으로 바꿔 가며 합계에 더하고, i가 4가 되면 조건이 거짓이 되어 멈춥니다.':
    'while repeats the indented lines while the condition is true. After the last line in the loop runs, it goes back up to while and checks the condition again. The program below adds i to total as i goes 1, 2, 3; when i reaches 4 the condition is false and it stops.',
  '밝은 줄이 3 → 4 → 5 → 다시 3으로 돌아갑니다. i 칸이 1, 2, 3, 4로, 합계 칸이 1, 3, 6으로 바뀌고, "4 <= 3 → 거짓"에서 반복이 끝납니다.':
    'The highlighted line goes 3 → 4 → 5 → back to 3. The i cell becomes 1, 2, 3, 4 and the total cell 1, 3, 6, and the loop ends at "4 <= 3 → false".',
  '합계 0과 i 1을 적은 뒤, i가 3 이하인 동안 합계에 i를 더하고 i를 1 늘립니다. i가 4가 되면 반복을 마치고, 합계는 6이 됩니다.':
    'After total 0 and i 1 are written, i is added to total and i grows by 1 while i is 3 or less. When i reaches 4 the loop ends and total is 6.',
  'i가 3일 때 이 줄을 실행하면 합계는?': 'When i is 3, what is total after this line runs?',
  '합계에는 1 + 2 = 3이 있었고, 여기에 3을 더해 6이 됩니다.': 'total held 1 + 2 = 3; adding 3 makes 6.',
  '4는 3보다 크므로 거짓입니다. 반복을 빠져나갑니다.': '4 is more than 3, so it is false. The loop exits.',
  // Step 4
  '끝나지 않는 반복': 'A loop that never ends',
  '조건이 바뀌지 않으면 영원히 반복한다': 'If the condition never changes, it repeats forever',
  '앞 단계에서 i = i + 1 줄을 빠뜨리면 어떻게 될까요? i는 계속 1이라서 i <= 3은 언제나 참입니다. 반복이 끝나지 않고 합계만 끝없이 커집니다. 이런 무한 반복은 초보자가 가장 자주 만드는 실수 중 하나입니다. 이 실험은 반복을 여섯 번 돈 뒤 강제로 멈춥니다.':
    'What if the line i = i + 1 from the previous step is left out? i stays 1, so i <= 3 is always true. The loop never ends and total just keeps growing. An infinite loop like this is one of the most common beginner mistakes. This lab stops it by force after six rounds.',
  '밝은 줄이 3 → 4 → 3 → 4를 계속 오가고, i 칸은 1에서 바뀌지 않습니다. 여섯 바퀴 뒤 CPU에 "강제로 멈춤"이 뜹니다.':
    'The highlighted line keeps going 3 → 4 → 3 → 4, and the i cell never changes from 1. After six rounds "Stopped" appears at the CPU.',
  'i가 바뀌지 않아 while 조건이 늘 참입니다. 합계만 1씩 계속 커지다가 실험이 강제로 멈춥니다.':
    'i never changes, so the while condition is always true. Only total keeps growing by 1 until the lab stops it.',
  '이 반복은 언제 끝날까요?': 'When will this loop end?',
  '반복 안에 i를 바꾸는 줄이 없어서 i는 계속 1이고, 조건은 언제나 참입니다.': 'No line in the loop changes i, so i stays 1 and the condition is always true.',
};
