// English for 1.3 Functions and the call stack. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the code: 두배 double, 더하기 add, 평균 average, 바꾸기 change, 세기 count, 합 sum, 결과 result.
window.lessonText = {
  // Page
  '함수와 호출 스택 · 레슨 1.3': 'Functions and the call stack · Lesson 1.3',
  '함수를 부르고 돌아올 때 호출 스택에 층이 쌓이고 사라지는 모습을 코드를 한 줄씩 실행하며 살펴보세요.':
    'Run code one line at a time and watch levels pile up on the call stack as functions are called, and disappear as they return.',
  '함수를 부르고 돌아올 때 무엇이 쌓이고 사라질까요? 코드를 한 줄씩 실행하며 호출 스택을 지켜보세요.':
    'What piles up and disappears as a function is called and returns? Run the code line by line and watch the call stack.',
  '호출 스택': 'Call stack', '함수를 부를 때마다 층이 쌓이고 돌아올 때 사라지는 호출 스택': 'A call stack that gains a level with each call and loses it on return',
  '지금 실행 중인 층': 'Level running now', '돌려주는 값': 'Returned value', '호출': 'Call', '반환': 'Return', 
  '{#0}층': 'level {0}', '· 맨 위': '· top', '{0} 전달': '{0} passed down', '{0} 돌려주기': 'Return {0}', '{0} 부르기': 'Call {0}',
  '스택 넘침': 'Stack overflow', '스택 넘침 · RecursionError': 'Stack overflow · RecursionError', '스택이 넘쳤습니다': 'The stack overflowed',
  '스택이 넘쳐 멈췄습니다. 처음부터 다시 볼 수 있습니다.': 'The stack overflowed and stopped. You can watch it again from the start.',
  '없음': 'none', '중단': 'Stopped',
  // Code
  '두배': 'double', '더하기': 'add', '평균': 'average', '바꾸기': 'change', '세기': 'count', '합': 'sum', '맨 바깥': 'outermost', '바깥': 'outside',
  'def 두배(x):': 'def double(x):', 'y = 두배(5)': 'y = double(5)', '두배(5)': 'double(5)',
  'def 더하기(a, b):': 'def add(a, b):', 'def 평균(a, b):': 'def average(a, b):', '합 = 더하기(a, b)': 'sum = add(a, b)', 'return 합 / 2': 'return sum / 2',
  '결과 = 평균(4, 8)': 'result = average(4, 8)', '평균(4, 8)': 'average(4, 8)', '더하기(4, 8)': 'add(4, 8)',
  'def 바꾸기(x):': 'def change(x):', 'y = 바꾸기(x)': 'y = change(x)',
  'def 세기(n):': 'def count(n):', 'return 세기(n + 1)': 'return count(n + 1)', '세기(1)': 'count(1)',
  '두배 · x = {0}': 'double · x = {0}', '더하기 · a = {0}, b = {1}': 'add · a = {0}, b = {1}', '평균 · a = {0}, b = {1}': 'average · a = {0}, b = {1}',
  '맨 바깥 · x = {0}': 'outermost · x = {0}', '바꾸기 · x = {0}': 'change · x = {0}', '세기 · n = {0}': 'count · n = {0}',
  '두배: {0}': 'double: {0}', '합: {0}': 'sum: {0}', '결과: {0}': 'result: {0}',
  '더하기 → {0}': 'add → {0}', '평균 → {0}': 'average → {0}',
  // Badges
  '함수 정의만 기억': 'Only the definition is remembered', '두배(5) 호출': 'double(5) called', 'x = 5인 호출 층 생성': 'A call level with x = 5 is made',
  '함수 실행 전': 'Before the function runs', '함수 실행 중': 'While the function runs', '10 반환 후 그 층 제거': '10 returned, then the level removed', '두배 층 제거': 'double level removed',
  '평균(4, 8) 호출': 'average(4, 8) called', '이전 층이 끝나기 전에 새 층': 'A new level before the previous one ends', '더하기가 먼저 12 반환': 'add returns 12 first', '평균이 6 반환': 'average returns 6',
  '쌓이는 순서': 'Order of piling up', '풀리는 순서': 'Order of unwinding',
  '바깥 x = 1': 'Outside x = 1', '안쪽 x = 100': 'Inside x = 100', '함수 안의 x만 100으로 변경': 'Only the x inside the function becomes 100', '바깥 x는 여전히 1': 'The outside x is still 1',
  '층 = 함수 하나의 작업 공간': 'Level = one function\'s workspace',
  '종료 조건 없는 호출': 'Calls with no stop condition', '호출 때마다': 'With every call', '용량 도달': 'Capacity reached', '예시 스택 9층에서 중단': 'This example stops at level 9',
  'n이 10이 되면': 'When n reaches 10', '끝나지 않는다': 'Never ends',
  // Step 1
  '함수 부르기': 'Calling a function',
  '함수를 부르면 스택에 층이 하나 쌓인다': 'Calling a function adds a level to the stack',
  '함수를 부르면 컴퓨터는 그 함수만 쓸 작업 공간을 만들어 호출 스택 맨 위에 올립니다. 이 층에는 함수가 받은 값(매개변수)과 돌아갈 곳이 적혀 있습니다. 함수가 return으로 값을 돌려주면 그 층은 사라지고, 값은 부른 쪽으로 내려갑니다.':
    'Calling a function makes the computer create a workspace just for that function and put it on top of the call stack. This level holds the values the function received (parameters) and where to return to. When the function gives back a value with return, the level disappears and the value goes down to the caller.',
  '"두배(5)"를 부르면 맨 바깥 층 위에 x = 5가 적힌 두배 층이 쌓입니다. return하면 그 층이 떠올라 사라지고, 10이 아래층의 y로 내려갑니다.':
    'Calling "double(5)" puts a double level holding x = 5 on top of the outermost level. On return that level lifts away, and 10 goes down to y in the level below.',
  '호출 스택에 맨 바깥 층이 있습니다. 두배(5)를 부르면 x = 5를 가진 두배 층이 위에 쌓이고, 10을 돌려준 뒤 사라집니다. 맨 바깥 층의 y는 10이 됩니다.':
    'The call stack holds the outermost level. Calling double(5) puts a double level with x = 5 on top, which returns 10 and disappears. y in the outermost level becomes 10.',
  '두배(5)를 부르면 스택은 몇 층이 될까요?': 'After calling double(5), how many levels does the stack have?',
  '맨 바깥 층 위에 두배 층이 하나 더 쌓입니다.': 'One double level goes on top of the outermost level.',
  'return x * 2가 돌려주는 값은?': 'What does return x * 2 give back?', '이 줄이 돌려주는 값은?': 'What value does this line return?',
  '이 층의 x는 5라서 5 * 2 = 10을 돌려줍니다.': 'This level\'s x is 5, so it returns 5 * 2 = 10.',
  // Step 2
  '함수 안의 함수': 'A function inside a function',
  '나중에 부른 함수가 먼저 끝난다': 'The function called last ends first',
  '함수 안에서 다른 함수를 부르면 층이 하나 더 쌓입니다. 끝날 때는 맨 위층부터 차례로 사라집니다. 접시를 쌓고 맨 위부터 꺼내는 것과 같아서, 이런 구조를 스택(쌓아 둔 더미)이라고 부릅니다.':
    'Calling another function inside a function adds one more level. When they end, levels disappear from the top down. It is like stacking plates and taking them from the top, so this structure is called a stack.',
  '스택이 맨 바깥 → 평균 → 더하기 세 층까지 쌓였다가, 더하기가 먼저 12를 돌려주고 사라진 뒤, 평균이 6.0을 돌려주고 사라집니다.':
    'The stack grows to three levels, outermost → average → add; add returns 12 first and disappears, then average returns 6.0 and disappears.',
  '평균(4, 8)을 부르면 평균 층이 쌓이고, 평균이 더하기(a, b)를 부르면 그 위에 더하기 층이 쌓입니다. 더하기가 12를 돌려주며 먼저 사라지고, 평균이 6.0을 돌려주며 사라집니다.':
    'Calling average(4, 8) puts an average level on the stack, and when average calls add(a, b) an add level goes on top. add returns 12 and disappears first; average returns 6.0 and disappears.',
  '더하기를 부르면 스택 맨 위에는 어떤 층이 올까요?': 'When add is called, which level is on top of the stack?',
  '가장 최근에 부른 함수가 맨 위에 쌓입니다.': 'The most recently called function goes on top.',
  '더하기가 돌려준 12가 합에 들어 있으니 12 / 2 = 6.0입니다.': 'sum holds the 12 that add returned, so 12 / 2 = 6.0.',
  // Step 3
  '지역 변수': 'Local variables',
  '층마다 자기 변수를 따로 가진다': 'Each level has its own variables',
  '함수 안에서 만든 변수는 그 함수의 층에만 있습니다. 이름이 같아도 맨 바깥의 x와 함수 안의 x는 서로 다른 칸입니다. 그래서 함수 안에서 x를 100으로 바꿔도 바깥의 x는 그대로이고, 함수가 끝나면 함수 안의 x는 층과 함께 사라집니다.':
    'A variable made inside a function lives only in that function\'s level. Even with the same name, the outermost x and the x inside the function are different cells. So changing x to 100 inside the function leaves the outside x as it was, and when the function ends its x disappears with its level.',
  '바꾸기 층에서 x가 100이 되어도 맨 바깥 층의 x는 1 그대로입니다. 바깥으로 전해지는 것은 return한 값 100뿐입니다.':
    'Even when x becomes 100 in the change level, x in the outermost level stays 1. Only the returned value, 100, reaches the outside.',
  '맨 바깥 층에 x = 1이 있습니다. 바꾸기(x)를 부르면 바꾸기 층이 자기 x를 따로 가지며, 그 x를 100으로 바꾸고 돌려줍니다. 맨 바깥 층의 x는 1로 남고 y는 100이 됩니다.':
    'The outermost level has x = 1. Calling change(x) gives the change level its own x, which it changes to 100 and returns. The outermost x stays 1 and y becomes 100.',
  '이 줄을 실행하면 맨 바깥 층의 x는 얼마가 될까요?': 'After this line runs, what is x in the outermost level?',
  '이 x는 바꾸기 층에만 있는 지역 변수라서, 맨 바깥 층의 x와는 다른 칸입니다.': 'This x is a local variable that exists only in the change level, a different cell from the outermost x.',
  'y에는 어떤 값이 들어갈까요?': 'What value goes into y?',
  'return x는 바꾸기 층의 x, 곧 100을 돌려줍니다.': 'return x gives back the change level\'s x, which is 100.',
  // Step 4
  '스택 넘침': 'Stack overflow',
  '끝나지 않는 호출은 스택을 넘치게 한다': 'Calls that never end overflow the stack',
  '함수가 자기 자신을 부르는데 멈추는 조건이 없으면, 층이 끝없이 쌓입니다. 메모리는 유한하므로 결국 더 쌓을 수 없게 되고, 파이썬은 RecursionError를 내며 멈춥니다. 이것을 스택 넘침(스택 오버플로)이라고 합니다. 이 실험은 아홉 층에서 멈춥니다.':
    'If a function calls itself with no stop condition, levels pile up forever. Memory is limited, so eventually nothing more fits, and Python stops with a RecursionError. This is called a stack overflow. This lab stops at nine levels.',
  '세기 층이 n = 1, 2, 3 …으로 계속 쌓이다가, 아홉 층에서 "스택 넘침"이 뜨고 멈춥니다. 아무 층도 return하지 못합니다.':
    'count levels keep piling up with n = 1, 2, 3 …, until "Stack overflow" appears at nine levels and it stops. No level ever returns.',
  '세기(1)이 세기(2)를, 세기(2)가 세기(3)을 부르며 층이 계속 쌓입니다. 아홉 층이 되자 스택이 넘쳐 프로그램이 멈춥니다.':
    'count(1) calls count(2), count(2) calls count(3), and levels keep piling up. At nine levels the stack overflows and the program stops.',
  '이 호출은 언제 끝날까요?': 'When will these calls end?',
  '세기는 자기 자신을 다시 부를 뿐 멈추는 조건이 없습니다.': 'count only calls itself again; it has no stop condition.',
};
