import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { Loader2, CheckCircle } from "lucide-react";

interface LeadFormProps {
  source: "general" | "subprime" | "prime";
  onSuccess?: () => void;
}

export default function LeadForm({ source, onSuccess }: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    monthlyIncome: "",
    creditRange: "",
    employmentStatus: "",
  });

  const submitLead = trpc.leads.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Application submitted! We'll contact you shortly.");
      setTimeout(() => {
        setStep(1);
        setFormData({
          firstName: "",
          phone: "",
          email: "",
          monthlyIncome: "",
          creditRange: "",
          employmentStatus: "",
        });
        setSubmitted(false);
        onSuccess?.();
      }, 3000);
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.phone || !formData.monthlyIncome || !formData.creditRange || !formData.employmentStatus) {
      toast.error("Please fill in all required fields");
      return;
    }

    submitLead.mutate({
      firstName: formData.firstName,
      lastName: "Applicant",
      email: formData.email || "noemail@example.com",
      phone: formData.phone,
      monthlyIncome: formData.monthlyIncome,
      creditScoreRange: formData.creditRange,
      employmentStatus: formData.employmentStatus,
      source,
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[var(--navy-dark)] mb-2">You're All Set!</h3>
        <p className="text-[var(--muted-foreground)] mb-4">
          Our team will contact you within 1 hour to discuss your financing options.
        </p>
        <p className="text-sm text-[var(--muted-foreground)]">Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Progress indicator */}
      <div className="flex gap-2 mb-8">
        {[1, 2].map((s) => (
          <div
            key={s}
            className={`h-2 flex-1 rounded-full transition-colors ${
              s <= step ? "bg-[var(--gold)]" : "bg-[var(--border)]"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Contact Info */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
              First Name *
            </label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="John"
              className="bg-white border-[var(--border)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
              Phone Number *
            </label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 123-4567"
              className="bg-white border-[var(--border)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
              Email (Optional)
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="bg-white border-[var(--border)]"
            />
          </div>

          <Button
            onClick={() => setStep(2)}
            disabled={!formData.firstName || !formData.phone}
            className="w-full bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-black font-semibold py-6 text-lg"
          >
            Continue
          </Button>
        </div>
      )}

      {/* Step 2: Financial Info */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
              Monthly Income *
            </label>
            <Select value={formData.monthlyIncome} onValueChange={(value) => handleSelectChange("monthlyIncome", value)}>
              <SelectTrigger className="bg-white border-[var(--border)]">
                <SelectValue placeholder="Select income range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2500-3500">$2,500 - $3,500 CAD</SelectItem>
                <SelectItem value="3500-5000">$3,500 - $5,000 CAD</SelectItem>
                <SelectItem value="5000-7500">$5,000 - $7,500 CAD</SelectItem>
                <SelectItem value="7500-10000">$7,500 - $10,000 CAD</SelectItem>
                <SelectItem value="10000+">$10,000+ CAD</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
              Credit Situation *
            </label>
            <Select value={formData.creditRange} onValueChange={(value) => handleSelectChange("creditRange", value)}>
              <SelectTrigger className="bg-white border-[var(--border)]">
                <SelectValue placeholder="Select credit range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Poor">Poor (Below 550)</SelectItem>
                <SelectItem value="Fair">Fair (550-650)</SelectItem>
                <SelectItem value="Good">Good (650+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--navy-dark)] mb-2">
              Employment Status *
            </label>
            <Select value={formData.employmentStatus} onValueChange={(value) => handleSelectChange("employmentStatus", value)}>
              <SelectTrigger className="bg-white border-[var(--border)]">
                <SelectValue placeholder="Select employment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Employed">Employed (Full-time)</SelectItem>
                <SelectItem value="Self-Employed">Self-Employed</SelectItem>
                <SelectItem value="Seasonal">Seasonal/Contract</SelectItem>
                <SelectItem value="Other">Other Income Source</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => setStep(1)}
              variant="outline"
              className="flex-1 py-6 text-lg border-[var(--border)]"
            >
              Back
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={submitLead.isPending}
              className="flex-1 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-black font-semibold py-6 text-lg"
            >
              {submitLead.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Get Pre-Approved"
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
