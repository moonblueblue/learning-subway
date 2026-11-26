// English for 3.1 Logic gates. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  'XOR 램프': 'XOR lamp',
  // Page
  '논리 게이트 · 레슨 3.1': 'Logic gates · Lesson 3.1',
  '스위치를 켜고 끄며 AND, OR, NOT 게이트가 신호를 어떻게 바꾸는지 진리표와 함께 살펴보세요.':
    'Turn switches on and off and see, with truth tables, how AND, OR and NOT gates change a signal.',
  'AND, OR, NOT은 신호를 어떻게 바꿀까요? 스위치를 켜고 끄며 램프가 언제 켜지는지 찾아보세요.':
    'How do AND, OR and NOT change a signal? Turn the switches on and off and find out when the lamp lights.',
  '스위치 신호가 게이트를 지나 램프로 가는 장면': 'Switch signals passing through gates to a lamp',
  '스위치, 게이트, 램프': 'Switches, gates, lamp', '스위치 {0} 켜짐. 램프 켜짐.': 'Switch {0} on. Lamp on.', '스위치 {0} 켜짐. 램프 꺼짐.': 'Switch {0} on. Lamp off.',
  '스위치 {0} 꺼짐. 램프 켜짐.': 'Switch {0} off. Lamp on.', '스위치 {0} 꺼짐. 램프 꺼짐.': 'Switch {0} off. Lamp off.',
  '→ 램프 켜짐': '→ lamp on', '→ 램프 꺼짐': '→ lamp off', '램프 {#0}': 'Lamp {0}',
  '스위치 1 1. 램프 1.': 'Switches 1 1. Lamp 1.', '스위치 1, 1': 'Switches 1, 1',
  '진리표의 네 줄을 모두 직접 만들어 보세요.': 'Make all four rows of the truth table yourself.',
  '입력 0': 'Input 0', '입력 1과 0': 'Inputs 1 and 0', '입력 1과 1': 'Inputs 1 and 1',
  // Step 1
  'NOT이 신호를 반전': 'NOT flips the signal',
  'NOT은 신호를 뒤집는다': 'NOT flips the signal',
  '논리 게이트는 0과 1을 받아서 0이나 1을 내보내는 작은 회로입니다. 가장 단순한 NOT 게이트는 입력 하나를 받아 반대로 바꿉니다. 스위치 A가 꺼져 있으면(0) 램프가 켜지고(1), A를 켜면 램프가 꺼집니다.':
    'A logic gate is a small circuit that takes 0s and 1s and puts out 0 or 1. The simplest, the NOT gate, takes one input and turns it into its opposite. With switch A off (0) the lamp is on (1), and turning A on turns the lamp off.',
  'A가 0이면 NOT 뒤의 선에 1이 흘러 램프가 켜집니다. A를 켜면 1이 NOT까지 간 뒤 멈추고, 그 뒤 선은 점선(0)이 됩니다. 입력이 하나라 진리표는 두 줄뿐입니다.':
    'When A is 0, 1 flows on the line after NOT and the lamp lights. Turn A on and the 1 goes as far as NOT and stops, and the line after it becomes dotted (0). There is one input, so the truth table has only two rows.',
  '스위치 A에서 나온 선이 NOT 게이트를 지나 램프로 이어집니다. A가 꺼지면 램프가 켜지고, A가 켜지면 램프가 꺼집니다.':
    'The line from switch A passes through a NOT gate to the lamp. When A is off the lamp is on, and when A is on the lamp is off.',
  '스위치를 눌러 램프를 꺼 보세요.': 'Press the switch to turn the lamp off.', '다시 램프를 켜 보세요.': 'Turn the lamp on again.',
  'A = 1이면 NOT은 0을 내보냅니다.': 'When A = 1, NOT puts out 0.', 'A = 0이면 NOT은 1을 내보냅니다.': 'When A = 0, NOT puts out 1.',
  // Step 2
  'AND는 둘 다 1일 때 켜짐': 'AND lights when both are 1', 'AND는 둘 다 1일 때만 1': 'AND is 1 only when both are 1',
  'AND 게이트는 입력 두 개를 받아, 둘 다 1일 때만 1을 내보냅니다. 스위치 두 개를 한 줄로 이어 놓은 전등과 같습니다. 하나라도 꺼져 있으면 전기가 끝까지 가지 못합니다. 2.1에서 본 "그리고"와 같은 규칙입니다.':
    'An AND gate takes two inputs and puts out 1 only when both are 1. It is like a light with two switches wired one after the other: if either is off, the electricity cannot get through. It is the same rule as "and" in 2.1.',
  'A와 B 중 하나만 켜면 1이 AND까지는 가지만 그 뒤 선은 0으로 남습니다. 진리표 네 줄 가운데 램프가 켜지는 줄은 1, 1 하나뿐입니다.':
    'Turn on only one of A and B, and the 1 reaches AND but the line after it stays 0. Of the four truth-table rows, the only one where the lamp lights is 1, 1.',
  '스위치 A와 B의 선이 AND 게이트로 모이고, AND에서 램프로 선이 이어집니다. 두 스위치가 모두 켜졌을 때만 램프가 켜집니다.':
    'The lines from switches A and B meet at an AND gate, and a line runs from AND to the lamp. The lamp lights only when both switches are on.',
  '램프를 켜 보세요.': 'Turn the lamp on.', '1 AND 1 = 1입니다.': '1 AND 1 = 1.',
  'B는 켠 채로 램프를 꺼 보세요.': 'Turn the lamp off while keeping B on.', '0 AND 1 = 0입니다. 하나만 켜져서는 부족합니다.': '0 AND 1 = 0. One switch on is not enough.',
  '램프가 켜진 줄은 1, 1 하나뿐입니다.': 'The only row with the lamp on is 1, 1.',
  // Step 3
  'OR는 하나만 1이어도 켜짐': 'OR lights even when only one is 1', 'OR는 하나라도 1이면 1': 'OR is 1 when at least one is 1',
  'OR 게이트는 입력 중 하나라도 1이면 1을 내보냅니다. 스위치 두 개를 나란히 이어 놓은 전등과 같아서, 어느 쪽으로든 전기가 지나가면 램프가 켜집니다. 둘 다 0일 때만 꺼집니다.':
    'An OR gate puts out 1 when at least one input is 1. It is like a light with two switches wired side by side: electricity getting through either way lights the lamp. It is off only when both are 0.',
  '스위치 하나만 켜도 OR 뒤의 선이 켜집니다. 진리표를 AND와 비교해 보세요. AND는 켜지는 줄이 하나, OR는 꺼지는 줄이 0, 0 하나뿐입니다.':
    'Turning on just one switch lights the line after OR. Compare the truth table with AND: AND has one row that lights, OR has only one row that is off, 0, 0.',
  '스위치 A와 B의 선이 OR 게이트로 모이고, OR에서 램프로 선이 이어집니다. 스위치가 하나라도 켜지면 램프가 켜집니다.':
    'The lines from switches A and B meet at an OR gate, and a line runs from OR to the lamp. The lamp lights when at least one switch is on.',
  '스위치 하나만 켜서 램프를 켜 보세요.': 'Turn the lamp on with only one switch on.', '하나만 1이어도 OR는 1입니다.': 'OR is 1 even when only one is 1.',
  '램프를 꺼 보세요.': 'Turn the lamp off.', '0 OR 0 = 0입니다. 둘 다 꺼야 꺼집니다.': '0 OR 0 = 0. Both must be off for it to go off.',
  '램프가 꺼진 줄은 0, 0 하나뿐입니다.': 'The only row with the lamp off is 0, 0.',
  // Step 4
  '게이트 엮기': 'Combining gates', '둘 다 켜진 경우를 제외': 'Leave out the case where both are on', 'XOR 램프 0': 'XOR lamp 0',
  '게이트를 엮으면 새 규칙이 된다': 'Combining gates makes a new rule',
  'OR, AND, NOT을 엮으면 "둘 중 하나만 1일 때 1"인 새 규칙이 생깁니다. 이것을 XOR(배타적 OR)라고 합니다. 위쪽 OR는 "하나라도 켜졌나"를, 아래쪽 AND와 NOT은 "둘 다 켜진 건 아닌가"를 확인하고, 마지막 AND가 두 답을 합칩니다.':
    'Combining OR, AND and NOT gives a new rule: "1 when exactly one of the two is 1". This is called XOR (exclusive OR). The upper OR checks "is at least one on?", the lower AND and NOT check "are they not both on?", and the last AND joins the two answers.',
  '두 스위치를 모두 켜면 위쪽 OR는 1이지만 아래쪽 NOT이 0을 내보내 램프가 꺼집니다. 이진수 1 + 1 = 10의 일의 자리도 0입니다. 다음 레슨의 덧셈기에서 이 XOR가 일의 자리를 계산합니다.':
    'With both switches on, the upper OR is 1 but the lower NOT puts out 0, so the lamp goes off. The ones digit of binary 1 + 1 = 10 is 0 too. In the next lesson\'s adder, this XOR works out the ones digit.',
  '스위치 A와 B가 위쪽 OR와 아래쪽 AND로 갈라져 들어갑니다. 아래쪽 AND 뒤에는 NOT이 있고, OR와 NOT의 출력이 마지막 AND로 모여 램프로 갑니다. 스위치가 하나만 켜졌을 때만 램프가 켜집니다.':
    'Switches A and B branch into an upper OR and a lower AND. After the lower AND comes a NOT, and the outputs of OR and NOT meet at a last AND that goes to the lamp. The lamp lights only when exactly one switch is on.',
  '스위치가 하나만 켜졌을 때 XOR는 1입니다.': 'XOR is 1 when exactly one switch is on.',
  '두 스위치를 모두 켜 보세요. 램프는 어떻게 될까요?': 'Turn both switches on. What happens to the lamp?',
  '1과 1이면 OR는 1이지만 NOT이 0을 보내 램프가 꺼집니다.': 'With 1 and 1, OR is 1 but NOT sends 0, so the lamp goes off.',
  '두 입력이 서로 다를 때만 램프가 켜집니다.': 'The lamp lights only when the two inputs differ.',
  "B 하나만 바꾸면 XOR가 켜진다": "Changing B alone turns XOR on",
  "두 입력 조합에서 OR와 AND의 출력, NOT의 출력, 마지막 램프를 비교합니다.": "Compare the OR, AND and NOT outputs and the final lamp for two inputs.",
  "램프 꺼짐": "Lamp off",
  "램프 켜짐": "Lamp on",
};
