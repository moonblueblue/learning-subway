lessonItems["os/what-os-does"] = [
  {
    "id": "what-os-does-1",
    "prompt": "문서 앱에서 '인쇄'를 누르면 문서가 프린터로 나옵니다. 문서는 어떤 길로 프린터에 갈까요?",
    "novel": true,
    "options": [
      {"text": "문서 앱이 운영체제에 맡기고, 운영체제가 프린터로 보낸다", "correct": true, "why": "프린터도 화면, 스피커처럼 앱이 운영체제를 거쳐 쓰는 장치입니다."},
      {"text": "문서 앱이 프린터에 직접 보낸다", "why": "앱이 장치를 직접 움직인다고 본 것인데, 레슨의 사진 앱과 음악 앱처럼 장치를 쓰는 일은 운영체제에 맡깁니다."},
      {"text": "운영체제가 문서를 새로 만들어 프린터로 보낸다", "why": "운영체제가 내용까지 만든다고 본 것인데, 문서 내용은 앱이 만들고 운영체제는 그것을 장치에 전합니다."}
    ]
  },
  {
    "id": "what-os-does-2",
    "prompt": "사진 앱이 바다.jpg 의 내용을 받아 사진을 띄웠습니다. 저장 장치의 바다.jpg 는 어떻게 되었을까요?",
    "novel": false,
    "options": [
      {"text": "그대로 남아 있다", "correct": true, "why": "운영체제는 저장 장치에서 내용을 읽어 앱에 돌려줄 뿐이고, 원본은 저장 장치에 남습니다."},
      {"text": "앱으로 옮겨 가 저장 장치에서는 사라졌다", "why": "물건을 건네주듯 파일이 옮겨 간다고 본 것인데, 앱에 온 것은 읽은 내용이고 원본은 그 자리에 있습니다."},
      {"text": "앱이 사진을 띄운 동안만 비어 있다가 창을 닫으면 돌아온다", "why": "앱이 보는 동안 원본을 빌려 간다고 본 것인데, 원본은 읽는 동안에도 저장 장치에 있습니다."}
    ]
  },
  {
    "id": "what-os-does-3",
    "prompt": "바다 사진이 화면에 뜰 때, 그림을 그리는 쪽과 그림을 화면에 보내는 쪽은 각각 누구일까요?",
    "novel": false,
    "options": [
      {"text": "그리는 것은 사진 앱, 화면에 보내는 것은 운영체제", "correct": true, "why": "3단계에서 앱이 파일로 그림을 만들고, 운영체제가 그 그림을 화면에 표시했습니다."},
      {"text": "둘 다 운영체제", "why": "운영체제가 사진을 새로 만든다고 본 것인데, 그림은 파일 내용을 받은 앱이 그립니다."},
      {"text": "둘 다 사진 앱", "why": "앱이 화면을 직접 다룬다고 본 것인데, 앱은 화면 표시를 운영체제에 맡깁니다."}
    ]
  },
  {
    "id": "what-os-does-4",
    "prompt": "메모 앱에서 '저장'을 누르면 쓴 글이 저장 장치의 파일에 들어갑니다. 글은 어떤 길로 저장 장치의 파일에 들어갈까요?",
    "novel": true,
    "options": [
      {"text": "메모 앱이 운영체제에 맡기고, 운영체제가 저장 장치의 파일에 쓴다", "correct": true, "why": "읽을 때와 같은 길을 지나고, 이번에는 앱의 글이 저장 장치 쪽으로 갑니다."},
      {"text": "메모 앱이 저장 장치에 직접 쓴다", "why": "쓰기는 읽기와 달리 앱이 직접 한다고 본 것인데, 읽기든 쓰기든 저장 장치는 운영체제를 거쳐 씁니다."},
      {"text": "앱이 부탁하지 않아도 운영체제가 알아서 저장한다", "why": "운영체제가 앱의 글을 늘 지켜본다고 본 것인데, 운영체제는 앱이 저장을 요청해야 파일에 씁니다."}
    ]
  },
  {
    "id": "what-os-does-5",
    "prompt": "영상 통화 앱이 카메라로 찍은 내 얼굴을 받아 창에 띄웁니다. 카메라의 영상은 어떻게 앱에 올까요?",
    "novel": true,
    "options": [
      {"text": "카메라에서 운영체제를 거쳐 앱으로 온다", "correct": true, "why": "저장 장치에서 파일 내용이 운영체제를 거쳐 돌아온 것처럼, 장치에서 들어오는 것도 운영체제가 앱에 건넵니다."},
      {"text": "카메라에서 앱으로 바로 온다", "why": "들어오는 것은 운영체제를 거치지 않는다고 본 것인데, 앱은 들어오는 쪽이든 나가는 쪽이든 장치에 직접 닿지 않습니다."},
      {"text": "카메라 영상을 먼저 화면에 띄운 뒤 앱이 화면에서 가져온다", "why": "화면이 장치 사이의 통로라고 본 것인데, 화면은 앱이 그린 것을 보여 주는 장치일 뿐입니다."}
    ]
  }
];

lessonItemsText["os/what-os-does"] = {
  "문서 앱에서 '인쇄'를 누르면 문서가 프린터로 나옵니다. 문서는 어떤 길로 프린터에 갈까요?": "You press Print in a document app, and the document comes out of the printer. Which way does the document travel to the printer?",
  "문서 앱이 운영체제에 맡기고, 운영체제가 프린터로 보낸다": "The document app hands it to the operating system, and the operating system sends it to the printer",
  "프린터도 화면, 스피커처럼 앱이 운영체제를 거쳐 쓰는 장치입니다.": "Like the screen and the speaker, the printer is a device that apps use through the operating system.",
  "문서 앱이 프린터에 직접 보낸다": "The document app sends it straight to the printer",
  "앱이 장치를 직접 움직인다고 본 것인데, 레슨의 사진 앱과 음악 앱처럼 장치를 쓰는 일은 운영체제에 맡깁니다.": "This assumes the app drives the device itself. Like the photo app and the music app in the lesson, apps leave the use of devices to the operating system.",
  "운영체제가 문서를 새로 만들어 프린터로 보낸다": "The operating system makes a new document and sends it to the printer",
  "운영체제가 내용까지 만든다고 본 것인데, 문서 내용은 앱이 만들고 운영체제는 그것을 장치에 전합니다.": "This assumes the operating system also makes the content. The app makes the document's content, and the operating system passes it on to the device.",
  "사진 앱이 바다.jpg 의 내용을 받아 사진을 띄웠습니다. 저장 장치의 바다.jpg 는 어떻게 되었을까요?": "The photo app received the contents of sea.jpg and showed the photo. What happened to sea.jpg on the storage device?",
  "그대로 남아 있다": "It is still there",
  "운영체제는 저장 장치에서 내용을 읽어 앱에 돌려줄 뿐이고, 원본은 저장 장치에 남습니다.": "The operating system only reads the contents from storage and returns them to the app. The original stays on the storage device.",
  "앱으로 옮겨 가 저장 장치에서는 사라졌다": "It moved to the app and is gone from storage",
  "물건을 건네주듯 파일이 옮겨 간다고 본 것인데, 앱에 온 것은 읽은 내용이고 원본은 그 자리에 있습니다.": "This assumes the file is handed over like an object. What reached the app is the contents that were read, and the original stays where it was.",
  "앱이 사진을 띄운 동안만 비어 있다가 창을 닫으면 돌아온다": "It is missing while the app shows the photo and returns when the window closes",
  "앱이 보는 동안 원본을 빌려 간다고 본 것인데, 원본은 읽는 동안에도 저장 장치에 있습니다.": "This assumes the app borrows the original while it is in use. The original stays on the storage device even while it is being read.",
  "바다 사진이 화면에 뜰 때, 그림을 그리는 쪽과 그림을 화면에 보내는 쪽은 각각 누구일까요?": "When the sea photo appears on screen, who draws the image and who sends it to the screen?",
  "그리는 것은 사진 앱, 화면에 보내는 것은 운영체제": "The photo app draws it, and the operating system sends it to the screen",
  "3단계에서 앱이 파일로 그림을 만들고, 운영체제가 그 그림을 화면에 표시했습니다.": "In step 3, the app made the image from the file, and the operating system displayed it on the screen.",
  "둘 다 운영체제": "The operating system does both",
  "운영체제가 사진을 새로 만든다고 본 것인데, 그림은 파일 내용을 받은 앱이 그립니다.": "This assumes the operating system makes the photo anew. The image is drawn by the app that received the file contents.",
  "둘 다 사진 앱": "The photo app does both",
  "앱이 화면을 직접 다룬다고 본 것인데, 앱은 화면 표시를 운영체제에 맡깁니다.": "This assumes the app handles the screen itself. The app leaves displaying to the operating system.",
  "메모 앱에서 '저장'을 누르면 쓴 글이 저장 장치의 파일에 들어갑니다. 글은 어떤 길로 저장 장치의 파일에 들어갈까요?": "You press Save in a notes app, and what you wrote goes into a file on the storage device. Which way does the text travel into the file?",
  "메모 앱이 운영체제에 맡기고, 운영체제가 저장 장치의 파일에 쓴다": "The notes app hands it to the operating system, and the operating system writes it to the file on the storage device",
  "읽을 때와 같은 길을 지나고, 이번에는 앱의 글이 저장 장치 쪽으로 갑니다.": "It takes the same path as reading, but this time the app's text travels toward the storage device.",
  "메모 앱이 저장 장치에 직접 쓴다": "The notes app writes straight to the storage device",
  "쓰기는 읽기와 달리 앱이 직접 한다고 본 것인데, 읽기든 쓰기든 저장 장치는 운영체제를 거쳐 씁니다.": "This assumes that, unlike reading, writing is done by the app itself. Reading or writing, apps use the storage device through the operating system.",
  "앱이 부탁하지 않아도 운영체제가 알아서 저장한다": "The operating system saves it without the app asking",
  "운영체제가 앱의 글을 늘 지켜본다고 본 것인데, 운영체제는 앱이 저장을 요청해야 파일에 씁니다.": "This assumes the operating system always watches what the app writes. The operating system writes to the file only when the app requests a save.",
  "영상 통화 앱이 카메라로 찍은 내 얼굴을 받아 창에 띄웁니다. 카메라의 영상은 어떻게 앱에 올까요?": "A video call app receives your face from the camera and shows it in its window. How does the camera's video reach the app?",
  "카메라에서 운영체제를 거쳐 앱으로 온다": "From the camera through the operating system to the app",
  "저장 장치에서 파일 내용이 운영체제를 거쳐 돌아온 것처럼, 장치에서 들어오는 것도 운영체제가 앱에 건넵니다.": "Just as the file contents came back from storage through the operating system, the operating system also hands the app whatever comes in from a device.",
  "카메라에서 앱으로 바로 온다": "Straight from the camera to the app",
  "들어오는 것은 운영체제를 거치지 않는다고 본 것인데, 앱은 들어오는 쪽이든 나가는 쪽이든 장치에 직접 닿지 않습니다.": "This assumes incoming data skips the operating system. Whether data comes in or goes out, the app never touches the device directly.",
  "카메라 영상을 먼저 화면에 띄운 뒤 앱이 화면에서 가져온다": "The camera video appears on screen first, and the app takes it from the screen",
  "화면이 장치 사이의 통로라고 본 것인데, 화면은 앱이 그린 것을 보여 주는 장치일 뿐입니다.": "This assumes the screen is a passage between devices. The screen is only a device that shows what the app has drawn."
};
