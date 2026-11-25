// English for 8C.1 Public-key cryptography. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names follow 6.11 (dist/security/crypto.en.js): 민지 Minji, 서준 Seojun, 인터넷 (엿보는 이) Internet (spy).
window.lessonText = {
  // Page
  '공개키 암호 · 레슨 8C.1': 'Public-key cryptography · Lesson 8C.1', '공개키 암호': 'Public-key cryptography',
  '디피–헬만으로 공개된 수만 주고받아 같은 비밀 수 2를 만들고, 개인 키로 서명하고 공개 키로 확인하고, 바뀐 글의 서명이 맞지 않는 것을 보고, 중간자 공격이 서명 없는 키 교환을 어떻게 속이는지 따라가 보세요.':
    'Make the same secret number, 2, with Diffie–Hellman while exchanging only public numbers; sign with a private key and verify with a public key; see a changed message fail its signature; and follow how a man-in-the-middle attack fools a key exchange without signatures.',
  '처음 만난 상대와 어떻게 비밀을 나눌까요? 민지와 서준이 엿보는 이가 있는 인터넷에서 비밀 수를 만들고, 서명으로 서로를 확인하는 과정을 계산해 보세요.':
    'How do you share a secret with someone you have just met? Work out how Minji and Seojun make a secret number over an internet with an eavesdropper, and check each other with signatures.',
  '엿보는 이가 있는 길': 'A path with an eavesdropper', '민지와 서준 사이 인터넷으로 공개된 수, 서명, 가짜 수가 오가는 장면': 'Public numbers, signatures and fake numbers passing over the internet between Minji and Seojun',
  '민지·서준': 'Minji and Seojun', '인터넷·공격자': 'Internet and attacker', '바꿔치기': 'Tampering', 
  '"다음 단계"를 누르면 패킷이 오갑니다.': 'Press "Next step" and the messages go back and forth.',
  '"다음 단계"를 눌러 메시지를 하나씩 보내 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to send the messages one at a time. Prediction questions come up along the way.',
  '민지': 'Minji', '서준': 'Seojun', '인터넷 (엿보는 이)': 'Internet (spy)', '중간의 공격자': 'Attacker',
  '민지 → 서준': 'Minji → Seojun', '서준 → 민지': 'Seojun → Minji', '민지 → 민지': 'Minji → Minji', '서준 → 서준': 'Seojun → Seojun',
  '서준 → 인터넷 (엿보는 이)': 'Seojun → Internet (spy)', '인터넷 (엿보는 이) → 민지': 'Internet (spy) → Minji',
  '민지 → 중간의 공격자': 'Minji → attacker', '중간의 공격자 → 민지': 'Attacker → Minji', '중간의 공격자 → 서준': 'Attacker → Seojun',
  '민지 · 확인': 'Minji · verify', '서준 · 8¹⁵ mod 23': 'Seojun · 8¹⁵ mod 23', '중간의 공격자 · 10 (가짜)': 'Attacker · 10 (fake)',
  // Step 1
  '열쇠 함께 만들기': 'Making a key together', '공개된 수만 주고받아 둘만 아는 비밀 수를 만든다': 'Exchange only public numbers and make a secret number only the two know',
  '6.11에서는 공개 키로 대칭 키를 잠가 건넸습니다. 디피–헬만 키 교환은 열쇠를 건네지도 않고 양쪽이 같은 비밀 수를 계산해 냅니다. 모두가 아는 수 p = 23, g = 5를 정하고, 민지는 비밀 a = 6, 서준은 비밀 b = 15를 고릅니다. 각자 g의 비밀 제곱을 p로 나눈 나머지(2.6)를 보내고, 받은 수를 다시 자기 비밀만큼 제곱합니다.':
    'In 6.11 a symmetric key was locked with a public key and handed over. Diffie–Hellman key exchange does not hand over a key at all: both sides compute the same secret number. Everyone knows p = 23 and g = 5; Minji picks the secret a = 6 and Seojun the secret b = 15. Each sends g raised to their secret, modulo p (2.6), and raises the number they receive to their own secret.',
  '민지는 8을, 서준은 19를 보냈고, 둘 다 2라는 같은 비밀 수에 닿았습니다. 엿보는 이는 23, 5, 8, 19를 모두 봤지만 6이나 15를 모르면 2를 계산하기 어렵습니다(수가 수백 자리면 사실상 불가능).':
    'Minji sent 8 and Seojun sent 19, and both reached the same secret number, 2. The eavesdropper saw 23, 5, 8 and 19, but without 6 or 15, working out 2 is hard (practically impossible when the numbers have hundreds of digits).',
  '왼쪽에 민지, 가운데 엿보는 이가 있는 인터넷, 오른쪽에 서준이 있습니다.': 'Minji is on the left, the internet with an eavesdropper in the middle, and Seojun on the right.',
  '모두가 아는 수': 'Numbers everyone knows', '민지의 비밀 a = 6 · 서준의 비밀 b = 15': 'Minji\'s secret a = 6 · Seojun\'s secret b = 15',
  '비밀 6': 'Secret 6', '비밀 15': 'Secret 15', '비밀 3': 'Secret 3', '엿보는 중': 'Watching',
  '민지가 보냄': 'Minji sends', '민지가 5의 6제곱을 23으로 나눈 나머지 8을 보냅니다.': 'Minji sends 8, the remainder of 5 to the 6th divided by 23.', '8 봄': 'Saw 8',
  '서준이 보냄': 'Seojun sends', '서준은 19를 보냅니다.': 'Seojun sends 19.', '8, 19 봄': 'Saw 8, 19',
  '민지의 계산': 'Minji\'s calculation', '민지는 받은 19를 자기 비밀 6만큼 제곱합니다.': 'Minji raises the 19 she got to her secret, 6.', '비밀 수 2': 'Secret is 2',
  '서준이 8¹⁵ mod 23을 계산하면?': 'What does Seojun get for 8¹⁵ mod 23?', '2 (민지와 같음)': '2 (same as Minji)',
  '(5⁶)¹⁵ = (5¹⁵)⁶ = 5⁹⁰이라 두 계산은 같은 수의 나머지입니다. 그래서 둘 다 2가 됩니다.': '(5⁶)¹⁵ = (5¹⁵)⁶ = 5⁹⁰, so both calculations are the remainder of the same number. That is why both give 2.',
  '같은 비밀 수': 'The same secret number', '이 2를 대칭 키(6.11의 AES)의 씨앗으로 씀': 'this 2 seeds a symmetric key (AES from 6.11)',
  '서준도 2에 닿았습니다. 2는 한 번도 인터넷을 지나지 않았습니다.': 'Seojun reached 2 too. The 2 never crossed the internet.',
  // Step 2
  '전자 서명': 'Digital signatures', '개인 키로 서명하고 공개 키로 누구나 확인한다': 'Sign with the private key; anyone verifies with the public key',
  '공개 키 암호는 거꾸로도 쓸 수 있습니다. 서준이 글의 해시(6.12처럼 글을 짧게 줄인 지문)를 자기 개인 키로 계산하면 서명이 됩니다. 누구든 서준의 공개 키로 서명을 풀어 해시와 같은지 확인할 수 있습니다. 개인 키는 서준만 가졌으니, 확인이 통과하면 "서준이 쓴 글이고, 중간에 바뀌지 않았다"는 뜻입니다.':
    'Public-key cryptography also works the other way round. When Seojun computes the hash of a message (a short fingerprint of it, as in 6.12) with his private key, that is a signature. Anyone can undo the signature with Seojun\'s public key and check it equals the hash. Only Seojun has the private key, so if the check passes it means "Seojun wrote this, and it was not changed on the way".',
  '서준은 해시 4를 개인 키 7로 16으로 만들어 붙였고, 민지는 공개 키 3으로 16³ mod 33 = 4를 얻어 해시와 같음을 확인했습니다. 6.11의 RSA 수를 서명에 그대로 썼습니다.':
    'Seojun turned hash 4 into 16 with private key 7 and attached it, and Minji got 16³ mod 33 = 4 with public key 3, confirming it matches the hash. The RSA numbers from 6.11 are used as they are for signing.',
  '같은 장면입니다. 서준이 서명한 글을 보내고 민지가 확인합니다.': 'The same scene. Seojun sends a signed message and Minji verifies it.',
  '서준의 열쇠 (6.11)': 'Seojun\'s keys (6.11)', '공개 키 (n = 33, e = 3) · 개인 키 d = 7': 'public key (n = 33, e = 3) · private key d = 7', '글: "내일 3시" → 해시 = 4': 'message: "3pm tomorrow" → hash = 4',
  '개인 키 7': 'Private key 7', '서준의 공개 키': 'Seojun\'s public key',
  '서명': 'Sign', '개인 키로 서명': 'Signing with the private key', '서명 = 해시⁷ mod 33 = 4⁷ mod 33 = 16': 'signature = hash⁷ mod 33 = 4⁷ mod 33 = 16',
  '서준이 해시를 개인 키로 계산해 서명을 만듭니다.': 'Seojun computes the hash with his private key to make the signature.', '서명 16': 'Signature 16',
  '글 + 서명 16': 'Message + sig 16', '보내기': 'Sending', '"내일 3시" + 서명 16': '"3pm tomorrow" + signature 16',
  '글과 서명을 함께 보냅니다. 엿보는 이도 볼 수 있습니다.': 'Send the message and signature together. The eavesdropper can see them too.', '글, 16 봄': 'Saw message, 16',
  '확인': 'Verify', '공개 키로 확인': 'Verifying with the public key', '16³ mod 33 = 4096 mod 33 = 4': '16³ mod 33 = 4096 mod 33 = 4', '글의 해시도 4 → 일치': 'the message hash is 4 too → match',
  '민지가 공개 키로 서명을 풀어 해시와 비교합니다.': 'Minji undoes the signature with the public key and compares it with the hash.', '서명 확인 ✓': 'Signature OK ✓',
  '서명이 확인되면 알 수 있는 것은?': 'What do you learn when a signature checks out?',
  '개인 키를 가진 서준이 썼고, 글이 바뀌지 않았다': 'Seojun, who has the private key, wrote it, and it was not changed', '글이 암호화되어 아무도 못 읽었다': 'The message was encrypted and nobody could read it',
  '서명은 숨기는 것이 아니라 누가 썼는지와 바뀌지 않았음을 증명합니다. 글 자체는 누구나 읽을 수 있습니다.': 'A signature does not hide anything; it proves who wrote the message and that it was not changed. Anyone can read the message itself.',
  // Step 3
  '바꿔치기 들키기': 'Catching tampering', '글을 한 글자만 바꿔도 서명이 맞지 않는다': 'Change even one character and the signature no longer matches',
  '엿보는 이가 중간에서 글을 "내일 5시"로 바꿔 보냈다고 해 봅시다. 글이 바뀌면 해시도 바뀝니다. 그런데 서명은 원래 글의 해시로 만든 것이라, 공개 키로 풀어 나온 4와 새 해시가 맞지 않습니다. 맞는 서명을 새로 만들려면 서준의 개인 키가 있어야 합니다.':
    'Say the eavesdropper changes the message in the middle to "5pm tomorrow". When the message changes, so does its hash. But the signature was made from the original message\'s hash, so the 4 that comes out with the public key does not match the new hash. Making a new matching signature would need Seojun\'s private key.',
  '바뀐 글의 해시는 5인데 서명을 풀면 4가 나와 바꿔치기가 드러났습니다. 소프트웨어 업데이트 파일, 은행 거래, 인증서(8C.2)가 모두 이 원리로 위조를 막습니다.':
    'The changed message hashes to 5, but the signature gives 4, so the tampering shows. Software update files, bank transactions and certificates (8C.2) all stop forgery this way.',
  '같은 장면입니다. 가운데에서 글이 바뀝니다.': 'The same scene. The message is changed in the middle.',
  '보낸 것': 'What was sent', '"내일 3시" (해시 4) + 서명 16': '"3pm tomorrow" (hash 4) + signature 16',
  '중간에서 바꿈': 'Changed in the middle', '엿보는 이가 "내일 3시" → "내일 5시"로 바꿈': 'the spy changes "3pm tomorrow" → "5pm tomorrow"',
  '서명 16은 그대로 (새로 만들 개인 키가 없음)': 'signature 16 stays (no private key to make a new one)', '엿보는 이가 글만 바꿔 보냅니다.': 'The eavesdropper changes only the message and sends it on.', '글 바꿈': 'Changed text',
  '"내일 5시" + 16': '"5pm" + 16', '도착': 'Arrival', '바뀐 글의 해시 = 5': 'hash of the changed message = 5', '바뀐 글이 민지에게 도착합니다.': 'The changed message reaches Minji.', '해시 5': 'Hash 5',
  '맞지 않음': 'No match', '4 ≠ 5 → 서명이 맞지 않음 → 버림': '4 ≠ 5 → signature does not match → discard',
  '서명을 풀어 나온 4와 새 해시 5가 다릅니다.': 'The 4 from the signature and the new hash, 5, differ.', '위조 발견 ✗': 'Forgery found ✗',
  '엿보는 이가 바뀐 글에 맞는 서명을 만들 수 없는 까닭은?': 'Why can\'t the eavesdropper make a signature that fits the changed message?',
  '서준의 개인 키가 없어서': 'It does not have Seojun\'s private key', '서명이 너무 길어서': 'The signature is too long',
  '공개 키로는 확인만 할 수 있고, 맞는 서명은 개인 키로만 만들 수 있습니다.': 'A public key can only verify; a matching signature can only be made with the private key.',
  // Step 4
  '중간자 공격': 'Man in the middle', '상대가 진짜인지 모르면 가운데에서 둘 다 속일 수 있다': 'If you cannot tell the other side is real, someone in the middle can fool both',
  '디피–헬만에는 약점이 있습니다. 민지와 서준은 받은 수가 정말 상대가 보낸 것인지 모릅니다. 공격자가 가운데에서 자기 비밀 3으로 만든 10을 양쪽에 보내면, 민지는 공격자와 6을, 서준은 공격자와 5를 비밀 수로 갖게 됩니다. 공격자는 양쪽 대화를 풀어 읽고 다시 잠가 넘깁니다. 이것을 막으려면 받은 수에 상대의 전자 서명이 있어야 하고, 그 공개 키가 진짜인지는 인증서(8C.2)로 확인합니다.':
    'Diffie–Hellman has a weakness: Minji and Seojun do not know whether the number they got really came from the other. If an attacker in the middle sends both of them 10, made from its own secret 3, Minji ends up sharing 6 with the attacker and Seojun shares 5. The attacker decrypts and reads both sides, then locks it again and passes it on. To stop this, the number received must carry the other side\'s digital signature, and whether that public key is real is checked with a certificate (8C.2).',
  '민지와 서준은 서로 다른 비밀 수(6과 5)를 가졌는데도 서로 대화하는 줄 알았습니다. 키 교환은 "누구와" 교환하는지 확인하는 서명과 함께 써야 안전합니다.':
    'Minji and Seojun held different secret numbers (6 and 5), yet thought they were talking to each other. A key exchange is safe only together with signatures that confirm "with whom" you are exchanging.',
  '같은 장면입니다. 가운데에 엿보기만 하던 자리에 공격자가 끼어듭니다.': 'The same scene. An attacker cuts in where there was only an eavesdropper in the middle.',
  '같은 키 교환': 'The same key exchange', 'p = 23, g = 5 · 민지 a = 6 · 서준 b = 15': 'p = 23, g = 5 · Minji a = 6 · Seojun b = 15', '공격자의 비밀 e = 3 → 5³ mod 23 = 10': 'attacker\'s secret e = 3 → 5³ mod 23 = 10',
  '가로채기': 'Intercepting', '민지의 8을 공격자가 가로챔': 'the attacker intercepts Minji\'s 8', '공격자가 민지의 수를 가로챕니다.': 'The attacker intercepts Minji\'s number.', '8 가로챔': 'Took 8',
  '10 (가짜)': '10 (fake)', '서준에게 가짜': 'A fake to Seojun', '서준은 10을 민지가 보낸 줄 앎': 'Seojun thinks Minji sent the 10', '서준: 10¹⁵ mod 23 = 5': 'Seojun: 10¹⁵ mod 23 = 5',
  '공격자가 자기 수 10을 서준에게 보냅니다.': 'The attacker sends its own number, 10, to Seojun.', '비밀 수 5': 'Secret is 5',
  '민지에게도 가짜': 'A fake to Minji too', '민지: 10⁶ mod 23 = 6': 'Minji: 10⁶ mod 23 = 6', '공격자: 민지와 6, 서준과 5를 모두 앎': 'attacker: knows both 6 with Minji and 5 with Seojun',
  '민지에게도 10을 보냅니다.': 'It sends 10 to Minji too.', '비밀 수 6': 'Secret is 6', '6과 5 모두 앎': 'Knows 6 and 5',
  '이 공격을 막으려면 무엇이 필요할까요?': 'What is needed to stop this attack?',
  '받은 수에 상대의 전자 서명이 있고, 그 공개 키가 진짜인지 확인하기': 'The number received carries the other side\'s digital signature, and its public key is checked to be real', '비밀 수를 더 크게 고르기': 'Choosing bigger secret numbers',
  '수가 커져도 상대가 누군지 모르면 속습니다. 서명과 인증서로 "정말 서준이 보낸 수"인지 확인해야 합니다.': 'Bigger numbers still get fooled if you do not know who the other side is. Signatures and certificates must confirm it is "really the number Seojun sent".',
};
