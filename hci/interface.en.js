// English for 6.8 People and interfaces. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '사람과 인터페이스 · 레슨 6.8': 'People and interfaces · Lesson 6.8',
  '눌러도 되는 것이 그렇게 보이는지, 누른 뒤 반응을 보여 주는지, 실수를 막고 되돌릴 수 있는지, 누구나 쓸 수 있는지를 화면 설계 문제로 익혀 보세요.':
    'Learn through screen-design problems whether things you can press look pressable, whether a press shows a response, whether mistakes are prevented and undoable, and whether anyone can use it.',
  '사람이 헷갈리지 않는 화면은 무엇이 다를까요? 보이는 단서, 반응, 실수 다루기, 접근성을 실제 화면 설계 예로 판단해 보세요.':
    'What makes a screen people do not get confused by? Judge visible cues, feedback, handling mistakes and accessibility on real screen-design examples.',
  // Step 1
  '보이는 단서': 'Visible cues',
  '눌러도 되는 것은 눌러도 되게 보여야 한다': 'What you can press should look pressable',
  '사람은 설명서를 읽지 않고 화면의 모양을 보고 짐작합니다. 버튼은 버튼처럼, 글을 쓰는 칸은 칸처럼 보여야 합니다. 같은 일은 같은 모양과 같은 자리로, 다른 일은 다르게 보여야 헷갈리지 않습니다. 이런 단서가 맞으면 사용자는 생각하지 않고도 바르게 행동합니다.':
    'People do not read the manual; they guess from how the screen looks. A button should look like a button and a text box like a box. The same action should have the same look and place, and different actions should look different, or people get confused. When these cues are right, users act correctly without thinking.',
  '예를 들어 사진 앱의 휴지통 아이콘(버린다), 메신저의 종이비행기 아이콘(보낸다), 회색으로 흐려진 버튼(지금은 누를 수 없다) 같은 것들입니다.':
    'For example, the bin icon in a photo app (throw away), the paper-plane icon in a messenger (send), and a greyed-out button (cannot be pressed now).',
  '6.1의 인터페이스는 코드끼리의 약속이었습니다. 화면은 사람과 프로그램 사이의 인터페이스입니다. 이 실험실의 버튼도 테두리와 색으로 누를 수 있음을 보여 줍니다.':
    'The interface in 6.1 was an agreement between pieces of code. A screen is the interface between a person and a program. The buttons in this lab, too, show by their border and colour that they can be pressed.',
  '이 화면 설계는 사람을 헷갈리게 할까요?': 'Does this screen design confuse people?', '알기 쉽다': 'Clear', '헷갈린다': 'Confusing',
  '파란 밑줄 글자인데 눌러도 아무 일이 없다.': 'Blue underlined text does nothing when pressed.',
  '파란 밑줄은 오랫동안 "누르면 이동하는 링크"의 모양이었습니다. 단서와 실제 동작이 어긋납니다.': 'A blue underline has long been the look of "a link that takes you somewhere". The cue and the real behaviour do not match.',
  '"저장" 버튼이 화면마다 오른쪽 아래 같은 자리, 같은 색으로 있다.': 'The "Save" button sits in the same bottom-right spot, in the same colour, on every screen.',
  '같은 일을 늘 같은 자리와 모양으로 두면 한 번 익힌 것이 모든 화면에서 통합니다.': 'Keeping the same action in the same place and shape means what you learn once works on every screen.',
  '"삭제"와 "저장" 버튼이 같은 색, 같은 크기로 바로 붙어 있다.': 'The "Delete" and "Save" buttons are the same colour and size, right next to each other.',
  '되돌리기 어려운 일과 흔한 일이 똑같아 보이면 잘못 누르기 쉽습니다. 삭제는 떨어뜨리고 색을 달리합니다.': 'When a hard-to-undo action looks just like a common one, it is easy to press the wrong one. Put Delete apart and give it a different colour.',
  '글을 쓰는 칸 안에 흐린 글씨로 "예: hong@example.com"이 보인다.': 'Faint text inside the text box shows "e.g. hong@example.com".',
  '무엇을 어떤 모양으로 써야 하는지 칸 안에서 바로 알려 줍니다.': 'It tells you right in the box what to write and in what form.',
  '자주 쓰는 앱 하나에서, 설명 없이도 무엇을 해야 할지 알 수 있었던 단서를 하나 찾아보세요.': 'In an app you use often, find one cue that told you what to do without any explanation.',
  // Step 2
  '반응 보이기': 'Show feedback',
  '누른 뒤에는 무슨 일이 일어났는지 곧바로 보여 준다': 'After a press, show right away what happened',
  '사용자가 무언가를 했으면 프로그램은 곧바로 반응을 보여야 합니다. 버튼이 눌린 모양, 불러오는 중 표시, "저장했습니다" 알림이 그것입니다. 반응이 없으면 사람은 "안 눌렸나?" 하고 다시 누르고, 결제가 두 번 되는 것 같은 일이 생깁니다. 오래 걸리는 일은 얼마나 남았는지도 알려 줍니다.':
    'When the user does something, the program should respond right away: a pressed-in button, a loading sign, a "Saved" notice. Without a response, people think "Did it not register?" and press again, and things like paying twice happen. For long jobs, also say how much is left.',
  '5.11에서 페이지 하나에도 왕복이 여러 번 필요했습니다. 그 사이 화면이 멈춰 있으면 사용자는 고장 난 줄 압니다.': 'In 5.11 even one page needed several round trips. If the screen stays frozen meanwhile, users think it is broken.',
  '결제 버튼을 누른 뒤 3초 동안 아무 변화가 없으면 사용자가 다시 누를 수 있다.': 'If nothing changes for 3 seconds after pressing the pay button, the user may press it again.',
  '반응이 없으면 실패한 줄 압니다. 누르자마자 버튼을 "결제 중…"으로 바꾸고 다시 누를 수 없게 해야 합니다.': 'With no response, people assume it failed. The moment it is pressed, change the button to "Paying…" and stop it being pressed again.',
  '파일 올리기처럼 오래 걸리는 일은 진행 막대나 남은 시간을 보여 주는 것이 좋다.': 'For long jobs like uploading a file, it is good to show a progress bar or the time left.',
  '얼마나 남았는지 알면 기다릴지 말지 정할 수 있고, 멈춘 것과 느린 것을 구별할 수 있습니다.': 'Knowing how much is left lets you decide whether to wait, and tell stuck from slow.',
  '0.1초 안에 끝나는 일에도 불러오기 표시를 꼭 띄워야 한다.': 'Even a job that finishes within 0.1 seconds must show a loading sign.',
  '아주 짧은 일은 결과가 바로 보이면 충분합니다. 깜빡이는 표시는 오히려 산만합니다.': 'For very short jobs, showing the result at once is enough. A flickering sign only distracts.',
  '오류가 나면 "오류 코드 0x80004005"만 보여 주면 충분하다.': 'When an error happens, showing only "Error code 0x80004005" is enough.',
  '무엇이 잘못됐고 무엇을 하면 되는지 사람의 말로 알려 줘야 합니다. 예: "인터넷 연결이 끊겼어요. 연결되면 다시 시도할게요."': 'It should say in plain words what went wrong and what to do. E.g. "The internet connection dropped. We\'ll try again once it\'s back."',
  '"전송" 버튼을 누른 뒤 서버 응답을 기다리는 2초 동안 화면에 무엇을 보여 주면 좋을까요?': 'After the "Send" button is pressed, what should the screen show during the 2 seconds spent waiting for the server?',
  '버튼을 "보내는 중…"으로 바꾸고 다시 누를 수 없게 하고, 끝나면 "보냈습니다"를 잠깐 보여 줍니다. 실패하면 이유와 "다시 보내기"를 보여 줍니다.': 'Change the button to "Sending…" and stop it being pressed again; when done, show "Sent" briefly. If it fails, show why and a "Send again" button.',
  // Step 3
  '실수 다루기': 'Handling mistakes',
  '사람은 실수한다, 막고 되돌릴 수 있게 한다': 'People make mistakes, so prevent them and make them undoable',
  '사람의 실수는 피할 수 없으니, 화면이 실수를 막거나 되돌릴 수 있게 해야 합니다. 애초에 틀린 입력을 할 수 없게 막는 방법, 되돌리기를 주는 방법, 되돌릴 수 없는 일 앞에서 한 번 더 확인하는 방법이 있습니다. 확인 창을 너무 자주 띄우면 사람들이 읽지 않고 누르게 되므로, 되돌리기를 줄 수 있으면 그쪽이 낫습니다.':
    'Human mistakes cannot be avoided, so the screen should prevent them or make them undoable. You can make wrong input impossible in the first place, offer undo, or confirm once more before something that cannot be undone. Confirmation boxes shown too often get clicked without reading, so if you can offer undo, that is better.',
  '6.2에서는 테스트로 프로그래머의 실수를 잡았습니다. 여기서는 사용자의 실수를 다룹니다. 6.6의 트랜잭션도 "되돌릴 수 있게" 만드는 장치였습니다.': 'In 6.2 tests caught the programmer\'s mistakes. Here we deal with the user\'s mistakes. The transactions in 6.6 were also a way to make things "undoable".',
  '이 상황에 가장 알맞은 방법은?': 'Which approach fits this situation best?', '입력을 막기': 'Block the input', '되돌리기 주기': 'Offer undo', '한 번 더 확인': 'Confirm again',
  '생년월일 칸에 사람들이 "2010.3.5", "10/03/05", "삼월 오일" 등 제각각으로 쓴다.': 'In the date-of-birth box people write all sorts: "2010.3.5", "10/03/05", "March fifth".',
  '날짜 고르기 달력을 주면 틀린 모양을 쓸 수 없습니다. 틀린 뒤 고치게 하는 것보다 처음부터 막는 편이 낫습니다.': 'A date-picker calendar makes a wrong format impossible. Preventing it from the start beats making people fix it afterwards.',
  '메일 하나를 실수로 보관함에서 지웠다.': 'An email was deleted from the inbox by mistake.',
  '"삭제했습니다 · 되돌리기"를 몇 초 보여 주면 됩니다. 매번 확인을 묻는 것보다 빠르고 덜 귀찮습니다.': 'Show "Deleted · Undo" for a few seconds. It is faster and less annoying than asking for confirmation every time.',
  '계정을 영구히 지우면 모든 데이터가 사라지고 되살릴 수 없다.': 'Deleting an account for good erases all its data and it cannot be brought back.',
  '되돌릴 수 없는 큰일은 무엇이 사라지는지 보여 주고, 계정 이름을 직접 입력하게 하는 식으로 한 번 더 확인합니다.': 'For a big action that cannot be undone, show what will be lost and confirm once more, for example by having the user type the account name.',
  '수량 칸에 −3이나 "많이"를 넣을 수 있다.': 'You can put −3 or "lots" in the quantity box.',
  '숫자만, 1 이상만 입력되게 하거나 −, + 버튼으로 고르게 하면 틀린 값이 들어오지 않습니다.': 'Allowing only numbers of 1 or more, or choosing with − and + buttons, keeps wrong values out.',
  '앱이 "정말 삭제할까요?"를 하루에도 수십 번 묻는다면 어떤 일이 생길까요?': 'What happens if an app asks "Really delete?" dozens of times a day?',
  '사람들이 읽지 않고 습관처럼 "예"를 누르게 됩니다. 그러면 정말 중요한 확인도 무시됩니다. 자주 하는 일은 되돌리기로 바꾸고 확인은 정말 큰일에만 남깁니다.': 'People press "Yes" out of habit without reading. Then even the truly important confirmations get ignored. Turn common actions into undo and keep confirmation for the really big ones.',
  // Step 4
  '모두를 위한 화면': 'Screens for everyone', '누군가는 쓰기 어렵다': 'Hard for some to use',
  '눈, 손, 상황이 달라도 쓸 수 있게 만든다': 'Make it usable whatever the eyes, hands or situation',
  '화면을 쓰는 사람은 다양합니다. 색을 잘 구별하지 못하는 사람, 화면 읽기 프로그램으로 듣는 사람, 마우스 대신 키보드만 쓰는 사람, 햇빛 아래에서 휴대폰을 보는 사람도 있습니다. 색만으로 뜻을 전하지 않고, 글자와 배경의 대비를 충분히 하고, 그림에는 설명을 붙이고, 키보드로도 모든 기능을 쓸 수 있게 하는 것을 접근성이라 합니다.':
    'All sorts of people use screens: people who cannot tell colours apart well, people who listen through a screen reader, people who use only a keyboard instead of a mouse, people looking at a phone in sunlight. Not carrying meaning by colour alone, giving text enough contrast with its background, describing images, and making every feature usable from the keyboard is called accessibility.',
  '이 실험실들도 장면마다 글로 된 설명을 붙이고, 키보드로 단계를 옮길 수 있게 만들었습니다. 맞고 틀림도 색과 함께 ✓, ✗ 글자로 보여 줍니다.': 'These labs, too, give every scene a written description and let you move between steps with the keyboard. Right and wrong are shown with ✓ and ✗ as well as colour.',
  '이 설계는 더 많은 사람이 쓸 수 있게 할까요?': 'Does this design let more people use it?', '더 많은 사람이 쓸 수 있다': 'More people can use it',
  '입력 칸의 오류를 테두리를 빨갛게 바꾸는 것으로만 알린다.': 'An error in an input box is shown only by turning its border red.',
  '빨강과 초록을 구별하기 어려운 사람이나 화면 읽기 프로그램 사용자는 알 수 없습니다. "이메일 모양이 아니에요" 같은 글을 함께 보여 줍니다.': 'People who struggle to tell red from green, and screen-reader users, cannot tell. Show text such as "That doesn\'t look like an email address" as well.',
  '상품 사진마다 "파란 줄무늬 면 티셔츠" 같은 대체 글을 붙인다.': 'Every product photo gets alt text such as "Blue striped cotton T-shirt".',
  '화면 읽기 프로그램이 이 글을 읽어 줍니다. 사진이 안 열릴 때도 도움이 됩니다.': 'Screen readers read this text aloud. It also helps when the photo does not load.',
  '연한 회색 배경에 조금 더 연한 회색 글씨로 안내문을 쓴다.': 'Instructions are written in pale grey text on a slightly paler grey background.',
  '대비가 낮으면 시력이 약한 사람이나 햇빛 아래에서는 읽을 수 없습니다.': 'With low contrast, people with weak sight, or anyone in sunlight, cannot read it.',
  '모든 버튼과 메뉴를 Tab과 Enter 키만으로도 쓸 수 있다.': 'Every button and menu can be used with just the Tab and Enter keys.',
  '마우스를 쓰기 어려운 사람, 키보드가 빠른 사람 모두에게 도움이 됩니다.': 'It helps both people who find a mouse hard to use and people who are fast on the keyboard.',
  '지금 쓰는 휴대폰에서 화면 읽기 기능(VoiceOver 또는 TalkBack)을 켜고 앱 하나를 써 보면 무엇이 불편할까요?': 'If you turn on the screen reader (VoiceOver or TalkBack) on your phone and use an app, what is awkward?',
  '이름 없는 아이콘 버튼이 "버튼"이라고만 읽히거나, 그림 속 글자가 읽히지 않는 경우가 많습니다. 만드는 사람이 직접 써 봐야 알게 되는 문제입니다.': 'Often an unnamed icon button is read out only as "button", or text inside images is not read at all. These are problems makers only find by trying it themselves.',
  // Reading examples
  '파란 밑줄인데 눌러도 그대로': 'Blue underline, but nothing happens', '누를 수 있는 것만 링크 모양': 'Only clickable things look like links', '보이는 모양대로 동작': 'It works the way it looks', '결제를 누르고 3초간 변화 없음': 'Pay pressed, no change for 3 s', '누르자마자 "결제 중…" 표시': 'Show "Paying…" at once', '다시 누르는 일이 없음': 'No second press', '메일 하나를 실수로 지움': 'A mail deleted by mistake', '"삭제했습니다 · 되돌리기"': '"Deleted · Undo"', '한 번 눌러 되살림': 'One tap brings it back', '오류를 빨간 테두리로만 알림': 'Error shown only by a red border', '오류 글과 표시를 함께': 'Error text and a mark together', '색을 구별 못 해도 알아챔': 'Noticed even without seeing colors',
};
