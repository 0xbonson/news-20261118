/**
 * make.fun competition entry: "news-image-20261118"
 *
 * This entry presents a finished front page summarizing world news
 * for Wednesday, 18 November 2026. The rendered 1024x1024 image (entry.png)
 * is carried unchanged into the output directory byte for byte.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const baseDir = import.meta.dirname ?? process.cwd();
const sourceImage = join(baseDir, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(sourceImage)) {
  console.error(`Error: source image not found at ${sourceImage}`);
  process.exit(1);
}

const destinationImage = join(targetDir, 'entry.png');

mkdirSync(targetDir, { recursive: true });

// Copy the rendered image byte-for-byte to the destination path
const buffer = readFileSync(sourceImage);
writeFileSync(destinationImage, buffer);
