import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),

  // Source tracking
  source: mysqlEnum("source", ["general", "subprime", "prime"]).default("general").notNull(),
  status: mysqlEnum("status", ["New", "Contacted", "Converted", "Archived"]).default("New").notNull(),

  // Step 1: Personal Information
  firstName: varchar("firstName", { length: 100 }).notNull(),
  lastName: varchar("lastName", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 30 }).notNull(),
  dateOfBirth: varchar("dateOfBirth", { length: 20 }),
  address: text("address"),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 50 }),
  zipCode: varchar("zipCode", { length: 20 }),

  // Step 2: Employment Details
  employmentStatus: varchar("employmentStatus", { length: 50 }),
  employerName: varchar("employerName", { length: 150 }),
  jobTitle: varchar("jobTitle", { length: 100 }),
  yearsEmployed: varchar("yearsEmployed", { length: 20 }),

  // Step 3: Income Information
  monthlyIncome: varchar("monthlyIncome", { length: 30 }),
  payFrequency: varchar("payFrequency", { length: 30 }),
  additionalIncome: varchar("additionalIncome", { length: 30 }),

  // Step 4: Vehicle Preference
  vehicleType: varchar("vehicleType", { length: 50 }),
  preferredMake: varchar("preferredMake", { length: 100 }),
  preferredModel: varchar("preferredModel", { length: 100 }),
  maxBudget: varchar("maxBudget", { length: 30 }),
  downPayment: varchar("downPayment", { length: 30 }),
  tradeIn: varchar("tradeIn", { length: 10 }),

  // Step 5: Credit Situation
  creditScoreRange: varchar("creditScoreRange", { length: 50 }),
  hasBankruptcy: varchar("hasBankruptcy", { length: 10 }),
  bankruptcyDischargeDate: varchar("bankruptcyDischargeDate", { length: 30 }),
  hasRepossession: varchar("hasRepossession", { length: 10 }),
  hasCoApplicant: varchar("hasCoApplicant", { length: 10 }),
  coApplicantName: varchar("coApplicantName", { length: 200 }),

  // Admin notes
  notes: text("notes"),
  // Lead qualification scoring
  qualityTier: mysqlEnum("qualityTier", ["tier1", "tier2", "tier3"]).default("tier1"),
  qualityScore: int("qualityScore").default(0),
  // Lead routing
  routedTo: varchar("routedTo", { length: 255 }),
  routedAt: timestamp("routedAt"),
  routedPrice: decimal("routedPrice", { precision: 10, scale: 2 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;

// Email automation sequences
export const emailSequences = mysqlTable("emailSequences", {
  id: int("id").autoincrement().primaryKey(),
  leadId: int("leadId").notNull(),
  sequenceType: mysqlEnum("sequenceType", ["immediate", "one_hour", "next_day", "weekly_nurture"]).notNull(),
  emailTemplate: varchar("emailTemplate", { length: 100 }).notNull(),
  status: mysqlEnum("status", ["pending", "sent", "failed", "bounced"]).default("pending").notNull(),
  sentAt: timestamp("sentAt"),
  failureReason: text("failureReason"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type EmailSequence = typeof emailSequences.$inferSelect;
export type InsertEmailSequence = typeof emailSequences.$inferInsert;

// SMS automation sequences
export const smsSequences = mysqlTable("smsSequences", {
  id: int("id").autoincrement().primaryKey(),
  leadId: int("leadId").notNull(),
  sequenceType: mysqlEnum("sequenceType", ["immediate", "one_hour", "next_day", "weekly_nurture"]).notNull(),
  messageTemplate: varchar("messageTemplate", { length: 160 }).notNull(),
  status: mysqlEnum("status", ["pending", "sent", "failed", "bounced"]).default("pending").notNull(),
  sentAt: timestamp("sentAt"),
  failureReason: text("failureReason"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SmsSequence = typeof smsSequences.$inferSelect;
export type InsertSmsSequence = typeof smsSequences.$inferInsert;

// Dealer marketplace
export const dealers = mysqlTable("dealers", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  phone: varchar("phone", { length: 30 }).notNull(),
  dealershipName: varchar("dealershipName", { length: 255 }).notNull(),
  city: varchar("city", { length: 100 }).notNull(),
  province: varchar("province", { length: 50 }).notNull(),
  status: mysqlEnum("status", ["pending", "approved", "rejected", "suspended"]).default("pending").notNull(),
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  totalLeadsPurchased: int("totalLeadsPurchased").default(0),
  totalSpent: decimal("totalSpent", { precision: 12, scale: 2 }).default("0"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Dealer = typeof dealers.$inferSelect;
export type InsertDealer = typeof dealers.$inferInsert;

// Lead purchases by dealers
export const leadPurchases = mysqlTable("leadPurchases", {
  id: int("id").autoincrement().primaryKey(),
  dealerId: int("dealerId").notNull(),
  leadId: int("leadId").notNull(),
  tier: mysqlEnum("tier", ["tier1", "tier2", "tier3"]).notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  status: mysqlEnum("status", ["pending", "completed", "failed", "refunded"]).default("pending").notNull(),
  stripePaymentIntentId: varchar("stripePaymentIntentId", { length: 255 }),
  purchasedAt: timestamp("purchasedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type LeadPurchase = typeof leadPurchases.$inferSelect;
export type InsertLeadPurchase = typeof leadPurchases.$inferInsert;

// Lead analytics
export const leadAnalytics = mysqlTable("leadAnalytics", {
  id: int("id").autoincrement().primaryKey(),
  date: varchar("date", { length: 20 }).notNull(), // YYYY-MM-DD format
  totalLeads: int("totalLeads").default(0),
  newLeads: int("newLeads").default(0),
  contactedLeads: int("contactedLeads").default(0),
  convertedLeads: int("convertedLeads").default(0),
  tier1Leads: int("tier1Leads").default(0),
  tier2Leads: int("tier2Leads").default(0),
  tier3Leads: int("tier3Leads").default(0),
  totalRevenue: decimal("totalRevenue", { precision: 12, scale: 2 }).default("0"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type LeadAnalytic = typeof leadAnalytics.$inferSelect;
export type InsertLeadAnalytic = typeof leadAnalytics.$inferInsert;
