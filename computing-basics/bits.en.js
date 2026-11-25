// English for 0.1 Bits and binary. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '비트와 이진수 · 레슨 0.1': 'Bits and binary · Lesson 0.1',
  '스위치 8개를 켜고 끄며 비트와 이진수가 숫자를 나타내는 방법을 살펴보세요.': 'Turn eight switches on and off to see how bits and binary represent numbers.',
  '스위치 8개로 0부터 255까지 어떻게 셀까요? 스위치를 직접 켜고 끄며 살펴보세요.': 'How do eight switches count from 0 to 255? Turn them on and off to find out.',
  '스위치와 합계': 'Switches and sum',
  '스위치에서 합계로 값이 모이는 장면': 'Values flowing from the switches to the sum',
  '장면의 스위치를 눌러도 됩니다 · 확대 후 드래그로 이동': 'You can also press the switches in the scene · zoom in, then drag to move',
  '장면의 스위치를 눌러도 됩니다 · 두 손가락으로 확대': 'You can also press the switches in the scene · pinch to zoom',
  '값이 흐르는 선': 'Line a value flows along', '켜짐 = 1': 'On = 1', '꺼짐 = 0': 'Off = 0',
  '스위치 켜고 끄기': 'Turn switches on and off', '모두 끄기': 'All off', '1 더하기': 'Add 1', '이진수': 'Binary',
  // Scene
  '합계': 'Sum', '합계 · 최댓값': 'Sum · maximum', '자릿값': 'Place value',
  '→ 2가지': '→ 2 kinds', '→ 2 × 2 = 4가지': '→ 2 × 2 = 4 kinds', '→ 2⁸ = 256가지 (0~255)': '→ 2⁸ = 256 kinds (0–255)',
  '· 비트 8개 = 1바이트': '· 8 bits = 1 byte',
  '값 {0} 스위치, 켜짐': 'Switch worth {0}, on', '값 {0} 스위치, 꺼짐': 'Switch worth {0}, off',
  '값 {0} 스위치 켜짐. 합계 {1}': 'Switch worth {0} on. Sum {1}', '값 {0} 스위치 꺼짐. 합계 {1}': 'Switch worth {0} off. Sum {1}',
  '1을 더했습니다. 합계 {0}': 'Added 1. Sum {0}', '1을 더했습니다. 자리올림. 합계 {0}': 'Added 1. Carry. Sum {0}',
  '모두 껐습니다. 합계 {0}': 'All off. Sum {0}',
  // Step 1
  '스위치 하나': 'One switch',
  '스위치 하나는 두 가지를 나타낸다': 'One switch shows two things',
  '컴퓨터는 전기가 흐르는지 아닌지만 구별합니다. 꺼진 상태를 0, 켜진 상태를 1이라고 부르고, 이 한 칸을 비트(bit)라고 합니다. 비트 하나로는 0과 1, 두 가지만 나타낼 수 있습니다.':
    'A computer only tells whether current flows or not. We call the off state 0 and the on state 1, and this one slot is a bit. One bit can show only two things: 0 and 1.',
  '스위치가 켜지면 솟아오르며 불이 들어오고, 값 1이 선을 따라 합계로 갑니다. 꺼지면 선이 사라지고 합계는 0이 됩니다.':
    'When the switch turns on it pops up and lights, and the value 1 travels along the line to the sum. When it turns off the line disappears and the sum is 0.',
  '스위치 하나와 합계 화면이 있습니다. 스위치가 켜지면 값 1이 선을 따라 합계로 전달되고, 꺼지면 합계는 0입니다.':
    'There is one switch and a sum display. When the switch is on, the value 1 is sent along the line to the sum; when it is off, the sum is 0.',
  '스위치 꺼짐': 'Switch off', '하나를 켜면': 'Turn one on', '합계 0 → 1': 'Sum 0 → 1',
  '스위치를 눌러 1을 만들어 보세요.': 'Press the switch to make 1.',
  '이번에는 0으로 되돌려 보세요.': 'Now take it back to 0.',
  // Step 2
  '스위치 둘': 'Two switches',
  '스위치가 늘면 가짓수는 두 배가 된다': 'Each new switch doubles the possibilities',
  '스위치를 하나 더 놓으면 꺼짐과 켜짐의 조합이 00, 01, 10, 11 네 가지가 됩니다. 오른쪽 스위치는 1을, 왼쪽 스위치는 2를 맡습니다. 켜진 스위치의 값을 더하면 0부터 3까지 셀 수 있습니다.':
    'Add one more switch and the on and off combinations become four: 00, 01, 10 and 11. The right switch is worth 1 and the left switch is worth 2. Adding the values of the switches that are on counts from 0 to 3.',
  '1 다음에는 오른쪽 스위치가 꺼지고 왼쪽 스위치가 켜져 2가 됩니다. 한 자리가 가득 차면 옆자리로 넘어가는 자리올림이고, 그 순간 스위치 위에 점선 화살표가 나타납니다.':
    'After 1, the right switch turns off and the left switch turns on to make 2. When one place is full it moves into the next place; that is a carry, and a dashed arrow appears above the switches at that moment.',
  '스위치 두 개와 합계 화면이 있습니다. 왼쪽 스위치는 값 2, 오른쪽 스위치는 값 1을 맡고, 켜진 스위치의 값이 합계에 더해집니다.':
    'There are two switches and a sum display. The left switch is worth 2 and the right switch is worth 1, and the values of the switches that are on are added to the sum.',
  '스위치 두 개': 'Two switches', '각각 0 또는 1': 'Each 0 or 1', '조합 2 × 2 = 4개': '2 × 2 = 4 combinations',
  '스위치 두 개로 3을 만들어 보세요.': 'Make 3 with two switches.',
  '1을 만들어 보세요. 어느 스위치를 꺼야 할까요?': 'Make 1. Which switch has to go off?',
  // Step 3
  '자릿값': 'Place value',
  '각 스위치는 정해진 값을 맡는다': 'Each switch has a fixed value',
  '스위치 8개를 나란히 놓으면 오른쪽부터 1, 2, 4, 8, 16, 32, 64, 128을 맡습니다. 왼쪽으로 한 칸 갈 때마다 값이 두 배가 됩니다. 어떤 수든 켜진 스위치의 값을 모두 더한 것입니다. 4와 1을 켜면 5입니다.':
    'Put eight switches in a row and, from the right, they are worth 1, 2, 4, 8, 16, 32, 64 and 128. Each place to the left doubles the value. Any number is the sum of the values of the switches that are on. Turning on 4 and 1 makes 5.',
  '켜진 스위치에서만 값이 흘러나와 합계에 모입니다. 꺼진 스위치에는 선이 없습니다. 같은 수를 만드는 방법은 한 가지뿐입니다.':
    'Values flow only from switches that are on and gather at the sum. Switches that are off have no line. There is only one way to make each number.',
  '스위치 여덟 개가 한 줄로 놓여 있고 왼쪽부터 128, 64, 32, 16, 8, 4, 2, 1을 맡습니다. 켜진 스위치의 값만 선을 따라 합계 화면으로 모입니다.':
    'Eight switches stand in a row, worth 128, 64, 32, 16, 8, 4, 2 and 1 from the left. Only the values of the switches that are on travel along the lines to the sum display.',
  '4와 1 자리만 켬': 'Only the 4 and 1 places on', '합계 5': 'Sum 5',
  '19를 만들어 보세요.': 'Make 19.',
  '100을 만들어 보세요. 큰 값부터 골라 넣으면 쉽습니다.': 'Make 100. It is easier if you pick the big values first.',
  '200을 만들어 보세요.': 'Make 200.',
  // Step 4
  '0부터 255까지': 'From 0 to 255',
  '8개를 모두 켜면 255가 된다': 'All eight on makes 255',
  '0에서 시작해 1씩 더하면 스위치가 규칙적으로 바뀝니다. 가장 오른쪽 스위치는 매번 바뀌고, 왼쪽으로 갈수록 천천히 바뀝니다. 8개가 모두 켜지면 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255입니다. 0까지 세면 모두 256가지이고, 이 비트 8개 묶음을 바이트(byte)라고 합니다.':
    'Start at 0 and add 1 at a time, and the switches change in a pattern. The rightmost switch changes every time, and switches further left change more slowly. With all eight on, 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255. Counting 0, that is 256 kinds in all, and this group of eight bits is called a byte.',
  '255 다음 수는 스위치 8개로 나타낼 수 없습니다. 256을 세려면 아홉 번째 스위치가 필요합니다. +1 버튼으로 한 칸씩 세어 볼 수도 있습니다.':
    'The number after 255 cannot be shown with eight switches. Counting to 256 needs a ninth switch. You can also count one at a time with the +1 button.',
  '스위치 여덟 개가 0부터 1씩 올라가며 켜지고 꺼집니다. 여덟 개가 모두 켜지면 합계는 가장 큰 수인 255입니다.':
    'Eight switches turn on and off as the count goes up from 0 by 1. With all eight on, the sum is the largest number, 255.',
  '128 + 64 + … + 1': '128 + 64 + … + 1', '최댓값 255': 'Maximum 255',
  '스위치 하나만 켜서 128을 만들어 보세요.': 'Make 128 with only one switch on.',
  '128보다 1 작은 127을 만들어 보세요.': 'Make 127, one less than 128.',
  '스위치 8개로 만들 수 있는 가장 큰 수를 만들어 보세요.': 'Make the largest number eight switches can show.',
  // Practice feedback
  '스위치를 자유롭게 눌러 보세요.': 'Press the switches however you like.',
  '→ 2{0} = {1}가지 (0~{2})': '→ 2{0} = {1} kinds (0–{2})', '비트 8개 = 1바이트': '8 bits = 1 byte',
};
