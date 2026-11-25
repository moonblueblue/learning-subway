// English for 3.3 The ALU. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'ALU · 레슨 3.3': 'The ALU · Lesson 3.3',
  '선택기로 신호를 고르고, 여러 연산을 한꺼번에 계산해 하나를 고르는 ALU와 플래그를 직접 조작해 보세요.':
    'Pick signals with a selector, and work hands-on with an ALU that computes several operations at once and picks one, along with its flags.',
  '계산기 회로는 어떻게 여러 연산 중 하나를 고를까요? 선택기에서 시작해 수 두 개와 연산 하나를 받는 ALU까지 만들어 보세요.':
    'How does a calculator circuit pick one of several operations? Start from a selector and build up to an ALU that takes two numbers and one operation.',
  '입력과 연산 신호가 선택기와 ALU를 지나 출력으로 가는 장면': 'Inputs and an operation signal passing through a selector and an ALU to the output',
  '입력, 계산 회로, 출력': 'Inputs, computing circuit, output', '연산 고르기': 'Choose the operation', '장면의 스위치와 연산 다이얼을 눌러도 됩니다 · 확대 후 드래그로 이동': 'You can also press the switches and the operation dial in the scene · zoom in, then drag to move',
  '장면의 스위치와 연산 다이얼을 눌러도 됩니다 · 두 손가락으로 확대': 'You can also press the switches and the operation dial in the scene · pinch to zoom',
  // Nodes, readouts and announcements
  '선택 S': 'Select S', '출력': 'Output', '결과': 'Result', '연산': 'Operation', '플래그': 'Flags', 'Z 결과가 0': 'Z result is 0', 'C 올림·빌림': 'C carry or borrow',
  '연산 {0}': 'Operation {0}', '연산 {0}.': 'Operation {0}.', '연산 {0}. {1}': 'Operation {0}. {1}',
  '결과 {#0}': 'Result {0}', '결과 = {0} ({#1})': 'result = {0} ({1})',
        'S = {#0} → D{#1}을 고름 · 출력 = D{#2} =': 'S = {0} → picks D{1} · output = D{2} =',
  'S = {#0} → D{#1}을 고름 · 출력 = D{#2} = {#3}': 'S = {0} → picks D{1} · output = D{2} = {3}',
  '· 이진수 {0}': '· binary {0}', '{0} · 이진수 {1}': '{0} · binary {1}', '{0} → 결과': '{0} → result', '{0} → 결과 {1}': '{0} → result {1}',
  // Step 1
  '선택기': 'Selector', '선택 S = 1': 'Select S = 1', '출력 D1 = 1': 'Output D1 = 1',
  '선택 신호 하나로 둘 중 하나를 고른다': 'One select signal picks one of two',
  '계산기는 더하기, 빼기, AND 같은 여러 연산 중 하나를 골라야 합니다. 고르는 일을 하는 회로가 선택기(멀티플렉서)입니다. 입력 D0, D1과 선택 신호 S가 있고, S가 0이면 D0이, 1이면 D1이 출력으로 나갑니다. NOT, AND 두 개, OR 하나로 만들 수 있습니다.':
    'A calculator has to pick one of several operations, such as add, subtract or AND. The circuit that does the picking is a selector (multiplexer). It has inputs D0 and D1 and a select signal S: when S is 0, D0 goes to the output; when 1, D1 does. It can be made from a NOT, two ANDs and an OR.',
  'S가 0이면 NOT이 위쪽 AND에 1을 주어 D0만 통과시킵니다. S가 1이면 아래쪽 AND가 열려 D1만 통과합니다. 고르지 않은 쪽은 AND에서 막혀 0이 됩니다.':
    'When S is 0, NOT gives the upper AND a 1 and only D0 gets through. When S is 1, the lower AND opens and only D1 gets through. The side not picked is blocked at its AND and becomes 0.',
  '입력 D0, D1과 선택 S가 있습니다. D0은 S를 뒤집은 값과 위쪽 AND로, D1은 S와 아래쪽 AND로 들어갑니다. 두 AND는 OR로 모여 출력 램프로 갑니다.':
    'There are inputs D0 and D1 and select S. D0 goes into the upper AND with S flipped; D1 goes into the lower AND with S. The two ANDs meet at an OR that goes to the output lamp.',
  'S를 0으로 두고 출력 램프를 켜 보세요.': 'With S at 0, turn the output lamp on.', 'S = 0이면 D0이 그대로 나갑니다.': 'When S = 0, D0 goes out as it is.',
  'D0은 켜 둔 채로 출력 램프를 꺼 보세요.': 'Turn the output lamp off while keeping D0 on.', 'S를 1로 바꾸면 D0은 막히고 꺼진 D1이 나갑니다.': 'Switching S to 1 blocks D0, and D1, which is off, goes out.',
  'D0은 끄고 S = 1에서 출력 램프를 켜 보세요.': 'With D0 off and S = 1, turn the output lamp on.', '이제 D1이 출력을 정합니다.': 'Now D1 decides the output.',
  // Step 2
  '1비트 ALU': '1-bit ALU', 'AND 대신 XOR 선택': 'Pick XOR instead of AND', '출력 1 → 0': 'Output 1 → 0',
  '모든 연산을 한꺼번에 하고, 하나를 고른다': 'Do every operation at once, then pick one',
  'A와 B를 AND, OR, XOR 게이트에 동시에 넣으면 세 결과가 한꺼번에 나옵니다. 그중 무엇을 내보낼지는 연산 신호를 받은 선택기가 정합니다. 이렇게 여러 연산을 하고 하나를 고르는 회로가 ALU(산술 논리 장치)의 뼈대입니다.':
    'Feed A and B into AND, OR and XOR gates at the same time and three results come out at once. Which to send out is decided by a selector that receives the operation signal. A circuit that does several operations and picks one like this is the skeleton of an ALU (arithmetic logic unit).',
  '연산만 바꾸면 스위치는 그대로인데 출력이 바뀝니다. 진리표에는 세 게이트의 결과가 모두 있고, 지금 고른 열에 테두리가 생깁니다. 선택기로 들어가는 선 중 고르지 않은 선은 흐리게 보입니다.':
    'Change only the operation and the output changes while the switches stay the same. The truth table has the results of all three gates, with a border on the column picked now. Lines into the selector that are not picked are shown faded.',
  '스위치 A와 B가 AND, OR, XOR 게이트로 갈라져 들어가고, 세 결과가 선택기로 모입니다. 연산 다이얼에서 나온 주황 선이 선택기에 어떤 결과를 고를지 알려 줍니다.':
    'Switches A and B branch into AND, OR and XOR gates, and the three results meet at a selector. An orange line from the operation dial tells the selector which result to pick.',
  'A = 1, B = 1로 두고 연산만 바꿔서 출력 램프를 꺼 보세요.': 'With A = 1 and B = 1, turn the output lamp off by changing only the operation.', 'XOR는 두 입력이 같으면 0입니다.': 'XOR is 0 when the two inputs are the same.',
  'A = 1, B = 0에서 AND를 골라 보세요. 램프는 어떻게 될까요?': 'With A = 1 and B = 0, pick AND. What happens to the lamp?', '1 AND 0 = 0. OR나 XOR였다면 켜졌을 것입니다.': '1 AND 0 = 0. With OR or XOR it would have lit.',
  'OR를 고른 채로 출력 램프를 꺼 보세요.': 'Turn the output lamp off with OR picked.', 'OR는 둘 다 0일 때만 0입니다.': 'OR is 0 only when both are 0.',
  // Step 3
  'ALU 상자': 'The ALU box', '더하기 선택': 'Pick add',
  'ALU는 수 두 개와 연산 하나를 받는다': 'An ALU takes two numbers and one operation',
  '자리마다 1비트 ALU를 놓고 덧셈의 올림을 이어 주면 여러 자리 수를 계산하는 ALU가 됩니다. 이제 안을 상자로 감추고 A, B 두 수와 연산만 생각합시다. 굵은 선은 비트 여러 개를 한꺼번에 나르는 버스입니다. 여기서는 3비트라 0부터 7까지 다룹니다.':
    'Put a 1-bit ALU at each place and link up the adding carries, and you have an ALU that computes numbers with several places. Now hide the inside in a box and think only of the two numbers A and B and the operation. A thick line is a bus that carries several bits at once. Here it is 3 bits, handling 0 to 7.',
  '같은 A, B라도 연산 다이얼에 따라 결과가 달라집니다. 아래 표처럼 ALU 안에서는 네 연산이 모두 계산되고, 그중 고른 하나만 결과 칸으로 나옵니다. 결과가 8 이상이면 3비트에 들어가지 않아 앞자리가 잘립니다.':
    'With the same A and B, the result depends on the operation dial. As in the table below, all four operations are computed inside the ALU and only the one picked comes out to the result box. A result of 8 or more does not fit in 3 bits, so the top place is cut off.',
  '왼쪽에 수 A와 B 칸, 아래에 연산 다이얼이 있습니다. A와 B의 굵은 버스와 다이얼의 주황 선이 ALU 상자로 들어가고, ALU에서 나온 버스가 결과 칸으로 갑니다.':
    'On the left are the boxes for numbers A and B, and below is the operation dial. The thick buses from A and B and the orange line from the dial go into the ALU box, and a bus from the ALU goes to the result box.',
  'ALU 안에서 함께 계산된 결과': 'Results computed together inside the ALU',
  '5 + 2를 계산해 보세요.': 'Work out 5 + 2.', '101 + 010 = 111, 곧 7입니다.': '101 + 010 = 111, which is 7.',
  '6 AND 3을 계산해 보세요. 이진수로 겹치는 자리는?': 'Work out 6 AND 3. Which places overlap in binary?',
  '110 AND 011 = 010, 곧 2입니다. 둘 다 1인 자리만 남습니다.': '110 AND 011 = 010, which is 2. Only the places where both are 1 remain.',
  '같은 두 수로 ADD와 OR의 결과가 같아지게 해 보세요.': 'Make ADD and OR give the same result for the same two numbers.',
  '같은 자리에 1이 겹치지 않으면 올림이 없어서 더하기와 OR가 같습니다.': 'If no place has 1 in both, there is no carry, so adding and OR are the same.',
  // Step 4
  'A와 B가 같은 값': 'A and B are equal', '두 수를 빼면 0': 'Subtracting gives 0', 'Z 램프 켜짐': 'Z lamp on',
  '결과에 대한 질문도 함께 답한다': 'It also answers questions about the result',
  'ALU는 결과와 함께 플래그라는 비트 몇 개를 냅니다. Z(제로)는 결과가 0이면 1, C(캐리)는 덧셈에서 올림이 넘치거나 뺄셈에서 빌려 와야 할 때 1입니다. CPU는 A − B를 해 보고 Z가 켜지면 "같다", C가 켜지면 "A가 더 작다"고 판단합니다. 1.2의 if 문도 이렇게 비교합니다.':
    'Along with the result, an ALU puts out a few bits called flags. Z (zero) is 1 when the result is 0, and C (carry) is 1 when an addition\'s carry overflows or a subtraction has to borrow. The CPU works out A − B and judges "equal" if Z lights and "A is smaller" if C lights. The if statements in 1.2 compare this way too.',
  'SUB에서 A = B이면 결과 0과 함께 Z 램프가 켜집니다. A < B이면 3비트 안에서 한 바퀴 돌아 큰 수가 나오고 C 램프가 켜집니다. 7 + 1은 결과가 0이 되면서 Z와 C가 함께 켜집니다.':
    'In SUB, A = B gives a result of 0 and the Z lamp lights. A < B wraps round within 3 bits to give a large number, and the C lamp lights. 7 + 1 gives a result of 0, so Z and C light together.',
  '3단계 ALU에 램프 두 개가 더 붙었습니다. ALU 오른쪽 위의 Z 램프는 결과가 0인지, 오른쪽 아래의 C 램프는 올림이나 빌림이 있었는지 보입니다.':
    'Two more lamps are attached to the ALU from step 3. The Z lamp at the ALU\'s upper right shows whether the result is 0, and the C lamp at its lower right shows whether there was a carry or borrow.',
  'SUB를 골라 Z 램프를 켜 보세요.': 'Pick SUB and light the Z lamp.', 'A − B = 0, 곧 A와 B가 같습니다.': 'A − B = 0, so A and B are equal.',
  'SUB로 C 램프를 켜 보세요. A와 B 중 어느 쪽이 커야 할까요?': 'Light the C lamp with SUB. Which of A and B must be larger?',
  'A가 B보다 작으면 빌림이 생겨 C가 켜집니다.': 'When A is smaller than B, a borrow happens and C lights.',
  'ADD로 Z와 C 램프를 동시에 켜 보세요.': 'Light the Z and C lamps together with ADD.', '합이 정확히 8이면 3비트에는 000만 남고 올림이 넘칩니다.': 'When the sum is exactly 8, only 000 is left in 3 bits and the carry overflows.',
};
