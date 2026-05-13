import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Search, Filter, ShoppingCart } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface Lead {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  creditScoreRange: string;
  monthlyIncome: string;
  vehicleType: string;
  city: string;
  qualityTier: "tier1" | "tier2" | "tier3";
  qualityScore: number;
}

const TIER_PRICES: Record<string, number> = {
  tier1: 25,
  tier2: 50,
  tier3: 75,
};

const TIER_COLORS: Record<string, string> = {
  tier1: "bg-yellow-100 text-yellow-800",
  tier2: "bg-blue-100 text-blue-800",
  tier3: "bg-purple-100 text-purple-800",
};

const TIER_LABELS: Record<string, string> = {
  tier1: "Standard ($25)",
  tier2: "Premium ($50)",
  tier3: "Elite ($75)",
};

export function DealerMarketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTier, setSelectedTier] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");

  // Fetch leads from backend
  const { data: leadsData, isLoading } = trpc.leadsPublic.listAvailable.useQuery({
    tier: selectedTier ? (selectedTier as "tier1" | "tier2" | "tier3") : undefined,
    limit: 100,
  });

  const allLeads = leadsData?.leads ?? [];

  const filteredLeads = allLeads.filter((lead) => {
    const matchesSearch =
      lead.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTier = !selectedTier || lead.qualityTier === selectedTier;
    const matchesCity = !selectedCity || lead.city === selectedCity;
    const matchesVehicle = !selectedVehicle || lead.vehicleType === selectedVehicle;

    return matchesSearch && matchesTier && matchesCity && matchesVehicle;
  });

  const cities = Array.from(new Set(allLeads.map((l) => l.city || "")));
  const vehicles = Array.from(new Set(allLeads.map((l) => l.vehicleType || "")));

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Lead Marketplace</h1>
          <p className="text-gray-600 mt-2">
            Browse {allLeads.length} high-quality automotive leads ready for purchase
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Name or email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Lead Quality
                </label>
                <Select value={selectedTier} onValueChange={setSelectedTier}>
                  <SelectTrigger>
                    <SelectValue placeholder="All tiers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All tiers</SelectItem>
                    <SelectItem value="tier1">Standard ($25)</SelectItem>
                    <SelectItem value="tier2">Premium ($50)</SelectItem>
                    <SelectItem value="tier3">Elite ($75)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  City
                </label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="All cities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All cities</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Vehicle Type
                </label>
                <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All types</SelectItem>
                    {vehicles.map((vehicle) => (
                      <SelectItem key={vehicle} value={vehicle}>
                        {vehicle}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTier("");
                    setSelectedCity("");
                    setSelectedVehicle("");
                  }}
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              {filteredLeads.length} leads found
            </h2>
            <div className="text-sm text-gray-600">
              Total value: ${isLoading ? "Loading..." : filteredLeads.reduce((sum, lead) => sum + TIER_PRICES[lead.qualityTier as "tier1" | "tier2" | "tier3"], 0)}
            </div>
          </div>

          {isLoading ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-500">Loading leads...</p>
              </CardContent>
            </Card>
          ) : filteredLeads.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-500">No leads match your filters. Try adjusting your search.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredLeads.map((lead) => (
                <Card key={lead.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold">
                            {lead.firstName} {lead.lastName}
                          </h3>
                          <Badge className={TIER_COLORS[lead.qualityTier as "tier1" | "tier2" | "tier3"]}>
                            {TIER_LABELS[lead.qualityTier as "tier1" | "tier2" | "tier3"]}
                          </Badge>
                          <Badge variant="secondary">Quality: {lead.qualityScore}%</Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                          <div>
                            <p className="text-gray-600">Credit Score</p>
                            <p className="font-medium">{lead.creditScoreRange}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Monthly Income</p>
                            <p className="font-medium">{lead.monthlyIncome}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Vehicle Interest</p>
                            <p className="font-medium">{lead.vehicleType}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Location</p>
                            <p className="font-medium">{lead.city}</p>
                          </div>
                        </div>

                        <div className="flex gap-4 text-sm">
                          <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                            {lead.email}
                          </a>
                          <span className="text-gray-400">•</span>
                          <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">
                            {lead.phone}
                          </a>
                        </div>
                      </div>

                      <Button
                        className="ml-4 bg-blue-600 hover:bg-blue-700"
                        onClick={() => toast.success(`Added ${lead.firstName} to cart`)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        ${TIER_PRICES[lead.qualityTier as "tier1" | "tier2" | "tier3"]}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
