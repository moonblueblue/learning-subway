// English for 4.9 Dynamic programming. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '동적 계획법 · 레슨 4.9': 'Dynamic programming · Lesson 4.9',
  '재귀 피보나치의 반복 계산, 메모이제이션, 표를 아래부터 채우기, 동적 계획법이 맞는 문제까지 문제로 익혀 보세요.':
    'Learn through questions the repeated work in recursive Fibonacci, memoization, filling a table from the bottom up, and which problems suit dynamic programming.',
  '같은 계산을 반복하지 않으려면 무엇을 기억해 둘까요? 피보나치와 계단 오르기로 동적 계획법을 문제로 익혀 보세요.':
    'What should be remembered to avoid repeating the same work? Learn dynamic programming through questions with Fibonacci and climbing stairs.',
  '{#0}가지': '{0} ways',
  // Step 1
  '같은 계산의 반복': 'The same work repeated', 'fib(4)의 두 갈래': 'Two branches of fib(4)', '양쪽에서 fib(2) 호출': 'fib(2) called on both sides', '같은 덧셈 반복': 'The same addition repeated',
  '재귀는 같은 계산을 몇 번이고 다시 한다': 'Recursion redoes the same work again and again',
  '피보나치 수는 fib(n) = fib(n − 1) + fib(n − 2), fib(1) = fib(2) = 1입니다. 1.5의 재귀로 그대로 옮기면 fib(5)를 구하는 동안 fib(3)을 두 번, fib(2)를 세 번 다시 계산합니다. n이 커지면 같은 계산이 폭발적으로 늘어 fib(40)만 해도 호출이 2억 번을 넘습니다.':
    'Fibonacci numbers are fib(n) = fib(n − 1) + fib(n − 2), with fib(1) = fib(2) = 1. Written directly as recursion from 1.5, computing fib(5) works out fib(3) twice and fib(2) three times. As n grows the repeated work explodes: fib(40) alone takes over 200 million calls.',
  '1.5에서 본 호출 스택이 fib(5) 한 번에 함수 9번 호출로 쌓였다 줄었다 합니다. 4.1의 말로는 O(2ⁿ)쯤으로, O(n²)보다도 훨씬 빠르게 늘어납니다.':
    'The call stack from 1.5 grows and shrinks through 9 function calls for a single fib(5). In the words of 4.1 it is about O(2ⁿ), growing far faster even than O(n²).',
  '재귀로 fib를 계산할 때 다음 문장이 참인지 고르세요.': 'When fib is computed by recursion, choose whether each sentence is true.',
  'fib(5)를 구하는 동안 fib(3)은 두 번 계산된다.': 'While fib(5) is computed, fib(3) is computed twice.', 'fib(5) = fib(4) + fib(3)이고, fib(4) 안에서 fib(3)을 또 부릅니다.': 'fib(5) = fib(4) + fib(3), and inside fib(4), fib(3) is called again.',
  'fib(6)의 호출 수는 fib(5)의 호출 수보다 하나 많다.': 'fib(6) makes one more call than fib(5).', 'fib(6)은 fib(5)와 fib(4)를 모두 부르므로 9 + 5 + 1 = 15번입니다. 거의 1.6배씩 늡니다.': 'fib(6) calls both fib(5) and fib(4), so it is 9 + 5 + 1 = 15. It grows by almost 1.6 times each step.',
  '재귀 fib가 느린 까닭은 덧셈이 어려워서다.': 'Recursive fib is slow because addition is hard.', '덧셈은 빠릅니다. 같은 부분 문제를 셀 수 없이 다시 푸는 것이 문제입니다.': 'Addition is fast. The trouble is solving the same subproblems over and over countless times.',
  '같은 n으로 fib를 부르면 언제나 같은 답이 나온다.': 'Calling fib with the same n always gives the same answer.', '그래서 한 번 구한 답을 적어 두면 다시 계산할 필요가 없습니다. 이것이 동적 계획법의 출발점입니다.': 'So once an answer is written down, it never needs working out again. This is where dynamic programming starts.',
  'fib(5)를 재귀로 구할 때 fib(2)는 몇 번 불릴까요? 호출 나무를 그려 세어 보세요.': 'When fib(5) is computed by recursion, how many times is fib(2) called? Draw the call tree and count.',
  '3번입니다. fib(5) → fib(4), fib(3) / fib(4) → fib(3), fib(2) / 두 fib(3)이 각각 fib(2)를 부르므로 1 + 2 = 3번입니다.': 'Three times. fib(5) → fib(4), fib(3) / fib(4) → fib(3), fib(2) / each of the two fib(3)s calls fib(2), so 1 + 2 = 3.',
  // Step 2
  '기억해 두기': 'Remembering', 'fib(2)를 한 번 계산': 'Compute fib(2) once', '답을 표에 저장': 'Store the answer in a table', '다음 fib(2)는 조회 한 번': 'The next fib(2) is one lookup',
  '한 번 구한 답을 표에 적어 둔다': 'Write each answer down in a table once it is found',
  '답을 구할 때마다 표(1.4의 딕셔너리나 리스트)에 적어 두고, 같은 질문이 오면 계산하지 않고 표에서 꺼냅니다. 이를 메모이제이션이라 합니다. fib(n)은 fib(1)부터 fib(n)까지 n개의 답만 있으므로 각각 한 번씩만 계산하면 됩니다. O(2ⁿ)이던 일이 O(n)이 됩니다.':
    'Each time an answer is found, write it in a table (a dictionary or list from 1.4), and when the same question comes again, take it from the table instead of working it out. This is called memoization. fib(n) has only n answers, fib(1) to fib(n), so each is worked out just once. Work that was O(2ⁿ) becomes O(n).',
  '4.5의 해시 테이블이 "n → fib(n)" 기억 상자 역할을 합니다. 파이썬에서는 함수 위에 @cache 한 줄로 이 일을 해 줍니다.': 'The hash table of 4.5 serves as the "n → fib(n)" memory box. In Python, one line, @cache, above the function does this.',
  '메모이제이션을 쓴 fib에 대해 다음 문장이 참인지 고르세요.': 'For fib with memoization, choose whether each sentence is true.',
  'fib(40)을 구하려면 서로 다른 계산이 40개쯤만 필요하다.': 'Computing fib(40) needs only about 40 different calculations.', 'fib(1)부터 fib(40)까지 한 번씩만 구하면 나머지는 표에서 꺼냅니다.': 'Work out fib(1) to fib(40) once each, and everything else comes from the table.',
  '표에 적어 둔 답은 언젠가 틀린 값이 될 수 있다.': 'An answer written in the table may one day become wrong.', '같은 입력에는 언제나 같은 답이 나오는 계산이므로 한 번 적은 답은 계속 맞습니다.': 'The calculation always gives the same answer for the same input, so an answer once written stays right.',
  '메모이제이션은 계산을 줄이는 대신 메모리를 조금 더 쓴다.': 'Memoization cuts work but uses a little more memory.', '답을 적어 둘 표가 필요합니다. 시간과 공간을 맞바꾸는 대표적인 예입니다.': 'It needs a table to write answers in: a classic case of trading space for time.',
  '3.7의 캐시도 "다시 구하지 않으려고 적어 두는" 같은 생각이다.': 'The cache in 3.7 is the same idea: "write it down so you need not fetch it again".', 'RAM까지 가는 대신 가까운 곳에 적어 둔 값을 쓰는 것과 같은 원리입니다.': 'It is the same principle as using a value kept nearby instead of going all the way to RAM.',
  '메모이제이션을 쓰면 fib(5)를 구할 때 실제로 계산하는 부분 문제는 무엇무엇일까요?': 'With memoization, which subproblems are actually worked out when computing fib(5)?',
  'fib(1), fib(2), fib(3), fib(4), fib(5) 다섯 개를 한 번씩입니다. 두 번째로 묻는 fib(3), fib(2)는 표에서 꺼냅니다.': 'The five, fib(1), fib(2), fib(3), fib(4), fib(5), once each. The second time fib(3) and fib(2) are asked, they come from the table.',
  // Step 3
  '표를 아래부터 채우기': 'Filling the table from the bottom', '계단 1칸: 1 · 2칸: 2': 'Stairs, 1 step: 1 · 2 steps: 2', '마지막에 1칸 또는 2칸 이동': 'Last move: 1 or 2 steps', '3칸은 2 + 1 = 3가지': '3 steps: 2 + 1 = 3 ways',
  '작은 문제부터 표를 채워 큰 답을 얻는다': 'Fill the table from small problems up to reach the big answer',
  '계단을 한 번에 1칸 또는 2칸씩 오를 때, n칸을 오르는 방법은 몇 가지일까요? 마지막 걸음이 1칸이면 남은 n − 1칸, 2칸이면 n − 2칸을 오르는 방법과 같으므로 ways(n) = ways(n − 1) + ways(n − 2)입니다. 재귀 대신 ways(1) = 1, ways(2) = 2부터 표의 칸을 차례로 채우면 반복문 하나로 끝납니다.':
    'Climbing stairs 1 or 2 steps at a time, how many ways are there to climb n steps? If the last move is 1 step it is the same as the ways to climb the remaining n − 1, and if 2 steps, n − 2, so ways(n) = ways(n − 1) + ways(n − 2). Instead of recursion, fill the table\'s cells in order starting from ways(1) = 1, ways(2) = 2, and a single loop does it.',
  '2.3의 귀납법처럼 앞의 칸이 맞으면 다음 칸도 맞습니다. 2.4의 경우의 수를 하나하나 세지 않고, 작은 답을 더해 큰 답을 만듭니다.': 'Like induction in 2.3, if the earlier cells are right the next one is too. Instead of counting the cases of 2.4 one by one, small answers are added to make big ones.',
  '계단 오르기 표(ways(1) = 1, ways(2) = 2)에서 답을 고르세요.': 'Choose the answers from the stair-climbing table (ways(1) = 1, ways(2) = 2).',
  '계단 3칸을 오르는 방법은?': 'Ways to climb 3 steps?', 'ways(2) + ways(1) = 2 + 1 = 3. (1,1,1), (1,2), (2,1)입니다.': 'ways(2) + ways(1) = 2 + 1 = 3: (1,1,1), (1,2), (2,1).',
  '계단 4칸을 오르는 방법은?': 'Ways to climb 4 steps?', 'ways(3) + ways(2) = 3 + 2 = 5입니다.': 'ways(3) + ways(2) = 3 + 2 = 5.',
  '계단 5칸을 오르는 방법은?': 'Ways to climb 5 steps?', 'ways(4) + ways(3) = 5 + 3 = 8입니다.': 'ways(4) + ways(3) = 5 + 3 = 8.',
  '계단 6칸을 오르는 방법은?': 'Ways to climb 6 steps?', 'ways(5) + ways(4) = 8 + 5 = 13입니다. 표의 칸이 피보나치 수와 같습니다.': 'ways(5) + ways(4) = 8 + 5 = 13. The table\'s cells are the Fibonacci numbers.',
  '한 번에 1, 2, 3칸까지 오를 수 있다면 점화식은 어떻게 바뀔까요?': 'If you can climb 1, 2 or 3 steps at a time, how does the recurrence change?',
  'ways(n) = ways(n − 1) + ways(n − 2) + ways(n − 3)입니다. 마지막 걸음의 종류가 셋이 되었기 때문입니다.': 'ways(n) = ways(n − 1) + ways(n − 2) + ways(n − 3), because there are now three kinds of last move.',
  // Step 4
  '언제 쓰나': 'When to use it', '작은 문제가 여러 경로에 등장': 'Small problems appear on many paths', '부분 답을 한 번씩 계산': 'Work out each partial answer once', '같은 문제의 재계산 감소': 'Less recomputing of the same problem',
  '쪼갠 문제들이 겹칠 때 쓴다': 'Use it when the split problems overlap',
  '동적 계획법은 두 조건이 맞을 때 빛납니다. 큰 문제의 답을 작은 문제의 답으로 만들 수 있고(최적 부분 구조), 그 작은 문제들이 여러 번 겹쳐 나타날 때(겹치는 부분 문제)입니다. 4.8의 최단 경로, 맞춤법 검사의 편집 거리, 가방에 넣을 물건 고르기(배낭 문제)가 대표적입니다.':
    'Dynamic programming shines when two conditions hold: a big problem\'s answer can be built from smaller problems\' answers (optimal substructure), and those smaller problems turn up again and again (overlapping subproblems). Shortest paths in 4.8, the edit distance in spell checkers, and choosing items for a bag (the knapsack problem) are typical.',
  '4.4의 병합 정렬도 문제를 쪼개지만 두 반쪽이 겹치지 않아서, 적어 둘 필요가 없습니다(분할 정복). 겹치는지가 동적 계획법과의 차이입니다.': 'Merge sort in 4.4 also splits a problem, but its two halves do not overlap, so nothing needs writing down (divide and conquer). Whether they overlap is the difference from dynamic programming.',
  '100원, 400원, 500원 동전으로 800원을 거슬러 줄 때 가장 큰 동전부터 고르면 늘 동전 수가 가장 적다.': 'Giving 800 won in change with 100, 400 and 500 won coins, always picking the largest coin first gives the fewest coins.',
  '500 + 100 × 3은 4개지만 400 × 2는 2개입니다. 모든 금액의 최소 개수를 표로 채우는 동적 계획법이 필요합니다.': '500 + 100 × 3 is 4 coins, but 400 × 2 is 2. Dynamic programming, filling a table of the fewest coins for every amount, is needed.',
  '"인공지능"과 "인공지농"이 몇 글자 다른지 구하는 편집 거리는 동적 계획법으로 푼다.': 'The edit distance, how many characters differ between "machine" and "machina", is solved with dynamic programming.',
  '앞부분끼리의 거리를 표에 채워 가며 전체 거리를 구합니다.': 'It fills a table with the distances between the beginnings of the two words to reach the whole distance.',
  '병합 정렬은 같은 부분 문제를 여러 번 풀기 때문에 메모이제이션이 크게 도움 된다.': 'Merge sort solves the same subproblems many times, so memoization helps it a lot.', '왼쪽 반과 오른쪽 반은 서로 다른 값이라 겹치지 않습니다. 적어 둬도 다시 쓸 일이 없습니다.': 'The left and right halves hold different values, so they do not overlap. Nothing written down would be used again.',
  '동적 계획법을 쓰면 어떤 문제든 빨라진다.': 'Dynamic programming makes any problem faster.', '부분 문제가 겹치지 않거나, 부분 문제의 수가 너무 많으면 도움이 안 됩니다. 4.10에서는 이런 방법으로도 어려운 문제를 봅니다.': 'It does not help when subproblems do not overlap or when there are too many of them. 4.10 looks at problems that stay hard even with such methods.',
  '동전 100원, 400원, 500원으로 800원을 만드는 최소 동전 수를 표로 구한다면 어떤 칸부터 채울까요?': 'To find with a table the fewest coins making 800 won from 100, 400 and 500 won coins, which cells do you fill first?',
  '0원(0개)부터 100원 단위로 800원까지 채웁니다. 각 금액에서 "100원 칸 + 1", "400원 뺀 칸 + 1", "500원 뺀 칸 + 1" 중 가장 작은 값을 적으면 800원 칸에 2가 나옵니다.':
    'Fill from 0 won (0 coins) up to 800 won in steps of 100. At each amount write the smallest of "the cell 100 won less + 1", "the cell 400 won less + 1" and "the cell 500 won less + 1", and the 800 won cell comes out as 2.',
};
