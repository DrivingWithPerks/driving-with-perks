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
import { CheckCircle2, Zap, Award, Percent, Truck } from "lucide-react";

const primeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  creditScoreRange: z.string().optional(),
  monthlyIncome: z.string().optional(),
  maxBudget: z.string().optional(),
  vehicleType: z.string().optional(),
});

type PrimeFormData = z.infer<typeof primeSchema>;

export default function PrimeLanding() {
  const [submitted, setSubmitted] = useState(false);
  const submitMutation = trpc.leads.submit.useMutation();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<PrimeFormData>({
    resolver: zodResolver(primeSchema),
  });

  const onSubmit = async (data: PrimeFormData) => {
    try {
      await submitMutation.mutateAsync({
        ...data,
        source: "prime",
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
              Application Received!
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              Thank you for applying for prime financing. Our team will review your application and contact you within 24 hours with your approval decision and rate quote.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <p className="text-sm text-blue-900 font-semibold mb-3">What Happens Next:</p>
              <ul className="text-left space-y-2 text-sm text-blue-800">
                <li>✓ We'll verify your information</li>
                <li>✓ Provide you with competitive rate options</li>
                <li>✓ Help you select the perfect vehicle</li>
                <li>✓ Complete financing and drive home</li>
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
              <span className="text-sm font-semibold">Prime Financing Program</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Financing for Excellent Credit
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Enjoy the best rates and terms available. Our prime financing program is designed for borrowers with excellent credit who deserve premium service and competitive pricing.
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

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <h2 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-12 text-center">
            Prime Financing Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Percent,
                title: "Competitive Rates",
                desc: "Access the lowest rates available in the market for qualified prime borrowers.",
              },
              {
                icon: Zap,
                title: "Instant Approval",
                desc: "Get approved in minutes with our streamlined process for excellent credit.",
              },
              {
                icon: Award,
                title: "Premium Service",
                desc: "Dedicated account managers and priority support throughout your loan.",
              },
              {
                icon: Truck,
                title: "Flexible Terms",
                desc: "Choose from 24 to 84-month terms tailored to your budget and needs.",
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

      {/* Eligibility */}
      <section className="py-20 lg:py-28 bg-[var(--secondary)]">
        <div className="container">
          <h2 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-12 text-center">
            Prime Financing Requirements
          </h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Credit Score: 700+",
              "Stable Employment History",
              "Debt-to-Income Ratio: &lt;40%",
              "Minimum Annual Income: $30,000",
              "Valid Driver's License",
              "Proof of Insurance",
              "Verifiable Employment",
              "No Recent Bankruptcies",
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
              Prime Application
            </h2>
            <p className="text-center text-[var(--muted-foreground)] mb-12">
              Complete your application in minutes. Receive your rate quote within 24 hours.
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
                      <SelectItem value="excellent">Excellent (750+)</SelectItem>
                      <SelectItem value="good">Good (700-749)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="monthlyIncome">Monthly Income</Label>
                  <Input
                    id="monthlyIncome"
                    {...register("monthlyIncome")}
                    className="mt-2"
                    placeholder="$5,000"
                  />
                </div>

                <div>
                  <Label htmlFor="maxBudget">Vehicle Budget</Label>
                  <Input
                    id="maxBudget"
                    {...register("maxBudget")}
                    className="mt-2"
                    placeholder="$40,000"
                  />
                </div>

                <div>
                  <Label htmlFor="vehicleType">Preferred Vehicle Type</Label>
                  <Select onValueChange={(v) => setValue("vehicleType", v)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="luxury">Luxury Vehicle</SelectItem>
                      <SelectItem value="sports">Sports Car</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold text-[var(--navy-dark)] hover:opacity-90 font-semibold py-6 text-lg"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "Submitting..." : "Apply for Prime Financing"}
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
