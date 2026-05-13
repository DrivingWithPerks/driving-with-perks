import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { crmRouter } from "./crm.router";
import { leadsPublicRouter } from "./leads-public.router";
import { stripeRouter } from "./stripe-router";
import { smsSequencesRouter } from "./sms-sequences.router";
import {
  createLead,
  getLeads,
  getLeadById,
  updateLeadStatus,
  updateLeadNotes,
  getLeadStats,
} from "./db";
import { notifyOwner } from "./_core/notification";

// ─── Admin guard ─────────────────────────────────────────────────────────────
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx });
});

// ─── Lead input schema ───────────────────────────────────────────────────────
const leadInputSchema = z.object({
  source: z.enum(["general", "subprime", "prime"]).default("general"),
  // Step 1
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(7),
  dateOfBirth: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  // Step 2
  employmentStatus: z.string().optional(),
  employerName: z.string().optional(),
  jobTitle: z.string().optional(),
  yearsEmployed: z.string().optional(),
  // Step 3
  monthlyIncome: z.string().optional(),
  payFrequency: z.string().optional(),
  additionalIncome: z.string().optional(),
  // Step 4
  vehicleType: z.string().optional(),
  preferredMake: z.string().optional(),
  preferredModel: z.string().optional(),
  maxBudget: z.string().optional(),
  downPayment: z.string().optional(),
  tradeIn: z.string().optional(),
  // Step 5
  creditScoreRange: z.string().optional(),
  hasBankruptcy: z.string().optional(),
  bankruptcyDischargeDate: z.string().optional(),
  hasRepossession: z.string().optional(),
  hasCoApplicant: z.string().optional(),
  coApplicantName: z.string().optional(),
});

export const appRouter = router({
  system: systemRouter,
  crm: crmRouter,
  leadsPublic: leadsPublicRouter,
  stripe: stripeRouter,
  smsSequences: smsSequencesRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  leads: router({
    // Public: submit a new lead
    submit: publicProcedure.input(leadInputSchema).mutation(async ({ input }) => {
      const id = await createLead(input);

      const sourceLabel =
        input.source === "subprime"
          ? "Subprime"
          : input.source === "prime"
          ? "Prime"
          : "General";

      await notifyOwner({
        title: `New ${sourceLabel} Lead: ${input.firstName} ${input.lastName}`,
        content: `A new ${sourceLabel.toLowerCase()} lead has been submitted.\n\nName: ${input.firstName} ${input.lastName}\nEmail: ${input.email}\nPhone: ${input.phone}\nCredit Score Range: ${input.creditScoreRange ?? "Not provided"}\nMonthly Income: ${input.monthlyIncome ?? "Not provided"}\nVehicle Interest: ${input.vehicleType ?? "Not specified"}`,
      });

      return { success: true, id };
    }),

    // Admin: list leads with filters
    list: adminProcedure
      .input(
        z.object({
          status: z.string().optional(),
          source: z.string().optional(),
          search: z.string().optional(),
          limit: z.number().min(1).max(200).default(50),
          offset: z.number().min(0).default(0),
        })
      )
      .query(async ({ input }) => {
        return getLeads(input);
      }),

    // Admin: get a single lead
    get: adminProcedure.input(z.object({ id: z.number() })).query(async ({ input }) => {
      const lead = await getLeadById(input.id);
      if (!lead) throw new TRPCError({ code: "NOT_FOUND" });
      return lead;
    }),

    // Admin: update status
    updateStatus: adminProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["New", "Contacted", "Converted", "Archived"]),
        })
      )
      .mutation(async ({ input }) => {
        await updateLeadStatus(input.id, input.status);
        return { success: true };
      }),

    // Admin: update notes
    updateNotes: adminProcedure
      .input(z.object({ id: z.number(), adminNotes: z.string() }))
      .mutation(async ({ input }) => {
        await updateLeadNotes(input.id, input.adminNotes);
        return { success: true };
      }),

    // Admin: stats
    stats: adminProcedure.query(async () => {
      return getLeadStats();
    }),
  }),
});

export type AppRouter = typeof appRouter;

