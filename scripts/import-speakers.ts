/**
 * Import speakers from CSV to MD files
 * Run: bun scripts/import-speakers.ts
 */

import { join } from "path";

const CSV_PATH = "/Users/roman/Downloads/Telegram Desktop/Health_Samurai_official_Speakers_678a7ca8797116494dc1ebab.csv";
const SPEAKERS_DIR = join(import.meta.dir, "../speakers");

// Simple CSV parser for this specific format
function parseCSV(content: string): Record<string, string>[] {
  const lines = content.split("\n");
  const headers = parseCSVLine(lines[0]);
  const result: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = parseCSVLine(lines[i]);
    const row: Record<string, string> = {};
    headers.forEach((h, idx) => {
      row[h] = values[idx] || "";
    });
    result.push(row);
  }

  return result;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

// Strip HTML tags and convert to plain text
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

// Clean role text (remove zero-width characters)
function cleanRole(role: string): string {
  return role
    .replace(/\u200D/g, "") // Remove zero-width joiner
    .replace(/\u200B/g, "") // Remove zero-width space
    .trim();
}

async function main() {
  // Create speakers directory
  await Bun.$`mkdir -p ${SPEAKERS_DIR}`.quiet();

  // Read CSV
  const csvContent = await Bun.file(CSV_PATH).text();
  const speakers = parseCSV(csvContent);

  console.log(`Found ${speakers.length} speakers`);

  for (const speaker of speakers) {
    const slug = speaker.Slug;
    const name = speaker.Name;
    const avatar = speaker.ava;
    const role = cleanRole(speaker.role);
    const bioHtml = speaker.bio;
    const bioText = stripHtml(bioHtml);

    const frontmatter = {
      name,
      role,
      avatar,
    };

    const mdContent = `---
${JSON.stringify(frontmatter, null, 2)}
---

${bioText}
`;

    const filePath = join(SPEAKERS_DIR, `${slug}.md`);
    await Bun.write(filePath, mdContent);
    console.log(`Created: ${slug}.md`);
  }

  console.log(`\nDone! Created ${speakers.length} speaker files in speakers/`);
}

main().catch(console.error);
