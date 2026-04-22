import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, TrendingUp, AlertCircle, Lightbulb } from "lucide-react";

export default function CreditEducation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build Better Credit
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Your credit score is the key to financial freedom. Learn proven strategies to rebuild your credit, manage debt, and achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Credit */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <h2 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-12 text-center">
            Understanding Your Credit Score
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8 border-[var(--border)]">
              <h3 className="font-display text-2xl font-bold text-[var(--navy-dark)] mb-6">
                The Five Factors That Matter
              </h3>
              <div className="space-y-6">
                {[
                  {
                    factor: "Payment History (35%)",
                    desc: "The most important factor. Pay your bills on time, every time. Even one late payment can hurt your score.",
                  },
                  {
                    factor: "Credit Utilization (30%)",
                    desc: "Keep your credit card balances low. Aim to use less than 30% of your available credit limit.",
                  },
                  {
                    factor: "Length of Credit History (15%)",
                    desc: "The longer your credit accounts are open, the better. Keep old accounts active.",
                  },
                  {
                    factor: "Credit Mix (10%)",
                    desc: "Having different types of credit (cards, loans, mortgage) shows you can manage various obligations.",
                  },
                  {
                    factor: "New Credit Inquiries (10%)",
                    desc: "Avoid opening too many new accounts at once. Multiple inquiries can temporarily lower your score.",
                  },
                ].map((item, i) => (
                  <div key={i} className="pb-6 border-b border-[var(--border)] last:border-b-0">
                    <h4 className="font-semibold text-[var(--navy-dark)] mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gold text-[var(--navy-dark)] flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      {item.factor}
                    </h4>
                    <p className="text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Credit Rebuilding Steps */}
      <section className="py-20 lg:py-28 bg-[var(--secondary)]">
        <div className="container">
          <h2 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-12 text-center">
            7 Steps to Rebuild Your Credit
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: 1,
                title: "Check Your Credit Report",
                desc: "Get your free annual credit report from AnnualCreditReport.com. Look for errors and dispute any inaccuracies.",
              },
              {
                step: 2,
                title: "Make All Payments On Time",
                desc: "Set up automatic payments or calendar reminders. Payment history is 35% of your score. One late payment can hurt for years.",
              },
              {
                step: 3,
                title: "Pay Down Credit Card Balances",
                desc: "Focus on getting your credit utilization below 30%. If you have a $5,000 limit, keep your balance under $1,500.",
              },
              {
                step: 4,
                title: "Become an Authorized User",
                desc: "Ask a family member with good credit to add you to their account. Their positive history can help boost your score.",
              },
              {
                step: 5,
                title: "Get a Secured Credit Card",
                desc: "If you can't qualify for regular cards, secured cards require a deposit but help rebuild credit when used responsibly.",
              },
              {
                step: 6,
                title: "Diversify Your Credit Mix",
                desc: "Having different types of credit (credit cards, auto loans, installment loans) shows lenders you can manage various obligations.",
              },
              {
                step: 7,
                title: "Be Patient and Consistent",
                desc: "Credit rebuilding takes time—typically 6-12 months to see significant improvement. Stay committed to good habits.",
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 border-[var(--border)] flex gap-6">
                <div className="w-12 h-12 rounded-full bg-gold text-[var(--navy-dark)] flex items-center justify-center shrink-0 font-display font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-[var(--navy-dark)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <h2 className="font-display text-4xl font-bold text-[var(--navy-dark)] mb-12 text-center">
            Mistakes to Avoid
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Ignoring your credit report—check it regularly for errors",
              "Missing payments—even one late payment damages your score",
              "Maxing out credit cards—keep utilization below 30%",
              "Closing old credit accounts—length of history matters",
              "Applying for too much credit at once—multiple inquiries hurt",
              "Co-signing loans you can't afford—you're liable if they default",
              "Paying collections in full without negotiating—get it in writing",
              "Ignoring debt—it won't go away, address it proactively",
            ].map((mistake, i) => (
              <Card key={i} className="p-6 border-red-200 bg-red-50">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-red-900 text-sm leading-relaxed">{mistake}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="py-20 lg:py-28 bg-[var(--navy-dark)] text-white">
        <div className="container">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Pro Tips for Credit Success
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Set Payment Reminders",
                desc: "Use your phone, calendar, or banking app to remind you of due dates.",
              },
              {
                icon: TrendingUp,
                title: "Monitor Your Progress",
                desc: "Check your credit score monthly. Many banks offer free score monitoring.",
              },
              {
                icon: CheckCircle2,
                title: "Create a Budget",
                desc: "Know where your money goes. A budget helps you pay bills on time.",
              },
              {
                icon: Lightbulb,
                title: "Build an Emergency Fund",
                desc: "Save 3-6 months of expenses to avoid missed payments during hardship.",
              },
              {
                icon: TrendingUp,
                title: "Negotiate with Creditors",
                desc: "If you're struggling, call creditors. Many offer hardship programs.",
              },
              {
                icon: CheckCircle2,
                title: "Consider Credit Counseling",
                desc: "Non-profit credit counseling is free and can help create a debt plan.",
              },
            ].map((tip, i) => {
              const Icon = tip.icon;
              return (
                <Card key={i} className="p-6 bg-white/10 border-white/20">
                  <Icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">{tip.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy)] rounded-2xl p-12 lg:p-16 text-white text-center shadow-luxury-lg">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
              Ready to Rebuild?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Financing a vehicle with us is one of the best ways to rebuild your credit. Every payment gets reported to all three credit bureaus, helping you build a stronger financial future.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold text-[var(--navy-dark)] hover:opacity-90 font-semibold px-8"
            >
              <Link href="/apply">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
