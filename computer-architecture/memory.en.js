// English for 3.4 Circuits that remember. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Note under the still picture: the inputs it went through
  'S를 1로 켰다가 0으로 끔 → Q는 1 그대로': 'S switched to 1, then back to 0 → Q stays 1',
  'S로 Q = 1을 만든 뒤 R을 켬 → Q = 0': 'Q set to 1 with S, then R switched on → Q = 0',
  'E = 0에서 D를 0으로 → Q는 1': 'With E = 0, D changes to 0 → Q stays 1',
  'E = 0에서 D를 010으로 → 저장값은 101': 'With E = 0, D changes to 010 → stored value stays 101',
  // Page
  '기억하는 회로 · 레슨 3.4': 'Circuits that remember · Lesson 3.4',
  '출력을 입력으로 되돌리는 되먹임에서 SR 래치, D 래치, 레지스터까지 만들며 회로가 값을 기억하는 방법을 살펴보세요.':
    'Build from feedback, which sends an output back to an input, up to an SR latch, a D latch and a register, and see how a circuit remembers a value.',
  '전기가 꺼지지 않는 한 값을 어떻게 기억할까요? 출력을 입력으로 되돌리는 고리에서 시작해 수를 저장하는 레지스터까지 만들어 보세요.':
    'How can a value be remembered for as long as the power stays on? Start from a loop that sends an output back to an input and build up to a register that stores a number.',
  '출력이 입력으로 되돌아가며 값을 기억하는 회로 장면': 'A circuit whose output goes back to its input and remembers a value',
  '입력, 계산 회로, 출력': 'Inputs, computing circuit, output',
  '기록 · 직접 바꾼 뒤의 상태, 최근 것이 위': 'History · state after each change you made, newest on top',
  '스위치를 바꾸면 여기에 쌓입니다': 'Changes to the switches pile up here',
  '← 입력은 같은데 값이 다름': '← same input, different value', '← 전원을 껐다 켬': '← power turned off and on',
  '전원 껐다 켜기': 'Turn power off and on', '전원을 껐다 켰습니다.': 'The power was turned off and on.',
  // Nodes and readouts
  '출력 Q': 'Output Q', 'S 켜기': 'S set', 'R 끄기': 'R reset', 'D 값': 'D value', 'E 쓰기': 'E write', '저장된 값': 'Stored value',
  '저장된 값 = {0} ({#1})': 'stored value = {0} ({1})', 'D = {#0}, E = {#1} → 저장된 값': 'D = {0}, E = {1} → stored value',
  '{0} → 저장된 값 {1}': '{0} → stored value {1}', '{0} = {#1}. {2}': '{0} = {1}. {2}',
  '(S는 꺼졌지만 기억 중)': '(S is off but remembered)', '(기억 중)': '(remembering)', '(켜기)': '(set)', '(끄기)': '(reset)',
  '(쓰는 중: Q가 D를 따라감)': '(writing: Q follows D)', '(쓰기 꺼짐: 그대로 유지)': '(write off: held as is)', '(쓰는 중)': '(writing)', '(유지)': '(held)',
  '{0} (S는 꺼졌지만 기억 중)': '{0} (S is off but remembered)', '{0} (기억 중)': '{0} (remembering)', '{0} (켜기)': '{0} (set)', '{0} (끄기)': '{0} (reset)',
  '{0} (쓰는 중: Q가 D를 따라감)': '{0} (writing: Q follows D)', '{0} (쓰기 꺼짐: 그대로 유지)': '{0} (write off: held as is)', '{0} (쓰는 중)': '{0} (writing)', '{0} (유지)': '{0} (held)',
  // Step 1
  '되먹임': 'Feedback', 'S를 잠깐 켬': 'Turn S on briefly', '출력 1이 입력으로 돌아감': 'Output 1 goes back to the input', 'S를 꺼도 Q = 1': 'Q = 1 even with S off',
  '출력을 입력으로 돌려보내면 값이 남는다': 'Sending the output back to the input leaves the value behind',
  '지금까지의 회로는 입력이 바뀌면 출력도 따라 바뀌었습니다. 이번에는 OR 게이트의 출력을 자기 입력으로 다시 이어 봅니다. 스위치 S를 한 번 켜면 출력 Q가 1이 되고, 그 1이 OR로 돌아가 다시 1을 만듭니다. S를 꺼도 Q는 1로 남습니다.':
    'In the circuits so far, the output changed whenever the input changed. This time the OR gate\'s output is wired back to its own input. Turn switch S on once and output Q becomes 1, and that 1 goes back to OR to make 1 again. Even with S turned off, Q stays 1.',
  'S를 켰다 끄면 S의 선은 꺼지지만 아래로 도는 되먹임 선에 1이 계속 흐릅니다. 회로가 "S가 켜진 적이 있다"를 기억합니다. 하지만 이 회로는 한 번 1이 되면 0으로 되돌릴 방법이 없습니다.':
    'Turn S on and off and S\'s line goes off, but 1 keeps flowing on the feedback line looping underneath. The circuit remembers "S was on once". But once this circuit becomes 1, there is no way to turn it back to 0.',
  '스위치 S가 OR 게이트로 들어가고, OR의 출력 Q는 램프로 가면서 동시에 아래로 돌아 OR의 다른 입력으로 되돌아옵니다.':
    'Switch S goes into an OR gate, and OR\'s output Q goes to the lamp while also looping round underneath back into OR\'s other input.',
  '출력 램프를 켜 보세요.': 'Turn the output lamp on.', 'S의 1이 OR를 지나 Q가 되고, 되먹임 선으로 돌아갑니다.': 'S\'s 1 passes OR to become Q and goes back round the feedback line.',
  '이제 S를 꺼 보세요. 램프는 어떻게 될까요?': 'Now turn S off. What happens to the lamp?', '입력이 0인데 출력이 1로 남았습니다. 회로가 기억합니다.': 'The input is 0 but the output stayed 1. The circuit remembers.',
  // Step 2
  'SR 래치': 'SR latch', '저장된 Q = 1': 'Stored Q = 1', '리셋 R을 켬': 'Turn reset R on', 'Q = 0으로 바뀜': 'Q changes to 0',
  '켜는 입력과 끄는 입력을 따로 둔다': 'Separate inputs for turning on and turning off',
  '되먹임 고리에 AND와 NOT을 끼우면 고리를 끊을 수 있습니다. S(Set)를 누르면 Q가 1이 되고, R(Reset)을 누르면 NOT이 0을 내보내 AND가 고리를 끊어 Q가 0이 됩니다. 둘 다 끄면 마지막 값을 그대로 기억합니다. 이 회로를 SR 래치라고 합니다.':
    'Put an AND and a NOT into the feedback loop and the loop can be broken. Press S (Set) and Q becomes 1; press R (Reset) and NOT puts out 0, so AND breaks the loop and Q becomes 0. With both off, the last value is remembered as it is. This circuit is called an SR latch.',
  '아래 기록표를 보세요. S = 0, R = 0으로 입력이 같은데도 Q가 0일 때와 1일 때가 있습니다. 출력이 지금 입력만이 아니라 지난 일에 따라 달라진다는 것이 기억입니다.':
    'Look at the history table below. With the same input, S = 0 and R = 0, Q is sometimes 0 and sometimes 1. Output that depends not only on the current input but on what happened before is memory.',
  '스위치 S는 OR로, 스위치 R은 NOT을 지나 AND로 갑니다. OR의 출력 Q는 램프로 가면서 아래로 돌아 AND의 다른 입력으로 들어가고, AND의 출력은 다시 OR로 갑니다.':
    'Switch S goes to OR, and switch R goes through NOT to AND. OR\'s output Q goes to the lamp while looping underneath into AND\'s other input, and AND\'s output goes back to OR.',
  'S를 켰다가 다시 꺼서, 램프가 켜진 채로 남게 해 보세요.': 'Turn S on and then off again so the lamp stays lit.', 'Set: S를 꺼도 Q = 1을 기억합니다.': 'Set: Q = 1 is remembered even with S off.',
  'R로 램프를 끈 다음 R도 꺼 보세요.': 'Turn the lamp off with R, then turn R off too.', 'Reset: 이번에는 Q = 0을 기억합니다. 같은 입력, 다른 출력입니다.': 'Reset: this time Q = 0 is remembered. Same input, different output.',
  // Step 3
  'D 래치': 'D latch', '입력 D = 1': 'Input D = 1', '쓰기 E를 켜서 저장': 'Turn write E on to store', 'E를 끄면 값 유지': 'Turning E off holds the value',
  '저장할 값과 저장할 때를 나눈다': 'Separate what to store from when to store it',
  'SR 래치를 상자로 묶고 앞에 게이트 셋을 붙입니다. D는 저장할 값, E는 "지금 써라"는 신호입니다. E가 1인 동안에는 D가 S나 R로 바뀌어 Q가 D를 따라가고, E가 0이면 S와 R이 모두 0이라 Q는 마지막 값을 지킵니다. 이것이 1비트를 저장하는 D 래치입니다.':
    'Box up the SR latch and put three gates in front of it. D is the value to store, and E is the signal "write now". While E is 1, D is turned into S or R and Q follows D; when E is 0, S and R are both 0 and Q keeps its last value. This is a D latch, which stores 1 bit.',
  'E를 끈 뒤에는 D를 아무리 바꿔도 램프가 그대로입니다. 메모리에 값을 쓰는 것은 E를 잠깐 켰다 끄는 일이고, 읽는 것은 Q를 보는 일입니다.':
    'Once E is off, the lamp stays as it is however D changes. Writing a value to memory means turning E on briefly and off; reading means looking at Q.',
  '스위치 D와 쓰기 E가 위쪽 AND(S 쪽)와, D를 뒤집은 NOT을 지나 아래쪽 AND(R 쪽)로 들어갑니다. 두 AND는 SR 래치 상자로 모이고, 상자의 출력 Q가 램프로 갑니다.':
    'Switch D and write E go into the upper AND (the S side), and through a NOT that flips D into the lower AND (the R side). The two ANDs meet at the SR latch box, and the box\'s output Q goes to the lamp.',
  '1을 저장해 보세요. D를 1로, E를 켰다가 끄면 됩니다.': 'Store 1. Set D to 1, then turn E on and off.', 'Q = 1이 저장됐습니다.': 'Q = 1 is stored.',
  'E를 끈 채로 D를 0으로 바꿔 보세요. 램프는?': 'With E off, change D to 0. What about the lamp?', '쓰기가 꺼져 있으면 D가 바뀌어도 저장된 1은 그대로입니다.': 'With write off, the stored 1 stays even when D changes.',
  '이번에는 0을 저장해 보세요.': 'Now store 0.', 'E를 켜는 순간 Q가 D = 0을 따라갔고, E를 끈 뒤에도 0을 지킵니다.': 'The moment E went on, Q followed D = 0, and it keeps 0 after E is off.',
  // Step 4
  '레지스터': 'Register', 'D = 101 · 쓰기 허용': 'D = 101 · write allowed', '래치 세 개에 한 비트씩 저장': 'One bit stored in each of three latches', '레지스터 값 5': 'Register value 5',
  '래치를 나란히 놓으면 수를 저장한다': 'Latches side by side store a number',
  'D 래치 세 개를 나란히 놓고 E를 함께 연결하면 3비트 수 하나를 저장하는 레지스터가 됩니다. CPU 안에는 이런 레지스터가 여러 개 있어 계산할 값을 잠시 담아 둡니다. 다만 이 기억은 전기가 계속 흘러야 유지됩니다. 전원이 꺼지면 되먹임 고리의 1도 사라집니다.':
    'Put three D latches side by side with E wired to all of them and you have a register that stores one 3-bit number. A CPU has several registers like this that hold values to compute for a moment. But this memory lasts only while electricity keeps flowing: when the power goes off, the 1s in the feedback loops vanish too.',
  '입력 D 칸의 값을 바꿔도, E를 켰다 끄기 전에는 레지스터의 값이 그대로입니다. 전원을 껐다 켜면 저장한 수가 0으로 돌아갑니다. 컴퓨터의 RAM도 이렇게 전원이 꺼지면 내용을 잃어서, 파일은 디스크에 따로 저장합니다(3.7).':
    'Changing the value in input box D leaves the register\'s value as it is until E is turned on and off. Turning the power off and on sends the stored number back to 0. A computer\'s RAM likewise loses its contents when the power goes off, which is why files are saved separately on a disk (3.7).',
  '왼쪽 위에 3비트 수 D 칸, 아래에 쓰기 E 스위치가 있습니다. D의 버스와 E의 선이 레지스터 상자로 들어가고, 레지스터가 저장한 값이 오른쪽 칸으로 나옵니다.':
    'At the upper left is the 3-bit number box D, and below it the write switch E. D\'s bus and E\'s line go into the register box, and the value the register stores comes out to the box on the right.',
  '5를 저장해 보세요. D를 5로 맞추고 E를 켰다 끄세요.': 'Store 5. Set D to 5, then turn E on and off.', '101이 레지스터에 들어갔습니다.': '101 went into the register.',
  'E를 끈 채로 D를 다른 수로 바꿔 보세요.': 'With E off, change D to another number.', '입력이 바뀌어도 저장된 5는 그대로입니다.': 'The stored 5 stays even when the input changes.',
  '"전원 껐다 켜기"를 눌러 보세요. 저장한 값은 어떻게 될까요?': 'Press "Turn power off and on". What happens to the stored value?',
  '전기가 끊기면 되먹임 고리의 값이 사라져 0이 됩니다.': 'When the electricity is cut, the value in the feedback loop vanishes and becomes 0.',
  "하나의 쓰기 신호로 세 자리를 저장한다": "One write signal controls three stored bits",
  "공통 E가 1일 때 101을 씁니다. E를 0으로 한 뒤 입력만 010으로 바꾸면 저장된 101은 5로 남습니다.": "With shared E set to 1, write 101. Lower E to 0 and change the input to 010. The stored 101 remains 5.",
  "101을 쓴 뒤 쓰기 닫힘": "101 saved · write off",
  "쓰기를 닫으면 새 D가 Q로 가지 않는다": "Closing write keeps the new D from reaching Q",
  "D에 1을 써 넣은 뒤 E를 0으로 내립니다. D가 0으로 바뀌어도 S와 R은 0이고 Q는 1을 유지합니다.": "Write D=1, then lower E to 0. When D becomes 0, S and R stay 0 and Q holds 1.",
  "쓰기 열림": "Write enabled",
  "1을 저장": "Store 1",
  "쓰기 닫힘": "Write disabled",
  "1을 유지": "Hold 1",
};
