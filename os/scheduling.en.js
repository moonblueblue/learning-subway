// English for 5.2 CPU scheduling. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'CPU 스케줄링 · 레슨 5.2': 'CPU scheduling · Lesson 5.2',
  '같은 세 일을 먼저 온 순서, 짧은 것 먼저, 라운드 로빈으로 CPU에 줄 세워 기다린 시간과 문맥 교환 횟수를 비교해 보세요.':
    'Queue the same three jobs for the CPU first-come first-served, shortest first and round robin, and compare the waiting times and the number of context switches.',
  'CPU 하나가 여러 일을 어떻게 번갈아 할까요? 같은 세 일을 여러 방법으로 줄 세워 기다린 시간을 비교해 보세요.':
    'How does one CPU take turns at several jobs? Queue the same three jobs in different ways and compare the waiting times.',
  '준비 큐의 일들이 CPU에서 차례로 실행되고, 바닥에 시간 칸마다 실행한 일이 색 블록으로 쌓이는 장면': 'Jobs from the ready queue running on the CPU in turn, with a coloured block piling up on the floor for each time slot',
  '준비 큐, CPU, 시간표': 'Ready queue, CPU, timeline', '준비 큐': 'Ready queue', '끝난 일': 'Done', '시간': 'Time', '문맥 교환': 'Context switch',
  '방법 고르기': 'Choose a method', '방법': 'Method', '시간 조각 고르기': 'Choose a time slice', '시간 조각': 'Time slice', '한 칸': 'One slot', '실행': 'Run',
  '방법을 고르고 "실행"을 눌러 보세요.': 'Choose a method and press "Run".', '기록 · 같은 세 일을 방법마다 실행한 결과': 'Log · the same three jobs run by each method', '실행을 끝까지 하면 여기에 쌓입니다': 'Finished runs pile up here',
  'P1 기다림': 'P1 wait', 'P2 기다림': 'P2 wait', 'P3 기다림': 'P3 wait', '평균 기다림': 'Average wait', '첫 실행까지 평균': 'Average to first run',
  // Jobs and readouts
  '동영상 변환': 'Video conversion', '메일 보내기': 'Sending mail', '키 입력': 'Key press',
  'P1 동영상 변환': 'P1 video conversion', 'P2 메일 보내기': 'P2 sending mail', 'P3 키 입력': 'P3 key press',
  'P1 동영상 변환(8)': 'P1 video conversion (8)', 'P2 메일 보내기(4)': 'P2 sending mail (4)', 'P3 키 입력(2)': 'P3 key press (2)',
  '· 문맥 교환': '· context switches', '번': '', '남은 {#0}': '{0} left', '끝': 'Done', '시각 {#0}': 'Time {0}', '{0} 실행 중': '{0} running', '시작 전': 'Not started', '모두 끝남': 'All done',
  '먼저 온 순서 (FCFS)': 'First come, first served (FCFS)', '짧은 것 먼저 (SJF)': 'Shortest first (SJF)', '돌아가며 (라운드 로빈)': 'Taking turns (round robin)', '라운드 로빈 (조각 {#0})': 'Round robin (slice {0})',
  '시각 {#0}–{#1}: {2}': 'Time {0}–{1}: {2}', '시각 {#0}–{#1}: {2} · 문맥 교환': 'Time {0}–{1}: {2} · context switch',
  '끝: 평균 기다린 시간 {0}, 첫 실행까지 평균 {1}, 문맥 교환 {#2}번': 'Done: average wait {0}, average to first run {1}, {2} context {2|switch|switches}',
  '{0}를 골랐습니다. "실행"을 누르세요.': 'Chose {0}. Press "Run".', '시간 조각 {#0}로 바꿨습니다.': 'Time slice changed to {0}.',
  // Step 1
  '먼저 온 순서': 'First come, first served', '작업 길이 8, 4, 2': 'Job lengths 8, 4, 2', '도착 순서대로 실행': 'Run in arrival order', '평균 대기 6.7': 'Average wait 6.7',
  'CPU는 하나, 기다리는 일은 여럿': 'One CPU, many jobs waiting',
  'CPU 하나는 한 번에 한 프로세스(5.1)만 실행합니다. 실행할 차례를 기다리는 프로세스들은 준비 큐(4.3)에 줄을 섭니다. 무엇을 먼저 실행할지 정하는 것이 운영체제의 스케줄러입니다. 가장 단순한 방법은 먼저 온 순서대로 끝까지 실행하는 것입니다(FCFS).':
    'One CPU runs only one process (5.1) at a time. Processes waiting their turn line up in the ready queue (4.3). What decides which runs first is the operating system\'s scheduler. The simplest method is to run them to the end in the order they came (FCFS).',
  '긴 동영상 변환(8)이 먼저 오면 짧은 키 입력(2)은 12만큼 기다립니다. 평균 기다린 시간은 (0 + 8 + 12) ÷ 3 ≈ 6.7입니다. 긴 일 뒤에 짧은 일들이 줄줄이 막히는 것을 호송 효과라 합니다.':
    'If the long video conversion (8) comes first, the short key press (2) waits 12. The average wait is (0 + 8 + 12) ÷ 3 ≈ 6.7. Short jobs getting stuck one after another behind a long one is called the convoy effect.',
  '왼쪽 준비 큐에 일 세 개가 서 있고, 가운데 CPU가 하나씩 실행합니다. 아래 바닥에는 시간 칸마다 어떤 일이 CPU를 썼는지 색 블록이 쌓입니다.': 'Three jobs stand in the ready queue on the left, and the CPU in the middle runs them one at a time. On the floor below, a coloured block piles up for each time slot showing which job used the CPU.',
  '"실행"을 눌러 먼저 온 순서로 끝까지 실행해 보세요.': 'Press "Run" to run first come, first served to the end.', '키 입력은 12나 기다렸습니다.': 'The key press waited as long as 12.',
  '키 입력(2)이 가장 오래 기다린 까닭은?': 'Why did the key press (2) wait longest?', '일이 가장 길어서': 'It is the longest job', '긴 일들 뒤에 줄을 서서': 'It queued behind long jobs', 'CPU가 느려서': 'The CPU is slow',
  '자기 일은 짧은데 앞의 8과 4가 끝날 때까지 기다렸습니다.': 'Its own job is short, but it waited for the 8 and 4 ahead of it to finish.',
  // Step 2
  '짧은 것 먼저': 'Shortest first', '같은 작업 3개': 'The same 3 jobs', '길이 2 → 4 → 8 순서': 'Order by length 2 → 4 → 8', '평균 대기 2.7': 'Average wait 2.7',
  '짧은 일을 먼저 하면 평균 대기가 준다': 'Doing short jobs first cuts the average wait',
  '같은 세 일을 짧은 것부터 실행해 봅시다(SJF). 키 입력(2), 메일(4), 동영상(8) 순서가 되어 짧은 일들은 금방 끝나고, 긴 일 하나만 조금 더 기다립니다. 평균 기다린 시간이 가장 작아지는 순서입니다. 다만 실제로는 일이 얼마나 걸릴지 미리 알기 어렵습니다.':
    'Run the same three jobs shortest first (SJF). The order becomes key press (2), mail (4), video (8): the short jobs finish quickly and only the one long job waits a little more. It is the order with the smallest average wait. In reality, though, it is hard to know in advance how long a job will take.',
  '평균 기다린 시간이 (0 + 2 + 6) ÷ 3 ≈ 2.7로, FCFS의 6.7보다 훨씬 작습니다. 그러나 짧은 일이 계속 들어오면 긴 일은 영영 차례가 오지 않을 수도 있습니다(기아).':
    'The average wait is (0 + 2 + 6) ÷ 3 ≈ 2.7, far smaller than FCFS\'s 6.7. But if short jobs keep coming, the long job may never get its turn (starvation).',
  '같은 일 세 개를 짧은 것부터 실행합니다. 아래 기록표에서 두 방법의 기다린 시간을 비교할 수 있습니다.': 'The same three jobs run shortest first. The log below compares the waits of the two methods.',
  '"짧은 것 먼저"로 실행해 보세요.': 'Run with "Shortest first".', '평균 기다린 시간 2.7. 먼저 온 순서의 6.7보다 작습니다.': 'Average wait 2.7, smaller than first-come-first-served\'s 6.7.',
  '짧은 것 먼저 방식의 약점은?': 'What is the weakness of shortest first?', '긴 일이 계속 밀릴 수 있다': 'Long jobs can keep being pushed back', '평균 대기가 길다': 'The average wait is long', 'CPU를 둘 써야 한다': 'It needs two CPUs',
  '짧은 일이 끊임없이 들어오면 긴 일은 차례를 계속 빼앗깁니다(기아).': 'If short jobs keep coming, the long job keeps losing its turn (starvation).',
  // Step 3
  '라운드 로빈': 'Round robin', '시간 조각 2': 'Time slice 2', '끝나지 않은 일은 큐 뒤로': 'Unfinished jobs go to the back of the queue', '세 작업 모두 시각 4까지 첫 실행': 'All three jobs first run by time 4',
  '조금씩 돌아가며 실행한다': 'Run a little at a time, taking turns',
  '라운드 로빈은 일마다 정해진 시간 조각(여기서는 2)만큼만 실행하고, 다 못 하면 큐 뒤로 보내 다음 일에 CPU를 넘깁니다. 어떤 일도 오래 기다리지 않고 곧 한 번은 실행되므로, 키 입력처럼 바로 반응해야 하는 일에 좋습니다. 대신 일을 바꿀 때마다 문맥 교환(상태 저장과 복원)이 일어납니다.':
    'Round robin runs each job for only a fixed time slice (2 here); if it is not done, it goes to the back of the queue and the CPU passes to the next job. No job waits long, as each soon gets one run, so it suits jobs that must respond at once, like key presses. In exchange, each change of job causes a context switch (saving and restoring state).',
  '세 일이 2씩 번갈아 실행되어 모두 시각 4 안에 처음 실행됩니다. 키 입력은 시각 6에 끝납니다(먼저 온 순서에서는 14). 대신 문맥 교환이 여러 번 일어나고, 긴 동영상 변환은 가장 늦게 끝납니다.':
    'The three jobs take turns 2 at a time, so all first run by time 4. The key press finishes at time 6 (14 in first come, first served). In exchange there are several context switches, and the long video conversion finishes last.',
  '같은 일 세 개를 시간 조각 2씩 돌아가며 실행합니다. 다 못 한 일은 준비 큐 뒤로 돌아가 다시 섭니다.': 'The same three jobs take turns with a time slice of 2. An unfinished job goes back to the end of the ready queue and lines up again.',
  '"돌아가며"로 실행해 보세요.': 'Run with "Taking turns".', '세 일이 모두 일찍 한 번씩 실행됐습니다.': 'All three jobs got an early run.',
  '라운드 로빈에서 처음 실행되기까지 가장 오래 기다린 일은 몇만큼 기다렸을까요?': 'In round robin, how long did the job that waited longest for its first run wait?',
  'P1이 0, P2가 2, P3가 4에 처음 실행됩니다. FCFS에서는 P3가 12를 기다렸습니다.': 'P1 first runs at 0, P2 at 2 and P3 at 4. In FCFS, P3 waited 12.',
  // Step 4
  '시간 조각 4 → 1': 'Time slice 4 → 1', 'CPU를 더 자주 교대': 'Swap the CPU more often', '첫 반응은 빨라지고 교환 횟수 증가': 'Faster first response, more switches',
  '조각이 작을수록 빠르게 반응하지만 바꾸는 비용이 는다': 'Smaller slices respond faster but cost more switching',
  '시간 조각을 1로 줄이면 일이 더 자주 번갈아 실행되어 반응은 빨라지지만, 문맥 교환이 훨씬 많아집니다. 문맥 교환 동안 CPU는 쓸모 있는 일을 하지 못합니다. 조각을 키우면 교환은 줄지만 FCFS에 가까워집니다. 실제 운영체제는 수 밀리초 정도의 조각을 쓰고, 대화형 일에 우선순위를 더 줍니다.':
    'Cut the time slice to 1 and jobs alternate more often, responding faster, but context switches become far more frequent. During a context switch the CPU does no useful work. Bigger slices mean fewer switches but come closer to FCFS. Real operating systems use slices of a few milliseconds and give interactive jobs higher priority.',
  '조각 1과 4로 각각 실행해 문맥 교환 횟수를 비교해 보세요. 조각 1은 교환이 10번, 조각 2는 5번, 조각 4는 3번입니다.': 'Run with slices 1 and 4 and compare the number of context switches. Slice 1 makes 10 switches, slice 2 makes 5 and slice 4 makes 3.',
  '같은 일 세 개를 라운드 로빈으로 실행하되, 시간 조각을 1, 2, 4 중에서 고를 수 있습니다.': 'The same three jobs run round robin, with a time slice you can choose from 1, 2 and 4.',
  '시간 조각 1과 4로 각각 실행해 보세요.': 'Run with time slices 1 and 4.', '조각이 작을수록 문맥 교환이 많아집니다.': 'The smaller the slice, the more context switches.',
  '웹 서버처럼 큰 계산을 많이 하는 기계라면 시간 조각은?': 'For a machine doing lots of big calculations, like a web server, what time slice?', '조금 크게': 'A little bigger', '아주 작게': 'Very small',
  '반응 속도보다 처리량이 중요하므로, 교환 비용을 줄이는 쪽이 낫습니다.': 'Throughput matters more than response time, so cutting switching costs is better.',
};
