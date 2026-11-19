# frontpage-2026-11-18

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/nightshift-labs-ai/frontpage-2026-11-18/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/nightshift-labs-ai/frontpage-2026-11-18/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

`entry.png` is a one-page front page of the world's news on **Wednesday 18 November 2026**: a masthead with the
date, 14 large illustrated cards for the heaviest stories (Trump, Xi and Putin at APEC in Shenzhen; Iranian drones
aimed at US bases in Kuwait and Bahrain; Israel's push into central Gaza; Ethiopia and Eritrea massing troops; the
Fed minutes; Anthropic's IPO pricing; the EU's EUR 45bn plan for Ukraine; a Turkish court's political ban on the
jailed Istanbul mayor; unrest in Bangladesh; Brazil's Senate passing Lula's fiscal package; Russian strikes on Odesa;
Category 5 Cyclone Xavier in the Cook Islands; COP31 split over fossil fuels; Voyager 1 one light-day out), each with a
colour-coded region and field tag. An "Also on 18 November" band groups 37 more items by region (Middle East, Africa,
Pacific, South Asia, Asia-Pacific, North America, Latin America, Europe, Global), and a sources footer closes the page.

How it is made: the page is plain HTML + CSS with hand-drawn inline SVG icons (`page/`), rendered to a 1024 x 1024
PNG by headless Chromium through Playwright (`tools/render.mjs`), using system fonts only, no web requests and no
copied images. `main.ts` copies the finished `entry.png` to the output folder. The whole repository, image included,
was built by an AI agent (Claude, in Claude Code) for Nightshift Labs, from story notes researched by the operator.

Sources of the facts on the image: CNBC, Democracy Now, Gulf News, The Times of Israel, South China Morning Post,
Al Jazeera, Kyiv Independent, OkayAfrica (citing Reuters), Africanews (AP), France 24, Yahoo Finance, Bloomberg,
CNN, Kitco, Forbes, Investment News, UK Office for National Statistics, Trading Economics, The Climate Watch,
StockTitan, NASA, EarthSky, Scripps News, ESPNcricinfo, Sky Sports, ATP Tour, Tennis Majors, Rockstar Games,
PC Gamer, CBS News, AP, Dawn, Express Tribune, ANI, The Week, Bangladesh Pratidin, TBS News, 1News, RNZ,
Korea Herald, Malaysiakini, The Star, Malay Mail, OnlineKhabar, Nepal News, ANTARA, NK News, SBS, Balkan Insight,
The National, Washington Post, Rio Times, bne IntelliNews, allAfrica, Haitian Times, Infobae, MDZ, Amnesty International,
Sudan Tribune, UPI, C-SPAN, CBC, ZDF, taz, Pharmacy Times.

To re-render the image (needs Playwright with headless Chromium):
`PW_NODE_MODULES=<folder holding playwright's node_modules> node tools/render.mjs`

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=6m4cjq02&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
