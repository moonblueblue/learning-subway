lessonItems["computing-basics/search"] = [
  {
    "id": "search-1",
    "prompt": "가나다순으로 정렬된 이름 1,000개에서 이름 하나를 반씩 줄여 찾습니다. 가장 운이 나쁠 때 몇 번 확인할까요?",
    "novel": true,
    "options": [
      {
        "text": "10번",
        "why": "1,000개가 500, 250, 125, 62, 31, 15, 7, 3, 1개로 줄어 9번 뒤 하나가 남고, 그것을 확인하는 10번째에 찾습니다.",
        "correct": true
      },
      {
        "text": "500번",
        "why": "\"반씩\"을 확인 횟수가 절반이라는 뜻으로 읽은 것인데, 절반이 되는 것은 남은 후보 수입니다."
      },
      {
        "text": "1,000번",
        "why": "하나씩 찾기의 최악을 그대로 가져온 것인데, 정렬되어 있으면 한 번의 비교로 절반을 버립니다."
      }
    ]
  },
  {
    "id": "search-2",
    "prompt": "레슨의 정렬된 16개(1, 4, 9, … 84, 99)에서 이번에는 맨 끝의 99를 반씩 줄여 찾습니다. 몇 번 확인할까요?",
    "novel": false,
    "options": [
      {
        "text": "5번",
        "why": "8번 30, 12번 43, 14번 81, 15번 84를 지나 마지막 남은 16번을 확인해야 99를 찾습니다.",
        "correct": true
      },
      {
        "text": "4번",
        "why": "16이 8, 4, 2, 1로 네 번 줄어든다는 것만 센 것인데, 하나 남은 상자를 여는 마지막 확인이 빠졌습니다."
      },
      {
        "text": "16번",
        "why": "맨 끝이니 모두 열어야 한다고 본 것인데, 그것은 섞인 상자를 하나씩 찾을 때의 횟수입니다."
      }
    ]
  },
  {
    "id": "search-3",
    "prompt": "정렬된 상자가 100만 개에서 200만 개로 두 배가 되었습니다. 반씩 줄여 맨 끝을 찾는 최악의 확인 횟수는 어떻게 될까요?",
    "novel": true,
    "options": [
      {
        "text": "21번",
        "why": "첫 확인 한 번으로 200만이 100만 개가 되고, 그 뒤는 100만 개일 때와 똑같이 20번이 걸립니다.",
        "correct": true
      },
      {
        "text": "40번",
        "why": "상자가 두 배면 일도 두 배라고 본 것인데, 그것은 하나씩 찾기의 성질입니다."
      },
      {
        "text": "20번",
        "why": "이미 충분히 적으니 그대로라고 본 것인데, 늘어난 절반을 버리는 확인이 한 번 더 필요합니다."
      }
    ]
  },
  {
    "id": "search-4",
    "prompt": "책장에 책 100권이 아무 순서 없이 꽂혀 있습니다. 가운데 책의 제목이 찾는 제목보다 가나다순으로 앞섭니다. 어떻게 해야 할까요?",
    "novel": true,
    "options": [
      {
        "text": "앞쪽 책도 버리지 말고 차례로 확인한다",
        "why": "순서 없이 꽂혀 있으면 가운데보다 앞쪽에도 찾는 책이 있을 수 있습니다.",
        "correct": true
      },
      {
        "text": "앞쪽 50권을 버리고 뒤쪽만 찾는다",
        "why": "정렬된 상자에서 쓰던 판단을 옮긴 것인데, 그 판단은 순서대로 놓여 있을 때만 성립합니다."
      },
      {
        "text": "뒤쪽 50권을 버리고 앞쪽만 찾는다",
        "why": "버릴 쪽을 반대로 고른 것인데, 순서가 없으면 어느 쪽도 한꺼번에 버릴 근거가 없습니다."
      }
    ]
  }
];
lessonItemsText["computing-basics/search"] = {
  "가나다순으로 정렬된 이름 1,000개에서 이름 하나를 반씩 줄여 찾습니다. 가장 운이 나쁠 때 몇 번 확인할까요?": "Find one name by halving an alphabetized list of 1,000 names. How many checks are needed in the worst case?",
  "10번": "10 checks",
  "1,000개가 500, 250, 125, 62, 31, 15, 7, 3, 1개로 줄어 9번 뒤 하나가 남고, 그것을 확인하는 10번째에 찾습니다.": "The candidates shrink to 500, 250, 125, 62, 31, 15, 7, 3, and 1. After nine checks one remains, and the tenth check finds it.",
  "500번": "500 checks",
  "\"반씩\"을 확인 횟수가 절반이라는 뜻으로 읽은 것인데, 절반이 되는 것은 남은 후보 수입니다.": "“Halving” describes the remaining candidates, not the number of checks.",
  "1,000번": "1,000 checks",
  "하나씩 찾기의 최악을 그대로 가져온 것인데, 정렬되어 있으면 한 번의 비교로 절반을 버립니다.": "That is the worst case for checking one at a time. In sorted boxes a comparison can eliminate half the candidates.",
  "레슨의 정렬된 16개(1, 4, 9, … 84, 99)에서 이번에는 맨 끝의 99를 반씩 줄여 찾습니다. 몇 번 확인할까요?": "This time, find 99, the last value in the lesson’s sorted list of 16 (1, 4, 9, …, 84, 99). How many checks does it take?",
  "5번": "5 checks",
  "8번 30, 12번 43, 14번 81, 15번 84를 지나 마지막 남은 16번을 확인해야 99를 찾습니다.": "Check 30 in box 8, 43 in box 12, 81 in box 14, and 84 in box 15. The last check finds 99 in box 16.",
  "4번": "4 checks",
  "16이 8, 4, 2, 1로 네 번 줄어든다는 것만 센 것인데, 하나 남은 상자를 여는 마지막 확인이 빠졌습니다.": "Four checks reduce 16 to 8, 4, 2, and 1. You still need to open the last box.",
  "16번": "16 checks",
  "맨 끝이니 모두 열어야 한다고 본 것인데, 그것은 섞인 상자를 하나씩 찾을 때의 횟수입니다.": "Checking every box is how long it takes to find the last value by opening mixed boxes one at a time.",
  "정렬된 상자가 100만 개에서 200만 개로 두 배가 되었습니다. 반씩 줄여 맨 끝을 찾는 최악의 확인 횟수는 어떻게 될까요?": "The number of sorted boxes doubles from one million to two million. How many checks are needed to find the value at the very end?",
  "21번": "21 checks",
  "첫 확인 한 번으로 200만이 100만 개가 되고, 그 뒤는 100만 개일 때와 똑같이 20번이 걸립니다.": "The first check leaves one million candidates. Then it takes the same 20 checks as before.",
  "40번": "40 checks",
  "상자가 두 배면 일도 두 배라고 본 것인데, 그것은 하나씩 찾기의 성질입니다.": "Doubling the number of boxes doubles the work when you check them one at a time.",
  "20번": "20 checks",
  "이미 충분히 적으니 그대로라고 본 것인데, 늘어난 절반을 버리는 확인이 한 번 더 필요합니다.": "One additional check is needed to eliminate the extra half.",
  "책장에 책 100권이 아무 순서 없이 꽂혀 있습니다. 가운데 책의 제목이 찾는 제목보다 가나다순으로 앞섭니다. 어떻게 해야 할까요?": "There are 100 books on a shelf in no particular order. The middle title comes before the one you want alphabetically. What should you do?",
  "앞쪽 책도 버리지 말고 차례로 확인한다": "Check in order, including the books toward the front.",
  "순서 없이 꽂혀 있으면 가운데보다 앞쪽에도 찾는 책이 있을 수 있습니다.": "Without an order, the book you want may be before the middle.",
  "앞쪽 50권을 버리고 뒤쪽만 찾는다": "Skip the first 50 books and look only at the back.",
  "정렬된 상자에서 쓰던 판단을 옮긴 것인데, 그 판단은 순서대로 놓여 있을 때만 성립합니다.": "That reasoning applies when the books are in order.",
  "뒤쪽 50권을 버리고 앞쪽만 찾는다": "Skip the last 50 books and look only at the front.",
  "버릴 쪽을 반대로 고른 것인데, 순서가 없으면 어느 쪽도 한꺼번에 버릴 근거가 없습니다.": "Switching sides does not help. With no order, there is no basis to skip either half."
};
