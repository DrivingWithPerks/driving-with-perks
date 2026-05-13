import { z } from "zod";
import { protectedProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import {
  createDealer,
  getDealerByEmail,
  getDealerById,
  updateDealerStatus,
  createEmailSequence,
  getEmailSequencesByLead,
  updateEmailSequenceStatus,
  createSmsSequence,
  getSmsSequencesByLead,
  updateSmsSequenceStatus,
  createLeadPurchase,
  getLeadPurchasesByDealer,
  getLeadPurchasesByLead,
  getOrCreateDailyAnalytics,
  updateDailyAnalytics,
} from "./db";

// ─── Admin guard ─────────────────────────────────────────────────────────────
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx });
});

export const crmRouter = router({
  // ─── Dealer Management ──────────────────────────────────────────────────────
  dealers: router({
    // Register a new dealer
    register: protectedProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().min(10),
          dealershipName: z.string().min(1),
          city: z.string().min(1),
          province: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        const existing = await getDealerByEmail(input.email);
        if (existing) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Dealer already registered",
          });
        }
        const id = await createDealer({
          ...input,
          status: "pending",
        });
        return { success: true, id };
      }),

    // Admin: approve dealer
    approve: adminProcedure
      .input(z.object({ dealerId: z.number() }))
      .mutation(async ({ input }) => {
        await updateDealerStatus(input.dealerId, "approved");
        return { success: true };
      }),

    // Admin: reject dealer
    reject: adminProcedure
      .input(z.object({ dealerId: z.number() }))
      .mutation(async ({ input }) => {
        await updateDealerStatus(input.dealerId, "rejected");
        return { success: true };
      }),

    // Get dealer profile
    getProfile: protectedProcedure
      .input(z.object({ dealerId: z.number() }))
      .query(async ({ input }) => {
        const dealer = await getDealerById(input.dealerId);
        if (!dealer) {
          throw new TRPCError({ code: "NOT_FOUND" });
        }
        return dealer;
      }),
  }),

  // ─── Email Automation ───────────────────────────────────────────────────────
  emailSequences: router({
    // Create email sequence for a lead
    create: adminProcedure
      .input(
        z.object({
          leadId: z.number(),
          sequenceType: z.enum(["immediate", "one_hour", "next_day", "weekly_nurture"]),
          emailTemplate: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        const id = await createEmailSequence({
          leadId: input.leadId,
          sequenceType: input.sequenceType,
          emailTemplate: input.emailTemplate,
          status: "pending",
        });
        return { success: true, id };
      }),

    // Get email sequences for a lead
    getByLead: adminProcedure
      .input(z.object({ leadId: z.number() }))
      .query(async ({ input }) => {
        return getEmailSequencesByLead(input.leadId);
      }),

    // Mark email as sent
    markSent: adminProcedure
      .input(z.object({ sequenceId: z.number() }))
      .mutation(async ({ input }) => {
        await updateEmailSequenceStatus(input.sequenceId, "sent", new Date());
        return { success: true };
      }),

    // Mark email as failed
    markFailed: adminProcedure
      .input(z.object({ sequenceId: z.number(), reason: z.string() }))
      .mutation(async ({ input }) => {
        // Note: failureReason not updated in this simplified version
        await updateEmailSequenceStatus(input.sequenceId, "failed");
        return { success: true };
      }),
  }),

  // ─── SMS Automation ─────────────────────────────────────────────────────────
  smsSequences: router({
    // Create SMS sequence for a lead
    create: adminProcedure
      .input(
        z.object({
          leadId: z.number(),
          sequenceType: z.enum(["immediate", "one_hour", "next_day", "weekly_nurture"]),
          messageTemplate: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        const id = await createSmsSequence({
          leadId: input.leadId,
          sequenceType: input.sequenceType,
          messageTemplate: input.messageTemplate,
          status: "pending",
        });
        return { success: true, id };
      }),

    // Get SMS sequences for a lead
    getByLead: adminProcedure
      .input(z.object({ leadId: z.number() }))
      .query(async ({ input }) => {
        return getSmsSequencesByLead(input.leadId);
      }),

    // Mark SMS as sent
    markSent: adminProcedure
      .input(z.object({ sequenceId: z.number() }))
      .mutation(async ({ input }) => {
        await updateSmsSequenceStatus(input.sequenceId, "sent", new Date());
        return { success: true };
      }),

    // Mark SMS as failed
    markFailed: adminProcedure
      .input(z.object({ sequenceId: z.number(), reason: z.string() }))
      .mutation(async ({ input }) => {
        await updateSmsSequenceStatus(input.sequenceId, "failed");
        return { success: true };
      }),
  }),

  // ─── Lead Marketplace ───────────────────────────────────────────────────────
  leadPurchases: router({
    // Create a lead purchase
    create: adminProcedure
      .input(
        z.object({
          dealerId: z.number(),
          leadId: z.number(),
          tier: z.enum(["tier1", "tier2", "tier3"]),
          price: z.number().positive(),
        })
      )
      .mutation(async ({ input }) => {
        const id = await createLeadPurchase({
          dealerId: input.dealerId,
          leadId: input.leadId,
          tier: input.tier,
          price: input.price.toString(),
          status: "pending",
        });
        return { success: true, id };
      }),

    // Get purchases by dealer
    getByDealer: protectedProcedure
      .input(z.object({ dealerId: z.number() }))
      .query(async ({ input }) => {
        return getLeadPurchasesByDealer(input.dealerId);
      }),

    // Get purchases for a lead
    getByLead: adminProcedure
      .input(z.object({ leadId: z.number() }))
      .query(async ({ input }) => {
        return getLeadPurchasesByLead(input.leadId);
      }),
  }),

  // ─── Analytics ──────────────────────────────────────────────────────────────
  analytics: router({
    // Get or create daily analytics
    getDaily: adminProcedure
      .input(z.object({ date: z.string() }))
      .query(async ({ input }) => {
        return getOrCreateDailyAnalytics(input.date);
      }),

    // Update daily analytics
    updateDaily: adminProcedure
      .input(
        z.object({
          date: z.string(),
          totalLeads: z.number().optional(),
          newLeads: z.number().optional(),
          contactedLeads: z.number().optional(),
          convertedLeads: z.number().optional(),
          tier1Leads: z.number().optional(),
          tier2Leads: z.number().optional(),
          tier3Leads: z.number().optional(),
          totalRevenue: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { date, ...data } = input;
        await updateDailyAnalytics(date, data);
        return { success: true };
      }),
  }),
});

export type CrmRouter = typeof crmRouter;
