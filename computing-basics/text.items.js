lessonItems["computing-basics/text"] = [
  {
    "id": "text-1",
    "prompt": "친구가 보낸 파일에서 \"é\" 한 글자가 받는 쪽에서는 \"Ã©\" 두 글자로 보였습니다. 가장 그럴듯한 이유는 무엇일까요?",
    "novel": true,
    "options": [
      {
        "text": "é가 UTF-8로 두 바이트(C3 A9)에 저장됐는데, 받는 쪽이 바이트 하나를 글자 하나로 읽는 표로 읽었다",
        "why": "같은 바이트를 다른 규칙으로 읽으면 바이트 수만큼 글자가 나옵니다.",
        "correct": true
      },
      {
        "text": "보내는 도중에 바이트가 망가졌다",
        "why": "이상한 글자는 데이터가 상했다는 뜻이라고 본 것인데, 바이트는 그대로여도 읽는 규칙이 다르면 이렇게 보입니다."
      },
      {
        "text": "받는 쪽 표에 é가 없어서 비슷한 글자 둘로 바꿨다",
        "why": "표가 모양을 흉내 낸다고 본 것인데, 번호표는 번호를 짝지은 글자로 바꿀 뿐 비슷한 모양을 찾지 않습니다."
      }
    ]
  },
  {
    "id": "text-2",
    "prompt": "UTF-8로 B(66번)를 저장하면 몇 바이트일까요?",
    "novel": true,
    "options": [
      {
        "text": "1바이트",
        "why": "66은 127 이하라서 고정 머리 0 뒤에 7비트로 들어가 01000010(16진수 42) 한 바이트입니다.",
        "correct": true
      },
      {
        "text": "2바이트",
        "why": "모든 글자가 2바이트라고 들은 것을 옮긴 것인데, UTF-8은 번호 크기에 따라 바이트 수가 다릅니다."
      },
      {
        "text": "3바이트",
        "why": "\"가\"처럼 UTF-8이면 세 바이트라고 본 것인데, 세 바이트는 번호가 큰 글자에만 씁니다."
      }
    ]
  },
  {
    "id": "text-3",
    "prompt": "\"가\"(44032)의 바로 다음 글자 \"각\"은 44033번입니다. UTF-8 세 바이트 EA B0 80 중 무엇이 바뀔까요?",
    "novel": true,
    "options": [
      {
        "text": "마지막 바이트만 80에서 81로",
        "why": "44032는 맨 오른쪽 비트가 0이라, 1을 더해도 올림 없이 그 비트 하나만 0에서 1로 바뀝니다. 그 비트는 마지막 바이트의 오른쪽 6비트에 있습니다.",
        "correct": true
      },
      {
        "text": "첫 바이트 EA",
        "why": "번호가 바뀌면 맨 앞 바이트가 바뀐다고 본 것인데, 첫 바이트에는 번호의 왼쪽 4비트가 들어 있습니다."
      },
      {
        "text": "세 바이트 모두",
        "why": "글자가 다르면 바이트가 전부 달라진다고 본 것인데, 여기서는 올림이 없어 맨 오른쪽 비트만 바뀝니다."
      }
    ]
  },
  {
    "id": "text-4",
    "prompt": "ASCII에서 A는 65(0100 0001), a는 97(0110 0001), B는 66입니다. 소문자 b는 몇 번일까요?",
    "novel": false,
    "options": [
      {
        "text": "98",
        "why": "a가 A보다 32 크듯, b도 B(66)에 32 자리 하나를 켠 98입니다.",
        "correct": true
      },
      {
        "text": "67",
        "why": "소문자가 대문자 바로 다음 번호라고 본 것인데, 소문자는 32만큼 떨어진 따로의 구간에 있습니다."
      },
      {
        "text": "66",
        "why": "대문자와 소문자가 같은 글자라 번호도 같다고 본 것인데, 번호표에서 둘은 서로 다른 글자라 번호가 다릅니다."
      }
    ]
  }
];

lessonItemsText["computing-basics/text"] = {
  "친구가 보낸 파일에서 \"é\" 한 글자가 받는 쪽에서는 \"Ã©\" 두 글자로 보였습니다. 가장 그럴듯한 이유는 무엇일까요?": "A friend sent a file. One character “é” appears as two characters “Ã©” on the receiver’s side. What is the most likely reason?",
  "é가 UTF-8로 두 바이트(C3 A9)에 저장됐는데, 받는 쪽이 바이트 하나를 글자 하나로 읽는 표로 읽었다": "“é” was stored as two UTF-8 bytes (C3 A9), and the receiver read one character per byte.",
  "같은 바이트를 다른 규칙으로 읽으면 바이트 수만큼 글자가 나옵니다.": "Reading the same bytes with a different rule can produce one character per byte.",
  "보내는 도중에 바이트가 망가졌다": "The bytes were damaged while being sent.",
  "이상한 글자는 데이터가 상했다는 뜻이라고 본 것인데, 바이트는 그대로여도 읽는 규칙이 다르면 이렇게 보입니다.": "Unexpected characters can appear when the reading rule differs, even if the bytes are intact.",
  "받는 쪽 표에 é가 없어서 비슷한 글자 둘로 바꿨다": "The receiver’s table had no é, so it replaced it with two similar-looking characters.",
  "표가 모양을 흉내 낸다고 본 것인데, 번호표는 번호를 짝지은 글자로 바꿀 뿐 비슷한 모양을 찾지 않습니다.": "A code table pairs numbers with characters. It does not look for similar shapes.",
  "UTF-8로 B(66번)를 저장하면 몇 바이트일까요?": "How many UTF-8 bytes does B (character number 66) take?",
  "1바이트": "1 byte",
  "66은 127 이하라서 고정 머리 0 뒤에 7비트로 들어가 01000010(16진수 42) 한 바이트입니다.": "66 is at most 127, so its seven bits follow a leading 0 to give 01000010, or hexadecimal 42.",
  "2바이트": "2 bytes",
  "모든 글자가 2바이트라고 들은 것을 옮긴 것인데, UTF-8은 번호 크기에 따라 바이트 수가 다릅니다.": "UTF-8 uses a different number of bytes depending on the character number.",
  "3바이트": "3 bytes",
  "\"가\"처럼 UTF-8이면 세 바이트라고 본 것인데, 세 바이트는 번호가 큰 글자에만 씁니다.": "UTF-8 uses three bytes for certain larger character numbers, such as “가”.",
  "\"가\"(44032)의 바로 다음 글자 \"각\"은 44033번입니다. UTF-8 세 바이트 EA B0 80 중 무엇이 바뀔까요?": "“가” (44032) is EA B0 80 in UTF-8. What changes for “각” (44033)?",
  "마지막 바이트만 80에서 81로": "Only the last byte changes, from 80 to 81.",
  "44032는 맨 오른쪽 비트가 0이라, 1을 더해도 올림 없이 그 비트 하나만 0에서 1로 바뀝니다. 그 비트는 마지막 바이트의 오른쪽 6비트에 있습니다.": "44032 ends in 0, so adding 1 changes only that bit without carrying. It is in the last byte’s rightmost six bits.",
  "첫 바이트 EA": "The first byte, EA.",
  "번호가 바뀌면 맨 앞 바이트가 바뀐다고 본 것인데, 첫 바이트에는 번호의 왼쪽 4비트가 들어 있습니다.": "The first byte holds the leftmost four bits of the character number, which do not change.",
  "세 바이트 모두": "All three bytes.",
  "글자가 다르면 바이트가 전부 달라진다고 본 것인데, 여기서는 올림이 없어 맨 오른쪽 비트만 바뀝니다.": "There is no carry, so only the rightmost bit changes.",
  "ASCII에서 A는 65(0100 0001), a는 97(0110 0001), B는 66입니다. 소문자 b는 몇 번일까요?": "In ASCII, A is 65 (0100 0001), a is 97 (0110 0001) and B is 66. What number is lowercase b?",
  "98": "98",
  "a가 A보다 32 크듯, b도 B(66)에 32 자리 하나를 켠 98입니다.": "As with A and a, add the 32 place to 66 to get 98.",
  "67": "67",
  "소문자가 대문자 바로 다음 번호라고 본 것인데, 소문자는 32만큼 떨어진 따로의 구간에 있습니다.": "Lowercase letters have their own range, 32 positions from the matching uppercase letters.",
  "66": "66",
  "대문자와 소문자가 같은 글자라 번호도 같다고 본 것인데, 번호표에서 둘은 서로 다른 글자라 번호가 다릅니다.": "Uppercase and lowercase letters have separate numbers in the code table."
};
