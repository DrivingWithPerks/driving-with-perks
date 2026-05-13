import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { leads } from "../drizzle/schema";
import { eq, and, desc, sql, isNull } from "drizzle-orm";

export const leadsPublicRouter = router({
  // Public: list available leads for marketplace
  listAvailable: publicProcedure
    .input(
      z.object({
        tier: z.enum(["tier1", "tier2", "tier3"]).optional(),
        limit: z.number().min(1).max(100).default(50),
        offset: z.number().min(0).default(0),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return { leads: [], total: 0 };

      const conditions: any[] = [isNull(leads.routedTo)];

      if (input.tier) {
        conditions.push(eq(leads.qualityTier, input.tier as any));
      }

      const where = and(...conditions);

      const [rows, countRows] = await Promise.all([
        db
          .select()
          .from(leads)
          .where(where)
          .orderBy(desc(leads.createdAt))
          .limit(input.limit)
          .offset(input.offset),
        db
          .select({ count: sql<number>`count(*)` })
          .from(leads)
          .where(where),
      ]);

      return {
        leads: rows.map((lead) => ({
          id: lead.id,
          firstName: lead.firstName,
          lastName: lead.lastName,
          email: lead.email,
          phone: lead.phone,
          creditScoreRange: lead.creditScoreRange,
          monthlyIncome: lead.monthlyIncome,
          vehicleType: lead.vehicleType,
          city: lead.city,
          qualityTier: lead.qualityTier,
          qualityScore: lead.qualityScore,
          createdAt: lead.createdAt,
        })),
        total: Number(countRows[0]?.count ?? 0),
      };
    }),

  // Public: get lead count by tier
  countByTier: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return { tier1: 0, tier2: 0, tier3: 0 };

    const rows = await db
      .select({ tier: leads.qualityTier, count: sql<number>`count(*)` })
      .from(leads)
      .where(isNull(leads.routedTo))
      .groupBy(leads.qualityTier);

    const map: Record<string, number> = {};
    for (const r of rows) {
      if (r.tier) {
        map[r.tier] = Number(r.count);
      }
    }

    return {
      tier1: map["tier1"] ?? 0,
      tier2: map["tier2"] ?? 0,
      tier3: map["tier3"] ?? 0,
    };
  }),
});

export type LeadsPublicRouter = typeof leadsPublicRouter;
