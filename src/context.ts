import type { SQL } from "bun";
import type { UserRole } from "./types";

export interface SessionUser {
  id: number;
  email: string;
  username: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface Context {
  db: SQL;
  user?: SessionUser;
  serverId: string;
  devMode: boolean;
}

export const newContext = (db: SQL, serverId: string, devMode: boolean, user?: SessionUser): Context => {
  return { db, user, serverId, devMode };
};
