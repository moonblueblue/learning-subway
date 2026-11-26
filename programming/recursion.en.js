// English for 1.5 Recursion. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the code: 팩 fact, 작은 smaller, 결과 result; fib, a, b and n stay as they are.
window.lessonText = {
  // Reading diagrams
  '팩(1)까지 내려간 뒤 곱하며 돌아온다': 'Go down to fact(1), then multiply on the way back',
  '팩(4)가 팩(3), 팩(2), 팩(1)을 차례로 부릅니다. 팩(1)은 n이 1이라 1을 돌려주고, 팩(2)는 2 × 1 = 2, 팩(3)은 3 × 2 = 6, 팩(4)는 4 × 6 = 24를 돌려줍니다.':
    'fact(4) calls fact(3), fact(2) and fact(1) in turn. fact(1) returns 1 because n is 1, then fact(2) returns 2 × 1 = 2, fact(3) returns 3 × 2 = 6 and fact(4) returns 4 × 6 = 24.',
  'n == 1 → 멈춤': 'n == 1 → stop', '바로 반환': 'returns at once', '호출 →': 'Calls →', '← 반환': '← Returns',
  '멈추는 조건이 없으면 팩(1)에서도 멈추지 않는다': 'Without a stop condition, even fact(1) does not stop',
  '멈추는 조건이 있으면 팩(2)가 팩(1)을 부르고 팩(1)이 1을 돌려주며 끝납니다. 조건이 없으면 팩(1)이 팩(0), 팩(0)이 팩(−1)을 부르며 층이 끝없이 쌓이다 스택이 넘칩니다.':
    'With a stop condition, fact(2) calls fact(1), fact(1) returns 1, and it ends. Without one, fact(1) calls fact(0), fact(0) calls fact(−1), and the layers pile up until the stack overflows.',
  '조건 있음': 'With the condition', '조건 없음': 'Without it', '스택 넘침': 'Stack overflow',
  'fib(3)은 fib(1)을 두 번 계산한다': 'fib(3) computes fib(1) twice',
  'fib(3)은 fib(2)와 fib(1)을 부르고, fib(2)는 다시 fib(1)과 fib(0)을 부릅니다. fib(1)이 두 번 계산되어 호출은 5번이고 결과는 1 + 1 = 2입니다.':
    'fib(3) calls fib(2) and fib(1), and fib(2) calls fib(1) and fib(0). fib(1) is computed twice, so there are 5 calls and the result is 1 + 1 = 2.',
  '다시 계산': 'computed again', '상자 5개 = 호출 5번 · 결과 2': '5 boxes = 5 calls · result 2', '1 반환': 'returns 1',
  // Page
  '재귀 · 레슨 1.5': 'Recursion · Lesson 1.5',
  '자기 자신을 부르는 함수가 호출 스택에서 어떻게 내려가고 다시 올라오는지, 팩토리얼과 피보나치로 살펴보세요.':
    'Use factorial and Fibonacci to see how a function that calls itself goes down the call stack and comes back up.',
  '자기 자신을 부르는 함수는 어떻게 끝날까요? 호출 스택이 내려갔다 다시 올라오는 모습을 따라가 보세요.':
    'How does a function that calls itself ever finish? Follow the call stack as it goes down and comes back up.',
  '재귀 호출로 같은 함수의 층이 쌓였다 사라지는 호출 스택': 'A call stack where levels of the same function pile up and disappear through recursive calls',
  // Stack and readouts
  '호출 스택': 'Call stack', '지금 실행 중인 층': 'Level running now', '층 = 함수 하나의 작업 공간': 'Level = the workspace of one function call',
  '돌려주는 값': 'Returned value', '호출': 'Call', '반환': 'Return', '없음': 'none', '· 맨 위': '· top', '맨 바깥': 'outermost',
  '{#0}층': 'level {0}', '{#0}번': '{0}', '{0} {#1}번': '{0} {1} times', '· 부른 횟수': '· calls made', '· 맨 위 ': '· top ',
  '{0} 부르기': 'Call {0}', '{0} 돌려주기': 'Return {0}', '{#0} 반환': 'returns {0}', '{0} 호출': '{0} called',
  '스택 넘침 · RecursionError': 'Stack overflow · RecursionError', '스택이 넘쳤습니다': 'The stack overflowed',
  '스택이 넘쳐 멈췄습니다. 처음부터 다시 볼 수 있습니다.': 'The stack overflowed and stopped. You can watch it again from the start.',
  // Code
  '팩': 'fact', '작은': 'smaller', '결과': 'result', '팩({0})': 'fact({0})',
  'def 팩(n):': 'def fact(n):', '작은 = 팩(n - 1)': 'smaller = fact(n - 1)', 'return n * 작은': 'return n * smaller',
  '결과 = 팩(4)': 'result = fact(4)', '결과 = fib(3)': 'result = fib(3)',
  '작은 = {0}': 'smaller = {0}', '결과 = {0}': 'result = {0}', '{0} · 작은 = {1}': '{0} · smaller = {1}', '{0}, 작은 = {1}': '{0}, smaller = {1}',
  '{0} · 결과 = {1}': '{0} · result = {1}', '팩 · n = {0}': 'fact · n = {0}',
  // Step 1
  '팩토리얼': 'Factorial',
  '자기 자신을 부르며 문제를 작게 만든다': 'It calls itself to make the problem smaller',
  '재귀는 함수가 자기 자신을 부르는 것입니다. 4! = 4 × 3!이고, 3! = 3 × 2!처럼 큰 문제를 한 단계 작은 같은 문제로 바꿉니다. 그리고 n이 1이면 더 부르지 않고 바로 1을 돌려줍니다. 이 멈추는 조건을 기저 조건이라고 합니다.':
    'Recursion is a function calling itself. 4! = 4 × 3!, and 3! = 3 × 2!: a big problem becomes the same problem one step smaller. When n is 1 it calls no further and returns 1 right away. This stopping condition is called the base case.',
  '팩(4), 팩(3), 팩(2), 팩(1) 층이 차례로 쌓입니다. 팩(1)이 1을 돌려주면 위층부터 2, 6, 24를 돌려주며 하나씩 사라집니다.':
    'Levels fact(4), fact(3), fact(2) and fact(1) pile up in turn. When fact(1) returns 1, the levels above return 2, 6 and 24 and disappear one by one.',
  '팩(4)가 팩(3)을, 팩(3)이 팩(2)를, 팩(2)가 팩(1)을 부르며 층이 네 개 쌓입니다. 팩(1)이 1을 돌려주자 차례로 2, 6, 24가 돌아오며 층이 사라지고, 결과는 24가 됩니다.':
    'fact(4) calls fact(3), fact(3) calls fact(2), and fact(2) calls fact(1), piling up four levels. When fact(1) returns 1, 2, 6 and 24 come back in turn as the levels disappear, and result becomes 24.',
  '팩(1)까지 내려간 뒤 곱셈': 'Multiply after going down to fact(1)', '함수 정의만 기억': 'Only the definition is remembered',
  'n이 1이 되었습니다. 이번에는 어디로 갈까요?': 'n has become 1. Where does it go this time?', '팩(0)을 부른다': 'Call fact(0)',
  'n == 1이 참이라 기저 조건에 걸립니다. 더 부르지 않고 1을 돌려줍니다.': 'n == 1 is true, so the base case applies. It calls no further and returns 1.',
  '맨 처음 부른 팩(4)가 돌려주는 값은?': 'What does fact(4), the first call, return?',
  '팩(3)이 6을 돌려줬으니 4 × 6 = 24입니다.': 'fact(3) returned 6, so 4 × 6 = 24.',
  // Step 2
  '기저 조건이 없으면': 'Without a base case', '정상 종료': 'Ends normally', '기저 조건 누락': 'Base case missing', '계속 호출': 'Keeps calling',
  '멈추는 조건 없음': 'No stopping condition', '팩(1)도 팩(0)을 호출': 'fact(1) calls fact(0) too', '호출 층이 계속 쌓임': 'Call levels keep piling up',
  '멈추는 조건이 없으면 끝없이 내려간다': 'Without a stopping condition it goes down forever',
  '같은 함수에서 if n == 1 부분을 빼면, n이 0, −1, −2로 계속 작아지며 호출이 끝나지 않습니다. 1.3에서 본 스택 넘침이 그대로 일어납니다. 재귀 함수를 쓸 때는 먼저 "언제 멈추는가"를 정해야 합니다.':
    'Take the if n == 1 part out of the same function and n keeps shrinking, 0, −1, −2, and the calls never end. The stack overflow from 1.3 happens just the same. When writing a recursive function, first decide "when does it stop".',
  '팩(1) 다음에도 팩(0), 팩(−1)…이 계속 쌓이다가 아홉 층에서 스택이 넘칩니다.':
    'After fact(1), fact(0), fact(−1)… keep piling up until the stack overflows at nine levels.',
  '기저 조건이 없는 팩(4)가 팩(3), 팩(2), 팩(1), 팩(0)…을 끝없이 부르며 층이 쌓이고, 아홉 층에서 스택이 넘쳐 멈춥니다.':
    'fact(4), with no base case, calls fact(3), fact(2), fact(1), fact(0)… without end, piling up levels until the stack overflows at nine and stops.',
  'n이 0이 되었습니다. 이제 멈출까요?': 'n has become 0. Will it stop now?', '멈춘다': 'It stops', '계속 부른다': 'It keeps calling',
  '멈추라는 조건이 없으니 팩(−1)을 또 부릅니다.': 'There is no condition telling it to stop, so it calls fact(−1) next.',
  // Step 3
  '같은 계산 반복': 'The same work again', '왼쪽 가지': 'Left branch', '오른쪽 가지': 'Right branch',
  'fib(3) 계산': 'Compute fib(3)', '두 갈래에서 fib(1)을 다시 호출': 'fib(1) called again on both branches', '호출 5번 · 결과 2': '5 calls · result 2',
  '재귀는 같은 계산을 여러 번 할 수도 있다': 'Recursion can do the same work more than once',
  '피보나치 수 fib(n)은 fib(n − 1) + fib(n − 2)입니다. 재귀로 그대로 쓰면 짧고 읽기 쉽지만, fib(3)만 구해도 fib(1)을 두 번 계산합니다. n이 커지면 같은 계산이 기하급수적으로 늘어나는데, 이를 피하는 방법은 4.9 동적 계획법에서 다룹니다.':
    'The Fibonacci number fib(n) is fib(n − 1) + fib(n − 2). Written directly as recursion it is short and easy to read, but just computing fib(3) works out fib(1) twice. As n grows the repeated work grows exponentially; how to avoid it is covered in 4.9 Dynamic programming.',
  '스택이 fib(3) → fib(2) → fib(1)로 쌓였다 줄었다를 반복합니다. 아래 줄의 "부른 횟수"에서 fib(1)이 두 번 불리는 것을 확인하세요.':
    'The stack grows and shrinks, fib(3) → fib(2) → fib(1), again and again. In "calls made" on the bottom line, check that fib(1) is called twice.',
  'fib(3)이 fib(2)와 fib(1)을, fib(2)가 다시 fib(1)과 fib(0)을 부릅니다. 모두 다섯 번 부르고, fib(1)은 두 번 계산됩니다. 결과는 2입니다.':
    'fib(3) calls fib(2) and fib(1), and fib(2) in turn calls fib(1) and fib(0). There are five calls in all, fib(1) is worked out twice, and the result is 2.',
  'fib(3)이 돌려주는 값은?': 'What does fib(3) return?',
  'fib(2) = 1, fib(1) = 1이라 1 + 1 = 2입니다.': 'fib(2) = 1 and fib(1) = 1, so 1 + 1 = 2.',
};
