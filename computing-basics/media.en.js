// English for 0.3 Images and sound. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  '그림의 작은 칸': 'The small squares in an image',
  '0장 컴퓨팅 둘러보기': 'Chapter 0 · A tour of computing',
  '픽셀 한 칸을 직접 칠하고 값을 바꾸며 그림을 어떻게 기록하는지 살펴보세요.':
    'Color a pixel and change its value to see how an image is recorded.',
  '그림 한 장에서 어느 칸의 어떤 값을 바꾸면 밝기와 색이 달라질까요?':
    'Which values in an image change the brightness and color of a square?',
  '화면의 그림은 픽셀이라는 아주 작은 칸이 모여 만들어집니다. 칸마다 켜짐과 꺼짐만 정한다면 칸 하나가 비트 하나입니다. 8 × 8 그림은 64비트, 곧 8바이트이고, 한 줄 8칸은 스위치 레슨에서 본 바이트 하나와 같습니다.':
    'An image on a screen is made of tiny squares called pixels. One bit per pixel can mark it on or off. An 8 by 8 image takes 64 bits, or eight bytes. Each row of eight uses one byte, as in the switch lesson.',
  '칸 하나에 비트를 2개 쓰면 00, 01, 10, 11 네 단계의 밝기를 나타낼 수 있습니다. 대신 그림 전체는 64칸 × 2비트 = 128비트로 두 배가 됩니다. 예를 들어 8비트 회색조 사진은 칸마다 밝기를 256단계로 기록합니다.':
    'Two bits in one pixel give four brightness levels: 00, 01, 10, and 11. The image doubles in size to 64 pixels times 2 bits, or 128 bits. For example, an 8-bit grayscale photo records 256 brightness levels per pixel.',
  '한 비트가 같은 열의 픽셀을 정한다': 'Each bit sets the pixel in its column',
  '8×8 하트의 둘째 줄 0110 0110에서 각 비트의 화살표가 같은 열의 픽셀에 닿습니다. 0은 어둡고 1은 밝습니다. 그림 전체는 64비트입니다.':
    'In the second row of the 8×8 heart, each bit in 0110 0110 points to the pixel in its column. A 0 is dark and a 1 is bright. The whole image is 64 bits.',
  '8 × 8 하트': '8 × 8 heart', '둘째 줄의 비트': 'Bits of the second row',
  '같은 줄의 픽셀': 'Pixels in that row', '0 어두움': '0 dark', '1 밝음': '1 bright',
  '어두움': 'Dark', '밝음': 'Bright', '8 × 8 픽셀': '8 × 8 pixels',
  '8 × 8 × 1비트 = 64비트': '8 × 8 × 1 bit = 64 bits',
  '64 × 1비트 = 64비트': '64 × 1 bit = 64 bits', '64 × 2비트 = 128비트': '64 × 2 bits = 128 bits',
  '2비트는 네 가지 밝기를 정한다': 'Two bits give four brightness levels',
  '00, 01, 10, 11을 각각 다른 밝기에 연결합니다. 같은 64픽셀에서 픽셀당 1비트를 2비트로 늘리면 64비트가 128비트가 됩니다.':
    'Connect 00, 01, 10 and 11 to four brightness levels. In the same 64 pixels, going from one to two bits per pixel raises the total from 64 to 128 bits.',
  '초록 값을 올려 한 픽셀의 색을 바꾼다': 'Increasing green changes one pixel',
  '선택한 4행 4열에서 빨강 255와 파랑 0은 유지하고 초록을 0에서 160으로 올립니다. 해당 픽셀만 빨강에서 주황으로 바뀝니다.':
    'In the selected pixel at row 4, column 4, keep red at 255 and blue at 0, and raise green from 0 to 160. Only that pixel changes from red to orange.',
  '4행 4열': 'Row 4, col. 4', '3 × 8비트 = 3바이트': '3 × 8 bits = 3 bytes',
  '연속 파형과 시간축이 있습니다. 축의 같은 간격 눈금 16개에서 수직선을 올리면 같은 시각의 파형에 측정점이 생깁니다.':
    'A continuous wave sits above a time axis. Vertical lines from 16 equally spaced ticks meet the wave at the corresponding sample points.',
  '진폭': 'Amplitude', '같은 간격': 'Equal intervals', '기록값': 'Stored', '측정점': 'Sampled point', '반올림 경계': 'Rounding boundary',
  '측정 높이': 'Measured height', '기록 높이': 'Stored height',
  '같은 점을 가까운 정수 높이로 적는다': 'Round the same points to integer heights',
  '같은 16개 점의 높이를 가장 가까운 0부터 15까지의 정수로 기록합니다. 3.43은 경계 3.5 아래라 3으로 내리고, 7.54는 경계 7.5 위라 8로 올립니다. 4비트씩 16개가 64비트입니다.':
    'Record the same 16 heights as the nearest integers from 0 to 15. The height 3.43 is below 3.5 and rounds down to 3. The height 7.54 is above 7.5 and rounds up to 8. Sixteen samples at four bits each take 64 bits.',
  "시간": "Time",
  "· 일정 간격": "· equal intervals",
  "빨강과 초록 빛을 함께 켬": "Red and green light mix",
  "주황 픽셀 하나": "One orange pixel",
  "측정 시각": "Sample times",
  "같은 간격으로 파형을 잰다": "Measure the wave at equal time intervals",
  "측정점 16개": "16 samples",
  "시간은 왼쪽에서 오른쪽으로 흐릅니다. 자주 재면 같은 파형에서 더 많은 점을 얻습니다.": "Time moves from left to right. Measuring more often gives more points from the same wave.",
  "높이 기록": "Record heights",
  "같은 측정점 16개": "The same 16 samples",
  "각 높이를 0~15로 기록": "Record each height as 0–15",
  "16 × 4비트 = 64비트": "16 × 4 bits = 64 bits",
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
  '화면 둘째 줄을 왼쪽에 펼쳤습니다. 그 줄에서 픽셀을 바꾸면 같은 열의 비트와 밝기가 함께 바뀝니다.':
    'The second row is expanded on the left. Changing a pixel in that row changes the bit and brightness in the same column.',
  '8 × 8 픽셀 화면 둘째 줄의 각 비트가 왼쪽에 펼친 행의 같은 열을 가리킵니다. 0은 어둡고 1은 밝습니다.':
    'The bits of the second row of the 8 × 8 screen point to the same columns in the enlarged row on the left. A 0 is dark and a 1 is bright.',
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
  '초록을 0에서 160으로 올리면 같은 한 픽셀만 빨강에서 주황으로 바뀝니다. 세 채널 값은 각각 1바이트입니다.':
    'Raising green from 0 to 160 changes the same one pixel from red to orange. Each of the three channel values takes one byte.',
  '빨강, 초록, 파랑 세 기둥이 화면으로 이어집니다. 세 값이 4행 4열의 선택한 한 픽셀에 함께 적용됩니다.':
    'The red, green and blue columns lead to the screen. All three values apply to the selected pixel at row 4, column 4.',
  '빨강 빛만 켬': 'Only the red light on', '3바이트': '3 bytes',
  '노란색을 만들어 보세요. 빨강과 초록만 255로 켭니다.': 'Make yellow. Turn only red and green up to 255.',
  '자홍색(빨강 + 파랑)을 만들어 보세요.': 'Make magenta (red + blue).',
  '회색을 만들어 보세요. 세 빛을 같은 세기(100–160)로 켭니다.': 'Make grey. Turn all three lights to the same strength (100–160).',
  // Step 4
  '소리 샘플': 'Sound samples',
  '소리는 잘게 나눠 높이를 적는다': 'Sound is cut into slices and their heights written down',
  '소리가 이어지는 동안 진폭은 계속 달라집니다. 시간축을 같은 간격으로 나누고, 각 눈금의 시각에 파형의 진폭을 한 번씩 읽습니다. 이렇게 일정한 시각에 높이를 재는 것을 샘플링이라고 합니다.':
    'Amplitude varies continuously as sound plays. Divide the time axis into equal intervals and read the wave’s amplitude at each tick. Measuring at regularly spaced times is called sampling.',
  '연속 파형의 높이를 재는 시각마다 시간축에서 세로선이 올라가고 파형에 점이 찍힙니다.':
    'At each sample time, a vertical line rises from the time axis to a point on the continuous wave.',
  '샘플을 32개로 늘려 보세요. 같은 파형에 측정점이 더 촘촘해집니다.':
    'Increase the samples to 32. The points are closer together on the same wave.',
  '앞 단계와 같은 시각의 높이를 0부터 15까지의 정수 중 가장 가까운 값으로 기록합니다. 두 정수의 가운데가 반올림 경계입니다. 4비트는 이 16가지 높이를 담으므로 측정점 16개에는 64비트가 듭니다.':
    'Record the heights at the same times as in the previous step using the nearest integer from 0 to 15. The midpoint between adjacent integers is the rounding boundary. Four bits hold 16 possible heights, so 16 samples take 64 bits.',
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
