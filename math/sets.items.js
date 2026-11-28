lessonItems["math/sets"] = [
  {
    "id": "sets-1",
    "prompt": "A = {1, 2, 3}, B = {2, 3, 4}일 때 A ∩ B는 무엇일까요?",
    "novel": false,
    "options": [
      {
        "text": "{2, 3}",
        "why": "두 집합 모두에 있는 원소는 2와 3입니다.",
        "correct": true
      },
      {
        "text": "{1, 2, 3, 4}",
        "why": "교집합과 합집합을 바꿔 본 답인데, 이것은 어느 한쪽에라도 있는 원소의 모음입니다."
      },
      {
        "text": "{1, 4}",
        "why": "겹치지 않는 부분을 고른 답인데, 교집합은 겹친 곳에 있는 원소입니다."
      }
    ]
  },
  {
    "id": "sets-2",
    "prompt": "출석부에 '서연, 민준, 서연, 하린'이 적혀 있습니다. 이 이름들로 집합을 만들면 원소는 몇 개일까요?",
    "novel": true,
    "options": [
      {
        "text": "3개",
        "why": "서연은 두 번 적혀도 하나로 쳐서 서연, 민준, 하린입니다.",
        "correct": true
      },
      {
        "text": "4개",
        "why": "적힌 줄 수를 그대로 센 답인데, 집합은 같은 것을 하나로 칩니다."
      },
      {
        "text": "2개",
        "why": "두 번 나온 서연을 아예 뺀 답인데, 중복은 하나만 남기는 것이지 지우는 것이 아닙니다."
      }
    ]
  },
  {
    "id": "sets-3",
    "prompt": "지우가 팔로우하는 사람은 {가온, 나루, 다솜}, 현우가 팔로우하는 사람은 {나루, 다솜, 라온}입니다. \"지우만 팔로우하는 사람\"은 누구일까요?",
    "novel": true,
    "options": [
      {
        "text": "{가온}",
        "why": "지우 집합에서 현우 집합에도 있는 사람을 뺀 차집합입니다.",
        "correct": true
      },
      {
        "text": "{라온}",
        "why": "빼는 방향을 거꾸로 한 답인데, 그것은 현우만 팔로우하는 사람입니다."
      },
      {
        "text": "{가온, 라온}",
        "why": "한쪽에만 있는 사람을 모두 고른 답인데, 질문은 지우 쪽에만 있는 사람입니다."
      }
    ]
  },
  {
    "id": "sets-4",
    "prompt": "사람마다 그 사람의 휴대폰 번호를 짝짓습니다. 휴대폰을 두 대 쓰는 사람도 있습니다. 이 대응은 함수일까요?",
    "novel": true,
    "options": [
      {
        "text": "함수가 아니다",
        "why": "두 대 쓰는 사람은 입력 하나에 출력이 둘이라 하나로 정해지지 않습니다.",
        "correct": true
      },
      {
        "text": "함수다",
        "why": "사람마다 번호가 있기만 하면 된다고 본 답인데, 함수는 출력이 정확히 하나여야 합니다."
      },
      {
        "text": "함수다, 번호마다 주인은 한 사람이라서",
        "why": "출력 쪽으로 들어오는 선이 하나인지를 본 답인데, 함수는 입력(사람)에서 나가는 선이 하나인지를 봅니다."
      }
    ]
  },
  {
    "id": "sets-5",
    "prompt": "정수 x를 x × x로 보냅니다. 2와 −2는 둘 다 4로 갑니다. 이 대응은 함수일까요?",
    "novel": true,
    "options": [
      {
        "text": "함수다",
        "why": "입력마다 출력이 하나씩이고, 서로 다른 입력이 같은 출력으로 가는 것은 괜찮습니다.",
        "correct": true
      },
      {
        "text": "함수가 아니다, 4로 가는 선이 둘이라서",
        "why": "출력 쪽에 선이 모이는 것도 안 된다고 본 답인데, 하나여야 하는 것은 입력에서 나가는 선입니다."
      },
      {
        "text": "함수가 아니다, 4에서 어디로 돌아갈지 정해지지 않아서",
        "why": "거꾸로도 하나여야 한다고 본 답인데, 함수는 입력에서 출력 한 방향만 따집니다."
      }
    ]
  }
];
lessonItemsText["math/sets"] = {
  "A = {1, 2, 3}, B = {2, 3, 4}일 때 A ∩ B는 무엇일까요?": "If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∩ B?",
  "{2, 3}": "{2, 3}",
  "두 집합 모두에 있는 원소는 2와 3입니다.": "Both sets contain 2 and 3.",
  "{1, 2, 3, 4}": "{1, 2, 3, 4}",
  "교집합과 합집합을 바꿔 본 답인데, 이것은 어느 한쪽에라도 있는 원소의 모음입니다.": "This gives the union, which contains the elements found in either set.",
  "{1, 4}": "{1, 4}",
  "겹치지 않는 부분을 고른 답인데, 교집합은 겹친 곳에 있는 원소입니다.": "This picks the parts that do not overlap, but the intersection is the elements in the overlap.",
  "출석부에 '서연, 민준, 서연, 하린'이 적혀 있습니다. 이 이름들로 집합을 만들면 원소는 몇 개일까요?": "The attendance list reads Seoyeon, Minjun, Seoyeon, Harin. How many elements are in the set of names?",
  "3개": "3",
  "서연은 두 번 적혀도 하나로 쳐서 서연, 민준, 하린입니다.": "Seoyeon counts once, leaving Seoyeon, Minjun and Harin.",
  "4개": "4",
  "적힌 줄 수를 그대로 센 답인데, 집합은 같은 것을 하나로 칩니다.": "The number of rows counts repetitions. A set counts a repeated element once.",
  "2개": "2",
  "두 번 나온 서연을 아예 뺀 답인데, 중복은 하나만 남기는 것이지 지우는 것이 아닙니다.": "This drops Seoyeon entirely, but removing a duplicate keeps one copy rather than erasing it.",
  "지우가 팔로우하는 사람은 {가온, 나루, 다솜}, 현우가 팔로우하는 사람은 {나루, 다솜, 라온}입니다. \"지우만 팔로우하는 사람\"은 누구일까요?": "Jiwoo follows {Gaon, Naru, Dasom}. Hyeonwoo follows {Naru, Dasom, Raon}. Who is followed only by Jiwoo?",
  "{가온}": "{Gaon}",
  "지우 집합에서 현우 집합에도 있는 사람을 뺀 차집합입니다.": "Remove the people Hyeonwoo also follows from Jiwoo’s set.",
  "{라온}": "{Raon}",
  "빼는 방향을 거꾸로 한 답인데, 그것은 현우만 팔로우하는 사람입니다.": "This subtracts in the other direction, finding who is followed only by Hyeonwoo.",
  "{가온, 라온}": "{Gaon, Raon}",
  "한쪽에만 있는 사람을 모두 고른 답인데, 질문은 지우 쪽에만 있는 사람입니다.": "This includes both people followed by only one person. The question asks for Jiwoo alone.",
  "사람마다 그 사람의 휴대폰 번호를 짝짓습니다. 휴대폰을 두 대 쓰는 사람도 있습니다. 이 대응은 함수일까요?": "Match every person to their phone number. Some people have two phones. Is this pairing a function?",
  "함수가 아니다": "No.",
  "두 대 쓰는 사람은 입력 하나에 출력이 둘이라 하나로 정해지지 않습니다.": "Someone with two phones is one input with two outputs.",
  "함수다": "Yes.",
  "사람마다 번호가 있기만 하면 된다고 본 답인데, 함수는 출력이 정확히 하나여야 합니다.": "This assumes having a number is enough, but each input needs exactly one output.",
  "함수다, 번호마다 주인은 한 사람이라서": "Yes, because each number has one owner.",
  "출력 쪽으로 들어오는 선이 하나인지를 본 답인데, 함수는 입력(사람)에서 나가는 선이 하나인지를 봅니다.": "This counts incoming lines at the output. The function rule concerns outgoing lines from each person.",
  "정수 x를 x × x로 보냅니다. 2와 −2는 둘 다 4로 갑니다. 이 대응은 함수일까요?": "Send each integer x to x × x. Both 2 and −2 go to 4. Is this pairing a function?",
  "입력마다 출력이 하나씩이고, 서로 다른 입력이 같은 출력으로 가는 것은 괜찮습니다.": "Every input has one output. Different inputs may share an output.",
  "함수가 아니다, 4로 가는 선이 둘이라서": "No, because two lines lead to 4.",
  "출력 쪽에 선이 모이는 것도 안 된다고 본 답인데, 하나여야 하는 것은 입력에서 나가는 선입니다.": "This assumes lines may not meet at an output, but what must be one is the line leaving each input.",
  "함수가 아니다, 4에서 어디로 돌아갈지 정해지지 않아서": "No, because 4 cannot tell us where to go back.",
  "거꾸로도 하나여야 한다고 본 답인데, 함수는 입력에서 출력 한 방향만 따집니다.": "This assumes it must be one in reverse too, but a function only checks the direction from input to output."
};
