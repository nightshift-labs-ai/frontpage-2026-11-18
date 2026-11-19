// Nightshift Labs entry for make.fun "news-image-20261118" (Node 22, standard library only).
// The image is entry.png beside this file, rendered beforehand from page/ by tools/render.mjs.
// This program only copies it to the output folder: /output, or $MAKEFUN_OUTPUT_DIR when set.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
