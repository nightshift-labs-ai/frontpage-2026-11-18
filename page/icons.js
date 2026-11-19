// Hand-drawn icons for each story card (own drawings, viewBox 100 x 100).
const S = (body, bg) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="98" height="98" rx="12" fill="${bg}"/>${body}</svg>`;
const UP = (x, y, c) => `<path d="M${x} ${y + 22} L${x} ${y + 6} M${x - 8} ${y + 13} L${x} ${y} L${x + 8} ${y + 13}" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
const DOWN = (x, y, c) => `<path d="M${x} ${y} L${x} ${y + 16} M${x - 8} ${y + 9} L${x} ${y + 22} L${x + 8} ${y + 9}" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
const PERSON = (x, y, c) => `<circle cx="${x}" cy="${y}" r="7" fill="#f1c7a0" stroke="#5a3b22" stroke-width="1.5"/><path d="M${x - 12} ${y + 22} Q${x - 12} ${y + 9} ${x} ${y + 9} Q${x + 12} ${y + 9} ${x + 12} ${y + 22} Z" fill="${c}"/>`;

const ICONS = {
  // three leaders around a round banquet table, a plane landing, APEC banner
  summit: S(`
    <path d="M58 18 l26 -8 l3 3 l-12 7 l4 9 l-3 1 l-6 -8 l-10 4 l-1 4 l-3 0 l0 -6 z" fill="#5b6b86"/>
    <rect x="10" y="10" width="38" height="16" rx="3" fill="#c8282e"/>
    <text x="29" y="23" font-family="Ubuntu Sans, DejaVu Sans" font-weight="800" font-size="13" fill="#fff" text-anchor="middle">APEC</text>
    ${PERSON(24, 44, '#1f5fbf')}${PERSON(50, 38, '#c8282e')}${PERSON(76, 44, '#4a5568')}
    <ellipse cx="50" cy="74" rx="40" ry="14" fill="#8a5a2b"/>
    <ellipse cx="50" cy="71" rx="40" ry="13" fill="#f6ecd8" stroke="#8a5a2b" stroke-width="2"/>
    <circle cx="34" cy="70" r="5" fill="#fff" stroke="#c9b48e"/><circle cx="50" cy="73" r="5" fill="#fff" stroke="#c9b48e"/><circle cx="66" cy="70" r="5" fill="#fff" stroke="#c9b48e"/>
  `, '#fde9e6'),

  // drones over a Gulf coast, an interceptor streak, a tanker in the strait
  drones: S(`
    <rect x="1" y="66" width="98" height="33" rx="0" fill="#3a86c8"/>
    <path d="M1 66 Q20 58 40 66 L40 70 L1 70 Z" fill="#d8b77a"/>
    <path d="M14 30 l14 6 l-14 6 l3 -6 z" fill="#2b2f38"/><path d="M36 18 l14 6 l-14 6 l3 -6 z" fill="#2b2f38"/><path d="M58 34 l14 6 l-14 6 l3 -6 z" fill="#2b2f38"/>
    <path d="M18 64 Q40 50 70 22" stroke="#ff9a3c" stroke-width="3" fill="none" stroke-dasharray="5 3"/>
    <circle cx="72" cy="20" r="9" fill="#ffcf3a"/><circle cx="72" cy="20" r="5" fill="#ff6a1a"/>
    <path d="M56 78 L92 78 L88 86 L60 86 Z" fill="#2b2f38"/><rect x="80" y="71" width="7" height="7" fill="#2b2f38"/>
    <path d="M70 76 q3 -8 6 -2" stroke="#9aa3ad" stroke-width="2" fill="none"/>
  `, '#e3eef8'),

  // a tank on a road, tents of displaced families
  tank: S(`
    <rect x="1" y="70" width="98" height="29" fill="#d9c49a"/>
    <path d="M60 70 L72 52 L84 70 Z" fill="#e9e4da" stroke="#8a7f6a" stroke-width="2"/>
    <path d="M78 70 L88 56 L98 70 Z" fill="#cfc8b8" stroke="#8a7f6a" stroke-width="2"/>
    <rect x="8" y="62" width="48" height="14" rx="7" fill="#3f4a32"/>
    <circle cx="16" cy="69" r="4" fill="#9aa38a"/><circle cx="27" cy="69" r="4" fill="#9aa38a"/><circle cx="38" cy="69" r="4" fill="#9aa38a"/><circle cx="48" cy="69" r="4" fill="#9aa38a"/>
    <path d="M12 62 L16 52 L50 52 L54 62 Z" fill="#5c6b47"/>
    <rect x="22" y="42" width="20" height="11" rx="4" fill="#5c6b47"/>
    <rect x="40" y="45" width="30" height="4" rx="2" fill="#3f4a32"/>
    <circle cx="80" cy="22" r="8" fill="#f2c14e"/>
  `, '#f4eadb'),

  // the Fed building with a percent sign and an up arrow
  fed: S(`
    <path d="M10 38 L44 22 L78 38 Z" fill="#c7ccd6" stroke="#5b6475" stroke-width="2"/>
    <rect x="12" y="38" width="64" height="5" fill="#9aa3b5"/>
    <rect x="16" y="45" width="7" height="30" fill="#e6e9ef"/><rect x="29" y="45" width="7" height="30" fill="#e6e9ef"/><rect x="42" y="45" width="7" height="30" fill="#e6e9ef"/><rect x="55" y="45" width="7" height="30" fill="#e6e9ef"/><rect x="68" y="45" width="7" height="30" fill="#e6e9ef"/>
    <rect x="10" y="75" width="68" height="8" fill="#9aa3b5"/>
    <circle cx="80" cy="62" r="16" fill="#1f5fbf"/>
    <text x="80" y="69" font-family="Ubuntu Sans, DejaVu Sans" font-weight="800" font-size="20" fill="#fff" text-anchor="middle">%</text>
    ${UP(80, 14, '#d0312d')}
  `, '#e8eef9'),

  // a market bell and a price tag at $83 with an up arrow
  ipo: S(`
    <path d="M18 66 Q18 30 38 26 Q58 30 58 66 Z" fill="#e8b931" stroke="#8a6a12" stroke-width="2"/>
    <rect x="12" y="64" width="52" height="7" rx="3" fill="#8a6a12"/>
    <circle cx="38" cy="75" r="5" fill="#8a6a12"/><rect x="35" y="18" width="6" height="9" rx="2" fill="#8a6a12"/>
    <path d="M56 48 L86 48 L94 58 L86 68 L56 68 Z" fill="#1f5fbf"/>
    <circle cx="87" cy="58" r="2.5" fill="#fff"/>
    <text x="70" y="63" font-family="Ubuntu Sans, DejaVu Sans" font-weight="800" font-size="14" fill="#fff" text-anchor="middle">$83</text>
    ${UP(76, 16, '#1a9a4a')}
    <text x="38" y="94" font-family="Ubuntu Sans, DejaVu Sans" font-weight="800" font-size="13" fill="#2b2f38" text-anchor="middle">IPO</text>
  `, '#eef3fb'),

  // a gold bar and a copper coil under a falling red line
  metals: S(`
    <path d="M10 18 L30 30 L46 26 L62 44 L82 62" stroke="#d0312d" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M74 52 L86 66 L70 66 Z" fill="#d0312d"/>
    <path d="M12 80 L18 68 L44 68 L50 80 Z" fill="#e8b931" stroke="#8a6a12" stroke-width="2"/>
    <path d="M30 92 L36 80 L62 80 L68 92 Z" fill="#c9cdd3" stroke="#6b717a" stroke-width="2"/>
    <ellipse cx="78" cy="84" rx="13" ry="9" fill="none" stroke="#b8622a" stroke-width="5"/>
    <ellipse cx="78" cy="84" rx="6" ry="4" fill="none" stroke="#d98a4a" stroke-width="3"/>
  `, '#e4f4f1'),

  // an AI chip with a red down arrow
  chip: S(`
    ${[30, 42, 54, 66].map(x => `<rect x="${x - 2}" y="12" width="4" height="12" fill="#6b717a"/><rect x="${x - 2}" y="76" width="4" height="12" fill="#6b717a"/>`).join('')}
    ${[30, 42, 54, 66].map(y => `<rect x="8" y="${y - 2}" width="12" height="4" fill="#6b717a"/><rect x="76" y="${y - 2}" width="12" height="4" fill="#6b717a"/>`).join('')}
    <rect x="18" y="22" width="60" height="56" rx="6" fill="#2f8f3a"/>
    <rect x="28" y="32" width="40" height="36" rx="3" fill="#1e5e27"/>
    <text x="48" y="57" font-family="Ubuntu Sans, DejaVu Sans" font-weight="800" font-size="17" fill="#c8f0c0" text-anchor="middle">AI</text>
    <circle cx="80" cy="70" r="15" fill="#fff" stroke="#d0312d" stroke-width="2"/>
    ${DOWN(80, 59, '#d0312d')}
  `, '#e8f5e9'),

  // the Capitol dome with a speaker's gavel
  capitol: S(`
    <path d="M28 46 Q28 22 48 20 Q68 22 68 46 Z" fill="#f4f5f8" stroke="#5b6475" stroke-width="2"/>
    <rect x="45" y="10" width="6" height="11" fill="#5b6475"/>
    <rect x="22" y="46" width="52" height="6" fill="#c7ccd6"/>
    <rect x="14" y="52" width="68" height="22" fill="#f4f5f8" stroke="#5b6475" stroke-width="2"/>
    ${[22, 32, 42, 52, 62, 72].map(x => `<rect x="${x}" y="55" width="4" height="17" fill="#c7ccd6"/>`).join('')}
    <rect x="10" y="74" width="76" height="6" fill="#9aa3b5"/>
    <g transform="rotate(-30 70 84)"><rect x="56" y="78" width="30" height="12" rx="3" fill="#8a5a2b"/><rect x="69" y="88" width="5" height="18" fill="#6b4220"/></g>
  `, '#e8eef9'),

  // the Voyager probe with its dish, a light beam back to a tiny Earth
  voyager: S(`
    <circle cx="20" cy="18" r="1.5" fill="#fff"/><circle cx="64" cy="12" r="1.5" fill="#fff"/><circle cx="88" cy="40" r="1.5" fill="#fff"/><circle cx="40" cy="88" r="1.5" fill="#fff"/><circle cx="12" cy="56" r="1.5" fill="#fff"/>
    <path d="M18 82 L66 38" stroke="#ffd75a" stroke-width="2" stroke-dasharray="4 3"/>
    <circle cx="16" cy="84" r="7" fill="#3a86c8"/><path d="M12 82 q4 -3 7 1 q-2 4 -6 2z" fill="#4caf50"/>
    <path d="M60 30 Q74 22 86 34 Q76 46 60 30 Z" fill="#e6e9ef" stroke="#9aa3b5" stroke-width="1.5"/>
    <rect x="68" y="38" width="10" height="8" fill="#c9a13a"/>
    <path d="M78 44 L92 60 M70 46 L64 64" stroke="#c7ccd6" stroke-width="2"/>
    <text x="70" y="84" font-family="Ubuntu Sans, DejaVu Sans" font-weight="800" font-size="11" fill="#ffd75a" text-anchor="middle">24 HRS</text>
  `, '#151a3d'),

  // two helmets facing each other across a dotted border line
  border: S(`
    <path d="M50 8 L50 92" stroke="#c8282e" stroke-width="4" stroke-dasharray="7 5"/>
    <path d="M8 62 Q8 38 28 38 Q44 38 44 58 L44 62 Z" fill="#5c6b47"/><rect x="6" y="60" width="40" height="6" rx="3" fill="#3f4a32"/>
    <path d="M92 62 Q92 38 72 38 Q56 38 56 58 L56 62 Z" fill="#7a6a3a"/><rect x="54" y="60" width="40" height="6" rx="3" fill="#584b28"/>
    <path d="M18 78 L36 78 M30 72 L37 78 L30 84" stroke="#2b2f38" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M82 78 L64 78 M70 72 L63 78 L70 84" stroke="#2b2f38" stroke-width="4" fill="none" stroke-linecap="round"/>
  `, '#eef6e9'),

  // a globe between an oil barrel and a solar panel (climate talks)
  cop: S(`
    <circle cx="50" cy="40" r="20" fill="#3a86c8"/><path d="M38 30 q8 -4 12 4 q-4 8 -12 4z M54 44 q8 -2 10 6 q-6 4 -10 -6z" fill="#4caf50"/>
    <rect x="6" y="58" width="22" height="30" rx="3" fill="#2b2f38"/><rect x="6" y="66" width="22" height="3" fill="#6b717a"/><rect x="6" y="77" width="22" height="3" fill="#6b717a"/>
    <path d="M70 66 L94 60 L94 82 L70 88 Z" fill="#1f5fbf" stroke="#bcd" stroke-width="1.5"/><path d="M82 63 L82 85 M70 77 L94 71" stroke="#bcd" stroke-width="1.5"/>
    <path d="M32 74 L44 74 M68 74 L56 74" stroke="#d0312d" stroke-width="4" stroke-linecap="round"/>
  `, '#e4f4f1'),

  // scales of justice and a gavel (the Knesset and the judicial laws)
  scales: S(`
    <rect x="47" y="16" width="6" height="62" fill="#5b6475"/><rect x="32" y="78" width="36" height="7" rx="3" fill="#5b6475"/>
    <path d="M18 28 L82 22" stroke="#5b6475" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="16" r="5" fill="#e8b931"/>
    <path d="M18 28 L8 52 M18 28 L28 52 M82 22 L72 46 M82 22 L92 46" stroke="#9aa3b5" stroke-width="1.5"/>
    <path d="M6 52 Q18 64 30 52 Z" fill="#e8b931"/><path d="M70 46 Q82 58 94 46 Z" fill="#e8b931"/>
  `, '#fdf0e3'),

  // a ring of stars around a stack of euro coins (EU money for Ukraine)
  euaid: S(`
    <circle cx="50" cy="50" r="40" fill="#1f4fa8"/>
    ${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<circle cx="${50 + 31 * Math.cos(a)}" cy="${50 + 31 * Math.sin(a)}" r="3.4" fill="#ffd75a"/>`; }).join('')}
    <ellipse cx="50" cy="64" rx="16" ry="5" fill="#c9a13a"/><rect x="34" y="52" width="32" height="12" fill="#e8b931"/><ellipse cx="50" cy="52" rx="16" ry="5" fill="#f4d36b"/>
    <ellipse cx="50" cy="44" rx="16" ry="5" fill="#c9a13a"/><rect x="34" y="34" width="32" height="10" fill="#e8b931"/><ellipse cx="50" cy="34" rx="16" ry="5" fill="#f4d36b"/>
    <text x="50" y="62" font-family="Ubuntu Sans, DejaVu Sans" font-weight="800" font-size="11" fill="#6b4a0a" text-anchor="middle">€</text>
  `, '#e8eef9'),

  // a damaged building with smoke (strikes on a city)
  strike: S(`
    <path d="M58 30 q-6 -10 4 -16 q4 -8 14 -4 q10 -2 12 8 q8 4 2 12 z" fill="#8a8f98"/>
    <path d="M18 88 L18 40 L40 40 L46 50 L52 44 L60 48 L60 88 Z" fill="#c9b9a0" stroke="#6b5a40" stroke-width="2"/>
    <rect x="24" y="50" width="7" height="8" fill="#2b2f38"/><rect x="24" y="64" width="7" height="8" fill="#2b2f38"/><rect x="38" y="64" width="7" height="8" fill="#2b2f38"/><rect x="38" y="76" width="7" height="8" fill="#2b2f38"/>
    <path d="M64 88 L64 56 L84 56 L84 88 Z" fill="#e0d6c4" stroke="#6b5a40" stroke-width="2"/>
    <path d="M52 44 L58 34 L62 42" fill="#ff8a2a"/><circle cx="56" cy="40" r="4" fill="#ffcf3a"/>
    <rect x="8" y="88" width="84" height="5" fill="#6b5a40"/>
  `, '#f4ece2'),

  // a fuel pump with a rising price
  pump: S(`
    <rect x="14" y="22" width="36" height="64" rx="4" fill="#7a3db8"/>
    <rect x="20" y="30" width="24" height="16" rx="2" fill="#f4f5f8"/>
    <text x="32" y="42" font-family="Ubuntu Sans, DejaVu Sans" font-weight="800" font-size="10" fill="#2b2f38" text-anchor="middle">3.6%</text>
    <rect x="10" y="84" width="44" height="6" rx="2" fill="#4a2a70"/>
    <path d="M50 40 L60 40 L60 70 Q60 76 66 76 Q72 76 72 70 L72 46" stroke="#2b2f38" stroke-width="4" fill="none"/>
    <rect x="68" y="38" width="9" height="12" rx="2" fill="#2b2f38"/>
    ${UP(84, 18, '#d0312d')}
  `, '#f1eaf9'),
};
