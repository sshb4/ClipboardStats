// Add another object here to add a tracker. The grid adapts automatically.
const trackers = [
  { name: "Corbin’s Triples", player: "Corbin Carroll", team: "Arizona Diamondbacks", league: "MLB", stat: "TRIPLES", label: "THE EXTRA-BASE OBSESSION", description: "Every Corbin Carroll triple, tracked live. He triples. You get a text.", url: "https://corbinstriples.com", domain: "corbinstriples.com", sport: "baseball" },
  { name: "Gibbs Touchdowns", player: "Jahmyr Gibbs", team: "Detroit Lions", league: "NFL", stat: "TOUCHDOWNS", label: "THE CHASE FOR THE RECORD", description: "Jahmyr Gibbs’ chase for the single-season TD record. He scores. You get a text.", url: "https://gibbstouchdowns.com", domain: "gibbstouchdowns.com", sport: "football" },
  { name: "Wemby Blocks", player: "Victor Wembanyama", team: "San Antonio Spurs", league: "NBA", stat: "BLOCKS", label: "THE SHOT-BLOCKING OBSESSION", description: "Every Victor Wembanyama block, tracked. Follow Wemby’s biggest moments at the rim.", url: "https://wembyblocks.com/", domain: "wembyblocks.com", sport: "basketball" }
];

// Set a real contact address when ready; no placeholder email is displayed.
const contactEmail = "";

function renderHeader() {
  return `
  <header class="site-header wrap">
    <a class="brand" href="#" aria-label="Clipboard Stats home"><img src="assets/clipboardstats-logo.png" width="48" height="48" alt=""><span>CLIPBOARD<span class="brand-second">STATS<span class="brand-dot">.</span></span></span></a>
    <nav aria-label="Main navigation"><a href="#trackers">The trackers</a><a href="#about">The story</a><a class="support-link" href="https://ko-fi.com/sshb4" target="_blank" rel="noopener noreferrer">Support the project <span aria-hidden="true">↗</span></a></nav>
  </header>
  `;
}

function renderHero(trackerCount) {
  return `
    <section class="hero wrap" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="signal" aria-hidden="true"></span> FOR THE FANS. FOR THE NUMBERS.</p>
        <h1 id="hero-title">ONE PLAYER.<br>ONE STAT.<br><span class="outlined">ALL IN.</span></h1>
        <p class="tagline">tracking sports’ most interesting statistics</p>
        <p class="hero-description">Free fan trackers for sports’ most exciting numbers.<br class="desktop-break"> One player. One stat. Zero cost.</p>
        <a class="button button-red" href="#trackers">Find your tracker <span aria-hidden="true">↘</span></a>
      </div>
      <div class="hero-board" aria-label="${trackerCount} trackers, one stat per player, zero dollars to follow">
        <div class="board-heading"><span>THE CLIPBOARD</span><span class="board-label">FAN STATS HQ</span></div>
        <div class="board-stat"><span id="tracker-count" class="board-number" data-count="${trackerCount}">${trackerCount}</span><div><span class="board-stat-title">TRACKERS</span><span class="board-stat-detail">Big moments worth following.</span></div><span class="board-index">01</span></div>
        <div class="board-stat"><span class="board-number" data-count="1">1</span><div><span class="board-stat-title">STAT PER PLAYER</span><span class="board-stat-detail">The number you came for.</span></div><span class="board-index">02</span></div>
        <div class="board-stat"><span class="board-number">$<span data-count="0">0</span></span><div><span class="board-stat-title">TO FOLLOW</span><span class="board-stat-detail">Free forever. Fans first.</span></div><span class="board-index">03</span></div>
        <div class="board-footer"><span aria-hidden="true">✳</span> BIG MOMENTS. SMALL DETAILS.</div>
      </div>
      <div class="hero-bottom"><span>INDEPENDENT SPORTS FAN PROJECT</span><span>BASEBALL / FOOTBALL / BASKETBALL</span></div>
    </section>
  `;
}

function renderTrackers() {
  return `
    <section id="trackers" class="trackers-section" aria-labelledby="trackers-title">
      <div class="wrap">
        <div class="section-heading"><div><p class="eyebrow">THE STARTING LINEUP</p><h2 id="trackers-title">Pick your obsession<span class="red">.</span></h2></div><p>Every big play has a number.<br>These are the ones we’re watching.</p></div>
        <div id="tracker-grid" class="tracker-grid"></div>
        <div class="coming-soon"><span class="coming-icon" aria-hidden="true">+</span><div><strong>The bench is getting deeper.</strong><span>More players. More stats. More big moments to follow.</span></div><span class="coming-label">NEXT UP / COMING SOON</span></div>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section id="about" class="about-section wrap" aria-labelledby="about-title">
      <div><p class="eyebrow">BEHIND THE CLIPBOARD</p><h2 id="about-title">Built for the<br><span class="outlined">“did you see that?”</span><br>kind of fan.</h2></div>
      <div class="about-copy"><p class="about-lead">Some numbers are too good to get lost in a box score.</p><p>Clipboard Stats is an independent fan project with a simple idea: follow one player and one exciting stat. We turn stats from public APIs into focused trackers, so you can keep up with the moments you care about.</p><p>Free forever and supported by donations. No affiliation with any league, team, or player. Just fans keeping count.</p><a class="text-link" href="https://ko-fi.com/sshb4" target="_blank" rel="noopener noreferrer">Help keep the clipboard going <span aria-hidden="true">↗</span></a></div>
    </section>
  `;
}

function renderFooter() {
  return `
  <footer class="site-footer wrap"><div class="footer-top"><a class="brand footer-brand" href="#" aria-label="Clipboard Stats home"><img src="assets/clipboardstats-logo.png" width="38" height="38" alt=""><span>CLIPBOARD STATS<span class="brand-dot">.</span></span></a><div class="footer-links" id="footer-links"><a href="https://ko-fi.com/sshb4" target="_blank" rel="noopener noreferrer">Support on Ko-fi <span aria-hidden="true">↗</span></a><a href="#trackers">Explore the trackers <span aria-hidden="true">↑</span></a></div></div><div class="footer-bottom"><span>© <span id="copyright-year">${new Date().getFullYear()}</span> Clipboard Stats.</span><p>An independent fan project. Not affiliated with any league, team, or player.</p><span>ONE PLAYER. ONE STAT.</span></div></footer>
  `;
}

// Render the page before attaching behavior to its elements.
// Templates contain trusted local content, just like the tracker configuration.
function renderPage() {
  document.getElementById("app").innerHTML = `
    <a class="skip-link" href="#trackers">Skip to trackers</a>
    ${renderHeader()}
    <main>
      ${renderHero(trackers.length)}
      ${renderTrackers()}
      ${renderAbout()}
    </main>
    ${renderFooter()}
  `;
}

renderPage();

const sportArt = {
  basketball: '<svg viewBox="0 0 300 180" fill="none" aria-hidden="true"><path d="M40 25h220v130H40Z" stroke="currentColor" stroke-width="1.5"/><path d="M150 25v130" stroke="currentColor"/><circle cx="150" cy="90" r="24" stroke="currentColor"/><path d="M40 60h40v60H40M260 60h-40v60h40M80 60a38 38 0 0 1 0 60M220 60a38 38 0 0 0 0 60" stroke="currentColor"/><path d="M40 35a65 65 0 0 1 0 110M260 35a65 65 0 0 0 0 110" stroke="currentColor"/><circle cx="60" cy="90" r="6" stroke="#f04b4c" stroke-width="3"/><path d="m100 125-27-27m0 12V98h12" stroke="#f04b4c" stroke-width="3"/><circle cx="100" cy="125" r="5" fill="#f04b4c"/></svg>',
  baseball: '<svg viewBox="0 0 300 180" fill="none" aria-hidden="true"><path d="m150 20 90 75-90 75-90-75Z" stroke="currentColor" stroke-width="1.5"/><path d="m150 65 39 33-39 34-39-34Z" stroke="currentColor" stroke-width="1.5"/><path d="M150 132v32M111 98 65 95M189 98l46-3" stroke="currentColor" stroke-dasharray="4 5"/><path d="m144 131 6-5 6 5v7h-12Z" fill="currentColor"/><path d="m150 65 39 33-39 34-39-34" stroke="#f04b4c" stroke-width="3"/><rect x="145" y="60" width="10" height="10" transform="rotate(45 150 65)" fill="#f04b4c"/></svg>',
  football: '<svg viewBox="0 0 300 180" fill="none" aria-hidden="true"><rect x="40" y="25" width="220" height="130" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M65 25v130M100 25v130M135 25v130M170 25v130M205 25v130M235 25v130" stroke="currentColor"/><path d="M65 65h170M65 115h170" stroke="currentColor" stroke-dasharray="3 12"/><path d="M90 125h35l45-45h70" stroke="#f04b4c" stroke-width="3"/><path d="m228 70 12 10-12 10" stroke="#f04b4c" stroke-width="3"/><circle cx="90" cy="125" r="6" fill="#f04b4c"/></svg>'
};

const grid = document.getElementById("tracker-grid");
trackers.forEach((tracker, index) => {
  const card = document.createElement("article");
  card.className = `tracker-card ${tracker.sport}`;
  // Content is local configuration, not remote or user-supplied HTML.
  card.innerHTML = `<div class="card-art"><div class="card-top"><span class="league-pill">${tracker.league}</span><span>TRACKER / ${String(index + 1).padStart(2, "0")}</span></div><div class="field-art">${sportArt[tracker.sport] || ""}</div><div class="card-art-title"><span>${tracker.label}</span><strong>${tracker.stat}</strong></div></div><div class="card-body"><p class="player">${tracker.player} <span>/ ${tracker.team}</span></p><h3>${tracker.name}</h3><p class="card-description">${tracker.description}</p><a class="tracker-link" href="${tracker.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${tracker.name} (opens in a new tab)"><span>Visit tracker <small>${tracker.domain}</small></span><span class="link-arrow" aria-hidden="true">↗</span></a></div>`;
  grid.appendChild(card);
});

if (contactEmail) {
  const link = document.createElement("a");
  link.href = `mailto:${contactEmail}`;
  link.textContent = "Get in touch";
  document.getElementById("footer-links").prepend(link);
}
document.getElementById("copyright-year").textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count);
      const start = performance.now();
      const animate = now => {
        const progress = Math.min((now - start) / 900, 1);
        element.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.unobserve(element);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(element => observer.observe(element));
}
