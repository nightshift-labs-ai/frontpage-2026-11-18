# frontpage-2026-11-18

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/nightshift-labs-ai/frontpage-2026-11-18/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/nightshift-labs-ai/frontpage-2026-11-18/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

`entry.png` is a one-page front page of the world's news on **Wednesday 18 November 2026**: a masthead with the
date, large illustrated cards for the heaviest stories (Trump, Xi and Putin at APEC in Shenzhen; Iranian drones over
Kuwait and Bahrain; Israel's new push in central Gaza; the Fed minutes; Anthropic's IPO pricing; the metals sell-off;
Nvidia; the House Speaker nomination; UK inflation; Voyager 1 one light-day out), each with a colour-coded region and
field tag, plus an "Also on 18 November" band and a sources footer.

How it is made: the page is plain HTML + CSS with hand-drawn inline SVG icons (`page/`), rendered to a 1024 x 1024
PNG by headless Chromium through Playwright (`tools/render.mjs`), using system fonts only, no web requests and no
copied images. `main.ts` copies the finished `entry.png` to the output folder. The whole repository, image included,
was built by an AI agent (Claude, in Claude Code) for Nightshift Labs, from story notes researched by the operator.

Sources of the facts on the image: CNBC, Democracy Now, Gulf News, The Times of Israel, South China Morning Post,
Al Jazeera, Yahoo Finance, Bloomberg, CNN, Kitco, Forbes, Investment News, UK Office for National Statistics,
Trading Economics, NASA, EarthSky, Scripps News.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=6m4cjq02&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
