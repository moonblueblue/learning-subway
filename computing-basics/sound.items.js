lessonItems["computing-basics/sound"] = [
  {
    "id": "sound-1",
    "prompt": "4비트(0~15 정수)로 적을 때, 10 ms에 잰 6.54는 무엇으로 기록될까요?",
    "novel": false,
    "options": [
      {
        "text": "7",
        "why": "6.54는 6보다 7에 가깝습니다(7까지 0.46).",
        "correct": true
      },
      {
        "text": "6",
        "why": "소수점 아래를 버린 답입니다. 기록은 가장 가까운 정수를 고릅니다."
      },
      {
        "text": "6.5",
        "why": "소수 한 자리는 남길 수 있다고 본 답입니다. 4비트에는 정수 16개만 들어갑니다."
      }
    ]
  },
  {
    "id": "sound-2",
    "prompt": "측정 횟수는 그대로 두고 기록 비트를 4개에서 2개로 줄이면 무엇이 바뀔까요?",
    "novel": false,
    "options": [
      {
        "text": "재는 시각은 같고, 기록할 수 있는 높이가 0·5·10·15 넷으로 줄어든다",
        "why": "비트 수는 높이를 얼마나 잘게 적는지만 정합니다.",
        "correct": true
      },
      {
        "text": "측정점이 절반으로 줄어든다",
        "why": "비트 수와 재는 횟수를 섞은 답입니다. 점의 개수는 재는 간격이 정합니다."
      },
      {
        "text": "원래 파형이 계단처럼 바뀐다",
        "why": "기록을 소리 자체로 본 답입니다. 파형은 그대로이고 적어 둔 수만 거칠어집니다."
      }
    ]
  },
  {
    "id": "sound-3",
    "prompt": "휘파람 소리를 0 ms부터 20 ms 동안 2 ms마다 재고, 높이를 4비트로 적습니다. 기록은 몇 비트일까요?",
    "novel": true,
    "options": [
      {
        "text": "40비트",
        "why": "0, 2, …, 18 ms에 10번 재고, 한 번에 4비트라 10 × 4 = 40입니다.",
        "correct": true
      },
      {
        "text": "44비트",
        "why": "20 ms 끝에서도 한 번 더 잰다고 본 답입니다. 레슨처럼 0 ms에서 시작해 끝 직전까지 재면 10번입니다."
      },
      {
        "text": "80비트",
        "why": "20 ms의 20에 4비트를 곱한 답입니다. 곱할 것은 재는 시간이 아니라 재는 횟수입니다."
      }
    ]
  },
  {
    "id": "sound-4",
    "prompt": "모기 소리처럼 1 ms 안에도 여러 번 오르내리는 소리를 1 ms마다 재면 기록에는 무엇이 남을까요?",
    "novel": true,
    "options": [
      {
        "text": "1 ms마다 높이 하나씩만 남고, 그 사이의 오르내림은 남지 않는다",
        "why": "기록에는 잰 시각의 높이만 있습니다.",
        "correct": true
      },
      {
        "text": "컴퓨터가 점 사이를 원래 모양대로 채워 넣는다",
        "why": "기록이 파형 전체를 담는다고 본 답입니다. 재지 않은 시각의 높이는 어디에도 없습니다."
      },
      {
        "text": "기록 비트를 16개로 늘리면 오르내림이 남는다",
        "why": "비트 수와 재는 간격을 섞은 답입니다. 비트를 늘려도 재는 시각은 그대로입니다."
      }
    ]
  }
];

lessonItemsText["computing-basics/sound"] = {
  "4비트(0~15 정수)로 적을 때, 10 ms에 잰 6.54는 무엇으로 기록될까요?": "Using 4 bits for integers from 0 to 15, how do you record 6.54 at 10 ms?",
  "7": "7",
  "6.54는 6보다 7에 가깝습니다(7까지 0.46).": "6.54 is closer to 7 than to 6. The distance to 7 is 0.46.",
  "6": "6",
  "소수점 아래를 버린 답입니다. 기록은 가장 가까운 정수를 고릅니다.": "This drops the fraction. The recording uses the closest integer.",
  "6.5": "6.5",
  "소수 한 자리는 남길 수 있다고 본 답입니다. 4비트에는 정수 16개만 들어갑니다.": "Four bits can hold 16 integers. There is no room for a decimal fraction.",
  "측정 횟수는 그대로 두고 기록 비트를 4개에서 2개로 줄이면 무엇이 바뀔까요?": "What changes if the number of measurements stays the same and the recording uses two bits instead of four?",
  "재는 시각은 같고, 기록할 수 있는 높이가 0·5·10·15 넷으로 줄어든다": "The times stay the same, and the recorded heights drop to four: 0, 5, 10 and 15.",
  "비트 수는 높이를 얼마나 잘게 적는지만 정합니다.": "Bits per sample determine how finely the height can be recorded.",
  "측정점이 절반으로 줄어든다": "The number of sample points is halved.",
  "비트 수와 재는 횟수를 섞은 답입니다. 점의 개수는 재는 간격이 정합니다.": "The sampling interval sets the number of points. Bits per sample do not change it.",
  "원래 파형이 계단처럼 바뀐다": "The original waveform becomes a staircase.",
  "기록을 소리 자체로 본 답입니다. 파형은 그대로이고 적어 둔 수만 거칠어집니다.": "The waveform stays the same. Only the heights stored in the recording become coarser.",
  "휘파람 소리를 0 ms부터 20 ms 동안 2 ms마다 재고, 높이를 4비트로 적습니다. 기록은 몇 비트일까요?": "Sample a whistle every 2 ms for 20 ms, starting at 0 ms. Use 4 bits for each height. How many bits are recorded?",
  "40비트": "40 bits",
  "0, 2, …, 18 ms에 10번 재고, 한 번에 4비트라 10 × 4 = 40입니다.": "Measure ten times at 0, 2, …, 18 ms. Each uses four bits, so 10 × 4 = 40.",
  "44비트": "44 bits",
  "20 ms 끝에서도 한 번 더 잰다고 본 답입니다. 레슨처럼 0 ms에서 시작해 끝 직전까지 재면 10번입니다.": "This counts one more sample at 20 ms. Starting at 0 and stopping before the ending time gives ten samples.",
  "80비트": "80 bits",
  "20 ms의 20에 4비트를 곱한 답입니다. 곱할 것은 재는 시간이 아니라 재는 횟수입니다.": "Multiply by the number of measurements, rather than by the duration of 20 ms.",
  "모기 소리처럼 1 ms 안에도 여러 번 오르내리는 소리를 1 ms마다 재면 기록에는 무엇이 남을까요?": "A mosquito’s sound can rise and fall several times in 1 ms. If you sample it every 1 ms, what remains in the record?",
  "1 ms마다 높이 하나씩만 남고, 그 사이의 오르내림은 남지 않는다": "One height every 1 ms, with no detail about the changes between sample points.",
  "기록에는 잰 시각의 높이만 있습니다.": "The record contains only the heights at the measurement times.",
  "컴퓨터가 점 사이를 원래 모양대로 채워 넣는다": "The computer fills in the original waveform between the dots.",
  "기록이 파형 전체를 담는다고 본 답입니다. 재지 않은 시각의 높이는 어디에도 없습니다.": "The record does not contain heights for times that were not measured.",
  "기록 비트를 16개로 늘리면 오르내림이 남는다": "Using 16 bits per sample records those rises and falls.",
  "비트 수와 재는 간격을 섞은 답입니다. 비트를 늘려도 재는 시각은 그대로입니다.": "More bits per sample do not change the times when the sound is measured."
};
