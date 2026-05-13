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

// ─── Dealer helpers ─────────────────────────────────────────────────────────

export async function createDealer(data: any): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const { dealers } = await import("../drizzle/schema");
  const result = await db.insert(dealers).values(data);
  return (result[0] as any).insertId as number;
}

export async function getDealerByEmail(email: string): Promise<any | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const { dealers } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  const result = await db.select().from(dealers).where(eq(dealers.email, email)).limit(1);
  return result[0];
}

export async function getDealerById(id: number): Promise<any | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const { dealers } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  const result = await db.select().from(dealers).where(eq(dealers.id, id)).limit(1);
  return result[0];
}

export async function updateDealerStatus(id: number, status: string): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const { dealers } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  await db.update(dealers).set({ status: status as any }).where(eq(dealers.id, id));
}

// ─── Email Sequence helpers ─────────────────────────────────────────────────

export async function createEmailSequence(data: any): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const { emailSequences } = await import("../drizzle/schema");
  const result = await db.insert(emailSequences).values(data);
  return (result[0] as any).insertId as number;
}

export async function getEmailSequencesByLead(leadId: number): Promise<any[]> {
  const db = await getDb();
  if (!db) return [];
  const { emailSequences } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  return db.select().from(emailSequences).where(eq(emailSequences.leadId, leadId));
}

export async function updateEmailSequenceStatus(id: number, status: string, sentAt?: Date): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const { emailSequences } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  const updateData: any = { status: status as any };
  if (sentAt) updateData.sentAt = sentAt;
  await db.update(emailSequences).set(updateData).where(eq(emailSequences.id, id));
}

// ─── SMS Sequence helpers ───────────────────────────────────────────────────

export async function createSmsSequence(data: any): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const { smsSequences } = await import("../drizzle/schema");
  const result = await db.insert(smsSequences).values(data);
  return (result[0] as any).insertId as number;
}

export async function getSmsSequencesByLead(leadId: number): Promise<any[]> {
  const db = await getDb();
  if (!db) return [];
  const { smsSequences } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  return db.select().from(smsSequences).where(eq(smsSequences.leadId, leadId));
}

export async function updateSmsSequenceStatus(id: number, status: string, sentAt?: Date): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const { smsSequences } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  const updateData: any = { status: status as any };
  if (sentAt) updateData.sentAt = sentAt;
  await db.update(smsSequences).set(updateData).where(eq(smsSequences.id, id));
}

// ─── Lead Purchase helpers ──────────────────────────────────────────────────

export async function createLeadPurchase(data: any): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const { leadPurchases } = await import("../drizzle/schema");
  const result = await db.insert(leadPurchases).values(data);
  return (result[0] as any).insertId as number;
}

export async function getLeadPurchasesByDealer(dealerId: number): Promise<any[]> {
  const db = await getDb();
  if (!db) return [];
  const { leadPurchases } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  return db.select().from(leadPurchases).where(eq(leadPurchases.dealerId, dealerId));
}

export async function getLeadPurchasesByLead(leadId: number): Promise<any[]> {
  const db = await getDb();
  if (!db) return [];
  const { leadPurchases } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  return db.select().from(leadPurchases).where(eq(leadPurchases.leadId, leadId));
}

// ─── Lead Analytics helpers ─────────────────────────────────────────────────

export async function getOrCreateDailyAnalytics(date: string): Promise<any> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const { leadAnalytics } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  
  const existing = await db.select().from(leadAnalytics).where(eq(leadAnalytics.date, date)).limit(1);
  if (existing.length > 0) return existing[0];
  
  const result = await db.insert(leadAnalytics).values({ date });
  const id = (result[0] as any).insertId as number;
  const created = await db.select().from(leadAnalytics).where(eq(leadAnalytics.id, id)).limit(1);
  return created[0]!;
}

export async function updateDailyAnalytics(date: string, data: any): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const { leadAnalytics } = await import("../drizzle/schema");
  const { eq } = await import("drizzle-orm");
  await db.update(leadAnalytics).set(data).where(eq(leadAnalytics.date, date));
}
