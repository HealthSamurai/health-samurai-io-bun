import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { SQL } from "bun";

const MIGRATIONS_DIR = path.join(import.meta.dir, "..", "migrations");

function createConnection() {
  return new SQL({
    hostname: process.env.POSTGRES_HOST || "localhost",
    port: parseInt(process.env.POSTGRES_PORT || "5436"),
    username: process.env.POSTGRES_USER || "healthsamurai",
    password: process.env.POSTGRES_PASSWORD || "healthsamurai",
    database: process.env.POSTGRES_DB || "healthsamurai",
  });
}

export async function initMigrationsTable(sql: SQL) {
  await sql`
    CREATE TABLE IF NOT EXISTS migrations (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

export async function getExecutedMigrations(sql: SQL): Promise<Set<string>> {
  const result = await sql`SELECT name FROM migrations ORDER BY executed_at`;
  return new Set(result.map((row: any) => row.name));
}

export async function getMigrationFiles(): Promise<string[]> {
  if (!existsSync(MIGRATIONS_DIR)) {
    return [];
  }

  const files = await readdir(MIGRATIONS_DIR);
  return files
    .filter((f) => f.endsWith(".up.sql"))
    .map((f) => f.replace(".up.sql", ""))
    .sort();
}

export async function runMigration(sql: SQL, name: string, silent = false) {
  const upPath = path.join(MIGRATIONS_DIR, `${name}.up.sql`);
  const upSQL = await Bun.file(upPath).text();

  if (!silent) console.log(`Running migration: ${name}`);

  try {
    await sql.unsafe(upSQL);
    await sql`INSERT INTO migrations (name) VALUES (${name})`;
    if (!silent) console.log(`  Migration ${name} completed`);
  } catch (error) {
    console.error(`  Migration ${name} failed:`, error);
    throw error;
  }
}

export async function rollbackMigration(sql: SQL, name: string) {
  const downPath = path.join(MIGRATIONS_DIR, `${name}.down.sql`);

  if (!existsSync(downPath)) {
    console.error(`  No down migration found for: ${name}`);
    return;
  }

  const downSQL = await Bun.file(downPath).text();
  console.log(`Rolling back migration: ${name}`);

  try {
    await sql.unsafe(downSQL);
    await sql`DELETE FROM migrations WHERE name = ${name}`;
    console.log(`  Rollback ${name} completed`);
  } catch (error) {
    console.error(`  Rollback ${name} failed:`, error);
    throw error;
  }
}

export async function runMigrations(options: { silent?: boolean } = {}) {
  const sql = createConnection();
  const { silent = false } = options;

  try {
    await initMigrationsTable(sql);

    const executed = await getExecutedMigrations(sql);
    const available = await getMigrationFiles();
    const pending = available.filter((name) => !executed.has(name));

    if (pending.length === 0) {
      if (!silent) console.log("No pending migrations");
      return;
    }

    if (!silent) console.log(`Found ${pending.length} pending migration(s)\n`);

    for (const name of pending) {
      await runMigration(sql, name, silent);
    }

    if (!silent) console.log("\nAll migrations completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    throw error;
  } finally {
    await sql.close();
  }
}

export async function rollback(count: number = 1) {
  const sql = createConnection();

  try {
    await initMigrationsTable(sql);

    const result = await sql`
      SELECT name FROM migrations
      ORDER BY executed_at DESC
      LIMIT ${count}
    `;

    if (result.length === 0) {
      console.log("No migrations to rollback");
      return;
    }

    console.log(`Rolling back ${result.length} migration(s)\n`);

    for (const row of result) {
      await rollbackMigration(sql, row.name);
    }

    console.log("\nRollback completed successfully");
  } catch (error) {
    console.error("Rollback failed:", error);
    throw error;
  } finally {
    await sql.close();
  }
}

export async function createMigration(name: string) {
  if (!existsSync(MIGRATIONS_DIR)) {
    await Bun.$`mkdir -p ${MIGRATIONS_DIR}`;
  }

  const timestamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0];
  const fileName = `${timestamp}-${name}`;

  const upPath = path.join(MIGRATIONS_DIR, `${fileName}.up.sql`);
  const downPath = path.join(MIGRATIONS_DIR, `${fileName}.down.sql`);

  await Bun.write(upPath, `-- Migration: ${name}\n\n`);
  await Bun.write(downPath, `-- Rollback: ${name}\n\n`);

  console.log(`Created migration files:`);
  console.log(`  ${fileName}.up.sql`);
  console.log(`  ${fileName}.down.sql`);
}

export async function showStatus() {
  const sql = createConnection();

  try {
    await initMigrationsTable(sql);

    const executed = await getExecutedMigrations(sql);
    const available = await getMigrationFiles();

    console.log("\nMigration Status:");
    console.log("=================\n");

    if (available.length === 0) {
      console.log("No migrations found");
      return;
    }

    for (const name of available) {
      const status = executed.has(name) ? "[x]" : "[ ]";
      console.log(`${status} ${name}`);
    }

    console.log(`\nTotal: ${available.length} migrations, ${executed.size} executed, ${available.length - executed.size} pending`);
  } catch (error) {
    console.error("Status check failed:", error);
    throw error;
  } finally {
    await sql.close();
  }
}
