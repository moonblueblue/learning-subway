// English for 8A.5 Implementing consensus. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Raft terms: 리더 leader, 팔로워 follower, 후보 candidate, 임기 term, 표 vote, 칸 entry, 확정 committed.
window.lessonText = {
  "리더는 자기 임기의 항목이 과반에 기록됐을 때 그 위치까지 직접 확정합니다. 앞선 항목은 그 확정선에 함께 포함됩니다. 임기 2의 3번 항목은 A와 B에 있어 확정되고, A에만 있는 4번은 미확정입니다.": "A leader advances the commit point directly when an entry from its own term is on a majority. Earlier entries are included by that commit point. In term 2, slot 3 is on A and B, while slot 4 is on A alone.",
  "제3 서버의 끝": "Third voter last",
  "독립된 두 경우의 투표자 D": "Voter D in two separate cases",
  "예정된 만료 전에 새 리더 알림": "New leader signal before expiry",
  "B·C 타이머 재설정": "Reset B and C timers",
  "현 임기 2에서 사본 세기": "Count copies from current term 2",
  "로그 칸": "Log slot",
  "저장한 서버": "Servers storing it",
  "리더의 판정": "Leader decision",
  "여기까지 확정": "Committed through here",
  "미확정": "Uncommitted",
  "각각 아직 표를 쓰지 않은 임기의 두 예": "Two separate examples with a vote still free",
  "후보의 끝 (임기, 번호)": "Candidate last (term, index)",
  "투표자 A의 끝": "Voter A last",
  "판정": "Decision",
  "같아서 B에 투표": "Equal: vote for B",
  "임기가 낮아 거절": "Older term: reject",
  "일치하는 칸 뒤에서만 교체": "Replace only after a matching slot",
  "팔로워 A": "Follower A",
  "리더 B의 전송 뒤": "After leader B sends",
  "일치 · 그대로": "Match · retained",
  "미확정 칸을 [3:x=5]로": "Replace uncommitted slot",
  "하트비트가 없을 때의 시간선": "Timeline with no heartbeat",
  "시간": "Time",
  "서버 상태": "Server state",
  "결과": "Result",
  "A가 먼저 표 요청": "A requests votes first",
  "이 예에서 2표": "Two votes in this run",
  "B·C가 새 리더 알림 수신": "B and C hear from leader",
  "시간 초과 다시 설정": "Reset election timers",
  // Page
  '합의 구현 · 레슨 8A.5': 'Implementing consensus · Lesson 8A.5',
  'Raft를 직접 구현한다고 생각하며, 로그의 어느 칸까지 확정인지, 누구에게 투표하는지, 어긋난 로그를 어떻게 맞추는지, 구현에서 자주 틀리는 곳은 어디인지를 문제로 익혀 보세요.':
    'Imagine implementing Raft yourself, and learn through questions which log entries are committed, whom to vote for, how to repair a log that has drifted, and where implementations often go wrong.',
  '리더가 죽어도 기록은 어떻게 끊기지 않고 이어질까요? 7.9의 합의를 로그의 칸 단위로 들여다보며, 구현할 때 지켜야 할 규칙을 문제로 확인해 보세요.':
    'How does the record carry on unbroken even when the leader dies? Look at the consensus of 7.9 one log entry at a time, and check with questions the rules an implementation must keep.',
  // Step 1
  '어디까지 확정': 'What is committed',
  '과반의 로그에 들어간 칸까지 확정이다': 'An entry is committed once it is in a majority\'s logs',
  '7.9의 Raft를 직접 구현한다고 해 봅시다. 서버마다 로그(칸의 목록)를 가지고, 칸마다 "임기:명령"을 적습니다. 리더는 자기 로그를 팔로워에 복사하고, 어떤 칸이 서버 과반(3대 중 2대)의 로그에 들어가면 그 칸까지 확정(커밋)하고 실행합니다. 아래는 리더 A와 팔로워 B, C의 로그입니다.':
    'Say you implement the Raft of 7.9 yourself. Each server keeps a log (a list of entries), and each entry holds "term:command". The leader copies its log to the followers, and once an entry is in the logs of a majority of servers (2 of 3), it commits up to that entry and runs it. Below are the logs of leader A and followers B and C.',
  '7.9에서는 "과반이 기록하면 확정"을 한 칸으로만 봤습니다. 실제로는 로그의 칸마다 몇 대에 들어갔는지 따집니다. 6.6의 로그와 같은 생각입니다.':
    'In 7.9 you saw "committed once a majority records it" for a single entry. In practice you count, for every entry in the log, how many servers have it. It is the same idea as the log of 6.6.',
  '리더 A의 각 칸은 확정되었을까요?': 'Is each of leader A\'s entries committed?',
  'A (리더): [1:x=1] [1:x=2] [2:x=3] [2:x=4]\nB:         [1:x=1] [1:x=2] [2:x=3]\nC:         [1:x=1]':
    'A (leader): [1:x=1] [1:x=2] [2:x=3] [2:x=4]\nB:          [1:x=1] [1:x=2] [2:x=3]\nC:          [1:x=1]',
  '확정': 'Committed', '아직 아님': 'Not yet',
  '{#0}번 칸 [{1}]': 'Entry {0} [{1}]',
  'A, B, C 세 대 모두에 있습니다. 과반 이상입니다.': 'It is on all three, A, B and C. That is more than a majority.',
  'A와 B 두 대에 있어 3대 중 과반입니다.': 'It is on two, A and B: a majority of 3.',
  'A와 B에 있습니다. C가 늦어도 과반이 있으면 확정합니다.': 'It is on A and B. Even if C is behind, a majority commits it.',
  '리더 A에만 있습니다. 한 대는 과반이 아니므로 아직 실행하면 안 됩니다.': 'It is only on leader A. One server is not a majority, so it must not run yet.',
  '이때 A가 죽는다면, 4번 칸 x=4는 어떻게 될까요?': 'If A dies now, what happens to entry 4, x=4?',
  '확정되지 않았으므로 사라질 수 있습니다. 새 리더(B)의 로그에 없기 때문입니다. 클라이언트는 x=4의 완료 답을 받지 못했으므로 약속을 어긴 것이 아닙니다.':
    'It was not committed, so it can vanish, because it is not in the new leader B\'s log. The client never got a "done" reply for x=4, so no promise is broken.',
  // Step 2
  '누구에게 투표': 'Whom to vote for',
  '로그가 나보다 뒤처진 후보에게는 투표하지 않는다': 'Do not vote for a candidate whose log is behind yours',
  '확정된 칸을 잃지 않으려면, 확정된 칸을 모두 가진 서버만 리더가 되어야 합니다. 그래서 투표 규칙이 하나 더 있습니다. 후보의 로그가 내 로그보다 뒤처지면 표를 주지 않습니다. "뒤처짐"은 마지막 칸의 임기를 먼저 비교하고, 같으면 로그 길이를 비교합니다.':
    'To never lose a committed entry, only a server holding every committed entry may become leader. So there is one more voting rule: if the candidate\'s log is behind yours, you do not give it your vote. "Behind" compares the term of the last entry first, and if those are equal, the log length.',
  '7.9에서는 "한 임기에 한 표"만 봤습니다. 이 규칙이 더해져야 1단계에서 확정된 x=3이 새 리더에게도 반드시 남습니다.':
    'In 7.9 you saw only "one vote per term". With this rule added, the x=3 committed in step 1 is sure to stay with the new leader.',
  '리더 A가 죽고 새 임기 3의 선거가 열렸습니다. 이 투표 요청에 표를 줄까요?': 'Leader A died and an election for the new term 3 began. Do you give your vote to this request?',
  'B: [1:x=1] [1:x=2] [2:x=3]   (마지막 임기 2, 길이 3)\nC: [1:x=1]                   (마지막 임기 1, 길이 1)':
    'B: [1:x=1] [1:x=2] [2:x=3]   (last term 2, length 3)\nC: [1:x=1]                   (last term 1, length 1)',
  '표를 준다': 'Grant vote', '거절한다': 'Refuse',
  'B가 후보 → C에게 요청': 'B is the candidate → asks C', 'C가 후보 → B에게 요청': 'C is the candidate → asks B',
  'B의 마지막 임기(2)가 C(1)보다 높아 B의 로그가 더 앞섭니다. C는 표를 줍니다.': 'B\'s last term (2) is higher than C\'s (1), so B\'s log is ahead. C grants its vote.',
  'C의 마지막 임기(1)가 B(2)보다 낮습니다. C가 리더가 되면 확정된 x=2, x=3을 잃으므로 B는 거절합니다.': 'C\'s last term (1) is lower than B\'s (2). If C became leader, the committed x=2 and x=3 would be lost, so B refuses.',
  '마지막 임기가 같고 후보의 로그가 내 것보다 길 때': 'The last terms are equal and the candidate\'s log is longer than yours',
  '임기가 같으면 길이를 비교합니다. 후보가 더 길면 뒤처지지 않았습니다.': 'With equal terms, compare length. If the candidate\'s is longer, it is not behind.',
  '이번 임기에 이미 다른 후보에게 표를 준 뒤 또 요청이 왔을 때': 'Another request comes after you already voted for another candidate this term',
  '한 임기에 한 표뿐입니다(7.9).': 'Only one vote per term (7.9).',
  'C는 리더가 될 수 없지만 서버로서는 쓸모가 있을까요?': 'C cannot become leader, but is it still useful as a server?',
  '있습니다. B가 리더가 되면 C에게 빠진 칸을 채워 주고, C는 B의 과반을 이루는 한 표가 됩니다. 로그가 뒤처졌을 뿐 고장 난 것은 아닙니다.':
    'Yes. Once B is leader, it fills in C\'s missing entries, and C becomes one of the votes in B\'s majority. Its log was only behind; it is not broken.',
  // Step 3
  '로그 맞추기': 'Repairing logs',
  '앞 칸이 맞는지 확인하며 어긋난 칸을 덮어쓴다': 'Check that the previous entry matches, and overwrite entries that differ',
  '리더는 칸을 보낼 때 "바로 앞 칸의 번호와 임기"를 함께 보냅니다. 팔로워는 자기 로그의 그 자리가 같을 때만 받아들이고, 다르면 거절합니다. 거절당한 리더는 한 칸씩 앞으로 물러나며 다시 보내다가, 맞는 곳을 찾으면 그 뒤를 자기 로그로 덮어씁니다. 그러면 팔로워의 로그는 리더와 같아집니다.':
    'When the leader sends an entry, it also sends "the index and term of the entry just before". The follower accepts only if that spot in its own log matches, and refuses otherwise. A refused leader steps back one entry at a time and sends again until it finds a match, then overwrites everything after it with its own log. The follower\'s log then equals the leader\'s.',
  '6.6의 "확정되지 않은 것은 되돌린다"와 같은 생각입니다. 팔로워에만 남은 확정되지 않은 칸은 리더의 칸으로 덮어써 사라집니다.':
    'It is the same idea as "undo what is not committed" in 6.6. Uncommitted entries left only on a follower are overwritten by the leader\'s entries and vanish.',
  '새 리더 B와, 옛 임기에 혼자 받은 칸이 남은 팔로워 A가 있습니다. 다음 문장이 참인지 고르세요.': 'There is a new leader B, and a follower A still holding an entry only it received in an old term. Choose whether each sentence is true.',
  'B (리더, 임기 3): [1:x=1] [1:x=2] [2:x=3] [3:x=5]\nA (팔로워):       [1:x=1] [1:x=2] [2:x=3] [2:x=4]':
    'B (leader, term 3): [1:x=1] [1:x=2] [2:x=3] [3:x=5]\nA (follower):        [1:x=1] [1:x=2] [2:x=3] [2:x=4]',
  'B가 4번 칸 [3:x=5]를 보내며 "앞 칸은 3번, 임기 2"라고 알리면, A는 받아들인다.': 'When B sends entry 4 [3:x=5] saying "the previous entry is 3, term 2", A accepts it.',
  'A의 3번 칸도 임기 2라서 앞 칸이 맞습니다. 그 뒤(4번)를 B의 칸으로 바꿉니다.': 'A\'s entry 3 is term 2 as well, so the previous entry matches. What follows (entry 4) is replaced with B\'s.',
  '그 결과 A의 4번 칸은 [2:x=4]에서 [3:x=5]로 바뀐다.': 'As a result, A\'s entry 4 changes from [2:x=4] to [3:x=5].',
  '확정되지 않았던 x=4는 리더의 칸으로 덮어써 사라집니다.': 'The uncommitted x=4 is overwritten by the leader\'s entry and vanishes.',
  '팔로워는 리더가 보낸 칸이 자기 것과 다르면 리더를 거꾸로 고친다.': 'If an entry from the leader differs from its own, the follower corrects the leader instead.',
  '정보는 언제나 리더에서 팔로워로만 흐릅니다. 팔로워가 리더를 고치지 않습니다.': 'Information always flows only from leader to followers. A follower never corrects the leader.',
  '앞 칸 확인 덕분에, 두 로그에서 같은 번호·같은 임기의 칸이 있으면 그 앞은 모두 같다.': 'Thanks to the previous-entry check, if two logs have an entry with the same index and term, everything before it is the same.',
  '칸마다 앞 칸이 맞는지 확인하며 쌓았기 때문입니다. 이것을 로그 일치 성질이라 합니다.': 'Because every entry was added only after checking the one before. This is called the log matching property.',
  '팔로워의 로그가 리더보다 100칸 뒤처져 있다면 리더는 어떻게 할까요?': 'If a follower\'s log is 100 entries behind the leader, what does the leader do?',
  '거절당할 때마다 한 칸씩 물러나며 맞는 곳을 찾은 뒤, 그 뒤 칸들을 차례로 보냅니다. 실제 구현은 팔로워가 "내 마지막 칸은 몇 번"이라고 알려 주어 한 번에 많이 물러나기도 합니다.':
    'It steps back one entry per refusal until it finds a match, then sends the entries after it in order. Real implementations often have the follower say "my last entry is number so-and-so" so the leader can step back many at once.',
  // Step 4
  '구현의 함정': 'Implementation pitfalls',
  '시간 초과, 디스크, 넘겨주기를 제대로 해야 한다': 'Get timeouts, disk and redirection right',
  '규칙을 알아도 구현에서 자주 틀리는 곳이 있습니다. 선거 시간 초과가 모두 같으면 여러 서버가 동시에 후보가 되어 표가 갈립니다. 임기와 투표 기록을 디스크에 쓰지 않으면, 다시 켠 서버가 같은 임기에 또 투표할 수 있습니다. 하트비트가 너무 드물면 멀쩡한 리더가 죽은 줄 알고 선거가 계속 열립니다.':
    'Even knowing the rules, implementations often go wrong in a few places. If every election timeout is the same, several servers become candidates at once and the votes split. If the term and vote are not written to disk, a restarted server can vote again in the same term. If heartbeats are too rare, a healthy leader is taken for dead and elections keep starting.',
  '6.2처럼 테스트가 중요합니다. 합의 구현은 서버를 임의로 끄고, 네트워크를 끊고, 메시지 순서를 섞는 테스트로 검증합니다.':
    'As in 6.2, testing matters. A consensus implementation is verified with tests that shut servers down at random, cut the network and shuffle the order of messages.',
  '다음 구현 선택이 올바른지 고르세요.': 'Choose whether each implementation choice is right.',
  '올바르다': 'Right', '버그를 부른다': 'Causes a bug',
  '선거 시간 초과를 서버마다 150–300ms 사이에서 무작위로 정한다.': 'Each server picks its election timeout at random between 150 and 300 ms.',
  '서로 다른 순간에 깨어나므로 보통 한 서버가 먼저 후보가 되어 표를 모읍니다.': 'They wake at different moments, so usually one server becomes a candidate first and gathers the votes.',
  '투표한 후보와 현재 임기를 메모리에만 두고 디스크에는 쓰지 않는다.': 'Keep the candidate voted for and the current term only in memory, not on disk.',
  '다시 켜면 잊어버려 같은 임기에 두 번 투표할 수 있고, 리더가 둘이 될 수 있습니다. 답하기 전에 디스크에 씁니다.': 'After a restart it forgets and can vote twice in the same term, giving two leaders. Write to disk before replying.',
  '하트비트 간격(500ms)을 선거 시간 초과(150–300ms)보다 길게 둔다.': 'Make the heartbeat interval (500 ms) longer than the election timeout (150–300 ms).',
  '리더가 멀쩡해도 팔로워가 매번 시간 초과로 선거를 엽니다. 하트비트는 시간 초과보다 훨씬 자주 보내야 합니다.': 'Even with a healthy leader, followers time out and start an election every time. Heartbeats must be sent much more often than the timeout.',
  '팔로워가 클라이언트 쓰기를 받으면 직접 기록하지 않고 리더 주소를 알려 준다.': 'When a follower gets a client write, it does not record it but gives the leader\'s address.',
  '쓰기 순서는 리더 한 곳에서만 정합니다. 팔로워는 리더로 안내합니다.': 'Only the leader decides the order of writes. Followers point to the leader.',
  '합의 구현을 테스트할 때 꼭 넣어야 할 상황 세 가지를 꼽아 보세요.': 'Name three situations a test of a consensus implementation must include.',
  '리더를 갑자기 끄기, 네트워크를 갈라 소수 쪽에 옛 리더 남기기(7.9의 4단계), 메시지를 늦게·중복으로·순서 바꿔 보내기입니다. 매번 "확정된 값이 바뀌지 않았는가"를 확인합니다.':
    'Killing the leader suddenly, splitting the network to leave the old leader on the minority side (step 4 of 7.9), and delivering messages late, twice or out of order. Each time, check that "no committed value changed".',
  // Reading examples
  '3번 칸 [2:x=3]이 A, B에 있음': 'slot 3 [2:x=3] is on A and B', '3대 중 2대로 과반': '2 of 3: a majority', '3번 칸까지 확정': 'committed up to slot 3', 'B가 요청하면 C는 표를 줌 (B가 앞섬)': 'B asks: C votes yes (B is ahead)', 'C가 요청하면 B가 로그를 비교': 'C asks: B compares logs', '임기 1 < 2라 B는 거절': 'term 1 < 2, so B refuses', '팔로워 A의 4번 칸 [2:x=4]': 'follower A\'s slot 4 [2:x=4]', 'B가 "앞 칸은 3번, 임기 2"로 확인': 'B checks "previous: slot 3, term 2"', '4번 칸을 [3:x=5]로 덮어씀': 'slot 4 overwritten with [3:x=5]', '모두 같은 시간 초과면 동시에 선거': 'same timeout: elections at once', '150–300ms에서 무작위로 기다림': 'wait a random 150–300ms', '한 서버가 먼저 표를 모음': 'one server gathers votes first',
};
