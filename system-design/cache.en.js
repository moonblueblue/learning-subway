// English for 7.2 Caching. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '캐시 흐름 실험실': 'Cache flow lab',
  '브라우저에서 캐시 적중과 미스에 따른 요청 경로를 살펴보세요.': 'See in the browser how the request path changes with cache hits and misses.',
  '같은 읽기 요청이 캐시 유무와 적중 여부에 따라 어디로 가는지 살펴보세요.': 'See where the same read request goes depending on whether there is a cache and whether it hits.',
  '캐싱 요청 경로': 'Caching request path', '요청 경로': 'Request path', '응답 · 저장': 'Response · store',
  '클라이언트 → DB': 'Client → DB', '클라이언트 → 캐시': 'Client → Cache',
  '실선 요청이 DB까지 이동하고 점선 응답이 클라이언트로 돌아옵니다.': 'The solid request travels to the DB and the dotted response returns to the client.',
  // Step 1
  '캐시 없이 조회': 'Reading without a cache',
  '같은 값을 다시 물어도 매번 DB까지 간다': 'Ask for the same value again and it still goes all the way to the DB',
  '클라이언트가 값을 요청하면 DB가 직접 조회해 응답합니다. 같은 값을 반복해서 읽어도 매번 DB를 거칩니다.': 'When the client asks for a value, the DB looks it up and responds directly. Reading the same value again and again goes through the DB every time.',
  '클라이언트가 DB로 직접 요청을 보내고 DB가 클라이언트로 응답합니다.': 'The client sends the request straight to the DB and the DB responds to the client.',
  '모든 읽기가 DB에 도달한다': 'Every read reaches the DB', '매번 DB가 응답': 'The DB responds every time', '같은 값 재요청': 'Same value asked again',
  '요청 1: DB 조회 1회     +     요청 2: DB 조회 1회': 'Request 1: 1 DB read     +     Request 2: 1 DB read',
  '캐시가 없어서 같은 값의 두 요청이 각각 DB에 도달합니다.': 'With no cache, two requests for the same value each reach the DB.',
  // Step 2
  '캐시 적중': 'Cache hit',
  '캐시에서 바로 응답한다': 'The cache responds directly',
  '요청한 값이 캐시에 이미 있습니다. 캐시가 저장해 둔 값으로 바로 응답하므로 이 읽기에는 DB 조회가 필요 없습니다.': 'The requested value is already in the cache. The cache responds directly with the value it stored, so this read needs no DB lookup.',
  '클라이언트가 캐시에 요청하고 캐시가 바로 응답합니다. 캐시에 HIT가 표시되고, DB를 향하는 연결은 없습니다.': 'The client asks the cache and the cache responds directly. The cache shows HIT, and there is no connection towards the DB.',
  '캐시 위에 HIT가 표시되고, 패킷은 클라이언트와 캐시 사이에서만 움직입니다.': 'HIT shows above the cache, and packets move only between the client and the cache.',
  '캐시에 값이 있으므로 여기서 응답한다': 'The value is in the cache, so it responds here', '캐시에 값 있음': 'Value in cache', 'DB 조회 0회': '0 DB reads',
  'Cache: 값 있음       Client에 반환       DB 조회 0회': 'Cache: has value       return to Client       0 DB reads',
  '요청이 캐시에서 값을 찾아 바로 돌아갑니다. DB에는 요청이 가지 않습니다.': 'The request finds the value in the cache and goes straight back. No request goes to the DB.',
  // Step 3
  '캐시 미스': 'Cache miss',
  '캐시에 값이 없으면 DB를 조회한다': 'If the value is not in the cache, look it up in the DB',
  '캐시에 값이 없어서 DB에서 읽습니다. 조회 결과를 캐시에 채운 뒤 클라이언트에 응답하면, 같은 값의 다음 읽기는 캐시에서 처리할 수 있습니다.': 'The value is not in the cache, so it is read from the DB. Once the result is put in the cache and returned to the client, the next read of the same value can be served from the cache.',
  '클라이언트가 캐시에 요청합니다. 캐시 미스가 발생해 DB를 조회하고, DB의 응답을 캐시에 저장한 뒤 클라이언트로 보냅니다.': 'The client asks the cache. A cache miss happens, so the DB is queried, and the DB\'s response is stored in the cache and sent to the client.',
  '캐시 위에 MISS → 저장이 표시되고, 요청과 응답이 캐시를 거쳐 DB까지 왕복합니다. 응답이 캐시에 돌아오는 구간에서 값이 저장됩니다.': 'MISS → store shows above the cache, and the request and response make a round trip to the DB through the cache. The value is stored on the leg where the response comes back to the cache.',
  '캐시에 값이 없어서 DB에서 읽어 채운다': 'The value is not in the cache, so it is read from the DB and filled in', '캐시에 값 없음': 'No value in cache', 'DB에서 읽고 캐시에 저장': 'Read from DB, store in cache', 'MISS → 저장': 'MISS → store', '다음 요청은 캐시 적중': 'The next request is a cache hit',
  'Cache: 비어 있음  →  DB에서 읽기  →  Cache에 저장': 'Cache: empty  →  read from DB  →  store in Cache',
  '첫 요청은 캐시가 비어 DB에서 읽고, 읽은 값을 캐시에 저장합니다. 같은 값의 다음 요청은 DB에 가지 않습니다.': 'The first request finds the cache empty, reads from the DB, and stores the value in the cache. The next request for the same value does not go to the DB.',
};
