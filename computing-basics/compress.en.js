// English for 0.4 Compression. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  '값 비트': 'Value bit', '값 1비트': '1 value bit', '길이−1 (3비트)': 'Length − 1 (3 bits)',
  '값 1비트 · 길이−1 3비트': '1 value bit · 3 bits for length − 1',
  '값 1비트 · 길이−1 3비트 · 최대 길이 8': '1 value bit · 3 bits for length − 1 · maximum length 8',
  '원본 8비트': 'Original 8 bits', '길이 1 → 000': 'Length 1 → 000',
  '저장 4비트': 'Stored 4 bits', '저장 0111 · 4비트': 'Stored 0111 · 4 bits',
  '값 0 · 길이−1은 111': 'Value 0 · length − 1 is 111',
  '저장 8 × 4비트 = 32비트': 'Stored 8 × 4 bits = 32 bits',
  '같은 0이 여덟 개 이어집니다. 값 0을 첫 비트에 두고, 길이 8에서 1을 뺀 7을 3비트 111로 적습니다. 저장하는 네 비트는 0111입니다.':
    'Eight zeroes form one run. The first bit is the value 0. Subtract 1 from the length 8 and write 7 in three bits as 111. The four stored bits are 0111.',
  '원래대로 복원': 'Restore the row',
  '두 필드로 같은 여덟 칸을 복원한다': 'Two fields restore the same eight pixels',
  '저장한 0111을 값 0과 길이 필드 111로 나눕니다. 111은 7이고 1을 더하면 길이 8입니다. 값 0을 여덟 칸 펼쳐 원래 행을 복원합니다.':
    'Split the stored 0111 into value 0 and length field 111. The field means 7, so adding 1 gives a length of 8. Repeat 0 across eight pixels to restore the original row.',
  '111 = 7 · 길이는 7 + 1': '111 = 7 · length is 7 + 1',
  '저장된 0111에서 첫 비트 0은 반복할 값입니다. 뒤의 111은 7을 뜻합니다. 저장할 때 1을 뺐으므로 다시 1을 더해 8칸을 만듭니다. 0을 여덟 번 놓으면 원본이 그대로 돌아옵니다.':
    'In the stored 0111, the first bit, 0, is the value to repeat. The remaining 111 means 7. We subtracted 1 when storing it, so add 1 to get eight pixels. Repeating 0 eight times restores the original.',
  '직접 해 보기에서 값 비트와 길이 필드를 바꿔 보세요. 길이 필드 000은 한 칸, 111은 여덟 칸으로 펼쳐집니다.':
    'In Try it, change the value bit and the length field. The field 000 expands to one pixel, and 111 expands to eight.',
  '값 비트에서 픽셀의 밝기를, 길이 필드에서 펼칠 칸 수를 정합니다. 기본값은 0111이며 0이 여덟 칸 나옵니다.':
    'The value bit sets the brightness. The length field sets the number of pixels. The starting word 0111 gives eight zeroes.',
  '값 1과 길이 3을 나타내는 필드를 골라 111 세 칸을 복원하세요.': 'Set the value to 1 and choose the field for length 3 to restore three ones: 111.',
  '같은 값으로 길이 1인 묶음을 복원하세요.': 'Restore a run of length 1 with the same value.',
  '반복할 값 {#0}': 'Repeat value {0}', '복원 {#0}비트': 'Restored {0} {0|bit|bits}',
  '저장 필드를 바꿨습니다.': 'Changed the stored fields.', '저장': 'Stored',
  '01010101의 각 칸에서 값이 바뀌어 길이 1의 묶음이 여덟 개 생깁니다. 각 길이 필드가 000이므로 0000과 1000이 교대로 저장됩니다. 원본 8비트 대신 32비트가 필요합니다.':
    'The value changes at every pixel in 01010101, producing eight runs of length 1. Each length field is 000, so the stored words alternate between 0000 and 1000. They take 32 bits instead of the original 8.',
  '원래 2×2의 왼쪽 위와 오른쪽 아래는 0, 다른 두 칸은 2입니다. 평균 1을 저장하고 네 칸에 같은 값 1을 펼칩니다. 원래 0과 2가 있던 위치를 되찾을 수 없습니다.':
    'The original 2×2 block has 0 at the top left and bottom right, and 2 in the other positions. The stored mean 1 expands to 1 in all four positions. The positions of the original 0s and 2s are lost.',
  '2×2의 밝기 0, 2, 2, 0을 더해 4로 나누면 평균 1입니다. 평균 하나만 2비트로 저장하고 다시 네 칸에 펼치면 모든 칸이 1로 바뀝니다. 처음 0과 2가 어느 칸에 있었는지는 돌아오지 않습니다. 이렇게 일부 정보를 버리는 방법이 손실 압축입니다.':
    'Add the four brightness values 0, 2, 2 and 0 and divide by 4 to get the mean, 1. Store that mean in two bits and expand it back to four pixels. All four are now 1, so the positions of the original 0s and 2s cannot be recovered. Dropping some information in this way is lossy compression.',
  '왼쪽 위 2×2': 'Top-left 2×2', '그대로': 'Unchanged', '{#0}×{#0} 평균 {#1}': '{0}×{0} mean {1}',
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
