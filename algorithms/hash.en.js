// English for 4.5 Hash tables. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// The names (민수, 지아 …) are the lesson's data: their character codes are summed to pick a slot,
// so they stay in Hangul on the English page too, and lessonKeep lets the check skip them.
window.lessonKeep = ['민수|지아|하준|서연|도윤|하은|시우|주원|수아|건우|예린|지호|하늘'];
window.lessonText = {
  // Notes on the still pictures
  '{0} → {1} mod {#2} = {#3} → {#4}번 칸에 넣음': '{0} → {1} mod {2} = {3} → put in bucket {4}',
  '{0} → {1} mod {#2} = {#3} → {#4}번 칸에서 찾음': '{0} → {1} mod {2} = {3} → found in bucket {4}',
  '{0} → {1} mod {#2} = {#3} · {4} → {5} mod {#6} = {#7} → 같은 칸에 쌓음': '{0} → {1} mod {2} = {3} · {4} → {5} mod {6} = {7} → stacked in the same bucket',
  '13칸에 {#0}개 → 채움 비율 {1} > 0.75 → 29칸으로 다시 나눔': '{0} names in 13 buckets → load {1} > 0.75 → redistributed over 29 buckets',
  // Page
  '해시 테이블 · 레슨 4.5': 'Hash tables · Lesson 4.5',
  '이름을 글자 코드의 합으로 계산해 칸 번호를 정하는 해시 테이블에 넣고 찾으며, 충돌과 칸 늘리기까지 살펴보세요.':
    'Put names into and find them in a hash table that picks a slot number from the sum of a name\'s character codes, and look at collisions and growing the table too.',
  '이름 하나로 값을 어떻게 한 번에 찾을까요? 이름을 계산해 칸 번호를 정하는 해시 테이블에 넣고 찾아 보세요.':
    'How can a name find its value in one go? Put names into and find them in a hash table that works out a slot number from each name.',
  '해시 기계가 이름을 계산해 칸 번호를 정하고, 칸 위에 이름이 쌓이는 장면': 'A hash machine working out slot numbers from names, with names piling on the slots',
  '해시 기계와 칸': 'Hash machine and slots', '해시 기계': 'Hash machine', '이름 → 칸 번호': 'Name → slot number', '방금 넣은 이름': 'Name just put in', '찾은 이름': 'Name found', '충돌한 칸': 'Slot with a collision',
  '이름 고르기': 'Choose a name', '넣기': 'Put in', '찾기': 'Find',   '넣을 이름을 눌러 보세요.': 'Press a name to put in.', '찾을 이름을 눌러 보세요.': 'Press a name to find.',   // Readouts
  '{#0}번 칸': 'slot {0}', '{#0}번': 'Slot {0}', '빈 칸': 'empty slot',
  '{0} → 코드 합 {#1} → {#2} mod {#3} = {#4}번 칸에 넣음 · 채움 비율 {#5} ÷ {#6} = {#7}':
    '{0} → code sum {1} → {2} mod {3} = slot {4}, put in · fill ratio {5} ÷ {6} = {7}',
  '{0} → 코드 합 {#1} → {#2} mod {#3} = {#4}번 칸에 넣음 · 충돌! 이미 있는 이름 위에 쌓음 · 채움 비율 {#5} ÷ {#6} = {#7}':
    '{0} → code sum {1} → {2} mod {3} = slot {4}, put in · collision! piled on the name already there · fill ratio {5} ÷ {6} = {7}',
  '{0} → 코드 합 {#1} → {#2} mod {#3} = {#4}번 칸 · 이름 {#5}개 비교 → 찾음 · 리스트였다면 {#6}번 비교':
    '{0} → code sum {1} → {2} mod {3} = slot {4} · {5} {5|name|names} compared → found · a list would take {6} {6|comparison|comparisons}',
  '{0} → 코드 합 {#1} → {#2} mod {#3} = {#4}번 칸 · 이름 {#5}개 비교 → 없음 · 리스트였다면 {#6}번 비교':
    '{0} → code sum {1} → {2} mod {3} = slot {4} · {5} {5|name|names} compared → not there · a list would take {6} {6|comparison|comparisons}',
  '{0} → 코드 합 {#1} → {#2} mod {#3} = {#4}번 칸 · 빈 칸 → 없음 · 리스트였다면 {#5}번 비교':
    '{0} → code sum {1} → {2} mod {3} = slot {4} · empty slot → not there · a list would take {5} {5|comparison|comparisons}',
  '{0} → 코드 합 {#1} → {#2} mod {#3} = {#4}': '{0} → code sum {1} → {2} mod {3} = {4}',
  '채움 비율 {#0} ÷ {#1} = {#2} > 0.75': 'fill ratio {0} ÷ {1} = {2} > 0.75',
  '{0}은(는) 이미 들어 있습니다. 같은 이름은 한 번만 넣습니다.': '{0} is already in. Each name goes in only once.',
  '채움 비율이 0.75를 넘었습니다. 칸을 29개로 늘리고 모든 이름의 칸을 다시 계산합니다.': 'The fill ratio passed 0.75. The table grows to 29 slots and every name\'s slot is worked out again.',
  '칸이 29개가 됐습니다. 채움 비율 {#0} ÷ 29 = {#1} · 두 개 이상 몰린 칸 {#2}개': 'There are now 29 slots. Fill ratio {0} ÷ 29 = {1} · slots holding two or more: {2}',
  '이름 {#0}개 · 칸 {#1}개 · 채움 비율 {#2} · 충돌한 칸 {#3}개': '{0} {0|name|names} · {1} slots · fill ratio {2} · slots with collisions: {3}',
  // Step 1
  '해시 함수': 'The hash function', '이름을 입력': 'Put in a name', '해시를 13칸으로 나눔': 'Divide the hash over 13 slots', '계산한 칸에 저장': 'Store in the slot worked out',
  '이름을 계산해서 칸 번호를 정한다': 'A name is worked out into a slot number',
  '해시 테이블은 이름(키)을 계산해서 저장할 칸을 정합니다. 여기서는 글자 코드(0.2)를 모두 더한 수를 칸 수 13으로 나눈 나머지(2.6)를 칸 번호로 씁니다. 이 계산을 해시 함수라고 합니다. 같은 이름은 언제나 같은 수가 나오므로 언제나 같은 칸으로 갑니다.':
    'A hash table works out from a name (the key) which slot to store it in. Here the slot number is the sum of the name\'s character codes (0.2) divided by the 13 slots, taking the remainder (2.6). This calculation is called a hash function. The same name always gives the same number, so it always goes to the same slot.',
  '"민수"는 코드 합 97,812, 13으로 나눈 나머지 0이라 0번 칸에 들어갑니다. 이름을 넣을 때 계산 과정이 장면 왼쪽 해시 기계 위에 뜹니다.':
    '"민수" has a code sum of 97,812, which leaves 0 when divided by 13, so it goes into slot 0. As a name goes in, the calculation appears above the hash machine on the left of the scene.',
  '왼쪽에 해시 기계, 오른쪽에 0번부터 12번까지 칸 13개가 한 줄로 놓여 있습니다. 이름을 넣으면 기계가 칸 번호를 계산하고, 이름이 그 칸 위에 올라갑니다.':
    'On the left is the hash machine, and on the right 13 slots numbered 0 to 12 stand in a row. Put in a name and the machine works out a slot number, and the name goes up onto that slot.',
  '이름 세 개를 넣어 보세요.': 'Put in three names.', '이름마다 계산한 칸으로 바로 들어갔습니다.': 'Each name went straight into the slot worked out for it.',
  '"민수"를 나중에 찾을 때, 해시 함수는 몇 번 칸을 알려 줄까요?': 'When "민수" is looked up later, which slot will the hash function give?',
  '0번': 'Slot 0', '매번 다름': 'Different each time', '맨 끝 칸': 'The last slot',
  '같은 이름은 언제나 같은 코드 합, 같은 나머지가 나옵니다. 그래서 넣은 칸을 다시 찾을 수 있습니다.': 'The same name always gives the same code sum and the same remainder. That is why the slot it went into can be found again.',
  // Step 2
  '한 번에 찾기': 'Finding in one go', '저장한 이름을 검색': 'Look up a stored name', '같은 해시 계산': 'The same hash calculation', '그 칸에서 이름 확인': 'Check the name in that slot',
  '찾을 때도 계산 한 번이면 칸이 나온다': 'Finding, too, takes one calculation to reach the slot',
  '찾을 때도 이름으로 칸 번호를 계산하고 그 칸만 봅니다. 리스트에서 찾으면 앞에서부터 하나씩 봐야 하지만(0.6의 선형 탐색), 해시 테이블은 이름이 몇 개든 계산 한 번과 그 칸의 이름 몇 개만 보면 됩니다. 평균 O(1)입니다. 1.4의 딕셔너리가 이 구조입니다.':
    'Finding also works out the slot number from the name and looks only in that slot. A list must be searched one by one from the front (the linear search in 0.6), but a hash table, however many names it holds, needs only one calculation and a look at the few names in that slot: O(1) on average. The dictionary in 1.4 is this structure.',
  '"하은"을 찾으면 12번 칸으로 바로 가서 한두 개만 비교합니다. 리스트였다면 넣은 순서대로 8번을 봐야 합니다. 없는 이름 "하늘"도 칸 하나만 보고 "없음"을 압니다.':
    'Finding "하은" goes straight to slot 12 and compares just one or two names. A list would have to look 8 times in the order they went in. Even "하늘", which is not there, is known to be missing after looking at one slot.',
  '이름 여덟 개가 이미 들어 있는 칸 13개가 있습니다. 찾을 이름을 고르면 해시 기계가 칸 번호를 계산하고, 점이 그 칸으로 가서 이름을 비교합니다.':
    'There are 13 slots already holding eight names. Choose a name to find and the hash machine works out the slot number, and a dot goes to that slot to compare names.',
  '"하은"을 찾아 보세요.': 'Find "하은".', '12번 칸만 봤습니다. 리스트였다면 8번째에서야 찾습니다.': 'It looked only at slot 12. A list would find it only at the 8th.',
  '없는 이름 "하늘"을 찾아 보세요.': 'Find "하늘", a name that is not there.', '칸 하나만 보고 없다는 것을 알았습니다.': 'It knew the name was missing after looking at one slot.',
  // Step 3
  '충돌': 'Collisions', '다른 두 이름': 'Two different names', '같은 칸 번호': 'The same slot number', '한 칸에 두 이름 연결': 'Two names chained in one slot',
  '다른 이름이 같은 칸에 오면 줄을 세운다': 'When different names land in the same slot, they form a line',
  '칸은 13개뿐이라 서로 다른 이름이 같은 칸 번호를 받을 수 있습니다. 이를 충돌이라 합니다. 여기서는 같은 칸에 온 이름을 그 칸 위에 차례로 쌓아 둡니다(체이닝, 4.2의 연결 리스트). 찾을 때는 그 칸의 이름들을 차례로 비교합니다.':
    'There are only 13 slots, so different names can get the same slot number. This is called a collision. Here names landing in the same slot are piled on it in turn (chaining, the linked list of 4.2). Finding compares the names in that slot in turn.',
  '"하준"과 "지호"는 둘 다 5번 칸입니다. 충돌이 많아 한 칸에 몰리면 그 칸을 찾는 일이 리스트를 뒤지는 것과 같아집니다. 그래서 해시 함수는 이름을 칸마다 고르게 흩어야 합니다.':
    '"하준" and "지호" both go to slot 5. With many collisions crowding one slot, searching that slot becomes the same as searching a list. So a hash function must spread names evenly across the slots.',
  '빈 칸 13개가 있습니다. 이름을 넣다가 이미 이름이 있는 칸으로 가면, 새 이름이 그 위에 쌓입니다.': 'There are 13 empty slots. If a name goes to a slot that already holds a name, the new name piles on top.',
  '"하준"과 "지호"를 넣어 보세요.': 'Put in "하준" and "지호".', '둘 다 5번 칸입니다. 충돌이 일어나 위로 쌓였습니다.': 'Both are slot 5. A collision happened and they piled up.',
  '이름 100개가 모두 같은 칸에 몰리면 찾기는 어떻게 될까요?': 'If 100 names all crowd into the same slot, what happens to finding?',
  '여전히 1번': 'Still 1', '최악에 100번 비교': 'Up to 100 comparisons', '찾을 수 없음': 'Cannot be found',
  '그 칸의 줄을 처음부터 뒤져야 해서 O(n)이 됩니다. 좋은 해시 함수가 중요한 이유입니다.': 'The line in that slot must be searched from the start, so it becomes O(n). That is why a good hash function matters.',
  // Step 4
  '칸 늘리기': 'Growing the table', '13칸에 이름 10개': '10 names in 13 slots', '채움 비율 0.75 초과': 'Fill ratio over 0.75', '29칸으로 재배치': 'Rearranged into 29 slots',
  '꽉 차기 전에 칸을 늘려 다시 나눈다': 'Before it fills up, add slots and spread again',
  '이름 수 ÷ 칸 수를 채움 비율이라 합니다. 비율이 높으면 충돌이 늘어 느려지므로, 해시 테이블은 비율이 0.75를 넘으면 칸을 두 배쯤(여기서는 29개)으로 늘리고 모든 이름의 칸을 새 크기로 다시 계산합니다. 한 번은 오래 걸리지만 자주 일어나지 않아 평균은 여전히 빠릅니다.':
    'Names ÷ slots is called the fill ratio. A high ratio means more collisions and slower lookups, so when the ratio passes 0.75 a hash table roughly doubles its slots (to 29 here) and works out every name\'s slot again for the new size. That one time is slow, but it happens rarely, so on average it stays fast.',
  '이름 10개째에서 비율이 10 ÷ 13 ≈ 0.77이 되어 칸이 29개로 늘어납니다. 같은 이름도 나머지가 달라져 새 칸으로 흩어집니다. 두 개씩 몰린 칸이 3개에서 2개로 줄고, 비율이 0.34로 낮아져 다음 이름들이 들어갈 빈칸이 넉넉해집니다.':
    'At the 10th name the ratio becomes 10 ÷ 13 ≈ 0.77 and the table grows to 29 slots. The same names get different remainders and scatter to new slots. Slots holding two drop from 3 to 2, and the ratio falls to 0.34, leaving plenty of empty slots for the names to come.',
  '이름 아홉 개가 든 칸 13개가 있습니다. 하나를 더 넣으면 채움 비율이 0.75를 넘어, 칸이 29개로 늘어나고 모든 이름이 새 칸으로 옮겨집니다.':
    'There are 13 slots holding nine names. Put in one more and the fill ratio passes 0.75, so the table grows to 29 slots and every name moves to a new slot.',
  '이름을 하나 더 넣어 칸이 늘어나는 것을 보세요.': 'Put in one more name and watch the table grow.', '13칸에서 29칸으로 늘었고, 모든 이름의 칸을 다시 계산했습니다.': 'It grew from 13 slots to 29, and every name\'s slot was worked out again.',
  '1.4에서 쓴 파이썬 딕셔너리는 이름(키)으로 값을 어떻게 찾을까요?': 'How does the Python dictionary used in 1.4 find a value by name (key)?',
  '앞에서부터 하나씩': 'One by one from the front', '해시로 칸을 계산해서': 'By working out the slot with a hash', '이진 탐색으로': 'By binary search',
  '파이썬 딕셔너리는 해시 테이블이라, 키가 아무리 많아도 평균 한 번에 찾습니다.': 'A Python dictionary is a hash table, so however many keys it has, it finds one in a single step on average.',
  "13칸 · 이름 10개": "13 buckets · 10 names",
  "13칸 → 29칸": "13 → 29 buckets",
  "7번 칸": "Bucket 7",
  "7번에서 지아 확인": "Match Jia in bucket 7",
  "같은 계산": "Same calculation",
  "같은 키를 찾음": "Matching key",
  "넣을 때와 같은 해시로 지아를 다시 찾는다": "Use the same hash to find Jia again",
  "다른 칸은 건너뜀": "Skip other buckets",
  "도윤 → 24번": "Doyun → bucket 24",
  "저장된 이름은 전후 모두 10개": "10 names both before and after",
  "조회할 키": "Lookup key",
  "지아": "Jia",
  "지아 10번 · 도윤 24번": "Jia in 10 · Doyun in 24",
  "지아 · 도윤": "Jia · Doyun",
  "지아 → 10번": "Jia → bucket 10",
  "지아 입력": "Enter Jia",
  "지아와 이름 대조": "Compare the name Jia",
  "칸 수를 29로 바꿔 다시 계산": "Recompute for 29 buckets",
  "칸 수를 늘리면 같은 키의 나머지도 바뀐다": "More buckets can change the same key’s remainder",
  "지아를 다시 찾을 때 같은 계산으로 7번 칸을 엽니다. 그 칸 안에서 이름을 대조하며, 다른 칸은 열지 않습니다.": "To find Jia again, reuse the calculation and open bucket 7. Compare the name there without opening the other buckets.",
};
