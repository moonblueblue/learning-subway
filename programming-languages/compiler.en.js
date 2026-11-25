// English for 8A.1 Compilers. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '컴파일러 · 레슨 8A.1': 'Compilers · Lesson 8A.1',
  '소스 코드가 앞단에서 토큰, 구문 트리, 의미 분석을 거치고, 중간 표현(3주소 코드)으로 펼쳐지고, 상수 접기와 죽은 코드 제거로 짧아지고, 뒷단에서 레지스터를 골라 기계어가 되기까지를 따라가 보세요.':
    'Follow source code as the front end turns it into tokens, a syntax tree and a meaning check, it is spread out into an intermediate representation (three-address code), constant folding and dead code elimination shorten it, and the back end picks registers to make machine code.',
  '소스 코드는 어떤 단계를 거쳐 기계어가 될까요? 3.8에서 한 덩어리로 본 컴파일러를 열어, 앞단, 중간 표현, 최적화, 뒷단을 한 정거장씩 지나가 보세요.':
    'What stages does source code go through to become machine code? Open up the compiler you saw as one block in 3.8 and pass the front end, intermediate representation, optimisation and back end one station at a time.',
  '소스 코드가 앞단, 중간 표현, 최적화, 뒷단을 거쳐 기계어가 되는 장면': 'Source code becoming machine code through the front end, intermediate representation, optimisation and back end',
  '컴파일러 안의 정거장': 'Stations inside the compiler', '컴파일러의 단계': 'Stages of the compiler', '코드와 중간 결과': 'Code and intermediate results',
  '"다음 단계"를 누르면 코드가 오른쪽으로 움직입니다.': 'Press "Next step" and the code moves to the right.',
  '"다음 단계"를 눌러 코드를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the code one station at a time. Prediction questions come up along the way.',
  // Stations
  '소스 코드': 'Source code', '앞단 (렉서·파서)': 'Front end', '앞단': 'Front end', '구문 트리': 'Syntax tree', '의미 분석': 'Semantics',
  'IR 만들기': 'Make IR', '중간 표현 (IR)': 'IR', '중간 표현': 'Intermediate rep.', '최적화': 'Optimiser', '최적화된 IR': 'Optimised IR',
  '뒷단': 'Back end', '어셈블리': 'Assembly', '기계어': 'Machine code',
  '파서 (문법 오류)': 'Parser (syntax errors)', '의미 분석 (타입이 안 맞음)': 'Semantic analysis (types do not match)',
  '소스 코드 → 앞단 (렉서·파서)': 'Source code → Front end', '소스 코드 → 의미 분석': 'Source code → Semantics',
  '앞단 (렉서·파서) → 구문 트리': 'Front end → Syntax tree', '구문 트리 → 의미 분석': 'Syntax tree → Semantics', '구문 트리 → IR 만들기': 'Syntax tree → Make IR',
  'IR 만들기 → 중간 표현 (IR)': 'Make IR → IR', '중간 표현 (IR) → 최적화': 'IR → Optimiser',
  '최적화 → 최적화': 'Optimiser → Optimiser', '최적화 → 최적화된 IR': 'Optimiser → Optimised IR', '최적화된 IR → 뒷단': 'Optimised IR → Back end',
  '뒷단 → 어셈블리': 'Back end → Assembly', '어셈블리 → 기계어': 'Assembly → Machine code',
  'IR 만들기 · 3주소 코드': 'Make IR · three-address code', '최적화 · 1줄': 'Optimiser · 1 line', '어셈블리 · 비트': 'Assembly · bits', '소스 코드 · int z = "hi" + 1': 'Source code · int z = "hi" + 1',
  // Labels, holds and work panel
  '{#0}줄': '{0} {0|line|lines}', '4줄 → 1줄': '4 lines → 1', '2줄 지움': '2 lines removed', '노드 6개': '6 nodes', '명령 4개': '4 instructions', 
  '글자들': 'Characters', '트리': 'Tree', '검사': 'Check', '통과': 'Passed', '타입 오류': 'Type error', '트리 만듦': 'Tree built', '3주소 코드': 'Three-address code',
  '줄 줄이기': 'Fewer lines', '상수 접기': 'Constant folding', '복사 전파 · 죽은 코드 제거': 'Copy propagation · dead code elimination', '비트': 'Bits', 'A, B 사용': 'Uses A, B',
  '실행 중': 'Running', '레지스터 정하기': 'Choosing registers', '아래부터 펼치기': 'Spreading out from the bottom', '토큰과 트리': 'Tokens and tree',
  '소스 코드 (C 비슷한 언어)': 'Source code (a C-like language)', 'IR (쓰이지 않는 z가 하나 더 있음)': 'IR (with one more, unused z)', 'IR과 메모리 배치': 'IR and memory layout',
  '토큰: int x = 2 * 3 + y ;': 'Tokens: int x = 2 * 3 + y ;',
  '트리: 대입 x ← (더하기 (곱하기 2 3) y)': 'Tree: assign x ← (add (multiply 2 3) y)', '대입 x ← (더하기 (곱하기 2 3) y)': 'assign x ← (add (multiply 2 3) y)',
  '대입 x': 'assign x', '└ 더하기 +': '└ add +', '├ 곱하기 *': '├ multiply *',
  'y: 위에서 int로 선언됨 ✓': 'y: declared as int above ✓', 'x: int 칸에 int 값 ✓': 'x: int value in an int slot ✓',
  '"hi" + 1: 글자 + 정수 → 정수 칸에 넣을 수 없음': '"hi" + 1: text + integer → cannot go in an integer slot',
  '곱하기 노드 → t1 = 2 * 3': 'multiply node → t1 = 2 * 3', '더하기 노드 → t2 = t1 + y': 'add node → t2 = t1 + y', '대입 노드 → x = t2': 'assign node → x = t2',
  'z = x * 0     (z는 어디서도 안 쓰임)': 'z = x * 0     (z is never used)',
  't1 = 2 * 3 → t1 = 6 (컴파일할 때 계산)': 't1 = 2 * 3 → t1 = 6 (worked out at compile time)',
  'x = t2 → x = 6 + y (옮겨 담기 없앰)': 'x = t2 → x = 6 + y (copy removed)', 'z = x * 0 → z를 쓰는 곳이 없으니 지움': 'z = x * 0 → nothing uses z, so removed',
  'y는 5번지, x는 6번지, 상수 6은 7번지': 'y at address 5, x at 6, constant 6 at 7',
  'y → 레지스터 A': 'y → register A', '6 → 레지스터 B': '6 → register B', '결과 → A에 두었다가 x로': 'result → kept in A, then to x',
  'LOAD B, [7]    ; 상수 6': 'LOAD B, [7]    ; constant 6',
  // Step 1
  '토큰, 트리, 그리고 뜻 검사': 'Tokens, a tree, and a meaning check',
  '컴파일러는 크게 앞단, 중간, 뒷단으로 나뉩니다. 앞단은 6.3의 인터프리터처럼 코드를 토큰으로 자르고 구문 트리로 엮습니다. 컴파일러는 여기에 의미 분석을 더합니다. 변수가 선언되었는지, 타입이 맞는지(정수에 글자를 더하지 않는지)를 실행하기 전에 모두 확인합니다.':
    'A compiler splits roughly into a front end, a middle and a back end. Like the interpreter of 6.3, the front end cuts code into tokens and ties them into a syntax tree. A compiler adds semantic analysis: before anything runs, it checks that every variable was declared and every type matches (no adding text to an integer).',
  '"int x = 2 * 3 + y;"는 트리가 되고 타입 검사를 통과합니다. "int z = "hi" + 1;"은 문법은 맞지만 정수 칸에 글자를 넣으려 해 실행 전에 오류가 납니다. 인터프리터라면 실행하다가야 알았을 오류입니다(6.3의 이름 오류).':
    '"int x = 2 * 3 + y;" becomes a tree and passes the type check. "int z = "hi" + 1;" is grammatical but tries to put text in an integer slot, so it fails before running. An interpreter would only have found this while running (the name error of 6.3).',
  '왼쪽부터 소스 코드, 앞단, 구문 트리, 의미 분석이 놓여 있습니다.': 'From the left: source code, front end, syntax tree, semantic analysis.',
  '앞단이 토큰으로 자르고 구문 트리로 엮습니다.': 'The front end cuts it into tokens and ties them into a syntax tree.',
  '구문 트리가 만들어졌습니다.': 'The syntax tree is built.', '변수 선언과 타입을 모두 확인합니다.': 'Every variable declaration and type is checked.',
  '타입이 맞지 않아 컴파일이 멈춥니다. 실행 파일이 만들어지지 않습니다.': 'The types do not match, so compiling stops. No executable is made.',
  '"int z = "hi" + 1;"은 어느 단계에서 걸릴까요?': 'At which stage is "int z = "hi" + 1;" caught?',
  '"글자 + 수"는 문법으로는 식이지만, 정수 칸에 넣을 수 없는 타입이라 의미 분석에서 걸립니다. 실행 전입니다.':
    '"text + number" is an expression by the grammar, but its type cannot go in an integer slot, so semantic analysis catches it. Before running.',
  // Step 2
  '트리를 기계와 상관없는 단순한 명령 줄로 펼친다': 'Spread the tree into simple lines of instructions that ignore the machine',
  '중간 단계는 트리를 중간 표현(IR)으로 바꿉니다. 흔한 모양은 한 줄에 연산 하나만 하는 3주소 코드입니다. 계산 중간값은 t1, t2 같은 임시 이름에 담습니다. IR은 특정 CPU와 상관이 없어서, 같은 IR에서 여러 CPU용 기계어를 만들 수 있고 최적화도 여기서 합니다.':
    'The middle turns the tree into an intermediate representation (IR). A common shape is three-address code, one operation per line. In-between values go in temporary names like t1 and t2. IR has nothing to do with any particular CPU, so machine code for many CPUs can come from the same IR, and optimisation happens here too.',
  '트리가 "t1 = 2 * 3; t2 = t1 + y; x = t2" 세 줄이 되었습니다. 트리의 아래쪽(먼저 계산할 것)이 위 줄로 갑니다. 앞단은 언어마다, 뒷단은 CPU마다 따로 만들고 IR에서 만나게 하면 언어 n개 × CPU m개를 n + m개로 만들 수 있습니다.':
    'The tree became three lines: "t1 = 2 * 3; t2 = t1 + y; x = t2". The bottom of the tree (what is worked out first) goes to the top lines. Build a front end per language and a back end per CPU, meet them at the IR, and n languages × m CPUs takes only n + m pieces.',
  '왼쪽부터 구문 트리, IR 만들기, 중간 표현이 놓여 있습니다.': 'From the left: syntax tree, make IR, intermediate representation.',
  '트리를 아래부터 한 줄씩 펼칩니다.': 'The tree is spread out one line at a time from the bottom.', '한 줄에 연산 하나씩인 IR이 나왔습니다.': 'Out comes IR with one operation per line.',
  'IR 첫 줄이 "t1 = 2 * 3"인 까닭은?': 'Why is the first IR line "t1 = 2 * 3"?',
  '트리에서 가장 아래(먼저 계산할) 노드가 곱하기라서': 'The lowest node in the tree (worked out first) is the multiply', '곱하기가 알파벳 순으로 앞이라서': 'Multiply comes first alphabetically',
  '더하기는 곱하기의 결과가 있어야 계산할 수 있으므로 곱하기가 먼저 줄로 나옵니다.': 'The add needs the multiply\'s result, so the multiply comes out as a line first.',
  'IR까지는 CPU와 상관이 없습니다. 휴대폰용(ARM)과 PC용(x86) 기계어가 같은 코드에서 나오는 방법입니다.': 'Up to the IR nothing depends on the CPU. That is how phone (ARM) and PC (x86) machine code come from the same code.',
  // Step 3
  '같은 결과를 내는 더 짧은 코드로 바꾼다': 'Turn it into shorter code with the same result',
  '최적화는 결과는 그대로 두고 일을 줄입니다. 상수 접기는 "2 * 3"처럼 컴파일할 때 이미 아는 계산을 미리 해 6으로 바꿉니다. 복사 전파는 "x = t2"처럼 옮겨 담기만 하는 줄을 없앱니다. 죽은 코드 제거는 결과에 쓰이지 않는 계산을 지웁니다. 실행할 때마다 할 일을 컴파일할 때 한 번만 하는 셈입니다.':
    'Optimisation cuts work and leaves the result as it is. Constant folding works out at compile time what is already known, like "2 * 3", and puts 6. Copy propagation removes lines that only copy, like "x = t2". Dead code elimination removes work whose result is never used. Work done on every run is done once at compile time instead.',
  '네 줄이 한 줄 "x = 6 + y"로 줄었습니다. 프로그램이 백만 번 돌면 줄인 일도 백만 번 아낍니다. 최적화는 결과가 같을 때만 해야 하므로, 컴파일러는 바꿔도 안전한지 꼼꼼히 따집니다.':
    'Four lines shrank to one, "x = 6 + y". If the program runs a million times, the saved work is saved a million times. Optimisation is allowed only when the result stays the same, so the compiler checks carefully that a change is safe.',
  '왼쪽부터 중간 표현, 최적화, 최적화된 IR이 놓여 있습니다.': 'From the left: intermediate representation, optimiser, optimised IR.',
  '이미 아는 곱하기를 미리 계산합니다.': 'The multiply that is already known is worked out ahead of time.', '쓸모없는 줄을 지웁니다.': 'Useless lines are removed.',
  '같은 결과를 내는 한 줄이 남았습니다.': 'One line with the same result is left.',
  '"t1 = 2 * 3"을 "t1 = 6"으로 바꿔도 되는 까닭은?': 'Why may "t1 = 2 * 3" become "t1 = 6"?',
  '2와 3은 실행할 때마다 같아서 미리 계산해도 결과가 같다': '2 and 3 are the same on every run, so working it out early gives the same result', 'y가 6이라서': 'Because y is 6',
  '값이 바뀌지 않는 상수끼리의 계산은 컴파일할 때 한 번 하면 됩니다.': 'Arithmetic on constants that never change only needs doing once, at compile time.',
  'z = x * 0을 지워도 되는 조건은?': 'When may z = x * 0 be removed?',
  'z를 읽는 곳이 어디에도 없을 때': 'When nothing anywhere reads z', 'z가 0일 때는 언제나': 'Whenever z is 0',
  '쓰이지 않는 계산은 결과에 영향이 없습니다. 어딘가에서 z를 읽는다면 지우면 안 됩니다.': 'Unused work has no effect on the result. If something reads z, it must not be removed.',
  // Step 4
  '코드 생성': 'Code generation', '뒷단이 CPU 명령과 레지스터를 고른다': 'The back end picks CPU instructions and registers',
  '뒷단은 최적화된 IR을 특정 CPU의 명령으로 바꿉니다. 변수는 메모리 주소에, 계산 중간값은 레지스터에 둡니다. 레지스터는 몇 개 안 되므로(3.5의 A, B) 무엇을 어느 레지스터에 둘지 정하는 레지스터 할당이 중요합니다. 같은 IR이라도 다른 CPU용 뒷단을 쓰면 다른 기계어가 나옵니다.':
    'The back end turns the optimised IR into one CPU\'s instructions. Variables go at memory addresses and in-between values in registers. There are only a few registers (A and B in 3.5), so register allocation, deciding what goes in which register, matters. The same IR through a back end for another CPU gives different machine code.',
  '"x = 6 + y" 한 줄이 명령 네 개가 되었습니다. 최적화 전 IR을 그대로 옮겼다면 곱하기와 옮겨 담기까지 더 많은 명령이 필요했습니다. 3.8에서 한 번에 본 컴파일러 안에서 이렇게 여러 단계가 일합니다.':
    'The one line "x = 6 + y" became four instructions. Translating the IR from before optimisation would have needed more, for the multiply and the copy as well. This is how several stages work inside the compiler you saw all at once in 3.8.',
  '왼쪽부터 최적화된 IR, 뒷단, 어셈블리, 기계어가 놓여 있습니다.': 'From the left: optimised IR, back end, assembly, machine code.',
  '뒷단이 값을 어느 레지스터에 둘지 정합니다.': 'The back end decides which register each value goes in.',
  '3.5 CPU의 명령 네 개가 나왔습니다.': 'Out come four instructions for the CPU of 3.5.', '어셈블러가 3.6의 표로 비트를 만듭니다.': 'The assembler makes the bits with the table of 3.6.',
  '같은 IR을 다른 종류의 CPU용으로 컴파일하면?': 'What if the same IR is compiled for another kind of CPU?',
  '뒷단만 바꾸면 그 CPU의 다른 명령이 나온다': 'Swap only the back end and that CPU\'s different instructions come out', '앞단부터 모두 다시 만들어야 한다': 'Everything from the front end must be rebuilt',
  // Example note on the still picture.
  '토큰·트리 (노드 6개)': 'tokens, tree (6 nodes)', '의미 분석 통과': 'check passes', 'int z = "hi" + 1은 타입 오류': 'int z = "hi" + 1: type error, stop',
  'x = 2 * 3 + y의 트리': 'the tree of x = 2 * 3 + y', 'IR 3줄: t1 = 2 * 3 · t2 = t1 + y · x = t2': '3 IR lines: t1 = 2 * 3 · t2 = t1 + y · x = t2',
  'IR 4줄 (안 쓰이는 z = x * 0 포함)': '4 IR lines (with unused z = x * 0)', '6으로 접고 t1·t2를 합치고 z 줄을 지움': 'fold to 6, merge t1·t2, drop z', 'x = 6 + y 1줄': '1 line: x = 6 + y',
  '레지스터 A, B로 명령 4개': '4 instructions with registers A, B', '명령마다 1바이트, 기계어 4바이트': '1 byte each: 4 bytes of machine code',
  '펼침': 'Flattened', '3줄 줄임': '3 lines fewer', '레지스터 A, B': 'Registers A, B',
};
