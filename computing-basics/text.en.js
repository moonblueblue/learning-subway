// English for 0.2 Representing text. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Hangul syllables this lesson encodes (가, 각, 쁁 …) are data and stay as they are.
window.lessonKeep = ['[가-힣](?=$|\\s|[’”"·,)])', '^[가-힣]$'];
window.lessonText = {
  '44032를 쓴 16비트': '16 bits that write 44032',
  '번호를 쓴 16비트': '16 bits for the number',
  'UTF-8 예 ·': 'UTF-8 examples ·',
  'A 65는 1바이트': 'A (65) uses 1 byte',
  '가 44032는 3바이트': '가 (44032) uses 3 bytes',
  '실행 장면에서도 같은 65를 두 번호표로 읽습니다. 같은 표는 A, 바꾼 예시 표는 B를 냅니다.':
    'The live scene reads 65 with two tables. The same table gives A. The different example table gives B.',
  '글자의 번호표': 'Number tables for characters',
  '0장 컴퓨팅 둘러보기': 'Chapter 0 · A tour of computing',
  '같은 번호표': 'Same number table',
  '다른 예시 번호표': 'Different example table',
  '번호표 선택 전': 'Choose a number table',
  '보낸 글자': 'Sent letter',
  '받은 번호': 'Received number',
  '받는 번호표': 'Receiver’s table',
  '나온 글자': 'Shown letter',
  '같은 번호표를 쓰면 같은 글자를 읽습니다': 'The same number table gives the same letter',
  '두 줄 모두 보내는 사람이 A에 해당하는 번호 65를 보냅니다. 같은 번호표는 65를 A로 읽습니다. 다른 예시 번호표는 65를 B로 읽어서 보내려던 글자와 달라집니다.':
    'In both rows, the sender sends 65 for A. The matching table reads 65 as A. The different example table reads 65 as B, which changes the letter.',
  '보낸 글자 A': 'Sent letter A',
  '같은 번호 65를 두 표로 읽기': 'Read the same 65 with two tables',
  '같은 표의 A · 다른 표의 B': 'A with the same table · B with the other table',
  '보내는 쪽과 받는 쪽은 같은 번호표를 써야 합니다': 'Sender and receiver need to use the same number table',
  '글자 A를 보낼 때 표에서 번호 65를 찾습니다. 받는 사람이 같은 표를 보면 65에서 A를 찾습니다. 번호표를 바꾸면 같은 65도 다른 글자가 됩니다. 실제 ASCII 표에서 A는 65번, a는 97번입니다.':
    'To send A, find the number 65 in the table. A receiver with the same table finds A from 65. With a different table, the same 65 may give a different letter. In the real ASCII table, A is 65 and a is 97.',
  '두 줄에서 받은 번호는 65로 같습니다. 달라진 받는 번호표를 지나 오른쪽에 나온 A와 B를 확인하세요.':
    'Both rows receive 65. Follow the different tables to A and B on the right.',
  '실행 장면은 ASCII의 65를 여덟 자리로 표시합니다. A와 a를 오가는 동안 값 32를 맡은 스위치 하나만 바뀝니다.':
    'The live scene shows ASCII 65 in eight bits. When it switches between A and a, only the switch worth 32 changes.',
  '보낸 번호 65를 어느 표로 읽을지 선택해 보세요.': 'Choose which table should read the number 65.',
  '보낸 65를 같은 번호표에서 찾았습니다. 화면에 A가 나옵니다.': 'You read 65 in the matching table. The screen shows A.',
  '보낸 65를 다른 예시 번호표에서 찾았습니다. 화면에 B가 나옵니다.': 'You read 65 in the different example table. The screen shows B.',
  '보내는 쪽은 A의 번호 65를 보냈습니다. 받는 번호표를 고르기 전이라 화면 글자가 없습니다.':
    'The sender sent 65 for A. The screen is blank while you choose the receiver’s table.',
  '심화 · A의 UTF-8': 'More · UTF-8 for A',
  '심화 · 가의 UTF-8': 'More · UTF-8 for 가',
  "A와 a는 32 자리 하나만 다르다": "A and a differ only in the 32 place",
  "ASCII에서 A는 65번, a는 97번입니다. 같은 글자표를 쓰고 32 자리만 켜면 65에 32가 더해져 97이 됩니다. 숫자 글자 0도 48번이라는 문자 번호가 있습니다.": "In ASCII, A is 65 and a is 97. The same character table is used, and turning on the 32 place adds 32 to 65, making 97. The character 0 has its own number, 48.",
  "같은 ASCII 표 · 32 자리만 달라짐": "Same ASCII table · only the 32 place changes",
  "‘가’의 문자 번호는 8비트에 들어가지 않는다": "The character number for 가 does not fit in 8 bits",
  "유니코드": "Unicode",
  "문자 번호": "Character number",
  "8비트 최댓값": "8-bit maximum",
  '유니코드에서 가의 번호는 44032입니다. 8비트의 최댓값 255보다 크며 번호 비트는 1010 1100 0000 0000입니다.':
    'In Unicode the number for 가 is 44032. It is greater than the 8-bit maximum of 255 and its bits are 1010 1100 0000 0000.',
  '8비트 문자 번호': '8-bit character number', '16비트 문자 번호': '16-bit character number',
  'UTF-8 · 1바이트': 'UTF-8 · 1 byte', 'UTF-8 · 3바이트': 'UTF-8 · 3 bytes',
  '16비트': '16 bits', '24비트': '24 bits',
  '고정 머리': 'Fixed prefix', '16진수': 'Hex',
  // Page
  '문자의 표현 · 레슨 0.2': 'Representing text · Lesson 0.2',
  '글자에 번호를 붙이고, 그 번호를 비트로 바꾸는 방법(ASCII, 유니코드, UTF-8)을 스위치로 살펴보세요.':
    'Use switches to see how each character gets a number and how that number becomes bits (ASCII, Unicode, UTF-8).',
  '"A"와 "가"는 어떤 비트가 될까요? 스위치로 번호를 만들고, 그 번호가 어떤 글자인지 확인해 보세요.':
    'Which bits do "A" and "가" become? Make a number with the switches and see which character it is.',
  '번호와 글자': 'Numbers and characters',
  '스위치로 만든 번호가 글자표에서 글자가 되는 장면': 'A number made with switches becoming a character in the character table',
  
  '스위치 켜고 끄기': 'Turn switches on and off', '모두 끄기': 'All off', '1 더하기': 'Add 1', '이진수': 'Binary',
  // Scene
  '글자표': 'Character table', '제어 문자': 'control character', 'UTF-8로 부호화': 'Encoded in UTF-8',
  '(1바이트)': '(1 byte)', '(2바이트)': '(2 bytes)', '(3바이트)': '(3 bytes)',
  '{0} → 제어 문자': '{0} → control character',
  '{0} → {1} · {#2}바이트': '{0} → {1} · {2} {2|byte|bytes}',
  '값 {0} 스위치, 켜짐': 'Switch worth {0}, on', '값 {0} 스위치, 꺼짐': 'Switch worth {0}, off',
  '값 {0} 스위치 켜짐. 번호 {1}, 글자 {2}': 'Switch worth {0} on. Number {1}, character {2}',
  '값 {0} 스위치 꺼짐. 번호 {1}, 글자 {2}': 'Switch worth {0} off. Number {1}, character {2}',
  '1을 더했습니다. 번호 {0}, 글자 {1}': 'Added 1. Number {0}, character {1}',
  '모두 껐습니다. 번호 {0}': 'All off. Number {0}',
  '8비트 범위를 초과': 'Beyond the 8-bit range',
  // Panels above the switches
  '→ 32 자리 하나만 다름': '→ only the 32 place differs',
  '→ 2{0} = {1}가지 (0~{2})': '→ 2{0} = {1} kinds (0–{2})', '· 8비트로는 0~255뿐': '· 8 bits reach only 0–255',
  '1바이트 0–127 (A)': '1 byte 0–127 (A)', '2바이트 128–2047': '2 bytes 128–2047', '3바이트 2048–65535 (가)': '3 bytes 2048–65535 (가)',
  '{0} 저장': '{0} stored as',
  // Step 1
  '글자에 번호': 'A number for each character',
  '글자마다 번호가 정해져 있다': 'Every character has a set number',
  '컴퓨터는 0과 1만 저장할 수 있으므로, 글자를 저장하려면 먼저 글자마다 번호를 정해 둡니다. 이 약속을 담은 표를 문자 코드라고 하고, 가장 오래된 표준인 ASCII에서 대문자 A는 65번입니다. 번호는 0.1에서 본 것처럼 비트로 바꿀 수 있으므로, 글자도 비트가 됩니다.':
    'A computer can store only 0s and 1s, so to store text we first give every character a number. The table that holds this agreement is called a character code; in ASCII, the oldest standard, capital A is number 65. As 0.1 showed, a number can be turned into bits, so a character becomes bits too.',
  '스위치로 만든 번호가 글자표로 흘러가고, 위에 "65 → A"처럼 번호와 글자가 함께 뜹니다. 번호를 1 올리면 알파벳 다음 글자가 됩니다.':
    'The number made with the switches flows into the character table, and the number and character appear together above it, as in "65 → A". Raising the number by 1 gives the next letter of the alphabet.',
  '스위치 여덟 개와 글자표 상자가 있습니다. 켜진 스위치의 값이 글자표로 모여 번호가 되고, 글자표는 그 번호에 해당하는 글자를 보여 줍니다. 65는 A입니다.':
    'There are eight switches and a character table box. The values of the switches that are on gather at the table as a number, and the table shows the character for that number. 65 is A.',
  '대문자 A': 'Capital A', '글자표의 번호 65': 'Number 65 in the table', '65 → A · 1바이트': '65 → A · 1 byte',
  'B를 만들어 보세요. A는 65번이고, B는 그다음 번호입니다.': 'Make B. A is number 65, and B is the next number.',
  // Step 2
  '대문자와 소문자': 'Capital and small letters',
  '소문자는 대문자보다 32 크다': 'A small letter is 32 more than its capital',
  'ASCII에서 소문자 a는 97번으로, 대문자 A보다 정확히 32 큽니다. 비트로 보면 32를 맡은 스위치 하나만 다릅니다. 숫자 글자 "0"도 48번이라는 번호를 가진 글자이고, 수 0과는 다릅니다.':
    'In ASCII, small a is number 97, exactly 32 more than capital A. In bits, only the switch worth 32 differs. The digit character "0" is also a character, numbered 48, and is not the same as the number 0.',
  'A와 a를 오가면 32 스위치 하나만 켜졌다 꺼집니다. 나머지 스위치는 그대로입니다.':
    'Going between A and a turns only the 32 switch on and off. The other switches stay as they are.',
  '스위치 여덟 개와 글자표가 있습니다. A(65)와 a(97)를 오가는 동안 값 32를 맡은 스위치 하나만 바뀝니다.':
    'There are eight switches and a character table. While going between A (65) and a (97), only the switch worth 32 changes.',
  '32 자리 비트를 켬': 'Turn on the bit worth 32', '97 = 소문자 a': '97 = small a',
  '소문자 b를 만들어 보세요. 대문자 B(66)보다 32 큽니다.': 'Make small b. It is 32 more than capital B (66).',
  // Step 3
  '한글은 큰 번호': 'Hangul has big numbers',
  '한글은 8비트로는 모자란다': 'Eight bits are not enough for Hangul',
  'ASCII는 128개 글자만 담아서 한글이 없습니다. 그래서 세계의 모든 글자에 번호를 붙인 유니코드가 만들어졌습니다. 유니코드에서 "가"는 44032번이고, 이만큼 큰 수를 나타내려면 스위치가 16개 필요합니다. 한글 음절은 가, 각, 갂… 순서로 번호가 이어집니다.':
    'ASCII holds only 128 characters and has no Hangul. So Unicode was made, numbering every character in the world. In Unicode, "가" is number 44032, and showing a number that big takes 16 switches. Hangul syllables continue in order: 가, 각, 갂 …',
  '스위치가 16개로 늘어납니다. "가"는 32768, 8192, 2048, 1024 네 스위치를 켠 44032번이고, 1을 더하면 "각"이 됩니다.':
    'The switches grow to 16. "가" is number 44032, with the four switches worth 32768, 8192, 2048 and 1024 on; adding 1 gives "각".',
  '스위치 열여섯 개와 글자표가 있습니다. 32768, 8192, 2048, 1024를 맡은 스위치가 켜져 44032가 되고, 글자표는 한글 "가"를 보여 줍니다.':
    'There are sixteen switches and a character table. The switches worth 32768, 8192, 2048 and 1024 are on to make 44032, and the table shows the Hangul "가".',
  '한글 ‘가’': 'Hangul ‘가’', '글자 번호 44032': 'Character number 44032',
  '"가" 다음 글자인 "각"을 만들어 보세요. +1을 써도 됩니다.': 'Make "각", the character after "가". You can use +1.',
  '1바이트에 들어가는 가장 큰 번호(127)를 만들어 보세요.': 'Make the largest number that fits in 1 byte (127).',
  // Step 4
  'A의 UTF-8': 'UTF-8 for A', '가의 UTF-8': 'UTF-8 for 가',
  'A의 UTF-8은 한 바이트': 'UTF-8 for A takes one byte',
  '가의 UTF-8은 세 바이트': 'UTF-8 for 가 takes three bytes',
  'A의 번호 65를 나타내는 일곱 비트 1000001 앞에 고정 머리 0을 붙입니다. 저장하는 한 바이트는 01000001이고 16진수로 41입니다.':
    'Put the fixed prefix 0 before the seven bits 1000001 for A’s number 65. The byte stored is 01000001, or 41 in hexadecimal.',
  'UTF-8은 문자 번호를 저장 바이트로 바꾸는 규칙입니다. 0부터 127까지의 번호는 일곱 비트에 들어가므로, 앞에 고정 비트 0을 붙여 한 바이트로 저장합니다. A의 번호 65는 1000001이고 저장하는 바이트는 01000001입니다.':
    'UTF-8 is a rule for turning character numbers into bytes for storage. Numbers from 0 to 127 fit in seven bits, so a fixed 0 at the front makes one byte. A’s number 65 gives 1000001, and UTF-8 stores 01000001.',
  '41은 저장 바이트 01000001을 16진수 두 자리로 쓴 것입니다. 문자 번호는 그대로 65입니다.':
    '41 writes the stored byte 01000001 as two hexadecimal digits. The character number is still 65.',
  'A의 문자 번호 65가 들어 있고, UTF-8 저장 바이트에는 고정 머리 0과 번호 비트 1000001이 표시됩니다.':
    'The character number is 65. The stored UTF-8 byte is shown with its fixed prefix 0 and the number bits 1000001.',
  '0 뒤에 1000001을 넣음': 'Put 1000001 after 0', '한 바이트 41': 'One byte: 41',
  'A 다음 문자 번호를 만들고 한 바이트가 어떻게 바뀌는지 보세요.': 'Make the character number after A and watch how the byte changes.',
  '가의 16비트 문자 번호를 1010, 110000, 000000으로 나눕니다. 각각 머리 1110, 10, 10 뒤로 옮기면 11101010, 10110000, 10000000이 됩니다. 이 24비트는 세 바이트 EA B0 80으로 저장합니다.':
    'Split the 16-bit number for 가 into 1010, 110000 and 000000. Place those after the prefixes 1110, 10 and 10 to get 11101010, 10110000 and 10000000. The three stored bytes are EA B0 80, 24 bits in total.',
  '가의 문자 번호 44032를 나타내는 16비트를 왼쪽부터 4·6·6비트로 나눕니다. 첫 바이트는 머리 1110으로 시작하고, 뒤의 두 바이트는 머리 10으로 시작합니다. 각 머리 뒤에 번호 비트 한 묶음씩 채우면 저장 바이트 EA B0 80이 됩니다.':
    'Split the 16 bits for 가’s character number 44032 into groups of 4, 6 and 6 from the left. The first byte starts with the prefix 1110. The next two start with 10. Fill each byte with a group of number bits after its prefix to get EA B0 80.',
  '문자 번호의 비트는 16자리입니다. UTF-8에서는 머리 비트 8개를 더해 24비트, 즉 세 바이트를 저장합니다.':
    'The character number has 16 bits. UTF-8 adds eight prefix bits and stores 24 bits, or three bytes.',
  '가의 문자 번호 44032가 16개 스위치에 들어 있습니다. UTF-8 저장 바이트에는 고정 머리 1110, 10, 10과 번호 비트 세 묶음이 표시됩니다.':
    'The 16 switches hold 가’s character number, 44032. The stored UTF-8 bytes show the fixed prefixes 1110, 10 and 10 and the three groups of number bits.',
  '세 바이트 EA B0 80': 'Three bytes: EA B0 80',
  '1을 더해 각을 만들고 세 바이트 중 어느 비트가 바뀌는지 보세요.': 'Add 1 to make 각 and see which bit in the three bytes changes.',
  '공백': 'space', '없음': 'none', '{0} → {1}': '{0} → {1}', 'UTF-8 {0}': 'UTF-8 {0}',
  '"나"를 만들어 보세요. 45208번입니다.': 'Make "나". It is number 45208.',
  '2바이트가 필요한 첫 번호를 만들어 보세요.': 'Make the first number that needs 2 bytes.',
  '3바이트가 필요한 첫 번호를 만들어 보세요.': 'Make the first number that needs 3 bytes.',
  'H를 만들어 보세요. H는 72번입니다.': 'Make H. H is number 72.',
  '숫자 글자 "0"을 만들어 보세요. 48번입니다.': 'Make the digit character "0". It is number 48.',
  '스위치를 자유롭게 눌러 보세요.': 'Press the switches however you like.',
};
