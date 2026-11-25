// English for 3.5 One CPU cycle. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'CPU의 한 사이클 · 레슨 3.5': 'One CPU cycle · Lesson 3.5',
  '작은 CPU를 클럭 한 번씩 움직이며 명령을 가져오고, 해석하고, 실행하는 과정과 점프로 만드는 반복을 살펴보세요.':
    'Move a small CPU one clock tick at a time and see how it fetches, decodes and executes instructions, and how jumps make loops.',
  '명령 하나를 가져오고, 해석하고, 실행하는 동안 무슨 일이 생길까요? 작은 CPU를 클럭 한 번씩 움직여 보세요.':
    'What happens while one instruction is fetched, decoded and executed? Move a small CPU one clock tick at a time.',
  '메모리의 명령을 CPU가 가져와 해석하고 실행하는 장면': 'A CPU fetching, decoding and executing instructions from memory',
  '메모리와 CPU 내부': 'Memory and the inside of the CPU', '메모리 내용': 'Memory contents', '지금 단계': 'Current phase',
  '"클럭 한 번"으로 한 걸음씩, "명령 하나"로 명령 단위로 실행해 보세요. 중간에 예측 문제가 나옵니다.':
    'Run it a step at a time with "One tick", or an instruction at a time with "One instruction". Prediction questions come up along the way.',
  '"클럭 한 번"을 누르면 첫 가져오기가 시작됩니다.': 'Press "One tick" to start the first fetch.',
  '클럭 한 번': 'One tick', '명령 하나': 'One instruction', '프로그램이 끝났습니다': 'The program has finished',
  '메모리 → CPU': 'Memory → CPU', 'CPU → 메모리': 'CPU → memory', 'CPU 안': 'Inside the CPU',
  // Parts, cells and readouts
  '제어 장치': 'Control unit', '제어: {0}': 'Control: {0}', '주소 {#0}': 'address {0}', '값 {#0}': 'value {0}', '멈춤': 'Halt',
  '{0} ← {#1}번지': '{0} ← address {1}', '{#0}번지 ← {1}': 'address {0} ← {1}', 'Z면 PC ← {0}': 'if Z, PC ← {0}',
  '{#0}번지: {1}': 'address {0}: {1}', '5번지 HALT': 'address 5 HALT', '다음 PC': 'Next PC', '명령을 가져온 뒤 PC + 1': 'PC + 1 after fetching the instruction', '메모리 0번지': 'Memory address 0',
  '클럭 {#0}번': 'Ticks: {0}', '클럭 {#0} 전에 · {1}': 'Before tick {0} · {1}', '클럭 {#0}': 'Tick {0}', '클럭 {#0}·{#1}': 'Ticks {0}·{1}',
  '가져오기: PC가 주소 {#0}를 메모리로 보냅니다.': 'Fetch: PC sends address {0} to memory.',
  '가져오기: {#0}번지의 명령 "{1}"가 IR로 오고, PC는 {#2}이 됩니다.': 'Fetch: the instruction "{1}" at address {0} comes to IR, and PC becomes {2}.',
  '해석: 제어 장치가 "{0}"를 "{1}"로 읽습니다.': 'Decode: the control unit reads "{0}" as "{1}".',
  '실행: {#0}번지에 값을 달라고 주소를 보냅니다.': 'Execute: sends address {0} to ask for its value.',
  '실행: {#0}번지의 값 {#1}이 레지스터 {2}에 들어갑니다.': 'Execute: the value {1} at address {0} goes into register {2}.',
  '실행: 값을 적을 {#0}번지에 주소를 보냅니다.': 'Execute: sends address {0}, where the value will be written.',
  '실행: 레지스터 {0}의 값 {#1}을 {#2}번지에 적습니다.': 'Execute: writes the value {1} from register {0} to address {2}.',
  '실행: A의 {#0}와 B의 {#1}이 ALU로 갑니다.': 'Execute: {0} from A and {1} from B go to the ALU.',
  '실행: ALU의 결과 {#0}이 A에 들어갑니다. 결과가 0이라 Z = 1입니다.': 'Execute: the ALU\'s result {0} goes into A. The result is 0, so Z = 1.',
  '실행: ALU의 결과 {#0}이 A에 들어갑니다. 결과가 0이 아니라 Z = 0입니다.': 'Execute: the ALU\'s result {0} goes into A. The result is not 0, so Z = 0.',
  '실행: PC에 {#0}을 넣습니다. 다음 명령은 {#1}번지입니다.': 'Execute: puts {0} into PC. The next instruction is at address {1}.',
  '실행: Z = 1이라 PC에 {#0}을 넣습니다.': 'Execute: Z = 1, so {0} goes into PC.',
  '실행: Z = 0이라 건너뛰지 않습니다. PC는 {#0} 그대로입니다.': 'Execute: Z = 0, so it does not jump. PC stays {0}.',
  '실행: HALT. 프로그램이 끝났습니다.': 'Execute: HALT. The program has finished.',
  '가져오기': 'Fetch', '해석': 'Decode', '실행': 'Execute',
  // Step 1
  'PC가 명령 주소를 가리킴': 'PC points at the instruction\'s address', '메모리에서 명령 읽기': 'Read the instruction from memory', 'IR에 실행할 명령': 'The instruction to run is in IR',
  'CPU는 먼저 명령을 가져온다': 'A CPU first fetches an instruction',
  '프로그램은 데이터와 똑같이 메모리 칸에 들어 있습니다. CPU의 프로그램 카운터(PC)는 다음에 실행할 명령의 주소를 기억합니다. 가져오기 단계에서 CPU는 PC의 주소를 메모리로 보내고, 그 칸의 명령을 명령 레지스터(IR)로 받아 온 뒤 PC를 1 늘립니다.':
    'A program sits in memory cells just like data. The CPU\'s program counter (PC) remembers the address of the next instruction to run. In the fetch phase, the CPU sends PC\'s address to memory, receives the instruction in that cell into the instruction register (IR), and then adds 1 to PC.',
  '주소가 PC에서 메모리로 가고, 명령이 메모리에서 IR로 돌아옵니다. 명령을 가져오자마자 PC가 다음 칸을 가리킵니다. 명령 하나가 끝나면 다시 가져오기로 돌아갑니다.':
    'The address goes from PC to memory, and the instruction comes back from memory to IR. As soon as the instruction is fetched, PC points at the next cell. When one instruction is done, it goes back to fetching.',
  '위쪽에 0–7번지 메모리 칸이 있고, 아래 CPU 판 위에 PC, IR, 제어 장치, 레지스터 A와 B, ALU가 있습니다. 메모리와 CPU는 버스로 이어져 있습니다.':
    'At the top are memory cells at addresses 0–7, and on the CPU board below are PC, IR, the control unit, registers A and B, and the ALU. Memory and CPU are joined by a bus.',
  '주소는 메모리로, 명령은 IR로': 'The address goes to memory, the instruction to IR',
  'PC의 주소 0으로 메모리의 LOAD A, [4]를 읽어 IR에 넣은 뒤 PC를 1로 올립니다.': 'With PC\'s address 0, LOAD A, [4] is read from memory into IR, and PC goes up to 1.',
  '명령을 가져온 뒤 PC는 몇이 될까요?': 'After fetching the instruction, what does PC become?', '가져오자마자 PC는 다음 칸인 1번지를 가리킵니다.': 'Right after the fetch, PC points at the next cell, address 1.',
  '레지스터 A에는 무엇이 들어갈까요?': 'What goes into register A?', 'LOAD A, [4]는 4번지에 있는 값 7을 A에 넣으라는 뜻입니다.': 'LOAD A, [4] means put the value 7 at address 4 into A.',
  // Step 2
  '해석과 실행': 'Decode and execute', '5번지 3 · 6번지 4': 'address 5: 3 · address 6: 4', '레지스터에 읽어 더함': 'Read into registers and add', '7번지에 7 저장': 'Store 7 at address 7',
  '해석하고, 실행하고, 다시 가져온다': 'Decode, execute, fetch again',
  '제어 장치는 IR의 명령을 해석해 무엇을 할지 정합니다. LOAD면 메모리 값을 레지스터로 옮기고, ADD면 A와 B를 ALU로 보내 더한 결과를 A에 넣고, STORE면 레지스터 값을 메모리에 씁니다. 이 가져오기–해석–실행이 명령마다 되풀이됩니다.':
    'The control unit decodes the instruction in IR and decides what to do. For LOAD it moves a value from memory into a register; for ADD it sends A and B to the ALU and puts the sum in A; for STORE it writes a register\'s value to memory. This fetch–decode–execute repeats for every instruction.',
  '3 + 4를 계산하는 데 명령 다섯 개가 필요합니다. 값을 메모리에서 레지스터로 옮기고(LOAD), 계산하고(ADD), 다시 메모리에 적습니다(STORE). 1.1에서 본 "읽기, 계산, 쓰기"가 CPU 안에서는 이렇게 나뉩니다.':
    'Working out 3 + 4 takes five instructions. Values move from memory into registers (LOAD), are computed (ADD), and are written back to memory (STORE). The "read, compute, write" seen in 1.1 splits up like this inside the CPU.',
  '5번지의 3과 6번지의 4를 A, B로 불러와 더하고, 결과를 7번지에 적는 프로그램입니다.': 'A program that loads 3 from address 5 and 4 from address 6 into A and B, adds them, and writes the result to address 7.',
  '제어 장치가 명령에 맞춰 값의 경로를 연다': 'The control unit opens the path for values to suit the instruction',
  '메모리 5와 6번지에서 A와 B로 값을 읽습니다. ALU에서 3과 4를 더해 A에 쓰고, STORE가 7번지에 7을 기록합니다.': 'Values are read from memory addresses 5 and 6 into A and B. The ALU adds 3 and 4 and writes it to A, and STORE records 7 at address 7.',
  'ADD 결과를 A에 쓰고, STORE가 A의 7을 메모리에 저장': 'ADD\'s result is written to A, and STORE saves A\'s 7 to memory',
  'ADD를 해석했습니다. 이제 어디로 값이 갈까요?': 'ADD has been decoded. Where do the values go now?', 
  '계산은 ALU가 합니다. A와 B의 값이 ALU로 갑니다.': 'The ALU does the computing. The values of A and B go to the ALU.',
  '7번지에는 무엇이 적힐까요?': 'What will be written at address 7?', 'A에는 3 + 4 = 7이 들어 있고, STORE A, [7]이 그 값을 7번지에 적습니다.': 'A holds 3 + 4 = 7, and STORE A, [7] writes that value to address 7.',
  // Step 3
  '점프와 반복': 'Jumps and loops', 'A에서 1씩 빼기': 'Subtract 1 from A each time', 'A = 0이면 JZ': 'JZ when A = 0', 'PC가 HALT로 이동': 'PC moves to HALT',
  'PC를 바꾸면 반복과 조건이 된다': 'Changing PC makes loops and conditions',
  '보통 PC는 1씩 늘어나 다음 칸으로 갑니다. JUMP는 PC에 다른 주소를 넣어 그곳으로 건너뜁니다. JZ는 방금 계산 결과가 0이었을 때(3.3의 Z 플래그)만 건너뜁니다. 이 둘로 1.2의 while 반복과 if 조건을 만듭니다. 이 프로그램은 A가 0이 될 때까지 1씩 뺍니다.':
    'Normally PC grows by 1 and moves to the next cell. JUMP puts another address into PC and jumps there. JZ jumps only when the last result was 0 (the Z flag from 3.3). These two make the while loops and if conditions of 1.2. This program subtracts 1 until A becomes 0.',
  'JUMP 2가 실행되면 PC가 5에서 2로 돌아가 SUB를 다시 합니다. A가 0이 된 뒤의 JZ에서만 PC가 5로 건너뛰어 HALT에 닿습니다. 반복문은 결국 "뒤로 점프"입니다.':
    'When JUMP 2 runs, PC goes back from 5 to 2 and does SUB again. Only at the JZ after A becomes 0 does PC jump to 5 and reach HALT. A loop is, in the end, "jump back".',
  'A에 2, B에 1을 불러온 뒤 SUB, JZ, JUMP를 되풀이합니다. A가 0이 되면 JZ가 5번지의 HALT로 건너뜁니다.': 'After loading 2 into A and 1 into B, SUB, JZ and JUMP repeat. When A becomes 0, JZ jumps to the HALT at address 5.',
  'SUB의 결과가 0인지에 따라 PC가 갈라진다': 'PC branches on whether SUB\'s result is 0',
  'SUB 결과가 0이 아니면 JUMP 2로 돌아갑니다. 0이면 JZ가 5번지 HALT로 건너뜁니다.': 'If SUB\'s result is not 0, JUMP 2 goes back. If it is 0, JZ jumps to HALT at address 5.',
  'JUMP 2로 반복': 'Loop with JUMP 2',
  'A = 1입니다. JZ 5는 점프할까요?': 'A = 1. Will JZ 5 jump?', '점프한다': 'It jumps', '넘어간다': 'It passes on',
  'A가 0이 아니라 Z = 0이므로 PC는 그대로 4번지로 갑니다.': 'A is not 0, so Z = 0 and PC goes on to address 4 as usual.',
  'JUMP 2를 실행하면 PC는?': 'When JUMP 2 runs, what is PC?', 'JUMP는 PC에 2를 넣어 SUB로 돌아갑니다.': 'JUMP puts 2 into PC and goes back to SUB.',
  '이번에는 A = 0입니다. JZ 5는?': 'This time A = 0. What about JZ 5?', 'SUB 결과가 0이라 Z = 1이고, PC가 5로 바뀌어 HALT에 닿습니다.': 'SUB\'s result is 0, so Z = 1, and PC changes to 5 and reaches HALT.',
  // Step 4
  '클럭': 'Clock', '같은 ADD 명령': 'The same ADD instruction', '클럭마다 인출·해석·실행': 'Fetch, decode, execute on each tick', '실행 때 레지스터 값 갱신': 'Register values update on execute',
  '클럭 한 번에 한 걸음씩': 'One step per clock tick',
  'CPU 안의 모든 움직임은 클럭이라는 일정한 박자에 맞춰 한 걸음씩 일어납니다. 이 CPU는 명령 하나를 가져오고, 해석하고, 실행하는 데 클럭 4–5번이 걸립니다. 3 GHz CPU의 클럭은 1초에 30억 번 뜁니다. 실제 CPU는 여러 명령의 단계를 겹쳐(파이프라인) 클럭마다 명령 하나 이상을 끝냅니다.':
    'Every movement inside a CPU happens one step at a time to a steady beat called the clock. This CPU takes 4–5 ticks to fetch, decode and execute one instruction. A 3 GHz CPU\'s clock ticks 3 billion times a second. Real CPUs overlap the phases of several instructions (a pipeline) and finish one or more instructions per tick.',
  '아래 클럭 수를 보세요. 3 + 4 프로그램은 클럭 24번에 끝납니다. 사람이 한 걸음씩 누르면 한참 걸리지만, 3 GHz라면 8나노초(1억분의 1초보다 짧은 시간)입니다.':
    'Look at the tick count below. The 3 + 4 program ends after 24 ticks. Pressing step by step takes a person a while, but at 3 GHz it is 8 nanoseconds (less than a hundred-millionth of a second).',
  '2단계와 같은 3 + 4 프로그램입니다. 클럭이 한 번 뛸 때마다 장면에서 한 걸음이 일어나고 클럭 수가 하나씩 늘어납니다.': 'The same 3 + 4 program as step 2. Each clock tick makes one step happen in the scene, and the tick count goes up by one.',
  '한 클럭마다 동작 하나가 진행된다': 'One action happens per clock tick',
  'LOAD 한 명령의 클럭 다섯 번입니다. 주소 전송, 명령 읽기, 해석, 데이터 주소 전송, 레지스터 쓰기가 순서대로 진행됩니다.': 'The five ticks of one LOAD instruction: sending the address, reading the instruction, decoding, sending the data address and writing the register, in order.',
  '주소 전송 · 명령 읽기': 'Send address · read instruction', 'LOAD 해석': 'Decode LOAD', '데이터 읽어 A에 쓰기': 'Read data and write it to A',
  '예시: LOAD A 한 명령 · 3 + 4 프로그램 전체는 24클럭': 'Example: one LOAD A instruction · the whole 3 + 4 program is 24 ticks',
  '첫 명령 LOAD A, [5]에 클럭이 몇 번 걸렸나요?': 'How many ticks did the first instruction, LOAD A, [5], take?',
  '1번': '1 tick', '3번': '3 ticks', '5번': '5 ticks',
  '가져오기 2번, 해석 1번, 실행 2번으로 클럭 5번입니다.': 'Fetch 2, decode 1, execute 2: 5 ticks.',
  '3 GHz CPU는 1초에 클럭이 몇 번 뛸까요?': 'How many times a second does a 3 GHz CPU\'s clock tick?',
  '3천 번': '3 thousand', '300만 번': '3 million', '30억 번': '3 billion',
  'G(기가)는 10억이라 3 GHz는 1초에 30억 번입니다.': 'G (giga) is a billion, so 3 GHz is 3 billion times a second.',
};
