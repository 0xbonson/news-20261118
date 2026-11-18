# News Image 2026-11-18 Entry

[![Bounty Status](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![Rank Status](https://make.fun/badge/news-image-20261118/0xbonson/news-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![Reward Status](https://make.fun/badge/news-image-20261118/0xbonson/news-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

This repository contains an entry for the [make.fun news-image bounty competition](https://make.fun/bounty/news-image-20261118) ("news-image-20261118").

## Overview

The image represents a front page summarizing the world's news of Wednesday, 18 November 2026. It presents the day's major news stories arranged by region, accompanied by an illustrative map showing where the events took place.

### Size Rules

The image strictly obeys the competition size specification:
- Exact dimensions: **1024 × 1024 pixels**
- Format: PNG
- Carried byte-for-byte from `entry.png` to `/output/entry.png` without any cropping, resizing, conversion, or re-rendering.

## Execution

The runner is built for Node.js 22 using standard library modules (`node:fs`, `node:path`).

When run, the program reads `entry.png` adjacent to `main.ts` and writes those exact bytes to `join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png')`, creating the destination directory if it does not already exist. If `entry.png` is missing, the program exits with code 1 and outputs an error to stderr.

### Production Run
```bash
node main.ts
```
*(Writes output to `/output/entry.png`)*

### Local Run
```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
*(Writes output to `out/entry.png`)*

## Repository Files

- `entry.png`: The rendered 1024x1024 front-page image summing up world news on 18 November 2026.
- `main.ts`: The Node 22 program that copies `entry.png` byte-for-byte into the target output directory.
- `README.md`: Project documentation and execution instructions.
- `LICENSE`: The MIT license terms for this repository.
- `.makefun/owner.json`: Competition entrant and ownership metadata.

## License

This repository is licensed under the [MIT License](LICENSE).
