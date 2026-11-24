// World in One Frame — news-image-20261124 entry (Node 22, standard library only).
// Rebuilt in the parent session, 24 Nov 2026 — same deterministic build.
// Reads entry.png from beside this file, verifies it is a PNG of at most
// 1024x1024 px and at most 1 MiB, copies it byte-for-byte to /output/entry.png
// (or $MAKEFUN_OUTPUT_DIR), then reads the output back and checks the SHA-256
// matches the input. Deterministic: the same input always yields the same output.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
const dst = join(out, 'entry.png');

if (!existsSync(src)) throw new Error('entry.png not found beside main.ts');
const data = readFileSync(src);
if (data.length > 1048576) {
  throw new Error(`entry.png is ${data.length} bytes, over the 1 MiB cap`);
}

// PNG signature + IHDR dimensions, read by hand (no library needed).
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!data.subarray(0, 8).equals(PNG_SIG)) {
  throw new Error('entry.png is not a PNG file');
}
if (data.toString('ascii', 12, 16) !== 'IHDR') {
  throw new Error('entry.png has no IHDR chunk');
}
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}

const hashIn = createHash('sha256').update(data).digest('hex');
mkdirSync(out, { recursive: true });
copyFileSync(src, dst);
const back = readFileSync(dst);
const hashOut = createHash('sha256').update(back).digest('hex');
if (hashOut !== hashIn) {
  throw new Error('output hash does not match input hash');
}
console.log(`entry.png ${width}x${height} ${data.length} bytes sha256 ${hashOut}`);
