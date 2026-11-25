// English for 0.2 Representing text. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Hangul syllables this lesson encodes (가, 각, 쁁 …) are data and stay as they are.
window.lessonKeep = ['[가-힣](?=$|\\s|[’”"·,)])', '^[가-힣]$'];
window.lessonText = {
  // Page
  '문자의 표현 · 레슨 0.2': 'Representing text · Lesson 0.2',
  '글자에 번호를 붙이고, 그 번호를 비트로 바꾸는 방법(ASCII, 유니코드, UTF-8)을 스위치로 살펴보세요.':
    'Use switches to see how each character gets a number and how that number becomes bits (ASCII, Unicode, UTF-8).',
  '"A"와 "가"는 어떤 비트가 될까요? 스위치로 번호를 만들고, 그 번호가 어떤 글자인지 확인해 보세요.':
    'Which bits do "A" and "가" become? Make a number with the switches and see which character it is.',
  '번호와 글자': 'Numbers and characters',
  '스위치로 만든 번호가 글자표에서 글자가 되는 장면': 'A number made with switches becoming a character in the character table',
  '장면의 스위치를 눌러도 됩니다 · 확대 후 드래그로 이동': 'You can also press the switches in the scene · zoom in, then drag to move',
  '장면의 스위치를 눌러도 됩니다 · 두 손가락으로 확대': 'You can also press the switches in the scene · pinch to zoom',
  '값이 흐르는 선': 'Line a value flows along', '켜짐 = 1': 'On = 1', '꺼짐 = 0': 'Off = 0',
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
  '바이트로 저장': 'Stored as bytes',
  '저장할 때는 바이트 단위로 나눈다': 'Storing splits the number into bytes',
  '파일이나 웹 페이지에 글자를 저장할 때는 번호를 바이트(8비트) 단위로 나눠 적습니다. 가장 널리 쓰는 방식인 UTF-8은 번호가 0–127이면 1바이트, 128–2047이면 2바이트, 2048–65535면 3바이트를 씁니다. 그래서 영어 글자는 1바이트, 한글은 3바이트를 차지합니다.':
    'When a character is stored in a file or web page, its number is written in bytes (8 bits each). UTF-8, the most widely used way, uses 1 byte for numbers 0–127, 2 bytes for 128–2047 and 3 bytes for 2048–65535. So an English letter takes 1 byte and a Hangul syllable takes 3.',
  '번호 아래 줄에 UTF-8 바이트가 나타납니다. "A"는 1바이트, "가"는 3바이트입니다. 각 바이트 앞의 1과 0은 몇 바이트짜리 글자인지 알려 주는 표시입니다.':
    'The UTF-8 bytes appear on the line under the number. "A" is 1 byte and "가" is 3. The 1s and 0s at the front of each byte tell how many bytes the character uses.',
  '스위치 열여섯 개와 글자표가 있습니다. 만든 번호의 글자와 함께, 그 글자를 UTF-8로 저장할 때 쓰는 바이트 수가 표시됩니다. A는 1바이트, 가는 3바이트입니다.':
    'There are sixteen switches and a character table. Along with the character for the number you made, it shows how many bytes storing it in UTF-8 takes. A is 1 byte and 가 is 3.',
  '같은 문자 하나': 'One character', 'A는 1바이트 · 가는 3바이트': 'A is 1 byte · 가 is 3 bytes',
  '공백': 'space', '없음': 'none', '{0} → {1}': '{0} → {1}', 'UTF-8 {0}': 'UTF-8 {0}',
  '"나"를 만들어 보세요. 45208번입니다.': 'Make "나". It is number 45208.',
  '2바이트가 필요한 첫 번호를 만들어 보세요.': 'Make the first number that needs 2 bytes.',
  '3바이트가 필요한 첫 번호를 만들어 보세요.': 'Make the first number that needs 3 bytes.',
  'H를 만들어 보세요. H는 72번입니다.': 'Make H. H is number 72.',
  '숫자 글자 "0"을 만들어 보세요. 48번입니다.': 'Make the digit character "0". It is number 48.',
  '스위치를 자유롭게 눌러 보세요.': 'Press the switches however you like.',
};
