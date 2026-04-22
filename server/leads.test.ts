import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock admin user
const adminUser = {
  id: 1,
  openId: "admin-user",
  email: "admin@example.com",
  name: "Admin User",
  loginMethod: "manus",
  role: "admin" as const,
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

// Mock regular user
const regularUser = {
  id: 2,
  openId: "regular-user",
  email: "user@example.com",
  name: "Regular User",
  loginMethod: "manus",
  role: "user" as const,
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

function createContext(user?: typeof adminUser | typeof regularUser): TrpcContext {
  return {
    user: user || null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as TrpcContext["res"],
  };
}

describe("leads.submit", () => {
  it("should submit a general lead successfully", async () => {
    const caller = appRouter.createCaller(createContext());

    const result = await caller.leads.submit({
      source: "general",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "(555) 123-4567",
      creditScoreRange: "poor",
      monthlyIncome: "$3,500",
      maxBudget: "$20,000",
    });

    expect(result.success).toBe(true);
    expect(result.id).toBeGreaterThan(0);
  });

  it("should submit a subprime lead successfully", async () => {
    const caller = appRouter.createCaller(createContext());

    const result = await caller.leads.submit({
      source: "subprime",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phone: "(555) 987-6543",
      hasBankruptcy: "yes",
      creditScoreRange: "very-poor",
    });

    expect(result.success).toBe(true);
    expect(result.id).toBeGreaterThan(0);
  });

  it("should submit a prime lead successfully", async () => {
    const caller = appRouter.createCaller(createContext());

    const result = await caller.leads.submit({
      source: "prime",
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob@example.com",
      phone: "(555) 456-7890",
      creditScoreRange: "excellent",
      monthlyIncome: "$8,000",
      maxBudget: "$50,000",
    });

    expect(result.success).toBe(true);
    expect(result.id).toBeGreaterThan(0);
  });

  it("should reject submission with invalid email", async () => {
    const caller = appRouter.createCaller(createContext());

    try {
      await caller.leads.submit({
        source: "general",
        firstName: "John",
        lastName: "Doe",
        email: "invalid-email",
        phone: "(555) 123-4567",
      });
      expect.fail("Should have thrown validation error");
    } catch (err: any) {
      expect(err.code).toBe("BAD_REQUEST");
    }
  });

  it("should reject submission with missing required fields", async () => {
    const caller = appRouter.createCaller(createContext());

    try {
      await caller.leads.submit({
        source: "general",
        firstName: "",
        lastName: "Doe",
        email: "john@example.com",
        phone: "(555) 123-4567",
      });
      expect.fail("Should have thrown validation error");
    } catch (err: any) {
      expect(err.code).toBe("BAD_REQUEST");
    }
  });
});

describe("leads.list (admin only)", () => {
  it("should allow admin to list leads", async () => {
    const caller = appRouter.createCaller(createContext(adminUser));

    const result = await caller.leads.list({});

    expect(result).toHaveProperty("leads");
    expect(result).toHaveProperty("total");
    expect(Array.isArray(result.leads)).toBe(true);
  });

  it("should reject non-admin from listing leads", async () => {
    const caller = appRouter.createCaller(createContext(regularUser));

    try {
      await caller.leads.list({});
      expect.fail("Should have thrown FORBIDDEN error");
    } catch (err: any) {
      expect(err.code).toBe("FORBIDDEN");
    }
  });

  it("should filter leads by status", async () => {
    const caller = appRouter.createCaller(createContext(adminUser));

    const result = await caller.leads.list({ status: "New" });

    expect(result).toHaveProperty("leads");
    expect(result.leads.every((lead: any) => lead.status === "New")).toBe(true);
  });

  it("should filter leads by source", async () => {
    const caller = appRouter.createCaller(createContext(adminUser));

    const result = await caller.leads.list({ source: "subprime" });

    expect(result).toHaveProperty("leads");
    expect(result.leads.every((lead: any) => lead.source === "subprime")).toBe(true);
  });

  it("should search leads by name", async () => {
    const caller = appRouter.createCaller(createContext(adminUser));

    const result = await caller.leads.list({ search: "John" });

    expect(result).toHaveProperty("leads");
    if (result.leads.length > 0) {
      expect(
        result.leads.some((lead: any) =>
          lead.firstName.toLowerCase().includes("john") ||
          lead.lastName.toLowerCase().includes("john") ||
          lead.email.toLowerCase().includes("john")
        )
      ).toBe(true);
    }
  });
});

describe("leads.updateStatus (admin only)", () => {
  it("should allow admin to update lead status", async () => {
    const caller = appRouter.createCaller(createContext(adminUser));

    // First, create a lead
    const submitCaller = appRouter.createCaller(createContext());
    const leadResult = await submitCaller.leads.submit({
      source: "general",
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      phone: "(555) 111-1111",
    });

    // Then update its status
    const updateResult = await caller.leads.updateStatus({
      id: leadResult.id,
      status: "Contacted",
    });

    expect(updateResult.success).toBe(true);
  });

  it("should reject non-admin from updating status", async () => {
    const caller = appRouter.createCaller(createContext(regularUser));

    try {
      await caller.leads.updateStatus({
        id: 1,
        status: "Contacted",
      });
      expect.fail("Should have thrown FORBIDDEN error");
    } catch (err: any) {
      expect(err.code).toBe("FORBIDDEN");
    }
  });

  it("should support all valid status values", async () => {
    const caller = appRouter.createCaller(createContext(adminUser));
    const submitCaller = appRouter.createCaller(createContext());

    const leadResult = await submitCaller.leads.submit({
      source: "general",
      firstName: "Status",
      lastName: "Test",
      email: "status@example.com",
      phone: "(555) 222-2222",
    });

    const statuses: Array<"New" | "Contacted" | "Converted" | "Archived"> = [
      "New",
      "Contacted",
      "Converted",
      "Archived",
    ];

    for (const status of statuses) {
      const result = await caller.leads.updateStatus({
        id: leadResult.id,
        status,
      });
      expect(result.success).toBe(true);
    }
  });
});

describe("leads.updateNotes (admin only)", () => {
  it("should allow admin to update lead notes", async () => {
    const caller = appRouter.createCaller(createContext(adminUser));
    const submitCaller = appRouter.createCaller(createContext());

    const leadResult = await submitCaller.leads.submit({
      source: "general",
      firstName: "Notes",
      lastName: "Test",
      email: "notes@example.com",
      phone: "(555) 333-3333",
    });

    const updateResult = await caller.leads.updateNotes({
      id: leadResult.id,
      adminNotes: "This is a test note",
    });

    expect(updateResult.success).toBe(true);
  });

  it("should reject non-admin from updating notes", async () => {
    const caller = appRouter.createCaller(createContext(regularUser));

    try {
      await caller.leads.updateNotes({
        id: 1,
        adminNotes: "Test",
      });
      expect.fail("Should have thrown FORBIDDEN error");
    } catch (err: any) {
      expect(err.code).toBe("FORBIDDEN");
    }
  });
});

describe("leads.stats (admin only)", () => {
  it("should allow admin to get lead stats", async () => {
    const caller = appRouter.createCaller(createContext(adminUser));

    const result = await caller.leads.stats();

    expect(result).toHaveProperty("total");
    expect(result).toHaveProperty("newCount");
    expect(result).toHaveProperty("contactedCount");
    expect(result).toHaveProperty("convertedCount");
    expect(result).toHaveProperty("archivedCount");
    expect(typeof result.total).toBe("number");
  });

  it("should reject non-admin from getting stats", async () => {
    const caller = appRouter.createCaller(createContext(regularUser));

    try {
      await caller.leads.stats();
      expect.fail("Should have thrown FORBIDDEN error");
    } catch (err: any) {
      expect(err.code).toBe("FORBIDDEN");
    }
  });
});
