#!/usr/bin/env bun
/**
 * Dev server manager (tmux-first with legacy PID cleanup)
 * - bun dev          -> start dev server in tmux (server/css in separate panes)
 * - bun dev:attach   -> attach to tmux session
 * - bun dev:fg       -> run foreground dev server + Tailwind watch
 * - bun dev:reload   -> restart dev session/processes
 * - bun dev:stop     -> stop dev session/processes
 * - bun dev:status   -> status for tmux + legacy PID processes
 * - bun dev:logs     -> tail dev logs
 */

import { spawn } from "bun";
import { existsSync, mkdirSync, openSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const PORT = process.env.PORT || "4444";
const TMP_DIR = `${process.cwd()}/.tmp`;
const PID_FILE = ".server.pid";
const CSS_PID_FILE = ".css.pid";
const LOG_FILE = ".server.log";
const CSS_LOG_FILE = ".css.log";
const DEV_LOG_FILE = ".dev.log";
const TMUX_SESSION = process.env.DEV_TMUX_SESSION || "hs-dev";
const TMUX_SESSION_PREFIX = process.env.DEV_TMUX_PREFIX || "hs-dev";
const TMUX_WINDOW = "dev";
const TMUX_SERVER_TARGET = `${TMUX_SESSION}:0.0`;
const TMUX_CSS_TARGET = `${TMUX_SESSION}:0.1`;

type Command = "start" | "stop" | "status" | "logs" | "reload" | "fg" | "attach" | "help";

const cmd = (process.argv[2] as Command | undefined) ?? "start";
const decoder = new TextDecoder();

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

const killProcessGroup = async (pid: number | null, name: string) => {
  if (!pid) return;

  // Kill the entire process group (negative PID)
  // This ensures child processes (bun --watch children) are also killed
  try {
    process.kill(-pid, "SIGTERM");
  } catch {
    // If group kill fails, try single process
    try {
      process.kill(pid, "SIGTERM");
    } catch {
      return;
    }
  }

  await sleep(600);

  // Force-kill if still alive
  if (isRunning(pid)) {
    try {
      process.kill(-pid, "SIGKILL");
    } catch {
      try {
        process.kill(pid, "SIGKILL");
      } catch {
        // ignore
      }
    }
  }
  console.log(`Stopped ${name} (PID: ${pid})`);
};

type TmuxResult = {
  exitCode: number;
  stdout: string;
  stderr: string;
};

const runTmux = (args: string[]): TmuxResult => {
  const result = Bun.spawnSync({
    cmd: ["tmux", ...args],
    stdout: "pipe",
    stderr: "pipe",
  });

  return {
    exitCode: result.exitCode ?? 1,
    stdout: decoder.decode(result.stdout).trim(),
    stderr: decoder.decode(result.stderr).trim(),
  };
};

const hasTmux = () => Bun.spawnSync({ cmd: ["tmux", "-V"], stdout: "ignore", stderr: "ignore" }).exitCode === 0;

const hasTmuxSession = () => {
  if (!hasTmux()) return false;
  return runTmux(["has-session", "-t", TMUX_SESSION]).exitCode === 0;
};

const listTmuxSessions = (): string[] => {
  if (!hasTmux()) return [];
  const list = runTmux(["list-sessions", "-F", "#{session_name}"]);
  if (list.exitCode !== 0 || !list.stdout) return [];
  return list.stdout
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
};

const isManagedTmuxSession = (name: string) => {
  return name === TMUX_SESSION_PREFIX || name.startsWith(`${TMUX_SESSION_PREFIX}-`);
};

const listManagedTmuxSessions = (): string[] => listTmuxSessions().filter(isManagedTmuxSession);

const findPidsByCommandFragment = (fragment: string): number[] => {
  const out = Bun.spawnSync({
    cmd: ["ps", "-Ao", "pid=,command="],
    stdout: "pipe",
    stderr: "ignore",
  });
  const text = decoder.decode(out.stdout);
  const pids: number[] = [];
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const firstSpace = trimmed.indexOf(" ");
    if (firstSpace === -1) continue;
    const pidText = trimmed.slice(0, firstSpace).trim();
    const cmdText = trimmed.slice(firstSpace + 1);
    const pid = Number.parseInt(pidText, 10);
    if (!Number.isFinite(pid) || pid <= 0) continue;
    if (cmdText.includes(fragment) && pid !== process.pid) {
      pids.push(pid);
    }
  }
  return pids;
};

const cleanupLegacyCssWrapperProcesses = async () => {
  // Old wrapper process (removed): bun scripts/css-watch.ts
  const legacyWrapperPids = findPidsByCommandFragment("scripts/css-watch.ts");
  if (legacyWrapperPids.length === 0) return 0;

  for (const pid of legacyWrapperPids) {
    await killProcessGroup(pid, "legacy css-watch wrapper");
  }
  return legacyWrapperPids.length;
};

const shellQuote = (value: string) => `'${value.replace(/'/g, `'\\''`)}'`;

const cwd = shellQuote(process.cwd());
const tmp = shellQuote(TMP_DIR);
const envPrefix = `TMPDIR=${tmp} BUN_TMPDIR=${tmp}`;
const absLogPath = (file: string) => shellQuote(`${process.cwd()}/${file}`);

const tmuxCommand = (inner: string) => {
  return [`cd ${cwd}`, `mkdir -p ${tmp}`, inner].join(" && ");
};

const tmuxServerCommand = () => {
  const port = shellQuote(PORT);
  return tmuxCommand(`${envPrefix} PORT=${port} DEV=1 bun --watch src/server.ts`);
};

const tmuxCssCommand = () => {
  return tmuxCommand(`${envPrefix} bun run css:watch`);
};

const setupTmuxPipes = () => {
  const serverPipe = runTmux([
    "pipe-pane",
    "-o",
    "-t",
    TMUX_SERVER_TARGET,
    `cat | tee -a ${absLogPath(LOG_FILE)} >> ${absLogPath(DEV_LOG_FILE)}`,
  ]);
  const cssPipe = runTmux([
    "pipe-pane",
    "-o",
    "-t",
    TMUX_CSS_TARGET,
    `cat | tee -a ${absLogPath(CSS_LOG_FILE)} >> ${absLogPath(DEV_LOG_FILE)}`,
  ]);
  return serverPipe.exitCode === 0 && cssPipe.exitCode === 0;
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
  if (!process.env.TMUX && hasTmuxSession()) {
    console.log(`Dev tmux session is already running (${TMUX_SESSION}).`);
    console.log(`Use "bun run dev:attach" to attach or "bun run dev:stop" first.`);
    return;
  }

  const serverPid = readPid(PID_FILE);
  if (isRunning(serverPid)) {
    console.log(`Legacy detached server already running (PID: ${serverPid})`);
    console.log(`Use "bun run dev:stop" first.`);
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

const startDetachedProcesses = async () => {
  const serverPid = readPid(PID_FILE);
  if (isRunning(serverPid)) {
    console.log(`Server already running (PID: ${serverPid})`);
    console.log(`Use "bun run dev:reload" to restart or "bun run dev:stop" to stop.`);
    return;
  }

  await buildCss();

  // Truncate log files on fresh start
  writeFileSync(CSS_LOG_FILE, "");
  writeFileSync(LOG_FILE, "");

  const cssLogFd = openSync(CSS_LOG_FILE, "a");
  const cssWatcher = spawn({
    cmd: ["bun", "run", "css:watch"],
    env: { ...process.env, TMPDIR: TMP_DIR, BUN_TMPDIR: TMP_DIR },
    stdout: cssLogFd,
    stderr: cssLogFd,
    stdin: "ignore",
    detached: true,
  });
  writePid(CSS_PID_FILE, cssWatcher.pid);

  const serverLogFd = openSync(LOG_FILE, "a");
  const server = spawn({
    cmd: ["bun", "--watch", "src/server.ts"],
    env: { ...process.env, PORT, DEV: "1", TMPDIR: TMP_DIR, BUN_TMPDIR: TMP_DIR },
    stdout: serverLogFd,
    stderr: serverLogFd,
    stdin: "ignore",
    detached: true,
  });
  writePid(PID_FILE, server.pid);

  console.log(`Dev server started on http://localhost:${PORT}`);
  console.log(`Server PID: ${server.pid} (log: ${LOG_FILE})`);
  console.log(`CSS PID: ${cssWatcher.pid} (log: ${CSS_LOG_FILE})`);
};

const stopLegacyProcesses = async () => {
  const serverPid = readPid(PID_FILE);
  const cssPid = readPid(CSS_PID_FILE);
  const hadProcesses = isRunning(serverPid) || isRunning(cssPid);

  await killProcessGroup(cssPid, "CSS watcher");
  await killProcessGroup(serverPid, "server");

  removePid(CSS_PID_FILE);
  removePid(PID_FILE);

  return hadProcesses;
};

const startTmuxSession = async () => {
  if (!hasTmux()) {
    console.log("tmux is not available, falling back to legacy detached mode.");
    await startDetachedProcesses();
    return;
  }

  if (hasTmuxSession()) {
    console.log(`Dev session already running (tmux: ${TMUX_SESSION}).`);
    console.log(`Use "bun run dev:attach" to attach.`);
    return;
  }

  const legacyServerPid = readPid(PID_FILE);
  const legacyCssPid = readPid(CSS_PID_FILE);
  if (isRunning(legacyServerPid) || isRunning(legacyCssPid)) {
    console.log("Found legacy detached dev processes. Stopping them first.");
    await stopLegacyProcesses();
  }

  const cleanedLegacyWrappers = await cleanupLegacyCssWrapperProcesses();
  if (cleanedLegacyWrappers > 0) {
    console.log(`Stopped ${cleanedLegacyWrappers} stale legacy css-watch wrapper process(es).`);
  }

  await buildCss();
  writeFileSync(DEV_LOG_FILE, "");
  writeFileSync(LOG_FILE, "");
  writeFileSync(CSS_LOG_FILE, "");
  mkdirSync(TMP_DIR, { recursive: true });

  const create = runTmux(["new-session", "-d", "-s", TMUX_SESSION, "-n", TMUX_WINDOW, tmuxServerCommand()]);
  if (create.exitCode !== 0) {
    console.error("Failed to start tmux session.");
    if (create.stderr) console.error(create.stderr);
    process.exit(1);
  }

  const split = runTmux(["split-window", "-v", "-t", TMUX_SERVER_TARGET, tmuxCssCommand()]);
  if (split.exitCode !== 0) {
    console.error("Failed to create CSS pane in tmux session.");
    if (split.stderr) console.error(split.stderr);
    runTmux(["kill-session", "-t", TMUX_SESSION]);
    process.exit(1);
  }

  runTmux(["select-layout", "-t", `${TMUX_SESSION}:0`, "even-vertical"]);
  runTmux(["select-pane", "-t", TMUX_SERVER_TARGET, "-T", "server"]);
  runTmux(["select-pane", "-t", TMUX_CSS_TARGET, "-T", "css"]);

  if (!setupTmuxPipes()) {
    console.warn("Failed to configure tmux log pipes. bun dev:logs may be incomplete.");
  }

  await sleep(350);

  if (!hasTmuxSession()) {
    console.error("tmux session terminated immediately. Check output:");
    const captured = runTmux(["capture-pane", "-pt", TMUX_SERVER_TARGET, "-S", "-120"]);
    if (captured.stdout) {
      console.error(captured.stdout);
    }
    process.exit(1);
  }

  removePid(PID_FILE);
  removePid(CSS_PID_FILE);

  console.log(`Dev session started in tmux: ${TMUX_SESSION}`);
  console.log(`Server URL: http://localhost:${PORT}`);
  console.log(`Attach: bun run dev:attach`);
  console.log(`Logs:   bun run dev:logs`);
};

const stopManagedTmuxSessions = async () => {
  const sessions = listManagedTmuxSessions();
  if (sessions.length === 0) return false;

  for (const session of sessions) {
    runTmux(["send-keys", "-t", `${session}:0.0`, "C-c"]);
    runTmux(["send-keys", "-t", `${session}:0.1`, "C-c"]);
  }
  await sleep(400);

  for (const session of sessions) {
    const killed = runTmux(["kill-session", "-t", session]);
    if (killed.exitCode === 0) {
      console.log(`Stopped tmux dev session (${session})`);
    } else {
      const reason = killed.stderr || "unknown error";
      console.warn(`Failed to stop tmux dev session (${session}): ${reason}`);
    }
  }
  return true;
};

const startProcesses = async () => {
  await startTmuxSession();
};

const stopProcesses = async () => {
  const tmuxStopped = await stopManagedTmuxSessions();
  const legacyStopped = await stopLegacyProcesses();
  const cleanedLegacyWrappers = await cleanupLegacyCssWrapperProcesses();
  if (!tmuxStopped && !legacyStopped) {
    if (cleanedLegacyWrappers === 0) {
      console.log("No dev processes running.");
    }
  }
  if (cleanedLegacyWrappers > 0) {
    console.log(`Stopped ${cleanedLegacyWrappers} stale legacy css-watch wrapper process(es).`);
  }
};

const status = () => {
  const tmuxRunning = hasTmuxSession();
  const managedSessions = listManagedTmuxSessions();
  if (tmuxRunning) {
    console.log(`tmux session running (${TMUX_SESSION})`);
    const pane = runTmux([
      "list-panes",
      "-t",
      `${TMUX_SESSION}:0`,
      "-F",
      "#{pane_index} #{pane_pid} #{pane_current_command} #{pane_title}",
    ]);
    if (pane.exitCode === 0 && pane.stdout) {
      for (const line of pane.stdout.split("\n")) {
        if (line.trim()) {
          console.log(`tmux pane: ${line}`);
        }
      }
    }
  } else {
    console.log(`tmux session not running (${TMUX_SESSION})`);
  }
  if (managedSessions.length > 0) {
    console.log(`managed tmux sessions (${TMUX_SESSION_PREFIX}*): ${managedSessions.join(", ")}`);
  } else {
    console.log(`managed tmux sessions (${TMUX_SESSION_PREFIX}*): none`);
  }

  const serverPid = readPid(PID_FILE);
  const cssPid = readPid(CSS_PID_FILE);

  if (isRunning(serverPid)) {
    console.log(`Legacy server running (PID: ${serverPid})`);
  } else {
    console.log("Legacy server not running");
  }

  if (isRunning(cssPid)) {
    console.log(`Legacy CSS watcher running (PID: ${cssPid})`);
  } else {
    console.log("Legacy CSS watcher not running");
  }
};

const attach = async () => {
  if (!hasTmuxSession()) {
    console.log(`No tmux dev session found (${TMUX_SESSION}).`);
    console.log(`Start it with "bun run dev".`);
    process.exit(1);
  }

  const session = spawn({
    cmd: ["tmux", "attach-session", "-t", TMUX_SESSION],
    stdout: "inherit",
    stderr: "inherit",
    stdin: "inherit",
  });
  await session.exited;
};

const logs = async () => {
  if (hasTmuxSession()) {
    if (!existsSync(DEV_LOG_FILE)) {
      // Fallback to direct pane capture if file pipe is unavailable.
      const serverCaptured = runTmux(["capture-pane", "-pt", TMUX_SERVER_TARGET, "-S", "-120"]);
      const cssCaptured = runTmux(["capture-pane", "-pt", TMUX_CSS_TARGET, "-S", "-120"]);
      if (serverCaptured.stdout) {
        console.log("[server]");
        console.log(serverCaptured.stdout);
      }
      if (cssCaptured.stdout) {
        console.log("[css]");
        console.log(cssCaptured.stdout);
      }
      console.log("No log file configured. Use \"bun run dev:attach\" for live output.");
      return;
    }

    const tail = spawn({
      cmd: ["tail", "-n", "120", "-f", DEV_LOG_FILE],
      stdout: "inherit",
      stderr: "inherit",
      stdin: "inherit",
    });
    await tail.exited;
    return;
  }

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
  console.log(`  bun dev           Start tmux session (${TMUX_SESSION}) with server/css panes`);
  console.log("  bun dev:attach    Attach to tmux dev session");
  console.log("  bun dev:fg        Run foreground dev server + Tailwind watch");
  console.log("  bun dev:reload    Restart dev session/processes");
  console.log("  bun dev:stop      Stop dev session/processes");
  console.log("  bun dev:status    Show status");
  console.log("  bun dev:logs      Tail logs (tmux log or legacy files)");
  console.log("");
  console.log("Environment:");
  console.log("  PORT              Server port (default: 4444)");
  console.log(`  DEV_TMUX_SESSION  tmux session name (default: ${TMUX_SESSION})`);
  console.log(`  DEV_TMUX_PREFIX   tmux session prefix for stop cleanup (default: ${TMUX_SESSION_PREFIX})`);
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
  case "attach":
    await attach();
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
