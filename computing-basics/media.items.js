lessonItems["computing-basics/media"] = [
  {
    "id": "media-1",
    "prompt": "하트의 둘째 줄 0110 0110에서 셋째 칸만 어둡게 하려면 무엇을 바꿔야 할까요?",
    "novel": false,
    "options": [
      {
        "text": "둘째 줄의 셋째 비트를 1에서 0으로 바꾼다",
        "why": "칸마다 같은 열의 비트 하나가 밝기를 정하므로 그 비트 하나만 바꾸면 됩니다.",
        "correct": true
      },
      {
        "text": "셋째 줄의 비트를 모두 0으로 바꾼다",
        "why": "줄과 칸(열)을 섞은 답입니다. 셋째 칸은 둘째 줄 안의 셋째 자리입니다."
      },
      {
        "text": "둘째 줄의 셋째 비트를 0에서 1로 바꾼다",
        "why": "1이 어두움이라고 거꾸로 본 답입니다. 이 그림에서 1은 밝음, 0은 어두움입니다."
      }
    ]
  },
  {
    "id": "media-2",
    "prompt": "16×16 칸 흑백 그림을 픽셀마다 1비트로 적으면 몇 비트일까요?",
    "novel": true,
    "options": [
      {
        "text": "256비트",
        "why": "칸이 16 × 16 = 256개이고 칸마다 1비트입니다.",
        "correct": true
      },
      {
        "text": "32비트",
        "why": "가로 16과 세로 16을 더한 답입니다. 칸 수는 가로와 세로를 곱한 값입니다."
      },
      {
        "text": "512비트",
        "why": "검정과 흰색 두 색이니 칸마다 2비트가 든다고 본 답입니다. 두 가지는 비트 하나로 나타낼 수 있습니다."
      }
    ]
  },
  {
    "id": "media-3",
    "prompt": "픽셀마다 3비트를 쓰면 밝기를 몇 가지로 나눌 수 있을까요?",
    "novel": true,
    "options": [
      {
        "text": "8가지",
        "why": "비트가 하나 늘 때마다 가짓수가 두 배라 2 × 2 × 2 = 8입니다.",
        "correct": true
      },
      {
        "text": "3가지",
        "why": "비트 하나가 밝기 하나를 맡는다고 본 답입니다. 밝기는 비트들의 조합마다 하나씩 생깁니다."
      },
      {
        "text": "6가지",
        "why": "2비트의 4가지에 2를 더한 답입니다. 비트를 하나 더하면 가짓수는 더해지지 않고 두 배가 됩니다."
      }
    ]
  },
  {
    "id": "media-4",
    "prompt": "8×8 칸 그림의 픽셀마다 빨강·초록·파랑을 각각 0~255로 적으면 그림 전체는 몇 바이트일까요?",
    "novel": true,
    "options": [
      {
        "text": "192바이트",
        "why": "픽셀 하나가 세 채널 × 1바이트 = 3바이트이고, 픽셀이 64개라 64 × 3 = 192바이트입니다.",
        "correct": true
      },
      {
        "text": "3바이트",
        "why": "픽셀 하나의 크기를 그림 전체의 크기로 본 답입니다. 64칸이 각자 세 값을 가집니다."
      },
      {
        "text": "64바이트",
        "why": "픽셀마다 1바이트로 본 답입니다. 색을 적으려면 빛 세 개의 값이 모두 필요합니다."
      }
    ]
  },
  {
    "id": "media-5",
    "prompt": "4행 4열이 빨강 255 · 초록 0 · 파랑 0입니다. 노랑(255 · 255 · 0)으로 바꾸려면 어느 수를 바꿔야 할까요?",
    "novel": true,
    "options": [
      {
        "text": "초록 0을 255로",
        "why": "빨강과 초록 빛을 함께 켜면 노랑입니다.",
        "correct": true
      },
      {
        "text": "빨강을 0으로, 초록을 255로",
        "why": "노랑을 한 가지 빛으로 본 답입니다. 그러면 초록이 됩니다."
      },
      {
        "text": "세 값 모두 255로",
        "why": "밝은 색은 다 켜면 된다고 본 답입니다. 셋 다 켜면 흰색입니다."
      }
    ]
  }
];
lessonItemsText["computing-basics/media"] = {
  "하트의 둘째 줄 0110 0110에서 셋째 칸만 어둡게 하려면 무엇을 바꿔야 할까요?": "In the heart’s second row, 0110 0110, what must change to make only the third square dark?",
  "둘째 줄의 셋째 비트를 1에서 0으로 바꾼다": "Change the third bit of the second row from 1 to 0",
  "칸마다 같은 열의 비트 하나가 밝기를 정하므로 그 비트 하나만 바꾸면 됩니다.": "Each square’s brightness is set by the one bit in its column, so changing that one bit is enough.",
  "셋째 줄의 비트를 모두 0으로 바꾼다": "Change every bit of the third row to 0",
  "줄과 칸(열)을 섞은 답입니다. 셋째 칸은 둘째 줄 안의 셋째 자리입니다.": "This mixes up rows and columns. The third square is the third place within the second row.",
  "둘째 줄의 셋째 비트를 0에서 1로 바꾼다": "Change the third bit of the second row from 0 to 1",
  "1이 어두움이라고 거꾸로 본 답입니다. 이 그림에서 1은 밝음, 0은 어두움입니다.": "This treats 1 as dark. In this picture 1 is light and 0 is dark.",
  "16×16 칸 흑백 그림을 픽셀마다 1비트로 적으면 몇 비트일까요?": "A 16×16 black-and-white picture uses 1 bit per pixel. How many bits is it?",
  "256비트": "256 bits",
  "칸이 16 × 16 = 256개이고 칸마다 1비트입니다.": "There are 16 × 16 = 256 squares and each is 1 bit.",
  "32비트": "32 bits",
  "가로 16과 세로 16을 더한 답입니다. 칸 수는 가로와 세로를 곱한 값입니다.": "This adds the width 16 and the height 16. The number of squares is width times height.",
  "512비트": "512 bits",
  "검정과 흰색 두 색이니 칸마다 2비트가 든다고 본 답입니다. 두 가지는 비트 하나로 나타낼 수 있습니다.": "This assumes two colors need 2 bits per square. Two possibilities fit in one bit.",
  "픽셀마다 3비트를 쓰면 밝기를 몇 가지로 나눌 수 있을까요?": "With 3 bits per pixel, how many brightness levels can you have?",
  "8가지": "8",
  "비트가 하나 늘 때마다 가짓수가 두 배라 2 × 2 × 2 = 8입니다.": "Each extra bit doubles the count, so 2 × 2 × 2 = 8.",
  "3가지": "3",
  "비트 하나가 밝기 하나를 맡는다고 본 답입니다. 밝기는 비트들의 조합마다 하나씩 생깁니다.": "This gives each bit one brightness. There is one brightness for each combination of the bits.",
  "6가지": "6",
  "2비트의 4가지에 2를 더한 답입니다. 비트를 하나 더하면 가짓수는 더해지지 않고 두 배가 됩니다.": "This adds 2 to the 4 levels of 2 bits. An extra bit doubles the count instead of adding to it.",
  "8×8 칸 그림의 픽셀마다 빨강·초록·파랑을 각각 0~255로 적으면 그림 전체는 몇 바이트일까요?": "An 8×8 picture records red, green and blue as 0–255 for every pixel. How many bytes is the whole picture?",
  "192바이트": "192 bytes",
  "픽셀 하나가 세 채널 × 1바이트 = 3바이트이고, 픽셀이 64개라 64 × 3 = 192바이트입니다.": "One pixel is three channels × 1 byte = 3 bytes, and there are 64 pixels, so 64 × 3 = 192 bytes.",
  "3바이트": "3 bytes",
  "픽셀 하나의 크기를 그림 전체의 크기로 본 답입니다. 64칸이 각자 세 값을 가집니다.": "This takes the size of one pixel for the whole picture. Each of the 64 squares has its own three values.",
  "64바이트": "64 bytes",
  "픽셀마다 1바이트로 본 답입니다. 색을 적으려면 빛 세 개의 값이 모두 필요합니다.": "This gives each pixel one byte. A color needs the values of all three lights.",
  "4행 4열이 빨강 255 · 초록 0 · 파랑 0입니다. 노랑(255 · 255 · 0)으로 바꾸려면 어느 수를 바꿔야 할까요?": "Row 4, column 4 is red 255 · green 0 · blue 0. Which number must change to make it yellow (255 · 255 · 0)?",
  "초록 0을 255로": "Green from 0 to 255",
  "빨강과 초록 빛을 함께 켜면 노랑입니다.": "Red and green light together make yellow.",
  "빨강을 0으로, 초록을 255로": "Red to 0 and green to 255",
  "노랑을 한 가지 빛으로 본 답입니다. 그러면 초록이 됩니다.": "This treats yellow as a single light. That would make green.",
  "세 값 모두 255로": "All three values to 255",
  "밝은 색은 다 켜면 된다고 본 답입니다. 셋 다 켜면 흰색입니다.": "This assumes a bright color means everything on. All three on make white."
};
