// English for Networking 3.4 BGP. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'BGP · 레슨 3.4': 'BGP · Lesson 3.4',
  '네트워크 3장 라우팅 · 레슨 3.4': 'Networking chapter 3 Routing · Lesson 3.4',
  'AS들이 주소 묶음을 광고하며 AS 번호를 붙이고, 짧은 AS 경로보다 정책을 먼저 따라 길을 고르며, 더 긴 접두사의 거짓 광고에 길이 가로채이는 모습을 따라가 보세요.':
    'Follow autonomous systems advertising address blocks and adding their AS numbers, choosing routes by policy before AS path length, and having traffic hijacked by a false advertisement of a longer prefix.',
  '회사와 통신사들 사이, 인터넷 전체의 길은 누가 어떻게 정할까요? AS 네 곳 사이로 경로 광고와 패킷을 보내 보세요.':
    'Who decides the routes across the whole internet, between companies and carriers, and how? Send route advertisements and packets between four ASes.',
  '인터넷 전체의 길은 누가 어떻게 정할까?': 'Who decides the routes across the whole internet, and how?',
  'AS 네 곳': 'Four ASes',
  '사각형으로 이어진 AS 넷이 주소 묶음을 광고하며 AS 경로를 붙이고, 우리 회사 AS 1이 정책과 경로 길이로 길을 고르며, 거짓 광고에 길이 가로채이는 장면':
    'Four ASes joined in a square advertising address blocks with AS paths, our company AS 1 choosing a route by policy and path length, and traffic hijacked by a false advertisement',
  'AS 사이 연결': 'Link between ASes', 'AS (자율 시스템)': 'AS (autonomous system)', '신호가 막 닿은 곳': 'Where the signal just arrived', '오류': 'Error',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations and legs
  '우리 회사 · AS 1': 'Our company · AS 1', '통신사 A · AS 2': 'Carrier A · AS 2', '통신사 B · AS 3': 'Carrier B · AS 3', '목적지 · AS 4 · 203.0.113.0/24': 'Destination · AS 4 · 203.0.113.0/24', '거짓 광고 · AS 666': 'False advertiser · AS 666',
  'AS 9 거침': 'via AS 9', '선호도 100': 'preference 100', '선호도 200': 'preference 200', '/24 광고': '/24 advertised', '/25 거짓 광고': '/25 falsely advertised', '광고: /24 · 경로 4': 'Ad: /24 · path 4', '다시 광고: 2 4': 'Sends on: 2 4', '다시 광고: 3 9 4': 'Sends on: 3 9 4', '/24 · /25 둘 다 맞음 → 더 긴 /25로': '/24 and /25 match → the longer /25', '/24 길 · 안 씀': '/24 route · unused',
  '목적지 · AS 4 · 203.0.113.0/24 → 통신사 A · AS 2': 'Destination · AS 4 · 203.0.113.0/24 → carrier A · AS 2', '목적지 · AS 4 · 203.0.113.0/24 → 통신사 B · AS 3': 'Destination · AS 4 · 203.0.113.0/24 → carrier B · AS 3',
  '통신사 A · AS 2 → 우리 회사 · AS 1': 'Carrier A · AS 2 → our company · AS 1', '통신사 B · AS 3 → 우리 회사 · AS 1': 'Carrier B · AS 3 → our company · AS 1',
  '우리 회사 · AS 1 → 통신사 A · AS 2': 'Our company · AS 1 → carrier A · AS 2', '통신사 A · AS 2 → 목적지 · AS 4 · 203.0.113.0/24': 'Carrier A · AS 2 → destination · AS 4 · 203.0.113.0/24',
  '우리 회사 · AS 1 → 통신사 B · AS 3': 'Our company · AS 1 → carrier B · AS 3', '통신사 B · AS 3 → 목적지 · AS 4 · 203.0.113.0/24': 'Carrier B · AS 3 → destination · AS 4 · 203.0.113.0/24',
  '거짓 광고 · AS 666 → 우리 회사 · AS 1': 'False advertiser · AS 666 → our company · AS 1', '우리 회사 · AS 1 → 거짓 광고 · AS 666': 'Our company · AS 1 → false advertiser · AS 666',
  '통신사 B · AS 3 · 경로 3 9 4': 'Carrier B · AS 3 · path 3 9 4', '우리 회사 · AS 1 · → 203.0.113.10': 'Our company · AS 1 · → 203.0.113.10', '통신사 A · AS 2 · → 203.0.113.10': 'Carrier A · AS 2 · → 203.0.113.10', '통신사 B · AS 3 · AS 9 거쳐': 'Carrier B · AS 3 · via AS 9',
  // Work panel
  'AS 4가 광고할 것': 'What AS 4 will advertise', '주소 묶음  203.0.113.0/24': 'Address block  203.0.113.0/24', 'AS 경로  4': 'AS path  4',
  'AS 2': 'AS 2', 'AS 3': 'AS 3', 'AS 1': 'AS 1', 'AS 4': 'AS 4',
  '받음  203.0.113.0/24 · 경로 4': 'Received  203.0.113.0/24 · path 4', '내 번호를 붙여 다시 광고  경로 2 4': 'Re-advertised with my number added  path 2 4',
  'AS 9를 거쳐 받음  경로 9 4': 'Received via AS 9  path 9 4', '내 번호를 붙여 다시 광고  경로 3 9 4': 'Re-advertised with my number added  path 3 9 4',
  '받음  203.0.113.0/24 · 경로 2 4': 'Received  203.0.113.0/24 · path 2 4', '받음  경로 2 4  (AS 2에게서)': 'Received  path 2 4  (from AS 2)', '받음  경로 3 9 4  (AS 3에게서)': 'Received  path 3 9 4  (from AS 3)',
  'AS 1이 가진 경로': 'Routes AS 1 holds', '203.0.113.0/24  경로 2 4  선호도 100': '203.0.113.0/24  path 2 4  preference 100', '203.0.113.0/24  경로 3 9 4  선호도 100': '203.0.113.0/24  path 3 9 4  preference 100',
  'AS 1의 고르기': 'AS 1\'s choice', '선호도 100 = 100 → 다음 기준': 'Preference 100 = 100 → next criterion', 'AS 경로 길이 2 < 3 → 2 4': 'AS path length 2 < 3 → 2 4', '다음: AS 2': 'Next: AS 2', 'AS 2 쪽으로 받음': 'Arrived via AS 2',
  '203.0.113.0/24  경로 3 9 4  선호도 200 (계약이 쌈)': '203.0.113.0/24  path 3 9 4  preference 200 (cheaper contract)', '선호도 200 > 100 → 3 9 4': 'Preference 200 > 100 → 3 9 4', '(경로 길이는 보지 않음)': '(path length not considered)', '다음: AS 3': 'Next: AS 3',
  'AS 3 → AS 9 → AS 4로 받음': 'Arrived via AS 3 → AS 9 → AS 4',
  'AS 1의 표': 'AS 1\'s table', '203.0.113.0/24  → AS 2': '203.0.113.0/24  → AS 2', '203.0.113.0/25  → AS 666  (방금 받음)': '203.0.113.0/25  → AS 666  (just received)',
  '203.0.113.10 → /24 · /25 둘 다 맞음': '203.0.113.10 → both /24 and /25 match', '가장 긴 /25 → AS 666': 'Longest /25 → AS 666',
  // Badges and moving labels
  '아직 모름': 'Knows nothing yet', '/24 · 경로 4': '/24 · path 4', '광고: 203.0.113.0/24 · 경로 4': 'Ad: 203.0.113.0/24 · path 4', '경로 2 4로 다시 광고': 'Sends on: 2 4',
  '/24 · 경로 9 4': '/24 · path 9 4', '경로 3 9 4로 다시 광고': 'Sends on: 3 9 4', '경로 2 4': 'Path 2 4', '받음: 2 4': 'Received: 2 4', '경로 3 9 4': 'Path 3 9 4', '받음: 2 4 · 3 9 4': 'Received: 2 4 · 3 9 4',
  '→ 203.0.113.10': '→ 203.0.113.10', '2 4 (2개) < 3 9 4 (3개) → AS 2로': '2 4 (2 ASes) < 3 9 4 (3) → to AS 2', '안 거침': 'Not on the path',
  '선호도: AS 3 200 · AS 2 100': 'Preference: AS 3 200 · AS 2 100', '선호도 200 > 100 → AS 3로 (경로는 더 김)': 'Preference 200 > 100 → to AS 3 (longer path)', 'AS 9 거쳐': 'via AS 9', '다음: AS 9 → AS 4': 'Next: AS 9 → AS 4', 'AS 3 쪽으로 받음': 'Arrived via AS 3',
  '203.0.113.0/24 → AS 2': '203.0.113.0/24 → AS 2', '거짓: /25': 'False: /25', '거짓 광고: 203.0.113.0/25': 'False advertisement: 203.0.113.0/25', '/25가 /24보다 김 → AS 666으로': '/25 is longer than /24 → to AS 666', '안 옴': 'Nothing arrives',
  // Step 1
  '광고와 AS 경로': 'Advertisements and AS paths',
  'AS는 주소 묶음을 광고하고, 지나는 AS마다 자기 번호를 앞에 붙인다': 'An AS advertises its address block, and each AS on the way adds its own number in front',
  'AS 4는 203.0.113.0/24 주소 묶음을 가진 네트워크입니다. AS 4는 이웃 통신사들에게 "203.0.113.0/24는 우리에게 오면 된다, 경로 4"라고 광고합니다. 광고를 받은 AS 2는 자기 번호를 앞에 붙여 "경로 2 4"로 다시 광고합니다. AS 3 쪽은 AS 9를 거쳐 와서 "경로 3 9 4"가 됩니다. 우리 회사 AS 1은 두 광고를 받아 같은 목적지로 가는 길이 둘임을 압니다. 경로에 자기 번호가 이미 있는 광고는 버려서 고리를 막습니다.':
    'AS 4 is the network that holds the address block 203.0.113.0/24. It advertises to its neighbouring carriers: "for 203.0.113.0/24, come to us; path 4". AS 2, receiving it, adds its own number in front and re-advertises it as "path 2 4". On the AS 3 side it comes through AS 9 and becomes "path 3 9 4". Our company, AS 1, receives both and knows there are two ways to the same destination. An advertisement whose path already contains one\'s own number is discarded, which prevents loops.',
  'AS 4 이름표가 "광고: /24 · 경로 4"이고, AS 2와 AS 3이 번호를 붙여 "다시 광고: 2 4", "다시 광고: 3 9 4"가 됩니다. AS 1 이름표에 "받음: 2 4 · 3 9 4"가 남습니다.':
    'AS 4\'s badge reads "ad: /24 · path 4", and AS 2 and AS 3 add their numbers: "sends on: 2 4" and "sends on: 3 9 4". AS 1\'s badge ends with "received: 2 4 · 3 9 4".',
  'AS 넷이 사각형으로 이어져 있습니다. 왼쪽 위 우리 회사 AS 1, 오른쪽 위 통신사 A AS 2, 왼쪽 아래 통신사 B AS 3, 오른쪽 아래 목적지 AS 4(203.0.113.0/24)이고, AS 3–AS 4 사이는 AS 9를 거칩니다. AS 4의 광고가 AS 2와 AS 3에서 번호가 붙어 AS 1에 경로 2 4와 3 9 4로 닿습니다.':
    'Four ASes are joined in a square: our company AS 1 top left, carrier A AS 2 top right, carrier B AS 3 bottom left and the destination AS 4 (203.0.113.0/24) bottom right; between AS 3 and AS 4 the link goes via AS 9. AS 4\'s advertisement gains numbers at AS 2 and AS 3 and reaches AS 1 as paths 2 4 and 3 9 4.',
  'AS 4: 203.0.113.0/24 · 경로 4': 'AS 4: 203.0.113.0/24 · path 4', 'AS 2: 경로 2 4': 'AS 2: path 2 4', ' · ': ' · ', 'AS 3: 경로 3 9 4': 'AS 3: path 3 9 4', 'AS 1이 두 경로를 받음': 'AS 1 receives two paths',
  'AS 4가 AS 2에게 광고합니다. AS 2는 자기 번호를 앞에 붙입니다.': 'AS 4 advertises to AS 2. AS 2 adds its own number in front.',
  'AS 3 쪽은 AS 9를 거쳐 받습니다. 경로가 3 9 4가 됩니다.': 'On the AS 3 side it arrives via AS 9. The path becomes 3 9 4.',
  'AS 1이 AS 2에게서 경로 2 4를 받습니다.': 'AS 1 receives path 2 4 from AS 2.',
  'AS 2가 경로 "4"를 받아 AS 1에게 다시 광고합니다. 경로는 어떻게 될까요?': 'AS 2 receives path "4" and re-advertises it to AS 1. What does the path become?',
  '4 그대로': '4, unchanged', '2 4 (자기 번호를 앞에)': '2 4 (its own number in front)', '4 2': '4 2',
  '광고가 AS를 지날 때마다 그 AS 번호가 앞에 붙습니다. 그래서 경로를 보면 거쳐 갈 AS들을 알 수 있습니다.': 'Each AS an advertisement passes adds its number in front, so the path shows the ASes a packet will pass.',
  'AS 3에게서도 경로 3 9 4를 받습니다. 같은 목적지로 가는 길이 둘입니다.': 'It also receives path 3 9 4 from AS 3. There are two ways to the same destination.',
  // Step 2
  '짧은 AS 경로': 'The shorter AS path',
  '다른 조건이 같으면 거치는 AS가 적은 경로를 고른다': 'Other things being equal, the path through fewer ASes is chosen',
  'AS 1은 203.0.113.0/24로 가는 경로 둘을 가지고 있습니다. 둘 다 선호도(정책)가 같으면, BGP는 AS 경로의 길이를 비교합니다. 2 4는 AS 두 개, 3 9 4는 AS 세 개라 2 4를 고르고, 203.0.113.10으로 가는 패킷을 AS 2로 보냅니다. AS 경로 길이는 거쳐 가는 회사 수일 뿐, 실제 거리나 속도를 재지는 않습니다.':
    'AS 1 holds two routes to 203.0.113.0/24. When both have the same preference (policy), BGP compares AS path length. 2 4 has two ASes and 3 9 4 three, so it chooses 2 4 and sends packets for 203.0.113.10 to AS 2. AS path length only counts the companies passed through; it does not measure real distance or speed.',
  'AS 1의 두 케이블에 "선호도 100"이 같게 적혀 있고, AS 1 이름표가 "2 4 (2개) < 3 9 4 (3개) → AS 2로"가 되고, 패킷이 AS 2를 거쳐 AS 4로 갑니다. AS 4 이름표는 "AS 2 쪽으로 받음", AS 3 이름표는 "안 거침"입니다.':
    'Both of AS 1\'s cables show the same "preference 100", AS 1\'s badge becomes "2 4 (2 ASes) < 3 9 4 (3) → to AS 2", and the packet goes through AS 2 to AS 4. AS 4\'s badge reads "arrived via AS 2" and AS 3\'s "not on the path".',
  '같은 사각형에서 AS 1이 경로 2 4와 3 9 4를 비교해 짧은 2 4를 고르고, 203.0.113.10으로 가는 패킷을 AS 2 → AS 4로 보냅니다.':
    'In the same square, AS 1 compares paths 2 4 and 3 9 4, chooses the shorter 2 4, and sends packets for 203.0.113.10 via AS 2 → AS 4.',
  '선호도 같음': 'Equal preference', '경로 2 4 (2개) < 3 9 4 (3개)': 'Path 2 4 (2) < 3 9 4 (3)', 'AS 2로': 'To AS 2', 'AS 4 받음': 'AS 4 gets it',
  'AS 1이 짧은 AS 경로 2 4를 골라 AS 2로 보냅니다.': 'AS 1 chooses the shorter AS path 2 4 and sends to AS 2.',
  '선호도가 같습니다. 경로 2 4와 3 9 4 중 무엇을 고를까요?': 'The preferences are equal. Which does it choose, path 2 4 or 3 9 4?',
  '2 4 (AS 2개)': '2 4 (2 ASes)', '3 9 4 (AS 3개)': '3 9 4 (3 ASes)', '둘 다': 'Both',
  '선호도가 같으면 BGP는 거치는 AS가 적은 경로를 고릅니다.': 'With equal preference, BGP chooses the path through fewer ASes.',
  '패킷이 AS 2를 거쳐 AS 4에 닿습니다.': 'The packet reaches AS 4 through AS 2.',
  // Step 3
  '정책이 먼저': 'Policy first',
  'BGP는 경로 길이보다 회사가 정한 선호도(정책)를 먼저 본다': 'BGP looks at the preference a company sets (policy) before path length',
  '통신사 B(AS 3)와의 계약이 더 싸서, AS 1의 운영자가 AS 3에서 받은 경로에 선호도 200을, AS 2에서 받은 경로에 100을 주었습니다. BGP는 길을 고를 때 선호도를 AS 경로 길이보다 먼저 봅니다. 그래서 경로가 더 긴 3 9 4라도 선호도가 높은 AS 3 쪽을 고릅니다. 인터넷의 길은 가장 짧은 길이 아니라 회사들의 계약과 비용이 정합니다.':
    'The contract with carrier B (AS 3) is cheaper, so AS 1\'s operators gave routes from AS 3 a preference of 200 and routes from AS 2 a preference of 100. When choosing, BGP looks at preference before AS path length. So even though 3 9 4 is longer, AS 1 chooses the higher-preference AS 3 side. Routes on the internet are set not by the shortest path but by companies\' contracts and costs.',
  'AS 3 쪽 케이블이 강조된 "선호도 200", AS 2 쪽이 "선호도 100"이고, AS 1 이름표가 "선호도 200 > 100 → AS 3로 (경로는 더 김)"이 되고, 패킷이 AS 3과 AS 9를 거쳐 AS 4로 갑니다. AS 2 이름표는 "안 거침"입니다.':
    'The AS 3 cable is highlighted "preference 200" and the AS 2 cable reads "preference 100"; AS 1\'s badge becomes "preference 200 > 100 → to AS 3 (longer path)", and the packet goes through AS 3 and AS 9 to AS 4. AS 2\'s badge reads "not on the path".',
  '같은 사각형에서 AS 1이 AS 3 쪽 경로에 선호도 200을 줍니다. 경로가 더 긴 3 9 4지만 선호도가 높아 AS 3 쪽을 고르고, 패킷이 AS 3 → AS 4로 갑니다.':
    'In the same square, AS 1 gives the AS 3 route a preference of 200. Although 3 9 4 is longer, the higher preference makes AS 1 choose the AS 3 side, and the packet goes AS 3 → AS 4.',
  '선호도: AS 3 쪽 200 · AS 2 쪽 100': 'Preference: AS 3 side 200 · AS 2 side 100', '선호도를 먼저 봄': 'Preference is checked first', '경로가 더 길어도 AS 3로': 'To AS 3 even with a longer path',
  'AS 1이 선호도가 높은 AS 3 쪽을 고릅니다. 경로 길이는 보지 않습니다.': 'AS 1 chooses the higher-preference AS 3 side. It does not look at path length.',
  'AS 3 쪽 경로는 더 길지만 선호도가 200, AS 2 쪽은 100입니다. 어느 쪽으로 보낼까요?': 'The AS 3 route is longer but has preference 200; the AS 2 route has 100. Which way does it send?',
  '짧은 AS 2 쪽': 'The shorter AS 2 side', '선호도가 높은 AS 3 쪽': 'The higher-preference AS 3 side',
  'BGP는 선호도(정책)를 AS 경로 길이보다 먼저 비교합니다.': 'BGP compares preference (policy) before AS path length.',
  '패킷이 AS 3과 AS 9를 거쳐 AS 4에 닿습니다.': 'The packet reaches AS 4 through AS 3 and AS 9.',
  // Step 4
  '거짓 광고로 가로채기': 'Hijacking with a false advertisement',
  '누군가 더 긴 접두사를 거짓으로 광고하면 길이 그쪽으로 빠진다': 'When someone falsely advertises a longer prefix, traffic leaks their way',
  'BGP는 이웃이 보낸 광고를 기본적으로 믿습니다. 이번에는 통신사 B 자리에 잘못된(또는 나쁜 뜻을 가진) AS 666이 이어져, 자기 것이 아닌 203.0.113.0/25를 광고합니다. AS 1의 라우팅 표에는 AS 2 쪽 /24와 AS 666 쪽 /25가 함께 생기고, 203.0.113.10은 두 줄에 모두 맞습니다. 3.2의 최장 접두사 일치에 따라 더 긴 /25가 이겨, 패킷이 AS 666으로 갑니다. 이를 막으려고 주소의 진짜 주인을 서명으로 확인하는 RPKI와 광고 필터를 씁니다.':
    'By default BGP trusts the advertisements its neighbours send. This time, in carrier B\'s place, a misconfigured (or malicious) AS 666 is connected and advertises 203.0.113.0/25, which is not its own. AS 1\'s routing table now holds /24 via AS 2 and /25 via AS 666, and 203.0.113.10 matches both. By the longest-prefix match of 3.2, the longer /25 wins, and the packet goes to AS 666. To prevent this, networks use RPKI, which checks the real owner of an address block by signature, and advertisement filters.',
  'AS 666 이름표가 경고 색 "거짓 광고: 203.0.113.0/25"가 되고, AS 1 이름표가 "/24 · /25 둘 다 맞음 → 더 긴 /25로"가 됩니다. 케이블 글자에 AS 2 쪽 "/24 광고"와 AS 666 쪽 경고 색 "/25 거짓 광고"가 보입니다. 패킷이 AS 666으로 가서 진짜 목적지 AS 4 이름표는 "안 옴"입니다.':
    'AS 666\'s badge turns to the warning colour "false advertisement: 203.0.113.0/25", and AS 1\'s becomes "/24 and /25 match → the longer /25". The cables show "/24 advertised" on the AS 2 side and, in the warning colour, "/25 falsely advertised" on the AS 666 side. The packet goes to AS 666, and the real destination AS 4 reads "nothing arrives".',
  '같은 사각형에서 왼쪽 아래 자리에 AS 666이 있습니다. AS 666이 203.0.113.0/25를 거짓 광고하자, AS 1은 /24보다 긴 /25 줄을 따라 203.0.113.10으로 가는 패킷을 AS 666으로 보냅니다. 진짜 AS 4에는 닿지 않습니다.':
    'In the same square, AS 666 sits in the bottom-left place. When AS 666 falsely advertises 203.0.113.0/25, AS 1 follows the /25 line, longer than /24, and sends packets for 203.0.113.10 to AS 666. They never reach the real AS 4.',
  'AS 666: 203.0.113.0/25 거짓 광고': 'AS 666: false advertisement of 203.0.113.0/25', 'AS 1 표: /24 (AS 2) · /25 (AS 666)': 'AS 1 table: /24 (AS 2) · /25 (AS 666)', '더 긴 /25가 이김': 'The longer /25 wins', '패킷이 AS 666으로': 'Packets go to AS 666',
  'AS 666이 자기 것이 아닌 203.0.113.0/25를 광고하고, AS 1이 표에 적습니다.': 'AS 666 advertises 203.0.113.0/25, which is not its own, and AS 1 writes it in its table.',
  'AS 1의 표에 /24(AS 2 쪽)와 /25(AS 666 쪽)가 함께 있습니다. 203.0.113.10은 어디로 갈까요?': 'AS 1\'s table holds /24 (via AS 2) and /25 (via AS 666). Where does 203.0.113.10 go?',
  'AS 2 쪽 (/24)': 'Via AS 2 (/24)', 'AS 666 쪽 (/25)': 'Via AS 666 (/25)',
  '라우터는 맞는 줄 가운데 가장 긴 접두사를 고릅니다(3.2). /25가 /24보다 깁니다.': 'A router chooses the longest matching prefix (3.2). /25 is longer than /24.',
  '패킷이 가장 긴 /25 줄을 따라 AS 666으로 갑니다. 진짜 AS 4에는 닿지 않습니다.': 'The packet follows the longest line, /25, to AS 666. It never reaches the real AS 4.',
};
