lessonItems["os/file-access"] = [
  {
    "id": "file-access-1",
    "prompt": "메모 앱이 사진 폴더의 숲.jpg 를 열어 달라고 합니다. 메모 앱의 권한에는 사진 폴더 읽기 허용이 없습니다. 사진 앱은 허용이 있습니다. 어떻게 될까요?",
    "novel": true,
    "options": [
      {"text": "운영체제가 거절해 메모 앱에는 사진이 뜨지 않는다", "correct": true, "why": "권한은 누가 여는지에 따라 따로 정해져 있고, 메모 앱에는 허용이 없습니다."},
      {"text": "사진 앱이 열 수 있는 파일이니 메모 앱도 열린다", "why": "파일마다 누구나 열 수 있는지가 정해져 있다고 본 것인데, 운영체제는 요청한 앱에게 허용이 있는지 봅니다."},
      {"text": "저장 장치가 메모 앱을 알아보고 막는다", "why": "확인을 저장 장치가 한다고 본 것인데, 확인은 요청이 저장 장치에 닿기 전에 운영체제가 합니다."}
    ]
  },
  {
    "id": "file-access-2",
    "prompt": "레슨의 첫째 줄과 셋째 줄은 같은 사진 앱이 같은 바다.jpg 를 열었는데 결과가 달랐습니다. 무엇 때문일까요?",
    "novel": false,
    "options": [
      {"text": "그 사이 사진 폴더 읽기 허용이 꺼졌기 때문이다", "correct": true, "why": "두 줄에서 다른 것은 운영체제 칸의 권한 글자 하나뿐입니다."},
      {"text": "바다.jpg 가 그 사이 망가졌기 때문이다", "why": "열리지 않으면 파일에 문제가 있다고 본 것인데, 셋째 줄 저장 장치에도 바다.jpg 가 같은 그림으로 있습니다."},
      {"text": "셋째 줄에서 사진 앱이 다른 요청을 보냈기 때문이다", "why": "결과가 다르면 요청도 달랐을 것이라고 본 것인데, 두 줄의 앱, 파일, 요청은 같습니다."}
    ]
  },
  {
    "id": "file-access-3",
    "prompt": "백업 앱에 사진 폴더 읽기를 허용했습니다. 백업 앱이 사진 폴더의 사진 1,000장을 한 장씩 열어 달라고 합니다. 운영체제는 어떻게 할까요?",
    "novel": true,
    "options": [
      {"text": "열어 달라고 할 때마다 권한을 확인하고, 허용이 있으니 모두 연다", "correct": true, "why": "셋째 줄처럼 운영체제는 열어 달라고 할 때마다 그때의 권한을 봅니다."},
      {"text": "허용을 받았으니 백업 앱이 저장 장치에서 직접 읽게 한다", "why": "허락을 받으면 운영체제를 거치지 않아도 된다고 본 것인데, 허용이 있어도 읽기는 운영체제가 대신합니다."},
      {"text": "너무 많이 열면 허용이 저절로 꺼진다", "why": "권한이 쓸수록 닳는다고 본 것인데, 권한은 설정에서 바꾸기 전까지 그대로입니다."}
    ]
  },
  {
    "id": "file-access-4",
    "prompt": "사진 앱의 권한에는 '사진 폴더 읽기 · 허용'만 있습니다. 사진 앱이 바다.jpg 를 고쳐 저장해 달라고 합니다. 어떻게 될까요?",
    "novel": true,
    "options": [
      {"text": "거절된다", "correct": true, "why": "허락된 일은 읽기이고, 고쳐 저장하는 것은 다른 일이라 허용이 없습니다."},
      {"text": "저장된다", "why": "열 수 있으면 고칠 수도 있다고 본 것인데, 운영체제는 요청한 일에 맞는 허락이 있는지 봅니다."},
      {"text": "운영체제가 알아서 저장 허용을 더해 준다", "why": "필요하면 운영체제가 허락을 늘려 준다고 본 것인데, 운영체제는 정해 둔 허락대로만 확인합니다."}
    ]
  }
];

lessonItemsText["os/file-access"] = {
  "메모 앱이 사진 폴더의 숲.jpg 를 열어 달라고 합니다. 메모 앱의 권한에는 사진 폴더 읽기 허용이 없습니다. 사진 앱은 허용이 있습니다. 어떻게 될까요?": "The notes app asks to open forest.jpg in the Photos folder. The notes app's permissions do not allow reading the Photos folder. The photo app's do. What happens?",
  "운영체제가 거절해 메모 앱에는 사진이 뜨지 않는다": "The operating system denies it, and no photo appears in the notes app",
  "권한은 누가 여는지에 따라 따로 정해져 있고, 메모 앱에는 허용이 없습니다.": "Permissions are set separately for whoever opens the file, and the notes app is not allowed.",
  "사진 앱이 열 수 있는 파일이니 메모 앱도 열린다": "The photo app can open the file, so the notes app can too",
  "파일마다 누구나 열 수 있는지가 정해져 있다고 본 것인데, 운영체제는 요청한 앱에게 허용이 있는지 봅니다.": "This assumes each file decides whether anyone can open it. The operating system checks whether the app making the request is allowed.",
  "저장 장치가 메모 앱을 알아보고 막는다": "The storage device recognizes the notes app and blocks it",
  "확인을 저장 장치가 한다고 본 것인데, 확인은 요청이 저장 장치에 닿기 전에 운영체제가 합니다.": "This assumes the storage device does the check. The operating system does it before the request reaches the storage device.",
  "레슨의 첫째 줄과 셋째 줄은 같은 사진 앱이 같은 바다.jpg 를 열었는데 결과가 달랐습니다. 무엇 때문일까요?": "In the lesson's first and third rows, the same photo app opened the same sea.jpg, but the results differed. Why?",
  "그 사이 사진 폴더 읽기 허용이 꺼졌기 때문이다": "Because permission to read the Photos folder was turned off in between",
  "두 줄에서 다른 것은 운영체제 칸의 권한 글자 하나뿐입니다.": "The only difference between the two rows is the permission text in the operating system box.",
  "바다.jpg 가 그 사이 망가졌기 때문이다": "Because sea.jpg got damaged in between",
  "열리지 않으면 파일에 문제가 있다고 본 것인데, 셋째 줄 저장 장치에도 바다.jpg 가 같은 그림으로 있습니다.": "This assumes a file that will not open must be broken. The storage device in the third row still holds sea.jpg with the same picture.",
  "셋째 줄에서 사진 앱이 다른 요청을 보냈기 때문이다": "Because the photo app sent a different request in the third row",
  "결과가 다르면 요청도 달랐을 것이라고 본 것인데, 두 줄의 앱, 파일, 요청은 같습니다.": "This assumes a different result means a different request. The app, the file, and the request are the same in both rows.",
  "백업 앱에 사진 폴더 읽기를 허용했습니다. 백업 앱이 사진 폴더의 사진 1,000장을 한 장씩 열어 달라고 합니다. 운영체제는 어떻게 할까요?": "The backup app is allowed to read the Photos folder. It asks to open the 1,000 photos in the Photos folder one at a time. What does the operating system do?",
  "열어 달라고 할 때마다 권한을 확인하고, 허용이 있으니 모두 연다": "It checks the permission every time the app asks to open one, and opens them all because it is allowed",
  "셋째 줄처럼 운영체제는 열어 달라고 할 때마다 그때의 권한을 봅니다.": "As in the third row, the operating system looks at the permission as it stands every time an app asks to open a file.",
  "허용을 받았으니 백업 앱이 저장 장치에서 직접 읽게 한다": "Since the app is allowed, it lets the backup app read straight from the storage device",
  "허락을 받으면 운영체제를 거치지 않아도 된다고 본 것인데, 허용이 있어도 읽기는 운영체제가 대신합니다.": "This assumes an allowed app can skip the operating system. Even when the app is allowed, the operating system does the reading for it.",
  "너무 많이 열면 허용이 저절로 꺼진다": "Opening too many turns the permission off by itself",
  "권한이 쓸수록 닳는다고 본 것인데, 권한은 설정에서 바꾸기 전까지 그대로입니다.": "This assumes a permission wears out with use. A permission stays as it is until someone changes it in the settings.",
  "사진 앱의 권한에는 '사진 폴더 읽기 · 허용'만 있습니다. 사진 앱이 바다.jpg 를 고쳐 저장해 달라고 합니다. 어떻게 될까요?": "The photo app's permissions include only 'Photos folder read · allowed'. The photo app asks to save changes to sea.jpg. What happens?",
  "거절된다": "It is denied",
  "허락된 일은 읽기이고, 고쳐 저장하는 것은 다른 일이라 허용이 없습니다.": "What is allowed is reading. Saving changes is a different action, so it is not allowed.",
  "저장된다": "It is saved",
  "열 수 있으면 고칠 수도 있다고 본 것인데, 운영체제는 요청한 일에 맞는 허락이 있는지 봅니다.": "This assumes an app that can open a file can also change it. The operating system checks for a permission that matches the action requested.",
  "운영체제가 알아서 저장 허용을 더해 준다": "The operating system adds a save permission on its own",
  "필요하면 운영체제가 허락을 늘려 준다고 본 것인데, 운영체제는 정해 둔 허락대로만 확인합니다.": "This assumes the operating system grants more when needed. The operating system checks only against the permissions that are set."
};
