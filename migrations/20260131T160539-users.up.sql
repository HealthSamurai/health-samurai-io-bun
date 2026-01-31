-- Migration: users
-- Create users table for authentication

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT,
  first_name TEXT,
  last_name TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  is_active BOOLEAN DEFAULT true,
  google_id TEXT UNIQUE,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_google_id ON users(google_id);

-- Insert admin user (password: admin123)
-- Hash generated with: await Bun.password.hash("admin123")
INSERT INTO users (email, username, password_hash, first_name, last_name, role, is_active)
VALUES ('admin@health-samurai.io', 'admin', '$argon2id$v=19$m=65536,t=2,p=1$eG9uaWNzYWx0MTIzNDU2$vYwPmJkj9qZKIBqQZ7s1gx0nE+8h8Kq3sHv5F3dNqKs', 'Admin', 'User', 'admin', true);
