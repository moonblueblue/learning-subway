// English for 6.1 Abstraction and modules. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Code stays as written except Korean inside it: print("안녕하세요") → print("Hello"), and the comment line.
window.lessonText = {
  // Page
  '추상화와 모듈 · 레슨 6.1': 'Abstraction and modules · Lesson 6.1',
  '되풀이되는 일을 함수로 묶어 이름 붙이기, 인터페이스와 구현 나누기, 함께 바뀌는 것끼리 모듈로 모으기, 모듈 사이를 느슨하게 잇기를 문제로 익혀 보세요.':
    'Practise with questions: wrapping repeated work in a named function, separating interface from implementation, grouping what changes together into modules, and joining modules loosely.',
  '복잡한 프로그램을 어떻게 나눠야 고치기 쉬울까요? 코드를 함수와 모듈로 묶고, 밖에 보일 것과 감출 것을 가르는 판단을 문제로 익혀 보세요.':
    'How should a complex program be split so it is easy to change? Practise with questions the judgement of grouping code into functions and modules and deciding what to show outside and what to hide.',
  // Step 1
  '이름 붙이기': 'Naming',
  '되풀이되는 일에 이름을 붙여 함수로 묶는다': 'Give repeated work a name and wrap it in a function',
  '추상화는 "어떻게"를 감추고 "무엇"만 남기는 일입니다. 같은 계산이 여러 곳에 복사되어 있으면, 하나를 고칠 때 나머지를 빠뜨리기 쉽습니다. 이 일을 함수로 묶고 하는 일을 말해 주는 이름을 붙이면, 읽는 사람은 이름만 보고 넘어갈 수 있고 고칠 곳은 한 군데가 됩니다.':
    'Abstraction hides the "how" and leaves only the "what". When the same calculation is copied in several places, fixing one makes it easy to miss the rest. Wrap the work in a function with a name that says what it does, and a reader can move on from the name alone, and there is one place to change.',
  '1.3에서 함수를 부르고 돌아오는 모습을 봤습니다. 3.6의 기계어 위에 3.8의 언어가 올라선 것도 같은 추상화입니다. 아래 단계의 복잡함을 위에서는 몰라도 됩니다.':
    'In 1.3 you saw a function being called and returning. The language of 3.8 standing on the machine code of 3.6 is the same kind of abstraction. The level above need not know the complexity of the level below.',
  '이 코드는 함수로 묶어 이름을 붙이는 편이 나을까요?': 'Would this code be better wrapped in a named function?', '묶는 편이 낫다': 'Better wrapped', '그대로 두어도 된다': 'Fine as it is',
  'print("안녕하세요")': 'print("Hello")',
  'if user["age"] >= 19 and user["verified"] and not user["banned"]:\n    ...\n# 같은 조건이 다른 파일 세 곳에 더 있음': 'if user["age"] >= 19 and user["verified"] and not user["banned"]:\n    ...\n# the same condition is in three more files',
  'if user["age"] >= 19 and user["verified"] and not user["banned"]:\\n    ...\\n# 같은 조건이 다른 파일 세 곳에 더 있음': 'if user["age"] >= 19 and user["verified"] and not user["banned"]:\\n    ...\\n# the same condition is in three more files',
  '같은 계산(세금 더하고 할인)이 두 번 복사됐습니다. final_price(price)로 묶으면 할인 규칙이 바뀌어도 한 곳만 고칩니다.': 'The same calculation (add tax, then discount) is copied twice. Wrapped as final_price(price), a change to the discount rule means fixing one place.',
  '한 번만 쓰이고 그 자체로 뜻이 분명합니다. 모든 줄을 함수로 감쌀 필요는 없습니다.': 'It is used once and its meaning is clear on its own. Not every line needs wrapping in a function.',
  'can_buy_alcohol(user)처럼 이름을 붙이면 조건의 뜻이 드러나고, 규칙이 바뀔 때 네 곳을 찾아다니지 않아도 됩니다.': 'A name like can_buy_alcohol(user) shows what the condition means, and when the rule changes you need not hunt down four places.',
  '이미 함수지만 이름이 하는 일을 말해 주지 않습니다. add_tax(price)처럼 이름을 고쳐야 추상화가 제 역할을 합니다.': 'It is already a function, but its name does not say what it does. Renaming it to something like add_tax(price) lets the abstraction do its job.',
  '할인 기준이 50,000원에서 30,000원으로 바뀌었습니다. 첫 번째 코드를 함수로 묶기 전과 후에 각각 몇 곳을 고쳐야 할까요?': 'The discount threshold changed from 50,000 won to 30,000 won. How many places must you fix in the first code, before and after wrapping it in a function?',
  '묶기 전에는 복사된 곳마다(여기서는 두 곳, 실제로는 더 많을 수 있음) 고쳐야 하고, 하나라도 빠뜨리면 가격이 달라집니다. 묶은 뒤에는 함수 안 한 곳만 고치면 됩니다.': 'Before, every copy must be fixed (two here, possibly more in real code), and missing even one makes prices differ. After, you fix just one place inside the function.',
  // Step 2
  '감추기': 'Hiding',
  '밖에서 쓰는 약속(인터페이스)과 안의 방법을 나눈다': 'Separate the promise used outside (the interface) from the method inside',
  '함수나 모듈을 쓰는 쪽은 이름, 받는 값, 돌려주는 값만 알면 됩니다. 이것을 인터페이스라 합니다. 안에서 어떻게 계산하는지(구현)는 감춰 두면, 약속을 지키는 한 구현을 마음대로 바꿔도 쓰는 쪽은 고칠 필요가 없습니다.':
    'Whoever uses a function or module needs to know only its name, what it takes and what it returns. This is called the interface. Keep how it calculates inside (the implementation) hidden, and as long as the promise is kept, the implementation can change freely without the user changing anything.',
  '4.5의 해시 테이블을 떠올려 보세요. 쓰는 쪽은 넣기와 찾기만 알고, 칸 수를 늘리는 재배치는 안에서 몰래 일어났습니다. 5.3의 시스템 콜도 운영체제가 정한 인터페이스입니다.':
    'Think of the hash table of 4.5. Users knew only insert and find, while rehashing into more slots happened quietly inside. The system calls of 5.3 are also an interface the operating system sets.',
  'find_user(user_id)는 사용자 정보를 돌려주는 함수입니다. 다음 문장이 참인지 고르세요.': 'find_user(user_id) is a function that returns a user\'s details. Choose whether each sentence is true.',
  'find_user 안에서 목록을 처음부터 훑던 방법을 해시 테이블로 바꿔도, 부르는 코드는 고치지 않아도 된다.': 'Even if find_user switches from scanning a list from the start to a hash table, the calling code need not change.',
  '이름, 받는 값, 돌려주는 값이 그대로이므로 쓰는 쪽은 바뀐 줄도 모릅니다. 빨라지기만 합니다.': 'The name, input and return value are unchanged, so the user does not even notice. It just gets faster.',
  'find_user가 돌려주는 값의 모양(예: 이름 칸 "name"을 "username"으로)을 바꿔도 부르는 코드는 안전하다.': 'Even if the shape of what find_user returns changes (say the name field "name" becomes "username"), the calling code is safe.',
  '돌려주는 값의 모양은 인터페이스의 일부입니다. 바꾸면 "name"을 읽던 코드가 모두 깨집니다.': 'The shape of the return value is part of the interface. Change it and every piece of code reading "name" breaks.',
  '부르는 코드가 find_user 안의 임시 변수에 직접 손대면, 나중에 구현을 바꾸기 어려워진다.': 'If calling code reaches directly into a temporary variable inside find_user, the implementation becomes hard to change later.',
  '감춰야 할 구현에 기대는 코드가 생기면, 그 구현은 더 이상 마음대로 바꿀 수 없습니다.': 'Once code depends on an implementation that should be hidden, that implementation can no longer be changed freely.',
  '인터페이스는 작고 단순할수록 바꾸기 쉬운 부분이 많아진다.': 'The smaller and simpler the interface, the more there is that is easy to change.',
  '밖에 약속한 것이 적을수록 안에서 자유롭게 바꿀 수 있는 부분이 넓어집니다.': 'The less promised outside, the more can be changed freely inside.',
  '자동차 운전자에게 인터페이스는 무엇이고, 감춰진 구현은 무엇일까요?': 'For a car\'s driver, what is the interface and what is the hidden implementation?',
  '운전대, 페달, 기어가 인터페이스입니다. 엔진이 휘발유든 전기든 운전자는 같은 방식으로 운전합니다. 엔진 내부가 감춰진 구현입니다.': 'The steering wheel, pedals and gear lever are the interface. Whether the engine runs on petrol or electricity, the driver drives the same way. The inside of the engine is the hidden implementation.',
  // Step 3
  '모듈 나누기': 'Splitting modules',
  '함께 바뀌는 것끼리 한 모듈에 모은다': 'Put what changes together in one module',
  '프로그램이 커지면 관련된 함수와 데이터를 파일이나 패키지 단위의 모듈로 묶습니다. 좋은 기준은 "같은 이유로 함께 바뀌는 것끼리 모으기"입니다. 한 모듈 안은 서로 긴밀하고(응집도가 높고), 모듈 사이는 느슨하게 이어지면(결합도가 낮으면) 한 곳을 고칠 때 다른 곳이 덜 흔들립니다.':
    'As a program grows, related functions and data are grouped into modules, as files or packages. A good rule is "group what changes together for the same reason". When things inside a module are tightly related (high cohesion) and modules are loosely joined (low coupling), changing one place shakes the others less.',
  '4.3의 스택은 넣기와 꺼내기만 밖에 보여 주는 작은 모듈이었습니다. 5.7의 네트워크 계층도 각 계층이 자기 일만 맡도록 나눈 모듈 설계입니다.': 'The stack of 4.3 was a small module showing only push and pop outside. The network layers of 5.7 are a module design too, split so each layer does only its own job.',
  '온라인 문구점 프로그램입니다. 이 함수는 어느 모듈에 넣는 것이 가장 알맞을까요?': 'This is an online stationery shop program. Which module suits this function best?',
  '주문 모듈': 'Order module', '결제 모듈': 'Payment module', '화면 모듈': 'Display module',
  '장바구니와 주문 내용은 주문 규칙이 바뀔 때 함께 바뀝니다.': 'The cart and order details change together when the order rules change.',
  '카드사 연결 방식이 바뀌면 함께 바뀌는 결제의 일입니다.': 'It is payment work that changes when the way of connecting to the card company changes.',
  '디자인이 바뀌면 함께 바뀌는 화면의 일입니다.': 'It is display work that changes when the design changes.',
  '수량, 할인, 배송비 같은 주문 규칙으로 계산합니다. 결제 모듈은 이 금액을 받기만 합니다.': 'It calculates by order rules such as quantity, discount and shipping. The payment module only receives the amount.',
  '환불은 결제 수단과 결제 기록을 다루므로 결제 모듈과 함께 바뀝니다.': 'A refund deals with payment methods and payment records, so it changes along with the payment module.',
  '디자이너가 상품 목록의 글씨 색을 바꿔 달라고 합니다. 모듈을 잘 나눴다면 어느 모듈만 열어 보면 될까요?': 'A designer asks to change the text colour of the product list. If the modules are well split, which module alone do you need to open?',
  '화면 모듈만 열면 됩니다. 결제나 주문 코드는 건드리지 않으므로 그쪽에 버그가 생길 걱정도 없습니다.': 'Only the display module. Payment and order code are not touched, so there is no worry of bugs appearing there.',
  // Step 4
  '느슨하게 잇기': 'Loose coupling',
  '모듈 사이의 연결은 적고 한 방향으로': 'Few connections between modules, in one direction',
  '모듈끼리 서로의 안쪽을 마구 부르면, 하나를 고칠 때 줄줄이 깨집니다. 모듈은 상대의 공개된 인터페이스만 부르고, 서로를 부르는 고리(A가 B를, B가 다시 A를)를 만들지 않는 것이 좋습니다. 화면 → 주문 → 결제처럼 한 방향으로 흐르면 아래 모듈은 위를 몰라도 되어 따로 테스트하고 바꾸기 쉽습니다.':
    'When modules freely call each other\'s insides, changing one breaks a chain of others. A module should call only the other\'s public interface and avoid loops of mutual calls (A calls B, and B calls A back). When calls flow one way, like display → order → payment, the lower module need not know the upper one, so it is easy to test and change on its own.',
  '5.6의 교착 상태도 서로를 기다리는 고리에서 생겼습니다. 의존의 고리도 비슷하게 엉킵니다. 6.2에서는 이렇게 나눈 모듈을 하나씩 테스트합니다.': 'The deadlock of 5.6 also came from a loop of waiting on each other. Loops of dependency tangle in a similar way. In 6.2 the modules split like this are tested one by one.',
  '다음 설계가 좋은지, 고치기 어려운지 고르세요.': 'Choose whether each design is good or hard to change.', '좋은 설계': 'Good design', '고치기 어려운 설계': 'Hard to change',
  '주문 모듈은 결제 모듈의 pay(amount)만 부르고, 결제 모듈은 주문 모듈을 전혀 모른다.': 'The order module calls only the payment module\'s pay(amount), and the payment module knows nothing of the order module.',
  '한 방향, 공개된 인터페이스 하나로만 이어집니다. 결제 모듈을 따로 테스트하거나 다른 결제사로 바꾸기 쉽습니다.': 'They are joined in one direction by one public interface only. The payment module is easy to test on its own or switch to another payment provider.',
  '화면 모듈이 결제 모듈 안의 전역 변수 _last_card를 직접 읽어 화면에 보여 준다.': 'The display module reads the global variable _last_card inside the payment module directly and shows it on screen.',
  '감춰진 구현에 기댑니다. 결제 모듈이 변수 이름만 바꿔도 화면이 깨집니다.': 'It depends on a hidden implementation. If the payment module merely renames the variable, the display breaks.',
  '주문 모듈이 결제 모듈을 부르고, 결제 모듈도 주문 모듈의 함수를 부른다.': 'The order module calls the payment module, and the payment module calls the order module\'s functions too.',
  '서로를 부르는 고리입니다. 어느 한쪽만 떼어 내거나 테스트할 수 없게 됩니다.': 'It is a loop of mutual calls. Neither side can be pulled out or tested alone.',
  '모든 함수를 utils.py 한 파일에 몰아넣는다.': 'Put every function into one file, utils.py.',
  '함께 바뀌지 않는 것들이 한곳에 섞여, 어디를 고치면 무엇이 흔들릴지 알기 어렵습니다.': 'Things that do not change together are mixed in one place, so it is hard to know what a change will shake.',
  '결제사를 다른 회사로 바꾸게 됐습니다. 두 번째 설계에서는 어디를 고쳐야 할까요?': 'You are switching to another payment company. Where must you make changes in the second design?',
  '결제 모듈 안쪽만 고치면 됩니다. pay(amount)라는 인터페이스를 그대로 지키면 주문 모듈과 화면 모듈은 바뀐 줄도 모릅니다.': 'Only inside the payment module. Keep the pay(amount) interface as it is and the order and display modules never even notice.',
  // Reading examples (steps 1–4)
  '같은 계산이 total_a, total_b에 복사': 'Same math copied into total_a and total_b', 'final_price(price) 하나로 묶어 두 곳에서 호출': 'Wrapped in final_price(price), called from both', '할인 기준이 바뀌면 함수 안 한 곳만 수정': 'A new discount rule changes one place in the function', 'find_user(7) 호출': 'Call find_user(7)', '안의 방법을 목록 훑기에서 해시 테이블로 변경': 'Inside: list scan replaced by a hash table', '받는 값·돌려주는 값이 같아 부르는 코드는 그대로': 'Same input and output, so callers stay unchanged', 'add_to_cart와 order_total은 주문 규칙과 함께 바뀜': 'add_to_cart and order_total change with order rules', '둘 다 주문 모듈에 둠': 'Both go in the order module', '할인 규칙이 바뀌면 주문 모듈만 수정': 'A new discount rule changes only the order module', '화면은 주문을, 주문은 결제의 pay(amount)만 부름': 'Screen calls order; order calls only payment\'s pay(amount)', '결제사를 다른 회사로 교체': 'Switch to another payment company', '결제 모듈 안만 수정 · 주문과 화면은 그대로': 'Only the payment module changes · order and screen stay',
};
