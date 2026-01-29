#!/usr/bin/env bun
/**
 * Page Cloning Pipeline
 *
 * For each page:
 * 1. Analyzer: Compare original vs clone, create diff spec
 * 2. Creator: Fix issues from spec
 * 3. Loop until Analyzer says SUCCESS or max 5 attempts
 */

import pagesData from "../pages.json";

type Page = { name: string; path: string };
type PageCategory = "products" | "solutions" | "resources" | "company" | "legal";

// Only include categories with path (exclude external which has url)
const pages = pagesData as unknown as Record<PageCategory, Page[]>;

const categories: PageCategory[] = ["products", "solutions", "resources", "company", "legal"];
const MAX_RETRIES = 5;
const LOGS_DIR = "logs";
const SPECS_DIR = "specs";

// Create directories
await Bun.write(`${LOGS_DIR}/.gitkeep`, "");
await Bun.write(`${SPECS_DIR}/.gitkeep`, "");

// Log file for this run
const runId = new Date().toISOString().replace(/[:.]/g, "-");
const logFile = `${LOGS_DIR}/run-${runId}.log`;
const logStream: string[] = [];

// Prompt paths (loaded fresh on each iteration for hot-reload)
const ANALYZER_PROMPT_PATH = import.meta.dir + "/../prompts/analyzer.md";
const CREATOR_PROMPT_PATH = import.meta.dir + "/../prompts/creator.md";

function log(message: string, alsoConsole = true) {
  const line = `[${timestamp()}] ${message}`;
  logStream.push(line);
  if (alsoConsole) {
    console.log(message);
  }
}

function logSection(title: string) {
  const separator = "=".repeat(60);
  logStream.push("");
  logStream.push(separator);
  logStream.push(title);
  logStream.push(separator);
  logStream.push("");
}

async function flushLog() {
  await Bun.write(logFile, logStream.join("\n"));
}

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  const mins = Math.floor(ms / 60000);
  const secs = ((ms % 60000) / 1000).toFixed(0);
  return `${mins}m ${secs}s`;
}

function timestamp(): string {
  return new Date().toLocaleTimeString();
}

function getSlug(page: Page): string {
  return page.path.replace(/^\//, "").replace(/\//g, "-") || "index";
}

async function runClaude(prompt: string, label: string): Promise<string> {
  logSection(`PROMPT: ${label}`);
  logStream.push(prompt);
  logStream.push("");

  const proc = Bun.spawn(
    [
      "claude",
      "-p", prompt,
      "--dangerously-skip-permissions",
      "--max-turns", "100",
      "--output-format", "text",
    ],
    {
      cwd: import.meta.dir + "/..",
      stdout: "pipe",
      stderr: "pipe",
    }
  );

  const response = await new Response(proc.stdout).text();
  const stderr = await new Response(proc.stderr).text();

  logSection(`RESPONSE: ${label}`);
  logStream.push(response);
  if (stderr) {
    logStream.push("\n--- STDERR ---");
    logStream.push(stderr);
  }
  logStream.push("");

  // Flush log after each Claude call
  await flushLog();

  return response;
}

// =============================================================================
// ANALYZER
// =============================================================================

async function buildAnalyzerPrompt(page: Page): Promise<string> {
  // Reload template fresh (allows hot-reload of prompts)
  const template = await Bun.file(ANALYZER_PROMPT_PATH).text();
  const slug = getSlug(page);
  return template
    .replace(/\{\{PAGE_NAME\}\}/g, page.name)
    .replace(/\{\{PAGE_PATH\}\}/g, page.path)
    .replace(/\{\{PAGE_SLUG\}\}/g, slug);
}

async function runAnalyzer(page: Page): Promise<{ success: boolean; issues: number; response: string }> {
  const prompt = await buildAnalyzerPrompt(page);
  const response = await runClaude(prompt, `ANALYZER ${page.path}`);

  // Count total differences found
  // Look for "Total differences found: X" or "differences found: X" in response
  const diffMatch = response.match(/(?:total\s+)?differences\s+found:\s*(\d+)/i);
  const diffCount = diffMatch?.[1] ? parseInt(diffMatch[1]) : 0;

  // Also count "YES" entries in difference tables as backup
  const yesCount = (response.match(/\|\s*YES\s*\|/gi) || []).length;

  // Use whichever is higher
  const totalIssues = Math.max(diffCount, yesCount);

  // Success ONLY if zero differences found
  const success = totalIssues === 0 && response.includes("DONE");

  return { success, issues: totalIssues, response: response.trim() };
}

// =============================================================================
// CREATOR
// =============================================================================

async function buildCreatorPrompt(page: Page, analyzerResponse: string): Promise<string> {
  // Reload template fresh (allows hot-reload of prompts)
  const template = await Bun.file(CREATOR_PROMPT_PATH).text();
  const slug = getSlug(page);
  let prompt = template
    .replace(/\{\{PAGE_NAME\}\}/g, page.name)
    .replace(/\{\{PAGE_PATH\}\}/g, page.path)
    .replace(/\{\{PAGE_SLUG\}\}/g, slug);

  // Append analyzer findings
  prompt += `\n\n---\n\n## 🔍 ANALYZER FINDINGS\n\nThe analyzer compared original vs clone and found these issues. FIX ALL OF THEM:\n\n${analyzerResponse}`;

  return prompt;
}

async function runCreator(page: Page, analyzerResponse: string): Promise<string> {
  const prompt = await buildCreatorPrompt(page, analyzerResponse);
  const response = await runClaude(prompt, `CREATOR ${page.path}`);
  return response.trim();
}

// =============================================================================
// PIPELINE
// =============================================================================

type PageResult = {
  success: boolean;
  lastResponse: string;
  totalTime: number;
  attempts: number;
  issues: number;
};

async function processPage(page: Page): Promise<PageResult> {
  const pageStart = Date.now();
  const slug = getSlug(page);

  logSection(`PAGE: ${page.path} (${page.name})`);

  let lastResponse = "";
  let lastIssues = 0;

  // Run up to MAX_RETRIES iterations of Analyzer → Creator
  // Only stop early if Analyzer finds ZERO differences
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    // Step 1: Analyzer - find ALL differences
    log(`  [${timestamp()}] 🔍 Analyzer: Comparing (iteration ${attempt}/${MAX_RETRIES})...`);
    const stepStart = Date.now();
    const analyzeResult = await runAnalyzer(page);
    lastResponse = analyzeResult.response;
    lastIssues = analyzeResult.issues;
    log(`  [${timestamp()}] 🔍 Analyzer: Done (${formatDuration(Date.now() - stepStart)}) - ${analyzeResult.issues} differences found`);

    // If ZERO differences found - we're done!
    if (analyzeResult.issues === 0) {
      const totalTime = Date.now() - pageStart;
      if (attempt === 1) {
        log(`  [${timestamp()}] ✅ PERFECT MATCH - No differences on first check!`);
      } else {
        log(`  [${timestamp()}] ✅ SUCCESS - All differences fixed after ${attempt} iterations!`);
      }
      logStream.push(`\nRESULT: SUCCESS after ${attempt} iteration(s) (${formatDuration(totalTime)})`);
      return { success: true, lastResponse, totalTime, attempts: attempt, issues: 0 };
    }

    // Differences found - run Creator to fix them
    log(`  [${timestamp()}] 🔨 Creator: Fixing ${analyzeResult.issues} differences...`);
    const createStart = Date.now();
    await runCreator(page, analyzeResult.response);
    log(`  [${timestamp()}] 🔨 Creator: Done (${formatDuration(Date.now() - createStart)})`);
    logStream.push(`\nITERATION ${attempt}: ${analyzeResult.issues} differences → Creator`);
  }

  // After all iterations, report final status
  const totalTime = Date.now() - pageStart;
  log(`  [${timestamp()}] ⚠️ INCOMPLETE after ${MAX_RETRIES} iterations (${lastIssues} differences remaining)`);
  logStream.push(`\nRESULT: INCOMPLETE - ${lastIssues} differences after ${MAX_RETRIES} iterations (${formatDuration(totalTime)})`);
  return { success: false, lastResponse, totalTime, attempts: MAX_RETRIES, issues: lastIssues };
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  const mainStart = Date.now();

  // Count total pages
  let totalPages = 0;
  for (const category of categories) {
    totalPages += (pages[category] || []).length;
  }

  console.log(`
╔══════════════════════════════════════════════════════════════╗
║              PAGE CLONING PIPELINE                           ║
║                                                              ║
║  🔍 Analyzer (diff) → 🔨 Creator (fix) → loop                ║
╚══════════════════════════════════════════════════════════════╝
`);

  console.log(`🚀 Processing ${totalPages} pages...`);
  console.log(`📝 Log file: ${logFile}`);
  console.log(`📁 Specs dir: ${SPECS_DIR}/`);
  console.log(`🔄 Max attempts: ${MAX_RETRIES}`);
  console.log(`Started at ${timestamp()}`);
  console.log("─".repeat(60));

  logSection(`RUN STARTED: ${new Date().toISOString()}`);
  logStream.push(`Total pages: ${totalPages}`);
  logStream.push(`Max retries: ${MAX_RETRIES}`);

  const results: (PageResult & { page: Page })[] = [];
  let pageNum = 0;

  for (const category of categories) {
    const categoryPages = pages[category] || [];
    console.log(`\n📁 ${category.toUpperCase()} (${categoryPages.length} pages)\n`);

    for (const page of categoryPages) {
      pageNum++;
      console.log(`\n[${pageNum}/${totalPages}] ${page.path} (${page.name})`);
      console.log("─".repeat(40));
      const result = await processPage(page);
      results.push({ page, ...result });
    }
  }

  // Summary
  const totalTime = Date.now() - mainStart;
  const succeeded = results.filter((r) => r.success);
  const incomplete = results.filter((r) => !r.success);

  console.log("\n" + "═".repeat(60));
  console.log("📊 SUMMARY");
  console.log("═".repeat(60));

  console.log(`\n⏱️  Total time: ${formatDuration(totalTime)}`);
  console.log(`📄 Pages processed: ${results.length}`);
  console.log(`✅ Perfect match: ${succeeded.length}`);
  console.log(`⚠️  Incomplete: ${incomplete.length}`);

  if (results.length > 0) {
    const avgTime = totalTime / results.length;
    console.log(`⏳ Average per page: ${formatDuration(avgTime)}`);
  }

  if (succeeded.length > 0) {
    console.log(`\n✅ Perfect match (${succeeded.length}):`);
    for (const r of succeeded) {
      console.log(`   ${r.page.path} (${formatDuration(r.totalTime)}, ${r.attempts} attempt${r.attempts > 1 ? 's' : ''})`);
    }
  }

  if (incomplete.length > 0) {
    console.log(`\n⚠️  Incomplete (${incomplete.length}):`);
    for (const r of incomplete) {
      console.log(`   ${r.page.path} (${r.issues} issues remaining after ${r.attempts} attempts)`);
      // Show summary of remaining issues
      const issuesSummary = r.lastResponse.split("\n")
        .filter(line => line.includes("❌") || line.includes("🔴"))
        .slice(0, 5)
        .join("\n");
      if (issuesSummary) {
        console.log(`      ${issuesSummary.replace(/\n/g, "\n      ")}`);
      }
    }
  }

  // Log summary
  logSection("SUMMARY");
  logStream.push(`Total time: ${formatDuration(totalTime)}`);
  logStream.push(`Pages processed: ${results.length}`);
  logStream.push(`Perfect match: ${succeeded.length}`);
  logStream.push(`Incomplete: ${incomplete.length}`);
  if (results.length > 0) {
    logStream.push(`Average per page: ${formatDuration(totalTime / results.length)}`);
  }

  // Write results to file
  await Bun.write(
    "pages-status.json",
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        logFile,
        totalTime,
        stats: {
          total: results.length,
          succeeded: succeeded.length,
          incomplete: incomplete.length,
        },
        succeeded: succeeded.map((r) => ({
          ...r.page,
          time: r.totalTime,
          attempts: r.attempts,
        })),
        incomplete: incomplete.map((r) => ({
          ...r.page,
          time: r.totalTime,
          attempts: r.attempts,
          remainingIssues: r.issues,
          lastResponse: r.lastResponse,
        })),
      },
      null,
      2
    )
  );

  // Final flush
  await flushLog();

  console.log("\n📁 Results: pages-status.json");
  console.log(`📝 Full log: ${logFile}`);
  console.log(`\nFinished at ${timestamp()}`);
}

main().catch(console.error);
