import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { DollarSign, Users, TrendingUp, ShoppingCart } from "lucide-react";

interface Lead {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  creditScoreRange: string;
  monthlyIncome: string;
  vehicleType: string;
  qualityTier: "tier1" | "tier2" | "tier3";
  qualityScore: number;
}

const TIER_PRICES: Record<string, number> = {
  tier1: 25,
  tier2: 50,
  tier3: 75,
};

const TIER_LABELS: Record<string, string> = {
  tier1: "Standard",
  tier2: "Premium",
  tier3: "Elite",
};

export function DealerDashboard() {
  const { data: user } = trpc.auth.me.useQuery();
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);
  const [availableLeads, setAvailableLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in production, fetch from API
  useEffect(() => {
    // Simulate fetching available leads
    const mockLeads: Lead[] = [
      {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        email: "john@example.com",
        phone: "(555) 123-4567",
        creditScoreRange: "550-600",
        monthlyIncome: "$3,500",
        vehicleType: "SUV",
        qualityTier: "tier2",
        qualityScore: 75,
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@example.com",
        phone: "(555) 234-5678",
        creditScoreRange: "600-650",
        monthlyIncome: "$4,200",
        vehicleType: "Sedan",
        qualityTier: "tier3",
        qualityScore: 85,
      },
      {
        id: 3,
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob@example.com",
        phone: "(555) 345-6789",
        creditScoreRange: "500-550",
        monthlyIncome: "$2,800",
        vehicleType: "Truck",
        qualityTier: "tier1",
        qualityScore: 60,
      },
    ];
    setAvailableLeads(mockLeads);
  }, []);

  const handleSelectLead = (leadId: number) => {
    setSelectedLeads((prev) =>
      prev.includes(leadId) ? prev.filter((id) => id !== leadId) : [...prev, leadId]
    );
  };

  const calculateTotal = () => {
    return selectedLeads.reduce((total, leadId) => {
      const lead = availableLeads.find((l) => l.id === leadId);
      if (!lead) return total;
      return total + TIER_PRICES[lead.qualityTier];
    }, 0);
  };

  const handlePurchase = async () => {
    if (selectedLeads.length === 0) {
      toast.error("Please select at least one lead");
      return;
    }

    setIsLoading(true);
    try {
      // In production, integrate with Stripe
      toast.success(`Purchased ${selectedLeads.length} leads for $${calculateTotal()}`);
      setSelectedLeads([]);
    } catch (error: any) {
      toast.error(error.message || "Purchase failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dealer Dashboard</h1>
          <p className="text-gray-600 mt-2">Browse and purchase high-quality automotive leads</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-gray-500 mt-1">Available for purchase</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Leads Purchased</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$650</div>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg. Lead Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-gray-500 mt-1">Quality score</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="leads" className="space-y-4">
          <TabsList>
            <TabsTrigger value="leads">Available Leads</TabsTrigger>
            <TabsTrigger value="history">Purchase History</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Available Leads Tab */}
          <TabsContent value="leads" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Leads List */}
              <div className="lg:col-span-2 space-y-4">
                {availableLeads.map((lead) => (
                  <Card
                    key={lead.id}
                    className={`cursor-pointer transition-all ${
                      selectedLeads.includes(lead.id)
                        ? "ring-2 ring-blue-500 bg-blue-50"
                        : "hover:shadow-md"
                    }`}
                    onClick={() => handleSelectLead(lead.id)}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">
                              {lead.firstName} {lead.lastName}
                            </h3>
                            <Badge variant="outline">{TIER_LABELS[lead.qualityTier]}</Badge>
                            <Badge className="bg-blue-600">
                              ${TIER_PRICES[lead.qualityTier]}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
                            <div>
                              <p className="font-medium">Credit Score</p>
                              <p>{lead.creditScoreRange}</p>
                            </div>
                            <div>
                              <p className="font-medium">Monthly Income</p>
                              <p>{lead.monthlyIncome}</p>
                            </div>
                            <div>
                              <p className="font-medium">Vehicle Interest</p>
                              <p>{lead.vehicleType}</p>
                            </div>
                            <div>
                              <p className="font-medium">Quality Score</p>
                              <p>{lead.qualityScore}%</p>
                            </div>
                          </div>

                          <div className="flex gap-2 mt-4 text-sm">
                            <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                              {lead.email}
                            </a>
                            <span className="text-gray-400">•</span>
                            <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">
                              {lead.phone}
                            </a>
                          </div>
                        </div>

                        <div className="ml-4">
                          <input
                            type="checkbox"
                            checked={selectedLeads.includes(lead.id)}
                            onChange={() => handleSelectLead(lead.id)}
                            className="w-5 h-5 rounded border-gray-300"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Purchase Summary */}
              <div>
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Purchase Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Selected Leads</p>
                      <p className="text-2xl font-bold">{selectedLeads.length}</p>
                    </div>

                    <div className="border-t pt-4">
                      <div className="space-y-2">
                        {selectedLeads.map((leadId) => {
                          const lead = availableLeads.find((l) => l.id === leadId);
                          if (!lead) return null;
                          return (
                            <div key={leadId} className="flex justify-between text-sm">
                              <span>
                                {lead.firstName} {lead.lastName}
                              </span>
                              <span className="font-medium">
                                ${TIER_PRICES[lead.qualityTier]}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total</span>
                        <span className="text-2xl font-bold text-blue-600">
                          ${calculateTotal()}
                        </span>
                      </div>

                      <Button
                        onClick={handlePurchase}
                        disabled={selectedLeads.length === 0 || isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        {isLoading ? "Processing..." : "Purchase Leads"}
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      Secure payment via Stripe
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Purchase History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Purchase History</CardTitle>
                <CardDescription>View all your previous lead purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  No purchases yet. Start by selecting leads above.
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Dealer Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Name</label>
                  <p className="text-lg font-semibold mt-1">{user?.name || "Not set"}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <p className="text-lg font-semibold mt-1">{user?.email || "Not set"}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Status</label>
                  <Badge className="mt-2">Pending Review</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
