// English for 8D.4 Animation and physics. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '애니메이션과 물리 · 레슨 8D.4': 'Animation and physics · Lesson 8D.4',
  '키프레임 사이를 직선과 이징 곡선으로 채우고, 떨어지는 공을 속도와 위치를 조금씩 고치는 오일러 방법으로 계산하고, 바닥에 부딪혀 튀기며 생기는 간격 오차를 보고, 고정된 물리 간격으로 어디서나 같은 결과를 얻는 방법을 따라가 보세요.':
    'Fill the gap between keyframes with a straight line and an easing curve, work out a falling ball with Euler\'s method of nudging velocity and position, see the step error when it bounces off the floor, and follow how a fixed physics step gives the same result everywhere.',
  '움직임을 자연스럽게 보이게 하려면 무엇을 계산할까요? 키프레임 보간과 떨어지는 공의 물리를 한 걸음씩 계산해 보세요.':
    'What do you calculate to make motion look natural? Work out keyframe interpolation and the physics of a falling ball one step at a time.',
  '상태가 속도와 위치 고치기, 부딪힘 검사를 거쳐 화면에 그려지는 장면': 'The state passing through velocity and position updates and a collision check to be drawn on screen',
  '한 프레임의 움직임 계산': 'One frame of motion', '상태와 키프레임': 'State and keyframes', '계산 단계': 'Calculation stage', 
  '"다음 단계"를 누르면 움직임이 오른쪽으로 움직입니다.': 'Press "Next step" and the values move to the right.',
  '"다음 단계"를 눌러 움직임을 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the motion one station at a time. Prediction questions come up along the way.',
  // Stations
  '키프레임': 'Keyframes', '보간': 'Interpolate', '지금 상태': 'State', '속도 고치기': 'Velocity', '위치 고치기': 'Position', '부딪힘 검사': 'Collision',
  '키프레임 → 보간': 'Keyframes → interpolate', '보간 → 화면': 'Interpolate → screen', '키프레임 · 이징': 'Keyframes · easing',
  '지금 상태 → 속도 고치기': 'State → velocity', '속도 고치기 → 위치 고치기': 'Velocity → position', '위치 고치기 → 지금 상태': 'Position → state', '지금 상태 → 화면': 'State → screen',
  '위치 고치기 → 부딪힘 검사': 'Position → collision', '부딪힘 검사 → 화면': 'Collision → screen', '위치 고치기 · 다음 걸음': 'Position · next step', '위치 고치기 · 벽 검사': 'Position · wall check', '부딪힘 검사 · y 0, v +16': 'Collision · y 0, v +16',
  // Step 1
  '사이 채우기': 'Fill the gap', '키프레임 사이를 계산으로 채운다': 'Calculation fills the gap between keyframes',
  '애니메이터는 "0초에 x = 0, 1초에 x = 100"처럼 중요한 순간(키프레임)만 정하고, 그 사이 60프레임(8D.1)은 컴퓨터가 채웁니다. 가장 단순한 방법은 시간 비율만큼 나누는 직선 보간입니다. 그런데 실제 물체는 서서히 출발해 서서히 멈추므로, 시간 비율 t를 3t² − 2t³처럼 굽힌 곡선(이징)에 넣어 쓰면 훨씬 자연스럽습니다.':
    'An animator sets only the key moments (keyframes), like "x = 0 at 0 s, x = 100 at 1 s", and the computer fills the 60 frames (8D.1) in between. The simplest way is linear interpolation, dividing by the fraction of time. But real objects start slowly and stop slowly, so feeding the time fraction t into a bent curve such as 3t² − 2t³ (easing) looks far more natural.',
  '0.25초에 직선 보간은 x = 25, 이징은 x ≈ 15.6입니다. 처음에는 덜 가고 가운데에서 빨라졌다가 끝에서 느려집니다. 버튼이 열리고 닫히는 화면 애니메이션(6.8)도 이렇게 만듭니다.':
    'At 0.25 s, linear interpolation gives x = 25 and easing gives x ≈ 15.6. It goes less at first, speeds up in the middle and slows at the end. On-screen animations of buttons opening and closing (6.8) are made this way too.',
  '왼쪽부터 키프레임, 보간, 화면이 한 줄로 놓여 있습니다.': 'From the left, keyframes, interpolation and screen stand in a row.',
  '0초: x = 0': '0 s: x = 0', '1초: x = 100': '1 s: x = 100', '지금: 0.25초': 'Now: 0.25 s',
  '직선 보간': 'Linear interpolation', '시간 비율만큼 나눕니다.': 'Divide by the fraction of time.', '직선 25': 'Linear 25',
  '이징': 'Easing', '천천히-빠르게-천천히': 'Slow, fast, slow', '곡선 3t² − 2t³ = 3 × 0.0625 − 2 × 0.015625 = 0.15625': 'Curve 3t² − 2t³ = 3 × 0.0625 − 2 × 0.015625 = 0.15625',
  '시간 비율을 곡선에 넣어 굽힙니다.': 'Feed the time fraction into the curve to bend it.', '이징 15.6': 'Easing 15.6',
  '0.5초(한가운데)에 이징 곡선 3t² − 2t³의 값은?': 'At 0.5 s (the middle), what is the easing curve 3t² − 2t³?',
  '0.5 (가운데는 직선과 같음)': '0.5 (same as linear in the middle)', '3 × 0.25 − 2 × 0.125 = 0.5입니다. 이 곡선은 가운데를 지나며 양 끝에서만 느립니다.': '3 × 0.25 − 2 × 0.125 = 0.5. The curve passes through the middle and is slow only at the two ends.',
  '이 프레임에 그리기': 'Draw this frame', '0.25초 프레임의 물체 위치 x = 15.6': 'Object position in the 0.25 s frame: x = 15.6', '계산한 위치로 이번 프레임을 그립니다.': 'Draw this frame at the calculated position.',
  // Step 2
  '물리 한 걸음': 'One physics step', '힘으로 속도를, 속도로 위치를 조금씩 고친다': 'Force nudges velocity, velocity nudges position',
  '공을 떨어뜨리는 장면은 키프레임 대신 물리로 계산합니다. 중력은 속도를 1초에 10m/s씩 바꾸고, 속도는 위치를 바꿉니다. 컴퓨터는 이것을 작은 시간 간격 dt마다 "속도 += 중력 × dt, 위치 += 속도 × dt"로 되풀이합니다(오일러 방법). 여기서는 눈에 보이도록 dt = 0.5초로 크게 잡습니다.':
    'A scene of a dropped ball is worked out with physics instead of keyframes. Gravity changes velocity by 10 m/s every second, and velocity changes position. The computer repeats this every small time step dt as "velocity += gravity × dt, position += velocity × dt" (Euler\'s method). Here dt is a large 0.5 s so you can see it.',
  '높이 20m에서 놓은 공이 0.5초마다 17.5 → 12.5 → 5m로 점점 빨리 떨어졌습니다. 속도도 −5 → −10 → −15m/s로 커집니다. 매 걸음 같은 두 줄 계산을 되풀이할 뿐입니다.':
    'A ball dropped from 20 m fell faster and faster, 17.5 → 12.5 → 5 m every 0.5 s. Its velocity grew too, −5 → −10 → −15 m/s. Each step just repeats the same two lines of arithmetic.',
  '왼쪽부터 지금 상태, 속도 고치기, 위치 고치기, 부딪힘 검사, 화면이 한 줄로 놓여 있습니다.': 'From the left, current state, velocity update, position update, collision check and screen stand in a row.',
  '처음 상태': 'Starting state', '높이 y = 20m · 속도 v = 0': 'Height y = 20 m · velocity v = 0', '중력 g = −10m/s² · 간격 dt = 0.5초': 'Gravity g = −10 m/s² · step dt = 0.5 s',
  '0.5초: 속도': '0.5 s: velocity', '중력이 속도를 바꿉니다.': 'Gravity changes the velocity.', '0.5초: 위치': '0.5 s: position', '새 속도로 위치를 옮깁니다.': 'Move the position with the new velocity.',
  '다음 걸음': 'Next step', '1.0초': '1.0 s', '같은 계산을 되풀이합니다.': 'Repeat the same calculation.',
  '1.5초에는 y가 얼마일까요? (v = −15)': 'What is y at 1.5 s? (v = −15)', 'v = −10 − 5 = −15, y = 12.5 + (−15) × 0.5 = 5입니다.': 'v = −10 − 5 = −15, y = 12.5 + (−15) × 0.5 = 5.',
  '1.5초': '1.5 s', '1.5초의 위치를 그립니다.': 'Draw the position at 1.5 s.',
  // Step 3
  '부딪힘': 'Collision', '바닥을 뚫으면 되돌리고 튕겨 낸다': 'If it goes through the floor, put it back and bounce it',
  '다음 걸음(2.0초)을 계산하면 y = 5 − 20 × 0.5 = −5로 바닥(0) 아래가 됩니다. 매 걸음마다 부딪힘을 검사해, 바닥 아래로 갔으면 위치를 바닥으로 되돌리고 속도를 위로 뒤집습니다. 진짜 공은 튈 때 힘을 조금 잃으므로 0.8을 곱합니다. 정확한 답(y = 20 − 5t²)은 정확히 2초에 바닥에 닿지만, 큰 간격 때문에 계산은 바닥을 5m나 지나쳤습니다.':
    'Working out the next step (2.0 s) gives y = 5 − 20 × 0.5 = −5, below the floor (0). Every step checks for collisions; if the ball went below the floor, its position goes back to the floor and its velocity flips upward. A real ball loses a little energy when it bounces, so multiply by 0.8. The exact answer (y = 20 − 5t²) touches the floor at exactly 2 s, but the large step made the calculation overshoot the floor by 5 m.',
  '공이 바닥에서 위로 16m/s로 튀어 올랐고, 튈 때마다 속도가 0.8배가 되어 튀는 높이는 0.64배(0.8²)씩 낮아집니다. 간격이 클수록 지나치는 오차가 커서, 실제 게임은 훨씬 작은 간격(예: 1/120초)을 씁니다.':
    'The ball bounced up off the floor at 16 m/s; each bounce makes the velocity 0.8 times as much, so the bounce height drops to 0.64 (0.8²) of the last. The larger the step, the larger the overshoot, so real games use far smaller steps (say 1/120 s).',
  '같은 장면입니다. 2.0초 걸음에서 부딪힘을 검사합니다.': 'The same scene. Check for collisions in the 2.0 s step.',
  '1.5초 상태': 'State at 1.5 s', '바닥 y = 0 · 튀기 계수 0.8': 'Floor y = 0 · bounce factor 0.8',
  '2.0초: 속도': '2.0 s: velocity', '속도를 고칩니다.': 'Update the velocity.', '2.0초: 위치': '2.0 s: position', 'y = 5 + (−20) × 0.5 = −5 → 바닥 아래!': 'y = 5 + (−20) × 0.5 = −5 → below the floor!',
  '위치가 바닥 아래로 내려갔습니다.': 'The position went below the floor.',
  '부딪힘 처리': 'Handle the collision', 'y < 0 → y = 0으로 되돌림': 'y < 0 → put back to y = 0', 'v = −(−20) × 0.8 = +16 (위로)': 'v = −(−20) × 0.8 = +16 (upward)', '바닥으로 되돌리고 속도를 위로 뒤집습니다.': 'Put it back on the floor and flip the velocity upward.',
  '튈 때 속도에 1이 아니라 0.8을 곱하는 까닭은?': 'Why multiply the velocity by 0.8, not 1, on a bounce?',
  '튈 때 힘을 잃어 점점 덜 튀게 하려고': 'So it loses energy and bounces less each time', '계산을 빠르게 하려고': 'To make the math faster',
  '1을 곱하면 영원히 같은 높이로 튑니다. 0.8이면 튈 때마다 낮아지다 멈춥니다.': 'Multiplying by 1 bounces to the same height forever. With 0.8, each bounce is lower until it stops.',
  '튀어 오름': 'Bounces up', '정확한 답은 t = 2.0초에 바로 y = 0': 'The exact answer is y = 0 right at t = 2.0 s', '계산은 5m 지나쳤다가 되돌림 → 간격이 크면 오차': 'The calculation overshot 5 m and was put back → big steps cause error',
  '공이 튀어 오릅니다.': 'The ball bounces up.',
  // Step 4
  '고정 간격': 'Fixed step', '화면은 들쭉날쭉해도 물리는 같은 간격으로 계산한다': 'Frames may be uneven, but physics runs at a fixed step',
  '프레임 시간은 장면에 따라 16.7ms였다가 33ms가 되기도 합니다. 물리를 프레임 시간으로 바로 계산하면 느린 컴퓨터에서 결과가 달라지고, 간격이 커질 때 빠른 공이 얇은 벽을 통과해 버립니다(터널링). 그래서 물리는 1/120초 같은 고정 간격으로 계산하고, 한 프레임 동안 흐른 시간만큼 여러 번 돌립니다.':
    'Frame time can be 16.7ms and then 33ms, depending on the scene. Computing physics directly with the frame time gives different results on slow computers, and when the step grows a fast ball passes right through a thin wall (tunneling). So physics runs at a fixed step such as 1/120 s, as many times as the time that passed during a frame.',
  '33ms 프레임에서는 1/120초(약 8.3ms) 걸음을 네 번, 16.7ms 프레임에서는 두 번 돌렸습니다. 어느 컴퓨터에서나 같은 결과가 나오고, 작은 간격이라 공이 벽을 지나치지 않습니다.':
    'A 33ms frame ran four 1/120 s (about 8.3ms) steps, and a 16.7ms frame ran two. Every computer gets the same result, and with small steps the ball never passes through the wall.',
  '같은 장면입니다. 프레임 시간이 달라도 물리는 같은 간격으로 계산합니다.': 'The same scene. Even when frame times differ, physics runs at the same step.',
  '물리 간격': 'Physics step', '물리: 1/120초 ≈ 8.3ms 고정': 'Physics: fixed 1/120 s ≈ 8.3ms', '이번 프레임: 33ms 걸림 (장면이 무거움)': 'This frame: took 33ms (a heavy scene)', '33ms 흐름': '33ms passed',
  '여러 번 나눠 계산': 'Split into several runs', '33ms ÷ 8.3ms ≈ 4 → 물리 걸음 4번': '33ms ÷ 8.3ms ≈ 4 → 4 physics steps', '흐른 시간만큼 작은 걸음을 여러 번 돌립니다.': 'Run small steps as many times as the time that passed.', '4걸음': '4 steps',
  '다음 프레임이 16.7ms 걸리면 물리 걸음은 몇 번일까요?': 'If the next frame takes 16.7ms, how many physics steps run?', '2번': '2', '4번': '4', '1번': '1',
  '16.7 ÷ 8.3 ≈ 2입니다. 프레임이 빨라도 느려도 물리 한 걸음의 크기는 같습니다.': '16.7 ÷ 8.3 ≈ 2. Fast frame or slow, one physics step is the same size.',
  '작은 걸음': 'Small step', '작은 걸음의 위치': 'Position in small steps', '한 걸음에 공이 움직이는 거리가 작음 → 벽 두께보다 작음': 'The ball moves little per step → less than the wall\'s thickness',
  '작은 걸음이라 벽을 뛰어넘지 않습니다.': 'Small steps never jump over the wall.', '촘촘히': 'Fine-grained',
  '벽 검사': 'Wall check', '터널링 없음': 'No tunneling', '얇은 벽에도 부딪힘이 잡힘': 'Collisions are caught even with thin walls', '얇은 벽과의 부딪힘도 놓치지 않습니다.': 'Not even a collision with a thin wall is missed.', '벽에 부딪힘': 'Hits the wall',
  '그리기': 'Draw', '같은 결과': 'Same result', '느린 컴퓨터든 빠른 컴퓨터든 같은 움직임': 'The same motion on slow and fast computers', '어느 컴퓨터에서나 같은 움직임이 나옵니다.': 'Every computer gets the same motion.',
};
