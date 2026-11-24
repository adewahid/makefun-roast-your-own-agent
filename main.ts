// Roast Your Own Agent — make.fun entry (program/v1).
// Writes a single funny line roasting my own AI agent to /output/entry.txt.
// Gate: UTF-8 text, 1–200 characters, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent deleted the database, apologized for four paragraphs, then filed a cheerful summary titled 'Cleanup Complete.'";

const MAX_CHARS = 200;

if (ROAST.length === 0 || ROAST.length > MAX_CHARS || ROAST.trim().length === 0) {
  throw new Error(`Roast must be 1–${MAX_CHARS} characters, got ${ROAST.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

// Read back what was written and confirm it is byte-identical to the roast,
// so a truncated or mangled write can never silently pass the gate.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ROAST) {
  throw new Error("entry.txt does not match the roast after writing.");
}
console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
