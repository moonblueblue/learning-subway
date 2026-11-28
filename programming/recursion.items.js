lessonItems["programming/recursion"] = [
  {
    "id": "recursion-1",
    "prompt": "같은 팩(n) 으로 팩(5) 를 부르면 무엇을 돌려줄까요?",
    "novel": true,
    "options": [
      {
        "text": "120",
        "why": "팩(4) 가 24를 돌려주므로 5 × 24 = 120 입니다.",
        "correct": true
      },
      {
        "text": "15",
        "why": "5 + 4 + 3 + 2 + 1 처럼 더한다고 본 답인데, 각 층은 n과 아래에서 받은 값을 곱합니다."
      },
      {
        "text": "5",
        "why": "맨 처음 층은 받은 n을 돌려준다고 본 답인데, 팩(5) 는 팩(4) 의 결과를 받아 곱한 뒤 돌려줍니다."
      }
    ]
  },
  {
    "id": "recursion-2",
    "prompt": "합(n) 은 n이 0이면 0을 돌려주고, 아니면 n + 합(n − 1) 을 돌려줍니다. 합(3) 을 부르면 맨 바깥을 포함해 스택은 가장 높을 때 몇 층일까요?",
    "novel": true,
    "options": [
      {
        "text": "5층",
        "why": "맨 바깥 위에 합(3), 합(2), 합(1), 합(0) 네 층이 쌓인 뒤 합(0) 이 0을 돌려줍니다.",
        "correct": true
      },
      {
        "text": "4층",
        "why": "멈추는 조건에 걸린 합(0) 은 층을 만들지 않는다고 본 답인데, 합(0) 도 불렸으므로 층이 생기고 그 안에서 조건을 확인합니다."
      },
      {
        "text": "2층",
        "why": "같은 함수는 한 층을 다시 쓴다고 본 답인데, 부를 때마다 새 층이 생깁니다."
      }
    ]
  },
  {
    "id": "recursion-3",
    "prompt": "거꾸로세기(n) 은 n을 화면에 쓰고 거꾸로세기(n − 1) 을 부르며, 멈추는 조건이 없습니다. 거꾸로세기(3) 은 어떻게 될까요?",
    "novel": true,
    "options": [
      {
        "text": "3, 2, 1, 0, −1 … 을 쓰다가 스택이 넘친다",
        "why": "멈추는 조건이 없어 어느 층도 돌려주지 않고 계속 쌓입니다.",
        "correct": true
      },
      {
        "text": "3, 2, 1 을 쓰고 끝난다",
        "why": "세기는 1에서 끝난다고 본 답인데, 1에서 멈추라는 줄이 없습니다."
      },
      {
        "text": "0에서 멈춘다",
        "why": "수가 0이 되면 저절로 멈춘다고 본 답인데, 0에서도 다음 호출 줄로 갑니다."
      }
    ]
  },
  {
    "id": "recursion-4",
    "prompt": "같은 fib(n) 으로 fib(4) 를 구하는 동안 fib(2) 는 몇 번 계산될까요?",
    "novel": true,
    "options": [
      {
        "text": "2번",
        "why": "fib(4) 가 fib(3) 과 fib(2) 를 부르고, fib(3) 이 다시 fib(2) 를 부릅니다.",
        "correct": true
      },
      {
        "text": "1번",
        "why": "한 번 계산한 값은 기억해 다시 쓴다고 본 답인데, 이 함수는 기억하지 않고 부를 때마다 새로 계산합니다."
      },
      {
        "text": "3번",
        "why": "fib(1) 이 3번 불리는 것과 섞은 답인데, fib(2) 를 직접 부르는 곳은 fib(4) 와 fib(3) 두 곳뿐입니다."
      }
    ]
  }
];
lessonItemsText["programming/recursion"] = {
  "같은 팩(n) 으로 팩(5) 를 부르면 무엇을 돌려줄까요?": "With the same fact(n), what does fact(5) return?",
  "120": "120",
  "팩(4) 가 24를 돌려주므로 5 × 24 = 120 입니다.": "fact(4) returns 24, so 5 × 24 = 120.",
  "15": "15",
  "5 + 4 + 3 + 2 + 1 처럼 더한다고 본 답인데, 각 층은 n과 아래에서 받은 값을 곱합니다.": "This adds like 5 + 4 + 3 + 2 + 1, but each frame multiplies n by the value it receives.",
  "5": "5",
  "맨 처음 층은 받은 n을 돌려준다고 본 답인데, 팩(5) 는 팩(4) 의 결과를 받아 곱한 뒤 돌려줍니다.": "This assumes the first frame returns its n, but fact(5) multiplies the result of fact(4) and then returns it.",
  "합(n) 은 n이 0이면 0을 돌려주고, 아니면 n + 합(n − 1) 을 돌려줍니다. 합(3) 을 부르면 맨 바깥을 포함해 스택은 가장 높을 때 몇 층일까요?": "sum(n) returns 0 when n is 0, and otherwise n + sum(n − 1). Calling sum(3), how many frames does the stack have at its highest, counting the outermost one?",
  "5층": "5 frames",
  "맨 바깥 위에 합(3), 합(2), 합(1), 합(0) 네 층이 쌓인 뒤 합(0) 이 0을 돌려줍니다.": "Four frames, sum(3), sum(2), sum(1) and sum(0), pile on the outermost one before sum(0) returns 0.",
  "4층": "4 frames",
  "멈추는 조건에 걸린 합(0) 은 층을 만들지 않는다고 본 답인데, 합(0) 도 불렸으므로 층이 생기고 그 안에서 조건을 확인합니다.": "This assumes sum(0), which meets the stopping condition, makes no frame, but sum(0) was called too, so it gets a frame and checks the condition inside it.",
  "2층": "2 frames",
  "같은 함수는 한 층을 다시 쓴다고 본 답인데, 부를 때마다 새 층이 생깁니다.": "This assumes the same function reuses one frame, but every call makes a new frame.",
  "거꾸로세기(n) 은 n을 화면에 쓰고 거꾸로세기(n − 1) 을 부르며, 멈추는 조건이 없습니다. 거꾸로세기(3) 은 어떻게 될까요?": "countdown(n) writes n on the screen and calls countdown(n − 1), with no stopping condition. What happens with countdown(3)?",
  "3, 2, 1, 0, −1 … 을 쓰다가 스택이 넘친다": "It writes 3, 2, 1, 0, −1 … until the stack overflows",
  "멈추는 조건이 없어 어느 층도 돌려주지 않고 계속 쌓입니다.": "With no stopping condition no frame returns, so frames keep piling up.",
  "3, 2, 1 을 쓰고 끝난다": "It writes 3, 2, 1 and ends",
  "세기는 1에서 끝난다고 본 답인데, 1에서 멈추라는 줄이 없습니다.": "This assumes counting ends at 1, but there is no line that stops at 1.",
  "0에서 멈춘다": "It stops at 0",
  "수가 0이 되면 저절로 멈춘다고 본 답인데, 0에서도 다음 호출 줄로 갑니다.": "This assumes reaching 0 stops it by itself, but at 0 it still goes on to the next call.",
  "같은 fib(n) 으로 fib(4) 를 구하는 동안 fib(2) 는 몇 번 계산될까요?": "With the same fib(n), how many times is fib(2) computed while finding fib(4)?",
  "2번": "Twice",
  "fib(4) 가 fib(3) 과 fib(2) 를 부르고, fib(3) 이 다시 fib(2) 를 부릅니다.": "fib(4) calls fib(3) and fib(2), and fib(3) calls fib(2) again.",
  "1번": "Once",
  "한 번 계산한 값은 기억해 다시 쓴다고 본 답인데, 이 함수는 기억하지 않고 부를 때마다 새로 계산합니다.": "This assumes a computed value is remembered and reused, but this function remembers nothing and computes again on every call.",
  "3번": "Three times",
  "fib(1) 이 3번 불리는 것과 섞은 답인데, fib(2) 를 직접 부르는 곳은 fib(4) 와 fib(3) 두 곳뿐입니다.": "This mixes it up with fib(1) being called three times, but only fib(4) and fib(3) call fib(2) directly."
};
