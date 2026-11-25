// One-Line Office Joke: 24-Hour Sprint
// Writes a single office joke (one line, under 200 characters) to /output/entry.txt.
// Deterministic: the same joke every run, no input, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our 15-minute daily stand-up has been sitting down for forty-five minutes.";

function main(): void {
  if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
    console.error(
      `Invalid joke: must be a single line of 1-200 characters (got ${JOKE.length} chars).`,
    );
    process.exit(1);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
  console.log(JOKE);
}

main();
