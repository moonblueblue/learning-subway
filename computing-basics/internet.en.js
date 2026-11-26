// English for 0.7 The internet at a glance. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  "1 · 안": "1 · Hi", "2 · 녕": "2 · there",
  "메시지 한 개를 번호가 붙은 조각으로": "Split one message into numbered packets",
  "메시지": "Message",
  "안녕!": "Hi there!",
  "안": "Hi",
  "녕": "there",
  "나누기": "Split",
  "전송": "Send",
  "세 조각의 목적지 주소는 모두 203.0.113.7": "All three packets share destination 203.0.113.7",
  "정상 전송": "Normal route",
  "공유기는 패킷을 통신사로 보냅니다. 라우터는 주소를 보고 다음 한 칸을 정합니다. 이 예에서는 라우터 A와 해저 케이블을 거쳐 해외 서버로 갑니다.": "The home router sends packets to the provider. Routers consult the address to choose the next hop. Here the packets pass router A and a submarine cable to the overseas server.",
  "목적지 주소로 다음 한 칸을 고른다": "Choose the next hop using the destination address",
  "목적지 주소 확인": "Check address",
  "해저 케이블": "Submarine cable",
  "다음 홉": "Next hop",
  "패킷 1·2·3 · 목적지 203.0.113.7": "Packets 1, 2, 3 · destination 203.0.113.7",
  "서버가 순서 번호대로 메시지를 다시 맞춘다": "The server rebuilds the message in sequence",
  "세 패킷이 도착해도 먼저 온 순서대로 이어 붙이면 틀릴 수 있습니다. 서버는 번호 1, 2, 3 순서로 조각을 놓아 원래 메시지를 읽습니다.": "Even after all packets arrive, joining them in arrival order may be wrong. The server puts them in sequence 1, 2, 3 and reads the original message.",
  "서버에서 재조립": "Reassemble",
  "패킷 2·1·3 도착": "Packets arrive 2, 1, 3",
  "번호대로 다시 맞춤": "Put them in sequence",
  "메시지 안녕! 복원": "Restore Hi there!",
  "도착 순서": "Arrival order",
  "번호 순서": "Sequence order",
  "원래 메시지를 읽은 서버가 답장을 패킷으로 나눠 노트북의 주소로 보냅니다. 답장도 라우터들이 다음 한 칸씩 넘깁니다. 여기에서는 왔던 길을 되돌아갑니다.": "After reading the message, the server splits its reply into packets addressed to the laptop. Routers forward the reply one hop at a time. In this example, it returns along the same route.",
  // Page
  '인터넷의 큰 그림 · 레슨 0.7': 'The internet at a glance · Lesson 0.7',
  '메시지가 패킷으로 나뉘어 공유기, 통신사, 라우터를 건너 지구 반대편 서버까지 가는 길을 따라가 보세요.':
    'Follow a message split into packets as it crosses a home router, an internet provider and routers to a server on the other side of the world.',
  '메시지 하나는 어떻게 지구 반대편까지 갈까요? 내 노트북에서 출발한 패킷이 여러 기계를 건너 서버에 닿고, 답장이 돌아오는 길을 따라가 보세요.':
    'How does one message get to the other side of the world? Follow packets that leave your laptop, cross many machines to reach a server, and the reply that comes back.',
  '데이터가 지나는 길': 'The path data takes', '노트북에서 해외 서버까지 패킷이 가는 경로': 'The path packets take from a laptop to an overseas server',
  '보내는 패킷': 'Packets sent', '답장 패킷': 'Reply packets',
  // Machines
  '내 노트북': 'My laptop', '공유기': 'Home router', '통신사': 'Internet provider', '라우터 A': 'Router A', '라우터 B': 'Router B',
  '해저 케이블 끝': 'Undersea cable end', '해외 서버': 'Overseas server',
  // Badges
  '메시지 하나': 'One message', '메시지 → 패킷 3개': 'Message → 3 packets', '작은 패킷 3개로 분할': 'Split into 3 small packets',
  '해외 서버 주소': 'Overseas server address', '주소 203.0.113.7': 'Address 203.0.113.7', '공유기로 차례로 전송': 'Sent to the home router in turn',
  '공유기에서 통신사로': 'From the home router to the provider', '집 밖의 목적지': 'A destination outside the home',
  '라우터가 다음 홉 선택': 'Each router picks the next hop', '다음 칸 고름': 'Picks next hop', '해저 케이블 거쳐 서버 도착': 'Reaches the server through the undersea cable',
  '도착 · 3개 모두': 'Arrived · all 3', '다음 네트워크에 도착': 'Reached the next network',
  '서버가 답장': 'The server replies', '답장 보냄': 'Reply sent', '돌아가는 길': 'The way back', '라우터 → 통신사 → 공유기': 'Routers → provider → home router',
  '답장 받음': 'Reply received', '노트북에 응답 도착': 'The reply reaches the laptop',
  '고장': 'Down', '라우터 A 고장': 'Router A down', '패킷이 B 쪽으로 우회': 'Packets detour through B', '같은 해외 서버에 도착': 'Reaches the same overseas server',
  // Step 1
  '패킷으로 나누기': 'Splitting into packets',
  '메시지는 작은 패킷으로 나뉜다': 'A message is split into small packets',
  '"안녕하세요"를 보내면, 컴퓨터는 메시지를 패킷이라는 작은 조각으로 나눕니다. 패킷마다 받는 곳의 주소(IP 주소)와 순서 번호가 붙습니다. 큰 사진이나 영상은 수천 개의 패킷이 됩니다. 첫 번째로 들르는 곳은 집의 공유기입니다.':
    'When you send "hello", the computer splits the message into small pieces called packets. Each packet carries the destination address (IP address) and a sequence number. A big photo or video becomes thousands of packets. The first stop is the router at home.',
  '노트북 위에 "패킷 3개"가 뜨고, 패킷이 공유기로 갑니다. 받는 곳 주소는 서버 위에 적혀 있습니다.':
    '"3 packets" appears above the laptop, and the packets go to the home router. The destination address is written above the server.',
  '노트북과 공유기가 있습니다. 메시지가 패킷 세 개로 나뉘어 공유기로 갑니다.':
    'There is a laptop and a home router. The message is split into three packets that go to the router.',
  // Step 2
  '공유기와 통신사': 'Home router and provider',
  '집 밖으로 나가려면 통신사를 거친다': 'To leave home, packets go through the provider',
  '공유기는 집 안 기기들의 패킷을 모아 통신사(인터넷 서비스 제공자)로 보냅니다. 통신사는 수많은 집과 회사를 인터넷의 큰 길에 이어 주는 관문입니다. 지금까지 패킷이 지난 곳은 두 군데입니다.':
    'The home router gathers packets from the devices at home and sends them to the internet provider (internet service provider). The provider is the gateway connecting countless homes and offices to the main roads of the internet. So far the packets have passed two places.',
  '패킷이 노트북 → 공유기 → 통신사 순서로 이동합니다.': 'The packets move in order: laptop → home router → provider.',
  '노트북, 공유기, 통신사가 있습니다. 패킷이 공유기를 거쳐 통신사에 도착합니다.':
    'There is a laptop, a home router and a provider. The packets pass the router and reach the provider.',
  // Step 3
  '라우터를 건너': 'Across the routers',
  '라우터가 주소를 보고 다음 길을 고른다': 'Routers read the address and choose the next road',
  '인터넷은 라우터라는 기계들이 서로 이어진 그물입니다. 라우터는 패킷의 받는 곳 주소를 보고, 목적지에 더 가까운 이웃 라우터로 넘깁니다. 바다 건너 서버라면 해저 케이블을 지납니다. 어느 라우터도 전체 길을 알지 못하고, 다음 한 칸만 정합니다.':
    'The internet is a mesh of connected machines called routers. A router reads a packet\'s destination address and passes it to a neighbouring router closer to the destination. A server across the sea is reached through an undersea cable. No router knows the whole way; each only decides the next hop.',
  '패킷이 통신사에서 라우터 A, 해저 케이블 끝을 거쳐 해외 서버에 닿습니다. 모두 여섯 번 건넙니다.':
    'From the provider, the packets pass router A and the undersea cable end to reach the overseas server. Six hops in all.',
  '통신사 뒤에 라우터 네 대가 네모 모양으로 이어져 있습니다. 패킷이 라우터 A와 해저 케이블 끝을 거쳐 해외 서버에 도착합니다.':
    'Behind the provider, four routers are connected in a square. The packets pass router A and the undersea cable end and arrive at the overseas server.',
  // Step 4
  '답장': 'The reply',
  '답장도 같은 방식으로 돌아온다': 'The reply comes back the same way',
  '서버는 받은 패킷을 순서 번호대로 다시 이어 붙여 메시지를 읽고, 답장을 패킷으로 나눠 내 노트북의 주소로 보냅니다. 답장도 라우터들이 한 칸씩 넘겨 돌아옵니다. 지구 반대편까지 다녀오는 데 걸리는 시간은 보통 0.2–0.3초입니다.':
    'The server joins the packets back together by sequence number, reads the message, splits its reply into packets and sends them to your laptop\'s address. Routers pass the reply back one hop at a time too. A round trip to the other side of the world usually takes 0.2–0.3 seconds.',
  '점선을 따라 답장 패킷이 서버에서 노트북까지 되돌아옵니다.': 'Along the dashed line, the reply packets come back from the server to the laptop.',
  '해외 서버에서 출발한 답장 패킷이 라우터들과 통신사, 공유기를 거쳐 노트북으로 돌아옵니다.':
    'Reply packets leave the overseas server and come back to the laptop through the routers, the provider and the home router.',
  // Step 5
  '길이 막히면': 'When a road is blocked',
  '한 곳이 고장 나도 다른 길로 간다': 'If one place fails, packets take another road',
  '라우터 A가 고장 나면 통신사는 라우터 B로 패킷을 보냅니다. 인터넷은 처음부터 길이 여러 갈래가 되도록 만들어져서, 한 곳이 끊겨도 돌아갈 수 있습니다. 패킷마다 다른 길로 가는 것도 가능하고, 그래서 받는 쪽은 순서 번호로 다시 맞춥니다.':
    'If router A fails, the provider sends the packets to router B. The internet was built from the start with many roads, so it can go around a break. Each packet can even take a different road, which is why the receiver puts them back in order by sequence number.',
  '라우터 A 위에 "고장"이 뜨고, 패킷은 통신사에서 라우터 B를 거쳐 돌아갑니다.':
    '"Down" appears above router A, and the packets go around from the provider through router B.',
  '라우터 A가 고장 났습니다. 패킷이 통신사에서 라우터 B, 해저 케이블 끝을 거쳐 해외 서버로 갑니다.':
    'Router A is down. The packets go from the provider through router B and the undersea cable end to the overseas server.',
};
