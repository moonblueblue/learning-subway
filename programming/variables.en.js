// English for 1.1 Variables and values. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Variable names in the code are translated too, the same way everywhere they appear:
// 나이 age, 키 height, 가격 price, 개수 count, 합계 total, 임시 temp.
window.lessonText = {
  // Page
  '변수와 값 · 레슨 1.1': 'Variables and values · Lesson 1.1',
  '코드를 한 줄씩 실행하며 변수가 메모리 칸에 붙인 이름이라는 것과, 값을 읽고 쓰는 과정을 살펴보세요.':
    'Run code one line at a time to see that a variable is a name on a memory cell, and how values are read and written.',
  '변수에 값을 넣으면 컴퓨터 안에서는 무슨 일이 생길까요? 코드를 한 줄씩 실행하며 메모리 칸을 지켜보세요.':
    'What happens inside the computer when you put a value in a variable? Run the code line by line and watch the memory cells.',
  '코드 한 줄이 메모리 칸을 읽고 쓰는 장면': 'One line of code reading and writing memory cells',
  
  
  // Variables and code
  '나이': 'age', '키': 'height', '가격': 'price', '개수': 'count', '합계': 'total', '임시': 'temp',
  '나이 = 15': 'age = 15', '나이 = 16': 'age = 16', '키 = 160': 'height = 160', '나이 = 나이 + 1': 'age = age + 1',
  '가격 = 3000': 'price = 3000', '개수 = 2': 'count = 2', '합계 = 가격 × 개수': 'total = price × count', '가격 × 개수': 'price × count',
  '임시 = a': 'temp = a', '임시 = 5': 'temp = 5', 'b = 임시': 'b = temp', '임시 ← a': 'temp ← a', 'b ← 임시': 'b ← temp',
  '나이: {0}': 'age: {0}', '키: {0}': 'height: {0}', '가격: {0}': 'price: {0}', '개수: {0}': 'count: {0}', '합계: {0}': 'total: {0}', '임시: {0}': 'temp: {0}',
  '나이 {#0}': 'age {0}', '합계 칸 {#0}': 'total cell {0}', '가격 3000 · 개수 2': 'price 3000 · count 2',
  // Readouts and announcements
  
  
  
  '"한 줄 실행"을 눌러 다음 줄을 실행해 보세요. 예측 문제가 있는 줄에서는 먼저 답을 고릅니다.':
    'Press "Run one line" to run the next line. On a line with a prediction question, choose your answer first.',
  '100번지 나이: 15 → CPU 15 + 1 = 16 → 100번지 나이: 16': 'address 100 age: 15 → CPU 15 + 1 = 16 → address 100 age: 16',
  '나이 = 15 → 100번지 빈 칸에 쓰기 → 100번지 나이: 15': 'age = 15 → write to the empty cell at address 100 → address 100 age: 15',
  // Step 1
  '변수 만들기': 'Making variables',
  '변수는 메모리 칸에 붙인 이름이다': 'A variable is a name on a memory cell',
  '메모리는 번호(주소)가 붙은 칸이 줄지어 있는 곳입니다. "나이 = 15"라고 쓰면 컴퓨터는 빈 칸 하나를 골라 15를 적고, 그 칸에 "나이"라는 이름표를 붙입니다. 이름표 덕분에 우리는 100번지 같은 주소를 외우지 않고 이름으로 값을 다룰 수 있습니다.':
    'Memory is a row of cells, each with a number (an address). Writing "age = 15" makes the computer pick an empty cell, write 15 in it and put the label "age" on it. Thanks to the label, we work with values by name instead of remembering addresses like 100.',
  'CPU에서 메모리 칸으로 값이 가고, 칸 위에 이름표가 붙습니다. 왼쪽부터 빈 칸을 차례로 씁니다.':
    'A value goes from the CPU to a memory cell, and a label appears on the cell. Empty cells are used in order from the left.',
  '메모리 칸 여섯 개(100–105번지)와 CPU가 있습니다. 한 줄을 실행할 때마다 CPU가 값을 빈 칸에 적고 그 칸에 변수 이름표를 붙입니다.':
    'There are six memory cells (addresses 100–105) and a CPU. Each line run makes the CPU write a value into an empty cell and put a variable label on it.',
  '빈 칸에 쓰기': 'Writing to an empty cell', '빈 칸에 이름과 값 저장': 'Name and value stored in an empty cell', '같은 칸에 이름과 값이 붙는다': 'Name and value go on the same cell',
  '"키"는 몇 번지 칸에 들어갈까요?': 'Which address will "height" go into?',
  '100번지는 "나이"가 쓰고 있으니 다음 빈 칸인 101번지를 씁니다.': 'Address 100 is used by "age", so the next empty cell, address 101, is used.',
  // Step 2
  '값 바꾸기': 'Changing a value',
  '새 값을 넣으면 예전 값은 지워진다': 'Putting in a new value erases the old one',
  '"나이 = 나이 + 1"은 수학의 등식이 아니라 명령입니다. 오른쪽부터 읽어서, 나이 칸의 값을 CPU로 가져오고, 1을 더한 뒤, 그 결과를 다시 나이 칸에 적으라는 뜻입니다. 칸에는 값이 하나만 들어가므로 예전 값은 사라집니다.':
    '"age = age + 1" is not an equation from maths but an instruction. Read it from the right: bring the value in the age cell to the CPU, add 1, and write the result back into the age cell. A cell holds only one value, so the old value disappears.',
  '파란 점(읽기)이 칸에서 CPU로 가고, CPU 위에 "15 + 1 = 16"이 뜬 뒤, 초록 점(쓰기)이 다시 칸으로 돌아와 값을 바꿉니다.':
    'A blue dot (read) goes from the cell to the CPU, "15 + 1 = 16" appears above the CPU, and a green dot (write) returns to the cell and changes its value.',
  '"나이" 칸의 값을 CPU가 읽어 1을 더하고, 결과를 같은 칸에 다시 적습니다. 칸의 값은 15에서 16, 17로 바뀝니다.':
    'The CPU reads the value in the "age" cell, adds 1 and writes the result back into the same cell. The cell\'s value changes from 15 to 16 to 17.',
  '이름 ‘나이’로 15 읽기': 'Read 15 by the name ‘age’', '같은 칸에 15 + 1 쓰기': 'Write 15 + 1 into the same cell', '나이를 읽고 같은 주소에 다시 쓴다': 'Read age and write back to the same address',
  '이 줄을 실행하면 "나이" 칸의 값은?': 'After this line runs, what is in the "age" cell?',
  '나이 칸의 15를 읽어 1을 더한 16을 다시 나이 칸에 적습니다.': 'It reads 15 from the age cell, adds 1 and writes 16 back into the age cell.',
  '같은 줄을 한 번 더 실행하면?': 'And if the same line runs again?',
  '이제 칸에는 16이 있으므로 16 + 1 = 17이 됩니다.': 'Now the cell holds 16, so it becomes 16 + 1 = 17.',
  // Step 3
  '여러 변수로 계산': 'Calculating with several variables',
  '계산은 여러 칸을 읽어 한 칸에 적는다': 'A calculation reads several cells and writes one',
  '"합계 = 가격 × 개수"를 실행하면 CPU는 가격 칸과 개수 칸을 모두 읽어 와서 곱하고, 결과를 새 칸 "합계"에 적습니다. 읽은 칸의 값은 그대로 남습니다. 읽기는 값을 복사해 오는 것이지 가져가 버리는 것이 아니기 때문입니다.':
    'Running "total = price × count" makes the CPU read both the price cell and the count cell, multiply them and write the result into a new cell, "total". The cells it read keep their values, because reading copies a value; it does not take it away.',
  '마지막 줄에서 파란 점 두 개가 가격 칸과 개수 칸에서 CPU로 가고, 초록 점 하나가 합계 칸으로 갑니다. 가격과 개수 칸의 값은 바뀌지 않습니다.':
    'On the last line, two blue dots go from the price and count cells to the CPU, and one green dot goes to the total cell. The price and count cells do not change.',
  '가격 3000과 개수 2를 각각 칸에 적은 뒤, CPU가 두 칸을 읽어 곱한 6000을 합계 칸에 적습니다.':
    'After price 3000 and count 2 are written into cells, the CPU reads both cells and writes their product, 6000, into the total cell.',
  '두 칸을 읽어 곱셈': 'Read two cells and multiply', '두 값을 읽고 결과만 새 칸에 쓴다': 'Read two values; only the result goes to a new cell',
  '"합계" 칸에는 무엇이 들어갈까요?': 'What goes into the "total" cell?',
  '칸에는 식이 아니라 계산한 결과 값이 들어갑니다. 3000 × 2 = 6000입니다.': 'A cell holds the calculated value, not the formula. 3000 × 2 = 6000.',
  // Step 4
  '두 값 바꾸기': 'Swapping two values',
  '두 값을 바꾸려다 하나를 잃는다': 'Trying to swap two values loses one',
  'a에는 5, b에는 7이 있을 때 두 값을 서로 바꾸고 싶다고 해 봅시다. "a = b"를 실행하면 a 칸에 7이 적히면서 원래 있던 5는 사라집니다. 그다음 "b = a"를 해도 a에는 이미 7뿐이라, 두 칸 모두 7이 됩니다.':
    'Say a holds 5 and b holds 7, and you want to swap them. Running "a = b" writes 7 into the a cell and the 5 that was there disappears. Then "b = a" finds only 7 in a, so both cells end up 7.',
  '세 번째 줄에서 a 칸의 5가 7로 덮입니다. 네 번째 줄에서 b에 a를 적어도 7이 그대로 들어갑니다.':
    'On the third line, the 5 in the a cell is overwritten with 7. On the fourth line, writing a into b just puts 7 there.',
  'a에 5, b에 7을 적은 뒤 a = b, b = a를 실행합니다. a의 원래 값 5가 먼저 지워져서 두 칸 모두 7이 됩니다.':
    'After writing 5 to a and 7 to b, a = b and b = a run. The original 5 in a is erased first, so both cells become 7.',
  'a = b 후 b = a': 'a = b, then b = a', '먼저 덮어쓰면 원래 값 5가 사라진다': 'Overwriting first loses the original 5',
  '이 줄을 실행하면 b는 얼마가 될까요?': 'After this line runs, what will b be?',
  'a 칸은 앞 줄에서 이미 7로 바뀌었습니다. 5는 어디에도 남아 있지 않습니다.': 'The a cell already changed to 7 on the line before. The 5 is gone everywhere.',
  // Step 5
  '임시 변수': 'A temporary variable',
  '잠깐 맡겨 둘 칸이 있으면 바꿀 수 있다': 'With a cell to hold one value, you can swap',
  '사라질 값을 먼저 다른 칸에 적어 두면 됩니다. "임시 = a"로 5를 맡겨 둔 뒤 a에 b의 7을 적고, 마지막으로 b에 임시의 5를 적습니다. 칸 하나를 더 쓰는 대신 값을 잃지 않습니다.':
    'Write the value that would be lost into another cell first. "temp = a" keeps 5 aside, then b\'s 7 is written into a, and finally temp\'s 5 is written into b. One extra cell means no value is lost.',
  '세 번째 줄에서 5가 임시 칸으로 복사되고, 마지막 줄에서 임시 칸의 5가 b 칸으로 갑니다.':
    'On the third line, 5 is copied into the temp cell; on the last line, the 5 in temp goes to the b cell.',
  'a의 5를 임시 칸에 먼저 적어 두고, a에 b의 7을, b에 임시의 5를 적어 두 값을 바꿉니다.':
    'The 5 in a is first written to the temp cell, then b\'s 7 goes into a and temp\'s 5 into b, swapping the two values.',
  '5를 임시에 보관한 뒤 두 칸을 바꾼다': 'Keep 5 in temp, then swap the two cells', '임시에 5를 보관하고 교환': 'Keep 5 in temp and swap', '교환 완료': 'Swap done',
  'a의 5를 임시에 복사한 후 b의 7을 a에 쓰고, 임시의 5를 b에 씁니다.': 'Copy a\'s 5 into temp, write b\'s 7 into a, then write temp\'s 5 into b.',
  '마지막 줄을 실행하면 b는?': 'After the last line runs, what is b?',
  '임시 칸에 맡겨 둔 5를 읽어 b에 적습니다. 이제 a는 7, b는 5입니다.': 'It reads the 5 kept in temp and writes it into b. Now a is 7 and b is 5.',
};
