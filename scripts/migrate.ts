#!/usr/bin/env bun
import { runMigrations, rollback, createMigration, showStatus } from "../src/migrate";

const command = process.argv[2];
const arg = process.argv[3];

switch (command) {
  case "create":
    if (!arg) {
      console.error("Usage: bun scripts/migrate.ts create <migration-name>");
      process.exit(1);
    }
    await createMigration(arg);
    break;
  case "up":
  case "run":
    await runMigrations();
    break;
  case "down":
  case "rollback":
    await rollback(arg ? parseInt(arg) : 1);
    break;
  case "status":
    await showStatus();
    break;
  default:
    console.log(`
Database Migrations

Usage:
  bun scripts/migrate.ts create <name>   Create new migration files
  bun scripts/migrate.ts up              Run pending migrations
  bun scripts/migrate.ts down [count]    Rollback last migration(s)
  bun scripts/migrate.ts status          Show migration status
`);
    process.exit(1);
}
