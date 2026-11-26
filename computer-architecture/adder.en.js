// English for 3.2 Adders. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '덧셈기 · 레슨 3.2': 'Adders · Lesson 3.2',
  'XOR와 AND로 반가산기를, 반가산기와 전가산기를 이어 여러 자리 덧셈기를 만들며 올림이 번지는 모습을 살펴보세요.':
    'Build a half adder from XOR and AND, then chain half and full adders into a multi-digit adder, and watch the carry spread.',
  '게이트를 엮으면 어떻게 1 + 1을 계산할까요? 스위치로 두 수를 넣고 합과 올림이 램프에 켜지는 모습을 보세요.':
    'How do combined gates work out 1 + 1? Put in two numbers with the switches and watch the sum and carry light up on the lamps.',
  '두 수의 비트가 덧셈 회로를 지나 합과 올림 램프로 가는 장면': 'Bits of two numbers passing through an adding circuit to the sum and carry lamps',
  '스위치, 덧셈 회로, 램프': 'Switches, adding circuit, lamps', '램프': 'Lamps', '램프 켜짐 = 그 자리 1': 'Lamp on = 1 in that place', '진리표의 네 줄을 모두 직접 만들어 보세요.': 'Make all four rows of the truth table yourself.', '진리표의 여덟 줄을 모두 직접 만들어 보세요.': 'Make all eight rows of the truth table yourself.',
  // Switches, lamps and readouts
  '{0}의 {#1}의 자리, 켜짐 1': '{0} {1}s place, on 1', '{0}의 {#1}의 자리, 꺼짐 0': '{0} {1}s place, off 0',
  '{#0}의 자리': '{0}s place', '합': 'Sum', '올림': 'Carry', '합 S': 'Sum S', '올림 C': 'Carry C', '반가산기': 'Half adder', '전가산기': 'Full adder',
  '(이진수) · 올림 {#0}, 합 {#1}': '(binary) · carry {0}, sum {1}', '(이진수) = {#0}': '(binary) = {0}', '· 이진수 {0}': '· binary {0}',
  '{0} (이진수) · 올림 {#1}, 합 {#2}': '{0} (binary) · carry {1}, sum {2}', '{0} (이진수) = {#1}': '{0} (binary) = {1}', '{0} · 이진수 {1}': '{0} · binary {1}',
  '세로셈 · 위에 작게 쓴 수는 받아올림': 'Column addition · small numbers on top are carries',
  // Step 1
  '합 0 · 올림 1': 'Sum 0 · carry 1',
  '한 자리 덧셈은 게이트 두 개면 된다': 'Adding one digit takes just two gates',
  '이진수 한 자리끼리 더하면 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10입니다. 결과는 두 자리라서 이 자리에 남는 합(S)과 윗자리로 넘기는 올림(C)으로 나눕니다. 합은 두 입력이 다를 때 1이므로 3.1에서 만든 XOR, 올림은 둘 다 1일 때만 1이므로 AND입니다. 이 회로를 반가산기라고 합니다.':
    'Adding single binary digits gives 0 + 0 = 0, 0 + 1 = 1 and 1 + 1 = 10. The result has two digits, so it splits into a sum (S) that stays in this place and a carry (C) passed to the next place up. The sum is 1 when the two inputs differ, so it is the XOR built in 3.1; the carry is 1 only when both are 1, so it is AND. This circuit is called a half adder.',
  '1 + 1이면 XOR는 0, AND는 1을 내보내 올림 램프만 켜집니다. 램프 두 개를 올림, 합 순서로 읽으면 10, 곧 2입니다. 진리표의 올림 열은 AND, 합 열은 XOR의 진리표와 같습니다.':
    'With 1 + 1, XOR puts out 0 and AND puts out 1, so only the carry lamp lights. Reading the two lamps as carry then sum gives 10, which is 2. The carry column of the truth table matches AND, and the sum column matches XOR.',
  '스위치 A와 B가 위쪽 XOR와 아래쪽 AND로 갈라져 들어갑니다. XOR는 합 램프, AND는 올림 램프로 이어집니다.':
    'Switches A and B branch into an upper XOR and a lower AND. XOR leads to the sum lamp and AND to the carry lamp.',
  '1 + 1을 만들어 보세요. 어느 램프가 켜질까요?': 'Make 1 + 1. Which lamp will light?', '1 + 1 = 10입니다. 합은 0, 올림은 1입니다.': '1 + 1 = 10. The sum is 0 and the carry 1.',
  '합 램프만 켜 보세요.': 'Light only the sum lamp.', '0 + 1 = 01입니다. 두 입력이 다르면 XOR가 1을 냅니다.': '0 + 1 = 01. When the two inputs differ, XOR gives 1.',
  '올림 열은 AND, 합 열은 XOR와 같습니다.': 'The carry column matches AND and the sum column XOR.',
  // Step 2
  '1 + 1 + 올림 1': '1 + 1 + carry 1', '세 입력의 합은 3': 'The three inputs add up to 3', '합 1 · 올림 1': 'Sum 1 · carry 1',
  '아랫자리 올림까지 세 개를 더한다': 'Add three, including the carry from below',
  '두 자리 이상을 더하면 아랫자리에서 올라온 올림도 함께 더해야 합니다. 그래서 A, B에 올림 입력(Cin)을 더한 세 비트를 더하는 회로가 필요합니다. XOR 두 개가 세 비트의 합을, AND 두 개와 OR 하나가 새 올림을 만듭니다. 이것을 전가산기라고 합니다.':
    'Adding two or more digits means also adding the carry coming up from the place below. So a circuit is needed that adds three bits: A, B and a carry input (Cin). Two XORs make the sum of the three bits, and two ANDs and an OR make the new carry. This is called a full adder.',
  '1 + 1 + 1 = 11이라 합과 올림 램프가 모두 켜집니다. 신호가 XOR 두 개를 지나야 해서 합 램프는 게이트 두 번만큼, 올림 램프는 세 번만큼 늦게 바뀝니다.':
    '1 + 1 + 1 = 11, so both the sum and carry lamps light. The signal must pass two XORs, so the sum lamp changes two gates late and the carry lamp three.',
  '스위치 A, B, Cin이 있습니다. A와 B는 첫 XOR와 첫 AND로, 첫 XOR의 출력과 Cin은 둘째 XOR와 둘째 AND로 갑니다. 둘째 XOR는 합 램프로, 두 AND는 OR를 거쳐 올림 램프로 갑니다.':
    'There are switches A, B and Cin. A and B go to the first XOR and first AND; the first XOR\'s output and Cin go to the second XOR and second AND. The second XOR goes to the sum lamp, and the two ANDs go through an OR to the carry lamp.',
  '세 스위치를 모두 켜 보세요. 1 + 1 + 1은 얼마일까요?': 'Turn all three switches on. What is 1 + 1 + 1?',
  '1 + 1 + 1 = 11, 곧 3입니다. 두 램프가 모두 켜집니다.': '1 + 1 + 1 = 11, which is 3. Both lamps light.',
  'Cin을 켠 채로 올림 램프만 켜 보세요.': 'Light only the carry lamp while keeping Cin on.', '1 + 1이 Cin과 만나 10이 됐습니다.': '1 + 1 met Cin and became 10.',
  '켜진 스위치 수를 이진수로 쓴 것이 올림·합입니다.': 'Carry and sum are the number of switches on, written in binary.',
  // Step 3
  '두 자리 덧셈': 'Adding two digits', '아랫자리 올림을 윗자리로': 'The carry from below goes up a place',
  '덧셈기를 이어 붙이면 여러 자리를 더한다': 'Chaining adders adds several digits',
  '반가산기와 전가산기를 상자 하나로 묶어 생각해 봅시다. 1의 자리는 반가산기가 더하고, 거기서 나온 올림을 2의 자리 전가산기가 받아 함께 더합니다. 손으로 세로셈을 할 때 받아올림을 윗자리에 적는 것과 같습니다. 이제 두 자리 이진수(0–3)끼리 더할 수 있습니다.':
    'Think of the half adder and full adder as boxes. The half adder adds the 1s place, and the full adder for the 2s place takes the carry from it and adds it in. It is like writing the carry above the next place in column addition by hand. Now two-digit binary numbers (0–3) can be added.',
  '1 + 1이면 1의 자리 상자가 올림 1을 위쪽 상자로 보내고, 2의 자리 램프가 켜집니다. 결과는 램프 세 개라서 가장 큰 3 + 3 = 6(110)도 담을 수 있습니다.':
    'With 1 + 1, the 1s-place box sends a carry of 1 up to the box above, and the 2s-place lamp lights. The result has three lamps, so it can hold even the largest, 3 + 3 = 6 (110).',
  '아래 줄에는 A와 B의 1의 자리 스위치와 반가산기, 위 줄에는 2의 자리 스위치와 전가산기가 있습니다. 반가산기의 올림이 전가산기로 올라가고, 오른쪽 램프 세 개가 1, 2, 4의 자리를 보입니다.':
    'The lower row has A and B\'s 1s-place switches and a half adder; the upper row has the 2s-place switches and a full adder. The half adder\'s carry goes up to the full adder, and three lamps on the right show the 1s, 2s and 4s places.',
  '1 + 1을 만들어 보세요. 올림은 어디로 갈까요?': 'Make 1 + 1. Where does the carry go?',
  '01 + 01 = 10입니다. 1의 자리 올림이 2의 자리로 올라갔습니다.': '01 + 01 = 10. The carry from the 1s place went up to the 2s place.',
  '합이 4가 되는 덧셈을 하나 만들어 보세요.': 'Make an addition whose sum is 4.', '4의 자리 램프는 2의 자리에서 올림이 나올 때만 켜집니다.': 'The 4s-place lamp lights only when the 2s place produces a carry.',
  '가장 큰 덧셈 3 + 3을 만들어 보세요.': 'Make the largest addition, 3 + 3.', '11 + 11 = 110, 곧 6입니다.': '11 + 11 = 110, which is 6.',
  // Step 4
  '올림의 전달': 'Carry propagation', '올림이 세 자리를 통과': 'The carry passes through three places',
  '올림은 한 자리씩 차례로 번진다': 'The carry spreads one place at a time',
  '덧셈기 세 개를 이으면 세 자리 이진수(0–7)를 더할 수 있습니다. 상자마다 아랫자리 올림이 도착해야 답을 낼 수 있어서, 올림이 1의 자리에서 위로 한 칸씩 번져 갑니다. 이런 덧셈기를 리플 캐리(물결 올림) 덧셈기라고 합니다. 자리가 32개, 64개로 늘면 기다리는 시간도 길어지기 때문에 실제 CPU는 올림을 미리 계산하는 회로를 더 씁니다.':
    'Chaining three adders adds three-digit binary numbers (0–7). Each box can give its answer only once the carry from below arrives, so the carry spreads up one place at a time from the 1s place. This kind of adder is called a ripple-carry adder. With 32 or 64 places the wait grows longer, so real CPUs add circuits that work out carries ahead of time.',
  '7 + 1을 만들면 1의 자리 상자부터 올림이 위로 하나씩 넘어가고, 8의 자리 램프가 가장 늦게 켜집니다. 3 + 4처럼 올림이 없는 덧셈은 모든 램프가 거의 함께 바뀝니다.':
    'Make 7 + 1 and the carry passes up one box at a time from the 1s place, with the 8s-place lamp lighting last. An addition with no carry, like 3 + 4, changes all the lamps almost together.',
  '아래부터 1, 2, 4의 자리 덧셈기가 오른쪽 위로 비스듬히 놓여 있고, 각 상자의 올림이 위 상자로 올라갑니다. 오른쪽 램프 네 개가 1, 2, 4, 8의 자리를 보입니다.':
    'From the bottom, the adders for the 1s, 2s and 4s places sit on a slant up to the right, and each box\'s carry goes up to the box above. Four lamps on the right show the 1s, 2s, 4s and 8s places.',
  '7 + 1을 만들고 올림이 번지는 모습을 보세요.': 'Make 7 + 1 and watch the carry spread.',
  '111 + 001 = 1000입니다. 올림이 세 칸을 건너 8의 자리 램프가 마지막에 켜졌습니다.': '111 + 001 = 1000. The carry crossed three places and the 8s-place lamp lit last.',
  '올림이 한 번도 생기지 않게 합이 7인 덧셈을 만들어 보세요.': 'Make an addition that sums to 7 without a single carry.',
  '같은 자리에 1이 겹치지 않으면 올림이 없습니다.': 'If no place has 1 in both, there is no carry.',
  '가장 큰 덧셈 7 + 7을 만들어 보세요.': 'Make the largest addition, 7 + 7.', '111 + 111 = 1110, 곧 14입니다.': '111 + 111 = 1110, which is 14.',
  "올림을 받은 자리부터 다음 계산을 한다": "Each place waits for its carry-in",
  "111 더하기 001에서 1, 2, 4의 자리가 차례로 1을 올리고 8의 자리만 켜집니다.": "In 111 plus 001, the ones, twos and fours send carries in order, leaving only the eights bit set.",
  "1의 자리": "Ones",
  "2의 자리": "Twos",
  "4의 자리": "Fours",
  "8의 자리": "Eights",
  "하위 세 자리의 합은 모두 0 → 결과 1000": "The three low sum bits are 0 → result 1000",
};
