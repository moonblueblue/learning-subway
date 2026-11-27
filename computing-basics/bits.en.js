// English for 0.1 Bits and binary. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  "1 자리에서 2 자리로 올림이 간다": "A carry moves from the ones place to the twos place",
  "5에서 1을 더합니다. 오른쪽 1 자리는 이미 켜져 있으므로 0으로 바꾸고, 바로 왼쪽 2 자리를 켭니다. 켜져 있던 4 자리는 그대로입니다.": "Add 1 to 5. The ones place is already on, so turn it off and turn on the twos place just to its left. The fours place stays on.",
  "결과는 4 + 2 = 6입니다. 4 자리는 그대로이고 오른쪽 두 자리만 바뀌었습니다.": "The result is 4 + 2 = 6. The fours place stays the same and only the two rightmost places change.",
  "1 자리를 끄고 2 자리를 켬": "Turn off ones and turn on twos",
  "더하기 전": "Before",
  "더한 뒤": "After",
  "올림": "Carry",
  "4 자리": "Fours",
  "2 자리": "Twos",
  "1 자리": "Ones",
  "5에서 1을 더해 6을 만들어 보세요.": "Add 1 to 5 to make 6.",
  '꺼짐': 'Off', '켜짐': 'On', '누르기': 'Press',
  '모두 꺼짐': 'All off', '모두 켜짐': 'All on',
  '1비트 · 2가지': '1 bit · 2 states', '새 2 자리': 'New twos place',
  '왼쪽 꺼짐': 'Left off', '왼쪽 켜짐': 'Left on',
  '2 × 2 = 4가지': '2 × 2 = 4 states',
  '255 − 0 + 1 = 256가지': '255 − 0 + 1 = 256 values', '8비트 = 1바이트': '8 bits = 1 byte',
  '같은 1 자리에서 스위치를 누르면 꺼진 0이 켜진 1로 바뀌고 합계도 0에서 1이 됩니다.':
    'Pressing the switch in the same ones place changes off (0) to on (1) and the sum from 0 to 1.',
  '왼쪽에 2 자리를 놓아도 오른쪽 스위치의 자릿값은 1입니다. 스위치 쌍 00, 01, 10, 11의 합계는 차례로 0, 1, 2, 3입니다.':
    'Adding the twos place on the left keeps the right switch worth 1. Switch pairs 00, 01, 10 and 11 sum to 0, 1, 2 and 3 respectively.',
  '여덟 스위치에서 켜진 4 자리와 1 자리의 선만 합계 5에 닿습니다. 꺼진 2 자리의 기여는 0입니다.':
    'Only the lines from the lit fours and ones places reach the sum of 5. The twos place is off and contributes 0.',
  '1 자리에 1을 더하면 1이 0으로 바뀌고 점선 화살표가 왼쪽 2 자리로 올림을 보냅니다. 2 자리는 0에서 1, 4 자리는 1을 유지하며 합계는 6이 됩니다.':
    'Adding 1 at the ones place changes its 1 to 0. The dashed arrow carries into the twos place on the left. The twos place changes from 0 to 1, the fours place stays at 1, and the sum is 6.',
  '같은 여덟 자리의 모두 꺼짐은 0, 모두 켜짐은 255입니다. 두 끝을 포함하면 255 빼기 0 더하기 1로 256가지입니다.':
    'The same eight places show 0 with all switches off and 255 with them all on. Counting both endpoints gives 255 minus 0 plus 1, or 256 values.',
  // Page
  '비트와 이진수 · 레슨 0.1': 'Bits and binary · Lesson 0.1',
  '스위치 8개를 켜고 끄며 비트와 이진수가 숫자를 나타내는 방법을 살펴보세요.': 'Turn eight switches on and off to see how bits and binary represent numbers.',
  '스위치 8개로 0부터 255까지 어떻게 셀까요? 스위치를 직접 켜고 끄며 살펴보세요.': 'How do eight switches count from 0 to 255? Turn them on and off to find out.',
  '스위치와 합계': 'Switches and sum',
  '스위치에서 합계로 값이 모이는 장면': 'Values flowing from the switches to the sum',
  
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
  '컴퓨터는 비트 하나에 두 상태를 기록합니다. 스위치의 꺼짐을 0, 켜짐을 1이라고 부르고, 이 한 칸을 비트(bit)라고 합니다. 비트 하나로는 0과 1, 두 가지만 나타낼 수 있습니다.':
    'A computer stores one of two states in a bit. Treat this switch as one bit, with off called 0 and on called 1. One bit has two possible values: 0 and 1.',
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
  '오른쪽 1 자리는 그대로 두고 그 왼쪽에 값 2인 스위치를 놓습니다. 왼쪽이 꺼져 있을 때도 켜져 있을 때도 오른쪽은 0 또는 1일 수 있습니다. 그래서 두 자리로 0부터 3까지 셉니다.':
    'Keep the ones place on the right and add a switch worth 2 to its left. With the left switch off or on, the right switch can be 0 or 1. The two places can count from 0 to 3.',
  '왼쪽 스위치가 0이면 두 합계는 0과 1입니다. 왼쪽이 1이면 오른쪽 두 상태에 각각 2가 더해져 합계가 2와 3이 됩니다.':
    'With the left switch at 0, the sums are 0 and 1. Turning it on adds 2 to each state on the right, giving sums of 2 and 3.',
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
