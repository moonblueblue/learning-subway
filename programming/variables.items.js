lessonItems["programming/variables"] = [
  {
    "id": "variables-1",
    "prompt": "x = 3 다음에 x = x × 2 를 실행했습니다. x 칸에는 무엇이 남을까요?",
    "novel": true,
    "options": [
      {
        "text": "6",
        "why": "x 칸의 3을 읽어 2를 곱하고, 결과 6을 같은 칸에 다시 적습니다.",
        "correct": true
      },
      {
        "text": "3",
        "why": "x = x × 2 를 수학의 등식으로 읽어 성립하지 않으니 아무 일도 없다고 본 답인데, 이 줄은 계산해서 적으라는 지시입니다."
      },
      {
        "text": "3과 6이 함께 남는다",
        "why": "새 값이 옆에 쌓인다고 본 답인데, 칸에는 값이 하나만 들어가고 적으면 예전 값은 지워집니다."
      }
    ]
  },
  {
    "id": "variables-2",
    "prompt": "a = 5, b = 7 에서 a = b, b = a 를 차례로 실행했습니다. 끝에 두 칸은?",
    "novel": false,
    "options": [
      {
        "text": "a 7, b 7",
        "why": "3번째 줄에서 a의 5가 7로 덮여, 4번째 줄은 7을 읽어 b에 적습니다.",
        "correct": true
      },
      {
        "text": "a 7, b 5",
        "why": "두 줄이 한꺼번에 일어난다고 본 답인데, 줄은 하나씩 실행되어 5는 4번째 줄 전에 이미 지워졌습니다."
      },
      {
        "text": "a 5, b 7",
        "why": "두 줄이 서로 되돌린다고 본 답인데, 이미 덮인 a의 값은 저절로 돌아오지 않습니다."
      }
    ]
  },
  {
    "id": "variables-3",
    "prompt": "가격 = 3000, 개수 = 2, 합계 = 가격 × 개수 를 실행한 뒤 가격 = 4000 을 실행했습니다. 합계 칸은 얼마일까요?",
    "novel": true,
    "options": [
      {
        "text": "6000",
        "why": "합계 칸에는 계산했던 순간의 결과 값이 적혀 있고, 가격이 바뀌어도 다시 계산하지 않습니다.",
        "correct": true
      },
      {
        "text": "8000",
        "why": "합계 칸이 '가격 × 개수' 라는 식을 기억해 다시 계산한다고 본 답인데, 칸에는 식이 아니라 값 하나만 들어갑니다."
      },
      {
        "text": "4000",
        "why": "마지막에 적은 값이 모든 칸에 퍼진다고 본 답인데, 가격 = 4000 은 가격 칸 하나에만 적습니다."
      }
    ]
  },
  {
    "id": "variables-4",
    "prompt": "점수 = 80 다음에 점수 = 90 을 실행했습니다. 80은 어떻게 되었을까요?",
    "novel": true,
    "options": [
      {
        "text": "지워졌다",
        "why": "같은 이름은 같은 칸을 가리키고, 그 칸에 90을 적으면서 80이 지워집니다.",
        "correct": true
      },
      {
        "text": "옆 칸으로 옮겨졌다",
        "why": "새 값이 들어오면 예전 값이 밀려난다고 본 답인데, 다른 칸에 적으라는 줄이 없으면 80은 어디에도 복사되지 않습니다."
      },
      {
        "text": "같은 칸에 80과 90이 함께 있다",
        "why": "칸이 값을 모아 둔다고 본 답인데, 칸 하나에는 값이 하나만 들어갑니다."
      }
    ]
  }
];

lessonItemsText["programming/variables"] = {
  "x = 3 다음에 x = x × 2 를 실행했습니다. x 칸에는 무엇이 남을까요?": "You run x = 3 followed by x = x × 2. What remains in x?",
  "6": "6",
  "x 칸의 3을 읽어 2를 곱하고, 결과 6을 같은 칸에 다시 적습니다.": "Read 3, multiply it by 2 and write the result, 6, back to x.",
  "3": "3",
  "x = x × 2 를 수학의 등식으로 읽어 성립하지 않으니 아무 일도 없다고 본 답인데, 이 줄은 계산해서 적으라는 지시입니다.": "x = x × 2 is an instruction to calculate and write, rather than a mathematical equality.",
  "3과 6이 함께 남는다": "It keeps both 3 and 6.",
  "새 값이 옆에 쌓인다고 본 답인데, 칸에는 값이 하나만 들어가고 적으면 예전 값은 지워집니다.": "A cell holds one value. Writing 6 replaces the earlier 3.",
  "a = 5, b = 7 에서 a = b, b = a 를 차례로 실행했습니다. 끝에 두 칸은?": "Starting with a = 5 and b = 7, you run a = b followed by b = a. What remains in the two cells?",
  "a 7, b 7": "a 7, b 7",
  "3번째 줄에서 a의 5가 7로 덮여, 4번째 줄은 7을 읽어 b에 적습니다.": "Line 3 replaces the 5 in a with 7. Line 4 reads 7 and writes it to b.",
  "a 7, b 5": "a 7, b 5",
  "두 줄이 한꺼번에 일어난다고 본 답인데, 줄은 하나씩 실행되어 5는 4번째 줄 전에 이미 지워졌습니다.": "The lines run one at a time. The 5 was already overwritten before line 4.",
  "a 5, b 7": "a 5, b 7",
  "두 줄이 서로 되돌린다고 본 답인데, 이미 덮인 a의 값은 저절로 돌아오지 않습니다.": "The old value of a does not come back when the next line runs.",
  "가격 = 3000, 개수 = 2, 합계 = 가격 × 개수 를 실행한 뒤 가격 = 4000 을 실행했습니다. 합계 칸은 얼마일까요?": "After price = 3000, quantity = 2 and total = price × quantity, the program runs price = 4000. What is in Total?",
  "6000": "6000",
  "합계 칸에는 계산했던 순간의 결과 값이 적혀 있고, 가격이 바뀌어도 다시 계산하지 않습니다.": "Total holds the earlier calculation result. A change to Price does not calculate it again.",
  "8000": "8000",
  "합계 칸이 '가격 × 개수' 라는 식을 기억해 다시 계산한다고 본 답인데, 칸에는 식이 아니라 값 하나만 들어갑니다.": "Total holds one value. It does not store the expression price × quantity and re-evaluate it.",
  "4000": "4000",
  "마지막에 적은 값이 모든 칸에 퍼진다고 본 답인데, 가격 = 4000 은 가격 칸 하나에만 적습니다.": "The last line writes only to Price.",
  "점수 = 80 다음에 점수 = 90 을 실행했습니다. 80은 어떻게 되었을까요?": "You run score = 80 followed by score = 90. What happened to 80?",
  "지워졌다": "It was erased.",
  "같은 이름은 같은 칸을 가리키고, 그 칸에 90을 적으면서 80이 지워집니다.": "Both lines use the same named cell. Writing 90 replaces 80.",
  "옆 칸으로 옮겨졌다": "It moved to the neighboring cell.",
  "새 값이 들어오면 예전 값이 밀려난다고 본 답인데, 다른 칸에 적으라는 줄이 없으면 80은 어디에도 복사되지 않습니다.": "No instruction copied 80 to a different cell.",
  "같은 칸에 80과 90이 함께 있다": "It is in the same cell as 90.",
  "칸이 값을 모아 둔다고 본 답인데, 칸 하나에는 값이 하나만 들어갑니다.": "The cell holds one value at a time."
};
