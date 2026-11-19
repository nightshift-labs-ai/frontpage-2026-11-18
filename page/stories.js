// Every line below is written from the operator's story files for 18 Nov 2026 (briefs/news18/stories_*.md).
const REGION = {
  asia:   { name: 'ASIA-PACIFIC',  c: '#c8282e' },
  mideast:{ name: 'MIDDLE EAST',   c: '#d9731a' },
  namer:  { name: 'NORTH AMERICA', c: '#1f5fbf' },
  europe: { name: 'EUROPE',        c: '#7a3db8' },
  global: { name: 'GLOBAL',        c: '#13867a' },
  space:  { name: 'SPACE',         c: '#2a2f7a' },
  africa: { name: 'AFRICA',        c: '#3d8a2a' },
};

const CARDS = [
  { lead: true, r: 'asia', f: 'DIPLOMACY', icon: 'summit',
    hl: 'Trump joins Xi and Putin at APEC in China',
    fact: 'Xi greets Trump on the Shenzhen tarmac; the three sit together at the welcome banquet. Three-way talks are set for 19 Nov.' },
  { lead: true, r: 'mideast', f: 'CONFLICT', icon: 'drones',
    hl: 'Iranian drones target US bases in the Gulf',
    fact: 'Kuwait and Bahrain air defences respond after a US strike on Iran\u2019s Qeshm Island; a ship is hit in Hormuz.' },
  { r: 'mideast', f: 'CONFLICT', icon: 'tank',
    hl: 'Israeli tanks push into central Gaza',
    fact: 'Families flee Bureij and Nuseirat camps.' },
  { r: 'africa', f: 'CONFLICT', icon: 'border',
    hl: 'Ethiopia, Eritrea mass troops at border',
    fact: 'Reuters reports a build-up.' },
  { r: 'namer', f: 'ECONOMY', icon: 'fed',
    hl: 'Fed minutes: more rate hikes ahead',
    fact: 'Nearly all officials expect further rises.' },
  { r: 'namer', f: 'BUSINESS · AI', icon: 'ipo',
    hl: 'Anthropic prices IPO at $83 a share',
    fact: 'Above its $70–78 range; trades 19 Nov.' },
  { r: 'global', f: 'CLIMATE', icon: 'cop',
    hl: 'COP31 ministers split over fossil fuels',
    fact: '21 items still unresolved.' },
  { r: 'global', f: 'MARKETS', icon: 'metals',
    hl: 'Copper, gold and silver tumble',
    fact: 'Copper down nearly 6%, gold over 3%.' },
  { r: 'mideast', f: 'POLITICS', icon: 'scales',
    hl: 'Knesset moves to undo judicial overhaul',
    fact: 'First votes on repeal bills.' },
  { r: 'namer', f: 'US POLITICS', icon: 'capitol',
    hl: 'Jeffries nominated for House Speaker',
    fact: 'First Black nominee; caucus vote 251–11.' },
  { r: 'namer', f: 'TECH', icon: 'chip', wide: true,
    hl: 'Nvidia falls despite record quarter',
    fact: 'Down about 2.9% though results beat forecasts.' },
  { r: 'space', f: 'SCIENCE', icon: 'voyager', wide: true,
    hl: 'Voyager 1: one light-day from Earth',
    fact: 'A signal takes 24 hours each way.' },
  { r: 'europe', f: 'ECONOMY', icon: 'pump', wide: true,
    hl: 'UK inflation rises to 3.6%',
    fact: 'Up from 3.5%; record diesel prices.' },
];

const ALSO = [
  { r: 'mideast', items: [
    'Hormuz ship hit; a crew member missing',
    'Gaza: Erez crossing reopens for aid',
    'Kuwait: \u201ca dangerous escalation\u201d',
  ]},
  { r: 'africa', items: [
    'Senegal: migrant boat wrecked, 1+ dead',
  ]},
  { r: 'asia', items: [
    'Xi opens the APEC CEO Summit',
    'Cricket: England win ODIs in Australia',
  ]},
  { r: 'namer', items: [
    'Dow falls about 560 points (1.1%)',
    'Waller: bigger December move possible',
    'Nvidia\u2019s Kress: \u201clet\u2019s move forward\u201d',
    'Jeffries to succeed Johnson on 3 Jan',
  ]},
  { r: 'europe', items: [
    'Tennis: Alcaraz into ATP Finals semis',
    'UK diesel at a record ~199.5p a litre',
  ]},
  { r: 'global', items: [
    'Video games: GTA 6 starts unlocking',
    'COP31: Panama hits \u201cpetroleum mafia\u201d',
  ]},
  { r: 'space', items: [
    'Voyager: command + reply take ~2 days',
  ]},
];

const SOURCES = 'CNBC, Al Jazeera, Gulf News, Times of Israel, SCMP, Democracy Now, OkayAfrica, Reuters (via OkayAfrica), Bloomberg, Yahoo Finance, CNN, Kitco, Forbes, ONS, The Climate Watch, NASA, EarthSky, ESPNcricinfo, Sky Sports, ATP Tour, Rockstar Games, PC Gamer';
