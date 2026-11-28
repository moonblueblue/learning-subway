lessonItems["programming/control"] = [
  {
    "id": "control-1",
    "prompt": "온도 = 25 일 때 if 온도 >= 25: 출력 \"덥다\" / else: 출력 \"선선하다\" 를 실행합니다. 무엇이 출력될까요?",
    "novel": true,
    "options": [
      {
        "text": "\"덥다\"",
        "why": "25 >= 25 는 같아도 참이므로 if 아래 줄을 실행합니다.",
        "correct": true
      },
      {
        "text": "\"선선하다\"",
        "why": ">= 를 '보다 크다' 로만 읽은 답인데, >= 는 '크거나 같다' 라서 25는 참입니다."
      },
      {
        "text": "\"덥다\" 와 \"선선하다\" 둘 다",
        "why": "줄을 위에서 아래로 모두 실행한다고 본 답인데, if와 else는 한 갈래만 고릅니다."
      }
    ]
  },
  {
    "id": "control-2",
    "prompt": "i = 1 에서 while i <= 3: 합계 = 합계 + i, i = i + 1 이 끝났을 때 i는 얼마일까요?",
    "novel": false,
    "options": [
      {
        "text": "4",
        "why": "i가 4가 되어야 i <= 3 이 거짓이 되어 반복을 빠져나갑니다.",
        "correct": true
      },
      {
        "text": "3",
        "why": "조건에 3이 적혀 있으니 3에서 멈춘다고 본 답인데, 3 <= 3 은 참이라 한 바퀴 더 돌고 i가 4가 됩니다."
      },
      {
        "text": "1",
        "why": "반복 안의 값은 반복이 끝나면 처음으로 돌아간다고 본 답인데, i 칸에 적은 값은 그대로 남습니다."
      }
    ]
  },
  {
    "id": "control-3",
    "prompt": "횟수 = 10 에서 while 횟수 > 0: 횟수 = 횟수 - 2 를 실행합니다. 반복 안의 줄은 몇 번 실행될까요?",
    "novel": true,
    "options": [
      {
        "text": "5번",
        "why": "확인할 때 횟수가 10, 8, 6, 4, 2이면 참이고, 0이 되면 거짓입니다.",
        "correct": true
      },
      {
        "text": "10번",
        "why": "시작 값만큼 돈다고 본 답인데, 한 바퀴에 2씩 줄어 다섯 바퀴 만에 0이 됩니다."
      },
      {
        "text": "4번",
        "why": "2가 되면 멈춘다고 본 답인데, 2 > 0 도 참이라 2일 때 한 바퀴 더 돕니다."
      }
    ]
  },
  {
    "id": "control-4",
    "prompt": "i = 1 에서 while i != 4: i = i + 2 를 실행합니다(!= 는 '같지 않다'). 이 반복은 어떻게 될까요?",
    "novel": true,
    "options": [
      {
        "text": "끝나지 않는다",
        "why": "i가 1, 3, 5, 7… 로 홀수만 되어 4와 같아지는 순간이 없으니 조건이 늘 참입니다.",
        "correct": true
      },
      {
        "text": "두 바퀴 뒤 끝난다",
        "why": "i가 4 근처를 지나가면 멈춘다고 본 답인데, 조건은 정확히 4일 때만 거짓입니다."
      },
      {
        "text": "i가 4보다 커지면 끝난다",
        "why": "조건을 i <= 4 처럼 읽은 답인데, != 는 크기가 아니라 같은지만 봅니다."
      }
    ]
  }
];
lessonItemsText["programming/control"] = {
  "온도 = 25 일 때 if 온도 >= 25: 출력 \"덥다\" / else: 출력 \"선선하다\" 를 실행합니다. 무엇이 출력될까요?": "The temperature is 25. Run if temperature >= 25: print \"Hot\" / else: print \"Cool\". What is printed?",
  "\"덥다\"": "\"Hot\"",
  "25 >= 25 는 같아도 참이므로 if 아래 줄을 실행합니다.": "25 >= 25 is true even at equality, so the line under if runs.",
  "\"선선하다\"": "\"Cool\"",
  ">= 를 '보다 크다' 로만 읽은 답인데, >= 는 '크거나 같다' 라서 25는 참입니다.": "This reads >= as greater than only. It also allows equality, so 25 makes it true.",
  "\"덥다\" 와 \"선선하다\" 둘 다": "Both \"Hot\" and \"Cool\"",
  "줄을 위에서 아래로 모두 실행한다고 본 답인데, if와 else는 한 갈래만 고릅니다.": "This runs every line in order. The if and else structure runs only one branch.",
  "i = 1 에서 while i <= 3: 합계 = 합계 + i, i = i + 1 이 끝났을 때 i는 얼마일까요?": "Starting with i = 1, what is i after while i <= 3: total = total + i, i = i + 1 ends?",
  "4": "4",
  "i가 4가 되어야 i <= 3 이 거짓이 되어 반복을 빠져나갑니다.": "Only when i reaches 4 does i <= 3 become false and the program exit the loop.",
  "3": "3",
  "조건에 3이 적혀 있으니 3에서 멈춘다고 본 답인데, 3 <= 3 은 참이라 한 바퀴 더 돌고 i가 4가 됩니다.": "The number 3 in the condition can look like a stopping point. But 3 <= 3 is true, so another pass makes i equal 4.",
  "1": "1",
  "반복 안의 값은 반복이 끝나면 처음으로 돌아간다고 본 답인데, i 칸에 적은 값은 그대로 남습니다.": "Values in the loop do not reset when it ends. The value written to the i cell remains.",
  "횟수 = 10 에서 while 횟수 > 0: 횟수 = 횟수 - 2 를 실행합니다. 반복 안의 줄은 몇 번 실행될까요?": "Starting with count = 10, run while count > 0: count = count - 2. How many times does the line inside the loop run?",
  "5번": "5 times",
  "확인할 때 횟수가 10, 8, 6, 4, 2이면 참이고, 0이 되면 거짓입니다.": "The checks at 10, 8, 6, 4 and 2 are true. The condition becomes false at 0.",
  "10번": "10 times",
  "시작 값만큼 돈다고 본 답인데, 한 바퀴에 2씩 줄어 다섯 바퀴 만에 0이 됩니다.": "This counts once per unit of the starting value. Each pass subtracts 2, so it reaches 0 after five passes.",
  "4번": "4 times",
  "2가 되면 멈춘다고 본 답인데, 2 > 0 도 참이라 2일 때 한 바퀴 더 돕니다.": "It still runs when count is 2, because 2 > 0 is true.",
  "i = 1 에서 while i != 4: i = i + 2 를 실행합니다(!= 는 '같지 않다'). 이 반복은 어떻게 될까요?": "Starting with i = 1, run while i != 4: i = i + 2. The operator != means not equal. What happens to the loop?",
  "끝나지 않는다": "It never ends.",
  "i가 1, 3, 5, 7… 로 홀수만 되어 4와 같아지는 순간이 없으니 조건이 늘 참입니다.": "The values are odd: 1, 3, 5, 7 and so on. The value is never exactly 4, so the condition stays true.",
  "두 바퀴 뒤 끝난다": "It ends after two passes.",
  "i가 4 근처를 지나가면 멈춘다고 본 답인데, 조건은 정확히 4일 때만 거짓입니다.": "Being near 4 does not stop it. The condition is false only when i is exactly 4.",
  "i가 4보다 커지면 끝난다": "It ends when i is greater than 4.",
  "조건을 i <= 4 처럼 읽은 답인데, != 는 크기가 아니라 같은지만 봅니다.": "This reads the condition like i <= 4. The operator != only checks equality."
};
