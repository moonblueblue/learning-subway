// English for 3.6 Machine code and assembly. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '기계어와 어셈블리 · 레슨 3.6': 'Machine code and assembly · Lesson 3.6',
  '스위치 8개로 명령 하나를 비트로 적고, 연산 코드 표와 어셈블리로 해석하며 기계어가 어떻게 생겼는지 살펴보세요.':
    'Write one instruction as bits with 8 switches, decode it with an opcode table and assembly, and see what machine code looks like.',
  'CPU가 알아듣는 말은 어떻게 생겼을까요? 스위치 8개로 명령 하나를 직접 적고 해석해 보세요.':
    'What does the language a CPU understands look like? Write one instruction yourself with 8 switches and decode it.',
  '스위치 여덟 개가 만든 명령을 해석기가 읽는 장면': 'A decoder reading an instruction made by eight switches',
  '명령 한 바이트와 해석기': 'One instruction byte and the decoder', '스위치 켜고 끄기': 'Turn switches on and off', '모두 끄기': 'All off', '1 더하기': 'Add 1',
  '켜진 비트의 선': 'Line of a bit that is on', '해석기': 'Decoder',
  '1을 더했습니다. 자리올림.': 'Added 1. Carry.', '{0} 합계 {#1}': '{0} Sum {1}',
  // Fields, decoder and readouts
  '연산 코드': 'Opcode', '레지스터': 'Register', '주소': 'Address', '기계어': 'Machine code', '없음': 'none', '연산 코드 표': 'Opcode table',
  '{0} 비트 {#1}, 켜짐': '{0} bit {1}, on', '{0} 비트 {#1}, 꺼짐': '{0} bit {1}, off',
  '{0} 비트 {#1} 켜짐.': '{0} bit {1} on.', '{0} 비트 {#1} 꺼짐.': '{0} bit {1} off.',
  '{0} 비트 {#1} 켜짐. 합계 {#2}': '{0} bit {1} on. Sum {2}', '{0} 비트 {#1} 꺼짐. 합계 {#2}': '{0} bit {1} off. Sum {2}',
  '({#0}) → 연산 {1} = {2} · 레지스터 {3} = {4} · 주소 {5} = {#6} →': '({0}) → opcode {1} = {2} · register {3} = {4} · address {5} = {6} →',
  '기계어 {0} ({#1}) → 연산 {2} = {3} · 레지스터 {4} = {5} · 주소 {6} = {#7} → {8}': 'Machine code {0} ({1}) → opcode {2} = {3} · register {4} = {5} · address {6} = {7} → {8}',
  '수 {#0} · 문자 {1}': 'number {0} · character {1}', '{0} {1} → 수 {#2} · 문자 {3}': '{0} {1} → number {2} · character {3}',
  '연산 코드 {0} → 명령표 {#1}번 = {2}': 'Opcode {0} → table entry {1} = {2}', '{0} → {1} · {2} · {3}': '{0} → {1} · {2} · {3}', '제어 문자': 'control character', '알 수 없는 명령': 'Unknown instruction',
  '멈춤': 'Halt', '메모리 → 레지스터': 'Memory → register', '레지스터 → 메모리': 'Register → memory', 'PC ← 주소': 'PC ← address', 'Z면 PC ← 주소': 'if Z, PC ← address', '없는 명령': 'No such instruction',
  // Step 1
  '명령도 비트': 'Instructions are bits too', '001 = LOAD · 0 = A': '001 = LOAD · 0 = A', '5번지를 A로 읽기': 'Read address 5 into A',
  '명령 하나는 1바이트의 비트다': 'One instruction is a byte of bits',
  '3.5의 CPU가 읽은 "LOAD A, [5]"도 메모리 칸 안에서는 0과 1입니다. 이 CPU는 명령 하나를 8비트(1바이트)로 적고, 칸을 세 부분으로 나눕니다. 앞의 3비트는 할 일(연산 코드), 다음 1비트는 레지스터(0이면 A, 1이면 B), 마지막 4비트는 주소입니다. CPU가 알아듣는 이 비트가 기계어입니다.':
    'Even the "LOAD A, [5]" read by the CPU in 3.5 is 0s and 1s inside a memory cell. This CPU writes one instruction as 8 bits (1 byte) and splits the cell into three parts. The first 3 bits are what to do (the opcode), the next 1 bit is the register (0 for A, 1 for B), and the last 4 bits are the address. These bits the CPU understands are machine code.',
  '스위치 위 색이 부분을 나눕니다. 연산 코드 001은 LOAD, 레지스터 0은 A, 주소 0101은 5라서 0010 0101은 "LOAD A, [5]"입니다. 같은 비트를 그냥 수로 읽으면 37입니다.':
    'Colours above the switches mark the parts. Opcode 001 is LOAD, register 0 is A and address 0101 is 5, so 0010 0101 is "LOAD A, [5]". Read the same bits simply as a number and you get 37.',
  '스위치 여덟 개가 한 줄로 놓여 있고, 왼쪽 세 개는 연산 코드, 다음 하나는 레지스터, 오른쪽 네 개는 주소를 맡습니다. 줄 끝의 해석기가 켜진 비트를 읽어 어셈블리 명령으로 보여 줍니다.':
    'Eight switches stand in a row: the left three are the opcode, the next one the register, and the right four the address. The decoder at the end of the row reads the bits that are on and shows them as an assembly instruction.',
  '"LOAD A, [5]"를 만들어 보세요: 연산 001, 레지스터 0, 주소 0101.': 'Make "LOAD A, [5]": opcode 001, register 0, address 0101.',
  '레지스터만 바꿔 "LOAD B, [5]"를 만들어 보세요.': 'Change only the register to make "LOAD B, [5]".',
  '모든 비트가 0이면 무슨 명령일까요? 만들어 보세요.': 'What instruction is it when every bit is 0? Make it.',
  // Step 2
  '연산 코드 001': 'Opcode 001', '명령표에서 LOAD 찾기': 'Find LOAD in the instruction table', '주소 비트는 읽을 칸 선택': 'Address bits choose the cell to read',
  '연산 코드 표가 비트의 뜻을 정한다': 'The opcode table decides what the bits mean',
  'CPU의 해석기(3.5의 제어 장치)는 앞 3비트를 연산 코드 표에서 찾아 할 일을 정합니다. 3비트로는 8가지를 구별할 수 있고, 이 CPU는 그중 7가지를 씁니다. ADD와 SUB는 언제나 A와 B를 쓰므로 나머지 비트를 보지 않고, JUMP와 JZ는 주소만 봅니다.':
    'The CPU\'s decoder (the control unit in 3.5) looks up the first 3 bits in the opcode table to decide what to do. 3 bits can tell 8 things apart, and this CPU uses 7 of them. ADD and SUB always use A and B, so they ignore the other bits, and JUMP and JZ look only at the address.',
  '아래 표에서 지금 연산 코드의 줄이 강조됩니다. 실제 CPU의 명령 집합(x86, ARM)은 명령이 수백 개이고 길이도 다양하지만, "비트 묶음 → 표 → 할 일"이라는 원리는 같습니다.':
    'The row for the current opcode is highlighted in the table below. Real CPU instruction sets (x86, ARM) have hundreds of instructions of various lengths, but the principle, "group of bits → table → what to do", is the same.',
  '1단계와 같은 스위치 줄과 해석기입니다. 장면 아래에 연산 코드 여덟 가지와 그 뜻을 적은 표가 있습니다.':
    'The same row of switches and decoder as step 1. Under the scene is a table of the eight opcodes and what they mean.',
  '"ADD A, B"를 만들어 보세요. 나머지 비트는 0으로 둡니다.': 'Make "ADD A, B". Leave the other bits at 0.', '"JUMP 2"를 만들어 보세요.': 'Make "JUMP 2".', '"STORE A, [7]"을 만들어 보세요.': 'Make "STORE A, [7]".',
  // Step 3
  '어셈블리': 'Assembly', '명령·레지스터·주소를 부호화': 'Encode instruction, register and address',
  '어셈블러가 글자를 비트로 바꾼다': 'An assembler turns letters into bits',
  '사람이 비트를 하나하나 적기는 힘들어서 "SUB A, B"처럼 읽을 수 있는 이름으로 적습니다. 이것이 어셈블리어이고, 어셈블러라는 프로그램이 이름을 표에서 찾아 비트로 바꿉니다. 어셈블리 한 줄은 기계어 명령 하나와 정확히 짝이 맞습니다.':
    'Writing bits one by one is hard for people, so they write readable names like "SUB A, B". This is assembly language, and a program called an assembler looks the names up in the table and turns them into bits. One line of assembly matches exactly one machine-code instruction.',
  '3.5의 반복 프로그램을 직접 기계어로 옮겨 보세요. 해 보기에 나온 어셈블리를 스위치로 만들면 어셈블러가 하는 일을 손으로 한 셈입니다.':
    'Translate the loop program from 3.5 into machine code yourself. Making the assembly shown in Try with the switches does by hand what an assembler does.',
  '스위치 줄과 해석기, 연산 코드 표가 있습니다. 해 보기마다 3.5 반복 프로그램의 한 줄이 나옵니다.':
    'There is a row of switches, a decoder and an opcode table. Each try-it task shows one line of the loop program from 3.5.',
  '어셈블리 "SUB A, B"를 기계어로 만들어 보세요.': 'Make the assembly "SUB A, B" in machine code.', '"JZ 5"를 기계어로 만들어 보세요.': 'Make "JZ 5" in machine code.', '"LOAD B, [6]"을 기계어로 만들어 보세요.': 'Make "LOAD B, [6]" in machine code.',
  // Step 4
  '같은 비트, 다른 뜻': 'Same bits, different meaning', '문자로 읽으면 A': 'Read as a character, A', '정수로 읽으면 65': 'Read as an integer, 65',
  '비트의 뜻은 읽는 쪽이 정한다': 'The reader decides what bits mean',
  '같은 8비트를 명령으로 읽으면 명령, 수로 읽으면 수, 문자 코드(0.2)로 읽으면 글자입니다. 메모리에는 "이건 명령"이라는 표시가 따로 없습니다. CPU는 PC가 가리키는 칸을 명령으로 읽을 뿐입니다. 프로그램과 데이터를 같은 메모리에 두는 이 방식을 폰 노이만 구조라고 합니다.':
    'The same 8 bits read as an instruction are an instruction, read as a number are a number, and read as a character code (0.2) are a letter. Memory has no separate mark saying "this is an instruction". The CPU simply reads the cell PC points at as an instruction. Keeping programs and data in the same memory like this is called the von Neumann architecture.',
  '"A"(65)를 만들면 해석기는 "STORE A, [1]"이라고 읽습니다. 3.5에서 HALT 뒤의 값 칸을 실수로 실행하면 CPU는 그 수를 명령으로 읽어 엉뚱한 일을 합니다. 버그와 보안 공격이 여기서 생기기도 합니다.':
    'Make "A" (65) and the decoder reads "STORE A, [1]". In 3.5, if the value cells after HALT were run by mistake, the CPU would read those numbers as instructions and do something odd. Bugs and security attacks sometimes start here.',
  '스위치 줄과 해석기가 있고, 해석기 위에 같은 바이트를 명령, 수, 문자 세 가지로 읽은 결과가 함께 뜹니다.':
    'There is a row of switches and a decoder, and above the decoder the same byte is shown read three ways: as an instruction, a number and a character.',
  '문자 "A"(65)를 만들어 보세요. 명령으로는 무엇일까요?': 'Make the character "A" (65). What is it as an instruction?',
  '문자 "H"를 만들어 보세요. 65에서 7을 더하면 됩니다.': 'Make the character "H". Add 7 to 65.',
  '모든 비트를 켜 보세요. 연산 코드 111은 표에 없습니다.': 'Turn every bit on. Opcode 111 is not in the table.',
};
