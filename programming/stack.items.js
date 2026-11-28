lessonItems["programming/stack"] = [
  {
    "id": "stack-1",
    "prompt": "아침() 안에서 씻기()를 부르고, 씻기() 안에서 양치()를 부릅니다. 셋 중 가장 먼저 끝나는 함수는?",
    "novel": true,
    "options": [
      {
        "text": "양치",
        "why": "가장 나중에 불려 맨 위에 쌓인 층이라, 이것이 돌려줘야 씻기가 이어 갈 수 있습니다.",
        "correct": true
      },
      {
        "text": "아침",
        "why": "먼저 부른 것이 먼저 끝난다고 본 답인데, 아침은 씻기가 돌려줄 때까지 기다립니다."
      },
      {
        "text": "씻기",
        "why": "가운데 층이 먼저 정리된다고 본 답인데, 층은 맨 위부터 하나씩 사라집니다."
      }
    ]
  },
  {
    "id": "stack-2",
    "prompt": "맨 바깥에 x = 1 이 있고, 바꾸기(x) 안에서 x = 100 을 적은 뒤 return x 를 합니다. y = 바꾸기(x) 가 끝나면 맨 바깥의 x는?",
    "novel": false,
    "options": [
      {
        "text": "1",
        "why": "100은 바꾸기 층의 x에 적혔고, 그 층은 사라졌습니다. 바깥으로 나온 것은 y에 들어간 100뿐입니다.",
        "correct": true
      },
      {
        "text": "100",
        "why": "이름이 같으니 같은 칸이라고 본 답인데, 층이 다르면 같은 이름도 다른 칸입니다."
      },
      {
        "text": "없다",
        "why": "함수를 부르면 바깥 변수가 함수 쪽으로 옮겨 간다고 본 답인데, 함수는 값을 복사해 받을 뿐 바깥 x는 그대로입니다."
      }
    ]
  },
  {
    "id": "stack-3",
    "prompt": "f() 가 g() 를 부르고, g가 아직 실행 중입니다. 맨 바깥 층을 포함해 호출 스택은 몇 층일까요?",
    "novel": true,
    "options": [
      {
        "text": "3층",
        "why": "맨 바깥 위에 f 층, 그 위에 g 층이 쌓여 있습니다.",
        "correct": true
      },
      {
        "text": "2층",
        "why": "g를 부르면 f 층이 g 층으로 바뀐다고 본 답인데, f는 g가 돌려주기를 기다리며 남아 있습니다."
      },
      {
        "text": "1층",
        "why": "실행 중인 함수 하나만 스택에 있다고 본 답인데, 끝나지 않은 함수의 층은 모두 쌓여 있습니다."
      }
    ]
  },
  {
    "id": "stack-4",
    "prompt": "세기(n)을 고쳐, n이 5일 때는 더 부르지 않고 n을 돌려주게 했습니다. 세기(1)을 부르면 스택은 어떻게 될까요?",
    "novel": true,
    "options": [
      {
        "text": "맨 바깥을 포함해 6층까지 쌓인 뒤 위층부터 하나씩 사라진다",
        "why": "n이 1~5인 다섯 층이 쌓이고, n = 5 층이 돌려주면서 차례로 끝납니다.",
        "correct": true
      },
      {
        "text": "9층에서 넘친다",
        "why": "자기 자신을 부르면 늘 넘친다고 본 답인데, n이 5인 층은 더 부르지 않고 돌려주므로 거기서 쌓이기를 멈춥니다."
      },
      {
        "text": "1층만 쌓였다 바로 끝난다",
        "why": "돌려주는 경우가 생기면 처음부터 쌓이지 않는다고 본 답인데, n이 1~4일 때는 돌려주지 않고 다시 부르므로 층이 쌓입니다."
      }
    ]
  }
];
lessonItemsText["programming/stack"] = {
  "아침() 안에서 씻기()를 부르고, 씻기() 안에서 양치()를 부릅니다. 셋 중 가장 먼저 끝나는 함수는?": "Morning() calls Wash(), and Wash() calls Brush(). Which function finishes first?",
  "양치": "Brush",
  "가장 나중에 불려 맨 위에 쌓인 층이라, 이것이 돌려줘야 씻기가 이어 갈 수 있습니다.": "It is the last call and the top frame. Wash cannot continue until Brush returns.",
  "아침": "Morning",
  "먼저 부른 것이 먼저 끝난다고 본 답인데, 아침은 씻기가 돌려줄 때까지 기다립니다.": "The first call does not necessarily end first. Morning waits for Wash to return.",
  "씻기": "Wash",
  "가운데 층이 먼저 정리된다고 본 답인데, 층은 맨 위부터 하나씩 사라집니다.": "The middle frame cannot return first. Frames are removed from the top one by one.",
  "맨 바깥에 x = 1 이 있고, 바꾸기(x) 안에서 x = 100 을 적은 뒤 return x 를 합니다. y = 바꾸기(x) 가 끝나면 맨 바깥의 x는?": "The outermost x is 1. Inside change(x), write x = 100 and run return x. After y = change(x) is done, what is the outermost x?",
  "1": "1",
  "100은 바꾸기 층의 x에 적혔고, 그 층은 사라졌습니다. 바깥으로 나온 것은 y에 들어간 100뿐입니다.": "The 100 was written in the change frame and that frame disappeared. The returned 100 went into y.",
  "100": "100",
  "이름이 같으니 같은 칸이라고 본 답인데, 층이 다르면 같은 이름도 다른 칸입니다.": "The names match, but the cells belong to different frames.",
  "없다": "It is gone.",
  "함수를 부르면 바깥 변수가 함수 쪽으로 옮겨 간다고 본 답인데, 함수는 값을 복사해 받을 뿐 바깥 x는 그대로입니다.": "The caller’s x is not moved into the function. The function receives a copy of its value.",
  "f() 가 g() 를 부르고, g가 아직 실행 중입니다. 맨 바깥 층을 포함해 호출 스택은 몇 층일까요?": "f() calls g(), and g is still running. How many frames are on the call stack, including the outermost frame?",
  "3층": "3 frames",
  "맨 바깥 위에 f 층, 그 위에 g 층이 쌓여 있습니다.": "The f frame sits above the outermost frame and the g frame sits above f.",
  "2층": "2 frames",
  "g를 부르면 f 층이 g 층으로 바뀐다고 본 답인데, f는 g가 돌려주기를 기다리며 남아 있습니다.": "Calling g does not replace f. The f frame waits for g to return.",
  "1층": "1 frame",
  "실행 중인 함수 하나만 스택에 있다고 본 답인데, 끝나지 않은 함수의 층은 모두 쌓여 있습니다.": "The stack keeps all unfinished calls, even though only the top function is running.",
  "세기(n)을 고쳐, n이 5일 때는 더 부르지 않고 n을 돌려주게 했습니다. 세기(1)을 부르면 스택은 어떻게 될까요?": "Change count(n) so it returns n without calling again when n is 5. What happens to the stack when count(1) is called?",
  "맨 바깥을 포함해 6층까지 쌓인 뒤 위층부터 하나씩 사라진다": "It grows to 6 frames including outermost, then shrinks from the top.",
  "n이 1~5인 다섯 층이 쌓이고, n = 5 층이 돌려주면서 차례로 끝납니다.": "Five frames are added for n = 1 through n = 5. When n = 5 returns, the frames finish one at a time.",
  "9층에서 넘친다": "It overflows at 9 frames.",
  "자기 자신을 부르면 늘 넘친다고 본 답인데, n이 5인 층은 더 부르지 않고 돌려주므로 거기서 쌓이기를 멈춥니다.": "Calling itself can keep growing the stack. This version stops adding frames when n is 5.",
  "1층만 쌓였다 바로 끝난다": "It adds one frame then finishes.",
  "돌려주는 경우가 생기면 처음부터 쌓이지 않는다고 본 답인데, n이 1~4일 때는 돌려주지 않고 다시 부르므로 층이 쌓입니다.": "The return case only happens at n = 5. For n = 1 through 4 it still makes another call."
};
