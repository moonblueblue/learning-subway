// English for 8B.5 Attention and transformers. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// The example sentence "고양이가 생선을 먹었다. 그것은 배가 불렀다." becomes "The cat ate the fish. It was full.":
// 고양이 cat, 생선 fish, 먹었다 ate, 그것 it.
window.lessonText = {
  // Page
  '어텐션과 트랜스포머 · 레슨 8B.5': 'Attention and transformers · Lesson 8B.5',
  '문장에서 어떤 단어에 주목할지 어떻게 정할까요? "그것"이 무엇을 가리키는지 어텐션으로 직접 계산해 보세요.':
    'How does a model decide which words in a sentence to pay attention to? Work out with attention what "it" refers to.',
  '"고양이가 생선을 먹었다. 그것은 배가 불렀다"에서 "그것"이 고양이를 가리킨다는 것을, 단어 벡터, 질문과 열쇠의 내적 점수, 소프트맥스 비율, 값 섞기로 계산하고, 트랜스포머가 이를 모든 단어에 동시에 하는 방법을 따라가 보세요.':
    'In "The cat ate the fish. It was full", work out that "it" refers to the cat with word vectors, dot-product scores of queries and keys, softmax ratios and mixing values, and follow how a transformer does this for every word at once.',
  '문장의 단어들이 벡터가 되어 점수와 비율을 거쳐 섞인 결과가 되는 장면': 'The words of a sentence becoming vectors and going through scores and ratios into a mixed result',
  '어텐션 정거장': 'Attention stations', '단어와 결과': 'Words and results', '변환과 비율': 'Transforms and ratios', '파일': 'Data', '도구': 'Operation', 
  '"다음 단계"를 누르면 단어가 오른쪽으로 움직입니다.': 'Press "Next step" and the words move to the right.',
  '"다음 단계"를 눌러 단어를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the words one station at a time. Prediction questions come up along the way.',
  '단어들': 'Words', '벡터화': 'Embed', '점수': 'Scores', '비율': 'Ratios', '섞은 결과': 'Mix',
  '단어들 → 벡터화': 'Words → embed', '벡터화 → 점수': 'Embed → scores', '점수 → 비율': 'Scores → ratios', '비율 → 섞은 결과': 'Ratios → mix', '섞은 결과 → 단어들': 'Mix → words',
  '벡터화 · 내적': 'Embed · dot', '벡터화 · 그것': 'Embed · it', '비율 · 값 섞기': 'Ratios · mix values', '점수 · 머리 4개': 'Scores · 4 heads',
  '왼쪽부터 문장의 단어들, 벡터로 바꾸기, 점수, 비율, 섞은 결과가 한 줄로 놓여 있습니다.': 'From the left: the sentence\'s words, turning them into vectors, scores, ratios and the mixed result, in a row.',
  // Words
  '고양이': 'cat', '생선': 'fish', '먹었다': 'ate', '그것': 'it',
  // Step 1
  '단어를 벡터로': 'Words to vectors', '단어마다 뜻을 담은 숫자 묶음을 준다': 'Each word gets a bundle of numbers holding its meaning',
  '"고양이가 생선을 먹었다. 그것은 배가 불렀다." 사람은 "그것"이 고양이라는 것을 압니다. 컴퓨터가 이를 알려면 먼저 단어를 숫자로 바꿔야 합니다. 단어마다 수백 개 숫자로 된 벡터(8B.1)를 주는데, 뜻이 비슷한 단어는 비슷한 벡터가 되도록 배웁니다(8B.3). 여기서는 숫자 두 개짜리로 줄여 봅니다.':
    '"The cat ate the fish. It was full." A person knows "it" is the cat. For a computer to know, it must first turn words into numbers. Each word gets a vector (8B.1) of hundreds of numbers, learned so that words with similar meanings get similar vectors (8B.3). Here we shrink them to two numbers.',
  '고양이, 생선, 먹었다, 그것이 각각 벡터가 되었습니다. 하지만 "그것" 벡터만으로는 무엇을 가리키는지 알 수 없습니다. 문장의 다른 단어를 봐야 합니다. 이것이 어텐션이 하는 일입니다.':
    'cat, fish, ate and it have each become a vector. But the "it" vector alone cannot tell what it refers to. It has to look at the other words in the sentence. That is what attention does.',
  '같은 ‘그것’도 가리키는 대상은 문맥에 있다': 'What "it" points to lies in the context',
  '고양이, 생선, 먹었다를 각각 벡터로 나타냅니다. 그것이 무엇을 가리키는지 후보와 비교할 수 있습니다.': 'cat, fish and ate are each shown as a vector. To find what "it" refers to, it can be compared with the candidates.',
  '그것: 누구?': 'it: who?', '각 단어의 벡터는 다음 단계에서 관계를 계산할 입력': 'Each word\'s vector is the input for working out relations in the next step',
  '문장': 'Sentence', '고양이가 생선을 먹었다. 그것은 배가 불렀다.': 'The cat ate the fish. It was full.', '단어 4개': '4 words',
  '벡터로 바꾸기': 'Into vectors', '고양이 → [0.9, 0.1]': 'cat → [0.9, 0.1]', '생선 → [0.8, 0.3]': 'fish → [0.8, 0.3]', '먹었다 → [0.1, 0.9]': 'ate → [0.1, 0.9]',
  '그것 → [0.5, 0.5] (무엇을 가리키는지 모름)': 'it → [0.5, 0.5] (does not know what it refers to)', '단어마다 뜻을 담은 벡터를 줍니다.': 'Give each word a vector holding its meaning.', '벡터 4개': '4 vectors',
  '"고양이"와 "생선"처럼 둘 다 물건(명사)인 단어의 벡터는?': 'Words that are both things (nouns), like "cat" and "fish", get vectors that…',
  '서로 비슷하게 배운다': 'Are learned to be similar', '아무 관계가 없다': 'Have nothing to do with each other',
  '비슷한 자리에 자주 나오는 단어는 비슷한 벡터가 되도록 학습합니다. 그래서 내적으로 닮은 정도를 잴 수 있습니다(8B.1).': 'Words that often appear in similar places are trained to get similar vectors. That is why a dot product can measure likeness (8B.1).',
  '그것은 무엇?': 'What is "it"?', '"그것"의 벡터 [0.5, 0.5]만으로는 고양이인지 생선인지 알 수 없음': 'the "it" vector [0.5, 0.5] alone cannot tell cat from fish',
  '→ 문장의 다른 단어를 살펴봐야 함': '→ it must look at the other words in the sentence', '"그것"이 누구인지는 주변 단어를 봐야 압니다.': 'Who "it" is can be known only from the words around it.',
  // Step 2
  '누구를 볼까': 'Whom to look at', '질문 벡터와 열쇠 벡터의 내적으로 점수를 매긴다': 'Score with the dot product of the query vector and key vectors',
  '어텐션에서 각 단어는 벡터를 세 가지로 바꿉니다. 질문(쿼리): "나는 무엇을 찾나", 열쇠(키): "나는 이런 단어다", 값(밸류): "나를 보면 이 정보를 가져가라". "그것"의 질문 벡터와 다른 단어들의 열쇠 벡터를 내적하면, 점수가 높을수록 "그것"이 찾는 단어입니다. "그것"의 질문은 "배가 부를 수 있는 것, 즉 살아 있는 것"을 찾습니다.':
    'In attention each word turns its vector into three. The query: "what am I looking for". The key: "this is the kind of word I am". The value: "if you look at me, take this information". Take the dot product of the query vector of "it" with the key vectors of the other words; the higher the score, the more that word is what "it" is looking for. The query of "it" looks for "something that can be full, that is, something alive".',
  '점수는 고양이 3, 생선 1, 먹었다 0입니다. "그것"의 질문과 가장 잘 맞는 열쇠가 고양이입니다. 질문, 열쇠, 값을 만드는 행렬(8B.1)도 모두 경사 하강법으로 배웁니다.':
    'The scores are cat 3, fish 1, ate 0. The key that best matches the query of "it" is cat. The matrices (8B.1) that make the queries, keys and values are all learned with gradient descent too.',
  '‘그것’의 질문과 후보의 열쇠를 곱해 점수를 만든다': 'Multiplying the query of "it" with each candidate\'s key makes a score',
  '그것의 질문 [1, 0]을 세 후보의 열쇠와 내적하면 고양이 3, 생선 1, 먹었다 0이 됩니다.': 'The dot products of the query of "it", [1, 0], with the three candidates\' keys are cat 3, fish 1, ate 0.',
  '그것의 질문': 'Query of it', '고양이: [3, 0] → 3': 'cat: [3, 0] → 3', '생선: [1, 1] → 1': 'fish: [1, 1] → 1', '먹었다: [0, 2] → 0': 'ate: [0, 2] → 0',
  '가장 높은 점수': 'Top score', '질문 [1, 0]과 각 열쇠의 내적을 계산': 'The dot product of the query [1, 0] with each key',
  '같은 장면입니다. "그것"의 질문 벡터로 다른 단어들의 열쇠에 점수를 매깁니다.': 'The same scene. The query vector of "it" scores the keys of the other words.',
  '질문과 열쇠': 'Query and keys', '그것의 질문 q = [1, 0] ("살아 있는 것을 찾아")': 'query of it q = [1, 0] ("look for something alive")',
  '열쇠: 고양이 [3, 0] · 생선 [1, 1] · 먹었다 [0, 2]': 'keys: cat [3, 0] · fish [1, 1] · ate [0, 2]', '질문·열쇠·값': 'Q·K·V',
  '내적': 'dot', '"그것"의 질문과 고양이의 열쇠를 내적합니다.': 'Take the dot product of the query of "it" and the key of cat.', '고양이 3': 'cat 3',
  '생선과 먹었다': 'fish and ate', '생선: [1, 0] · [1, 1] = 1': 'fish: [1, 0] · [1, 1] = 1', '먹었다: [1, 0] · [0, 2] = 0': 'ate: [1, 0] · [0, 2] = 0', '나머지 단어와도 내적합니다.': 'Take dot products with the other words too.',
  '"그것"이 가장 주목해야 할 단어는?': 'Which word should "it" pay most attention to?', '고양이 (점수 3)': 'cat (score 3)', '생선 (점수 1)': 'fish (score 1)', '먹었다 (점수 0)': 'ate (score 0)',
  '질문과 열쇠의 내적이 가장 큰 단어가 "그것"이 찾는 것과 가장 잘 맞습니다.': 'The word whose key has the biggest dot product with the query best matches what "it" is looking for.',
  // Step 3
  '비율로 섞기': 'Mixing by ratio', '점수를 비율로 바꾸고 값 벡터를 그 비율로 섞는다': 'Turn scores into ratios and mix the value vectors by those ratios',
  '점수를 그대로 쓰지 않고, 모두 양수이면서 합이 1이 되는 비율로 바꿉니다(소프트맥스). 큰 점수는 훨씬 큰 비율을 받습니다. 그런 다음 각 단어의 값 벡터를 그 비율만큼 섞어 "그것"의 새 벡터를 만듭니다. 이제 "그것"의 벡터에는 고양이의 정보가 가득 담깁니다.':
    'The scores are not used as they are; they become ratios that are all positive and add up to 1 (softmax). A big score gets a much bigger ratio. Then each word\'s value vector is mixed in by its ratio to make a new vector for "it". Now the vector of "it" is full of the cat\'s information.',
  '비율은 고양이 약 84%, 생선 약 11%, 먹었다 약 4%이고, 섞은 결과 [0.84, 0.11]은 고양이의 값 [1, 0]과 거의 같습니다. 문장 속 "그것"이 고양이의 뜻을 갖게 되었습니다.':
    'The ratios are about 84% cat, 11% fish and 4% ate, and the mix [0.84, 0.11] is almost the same as the cat\'s value [1, 0]. The "it" in the sentence has taken on the meaning of cat.',
  '점수가 높은 후보의 값이 결과에 더 많이 들어간다': 'The value of a higher-scoring candidate goes into the result more',
  '고양이 [1, 0]을 약 84%, 생선 [0, 1]을 11%, 먹었다 [0, 0]을 4% 섞어 새 벡터 [0.84, 0.11]을 얻습니다.': 'Mixing about 84% of cat [1, 0], 11% of fish [0, 1] and 4% of ate [0, 0] gives the new vector [0.84, 0.11].',
  '가중합': 'Weighted sum', '고양이에 가까움': 'close to cat', '비율은 소프트맥스로 구하고 정수 %는 반올림한 값': 'Ratios come from softmax; whole percentages are rounded',
  '같은 장면입니다. 점수를 비율로 바꾸고 값을 섞습니다.': 'The same scene. Turn scores into ratios and mix the values.',
  '점수와 값': 'Scores and values', '점수: 고양이 3 · 생선 1 · 먹었다 0': 'scores: cat 3 · fish 1 · ate 0', '값: 고양이 [1, 0] · 생선 [0, 1] · 먹었다 [0, 0]': 'values: cat [1, 0] · fish [0, 1] · ate [0, 0]',
  '소프트맥스': 'Softmax', 'e³ ≈ 20.1 · e¹ ≈ 2.7 · e⁰ = 1 · 합 ≈ 23.8': 'e³ ≈ 20.1 · e¹ ≈ 2.7 · e⁰ = 1 · sum ≈ 23.8', '고양이 20.1 ÷ 23.8 ≈ 84%': 'cat 20.1 ÷ 23.8 ≈ 84%', '생선 ≈ 11% · 먹었다 ≈ 4%': 'fish ≈ 11% · ate ≈ 4%',
  '점수를 합이 100%인 비율로 바꿉니다.': 'Turn the scores into ratios that add up to 100%.',
  '소프트맥스가 큰 점수에 하는 일은?': 'What does softmax do to a big score?', '훨씬 큰 비율을 준다': 'Gives it a much bigger ratio', '모두 같은 비율로 만든다': 'Makes every ratio the same',
  '점수 차이가 2(3과 1)인데 비율은 약 7배(84%와 11%)입니다. 가장 맞는 단어에 집중하게 합니다.': 'The scores differ by 2 (3 and 1), yet the ratios differ about 7 times (84% and 11%). It focuses on the best-matching word.',
  '값 섞기': 'Mix values', '값을 비율로 섞기': 'Mixing values by ratio', '값 벡터를 비율만큼 섞습니다.': 'Mix the value vectors by their ratios.',
  '새 "그것"': 'New "it"', '문맥을 담은 "그것"': '"it" with context', '그것의 새 벡터 [0.84, 0.11] ≈ 고양이의 값 [1, 0]': 'new vector of it [0.84, 0.11] ≈ value of cat [1, 0]',
  '→ 다음 층은 "그것 = 고양이"를 알고 계산함': '→ the next layer computes knowing "it = cat"', '"그것"이 문맥 속 뜻을 갖게 되었습니다.': '"it" has taken on its meaning in context.', '그것 ≈ 고양이': 'it ≈ cat',
  '"그것"의 새 벡터가 고양이와 가까워진 까닭은?': 'Why did the new vector of "it" come close to cat?',
  '고양이의 값에 가장 큰 비율(84%)을 주어 섞어서': 'The cat\'s value was mixed in with the biggest ratio (84%)', '그것과 고양이의 글자가 비슷해서': 'The words "it" and "cat" look alike',
  '어텐션은 주목한 단어의 정보를 많이 가져와 섞습니다.': 'Attention brings in and mixes a lot of information from the words it attends to.',
  // Step 4
  '트랜스포머': 'Transformers', '모든 단어가 동시에 서로를 보고, 이 층을 여러 번 쌓는다': 'Every word looks at every other at once, and this layer is stacked many times',
  '"그것"만이 아니라 문장의 모든 단어가 같은 방법으로 동시에 서로를 봅니다. 앞에서부터 한 단어씩 읽지 않아도 되어 GPU(6.7)로 한꺼번에 계산할 수 있습니다. 한 층에 어텐션을 여러 개(머리) 두어 "누가 누구를 가리키나", "어떤 동사의 대상인가"처럼 다른 관계를 함께 보고, 단어 순서는 위치 정보를 벡터에 더해 알려 줍니다. 이런 층을 수십 개 쌓은 것이 트랜스포머입니다.':
    'Not just "it": every word in the sentence looks at every other in the same way, at the same time. There is no need to read one word at a time from the front, so a GPU (6.7) can compute it all at once. One layer has several attentions (heads) to look at different relations together, such as "who refers to whom" and "what is the object of which verb", and word order is given by adding position information to the vectors. Dozens of such layers stacked up make a transformer.',
  '단어 n개면 점수가 n × n개 필요합니다. 문장이 길어질수록 계산이 빠르게 늘어나지만(4.1), 모두 행렬 곱이라 GPU가 동시에 해냅니다. 8B.6의 대규모 언어 모델이 이 구조 위에 서 있습니다.':
    'n words need n × n scores. The work grows fast as sentences get longer (4.1), but it is all matrix products, so the GPU does it at once. The large language models of 8B.6 stand on this structure.',
  '같은 단어를 여러 관계로 읽고 다음 층에 넘긴다': 'Read the same words for several relations and pass them to the next layer',
  '같은 입력을 여러 머리에 보내면 머리마다 대명사의 대상이나 동사의 목적어처럼 다른 관계를 볼 수 있습니다. 결과를 합쳐 다음 층으로 보냅니다.':
    'Send the same input to several heads and each head can look at a different relation, such as what a pronoun refers to or what a verb acts on. The results are combined and sent to the next layer.',
  '단어 8개': '8 words', '위치 포함': 'with positions', '머리 1': 'Head 1', '머리 2': 'Head 2', '그것 → 고양이': 'it → cat', '먹었다 → 생선': 'ate → fish',
  '다른 머리': 'Other heads', '각기 다른 관계': 'other relations', '머리 결과를 합침': 'Heads combined', '다음 층의 입력': 'next layer\'s input',
  '머리마다 단어 8개 × 8개 쌍 = 점수 64개': 'Per head, 8 × 8 word pairs = 64 scores',
  '같은 장면입니다. 모든 단어가 동시에 점수를 매깁니다.': 'The same scene. Every word scores at the same time.',
  '문장 전체': 'The whole sentence', '단어 8개: 고양이가 생선을 먹었다 그것은 배가 불렀다 …': '8 words: The cat ate the fish it was full …', '어텐션 머리 4개 · 층 12개': '4 attention heads · 12 layers',
  '+ 위치': '+ position', '위치 더하기': 'Adding positions', '단어 벡터 + 위치 벡터(첫째, 둘째 …)': 'word vector + position vector (first, second …)', '→ 순서 정보가 들어감': '→ order information goes in',
  '단어 벡터에 위치 정보를 더합니다.': 'Add position information to the word vectors.', '8개 + 위치': '8 + positions',
  '모두가 모두를': 'All to all', '단어 8개 × 8개 = 점수 64개': '8 words × 8 = 64 scores', '행렬 곱 한 번으로 동시에 계산': 'computed at once with one matrix product',
  '모든 단어 쌍의 점수를 한꺼번에 구합니다.': 'Find the scores of every word pair at once.', '64개': '64',
  '단어가 1,000개면 한 머리의 점수는 몇 개일까요?': 'With 1,000 words, how many scores does one head have?',
  '1,000,000개 (1,000 × 1,000)': '1,000,000 (1,000 × 1,000)', '1,000개': '1,000', '2,000개': '2,000',
  '모든 단어가 모든 단어를 보므로 n × n입니다. 긴 글이 비싼 까닭입니다.': 'Every word looks at every word, so it is n × n. That is why long texts are expensive.',
  '머리 4개': '4 heads', '여러 머리': 'Several heads', '머리 1: 무엇을 가리키나 · 머리 2: 동사의 대상 …': 'head 1: what refers to what · head 2: objects of verbs …',
  '각자 비율을 구해 값을 섞음': 'each finds its ratios and mixes values', '머리마다 다른 관계를 봅니다.': 'Each head looks at a different relation.',
  '층 12개': '12 layers', '층 쌓기': 'Stacking layers', '섞은 결과를 다음 층의 입력으로': 'the mix becomes the next layer\'s input', '층마다 더 깊은 뜻을 담음': 'each layer holds deeper meaning',
  '이 과정을 층마다 되풀이합니다.': 'Repeat this in every layer.', '12층 지남': 'Past 12 layers',
  // Reading diagram labels (links between vectors, keys and values)
  '질문과 열쇠는 단어 벡터에 서로 다른 행렬을 곱해 만든다': 'Query and key come from the word vector times different matrices', '질문 [1, 0]과 각 열쇠의 내적이 점수': 'The score is query [1, 0] dotted with each key',
  '값도 단어 벡터에 또 다른 행렬을 곱해 만든다': 'The value comes from the word vector times another matrix', '비율은 점수 3, 1, 0의 소프트맥스 (반올림)': 'Shares are the softmax of scores 3, 1, 0 (rounded)',
};
