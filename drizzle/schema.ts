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
  adminNotes: text("adminNotes"),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
