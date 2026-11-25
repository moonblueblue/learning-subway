// English for 4.4 Sorting. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '정렬 · 레슨 4.4': 'Sorting · Lesson 4.4',
  '같은 막대를 선택 정렬, 삽입 정렬, 병합 정렬로 정렬하며 비교와 교환 횟수를 세고, 입력 모양과 크기에 따라 어떻게 달라지는지 비교해 보세요.':
    'Sort the same bars with selection sort, insertion sort and merge sort, count the comparisons and swaps, and compare how they change with the shape and size of the input.',
  '여러 정렬 방법은 비교와 교환을 얼마나 할까요? 같은 막대를 세 가지 방법으로 정렬하며 횟수를 세어 보세요.':
    'How many comparisons and swaps do different sorting methods make? Sort the same bars three ways and count.',
  '높이가 다른 막대들이 비교와 교환으로 정렬되는 장면': 'Bars of different heights being sorted by comparisons and swaps',
  '막대 정렬': 'Sorting bars', '비교 중': 'Comparing', '자리 확정': 'Place settled', '합치는 범위': 'Range being merged',   '입력 고르기': 'Choose the input', '입력': 'Input', '정렬 시작': 'Start sorting', '모두 실행': 'Run all', '입력을 고르고 정렬을 시작해 보세요.': 'Choose an input and start sorting.',
  '정렬 기록': 'Sort log', '정렬을 끝까지 하면 여기에 쌓입니다': 'Finished sorts pile up here', '정렬': 'Sort', '비교': 'Comparisons', '교환': 'Swaps', '교환·옮기기': 'Swaps · copies',
  '교환·옮겨 적기': 'Swaps · copies', '옮겨 적기': 'Copies',
  '이 단계의 문제를 모두 풀었습니다. 입력과 정렬을 바꿔 가며 더 해 보세요.': 'You solved every problem in this step. Keep trying other inputs and sorts.',
  // Algorithms, inputs and readouts
  '선택 정렬': 'Selection sort', '삽입 정렬': 'Insertion sort', '병합 정렬': 'Merge sort', '선택': 'Selection', '삽입': 'Insertion', '병합': 'Merge',
  'O(n²), 거의 정렬되면 O(n)': 'O(n²), O(n) when nearly sorted',
  '무작위': 'Random', '거의 정렬됨': 'Nearly sorted', '거꾸로': 'Reversed', '입력: {0}': 'Input: {0}',
  '{0} 시작': 'Run {0}', '이동 전 2, 5, 1, 7에서 이동 후 1, 2, 5, 7로 바뀝니다. 화살표는 같은 값의 출발 칸과 도착 칸을 연결합니다.': '2, 5, 1, 7 before becomes 1, 2, 5, 7 after. Arrows join each value\'s starting and ending cells.',
  '비교: {0}와 {1}': 'Compare: {0} and {1}', '교환: {0}와 {1}의 자리를 바꿈': 'Swap: {0} and {1} trade places',
  '옮겨 적기: {#0}번 자리에 {1}': 'Copy: {1} into place {0}', '{#0}–{#1}번 자리의 두 묶음을 합칩니다.': 'Merging the two groups in places {0}–{1}.',
  '{0} 끝 · {1} {#2}개 · 비교 {#3}번, 교환 {#4}번': '{0} done · {1}, {2} values · {3} comparisons, {4} swaps',
  '{0} 끝 · {1} {#2}개 · 비교 {#3}번, 옮겨 적기 {#4}번': '{0} done · {1}, {2} values · {3} comparisons, {4} copies',
  '{#0}번': '{0}', '번': '', '{#0}회': '{0}', '{#0}회 비교': '{0} comparisons', '{0} {#1}개': '{0}, {1}',
  // Step 1
  '선택 전': 'Before selection', '최솟값을 앞으로': 'Smallest to the front', '막대 8개': '8 bars', '남은 구간의 최솟값을 맨 앞으로': 'The smallest of the rest to the front', '첫 막대부터 자리 확정': 'Places settled from the first bar',
  '선택 정렬: 가장 작은 1과 맨 앞의 5를 교환': 'Selection sort: swap the smallest, 1, with 5 at the front',
  '이동 전': 'Before', '이동 후': 'After',
  '이동 전 5, 2, 7, 1에서 이동 후 1, 2, 7, 5로 바뀝니다. 화살표는 같은 값의 출발 칸과 도착 칸을 연결합니다.': '5, 2, 7, 1 before becomes 1, 2, 7, 5 after. Arrows join each value\'s starting and ending cells.',
  '가장 작은 것을 골라 앞으로 보낸다': 'Pick the smallest and send it to the front',
  '선택 정렬은 아직 정렬되지 않은 부분에서 가장 작은 값을 찾아 맨 앞과 바꾸기를 되풀이합니다. 가장 작은 값을 찾으려면 남은 값을 모두 봐야 하므로, 값이 n개면 비교가 n × (n − 1) ÷ 2번입니다. 입력이 어떤 모양이든 비교 횟수는 같습니다.':
    'Selection sort repeatedly finds the smallest value in the unsorted part and swaps it with the front. Finding the smallest means looking at every value left, so n values take n × (n − 1) ÷ 2 comparisons. The number of comparisons is the same whatever shape the input has.',
  '노란 막대 둘이 비교, 주황이 교환, 초록이 자리가 확정된 값입니다. 8개면 비교 28번, 교환은 많아야 7번입니다. 4.1의 "같은 값 찾기"처럼 O(n²)입니다.':
    'Two yellow bars are being compared, orange are being swapped, and green values have settled in place. With 8 there are 28 comparisons and at most 7 swaps. Like "Find a duplicate" in 4.1, it is O(n²).',
  '높이가 다른 막대 여덟 개가 한 줄로 서 있습니다. 정렬이 진행되며 두 막대를 비교하고, 자리를 바꾸고, 왼쪽부터 초록으로 확정됩니다.':
    'Eight bars of different heights stand in a row. As sorting goes on, two bars are compared, swapped, and settled green from the left.',
  '무작위 입력으로 "정렬 시작"을 눌러 끝까지 보세요.': 'With the random input, press "Start sorting" and watch to the end.', '비교 28번으로 정렬했습니다.': 'Sorted with 28 comparisons.',
  '이미 정렬된 입력이면 선택 정렬의 비교는 몇 번일까요?': 'With input already sorted, how many comparisons does selection sort make?', '7번': '7', '28번': '28', '0번': '0',
  '가장 작은 값인지 확인하려면 어차피 남은 값을 모두 봐야 합니다.': 'To be sure a value is the smallest, it has to look at every value left anyway.',
  // Step 2
  '삽입 전': 'Before inserting', '{#0} 삽입 후': 'After inserting {0}', '정렬된 부분 뒤에 작은 값': 'A small value after the sorted part', '큰 값을 오른쪽으로 밀고 삽입': 'Push larger values right and insert', '정렬 구간이 한 칸 증가': 'The sorted part grows by one',
  '삽입 정렬: 1보다 큰 값을 한 칸씩 민다': 'Insertion sort: push the values larger than 1 one place each',
  '이동 전 2, 5, 7, 1에서 이동 후 1, 2, 5, 7로 바뀝니다. 화살표는 같은 값의 출발 칸과 도착 칸을 연결합니다.': '2, 5, 7, 1 before becomes 1, 2, 5, 7 after. Arrows join each value\'s starting and ending cells.',
  '정렬된 구간: 2 · 5 · 7': 'Sorted part: 2 · 5 · 7',
  '하나씩 꺼내 알맞은 자리에 끼운다': 'Take them one at a time and slot each into place',
  '삽입 정렬은 카드를 손에 정리하듯, 왼쪽의 정렬된 부분에 다음 값을 하나씩 끼워 넣습니다. 끼울 자리를 찾을 때까지 왼쪽으로 한 칸씩 바꿔 갑니다. 거꾸로 된 입력에서는 매번 끝까지 가야 하지만, 거의 정렬된 입력에서는 금방 자리를 찾습니다.':
    'Insertion sort, like arranging cards in your hand, slots the next value into the sorted part on the left one at a time. It swaps one place to the left until it finds its spot. On reversed input it must go all the way every time, but on nearly sorted input it finds its spot quickly.',
  '거의 정렬됨에서는 비교 9번, 교환 2번이면 끝나지만 거꾸로에서는 비교와 교환이 각각 28번입니다. 같은 알고리즘도 입력 모양에 따라 일의 양이 크게 다릅니다.':
    'Nearly sorted takes just 9 comparisons and 2 swaps, but reversed takes 28 of each. The same algorithm does very different amounts of work depending on the input\'s shape.',
  '막대 여덟 개가 있습니다. 왼쪽의 초록 부분이 정렬된 부분이고, 다음 막대가 왼쪽으로 한 칸씩 자리를 바꾸며 들어갑니다.': 'There are eight bars. The green part on the left is sorted, and the next bar works its way in, swapping one place to the left at a time.',
  '"거의 정렬됨"으로 정렬해 보세요.': 'Sort the "Nearly sorted" input.', '비교 9번이면 끝났습니다.': 'It finished in 9 comparisons.',
  '"거꾸로"로 정렬해 보세요.': 'Sort the "Reversed" input.', '비교와 교환이 각각 28번. 가장 나쁜 경우입니다.': '28 comparisons and 28 swaps: the worst case.',
  // Step 3
  '두 묶음': 'Two groups', '병합 후': 'After merging', '정렬된 두 묶음': 'Two sorted groups', '양쪽 맨 앞 중 작은 값 선택': 'Pick the smaller of the two fronts', '하나의 정렬된 묶음': 'One sorted group',
  '병합 정렬: 각 묶음의 맨 앞을 비교한다': 'Merge sort: compare the fronts of each group',
  '왼쪽 묶음: 2 · 5': 'Left group: 2 · 5', '오른쪽 묶음: 1 · 7': 'Right group: 1 · 7', '꺼낸 순서: 1 → 2 → 5 → 7': 'Order taken: 1 → 2 → 5 → 7',
  '반으로 나눠 정렬하고 합친다': 'Split in half, sort, then merge',
  '병합 정렬은 값을 반으로, 또 반으로 나눠 한 개씩이 될 때까지 쪼갠 뒤, 정렬된 두 묶음을 앞에서부터 비교하며 하나로 합칩니다. 반으로 나누는 층이 log₂ n개이고 층마다 n번쯤 일하므로 O(n log n)입니다. 1.5의 재귀가 이 일을 합니다.':
    'Merge sort splits the values in half, and in half again, until each piece is one value, then merges two sorted groups into one by comparing them from the front. There are log₂ n levels of halving and about n steps of work per level, so it is O(n log n). Recursion from 1.5 does this work.',
  '보라색 띠가 지금 합치는 범위입니다. 두 개, 네 개, 여덟 개 묶음으로 커지며 합쳐집니다. 16개 무작위면 비교 50번 안팎으로, 선택 정렬의 120번보다 훨씬 적습니다.':
    'The purple band is the range being merged now. Groups grow from two to four to eight as they merge. Random input of 16 takes about 50 comparisons, far fewer than selection sort\'s 120.',
  '막대 열여섯 개가 있습니다. 보라 띠로 표시된 범위의 두 묶음을 앞에서부터 비교해, 작은 값부터 다시 적어 나갑니다.': 'There are sixteen bars. The two groups in the range marked by the purple band are compared from the front and written back smallest first.',
  '"병합 정렬"을 무작위 입력으로 실행해 보세요.': 'Run "Merge sort" on the random input.', '나누고 합치기를 반복해 정렬했습니다.': 'It sorted by splitting and merging again and again.',
  '같은 입력으로 "선택 정렬"도 실행해 비교 횟수를 견주어 보세요.': 'Run "Selection sort" on the same input too and compare the number of comparisons.', '선택 정렬은 120번. 병합 정렬이 절반도 안 됩니다.': 'Selection sort takes 120. Merge sort takes less than half.',
  // Step 4
  '한눈에 비교': 'Side by side', '입력 16개': '16 inputs', '같은 입력 16개': 'The same 16 inputs', '같은 무작위 막대 16개': 'The same 16 random bars', '선택과 병합 정렬 비교': 'Compare selection and merge sort', '예시 비교 횟수 120 vs 49': 'Example comparisons: 120 vs 49',
  '같은 16개를 정렬할 때 비교 횟수가 달라진다': 'Sorting the same 16 takes different numbers of comparisons',
  '같은 무작위 입력 16개에서 선택 120회, 삽입 68회, 병합 49회를 비교했습니다.': 'On the same 16 random inputs, selection made 120 comparisons, insertion 68 and merge 49.',
  '같은 입력: 무작위 값 16개 · 막대 길이 = 비교 횟수': 'Same input: 16 random values · bar length = comparisons',
  'n이 크면 O(n log n)이 압도한다': 'With large n, O(n log n) wins by far',
  '세 정렬을 같은 입력 16개에 돌려 표로 비교합니다. 데이터가 작으면 차이가 작아 보여도, n이 1000, 100만으로 커지면 O(n²)과 O(n log n)의 차이는 몇 분과 몇 초, 며칠과 1초가 됩니다. 파이썬의 sorted()와 대부분의 실무 정렬은 O(n log n) 방법(병합 정렬을 다듬은 Timsort 등)을 씁니다.':
    'Run the three sorts on the same 16 inputs and compare them in a table. On small data the gap looks small, but as n grows to 1,000 and a million, the gap between O(n²) and O(n log n) becomes minutes against seconds, then days against a second. Python\'s sorted() and most sorting in practice use O(n log n) methods (such as Timsort, a refined merge sort).',
  '"모두 실행" 뒤 표를 보세요. 무작위 입력에서 비교 횟수가 선택 120, 삽입 68, 병합 49입니다. 삽입은 거의 정렬된 입력이면 17번까지 줄어듭니다. 아래 예측 문제로 n = 100만일 때를 어림해 봅니다.':
    'Look at the table after "Run all". On random input the comparisons are selection 120, insertion 68, merge 49. Insertion drops to 17 on nearly sorted input. The prediction question below estimates n = a million.',
  '막대 열여섯 개가 있습니다. 세 정렬이 같은 입력을 차례로 정렬하고, 장면 아래 표에 비교 횟수가 쌓입니다.': 'There are sixteen bars. The three sorts sort the same input in turn, and the comparison counts pile up in the table under the scene.',
  '무작위 입력에서 "모두 실행"을 눌러 보세요.': 'Press "Run all" on the random input.', '같은 16개인데 비교 횟수가 두 배 넘게 차이 납니다.': 'The same 16, yet the comparisons differ by more than double.',
  'n = 100만이면 병합 정렬의 비교는 대략 몇 번일까요?': 'With n = a million, about how many comparisons does merge sort make?',
  '2000만 번': '20 million', '5000억 번': '500 billion', '100만 번': '1 million',
  'n log₂ n ≈ 100만 × 20 = 2000만입니다. 선택 정렬은 약 5000억 번입니다.': 'n log₂ n ≈ 1 million × 20 = 20 million. Selection sort takes about 500 billion.',
};
