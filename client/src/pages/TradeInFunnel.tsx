import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { Check, TrendingUp, DollarSign, Zap } from "lucide-react";

export default function TradeInFunnel() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--navy-dark)] to-[var(--navy-dark)]/80 text-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Upgrade Your Ride. <span className="text-[var(--gold)]">Get More Cash.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Trade in your old car and drive home in a newer vehicle TODAY. We give you top dollar for your trade-in and get you approved instantly across Canada.
              </p>

              {/* Trust badges */}
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                  <span className="text-lg">Instant trade-in valuation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                  <span className="text-lg">Same-day approval & pickup</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--gold)]" />
                  <span className="text-lg">We handle the paperwork</span>
                </div>
              </div>

              <p className="text-sm text-gray-300 italic">
                ⭐ Average trade-in value: $8,500 CAD | Average savings: $2,300 CAD
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-[var(--navy-dark)] mb-2">Get Your Offer</h2>
              <p className="text-[var(--muted-foreground)] mb-6">Takes just 2 minutes</p>
              <LeadForm source="prime" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-[var(--navy-dark)] text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Tell Us About Your Car", desc: "Year, make, model, and condition" },
              { step: "2", title: "Get Instant Offer", desc: "We value your trade-in immediately" },
              { step: "3", title: "Choose Your Upgrade", desc: "Browse our inventory of newer vehicles" },
              { step: "4", title: "Drive Home Today", desc: "Approved and on the road same day" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--gold)] text-black font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">{item.title}</h3>
                <p className="text-[var(--muted-foreground)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-[var(--navy-dark)] text-center mb-16">
            Why Trade In With Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-[var(--border)]">
              <DollarSign className="w-12 h-12 text-[var(--gold)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">Top Dollar for Your Trade</h3>
              <p className="text-[var(--muted-foreground)]">
                We pay more than dealerships. Our customers average $2,300 more on their trade-in value.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <Zap className="w-12 h-12 text-[var(--gold)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">Instant Approval</h3>
              <p className="text-[var(--muted-foreground)]">
                No waiting. Get approved for your upgrade in minutes, not days.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <TrendingUp className="w-12 h-12 text-[var(--gold)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">Upgrade to Newer</h3>
              <p className="text-[var(--muted-foreground)]">
                Drive a newer, safer, more reliable vehicle. Lower maintenance costs and better fuel economy.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <Check className="w-12 h-12 text-[var(--gold)] mb-4" />
              <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">We Handle Everything</h3>
              <p className="text-[var(--muted-foreground)]">
                We take care of the paperwork, inspection, and title transfer. You just drive.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-[var(--navy-dark)] text-center mb-16">
            Questions?
          </h2>

          <div className="space-y-6">
            <Card className="p-8 border-[var(--border)]">
              <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                How do you determine my trade-in value?
              </h3>
              <p className="text-[var(--muted-foreground)]">
                We use current market data, vehicle condition, mileage, and demand to give you a fair offer. Our valuations are typically 15-25% higher than traditional dealerships.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                Do I need to have the car paid off?
              </h3>
              <p className="text-[var(--muted-foreground)]">
                No. We can pay off your existing loan and apply the remaining value to your new vehicle. It's seamless.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)]">
              <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                What if my car has issues?
              </h3>
              <p className="text-[var(--muted-foreground)]">
                We buy cars as-is. Mechanical problems, cosmetic damage, or high mileage—we still give you a fair offer.
              </p>
            </Card>

            <Card className="p-8 border-[var(--border)]">
                <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">
                    "Can I upgrade even with bad credit?"
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    Absolutely. Your credit score doesn't affect your trade-in value. We approve Canadians with all credit types.
                  </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--navy-dark)] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Upgrade? <span className="text-[var(--gold)]">Let's Go.</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get your trade-in offer in minutes. No obligation. No hassle.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
