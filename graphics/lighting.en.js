// English for 8D.3 Light and shadow. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '빛과 그림자 · 레슨 8D.3': 'Light and shadow · Lesson 8D.3',
  '법선과 빛 방향의 내적으로 확산광을, 거울 방향과의 각도를 거듭제곱해 반짝임을 구하고, 바탕색과 주변광으로 픽셀의 최종 색을 합치고, 빛에서 본 깊이와 비교해 그림자를 정하는 과정을 계산해 보세요.':
    'Work out diffuse light from the dot product of the normal and the light direction, the highlight from a power of the angle to the mirror direction, the pixel\'s final color from the base color and ambient light, and the shadow by comparing with the depth seen from the light.',
  '표면의 밝기는 어떻게 계산할까요? 빨간 공의 한 점과 바닥의 한 점이 빛을 받아 최종 색이 되는 과정을 직접 계산해 보세요.':
    'How is a surface\'s brightness calculated? Work out yourself how a point on a red ball and a point on the floor take in light and become a final color.',
  '표면의 점이 법선과 빛 방향을 거쳐 확산광, 반짝임, 최종 색으로 계산되는 장면': 'A point on a surface worked out through the normal and light direction into diffuse light, highlight and final color',
  '한 점의 색 계산': 'Coloring one point', '점과 색': 'Point and color', '빛 계산': 'Lighting', 
  '"다음 단계"를 누르면 빛이 오른쪽으로 움직입니다.': 'Press "Next step" and the values move to the right.',
  '"다음 단계"를 눌러 빛을 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the light one station at a time. Prediction questions come up along the way.',
  // Stations
  '표면의 점': 'Surface point', '법선과 빛': 'Normal, light', '확산광': 'Diffuse', '반짝임': 'Highlight', '최종 색': 'Final color',
  '빛의 자리': 'Light\'s view', '그림자 지도': 'Shadow map', '바닥의 점': 'Floor point', '거리 비교': 'Compare',
  '표면의 점 → 법선과 빛': 'Surface point → normal, light', '법선과 빛 → 확산광': 'Normal, light → diffuse', '법선과 빛 → 반짝임': 'Normal, light → highlight', '법선과 빛 · 60°': 'Normal, light · 60°',
  '확산광 → 최종 색': 'Diffuse → final color', '반짝임 → 최종 색': 'Highlight → final color', '반짝임 · 0.01': 'Highlight · 0.01', '반짝임 · + 0.62 × 흰색': 'Highlight · + 0.62 × white',
  '빛의 자리 → 그림자 지도': 'Light\'s view → shadow map', '바닥의 점 → 거리 비교': 'Floor point → compare', '그림자 지도 → 거리 비교': 'Shadow map → compare', '그림자 지도 · 적힌 거리 6': 'Shadow map · stored 6', '거리 비교 → 최종 색': 'Compare → final color',
  // Step 1
  '비치는 각도': 'Angle of light', '빛을 정면으로 받을수록 밝다': 'The more head-on the light, the brighter',
  '6.7의 픽셀 색칠 단계는 칸마다 "얼마나 밝은가"를 계산합니다. 표면에는 바깥쪽을 가리키는 방향(법선 n)이 있고, 빛이 오는 방향(l)이 있습니다. 두 방향이 같을수록, 즉 빛을 정면으로 받을수록 밝습니다. 길이 1인 두 방향의 내적(8B.1) n · l이 그 정도이고, 음수(빛이 뒤에서 옴)는 0으로 둡니다. 이것을 확산광이라 합니다.':
    'The pixel shading stage of 6.7 works out "how bright" each cell is. A surface has a direction pointing outward (the normal n), and light has a direction it comes from (l). The closer the two directions, that is the more head-on the light, the brighter. The dot product (8B.1) n · l of the two length-1 directions measures this, and a negative value (light from behind) is set to 0. This is called diffuse light.',
  '빛이 정면이면 1.0, 법선에서 60° 기울면 0.5, 90°를 넘으면 0입니다. 공의 가운데가 밝고 가장자리로 갈수록 어두워지는 까닭입니다.':
    'Head-on light gives 1.0, light tilted 60° from the normal gives 0.5, and past 90° gives 0. That is why a ball is bright in the middle and darker toward the edges.',
  '왼쪽부터 표면의 점, 법선과 빛, 확산광, 반짝임, 최종 색이 한 줄로 놓여 있습니다.': 'From the left, surface point, normal and light, diffuse, highlight and final color stand in a row.',
  '표면과 빛': 'Surface and light', '법선 n = (0, 1) (위를 향함)': 'Normal n = (0, 1) (facing up)', '빛 방향 l: 정면 (0, 1) / 60° (0.87, 0.5) / 아래 (0, −1)': 'Light direction l: head-on (0, 1) / 60° (0.87, 0.5) / below (0, −1)', '위를 향한 면': 'Upward face',
  '방향 모으기': 'Gather directions', 'l = (0, 1) (빛이 바로 위에서)': 'l = (0, 1) (light straight above)', '법선과 빛의 방향을 모읍니다.': 'Gather the normal and the light direction.',
  '정면의 빛': 'Head-on light', '(0, 1) · (0, 1) = 1.0 → 가장 밝음': '(0, 1) · (0, 1) = 1.0 → brightest', '빛을 정면으로 받으면 1.0입니다.': 'Light taken head-on gives 1.0.',
  '비스듬한 빛': 'Slanted light', '60° 기울어진 빛은 절반 밝기입니다.': 'Light tilted 60° is half as bright.',
  '빛이 표면 뒤(아래)에서 오면 확산광은?': 'If light comes from behind (below) the surface, the diffuse light is?',
  '0 (음수는 0으로)': '0 (negatives become 0)', '(0, 1) · (0, −1) = −1이지만, 빛을 받지 못하는 면이므로 0으로 둡니다.': '(0, 1) · (0, −1) = −1, but the face gets no light, so it is set to 0.',
  // Step 2
  '거울 방향 근처에서만 밝게 반짝인다': 'It shines only near the mirror direction',
  '매끈한 물체에는 하이라이트가 있습니다. 빛이 거울처럼 반사되는 방향과 눈이 보는 방향이 가까울 때만 밝게 반짝입니다. 두 방향 사이 각도의 코사인을 큰 수(예: 32)만큼 거듭제곱하면, 각도가 조금만 벌어져도 값이 급격히 작아져 작고 또렷한 반짝임이 됩니다. 거듭제곱 수가 클수록 더 매끈해 보입니다.':
    'Smooth objects have highlights. They shine brightly only when the direction light reflects like a mirror is close to the direction the eye looks from. Raising the cosine of the angle between the two to a big power (say 32) makes the value drop sharply as soon as the angle opens a little, giving a small, crisp highlight. The bigger the power, the smoother it looks.',
  '눈이 거울 방향에서 10° 떨어져 있으면 반짝임 0.62, 30° 떨어지면 0.01입니다. 고개를 조금만 움직여도 하이라이트가 따라 움직이는 까닭입니다.':
    'With the eye 10° off the mirror direction the highlight is 0.62; 30° off, it is 0.01. That is why a highlight follows you when you move your head just a little.',
  '같은 장면입니다. 눈의 위치에 따라 반짝임을 계산합니다.': 'The same scene. Work out the highlight for where the eye is.',
  '매끈한 공': 'Smooth ball', '반짝임 = cos(거울 방향과 눈 사이 각도)³²': 'Highlight = cos(angle between mirror direction and eye)³²', '매끈한 면': 'Smooth face',
  '거울 방향 가까이': 'Near the mirror direction', '눈이 거울 방향에서 10° 떨어져 있습니다.': 'The eye is 10° off the mirror direction.',
  '조금 벗어나면': 'A little further off', '30°로 벌어지면 어떻게 될까요?': 'What happens at 30°?',
  '0.866³²은 얼마쯤일까요?': 'About how much is 0.866³²?', '약 0.01': 'About 0.01', '약 0.87': 'About 0.87', '약 0.5': 'About 0.5',
  '1보다 작은 수를 32번 곱하면 급격히 작아집니다. 그래서 반짝임은 좁은 곳에만 생깁니다.': 'Multiplying a number below 1 by itself 32 times shrinks it fast. So a highlight appears only in a narrow spot.',
  '반짝임이 거의 사라짐': 'The highlight nearly vanishes', '30°에서는 반짝임이 거의 없음': 'Almost no highlight at 30°', '거듭제곱 수 8이면 0.866⁸ ≈ 0.32 → 넓고 흐린 반짝임': 'With power 8, 0.866⁸ ≈ 0.32 → a wide, soft highlight',
  '거듭제곱 수가 반짝임의 크기를 정합니다.': 'The power sets the size of the highlight.', '반짝임 없음': 'No highlight',
  // Step 3
  '색 합치기': 'Combine colors', '바탕색 × (주변광 + 확산광) + 반짝임': 'Base color × (ambient + diffuse) + highlight',
  '최종 색은 세 가지를 합칩니다. 물체의 바탕색에 밝기(주변광 + 확산광)를 곱하고, 반짝임은 빛의 색(흰색)으로 더합니다. 주변광은 벽에 튕겨 어디나 조금씩 오는 빛을 흉내 낸 작은 값으로, 빛이 안 닿는 곳도 완전히 까맣지 않게 합니다. 색은 0.3의 빨강·초록·파랑 0–255 값입니다.':
    'The final color combines three things. The object\'s base color is multiplied by the brightness (ambient + diffuse), and the highlight is added in the light\'s color (white). Ambient light is a small value that imitates light bouncing off walls and arriving a little everywhere, so places the light does not reach are not fully black. Colors are the red, green and blue 0–255 values of 0.3.',
  '빨간 공(200, 40, 40)의 한 점이 주변광 0.1 + 확산광 0.5로 (120, 24, 24)가 되고, 반짝임 0.62 × 255 ≈ 158을 더해 (255, 182, 182)가 됐습니다(255에서 자름). 화면의 픽셀 200만 개마다 이 계산을 합니다(6.7의 GPU).':
    'A point on the red ball (200, 40, 40) became (120, 24, 24) with ambient 0.1 + diffuse 0.5, then (255, 182, 182) after adding the highlight 0.62 × 255 ≈ 158 (cut off at 255). This calculation runs for every one of the screen\'s 2 million pixels (the GPU of 6.7).',
  '같은 장면입니다. 세 값을 합쳐 픽셀 하나의 최종 색을 만듭니다.': 'The same scene. The three values combine into one pixel\'s final color.',
  '빨간 공의 한 점': 'A point on the red ball', '바탕색 (200, 40, 40) · 주변광 0.1': 'Base color (200, 40, 40) · ambient 0.1', '확산광 0.5 · 반짝임 0.62': 'Diffuse 0.5 · highlight 0.62', '빨간 공': 'Red ball',
  '밝기 곱하기': 'Multiply brightness', '바탕색에 밝기 0.6을 곱합니다.': 'Multiply the base color by brightness 0.6.',
  '+ 0.62 × 흰색': '+ 0.62 × white', '반짝임 더하기': 'Add the highlight', '255를 넘는 값은 255로 → (255, 182, 182)': 'Values over 255 become 255 → (255, 182, 182)', '반짝임을 흰빛으로 더합니다.': 'Add the highlight as white light.',
  '주변광을 0으로 하면 빛이 안 닿는 면은?': 'With ambient light at 0, a face the light does not reach looks?',
  '완전히 까맣게 보인다': 'Completely black', '바탕색 그대로 보인다': 'Just its base color',
  '확산광과 반짝임이 0이고 주변광도 0이면 바탕색 × 0 = 검정입니다. 실제 세상은 반사된 빛이 있어 그렇게 까맣지 않습니다.': 'With diffuse, highlight and ambient all 0, it is base color × 0 = black. The real world has reflected light, so it is never that black.',
  // Step 4
  '그림자': 'Shadow', '빛의 자리에서 본 깊이와 비교해 그림자를 정한다': 'Decide shadows by comparing with depth seen from the light',
  '위 계산은 빛과 점 사이에 다른 물체가 있는지 모릅니다. 그림자를 넣으려면 먼저 빛의 자리에서 장면을 한 번 그려, 칸마다 빛에서 가장 가까운 물체까지의 거리를 적어 둡니다(그림자 지도, 6.7의 깊이 버퍼와 같음). 화면을 그릴 때 각 점이 빛에서 얼마나 먼지 구해, 적어 둔 거리보다 멀면 무언가에 가려진 것이므로 그림자로 칠합니다.':
    'The calculation above does not know whether another object sits between the light and the point. To add shadows, first draw the scene once from the light\'s position and write down, for each cell, the distance to the object nearest the light (a shadow map, like the depth buffer of 6.7). When drawing the screen, work out how far each point is from the light; if it is farther than the stored distance, something is blocking it, so paint it as shadow.',
  '바닥의 점은 빛에서 10만큼 떨어져 있는데, 그림자 지도의 그 칸에는 공까지의 거리 6이 적혀 있었습니다. 10 > 6이라 공에 가려진 그림자이고, 확산광과 반짝임을 빼고 주변광만 남겼습니다. 장면을 빛 수만큼 더 그리므로 8D.1의 프레임 예산을 많이 씁니다.':
    'The floor point is 10 from the light, but that cell of the shadow map held 6, the distance to the ball. 10 > 6, so it is shadow cast by the ball, and only ambient light was kept, without diffuse and highlight. The scene is drawn once more per light, so it uses much of the frame budget of 8D.1.',
  '같은 장면입니다. 공 아래 바닥의 한 점을 계산합니다.': 'The same scene. Work out a point on the floor under the ball.',
  '장면': 'Scene', '빛 아래 공, 그 아래 바닥': 'A ball under the light, the floor under it', '바닥의 점: 빛에서 거리 10': 'Floor point: distance 10 from the light', '빛': 'Light',
  '빛에서 그리기': 'Draw from light', '그림자 지도 만들기': 'Make the shadow map', '빛의 자리에서 장면을 그려 칸마다 가장 가까운 거리를 적음': 'Draw the scene from the light and store the nearest distance per cell', '이 칸: 공까지 거리 6': 'This cell: distance 6 to the ball',
  '빛의 자리에서 본 거리를 적어 둡니다.': 'Store the distances seen from the light.', '이 칸 = 6': 'This cell = 6',
  '거리 10': 'Distance 10', '내 거리': 'My distance', '바닥의 점은 빛에서 10': 'The floor point is 10 from the light', '바닥의 점이 빛에서 얼마나 먼지 구합니다.': 'Work out how far the floor point is from the light.', '내 거리 10': 'Mine: 10',
  '적힌 거리 6': 'Stored 6', '비교': 'Compare', '10 > 6 → 빛과 나 사이에 무언가(공)가 있음 → 그림자': '10 > 6 → something (the ball) is between the light and me → shadow',
  '적힌 거리보다 멀면 가려진 것입니다.': 'Farther than the stored distance means blocked.', '10 > 6 그림자': '10 > 6 shadow',
  '공 위쪽 표면의 점(빛에서 거리 6)은 그림자일까요?': 'Is a point on the top of the ball (distance 6 from the light) in shadow?',
  '아니다 (6 = 6, 가장 가까운 물체가 바로 자기)': 'No (6 = 6, the nearest object is itself)', '그렇다': 'Yes',
  '그 칸에서 빛에 가장 가까운 것이 자기 자신이므로 가려지지 않았습니다.': 'The thing nearest the light in that cell is itself, so nothing blocks it.',
  '그림자 색': 'Shadow color', '확산광과 반짝임 빼고 주변광만': 'Ambient only, no diffuse or highlight', '바닥색 × 0.1 → 어두운 그림자': 'Floor color × 0.1 → a dark shadow',
  '그림자 속 점은 주변광만 받습니다.': 'A point in shadow gets only ambient light.', '어두움': 'Dark',
  '(255, 182, 182) (255에서 자름)': '(255, 182, 182) (capped at 255)',
  // Example note on the still picture.
  '거리 비교 · 그림자': 'Compare · shadow',
  '법선 n (0, 1)과 빛 l의 내적': 'normal n (0, 1) dot light l', '정면이면 1.0': 'head-on: 1.0', '60° 기울면 0.5 (절반 밝기)': 'tilted 60°: 0.5 (half as bright)',
  '반짝임 = cos(거울 방향과 눈의 각도)³²': 'shine = cos(mirror-to-eye angle)³²', '10°면 0.62': '10°: 0.62', '30°면 0.01 (거의 없음)': '30°: 0.01 (almost none)',
  '(200, 40, 40) × (주변광 0.1 + 확산광 0.5) = (120, 24, 24)': '(200, 40, 40) × (ambient 0.1 + diffuse 0.5) = (120, 24, 24)', '+ 0.62 × 흰색': '+ 0.62 × white',
  '빛 자리에서 본 이 칸의 거리 6': 'from the light, this cell: 6', '바닥 점은 빛에서 10': 'floor point: 10', '10 > 6이라 가린 것이 있음: 그림자': '10 > 6, blocked: shadow',
};
