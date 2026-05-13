import { Request, Response } from "express";
import Stripe from "stripe";
import { getDb } from "../db";
import { leadPurchases } from "../../drizzle/schema";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function handleStripeWebhook(req: Request, res: Response) {
  const sig = req.headers["stripe-signature"] as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle test events for verification
  if (event.id.startsWith("evt_test_")) {
    console.log("[Webhook] Test event detected, returning verification response");
    return res.json({ verified: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;

      case "payment_intent.succeeded":
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;

      case "payment_intent.payment_failed":
        await handlePaymentIntentFailed(event.data.object as Stripe.PaymentIntent);
        break;

      case "charge.refunded":
        await handleChargeRefunded(event.data.object as Stripe.Charge);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error: any) {
    console.error("Webhook processing error:", error);
    res.status(500).json({ error: "Webhook processing failed" });
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log("✓ Checkout session completed:", session.id);

  const metadata = session.metadata;
  if (!metadata?.user_id || !metadata?.lead_ids) {
    console.warn("Missing metadata in checkout session");
    return;
  }

  const db = await getDb();
  if (!db) {
    console.error("Database not available");
    return;
  }

  const userId = parseInt(metadata.user_id);
  const leadIds = metadata.lead_ids.split(",").map((id) => parseInt(id));
  const leadCount = parseInt(metadata.lead_count || "0");
  const amount = session.amount_total || 0;

  // Record lead purchases
  for (const leadId of leadIds) {
    try {
      await db.insert(leadPurchases).values({
        dealerId: userId,
        leadId,
        tier: "tier2", // Default tier - in production, fetch from lead data
        price: (amount / leadCount / 100).toFixed(2),
        status: "completed",
      });
    } catch (error) {
      console.error(`Failed to record lead purchase for lead ${leadId}:`, error);
    }
  }

  console.log(`Recorded ${leadIds.length} lead purchases for user ${userId}`);
}

async function handlePaymentIntentSucceeded(intent: Stripe.PaymentIntent) {
  console.log("✓ Payment intent succeeded:", intent.id);
  // Additional processing if needed
}

async function handlePaymentIntentFailed(intent: Stripe.PaymentIntent) {
  console.log("✗ Payment intent failed:", intent.id);
  console.log("Failure reason:", intent.last_payment_error?.message);
  // Log failure for analytics
}

async function handleChargeRefunded(charge: Stripe.Charge) {
  console.log("↩ Charge refunded:", charge.id);
  console.log("Refund amount:", charge.amount_refunded);

  // In production, update lead purchase status to "refunded"
  // and make leads available for purchase again
}
