import { test, expect, describe } from "bun:test";
import type { Context, SessionUser } from "../src/context";
import { createSession, destroySession, getSession } from "../src/middleware/session";

type FakeUser = {
  id: number;
  email: string;
  username: string;
  role: string;
  avatar_url?: string | null;
};

type SessionRow = {
  data: string | SessionUser;
  expires_at: Date;
};

function makeFakeDb(users: FakeUser[]) {
  const userMap = new Map<number, FakeUser>(users.map((u) => [u.id, u]));
  const sessions = new Map<string, SessionRow>();

  const sql = async (strings: TemplateStringsArray, ...values: unknown[]) => {
    const query = strings.join("?").toLowerCase();

    if (query.includes("insert into user_sessions")) {
      const [sessionId, userId, data, expiresAt] = values as [string, number, string, Date];
      sessions.set(sessionId, {
        data,
        expires_at: new Date(expiresAt),
      });
      return [];
    }

    if (query.includes("delete from user_sessions")) {
      const sessionId = String(values[0]);
      sessions.delete(sessionId);
      return [];
    }

    if (query.includes("from users") && query.includes("where id =")) {
      const id = Number(values[0]);
      const user = userMap.get(id);
      return user ? [user] : [];
    }

    if (query.includes("from user_sessions") && query.includes("where id =")) {
      const sessionId = String(values[0]);
      const row = sessions.get(sessionId);
      if (!row) return [];
      if (row.expires_at.getTime() <= Date.now()) return [];
      return [row];
    }

    throw new Error(`Unhandled query in fake db: ${query}`);
  };

  return {
    sql,
    sessions,
  };
}

function makeCtx(db: Context["db"]): Context {
  return { db };
}

describe("session middleware with ctx", () => {
  test("getSession returns undefined without cookie", async () => {
    const fake = makeFakeDb([]);
    const ctx = makeCtx(fake.sql as Context["db"]);
    const req = new Request("http://localhost");

    const session = await getSession(ctx, req);
    expect(session).toBeUndefined();
  });

  test("createSession and getSession round-trip", async () => {
    const fake = makeFakeDb([
      { id: 1, email: "user@example.com", username: "user", role: "USER" },
    ]);
    const ctx = makeCtx(fake.sql as Context["db"]);

    const sessionId = await createSession(ctx, 1);
    const req = new Request("http://localhost", {
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    });

    const session = await getSession(ctx, req);
    expect(session).toBeDefined();
    expect(session?.id).toBe(1);
    expect(session?.email).toBe("user@example.com");
  });

  test("destroySession removes session", async () => {
    const fake = makeFakeDb([
      { id: 2, email: "user2@example.com", username: "user2", role: "USER" },
    ]);
    const ctx = makeCtx(fake.sql as Context["db"]);
    const sessionId = await createSession(ctx, 2);

    await destroySession(ctx, sessionId);

    const req = new Request("http://localhost", {
      headers: {
        Cookie: `session_id=${sessionId}`,
      },
    });

    const session = await getSession(ctx, req);
    expect(session).toBeUndefined();
  });
});
