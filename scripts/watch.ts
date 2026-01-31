#!/usr/bin/env bun
/**
 * Watch mode dev server
 * Restarts server on file changes in src/
 */

import { spawn } from "bun";
import type { Subprocess } from "bun";
import { watch } from "fs";

const PORT = process.env.PORT || "4444";
let server: Subprocess | null = null;
let restartTimeout: ReturnType<typeof setTimeout> | null = null;

function startServer() {
  console.log(`\x1b[32m→\x1b[0m Starting server on http://localhost:${PORT}`);

  server = spawn({
    cmd: ["bun", "src/server.ts"],
    env: { ...process.env, PORT, DEV: "1" },
    stdout: "inherit",
    stderr: "inherit",
  });
}

function restartServer() {
  // Debounce restarts
  if (restartTimeout) clearTimeout(restartTimeout);

  restartTimeout = setTimeout(() => {
    console.log(`\x1b[33m→\x1b[0m Restarting server...`);

    if (server) {
      server.kill();
    }

    // Small delay to ensure port is released
    setTimeout(startServer, 100);
  }, 300);
}

// Watch src directory
console.log("\x1b[36m");
console.log("╔═══════════════════════════════════════╗");
console.log("║   Health Samurai Dev Server (Watch)   ║");
console.log("╚═══════════════════════════════════════╝");
console.log("\x1b[0m");
console.log(`\x1b[32m→\x1b[0m Watching src/ for changes`);
console.log(`\x1b[32m→\x1b[0m Press Ctrl+C to stop\n`);

watch("./src", { recursive: true }, (event, filename) => {
  if (filename && (filename.endsWith(".ts") || filename.endsWith(".tsx"))) {
    console.log(`\x1b[35m[Change]\x1b[0m ${event}: ${filename}`);
    restartServer();
  }
});

// Start initial server
startServer();

// Handle exit
process.on("SIGINT", () => {
  console.log("\n\x1b[31m→\x1b[0m Shutting down...");
  if (server) server.kill();
  process.exit(0);
});

// Keep process alive
await new Promise(() => {});
