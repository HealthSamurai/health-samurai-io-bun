#!/usr/bin/env bun
/**
 * Lighthouse Performance Analysis Script
 *
 * Usage:
 *   bun skills/pagespeed/lighthouse.ts <url>
 *   bun skills/pagespeed/lighthouse.ts http://localhost:4444
 *   bun skills/pagespeed/lighthouse.ts https://site-dev.apki.dev --desktop
 *
 * Options:
 *   --desktop    Run desktop preset (default is mobile)
 *   --html       Also generate HTML report
 *   --json       Output raw JSON (for piping to jq)
 *
 * Prerequisites:
 *   - Chrome/Chromium installed
 *   - lighthouse CLI: bun add -g lighthouse
 */

import { $ } from "bun";

interface LighthouseResult {
  url: string;
  fetchTime: string;
  device: "mobile" | "desktop";
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  metrics: {
    FCP: string;
    LCP: string;
    TBT: string;
    CLS: string;
    SI: string;
    TTI: string;
  };
  issues: Array<{
    id: string;
    title: string;
    score: number;
    savings: string | null;
  }>;
}

function formatScore(score: number): string {
  if (score >= 90) return `\x1b[32m${score}\x1b[0m`; // Green
  if (score >= 50) return `\x1b[33m${score}\x1b[0m`; // Yellow
  return `\x1b[31m${score}\x1b[0m`; // Red
}

function parseArgs(): { url: string; desktop: boolean; html: boolean; json: boolean } {
  const args = process.argv.slice(2);
  const url = args.find(a => !a.startsWith("--")) || "";
  return {
    url,
    desktop: args.includes("--desktop"),
    html: args.includes("--html"),
    json: args.includes("--json"),
  };
}

async function runLighthouse(url: string, desktop: boolean): Promise<LighthouseResult> {
  const timestamp = Date.now();
  const outputPath = `/tmp/lighthouse-${timestamp}.json`;

  const presetFlag = desktop ? "--preset=desktop" : "";

  // Run lighthouse
  await $`lighthouse ${url} --output=json --output-path=${outputPath} --chrome-flags="--headless=new" ${presetFlag} --only-categories=performance,accessibility,best-practices,seo --quiet`.quiet();

  // Read and parse results
  const file = Bun.file(outputPath);
  const data = await file.json();

  // Extract scores
  const scores = {
    performance: Math.round((data.categories.performance?.score || 0) * 100),
    accessibility: Math.round((data.categories.accessibility?.score || 0) * 100),
    bestPractices: Math.round((data.categories["best-practices"]?.score || 0) * 100),
    seo: Math.round((data.categories.seo?.score || 0) * 100),
  };

  // Extract metrics
  const metrics = {
    FCP: data.audits["first-contentful-paint"]?.displayValue || "N/A",
    LCP: data.audits["largest-contentful-paint"]?.displayValue || "N/A",
    TBT: data.audits["total-blocking-time"]?.displayValue || "N/A",
    CLS: data.audits["cumulative-layout-shift"]?.displayValue || "N/A",
    SI: data.audits["speed-index"]?.displayValue || "N/A",
    TTI: data.audits["interactive"]?.displayValue || "N/A",
  };

  // Extract failing audits
  const issues = Object.entries(data.audits)
    .filter(([_, audit]: [string, any]) => {
      return audit.score !== null && audit.score < 1 && audit.score >= 0;
    })
    .map(([id, audit]: [string, any]) => ({
      id,
      title: audit.title,
      score: audit.score,
      savings: audit.displayValue || null,
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 15);

  // Cleanup
  await $`rm -f ${outputPath}`.quiet();

  return {
    url: data.finalDisplayedUrl || url,
    fetchTime: data.fetchTime,
    device: desktop ? "desktop" : "mobile",
    scores,
    metrics,
    issues,
  };
}

function printResults(result: LighthouseResult): void {
  console.log("\n" + "=".repeat(60));
  console.log(`Lighthouse Analysis: ${result.url}`);
  console.log(`Device: ${result.device.toUpperCase()}`);
  console.log(`Time: ${new Date(result.fetchTime).toLocaleString()}`);
  console.log("=".repeat(60));

  // Scores
  console.log("\n\x1b[1mScores:\x1b[0m");
  console.log(`  Performance        ${formatScore(result.scores.performance)}`);
  console.log(`  Accessibility      ${formatScore(result.scores.accessibility)}`);
  console.log(`  Best Practices     ${formatScore(result.scores.bestPractices)}`);
  console.log(`  SEO                ${formatScore(result.scores.seo)}`);

  // Metrics
  console.log("\n\x1b[1mCore Web Vitals:\x1b[0m");
  console.log(`  First Contentful Paint (FCP)    ${result.metrics.FCP}`);
  console.log(`  Largest Contentful Paint (LCP)  ${result.metrics.LCP}`);
  console.log(`  Total Blocking Time (TBT)       ${result.metrics.TBT}`);
  console.log(`  Cumulative Layout Shift (CLS)   ${result.metrics.CLS}`);
  console.log(`  Speed Index                     ${result.metrics.SI}`);
  console.log(`  Time to Interactive             ${result.metrics.TTI}`);

  // Issues
  if (result.issues.length > 0) {
    console.log("\n\x1b[1mIssues to Fix:\x1b[0m");
    for (const issue of result.issues) {
      const scoreColor = issue.score < 0.5 ? "\x1b[31m" : "\x1b[33m";
      const savings = issue.savings ? ` (${issue.savings})` : "";
      console.log(`  ${scoreColor}•\x1b[0m ${issue.title}${savings}`);
    }
  }

  console.log("\n" + "=".repeat(60));
}

async function main(): Promise<void> {
  const { url, desktop, html, json } = parseArgs();

  if (!url) {
    console.error("Usage: bun skills/pagespeed/lighthouse.ts <url> [--desktop] [--html] [--json]");
    console.error("");
    console.error("Examples:");
    console.error("  bun skills/pagespeed/lighthouse.ts http://localhost:4444");
    console.error("  bun skills/pagespeed/lighthouse.ts https://site-dev.apki.dev --desktop");
    console.error("  bun skills/pagespeed/lighthouse.ts http://localhost:4444 --json | jq '.scores'");
    process.exit(1);
  }

  if (!json) {
    console.log(`Running Lighthouse on ${url} (${desktop ? "desktop" : "mobile"})...`);
  }

  try {
    const result = await runLighthouse(url, desktop);

    if (json) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      printResults(result);

      // Save JSON report
      const hostname = new URL(url).hostname.replace(/[^a-z0-9]/gi, "-");
      const outputFile = `lighthouse-${hostname}-${result.device}-${Date.now()}.json`;
      await Bun.write(outputFile, JSON.stringify(result, null, 2));
      console.log(`Results saved to: ${outputFile}`);
    }
  } catch (error) {
    console.error("Error running Lighthouse:", error);
    process.exit(1);
  }
}

main();
