// English for 0.6 What is an algorithm. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  '같은 일을 더 적게 하고 끝내기': 'Find the answer with less work',
  '0장 컴퓨팅 둘러보기': 'Chapter 0 · A tour of computing',
  '마지막 상자까지 찾기': 'Find the last box',
  '100만 개에서 마지막 상자를 찾습니다. 반씩 줄이면 남은 수가 100만, 50만, 25만에서 18회 뒤 3개, 19회 뒤 1개가 됩니다. 마지막 한 장을 20번째에 확인합니다. 하나씩 찾으면 100만 개 모두 확인합니다.':
    'Find the last of one million boxes. Halving gives one million, 500,000, 250,000, then 3 after 18 checks and 1 after 19. The 20th check finds the last card. One-by-one search checks all one million boxes.',
  '같은 100만 개 · 맨 끝 목표': 'Same million boxes · target at the end',
  '하나씩 또는 반씩': 'One by one or by halves',
  '최악에 100만 회와 20회': 'Worst cases: 1 million and 20 checks',
  '후보를 반씩 줄이면 맨 끝까지 볼 필요가 줄어듭니다': 'Halving the candidates cuts the work to find the last box',
  '정렬된 상자가 100만 개이고 목표는 맨 끝에 있습니다. 한 장씩 확인하면 100만 번입니다. 반씩 줄이는 방법은 19번 확인했을 때 한 장이 남고, 그 마지막 장을 확인하면 모두 20번입니다.':
    'There are one million sorted boxes, with the target at the end. Checking individually takes a million checks. Halving leaves one candidate after 19 checks. Checking that last box makes 20 in all.',
  '위의 줄에서 남은 상자 수와 그 아래에 적힌 확인 횟수를 함께 보세요. 19회는 한 장이 남았을 때이고 20회는 그 장을 확인해 찾았을 때입니다.':
    'Read each remaining box count and the number of checks below it. At 19 checks one box remains. The 20th check finds the target.',
  '{#0}회 확인': '{0} {0|check|checks}',
  '섞인 카드에서': 'Shuffled boxes',
  '섞여 있으면 가운데 값만으로 왼쪽을 제외할 수 없습니다': 'A middle value can’t rule out the left side when the boxes are shuffled',
  '두 줄 모두 네 번째 상자의 값은 30이고 찾는 수는 84입니다. 정렬한 윗줄에서는 왼쪽이 모두 30 이하입니다. 아래처럼 카드 순서를 섞으면 30보다 큰 84가 왼쪽에도 올 수 있습니다.':
    'In both rows, the fourth box holds 30 and the target is 84. In the sorted top row, all values at and to the left of 30 are 30 or less. In the shuffled bottom row, 84 can appear to the left even though it is greater than 30.',
  '두 줄에서 확인한 위치와 값은 같습니다. 84가 윗줄의 오른쪽에서 아랫줄의 왼쪽으로 옮겨 간 것을 찾아보세요.':
    'The checked position and its value are the same in both rows. Find 84 on the right in the top row and on the left in the bottom row.',
  '두 줄 모두 30과 84를 비교': 'Compare 30 with 84 in both rows',
  '한 줄만 순서를 섞음': 'Shuffle one row',
  '섞은 줄에서는 왼쪽도 확인': 'Keep checking the left in the shuffled row',
  '위는 오름차순으로 정렬되어 있습니다. 네 번째 값 30보다 84가 커서 왼쪽 네 장을 제외합니다. 아래는 같은 수를 섞었습니다. 네 번째는 여전히 30이지만 두 번째가 84여서 왼쪽을 제외하면 목표를 놓칩니다.':
    'The top row is sorted from smallest to largest. The first four boxes can be ruled out since 84 is greater than the fourth value, 30. The bottom row shuffles the same numbers. The fourth box is still 30, but the second is 84. Ruling out the left would miss the target.',
  '작은 수부터 · 왼쪽 네 장 제외': 'Sorted · rule out the first four',
  '{#0}번 상자, 미개봉 제외': 'Box {0}, ruled out unopened',
  '남은 범위를 줄이기': 'Narrow the remaining range',
  '확인한 순서 8번, 12번, 14번, 15번': 'Checked boxes 8, 12, 14, and 15 in order',
  '섞은 순서 · 왼쪽에도 84': 'Shuffled · 84 is on the left',
  '두 줄 모두 목표 84 · 가운데 비교 30 < 84': 'Both rows target 84 · middle comparison 30 < 84',
  '새로 섞은 카드에서 81을 찾습니다. 30과 한 번 비교해 왼쪽 네 장을 한꺼번에 제외할 수 있나요?':
    'Look for 81 in a new shuffle. Can a single comparison with 30 rule out the first four boxes?',
  '왼쪽 네 장 제외': 'Rule out the first four',
  '왼쪽도 계속 확인': 'Keep checking the left',
  '섞은 카드 · 목표 81': 'Shuffled boxes · target 81',
  '가운데 비교 30 < 81': 'Middle comparison 30 < 81',
  '왼쪽 2번에서 81 발견': '81 is in box 2 on the left',
  '섞인 카드 여덟 장 중 네 번째의 30만 보입니다. 찾는 수는 81입니다.':
    'Only the fourth of the eight shuffled boxes is visible. It holds 30. The target is 81.',
  '섞인 카드의 가운데 30보다 목표 81이 큽니다. 왼쪽 두 번째 카드에 81이 있습니다.':
    'The target, 81, is greater than the middle value, 30. It is in the second box on the left.',
  '맞았습니다. 왼쪽의 두 번째 상자에서 81이 나왔습니다.': 'Correct. The second box on the left holds 81.',
  '이 경우에도 그렇게 할 수 있는지 다시 생각해 보세요.': 'Think again about whether that works here.',
  "정렬되지 않으면 앞에서부터 확인한다": "Without sorting, check from the start",
  "첫 상자": "First box",
  "차례대로 확인": "Check in order",
  "16번째 상자": "16th box",
  "찾는 수 84 · 연 상자 16개": "Target 84 · 16 boxes opened",
  "30보다 큰 84는 오른쪽 절반에 있다": "84 is greater than 30 and lies in the right half",
  "모두 30 이하": "All at most 30",
  "8번 상자": "Box 8",
  "여기서 계속 찾기": "Keep searching here",
  "제외": "Discard",
  "유지": "Keep",
  "같은 수 16개를 오름차순으로 정렬 · 목표 84": "Same 16 numbers in ascending order · target 84",
  "남은 9~16번에서 가운데인 12번을 엽니다. 43은 84보다 작으므로 13~16번만 남깁니다. 14번의 81도 작아서 15~16번만 남고, 15번에서 84를 찾습니다.": "Open box 12, the middle of boxes 9–16. 43 is below 84, so keep boxes 13–16. Box 14 contains 81, so keep boxes 15–16 and find 84 in box 15.",
  "판단 반복": "Repeat",
  "남은 범위만 다시 반으로 줄인다": "Halve only the remaining range again",
  "남은 상자 9~16번": "Boxes 9–16 remain",
  "남은 범위의 가운데 비교를 반복": "Keep comparing the middle of the remaining range",
  "15번의 84를 4번 만에 발견": "Find 84 in box 15 after four checks",
  "9–16 → 13–16 → 15–16 → 발견": "9–16 → 13–16 → 15–16 → found",
  "12번: 43 < 84": "Box 12: 43 < 84",
  "14번: 81 < 84": "Box 14: 81 < 84",
  "15번: 84 = 84": "Box 15: 84 = 84",
  "발견": "Found",
  "총 4회": "4 checks total",
  "처음 비교까지: 8번 → 12번 → 14번 → 15번": "Including the first check: boxes 8 → 12 → 14 → 15",
  // Page
  '알고리즘이란 · 레슨 0.6': 'What is an algorithm · Lesson 0.6',
  '상자 16개에서 수 하나를 찾으며, 하나씩 찾기와 반씩 줄이기가 일의 양을 얼마나 다르게 만드는지 살펴보세요.':
    'Find one number among 16 boxes and see how much work searching one by one and halving each take.',
  '같은 문제를 푸는 방법에 따라 일의 양이 얼마나 달라질까요? 상자를 직접 열어 수를 찾아 보세요.':
    'How much does the amount of work change with the method that solves the same problem? Open the boxes yourself to find a number.',
  '상자와 찾는 수': 'Boxes and the target', '상자를 열어 수를 찾는 장면': 'Opening boxes to find a number',
  '장면의 상자를 눌러도 됩니다 · 확대 후 드래그로 이동': 'You can also press the boxes in the scene · zoom in, then drag to move',
  '닫힌 상자': 'Closed box', '열어 본 상자': 'Opened box', '찾은 상자': 'Found box', '버린 범위': 'Discarded range',
  '찾는 수': 'Target', '찾는 수 {0}': 'Target {0}', '찾는 수 {#0} · 연 상자 {#1}개': 'Target {0} · {1} {1|box|boxes} opened',
  '정렬됨 · 열어 본 가운데 {0}': (list) => `Sorted · middles opened: ${list.replace(/(\d+)번 (\d+)/g, 'box $1 ($2)')}`,
  '데이터 {0}개 · 최악일 때 여는 횟수 · 높이는 로그 눈금': '{0} data items · boxes opened in the worst case · log-scale heights', '상자 열기': 'Open a box', '새 문제': 'New problem',
  '데이터 수': 'Data size', '하나씩 찾기': 'One by one', '반씩 줄이기': 'Halving',
  // Readouts and announcements
  '{#0}번 상자, 닫힘': 'Box {0}, closed', '{#0}번 상자, 제외됨, {1}': 'Box {0}, ruled out, {1}', '{#0}번 상자, {1}': 'Box {0}, {1}',
  '{0}, 아닙니다': '{0}, not it', '{#0}번 만에 찾았습니다': 'Found in {0} {0|try|tries}', '{#0}번 상자에서 찾았습니다': 'Found in box {0}',
  '{#0}은(는) 찾는 수보다 작습니다 → 왼쪽을 버립니다': '{0} is smaller than the target → discard the left',
  '{#0}은(는) 찾는 수보다 큽니다 → 오른쪽을 버립니다': '{0} is bigger than the target → discard the right',
  '· {0}': '· {0}', '남은 범위 {#0}개': '{0} left in range', '· 반씩 최대': '· halving, at most', '· 연 상자': '· boxes opened',
  '→ 하나씩 최대': '→ one by one, at most', '{#0}번': '{0} {0|time|times}', '{#0}개': '{0}',
  '데이터 {#0}개.': '{0} data {0|item|items}.', '새 문제. 찾는 수 {#0}': 'New problem. Target {0}',
  '하나씩 {0}번 · 반씩 {1}번': 'One by one {0} · halving {1}',
    '기둥 높이 = 최악일 때 여는 횟수(로그 눈금)': 'Column height = boxes opened in the worst case (log scale)',
  // Step 1
  '순서가 없으면 하나씩 열어 봐야 한다': 'With no order, you must open them one by one',
  '상자 16개에 수가 하나씩 들어 있고, 순서는 뒤섞여 있습니다. 찾는 수가 어디 있는지 알 수 없으니 하나씩 열어 볼 수밖에 없습니다. 이렇게 처음부터 차례로 확인하는 방법을 순차 탐색이라고 합니다. 운이 좋으면 1번, 나쁘면 16번 열어야 합니다.':
    'Each of 16 boxes holds a number, in mixed-up order. There is no way to know where the target is, so the only way is to open them one by one. Checking in order from the start like this is called linear search. With luck it takes 1 try; at worst, 16.',
  '연 상자는 숫자가 보이고, 찾으면 초록으로 솟아오릅니다. 아래 줄에 지금까지 연 횟수가 쌓입니다.':
    'An opened box shows its number, and the box with the target pops up green. The line below adds up how many boxes you have opened.',
  '닫힌 상자 16개가 한 줄로 놓여 있습니다. 상자를 하나 열 때마다 그 안의 수가 보이고, 찾는 수와 같으면 상자가 초록으로 바뀝니다.':
    'Sixteen closed boxes stand in a row. Each box you open shows its number, and when it equals the target the box turns green.',
  '첫 칸부터 하나씩 열기': 'Open one at a time from the first', '목표가 마지막 상자에 있음': 'The target is in the last box', '16칸이면 최대 16회': '16 boxes: at most 16 tries',
  '상자를 열어 찾는 수를 찾아 보세요.': 'Open boxes to find the target.',
  '새 문제로 바꾼 뒤 다시 찾아 보세요. 몇 번 만에 찾았나요?': 'Switch to a new problem and find it again. How many tries did it take?',
  // Step 2
  '정렬되어 있으면 반씩 버릴 수 있다': 'When sorted, you can throw away half at a time',
  '이번에는 수가 작은 것부터 차례로 놓여 있습니다. 가운데 상자를 열었는데 찾는 수보다 작으면, 그 왼쪽 상자는 볼 필요도 없이 모두 버릴 수 있습니다. 매번 남은 상자의 가운데를 열면 16개가 8개, 4개, 2개, 1개로 줄어, 많아야 5번이면 찾습니다. 이것을 이진 탐색이라고 합니다.':
    'This time the numbers are in order, smallest first. If the middle box you open is smaller than the target, every box to its left can be thrown away without looking. Opening the middle of the remaining boxes each time shrinks 16 to 8, 4, 2 and 1, so it takes at most 5 tries. This is called binary search.',
  '상자를 열면 찾는 수보다 작은지 큰지 표시되고, 볼 필요 없는 쪽 상자들이 가라앉아 흐려집니다. 남은 상자의 가운데를 열어 보세요.':
    'Opening a box shows whether it is smaller or bigger than the target, and the boxes no longer worth looking at sink and fade. Open the middle of the remaining boxes.',
  '닫힌 상자 16개가 작은 수부터 차례로 놓여 있습니다. 상자를 열면 찾는 수가 그보다 작은지 큰지 알려 주고, 남은 범위 밖의 상자는 가라앉습니다.':
    'Sixteen closed boxes stand in order, smallest first. Opening a box tells whether the target is smaller or bigger, and boxes outside the remaining range sink.',
  '정렬된 16칸': '16 sorted boxes', '가운데보다 큰 값 찾기': 'Looking for a value bigger than the middle', '왼쪽 범위를 한꺼번에 제외': 'The whole left range ruled out at once',
  '5번 이내로 찾는 수를 찾아 보세요. 남은 상자의 가운데를 여세요.': 'Find the target in 5 tries or fewer. Open the middle of the remaining boxes.',
  '새 문제로 바꿔 다시 5번 이내로 찾아 보세요.': 'Switch to a new problem and find it again in 5 tries or fewer.',
  // Step 3
  '크기가 커지면': 'When it grows',
  '데이터가 많을수록 차이가 커진다': 'The more data, the bigger the gap',
  '상자가 16개일 때는 16번과 5번의 차이지만, 100만 개라면 하나씩 찾기는 최악에 100만 번, 반씩 줄이기는 20번이면 됩니다. 같은 문제를 푸는 정확한 절차를 알고리즘이라고 하고, 어떤 알고리즘을 고르느냐에 따라 일의 양이 이렇게 달라집니다. 대신 반씩 줄이려면 먼저 정렬되어 있어야 합니다.':
    'With 16 boxes it is 16 tries against 5, but with a million, one by one takes a million in the worst case and halving only 20. An exact procedure for solving a problem is called an algorithm, and the algorithm you choose changes the amount of work this much. But halving needs the data sorted first.',
  '데이터 수를 바꾸면 두 기둥의 높이(최악일 때 여는 횟수)가 바뀝니다. 하나씩 찾기는 데이터 수만큼, 반씩 줄이기는 반으로 나눈 횟수만큼만 늘어납니다.':
    'Changing the data size changes the heights of the two columns (boxes opened in the worst case). One by one grows with the data size; halving grows only with the number of times it can be halved.',
  '"하나씩"과 "반씩" 두 기둥이 있습니다. 기둥 높이는 최악의 경우 상자를 여는 횟수이고, 데이터가 많아질수록 "하나씩" 기둥이 훨씬 빨리 높아집니다.':
    'There are two columns, "one by one" and "halving". Each height is the number of boxes opened in the worst case, and as the data grows the "one by one" column rises much faster.',
  '데이터가 두 배로 증가': 'The data doubles', '순차 탐색 범위도 두 배': 'Linear search range doubles too', '이진 탐색 깊이는 약 한 단계 증가': 'Binary search gets about one step deeper',
  '데이터를 1,000개로 늘려 두 방법의 횟수를 비교해 보세요.': 'Increase the data to 1,000 and compare the two methods\' counts.',
  '100만 개로 늘려 보세요.': 'Increase it to a million.',
};
