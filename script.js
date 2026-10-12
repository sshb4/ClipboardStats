// Add another object here to add a tracker. The grid adapts automatically.
const trackers = [
  { name: "Corbin’s Triples", player: "Corbin Carroll", team: "Arizona Diamondbacks", league: "MLB", stat: "TRIPLES", label: "THE EXTRA-BASE OBSESSION", description: "Every Corbin Carroll triple, tracked live. He triples. You get a text.", url: "https://corbinstriples.com", domain: "corbinstriples.com", sport: "baseball" },
  { name: "Gibbs Touchdowns", player: "Jahmyr Gibbs", team: "Detroit Lions", league: "NFL", stat: "TOUCHDOWNS", label: "THE CHASE FOR THE RECORD", description: "Jahmyr Gibbs’ chase for the single-season TD record. He scores. You get a text.", url: "https://gibbstouchdowns.com", domain: "gibbstouchdowns.com", sport: "football" }
];

// Set a real contact address when ready; no placeholder email is displayed.
const contactEmail = "";

// Keep the project counter in sync with the tracker list.
const trackerCounter = document.getElementById("tracker-count");
trackerCounter.dataset.count = String(trackers.length);
trackerCounter.textContent = String(trackers.length);
document.querySelector(".hero-board").setAttribute("aria-label", `${trackers.length} trackers, one stat per player, zero dollars to follow`);

const sportArt = {
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
