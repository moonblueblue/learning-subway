lessonItems["programming/backtracking"] = [
  {
    "id": "backtracking-1",
    "prompt": "같은 미로에서 규칙을 바꿔 아래쪽 길부터 고르면, 출구에 닿기 전까지 막다른 길을 몇 번 만날까요?",
    "novel": false,
    "options": [
      {
        "text": "0번",
        "why": "입구에서 아래쪽 갈림길 나로 가고, 나에서 바로 출구에 닿습니다.",
        "correct": true
      },
      {
        "text": "2번",
        "why": "고르는 차례와 상관없이 같은 길을 다 돈다고 본 답인데, 아래쪽부터면 갈림길 가에 들르지 않습니다."
      },
      {
        "text": "1번",
        "why": "막다른 길을 한 번은 꼭 만난다고 본 답인데, 이 차례로는 막다른 길이 있는 갈림길 가에 가지 않습니다."
      }
    ]
  },
  {
    "id": "backtracking-2",
    "prompt": "자물쇠의 세 칸에 0이나 1을 넣는데, 이웃한 두 칸은 달라야 합니다. 앞 칸부터 0을 먼저 넣어 보고 막히면 되돌아갈 때, 처음 찾는 번호는 무엇일까요?",
    "novel": true,
    "options": [
      {
        "text": "010",
        "why": "둘째 칸에 0을 넣으면 첫 칸과 같아 막히므로 1로 바꾸고, 셋째 칸에 0을 넣으면 됩니다.",
        "correct": true
      },
      {
        "text": "000",
        "why": "규칙을 보지 않고 0부터 다 넣은 답인데, 이웃한 두 칸이 같으면 막혀 되돌아갑니다."
      },
      {
        "text": "101",
        "why": "1부터 넣는다고 본 답인데, 0을 먼저 넣으면 첫 칸은 0으로 시작합니다."
      }
    ]
  },
  {
    "id": "backtracking-3",
    "prompt": "갈림길 셋을 차례로 지나 막다른 길에 닿았습니다. 첫째와 둘째 갈림길에는 아직 가 보지 않은 길이 남아 있고, 셋째 갈림길은 모든 길을 해 봤습니다. 어디로 돌아가 다시 고를까요?",
    "novel": true,
    "options": [
      {
        "text": "둘째 갈림길",
        "why": "남은 길이 있는 갈림길 가운데 가장 가까운 곳입니다.",
        "correct": true
      },
      {
        "text": "첫째 갈림길",
        "why": "맨 처음 갈림길로 돌아간다고 본 답인데, 더 가까운 둘째 갈림길에 남은 길이 있습니다."
      },
      {
        "text": "셋째 갈림길",
        "why": "바로 앞 갈림길로만 돌아간다고 본 답인데, 셋째 갈림길에는 남은 길이 없습니다."
      }
    ]
  },
  {
    "id": "backtracking-4",
    "prompt": "찾기(갈림길 가)가 False 를 돌려주면 그 층은 어떻게 될까요?",
    "novel": true,
    "options": [
      {
        "text": "사라지고 아래층 찾기(입구)가 다음 길을 고른다",
        "why": "값을 돌려준 층은 사라지고, 부른 쪽이 이어서 일합니다.",
        "correct": true
      },
      {
        "text": "남아서 처음부터 다시 찾는다",
        "why": "못 찾으면 그 층이 다시 시작한다고 본 답인데, 돌려준 층은 사라집니다."
      },
      {
        "text": "프로그램 전체가 멈춘다",
        "why": "False 를 오류로 본 답인데, False 는 이 길에 출구가 없다는 값일 뿐입니다."
      }
    ]
  }
];
lessonItemsText["programming/backtracking"] = {
  "같은 미로에서 규칙을 바꿔 아래쪽 길부터 고르면, 출구에 닿기 전까지 막다른 길을 몇 번 만날까요?": "In the same maze, if you change the rule and choose the lower path first, how many dead ends do you meet before reaching the exit?",
  "0번": "None",
  "입구에서 아래쪽 갈림길 나로 가고, 나에서 바로 출구에 닿습니다.": "From the entrance you go to the lower fork B, and from B straight to the exit.",
  "2번": "Two",
  "고르는 차례와 상관없이 같은 길을 다 돈다고 본 답인데, 아래쪽부터면 갈림길 가에 들르지 않습니다.": "This assumes you walk every path whatever the order, but choosing the lower path first never visits fork A.",
  "1번": "One",
  "막다른 길을 한 번은 꼭 만난다고 본 답인데, 이 차례로는 막다른 길이 있는 갈림길 가에 가지 않습니다.": "This assumes you always meet at least one dead end, but in this order you never go to fork A, where the dead ends are.",
  "자물쇠의 세 칸에 0이나 1을 넣는데, 이웃한 두 칸은 달라야 합니다. 앞 칸부터 0을 먼저 넣어 보고 막히면 되돌아갈 때, 처음 찾는 번호는 무엇일까요?": "A lock has three places, each 0 or 1, and neighbouring places must differ. Filling from the front, trying 0 first and going back when blocked, which code do you find first?",
  "010": "010",
  "둘째 칸에 0을 넣으면 첫 칸과 같아 막히므로 1로 바꾸고, 셋째 칸에 0을 넣으면 됩니다.": "A 0 in the second place matches the first and is blocked, so it becomes 1, and a 0 then fits in the third place.",
  "000": "000",
  "규칙을 보지 않고 0부터 다 넣은 답인데, 이웃한 두 칸이 같으면 막혀 되돌아갑니다.": "This puts 0 everywhere without the rule, but when two neighbours match you are blocked and go back.",
  "101": "101",
  "1부터 넣는다고 본 답인데, 0을 먼저 넣으면 첫 칸은 0으로 시작합니다.": "This starts with 1, but trying 0 first puts 0 in the first place.",
  "갈림길 셋을 차례로 지나 막다른 길에 닿았습니다. 첫째와 둘째 갈림길에는 아직 가 보지 않은 길이 남아 있고, 셋째 갈림길은 모든 길을 해 봤습니다. 어디로 돌아가 다시 고를까요?": "You passed three forks in turn and reached a dead end. The first and second forks still have untried paths, and every path at the third fork has been tried. Where do you go back to choose again?",
  "둘째 갈림길": "The second fork",
  "남은 길이 있는 갈림길 가운데 가장 가까운 곳입니다.": "It is the nearest of the forks that still have a path left.",
  "첫째 갈림길": "The first fork",
  "맨 처음 갈림길로 돌아간다고 본 답인데, 더 가까운 둘째 갈림길에 남은 길이 있습니다.": "This assumes you go back to the very first fork, but the nearer second fork still has a path left.",
  "셋째 갈림길": "The third fork",
  "바로 앞 갈림길로만 돌아간다고 본 답인데, 셋째 갈림길에는 남은 길이 없습니다.": "This assumes you go back only to the fork just before, but the third fork has no path left.",
  "찾기(갈림길 가)가 False 를 돌려주면 그 층은 어떻게 될까요?": "When find(fork A) returns False, what happens to its frame?",
  "사라지고 아래층 찾기(입구)가 다음 길을 고른다": "It disappears and find(entrance) below chooses the next path",
  "값을 돌려준 층은 사라지고, 부른 쪽이 이어서 일합니다.": "A frame that has returned disappears, and its caller carries on.",
  "남아서 처음부터 다시 찾는다": "It stays and searches again from the start",
  "못 찾으면 그 층이 다시 시작한다고 본 답인데, 돌려준 층은 사라집니다.": "This assumes the frame restarts when nothing is found, but a frame that has returned disappears.",
  "프로그램 전체가 멈춘다": "The whole program stops",
  "False 를 오류로 본 답인데, False 는 이 길에 출구가 없다는 값일 뿐입니다.": "This treats False as an error, but False only says there is no exit along this path."
};
