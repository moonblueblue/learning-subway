// English for 6.4 Relational databases and SQL. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Data in the tables: students 민지 Minji, 서준 Seojun, 하윤 Hayun, 도윤 Doyun, 지우 Jiwoo, 예준 Yejun;
// subjects 수학 math, 과학 science, 음악 music (also inside the SQL text).
window.lessonText = {
  // Page
  '관계형 데이터베이스와 SQL · 레슨 6.4': 'Relational databases and SQL · Lesson 6.4',
  '표에 담긴 데이터를 SQL로 읽고, WHERE로 거르고, JOIN으로 두 표를 잇고, GROUP BY로 묶어 세는 과정을 데이터베이스 엔진을 따라 한 정거장씩 따라가 보세요.':
    'Follow the database engine one station at a time as it reads data in tables with SQL, filters with WHERE, joins two tables with JOIN, and groups and counts with GROUP BY.',
  '표로 저장한 데이터는 질의 하나로 어떻게 찾아질까요? SQL 한 줄이 데이터베이스 엔진을 지나 표를 읽고 결과로 돌아오기까지를 따라가 보세요.':
    'How is data stored in tables found with a single query? Follow one line of SQL through the database engine as it reads the tables and comes back as a result.',
  'SQL 질의가 데이터베이스 엔진을 거쳐 표를 읽고 결과로 돌아오는 장면': 'An SQL query going through the database engine, reading tables and coming back as a result',
  '질의가 지나가는 정거장': 'Stations the query passes through', '"다음 단계"를 누르면 코드가 오른쪽으로 움직입니다.': 'Press "Next step" and the code moves to the right.', '"다음 단계"를 눌러 질의를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the query one station at a time. Prediction questions come up along the way.',
  '질의와 결과': 'Query and result', '데이터베이스 엔진': 'Database engine', '파일': 'File', '도구': 'Tool', '오류': 'Error', '질의': 'Query', 'SQL 질의': 'SQL query', 'DB 엔진': 'DB engine', 'students 표': 'students table', 'enrollments 표': 'enrollments table',
  // Legs and badges
  'SQL 질의 → DB 엔진': 'SQL query → DB engine', 'DB 엔진 → students 표': 'DB engine → students table', 'DB 엔진 → enrollments': 'DB engine → enrollments', 'students 표 → 결과': 'students table → result', 'students → 결과': 'students → result', 'enrollments → 결과': 'enrollments → result',
  '읽기': 'Read', '한 행씩': 'Row by row', 'id로 잇기': 'Join by id', '묶음에 넣기': 'Into groups', '질의 해석': 'Query parsed', '엔진 · 질의 읽기': 'Engine · reading query',
  '6행': '6 rows', '2행': '2 rows', '3행': '3 rows', '4행': '4 rows', '6행 × 3열': '6 rows × 3 cols', '3행 × 1열': '3 rows × 1 col', '3행 × 2열': '3 rows × 2 cols', '6행 읽음': '6 rows read', '6행 확인': '6 checked', '6행 모두': 'All 6 rows', '묶음 3개': '3 groups', '이름 3개': '3 names',
  'students 표 · 6행': 'students table · 6 rows', 'students 표 · 3행': 'students table · 3 rows', 'students · 3행': 'students · 3 rows', 'enrollments · 3행': 'enrollments · 3 rows',
  '조건 grade = 2': 'grade = 2', '전체 스캔': 'Full scan', "subject = '수학'": "subject = 'math'", 'subject로 묶기': 'Group by subject', '묶음마다 행 수를 셈': 'Counts rows per group', 'students에서 이름 찾기': 'Look up names in students',
  // Query lines
  'SELECT *        → 모든 열': 'SELECT *        → all columns', 'FROM students   → students 표에서': 'FROM students   → from the students table', 'SELECT name     → name 열만': 'SELECT name     → only the name column', 'WHERE grade = 2 → 2학년인 행만': 'WHERE grade = 2 → only rows in year 2',
  "WHERE enrollments.subject = '수학';": "WHERE enrollments.subject = 'math';", "subject가 '수학'인 것만": "only where subject is 'math'", '두 표를 id = student_id로 잇고': 'join the two tables on id = student_id', 'subject가 같은 행끼리 묶고': 'group rows with the same subject',
  // Table rows
  '1  | 민지 | 2': '1  | Minji | 2', '2  | 서준 | 1': '2  | Seojun | 1', '3  | 하윤 | 2': '3  | Hayun | 2', '4  | 도윤 | 3': '4  | Doyun | 3', '5  | 지우 | 2': '5  | Jiwoo | 2', '6  | 예준 | 1': '6  | Yejun | 1',
  '1 민지 2 → ✓': '1 Minji 2 → ✓', '2 서준 1 → ✗': '2 Seojun 1 → ✗', '3 하윤 2 → ✓': '3 Hayun 2 → ✓', '4 도윤 3 → ✗': '4 Doyun 3 → ✗', '5 지우 2 → ✓': '5 Jiwoo 2 → ✓', '6 예준 1 → ✗': '6 Yejun 1 → ✗',
  '민지': 'Minji', '하윤': 'Hayun', '지우': 'Jiwoo',
  '1 | 수학  ✓': '1 | math  ✓', '1 | 과학': '1 | science', '3 | 수학  ✓': '3 | math  ✓', '4 | 음악': '4 | music', '5 | 수학  ✓': '5 | math  ✓', '6 | 과학': '6 | science',
  'id 1 → 민지': 'id 1 → Minji', 'id 3 → 하윤': 'id 3 → Hayun', 'id 5 → 지우': 'id 5 → Jiwoo', '민지 | 수학': 'Minji | math', '하윤 | 수학': 'Hayun | math', '지우 | 수학': 'Jiwoo | math',
  '수학 ← 1, 3, 5': 'math ← 1, 3, 5', '과학 ← 1, 6': 'science ← 1, 6', '음악 ← 4': 'music ← 4', '수학 | 3': 'math | 3', '과학 | 2': 'science | 2', '음악 | 1': 'music | 1',
  // Step 1
  '표': 'Tables',
  '데이터는 이름 붙은 칸을 가진 표에 줄로 담긴다': 'Data sits in rows of a table with named columns',
  '관계형 데이터베이스는 데이터를 표(테이블)에 담습니다. 열(칼럼)은 id, name, grade처럼 이름과 종류가 정해진 칸이고, 행(로우)은 학생 한 명 같은 기록 하나입니다. 원하는 것은 SQL이라는 언어로 "무엇을" 달라고만 말하고, "어떻게" 찾을지는 데이터베이스 엔진이 정합니다.':
    'A relational database keeps data in tables. A column is a field with a set name and type, such as id, name and grade, and a row is one record, such as one student. You say only "what" you want in a language called SQL, and the database engine decides "how" to find it.',
  'SELECT * FROM students는 students 표의 모든 열, 모든 행을 달라는 뜻입니다. 결과도 표 모양으로 돌아옵니다.': 'SELECT * FROM students means "give me every column and every row of the students table". The result comes back shaped as a table too.',
  '왼쪽부터 SQL 질의, 데이터베이스 엔진, students 표, 결과가 한 줄로 놓여 있습니다. 질의가 엔진을 지나 표를 읽고 결과로 나옵니다.': 'From the left stand the SQL query, the database engine, the students table and the result. The query passes the engine, reads the table and comes out as the result.',
  '엔진이 질의를 읽고(6.3의 파서처럼) 무엇을 원하는지 알아냅니다.': 'The engine reads the query (like the parser of 6.3) and works out what is wanted.', '엔진이 students 표를 읽습니다. 한 줄이 학생 한 명입니다.': 'The engine reads the students table. One row is one student.', '모든 행이 결과로 돌아옵니다.': 'Every row comes back as the result.',
  '이 표에서 "3 | 하윤 | 2" 한 줄을 무엇이라 부를까요?': 'In this table, what is the line "3 | Hayun | 2" called?', '행(기록 하나)': 'A row (one record)', '열(칸 이름)': 'A column (field name)',
  '행은 기록 하나, 열은 id나 grade처럼 모든 행이 함께 가지는 칸입니다.': 'A row is one record; a column is a field every row has, like id or grade.',
  // Step 2
  '거르기': 'Filtering',
  'WHERE로 조건에 맞는 행만 고른다': 'WHERE keeps only the rows that match a condition',
  'WHERE 뒤에 조건을 쓰면 맞는 행만 남깁니다. SELECT name을 쓰면 열도 name 하나만 고릅니다. 엔진은 표의 행을 하나씩 꺼내 조건을 확인합니다. 지금처럼 다른 도움 없이 모든 행을 훑는 것을 전체 스캔이라 합니다.':
    'A condition after WHERE keeps only the matching rows. SELECT name picks just the one column name too. The engine takes the table\'s rows out one at a time and checks the condition. Going through every row with no other help, as here, is called a full scan.',
  '2학년 3명을 찾으려고 6행을 모두 확인했습니다. 행이 백만 개면 백만 번 확인해야 합니다. 6.5의 인덱스가 이 문제를 풉니다.': 'To find the 3 students in year 2, all 6 rows were checked. With a million rows, it takes a million checks. The index of 6.5 solves this.',
  '같은 장면입니다. 엔진이 students 표의 행을 하나씩 조건과 비교합니다.': 'The same scene. The engine compares the students table\'s rows with the condition one at a time.',
  '엔진이 어떤 행과 어떤 열을 원하는지 알아냅니다.': 'The engine works out which rows and which columns are wanted.', '엔진이 행을 하나씩 꺼내 grade가 2인지 확인합니다.': 'The engine takes out rows one at a time and checks whether grade is 2.', '조건에 맞는 세 행의 name만 돌아옵니다.': 'Only the name of the three matching rows comes back.',
  '2학년 3명을 찾으려고 엔진은 몇 행을 확인할까요?': 'To find the 3 students in year 2, how many rows does the engine check?',
  '표가 grade 순으로 정리돼 있지 않아, 어디에 2학년이 있는지 모르면 모든 행을 봐야 합니다.': 'The table is not ordered by grade, so without knowing where the year-2 students are, every row must be looked at.',
  'WHERE grade >= 2로 바꾸면 결과는 몇 행일까요?': 'Change it to WHERE grade >= 2 and how many rows come back?', '2학년 셋(민지, 하윤, 지우)과 3학년 하나(도윤)입니다.': 'Three in year 2 (Minji, Hayun, Jiwoo) and one in year 3 (Doyun).',
  // Step 3
  '잇기': 'Joining',
  'JOIN으로 두 표를 같은 값으로 잇는다': 'JOIN links two tables by a shared value',
  '학생이 듣는 과목을 students 표에 함께 적으면, 과목이 여럿인 학생의 이름이 여러 번 반복됩니다. 그래서 과목은 enrollments 표에 따로 두고 student_id로 학생을 가리킵니다. 함께 볼 때는 JOIN으로 students.id와 enrollments.student_id가 같은 행끼리 이어 붙입니다. 이것이 "관계형"이라는 이름의 뜻입니다.':
    'If the subjects students take were written in the students table too, a student taking several subjects would have their name repeated many times. So subjects go in a separate enrollments table that points to the student with student_id. To see them together, JOIN attaches rows where students.id equals enrollments.student_id. That is what "relational" means.',
  '수학을 듣는 학생 id(1, 3, 5)를 enrollments에서 찾고, 그 id로 students에서 이름을 찾아 이어 붙였습니다. 이름은 students 한곳에만 있으니, 이름을 바꿀 때도 한 행만 고치면 됩니다(6.1의 "한 곳만 고치기").': 'It found the ids of students taking math (1, 3, 5) in enrollments, then looked up their names in students by those ids and joined them. The names live only in students, so renaming someone means fixing just one row (the "fix in one place" of 6.1).',
  '왼쪽부터 SQL 질의, DB 엔진, students 표, enrollments 표, 결과가 놓여 있습니다. 엔진이 두 표를 오가며 같은 id끼리 잇습니다.': 'From the left stand the SQL query, the DB engine, the students table, the enrollments table and the result. The engine goes between the two tables joining rows with the same id.',
  '엔진이 두 표를 어떤 칸으로 이을지 읽습니다.': 'The engine reads which columns join the two tables.', '엔진이 enrollments에서 수학을 듣는 student_id를 찾습니다.': 'The engine finds the student_ids taking math in enrollments.', '찾은 id로 students 표에서 이름을 찾습니다.': 'It looks up names in the students table by the ids found.', '이어 붙인 세 행이 돌아옵니다.': 'The three joined rows come back.',
  '두 표를 잇는 데 쓰는 칸은?': 'Which columns join the two tables?', 'students.id와 enrollments.student_id': 'students.id and enrollments.student_id', 'students.name과 enrollments.subject': 'students.name and enrollments.subject',
  'student_id는 students 표의 id를 가리키는 값입니다. 같은 값끼리 행을 이어 붙입니다.': 'student_id is a value pointing to an id in the students table. Rows with equal values are joined.',
  '과목을 students 표에 "민지, 수학", "민지, 과학"처럼 함께 적었다면 무엇이 문제일까요?': 'If subjects were written into the students table, like "Minji, math" and "Minji, science", what would go wrong?',
  '민지의 이름과 학년이 여러 줄에 반복되어 고칠 때 어긋날 수 있다': 'Minji\'s name and year repeat on several rows and can disagree after an edit', '아무 문제 없다': 'Nothing',
  '한 줄만 고치고 다른 줄을 빠뜨리면 같은 학생의 학년이 두 가지가 됩니다. 표를 나누면 한곳에만 적습니다.': 'Fix one row and miss another, and the same student has two different years. Splitting the tables writes it in one place only.',
  'student_id 1, 3, 5가 수학을 듣습니다.': 'student_ids 1, 3 and 5 take math.',
  // Step 4
  '묶어 세기': 'Grouping and counting',
  'GROUP BY로 같은 값끼리 묶어 센다': 'GROUP BY groups equal values and counts them',
  '"과목마다 몇 명이 듣나?"처럼 묶어서 세거나 더하는 질문도 SQL 한 줄로 합니다. GROUP BY subject는 subject가 같은 행끼리 한 묶음으로 모으고, COUNT(*)는 묶음마다 행 수를 셉니다. SUM, AVG, MAX도 같은 방식으로 씁니다.':
    'Questions that group and count or add up, like "how many take each subject?", are one line of SQL too. GROUP BY subject gathers rows with the same subject into one group, and COUNT(*) counts the rows in each group. SUM, AVG and MAX work the same way.',
  'enrollments 6행이 수학 3, 과학 2, 음악 1로 묶였습니다. 반복문을 직접 쓰지 않고 "무엇을" 원하는지만 말하면, 엔진이 4.5의 해시 테이블 같은 방법으로 묶어 줍니다.': 'The 6 enrollments rows were grouped into math 3, science 2, music 1. Without writing a loop yourself, just say "what" you want and the engine groups them with methods like the hash table of 4.5.',
  '왼쪽부터 SQL 질의, DB 엔진, enrollments 표, 결과가 놓여 있습니다. 엔진이 같은 과목끼리 묶어 셉니다.': 'From the left stand the SQL query, the DB engine, the enrollments table and the result. The engine groups and counts rows by subject.',
  '엔진이 무엇으로 묶을지 읽습니다.': 'The engine reads what to group by.', '엔진이 행을 하나씩 꺼내 과목 묶음에 넣습니다.': 'The engine takes out rows one at a time and puts them into subject groups.', '묶음마다 센 값이 한 행씩 돌아옵니다.': 'Each group\'s count comes back as one row.',
  '수학 묶음에는 몇 행이 들어갈까요?': 'How many rows go into the math group?',
  '"학년마다 학생 수"를 구하는 질의는?': 'Which query gives "the number of students in each year"?',
  'grade가 같은 행끼리 묶고 묶음마다 셉니다. 결과는 1학년 2, 2학년 3, 3학년 1입니다.': 'It groups rows with the same grade and counts each group. The result is year 1: 2, year 2: 3, year 3: 1.',
};
