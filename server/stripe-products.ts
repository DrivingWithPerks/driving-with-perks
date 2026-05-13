/**
 * Stripe Products and Pricing Configuration
 * Define lead tier products for dealer marketplace
 */

export const LEAD_PRODUCTS = {
  TIER_1: {
    name: "Standard Lead",
    description: "Standard quality automotive lead - Credit score 500-600",
    price: 2500, // $25 in cents
    tier: "tier1",
    stripe_price_id: process.env.STRIPE_PRICE_TIER1 || "price_tier1_placeholder",
  },
  TIER_2: {
    name: "Premium Lead",
    description: "Premium quality automotive lead - Credit score 600-700",
    price: 5000, // $50 in cents
    tier: "tier2",
    stripe_price_id: process.env.STRIPE_PRICE_TIER2 || "price_tier2_placeholder",
  },
  TIER_3: {
    name: "Elite Lead",
    description: "Elite quality automotive lead - Credit score 700+",
    price: 7500, // $75 in cents
    tier: "tier3",
    stripe_price_id: process.env.STRIPE_PRICE_TIER3 || "price_tier3_placeholder",
  },
};

export const PRODUCT_TIER_MAP: Record<string, (typeof LEAD_PRODUCTS)[keyof typeof LEAD_PRODUCTS]> = {
  tier1: LEAD_PRODUCTS.TIER_1,
  tier2: LEAD_PRODUCTS.TIER_2,
  tier3: LEAD_PRODUCTS.TIER_3,
};

export function getPriceInCents(tier: "tier1" | "tier2" | "tier3"): number {
  const product = PRODUCT_TIER_MAP[tier];
  return product?.price || 0;
}

export function getPriceInDollars(tier: "tier1" | "tier2" | "tier3"): number {
  return getPriceInCents(tier) / 100;
}
