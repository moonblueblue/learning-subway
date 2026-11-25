// English for 8B.6 Large language models. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// The example "오늘 날씨가 정말 | 좋 | 다 | ." becomes "The weather is really | nice | today | .",
// so the four tokens, the candidates (좋 nice, 덥 hot, 춥 cold) and the four rounds still line up.
window.lessonText = {
  // Page
  '대규모 언어 모델 · 레슨 8B.6': 'Large language models · Lesson 8B.6',
  '글을 토큰으로 나눠 트랜스포머를 지나 다음 토큰의 확률을 구하고, 고른 토큰을 붙여 되풀이하며 문장을 만들고, 온도로 뽑기를 조절하고, 사전 학습과 지시 학습으로 대화하는 조수가 되기까지와 환각을 따라가 보세요.':
    'Split text into tokens, pass them through a transformer to get next-token probabilities, build a sentence by appending the chosen token and repeating, tune the draw with temperature, and follow how pre-training and instruction tuning make a chat assistant, and where hallucination comes from.',
  '다음 단어 맞히기가 어떻게 대화가 될까요? "오늘 날씨가 정말" 다음 토큰을 고르는 데서 시작해, 한 토큰씩 이어 쓰는 언어 모델의 고리를 따라가 보세요.':
    'How does guessing the next word become a conversation? Start by choosing the token after "The weather is really" and follow the loop of a language model writing one token at a time.',
  '다음 토큰 정거장': 'Next-token stations', '글이 토큰으로 나뉘어 트랜스포머를 지나 다음 토큰 확률이 되고, 고른 토큰이 다시 글에 붙는 장면': 'Text split into tokens passing through a transformer into next-token probabilities, with the chosen token joining the text again',
  '글과 확률': 'Text and probabilities', '토큰 나누기와 고르기': 'Tokenizing and choosing', '파일': 'Data', '도구': 'Operation', 
  '"다음 단계"를 누르면 글이 오른쪽으로 움직입니다.': 'Press "Next step" and the text moves to the right.',
  '"다음 단계"를 눌러 글을 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the text one station at a time. Prediction questions come up along the way.',
  '지금까지의 글': 'Text so far', '토큰 나누기': 'Tokenize', '트랜스포머': 'Transformer', '다음 토큰 확률': 'Next token', '고르기': 'Choose',
  '지금까지의 글 → 토큰 나누기': 'Text so far → tokenize', '토큰 나누기 → 트랜스포머': 'Tokenize → transformer', '트랜스포머 → 다음 토큰 확률': 'Transformer → next token',
  '다음 토큰 확률 → 고르기': 'Next token → choose', '고르기 → 지금까지의 글': 'Choose → text so far', '지금까지의 글 → 트랜스포머': 'Text so far → transformer',
  '트랜스포머 · 점수 → 확률': 'Transformer · scores → probabilities', '다음 토큰 확률 · 온도 1.5': 'Next token · temperature 1.5', '고르기 · "좋" 붙이기': 'Choose · append "nice"', '고르기 · 끝': 'Choose · end',
  '왼쪽부터 지금까지의 글, 토큰 나누기, 트랜스포머, 다음 토큰 확률, 고르기가 한 줄로 놓여 있습니다.': 'From the left: the text so far, tokenizing, the transformer, next-token probabilities and choosing, in a row.',
  // The running example
  '오늘 날씨가 정말': 'The weather is really', '오늘 날씨가 정말 좋': 'The weather is really nice', '오늘 날씨가 정말 좋다.': 'The weather is really nice today.', '좋다.': 'nice today.',
  '"좋"': '"nice"', '"좋" 45%': '"nice" 45%', '"덥" 30%': '"hot" 30%', '"춥" 15%': '"cold" 15%', '그 밖 10%': 'others 10%', '좋 45%': 'nice 45%',
  // Step 1
  '다음 토큰': 'The next token', '언어 모델은 다음에 올 토큰의 확률을 계산한다': 'A language model computes the probability of the next token',
  '대규모 언어 모델이 하는 일은 하나입니다. 지금까지의 글을 보고 다음에 올 조각(토큰)마다 확률을 매기는 것입니다. 글은 먼저 토큰으로 잘립니다(6.3의 렉서와 비슷하지만, 자주 나오는 글자 묶음 단위). 토큰들은 8B.5의 트랜스포머 층 수십 개를 지나고, 마지막에 모든 토큰 후보(수만 개)의 점수가 소프트맥스로 확률이 됩니다.':
    'A large language model does one thing: it looks at the text so far and gives a probability to each piece (token) that could come next. The text is first cut into tokens (like the lexer of 6.3, but in units of frequent letter groups). The tokens pass through dozens of transformer layers from 8B.5, and at the end softmax turns the scores of all candidate tokens (tens of thousands) into probabilities.',
  '"오늘 날씨가 정말" 다음은 "좋" 45%, "덥" 30%, "춥" 15%, 나머지 10%입니다. 모델은 정답을 하나 아는 것이 아니라, 수많은 글에서 배운 "이어질 만한 정도"를 숫자로 가집니다.':
    'After "The weather is really" come "nice" 45%, "hot" 30%, "cold" 15% and the rest 10%. The model does not know one right answer; it holds, as numbers, "how likely each is to follow", learned from huge amounts of text.',
  '글 1줄': '1 line of text', '글': 'Text', '"오늘" "날씨" "가" "정말"': '"The" "weather" "is" "really"', '토큰마다 번호와 벡터 (8B.5)': 'each token gets a number and a vector (8B.5)',
  '글을 토큰으로 자릅니다.': 'Cut the text into tokens.', '토큰 4개': '4 tokens', '토큰 5개': '5 tokens', '토큰 20개': '20 tokens',
  '층 수십 개를 지나며 어텐션으로 문맥을 섞음': 'dozens of layers mix in context with attention', '토큰들이 트랜스포머 층을 지납니다.': 'The tokens pass through the transformer layers.', '층 지나는 중': 'In the layers',
  '점수 → 확률': 'Scores → probs', '다음 토큰 후보마다 확률이 나옵니다.': 'Each candidate next token gets a probability.',
  '언어 모델이 직접 계산하는 것은?': 'What does a language model compute directly?', '다음에 올 토큰들의 확률': 'The probabilities of the next tokens', '문장 전체의 정답': 'The right answer for the whole sentence',
  '모델은 한 번에 다음 토큰 하나의 확률만 계산합니다. 긴 답은 이것을 되풀이해 만듭니다.': 'The model computes probabilities for only the next single token at a time. Long answers are made by repeating it.',
  // Step 2
  '이어 쓰기': 'Writing on', '고른 토큰을 글 끝에 붙이고 다시 묻는다': 'Append the chosen token to the text and ask again',
  '확률표에서 토큰 하나를 고르면 그것을 글 끝에 붙이고, 늘어난 글 전체로 다시 다음 토큰을 묻습니다. 이것을 끝 표시가 나올 때까지 되풀이하면 문장이 됩니다. 그래서 답이 한 토큰씩 화면에 나타나고, 긴 답일수록 오래 걸립니다. 모델이 한 번에 볼 수 있는 글의 길이(문맥 창)에는 한도가 있습니다.':
    'Choose one token from the probability table, append it to the end of the text, and ask for the next token again with the whole longer text. Repeat until an end marker comes and you have a sentence. That is why answers appear on screen one token at a time, and longer answers take longer. There is a limit to how much text the model can see at once (the context window).',
  '"좋" → "다" → "." → 끝으로 네 번 되풀이해 "오늘 날씨가 정말 좋다."가 됐습니다. 모델은 미리 문장을 다 정해 두지 않고 매번 다음 한 토큰만 정합니다.':
    'Four rounds, "nice" → "today" → "." → end, made "The weather is really nice today." The model does not plan the whole sentence in advance; each time it settles only the next token.',
  '같은 장면입니다. 고른 토큰이 다시 글로 돌아가 고리를 이룹니다.': 'The same scene. The chosen token goes back into the text, making a loop.',
  '가장 높은 "좋"을 고름': 'pick the highest, "nice"', '토큰 하나를 고릅니다.': 'Choose one token.',
  '"좋" 붙이기': 'Append "nice"', '글에 붙이기': 'Appending to the text', '고른 토큰을 글 끝에 붙입니다.': 'Append the chosen token to the end of the text.',
  '다음 토큰을 계산할 때 모델이 보는 글은?': 'What text does the model look at when computing the next token?',
  '방금 붙인 "좋"까지 포함한 글 전체': 'The whole text, including the "nice" just appended', '처음 질문만': 'Only the first question',
  '자기가 쓴 토큰까지 글에 들어가 다음 계산의 입력이 됩니다.': 'Even the tokens it wrote itself go into the text and become input to the next calculation.',
  '다시': 'Again', '되풀이': 'Repeat', '… → "다" 92% → "." 88% → 끝': '… → "today" 92% → "." 88% → end', '끝 표시가 나올 때까지 되풀이합니다.': 'Repeat until the end marker comes.',
  // Step 3
  '온도': 'Temperature', '온도로 얼마나 모험할지 정한다': 'Temperature sets how adventurous to be',
  '늘 가장 높은 확률만 고르면 답이 매번 똑같고 단조로워집니다. 그래서 확률대로 무작위로 뽑는데, 이때 온도라는 숫자로 확률표를 조절합니다. 온도가 낮으면 높은 확률이 더 커져 거의 늘 1등을 고르고, 높으면 확률이 고르게 퍼져 낮은 후보도 자주 뽑힙니다. 사실을 답할 때는 낮게, 이야기를 지을 때는 높게 씁니다.':
    'Always picking the highest probability makes every answer the same and dull. So tokens are drawn at random according to their probabilities, with a number called temperature adjusting the table. At a low temperature the high probabilities grow and the top one is picked almost every time; at a high temperature the probabilities spread out and low candidates get picked often. Use it low for facts and high for stories.',
  '온도 0.2에서는 "좋"이 약 88%로 커지고, 온도 1.5에서는 "좋" 38%, "덥" 29%, "춥" 18%, 그 밖 14%로 퍼졌습니다. 같은 질문에 답이 매번 조금씩 다른 까닭이 이 무작위 뽑기입니다.':
    'At temperature 0.2, "nice" grows to about 88%; at 1.5 it spreads out to "nice" 38%, "hot" 29%, "cold" 18% and others 14%. This random draw is why the same question gets slightly different answers each time.',
  '같은 장면입니다. 온도를 바꿔 확률표를 조절합니다.': 'The same scene. Change the temperature to adjust the probability table.',
  '확률표 (온도 1)': 'Probability table (temperature 1)', '좋 45% · 덥 30% · 춥 15% · 그 밖 10%': 'nice 45% · hot 30% · cold 15% · others 10%',
  '온도 0.2': 'Temp 0.2', '온도 1.5': 'Temp 1.5', '낮은 온도': 'Low temperature', '높은 온도': 'High temperature',
  '좋 ≈ 88% · 덥 ≈ 12% · 춥 ≈ 0.4%': 'nice ≈ 88% · hot ≈ 12% · cold ≈ 0.4%', '대부분 "좋"': 'Mostly "nice"', '온도를 낮추면 1등이 거의 다 가져갑니다.': 'Lower the temperature and the top one takes almost everything.',
  '좋 ≈ 38% · 덥 ≈ 29% · 춥 ≈ 18% · 그 밖 ≈ 14%': 'nice ≈ 38% · hot ≈ 29% · cold ≈ 18% · others ≈ 14%', '낮은 후보도 자주 뽑힘': 'low candidates get picked often',
  '온도를 높이면 확률이 고르게 퍼집니다.': 'Raise the temperature and the probabilities spread out.', '골고루': 'Spread out',
  '"우리나라 수도는?" 같은 사실 질문에 알맞은 온도는?': 'For a factual question like "What is the capital of our country?", which temperature fits?',
  '사실은 가장 그럴듯한 답 하나가 필요합니다. 높은 온도는 엉뚱한 후보를 뽑을 위험을 키웁니다.': 'A fact needs the single most likely answer. A high temperature raises the risk of drawing an odd candidate.',
  '뽑은 토큰': 'Drawn token', '매번 다른 답': 'A different answer each time', '같은 질문도 뽑기에 따라 다른 문장이 이어짐': 'the same question can go on differently depending on the draw',
  '무작위 뽑기 때문에 답이 매번 조금씩 다릅니다.': 'Because of the random draw, the answer differs a little each time.', '다른 이어 쓰기': 'Another ending',
  // Step 4
  '대화가 되기까지': 'Becoming a conversation', '글을 이어 쓰는 모델을 대화하는 조수로 길러 낸다': 'A model that continues text is trained into an assistant that converses',
  '먼저 인터넷과 책의 엄청난 글로 다음 토큰 맞히기를 배웁니다(사전 학습, 8B.3의 경사 하강법). 그러면 글은 잘 이어 쓰지만 질문에 답하는 법은 모릅니다. 다음으로 "질문 → 좋은 답" 예시로 더 배우고(지시 학습), 사람이 여러 답 중 더 나은 것을 고른 기록으로 다듬습니다. 그래도 본질은 "그럴듯한 다음 토큰"이라, 모르는 것을 자신 있게 지어내기도 합니다(환각).':
    'First it learns to guess the next token from an enormous amount of text from the internet and books (pre-training, with the gradient descent of 8B.3). Then it continues text well but does not know how to answer questions. Next it learns more from "question → good answer" examples (instruction tuning) and is refined with records of people choosing the better of several answers. Still, at heart it produces "a likely next token", so it sometimes confidently makes up what it does not know (hallucination).',
  '대화는 "질문 + 지금까지의 대화"를 글로 놓고 다음 토큰을 이어 쓰는 것입니다. 그럴듯함과 사실은 다르므로, 중요한 답은 출처를 확인하거나 검색 결과를 함께 넣어 답하게 합니다.':
    'A conversation is laying out "question + conversation so far" as text and continuing it with next tokens. Likely is not the same as true, so for important answers, check the sources or give the model search results to answer from.',
  '같은 장면입니다. 대화 전체가 하나의 글로 들어갑니다.': 'The same scene. The whole conversation goes in as one text.',
  '대화를 글로': 'Conversation as text', '사용자: 0.1 비트 레슨에서 1바이트는 몇 비트야?': 'User: In the 0.1 bits lesson, how many bits are in a byte?', '조수:': 'Assistant:', '대화 글': 'Chat text',
  '대화도 하나의 글': 'A conversation is text too', '"사용자: … 조수:"까지를 토큰으로': 'tokens up to "User: … Assistant:"', '대화 전체를 하나의 글로 넣습니다.': 'Put the whole conversation in as one text.',
  '토큰들': 'Tokens', '배운 대로 이어 쓰기': 'Continuing as learned', '사전 학습: 글 이어 쓰기': 'pre-training: continue text',
  '지시 학습 · 사람의 선택: 질문에 도움이 되게 답하기': 'instruction tuning · human choices: answer questions helpfully', '학습 단계마다 배운 것이 함께 작동합니다.': 'What each training stage taught works together.', '답 쓰는 중': 'Writing answer',
  '사전 학습만 한 모델에게 질문하면 생길 수 있는 일은?': 'What can happen if you ask a model that was only pre-trained?',
  '답 대신 비슷한 질문을 계속 이어 쓴다': 'It keeps writing similar questions instead of an answer', '언제나 완벽히 답한다': 'It always answers perfectly',
  '글을 그럴듯하게 이어 쓰는 것만 배웠기 때문입니다. 질문에 답하는 습관은 지시 학습으로 배웁니다.': 'Because it only learned to continue text plausibly. The habit of answering questions comes from instruction tuning.',
  '답': 'Answer', '조수: 1바이트는 8비트입니다.': 'Assistant: A byte is 8 bits.', '조수가 답을 이어 씁니다.': 'The assistant writes the answer.',
  '끝': 'End', '환각 주의': 'Beware hallucination', '모르는 질문에도 그럴듯한 토큰을 이어 씀 → 지어낸 사실': 'even for unknown questions it writes likely tokens → made-up facts', '중요한 답은 출처 확인': 'check sources for important answers',
  '그럴듯함은 사실과 다를 수 있습니다.': 'Likely can differ from true.', '답 완성': 'Answer done',
  '언어 모델이 없는 논문 제목을 자신 있게 말하는 까닭은?': 'Why does a language model confidently name a paper that does not exist?',
  '그럴듯한 다음 토큰을 이어 쓸 뿐 사실을 확인하지 않아서': 'It only writes likely next tokens and does not check facts', '거짓말을 하도록 배워서': 'It was trained to lie',
  '논문 제목처럼 보이는 토큰이 확률이 높으면 이어 씁니다. 그래서 검색 결과를 넣어 주거나 출처를 확인합니다.': 'If tokens that look like a paper title have high probability, it writes them. So give it search results or check the sources.',
  // Example note on the still picture.
  '"오늘 날씨가 정말"': '"Today the weather is really"', '다음 토큰: 좋 45% · 덥 30% · 춥 15% · 그 밖 10%': 'next token: nice 45% · hot 30% · cold 15% · other 10%',
  '"좋"을 골라 글 끝에 붙임 (토큰 5개)': 'pick "nice", append it (5 tokens)', '다시 물어 "다", "."도 붙임': 'ask again: append "-day", "." too', '"오늘 날씨가 정말 좋다."': '"Today the weather is really nice."',
  '좋 45% · 덥 30% · 춥 15%': 'nice 45% · hot 30% · cold 15%', '온도 0.2면 대부분 "좋"': 'temperature 0.2: mostly "nice"', '1.5면 골고루 뽑혀 다른 이어 쓰기': '1.5: spread out, other endings',
  '"1바이트는 몇 비트야?"를 대화 글로': '"How many bits in a byte?" as chat text', '조수 차례를 이어 씀': 'continue the assistant turn', '"8"을 고르고 끝 토큰에서 멈춤': 'pick "8", stop at the end token',
  '다시 계산': 'Again', '같은 확률표': 'Same table', '끝 토큰': 'End token', '토큰 20': '20 tokens', '고르기 · 뽑은 토큰': 'Choose · drawn token', '지금까지의 글 · 다시': 'Text so far · again', '계산 중': 'Computing',
};
