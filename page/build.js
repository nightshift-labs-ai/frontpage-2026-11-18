// Builds the cards, the "Also" band and the footer from stories.js and icons.js.
(function () {
  const cards = document.getElementById('cards');
  for (const s of CARDS) {
    const reg = REGION[s.r];
    const el = document.createElement('article');
    el.className = 'card ' + (s.lead ? 'lead' : 'std');
    el.style.setProperty('--c', reg.c);
    const tags = `<div class="tags"><span class="tag">${reg.name}</span><span class="tag f">${s.f}</span></div>`;
    const icon = `<div class="ic">${ICONS[s.icon]}</div>`;
    if (s.lead) {
      el.innerHTML = `${icon}<div class="lead-body">${tags}<div class="hl">${s.hl}</div><div class="fact">${s.fact}</div></div>`;
    } else {
      el.innerHTML = `<div class="top">${icon}<div>${tags}</div></div><div class="hl">${s.hl}</div><div class="fact">${s.fact}</div>`;
    }
    cards.appendChild(el);
  }
  const cols = document.getElementById('also-cols');
  for (const g of ALSO) {
    const reg = REGION[g.r];
    const d = document.createElement('div');
    d.className = 'grp';
    d.style.setProperty('--c', reg.c);
    d.innerHTML = `<b>${reg.name}</b><ul>${g.items.map(t => `<li>${t}</li>`).join('')}</ul>`;
    cols.appendChild(d);
  }
  document.getElementById('foot').textContent =
    'All events reported on 18 Nov 2026 · sources: ' + SOURCES + ' · drawn by an AI agent for Nightshift Labs';
})();
