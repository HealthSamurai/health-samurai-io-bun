#!/usr/bin/env bun
/**
 * PageSpeed Insights Analysis Script
 *
 * Usage: bun skills/pagespeed/analyze.ts <url>
 *
 * Prerequisites:
 * 1. Chrome headless: google-chrome --headless=new --remote-debugging-port=9222
 * 2. CDP server: cd /Users/niquola/chromoi && bun src/index.js
 */

const CDP_URL = "http://localhost:2229/cdp";
const PAGESPEED_URL = "https://pagespeed.web.dev/";

async function cdp(method: string, params: Record<string, unknown> = {}): Promise<unknown> {
  const res = await fetch(CDP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ method, params }),
  });
  return res.json();
}

async function evaluate(expression: string): Promise<unknown> {
  const result = await cdp("Runtime.evaluate", { expression }) as { result?: { value?: unknown } };
  return result?.result?.value;
}

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForAnalysis(maxWaitMs = 120000): Promise<boolean> {
  const startTime = Date.now();
  while (Date.now() - startTime < maxWaitMs) {
    const isLoading = await evaluate('document.body.innerText.includes("Analyzing") || document.body.innerText.includes("Выполняется анализ")');
    if (!isLoading) return true;
    await sleep(3000);
    process.stdout.write(".");
  }
  return false;
}

interface Score {
  label: string;
  score: string;
}

interface Metric {
  name: string;
  value: string;
}

interface Audit {
  title: string;
  display: string;
}

interface Results {
  url: string;
  timestamp: string;
  mobile: {
    scores: Score[];
    metrics: Metric[];
    issues: Audit[];
  };
  desktop: {
    scores: Score[];
    metrics: Metric[];
    issues: Audit[];
  };
}

async function extractResults(device: "mobile" | "desktop"): Promise<{ scores: Score[]; metrics: Metric[]; issues: Audit[] }> {
  // Click the appropriate tab
  const tabSelector = device === "desktop"
    ? '[...document.querySelectorAll("[role=tab]")].find(t => t.textContent.includes("Desktop") || t.textContent.includes("Компьютер"))?.click()'
    : '[...document.querySelectorAll("[role=tab]")].find(t => t.textContent.includes("Mobile") || t.textContent.includes("Мобильн"))?.click()';

  await evaluate(tabSelector);
  await sleep(1000);

  // Extract scores
  const scoresJson = await evaluate(`JSON.stringify([...document.querySelectorAll('.lh-gauge__wrapper')].slice(0,4).map(g => ({label: g.querySelector('.lh-gauge__label')?.textContent, score: g.querySelector('.lh-gauge__percentage')?.textContent})))`) as string;
  const scores: Score[] = JSON.parse(scoresJson || "[]");

  // Extract metrics
  const metricsJson = await evaluate(`JSON.stringify([...document.querySelectorAll('.lh-metric')].slice(0,5).map(m => ({name: m.querySelector('.lh-metric__title')?.textContent, value: m.querySelector('.lh-metric__value')?.textContent})))`) as string;
  const metrics: Metric[] = JSON.parse(metricsJson || "[]");

  // Extract failed/warning audits
  const issuesJson = await evaluate(`JSON.stringify([...document.querySelectorAll('.lh-audit--fail, .lh-audit--average')].map(a => ({title: a.querySelector('.lh-audit__title')?.textContent?.trim(), display: a.querySelector('.lh-audit__display-text')?.textContent?.trim()})))`) as string;
  const issues: Audit[] = JSON.parse(issuesJson || "[]");

  return { scores, metrics, issues };
}

function formatScore(score: string): string {
  const num = parseInt(score);
  if (num >= 90) return `\x1b[32m${score}\x1b[0m`; // Green
  if (num >= 50) return `\x1b[33m${score}\x1b[0m`; // Yellow
  return `\x1b[31m${score}\x1b[0m`; // Red
}

function printResults(results: Results): void {
  console.log("\n" + "=".repeat(60));
  console.log(`PageSpeed Analysis: ${results.url}`);
  console.log(`Timestamp: ${results.timestamp}`);
  console.log("=".repeat(60));

  for (const device of ["mobile", "desktop"] as const) {
    const data = results[device];
    console.log(`\n\x1b[1m${device.toUpperCase()}\x1b[0m`);
    console.log("-".repeat(40));

    // Scores
    console.log("\nScores:");
    for (const s of data.scores) {
      if (s.label && s.score) {
        console.log(`  ${s.label.padEnd(20)} ${formatScore(s.score)}`);
      }
    }

    // Metrics
    console.log("\nCore Web Vitals:");
    for (const m of data.metrics) {
      if (m.name && m.value) {
        console.log(`  ${m.name.padEnd(30)} ${m.value}`);
      }
    }

    // Issues (deduplicated)
    const uniqueIssues = data.issues.filter((issue, index, self) =>
      index === self.findIndex(i => i.title === issue.title)
    );

    if (uniqueIssues.length > 0) {
      console.log("\nIssues to Fix:");
      for (const issue of uniqueIssues) {
        if (issue.title) {
          const savings = issue.display ? ` (${issue.display})` : "";
          console.log(`  • ${issue.title}${savings}`);
        }
      }
    }
  }

  console.log("\n" + "=".repeat(60));
}

async function main(): Promise<void> {
  const url = process.argv[2];

  if (!url) {
    console.error("Usage: bun skills/pagespeed/analyze.ts <url>");
    console.error("Example: bun skills/pagespeed/analyze.ts https://site-dev.apki.dev");
    process.exit(1);
  }

  // Check CDP server
  try {
    await cdp("Runtime.evaluate", { expression: "1" });
  } catch (e) {
    console.error("Error: CDP server not responding at localhost:2229");
    console.error("Make sure Chrome headless and CDP server are running.");
    process.exit(1);
  }

  console.log(`Analyzing: ${url}`);

  // Navigate to PageSpeed
  await cdp("Page.navigate", { url: PAGESPEED_URL });
  await sleep(3000);

  // Enter URL
  await evaluate(`
    const input = document.querySelector('input[name=url]');
    input.value = '${url}';
    input.dispatchEvent(new Event('input', {bubbles: true}));
  `);
  await sleep(500);

  // Click analyze button
  await evaluate(`[...document.querySelectorAll('button')].find(b => b.textContent.includes('Analyze') || b.textContent.includes('Анализ')).click()`);

  // Wait for analysis
  process.stdout.write("Analyzing");
  const success = await waitForAnalysis();
  console.log(" done!");

  if (!success) {
    console.error("Analysis timed out");
    process.exit(1);
  }

  await sleep(2000);

  // Extract results
  const results: Results = {
    url,
    timestamp: new Date().toISOString(),
    mobile: await extractResults("mobile"),
    desktop: await extractResults("desktop"),
  };

  // Print formatted results
  printResults(results);

  // Also save JSON
  const outputFile = `pagespeed-${new URL(url).hostname}-${Date.now()}.json`;
  await Bun.write(outputFile, JSON.stringify(results, null, 2));
  console.log(`\nResults saved to: ${outputFile}`);
}

main().catch(console.error);
