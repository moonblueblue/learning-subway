// English for 1.4 Lists and dictionaries. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the code: 점수 scores, 나이 ages, 명단 names, 번호 ids, 개수 count, 둘째 second, 답 answer, 위치 pos, 바로 direct.
// People in the data: 민수 Minsu, 하늘 Haneul, 지아 Jia.
window.lessonText = {
  // Page
  '리스트와 딕셔너리 · 레슨 1.4': 'Lists and dictionaries · Lesson 1.4',
  '리스트와 딕셔너리가 메모리 칸에 값을 어떻게 담고, 어떻게 찾아 읽는지 코드를 한 줄씩 실행하며 비교해 보세요.':
    'Run code one line at a time to compare how lists and dictionaries put values into memory cells and how they find and read them.',
  '값 여러 개를 담는 두 방법은 무엇이 다를까요? 칸에 붙는 이름표와, 찾을 때 읽는 칸 수를 비교해 보세요.':
    'How do two ways of holding many values differ? Compare the labels on the cells and how many cells are read to find a value.',
  '리스트와 딕셔너리가 메모리 칸에 값을 담고 읽는 장면': 'Lists and dictionaries putting values into memory cells and reading them',
  '"한 줄 실행"을 눌러 다음 줄을 실행해 보세요. 예측 문제가 있는 줄에서는 먼저 답을 고릅니다.':
    'Press "Run one line" to run the next line. On a line with a prediction question, choose your answer first.',
  // Data and code
  '민수': 'Minsu', '하늘': 'Haneul', '지아': 'Jia', '"지아"': '"Jia"',
  '점수': 'scores', '나이': 'ages', '명단': 'names', '번호': 'ids', '개수': 'count', '둘째': 'second', '답': 'answer', '위치': 'pos', '바로': 'direct',
  '점수[{#0}]': 'scores[{0}]', '점수[{#0}] = {1}': 'scores[{0}] = {1}', '명단[{#0}]': 'names[{0}]', '명단[{#0}] = {1}': 'names[{0}] = {1}',
  '나이["{0}"]': 'ages["{0}"]', '나이["{0}"] = {1}': 'ages["{0}"] = {1}', '번호["{0}"]': 'ids["{0}"]', '번호["{0}"] = {1}': 'ids["{0}"] = {1}',
  '나이[\\"{0}\\"]': 'ages[\\"{0}\\"]', '번호[\\"{0}\\"]': 'ids[\\"{0}\\"]',
  '점수 = [70, 85, 90]': 'scores = [70, 85, 90]', '둘째 = 점수[1]': 'second = scores[1]', '둘째 = 85': 'second = 85',
  '점수.append(60)': 'scores.append(60)', '개수 = len(점수)': 'count = len(scores)', '점수[3] = 60 · 길이 4': 'scores[3] = 60 · length 4',
  '나이 = {"민수": 15, "지아": 14}': 'ages = {"Minsu": 15, "Jia": 14}', '답 = 나이["지아"]': 'answer = ages["Jia"]', '답 = 14': 'answer = 14',
  '명단 = ["민수", "하늘", "지아"]': 'names = ["Minsu", "Haneul", "Jia"]', '번호 = {"민수": 1, "하늘": 2, "지아": 3}': 'ids = {"Minsu": 1, "Haneul": 2, "Jia": 3}',
  '위치 = 명단.index("지아")': 'pos = names.index("Jia")', '바로 = 번호["지아"]': 'direct = ids["Jia"]',
  '둘째: {0}': 'second: {0}', '개수: {0}': 'count: {0}', '답: {0}': 'answer: {0}', '위치: {0}': 'pos: {0}', '바로: {0}': 'direct: {0}',
  '답 {0}': 'answer {0}', '점수 {#0}개': '{0} scores',
  // Readouts and badges. Cells here are 50px apart, so the address label is shortened to fit under each cell.
  '{#0}번지': 'addr {0}',
  '{#0}칸 읽음 → {1}': '{0} {0|cell|cells} read → {1}', '{#0}개': '{0}', '{0}으로 바꾸기': 'Change to {0}',
  '세 칸에 적기': 'Write three cells', '세 칸에 차례로 적기': 'Write three cells in order', '키와 값 적기': 'Write keys and values',
  '인덱스 1 읽기': 'Read index 1', '두 번째 값 85': 'Second value 85', '끝에 60 붙이기': 'Attach 60 at the end', '끝에 60 추가': '60 added at the end',
  '칸 세기 = 4': 'Count of cells = 4', '나이 표에 지아: 14': 'Jia: 14 in the ages table', '키 ‘지아’ 조회': 'Look up the key ‘Jia’',
  '민수 칸의 값만 바뀐다': 'Only Minsu\'s cell changes', '새 칸이 생긴다': 'A new cell appears',
  '리스트 3칸 훑기': 'Scan 3 list cells', '키 조회는 해당 칸으로': 'A key lookup goes straight to its cell', '마지막 이름 ‘지아’': 'The last name ‘Jia’',
  '3칸 훑어 찾음': 'Found after scanning 3 cells', '1칸 읽음 → 1': '1 cell read → 1',
  // Step 1
  '리스트 만들기': 'Making a list',
  '리스트는 값을 이웃한 칸에 차례로 담는다': 'A list puts values in neighbouring cells in order',
  '리스트는 값 여러 개를 순서대로 담는 상자입니다. 점수 = [70, 85, 90]이라고 쓰면 이웃한 칸 세 개에 값이 차례로 들어가고, 각 칸은 0번부터 번호(인덱스)로 부릅니다. 첫 칸이 1번이 아니라 0번인 것이 처음엔 헷갈리는 부분입니다.':
    'A list is a box that holds many values in order. Writing scores = [70, 85, 90] puts the values into three neighbouring cells in turn, and each cell is called by a number (an index) starting from 0. That the first cell is number 0, not 1, is confusing at first.',
  '칸 세 개에 점수[0], 점수[1], 점수[2] 이름표가 붙습니다. 점수[1]을 읽으면 두 번째 칸의 85가 CPU로 갑니다.':
    'Three cells get the labels scores[0], scores[1] and scores[2]. Reading scores[1] sends the 85 in the second cell to the CPU.',
  '이웃한 메모리 칸 세 개에 70, 85, 90이 차례로 들어가고, 각각 점수[0], 점수[1], 점수[2]라는 이름이 붙습니다. 점수[1]을 읽어 최고에 적습니다.':
    '70, 85 and 90 go into three neighbouring memory cells in turn, named scores[0], scores[1] and scores[2]. scores[1] is read and written into second.',
  '점수[1]에는 어떤 값이 들어 있을까요?': 'What value is in scores[1]?',
  '인덱스는 0부터 셉니다. 점수[0]이 70, 점수[1]이 85입니다.': 'Indexes count from 0. scores[0] is 70 and scores[1] is 85.',
  // Step 2
  '덧붙이기': 'Appending',
  '리스트는 끝에 새 칸을 이어 붙인다': 'A list attaches a new cell at the end',
  'append는 리스트 맨 끝 다음 칸에 값을 붙입니다. 리스트의 길이(len)는 칸 수이고, 마지막 칸의 인덱스는 길이보다 1 작습니다. 칸이 이웃해 있어서 "몇 번째"로 바로 찾아갈 수 있다는 것이 리스트의 장점입니다.':
    'append attaches a value in the cell right after the end of the list. The length of a list (len) is its number of cells, and the last cell\'s index is one less than the length. Because the cells are neighbours, a list can go straight to "the nth one"; that is its strength.',
  'append(60)을 하면 점수[3] 칸이 새로 생깁니다. 길이는 4이고, 마지막 인덱스는 3입니다.':
    'append(60) makes a new cell, scores[3]. The length is 4 and the last index is 3.',
  '점수 리스트의 끝 다음 칸에 60이 붙어 점수[3]이 됩니다. 이어서 리스트 길이 4를 개수에 적습니다.':
    '60 is attached in the cell after the end of the scores list and becomes scores[3]. Then the list length, 4, is written into count.',
  '60은 어떤 이름의 칸에 들어갈까요?': 'Which named cell does 60 go into?',
  '0, 1, 2 다음 칸이므로 점수[3]입니다.': 'It is the cell after 0, 1 and 2, so scores[3].',
  'len(점수)는?': 'What is len(scores)?',
  '칸이 70, 85, 90, 60 네 개라서 길이는 4입니다. 마지막 인덱스 3보다 1 큽니다.': 'There are four cells, 70, 85, 90 and 60, so the length is 4, one more than the last index, 3.',
  // Step 3
  '딕셔너리': 'Dictionaries',
  '딕셔너리는 이름(키)으로 값을 찾는다': 'A dictionary finds values by name (key)',
  '딕셔너리는 값마다 번호 대신 이름표(키)를 붙여 담습니다. 나이 = {"민수": 15, "지아": 14}이면 "지아"라는 키로 14를 바로 꺼낼 수 있습니다. 순서보다 "무엇에 대한 값인지"가 중요할 때 씁니다.':
    'A dictionary stores each value with a name tag (a key) instead of a number. With ages = {"Minsu": 15, "Jia": 14}, the key "Jia" gets 14 straight away. It is used when "what the value is about" matters more than order.',
  '칸에 나이["민수"], 나이["지아"] 이름표가 붙습니다. 나이["지아"]를 읽으면 그 칸 하나만 CPU로 갑니다.':
    'The cells get the labels ages["Minsu"] and ages["Jia"]. Reading ages["Jia"] sends only that one cell to the CPU.',
  '두 칸에 15와 14가 들어가고 각각 나이["민수"], 나이["지아"]라는 이름이 붙습니다. 키 "지아"로 14를 읽어 답에 적습니다.':
    '15 and 14 go into two cells named ages["Minsu"] and ages["Jia"]. 14 is read with the key "Jia" and written into answer.',
  '나이["지아"]는?': 'What is ages["Jia"]?', '키 "지아"에 붙은 값 14를 꺼냅니다.': 'It takes out 14, the value with the key "Jia".',
  '이 줄을 실행하면 칸이 새로 생길까요?': 'Does this line make a new cell?',
  '이미 있는 키에 값을 넣으면 그 칸의 값만 바뀝니다. 없는 키였다면 새 칸이 생깁니다.': 'Putting a value under a key that exists changes only that cell. A new key would make a new cell.',
  // Step 4
  '찾는 방법 비교': 'Comparing lookups',
  '값으로 찾으면 훑고, 키로 찾으면 바로 간다': 'Looking up by value scans; by key goes straight there',
  '리스트에서 "지아가 몇 번째에 있는지" 모르면 0.6의 순차 탐색처럼 앞에서부터 칸을 하나씩 읽어야 합니다. 딕셔너리는 키에서 칸의 위치를 바로 계산해 한 칸만 읽습니다. 그래서 이름으로 자주 찾는 데이터는 딕셔너리에 담습니다. 위치를 계산하는 방법은 4.5 해시 테이블에서 다룹니다.':
    'If you do not know "where Jia is" in a list, you must read cells one by one from the front, like the linear search in 0.6. A dictionary computes the cell\'s position straight from the key and reads only one cell. So data you often look up by name goes into a dictionary. How the position is computed is covered in 4.5 Hash tables.',
  '리스트에서 "지아"를 찾을 때는 파란 점이 칸 세 개에서 차례로 CPU로 갑니다. 딕셔너리에서는 한 개만 갑니다.':
    'Finding "Jia" in the list sends blue dots from three cells to the CPU in turn. In the dictionary, only one goes.',
  '같은 이름 세 개를 리스트와 딕셔너리에 각각 담습니다. 리스트에서 "지아"를 찾을 때는 세 칸을 모두 읽고, 딕셔너리에서는 키로 한 칸만 읽습니다.':
    'The same three names go into a list and into a dictionary. Finding "Jia" reads all three cells in the list, and only one cell, by key, in the dictionary.',
  '리스트에서 "지아"를 찾으려면 칸을 몇 개 읽어야 할까요?': 'How many cells must be read to find "Jia" in the list?',
  '어디 있는지 모르니 0번부터 차례로 확인해 세 번째 칸에서 찾습니다.': 'Not knowing where it is, it checks from cell 0 in order and finds it in the third cell.',
  '딕셔너리에서 "지아"를 찾으려면 칸을 몇 개 읽어야 할까요?': 'How many cells must be read to find "Jia" in the dictionary?',
  '키 "지아"로 칸 위치를 바로 알 수 있어 한 칸만 읽습니다.': 'The key "Jia" gives the cell\'s position directly, so only one cell is read.',
};
