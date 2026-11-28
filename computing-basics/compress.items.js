lessonItems["computing-basics/compress"] = [
  {
    "id": "compress-1",
    "prompt": "한 줄이 00011111(어두운 칸 3개, 밝은 칸 5개)입니다. 묶음마다 4비트로 적으면 몇 비트일까요?",
    "novel": true,
    "options": [
      {
        "text": "8비트",
        "why": "묶음이 0×3과 1×5 두 개라 0|010, 1|100으로 2 × 4 = 8비트입니다. 이 줄은 원본과 크기가 같습니다.",
        "correct": true
      },
      {
        "text": "4비트",
        "why": "한 줄은 늘 한 묶음이라고 본 답이다. 색이 바뀌면 새 묶음이 시작됩니다."
      },
      {
        "text": "32비트",
        "why": "번갈아 나오는 줄처럼 칸마다 묶음이 생긴다고 본 답이다. 같은 색이 이어지는 동안은 한 묶음입니다."
      }
    ]
  },
  {
    "id": "compress-2",
    "prompt": "저장한 묶음 1|010을 펼치면 어떤 칸이 나올까요?",
    "novel": false,
    "options": [
      {
        "text": "밝은 칸 3개(111)",
        "why": "값 비트 1은 밝은 색이고, 길이 필드 010은 2라서 1을 더해 3칸입니다.",
        "correct": true
      },
      {
        "text": "밝은 칸 2개(11)",
        "why": "길이 필드 값을 그대로 칸 수로 읽은 답이다. 저장할 때 1을 뺐으니 1을 더합니다."
      },
      {
        "text": "1010 네 칸",
        "why": "저장한 비트를 그대로 그림의 칸으로 본 답이다. 앞 1비트는 색, 뒤 3비트는 칸 수입니다."
      }
    ]
  },
  {
    "id": "compress-3",
    "prompt": "사진 파일은 평균으로 줄이는 방식을 쓰기도 하지만, 계약서 같은 글 파일에는 쓰지 않습니다. 왜일까요?",
    "novel": true,
    "options": [
      {
        "text": "글은 한 글자만 달라져도 안 되는데, 평균으로 줄이면 버린 정보가 돌아오지 않기 때문이다",
        "why": "사진은 칸 몇 개가 조금 달라도 알아보기 어렵지만 글은 바로 틀립니다.",
        "correct": true
      },
      {
        "text": "글 파일은 반복이 없어서 줄일 수 없기 때문이다",
        "why": "반복이 적으면 RLE가 덜 줄어드는 것과 섞은 답이다. 문제는 크기가 아니라 펼쳤을 때 원본과 다르다는 점입니다."
      },
      {
        "text": "평균으로 줄이면 오히려 커지기 때문이다",
        "why": "번갈아 나오는 줄이 32비트로 커진 것과 섞은 답이다. 평균 방식은 늘 작아지지만 원래대로 돌아오지 않습니다."
      }
    ]
  },
  {
    "id": "compress-4",
    "prompt": "칸마다 2비트인 8×8 그림(128비트)을 2×2 대신 4×4 칸씩 평균으로 묶으면 어떻게 될까요?",
    "novel": false,
    "options": [
      {
        "text": "4×4 칸 덩어리가 4개라 4 × 2 = 8비트로 더 줄고, 사라지는 무늬도 더 많아진다",
        "why": "묶는 칸이 클수록 평균 하나가 덮는 칸이 늘어납니다.",
        "correct": true
      },
      {
        "text": "8비트로 줄지만 펼치면 원본이 돌아온다",
        "why": "덩어리가 커도 평균만 적는 것은 같아서 칸마다의 차이는 돌아오지 않습니다."
      },
      {
        "text": "2×2 때와 같은 32비트다",
        "why": "묶는 크기와 저장 크기가 상관없다고 본 답이다. 평균을 적는 덩어리가 16개에서 4개로 줄어 크기도 줄어듭니다."
      }
    ]
  }
];

lessonItemsText["computing-basics/compress"] = {
  "한 줄이 00011111(어두운 칸 3개, 밝은 칸 5개)입니다. 묶음마다 4비트로 적으면 몇 비트일까요?": "A row is 00011111, with three dark cells and five light cells. If each run uses four bits, how many bits does it take?",
  "8비트": "8 bits",
  "묶음이 0×3과 1×5 두 개라 0|010, 1|100으로 2 × 4 = 8비트입니다. 이 줄은 원본과 크기가 같습니다.": "There are two runs, 0×3 and 1×5. Codes 0|010 and 1|100 take 2 × 4 = 8 bits, the same size as the original.",
  "4비트": "4 bits",
  "한 줄은 늘 한 묶음이라고 본 답이다. 색이 바뀌면 새 묶음이 시작됩니다.": "A row is not always one run. A different color starts a new one.",
  "32비트": "32 bits",
  "번갈아 나오는 줄처럼 칸마다 묶음이 생긴다고 본 답이다. 같은 색이 이어지는 동안은 한 묶음입니다.": "Unlike an alternating row, consecutive cells of the same color form one run.",
  "저장한 묶음 1|010을 펼치면 어떤 칸이 나올까요?": "What cells result from decoding the stored run 1|010?",
  "밝은 칸 3개(111)": "Three light cells (111)",
  "값 비트 1은 밝은 색이고, 길이 필드 010은 2라서 1을 더해 3칸입니다.": "The value bit 1 is light. The length field 010 means 2. Add one to get three cells.",
  "밝은 칸 2개(11)": "Two light cells (11)",
  "길이 필드 값을 그대로 칸 수로 읽은 답이다. 저장할 때 1을 뺐으니 1을 더합니다.": "The length field is one less than the actual length, so add one.",
  "1010 네 칸": "Four cells (1010)",
  "저장한 비트를 그대로 그림의 칸으로 본 답이다. 앞 1비트는 색, 뒤 3비트는 칸 수입니다.": "The stored bits are not the pixels. The first selects the color, and the other three encode the count.",
  "사진 파일은 평균으로 줄이는 방식을 쓰기도 하지만, 계약서 같은 글 파일에는 쓰지 않습니다. 왜일까요?": "Photos can be compressed by averaging, but documents such as contracts do not use that method. Why?",
  "글은 한 글자만 달라져도 안 되는데, 평균으로 줄이면 버린 정보가 돌아오지 않기 때문이다": "A document must retain every character, but the discarded information in an average cannot be recovered.",
  "사진은 칸 몇 개가 조금 달라도 알아보기 어렵지만 글은 바로 틀립니다.": "Slightly different cells in a photo may be hard to notice, while a changed character makes the text wrong.",
  "글 파일은 반복이 없어서 줄일 수 없기 때문이다": "Text has no repetitions so it cannot be compressed.",
  "반복이 적으면 RLE가 덜 줄어드는 것과 섞은 답이다. 문제는 크기가 아니라 펼쳤을 때 원본과 다르다는 점입니다.": "Fewer repeats affect how much RLE shrinks. The issue here is that decoding does not restore the original.",
  "평균으로 줄이면 오히려 커지기 때문이다": "Averaging would make the file larger.",
  "번갈아 나오는 줄이 32비트로 커진 것과 섞은 답이다. 평균 방식은 늘 작아지지만 원래대로 돌아오지 않습니다.": "That confuses it with the alternating row that grew to 32 bits. Averaging makes the data smaller here but cannot recover the original.",
  "칸마다 2비트인 8×8 그림(128비트)을 2×2 대신 4×4 칸씩 평균으로 묶으면 어떻게 될까요?": "An 8×8 picture uses two bits per cell, or 128 bits. What changes if you average 4×4 blocks instead of 2×2 blocks?",
  "4×4 칸 덩어리가 4개라 4 × 2 = 8비트로 더 줄고, 사라지는 무늬도 더 많아진다": "Four 4×4 blocks take 4 × 2 = 8 bits, and more of the pattern is lost.",
  "묶는 칸이 클수록 평균 하나가 덮는 칸이 늘어납니다.": "The larger the block, the more cells are replaced by one average.",
  "8비트로 줄지만 펼치면 원본이 돌아온다": "It takes 8 bits and decoding restores the original.",
  "덩어리가 커도 평균만 적는 것은 같아서 칸마다의 차이는 돌아오지 않습니다.": "Only the average is still recorded, so differences between the individual cells are lost.",
  "2×2 때와 같은 32비트다": "It takes the same 32 bits as 2×2 blocks.",
  "묶는 크기와 저장 크기가 상관없다고 본 답이다. 평균을 적는 덩어리가 16개에서 4개로 줄어 크기도 줄어듭니다.": "The number of averaged blocks drops from 16 to 4, which reduces the stored size."
};
