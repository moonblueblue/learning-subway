// Parser-blocking, immediately after the charset on every public HTML entry.
(() => {
  const {userAgent, userAgentData, platform, maxTouchPoints} = navigator;
  const handheld = userAgentData?.mobile || /Android|iOS/i.test(userAgentData?.platform || '') ||
    /Android|iPhone|iPod|iPad|Mobile|Tablet|Silk\/|Kindle|PlayBook/i.test(userAgent);
  // iPadOS can request desktop pages and identify itself as a touch-enabled Mac.
  const desktopIPad = maxTouchPoints > 1 && (/^Mac/.test(platform) || /Macintosh/.test(userAgent));
  if (!handheld && !desktopIPad) return;

  let stored;
  try { stored = localStorage.getItem('learning-subway:lang'); } catch { /* private/file browsing */ }
  const lang = [new URLSearchParams(location.search).get('lang'), stored]
    .find(value => value === 'ko' || value === 'en') || 'ko';
  const message = lang === 'en'
    ? ['Learning Subway is available on desktop and laptop computers.', 'Open this address in a web browser on your computer.']
    : ['Learning Subway는 PC와 노트북에서 이용할 수 있습니다.', '컴퓨터의 웹 브라우저에서 이 주소를 열어 주세요.'];

  // Parse the remaining response into an inert template. Even inline map redirects,
  // custom elements and lesson scripts stay inactive. The URL and history stay intact.
  document.write('<template id="inactive-course">');
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inactive-course').remove();
    document.documentElement.lang = lang;
    document.title = message[0];
    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1';
    const style = document.createElement('style');
    style.textContent = `
      body { margin: 0; min-height: 100vh; min-height: 100svh; display: grid; place-items: center;
             background: #f4f7ef; color: #142620; font: 1rem/1.6 system-ui, sans-serif; }
      main { max-width: 32rem; padding: 1.5rem; word-break: keep-all; overflow-wrap: anywhere; }
      h1 { margin: 0; font-size: 1.4rem; line-height: 1.4; }
      p { margin: .65rem 0 0; color: #43574f; }`;
    document.head.append(viewport, style);
    const main = document.createElement('main');
    main.id = 'desktop-notice';
    const heading = document.createElement('h1');
    const help = document.createElement('p');
    heading.textContent = message[0];
    help.textContent = message[1];
    main.append(heading, help);
    document.body.replaceChildren(main);
  }, {once: true});
})();
