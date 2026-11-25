// English for 4.1 Time complexity. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// The page writes large counts in 만 (10⁴) and 억 (10⁸); the function entries below turn them into plain English numbers.
// "N번" after a count is dropped.
window.lessonText = (() => {
const englishCount = (value) => value >= 1e9 ? `${+(value / 1e9).toFixed(1)} billion` : value >= 1e6 ? `${+(value / 1e6).toFixed(1)} million` : value.toLocaleString('en-US');
const fromKorean = (unit) => (n) => englishCount(Number(n.replace(/,/g, '')) * unit);
return {
  '{#0}만': fromKorean(1e4), '{#0}억': fromKorean(1e8),
  // Page
  '시간 복잡도 · 레슨 4.1': 'Time complexity · Lesson 4.1',
  '데이터 크기를 바꿔 가며 O(1), O(log n), O(n), O(n²) 알고리즘이 하는 일의 횟수를 세고, 데이터가 늘 때 일이 얼마나 느는지 비교해 보세요.':
    'Change the data size and count how much work O(1), O(log n), O(n) and O(n²) algorithms do, and compare how the work grows as the data grows.',
  '데이터가 10배 늘면 일은 몇 배 늘어날까요? 데이터 크기를 바꿔 가며 네 알고리즘이 하는 일의 횟수를 세어 보세요.':
    'If the data grows 10 times, how many times more work is there? Change the data size and count the work four algorithms do.',
  '알고리즘이 데이터 상자를 읽으며 일의 횟수 기둥이 자라는 장면': 'Algorithms reading data boxes while towers of work counts grow',
  '데이터와 일의 양': 'Data and amount of work', '데이터 상자': 'Data boxes', '지금 읽는 상자': 'Box being read now', '이번 n에 쓰지 않는 상자': 'Box not used for this n',
  '데이터 크기 고르기': 'Choose the data size', '데이터 n': 'Data n', '알고리즘 실행': 'Run an algorithm', '실행': 'Run', '모두 실행': 'Run all',   '실행 기록 · 횟수': 'Run log · counts', '횟수 표 · 1초에 1억 번이라면 걸리는 시간': 'Count table · time taken at 100 million a second',
  '이 단계의 문제를 모두 풀었습니다. n과 알고리즘을 바꿔 가며 더 실행해 보세요.': 'You solved every problem in this step. Keep running with other n and algorithms.',
  // Algorithms and readouts
  '첫 값 읽기': 'Read first value', '모두 더하기': 'Add them all', '같은 값 찾기': 'Find a duplicate', '이진 탐색': 'Binary search',
  '{#0}번': '{0}', '{0}번': '{0}', '{0}번 ↑ 넘침': '{0} ↑ overflow', '{0}번 · {1}': '{0} · {1}',
  '1ms 미만': 'under 1 ms', '{#0}분': '{0} min', '{#0}시간': '{0} h',
  '{0}({1}), n = {#2}: {3}번': '{0} ({1}), n = {2}: {3}',
  '{0}: {#1}번째 비교 · {#2}번과 {#3}번 상자': '{0}: comparison {1} · boxes {2} and {3}', '{0}: {#1}번째 읽기 · {#2}번 상자': '{0}: read {1} · box {2}',
  'n = {#0}. 상자 {#1}개로 실행해 보세요.': 'n = {0}. Run it with {1} boxes.',
  '{#0}배': '{0} times', '그대로 1번': 'Still 1', '20번': '20 times', '1000번': '1,000 times', '50만 번': '500,000 times', '32번': '32 times',
  // Step 1
  '상수와 선형': 'Constant and linear', '상자 n개': 'n boxes', '모두 한 번씩 읽기': 'Read each one once', 'n이 2배면 읽기도 2배': 'Twice the n, twice the reads',
  '일의 양은 데이터 크기 n에 따라 늘어난다': 'The amount of work grows with the data size n',
  '알고리즘이 빠른지 느린지는 초 단위보다 "데이터가 늘면 일이 얼마나 느나"로 비교합니다. 첫 값 읽기는 값이 4개든 100만 개든 한 번이면 끝납니다(O(1), 상수 시간). 모두 더하기는 값마다 한 번씩 읽어야 하므로 n이 2배면 일도 2배입니다(O(n), 선형 시간).':
    'Whether an algorithm is fast or slow is compared not in seconds but by "how much more work when the data grows". Reading the first value takes one step whether there are 4 values or a million (O(1), constant time). Adding them all must read each value once, so twice the n means twice the work (O(n), linear time).',
  '"모두 더하기"를 n = 8과 16으로 실행해 보면 읽기가 8번, 16번으로 기둥이 두 배가 됩니다. "첫 값 읽기"의 기둥은 n을 바꿔도 그대로입니다. 0.6의 선형 탐색이 O(n)입니다.':
    'Run "Add them all" with n = 8 and 16 and the reads go 8, then 16: the tower doubles. The "Read first value" tower stays the same whatever n is. The linear search in 0.6 is O(n).',
  '왼쪽에 값 n개가 상자로 놓여 있고, 오른쪽에 알고리즘이 한 일의 횟수를 나타내는 기둥이 있습니다. 실행하면 점이 상자를 하나씩 읽고 기둥이 자랍니다.':
    'On the left, n values sit in boxes; on the right are towers for the number of steps each algorithm took. When run, a dot reads the boxes one by one and the tower grows.',
  '"모두 더하기"를 n = 8과 n = 16으로 실행해 보세요.': 'Run "Add them all" with n = 8 and n = 16.', '8번과 16번. n이 2배면 일도 2배입니다.': '8 and 16. Twice the n, twice the work.',
  'n이 4에서 32로 8배가 되면 "첫 값 읽기"의 읽기 횟수는?': 'When n grows 8 times, from 4 to 32, how many reads does "Read first value" take?',
  '첫 칸 하나만 읽으므로 데이터 크기와 상관없습니다. 이것이 O(1)입니다.': 'It reads only the first cell, so the data size does not matter. This is O(1).',
  // Step 2
  '제곱': 'Squared', '값 4개': '4 values', '서로 다른 쌍 비교': 'Compare every different pair', '3 + 2 + 1 = 6쌍': '3 + 2 + 1 = 6 pairs',
  '모든 쌍을 보면 일이 제곱으로 는다': 'Looking at every pair makes the work grow as a square',
  '값들 중에 같은 것이 있는지 가장 단순하게 찾으려면 모든 두 값의 쌍을 비교합니다. n개에서 쌍은 n × (n − 1) ÷ 2개라, n이 2배면 비교는 약 4배, 10배면 약 100배가 됩니다. 이중 반복문(1.2의 반복 안의 반복)이 흔히 이런 모양입니다(O(n²)).':
    'The simplest way to find whether any values are the same is to compare every pair of two values. n values make n × (n − 1) ÷ 2 pairs, so twice the n means about 4 times the comparisons, and 10 times means about 100 times. Nested loops (a loop inside a loop, as in 1.2) often look like this (O(n²)).',
  'n = 8이면 28번, 16이면 120번, 32면 496번. 기둥이 금세 화면을 넘습니다. 데이터가 작을 때는 괜찮아 보여도, 커지면 가장 먼저 문제가 되는 것이 제곱 알고리즘입니다.':
    '28 at n = 8, 120 at 16, 496 at 32. The tower soon goes off the screen. A squared algorithm looks fine on small data, but it is the first to cause trouble as data grows.',
  '값 n개와 기둥이 있습니다. 실행하면 두 상자를 동시에 비추며 모든 쌍을 비교하고, 기둥이 빠르게 자랍니다.': 'There are n values and a tower. When run, it lights two boxes at a time to compare every pair, and the tower grows fast.',
  '"같은 값 찾기"를 n = 8과 n = 16으로 실행해 보세요.': 'Run "Find a duplicate" with n = 8 and n = 16.', '28번에서 120번으로 약 4배가 됐습니다.': 'From 28 to 120: about 4 times.',
  'n이 10배가 되면 "같은 값 찾기"의 비교 횟수는 약 몇 배일까요?': 'If n grows 10 times, about how many times more comparisons does "Find a duplicate" make?',
  '쌍의 수는 n²에 비례해서 10 × 10 = 100배입니다.': 'The number of pairs is in proportion to n², so 10 × 10 = 100 times.',
  // Step 3
  '로그': 'Logarithmic', '정렬된 구간 16칸': 'A sorted range of 16 cells', '가운데와 비교': 'Compare with the middle', '남은 구간은 최대 8칸': 'At most 8 cells remain',
  '절반씩 버리면 일이 아주 조금 는다': 'Throwing away half each time makes the work grow very little',
  '정렬된 값에서 이진 탐색(0.6)은 가운데를 보고 절반을 버리기를 되풀이합니다. 그래서 n이 2배가 되어도 비교는 한 번만 늘어납니다. 2를 몇 번 곱해야 n이 되는지를 log₂ n이라 하고, 이런 알고리즘을 O(log n)이라 합니다. 100만 개도 20번이면 찾습니다.':
    'On sorted values, binary search (0.6) repeatedly looks at the middle and throws away half. So even when n doubles, the comparisons grow by just one. How many times 2 must be multiplied to reach n is called log₂ n, and such algorithms are called O(log n). Even a million values are searched in 20 steps.',
  'n = 4, 8, 16, 32에서 비교는 3, 4, 5, 6번입니다. 선형의 4, 8, 16, 32번과 기둥을 나란히 보면 차이가 뚜렷합니다. 데이터를 정렬해 두는 수고(4.4)가 이 속도를 삽니다.':
    'At n = 4, 8, 16, 32 the comparisons are 3, 4, 5, 6. Next to linear\'s 4, 8, 16, 32, the towers show the difference clearly. The effort of keeping data sorted (4.4) buys this speed.',
  '정렬된 값 n개와 기둥이 있습니다. 실행하면 가운데 상자를 비추고 범위를 절반으로 줄이며 마지막 값을 찾습니다.': 'There are n sorted values and a tower. When run, it lights the middle box and halves the range until it finds the last value.',
  '"이진 탐색"을 n = 16과 n = 32로 실행해 보세요.': 'Run "Binary search" with n = 16 and n = 32.', '5번과 6번. n이 2배가 되어도 한 번만 늘었습니다.': '5 and 6. n doubled, but it grew by just one.',
  'n이 100만이면 이진 탐색은 대략 몇 번 비교할까요?': 'With n = a million, about how many comparisons does binary search make?',
  '2를 20번 곱하면 약 100만(1,048,576)이라 20번이면 됩니다.': 'Multiplying 2 twenty times gives about a million (1,048,576), so 20 is enough.',
  // Step 4
  '한눈에 비교': 'Side by side', '데이터 100개': '100 values', '전체 쌍 비교': 'Compare every pair', '4,950회 · 첫 값 읽기는 1회': '4,950 · Read first value: 1',
  'n이 커질수록 차이는 걷잡을 수 없다': 'As n grows, the gap gets out of hand',
  '네 알고리즘을 같은 n에서 나란히 놓아 봅니다. n이 작을 때는 모두 비슷해 보이지만, n이 커지면 O(n²)이 다른 것들을 압도합니다. 아래 표는 n = 10부터 100만까지의 횟수이고, 1초에 1억 번 계산하는 컴퓨터라면 얼마나 걸리는지도 함께 적었습니다.':
    'Put the four algorithms side by side at the same n. With small n they all look alike, but as n grows O(n²) dwarfs the rest. The table below gives the counts from n = 10 up to a million, along with how long a computer doing 100 million steps a second would take.',
  'n = 100만이면 O(log n)은 20번, O(n)은 100만 번(0.01초), O(n²)은 약 5000억 번(1시간 반 가까이)입니다. 그래서 알고리즘을 고를 때 상수보다 증가하는 모양(빅오)을 먼저 봅니다.':
    'At n = a million, O(log n) is 20 steps, O(n) a million (0.01 seconds), and O(n²) about 500 billion (nearly an hour and a half). That is why choosing an algorithm starts with the shape of its growth (big O) before any constants.',
  '값 n개 옆에 네 알고리즘의 기둥이 나란히 서 있습니다. 실행하면 네 알고리즘이 차례로 돌고, 화면을 넘는 기둥은 위가 잘려 화살표로 표시됩니다.':
    'The towers of four algorithms stand side by side next to n values. When run, the four algorithms go in turn, and a tower that goes off the screen is cut at the top and marked with an arrow.',
  'n = 32에서 "모두 실행"을 눌러 네 기둥을 비교해 보세요.': 'At n = 32, press "Run all" and compare the four towers.', '1, 6, 32, 496번. 같은 n인데 100배 넘게 차이 납니다.': '1, 6, 32, 496. The same n, yet they differ by more than 100 times.',
  'n = 100만에서 "같은 값 찾기"는 1초에 1억 번 계산해도 얼마나 걸릴까요?': 'At n = a million, how long does "Find a duplicate" take even at 100 million steps a second?',
  '1초 안': 'Within a second', '1시간 넘게': 'Over an hour', '100년': '100 years',
  '약 5000억 번 ÷ 1억 = 5000초, 1시간 23분쯤입니다. O(n log n) 방법(4.4)으로 바꾸면 1초도 안 걸립니다.': 'About 500 billion ÷ 100 million = 5,000 seconds, about 1 hour 23 minutes. Switch to an O(n log n) method (4.4) and it takes under a second.',
};
})();
