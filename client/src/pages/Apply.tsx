import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

const leadSchema = z.object({
  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  dateOfBirth: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  employmentStatus: z.string().optional(),
  employerName: z.string().optional(),
  jobTitle: z.string().optional(),
  yearsEmployed: z.string().optional(),
  monthlyIncome: z.string().optional(),
  payFrequency: z.string().optional(),
  additionalIncome: z.string().optional(),
  vehicleType: z.string().optional(),
  preferredMake: z.string().optional(),
  preferredModel: z.string().optional(),
  maxBudget: z.string().optional(),
  downPayment: z.string().optional(),
  tradeIn: z.string().optional(),
  creditScoreRange: z.string().optional(),
  hasBankruptcy: z.string().optional(),
  bankruptcyDischargeDate: z.string().optional(),
  hasRepossession: z.string().optional(),
  hasCoApplicant: z.string().optional(),
  coApplicantName: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

export default function Apply() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const submitMutation = trpc.leads.submit.useMutation();
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    if (step < 5) {
      setStep(step + 1);
      return;
    }

    try {
      await submitMutation.mutateAsync({ ...data, source: "general" });
      setSubmitted(true);
      toast.success("Application submitted! We'll be in touch soon.");
    } catch (err) {
      toast.error("Failed to submit application. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 container">
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-4">
              Application Submitted!
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              Thank you for choosing Driving with Perks. Our team will review your application and contact you within 24 hours with your pre-approval decision.
            </p>
            <div className="bg-[var(--secondary)] p-6 rounded-lg mb-8">
              <p className="text-sm text-[var(--muted-foreground)] mb-2">Next Steps:</p>
              <ul className="text-left space-y-2 text-sm text-[var(--navy-dark)]">
                <li>✓ We'll call you with your pre-approval amount</li>
                <li>✓ Browse our inventory of vehicles</li>
                <li>✓ Complete final paperwork and drive home</li>
              </ul>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 container">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-2">
              Get Pre-Approved
            </h1>
            <p className="text-[var(--muted-foreground)]">
              Step {step} of 5 — {["Personal Info", "Employment", "Income", "Vehicle", "Credit"][step - 1]}
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-12 flex gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-all ${
                  s <= step ? "bg-gold" : "bg-[var(--border)]"
                }`}
              />
            ))}
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...register("firstName")}
                        className="mt-2"
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...register("lastName")}
                        className="mt-2"
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-2"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      className="mt-2"
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      {...register("dateOfBirth")}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      {...register("address")}
                      className="mt-2"
                      placeholder="123 Main St"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" {...register("city")} className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" {...register("state")} className="mt-2" maxLength={2} />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input id="zipCode" {...register("zipCode")} className="mt-2" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Employment */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="employmentStatus">Employment Status</Label>
                    <Select onValueChange={(v) => setValue("employmentStatus", v)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="employerName">Employer Name</Label>
                    <Input
                      id="employerName"
                      {...register("employerName")}
                      className="mt-2"
                      placeholder="ABC Corporation"
                    />
                  </div>
                  <div>
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      {...register("jobTitle")}
                      className="mt-2"
                      placeholder="Manager"
                    />
                  </div>
                  <div>
                    <Label htmlFor="yearsEmployed">Years at Current Job</Label>
                    <Input
                      id="yearsEmployed"
                      {...register("yearsEmployed")}
                      className="mt-2"
                      placeholder="2"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Income */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="monthlyIncome">Monthly Income</Label>
                    <Input
                      id="monthlyIncome"
                      {...register("monthlyIncome")}
                      className="mt-2"
                      placeholder="$3,500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="payFrequency">Pay Frequency</Label>
                    <Select onValueChange={(v) => setValue("payFrequency", v)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="additionalIncome">Additional Monthly Income (Optional)</Label>
                    <Input
                      id="additionalIncome"
                      {...register("additionalIncome")}
                      className="mt-2"
                      placeholder="$500"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Vehicle Preference */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="vehicleType">Vehicle Type</Label>
                    <Select onValueChange={(v) => setValue("vehicleType", v)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="truck">Truck</SelectItem>
                        <SelectItem value="van">Van</SelectItem>
                        <SelectItem value="coupe">Coupe</SelectItem>
                        <SelectItem value="hatchback">Hatchback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredMake">Preferred Make</Label>
                      <Input
                        id="preferredMake"
                        {...register("preferredMake")}
                        className="mt-2"
                        placeholder="Honda"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredModel">Preferred Model</Label>
                      <Input
                        id="preferredModel"
                        {...register("preferredModel")}
                        className="mt-2"
                        placeholder="Civic"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="maxBudget">Maximum Budget</Label>
                    <Input
                      id="maxBudget"
                      {...register("maxBudget")}
                      className="mt-2"
                      placeholder="$25,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="downPayment">Down Payment Available</Label>
                    <Input
                      id="downPayment"
                      {...register("downPayment")}
                      className="mt-2"
                      placeholder="$3,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tradeIn">Do you have a trade-in?</Label>
                    <Select onValueChange={(v) => setValue("tradeIn", v)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 5: Credit Situation */}
              {step === 5 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="creditScoreRange">Credit Score Range</Label>
                    <Select onValueChange={(v) => setValue("creditScoreRange", v)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent (750+)</SelectItem>
                        <SelectItem value="good">Good (700-749)</SelectItem>
                        <SelectItem value="fair">Fair (650-699)</SelectItem>
                        <SelectItem value="poor">Poor (550-649)</SelectItem>
                        <SelectItem value="very-poor">Very Poor (&lt;550)</SelectItem>
                        <SelectItem value="unsure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="hasBankruptcy">Have you filed for bankruptcy?</Label>
                    <Select onValueChange={(v) => setValue("hasBankruptcy", v)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="bankruptcyDischargeDate">Bankruptcy Discharge Date (if applicable)</Label>
                    <Input
                      id="bankruptcyDischargeDate"
                      type="date"
                      {...register("bankruptcyDischargeDate")}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hasRepossession">Have you had a repossession?</Label>
                    <Select onValueChange={(v) => setValue("hasRepossession", v)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="hasCoApplicant">Do you have a co-applicant?</Label>
                    <Select onValueChange={(v) => setValue("hasCoApplicant", v)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="coApplicantName">Co-Applicant Name (if applicable)</Label>
                    <Input
                      id="coApplicantName"
                      {...register("coApplicantName")}
                      className="mt-2"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  className="flex-1 bg-gold text-[var(--navy-dark)] hover:opacity-90 font-semibold flex items-center justify-center gap-2"
                  disabled={submitMutation.isPending}
                >
                  {step === 5 ? "Submit Application" : "Next"}
                  {step < 5 && <ChevronRight className="w-4 h-4" />}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
