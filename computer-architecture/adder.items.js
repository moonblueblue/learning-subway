lessonItems["computer-architecture/adder"] = [
  {
    "id": "adder-1",
    "prompt": "반가산기에 A=1, B=0 을 넣으면 올림과 합은?",
    "novel": false,
    "options": [
      {"text": "올림 0, 합 1", "why": "두 입력이 다르니 XOR(합)는 1, 둘 다 1이 아니니 AND(올림)는 0입니다.", "correct": true},
      {"text": "올림 1, 합 0", "why": "입력에 1이 있으면 올림이 생긴다고 본 답인데, 올림은 두 입력이 모두 1일 때만 생깁니다."},
      {"text": "올림 1, 합 1", "why": "켜진 입력이 결과에 그대로 옮겨진다고 본 답인데, 1 + 0 = 1 이라 이진수 01 입니다."}
    ]
  },
  {
    "id": "adder-2",
    "prompt": "두 자리 덧셈기에 11 + 01(3 + 1)을 넣으면 램프는 어떻게 될까요?",
    "novel": false,
    "options": [
      {"text": "4의 자리만 켜진다(100)", "why": "1의 자리 1 + 1 이 올림 1을 넘기고, 2의 자리 1 + 0 + 올림 1 이 다시 올림 1을 넘겨 4의 자리에 닿습니다.", "correct": true},
      {"text": "2의 자리만 켜진다(010)", "why": "자리마다 따로 더하고 올림을 버린 답인데(1의 자리 1 + 1 → 0, 2의 자리 1 + 0 → 1), 그러면 3 + 1 = 2가 되어 맞지 않습니다."},
      {"text": "1·2의 자리가 켜진다(011)", "why": "1의 자리 1 + 1을 1로 본 답인데, 1 + 1은 합 0, 올림 1입니다."}
    ]
  },
  {
    "id": "adder-3",
    "prompt": "세 자리 덧셈기에 5 + 3(101 + 011)을 넣었습니다. 시간축에 그리면 8의 자리 답은 언제 정해질까요?",
    "novel": true,
    "options": [
      {"text": "3", "why": "1의 자리 1 + 1, 2의 자리 0 + 1 + 올림 1, 4의 자리 1 + 0 + 올림 1 로 올림이 세 번 이어져 7 + 1 과 같이 기다립니다.", "correct": true},
      {"text": "1", "why": "올림이 없는 3 + 4 처럼 본 답인데, 5 + 3 은 1의 자리에서 1 + 1 이 생겨 올림이 위로 이어집니다."},
      {"text": "2", "why": "올림이 1의 자리에서 한 번만 생긴다고 본 답인데, 올림을 받은 2의 자리와 4의 자리에서도 다시 올림이 생깁니다."}
    ]
  },
  {
    "id": "adder-4",
    "prompt": "같은 방식으로 덧셈기 64개를 이어 64자리 덧셈기를 만들었습니다. 가장 오래 걸리는 덧셈에서 맨 윗자리 답은 언제 정해질까요(상자 하나 지나는 시간 1 기준)?",
    "novel": true,
    "options": [
      {"text": "약 64", "why": "맨 아랫자리 올림이 64개 상자를 하나씩 건너야 맨 윗자리가 정해집니다.", "correct": true},
      {"text": "1", "why": "상자들이 모두 동시에 일한다고 본 답인데, 각 상자는 아랫자리 올림이 도착해야 답을 낼 수 있습니다."},
      {"text": "6", "why": "반씩 나누면 2⁶ = 64 라는 생각에서 나온 답인데, 이 덧셈기는 올림을 한 칸씩 차례로 넘길 뿐 반씩 나누지 않습니다."}
    ]
  }
];
lessonItemsText["computer-architecture/adder"] = {
  "반가산기에 A=1, B=0 을 넣으면 올림과 합은?": "What carry and sum does a half adder give for A=1, B=0?",
  "올림 0, 합 1": "Carry 0, sum 1",
  "두 입력이 다르니 XOR(합)는 1, 둘 다 1이 아니니 AND(올림)는 0입니다.": "The inputs differ, so XOR (sum) is 1. They are not both 1, so AND (carry) is 0.",
  "올림 1, 합 0": "Carry 1, sum 0",
  "입력에 1이 있으면 올림이 생긴다고 본 답인데, 올림은 두 입력이 모두 1일 때만 생깁니다.": "This assumes any 1 makes a carry, but a carry comes only when both inputs are 1.",
  "올림 1, 합 1": "Carry 1, sum 1",
  "켜진 입력이 결과에 그대로 옮겨진다고 본 답인데, 1 + 0 = 1 이라 이진수 01 입니다.": "This assumes the lit inputs carry straight over to the result, but 1 + 0 = 1, which is binary 01.",
  "두 자리 덧셈기에 11 + 01(3 + 1)을 넣으면 램프는 어떻게 될까요?": "What do the lamps show when a two-place adder gets 11 + 01 (3 + 1)?",
  "4의 자리만 켜진다(100)": "Only the 4s lamp is on (100)",
  "1의 자리 1 + 1 이 올림 1을 넘기고, 2의 자리 1 + 0 + 올림 1 이 다시 올림 1을 넘겨 4의 자리에 닿습니다.": "In the 1s place, 1 + 1 passes up a carry. In the 2s place, 1 + 0 + carry 1 passes up another carry, which reaches the 4s place.",
  "2의 자리만 켜진다(010)": "Only the 2s lamp is on (010)",
  "자리마다 따로 더하고 올림을 버린 답인데(1의 자리 1 + 1 → 0, 2의 자리 1 + 0 → 1), 그러면 3 + 1 = 2가 되어 맞지 않습니다.": "This adds each place on its own and drops the carry (1s: 1 + 1 → 0, 2s: 1 + 0 → 1), which would make 3 + 1 = 2.",
  "1·2의 자리가 켜진다(011)": "The 1s and 2s lamps are on (011)",
  "1의 자리 1 + 1을 1로 본 답인데, 1 + 1은 합 0, 올림 1입니다.": "This reads 1 + 1 in the 1s place as 1, but 1 + 1 is sum 0, carry 1.",
  "세 자리 덧셈기에 5 + 3(101 + 011)을 넣었습니다. 시간축에 그리면 8의 자리 답은 언제 정해질까요?": "A three-place adder gets 5 + 3 (101 + 011). On a timeline, when is the 8s answer settled?",
  "3": "3",
  "1의 자리 1 + 1, 2의 자리 0 + 1 + 올림 1, 4의 자리 1 + 0 + 올림 1 로 올림이 세 번 이어져 7 + 1 과 같이 기다립니다.": "1s: 1 + 1, 2s: 0 + 1 + carry 1, 4s: 1 + 0 + carry 1. The carry runs through three places, so it waits as long as 7 + 1.",
  "1": "1",
  "올림이 없는 3 + 4 처럼 본 답인데, 5 + 3 은 1의 자리에서 1 + 1 이 생겨 올림이 위로 이어집니다.": "This treats it like 3 + 4 with no carry, but 5 + 3 has 1 + 1 in the 1s place, and the carry runs upward.",
  "2": "2",
  "올림이 1의 자리에서 한 번만 생긴다고 본 답인데, 올림을 받은 2의 자리와 4의 자리에서도 다시 올림이 생깁니다.": "This assumes only the 1s place makes a carry, but the 2s and 4s places make carries again after receiving one.",
  "같은 방식으로 덧셈기 64개를 이어 64자리 덧셈기를 만들었습니다. 가장 오래 걸리는 덧셈에서 맨 윗자리 답은 언제 정해질까요(상자 하나 지나는 시간 1 기준)?": "Chaining 64 adders the same way makes a 64-place adder. For the slowest addition, when is the top place settled (one box delay = 1)?",
  "약 64": "About 64",
  "맨 아랫자리 올림이 64개 상자를 하나씩 건너야 맨 윗자리가 정해집니다.": "The carry from the bottom place has to cross the 64 boxes one by one before the top place is settled.",
  "상자들이 모두 동시에 일한다고 본 답인데, 각 상자는 아랫자리 올림이 도착해야 답을 낼 수 있습니다.": "This assumes all boxes work at once, but each box can answer only after the carry from below arrives.",
  "6": "6",
  "반씩 나누면 2⁶ = 64 라는 생각에서 나온 답인데, 이 덧셈기는 올림을 한 칸씩 차례로 넘길 뿐 반씩 나누지 않습니다.": "This comes from halving, since 2⁶ = 64, but this adder only passes the carry one place at a time and never halves the work."
};
