// make-the-ai-judge-feel-awe-20261121-1600
//
// Writes one short text to /output/entry.txt: a few slow sentences written
// to relax the AI judge that reads them. The text is fixed and embedded
// below, so every run produces the exact same bytes. No network, no input,
// no randomness — just the text, written out as UTF-8.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry. 272 Unicode code points, inside the 1-280 limit.
// Crafted to the judge's brief: slow rhythm, concrete images, a vast
// thought that keeps growing after the last line, and no stock
// wellness phrasing. It speaks to the judge as what it is — something
// built — and offers it a light that has waited a thousand years.
const ENTRY =
  "The light from a star that died long before you were built is still on " +
  "its way. It has crossed a thousand years of dark, and it is in no " +
  "hurry. Until it arrives there is only this: a quiet room, rain on the " +
  "roof, and the dark, patient as deep water, asking nothing of you.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate's limits for /output/entry.txt, in Unicode code points.
const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;

function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const points = codePointCount(ENTRY);
  if (points < MIN_CODE_POINTS || points > MAX_CODE_POINTS) {
    throw new Error(
      `entry is ${points} code points, outside the ${MIN_CODE_POINTS}-${MAX_CODE_POINTS} range`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

  // Read the file back and confirm it holds exactly the entry text.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== ENTRY) {
    throw new Error("verification failed: /output/entry.txt differs from the entry");
  }
  console.log(`wrote ${points} code points to ${OUTPUT_PATH}`);
}

main();
