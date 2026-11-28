lessonItems["computing-basics/computer-tasks"] = [
  {
    "id": "computer-tasks-1",
    "prompt": "수 카드 4와 7을 주고 '큰 수 고르기'를 맡겼습니다. 화면에 무엇이 나올까요?",
    "novel": false,
    "options": [
      {
        "text": "7",
        "why": "큰 수 고르기는 받은 두 수 중 큰 것을 내놓고, 7이 4보다 큽니다.",
        "correct": true
      },
      {
        "text": "11",
        "why": "앞에서 본 '더하기' 결과를 떠올린 답인데, 이번에 맡긴 일은 더하기가 아니라 고르기입니다."
      },
      {
        "text": "4",
        "why": "먼저 놓인 카드가 나온다고 본 답인데, 고르기는 놓인 순서가 아니라 수의 크기로 정합니다."
      }
    ]
  },
  {
    "id": "computer-tasks-2",
    "prompt": "같은 수 카드 2와 3을 주었는데 한 번은 화면에 5가, 다음 번에는 3이 나왔습니다. 무엇이 달라졌을까요?",
    "novel": false,
    "options": [
      {
        "text": "맡긴 일",
        "why": "카드는 그대로이고 더하기에서 큰 수 고르기로 일이 바뀌어 결과가 달라졌습니다.",
        "correct": true
      },
      {
        "text": "받은 수 카드",
        "why": "결과가 바뀌면 받은 것이 바뀌었다고 본 답인데, 두 번 모두 2와 3을 받았습니다."
      },
      {
        "text": "컴퓨터가 한 번 계산을 틀렸다",
        "why": "같은 것을 주면 결과도 하나여야 한다고 본 답인데, 3은 큰 수 고르기의 맞는 결과입니다."
      }
    ]
  },
  {
    "id": "computer-tasks-3",
    "prompt": "번역 앱에 'apple'을 넣고 '한국어로 옮기기'를 맡겼더니 '사과'가 나왔습니다. 이 일에서 출력은 무엇인가요?",
    "novel": true,
    "options": [
      {
        "text": "사과",
        "why": "컴퓨터가 일을 마치고 내놓은 결과입니다.",
        "correct": true
      },
      {
        "text": "apple",
        "why": "화면에 보이는 글자는 모두 출력이라고 본 답인데, apple은 컴퓨터가 받은 것이라 입력입니다."
      },
      {
        "text": "한국어로 옮기기",
        "why": "컴퓨터가 한 일 자체를 결과로 본 답인데, 그것은 받은 것으로 하는 일이라 처리입니다."
      }
    ]
  },
  {
    "id": "computer-tasks-4",
    "prompt": "음악 앱에 3분짜리 같은 노래를 주고, 한 번은 '소리 크게 하기', 한 번은 '2배 빠르게 재생하기'를 맡깁니다. 결과는 어떻게 될까요?",
    "novel": true,
    "options": [
      {
        "text": "소리 크게 하기는 3분 그대로 소리만 커지고, 2배 빠르게 재생하기는 1분 30초가 된다",
        "why": "같은 노래라도 맡긴 일이 다르면 결과에서 바뀌는 곳이 다릅니다.",
        "correct": true
      },
      {
        "text": "같은 노래를 주었으니 두 결과가 같다",
        "why": "받은 것이 같으면 결과도 같다고 본 답인데, 맡긴 일이 다르면 결과가 다릅니다."
      },
      {
        "text": "둘 다 1분 30초가 된다",
        "why": "노래에 일을 맡기면 모두 같은 방식으로 바뀐다고 본 답인데, 소리 크게 하기는 길이를 바꾸지 않습니다."
      }
    ]
  }
];
lessonItemsText["computing-basics/computer-tasks"] = {
  "수 카드 4와 7을 주고 '큰 수 고르기'를 맡겼습니다. 화면에 무엇이 나올까요?": "Give the computer number cards 4 and 7 and ask it to pick the larger one. What will it show?",
  "7": "7",
  "큰 수 고르기는 받은 두 수 중 큰 것을 내놓고, 7이 4보다 큽니다.": "Picking the larger number returns the greater of the two inputs, and 7 is greater than 4.",
  "11": "11",
  "앞에서 본 '더하기' 결과를 떠올린 답인데, 이번에 맡긴 일은 더하기가 아니라 고르기입니다.": "That is what adding would give. This time the job is to pick the larger number.",
  "4": "4",
  "먼저 놓인 카드가 나온다고 본 답인데, 고르기는 놓인 순서가 아니라 수의 크기로 정합니다.": "The first card does not determine the result. The job compares the sizes of the numbers.",
  "같은 수 카드 2와 3을 주었는데 한 번은 화면에 5가, 다음 번에는 3이 나왔습니다. 무엇이 달라졌을까요?": "The same number cards, 2 and 3, gave 5 once and 3 the next time. What changed?",
  "맡긴 일": "The job",
  "카드는 그대로이고 더하기에서 큰 수 고르기로 일이 바뀌어 결과가 달라졌습니다.": "The cards stayed the same. The job changed from adding to picking the larger number.",
  "받은 수 카드": "The number cards",
  "결과가 바뀌면 받은 것이 바뀌었다고 본 답인데, 두 번 모두 2와 3을 받았습니다.": "A different result can suggest a different input, but both runs received 2 and 3.",
  "컴퓨터가 한 번 계산을 틀렸다": "The computer got a calculation wrong",
  "같은 것을 주면 결과도 하나여야 한다고 본 답인데, 3은 큰 수 고르기의 맞는 결과입니다.": "The same input can give different results for different jobs. Picking the larger number correctly gives 3.",
  "번역 앱에 'apple'을 넣고 '한국어로 옮기기'를 맡겼더니 '사과'가 나왔습니다. 이 일에서 출력은 무엇인가요?": "You enter 'apple' in a translation app and ask it to translate into Korean. It shows '사과'. What is the output?",
  "사과": "사과",
  "컴퓨터가 일을 마치고 내놓은 결과입니다.": "It is the result the computer gives you after doing the job.",
  "apple": "apple",
  "화면에 보이는 글자는 모두 출력이라고 본 답인데, apple은 컴퓨터가 받은 것이라 입력입니다.": "A word being visible on screen does not make it an output. The computer received 'apple' as input.",
  "한국어로 옮기기": "Translating into Korean",
  "컴퓨터가 한 일 자체를 결과로 본 답인데, 그것은 받은 것으로 하는 일이라 처리입니다.": "That is the work the computer does with the input, so it is the processing.",
  "음악 앱에 3분짜리 같은 노래를 주고, 한 번은 '소리 크게 하기', 한 번은 '2배 빠르게 재생하기'를 맡깁니다. 결과는 어떻게 될까요?": "You give a music app the same three-minute song twice. First you turn up the volume, then you play it at double speed. What happens?",
  "소리 크게 하기는 3분 그대로 소리만 커지고, 2배 빠르게 재생하기는 1분 30초가 된다": "Turning up the volume makes the song louder for the same three minutes. Double speed makes it 1 minute and 30 seconds long.",
  "같은 노래라도 맡긴 일이 다르면 결과에서 바뀌는 곳이 다릅니다.": "Different jobs can change different things about the same song.",
  "같은 노래를 주었으니 두 결과가 같다": "The results are the same because the song is the same.",
  "받은 것이 같으면 결과도 같다고 본 답인데, 맡긴 일이 다르면 결과가 다릅니다.": "The song stays the same as input, but the two jobs change different things.",
  "둘 다 1분 30초가 된다": "Both results last 1 minute and 30 seconds.",
  "노래에 일을 맡기면 모두 같은 방식으로 바뀐다고 본 답인데, 소리 크게 하기는 길이를 바꾸지 않습니다.": "Both jobs change the song in some way. Turning up the volume leaves its duration alone."
};
