// Every line below is written from the operator's story files for 18 Nov 2026 (briefs/news18/stories_*.md).
const REGION = {
  asia:   { name: 'ASIA-PACIFIC',  c: '#c8282e' },
  mideast:{ name: 'MIDDLE EAST',   c: '#d9731a' },
  namer:  { name: 'NORTH AMERICA', c: '#1f5fbf' },
  europe: { name: 'EUROPE',        c: '#7a3db8' },
  global: { name: 'GLOBAL',        c: '#13867a' },
  space:  { name: 'SPACE',         c: '#2a2f7a' },
  africa: { name: 'AFRICA',        c: '#3d8a2a' },
  latam:  { name: 'LATIN AMERICA', c: '#c2347e' },
  sasia:  { name: 'SOUTH ASIA',    c: '#b8860b' },
};

const CARDS = [
  { lead: true, r: 'asia', f: 'DIPLOMACY', icon: 'summit',
    hl: 'Trump, Xi and Putin meet at APEC in Shenzhen',
    fact: 'Xi greets Trump on the tarmac; the three share the APEC welcome banquet. A first US-China-Russia leaders’ meeting is set for 19 Nov.' },
  { lead: true, r: 'mideast', f: 'CONFLICT', icon: 'drones',
    hl: 'Iranian drones target US bases in Kuwait and Bahrain',
    fact: 'Air defences engage drones after a US strike on an Iranian missile site on Qeshm Island. Kuwait calls it a “dangerous escalation”.' },
  { r: 'namer', f: 'BUSINESS · AI', icon: 'ipo',
    hl: 'Anthropic prices its IPO at $83 a share',
    fact: 'Above the $70–78 range; Nasdaq trading as “ANT” starts 19 Nov.' },
  { r: 'namer', f: 'ECONOMY', icon: 'fed',
    hl: 'Fed minutes: more rate hikes ahead',
    fact: 'Nearly all officials expect further rises to bring inflation back to 2%.' },
  { r: 'mideast', f: 'CONFLICT', icon: 'tank',
    hl: 'Israeli tanks push into central Gaza',
    fact: 'Families flee Bureij and Nuseirat camps; Erez crossing reopens for aid checks.' },
  { r: 'global', f: 'MARKETS', icon: 'metals',
    hl: 'Copper, gold and silver tumble',
    fact: 'Copper falls nearly 6% in London, gold over 3%, silver about 5%.' },
  { r: 'namer', f: 'TECH', icon: 'chip',
    hl: 'Nvidia shares fall despite record quarter',
    fact: 'Down about 2.9% at the close though revenue and outlook beat forecasts.' },
  { r: 'namer', f: 'US POLITICS', icon: 'capitol',
    hl: 'Jeffries nominated for House Speaker',
    fact: 'Democrats back him 251–11; first Black nominee for the post.' },
  { r: 'space', f: 'SCIENCE', icon: 'voyager',
    hl: 'Voyager 1 is one light-day from Earth',
    fact: 'First human-made object this far: signals take 24 hours each way.' },
  { r: 'europe', f: 'ECONOMY', icon: 'pump',
    hl: 'UK inflation rises to 3.6%',
    fact: 'Up from 3.5% in September, driven by record diesel prices and tobacco duty.' },
];

const ALSO = [
  { r: 'asia', items: [
    'Xi opens the APEC CEO Summit in Shenzhen',
  ]},
  { r: 'mideast', items: [
    'Ship struck in the Strait of Hormuz; one crew member missing',
    'Bahrain: drones were aimed at a US radar at Sheikh Isa Air Base',
    'Erez crossing opens for aid checks, first time since Feb 2025',
  ]},
  { r: 'namer', items: [
    'Fed Governor Waller: a larger December move could be needed',
    'Some Fed officials flag the AI investment boom as a risk',
    'Nvidia interim CEO Kress to staff: “let’s move forward”',
    'CoreWeave and other AI cloud stocks fall with Nvidia',
    'Jeffries to succeed Mike Johnson when Congress meets 3 Jan',
  ]},
  { r: 'europe', items: [
    'UK diesel near a record 199.5p a litre',
  ]},
  { r: 'global', items: [
    'Copper at about $12,470 a tonne, lowest close since April',
  ]},
  { r: 'space', items: [
    'A Voyager command and its reply now take about two days',
  ]},
];

const SOURCES = 'CNBC, Al Jazeera, Gulf News, Times of Israel, SCMP, Democracy Now, Bloomberg, Yahoo Finance, CNN, Kitco, Forbes, ONS, NASA, EarthSky, Scripps News';
