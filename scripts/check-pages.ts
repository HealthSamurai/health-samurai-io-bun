#!/usr/bin/env bun
/**
 * Page Cloning Pipeline
 *
 * For each page:
 * 1. Designer: Analyze original, create spec, download images
 * 2. Creator: Implement page from spec
 * 3. Validator: Check implementation against spec
 * 4. If FAIL: Loop back to Creator with issues (up to MAX_RETRIES)
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

// Load prompt templates
const designerPromptTemplate = await Bun.file(import.meta.dir + "/../prompts/designer.md").text();
const creatorPromptTemplate = await Bun.file(import.meta.dir + "/../prompts/creator.md").text();
const validatorPromptTemplate = await Bun.file(import.meta.dir + "/../prompts/validator.md").text();

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
// DESIGNER
// =============================================================================

function buildDesignerPrompt(page: Page): string {
  const slug = getSlug(page);
  return designerPromptTemplate
    .replace(/\{\{PAGE_NAME\}\}/g, page.name)
    .replace(/\{\{PAGE_PATH\}\}/g, page.path)
    .replace(/\{\{PAGE_SLUG\}\}/g, slug);
}

async function runDesigner(page: Page): Promise<{ success: boolean; response: string }> {
  const prompt = buildDesignerPrompt(page);
  const response = await runClaude(prompt, `DESIGNER ${page.path}`);
  const success = response.trim().toUpperCase().includes("DONE");
  return { success, response: response.trim() };
}

// =============================================================================
// CREATOR
// =============================================================================

function buildCreatorPrompt(page: Page, issues?: string): string {
  const slug = getSlug(page);
  let prompt = creatorPromptTemplate
    .replace(/\{\{PAGE_NAME\}\}/g, page.name)
    .replace(/\{\{PAGE_PATH\}\}/g, page.path)
    .replace(/\{\{PAGE_SLUG\}\}/g, slug);

  if (issues) {
    prompt += `\n\n---\n\n## ⚠️ FIX THESE ISSUES\n\nThe validator found the following problems. You MUST fix them:\n\n${issues}`;
  }

  return prompt;
}

async function runCreator(page: Page, issues?: string): Promise<{ success: boolean; response: string }> {
  const prompt = buildCreatorPrompt(page, issues);
  const label = issues ? `CREATOR (fix) ${page.path}` : `CREATOR ${page.path}`;
  const response = await runClaude(prompt, label);
  const success = response.trim().toUpperCase().includes("DONE");
  return { success, response: response.trim() };
}

// =============================================================================
// VALIDATOR
// =============================================================================

function buildValidatorPrompt(page: Page): string {
  const slug = getSlug(page);
  return validatorPromptTemplate
    .replace(/\{\{PAGE_NAME\}\}/g, page.name)
    .replace(/\{\{PAGE_PATH\}\}/g, page.path)
    .replace(/\{\{PAGE_SLUG\}\}/g, slug);
}

async function runValidator(page: Page): Promise<{ success: boolean; response: string }> {
  const prompt = buildValidatorPrompt(page);
  const response = await runClaude(prompt, `VALIDATOR ${page.path}`);
  const success = response.trim().toUpperCase().includes("SUCCESS");
  return { success, response: response.trim() };
}

// =============================================================================
// PIPELINE
// =============================================================================

type PageResult = {
  success: boolean;
  lastResponse: string;
  totalTime: number;
  designTime: number;
  attempts: number;
};

async function processPage(page: Page): Promise<PageResult> {
  const pageStart = Date.now();
  const slug = getSlug(page);

  logSection(`PAGE: ${page.path} (${page.name})`);

  // Step 1: Designer
  log(`  [${timestamp()}] 🎨 Designer: Analyzing original page...`);
  let stepStart = Date.now();
  const designResult = await runDesigner(page);
  const designTime = Date.now() - stepStart;
  log(`  [${timestamp()}] 🎨 Designer: Done (${formatDuration(designTime)})`);

  if (!designResult.success) {
    log(`  [${timestamp()}] ❌ Designer failed to create spec`);
    return {
      success: false,
      lastResponse: designResult.response,
      totalTime: Date.now() - pageStart,
      designTime,
      attempts: 0,
    };
  }

  // Step 2: Creator (initial)
  log(`  [${timestamp()}] 🔨 Creator: Implementing from spec...`);
  stepStart = Date.now();
  await runCreator(page);
  log(`  [${timestamp()}] 🔨 Creator: Done (${formatDuration(Date.now() - stepStart)})`);

  // Step 3: Validator with retry loop
  let lastResponse = "";
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    log(`  [${timestamp()}] ✅ Validator: Checking (attempt ${attempt}/${MAX_RETRIES})...`);
    stepStart = Date.now();
    const validateResult = await runValidator(page);
    lastResponse = validateResult.response;
    log(`  [${timestamp()}] ✅ Validator: Done (${formatDuration(Date.now() - stepStart)})`);

    if (validateResult.success) {
      const totalTime = Date.now() - pageStart;
      log(`  [${timestamp()}] ✅ SUCCESS (total: ${formatDuration(totalTime)})`);
      logStream.push(`\nRESULT: SUCCESS in ${formatDuration(totalTime)} after ${attempt} attempt(s)`);
      return { success: true, lastResponse, totalTime, designTime, attempts: attempt };
    }

    if (attempt < MAX_RETRIES) {
      log(`  [${timestamp()}] ⚠️ Issues found, sending back to Creator...`);
      logStream.push(`\nATTEMPT ${attempt} FAILED - Issues:`);
      logStream.push(validateResult.response);

      stepStart = Date.now();
      await runCreator(page, validateResult.response);
      log(`  [${timestamp()}] 🔨 Creator: Fixed (${formatDuration(Date.now() - stepStart)})`);
    }
  }

  const totalTime = Date.now() - pageStart;
  log(`  [${timestamp()}] ❌ FAILED after ${MAX_RETRIES} attempts (total: ${formatDuration(totalTime)})`);
  logStream.push(`\nRESULT: FAILED after ${MAX_RETRIES} attempts (${formatDuration(totalTime)})`);
  return { success: false, lastResponse, totalTime, designTime, attempts: MAX_RETRIES };
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
║  Designer → Creator → Validator → (retry loop)              ║
╚══════════════════════════════════════════════════════════════╝
`);

  console.log(`🚀 Processing ${totalPages} pages...`);
  console.log(`📝 Log file: ${logFile}`);
  console.log(`📁 Specs dir: ${SPECS_DIR}/`);
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
  const failed = results.filter((r) => !r.success);

  console.log("\n" + "═".repeat(60));
  console.log("📊 SUMMARY");
  console.log("═".repeat(60));

  console.log(`\n⏱️  Total time: ${formatDuration(totalTime)}`);
  console.log(`📄 Pages processed: ${results.length}`);
  console.log(`✅ Succeeded: ${succeeded.length}`);
  console.log(`❌ Failed: ${failed.length}`);

  if (results.length > 0) {
    const avgTime = totalTime / results.length;
    console.log(`⏳ Average per page: ${formatDuration(avgTime)}`);
  }

  if (succeeded.length > 0) {
    console.log(`\n✅ Succeeded (${succeeded.length}):`);
    for (const r of succeeded) {
      console.log(`   ${r.page.path} (${formatDuration(r.totalTime)}, ${r.attempts} attempt${r.attempts > 1 ? 's' : ''})`);
    }
  }

  if (failed.length > 0) {
    console.log(`\n❌ Failed (${failed.length}):`);
    for (const r of failed) {
      console.log(`   ${r.page.path} (${formatDuration(r.totalTime)})`);
      // Show last validation response for failed pages
      const summary = r.lastResponse.split("\n").slice(0, 8).join("\n");
      console.log(`      ${summary.replace(/\n/g, "\n      ")}\n`);
    }
  }

  // Log summary
  logSection("SUMMARY");
  logStream.push(`Total time: ${formatDuration(totalTime)}`);
  logStream.push(`Pages processed: ${results.length}`);
  logStream.push(`Succeeded: ${succeeded.length}`);
  logStream.push(`Failed: ${failed.length}`);
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
          failed: failed.length,
        },
        succeeded: succeeded.map((r) => ({
          ...r.page,
          time: r.totalTime,
          designTime: r.designTime,
          attempts: r.attempts,
        })),
        failed: failed.map((r) => ({
          ...r.page,
          time: r.totalTime,
          designTime: r.designTime,
          attempts: r.attempts,
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
