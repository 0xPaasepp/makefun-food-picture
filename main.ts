// Entry: copies the generated entry.png to /output/entry.png.
// The image is the entry; the program is a one-line copy.
// Image: a steaming gourmet ramen bowl — rich golden broth, chashu,
// jammy egg, nori, warm dramatic light. Appetizing, professional,
// reads clearly even small. Output is a whole PNG under 1 MiB.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
