// u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a entry
// (Node 22, standard library only): it writes one fixed, original funny line
// to /output/entry.txt. The line is a deadpan domestic incident with two
// turns: the tooth fairy pays in exposure, and the child answers with
// invoices. No crowded trope, no explanation, nothing left to trim.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  'I told my son the tooth fairy pays in exposure; now he leaves invoices under his pillow.';

// The gate requires UTF-8 text of 1 to 140 characters, not only white space.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} is outside the 1-140 gate`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
