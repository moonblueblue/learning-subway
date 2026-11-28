lessonItems["math/proof"] = [
  {
    "id": "proof-1",
    "prompt": "n² + n + 41은 n = 0부터 39까지 모두 소수이고 n = 40에서 41 × 41입니다. \"모든 n에서 소수다\"에 대해 옳은 말은 무엇일까요?",
    "novel": false,
    "options": [
      {
        "text": "n = 40 하나로 거짓이 된다",
        "why": "'모든'이 붙은 문장은 반례 하나로 거짓이 됩니다.",
        "correct": true
      },
      {
        "text": "40개가 맞았으니 거의 참이다",
        "why": "맞은 수가 많으면 참에 가깝다고 본 답인데, 명제는 참 아니면 거짓이고 하나만 어겨도 거짓입니다."
      },
      {
        "text": "n = 40만 빼면 참으로 친다",
        "why": "반례를 예외로 넘길 수 있다고 본 답인데, 빼고 나면 다른 문장이 되고 원래 문장은 여전히 거짓입니다."
      }
    ]
  },
  {
    "id": "proof-2",
    "prompt": "\"모든 홀수는 소수다\"가 거짓임을 보이려면 무엇이 필요할까요?",
    "novel": true,
    "options": [
      {
        "text": "반례 하나, 예를 들어 9 = 3 × 3",
        "why": "홀수인데 소수가 아닌 수 하나면 충분합니다.",
        "correct": true
      },
      {
        "text": "소수가 아닌 홀수를 100개 찾는다",
        "why": "많이 모아야 한다고 본 답인데, 거짓을 보일 때는 하나로 됩니다."
      },
      {
        "text": "모든 홀수를 확인한다",
        "why": "참을 보일 때와 거짓을 보일 때를 섞은 답인데, 모든 경우를 다뤄야 하는 것은 참이라고 증명할 때입니다."
      }
    ]
  },
  {
    "id": "proof-3",
    "prompt": "\"k번째 도미노가 넘어지면 k + 1번째도 넘어진다\"는 확인했지만, 아무도 첫 도미노를 밀지 않았습니다. 어떻게 될까요?",
    "novel": true,
    "options": [
      {
        "text": "하나도 넘어지지 않는다",
        "why": "이어 감은 앞이 넘어져야 작동하는데, 첫 번째가 넘어지지 않았습니다.",
        "correct": true
      },
      {
        "text": "모두 넘어진다",
        "why": "이어 감만 있으면 된다고 본 답인데, 시작이 없으면 이어 갈 것이 없습니다."
      },
      {
        "text": "첫 도미노만 빼고 넘어진다",
        "why": "이어 감이 저절로 2번부터 시작한다고 본 답인데, 2번도 1번이 넘어져야 넘어집니다."
      }
    ]
  },
  {
    "id": "proof-4",
    "prompt": "팩(1) = 1이고 팩(n) = n × 팩(n − 1)입니다. 팩이 모든 n에서 맞다는 근거에서 '시작'에 해당하는 것은 무엇일까요?",
    "novel": true,
    "options": [
      {
        "text": "팩(1) = 1",
        "why": "재귀가 멈추는 기저 조건이 첫 번째 경우에서 참임을 보이는 시작입니다.",
        "correct": true
      },
      {
        "text": "팩(n − 1)이 맞으면 팩(n)도 맞다",
        "why": "그것은 한 칸에서 다음 칸으로 가는 이어 감입니다."
      },
      {
        "text": "팩(5) = 120을 계산해 맞춰 본 것",
        "why": "예 하나를 확인한 것인데, 예는 시작도 이어 감도 아닙니다."
      }
    ]
  },
  {
    "id": "proof-5",
    "prompt": "1부터 100까지의 합은 얼마일까요?",
    "novel": true,
    "options": [
      {
        "text": "5050",
        "why": "공식 n(n + 1) ÷ 2에 n = 100을 넣으면 100 × 101 ÷ 2 = 5050입니다.",
        "correct": true
      },
      {
        "text": "10100",
        "why": "100 × 101에서 2로 나누기를 빠뜨린 답입니다."
      },
      {
        "text": "5000",
        "why": "n + 1 대신 n을 곱한 100 × 100 ÷ 2인데, 공식은 n과 n + 1을 곱합니다."
      }
    ]
  }
];
lessonItemsText["math/proof"] = {
  "n² + n + 41은 n = 0부터 39까지 모두 소수이고 n = 40에서 41 × 41입니다. \"모든 n에서 소수다\"에 대해 옳은 말은 무엇일까요?": "The values of n² + n + 41 are prime from n = 0 to 39. At n = 40 the value is 41 × 41. Which statement about “prime for every n” is correct?",
  "n = 40 하나로 거짓이 된다": "n = 40 alone makes it false.",
  "'모든'이 붙은 문장은 반례 하나로 거짓이 됩니다.": "One counterexample makes a universal claim false.",
  "40개가 맞았으니 거의 참이다": "It is nearly true because 40 cases succeeded.",
  "맞은 수가 많으면 참에 가깝다고 본 답인데, 명제는 참 아니면 거짓이고 하나만 어겨도 거짓입니다.": "A proposition is true or false. One exception makes this proposition false.",
  "n = 40만 빼면 참으로 친다": "Treat it as true by excluding n = 40.",
  "반례를 예외로 넘길 수 있다고 본 답인데, 빼고 나면 다른 문장이 되고 원래 문장은 여전히 거짓입니다.": "Excluding a case changes the claim. The original claim is still false.",
  "\"모든 홀수는 소수다\"가 거짓임을 보이려면 무엇이 필요할까요?": "What would show that “every odd number is prime” is false?",
  "반례 하나, 예를 들어 9 = 3 × 3": "One counterexample, such as 9 = 3 × 3.",
  "홀수인데 소수가 아닌 수 하나면 충분합니다.": "One odd number that is not prime is enough.",
  "소수가 아닌 홀수를 100개 찾는다": "Find 100 odd numbers that are not prime.",
  "많이 모아야 한다고 본 답인데, 거짓을 보일 때는 하나로 됩니다.": "You need only one counterexample to show that the claim is false.",
  "모든 홀수를 확인한다": "Check all odd numbers.",
  "참을 보일 때와 거짓을 보일 때를 섞은 답인데, 모든 경우를 다뤄야 하는 것은 참이라고 증명할 때입니다.": "A proof that the claim is true must cover every case. A counterexample refutes it.",
  "\"k번째 도미노가 넘어지면 k + 1번째도 넘어진다\"는 확인했지만, 아무도 첫 도미노를 밀지 않았습니다. 어떻게 될까요?": "You verified that if domino k falls, domino k + 1 falls too, but nobody pushed the first domino. What happens?",
  "하나도 넘어지지 않는다": "None fall.",
  "이어 감은 앞이 넘어져야 작동하는데, 첫 번째가 넘어지지 않았습니다.": "The inductive step only applies after the previous domino falls. No domino starts the chain.",
  "모두 넘어진다": "They all fall.",
  "이어 감만 있으면 된다고 본 답인데, 시작이 없으면 이어 갈 것이 없습니다.": "The inductive step cannot start the chain on its own.",
  "첫 도미노만 빼고 넘어진다": "All but the first fall.",
  "이어 감이 저절로 2번부터 시작한다고 본 답인데, 2번도 1번이 넘어져야 넘어집니다.": "Domino 2 can only fall from domino 1, which has not fallen.",
  "팩(1) = 1이고 팩(n) = n × 팩(n − 1)입니다. 팩이 모든 n에서 맞다는 근거에서 '시작'에 해당하는 것은 무엇일까요?": "fact(1) = 1 and fact(n) = n × fact(n − 1). What serves as the base case in showing that fact is correct for every n?",
  "팩(1) = 1": "fact(1) = 1",
  "재귀가 멈추는 기저 조건이 첫 번째 경우에서 참임을 보이는 시작입니다.": "The stopping condition in recursion provides the correct first case.",
  "팩(n − 1)이 맞으면 팩(n)도 맞다": "If fact(n − 1) is correct, so is fact(n).",
  "그것은 한 칸에서 다음 칸으로 가는 이어 감입니다.": "That is the inductive step from one case to the next.",
  "팩(5) = 120을 계산해 맞춰 본 것": "Computing fact(5) = 120 and checking it",
  "예 하나를 확인한 것인데, 예는 시작도 이어 감도 아닙니다.": "This checks one example. It is neither the base case nor the inductive step.",
  "1부터 100까지의 합은 얼마일까요?": "What is the sum from 1 through 100?",
  "5050": "5050",
  "공식 n(n + 1) ÷ 2에 n = 100을 넣으면 100 × 101 ÷ 2 = 5050입니다.": "Substitute 100 in n(n + 1) ÷ 2 to get 100 × 101 ÷ 2 = 5050.",
  "10100": "10100",
  "100 × 101에서 2로 나누기를 빠뜨린 답입니다.": "This multiplies 100 × 101 but omits division by 2.",
  "5000": "5000",
  "n + 1 대신 n을 곱한 100 × 100 ÷ 2인데, 공식은 n과 n + 1을 곱합니다.": "This uses 100 × 100 ÷ 2, but the formula multiplies n and n + 1."
};
