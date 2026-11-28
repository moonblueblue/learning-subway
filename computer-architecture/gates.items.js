lessonItems["computer-architecture/gates"] = [
  {
    "id": "gates-1",
    "prompt": "AND 게이트에 A=0, B=0 을 넣으면 출력은?",
    "novel": false,
    "options": [
      {
        "text": "0",
        "why": "AND 는 두 입력이 모두 1일 때만 1이고, 여기서는 둘 다 0입니다.",
        "correct": true
      },
      {
        "text": "1",
        "why": "두 입력이 같으니 1이라고 본 답인데, 같을 때가 아니라 둘 다 1일 때만 1입니다."
      },
      {
        "text": "입력이 없으니 정해지지 않는다",
        "why": "0을 '입력 없음' 으로 본 답인데, 0도 하나의 값이라 출력은 0으로 정해집니다."
      }
    ]
  },
  {
    "id": "gates-2",
    "prompt": "진리표 네 줄에서 램프가 꺼지는 줄이 0, 0 하나뿐인 게이트는?",
    "novel": false,
    "options": [
      {
        "text": "OR",
        "why": "하나라도 1이면 켜지므로 둘 다 0인 줄에서만 꺼집니다.",
        "correct": true
      },
      {
        "text": "AND",
        "why": "켜지는 줄과 꺼지는 줄을 바꿔 읽은 답인데, AND 는 켜지는 줄이 1, 1 하나뿐입니다."
      },
      {
        "text": "XOR",
        "why": "두 갈래 회로를 떠올린 답인데, XOR 는 1, 1 에서도 꺼져 꺼지는 줄이 둘입니다."
      }
    ]
  },
  {
    "id": "gates-3",
    "prompt": "계단 위아래에 스위치가 하나씩 있는 전등을 생각합니다. 어느 스위치를 눌러도 전등 상태가 바뀝니다. 두 스위치가 모두 내려가(0) 있을 때 전등은 꺼져 있습니다. 두 스위치 상태를 A, B 라 하면 이 전등의 규칙과 같은 것은?",
    "novel": true,
    "options": [
      {
        "text": "XOR",
        "why": "두 스위치가 다를 때 켜지고, 하나를 눌러 같아지면 꺼지므로 '서로 다를 때 1' 입니다.",
        "correct": true
      },
      {
        "text": "OR",
        "why": "하나만 켜도 불이 들어온다는 데서 나온 답인데, OR 라면 둘 다 켰을 때도 켜져야 하지만 이 전등은 그때 꺼집니다."
      },
      {
        "text": "AND",
        "why": "두 스위치가 함께 정한다는 데서 나온 답인데, AND 라면 둘 다 켜야만 불이 들어오고 하나만 눌러서는 켤 수 없습니다."
      }
    ]
  },
  {
    "id": "gates-4",
    "prompt": "입력 A 하나를 NOT 두 개에 차례로 통과시킨 회로가 있습니다. A=1 이면 출력은?",
    "novel": true,
    "options": [
      {
        "text": "1",
        "why": "첫 NOT 이 0으로, 둘째 NOT 이 다시 1로 뒤집습니다.",
        "correct": true
      },
      {
        "text": "0",
        "why": "NOT 이 있으니 결과도 뒤집혔다고 본 답인데, 두 번 뒤집으면 원래 값으로 돌아옵니다."
      },
      {
        "text": "2",
        "why": "뒤집기가 두 번 쌓인다고 본 답인데, 게이트는 0과 1만 내보냅니다."
      }
    ]
  }
];
lessonItemsText["computer-architecture/gates"] = {
  "AND 게이트에 A=0, B=0 을 넣으면 출력은?": "What does the AND gate output when A=0 and B=0?",
  "0": "0",
  "AND 는 두 입력이 모두 1일 때만 1이고, 여기서는 둘 다 0입니다.": "AND outputs 1 only with two inputs of 1. Here both are 0.",
  "1": "1",
  "두 입력이 같으니 1이라고 본 답인데, 같을 때가 아니라 둘 다 1일 때만 1입니다.": "This assumes equal inputs give 1, but AND gives 1 only when both inputs are 1.",
  "입력이 없으니 정해지지 않는다": "It is undefined because there are no inputs.",
  "0을 '입력 없음' 으로 본 답인데, 0도 하나의 값이라 출력은 0으로 정해집니다.": "This reads 0 as no input, but 0 is a value too, so the output is 0.",
  "진리표 네 줄에서 램프가 꺼지는 줄이 0, 0 하나뿐인 게이트는?": "Which gate’s truth table has the lamp off only on row 0, 0?",
  "OR": "OR",
  "하나라도 1이면 켜지므로 둘 다 0인 줄에서만 꺼집니다.": "Any input of 1 lights the lamp, so only two 0s leave it off.",
  "AND": "AND",
  "켜지는 줄과 꺼지는 줄을 바꿔 읽은 답인데, AND 는 켜지는 줄이 1, 1 하나뿐입니다.": "This swaps the on and off rows, but AND is on in only one row, 1, 1.",
  "XOR": "XOR",
  "두 갈래 회로를 떠올린 답인데, XOR 는 1, 1 에서도 꺼져 꺼지는 줄이 둘입니다.": "This pictures a two-branch circuit, but XOR is also off at 1, 1, so two rows are off.",
  "계단 위아래에 스위치가 하나씩 있는 전등을 생각합니다. 어느 스위치를 눌러도 전등 상태가 바뀝니다. 두 스위치가 모두 내려가(0) 있을 때 전등은 꺼져 있습니다. 두 스위치 상태를 A, B 라 하면 이 전등의 규칙과 같은 것은?": "A stairway lamp has two switches. Pressing either switch changes the lamp state. When both switches are down (0), the lamp is off. Which rule matches switches A and B?",
  "두 스위치가 다를 때 켜지고, 하나를 눌러 같아지면 꺼지므로 '서로 다를 때 1' 입니다.": "The lamp is on when the switches differ. Changing either to match the other turns it off.",
  "하나만 켜도 불이 들어온다는 데서 나온 답인데, OR 라면 둘 다 켰을 때도 켜져야 하지만 이 전등은 그때 꺼집니다.": "This comes from one switch being enough to light it, but OR would stay on with both switches on, and this lamp goes off then.",
  "두 스위치가 함께 정한다는 데서 나온 답인데, AND 라면 둘 다 켜야만 불이 들어오고 하나만 눌러서는 켤 수 없습니다.": "This comes from the two switches deciding together, but AND would need both on, so one press could never light it.",
  "입력 A 하나를 NOT 두 개에 차례로 통과시킨 회로가 있습니다. A=1 이면 출력은?": "An input A passes through two NOT gates in order. What is the output when A=1?",
  "첫 NOT 이 0으로, 둘째 NOT 이 다시 1로 뒤집습니다.": "The first NOT gives 0 and the second returns it to 1.",
  "NOT 이 있으니 결과도 뒤집혔다고 본 답인데, 두 번 뒤집으면 원래 값으로 돌아옵니다.": "This assumes a NOT means the result is reversed, but two reversals bring back the original value.",
  "2": "2",
  "뒤집기가 두 번 쌓인다고 본 답인데, 게이트는 0과 1만 내보냅니다.": "This assumes the reversals add up, but a gate outputs only 0 or 1."
};
