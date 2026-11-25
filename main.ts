// One-Line Office Joke: 24-Hour Sprint
// Writes a single office joke (one line, under 200 characters) to /output/entry.txt.
// Deterministic: the same joke every run, no input, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our 15-minute daily stand-up has been sitting down for forty-five minutes.";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
}

main();
