// English for Networking 3.2 Routing tables. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '라우팅 표 · 레슨 3.2': 'Routing tables · Lesson 3.2',
  '네트워크 3장 라우팅 · 레슨 3.2': 'Networking chapter 3 Routing · Lesson 3.2',
  '라우터가 목적지에 맞는 표의 줄 가운데 접두사가 가장 긴 줄의 출구를 고르는 길, 맞는 줄이 없으면 기본 경로로 보내거나 버리는 길을 따라가 보세요.':
    'Follow a router choosing, among the table lines that match a destination, the exit of the line with the longest prefix, and sending to the default route or dropping when nothing else matches.',
  '라우터는 받은 패킷을 어느 출구로 내보낼지 표에서 어떻게 고를까요? 목적지를 바꿔 가며 라우터로 패킷을 보내 보세요.':
    'How does a router pick from its table which exit a packet leaves by? Send packets to the router with different destinations.',
  '목적지에 맞는 줄이 여럿이면 라우터는 어느 줄을 고를까?': 'When several lines match a destination, which one does the router pick?',
  '라우터와 출구 셋': 'A router and three exits',
  '왼쪽에서 들어온 패킷을 라우터가 표의 맞는 줄 가운데 가장 긴 접두사의 출구로 보내거나, 맞는 줄이 없어 버리는 장면':
    'A packet coming in from the left sent by the router to the exit of the longest matching prefix in its table, or dropped when no line matches',
  '케이블': 'Cable', '들어오는 쪽': 'Incoming side', '라우터': 'Router', '출구 (다음 네트워크)': 'Exit (next network)', '보낸 쪽': 'Sender', '출구': 'Exit', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  '출구 1 · 인터넷 (0.0.0.0/0)': 'Exit 1 · internet (0.0.0.0/0)', '출구 2 · /8 · /16 줄': 'Exit 2 · /8 · /16 lines', '출구 1 · 인터넷 (표에서 0.0.0.0/0 지움)': 'Exit 1 · internet (0.0.0.0/0 removed)', '라우터 → 출구 2 · /8 · /16 줄': 'Router → exit 2 · /8 · /16 lines', '출구 3 · 10.1.2.0/24': 'Exit 3 · 10.1.2.0/24',
  '들어오는 쪽 → 라우터': 'Incoming side → router', '라우터 → 출구 1 · 인터넷 (0.0.0.0/0)': 'Router → exit 1 · internet (0.0.0.0/0)', '라우터 → 출구 2 · 10.0.0.0/8': 'Router → exit 2 · 10.0.0.0/8',
  '라우터 → 출구 3 · 10.1.2.0/24': 'Router → exit 3 · 10.1.2.0/24', '라우터 → 들어오는 쪽': 'Router → incoming side',
  '라우터 · 출구 1': 'Router · exit 1', '라우터 · 출구 2': 'Router · exit 2', '라우터 · 출구 3': 'Router · exit 3', '라우터 · ICMP 닿을 수 없음': 'Router · ICMP unreachable',
  // Work panel
  '라우터의 표': 'The router\'s table', '라우터의 표 (기본 경로 없음)': 'The router\'s table (no default route)',
  '0.0.0.0/0     → 출구 1': '0.0.0.0/0     → exit 1', '10.0.0.0/8    → 출구 2': '10.0.0.0/8    → exit 2', '10.1.0.0/16   → 출구 2': '10.1.0.0/16   → exit 2', '10.1.2.0/24   → 출구 3': '10.1.2.0/24   → exit 3',
  '표 찾기: 10.2.0.9': 'Table lookup: 10.2.0.9', '표 찾기: 10.1.2.7': 'Table lookup: 10.1.2.7', '표 찾기: 8.8.8.8': 'Table lookup: 8.8.8.8',
  '0.0.0.0/0     맞음': '0.0.0.0/0     matches', '10.0.0.0/8    맞음 (10.x)': '10.0.0.0/8    matches (10.x)', '10.1.0.0/16   아님 (10.2 ≠ 10.1)': '10.1.0.0/16   no (10.2 ≠ 10.1)', '10.1.2.0/24   아님': '10.1.2.0/24   no',
  '가장 긴 맞는 줄 /8 → 출구 2': 'Longest matching line /8 → exit 2', '10.0.0.0/8    맞음': '10.0.0.0/8    matches', '10.1.0.0/16   맞음': '10.1.0.0/16   matches', '10.1.2.0/24   맞음': '10.1.2.0/24   matches',
  '가장 긴 /24 → 출구 3': 'Longest /24 → exit 3', '10.0.0.0/8    아님': '10.0.0.0/8    no', '10.1.0.0/16   아님': '10.1.0.0/16   no', '맞는 줄 /0뿐 → 출구 1': 'Only /0 matches → exit 1',
  '출구 1': 'Exit 1', '출구 2': 'Exit 2', '출구 3': 'Exit 3', '10.2.0.9 받음': 'Got 10.2.0.9', '10.1.2.7 받음': 'Got 10.1.2.7', '8.8.8.8 → 인터넷 쪽으로': '8.8.8.8 → toward the internet',
  '맞는 줄 없음 → 버림': 'No match → dropped', 'ICMP: 목적지에 닿을 수 없음 (8.8.8.8)': 'ICMP: destination unreachable (8.8.8.8)',
  // Badges and moving labels
  '표 4줄': 'Table: 4 lines', '→ 10.2.0.9': '→ 10.2.0.9', '가장 긴 /8 → 출구 2': 'Longest /8 → exit 2', '/0 맞음': '/0 matches', '/8 맞음': '/8 matches', '/24 아님': '/24 no',
  '/8 맞음 · 10.2.0.9 받음': '/8 matches · got 10.2.0.9', '→ 10.1.2.7': '→ 10.1.2.7', '/8 · /16 맞음': '/8 · /16 match', '/24 맞음': '/24 matches',
  '/24 맞음 · 10.1.2.7 받음': '/24 matches · got 10.1.2.7', '/8 · /16 맞음 · 안 옴': '/8 · /16 match · nothing arrives', '→ 8.8.8.8': '→ 8.8.8.8', '/0뿐 → 기본 경로 → 출구 1': 'Only /0 → default route → exit 1',
  '/8 아님': '/8 no', '/0 맞음 · 8.8.8.8 → 인터넷': '/0 matches · 8.8.8.8 → internet', '표 3줄 · 0.0.0.0/0 없음': 'Table: 3 lines · no 0.0.0.0/0', '줄 없음': 'No line', '줄 없음 · 안 옴': 'No line · none',
  'ICMP 닿을 수 없음': 'ICMP unreachable', 'ICMP: 닿을 수 없음': 'ICMP: unreachable', '8.8.8.8 닿을 수 없음': '8.8.8.8 unreachable', '길 없음 · 안 옴': 'No route · none',
  // Step 1
  '맞는 줄이 하나': 'One matching line',
  '목적지에 맞는 줄 가운데 접두사가 더 긴 줄의 출구로 보낸다': 'Of the lines matching the destination, the one with the longer prefix sets the exit',
  '라우터의 표에는 줄이 넷 있습니다. 0.0.0.0/0(어디든) → 출구 1, 10.0.0.0/8 → 출구 2, 10.1.0.0/16 → 출구 2, 10.1.2.0/24 → 출구 3. 목적지 10.2.0.9를 각 줄의 마스크와 AND 해 보면(2.1), /0과 /8 두 줄에 맞습니다. 10.1.0.0/16과 10.1.2.0/24에는 맞지 않습니다. 맞는 줄 가운데 접두사가 더 긴 /8 줄을 골라 출구 2로 보냅니다.':
    'The router\'s table has four lines: 0.0.0.0/0 (anywhere) → exit 1, 10.0.0.0/8 → exit 2, 10.1.0.0/16 → exit 2, 10.1.2.0/24 → exit 3. ANDing the destination 10.2.0.9 with each line\'s mask (2.1) shows it matches two lines, /0 and /8. It does not match 10.1.0.0/16 or 10.1.2.0/24. Of the matching lines, the router picks /8, the longer prefix, and sends the packet to exit 2.',
  '출구 이름표에 맞은 줄이 적힙니다(출구 1 "/0 맞음", 출구 2 "/8 맞음", 출구 3 "/24 아님"). 라우터 이름표가 "가장 긴 /8 → 출구 2"가 되고, 패킷이 위쪽 출구 2로 가서 그 이름표가 "/8 맞음 · 10.2.0.9 받음"이 됩니다.':
    'The exits\' badges show which lines matched (exit 1 "/0 matches", exit 2 "/8 matches", exit 3 "/24 no"). The router\'s badge becomes "longest /8 → exit 2", and the packet goes up to exit 2, whose badge becomes "/8 matches · got 10.2.0.9".',
  '왼쪽에서 들어온 패킷이 가운데 라우터에 닿습니다. 라우터 위에 출구 2(10.0.0.0/8), 오른쪽에 출구 1(인터넷, 0.0.0.0/0), 아래에 출구 3(10.1.2.0/24)이 있습니다. 목적지 10.2.0.9는 /0과 /8에 맞아, 더 긴 /8 줄의 출구 2로 갑니다.':
    'A packet coming in from the left reaches the router in the middle. Above the router is exit 2 (10.0.0.0/8), to the right exit 1 (internet, 0.0.0.0/0), and below exit 3 (10.1.2.0/24). The destination 10.2.0.9 matches /0 and /8, and goes to exit 2, the line with the longer /8.',
  '목적지 10.2.0.9': 'Destination 10.2.0.9', '맞는 줄: 0.0.0.0/0 · 10.0.0.0/8': 'Matching lines: 0.0.0.0/0 · 10.0.0.0/8', '더 긴 /8': 'The longer /8',
  '라우터가 표의 줄마다 목적지가 맞는지 봅니다. /0과 /8이 맞습니다.': 'The router checks each table line against the destination. /0 and /8 match.',
  '10.2.0.9는 0.0.0.0/0과 10.0.0.0/8 두 줄에 맞습니다. 어느 출구로 갈까요?': '10.2.0.9 matches two lines, 0.0.0.0/0 and 10.0.0.0/8. Which exit does it take?',
  '출구 1 (0.0.0.0/0)': 'Exit 1 (0.0.0.0/0)', '출구 2 (10.0.0.0/8)': 'Exit 2 (10.0.0.0/8)', '둘 다': 'Both',
  '맞는 줄이 여럿이면 접두사가 가장 긴, 곧 가장 구체적인 줄을 고릅니다. /8이 /0보다 깁니다.': 'When several lines match, the one with the longest prefix, the most specific, is chosen. /8 is longer than /0.',
  '패킷이 출구 2로 나갑니다.': 'The packet leaves by exit 2.',
  // Step 2
  '가장 긴 접두사': 'The longest prefix',
  '여러 줄에 맞으면 가장 긴 접두사, 곧 가장 구체적인 줄을 고른다': 'When several lines match, the longest prefix, the most specific line, wins',
  '목적지가 10.1.2.7이면 네 줄 모두에 맞습니다. 0.0.0.0/0은 모든 주소에, 10.0.0.0/8은 10.으로 시작하는 주소에, 10.1.0.0/16은 10.1.로, 10.1.2.0/24는 10.1.2.로 시작하는 주소에 맞기 때문입니다. 라우터는 이 가운데 접두사가 가장 긴 /24 줄을 골라 출구 3으로 보냅니다. 길수록 더 좁은 범위, 더 정확한 길이라서입니다(최장 접두사 일치).':
    'The destination 10.1.2.7 matches all four lines: 0.0.0.0/0 matches every address, 10.0.0.0/8 those starting 10., 10.1.0.0/16 those starting 10.1., and 10.1.2.0/24 those starting 10.1.2.. The router picks the line with the longest prefix, /24, and sends the packet to exit 3. The longer the prefix, the narrower the range and the more precise the route (longest-prefix match).',
  '세 출구 모두 맞은 줄이 있습니다(출구 1 "/0 맞음", 출구 2 "/8 · /16 맞음", 출구 3 "/24 맞음"). 라우터 이름표가 "가장 긴 /24 → 출구 3"이 되고, 출구 3 이름표는 "/24 맞음 · 10.1.2.7 받음", 출구 2는 "/8 · /16 맞음 · 안 옴"입니다.':
    'All three exits have a matching line (exit 1 "/0 matches", exit 2 "/8 · /16 match", exit 3 "/24 matches"). The router\'s badge becomes "longest /24 → exit 3"; exit 3 reads "/24 matches · got 10.1.2.7" and exit 2 "/8 · /16 match · nothing arrives".',
  '같은 배치에서 목적지 10.1.2.7은 표의 네 줄에 모두 맞습니다. 가장 긴 10.1.2.0/24 줄을 골라 아래 출구 3으로 갑니다.':
    'In the same layout, the destination 10.1.2.7 matches all four table lines. The longest, 10.1.2.0/24, is chosen, and the packet goes down to exit 3.',
  '목적지 10.1.2.7': 'Destination 10.1.2.7', '맞는 줄: /0 · /8 · /16 · /24': 'Matching lines: /0 · /8 · /16 · /24', '가장 긴 /24': 'The longest /24',
  '네 줄이 모두 맞습니다. 라우터는 가장 긴 /24를 고릅니다.': 'All four lines match. The router picks the longest, /24.',
  '10.1.2.7은 /0, /8, /16, /24 네 줄에 모두 맞습니다. 어느 줄을 고를까요?': '10.1.2.7 matches all four lines: /0, /8, /16 and /24. Which line is chosen?',
  '표의 첫 줄 /0': 'The first line, /0', '가운데 /16': 'The middle one, /16',
  '접두사가 길수록 범위가 좁고 정확합니다. 라우터는 가장 긴 줄을 고릅니다.': 'The longer the prefix, the narrower and more precise the range. The router picks the longest line.',
  '패킷이 아래 출구 3으로 나갑니다. 출구 2로는 가지 않습니다.': 'The packet leaves by exit 3 below. Nothing goes to exit 2.',
  // Step 3
  '아무 데도 안 맞으면': 'When nothing else matches',
  '다른 줄에 맞지 않으면 기본 경로 0.0.0.0/0으로 보낸다': 'When no other line matches, the packet takes the default route 0.0.0.0/0',
  '목적지 8.8.8.8은 10.으로 시작하지 않으니 /8, /16, /24 줄에 맞지 않습니다. 남은 줄은 0.0.0.0/0뿐입니다. 접두사 길이가 0이라 모든 주소에 맞는 이 줄을 기본 경로라고 하고, 집이나 회사에서는 보통 인터넷 쪽을 가리킵니다. 그래서 8.8.8.8은 출구 1로 나갑니다.':
    'The destination 8.8.8.8 does not start with 10., so it matches none of the /8, /16 and /24 lines. Only 0.0.0.0/0 is left. With a prefix length of 0 it matches every address; it is called the default route and at home or in an office usually points toward the internet. So 8.8.8.8 leaves by exit 1.',
  '출구 2는 "/8 아님", 출구 3은 "/24 아님"이고, 라우터 이름표가 "/0뿐 → 기본 경로 → 출구 1"이 됩니다. 패킷이 오른쪽 출구 1로 가서 그 이름표가 "/0 맞음 · 8.8.8.8 → 인터넷"이 됩니다.':
    'Exit 2 reads "/8 no" and exit 3 "/24 no", and the router\'s badge becomes "only /0 → default route → exit 1". The packet goes to exit 1 on the right, whose badge becomes "/0 matches · 8.8.8.8 → internet".',
  '같은 배치에서 목적지 8.8.8.8은 0.0.0.0/0에만 맞습니다. 기본 경로를 따라 오른쪽 출구 1(인터넷)로 갑니다.':
    'In the same layout, the destination 8.8.8.8 matches only 0.0.0.0/0. It follows the default route to exit 1 (internet) on the right.',
  '목적지 8.8.8.8': 'Destination 8.8.8.8', '10.x 줄 모두 아님': 'None of the 10.x lines', '맞는 줄 0.0.0.0/0뿐 (기본 경로)': 'Only 0.0.0.0/0 matches (default route)',
  '8.8.8.8은 0.0.0.0/0에만 맞습니다.': '8.8.8.8 matches only 0.0.0.0/0.',
  '8.8.8.8은 10.으로 시작하지 않습니다. 어느 출구로 갈까요?': '8.8.8.8 does not start with 10.. Which exit does it take?',
  '출구 1 (기본 경로)': 'Exit 1 (default route)', '버린다': 'Drop it',
  '0.0.0.0/0은 모든 주소에 맞는 기본 경로입니다. 다른 줄에 맞지 않으면 이 줄을 탑니다.': '0.0.0.0/0 is the default route that matches every address. A packet that matches no other line takes it.',
  '패킷이 기본 경로를 따라 출구 1로 나갑니다.': 'The packet leaves by exit 1, following the default route.',
  // Step 4
  '기본 경로가 없으면': 'Without a default route',
  '맞는 줄이 하나도 없으면 버리고 보낸 쪽에 알린다': 'When no line matches at all, the packet is dropped and the sender is told',
  '이번에는 표에서 기본 경로 0.0.0.0/0을 지웠습니다(설정 실수나 회선 장애로 사라진 경우). 8.8.8.8은 남은 세 줄 어디에도 맞지 않습니다. 라우터는 어디로 보낼지 모르니 패킷을 버리고, 보낸 쪽에 ICMP "목적지에 닿을 수 없음"을 돌려보냅니다. 같은 라우터를 지나는 10.x 주소는 여전히 잘 가기 때문에, "인터넷만 안 된다"는 고장으로 보입니다.':
    'This time the default route 0.0.0.0/0 has been removed from the table (by a configuration mistake or a failed line). 8.8.8.8 matches none of the three remaining lines. Not knowing where to send it, the router drops the packet and returns an ICMP "destination unreachable" to the sender. 10.x addresses through the same router still work, so it looks like "only the internet is down".',
  '라우터 이름표가 경고 색 "맞는 줄 없음 → 버림"이 되고, ICMP가 왼쪽 들어오는 쪽으로 돌아가 그 이름표가 "8.8.8.8 닿을 수 없음"이 됩니다. 출구 1 이름은 "표에서 0.0.0.0/0 지움", 이름표는 "줄 없음 · 안 옴"입니다.':
    'The router\'s badge turns to the warning colour "no match → dropped", and ICMP goes back to the incoming side on the left, whose badge becomes "8.8.8.8 unreachable". Exit 1 is now named "0.0.0.0/0 removed" and its badge reads "no line · none".',
  '같은 배치에서 표의 기본 경로가 사라졌습니다. 목적지 8.8.8.8은 맞는 줄이 없어 라우터가 버리고, 들어오는 쪽에 ICMP로 닿을 수 없다고 알립니다.':
    'In the same layout, the table\'s default route is gone. The destination 8.8.8.8 matches no line, so the router drops it and tells the incoming side by ICMP that it is unreachable.',
  '표에 0.0.0.0/0 없음': 'No 0.0.0.0/0 in the table', '8.8.8.8 맞는 줄 없음': 'No line matches 8.8.8.8', '버림': 'Dropped', 'ICMP "닿을 수 없음"을 보낸 쪽에': 'ICMP "unreachable" to the sender',
  '맞는 줄이 하나도 없어 라우터가 패킷을 버립니다.': 'No line matches, so the router drops the packet.',
  '기본 경로가 없는 표에서 8.8.8.8은 어느 줄에도 맞지 않습니다. 라우터는?': 'With no default route in the table, 8.8.8.8 matches no line. What does the router do?',
  '아무 출구로나 보낸다': 'Sends it out of any exit', '버리고 보낸 쪽에 알린다': 'Drops it and tells the sender', '모든 출구로 보낸다': 'Sends it out of every exit',
  '라우터는 맞는 줄이 없는 패킷을 보낼 곳이 없습니다. 버리고 ICMP로 닿을 수 없다고 알립니다.': 'A router has nowhere to send a packet that matches no line. It drops it and reports by ICMP that it is unreachable.',
  '라우터가 보낸 쪽에 ICMP로 닿을 수 없다고 알립니다.': 'The router tells the sender by ICMP that the destination is unreachable.',
};
