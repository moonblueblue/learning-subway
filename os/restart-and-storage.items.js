lessonItems["os/restart-and-storage"] = [
  {
    "id": "restart-and-storage-1",
    "prompt": "자동 저장이 꺼진 문서 앱에서 보고서를 고쳐 저장한 뒤, 한 문단을 더 썼습니다. 저장하지 않고 시스템 종료했다가 다시 켜서 보고서를 엽니다. 무엇이 보일까요?",
    "novel": true,
    "options": [
      {"text": "저장할 때까지의 내용", "correct": true, "why": "열면 저장 장치의 파일을 올리는데, 마지막 문단은 메모리에만 있다가 전원과 함께 사라졌습니다."},
      {"text": "마지막에 쓴 문단까지", "why": "다시 켜면 끄기 전 화면이 돌아온다고 본 것인데, 화면에 있던 것은 메모리의 사본이었습니다."},
      {"text": "고치기 전 처음 내용", "why": "다시 켜면 모든 것이 처음으로 돌아간다고 본 것인데, 저장한 내용은 저장 장치의 파일에 들어 있습니다."}
    ]
  },
  {
    "id": "restart-and-storage-2",
    "prompt": "컴퓨터가 꺼져 있는 동안 사진 앱은 어디에 있을까요?",
    "novel": false,
    "options": [
      {"text": "저장 장치에 파일로만 있다", "correct": true, "why": "메모리의 사진 앱은 그 파일을 올린 사본이었고, 전원과 함께 사라졌습니다."},
      {"text": "메모리에 멈춘 채로 있다", "why": "꺼져도 앱이 메모리에서 기다린다고 본 것인데, 5단계에서 메모리의 세 칸은 모두 비었습니다."},
      {"text": "어디에도 없고 켤 때 운영체제가 새로 만든다", "why": "앱이 실행할 때마다 생겨난다고 본 것인데, 7단계에서 사진 앱은 저장 장치의 사진 앱 파일에서 올라왔습니다."}
    ]
  },
  {
    "id": "restart-and-storage-3",
    "prompt": "컴퓨터를 켜면 운영체제가 앱보다 먼저 메모리에 올라옵니다. 왜 그래야 할까요?",
    "novel": false,
    "options": [
      {"text": "앱이 파일을 열거나 장치를 쓰려면 운영체제에 요청해야 하기 때문이다", "correct": true, "why": "요청을 받을 운영체제가 메모리에 없으면 앱은 사진 하나도 열 수 없습니다."},
      {"text": "운영체제 파일이 가장 작아 빨리 올라오기 때문이다", "why": "순서를 크기로 정한다고 본 것인데, 순서는 앱이 운영체제에 기대어 일하기 때문에 정해집니다."},
      {"text": "운영체제는 꺼져 있는 동안에도 메모리에 남아 있기 때문이다", "why": "운영체제는 특별하다고 본 것인데, 5단계에서 운영체제 칸도 비었고 6단계에서 다시 올라왔습니다."}
    ]
  },
  {
    "id": "restart-and-storage-4",
    "prompt": "운영체제의 새 판을 받아 저장 장치의 운영체제 파일을 바꿔 두기만 했습니다. 아직 다시 켜지 않았습니다. 지금 메모리에서 일하고 있는 운영체제는 어느 판일까요?",
    "novel": true,
    "options": [
      {"text": "예전 판", "correct": true, "why": "메모리의 운영체제는 켤 때 예전 파일에서 올린 사본이라, 파일을 바꿔도 다시 올리기 전까지 그대로입니다."},
      {"text": "새 판", "why": "저장 장치의 파일이 바뀌면 메모리의 사본도 따라 바뀐다고 본 것인데, 사본은 올릴 때 한 번 복사한 것입니다."},
      {"text": "운영체제가 멈춘다", "why": "파일이 바뀌면 메모리의 운영체제가 쓸 수 없게 된다고 본 것인데, 메모리의 사본은 파일과 따로 있어 계속 일합니다."}
    ]
  }
];

lessonItemsText["os/restart-and-storage"] = {
  "자동 저장이 꺼진 문서 앱에서 보고서를 고쳐 저장한 뒤, 한 문단을 더 썼습니다. 저장하지 않고 시스템 종료했다가 다시 켜서 보고서를 엽니다. 무엇이 보일까요?": "In a document app with autosave turned off, you edit a report, save it, and then write one more paragraph. Without saving, you shut down, turn the computer back on and open the report. What do you see?",
  "저장할 때까지의 내용": "The contents up to the save",
  "열면 저장 장치의 파일을 올리는데, 마지막 문단은 메모리에만 있다가 전원과 함께 사라졌습니다.": "Opening it loads the file from storage, and the last paragraph was only in memory and disappeared with the power.",
  "마지막에 쓴 문단까지": "Everything up to the last paragraph",
  "다시 켜면 끄기 전 화면이 돌아온다고 본 것인데, 화면에 있던 것은 메모리의 사본이었습니다.": "This assumes turning it back on brings back the screen from before. What was on the screen was the copy in memory.",
  "고치기 전 처음 내용": "The original contents before any edits",
  "다시 켜면 모든 것이 처음으로 돌아간다고 본 것인데, 저장한 내용은 저장 장치의 파일에 들어 있습니다.": "This assumes a restart takes everything back to the start. What you saved is in the file on the storage device.",
  "컴퓨터가 꺼져 있는 동안 사진 앱은 어디에 있을까요?": "While the computer is off, where is the photo app?",
  "저장 장치에 파일로만 있다": "Only as a file on the storage device",
  "메모리의 사진 앱은 그 파일을 올린 사본이었고, 전원과 함께 사라졌습니다.": "The photo app in memory was a copy loaded from that file, and it disappeared with the power.",
  "메모리에 멈춘 채로 있다": "Paused in memory",
  "꺼져도 앱이 메모리에서 기다린다고 본 것인데, 5단계에서 메모리의 세 칸은 모두 비었습니다.": "This assumes the app waits in memory while the computer is off. In step 5, all three memory boxes were empty.",
  "어디에도 없고 켤 때 운영체제가 새로 만든다": "Nowhere; the operating system makes it anew at startup",
  "앱이 실행할 때마다 생겨난다고 본 것인데, 7단계에서 사진 앱은 저장 장치의 사진 앱 파일에서 올라왔습니다.": "This assumes an app comes into being each time it runs. In step 7, the photo app was loaded from the photo app file on the storage device.",
  "컴퓨터를 켜면 운영체제가 앱보다 먼저 메모리에 올라옵니다. 왜 그래야 할까요?": "When the computer starts, the operating system is loaded into memory before any app. Why must it be?",
  "앱이 파일을 열거나 장치를 쓰려면 운영체제에 요청해야 하기 때문이다": "Because an app has to ask the operating system to open files or use devices",
  "요청을 받을 운영체제가 메모리에 없으면 앱은 사진 하나도 열 수 없습니다.": "If the operating system that takes the requests is not in memory, the app cannot open even one photo.",
  "운영체제 파일이 가장 작아 빨리 올라오기 때문이다": "Because the operating system file is the smallest and loads fastest",
  "순서를 크기로 정한다고 본 것인데, 순서는 앱이 운영체제에 기대어 일하기 때문에 정해집니다.": "This assumes size sets the order. The order comes from apps relying on the operating system to do their work.",
  "운영체제는 꺼져 있는 동안에도 메모리에 남아 있기 때문이다": "Because the operating system stays in memory even while the computer is off",
  "운영체제는 특별하다고 본 것인데, 5단계에서 운영체제 칸도 비었고 6단계에서 다시 올라왔습니다.": "This assumes the operating system is special. In step 5, its box was empty too, and in step 6 it was loaded again.",
  "운영체제의 새 판을 받아 저장 장치의 운영체제 파일을 바꿔 두기만 했습니다. 아직 다시 켜지 않았습니다. 지금 메모리에서 일하고 있는 운영체제는 어느 판일까요?": "You downloaded a new version of the operating system and only replaced the operating system file on the storage device. You have not restarted yet. Which version is working in memory now?",
  "예전 판": "The old version",
  "메모리의 운영체제는 켤 때 예전 파일에서 올린 사본이라, 파일을 바꿔도 다시 올리기 전까지 그대로입니다.": "The operating system in memory is a copy loaded from the old file at startup, so it stays the same until it is loaded again, even after the file changes.",
  "새 판": "The new version",
  "저장 장치의 파일이 바뀌면 메모리의 사본도 따라 바뀐다고 본 것인데, 사본은 올릴 때 한 번 복사한 것입니다.": "This assumes the copy in memory follows changes to the file in storage. The copy was made once, when it was loaded.",
  "운영체제가 멈춘다": "The operating system stops",
  "파일이 바뀌면 메모리의 운영체제가 쓸 수 없게 된다고 본 것인데, 메모리의 사본은 파일과 따로 있어 계속 일합니다.": "This assumes the operating system in memory becomes unusable when the file changes. The copy in memory is separate from the file and keeps working."
};
