lessonItems["os/sharing-cpu"] = [
  {
    "id": "sharing-cpu-1",
    "prompt": "메신저, 사진, 음악 세 앱이 모두 할 일이 있고 CPU 코어는 하나입니다. 레슨처럼 준비된 앱에 한 차례씩 돌아가며 준다면, 여섯 차례 동안 앱마다 몇 차례를 받을까요?",
    "novel": true,
    "options": [
      {"text": "앱마다 2차례", "correct": true, "why": "메신저, 사진, 음악 순서가 두 번 돌아 여섯 칸이 셋에게 둘씩 나뉩니다."},
      {"text": "앱마다 6차례", "why": "세 앱이 여섯 차례 내내 함께 계산한다고 본 것인데, 코어 하나는 한 차례에 한 앱의 일만 합니다."},
      {"text": "메신저가 6차례", "why": "먼저 시작한 앱이 다 끝날 때까지 코어를 쓴다고 본 것인데, 준비된 앱이 여럿이면 차례를 나눠 받습니다."}
    ]
  },
  {
    "id": "sharing-cpu-2",
    "prompt": "레슨 4단계에서 쉬던 사진 앱이 다시 준비되어 다음 차례를 받습니다. 사진 앱은 어떻게 일할까요?",
    "novel": false,
    "options": [
      {"text": "마친 일 하나에 이어서 두 번째 일을 한다", "correct": true, "why": "쉬는 동안에도 완료 1이 그대로 남아 있었고, 그 다음 일부터 합니다."},
      {"text": "처음 일부터 다시 한다", "why": "쉬면 하던 일을 잃는다고 본 것인데, 쉬는 동안에도 사진 앱이 마친 일은 지워지지 않았습니다."},
      {"text": "놓친 차례만큼 한꺼번에 일한다", "why": "쉬는 동안 음악 앱이 받은 차례를 돌려받는다고 본 것인데, 차례는 한 번에 한 칸씩만 받습니다."}
    ]
  },
  {
    "id": "sharing-cpu-3",
    "prompt": "음악 앱이 다음 곡 파일을 기다리느라 잠시 쉬고, 사진 앱만 준비되어 있습니다. 다음 두 차례는 어떻게 채워질까요?",
    "novel": true,
    "options": [
      {"text": "사진, 사진", "correct": true, "why": "쉬는 앱은 차례를 받지 않으므로 준비된 사진 앱이 두 칸을 모두 받습니다."},
      {"text": "비어 있음, 사진", "why": "쉬는 앱의 차례는 비워 둔다고 본 것인데, 코어는 준비된 앱이 있으면 빈 차례를 두지 않습니다."},
      {"text": "음악, 사진", "why": "순서가 정해져 있어 쉬어도 차례가 온다고 본 것인데, 차례는 준비된 앱에게만 갑니다."}
    ]
  },
  {
    "id": "sharing-cpu-4",
    "prompt": "CPU 코어 하나가 사진 앱과 음악 앱을 아주 짧은 차례로 번갈아 실행해, 사람에게는 둘이 함께 도는 것처럼 보입니다. 어느 한 순간에 코어가 계산하고 있는 앱은?",
    "novel": true,
    "options": [
      {"text": "두 앱 중 하나", "correct": true, "why": "차례가 짧아 함께 도는 것처럼 보일 뿐, 코어 하나는 한 차례에 한 앱의 일만 합니다."},
      {"text": "두 앱 모두", "why": "함께 도는 것처럼 보이니 실제로도 같은 순간에 계산한다고 본 것인데, 코어 칸에는 한 번에 한 앱의 표식만 들어갑니다."},
      {"text": "늘 음악 앱", "why": "소리가 끊기면 안 되니 음악 앱이 코어를 계속 쓴다고 본 것인데, 음악 앱도 차례를 나눠 받습니다."}
    ]
  }
];

lessonItemsText["os/sharing-cpu"] = {
  "메신저, 사진, 음악 세 앱이 모두 할 일이 있고 CPU 코어는 하나입니다. 레슨처럼 준비된 앱에 한 차례씩 돌아가며 준다면, 여섯 차례 동안 앱마다 몇 차례를 받을까요?": "A messenger, a photo app, and a music app all have work, and there is one CPU core. If the ready apps get one turn each in rotation, as in the lesson, how many of six turns does each app get?",
  "앱마다 2차례": "2 turns per app",
  "메신저, 사진, 음악 순서가 두 번 돌아 여섯 칸이 셋에게 둘씩 나뉩니다.": "The order messenger, photo, music goes around twice, so the six slots split two to each of the three apps.",
  "앱마다 6차례": "6 turns per app",
  "세 앱이 여섯 차례 내내 함께 계산한다고 본 것인데, 코어 하나는 한 차례에 한 앱의 일만 합니다.": "This assumes all three apps compute together for all six turns. One core does only one app's work per turn.",
  "메신저가 6차례": "6 turns for the messenger",
  "먼저 시작한 앱이 다 끝날 때까지 코어를 쓴다고 본 것인데, 준비된 앱이 여럿이면 차례를 나눠 받습니다.": "This assumes the app that started first keeps the core until it finishes. When several apps are ready, they share the turns.",
  "레슨 4단계에서 쉬던 사진 앱이 다시 준비되어 다음 차례를 받습니다. 사진 앱은 어떻게 일할까요?": "In step 4 of the lesson, the blocked photo app becomes ready again and gets the next turn. How does the photo app work?",
  "마친 일 하나에 이어서 두 번째 일을 한다": "It goes on to its second piece of work after the one it finished",
  "쉬는 동안에도 완료 1이 그대로 남아 있었고, 그 다음 일부터 합니다.": "Done 1 stayed as it was while the app was blocked, and it starts from the next piece of work.",
  "처음 일부터 다시 한다": "It starts again from the first piece of work",
  "쉬면 하던 일을 잃는다고 본 것인데, 쉬는 동안에도 사진 앱이 마친 일은 지워지지 않았습니다.": "This assumes a blocked app loses its work. The work the photo app had finished was not erased while it was blocked.",
  "놓친 차례만큼 한꺼번에 일한다": "It works all the turns it missed at once",
  "쉬는 동안 음악 앱이 받은 차례를 돌려받는다고 본 것인데, 차례는 한 번에 한 칸씩만 받습니다.": "This assumes the app gets back the turns the music app took while it was blocked. Turns come one slot at a time.",
  "음악 앱이 다음 곡 파일을 기다리느라 잠시 쉬고, 사진 앱만 준비되어 있습니다. 다음 두 차례는 어떻게 채워질까요?": "The music app is blocked for a moment, waiting for the next song file, and only the photo app is ready. How are the next two turns filled?",
  "사진, 사진": "Photo, Photo",
  "쉬는 앱은 차례를 받지 않으므로 준비된 사진 앱이 두 칸을 모두 받습니다.": "A blocked app gets no turns, so the ready photo app gets both slots.",
  "비어 있음, 사진": "Empty, Photo",
  "쉬는 앱의 차례는 비워 둔다고 본 것인데, 코어는 준비된 앱이 있으면 빈 차례를 두지 않습니다.": "This assumes a blocked app's turn is left empty. The core leaves no turn empty while some app is ready.",
  "음악, 사진": "Music, Photo",
  "순서가 정해져 있어 쉬어도 차례가 온다고 본 것인데, 차례는 준비된 앱에게만 갑니다.": "This assumes the order is fixed, so a turn still comes to a blocked app. Turns go only to ready apps.",
  "CPU 코어 하나가 사진 앱과 음악 앱을 아주 짧은 차례로 번갈아 실행해, 사람에게는 둘이 함께 도는 것처럼 보입니다. 어느 한 순간에 코어가 계산하고 있는 앱은?": "One CPU core runs the photo app and the music app in very short alternating turns, so to a person they seem to run together. At any one moment, which app is the core computing for?",
  "두 앱 중 하나": "One of the two apps",
  "차례가 짧아 함께 도는 것처럼 보일 뿐, 코어 하나는 한 차례에 한 앱의 일만 합니다.": "The turns are short, so they only seem to run together. One core does only one app's work per turn.",
  "두 앱 모두": "Both apps",
  "함께 도는 것처럼 보이니 실제로도 같은 순간에 계산한다고 본 것인데, 코어 칸에는 한 번에 한 앱의 표식만 들어갑니다.": "This assumes that because they seem to run together, they really compute at the same moment. The core slot holds only one app's marker at a time.",
  "늘 음악 앱": "Always the music app",
  "소리가 끊기면 안 되니 음악 앱이 코어를 계속 쓴다고 본 것인데, 음악 앱도 차례를 나눠 받습니다.": "This assumes the music app keeps the core because the sound must not cut out. The music app shares the turns too."
};
