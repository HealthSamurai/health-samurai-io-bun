import { SQL } from "bun";

// Parse DATABASE_URL or use environment variables
function parseConnectionString() {
  const url = process.env.DATABASE_URL;
  if (url) {
    const parsed = new URL(url);
    return {
      hostname: parsed.hostname,
      port: parseInt(parsed.port) || 5432,
      database: parsed.pathname.slice(1), // Remove leading /
      username: parsed.username,
      password: parsed.password,
    };
  }

  // Defaults matching docker-compose.yml
  return {
    hostname: process.env.POSTGRES_HOST || "localhost",
    port: parseInt(process.env.POSTGRES_PORT || "5436"),
    database: process.env.POSTGRES_DB || "healthsamurai",
    username: process.env.POSTGRES_USER || "healthsamurai",
    password: process.env.POSTGRES_PASSWORD || "healthsamurai",
  };
}

export const DB_CONFIG = parseConnectionString();

// Create a database connection with connection pooling
export function createConnection() {
  return new SQL({
    hostname: DB_CONFIG.hostname,
    port: DB_CONFIG.port,
    database: DB_CONFIG.database,
    username: DB_CONFIG.username,
    password: DB_CONFIG.password,
    // Connection pool configuration
    max: 10, // Maximum concurrent connections
    idleTimeout: 0, // Don't close idle connections (0 = keep alive)
    maxLifetime: 0, // No max lifetime (0 = forever)
    connectionTimeout: 30, // Connection establishment timeout
  });
}

// Default database instance
export const db = createConnection();

// Warm up the connection pool on module load
db`SELECT 1`.catch(() => {
  console.error("[DB] Failed to warm up connection pool");
});
