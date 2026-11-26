// English for 2.2 Sets and functions. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the code: 명단 names; people 민수 Minsu, 지아 Jia (the same as 1.4).
window.lessonText = {
  // Page
  '집합과 함수 · 레슨 2.2': 'Sets and functions · Lesson 2.2',
  '집합의 원소, 합집합과 교집합, 함수의 뜻을 문제로 확인하고 파이썬의 set과 딕셔너리와 이어 보세요.':
    'Check what elements, unions, intersections and functions mean through questions, and link them to Python\'s set and dictionary.',
  '모음과 대응을 어떻게 정확하게 말할까요? 집합과 함수를 문제로 확인하고 파이썬과 이어 보세요.':
    'How do you talk precisely about collections and pairings? Check sets and functions through questions and link them to Python.',
  '함수': 'Function', '함수 아님': 'Not a function',
  // Step 1
  '집합': 'Sets', '1, 2, 2를 집합에 넣음': 'Put 1, 2, 2 into a set', '중복 2를 한 번만 보관': 'The repeated 2 is kept once', '원소는 1과 2': 'The elements are 1 and 2',
  '집합은 중복 없이 모은 묶음이다': 'A set is a collection without repeats',
  '집합은 서로 다른 것들을 모은 묶음입니다. 순서는 상관없고, 같은 것이 두 번 들어가도 하나로 칩니다. 어떤 것이 집합 안에 있으면 "원소이다"라고 하고 ∈로 씁니다. A = {1, 2, 3}이면 2 ∈ A는 참, 5 ∈ A는 거짓입니다.':
    'A set is a collection of different things. Order does not matter, and the same thing put in twice counts once. Something inside a set is called "an element" and written with ∈. If A = {1, 2, 3}, then 2 ∈ A is true and 5 ∈ A is false.',
  '1.4의 리스트는 순서가 있고 같은 값이 여러 번 들어갈 수 있었습니다. 집합은 순서도 중복도 없다는 점이 다릅니다.':
    'The lists in 1.4 had an order and could hold the same value many times. A set differs in having neither order nor repeats.',
  'A = {1, 2, 3}일 때 다음 문장이 참인지 고르세요.': 'With A = {1, 2, 3}, choose whether each sentence is true.',
  '2 ∈ A (2는 A의 원소다)': '2 ∈ A (2 is an element of A)', '{3, 1, 2}는 A와 같은 집합이다': '{3, 1, 2} is the same set as A', '{1, 1, 2, 3}의 원소는 네 개다': '{1, 1, 2, 3} has four elements',
  'A 안에 2가 있습니다.': '2 is in A.', 'A에는 1, 2, 3뿐입니다.': 'A holds only 1, 2 and 3.', '집합은 순서를 따지지 않습니다.': 'A set ignores order.',
  '같은 1은 하나로 칩니다. 원소는 1, 2, 3 세 개입니다.': 'The repeated 1 counts once. There are three elements: 1, 2 and 3.',
  '반 친구들이 좋아하는 과일을 모을 때 리스트와 집합 중 무엇이 알맞을까요?': 'When collecting classmates\' favourite fruits, which suits better, a list or a set?',
  '"어떤 과일들이 나왔는지"만 알고 싶으면 중복이 저절로 없어지는 집합이 알맞습니다. "각 과일을 몇 명이 골랐는지"까지 알고 싶으면 리스트나, 과일을 키로 하는 딕셔너리가 필요합니다.':
    'If you only want "which fruits came up", a set, where repeats vanish by themselves, suits. If you also want "how many people chose each fruit", you need a list or a dictionary keyed by fruit.',
  // Step 2
  '합집합 · 교집합': 'Union · intersection', '양쪽 모두에 있는 값 선택': 'Pick the values in both', '교집합 {2}': 'Intersection {2}',
  '합집합은 또는, 교집합은 그리고다': 'Union is or, intersection is and',
  'A ∪ B(합집합)는 A나 B 중 한쪽에라도 있는 원소의 모음이고, A ∩ B(교집합)는 양쪽 모두에 있는 원소의 모음입니다. 2.1의 "또는", "그리고"와 똑같은 생각입니다. A − B(차집합)는 A에는 있지만 B에는 없는 원소입니다.':
    'A ∪ B (the union) collects the elements in at least one of A and B, and A ∩ B (the intersection) collects the elements in both. It is the same idea as "or" and "and" in 2.1. A − B (the difference) is the elements in A but not in B.',
  '2.1에서 "p 또는 q"는 하나라도 참이면 참이었습니다. "x가 A ∪ B에 있다"는 "x가 A에 있다 또는 x가 B에 있다"와 같습니다.':
    'In 2.1, "p or q" was true when at least one was true. "x is in A ∪ B" is the same as "x is in A or x is in B".',
  'A = {1, 2, 3}, B = {2, 3, 4}일 때 다음 문장이 참인지 고르세요.': 'With A = {1, 2, 3} and B = {2, 3, 4}, choose whether each sentence is true.',
  '어느 한쪽에라도 있는 원소를 모두 모으면 1, 2, 3, 4입니다.': 'Collecting every element in at least one gives 1, 2, 3, 4.',
  '양쪽 모두에 있는 원소는 2와 3입니다.': 'The elements in both are 2 and 3.', '4는 B에만 있고 A에는 없습니다.': '4 is only in B, not in A.',
  'A에 있지만 B에 없는 원소는 1뿐입니다.': 'The only element in A but not in B is 1.',
  '두 친구의 팔로우 목록에서 "둘 다 팔로우하는 사람"은 어떤 연산일까요?': 'In two friends\' follow lists, which operation gives "people both follow"?',
  '교집합입니다. "한 명이라도 팔로우하는 사람"은 합집합이고, "나만 팔로우하는 사람"은 차집합입니다.':
    'The intersection. "People at least one follows" is the union, and "people only I follow" is the difference.',
  // Step 3
  '입력 3': 'Input 3', '규칙 f(x) = 2x 적용': 'Apply the rule f(x) = 2x', '출력은 6 하나': 'Exactly one output, 6',
  '함수는 입력마다 출력을 딱 하나 정한다': 'A function sets exactly one output for each input',
  '수학에서 함수는 첫 번째 집합의 원소마다 두 번째 집합의 원소를 딱 하나씩 짝지어 주는 규칙입니다. 입력 하나에 출력이 둘이면 함수가 아닙니다. 반대로 서로 다른 입력이 같은 출력을 가져도 괜찮습니다. 학생마다 키가 하나씩 정해져 있으므로 "학생 → 키"는 함수입니다.':
    'In maths, a function is a rule that pairs each element of a first set with exactly one element of a second set. Two outputs for one input means it is not a function. On the other hand, different inputs may share the same output. Each student has exactly one height, so "student → height" is a function.',
  '1.3의 파이썬 함수도 같은 인자를 주면 같은 값을 돌려주는 경우가 많습니다. 다만 프로그래밍의 함수는 입력이 같아도 바깥 상태에 따라 다른 값을 줄 수 있어서, 수학의 함수보다 넓은 뜻입니다.':
    'The Python functions in 1.3 also often return the same value for the same arguments. But a function in programming can give different values for the same input depending on outside state, so it means more than a maths function.',
  '다음 대응이 함수(입력마다 출력이 딱 하나)인지 고르세요.': 'Choose whether each pairing is a function (exactly one output per input).',
  '학생 → 그 학생의 출석 번호': 'Student → that student\'s class number', '사람 → 그 사람의 휴대폰 번호 (두 대 쓰는 사람도 있음)': 'Person → that person\'s phone number (some people have two phones)',
  'x → x × x (x는 정수)': 'x → x × x (x is an integer)', '도시 → 그 도시의 내일 날씨 예보 하나': 'City → one weather forecast for that city tomorrow',
  '학생마다 번호가 하나씩 정해져 있습니다.': 'Each student has exactly one number.',
  '한 사람에게 번호가 둘일 수 있으면 출력이 하나로 정해지지 않습니다.': 'If one person can have two numbers, the output is not settled as one.',
  '어떤 정수든 제곱은 하나입니다. 2와 −2가 같은 4로 가도 괜찮습니다.': 'Any integer has exactly one square. 2 and −2 both going to 4 is fine.',
  '도시마다 예보가 하나씩 정해지면 함수입니다. 여러 도시가 같은 "맑음"이어도 괜찮습니다.': 'If each city gets exactly one forecast, it is a function. Several cities sharing "sunny" is fine.',
  '딕셔너리 {"민수": 15, "지아": 14}는 함수라고 할 수 있을까요?': 'Can the dictionary {"Minsu": 15, "Jia": 14} be called a function?',
  '할 수 있습니다. 딕셔너리는 키마다 값을 딱 하나 짝지으므로, 키 집합에서 값 집합으로 가는 함수입니다. 같은 키에 값을 두 번 넣으면 앞의 값이 지워지는 것도 "출력은 하나"라는 규칙을 지키기 위해서입니다.':
    'Yes. A dictionary pairs each key with exactly one value, so it is a function from the set of keys to the set of values. Putting a value under the same key twice wipes the earlier one, which also keeps the rule of "one output".',
  // Step 4
  '파이썬의 집합': 'Sets in Python', '중복 제거 뒤 len 계산': 'Remove repeats, then work out len', '길이 2': 'Length 2',
  '파이썬도 집합과 함수를 그대로 쓴다': 'Python uses sets and functions as they are',
  '파이썬의 set은 수학의 집합처럼 중복을 없애고, | 는 합집합, & 는 교집합, - 는 차집합을 계산합니다. in은 원소인지(∈) 확인합니다. 딕셔너리는 키에서 값으로 가는 함수입니다.':
    'Python\'s set removes repeats like a maths set, and | works out the union, & the intersection and - the difference. in checks membership (∈). A dictionary is a function from keys to values.',
  '1.4에서 리스트의 index는 칸을 하나씩 훑었습니다. set과 딕셔너리의 in은 해시 테이블(4.5에서 다룹니다) 덕분에 거의 한 번에 답합니다.':
    'In 1.4, a list\'s index scanned the cells one by one. in on a set or dictionary answers almost at once, thanks to hash tables (covered in 4.5).',
  '다음 파이썬 식의 결과가 참인지 고르세요.': 'Choose whether each Python expression comes out true.',
  '{"민수": 15, "민수": 16}["민수"] == 15': '{"Minsu": 15, "Minsu": 16}["Minsu"] == 15',
  'set은 중복을 없애 {1, 2, 3}이 되므로 길이는 3입니다.': 'set removes the repeat to give {1, 2, 3}, so the length is 3.',
  '&는 교집합입니다.': '& is the intersection.', '|로 합치면 {1, 2, 3, 4, 5}이고 5가 있습니다.': 'Joining with | gives {1, 2, 3, 4, 5}, which has 5.',
  '같은 키를 두 번 쓰면 나중 값 16만 남습니다.': 'Writing the same key twice keeps only the later value, 16.',
  '중복된 이름이 섞인 명단에서 서로 다른 이름이 몇 개인지 세려면 어떻게 할까요?': 'How do you count the different names in a list of names with repeats mixed in?',
  'len(set(명단))입니다. 리스트를 set으로 바꾸면 중복이 사라지므로, 길이가 곧 서로 다른 이름의 수입니다.':
    'len(set(names)). Turning the list into a set removes the repeats, so its length is the number of different names.',

  // Worked examples aligned with the chapter diagrams.
  "계산 예시": "Worked example",
  "각 원소가 속한 집합을 비교": "Compare which sets contain each element",
  "연산": "Operation",
  "결과": "Result",
  "A에서 2로 가는 연결 추가": "Add another link from A to 2",
  "A의 출력이 둘이므로 함수 아님": "A has two outputs, so this is not a function",
  "상태": "State",
  "입력 → 출력": "Input → output",
  "함수인가?": "Function?",
  "처음": "Before",
  "예 · 입력당 하나": "Yes · one per input",
  "연결 추가": "Added link",
  "아니요 · A에 둘": "No · two for A",
  "코드": "Code",
  "실행 결과": "Output",
};
