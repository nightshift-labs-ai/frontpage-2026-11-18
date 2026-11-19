# Notes: Nightshift Labs front page for Wednesday 18 November 2026

## What the image shows

`entry.png` (1024 x 1024 PNG) is a one-page front page:
- masthead: "THE WORLD ON ONE PAGE" and, large, "WEDNESDAY 18 NOVEMBER 2026";
- 2 lead cards + 11 story cards, each with a hand-drawn SVG icon, a region tag (colour-coded), a field tag,
  a bold headline and one short fact line;
- an "Also on 18 November" band: 11 more stories, one line each, grouped by region;
- footer: "All events reported on 18 Nov 2026 · sources: ..." with the outlets from the story files.

Made from `page/` (index.html, style.css, stories.js = every word on the image, icons.js = the drawings,
build.js = layout) by `tools/render.mjs` (Playwright, headless Chromium, 1024 x 1024 viewport, scale 1,
system fonts Ubuntu Sans / DejaVu, non-file requests blocked). `main.ts` copies entry.png to the output folder.

## Selection (all 24 stories of stories_A/B/C.md as of 16:51 EET are on the image)

Ranked by weight, then breadth of region and field.

| Story | Region | Field | Weight | Placement |
|---|---|---|---|---|
| Trump joins Xi and Putin at APEC in Shenzhen | Asia-Pacific | diplomacy | 5 | lead card |
| Iranian drones target US bases in Kuwait, Bahrain | Middle East | conflict | 5 | lead card |
| Israeli tanks push into central Gaza | Middle East | conflict | 4 | card |
| Ethiopia, Eritrea mass troops at border (Reuters report) | Africa | conflict | 4 | card |
| Fed minutes: more rate hikes ahead | North America | economy | 4 | card |
| Anthropic prices IPO at $83 | North America | business / AI | 4 | card |
| EU proposes EUR 45bn more for Ukraine | Europe | politics / aid | 4 | card |
| COP31 ministers split over fossil fuels | Global | climate | 3 | card |
| Copper, gold and silver tumble | Global | markets | 3 | card |
| Knesset moves to undo judicial overhaul | Middle East | politics | 3 | card |
| Jeffries nominated for House Speaker | North America | US politics | 3 | card |
| Russian strikes on Odesa kill four | Europe | conflict | 3 | card |
| Voyager 1 one light-day from Earth | Space | science | 2 | card (only science story) |
| Nvidia falls despite record quarter | North America | tech | 3 | band (4th US card would narrow breadth; Anthropic covers AI) |
| Hegseth surprise Venezuela trip | Latin America | politics | 3 | band (low-confidence details; headline fact only) |
| Polish paper: Russian plot foiled | Europe | security | 3 | band (rests on anonymous sources) |
| UK inflation 3.6% | Europe | economy | 2 | band |
| Dow falls ~560 points | North America | markets | 2 | band |
| Romania: strongest quake since 2018 | Europe | disaster | 2 | band (magnitude disputed, so no figure) |
| Senegal migrant boat wreck | Africa | disaster | 2 | band |
| GTA 6 starts unlocking | Global | culture | 2 | band (rollout began 18 Nov UTC) |
| England win ODI series in Australia | Asia-Pacific | sport | 1 | band |
| Alcaraz into ATP Finals semis | Europe | sport | 1 | band |
| Sudan medieval cathedral floor | Africa | science / culture | 1 | band |

Band extras are second facts of card stories: the Hormuz ship, the Erez crossing, Xi opening the APEC CEO Summit,
Waller on a larger December move, Panama's "petroleum mafia" remark at COP31.

Cards cover 6 regions (Asia-Pacific, Middle East, Africa, North America, Europe, Global) plus Space, and
9 fields (diplomacy, conflict, economy, business/AI, politics, climate, markets, US politics, science).

## Checks (16:52 EET)

- `MAKEFUN_OUTPUT_DIR=out/o node main.ts` writes out/o/entry.png, byte-identical to entry.png (cmp).
- entry.png: PNG, 1024 x 1024, about 277 KB (< 1 MiB).
- Every headline, fact line and band item was traced to its story file. Wording choices made for faithfulness:
  "target" (not "hit") for the Gulf drones; Ethiopia-Eritrea credited to Reuters; Romania without a magnitude;
  no "largest ever" for the IPO; the Knesset speaker vote (17 Nov) left off; Hegseth reduced to the headline fact.
- Looked at full size and at 300 px (out/preview300.png): the date and card headlines read; no clipped,
  overlapping or garbled text.
- Kit `makefun check`: passes LICENSE / entrypoint / size checks; transcripts_present fails only because no
  transcript bundle is passed (the operator bundles and submits); repository checks run at submission.

## Left out

Nothing from the story files is left out. Details not shown for space: Nvidia's revenue figures, the IPO raise size
(unconfirmed in the sources), copper's $/tonne price, gold's price level, the cricket and tennis scores.

## v2 (run s266, 19 Nov 2026 17:31-17:54 EET)

Goal: more breadth (the leaders carry 40-52 stories). v2 has **14 cards + 38 band items = 52 lines**, covering every
story in stories_A-F.md (48 distinct stories: 15 on cards, 33 in the band) plus 5 second facts of card stories in the band.

Layout: masthead (date 50 px), 2 lead cards, 3 rows of 4 cards (headlines 24 px, facts 14.5 px, one line each),
the "Also on 18 November" band in 4 balanced columns (11.5 px), footer with every outlet (9.5 px).

New cards (one per region that had none): Turkey (Imamoglu political ban, w4), South Asia (Bangladesh unrest:
the Yunus home fire + the garment-wage clashes, both w3, combined in one card), Latin America (Brazil Senate fiscal
package, w3), Pacific (Category 5 Cyclone Xavier, w3). Moved from card to band to make room: Knesset, Jeffries,
metals sell-off (all w3; their regions/fields stay on the cards through other stories).

Band additions (stories_D/E/F): Pakistan Fatah-3 test, Kashmir commander killed, India-Nepal 615 MW, Litton Das
record, Indonesia-China $71.8bn deals, Kim at naval school (no reply to Trump), Seoul acquittal in martial-law case,
Najib minutes row, NZ smoking 5.9%, Amnesty on RSF drone strikes, Sadat gold medal, Kenya State of the Nation,
Carney-Trump meeting, FDA Gaucher drug, San Francisco record rain, Haiti strike on gang leader's home, Chile Q3 -1.1%,
Argentina no quorum, German court rejects BSW recount.

Faithfulness choices: Imamoglu "ban not yet final" (penalties apply only if upheld); Haiti item says the strike hit
the gang leader's *home* (no casualty figures given); Bangladesh "fire at Yunus home" (no "torched"); Najib minutes
"leaked" (no official confirmation of declassification); Indonesia deals kept despite the APEC overlap (separate fact);
Romania still without a magnitude; Ethiopia-Eritrea still credited to Reuters.

Checks (v2): render reports no overflowing card/band/footer; looked at entry.png at full size and out/preview300.png
(date and card headlines read at 300 px); entry.png 1024 x 1024 PNG, about 308 KB; `MAKEFUN_OUTPUT_DIR=out/o node
main.ts` output byte-identical (cmp); kit check: 4 passed, only transcripts_present fails (no bundle passed; the operator
bundles and submits).
