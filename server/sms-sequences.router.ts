import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import {
  createSmsSequence,
  getSmsSequencesByLead,
  updateSmsSequenceStatus,
} from "./db";

export const smsSequencesRouter = router({
  // Create SMS sequence for a lead
  createSequence: publicProcedure
    .input(
      z.object({
        leadId: z.number(),
        phone: z.string(),
        firstName: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const sequence = await createSmsSequence({
        leadId: input.leadId,
        phone: input.phone,
        firstName: input.firstName,
        status: "active",
      });

      return sequence;
    }),

  // Get SMS sequences for a lead
  getSequencesForLead: protectedProcedure
    .input(z.object({ leadId: z.number() }))
    .query(async ({ input }) => {
      const sequences = await getSmsSequencesByLead(input.leadId);
      return sequences;
    }),

  // Update sequence status
  updateSequenceStatus: protectedProcedure
    .input(
      z.object({
        sequenceId: z.number(),
        status: z.enum(["active", "paused", "completed"]),
      })
    )
    .mutation(async ({ input }) => {
      const updated = await updateSmsSequenceStatus(
        input.sequenceId,
        input.status
      );
      return updated;
    }),

  // Send SMS message (Day 1, Day 3, Day 7)
  sendSMS: protectedProcedure
    .input(
      z.object({
        sequenceId: z.number(),
        dayNumber: z.enum(["day1", "day3", "day7"]),
        phone: z.string(),
        firstName: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const messages: Record<string, string> = {
        day1: `Hi ${input.firstName}! Thanks for your interest in Driving with Perks. We're reviewing your application and will be in touch within 24 hours.`,
        day3: `${input.firstName}, great news! We have a special offer just for you - limited time only. Reply YES to learn more!`,
        day7: `Last chance, ${input.firstName}! Your special financing offer expires today. Reply NOW to get approved!`,
      };

      const messageText = messages[input.dayNumber];

      // In production, integrate with Twilio or similar SMS provider
      console.log(`[SMS] To: ${input.phone}, Message: ${messageText}`);

      return {
        success: true,
        message: `SMS sent to ${input.phone}`,
        messageText,
      };
    }),
});
