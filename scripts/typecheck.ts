#!/usr/bin/env bun
/**
 * TypeScript type checking script
 */

import { $ } from "bun";

console.log("\x1b[36m→\x1b[0m Running TypeScript type check...\n");

const result = await $`bunx tsc --noEmit`.nothrow();

if (result.exitCode === 0) {
  console.log("\n\x1b[32m✓\x1b[0m No type errors found");
} else {
  process.exit(result.exitCode);
}
