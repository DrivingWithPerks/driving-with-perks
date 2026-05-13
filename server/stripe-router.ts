import { z } from "zod";
import { protectedProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import Stripe from "stripe";
import { getPriceInCents } from "./stripe-products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export const stripeRouter = router({
  // Create checkout session for lead purchases
  createCheckoutSession: protectedProcedure
    .input(
      z.object({
        leadIds: z.array(z.number()).min(1, "At least one lead is required"),
        origin: z.string().url(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      // Calculate total price
      let totalPrice = 0;
      const lineItems: any[] = [];

      // For now, create a single line item for the purchase
      // In production, you'd fetch actual lead details and group by tier
      const totalLeads = input.leadIds.length;
      const avgPrice = Math.round((totalLeads * 5000) / totalLeads); // Average $50 per lead

      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: `Automotive Leads (${totalLeads} leads)`,
            description: `Purchase ${totalLeads} high-quality automotive leads from Driving with Perks`,
          },
          unit_amount: avgPrice,
        },
        quantity: 1,
      });

      totalPrice = avgPrice;

      try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: lineItems,
          mode: "payment",
          customer_email: ctx.user.email || undefined,
          success_url: `${input.origin}/dealer/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${input.origin}/dealer/marketplace`,
          allow_promotion_codes: true,
          client_reference_id: ctx.user.id.toString(),
          metadata: {
            user_id: ctx.user.id.toString(),
            customer_email: ctx.user.email || "",
            customer_name: ctx.user.name || "",
            lead_ids: input.leadIds.join(","),
            lead_count: totalLeads.toString(),
          },
        } as any);

        return {
          sessionId: session.id,
          url: session.url,
          totalPrice,
        };
      } catch (error: any) {
        console.error("Stripe checkout error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create checkout session",
        });
      }
    }),

  // Retrieve checkout session details
  getCheckoutSession: protectedProcedure
    .input(z.object({ sessionId: z.string() }))
    .query(async ({ input }) => {
      try {
        const session = await stripe.checkout.sessions.retrieve(input.sessionId);
        return {
          id: session.id,
          status: session.payment_status,
          amount_total: session.amount_total,
          currency: session.currency,
          customer_email: session.customer_email,
          payment_intent: session.payment_intent,
        };
      } catch (error: any) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Checkout session not found",
        });
      }
    }),

  // Get payment intent details
  getPaymentIntent: protectedProcedure
    .input(z.object({ paymentIntentId: z.string() }))
    .query(async ({ input }) => {
      try {
        const intent = await stripe.paymentIntents.retrieve(input.paymentIntentId);
        return {
          id: intent.id,
          status: intent.status,
          amount: intent.amount,
          currency: intent.currency,
          client_secret: intent.client_secret,
        };
      } catch (error: any) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Payment intent not found",
        });
      }
    }),
});

export type StripeRouter = typeof stripeRouter;
