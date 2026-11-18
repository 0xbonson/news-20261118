import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

// Read the opaque binary entry image and write byte-for-byte to the target output directory
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destPath: string = join(outputDir, 'entry.png');
const srcPath: string = join(import.meta.dirname ?? process.cwd(), 'entry.png');

mkdirSync(dirname(destPath), { recursive: true });
const imageBytes: Buffer = readFileSync(srcPath);
writeFileSync(destPath, imageBytes);

