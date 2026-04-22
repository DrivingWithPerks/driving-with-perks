import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { Check, Zap, Shield, Clock, TrendingUp, AlertCircle } from "lucide-react";

export default function BadCreditFunnel() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--navy-dark)] to-[var(--navy-dark)]/80 text-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Bad Credit? <span className="text-[var(--gold)]">No Problem.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Get approved for a car TODAY—even with poor credit, bankruptcy, or collection accounts. We specialize in getting Canadians like you back on the road.
              </p>

              {/* Trust badges */}
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                  <span className="text-lg">Approved in as little as 1 hour</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                  <span className="text-lg">No credit check? No problem.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                  <span className="text-lg">Drive today, paperwork tomorrow</span>
                </div>
              </div>

              <p className="text-sm text-gray-300 italic">
                ⭐ Over 3,000 Canadians approved in the last 12 months
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-[var(--navy-dark)] mb-2">Get Pre-Approved Now</h2>
              <p className="text-[var(--muted-foreground)] mb-6">Takes just 2 minutes</p>
              <LeadForm source="subprime" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-[var(--navy-dark)] text-center mb-16">
            Why Thousands Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-[var(--border)] hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-[var(--gold)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">Lightning Fast</h3>
              <p className="text-[var(--muted-foreground)]">
                Most approvals happen within 60 minutes. Get behind the wheel today, not next month.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)] hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-[var(--gold)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">We Accept Bad Credit</h3>
              <p className="text-[var(--muted-foreground)]">
                Bankruptcy? Collection accounts? Missed payments? We've helped Canadians in worse situations get approved.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)] hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-[var(--gold)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">No Long Waits</h3>
              <p className="text-[var(--muted-foreground)]">
                Forget about waiting weeks for a decision. We give you an answer in minutes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-[var(--navy-dark)] text-center mb-16">
            Common Questions Answered
          </h2>

          <div className="space-y-6">
            <Card className="p-8 border-[var(--border)]">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-[var(--gold)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                    "I have really bad credit. Will I still get approved?"
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    Yes. We approve people with credit scores as low as 450. We look at your income and employment, not just your credit score. Many of our customers have bankruptcy or repossession on their record.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-[var(--gold)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                    "How long does approval take?"
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    Most approvals take 30 minutes to 1 hour. You'll hear from us via phone or text as soon as we have an answer. Some customers are approved and driving the same day.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-[var(--gold)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                    "What if I don't have a down payment?"
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    No problem. We have zero-down options available. You can drive home today with little or nothing out of pocket. Ask about our flexible down payment plans.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-[var(--gold)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                    "Will this hurt my credit score?"
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    Getting a car loan actually helps rebuild your credit in Canada. Making on-time payments shows lenders you're responsible, and your credit score improves over time. This is how people rebuild credit.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-[var(--navy-dark)] text-center mb-16">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Approved in under 1 hour",
              "Drive home the same day",
              "Flexible payment plans",
              "No hidden fees",
              "Transparent pricing",
              "Expert support team",
              "Credit rebuilding guidance",
              "Warranty options available",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <span className="text-lg text-[var(--muted-foreground)]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--navy-dark)] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stop Waiting. Get Approved <span className="text-[var(--gold)]">Today.</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your next car is waiting. Fill out the form above and we'll get you approved in minutes.
          </p>
          <p className="text-sm text-gray-400">
            ✓ No credit card required | ✓ No obligation | ✓ 100% confidential
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
