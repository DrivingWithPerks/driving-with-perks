import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, TrendingUp, Users, Zap, Shield, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero text-white pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 left-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Path to Better Credit Starts Here
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Whether you're rebuilding credit, facing financial challenges, or looking for prime financing, Driving with Perks is here to help you get behind the wheel and rebuild your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold text-[var(--navy-dark)] hover:opacity-90 font-semibold px-8"
              >
                <Link href="/apply">Get Pre-Approved Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/credit-education">Learn About Credit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--navy-dark)] mb-4">
              Why Choose Driving with Perks?
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              We specialize in helping all credit types access quality vehicles while building a stronger financial future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Credit Rebuilding Focus",
                desc: "Every car you finance with us is an opportunity to rebuild your credit. We report to all three bureaus.",
              },
              {
                icon: Users,
                title: "All Credit Types Welcome",
                desc: "Bad credit, no credit, bankruptcy, or perfect credit—we have financing solutions for everyone.",
              },
              {
                icon: Zap,
                title: "Fast Approval Process",
                desc: "Get pre-approved in minutes and start shopping for your vehicle today.",
              },
              {
                icon: Shield,
                title: "Transparent Pricing",
                desc: "No hidden fees, no surprises. We believe in honest, straightforward lending practices.",
              },
              {
                icon: Award,
                title: "Expert Guidance",
                desc: "Our team provides personalized advice to help you make the right financial decision.",
              },
              {
                icon: CheckCircle2,
                title: "Nationwide Service",
                desc: "We serve customers across the entire United States with local expertise.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={i}
                  className="p-8 border-[var(--border)] hover:shadow-luxury-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
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

      {/* Credit Rebuilding Teaser */}
      <section className="py-20 lg:py-28 bg-[var(--navy-dark)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Transform Your Financial Future
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Credit rebuilding isn't just about getting a car—it's about taking control of your financial destiny. Learn proven strategies to improve your credit score, manage debt, and build lasting wealth.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold text-[var(--navy-dark)] hover:opacity-90 font-semibold"
            >
              <Link href="/credit-education">Explore Credit Education</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy)] rounded-2xl p-12 lg:p-16 text-white text-center shadow-luxury-lg">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
              Ready to Drive Forward?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Start your application today. It takes just a few minutes, and you could be pre-approved for financing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold text-[var(--navy-dark)] hover:opacity-90 font-semibold px-8"
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/subprime">Challenged Credit Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
