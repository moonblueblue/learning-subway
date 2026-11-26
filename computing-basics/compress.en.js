// English for 0.4 Compression. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  "평균 하나로 펼치면 원래 무늬가 사라진다": "Expanding the average loses the original pattern",
  "저장: 평균 1": "Stored: mean 1",
  "원본 · 8비트": "Original · 8 bits",
  "저장값 · 2비트": "Stored · 2 bits",
  "펼친 뒤": "Expanded",
  "8×8 전체: 16묶음 × 2비트 = 32비트": "Full 8×8: 16 groups × 2 bits = 32 bits",
  // Page
  '압축 · 레슨 0.4': 'Compression · Lesson 0.4',
  '반복을 세어 적는 압축, 압축이 안 되는 경우, 조금 버리는 손실 압축을 픽셀 화면으로 직접 살펴보세요.':
    'Use a pixel screen to see compression that counts repeats, cases that do not compress, and lossy compression that throws a little away.',
  '같은 정보를 더 적은 비트로 담을 수 있을까요? 그림을 바꿔 가며 압축 결과가 어떻게 달라지는지 보세요.':
    'Can the same information fit in fewer bits? Change the picture and watch how the compressed result changes.',
  '그림과 압축 결과': 'Picture and compressed result', '그림과 줄마다의 압축 결과': 'The picture and each row\'s compressed result',
  '원본': 'Original', '밝은 칸': 'Bright square', '어두운 칸': 'Dark square', '묶는 크기': 'Block size',
  '0 (꺼진 칸)': '0 (square off)', '1 (켜진 칸)': '1 (square on)',
  // Readouts
  '(원본의 {#0}%)': '({0}% of the original)', '{0} → {#1}비트': '{0} → {1} {1|bit|bits}',
  '{#0}비트 → {#1}비트': '{0} bits → {1} bits', '압축 {#0}비트 > 원본 {#1}비트': 'Compressed {0} bits > original {1} bits',
  '압축 {#0}비트 ≤ {#1}비트': 'Compressed {0} bits ≤ {1} bits',
  '{#0}×{#0} 블록 {#1}개 × 2비트 = {#2}비트': '{1} {0}×{0} blocks × 2 bits = {2} bits',
  '→ {#0}×{#0} 블록 {#1}개 × 2비트 =': '→ {1} {0}×{0} {1|block|blocks} × 2 bits =',
  '{#0}×{#0}로 묶었습니다.': 'Grouped into {0}×{0} blocks.',
  '{#0} 한 묶음 × 8칸': 'One run of {0} × 8 squares',
  '00000000 한 줄': 'A row of 00000000', '01010101 한 줄': 'A row of 01010101',
  '00000000 한 줄은 1묶음이며, 묶음당 4비트라 결과는 4비트입니다.': 'A row of 00000000 is 1 run, and at 4 bits per run the result is 4 bits.',
  '01010101 한 줄은 8묶음이며, 묶음당 4비트라 결과는 32비트입니다.': 'A row of 01010101 is 8 runs, and at 4 bits per run the result is 32 bits.',
  '0×5 = 0이 5개': '0×5 = five 0s', '한 묶음: 0이 8개': 'One run: eight 0s',
  '8비트 → 4비트': '8 bits → 4 bits', '8비트 → 8묶음 × 4비트': '8 bits → 8 runs × 4 bits',
  '원본 {#0}비트 → 저장 {#1}비트': 'Original {0} bits → stored {1} bits',
  '맨 윗줄 1×8 → 4비트': 'Top row 1×8 → 4 bits', '→ 압축': '→ compressed',
  '8×8 전체: 128 → 32비트. 원래 무늬는 사라진다.': 'Whole 8×8: 128 → 32 bits. The original pattern is gone.',
  '2×2 네 칸 · 8비트': '2×2, four squares · 8 bits', '한 칸 · 2비트': 'One square · 2 bits', '평균 1': 'Average 1',
  '0, 2, 2, 0을 평균 1로 바꿉니다. 칸 하나당 2비트이므로 네 칸 8비트가 한 칸 2비트가 되고 원래 무늬는 복원할 수 없습니다.':
    '0, 2, 2 and 0 become their average, 1. Each square is 2 bits, so four squares (8 bits) become one square (2 bits), and the original pattern cannot be restored.',
  '화면 = 묶어서 평균 낸 그림': 'Screen = the picture averaged in blocks', '평균만 저장': 'Only the average is stored',
  '이 실험은 원본을 따로 두어 돌아오지만, 손실 압축 파일에서는 버린 정보가 돌아오지 않습니다':
    'This lab keeps the original aside so it can come back, but in a lossy file the information thrown away never comes back',
  '밝기 4단계 · 8×8칸': '4 brightness levels · 8×8 squares',
  // Step 1
  '반복 세기': 'Counting repeats',
  '같은 값이 이어지면 개수만 적는다': 'When a value repeats, write only the count',
  '"0 0 0 0 0 1 1 1" 대신 "0이 5개, 1이 3개"라고 적어도 같은 정보입니다. 이렇게 반복을 세어 적는 방법을 런 길이 부호화(RLE)라고 합니다. 여기서는 묶음 하나를 4비트(값 1비트 + 개수 3비트)로 적습니다. 3비트는 0~7까지라서 개수에서 1을 뺀 값을 적고, 1~8개를 나타냅니다. 한 줄이 모두 같으면 8비트가 4비트로 줄어듭니다.':
    'Writing "five 0s, three 1s" instead of "0 0 0 0 0 1 1 1" is the same information. Counting repeats like this is called run-length encoding (RLE). Here each run is written in 4 bits (1 bit for the value + 3 bits for the count). Three bits hold 0–7, so they store the count minus 1 and stand for 1–8. If a whole row is the same, 8 bits shrink to 4.',
  '화면 왼쪽에 줄마다 묶음("0×5 1×3")과 그 줄의 압축 크기가 나옵니다. 아래 줄에서 원본 64비트와 압축 결과를 비교해 보세요.':
    'To the left of the screen, each row shows its runs ("0×5 1×3") and that row\'s compressed size. Compare the original 64 bits with the compressed result on the line below.',
  '8 × 8 흑백 화면과, 줄마다 같은 값이 이어지는 묶음을 센 결과가 있습니다. 묶음이 적을수록 압축 결과가 작습니다.':
    'There is an 8 × 8 black-and-white screen and, for each row, the count of runs of the same value. The fewer the runs, the smaller the compressed result.',
  '같은 값 8개를 묶으면 4비트': 'Eight equal values in one run take 4 bits', '묶음 하나 = 값 1비트 + (개수 − 1) 3비트 · 0~7이 1~8개': 'One run = 1 bit value + (count − 1) in 3 bits · 0–7 means 1–8',
  '압축 결과가 40비트 이하가 되게 그림을 바꿔 보세요.': 'Change the picture so the compressed result is 40 bits or less.',
  '맨 윗줄을 모두 켜서 한 묶음(1×8)으로 만들어 보세요.': 'Turn on the whole top row to make it one run (1×8).',
  '줄마다 같은 값으로 칠한 가로 줄무늬를 만들어 32비트로 줄여 보세요.': 'Paint horizontal stripes, one value per row, to shrink it to 32 bits.',
  '줄마다 한 묶음 → 8줄 × 4비트 = 32비트': 'One run per row → 8 rows × 4 bits = 32 bits',
  // Step 2
  '반복이 없으면': 'With no repeats',
  '반복이 없으면 오히려 커진다': 'With no repeats it gets bigger',
  '체크무늬처럼 값이 매번 바뀌면 묶음이 64개가 되어, 압축 결과(64 × 4 = 256비트)가 원본 64비트보다 커집니다. 모든 그림을 줄이는 압축 방법은 없습니다. 압축은 데이터 안의 규칙(여기서는 반복)을 찾아 쓰는 일이라, 규칙이 없으면 줄일 수 없습니다.':
    'When the value changes every time, as in a checkerboard, there are 64 runs, and the compressed result (64 × 4 = 256 bits) is bigger than the original 64 bits. No compression shrinks every picture. Compression finds and uses a pattern in the data (here, repeats), so with no pattern nothing can shrink.',
  '체크무늬에서는 줄마다 묶음이 8개라 압축 결과가 커집니다. 줄무늬처럼 한 줄 안에서 반복되면 다시 작아집니다.':
    'In a checkerboard every row has 8 runs, so the compressed result grows. When a row repeats inside itself, as in stripes, it shrinks again.',
  '8 × 8 체크무늬 화면입니다. 칸마다 값이 바뀌어 묶음이 많고, 압축 결과가 원본보다 큽니다.':
    'An 8 × 8 checkerboard screen. The value changes at every square, so there are many runs and the compressed result is bigger than the original.',
  '같은 값이 연달아 없음': 'No value repeats in a row', '값이 매번 바뀌면 표시를 8번 써야 한다': 'If the value changes every time, eight runs must be written',
  '압축 결과가 원본(64비트)보다 커지게 그림을 바꿔 보세요.': 'Change the picture so the compressed result is bigger than the original (64 bits).',
  '그림을 모두 지워 압축 결과를 가장 작게 만들어 보세요.': 'Clear the picture to make the compressed result as small as possible.',
  // Step 3
  '조금 버리기': 'Throwing a little away',
  '조금 버리면 훨씬 줄어든다': 'Throw a little away and it shrinks a lot',
  '사진은 이웃한 칸의 색이 비슷한 경우가 많습니다. 그래서 칸 여러 개를 묶어 평균 하나만 적으면 크기가 크게 줄어듭니다. 대신 세밀한 부분이 사라지고, 사라진 정보는 되돌릴 수 없습니다. 이런 방식을 손실 압축이라고 하며, JPEG 사진과 MP3 음악이 이 생각을 씁니다.':
    'In photos, neighbouring squares often have similar colours. So grouping several squares and writing only their average shrinks the size a lot. But fine detail disappears, and what disappears cannot come back. This is called lossy compression, and JPEG photos and MP3 music use the idea.',
  '묶는 크기를 2×2, 4×4로 키우면 화면이 뭉툭해지고 크기는 128비트 → 32비트 → 8비트로 줄어듭니다. 아래 버튼에는 원본이 그대로 남아 있습니다.':
    'Making the blocks 2×2 and 4×4 blurs the screen and shrinks the size from 128 bits → 32 bits → 8 bits. The buttons below still hold the original.',
  '8 × 8 화면에 네 단계 밝기 그림이 있습니다. 칸을 묶는 크기를 키우면 묶음마다 평균 밝기 하나로 칠해져 그림이 거칠어집니다.':
    'An 8 × 8 screen holds a picture in four brightness levels. Bigger blocks paint each block with one average brightness, and the picture gets rough.',
  '이웃한 네 칸을 평균 하나로 바꾼다': 'Four neighbouring squares become one average', '2×2마다 평균 하나': 'One average per 2×2',
  '128비트 → 32비트': '128 bits → 32 bits',
  '2×2로 묶어 128비트를 32비트로 줄여 보세요.': 'Group into 2×2 blocks to shrink 128 bits to 32 bits.',
  '4×4로 묶어 8비트까지 줄여 보세요. 무엇이 사라지나요?': 'Group into 4×4 blocks to shrink it to 8 bits. What disappears?',
  '다시 1×1로 바꿔 보세요.': 'Change back to 1×1.',
};
