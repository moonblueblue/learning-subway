lessonItems["programming/collections"] = [
  {
    "id": "collections-1",
    "prompt": "과일 = [\"사과\", \"배\", \"귤\"] 에서 과일[3] 을 읽으면 어떻게 될까요?",
    "novel": true,
    "options": [
      {
        "text": "오류가 난다",
        "why": "위치는 0, 1, 2까지뿐이라 위치 3인 칸이 없습니다.",
        "correct": true
      },
      {
        "text": "\"귤\"",
        "why": "1부터 세어 세 번째를 고른 답인데, 귤은 위치 2입니다."
      },
      {
        "text": "빈 값이 나온다",
        "why": "리스트 뒤에 빈 칸이 늘 이어져 있다고 본 답인데, 리스트에는 담은 개수만큼의 칸만 있습니다."
      }
    ]
  },
  {
    "id": "collections-2",
    "prompt": "점수 = [70, 85, 90] 에서 둘째 = 점수[1] 을 실행했습니다. 둘째에는 무엇이 들어갈까요?",
    "novel": false,
    "options": [
      {
        "text": "85",
        "why": "위치는 0부터 세므로 위치 1은 두 번째 칸이고, 거기에 85가 있습니다.",
        "correct": true
      },
      {
        "text": "70",
        "why": "1을 첫 번째로 센 답인데, 첫 칸은 위치 0입니다."
      },
      {
        "text": "1",
        "why": "위치 번호 자체가 꺼내진다고 본 답인데, 꺼내는 것은 그 위치 칸에 든 값입니다."
      }
    ]
  },
  {
    "id": "collections-3",
    "prompt": "전화 = {\"엄마\": \"010-1111\", \"아빠\": \"010-2222\"} 에서 전화[\"엄마\"] = \"010-9999\" 를 실행했습니다. 이제 딕셔너리에 칸은 몇 개일까요?",
    "novel": true,
    "options": [
      {
        "text": "2개",
        "why": "\"엄마\" 는 이미 있는 키라 그 칸의 값만 바뀝니다.",
        "correct": true
      },
      {
        "text": "3개",
        "why": "넣을 때마다 새 칸이 생긴다고 본 답인데, 키 하나는 칸 하나만 가리킵니다."
      },
      {
        "text": "1개",
        "why": "새 값을 넣으면 나머지가 지워진다고 본 답인데, 바뀌는 것은 \"엄마\" 칸 하나뿐입니다."
      }
    ]
  },
  {
    "id": "collections-4",
    "prompt": "학생 1000명의 (이름, 점수) 를 리스트와 딕셔너리에 똑같이 넣었습니다. 맨 마지막에 넣은 학생의 점수를 이름으로 찾으면 어떻게 될까요?",
    "novel": true,
    "options": [
      {
        "text": "리스트는 앞에서부터 1000번 비교하고, 딕셔너리는 키로 바로 그 칸을 읽는다",
        "why": "리스트는 이름이 어디 있는지 모르니 하나씩 보지만, 딕셔너리는 키가 칸을 가리킵니다.",
        "correct": true
      },
      {
        "text": "둘 다 1000번 비교한다",
        "why": "딕셔너리도 앞에서부터 찾는다고 본 답인데, 딕셔너리는 키로 칸을 찾아가므로 학생 수만큼 비교하지 않습니다."
      },
      {
        "text": "둘 다 바로 찾는다",
        "why": "리스트도 이름으로 칸을 가리킨다고 본 답인데, 리스트가 바로 가는 것은 위치 번호를 알 때뿐입니다."
      }
    ]
  }
];
lessonItemsText["programming/collections"] = {
  "과일 = [\"사과\", \"배\", \"귤\"] 에서 과일[3] 을 읽으면 어떻게 될까요?": "With fruit = [\"apple\", \"pear\", \"tangerine\"], what happens when you read fruit[3]?",
  "오류가 난다": "An error occurs.",
  "위치는 0, 1, 2까지뿐이라 위치 3인 칸이 없습니다.": "Only indices 0, 1 and 2 exist, so there is no cell at index 3.",
  "\"귤\"": "\"tangerine\"",
  "1부터 세어 세 번째를 고른 답인데, 귤은 위치 2입니다.": "This counts the third item starting from 1. Tangerine has index 2.",
  "빈 값이 나온다": "An empty value appears.",
  "리스트 뒤에 빈 칸이 늘 이어져 있다고 본 답인데, 리스트에는 담은 개수만큼의 칸만 있습니다.": "This assumes empty cells follow the list. The list has only as many cells as the values it contains.",
  "점수 = [70, 85, 90] 에서 둘째 = 점수[1] 을 실행했습니다. 둘째에는 무엇이 들어갈까요?": "Given scores = [70, 85, 90], run second = scores[1]. What does second hold?",
  "85": "85",
  "위치는 0부터 세므로 위치 1은 두 번째 칸이고, 거기에 85가 있습니다.": "Indices start from 0. Index 1 is the second cell, which holds 85.",
  "70": "70",
  "1을 첫 번째로 센 답인데, 첫 칸은 위치 0입니다.": "This treats 1 as the first index. The first cell has index 0.",
  "1": "1",
  "위치 번호 자체가 꺼내진다고 본 답인데, 꺼내는 것은 그 위치 칸에 든 값입니다.": "This takes the index itself as the result, but the lookup returns the value in that cell.",
  "전화 = {\"엄마\": \"010-1111\", \"아빠\": \"010-2222\"} 에서 전화[\"엄마\"] = \"010-9999\" 를 실행했습니다. 이제 딕셔너리에 칸은 몇 개일까요?": "Given phones = {\"Mom\": \"010-1111\", \"Dad\": \"010-2222\"}, run phones[\"Mom\"] = \"010-9999\". How many cells are in the dictionary now?",
  "2개": "2 cells",
  "\"엄마\" 는 이미 있는 키라 그 칸의 값만 바뀝니다.": "\"Mom\" is already a key, so only the value in that cell changes.",
  "3개": "3 cells",
  "넣을 때마다 새 칸이 생긴다고 본 답인데, 키 하나는 칸 하나만 가리킵니다.": "This adds a cell whenever a value is written. Each key points to just one cell.",
  "1개": "1 cell",
  "새 값을 넣으면 나머지가 지워진다고 본 답인데, 바뀌는 것은 \"엄마\" 칸 하나뿐입니다.": "This assumes adding a value erases the rest, but only the \"Mom\" cell changes and \"Dad\" stays.",
  "학생 1000명의 (이름, 점수) 를 리스트와 딕셔너리에 똑같이 넣었습니다. 맨 마지막에 넣은 학생의 점수를 이름으로 찾으면 어떻게 될까요?": "A list and a dictionary both hold the same 1,000 students’ names and scores. What happens when you look up the last student added by name?",
  "리스트는 앞에서부터 1000번 비교하고, 딕셔너리는 키로 바로 그 칸을 읽는다": "The list compares 1,000 names. The dictionary uses the key to reach the cell.",
  "리스트는 이름이 어디 있는지 모르니 하나씩 보지만, 딕셔너리는 키가 칸을 가리킵니다.": "The list checks names in order because it does not know the position. The dictionary uses the key to find the cell.",
  "둘 다 1000번 비교한다": "Both compare 1,000 names.",
  "딕셔너리도 앞에서부터 찾는다고 본 답인데, 딕셔너리는 키로 칸을 찾아가므로 학생 수만큼 비교하지 않습니다.": "This assumes both search from the start. The dictionary uses its key lookup, so it does not compare one name per student.",
  "둘 다 바로 찾는다": "Both go straight to the cell.",
  "리스트도 이름으로 칸을 가리킨다고 본 답인데, 리스트가 바로 가는 것은 위치 번호를 알 때뿐입니다.": "This assumes a list also finds cells by name, but a list goes straight to a cell only when the index is known."
};
