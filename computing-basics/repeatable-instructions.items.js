lessonItems["computing-basics/repeatable-instructions"] = [
  {
    "id": "repeatable-instructions-1",
    "prompt": "빈 세 칸 카드에 '왼쪽부터 첫 빈 칸에 원', '왼쪽부터 첫 빈 칸에 원', '왼쪽부터 첫 빈 칸에 별'을 차례로 따르면 무늬는 어떻게 될까요?",
    "novel": false,
    "options": [
      {
        "text": "원·원·별",
        "why": "원이 1번, 다음 원이 남은 첫 빈 칸인 2번, 별이 3번에 찍힙니다.",
        "correct": true
      },
      {
        "text": "별·원·원",
        "why": "마지막에 따른 지시가 맨 앞에 온다고 본 답인데, 이미 찬 칸은 건너뛰므로 마지막 도장은 남은 3번 칸에 갑니다."
      },
      {
        "text": "원·별·빈 칸",
        "why": "같은 지시가 두 번 있으면 한 번만 찍는다고 본 답인데, 지시 카드마다 한 번씩 찍습니다."
      }
    ]
  },
  {
    "id": "repeatable-instructions-2",
    "prompt": "'별 찍기'라고만 적은 카드를 두 사람에게 주었더니 한 사람은 1번 칸에, 다른 사람은 3번 칸에 찍었습니다. 지시를 어떻게 고쳐야 할까요?",
    "novel": false,
    "options": [
      {
        "text": "'왼쪽부터 첫 빈 칸에'처럼 찍을 자리를 정하는 말을 넣는다",
        "why": "자리가 정해지면 누가 따라도 같은 칸에 찍습니다.",
        "correct": true
      },
      {
        "text": "둘 중 한 사람이 잘못 찍었다고 알려 준다",
        "why": "사람이 틀렸다고 본 답인데, 지시가 자리를 정하지 않아 두 사람 모두 지시를 지켰습니다."
      },
      {
        "text": "'별 찍기' 카드를 한 장 더 넣는다",
        "why": "지시가 부족하면 같은 지시를 늘리면 된다고 본 답인데, 몇 장을 넣어도 자리는 정해지지 않습니다."
      }
    ]
  },
  {
    "id": "repeatable-instructions-3",
    "prompt": "식빵 위에 '맨 위에 치즈 올리기' 다음 '맨 위에 햄 올리기'를 따르면 아래부터 빵·치즈·햄이 됩니다. 두 지시의 순서를 바꾸면 맨 위에는 무엇이 있을까요?",
    "novel": true,
    "options": [
      {
        "text": "치즈",
        "why": "햄을 먼저 올리면 치즈가 나중에 그 위에 놓입니다.",
        "correct": true
      },
      {
        "text": "햄",
        "why": "같은 두 지시면 결과도 같다고 본 답인데, 나중에 한 지시가 먼저 한 지시의 결과 위에 쌓입니다."
      },
      {
        "text": "정해지지 않는다",
        "why": "순서를 바꾸면 자리도 알 수 없다고 본 답인데, '맨 위에'가 자리를 정해 두어 결과는 하나입니다."
      }
    ]
  },
  {
    "id": "repeatable-instructions-4",
    "prompt": "라면 끓이는 법을 '물을 적당히 붓고 끓으면 면을 넣고, 4분 뒤 불을 끈다'로 적어 두 사람에게 주었더니 국물 맛이 서로 달랐습니다. 왜일까요?",
    "novel": true,
    "options": [
      {
        "text": "'적당히'가 물의 양을 정하지 않아 사람마다 다른 양을 부었다",
        "why": "'별 찍기'처럼 정해지지 않은 말은 따르는 사람마다 결과가 갈립니다.",
        "correct": true
      },
      {
        "text": "한 사람이 적힌 대로 하지 않았다",
        "why": "결과가 다르면 누군가 어겼다고 본 답인데, 두 사람 모두 '적당히'를 지켰습니다."
      },
      {
        "text": "두 사람이 따른 순서가 달랐다",
        "why": "순서가 결과를 바꾼다는 것만 떠올린 답인데, 순서는 적혀 있어 같았고 달라진 것은 물의 양입니다."
      }
    ]
  }
];

lessonItemsText["computing-basics/repeatable-instructions"] = {
  "빈 세 칸 카드에 '왼쪽부터 첫 빈 칸에 원', '왼쪽부터 첫 빈 칸에 원', '왼쪽부터 첫 빈 칸에 별'을 차례로 따르면 무늬는 어떻게 될까요?": "On a blank three-box card, stamp a circle in the first empty box from the left twice, then stamp a star the same way. What is the pattern?",
  "원·원·별": "Circle · circle · star",
  "원이 1번, 다음 원이 남은 첫 빈 칸인 2번, 별이 3번에 찍힙니다.": "The first circle takes box 1, the next circle takes box 2, and the star goes in box 3.",
  "별·원·원": "Star · circle · circle",
  "마지막에 따른 지시가 맨 앞에 온다고 본 답인데, 이미 찬 칸은 건너뛰므로 마지막 도장은 남은 3번 칸에 갑니다.": "This puts the final instruction first, but filled boxes are skipped, so the last stamp goes in box 3.",
  "원·별·빈 칸": "Circle · star · empty",
  "같은 지시가 두 번 있으면 한 번만 찍는다고 본 답인데, 지시 카드마다 한 번씩 찍습니다.": "A repeated instruction still needs to be followed. Each instruction card calls for one stamp.",
  "'별 찍기'라고만 적은 카드를 두 사람에게 주었더니 한 사람은 1번 칸에, 다른 사람은 3번 칸에 찍었습니다. 지시를 어떻게 고쳐야 할까요?": "Two people receive a card that only says ‘stamp a star’. One uses box 1 and the other uses box 3. How should you revise the instruction?",
  "'왼쪽부터 첫 빈 칸에'처럼 찍을 자리를 정하는 말을 넣는다": "Specify the position, for example ‘in the first empty box from the left’",
  "자리가 정해지면 누가 따라도 같은 칸에 찍습니다.": "Naming the position makes both people stamp in the same box.",
  "둘 중 한 사람이 잘못 찍었다고 알려 준다": "Tell one of the two people they are wrong",
  "사람이 틀렸다고 본 답인데, 지시가 자리를 정하지 않아 두 사람 모두 지시를 지켰습니다.": "Neither person made a mistake. The instruction gave no position.",
  "'별 찍기' 카드를 한 장 더 넣는다": "Add another ‘stamp a star’ card",
  "지시가 부족하면 같은 지시를 늘리면 된다고 본 답인데, 몇 장을 넣어도 자리는 정해지지 않습니다.": "Adding more instructions does not tell anyone which position to use.",
  "식빵 위에 '맨 위에 치즈 올리기' 다음 '맨 위에 햄 올리기'를 따르면 아래부터 빵·치즈·햄이 됩니다. 두 지시의 순서를 바꾸면 맨 위에는 무엇이 있을까요?": "Put cheese on top of a slice of bread, then put ham on top. From bottom to top it is bread, cheese, ham. If you swap those instructions, what is on top?",
  "치즈": "Cheese",
  "햄을 먼저 올리면 치즈가 나중에 그 위에 놓입니다.": "If the ham goes on first, the cheese you add later goes above it.",
  "햄": "Ham",
  "같은 두 지시면 결과도 같다고 본 답인데, 나중에 한 지시가 먼저 한 지시의 결과 위에 쌓입니다.": "Changing the instruction order changes the order of the layers. Each new layer goes above the previous one.",
  "정해지지 않는다": "It is not determined",
  "순서를 바꾸면 자리도 알 수 없다고 본 답인데, '맨 위에'가 자리를 정해 두어 결과는 하나입니다.": "‘On top’ specifies the position, so the two instructions give one result.",
  "라면 끓이는 법을 '물을 적당히 붓고 끓으면 면을 넣고, 4분 뒤 불을 끈다'로 적어 두 사람에게 주었더니 국물 맛이 서로 달랐습니다. 왜일까요?": "Two people cook noodles from these instructions: ‘Pour in a suitable amount of water, add the noodles when it boils, and turn off the heat after four minutes.’ The broth tastes different. Why?",
  "'적당히'가 물의 양을 정하지 않아 사람마다 다른 양을 부었다": "‘A suitable amount’ did not specify how much water, so they added different amounts",
  "'별 찍기'처럼 정해지지 않은 말은 따르는 사람마다 결과가 갈립니다.": "As with ‘stamp a star’, leaving a detail open can give different results.",
  "한 사람이 적힌 대로 하지 않았다": "One of them did not follow the instructions",
  "결과가 다르면 누군가 어겼다고 본 답인데, 두 사람 모두 '적당히'를 지켰습니다.": "A different result does not show anyone disobeyed. Both chose what they thought was a suitable amount.",
  "두 사람이 따른 순서가 달랐다": "They followed the steps in a different order",
  "순서가 결과를 바꾼다는 것만 떠올린 답인데, 순서는 적혀 있어 같았고 달라진 것은 물의 양입니다.": "The order was written down and stayed the same. The amount of water differed."
};
