lessonItems["computing-basics/bits"] = [
  {
    "id": "bits-1",
    "prompt": "스위치 8개로 19를 만들려면 어느 자리를 켜야 할까요?",
    "novel": false,
    "options": [
      {
        "text": "16, 2, 1 자리",
        "why": "16 + 2 + 1 = 19이고, 0001 0011이 됩니다.",
        "correct": true
      },
      {
        "text": "16과 3 자리",
        "why": "19 − 16 = 3을 한 자리에 넣으려 한 것인데, 자릿값은 1, 2, 4, 8, …뿐이고 3 자리는 없습니다."
      },
      {
        "text": "8 자리 두 번과 2, 1 자리",
        "why": "같은 값을 여러 번 쓸 수 있다고 본 것인데, 자리마다 스위치가 하나라서 한 번만 켤 수 있습니다."
      }
    ]
  },
  {
    "id": "bits-2",
    "prompt": "스위치가 4개뿐입니다. 나타낼 수 있는 가장 큰 수는 얼마일까요?",
    "novel": true,
    "options": [
      {
        "text": "15",
        "why": "4개의 자릿값 8, 4, 2, 1을 모두 켜면 8 + 4 + 2 + 1 = 15입니다.",
        "correct": true
      },
      {
        "text": "16",
        "why": "가짓수 16(스위치마다 두 배씩 2, 4, 8, 16)을 가장 큰 수로 본 것인데, 0부터 세므로 가장 큰 수는 하나 작은 15입니다."
      },
      {
        "text": "8",
        "why": "맨 왼쪽 자릿값 하나만 본 것인데, 켜진 자리는 모두 더해집니다."
      }
    ]
  },
  {
    "id": "bits-3",
    "prompt": "0000 0111(7)에 1을 더하면 어떻게 될까요?",
    "novel": true,
    "options": [
      {
        "text": "0000 1000 = 8",
        "why": "1, 2, 4 자리가 차례로 올림을 넘기며 0이 되고, 8 자리가 켜집니다.",
        "correct": true
      },
      {
        "text": "0000 1111 = 15",
        "why": "다음 빈 자리를 켜면 된다고 본 것인데, 그러면 8을 더한 셈입니다."
      },
      {
        "text": "0000 0110 = 6",
        "why": "1 자리만 끄고 올림을 빠뜨린 것인데, 끈 1 자리의 1은 왼쪽 자리로 넘어가야 합니다."
      }
    ]
  },
  {
    "id": "bits-4",
    "prompt": "스위치를 하나 더해 9개가 되면 나타낼 수 있는 수는 몇 가지일까요?",
    "novel": true,
    "options": [
      {
        "text": "512가지",
        "why": "기존 256가지에 새 스위치가 꺼진 묶음과 켜진 묶음이 한 번씩 생겨 256 + 256 = 512가지입니다.",
        "correct": true
      },
      {
        "text": "257가지",
        "why": "스위치 하나가 표시 하나를 보탠다고 본 것인데, 새 스위치는 기존 표시 전부를 두 벌로 만듭니다."
      },
      {
        "text": "511가지",
        "why": "9개를 모두 켠 가장 큰 수 511을 가짓수로 본 것인데, 0까지 세면 하나 많은 512가지입니다."
      }
    ]
  }
];
lessonItemsText["computing-basics/bits"] = {
  "스위치 8개로 19를 만들려면 어느 자리를 켜야 할까요?": "Which switches should be on to make 19 with eight switches?",
  "16, 2, 1 자리": "The 16, 2, and 1 places",
  "16 + 2 + 1 = 19이고, 0001 0011이 됩니다.": "16 + 2 + 1 = 19, which is 0001 0011.",
  "16과 3 자리": "The 16 and 3 places",
  "19 − 16 = 3을 한 자리에 넣으려 한 것인데, 자릿값은 1, 2, 4, 8, …뿐이고 3 자리는 없습니다.": "19 − 16 = 3, but the place values are 1, 2, 4, 8, and so on. There is no 3 place.",
  "8 자리 두 번과 2, 1 자리": "The 8 place twice, plus 2 and 1",
  "같은 값을 여러 번 쓸 수 있다고 본 것인데, 자리마다 스위치가 하나라서 한 번만 켤 수 있습니다.": "Each place has one switch, so you can use its value just once.",
  "스위치가 4개뿐입니다. 나타낼 수 있는 가장 큰 수는 얼마일까요?": "What is the largest value that four switches can show?",
  "15": "15",
  "4개의 자릿값 8, 4, 2, 1을 모두 켜면 8 + 4 + 2 + 1 = 15입니다.": "Turning on all four gives 8 + 4 + 2 + 1 = 15.",
  "16": "16",
  "가짓수 16(스위치마다 두 배씩 2, 4, 8, 16)을 가장 큰 수로 본 것인데, 0부터 세므로 가장 큰 수는 하나 작은 15입니다.": "There are 16 patterns, but the values start at zero, so the maximum is 15.",
  "8": "8",
  "맨 왼쪽 자릿값 하나만 본 것인데, 켜진 자리는 모두 더해집니다.": "8 is just the leftmost place value. Add the values of all the switches that are on.",
  "0000 0111(7)에 1을 더하면 어떻게 될까요?": "What happens when you add 1 to 0000 0111 (7)?",
  "0000 1000 = 8": "0000 1000 = 8",
  "1, 2, 4 자리가 차례로 올림을 넘기며 0이 되고, 8 자리가 켜집니다.": "The 1, 2, and 4 places turn off as they carry, and the 8 place turns on.",
  "0000 1111 = 15": "0000 1111 = 15",
  "다음 빈 자리를 켜면 된다고 본 것인데, 그러면 8을 더한 셈입니다.": "Just turning on the next off switch adds 8.",
  "0000 0110 = 6": "0000 0110 = 6",
  "1 자리만 끄고 올림을 빠뜨린 것인데, 끈 1 자리의 1은 왼쪽 자리로 넘어가야 합니다.": "Turning off the 1 place without carrying loses that 1. It must carry to the left.",
  "스위치를 하나 더해 9개가 되면 나타낼 수 있는 수는 몇 가지일까요?": "How many values can you show if you add one more switch, for nine switches in all?",
  "512가지": "512 patterns",
  "기존 256가지에 새 스위치가 꺼진 묶음과 켜진 묶음이 한 번씩 생겨 256 + 256 = 512가지입니다.": "Each of the 256 patterns can appear once with the new switch off and once with it on. 256 + 256 = 512.",
  "257가지": "257 patterns",
  "스위치 하나가 표시 하나를 보탠다고 본 것인데, 새 스위치는 기존 표시 전부를 두 벌로 만듭니다.": "The new switch duplicates all the existing patterns.",
  "511가지": "511 patterns",
  "9개를 모두 켠 가장 큰 수 511을 가짓수로 본 것인데, 0까지 세면 하나 많은 512가지입니다.": "511 is the largest value. Including zero gives one more value, for 512 patterns."
};
