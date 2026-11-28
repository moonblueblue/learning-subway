lessonItems["math/logic"] = [
  {
    "id": "logic-1",
    "prompt": "다음 중 명제가 아닌 것은 무엇일까요?",
    "novel": true,
    "options": [
      {
        "text": "문을 닫아라.",
        "why": "명령은 참이나 거짓을 따질 수 없어서 명제가 아닙니다.",
        "correct": true
      },
      {
        "text": "1은 2보다 크다.",
        "why": "거짓인 문장은 명제가 아니라고 본 답인데, 거짓으로 정해지므로 명제입니다."
      },
      {
        "text": "서울은 부산보다 북쪽에 있다.",
        "why": "수학이 아닌 문장은 명제가 아니라고 본 답인데, 참으로 정해지므로 명제입니다."
      }
    ]
  },
  {
    "id": "logic-2",
    "prompt": "같은 놀이기구 조건 키 >= 120 and (나이 >= 10 or 보호자)에서 키 110, 나이 15, 보호자 있음인 사람은 탈 수 있을까요?",
    "novel": false,
    "options": [
      {
        "text": "탈 수 없다",
        "why": "키 >= 120이 거짓이라 'and'로 묶인 전체가 거짓입니다.",
        "correct": true
      },
      {
        "text": "탈 수 있다, 괄호 안이 둘 다 참이라서",
        "why": "괄호가 참이면 된다고 본 답인데, 괄호는 키 조건과 'and'로 묶여 있어 둘 다 참이어야 합니다."
      },
      {
        "text": "탈 수 있다, 참이 둘이고 거짓이 하나라서",
        "why": "참이 많은 쪽으로 정한다고 본 답인데, 결과는 개수가 아니라 잇는 말의 규칙으로 정해집니다."
      }
    ]
  },
  {
    "id": "logic-3",
    "prompt": "박물관은 '학생이거나 65세 이상'이면 할인해 줍니다. 70세 대학생은 할인을 받을까요?",
    "novel": true,
    "options": [
      {
        "text": "받는다",
        "why": "'또는'은 둘 중 하나라도 참이면 참이고, 둘 다 참이어도 참입니다.",
        "correct": true
      },
      {
        "text": "받지 못한다",
        "why": "'또는'을 둘 중 하나만이라는 뜻으로 본 답인데, 둘 다 참인 경우도 참입니다."
      },
      {
        "text": "정할 수 없다",
        "why": "어느 조건으로 할인하는지 몰라서 정할 수 없다고 본 답인데, 결과는 참이냐 거짓이냐 하나만 정하면 됩니다."
      }
    ]
  },
  {
    "id": "logic-4",
    "prompt": "\"비가 오면 우산을 쓴다\"는 규칙이 있습니다. 맑은 날 우산을 쓴 사람은 규칙을 어겼을까요?",
    "novel": true,
    "options": [
      {
        "text": "어기지 않았다",
        "why": "규칙은 비가 올 때 할 일만 정했으므로, 비가 오지 않은 날에는 무엇을 해도 어긴 것이 아닙니다.",
        "correct": true
      },
      {
        "text": "어겼다",
        "why": "비가 오지 않으면 우산을 쓰지 말라는 뜻까지 있다고 본 답인데, 그런 약속은 하지 않았습니다."
      },
      {
        "text": "참도 거짓도 아니다",
        "why": "규칙에 없는 경우라 판정할 수 없다고 본 답인데, '이면'은 앞부분이 거짓인 경우를 참으로 정합니다."
      }
    ]
  },
  {
    "id": "logic-5",
    "prompt": "\"비가 오면 땅이 젖는다\"는 참입니다. 오늘 땅이 젖어 있다면 무엇을 알 수 있을까요?",
    "novel": true,
    "options": [
      {
        "text": "비가 왔는지는 알 수 없다",
        "why": "누가 물을 뿌려도 땅은 젖습니다. 약속은 비가 온 경우만 정했습니다.",
        "correct": true
      },
      {
        "text": "비가 왔다",
        "why": "\"p이면 q\"를 \"q이면 p\"로 뒤집어 읽은 답인데, 방향을 바꾼 문장은 참이라는 보장이 없습니다."
      },
      {
        "text": "비가 오지 않은 날에는 땅이 젖지 않는다",
        "why": "\"p이면 q\"를 \"p가 아니면 q도 아니다\"까지 약속한 것으로 읽은 답인데, 약속은 비가 오지 않은 경우를 정하지 않았습니다(6단계)."
      }
    ]
  }
];
lessonItemsText["math/logic"] = {
  "다음 중 명제가 아닌 것은 무엇일까요?": "Which of these is not a proposition?",
  "문을 닫아라.": "Close the door.",
  "명령은 참이나 거짓을 따질 수 없어서 명제가 아닙니다.": "A command cannot be evaluated as true or false, so it is not a proposition.",
  "1은 2보다 크다.": "1 is greater than 2.",
  "거짓인 문장은 명제가 아니라고 본 답인데, 거짓으로 정해지므로 명제입니다.": "This assumes a false sentence is not a proposition, but it is one because it is definitely false.",
  "서울은 부산보다 북쪽에 있다.": "Seoul is north of Busan.",
  "수학이 아닌 문장은 명제가 아니라고 본 답인데, 참으로 정해지므로 명제입니다.": "This assumes a sentence outside math cannot be a proposition, but it is one because it is definitely true.",
  "같은 놀이기구 조건 키 >= 120 and (나이 >= 10 or 보호자)에서 키 110, 나이 15, 보호자 있음인 사람은 탈 수 있을까요?": "Use height >= 120 and (age >= 10 or guardian). Can a person of height 110, age 15 and with a guardian ride?",
  "탈 수 없다": "May not ride.",
  "키 >= 120이 거짓이라 'and'로 묶인 전체가 거짓입니다.": "Height >= 120 is false, which makes the whole AND expression false.",
  "탈 수 있다, 괄호 안이 둘 다 참이라서": "May ride, because both conditions in parentheses are true.",
  "괄호가 참이면 된다고 본 답인데, 괄호는 키 조건과 'and'로 묶여 있어 둘 다 참이어야 합니다.": "This assumes a true group is enough, but the group is joined to the height condition with and, so both must be true.",
  "탈 수 있다, 참이 둘이고 거짓이 하나라서": "May ride, because two conditions are true and only one is false.",
  "참이 많은 쪽으로 정한다고 본 답인데, 결과는 개수가 아니라 잇는 말의 규칙으로 정해집니다.": "This decides by whichever side has more true conditions, but the result follows the connective’s rule, not a count.",
  "박물관은 '학생이거나 65세 이상'이면 할인해 줍니다. 70세 대학생은 할인을 받을까요?": "A museum gives a discount to students or people aged 65 and over. Does a 70-year-old university student get the discount?",
  "받는다": "Yes.",
  "'또는'은 둘 중 하나라도 참이면 참이고, 둘 다 참이어도 참입니다.": "At least one true condition makes OR true, including when both are true.",
  "받지 못한다": "No.",
  "'또는'을 둘 중 하나만이라는 뜻으로 본 답인데, 둘 다 참인 경우도 참입니다.": "This reads OR as exactly one. In logic, two true conditions also satisfy OR.",
  "정할 수 없다": "There is no way to tell.",
  "어느 조건으로 할인하는지 몰라서 정할 수 없다고 본 답인데, 결과는 참이냐 거짓이냐 하나만 정하면 됩니다.": "This assumes you cannot tell which condition gives the discount, but the result only needs to be true or false.",
  "\"비가 오면 우산을 쓴다\"는 규칙이 있습니다. 맑은 날 우산을 쓴 사람은 규칙을 어겼을까요?": "The rule is “If it rains, use an umbrella.” Did someone who used one on a clear day break the rule?",
  "어기지 않았다": "They did not break it.",
  "규칙은 비가 올 때 할 일만 정했으므로, 비가 오지 않은 날에는 무엇을 해도 어긴 것이 아닙니다.": "The rule only specifies what to do when it rains. On a clear day either action keeps the rule.",
  "어겼다": "They broke it.",
  "비가 오지 않으면 우산을 쓰지 말라는 뜻까지 있다고 본 답인데, 그런 약속은 하지 않았습니다.": "This assumes the rule also says not to use an umbrella when it does not rain, but no such promise was made.",
  "참도 거짓도 아니다": "Neither true nor false.",
  "규칙에 없는 경우라 판정할 수 없다고 본 답인데, '이면'은 앞부분이 거짓인 경우를 참으로 정합니다.": "This assumes a case the rule does not mention cannot be judged, but an implication is true when its first part is false.",
  "\"비가 오면 땅이 젖는다\"는 참입니다. 오늘 땅이 젖어 있다면 무엇을 알 수 있을까요?": "“If it rains, the ground gets wet” is true. The ground is wet today. What can we tell?",
  "비가 왔는지는 알 수 없다": "We cannot tell whether it rained.",
  "누가 물을 뿌려도 땅은 젖습니다. 약속은 비가 온 경우만 정했습니다.": "Someone could have sprayed water. The statement only tells us what happens when it rains.",
  "비가 왔다": "It rained.",
  "\"p이면 q\"를 \"q이면 p\"로 뒤집어 읽은 답인데, 방향을 바꾼 문장은 참이라는 보장이 없습니다.": "This reverses “if p then q” into “if q then p.” The reverse is not guaranteed.",
  "비가 오지 않은 날에는 땅이 젖지 않는다": "If it does not rain, the ground stays dry.",
  "\"p이면 q\"를 \"p가 아니면 q도 아니다\"까지 약속한 것으로 읽은 답인데, 약속은 비가 오지 않은 경우를 정하지 않았습니다(6단계).": "This adds “if not p then not q.” The rule leaves open what happens without rain."
};
