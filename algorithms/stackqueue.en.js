// English for 4.3 Stacks and queues. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Notes on the still pictures
  'A, B, C를 쌓음 → 꺼내면 C → B → A': 'A, B, C stacked → they come out C → B → A',
  'A, B, C가 줄 섬 → 꺼내면 A → B → C': 'A, B, C queued → they come out A → B → C',
  '( 다음 [ 를 쌓음 → 닫는 ) 와 맨 위 [ 가 다름 → 짝 불일치': '( then [ stacked → the closing ) does not match [ on top → mismatch',
  '먼저 처리: 큐는 앞의 A · 스택은 맨 위의 D': 'Handled first: A at the front of the queue · D on top of the stack',
  // Page
  '스택과 큐 · 레슨 4.3': 'Stacks and queues · Lesson 4.3',
  '값을 스택에 쌓고 큐에 줄 세우며 LIFO와 FIFO를 비교하고, 스택으로 괄호 짝을 확인해 보세요.':
    'Pile values on a stack and line them up in a queue to compare LIFO and FIFO, and check bracket pairs with a stack.',
  '먼저 넣은 것을 먼저 뺄까요, 나중에 넣은 것을 먼저 뺄까요? 값을 넣고 꺼내며 두 구조의 순서를 비교해 보세요.':
    'Does what went in first come out first, or what went in last? Put values in and take them out to compare the order of the two structures.',
  '값이 스택 탑에 쌓이고 큐 줄에 서는 장면': 'Values piling on a stack tower and standing in a queue line',
  '쌓는 탑과 서는 줄': 'A tower that piles and a line that queues', '넣기와 꺼내기': 'Put in and take out', '비우기': 'Empty', '모두 비웠습니다.': 'Everything emptied.',
  '버튼을 눌러 넣고 꺼내 보세요.': 'Press the buttons to put in and take out.',   '스택에 든 값': 'Values in the stack', '큐에 든 값': 'Values in the queue', '스택에서 꺼낸 순서': 'Order out of the stack', '큐에서 꺼낸 순서': 'Order out of the queue',
  '↓ 넣기 · ↑ 꺼내기 (맨 위만)': '↓ put in · ↑ take out (top only)', '앞 · 나감': 'Front · out', '뒤 · 들어옴': 'Back · in',
  '넣기 (push)': 'Push', '꺼내기 (pop)': 'Pop', '넣기 (enqueue)': 'Enqueue', '꺼내기 (dequeue)': 'Dequeue', '도착 (둘 다 넣기)': 'Arrive (put in both)', '처리 (둘 다 꺼내기)': 'Handle (take from both)',
  // Readouts
  '넣기(push): {0} 값을 맨 위에 올림 · 스택 [{1}]': 'Push: {0} goes on top · stack [{1}]', '넣기(push): {0} 값을 맨 위에 올림 · 스택 []': 'Push: {0} goes on top · stack []',
  '꺼내기(pop): 맨 위의 {0} 값을 꺼냄 · 스택 [{1}]': 'Pop: takes {0} off the top · stack [{1}]', '꺼내기(pop): 맨 위의 {0} 값을 꺼냄 · 스택 []': 'Pop: takes {0} off the top · stack []',
  '넣기(enqueue): {0} 값이 줄 맨 뒤에 섬 · 큐 [{1}]': 'Enqueue: {0} joins the back of the line · queue [{1}]', '넣기(enqueue): {0} 값이 줄 맨 뒤에 섬 · 큐 []': 'Enqueue: {0} joins the back of the line · queue []',
  '꺼내기(dequeue): 맨 앞의 {0} 값이 나감 · 큐 [{1}]': 'Dequeue: {0} leaves from the front · queue [{1}]', '꺼내기(dequeue): 맨 앞의 {0} 값이 나감 · 큐 []': 'Dequeue: {0} leaves from the front · queue []',
  '스택 [{0}]': 'stack [{0}]', '스택 []': 'stack []',
  '스택이 가득 찼습니다(이 장면에서는 6개까지).': 'The stack is full (up to 6 in this scene).', '줄이 가득 찼습니다(이 장면에서는 6개까지).': 'The line is full (up to 6 in this scene).',
  '스택이 비어 있어 꺼낼 것이 없습니다.': 'The stack is empty; there is nothing to take out.', '큐가 비어 있어 꺼낼 것이 없습니다.': 'The queue is empty; there is nothing to take out.',
  // Bracket check
  '검사할 괄호 고르기': 'Choose brackets to check', '괄호 글자': 'Bracket characters', '다음 글자': 'Next character', '짝이 틀린 괄호': 'Mismatched bracket',
  '검사할 괄호를 고르고 "다음 글자"를 눌러 보세요.': 'Choose brackets to check and press "Next character".',
  '"{0}" 검사를 시작합니다. "다음 글자"를 누르세요.': 'Starting to check "{0}". Press "Next character".',
  '"{0}"는 여는 괄호라 스택에 넣었습니다.': '"{0}" is an opening bracket, so it went onto the stack.',
  '"{0}"를 닫으려는데 스택이 비었습니다. 짝이 틀립니다.': 'Trying to close "{0}", but the stack is empty. The pairs do not match.',
  '"{0}"를 만나 맨 위 "{1}"를 꺼냈습니다. 짝이 맞습니다.': 'Met "{0}" and took "{1}" off the top. They match.',
  '"{0}"를 만났는데 맨 위는 "{1}"입니다. 짝이 틀립니다.': 'Met "{0}", but the top is "{1}". They do not match.',
  '끝까지 읽었고 스택이 비었습니다. 짝이 모두 맞습니다.': 'Read to the end and the stack is empty. Every pair matches.',
  '끝까지 읽었는데 스택에 여는 괄호가 남았습니다. 짝이 틀립니다.': 'Read to the end, but opening brackets are left on the stack. The pairs do not match.',
  '✓ 짝이 맞음': '✓ Pairs match', '✗ 짝이 틀림': '✗ Pairs do not match',
  // Step 1
  'A, B, C를 쌓음': 'Pile A, B, C', '꼭대기부터 꺼냄': 'Take out from the top',
  '스택은 나중에 넣은 것을 먼저 꺼낸다': 'A stack takes out first what went in last',
  '스택은 접시를 쌓듯 값을 위에 올리고(push), 꺼낼 때도 맨 위에서 꺼냅니다(pop). 나중에 들어온 것이 먼저 나가서 LIFO(Last In, First Out)라고 합니다. 1.3의 호출 스택이 바로 이 구조입니다. 맨 위 하나만 다루므로 넣기와 꺼내기 모두 한 번이면 됩니다(O(1)).':
    'A stack puts values on top like a pile of plates (push) and takes them off the top too (pop). The last in goes out first, so it is called LIFO (Last In, First Out). The call stack in 1.3 is exactly this structure. It only deals with the top one, so putting in and taking out each take one step (O(1)).',
  'A, B, C를 차례로 올리면 C가 맨 위에 있습니다. 꺼내면 C, B, A 순서로 나옵니다. 꺼낸 순서는 장면 오른쪽 위에 쌓입니다.':
    'Put A, B, C on in turn and C is on top. Take them out and they come in the order C, B, A. The order taken out piles up at the top right of the scene.',
  '바닥 판 위에 값 상자가 아래부터 쌓이는 탑이 있습니다. 넣으면 맨 위에 하나가 내려앉고, 꺼내면 맨 위 상자가 떠올라 오른쪽 꺼낸 줄로 갑니다.':
    'On a base plate is a tower where value boxes pile up from the bottom. Putting in sets one down on top; taking out lifts the top box and sends it to the row taken out on the right.',
  '"넣기"를 세 번 눌러 A, B, C를 쌓아 보세요.': 'Press "Push" three times to pile A, B, C.', 'C가 맨 위에 있습니다.': 'C is on top.',
  '지금 "꺼내기"를 누르면 무엇이 나올까요?': 'If you press take out now, what comes out?', '맨 위, 곧 가장 나중에 넣은 C가 먼저 나옵니다.': 'The top one, C, the last put in, comes out first.',
  '모두 꺼내 보세요.': 'Take everything out.', '넣은 순서의 거꾸로 나왔습니다.': 'They came out in reverse order.',
  // Step 2
  'A, B, C가 도착': 'A, B, C arrive', '줄 맨 앞부터 꺼냄': 'Take out from the front of the line',
  '큐는 먼저 넣은 것을 먼저 꺼낸다': 'A queue takes out first what went in first',
  '큐는 줄 서기입니다. 새 값은 줄 맨 뒤에 서고(enqueue), 꺼낼 때는 맨 앞에서 나갑니다(dequeue). 먼저 온 것이 먼저 나가서 FIFO(First In, First Out)라고 합니다. 앞과 뒤를 따로 기억해 두면 둘 다 한 번이면 됩니다(O(1)).':
    'A queue is a line. A new value joins the back (enqueue), and values leave from the front (dequeue). The first to come goes out first, so it is called FIFO (First In, First Out). Keeping track of the front and back separately makes both take one step (O(1)).',
  'A, B, C를 줄 세우면 A가 맨 앞입니다. 꺼내면 A, B, C 순서 그대로 나옵니다. 남은 값들이 한 칸씩 앞으로 당겨집니다.':
    'Line up A, B, C and A is at the front. Take them out and they come in the same order, A, B, C. The values left move up one place each.',
  '왼쪽이 앞, 오른쪽이 뒤인 줄이 있습니다. 넣으면 줄 맨 뒤에 서고, 꺼내면 맨 앞 상자가 나가 꺼낸 줄로 갑니다.':
    'There is a line with the front on the left and the back on the right. Putting in joins the back; taking out sends the front box to the row taken out.',
  '"넣기"를 세 번 눌러 A, B, C를 줄 세워 보세요.': 'Press "Enqueue" three times to line up A, B, C.', 'A가 맨 앞, C가 맨 뒤에 있습니다.': 'A is at the front and C at the back.',
  '맨 앞, 곧 가장 먼저 넣은 A가 먼저 나갑니다.': 'The front one, A, the first put in, goes out first.', '넣은 순서 그대로 나왔습니다.': 'They came out in the order they went in.',
  // Step 3
  '괄호 짝 맞추기': 'Matching brackets', '( 다음에 [ 를 쌓음': 'Pile [ after (', '닫는 )와 맨 위 [ 비교': 'Compare the closing ) with [ on top', '괄호 짝 불일치': 'Brackets do not pair',
  '스택으로 괄호의 짝을 확인한다': 'A stack checks that brackets pair up',
  '코드 편집기는 괄호 짝이 맞는지 스택으로 확인합니다. 글자를 왼쪽부터 읽으며 여는 괄호는 스택에 넣고, 닫는 괄호를 만나면 스택 맨 위를 꺼내 짝이 맞는지 봅니다. 끝까지 읽었을 때 스택이 비어 있으면 짝이 모두 맞습니다.':
    'Code editors check that brackets pair up using a stack. Reading characters from the left, an opening bracket goes onto the stack, and on meeting a closing bracket the top of the stack is taken off to see if they pair. If the stack is empty after reading to the end, every pair matches.',
  '"( [ ) ]"에서는 ")"를 만났을 때 맨 위가 "["라 짝이 틀립니다. 가장 최근에 연 괄호를 가장 먼저 닫아야 하므로 LIFO인 스택이 딱 맞습니다.':
    'In "( [ ) ]", when ")" is met the top is "[", so they do not pair. The most recently opened bracket must be closed first, so a stack, being LIFO, fits exactly.',
  '위에 검사할 괄호 글자 줄이 있고, 아래에 여는 괄호가 쌓이는 스택 탑이 있습니다.': 'Above is the row of bracket characters to check, and below is a stack tower where opening brackets pile up.',
  '"( [ ] ( ) )"를 끝까지 검사해 보세요.': 'Check "( [ ] ( ) )" to the end.', '닫을 때마다 맨 위가 짝이었고, 끝에 스택이 비었습니다.': 'Each close found its pair on top, and the stack was empty at the end.',
  '"( [ ) ]"를 골라 검사해 보세요.': 'Choose "( [ ) ]" and check it.', '")"를 만났을 때 맨 위가 "["라서 짝이 틀렸습니다.': 'When ")" was met the top was "[", so the pair was wrong.',
  // Step 4
  '어디에 쓰나': 'Where they are used', '같은 작업 A부터 D까지': 'The same jobs, A to D', '큐는 앞에서 · 스택은 위에서': 'Queue from the front · stack from the top', '첫 처리 대상 A vs D': 'First handled: A vs D',
  '같은 손님도 구조에 따라 순서가 바뀐다': 'The same customers come out in a different order in each structure',
  '같은 순서로 도착한 일 A, B, C, D를 스택과 큐에 넣고 하나씩 처리해 봅니다. 큐는 도착 순서대로, 스택은 거꾸로 처리합니다. 공정한 대기 줄, 프린터 대기열, 4.7의 너비 우선 탐색은 큐를, 실행 취소, 뒤로 가기, 깊이 우선 탐색은 스택을 씁니다.':
    'Put jobs A, B, C, D, arriving in that order, into a stack and a queue, and handle them one by one. The queue handles them in arrival order, the stack in reverse. Fair waiting lines, printer queues and the breadth-first search in 4.7 use queues; undo, the back button and depth-first search use stacks.',
  '"도착" 네 번 뒤 "처리"를 네 번 누르면 큐는 A, B, C, D, 스택은 D, C, B, A 순서로 나옵니다. 해 보기의 상황마다 어느 순서가 맞는지 골라 보세요.':
    'Press "Arrive" four times and then "Handle" four times, and the queue gives A, B, C, D while the stack gives D, C, B, A. For each situation in Try, choose which order fits.',
  '왼쪽에 스택 탑, 오른쪽에 큐 줄이 있습니다. 도착한 일은 둘 다에 들어가고, 처리하면 각자 하나씩 꺼냅니다.': 'On the left is a stack tower, on the right a queue line. An arriving job goes into both, and handling takes one out of each.',
  '"도착"을 네 번, "처리"를 네 번 눌러 보세요.': 'Press "Arrive" four times and "Handle" four times.', '큐는 A B C D, 스택은 D C B A.': 'Queue A B C D, stack D C B A.',
  '편집기의 실행 취소(Ctrl+Z)는 어떤 구조일까요?': 'Which structure is an editor\'s undo (Ctrl+Z)?', '가장 최근에 한 일부터 거꾸로 되돌립니다.': 'It undoes in reverse, starting from the most recent action.',
  '은행 번호표 대기는 어떤 구조일까요?': 'Which structure is waiting with a numbered ticket at a bank?', '먼저 온 손님이 먼저 처리돼야 공정합니다.': 'It is fair for the customer who came first to be served first.',
};
