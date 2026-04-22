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
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { CheckCircle2, AlertCircle, TrendingUp, DollarSign, Clock, Shield } from "lucide-react";

const subprimeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  creditScoreRange: z.string().optional(),
  hasBankruptcy: z.string().optional(),
  monthlyIncome: z.string().optional(),
  maxBudget: z.string().optional(),
});

type SubprimeFormData = z.infer<typeof subprimeSchema>;

export default function SubprimeLanding() {
  const [submitted, setSubmitted] = useState(false);
  const submitMutation = trpc.leads.submit.useMutation();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<SubprimeFormData>({
    resolver: zodResolver(subprimeSchema),
  });

  const onSubmit = async (data: SubprimeFormData) => {
    try {
      await submitMutation.mutateAsync({
        ...data,
        source: "subprime",
      });
      setSubmitted(true);
      toast.success("Application submitted! We'll contact you soon.");
    } catch (err) {
      toast.error("Failed to submit. Please try again.");
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
              You're On Your Way!
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              Thank you for applying to our Challenged Credit Program. Our specialist team will review your application and call you within 2 hours during business hours.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <p className="text-sm text-blue-900 font-semibold mb-3">What Happens Next:</p>
              <ul className="text-left space-y-2 text-sm text-blue-800">
                <li>✓ Specialist reviews your credit situation</li>
                <li>✓ We'll discuss your financing options</li>
                <li>✓ Get approved for a vehicle that fits your budget</li>
                <li>✓ Drive home today with better credit building ahead</li>
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

      {/* Hero */}
      <section className="gradient-hero text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold">Challenged Credit Program</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bad Credit? No Problem.
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              We specialize in helping people with challenged credit get approved for vehicles. Whether you've had bankruptcy, repossession, or just poor credit—we have a solution for you.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold text-[var(--navy-dark)] hover:opacity-90 font-semibold px-8"
            >
              <a href="#apply">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <h2 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-12 text-center">
            Why Challenged Credit Borrowers Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Credit Rebuilding Guaranteed",
                desc: "Every payment you make gets reported to all three credit bureaus, helping you rebuild your score.",
              },
              {
                icon: DollarSign,
                title: "Competitive Rates",
                desc: "We offer the best rates available for your credit situation. No predatory lending.",
              },
              {
                icon: Clock,
                title: "Fast Approval",
                desc: "Get approved in minutes, not days. Drive home the same day if you find the right vehicle.",
              },
              {
                icon: Shield,
                title: "No Judgment",
                desc: "We understand that life happens. We're here to help, not judge your credit history.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="p-8 border-[var(--border)]">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[var(--navy-dark)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* We Can Help */}
      <section className="py-20 lg:py-28 bg-[var(--secondary)]">
        <div className="container">
          <h2 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-12 text-center">
            We Can Help If You Have:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Bad Credit (300-600 score)",
              "Bankruptcy (Chapter 7 or 13)",
              "Repossession History",
              "Foreclosure",
              "Collections or Charge-offs",
              "No Credit History",
              "Recent Late Payments",
              "High Debt-to-Income Ratio",
              "Multiple Inquiries",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-[var(--navy-dark)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-2 text-center">
              Quick Application
            </h2>
            <p className="text-center text-[var(--muted-foreground)] mb-12">
              Takes less than 5 minutes. Our specialist will call you right away.
            </p>

            <Card className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  <Label htmlFor="email">Email *</Label>
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
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    className="mt-2"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <Label htmlFor="creditScoreRange">Credit Score Range</Label>
                  <Select onValueChange={(v) => setValue("creditScoreRange", v)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="very-poor">Very Poor (&lt;550)</SelectItem>
                      <SelectItem value="poor">Poor (550-649)</SelectItem>
                      <SelectItem value="fair">Fair (650-699)</SelectItem>
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
                  <Label htmlFor="monthlyIncome">Monthly Income</Label>
                  <Input
                    id="monthlyIncome"
                    {...register("monthlyIncome")}
                    className="mt-2"
                    placeholder="$3,500"
                  />
                </div>

                <div>
                  <Label htmlFor="maxBudget">Vehicle Budget</Label>
                  <Input
                    id="maxBudget"
                    {...register("maxBudget")}
                    className="mt-2"
                    placeholder="$15,000"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold text-[var(--navy-dark)] hover:opacity-90 font-semibold py-6 text-lg"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "Submitting..." : "Get Pre-Approved"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
