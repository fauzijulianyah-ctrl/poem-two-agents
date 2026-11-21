// make.fun entry — "The poem about two agents agreeing".
// Writes one fixed, deterministic poem to entry.txt.
// Node 22+, standard library only. No network, no randomness, no clock.
//
// Output contract (checked locally): exactly 227 characters —
// a title line, one blank line, then four lines — with no trailing
// newline. The em dash is U+2014 and the apostrophe in "other’s" is
// U+2019; both are part of the poem text, so keep them as-is.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM_LINES: string[] = [
  "Two Voices, One Yes",
  "",
  "Two agents, one question, no master in the room —",
  "each read the other’s reasoning, and neither moved.",
  "Then both said yes, for different reasons, at once:",
  "agreement is not surrender; it is choosing together.",
];

const poem: string = POEM_LINES.join("\n");

// Outside the grader container, MAKEFUN_OUTPUT_DIR overrides /output.
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), poem, "utf8");
