#!/usr/bin/env bun
/**
 * Dev server manager (background, PID/log aware)
 * - bun dev          -> start background dev server + Tailwind watch
 * - bun dev:fg       -> run foreground dev server + Tailwind watch
 * - bun dev:reload   -> restart background processes
 * - bun dev:stop     -> stop background processes
 * - bun dev:status   -> status of background processes
 * - bun dev:logs     -> tail logs
 */

import { spawn } from "bun";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const PORT = process.env.PORT || "4444";
const TMP_DIR = `${process.cwd()}/.tmp`;
const PID_FILE = ".server.pid";
const CSS_PID_FILE = ".css.pid";
const LOG_FILE = ".server.log";
const CSS_LOG_FILE = ".css.log";

type Command = "start" | "stop" | "status" | "logs" | "reload" | "fg" | "help";

const cmd = (process.argv[2] as Command | undefined) ?? "start";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const readPid = (file: string): number | null => {
  try {
    const text = readFileSync(file, "utf8").trim();
    const pid = Number.parseInt(text, 10);
    return Number.isNaN(pid) ? null : pid;
  } catch {
    return null;
  }
};

const writePid = (file: string, pid: number) => {
  writeFileSync(file, `${pid}`);
};

const removePid = (file: string) => {
  try {
    rmSync(file, { force: true });
  } catch {
    // ignore
  }
};

const isRunning = (pid: number | null) => {
  if (!pid) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    if (typeof error === "object" && error && "code" in error) {
      if ((error as { code?: string }).code === "ESRCH") {
        return false;
      }
      return true;
    }
    return true;
  }
};

const killProcess = async (pid: number | null, name: string) => {
  if (!pid) return;
  try {
    process.kill(pid, "SIGTERM");
  } catch {
    return;
  }
  await sleep(600);
  if (isRunning(pid)) {
    try {
      process.kill(pid, "SIGKILL");
    } catch {
      // ignore
    }
  }
  console.log(`Stopped ${name} (PID: ${pid})`);
};

const buildCss = async () => {
  mkdirSync(TMP_DIR, { recursive: true });
  const build = spawn({
    cmd: ["bun", "run", "css:build"],
    env: { ...process.env, TMPDIR: TMP_DIR, BUN_TMPDIR: TMP_DIR },
    stdout: "ignore",
    stderr: "ignore",
  });
  await build.exited;
};

const startForeground = async () => {
  const serverPid = readPid(PID_FILE);
  if (isRunning(serverPid)) {
    console.log(`Server already running (PID: ${serverPid})`);
    console.log(`Use "bun run dev:stop" to stop background server first.`);
    return;
  }

  await buildCss();

  console.log(`Starting dev server on http://localhost:${PORT}`);
  console.log("Tailwind CSS: watching");
  console.log("Watch mode: enabled (server restarts on file changes)");
  console.log("Press Ctrl+C to stop\n");

  const cssWatcher = spawn({
    cmd: ["bun", "run", "css:watch"],
    env: { ...process.env, TMPDIR: TMP_DIR, BUN_TMPDIR: TMP_DIR },
    stdout: "inherit",
    stderr: "inherit",
    stdin: "inherit",
  });

  const server = spawn({
    cmd: ["bun", "--watch", "src/server.ts"],
    env: { ...process.env, PORT, DEV: "1", TMPDIR: TMP_DIR, BUN_TMPDIR: TMP_DIR },
    stdout: "inherit",
    stderr: "inherit",
    stdin: "inherit",
  });

  const cleanup = () => {
    cssWatcher.kill();
    server.kill();
    process.exit(0);
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);

  await server.exited;
};

const startProcesses = async () => {
  const serverPid = readPid(PID_FILE);
  if (isRunning(serverPid)) {
    console.log(`Server already running (PID: ${serverPid})`);
    console.log(`Use "bun run dev:reload" to restart or "bun run dev:stop" to stop.`);
    return;
  }

  await buildCss();

  const cssWatcher = spawn({
    cmd: [
      "sh",
      "-c",
      `TMPDIR=${TMP_DIR} BUN_TMPDIR=${TMP_DIR} bun run css:watch >> ${CSS_LOG_FILE} 2>&1`,
    ],
    stdio: ["ignore", "ignore", "ignore"],
    detached: true,
  });
  writePid(CSS_PID_FILE, cssWatcher.pid);

  const server = spawn({
    cmd: [
      "sh",
      "-c",
      `TMPDIR=${TMP_DIR} BUN_TMPDIR=${TMP_DIR} PORT=${PORT} DEV=1 bun --watch src/server.ts >> ${LOG_FILE} 2>&1`,
    ],
    stdio: ["ignore", "ignore", "ignore"],
    detached: true,
  });
  writePid(PID_FILE, server.pid);

  console.log(`Dev server started on http://localhost:${PORT}`);
  console.log(`Server PID: ${server.pid} (log: ${LOG_FILE})`);
  console.log(`CSS PID: ${cssWatcher.pid} (log: ${CSS_LOG_FILE})`);
};

const stopProcesses = async () => {
  const serverPid = readPid(PID_FILE);
  const cssPid = readPid(CSS_PID_FILE);

  await killProcess(cssPid, "CSS watcher");
  await killProcess(serverPid, "server");

  removePid(CSS_PID_FILE);
  removePid(PID_FILE);
};

const status = () => {
  const serverPid = readPid(PID_FILE);
  const cssPid = readPid(CSS_PID_FILE);

  if (isRunning(serverPid)) {
    console.log(`Server running (PID: ${serverPid})`);
  } else {
    console.log("Server not running");
  }

  if (isRunning(cssPid)) {
    console.log(`CSS watcher running (PID: ${cssPid})`);
  } else {
    console.log("CSS watcher not running");
  }
};

const logs = async () => {
  const tail = spawn({
    cmd: ["tail", "-f", LOG_FILE, CSS_LOG_FILE],
    stdout: "inherit",
    stderr: "inherit",
    stdin: "inherit",
  });
  await tail.exited;
};

const showHelp = () => {
  console.log("Health Samurai Dev Manager");
  console.log("");
  console.log("Usage:");
  console.log("  bun dev           Start background dev server + Tailwind watch");
  console.log("  bun dev:fg        Run foreground dev server + Tailwind watch");
  console.log("  bun dev:reload    Restart background processes");
  console.log("  bun dev:stop      Stop background processes");
  console.log("  bun dev:status    Show status");
  console.log("  bun dev:logs      Tail logs");
  console.log("");
  console.log("Environment:");
  console.log("  PORT              Server port (default: 4444)");
};

switch (cmd) {
  case "start":
    await startProcesses();
    process.exit(0);
    break;
  case "reload":
    await stopProcesses();
    await startProcesses();
    process.exit(0);
    break;
  case "stop":
    await stopProcesses();
    process.exit(0);
    break;
  case "status":
    status();
    process.exit(0);
    break;
  case "fg":
    await startForeground();
    break;
  case "logs":
    await logs();
    break;
  case "help":
  default:
    showHelp();
    break;
}
