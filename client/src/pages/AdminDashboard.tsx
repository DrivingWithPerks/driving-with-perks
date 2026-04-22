import { useState, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Download, Eye, Filter, ChevronUp, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminDashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const [, navigate] = useLocation();
  const [status, setStatus] = useState<string>("all");
  const [source, setSource] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");
  const [editingNotes, setEditingNotes] = useState("");
  const [editingStatus, setEditingStatus] = useState("");

  const { data: leadsData, isLoading: isLoadingLeads, refetch } = trpc.leads.list.useQuery({
    status: status !== "all" ? status : undefined,
    source: source !== "all" ? source : undefined,
    search: search || undefined,
  });

  const { data: statsData } = trpc.leads.stats.useQuery();
  const updateStatusMutation = trpc.leads.updateStatus.useMutation();
  const updateNotesMutation = trpc.leads.updateNotes.useMutation();

  useEffect(() => {
    if (!loading && (!isAuthenticated || user?.role !== "admin")) {
      navigate("/");
    }
  }, [isAuthenticated, user, loading, navigate]);

  if (loading || !isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--muted-foreground)]">Loading...</p>
        </div>
      </div>
    );
  }

  const leads = leadsData?.leads || [];
  const total = leadsData?.total || 0;

  const handleUpdateStatus = async (leadId: number, newStatus: string) => {
    try {
      await updateStatusMutation.mutateAsync({
        id: leadId,
        status: newStatus as "New" | "Contacted" | "Converted" | "Archived",
      });
      setEditingStatus("");
      refetch();
      toast.success("Status updated");
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const handleUpdateNotes = async (leadId: number) => {
    try {
      await updateNotesMutation.mutateAsync({
        id: leadId,
        adminNotes: editingNotes,
      });
      setEditingNotes("");
      refetch();
      toast.success("Notes updated");
    } catch (err) {
      toast.error("Failed to update notes");
    }
  };

  const handleExport = () => {
    const headers = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "Source",
      "Status",
      "Credit Score",
      "Monthly Income",
      "Max Budget",
      "Created",
    ];
    const rows = leads.map((lead: any) => [
      lead.id,
      `${lead.firstName} ${lead.lastName}`,
      lead.email,
      lead.phone,
      lead.source,
      lead.status,
      lead.creditScoreRange || "-",
      lead.monthlyIncome || "-",
      lead.maxBudget || "-",
      new Date(lead.createdAt).toLocaleDateString(),
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800";
      case "Contacted":
        return "bg-yellow-100 text-yellow-800";
      case "Converted":
        return "bg-green-100 text-green-800";
      case "Archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case "subprime":
        return "bg-red-100 text-red-800";
      case "prime":
        return "bg-purple-100 text-purple-800";
      case "general":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 container">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-2">
            Admin Dashboard
          </h1>
          <p className="text-[var(--muted-foreground)]">
            Manage and track all leads from your marketing campaigns
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Total Leads", value: statsData?.total || 0, color: "bg-blue-100 text-blue-800" },
            { label: "New", value: statsData?.newCount || 0, color: "bg-blue-100 text-blue-800" },
            { label: "Contacted", value: statsData?.contactedCount || 0, color: "bg-yellow-100 text-yellow-800" },
            { label: "Converted", value: statsData?.convertedCount || 0, color: "bg-green-100 text-green-800" },
            { label: "Archived", value: statsData?.archivedCount || 0, color: "bg-gray-100 text-gray-800" },
          ].map((stat, i) => (
            <Card key={i} className="p-4">
              <p className="text-sm text-[var(--muted-foreground)] mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color.split(" ")[1]}`}>{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1">
              <Label htmlFor="search" className="text-sm">
                Search by name, email, or phone
              </Label>
              <Input
                id="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="status-filter" className="text-sm">
                Status
              </Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Contacted">Contacted</SelectItem>
                  <SelectItem value="Converted">Converted</SelectItem>
                  <SelectItem value="Archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="source-filter" className="text-sm">
                Source
              </Label>
              <Select value={source} onValueChange={setSource}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="subprime">Subprime</SelectItem>
                  <SelectItem value="prime">Prime</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleExport} className="gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </Card>

        {/* Leads Table */}
        <Card className="overflow-hidden">
          {isLoadingLeads ? (
            <div className="p-8 text-center text-[var(--muted-foreground)]">Loading leads...</div>
          ) : leads.length === 0 ? (
            <div className="p-8 text-center text-[var(--muted-foreground)]">No leads found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--secondary)] border-b border-[var(--border)]">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--navy-dark)]">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--navy-dark)]">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--navy-dark)]">
                      Source
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--navy-dark)]">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--navy-dark)]">
                      Credit
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--navy-dark)]">
                      Income
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--navy-dark)]">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--navy-dark)]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead: any, i: number) => (
                    <tr key={lead.id} className={i % 2 === 0 ? "bg-white" : "bg-[var(--secondary)]"}>
                      <td className="px-6 py-4 text-sm font-medium text-[var(--navy-dark)]">
                        {lead.firstName} {lead.lastName}
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">
                        <div>{lead.email}</div>
                        <div className="text-xs">{lead.phone}</div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <Badge className={getSourceColor(lead.source)}>
                          {lead.source.charAt(0).toUpperCase() + lead.source.slice(1)}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <Badge className={getStatusColor(lead.status)}>{lead.status}</Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">
                        {lead.creditScoreRange || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">
                        {lead.monthlyIncome || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedLead(lead)}
                          className="gap-1"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        {/* Lead Detail Modal */}
        {selectedLead && (
          <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  Lead: {selectedLead.firstName} {selectedLead.lastName}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Status */}
                <div>
                  <Label className="text-sm font-semibold">Status</Label>
                  <div className="flex gap-2 mt-2">
                    {["New", "Contacted", "Converted", "Archived"].map((s) => (
                      <Button
                        key={s}
                        variant={selectedLead.status === s ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleUpdateStatus(selectedLead.id, s)}
                        className={selectedLead.status === s ? "bg-gold text-[var(--navy-dark)]" : ""}
                      >
                        {s}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Email</Label>
                    <p className="font-medium">{selectedLead.email}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Phone</Label>
                    <p className="font-medium">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Address</Label>
                    <p className="font-medium">
                      {selectedLead.address}, {selectedLead.city}, {selectedLead.state} {selectedLead.zipCode}
                    </p>
                  </div>
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Date of Birth</Label>
                    <p className="font-medium">{selectedLead.dateOfBirth || "-"}</p>
                  </div>
                </div>

                {/* Employment */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Employer</Label>
                    <p className="font-medium">{selectedLead.employerName || "-"}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Job Title</Label>
                    <p className="font-medium">{selectedLead.jobTitle || "-"}</p>
                  </div>
                </div>

                {/* Income & Vehicle */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Monthly Income</Label>
                    <p className="font-medium">{selectedLead.monthlyIncome || "-"}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Max Budget</Label>
                    <p className="font-medium">{selectedLead.maxBudget || "-"}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Vehicle Type</Label>
                    <p className="font-medium">{selectedLead.vehicleType || "-"}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Down Payment</Label>
                    <p className="font-medium">{selectedLead.downPayment || "-"}</p>
                  </div>
                </div>

                {/* Credit */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Credit Score Range</Label>
                    <p className="font-medium">{selectedLead.creditScoreRange || "-"}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Bankruptcy</Label>
                    <p className="font-medium">{selectedLead.hasBankruptcy || "-"}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-[var(--muted-foreground)]">Repossession</Label>
                    <p className="font-medium">{selectedLead.hasRepossession || "-"}</p>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <Label className="text-sm font-semibold mb-2 block">Admin Notes</Label>
                  <Textarea
                    value={editingNotes || selectedLead.adminNotes || ""}
                    onChange={(e) => setEditingNotes(e.target.value)}
                    placeholder="Add notes about this lead..."
                    className="min-h-24"
                  />
                  <Button
                    onClick={() => handleUpdateNotes(selectedLead.id)}
                    className="mt-2 bg-gold text-[var(--navy-dark)] hover:opacity-90"
                  >
                    Save Notes
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <Footer />
    </div>
  );
}
