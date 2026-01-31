#!/usr/bin/env bun
import { SQL } from "bun";

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL environment variable is required");
  process.exit(1);
}

const db = new SQL(DATABASE_URL);

async function run(query: string) {
  try {
    const result = await db.unsafe(query);
    if (Array.isArray(result) && result.length > 0) {
      console.table(result);
    } else if (result) {
      console.log(result);
    } else {
      console.log("Query executed successfully");
    }
  } catch (error: any) {
    console.error("Error:", error.message);
    process.exit(1);
  }
  process.exit(0);
}

// Get query from argument or stdin
const query = process.argv.slice(2).join(" ");

if (query) {
  await run(query);
} else {
  // Read from stdin
  const decoder = new TextDecoder();
  let input = "";
  for await (const chunk of Bun.stdin.stream()) {
    input += decoder.decode(chunk, { stream: true });
  }
  input += decoder.decode();
  input = input.trim();
  if (input) {
    await run(input);
  } else {
    console.log(`
SQL Query Runner

Usage:
  bun scripts/sql.ts "SELECT * FROM users"
  echo "SELECT * FROM users" | bun scripts/sql.ts
  bun scripts/sql.ts < query.sql

Examples:
  bun scripts/sql.ts "SELECT * FROM form_submissions"
  bun scripts/sql.ts "SELECT count(*) FROM form_submissions WHERE form_type = 'contact'"
`);
    process.exit(1);
  }
}
