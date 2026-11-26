// English for OS 2.4 Fair scheduling. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '공정한 스케줄러 · 레슨 2.4': 'Fair scheduling · Lesson 2.4',
  '운영체제 2장 프로세스와 CPU · 레슨 2.4': 'Operating systems chapter 2 Processes and the CPU · Lesson 2.4',
  '공정한 스케줄러': 'Fair scheduling',
  '리눅스 스케줄러가 가상 실행 시간(vruntime)과 nice 가중치로 CPU를 나누는 방법, 깨어난 프로세스를 다루는 방법, 6.6부터의 마감 시간(EEVDF) 선택을 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, how the Linux scheduler shares the CPU with virtual runtime (vruntime) and nice weights, how it treats a process that wakes up, and how it picks by deadline (EEVDF) since 6.6.',
  'CPU를 여러 프로세스에 공평하게 나누려면 무엇을 세야 할까요? 타이머가 울릴 때마다 스케줄러가 가장 덜 달린 프로세스를 고르는 길을 한 정거장씩 따라가 보세요.':
    'What must be counted to share the CPU fairly among processes? Follow, station by station, how the scheduler picks the process that has run least each time the timer fires.',
  'CPU를 여러 프로세스에 공평하게 나누려면 무엇을 세야 할까?': 'What must be counted to share the CPU fairly among processes?',
  '프로세스, 타이머, 스케줄러': 'Processes, timer, scheduler',
  '타이머가 울릴 때마다 스케줄러가 가상 실행 시간이 가장 작은 프로세스를 골라 CPU를 넘기는 장면': 'Each time the timer fires, the scheduler picks the process with the smallest virtual runtime and hands it the CPU',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '프로세스': 'Process', '인터럽트': 'Interrupt', '커널': 'Kernel',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '프로세스 A': 'Process A', '프로세스 B': 'Process B', '타이머': 'Timer', '스케줄러': 'Scheduler',
  '편집기': 'Editor', '컴파일러': 'Compiler', '키보드': 'Keyboard', '오디오': 'Audio', '일괄 작업': 'Batch job',
  // Legs in the stage list
  '프로세스 A → 타이머': 'Process A → timer', '타이머 → 스케줄러': 'Timer → scheduler', '스케줄러 → 프로세스 B': 'Scheduler → process B', '프로세스 B → 타이머': 'Process B → timer',
  'B nice 5 → 타이머': 'B nice 5 → timer', '스케줄러 → A nice 0': 'Scheduler → A nice 0', 'A nice 0 → 타이머': 'A nice 0 → timer',
  '키보드 → 스케줄러': 'Keyboard → scheduler', '스케줄러 → 편집기': 'Scheduler → editor', '편집기 → 키보드': 'Editor → keyboard', '스케줄러 → 컴파일러': 'Scheduler → compiler',
  '스케줄러 → 오디오': 'Scheduler → audio', '오디오 → 타이머': 'Audio → timer',
  // Badges and moving labels
  '실행 중 · 0': 'Running · 0', '대기 · 0': 'Waiting · 0', 'vruntime 4': 'vruntime 4',   '대기 · 4': 'Waiting · 4', 'A 4 = B 4': 'A 4 = B 4', '4ms 실행': 'Ran 4 ms', 'A 4 · B 0': 'A 4 · B 0', 'A 실행': 'Run A', 'B 실행': 'Run B',
  '가중치 1024 · 0': 'Weight 1024 · 0', 'vruntime 12.2': 'vruntime 12.2', '대기 · 12.2': 'Waiting · 12.2',
  'vruntime 12': 'vruntime 12', 'A 0 · B 12.2': 'A 0 · B 12.2', '4ms ×3': '4 ms ×3', 'A 12 · B 12.2': 'A 12 · B 12.2',
  '잠듦 · 20': 'Asleep · 20', '실행 중 · 100': 'Running · 100', '키 A': 'Key A', '편집기 깨움': 'Wake the editor', '잔 시간 몫 없음': 'No share for time asleep',
  '처리 끝': 'Handled',   '키 눌림': 'Key pressed', '20 → 100 근처': '20 → about 100', '키 처리 1ms': 'Handle key, 1 ms', '컴파일러 실행': 'Run the compiler',
  '10 · 조각 1ms': '10 · slice 1 ms', '10 · 조각 3ms': '10 · slice 3 ms', '고를 때': 'Time to pick', '자격: 둘 다': 'Eligible: both',   '대기 · 마감 13': 'Waiting · deadline 13', 'vruntime 11': 'vruntime 11', '다음 · 3ms': 'Next · 3 ms',
  '스케줄러 · 컴파일러 실행': 'Scheduler · run the compiler', '타이머 · 11 · 10': 'Timer · 11 · 10', '타이머 · A 12 · B 12.2': 'Timer · A 12 · B 12.2', '프로세스 B · 4ms 실행': 'Process B · ran 4 ms',
  '마감 11 < 13': 'Deadline 11 < 13', '1ms 실행': 'Ran 1 ms', '11 · 10': '11 · 10',
  '+4ms': '+4 ms', '+12ms': '+12 ms', '+1ms': '+1 ms', 'B 고름': 'Pick B', 'A 고름': 'Pick A', '몫 약 3 : 1': 'Share ≈ 3 : 1',
  '실행 · 약 100': 'Running · ~100', '20 → 약 101': '20 → ~101', 'vruntime 100': 'vruntime 100', '컴파일러 차례': 'Compiler\'s turn',
  '실행 · 마감 11': 'Running · deadline 11', '일괄 작업 차례': 'Batch job\'s turn', '11 > 평균 10.5': '11 > average 10.5', '10 · 마감 13': '10 · deadline 13',
  // Step 1
  '가상 실행 시간': 'Virtual runtime',
  '스케줄러는 덜 달린 프로세스를 먼저 고른다': 'The scheduler picks the process that has run less',
  '리눅스의 공정한 스케줄러는 프로세스마다 CPU를 얼마나 썼는지 가상 실행 시간(vruntime)으로 셉니다. 타이머가 울릴 때마다 커널은 지금 프로세스가 쓴 시간을 그 값에 더하고, 가장 작은 값을 가진 프로세스를 다음에 고릅니다. 그래서 덜 달린 쪽이 늘 따라잡고, 우선순위가 같은 두 프로세스는 CPU를 절반씩 씁니다.':
    'The Linux fair scheduler counts how much CPU each process has used as its virtual runtime (vruntime). Each time the timer fires, the kernel adds the time the current process used to that value and picks the process with the smallest value next. So the one that has run less always catches up, and two processes with the same priority each get half the CPU.',
  'A가 4ms 달리자 A의 이름표가 vruntime 4가 됩니다. 스케줄러는 "A 4 · B 0"을 비교해 B를 고르고, B도 4ms 달린 뒤 둘의 값이 4로 같아집니다.':
    'After A runs 4 ms, A\'s label becomes vruntime 4. The scheduler compares "A 4 · B 0" and picks B, and after B also runs 4 ms both values are 4.',
  '왼쪽 사용자 영역에 프로세스 A와 B가, 경계 너머에 타이머 인터럽트와 커널의 스케줄러가 있습니다. 둘 다 우선순위(nice)가 0입니다.':
    'Processes A and B are in user space on the left; across the boundary are the timer interrupt and the kernel\'s scheduler. Both have priority (nice) 0.',
  'A 4ms 실행 → vruntime 4': 'A runs 4 ms → vruntime 4', '스케줄러: 가장 작은 값 = B 0': 'Scheduler: smallest value = B 0', 'B 4ms 실행 → vruntime 4': 'B runs 4 ms → vruntime 4', '둘이 같음 = 절반씩': 'Equal = half each',
  'A: vruntime 0 · 실행 중': 'A: vruntime 0 · running', 'B: vruntime 0 · 대기': 'B: vruntime 0 · waiting',
  'A가 4ms 실행함': 'A ran 4 ms', 'vruntime A 0 + 4 = 4': 'vruntime A 0 + 4 = 4', '가장 작은 값: B': 'Smallest value: B', 'B가 CPU를 받음': 'B gets the CPU', 'A는 대기': 'A waits',
  'B가 4ms 실행함': 'B ran 4 ms', 'A 4 · B 4 → 같음': 'A 4 · B 4 → equal',
  'A가 4ms 동안 CPU를 쓰자 타이머가 울립니다. A의 vruntime이 4가 됩니다.': 'A uses the CPU for 4 ms and the timer fires. A\'s vruntime becomes 4.',
  '스케줄러가 두 값을 비교합니다. B는 아직 한 번도 달리지 않아 0입니다.': 'The scheduler compares the two values. B has not run yet, so it is 0.',
  'B가 CPU를 받고 A는 기다립니다.': 'B gets the CPU and A waits.',
  'B도 4ms 달려 vruntime 4가 됩니다. 이제 둘이 같아 번갈아 달리며 CPU를 절반씩 씁니다.': 'B also runs 4 ms and reaches vruntime 4. Now they are equal, take turns and each use half the CPU.',
  '스케줄러는 다음에 누구를 고를까요?': 'Whom does the scheduler pick next?',
  '방금 달린 A': 'A, which just ran', 'vruntime이 작은 B': 'B, with the smaller vruntime', '둘 다 쉰다': 'Both rest',
  '공정한 스케줄러는 늘 가장 덜 달린 프로세스, 곧 vruntime이 가장 작은 프로세스를 고릅니다.': 'The fair scheduler always picks the process that has run least, that is, the one with the smallest vruntime.',
  // Step 2
  'nice와 가중치': 'nice and weights',
  '우선순위가 낮으면 vruntime이 빨리 늘어 덜 달린다': 'Lower priority makes vruntime grow faster, so the process runs less',
  'nice 값이 높을수록 우선순위가 낮습니다. 커널은 nice마다 가중치를 정해 두었는데 nice 0은 1024, nice 5는 335입니다. 실제로 달린 시간에 1024 ÷ 가중치를 곱해 vruntime에 더하므로, 가중치가 작은 프로세스는 같은 4ms를 달려도 값이 세 배쯤 늘어납니다. 그래서 CPU를 가중치 비율인 1024 : 335, 곧 약 3 : 1로 나눠 씁니다.':
    'The higher the nice value, the lower the priority. The kernel fixes a weight for each nice value: 1024 for nice 0 and 335 for nice 5. It multiplies the real running time by 1024 ÷ weight before adding it to vruntime, so a process with a small weight gains about three times as much for the same 4 ms. The CPU is therefore shared in the ratio of the weights, 1024 : 335, about 3 : 1.',
  'B(nice 5)가 4ms 달리자 이름표가 vruntime 12.2가 됩니다. A(nice 0)는 4ms씩 세 번, 12ms를 달려야 12에 닿고, 스케줄러 이름표에 "몫 약 3 : 1"이 남습니다.':
    'After B (nice 5) runs 4 ms its label becomes vruntime 12.2. A (nice 0) has to run 4 ms three times, 12 ms, to reach 12, and the scheduler\'s label shows "Share ≈ 3 : 1".',
  '왼쪽 사용자 영역에 nice 0인 프로세스 A와 nice 5인 프로세스 B가, 경계 너머에 타이머와 스케줄러가 있습니다.': 'Process A with nice 0 and process B with nice 5 are in user space on the left; across the boundary are the timer and the scheduler.',
  'B(가중치 335) 4ms → vruntime 4 × 1024 ÷ 335 = 12.2': 'B (weight 335) 4 ms → vruntime 4 × 1024 ÷ 335 = 12.2', 'A(가중치 1024) 12ms → 12': 'A (weight 1024) 12 ms → 12', 'CPU 몫 약 A 75% · B 25%': 'CPU share ≈ A 75% · B 25%',
  'A: nice 0 → 가중치 1024': 'A: nice 0 → weight 1024', 'B: nice 5 → 가중치 335': 'B: nice 5 → weight 335',
  '4 × 1024 ÷ 335 = 12.2': '4 × 1024 ÷ 335 = 12.2', '가장 작은 값: A': 'Smallest value: A', 'A가 CPU를 받음': 'A gets the CPU', 'A가 4ms씩 세 번 실행함': 'A ran 4 ms three times',
  'vruntime A 12 · B 12.2': 'vruntime A 12 · B 12.2', 'A 12ms · B 4ms': 'A 12 ms · B 4 ms', 'CPU 몫 3 : 1': 'CPU share 3 : 1',
  'B가 4ms 달립니다. 가중치가 335라 vruntime은 4가 아니라 12.2만큼 늘어납니다.': 'B runs 4 ms. Its weight is 335, so its vruntime grows by 12.2, not 4.',
  '스케줄러가 비교하니 A가 한참 뒤처져 있습니다.': 'The scheduler compares them: A is far behind.',
  'A가 CPU를 받습니다.': 'A gets the CPU.',
  'A는 타이머가 세 번 울리는 동안 계속 가장 작은 값이라 12ms를 달립니다.': 'A keeps the smallest value through three timer ticks, so it runs 12 ms.',
  '이제 B 차례입니다. A가 12ms, B가 4ms를 썼으니 몫은 3 : 1, 가중치 비율과 같습니다.': 'Now it is B\'s turn. A used 12 ms and B 4 ms, a 3 : 1 share, the same as the ratio of the weights.',
  'A는 얼마나 달린 뒤에야 B 차례가 다시 올까요?': 'How long does A run before B\'s turn comes again?',
  'A는 가중치가 1024라 달린 시간만큼만 vruntime이 늘어납니다. 12ms를 달려야 B의 12.2에 닿습니다.': 'A\'s weight is 1024, so its vruntime grows only by the time it runs. It must run 12 ms to reach B\'s 12.2.',
  // Step 3
  '깨어난 프로세스': 'Waking processes',
  '오래 잔 프로세스는 밀린 몫을 몰아 받지 않는다': 'A process that slept long does not collect a backlog of CPU time',
  '편집기처럼 키 입력을 기다리며 자는 프로세스는 자는 동안 vruntime이 늘지 않습니다. 깨어났을 때 옛 값 20을 그대로 두면 그 사이 100까지 달린 컴파일러보다 80만큼 뒤처져, 80ms 동안 CPU를 독차지합니다. 그래서 커널은 깨어난 프로세스의 값을 지금 달리는 프로세스들의 값 근처로 맞춥니다. 편집기는 곧 차례를 받아 키를 처리하지만, 잔 시간을 몫으로 쌓지는 못합니다.':
    'A process that sleeps waiting for a key, like an editor, does not gain vruntime while asleep. If its old value of 20 were kept when it woke, it would be 80 behind the compiler, which reached 100 in the meantime, and would hog the CPU for 80 ms. So the kernel moves a woken process\'s value close to the values of the processes that are running. The editor soon gets its turn and handles the key, but it cannot save up time asleep as a share.',
  '키 입력이 편집기를 깨우자 스케줄러가 편집기의 vruntime을 20에서 100 근처로 올립니다. 편집기가 1ms 동안 키를 처리하고 다시 잠들면 컴파일러가 곧바로 이어서 달립니다.':
    'When a key wakes the editor, the scheduler raises the editor\'s vruntime from 20 to about 100. The editor handles the key in 1 ms and sleeps again, and the compiler goes on running right away.',
  '왼쪽 사용자 영역에 키를 기다리며 자는 편집기와 계속 달리는 컴파일러가, 경계 너머에 키보드 인터럽트와 스케줄러가 있습니다.': 'An editor asleep waiting for a key and a compiler that keeps running are in user space on the left; across the boundary are the keyboard interrupt and the scheduler.',
  '편집기 vruntime 20으로 잠듦 · 컴파일러 100': 'Editor asleep at vruntime 20 · compiler 100', '키 입력으로 깨어남': 'A key wakes it', '20 → 100 근처로 맞춤': '20 → set to about 100', '키 처리 1ms 후 컴파일러 이어감': 'Key handled in 1 ms, compiler goes on',
  '편집기: vruntime 20 · 잠듦': 'Editor: vruntime 20 · asleep', '컴파일러: vruntime 100 · 실행 중': 'Compiler: vruntime 100 · running',
  '편집기를 깨움': 'Wake the editor', '옛 값 20 · 컴파일러 100': 'Old value 20 · compiler 100', 'vruntime을 100 근처로 맞춤': 'Set vruntime to about 100', '잔 시간은 몫으로 쌓지 않음': 'Time asleep is not saved as a share',
  '키 A를 화면에 그림': 'Draw key A on the screen', '다시 키를 기다리며 잠듦': 'Sleep again, waiting for a key', '컴파일러가 이어서 달림': 'The compiler goes on running', '1ms만 기다림': 'Waited only 1 ms',
  '키가 눌려 편집기가 깨어납니다. 편집기의 vruntime은 잠들 때의 20 그대로입니다.': 'A key is pressed and the editor wakes. Its vruntime is still 20, as when it fell asleep.',
  '커널은 편집기의 값을 컴파일러 값 근처로 올립니다. 그래도 가장 앞에 서므로 곧 차례를 받습니다.': 'The kernel raises the editor\'s value close to the compiler\'s. It is still first in line, so it soon gets its turn.',
  '편집기는 1ms 만에 키를 처리하고 다시 잠듭니다.': 'The editor handles the key in 1 ms and sleeps again.',
  '컴파일러는 1ms만 기다리고 다시 달립니다. 편집기는 빨리 반응했고 컴파일러는 굶지 않았습니다.': 'The compiler waits only 1 ms and runs again. The editor responded quickly and the compiler did not starve.',
  '편집기의 값을 20 그대로 두면 어떻게 될까요?': 'What happens if the editor keeps its value of 20?',
  '편집기가 80ms 동안 CPU를 독차지한다': 'The editor hogs the CPU for 80 ms', '편집기가 끝까지 차례를 못 받는다': 'The editor never gets a turn', '아무 차이가 없다': 'Nothing changes',
  '스케줄러는 가장 작은 값을 고르므로, 20인 편집기가 100에 닿을 때까지 컴파일러는 기다려야 합니다.': 'The scheduler picks the smallest value, so the compiler would wait until the editor at 20 reached 100.',
  // Step 4
  '마감 시간': 'Deadlines',
  '리눅스 6.6부터는 마감이 이른 프로세스를 먼저 고른다': 'Since Linux 6.6 the process with the earliest deadline goes first',
  '리눅스 6.6부터 공정한 스케줄러는 EEVDF로 바뀌었습니다. 먼저 몫보다 덜 받은 프로세스만 자격이 있다고 보고, 그중 가상 마감 시간(vruntime + 한 번에 받을 조각)이 가장 이른 것을 고릅니다. 오디오처럼 자주 짧게 돌아야 하는 프로세스는 sched_setattr로 작은 조각을 요청해 마감을 앞당깁니다. 차례는 자주 오지만 한 번에 짧게 달리므로 몫은 그대로 같습니다.':
    'Since Linux 6.6 the fair scheduler has been EEVDF. It first treats only the processes that have received less than their share as eligible, then picks the one among them with the earliest virtual deadline (vruntime + the slice it gets at a time). A process that must run often and briefly, like audio, asks for a small slice with sched_setattr and so moves its deadline earlier. Its turn comes often, but it runs briefly each time, so its share stays the same.',
  '스케줄러가 둘 다 자격이 있다고 본 뒤 "마감 11 < 13"으로 오디오를 고릅니다. 오디오가 1ms 달려 앞서면 오디오 이름표가 "11 > 평균 10.5"가 되고, 스케줄러 이름표가 "일괄 작업 차례"가 됩니다.':
    'The scheduler finds both eligible, then picks audio with "Deadline 11 < 13". Once audio has run 1 ms and is ahead, audio\'s label becomes "11 > average 10.5" and the scheduler\'s label becomes "Batch job\'s turn".',
  '왼쪽 사용자 영역에 조각 1ms를 요청한 오디오와 조각 3ms인 일괄 작업이, 경계 너머에 타이머와 스케줄러가 있습니다. 둘 다 nice 0이고 vruntime이 10입니다.':
    'Audio, which asked for a 1 ms slice, and a batch job with a 3 ms slice are in user space on the left; across the boundary are the timer and the scheduler. Both have nice 0 and vruntime 10.',
  'EEVDF · 둘 다 vruntime 10 · 자격 있음': 'EEVDF · both vruntime 10 · eligible', '마감: 오디오 10 + 1 = 11 · 일괄 10 + 3 = 13': 'Deadline: audio 10 + 1 = 11 · batch 10 + 3 = 13', '오디오 먼저 1ms': 'Audio first, 1 ms', '오디오 11 > 평균 10.5 → 자격 잃음 → 일괄 작업': 'Audio 11 > average 10.5 → loses eligibility → batch job',
  '오디오: vruntime 10 · 조각 1ms': 'Audio: vruntime 10 · slice 1 ms', '일괄 작업: vruntime 10 · 조각 3ms': 'Batch job: vruntime 10 · slice 3 ms',
  '둘 다 몫보다 덜 받음': 'Both have had less than their share', '둘 다 자격 있음': 'Both are eligible', '오디오 마감 10 + 1 = 11': 'Audio deadline 10 + 1 = 11', '일괄 작업 마감 10 + 3 = 13': 'Batch job deadline 10 + 3 = 13',
  '오디오가 1ms 실행함': 'Audio ran 1 ms', 'vruntime 오디오 11 · 일괄 10': 'vruntime audio 11 · batch 10', '오디오는 평균보다 앞섬 → 자격 없음': 'Audio is ahead of the average → not eligible', '일괄 작업 차례': 'The batch job\'s turn',
  '스케줄러가 먼저 자격을 봅니다. 둘 다 평균보다 덜 달렸으므로 자격이 있습니다.': 'The scheduler checks eligibility first. Both have run less than the average, so both are eligible.',
  '자격 있는 둘 중 마감이 이른 오디오가 먼저 CPU를 받습니다.': 'Of the two eligible processes, audio, with the earlier deadline, gets the CPU first.',
  '오디오가 조각 1ms를 다 쓰고 vruntime 11이 됩니다.': 'Audio uses its whole 1 ms slice and reaches vruntime 11.',
  '이제 오디오가 평균보다 앞서 자격을 잃고, 일괄 작업이 3ms 조각을 받습니다. 오디오는 자주 짧게, 일괄 작업은 드물게 길게 달려 몫은 같습니다.':
    'Now audio is ahead of the average and loses eligibility, and the batch job gets its 3 ms slice. Audio runs often and briefly, the batch job rarely and long, and their shares are the same.',
  'vruntime이 같을 때 누가 먼저 달릴까요?': 'With equal vruntime, which runs first?',
  '조각이 큰 일괄 작업': 'The batch job, with the bigger slice', '마감이 이른 오디오': 'Audio, with the earlier deadline', '아무나 먼저': 'Either one',
  '마감은 vruntime에 조각을 더한 값입니다. 조각이 작으면 마감이 일러 먼저 뽑힙니다.': 'The deadline is vruntime plus the slice. A small slice gives an early deadline, so it is picked first.',
};
