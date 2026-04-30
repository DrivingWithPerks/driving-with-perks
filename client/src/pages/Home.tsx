import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const { user } = useAuth();
  const [, navigate] = useLocation();

  const vehicleTypes = [
    {
      title: "Bad Credit Approval",
      description: "Rebuild your credit with an affordable vehicle",
      icon: "🚗",
      path: "/bad-credit",
      color: "from-blue-600 to-blue-500",
    },
    {
      title: "Trade-In Upgrade",
      description: "Upgrade your current vehicle with instant equity",
      icon: "🔄",
      path: "/trade-in",
      color: "from-blue-500 to-blue-400",
    },
    {
      title: "First-Time Buyer",
      description: "Get approved for your first vehicle today",
      icon: "✨",
      path: "/first-time-buyer",
      color: "from-blue-400 to-blue-300",
    },
    {
      title: "Prime Financing",
      description: "Excellent rates for excellent credit",
      icon: "⭐",
      path: "/prime",
      color: "from-blue-700 to-blue-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      quote: "I had challenged credit and thought I'd never get approved. Driving with Perks got me into a vehicle within 48 hours. Amazing service!",
      rating: 5,
    },
    {
      name: "James T.",
      quote: "Fast, professional, and transparent. No hidden fees. This is how car financing should work.",
      rating: 5,
    },
    {
      name: "Michelle L.",
      quote: "They delivered my car right to my home. The entire process was stress-free and quick.",
      rating: 5,
    },
    {
      name: "David K.",
      quote: "Rebuilding my credit was intimidating, but their team made it simple and achievable.",
      rating: 5,
    },
    {
      name: "Lisa R.",
      quote: "Best financing experience I've had. Professional team, great rates, and honest communication.",
      rating: 5,
    },
    {
      name: "Robert P.",
      quote: "Got approved in one day. Picked up my truck the next. Can't ask for better service.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Apply today, drive tomorrow
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-2">
              Start by picking your financing option
            </p>
            <p className="text-sm lg:text-base text-blue-200 mb-8">
              Over 10,000 Canadians have rebuilt their credit and driven away in their dream vehicle through Driving with Perks
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Type Selection */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((type, idx) => (
              <Card
                key={idx}
                className="border-2 border-blue-200 hover:border-blue-500 transition-all cursor-pointer overflow-hidden group"
                onClick={() => navigate(type.path)}
              >
                <div className={`bg-gradient-to-br ${type.color} h-40 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform`}>
                  {type.icon}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {type.description}
                  </p>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(type.path);
                    }}
                  >
                    Apply Now →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 lg:py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <div>
                <p className="font-bold text-gray-900">4.9 Stars</p>
                <p className="text-sm text-gray-600">Google Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-green-500 fill-green-500" />
              <div>
                <p className="font-bold text-gray-900">4.8 Stars</p>
                <p className="text-sm text-gray-600">Trustpilot</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-bold text-gray-900">10,000+</p>
                <p className="text-sm text-gray-600">Canadians Approved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Apply",
                desc: "Complete our easy online application in minutes. Pick your vehicle, your budget and wait for our call!",
                icon: "📝",
              },
              {
                step: "2",
                title: "We find you the best deal",
                desc: "Our financing specialist will review your application and present you with approved vehicle options within your budget.",
                icon: "🔍",
              },
              {
                step: "3",
                title: "Drive away in your new car",
                desc: "After agreeing to the best deal, you can pick up your vehicle or have it delivered right to your door.",
                icon: "🚗",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Step {item.step}. {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
            Real Customer Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Apply today. Get approved tomorrow!
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Faster than you can shovel snow in front of your garage door.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-6"
            onClick={() => navigate("/apply")}
          >
            Start Your Application Now →
          </Button>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Fast Approval</h3>
              <p className="text-sm text-gray-600">
                Get approved in as little as 24 hours
              </p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">All Credit Types</h3>
              <p className="text-sm text-gray-600">
                Bad credit, no credit, or excellent credit
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Build Your Credit</h3>
              <p className="text-sm text-gray-600">
                Every payment helps rebuild your credit score
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
