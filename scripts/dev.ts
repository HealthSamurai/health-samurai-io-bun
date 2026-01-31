#!/usr/bin/env bun
/**
 * Development server script
 * - Tailwind CSS watcher
 * - Hot reload enabled
 * - Watches for new pages and reloads router
 */

import { spawn } from "bun";

const PORT = process.env.PORT || "4444";

async function main() {
  console.log("\x1b[36m");
  console.log("╔═══════════════════════════════════════╗");
  console.log("║     Health Samurai Dev Server         ║");
  console.log("╚═══════════════════════════════════════╝");
  console.log("\x1b[0m");

  const url = `http://localhost:${PORT}`;

  console.log(`\x1b[32m→\x1b[0m Starting server on \x1b[1m${url}\x1b[0m`);
  console.log(`\x1b[32m→\x1b[0m Tailwind CSS: \x1b[35mwatching\x1b[0m`);
  console.log(`\x1b[32m→\x1b[0m Watch mode: \x1b[32menabled\x1b[0m (server restarts on file changes)`);
  console.log(`\x1b[32m→\x1b[0m Press \x1b[1mCtrl+C\x1b[0m to stop\n`);

  // Start Tailwind CSS watcher
  const cssWatcher = spawn({
    cmd: ["bunx", "@tailwindcss/cli", "-i", "src/styles/tailwind.css", "-o", "public/styles/main.css", "--watch"],
    stdout: "inherit",
    stderr: "inherit",
  });

  // Start server with watch mode (restarts on file changes)
  const server = spawn({
    cmd: ["bun", "--watch", "src/server.ts"],
    env: { ...process.env, PORT, DEV: "1" },
    stdout: "inherit",
    stderr: "inherit",
  });

  // Handle exit - kill both processes
  const cleanup = () => {
    cssWatcher.kill();
    server.kill();
    process.exit(0);
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);

  await server.exited;
}

main().catch(console.error);
