// English for 3.8 From code to running. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  'b = 0 → 멈춤': 'b = 0 → stops',
  // Page
  '코드에서 실행까지 · 레슨 3.8': 'From code to running · Lesson 3.8',
  '코드 한 줄이 컴파일러와 어셈블러, 운영체제 로더, 파이썬 인터프리터를 거쳐 CPU에서 실행되기까지를 한 정거장씩 따라가 보세요.':
    'Follow one line of code station by station through the compiler and assembler, the operating system\'s loader and the Python interpreter until it runs on the CPU.',
  '작성한 코드는 어떤 과정을 거쳐 CPU에서 돌아갈까요? 코드 한 줄을 컴파일러, 로더, 인터프리터를 따라 한 정거장씩 옮겨 보세요.':
    'What does the code you write go through before it runs on a CPU? Move one line of code station by station through the compiler, loader and interpreter.',
  '소스 코드가 번역되고 메모리에 올라가 CPU에서 실행되기까지의 장면': 'Source code being translated, loaded into memory and run on the CPU',
  '코드가 지나가는 정거장': 'Stations the code passes through', '"다음 단계"를 누르면 코드가 오른쪽으로 움직입니다.': 'Press "Next step" and the code moves to the right.',
  '"다음 단계"를 눌러 코드를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the code one station at a time. Prediction questions come up along the way.',
    '번역·적재 도구': 'Translating and loading tool',
  // Stations and badges
  '소스 코드': 'Source code', '컴파일러': 'Compiler', '어셈블리': 'Assembly', '어셈블러': 'Assembler', '기계어': 'Machine code', '운영체제 로더': 'OS loader',
  '파이썬 번역기': 'Python translator', '바이트코드': 'Bytecode', '파이썬 가상 머신': 'Python VM', 'L1 캐시': 'L1 cache', '실행 파일': 'Executable',
  '표 찾기': 'Table lookup', '{#0}줄': '{0} {0|line|lines}', 'div 파일': 'div file', 'add 파일': 'add file', '낱말 {#0}개': '{0} {0|word|words}',
  '문법 오류': 'Syntax error', '문법 통과': 'Syntax OK', '0으로 나누기': 'Divide by 0', '실행 중': 'Running', '자리 정하기': 'Placing', '번역 중': 'Translating', '프로그램 + 값': 'Program + values', '해석 중': 'Interpreting',
  '번역': 'translate', '비트': 'bits', '읽기': 'read', '복사': 'copy', '0번지 명령': 'instruction at 0', '기계어 수십 개': 'dozens of machine instructions', '실행': 'run',
  '{#0}번지  {1}': 'address {0}  {1}',
  // Step 1
  '컴파일': 'Compiling',
  '컴파일러와 어셈블러가 코드를 비트로 바꾼다': 'The compiler and assembler turn code into bits',
  '사람이 쓴 "c = a + b"는 CPU가 바로 읽지 못합니다. 컴파일러가 코드를 낱말로 나누고 문법을 확인한 뒤 어셈블리로 옮기고, 어셈블러가 3.6의 연산 코드 표로 기계어 비트를 만듭니다. C, C++, Rust, Go 같은 언어가 이렇게 미리 번역해 두는 컴파일 언어입니다.':
    'A CPU cannot read "c = a + b" as a person wrote it. A compiler splits the code into words, checks the grammar and turns it into assembly, and an assembler uses the opcode table from 3.6 to make machine-code bits. Languages such as C, C++, Rust and Go are compiled languages that are translated ahead of time like this.',
  '한 줄짜리 코드가 어셈블리 네 줄, 기계어 네 바이트가 됩니다. 변수 a, b, c는 5, 6, 7번지라는 주소로 바뀌고, 이름은 기계어에 남지 않습니다.':
    'One line of code becomes four lines of assembly and four bytes of machine code. The variables a, b and c turn into addresses 5, 6 and 7, and their names do not survive in the machine code.',
  '왼쪽부터 소스 코드, 컴파일러, 어셈블리, 어셈블러, 기계어가 한 줄로 놓여 있습니다. 코드가 점을 타고 오른쪽으로 가며 모양이 바뀝니다.':
    'From the left, source code, compiler, assembly, assembler and machine code stand in a row. The code rides a dot to the right and changes shape as it goes.',
  '소스 코드 · add.c': 'Source code · add.c', '컴파일러 · 낱말로 나누기': 'Compiler · split into words', '어셈블리 · add.s': 'Assembly · add.s', '어셈블러 · 표에서 찾기': 'Assembler · look up the table', '기계어 · add': 'Machine code · add',
  '소스 코드 → 컴파일러': 'Source code → compiler', '컴파일러 → 어셈블리': 'Compiler → assembly', '어셈블리 → 어셈블러': 'Assembly → assembler', '어셈블러 → 기계어': 'Assembler → machine code',
  '어셈블러 · 비트': 'Assembler · bits',
  'LOAD A, [5]    ; a는 5번지': 'LOAD A, [5]    ; a is at 5', 'LOAD B, [6]    ; b는 6번지': 'LOAD B, [6]    ; b is at 6', 'STORE A, [7]   ; c는 7번지': 'STORE A, [7]   ; c is at 7',
  '컴파일러가 코드를 낱말(토큰) 다섯 개로 나누고, "이름 = 이름 + 이름"이 올바른 문법인지 확인합니다.': 'The compiler splits the code into five words (tokens) and checks that "name = name + name" is valid grammar.',
  '컴파일러가 변수에 주소를 정해 주고, 계산을 3.5 CPU의 명령으로 옮깁니다.': 'The compiler gives the variables addresses and turns the calculation into instructions for the CPU in 3.5.',
  '어셈블러가 연산 이름과 레지스터를 3.6의 표에서 찾아 비트로 바꿉니다.': 'The assembler looks up the operation names and registers in the table from 3.6 and turns them into bits.',
  '기계어 네 바이트가 나왔습니다. CPU가 바로 실행할 수 있는 형태입니다.': 'Four bytes of machine code come out, in a form the CPU can run directly.',
  '"c = a + b"는 어셈블리 몇 줄이 될까요?': 'How many lines of assembly does "c = a + b" become?',
  'a 읽기, b 읽기, 더하기, c에 쓰기로 네 줄입니다. CPU는 메모리끼리 바로 더하지 못합니다.': 'Four: read a, read b, add, write c. A CPU cannot add two memory cells directly.',
  '"LOAD A, [5]"의 기계어는?': 'What is the machine code for "LOAD A, [5]"?', '연산 001(LOAD), 레지스터 0(A), 주소 0101(5)입니다.': 'Opcode 001 (LOAD), register 0 (A), address 0101 (5).',
  // Step 2
  '실행 파일과 로딩': 'Executables and loading',
  '실행하면 운영체제가 기계어를 RAM에 올린다': 'When run, the operating system loads the machine code into RAM',
  '기계어는 실행 파일로 SSD에 저장됩니다. 아이콘을 누르면 운영체제의 로더가 파일을 읽어 RAM의 빈 곳에 올리고, CPU의 PC를 첫 명령의 주소로 맞춥니다. 그다음은 3.5에서 본 가져오기–해석–실행입니다. 3.7에서 본 것처럼 CPU는 SSD에서 직접 명령을 가져오지 않습니다.':
    'Machine code is saved on the SSD as an executable file. Click its icon and the operating system\'s loader reads the file, puts it in a free part of RAM, and sets the CPU\'s PC to the address of the first instruction. After that comes the fetch–decode–execute from 3.5. As seen in 3.7, the CPU does not fetch instructions straight from the SSD.',
  '파일은 SSD에서 RAM으로 한 번 복사되고, 그 뒤 CPU는 RAM의 0번지부터 명령을 가져옵니다. 같은 프로그램을 두 번 실행하면 RAM에 두 벌이 올라가 따로 돌아갑니다(4장 이후 프로세스).':
    'The file is copied once from the SSD to RAM, and then the CPU fetches instructions from address 0 in RAM. Run the same program twice and two copies go into RAM and run separately (processes, after chapter 4).',
  '왼쪽부터 기계어 파일, SSD, 운영체제 로더, RAM, CPU가 한 줄로 놓여 있습니다. 실행 파일이 SSD에 저장됐다가 로더를 거쳐 RAM에 올라가고, CPU가 첫 명령을 가져갑니다.':
    'From the left, the machine-code file, SSD, OS loader, RAM and CPU stand in a row. The executable is saved on the SSD, goes through the loader into RAM, and the CPU fetches the first instruction.',
  'SSD · 실행 파일': 'SSD · executable', 'add   (실행 파일, 4바이트 + 머리말)': 'add   (executable, 4 bytes + header)', '운영체제 · 로더': 'Operating system · loader',
  '파일 add 열기': 'Open the file add', 'RAM의 빈 곳 찾기: 0–7번지': 'Find free space in RAM: addresses 0–7', '값 칸 5–7번지 준비': 'Prepare value cells at 5–7',
  'RAM · 0–7번지': 'RAM · addresses 0–7', 'CPU · 가져오기 시작': 'CPU · fetching starts', '가져오기 → 해석 → 실행 (3.5)': 'Fetch → decode → execute (3.5)', '… 7번지에 7이 적힘': '… 7 is written at address 7',
  '기계어 → SSD': 'Machine code → SSD', 'SSD → 운영체제 로더': 'SSD → OS loader', '운영체제 로더 → RAM': 'OS loader → RAM', '운영체제 로더 · 복사': 'OS loader · copy', '실행 파일 → RAM · CPU': 'Executable → RAM · CPU',
  '기계어가 실행 파일 add로 SSD에 저장됩니다. 전원을 꺼도 남습니다.': 'The machine code is saved on the SSD as the executable add. It survives a power-off.',
  '실행을 누르면 운영체제의 로더가 파일을 읽고 프로그램이 쓸 RAM 자리를 정합니다.': 'Press run and the operating system\'s loader reads the file and sets aside RAM for the program.',
  '기계어와 변수 칸이 RAM에 올라갑니다. 이제 메모리 모습이 3.5의 시작 상태와 같습니다.': 'The machine code and variable cells go into RAM. Memory now looks the same as the starting state in 3.5.',
  '로더가 PC를 0으로 맞추면 CPU가 0번지부터 가져오기를 시작합니다. 프로그램이 돌기 시작했습니다.': 'When the loader sets PC to 0, the CPU starts fetching from address 0. The program has started running.',
  '실행하면 기계어는 먼저 어디로 갈까요?': 'When run, where does the machine code go first?', '로더는 실행 파일을 RAM에 올립니다. CPU는 RAM에서 명령을 가져옵니다.': 'The loader puts the executable into RAM. The CPU fetches instructions from RAM.',
  'CPU는 첫 명령을 어디서 가져올까요?': 'Where does the CPU fetch the first instruction from?', 'SSD의 파일': 'The file on the SSD', 'RAM의 0번지': 'Address 0 in RAM',
  'PC가 0이라 RAM 0번지의 LOAD A, [5]부터 가져옵니다.': 'PC is 0, so it starts by fetching LOAD A, [5] at address 0 in RAM.',
  // Step 3
  '인터프리터': 'The interpreter',
  '파이썬은 실행할 때마다 한 줄씩 해석한다': 'Python interprets line by line each time it runs',
  '파이썬은 다른 길을 씁니다. 코드를 미리 기계어로 바꾸지 않고, 실행할 때 바이트코드라는 중간 명령으로 바꾼 뒤 파이썬 가상 머신이 그 명령을 하나씩 읽어 처리합니다. 가상 머신 자체는 기계어로 된 프로그램이라, 바이트코드 하나를 처리하는 데 기계어 명령 수십 개를 씁니다.':
    'Python takes a different road. It does not turn code into machine code ahead of time; when run, it turns it into in-between instructions called bytecode, and the Python virtual machine (VM) reads and handles them one by one. The virtual machine is itself a machine-code program, so handling one bytecode instruction takes dozens of machine-code instructions.',
  '바이트코드는 CPU가 아니라 가상 머신이 읽습니다. 그래서 같은 계산이 컴파일한 기계어보다 보통 수십 배 느리지만, 고치고 바로 다시 실행하기 쉽고 어느 CPU에서나 같은 코드가 돕니다. 1장에서 쓴 파이썬 코드도 이 길로 실행됐습니다.':
    'Bytecode is read by the virtual machine, not the CPU. So the same calculation is usually tens of times slower than compiled machine code, but it is easy to fix and rerun at once, and the same code runs on any CPU. The Python code in chapter 1 ran this way too.',
  '왼쪽부터 파이썬 소스, 파이썬 번역기, 바이트코드, 파이썬 가상 머신, CPU가 한 줄로 놓여 있습니다. 바이트코드 한 줄마다 가상 머신이 CPU에 기계어 여러 개를 보냅니다.':
    'From the left, the Python source, the Python translator, bytecode, the Python virtual machine and the CPU stand in a row. For each line of bytecode the virtual machine sends several machine-code instructions to the CPU.',
  '소스 코드 · add.py': 'Source code · add.py', 'add.py → 파이썬 번역기': 'add.py → Python translator', '파이썬 번역기 → 바이트코드': 'Python translator → bytecode', '바이트코드 → 파이썬 가상 머신': 'Bytecode → Python virtual machine', '파이썬 가상 머신 → CPU': 'Python virtual machine → CPU',
  '낱말로 나누고 문법 확인': 'Split into words and check grammar', '바이트코드로 옮기기': 'Turn into bytecode', '바이트코드 · LOAD_NAME a': 'Bytecode · LOAD_NAME a', '가상 머신 · 한 줄씩': 'Virtual machine · line by line',
  '다음 바이트코드 읽기': 'Read the next bytecode', '무슨 명령인지 고르기': 'Pick which instruction it is', '그 일을 하는 기계어 실행': 'Run the machine code that does it', '… 4줄 반복': '… repeat for 4 lines',
  '가상 머신의 기계어 실행': 'Run the virtual machine\'s machine code', '바이트코드 1줄 ≈ 기계어 수십 개': '1 line of bytecode ≈ dozens of machine instructions',
  'python add.py를 실행하면 먼저 코드를 확인하고 바이트코드로 옮깁니다.': 'Running python add.py first checks the code and turns it into bytecode.',
  '어셈블리와 비슷하지만 어느 CPU의 명령도 아닌, 파이썬 가상 머신용 명령입니다.': 'Like assembly, but not instructions for any CPU: instructions for the Python virtual machine.',
  '가상 머신이 바이트코드를 한 줄씩 읽어 무엇을 할지 고릅니다. CPU의 가져오기–해석–실행을 소프트웨어로 한 번 더 하는 셈입니다.': 'The virtual machine reads the bytecode line by line and picks what to do: the CPU\'s fetch–decode–execute done once more in software.',
  'CPU가 실제로 실행하는 것은 가상 머신의 기계어입니다. 바이트코드 한 줄마다 기계어 수십 개가 돕니다.': 'What the CPU actually runs is the virtual machine\'s machine code. Dozens of machine instructions run for each line of bytecode.',
  'CPU는 이 바이트코드를 바로 실행할 수 있을까요?': 'Can the CPU run this bytecode directly?', '예': 'Yes', '아니요': 'No',
  '바이트코드는 3.6의 연산 코드 표에 없는 명령입니다. 가상 머신이 읽어서 대신 처리합니다.': 'Bytecode instructions are not in the opcode table from 3.6. The virtual machine reads them and handles them instead.',
  '컴파일한 기계어와 비교하면 파이썬은 보통 어떨까요?': 'Compared with compiled machine code, how is Python usually?', '더 빠르다': 'Faster', '비슷하다': 'About the same', '더 느리다': 'Slower',
  '한 번 더 해석하는 단계가 있어 같은 계산에 기계어를 훨씬 많이 씁니다. 대신 쓰고 고치기가 편합니다.': 'There is one more interpreting stage, so the same calculation uses far more machine code. In exchange it is easier to write and fix.',
  // Step 4
  '오류는 어디서': 'Where errors happen',
  '오류는 번역할 때도, 실행할 때도 생긴다': 'Errors happen both when translating and when running',
  '문법이 틀린 코드는 번역 단계에서 멈추고 실행 파일이 만들어지지 않습니다(컴파일 오류). 문법은 맞아도 실행해 봐야 알 수 있는 문제도 있습니다. b가 0일 때 a / b를 계산하면 CPU가 실행하는 중에 멈춥니다(실행 시간 오류). 1.6에서 본 오류 메시지는 둘 중 하나입니다.':
    'Code with wrong grammar stops at the translation stage and no executable is made (a compile error). Some problems only show up when the code runs, even when the grammar is right. Working out a / b when b is 0 stops the CPU while running (a runtime error). The error messages in 1.6 are one of these two.',
  '"c = a +"는 컴파일러에서 빨간 오류로 멈춥니다. 고친 "c = a / b"는 무사히 번역되지만, CPU가 b = 0으로 나누려는 순간 멈춥니다. 번역기는 코드의 모양만 보고, 값은 실행할 때 정해지기 때문입니다.':
    '"c = a +" stops at the compiler with a red error. The fixed "c = a / b" translates fine, but stops the moment the CPU tries to divide by b = 0. A translator sees only the shape of the code, and values are settled only when it runs.',
  '왼쪽부터 소스 코드, 컴파일러, 실행 파일, RAM과 CPU가 한 줄로 놓여 있습니다. 틀린 코드는 컴파일러에서, 고친 코드는 CPU에서 오류로 멈춥니다.':
    'From the left, source code, compiler, executable, and RAM and CPU stand in a row. The wrong code stops with an error at the compiler, the fixed code at the CPU.',
  '컴파일 오류': 'Compile error', 'div.c:1: 문법 오류': 'div.c:1: syntax error', '"+" 뒤에 값이 없습니다': 'Nothing after "+"', '실행 파일을 만들지 않음': 'No executable made',
  '소스 코드 · 고침': 'Source code · fixed', '실행 파일 · div': 'Executable · div', '실행 시간 오류': 'Runtime error', 'DIV A, B 실행 중': 'Running DIV A, B', 'B = 0: 0으로 나눌 수 없음': 'B = 0: cannot divide by 0', '프로그램 중단': 'Program stopped',
  '컴파일러 → 실행 파일': 'Compiler → executable', '소스 코드 · div.c': 'Source code · div.c', '실행 파일 · 실행': 'Executable · run', 
  '컴파일러가 "+" 뒤에 값이 없다는 것을 찾고 멈춥니다. 실행 파일은 만들어지지 않습니다.': 'The compiler finds there is nothing after "+" and stops. No executable is made.',
  '코드를 "c = a / b"로 고쳐 다시 컴파일합니다. 문법은 맞습니다.': 'The code is fixed to "c = a / b" and compiled again. The grammar is right.',
  '실행 파일이 무사히 만들어졌습니다. b에 0이 들어 있다는 것은 아직 아무도 모릅니다.': 'The executable was made without trouble. Nobody knows yet that b holds 0.',
  'CPU가 DIV를 실행하다가 B가 0인 것을 보고 멈춥니다. 운영체제가 프로그램을 끝내고 오류를 알립니다.': 'The CPU runs DIV, sees that B is 0 and stops. The operating system ends the program and reports the error.',
  '"c = a +"의 오류는 언제 발견될까요?': 'When is the error in "c = a +" found?', '번역할 때': 'When translating', '실행할 때': 'When running',
  '문법은 코드 모양만 보면 알 수 있어서 컴파일러가 실행 전에 찾습니다.': 'Grammar can be judged from the code\'s shape alone, so the compiler finds it before running.',
  '"c = a / b"(b = 0)의 오류는 언제 발견될까요?': 'When is the error in "c = a / b" (b = 0) found?',
  'b의 값은 실행해야 알 수 있습니다. 그래서 테스트(1.6)로 여러 값을 넣어 봐야 합니다.': 'The value of b is known only when it runs. That is why tests (1.6) must try many values.',
};
