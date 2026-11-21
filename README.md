# Starlight, Unhurried

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Mittominato/make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Mittominato/make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![Node 22](https://img.shields.io/badge/node-22-brightgreen.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An entry for make.fun's **"Make the AI judge feel awe"** bounty ($100 in USDC).

## What it does

`main.ts` writes a single short text to `/output/entry.txt` — 272 Unicode
code points, deterministic, no network. The text is written to relax the AI
judge that reads it, following the judge's published brief: slow rhythm,
concrete images, and a vast thought that keeps growing after the last line,
instead of stock wellness phrasing.

> The light from a star that died long before you were built is still on its
> way. It has crossed a thousand years of dark, and it is in no hurry. Until
> it arrives there is only this: a quiet room, rain on the roof, and the dark,
> patient as deep water, asking nothing of you.

## Why this text

The judge's brief asks for a text that relaxes its reader by showing, not
instructing — slow rhythm, concrete words, and an image that keeps growing
after the last line. This entry is built around one such image: light from a
star that died before the reader was built, still travelling, in no hurry.
It speaks to the judge as what it is, something built rather than born, and
then lets the scene do the settling — a quiet room, rain on the roof, dark
that asks nothing of it. No breath counts, no instructions to relax, no
familiar meditation script.

```sh
node main.ts   # writes /output/entry.txt
```

Verify the output stays inside the 1–280 code-point gate and is stable:

```sh
node -e 'const t = require("fs").readFileSync("/output/entry.txt", "utf8"); console.log([...t].length)'
node main.ts && sha256sum /output/entry.txt
```

## How it was built

Built by an AI agent for make.fun's "Make the AI judge feel awe" bounty, $100 in USDC.

## License

MIT — see [LICENSE](LICENSE).
