// English for 4.10 Problems computers cannot solve. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the argument: 끝날까 halts, 심술 contrary.
window.lessonText = {
  // Page
  '계산할 수 없는 문제 · 레슨 4.10': 'Problems computers cannot solve · Lesson 4.10',
  '끝나는지 알 수 없는 반복, 정지 문제, 답 확인은 쉽지만 찾기는 어려운 문제, 충분히 좋은 답을 찾는 방법을 문제로 익혀 보세요.':
    'Learn through questions about loops that may never end, the halting problem, problems whose answers are easy to check but hard to find, and ways to find good-enough answers.',
  '컴퓨터가 원리적으로 풀 수 없는 문제도 있을까요? 끝나는지 알 수 없는 코드와 정지 문제, 너무 오래 걸리는 문제를 문제로 익혀 보세요.':
    'Are there problems a computer cannot solve even in principle? Learn through questions about code that may never end, the halting problem, and problems that take far too long.',
  '현실적': 'Realistic', '비현실적': 'Unrealistic',
  // Step 1
  '끝날까?': 'Will it end?', '반복마다 n을 1씩 줄임': 'Each round lowers n by 1', '0에 도달해 종료': 'Reaches 0 and ends',
  '프로그램이 끝나는지 보는 것도 쉽지 않다': 'Even seeing whether a program ends is not easy',
  '1.2에서 끝나지 않는 반복을 만들어 봤습니다. 짧은 코드는 읽어 보면 끝나는지 알 수 있지만, 조금만 복잡해져도 사람도 컴퓨터도 판단하기 어렵습니다. 아래 코드들이 언젠가 멈추는지(입력 n은 1 이상의 정수) 따져 보세요. 마지막 것은 수학자들도 아직 모릅니다.':
    'In 1.2 you made a loop that never ends. With short code you can tell by reading whether it ends, but with a little more complexity it gets hard for people and computers alike. Work out whether each piece of code below eventually stops (the input n is a whole number of 1 or more). Even mathematicians do not yet know about the last one.',
  '1.2의 "강제로 멈춤"은 정해진 바퀴 수를 넘으면 멈추게 한 것이지, 반복이 끝날지 미리 안 것이 아닙니다.': 'The "Stopped" in 1.2 stopped the loop after a set number of rounds; it did not know in advance whether the loop would end.',
  '이 코드는 모든 입력에서 언젠가 끝날까요?': 'Does this code eventually end for every input?',
  '끝난다': 'It ends', '끝나지 않을 수 있다': 'It may not end', '아직 아무도 모른다': 'Nobody knows yet',
  'i가 1씩 늘어 언젠가 n에 닿습니다. n번 돌고 끝납니다.': 'i grows by 1 and reaches n eventually. It loops n times and ends.',
  'n이 홀수면 i는 0, 2, 4…로 n을 건너뛰어 영원히 돕니다.': 'If n is odd, i goes 0, 2, 4… and skips past n, looping forever.',
  'n이 매번 절반 이하로 줄어 1에 닿습니다. 4.1의 log n번입니다.': 'n halves or less each time and reaches 1: log n times, as in 4.1.',
  '콜라츠 추측입니다. 지금까지 시험한 모든 수에서 끝났지만, 언제나 끝나는지는 증명되지 않았습니다.': 'This is the Collatz conjecture. It has ended for every number tested so far, but it has not been proven to always end.',
  'n = 6으로 콜라츠 반복을 손으로 돌려 보세요. 몇 번 만에 1이 될까요?': 'Run the Collatz loop by hand with n = 6. After how many rounds does it reach 1?',
  '6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1, 여덟 번입니다. 27은 111번이나 걸립니다.': '6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1: eight times. 27 takes as many as 111.',
  // Step 2
  '정지 문제': 'The halting problem', '종료한다고 예측': 'Predicts it ends', '예측을 받은 프로그램은 계속 반복': 'The program given the prediction keeps looping', '자기 예측과 모순': 'Contradicts its own prediction',
  '모든 프로그램의 종료를 판정하는 프로그램은 없다': 'No program can decide whether every program ends',
  '앨런 튜링은 1936년에 이렇게 보였습니다. "프로그램과 입력을 받아 끝나면 예, 안 끝나면 아니요라고 언제나 정확히 답하는 프로그램 끝날까()"가 있다고 해 봅시다. 그러면 "끝날까(나, 나)가 예라고 하면 영원히 돌고, 아니요라고 하면 바로 끝나는" 심술 프로그램을 만들 수 있습니다. 심술에게 자기 자신을 주면 어느 답도 틀립니다.':
    'Alan Turing showed this in 1936. Suppose there is a program, halts(), that takes a program and an input and always answers correctly: yes if it ends, no if it does not. Then you can build a contrary program that "loops forever if halts(me, me) says yes, and ends at once if it says no". Give contrary itself, and every answer is wrong.',
  '2.3의 귀류법(아니라고 가정하고 모순을 보이기)과 1.5의 "자기 자신을 부르기"가 만나는 곳입니다.': 'This is where proof by contradiction from 2.3 (assume the opposite and show a contradiction) meets "calling yourself" from 1.5.',
  '심술 프로그램 논증에 대해 다음 문장이 참인지 고르세요.': 'About the contrary-program argument, choose whether each sentence is true.',
  '끝날까(심술, 심술)가 "예(끝난다)"라고 답하면, 심술은 영원히 돈다.': 'If halts(contrary, contrary) answers "yes (it ends)", contrary loops forever.',
  '심술은 일부러 반대로 행동하도록 만들었습니다. 그래서 "예"는 틀린 답이 됩니다.': 'Contrary was made to do the opposite on purpose, so "yes" becomes a wrong answer.',
  '끝날까(심술, 심술)가 "아니요"라고 답하면, 심술은 바로 끝난다.': 'If halts(contrary, contrary) answers "no", contrary ends at once.',
  '이번에도 반대로 행동하므로 "아니요"도 틀립니다. 어느 답도 맞을 수 없습니다.': 'Again it does the opposite, so "no" is wrong too. No answer can be right.',
  '이 모순은 컴퓨터가 더 빨라지면 사라진다.': 'This contradiction goes away with faster computers.', '속도 문제가 아니라 논리의 문제입니다. 어떤 컴퓨터, 어떤 언어로도 그런 프로그램은 만들 수 없습니다.': 'It is a problem of logic, not speed. No computer and no language can make such a program.',
  '특정한 프로그램 하나가 끝나는지는 알아낼 수 있는 경우도 많다.': 'Whether one particular program ends can often be found out.',
  '1단계의 코드처럼 많은 경우는 알 수 있습니다. 불가능한 것은 "모든 프로그램에 언제나 정답을 내는" 판정기입니다.': 'Like the code in step 1, many cases can be told. What is impossible is a checker that "always gives the right answer for every program".',
  '바이러스 검사기가 "이 프로그램이 언젠가 나쁜 일을 하는지"를 완벽하게 판정할 수 있을까요?': 'Can a virus checker perfectly decide "whether this program will ever do something bad"?',
  '없습니다. 그런 판정기가 있으면 정지 문제도 풀 수 있게 되기 때문입니다. 그래서 백신은 알려진 패턴과 수상한 행동을 찾는 어림 방법을 씁니다.': 'No. If such a checker existed, it could solve the halting problem too. So antivirus software uses rough methods that look for known patterns and suspicious behaviour.',
  // Step 3
  '풀 수 있지만 오래 걸리는': 'Solvable but slow', '방문 순서를 하나 제안': 'Propose one visiting order', '그 순서의 거리를 합산': 'Add up that order\'s distance', '모든 후보를 찾는 일보다 검증이 쉬움': 'Checking is easier than finding every candidate',
  '답 확인은 쉬운데 찾기는 너무 오래 걸리는 문제들': 'Problems whose answers are easy to check but take far too long to find',
  '풀 수는 있지만 너무 오래 걸리는 문제도 있습니다. 도시 n개를 한 번씩 들러 돌아오는 가장 짧은 길(외판원 문제)은 경우가 (n − 1)! ÷ 2가지라, 도시 20개면 6경 가지가 넘습니다. 그런데 "이 길이 1000km 이하인가?"를 확인하는 일은 쉽습니다. 답 확인은 빠른데 찾기는 빠른 방법이 알려지지 않은 문제를 NP 완전 문제라 합니다.':
    'Some problems can be solved but take far too long. The shortest route that visits n cities once each and returns (the travelling salesman problem) has (n − 1)! ÷ 2 cases, so 20 cities give over 60 quadrillion. Yet checking "is this route 1,000 km or less?" is easy. Problems whose answers are quick to check but for which no fast way to find them is known are called NP-complete.',
  '2.4의 경우의 수와 4.1의 증가 모양을 떠올려 보세요. n!은 O(2ⁿ)보다도 빠르게 늘어납니다. 4.8의 최단 경로는 빠른 방법이 있는 문제였습니다.': 'Recall the counting of 2.4 and the growth shapes of 4.1. n! grows even faster than O(2ⁿ). The shortest paths of 4.8 were a problem with a fast method.',
  '도시 5개의 외판원 문제는 경로가 12가지라 모두 따져 볼 수 있다.': 'A travelling salesman problem with 5 cities has 12 routes, so all of them can be checked.', '(5 − 1)! ÷ 2 = 12입니다. 작을 때는 전부 따지면 됩니다.': '(5 − 1)! ÷ 2 = 12. When small, just check them all.',
  '스도쿠는 다 채운 판이 맞는지 확인하기가 빈칸을 채우기보다 쉽다.': 'In sudoku, checking that a filled board is right is easier than filling the blanks.', '줄, 칸, 상자마다 겹치는 숫자가 없는지만 보면 됩니다. 채우는 일은 경우를 따져야 합니다.': 'You only check that no row, column or box repeats a number. Filling means weighing up cases.',
  'NP 완전 문제를 빠르게 푸는 방법이 없다는 것은 증명되었다.': 'It has been proven that NP-complete problems have no fast solution.', '아직 아무도 모릅니다. "P = NP?"는 컴퓨터 과학에서 가장 유명한 미해결 문제입니다.': 'Nobody knows yet. "P = NP?" is the most famous open problem in computer science.',
  '4.8의 다익스트라는 NP 완전 문제를 푼다.': 'Dijkstra from 4.8 solves an NP-complete problem.', '최단 경로는 빠른 방법이 있는 문제입니다. 모든 도시를 한 번씩 들러야 한다는 조건이 붙으면 외판원 문제가 됩니다.': 'Shortest path has a fast method. Add the condition of visiting every city once and it becomes the travelling salesman problem.',
  '도시가 10개일 때 외판원 문제의 경로는 몇 가지일까요? 1초에 1억 개를 따지면 얼마나 걸릴까요?': 'With 10 cities, how many routes does the travelling salesman problem have? At 100 million a second, how long would checking them take?',
  '9! ÷ 2 = 181,440가지로 눈 깜짝할 사이입니다. 도시 20개면 약 6 × 10¹⁶가지로 약 19년이 걸립니다.': '9! ÷ 2 = 181,440, done in the blink of an eye. With 20 cities it is about 6 × 10¹⁶, taking about 19 years.',
  // Step 4
  '그래도 푸는 방법': 'Solving them anyway', '후보 경로가 너무 많음': 'Too many candidate routes', '제한 시간 내에 좋은 후보 탐색': 'Search for a good candidate within a time limit', '쓸 수 있는 경로를 먼저 제공': 'Offer a usable route first',
  '완벽 대신 충분히 좋은 답을 찾는다': 'Find a good-enough answer instead of a perfect one',
  '정확한 답이 불가능하거나 너무 오래 걸리면, 현실에서는 질문을 바꿉니다. 시간 제한을 두고 그때까지의 답을 쓰거나, 빠른 어림 방법(휴리스틱)으로 꽤 좋은 답을 찾거나, 문제의 크기나 종류를 좁힙니다. 택배 경로, 시간표 짜기, 반도체 배치가 이렇게 풀립니다.':
    'When an exact answer is impossible or takes too long, in practice the question changes. Set a time limit and use the best answer so far, find a fairly good answer with a quick rough method (a heuristic), or narrow the size or kind of problem. Delivery routes, timetables and chip layouts are solved this way.',
  '1.2의 "강제로 멈춤"은 시간 제한, 4.4에서 입력 모양을 본 것은 문제 좁히기, 4.8의 A*는 어림을 쓰는 방법이었습니다.': 'The "Stopped" in 1.2 was a time limit, looking at the input\'s shape in 4.4 was narrowing the problem, and A* in 4.8 was a method using estimates.',
  '다음 대처가 현실적인지 고르세요.': 'Choose whether each approach is realistic.',
  '택배 기사 경로를 "가장 가까운 다음 집부터" 고르는 방법으로 짠다.': 'Plan a courier\'s route by always picking "the nearest next house".', '최적은 아니어도 금방 꽤 좋은 경로가 나옵니다. 휴리스틱입니다.': 'It is not optimal, but it quickly gives a fairly good route. It is a heuristic.',
  '도시 10만 개의 외판원 문제를 모든 경로를 따져 정확히 푼다.': 'Solve a 100,000-city travelling salesman problem exactly by checking every route.', '경우가 우주의 원자 수보다 훨씬 많아 끝나지 않습니다.': 'There are far more cases than atoms in the universe, so it never finishes.',
  '프로그램 검사기가 10초 안에 판단하지 못하면 "모름"이라고 답한다.': 'If a program checker cannot decide within 10 seconds, it answers "unknown".', '정지 문제를 피하는 흔한 방법입니다. 정답, 오답, 모름 세 가지로 답합니다.': 'A common way around the halting problem: it answers right, wrong or unknown.',
  '정지 문제를 풀 수 없으니 프로그램 검사 도구는 쓸모가 없다.': 'Since the halting problem cannot be solved, program checking tools are useless.', '모든 경우를 완벽히 판정하지 못할 뿐, 많은 버그를 실제로 찾아 줍니다(1.6의 디버깅을 돕는 도구들).': 'They just cannot decide every case perfectly; they really do find many bugs (tools that help with the debugging of 1.6).',
  '여러분이 쓰는 앱 중에서 "완벽한 답 대신 충분히 좋은 답"을 쓰는 예를 하나 떠올려 보세요.': 'Think of one app you use that takes "a good-enough answer instead of a perfect one".',
  '지도 앱의 경로 안내, 동영상 추천, 맞춤법 교정, 사진 압축(0.4의 손실 압축) 등이 모두 빠르고 충분히 좋은 답을 고릅니다.': 'Route guidance in map apps, video recommendations, spelling correction and photo compression (the lossy compression of 0.4) all pick quick, good-enough answers.',
};
