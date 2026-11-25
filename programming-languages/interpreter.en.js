// English for 6.3 Interpreter. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// The code line "total = price * 3 + 500" and its names stay as written; token kinds become name, number, symbol.
window.lessonText = {
  // Page
  '인터프리터 · 레슨 6.3': 'Interpreter · Lesson 6.3',
  '코드 한 줄이 토큰으로 잘리고, 구문 트리로 엮이고, 실행기가 나무를 따라 계산해 변수 표에 쓰기까지와 문법 오류, 이름 오류가 드러나는 곳을 따라가 보세요.':
    'Follow a line of code as it is cut into tokens, woven into a syntax tree, and computed along the tree by the evaluator into the variable table, and see where syntax errors and name errors show up.',
  '코드 한 줄은 어떻게 읽히고 실행될까요? 파이썬 같은 인터프리터 안에서 한 줄이 토큰, 구문 트리, 계산을 거쳐 변수 표에 남기까지 한 정거장씩 옮겨 보세요.':
    'How is a line of code read and run? Inside an interpreter like Python\'s, move one line a station at a time through tokens, a syntax tree and calculation until it lands in the variable table.',
  '코드 한 줄이 렉서, 파서, 실행기를 거쳐 변수 표에 쓰이기까지의 장면': 'A line of code passing the lexer, parser and evaluator until it is written to the variable table',
  '인터프리터 안의 정거장': 'Stations inside the interpreter', '"다음 단계"를 누르면 코드가 오른쪽으로 움직입니다.': 'Press "Next step" and the code moves to the right.', '"다음 단계"를 눌러 코드를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the code one station at a time. Prediction questions come up along the way.',
  '코드': 'Code', '코드 한 줄': 'A line of code', '코드와 중간 결과': 'Code and in-between results', '인터프리터의 부품': 'Parts of the interpreter', '파일': 'File', '도구': 'Tool', '오류': 'Error', '통과': 'Passed',
  '렉서': 'Lexer', '파서': 'Parser', '실행기': 'Evaluator', '토큰': 'Tokens', '토큰 목록': 'Token list', '구문 트리': 'Syntax tree', '변수 표': 'Variable table', '나무': 'Tree', '글자들': 'Characters',
  // Legs and badges
  '코드 한 줄 → 렉서': 'Line of code → lexer', '렉서 → 토큰': 'Lexer → tokens', '토큰 → 파서': 'Tokens → parser', '파서 → 구문 트리': 'Parser → syntax tree', '구문 트리 → 실행기': 'Syntax tree → evaluator', '실행기 → 변수 표': 'Evaluator → variable table', '변수 표 → 실행기': 'Variable table → evaluator', '실행기 → 실행기': 'Evaluator → evaluator', '구문 트리 → 파서': 'Syntax tree → parser', '코드 → 파서': 'Code → parser',
  '글자 23개': '23 characters', '토큰 7개': '7 tokens', '노드 6개': '6 nodes', '노드 4개': '4 nodes', '5개': '5', '7개': '7', '24개': '24',
  '렉서 · 한 글자씩 읽기': 'Lexer · reading char by char', '렉서 · 토큰 7개': 'Lexer · 7 tokens', '파서 · 규칙 적용': 'Parser · applying rules', '파서 · 나무': 'Parser · tree', '규칙 적용': 'Rules applied', '실행기 · + 500': 'Evaluator · + 500', '실행기 · prise?': 'Evaluator · prise?',
  'price 찾음': 'Found price', 'prise 없음': 'No prise', '모양 바뀜': 'Shape changed', '다시 묶음': 'Regrouped', '문법 오류': 'Syntax error',
  // Tokens and tree lines
  '이름 total': 'name total', '이름 price': 'name price', '숫자 3': 'number 3', '숫자 500': 'number 500', '기호 =': 'symbol =', '기호 *': 'symbol *', '기호 +': 'symbol +',
  '대입 total': 'assign total', '└ 더하기 +': '└ add +', '├ 곱하기 *': '├ multiply *', '└ 곱하기 *': '└ multiply *', '├ 더하기 +': '├ add +', '│  ├ 이름 price': '│  ├ name price', '│  └ 숫자 3': '│  └ number 3', '└ 숫자 500': '└ number 500', '├ 이름 prise': '├ name prise', '└ 숫자 3': '└ number 3',
  '대입': 'Assign', '더하기': 'Add', '곱하기': 'Multiply', '곱하기 노드': 'Multiply node', '곱하기 계산': 'Compute multiply', '더하기 계산': 'Compute add', '변수 찾기': 'Look up variable', '곱하기부터': 'Multiply first',
  '곱하기의 왼쪽: 이름 price': 'Left of multiply: name price', '곱하기의 왼쪽: 이름 prise': 'Left of multiply: name prise',
  '변수 표: price = 1200': 'Variable table: price = 1200', '변수 표에서 price를 찾음': 'Found price in the variable table', '변수 표에 prise가 없음': 'No prise in the variable table',
  '이름 = 식 → 대입': 'name = expr → assign', '식 + 식 → 더하기': 'expr + expr → add', '식 * 식 → 곱하기 (더하기보다 먼저 묶음)': 'expr * expr → multiply (grouped before add)',
  '이름 = 이름 * 숫자 → 문법 맞음': 'name = name * number → valid grammar', '* 다음에 값이 와야 하는데 + 가 옴': 'A value must follow *, but + came',
  '나무 없음 · 한 줄도 실행 안 됨': 'No tree · not one line runs', '틀린 코드 두 줄': 'Two wrong lines of code',
  // Step 1
  '토큰 나누기': 'Splitting tokens', '띄어쓰기 → 버림': 'Spaces → dropped', 't o t a l → 글자가 이어지면 이름': 't o t a l → letters in a row make a name', '3, 5 0 0 → 숫자가 이어지면 숫자': '3, 5 0 0 → digits in a row make a number', '= * + → 기호': '= * + → symbols',
  '글자 줄을 뜻 있는 낱말(토큰)로 자른다': 'Cut the line of characters into meaningful words (tokens)',
  '인터프리터는 코드를 미리 기계어로 바꾸지 않고, 읽으면서 바로 실행하는 프로그램입니다. 첫 일은 글자 줄 "total = price * 3 + 500"을 낱말로 자르는 것입니다. 이 단계(렉서)는 글자를 하나씩 읽어 이름, 숫자, 기호를 가려내고 띄어쓰기는 버립니다.':
    'An interpreter is a program that runs code as it reads it, without turning it into machine code first. Its first job is to cut the line of characters "total = price * 3 + 500" into words. This stage (the lexer) reads one character at a time, sorts out names, numbers and symbols, and drops the spaces.',
  '글자 23개가 토큰 7개가 됩니다. 각 토큰에는 종류(이름, 숫자, 기호)가 붙습니다. 3.8에서 컴파일러가 처음 한 일과 같습니다.': '23 characters become 7 tokens. Each token carries a kind (name, number, symbol). It is the same first job the compiler did in 3.8.',
  '왼쪽부터 코드 한 줄, 렉서, 토큰 목록이 놓여 있습니다. 코드가 렉서를 지나며 토큰으로 잘립니다.': 'From the left stand a line of code, the lexer and the token list. The code is cut into tokens as it passes the lexer.',
  '렉서가 글자를 하나씩 읽으며 낱말의 경계를 찾습니다.': 'The lexer reads one character at a time, finding where words begin and end.', '토큰 일곱 개가 나왔습니다.': 'Seven tokens came out.',
  '"total = price * 3 + 500"은 토큰 몇 개일까요?': 'How many tokens is "total = price * 3 + 500"?',
  '이름 둘(total, price), 숫자 둘(3, 500), 기호 셋(=, *, +)입니다. 띄어쓰기는 토큰이 아닙니다.': 'Two names (total, price), two numbers (3, 500) and three symbols (=, *, +). Spaces are not tokens.',
  // Step 2
  '토큰을 계산 순서가 드러나는 나무로 엮는다': 'Weave the tokens into a tree that shows the order of calculation',
  '토큰을 나열만 해서는 무엇부터 계산할지 모릅니다. 파서는 문법 규칙(곱하기가 더하기보다 먼저, 괄호가 가장 먼저)에 따라 토큰을 구문 트리로 엮습니다. 나무의 아래쪽일수록 먼저 계산합니다. 4.6의 트리가 여기서 쓰입니다.':
    'A plain row of tokens does not say what to calculate first. The parser weaves the tokens into a syntax tree by grammar rules (multiply before add, brackets first of all). The lower in the tree, the earlier it is calculated. The trees of 4.6 are used here.',
  '곱하기 노드가 더하기 노드 아래에 들어갑니다. 그래서 price * 3을 먼저 하고 500을 더합니다. 괄호를 치면 나무 모양이 바뀝니다.': 'The multiply node goes under the add node. So price * 3 is done first, then 500 is added. Brackets change the shape of the tree.',
  '왼쪽부터 토큰 목록, 파서, 구문 트리가 놓여 있습니다. 토큰이 파서를 지나 나무 모양으로 엮입니다.': 'From the left stand the token list, the parser and the syntax tree. The tokens pass the parser and are woven into a tree.',
  '파서가 문법 규칙으로 토큰을 묶습니다.': 'The parser groups the tokens by grammar rules.', '구문 트리가 만들어졌습니다. 맨 위가 대입, 그 아래가 더하기, 가장 아래에 곱하기가 있습니다.': 'The syntax tree is built. Assign is at the top, add below it, and multiply at the bottom.',
  '이 나무에서 가장 먼저 계산되는 것은?': 'What is calculated first in this tree?', '곱하기 노드가 더하기 노드 아래에 있어 먼저 값을 내야 더하기가 계산될 수 있습니다.': 'The multiply node is under the add node, so it must produce its value first before add can be calculated.',
  '괄호를 치면': 'With brackets', '괄호 넣기': 'Add brackets', '괄호를 넣으면 더하기가 곱하기 아래로 내려갑니다.': 'With brackets, add moves down below multiply.',
  '"(price + 3) * 500"의 나무에서 대입 바로 아래 노드는?': 'In the tree of "(price + 3) * 500", which node is right under assign?',
  '괄호 안 더하기가 먼저 묶여 곱하기의 한쪽 가지가 됩니다. 마지막에 하는 계산이 위로 갑니다.': 'The add in brackets is grouped first and becomes one branch of multiply. The calculation done last goes on top.',
  // Step 3
  '나무 따라 실행': 'Running along the tree', '대입 → 더하기 → 곱하기로 내려감': 'Down from assign → add → multiply', '숫자 더하기': 'Adding numbers',
  '실행기가 나무를 아래부터 계산하고 변수 표에 쓴다': 'The evaluator calculates the tree from the bottom and writes to the variable table',
  '실행기는 구문 트리를 위에서부터 내려가며 "아래 가지의 값부터 구해 와"를 되풀이합니다(1.5의 재귀). 이름을 만나면 변수 표에서 값을 찾고, 숫자는 그대로 씁니다. 대입 노드에 이르면 계산한 값을 변수 표에 적습니다. 변수 표는 1.1에서 본 이름과 값의 짝입니다.':
    'The evaluator goes down the syntax tree from the top, repeating "get the values of the branches below first" (the recursion of 1.5). When it meets a name it looks up the value in the variable table; a number it uses as it is. At the assign node it writes the calculated value to the variable table. The variable table is the name-and-value pairs seen in 1.1.',
  'price를 표에서 1200으로 찾고, 1200 × 3 = 3600, 3600 + 500 = 4100을 계산한 뒤 total = 4100을 표에 적습니다. 다음 줄은 이 표를 그대로 이어 씁니다.': 'It finds price as 1200 in the table, calculates 1200 × 3 = 3600 and 3600 + 500 = 4100, and writes total = 4100 in the table. The next line carries on using this table.',
  '왼쪽부터 구문 트리, 실행기, 변수 표가 놓여 있습니다. 실행기가 나무의 노드를 하나씩 계산하며 변수 표를 읽고 씁니다.': 'From the left stand the syntax tree, the evaluator and the variable table. The evaluator calculates the tree\'s nodes one by one, reading and writing the variable table.',
  '실행기가 나무를 내려가 가장 아래 곱하기에 닿습니다.': 'The evaluator goes down the tree and reaches the multiply at the bottom.', '이름 price의 값을 변수 표에서 찾습니다.': 'It looks up the value of the name price in the variable table.', '찾은 값으로 곱하기를 계산합니다.': 'It calculates the multiply with the value found.', '더하기 노드를 계산합니다.': 'It calculates the add node.', '맨 위 대입 노드가 값을 변수 표에 적습니다.': 'The assign node at the top writes the value to the variable table.',
  '다음으로 계산할 노드와 결과는?': 'Which node is calculated next, and what is the result?', '더하기: 3600 + 500 = 4100': 'Add: 3600 + 500 = 4100', '곱하기: 3 * 500 = 1500': 'Multiply: 3 * 500 = 1500',
  '곱하기 값이 나왔으니 한 칸 위 더하기 노드가 계산됩니다.': 'With the multiply value in hand, the add node one level up is calculated.',
  '변수 표가 없다면 무엇을 할 수 없을까요?': 'Without the variable table, what could you not do?', '앞 줄에서 만든 값을 다음 줄에서 쓰기': 'Use a value made on one line on the next line',
  '이름과 값의 짝을 기억해 두어야 다음 줄의 price나 total이 무엇인지 알 수 있습니다.': 'Only by remembering name-and-value pairs can the next line know what price or total is.',
  // Step 4
  '문법 오류는 실행 전에, 이름 오류는 실행 중에 드러난다': 'Syntax errors show before running; name errors show while running',
  '오류는 어느 단계에서 발견되느냐로 나뉩니다. "total = price * + 3"처럼 문법이 틀리면 파서가 나무를 만들지 못해 한 줄도 실행되지 않습니다(SyntaxError). 문법은 맞지만 "total = prise * 3"처럼 없는 이름을 쓰면, 나무는 만들어지고 실행기가 변수 표를 찾을 때에야 오류가 납니다(NameError).':
    'Errors differ by the stage that finds them. With wrong grammar like "total = price * + 3", the parser cannot build a tree and not one line runs (SyntaxError). With valid grammar but a name that does not exist, like "total = prise * 3", the tree is built and the error comes only when the evaluator looks in the variable table (NameError).',
  '파서에서 멈춘 오류는 실행 전에 바로 알려 줍니다. 이름 오류는 그 줄에 실제로 닿아야 드러나서, 드물게 실행되는 줄에 숨어 있을 수 있습니다. 그래서 6.2의 테스트로 그 줄까지 실행해 봐야 합니다.': 'An error that stops the parser is reported right away, before running. A name error shows only when that line is actually reached, so it can hide in a rarely run line. That is why the tests of 6.2 must run as far as that line.',
  '왼쪽부터 코드, 파서, 구문 트리, 실행기, 변수 표가 놓여 있습니다. 두 가지 틀린 코드가 각각 다른 곳에서 멈춥니다.': 'From the left stand the code, the parser, the syntax tree, the evaluator and the variable table. Two kinds of wrong code each stop in a different place.',
  '파서가 * 뒤에 값이 없어서 나무를 만들지 못합니다.': 'The parser cannot build a tree because there is no value after *.',
  '①은 어디에서 멈출까요?': 'Where does ① stop?', '* 다음에 값이 없어 문법 규칙에 맞는 나무를 만들 수 없습니다. 실행 전에 멈춥니다.': 'There is no value after *, so no tree fits the grammar rules. It stops before running.',
  '② 파서 통과': '② passes the parser', '②는 문법이 맞아 파서를 통과합니다.': '② has valid grammar and passes the parser.', '② 구문 트리': '② Syntax tree', '나무가 만들어집니다. 오타는 아직 아무도 모릅니다.': 'The tree is built. Nobody knows about the typo yet.', '② 실행 시작': '② Starts running',
  '실행기가 곱하기를 계산하려 합니다.': 'The evaluator tries to calculate the multiply.', '변수 표에 prise가 없어 실행 중에 오류가 납니다.': 'There is no prise in the variable table, so an error happens while running.',
  '②의 오류가 실행할 때에야 드러나는 까닭은?': 'Why does ②\'s error show only when running?', '문법은 맞고, 이름이 있는지는 변수 표를 찾아봐야 알아서': 'The grammar is valid, and whether the name exists is known only by looking in the variable table', '파서가 오타를 무시해서': 'The parser ignores typos',
  '"이름 * 숫자"는 올바른 문법입니다. 그 이름이 실제로 있는지는 실행기가 표를 찾을 때 확인됩니다.': '"name * number" is valid grammar. Whether that name really exists is checked when the evaluator looks in the table.',
};
