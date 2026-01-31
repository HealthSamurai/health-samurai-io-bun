#!/usr/bin/env bun
/**
 * Tailwind watch wrapper with a polling fallback for environments where
 * native file watching (FSEvents) is unavailable.
 */

import { spawn } from "bun";
import { mkdirSync } from "node:fs";

const INPUT = "src/styles/tailwind.css";
const OUTPUT = "public/styles/main.css";
const TMP_DIR = `${process.cwd()}/.tmp`;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const runBuild = async () => {
  const build = spawn({
    cmd: ["bun", "run", "css:build"],
    env: { ...process.env, TMPDIR: TMP_DIR, BUN_TMPDIR: TMP_DIR },
    stdout: "inherit",
    stderr: "inherit",
  });
  await build.exited;
};

async function main() {
  mkdirSync(TMP_DIR, { recursive: true });

  // Attempt native watch first.
  const watcher = spawn({
    cmd: ["bun", "node_modules/@tailwindcss/cli/dist/index.mjs", "-i", INPUT, "-o", OUTPUT, "--watch"],
    env: { ...process.env, TMPDIR: TMP_DIR, BUN_TMPDIR: TMP_DIR },
    stdout: "inherit",
    stderr: "inherit",
  });

  // If it exits quickly, fallback to a polling rebuild loop.
  const start = Date.now();
  const exitCode = await watcher.exited;
  const ranForMs = Date.now() - start;

  if (ranForMs > 2000) {
    process.exit(exitCode ?? 1);
  }

  console.warn("Tailwind watch failed; falling back to polling rebuilds every 2s.");

  while (true) {
    await runBuild();
    await sleep(2000);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
