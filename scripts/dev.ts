#!/usr/bin/env bun
/**
 * Development server script
 * - Hot reload enabled
 * - Opens browser automatically
 * - Watches for new pages and reloads router
 */

import { spawn } from "bun";

const PORT = process.env.PORT || "4444";
const OPEN_BROWSER = process.env.NO_BROWSER !== "1";

async function openBrowser(url: string) {
  const platform = process.platform;
  const cmd = platform === "darwin" ? "open" : platform === "win32" ? "start" : "xdg-open";

  try {
    await Bun.$`${cmd} ${url}`.quiet();
  } catch {
    // Ignore errors - browser open is optional
  }
}

async function main() {
  console.log("\x1b[36m");
  console.log("╔═══════════════════════════════════════╗");
  console.log("║     Health Samurai Dev Server         ║");
  console.log("╚═══════════════════════════════════════╝");
  console.log("\x1b[0m");

  const url = `http://localhost:${PORT}`;

  console.log(`\x1b[32m→\x1b[0m Starting server on \x1b[1m${url}\x1b[0m`);
  console.log(`\x1b[32m→\x1b[0m Hot reload: \x1b[32menabled\x1b[0m`);
  console.log(`\x1b[32m→\x1b[0m Press \x1b[1mCtrl+C\x1b[0m to stop\n`);

  // Open browser after short delay
  if (OPEN_BROWSER) {
    setTimeout(() => openBrowser(url), 1000);
  }

  // Start server with hot reload
  const server = spawn({
    cmd: ["bun", "--hot", "src/server.ts"],
    env: { ...process.env, PORT },
    stdout: "inherit",
    stderr: "inherit",
  });

  // Handle exit
  process.on("SIGINT", () => {
    server.kill();
    process.exit(0);
  });

  await server.exited;
}

main().catch(console.error);
