// English for 2.1 Propositions and logic. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the code: 키 height, 나이 age, 보호자 guardian (the same as 1.1 for 키 and 나이).
window.lessonText = {
  // Page
  '명제와 논리 · 레슨 2.1': 'Propositions and logic · Lesson 2.1',
  '명제를 가려내고, 그리고·또는·이면의 진리표를 채우고, 파이썬 조건식을 계산해 보세요.':
    'Pick out propositions, fill in the truth tables for and, or and if-then, and work out a Python condition.',
  '참과 거짓을 어떻게 조합하고 따질까요? 명제를 가려내고 진리표를 직접 채워 보세요.':
    'How are true and false combined and reasoned about? Pick out propositions and fill in truth tables yourself.',
  '명제': 'Proposition', '명제 아님': 'Not a proposition',
  // Truth tables
  'p 그리고 q': 'p and q', 'p이면 q': 'if p then q',
  'p 참 · q 참': 'p true · q true', 'p 참 · q 거짓': 'p true · q false', 'p 거짓 · q 참': 'p false · q true', 'p 거짓 · q 거짓': 'p false · q false',
  // Step 1
  '명제란': 'What a proposition is', '문장 ‘2는 짝수다’': 'The sentence ‘2 is even’', '참·거짓을 정할 수 있음': 'Can be settled as true or false', '참인 명제': 'A true proposition',
  '참인지 거짓인지 정할 수 있는 문장이 명제다': 'A sentence that can be settled as true or false is a proposition',
  '논리는 문장이 참인지 거짓인지를 따지는 방법입니다. 그중 참이나 거짓 둘 중 하나로 딱 정해지는 문장을 명제라고 합니다. 질문이나 명령, "x > 3"처럼 x 값을 모르면 정할 수 없는 문장은 명제가 아닙니다. 컴퓨터의 조건문도 결국 명제를 계산합니다.':
    'Logic is a way of working out whether sentences are true or false. A sentence that is settled as exactly one of true or false is called a proposition. Questions, commands, and sentences like "x > 3" that cannot be settled without knowing x are not propositions. A computer\'s conditions, too, end up working out propositions.',
  '1.2에서 if 뒤의 조건은 참이나 거짓 둘 중 하나였습니다. 그 조건 하나하나가 명제입니다.':
    'In 1.2, the condition after if was either true or false. Each of those conditions is a proposition.',
  '다음 문장이 명제인지 고르세요. 명제라면 참이든 거짓이든 상관없습니다.': 'Choose whether each sentence is a proposition. If it is, it does not matter whether it is true or false.',
  '7은 짝수다.': '7 is even.', '오늘 점심 뭐 먹을까?': 'What shall we have for lunch today?',
  '참으로 정해지는 명제입니다.': 'It is a proposition settled as true.',
  '거짓이지만, 참·거짓이 정해지므로 명제입니다.': 'It is false, but because it is settled as true or false, it is a proposition.',
  '질문은 참이나 거짓을 따질 수 없습니다.': 'A question cannot be judged true or false.',
  'x가 무엇인지에 따라 달라지므로 그 자체로는 명제가 아닙니다. x에 값을 넣으면 명제가 됩니다.':
    'It depends on what x is, so on its own it is not a proposition. Put a value in for x and it becomes one.',
  '"이 문장은 거짓이다"는 명제일까요?': 'Is "This sentence is false" a proposition?',
  '참이라고 하면 문장 내용대로 거짓이 되고, 거짓이라고 하면 내용이 틀렸으니 참이 됩니다. 어느 쪽으로도 정할 수 없어 명제가 아닙니다. 이런 문장을 역설이라고 합니다.':
    'Call it true and, as it says, it becomes false; call it false and what it says is wrong, so it becomes true. It cannot be settled either way, so it is not a proposition. A sentence like this is called a paradox.',
  // Step 2
  '그리고 · 또는': 'And · or', '비는 오고 바람은 없음': 'Rain but no wind', '참 AND 거짓': 'True AND false', '결과 거짓': 'Result false',
  '그리고는 둘 다, 또는은 하나라도 참이면 참이다': 'And is true when both are; or is true when at least one is',
  '명제 두 개를 이어 새 명제를 만들 수 있습니다. "p 그리고 q"(AND)는 둘 다 참일 때만 참이고, "p 또는 q"(OR)는 하나라도 참이면 참입니다. 가능한 경우를 모두 적은 표를 진리표라고 합니다. p와 q가 각각 참·거짓이므로 경우는 2 × 2 = 4가지입니다.':
    'Two propositions can be joined into a new one. "p and q" (AND) is true only when both are true, and "p or q" (OR) is true when at least one is. A table listing every possible case is called a truth table. p and q can each be true or false, so there are 2 × 2 = 4 cases.',
  '0.1의 스위치 두 개가 00, 01, 10, 11 네 가지였던 것과 같습니다. 3장에서 이 표를 그대로 전기 회로(논리 게이트)로 만듭니다.':
    'It is the same as the two switches in 0.1 having four states, 00, 01, 10 and 11. In chapter 3 these tables are built as electric circuits (logic gates).',
  'p = "비가 온다", q = "바람이 분다"일 때, 표의 마지막 칸 "p 그리고 q"를 채우세요.': 'With p = "it is raining" and q = "it is windy", fill in the last column of the table, "p and q".',
  '비도 오고 바람도 불면 "비가 오고 바람이 분다"는 참입니다.': 'If it is raining and windy, "it is raining and it is windy" is true.',
  '바람이 불지 않으니 "둘 다"는 거짓입니다.': 'It is not windy, so "both" is false.',
  '비가 오지 않으니 거짓입니다.': 'It is not raining, so it is false.', '둘 다 아니니 거짓입니다.': 'Neither holds, so it is false.',
  '같은 표에서 "p 또는 q"가 거짓인 경우는 몇 가지일까요?': 'In the same table, in how many cases is "p or q" false?',
  '한 가지뿐입니다. p와 q가 모두 거짓일 때만 "또는"이 거짓이고, 나머지 세 경우는 참입니다.':
    'Only one. "Or" is false only when p and q are both false; the other three cases are true.',
  // Step 3
  '만약 ~이면': 'If … then', '합격하면 선물을 주기로 함': 'A promise of a gift for passing', '합격했는데 선물을 주지 않음': 'Passed, but no gift given', '약속이 거짓인 경우': 'The case where the promise is false',
  '"p이면 q"는 약속을 어겼을 때만 거짓이다': '"If p then q" is false only when the promise is broken',
  '"p이면 q"(p → q)는 약속처럼 읽으면 쉽습니다. "시험에 합격하면(p) 선물을 준다(q)"는 약속은 합격했는데 선물을 안 줄 때만 깨집니다. 합격하지 못했다면 선물을 주든 안 주든 약속을 어긴 것은 아니므로 참으로 봅니다. 처음엔 어색한 부분이라 진리표로 확인해 보세요.':
    '"If p then q" (p → q) is easy if you read it as a promise. The promise "if you pass the exam (p), you get a gift (q)" is broken only when you pass and get no gift. If you did not pass, the promise is not broken whether a gift is given or not, so it counts as true. This feels odd at first, so check it with the truth table.',
  '1.2의 if는 조건이 참일 때만 아래 줄을 실행했습니다. 조건이 거짓이면 아무 약속도 하지 않은 것과 같습니다.':
    'The if in 1.2 ran the lines below it only when the condition was true. When the condition is false, it is as if no promise was made.',
  'p = "합격한다", q = "선물을 준다"일 때 "p이면 q"가 참인지 채우세요.': 'With p = "you pass" and q = "you get a gift", fill in whether "if p then q" is true.',
  '합격했고 선물도 줬으니 약속을 지켰습니다.': 'You passed and got a gift, so the promise was kept.',
  '합격했는데 선물을 안 줬으니 약속을 어겼습니다. 유일하게 거짓인 경우입니다.': 'You passed but got no gift, so the promise was broken. It is the only false case.',
  '합격하지 않았으니 약속이 적용되지 않습니다. 선물을 줘도 어긴 것이 아닙니다.': 'You did not pass, so the promise does not apply. Giving a gift does not break it.',
  '합격하지 않았으니 약속이 적용되지 않습니다.': 'You did not pass, so the promise does not apply.',
  '"p이면 q"가 참일 때 "q이면 p"도 꼭 참일까요?': 'When "if p then q" is true, must "if q then p" be true too?',
  '아닙니다. "비가 오면 땅이 젖는다"가 참이어도, 땅이 젖었다고 비가 온 것은 아닙니다(누가 물을 뿌렸을 수도 있습니다). 방향을 바꾼 문장을 역이라고 하며, 원래 문장과 참·거짓이 다를 수 있습니다.':
    'No. Even if "if it rains, the ground gets wet" is true, wet ground does not mean it rained (someone may have sprayed water). The sentence turned around is called the converse, and it can differ from the original in being true or false.',
  // Step 4
  '코드 속 논리': 'Logic in code', '키 125 · 나이 8 · 보호자 동행': 'height 125 · age 8 · with a guardian', '키 조건과 동행 조건 충족': 'Height and guardian conditions met', '전체 조건 참': 'Whole condition true',
  '프로그램의 조건은 명제를 계산한다': 'A program\'s conditions work out propositions',
  '파이썬에서는 그리고를 and, 또는을 or, 아니다를 not으로 씁니다. 놀이기구 탑승 규칙 "키 >= 120 and (나이 >= 10 or 보호자)"는 키가 120 이상이면서, 10살 이상이거나 보호자가 있어야 참입니다. 괄호 안을 먼저 계산합니다.':
    'In Python, and is written and, or is or, and not is not. The ride rule "height >= 120 and (age >= 10 or guardian)" is true when height is 120 or more and, also, the rider is 10 or older or has a guardian. The part in brackets is worked out first.',
  '1.6의 하나 차이 버그처럼, 조건을 잘못 쓰면 프로그램이 엉뚱한 길로 갑니다. 진리표로 경우를 모두 따져 보면 이런 버그를 미리 막을 수 있습니다.':
    'Like the off-by-one bug in 1.6, a miswritten condition sends a program down the wrong path. Checking every case with a truth table prevents bugs like this in advance.',
  '조건 키 >= 120 and (나이 >= 10 or 보호자)가 True인지 False인지 고르세요.': 'Choose whether the condition height >= 120 and (age >= 10 or guardian) is True or False.',
  '키 130, 나이 12, 보호자 없음': 'height 130, age 12, no guardian', '키 130, 나이 8, 보호자 없음': 'height 130, age 8, no guardian',
  '키 130, 나이 8, 보호자 있음': 'height 130, age 8, with a guardian', '키 110, 나이 15, 보호자 있음': 'height 110, age 15, with a guardian',
  '키 조건이 참이고, 나이 >= 10이 참이라 괄호 안도 참입니다.': 'The height condition is true, and age >= 10 is true, so the brackets are true too.',
  '괄호 안의 나이 >= 10도, 보호자도 거짓이라 괄호 안이 거짓입니다.': 'Inside the brackets, age >= 10 and guardian are both false, so the brackets are false.',
  '보호자가 있어 괄호 안이 참이 됩니다.': 'There is a guardian, so the brackets become true.',
  '키 >= 120이 거짓이면 and 전체가 거짓입니다. 괄호 안은 볼 필요도 없습니다.': 'When height >= 120 is false, the whole and is false. There is no need even to look inside the brackets.',
  '괄호를 빼고 키 >= 120 and 나이 >= 10 or 보호자라고 쓰면 무엇이 달라질까요?': 'What changes if the brackets are dropped and it is written height >= 120 and age >= 10 or guardian?',
  '파이썬은 and를 먼저 계산하므로 (키 >= 120 and 나이 >= 10) or 보호자가 됩니다. 그러면 키가 110이어도 보호자만 있으면 True가 되어 규칙과 달라집니다. 헷갈릴 때는 괄호로 순서를 분명히 적습니다.':
    'Python works out and first, so it becomes (height >= 120 and age >= 10) or guardian. Then even with height 110, a guardian alone makes it True, which differs from the rule. When in doubt, make the order clear with brackets.',

  // Worked examples aligned with the chapter diagrams.
  "계산 예시": "Worked example",
  "2는 짝수다 · 3은 짝수다 · 몇 시지?": "2 is even · 3 is even · What time is it?",
  "참·거짓을 정할 수 있는지 판정": "Check whether each sentence can be true or false",
  "참인 명제 · 거짓인 명제 · 명제 아님": "True proposition · false proposition · not a proposition",
  "문장": "Sentence",
  "판정할 값": "Truth value",
  "분류": "Classification",
  "2는 짝수다": "2 is even",
  "참": "True",
  "3은 짝수다": "3 is even",
  "거짓": "False",
  "몇 시지?": "What time is it?",
  "같은 값에 AND와 OR 적용": "Apply AND and OR to the same values",
  "AND는 거짓 · OR는 참": "AND is false · OR is true",
  "비 p": "Rain p",
  "바람 q": "Wind q",
  "합격과 선물의 네 경우를 확인": "Check the four pass and gift combinations",
  "합격했는데 선물이 없을 때만 거짓": "False only when you pass and get no gift",
  "합격 p": "Pass p",
  "선물 q": "Gift q",
  "거짓 · 약속 위반": "False · promise broken",
  "괄호 안 거짓 OR 참 → 참": "Inside brackets: False OR True → True",
  "키 조건 참 AND 괄호 참 → 참": "Height True AND bracket True → True",
  "순서": "Order",
  "계산": "Calculation",
  "125 ≥ 120 → 참": "125 ≥ 120 → True",
  "8 ≥ 10 → 거짓": "8 ≥ 10 → False",
  "(거짓 OR 보호자 있음) → 참": "(False OR an adult is present) → True",
  "키 조건 AND 괄호 → 참": "Height check AND bracket → True",
};
