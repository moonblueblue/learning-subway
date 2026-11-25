// English for 0.3 Images and sound. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '이미지와 소리 · 레슨 0.3': 'Images and sound · Lesson 0.3',
  '픽셀과 색, 소리 샘플이 어떻게 숫자가 되는지 직접 칠하고 바꿔 보며 살펴보세요.': 'Paint and change pixels, colours and sound samples to see how they become numbers.',
  '사진과 소리는 어떻게 숫자가 될까요? 픽셀을 칠하고, 색을 섞고, 소리를 잘게 나눠 보세요.': 'How do photos and sound become numbers? Paint pixels, mix colours and cut sound into small pieces.',
  '화면과 숫자': 'Screen and numbers', '그림과 소리가 숫자로 바뀌는 장면': 'Pictures and sound turning into numbers',
  
  '켜진 칸': 'Pixel on', '꺼진 칸': 'Pixel off', '비트': 'Bits', '밝기': 'Brightness', 
  '빨강': 'Red', '초록': 'Green', '파랑': 'Blue', '색': 'Colour', '소리': 'Sound', '샘플': 'Sample',
  '샘플 수': 'Samples', '샘플 크기': 'Sample size', '샘플 높이': 'Sample height', '원래 소리': 'Original sound',
  '소리 파형': 'Sound wave', '픽셀': 'Pixels', 
  // Readouts and announcements
  
  
  '{#0}개': '{0}',
  '8 × 8 = 64칸 ×': '8 × 8 = 64 pixels ×', '64비트가 모두 0': 'All 64 bits are 0', '그림 한 장 64비트': 'One picture, 64 bits',
  '빨강 {0}.': 'Red {0}.', '초록 {0}.': 'Green {0}.', '파랑 {0}.': 'Blue {0}.',
  '샘플 수 {#0}개.': '{0} samples.', '샘플 크기 {#0}비트.': 'Sample size {0} bits.',
  'RGB ({0}) → {1} = {#2}바이트': 'RGB ({0}) → {1} = {2} {2|byte|bytes}',
  '샘플 {#0}개 × {#1}비트 = {#2}비트': '{0} samples × {1} bits = {2} bits',
  // Size panel in the scene
  '8 × 8칸 ×': '8 × 8 pixels ×', '샘플 {#0}개': '{0} samples',
  '= {#0}비트 ({#1}바이트)': '= {0} bits ({1} bytes)', '= {#0}비트 · 밝기 4단계 (': '= {0} bits · 4 brightness levels (',
  '칸 하나의 색 =': 'One pixel’s color =', '→ 8비트 × 3 = 3바이트': '→ 8 bits × 3 = 3 bytes',
  '(높이 0~{#0}) = {#1}비트': '(height 0–{0}) = {1} bits',
  
  '자유롭게 바꿔 보세요.': 'Change anything you like.',
  // Step 1
  '그림은 작은 칸으로 나뉜다': 'A picture is split into small squares',
  '화면의 그림은 픽셀이라는 아주 작은 칸이 모여 만들어집니다. 칸마다 켜짐과 꺼짐만 정한다면 칸 하나가 비트 하나입니다. 8 × 8 그림은 64비트, 곧 8바이트이고, 한 줄 8칸은 0.1에서 본 바이트 하나와 같습니다.':
    'A picture on screen is made of tiny squares called pixels. If each square is only on or off, one square is one bit. An 8 × 8 picture is 64 bits, which is 8 bytes, and a row of 8 squares is one byte, as in 0.1.',
  '화면 왼쪽에 줄마다 그 줄의 비트와 수가 나옵니다. 칸을 켜고 끄면 해당 줄의 수가 바로 바뀝니다.':
    'To the left of the screen, each row shows its bits and its number. Turning a square on or off changes that row\'s number at once.',
  '8 × 8 픽셀 화면이 있고, 왼쪽에 각 줄을 바이트로 나타낸 비트와 수가 적혀 있습니다. 켜진 칸은 밝고 꺼진 칸은 어둡습니다.':
    'There is an 8 × 8 pixel screen, and to its left each row is written as a byte: its bits and its number. Squares that are on are bright; squares that are off are dark.',
  '8×8 흑백 화면': '8×8 black-and-white screen', '픽셀마다 1비트': '1 bit per pixel', '= 8바이트': '= 8 bytes',
  '맨 윗줄을 모두 켜 보세요. 그 줄은 11111111 = 255가 됩니다.': 'Turn on the whole top row. That row becomes 11111111 = 255.',
  '켜진 칸이 정확히 10개가 되게 해 보세요.': 'Make exactly 10 squares on.',
  '그림을 모두 지워 64비트를 전부 0으로 만들어 보세요.': 'Clear the picture so all 64 bits are 0.',
  '맨 윗줄 11111111 = 255': 'Top row 11111111 = 255', '켜진 칸 10개 = 1인 비트 10개': '10 squares on = 10 bits that are 1',
  // Step 2
  '네 가지 밝기': 'Four brightness levels',
  '비트를 늘리면 밝기를 나눌 수 있다': 'More bits split brightness into levels',
  '칸 하나에 비트를 2개 쓰면 00, 01, 10, 11 네 단계의 밝기를 나타낼 수 있습니다. 대신 그림 전체는 64칸 × 2비트 = 128비트로 두 배가 됩니다. 실제 사진은 보통 칸마다 밝기 256단계(8비트)를 씁니다.':
    'With 2 bits per square, four brightness levels can be shown: 00, 01, 10 and 11. But the whole picture doubles to 64 squares × 2 bits = 128 bits. Real photos usually use 256 brightness levels (8 bits) per square.',
  '칸을 누를 때마다 00 → 01 → 10 → 11로 밝아지고, 장면 왼쪽 숫자도 칸마다 두 자리씩 바뀝니다.':
    'Each press brightens a square from 00 → 01 → 10 → 11, and the numbers on the left change two digits per square.',
  '8 × 8 픽셀 화면이 있고, 칸마다 네 단계 밝기 중 하나가 칠해져 있습니다. 왼쪽에는 각 줄을 칸마다 두 비트씩 적은 값이 있습니다.':
    'There is an 8 × 8 pixel screen, and each square is painted with one of four brightness levels. On the left, each row is written with two bits per square.',
  '00 01 10 11, 네 단계 밝기': '00 01 10 11, four brightness levels', '픽셀마다 2비트': '2 bits per pixel', '= 16바이트': '= 16 bytes',
  '한 줄을 왼쪽부터 00, 01, 10, 11 순서로 칠해 보세요. 나머지 칸은 상관없습니다.': 'Paint one row 00, 01, 10, 11 from the left. The other squares do not matter.',
  '밝기 10인 칸이 정확히 3개가 되게 해 보세요.': 'Make exactly 3 squares with brightness 10.',
  '밝기 10인 칸 3개': '3 squares with brightness 10',
  // Step 3
  '빨간 픽셀': 'A red pixel',
  '색은 빛 세 가지의 세기다': 'A colour is the strength of three lights',
  '화면의 색은 빨강, 초록, 파랑 빛을 얼마나 세게 켜는지로 만듭니다. 세 빛의 세기를 각각 0–255(8비트)로 정하므로 픽셀 하나의 색은 3바이트입니다. 빨강과 초록을 함께 켜면 노랑, 셋을 모두 켜면 흰색이 됩니다.':
    'A colour on screen is made by how strongly red, green and blue light are turned on. Each light\'s strength is 0–255 (8 bits), so one pixel\'s colour is 3 bytes. Red and green together make yellow; all three make white.',
  '세 기둥의 높이가 빛의 세기이고, 화면 전체가 세 빛을 섞은 색으로 칠해집니다. 아래 줄에서 세 값이 3바이트로 바뀌는 것을 볼 수 있습니다.':
    'The height of each column is the strength of a light, and the whole screen is painted with the three lights mixed. The line below shows the three values turning into 3 bytes.',
  '빨강, 초록, 파랑 세 기둥이 화면으로 이어져 있습니다. 기둥 높이는 각 빛의 세기(0–255)이고, 화면은 세 빛을 섞은 색으로 칠해집니다.':
    'Three columns, red, green and blue, lead to a screen. Each column\'s height is that light\'s strength (0–255), and the screen is painted with the three lights mixed.',
  '빨강 빛만 켬': 'Only the red light on', '3바이트': '3 bytes',
  '노란색을 만들어 보세요. 빨강과 초록만 255로 켭니다.': 'Make yellow. Turn only red and green up to 255.',
  '자홍색(빨강 + 파랑)을 만들어 보세요.': 'Make magenta (red + blue).',
  '회색을 만들어 보세요. 세 빛을 같은 세기(100–160)로 켭니다.': 'Make grey. Turn all three lights to the same strength (100–160).',
  // Step 4
  '소리 샘플': 'Sound samples',
  '소리는 잘게 나눠 높이를 적는다': 'Sound is cut into slices and their heights written down',
  '소리는 공기가 떨리는 파동입니다. 컴퓨터는 아주 짧은 간격마다 파동의 높이를 재서 수로 적는데, 이것을 샘플링이라고 합니다. 자주 잴수록(샘플 수), 높이를 잘게 나눌수록(샘플 크기) 원래 소리에 가까워지지만 비트도 그만큼 늘어납니다. 음악 CD는 1초에 44,100번, 16비트씩 잽니다.':
    'Sound is a wave of vibrating air. A computer measures the wave\'s height at very short intervals and writes it down as a number; this is called sampling. Measuring more often (samples) and dividing height more finely (sample size) gets closer to the original sound, but takes more bits too. A music CD measures 44,100 times a second, 16 bits each.',
  '곡선이 원래 소리이고, 막대가 컴퓨터가 적어 둔 높이입니다. 샘플을 늘리면 막대가 촘촘해지고, 샘플 크기를 줄이면 높이가 계단처럼 거칠어집니다.':
    'The curve is the original sound, and the bars are the heights the computer wrote down. More samples make the bars denser; a smaller sample size makes the heights rough, like stairs.',
  '부드러운 소리 파형 곡선 아래에 같은 간격으로 막대가 서 있습니다. 막대 높이는 그 순간 잰 파형의 높이를 정해진 단계로 반올림한 값입니다.':
    'Bars stand at equal intervals under a smooth sound wave. Each bar\'s height is the wave\'s height at that moment, rounded to a set level.',
  '연속인 소리 파형': 'A continuous sound wave', '일정 간격으로 높이 측정': 'Height measured at regular intervals', '가까운 단계 값으로 기록': 'Written as the nearest level',
  '샘플을 32개로 늘려 보세요. 막대가 곡선에 더 가까워집니다.': 'Increase the samples to 32. The bars get closer to the curve.',
  '샘플 크기를 2비트로 줄여 보세요. 높이가 4단계뿐이라 거칠어집니다.': 'Cut the sample size to 2 bits. With only 4 height levels it gets rough.',
  '전체 크기가 정확히 128비트가 되게 맞춰 보세요.': 'Make the total size exactly 128 bits.',
  '샘플 {#0}개 × {#1}비트': '{0} samples × {1} bits',
};
