import { eq, desc, and, like, or, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, leads, InsertLead, Lead } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = { openId: user.openId };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) values.lastSignedIn = new Date();
    if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();

    await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ─── Lead helpers ────────────────────────────────────────────────────────────

export async function createLead(data: InsertLead): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(leads).values(data);
  return (result[0] as any).insertId as number;
}

export async function getLeads(opts: {
  status?: string;
  source?: string;
  search?: string;
  limit?: number;
  offset?: number;
}): Promise<{ leads: Lead[]; total: number }> {
  const db = await getDb();
  if (!db) return { leads: [], total: 0 };

  const conditions: any[] = [];
  if (opts.status && opts.status !== "all") {
    conditions.push(eq(leads.status, opts.status as any));
  }
  if (opts.source && opts.source !== "all") {
    conditions.push(eq(leads.source, opts.source as any));
  }
  if (opts.search) {
    const term = `%${opts.search}%`;
    conditions.push(
      or(
        like(leads.firstName, term),
        like(leads.lastName, term),
        like(leads.email, term),
        like(leads.phone, term)
      )
    );
  }

  const where = conditions.length > 0 ? and(...conditions) : undefined;

  const [rows, countRows] = await Promise.all([
    db
      .select()
      .from(leads)
      .where(where)
      .orderBy(desc(leads.createdAt))
      .limit(opts.limit ?? 50)
      .offset(opts.offset ?? 0),
    db
      .select({ count: sql<number>`count(*)` })
      .from(leads)
      .where(where),
  ]);

  return { leads: rows, total: Number(countRows[0]?.count ?? 0) };
}

export async function getLeadById(id: number): Promise<Lead | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(leads).where(eq(leads.id, id)).limit(1);
  return result[0];
}

export async function updateLeadStatus(
  id: number,
  status: "New" | "Contacted" | "Converted" | "Archived"
): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(leads).set({ status }).where(eq(leads.id, id));
}

export async function updateLeadNotes(id: number, notes: string): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(leads).set({ notes }).where(eq(leads.id, id));
}

export async function getLeadStats(): Promise<{
  total: number;
  newCount: number;
  contactedCount: number;
  convertedCount: number;
  archivedCount: number;
}> {
  const db = await getDb();
  if (!db) return { total: 0, newCount: 0, contactedCount: 0, convertedCount: 0, archivedCount: 0 };

  const rows = await db
    .select({ status: leads.status, count: sql<number>`count(*)` })
    .from(leads)
    .groupBy(leads.status);

  const map: Record<string, number> = {};
  for (const r of rows) map[r.status] = Number(r.count);

  return {
    total: Object.values(map).reduce((a, b) => a + b, 0),
    newCount: map["New"] ?? 0,
    contactedCount: map["Contacted"] ?? 0,
    convertedCount: map["Converted"] ?? 0,
    archivedCount: map["Archived"] ?? 0,
  };
}
