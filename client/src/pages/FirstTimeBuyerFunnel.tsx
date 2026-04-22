import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { Check, Zap, Heart, HelpCircle } from "lucide-react";

export default function FirstTimeBuyerFunnel() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--navy-dark)] to-[var(--navy-dark)]/80 text-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Your First Car <span className="text-[var(--gold)]">Made Easy.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Buying your first car shouldn't be stressful. We make it simple, affordable, and fast. Get approved today and drive home in your first car across Canada.
              </p>

              {/* Trust badges */}
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                  <span className="text-lg">No credit history? No problem.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                  <span className="text-lg">Affordable monthly payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                  <span className="text-lg">Expert guidance every step</span>
                </div>
              </div>

              <p className="text-sm text-gray-300 italic">
                ⭐ 2,000+ Canadian first-time buyers approved last year
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-[var(--navy-dark)] mb-2">Get Pre-Approved</h2>
              <p className="text-[var(--muted-foreground)] mb-6">Takes just 2 minutes</p>
              <LeadForm source="general" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-[var(--navy-dark)] text-center mb-16">
            Why First-Time Buyers Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-[var(--border)] hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-[var(--gold)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">Simple Process</h3>
              <p className="text-[var(--muted-foreground)]">
                No confusing paperwork. No hidden fees. Just a straightforward path to car ownership.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)] hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-[var(--gold)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">We Care About You</h3>
              <p className="text-[var(--muted-foreground)]">
                We're not just a dealership. We're here to help you make the right choice for your situation.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)] hover:shadow-lg transition-shadow">
              <HelpCircle className="w-12 h-12 text-[var(--gold)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">Expert Support</h3>
              <p className="text-[var(--muted-foreground)]">
                Our team has helped thousands of first-time buyers. We'll guide you through every step.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-[var(--navy-dark)] text-center mb-16">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Pre-approval in minutes",
              "Affordable monthly payments",
              "No hidden fees or surprises",
              "Wide selection of vehicles",
              "Warranty options available",
              "Flexible trade-in options",
              "Insurance guidance",
              "Maintenance tips & support",
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

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-[var(--navy-dark)] text-center mb-16">
            First-Time Buyer Questions
          </h2>

          <div className="space-y-6">
            <Card className="p-8 border-[var(--border)]">
              <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                "I have no credit history. Can I still get approved?"
              </h3>
              <p className="text-[var(--muted-foreground)]">
                Yes! We approve first-time buyers with no credit history all the time. We look at your income and employment, not just your credit score. Many first-time buyers get approved on their first application.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                "What's a reasonable monthly payment for my budget?"
              </h3>
              <p className="text-[var(--muted-foreground)]">
                A good rule of thumb is to spend no more than 15-20% of your monthly income on a car payment. If you make $3,000/month, aim for a $450-600 payment. We can help you find the right vehicle in your budget.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                "How much should I put down?"
              </h3>
              <p className="text-[var(--muted-foreground)]">
                We offer options from $0 down to whatever you can afford. A larger down payment means lower monthly payments. We'll show you all the options and help you choose what works best.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                "Will this help me build credit?"
              </h3>
                  <p className="text-[var(--muted-foreground)]">
                    Absolutely. Making on-time payments on your car loan is one of the best ways to build credit in Canada. After 12-24 months of payments, you'll have established credit history and a better credit score with Canadian credit bureaus.
                  </p>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                "What if I lose my job or can't make a payment?"
              </h3>
              <p className="text-[var(--muted-foreground)]">
                Life happens. Contact us immediately if you're having trouble. We have options like payment deferrals or loan modifications to help you through tough times.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-[var(--navy-dark)] text-center mb-16">
            What First-Time Buyers Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah M.",
                quote: "I was nervous about buying my first car, but the team made it so easy. I was approved in 30 minutes!",
              },
              {
                name: "Marcus T.",
                quote: "No credit history and they still approved me. Now I'm building credit and driving a reliable car.",
              },
              {
                name: "Jessica L.",
                quote: "The payment was way more affordable than I expected. Highly recommend!",
              },
              {
                name: "David K.",
                quote: "They answered all my questions and never made me feel rushed. Great experience.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 border-[var(--border)]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[var(--gold)]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[var(--muted-foreground)] mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-[var(--navy-dark)]">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--navy-dark)] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Buy Your First Car? <span className="text-[var(--gold)]">Let's Go.</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get pre-approved in minutes. Drive home in your first car today.
          </p>
          <p className="text-sm text-gray-400">
            ✓ No credit needed | ✓ Fast approval | ✓ Affordable payments
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
