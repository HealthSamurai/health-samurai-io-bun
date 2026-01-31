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
    max: 20, // Maximum concurrent connections
    idleTimeout: 30, // Close idle connections after 30 seconds
    maxLifetime: 3600, // Maximum connection lifetime (1 hour)
    connectionTimeout: 10, // Connection establishment timeout (10 seconds)
  });
}

// Default database instance
export const db = createConnection();
