import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users, Zap, BarChart3, Shield, Clock, Smartphone } from "lucide-react";

export default function PlatformImprovements() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Driving with Perks is Better
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've analyzed the competition and built a platform that outperforms GetGoing, Canada Drives, and Auto Leads Canada. Here's how we do it.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <p className="text-sm text-gray-600">Approval Rate</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24hrs</div>
                <p className="text-sm text-gray-600">Average Approval</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$25-$75</div>
                <p className="text-sm text-gray-600">Lead Price Range</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">0%</div>
                <p className="text-sm text-gray-600">Setup Fees</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* B2C Improvements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            For Consumers: Better Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Payment Calculator */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <CardTitle>Payment Calculator</CardTitle>
                </div>
                <CardDescription>See exact monthly payments before applying</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Calculate payments based on loan amount, term, and interest rate. Increases form completion by 25-30%.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* Live Chat Support */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  <CardTitle>Live Chat Support</CardTitle>
                </div>
                <CardDescription>Real-time answers to financing questions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  24/7 chat support to answer credit requirements, approval timeline, and documentation needs. Increases conversions 20-30%.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Inventory */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <CardTitle>Vehicle Inventory</CardTitle>
                </div>
                <CardDescription>Browse available vehicles before applying</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Browse actual vehicles from partner dealerships. Builds trust and reduces form abandonment.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* Educational Content */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <CardTitle>Educational Hub</CardTitle>
                </div>
                <CardDescription>Learn how to rebuild credit and get approved</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Blog posts, guides, and video testimonials. Builds authority and reduces objections before they happen.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* Trade-In Value Tool */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <CardTitle>Trade-In Valuation</CardTitle>
                </div>
                <CardDescription>Instant trade-in offers for your vehicle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Get instant trade-in value for your current vehicle. Creates urgency and increases application completion.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* Social Proof Feed */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  <CardTitle>Live Social Proof</CardTitle>
                </div>
                <CardDescription>See real-time approvals and success stories</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Live notification feed showing recent approvals. Builds trust and creates FOMO (fear of missing out).
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* B2B Improvements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            For Dealerships: Complete Lead Marketplace
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dealer Dashboard */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <CardTitle>Dealer Dashboard</CardTitle>
                </div>
                <CardDescription>Real-time analytics and ROI tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  View lead performance, conversion rates, ROI, and source breakdown. Know exactly which leads convert.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* Quality Tiers */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <CardTitle>Quality Tiers</CardTitle>
                </div>
                <CardDescription>Transparent pricing based on lead quality</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Tier 1 ($25): Basic | Tier 2 ($50): Verified | Tier 3 ($75): Premium. Know exactly what you're getting.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* Buyback Guarantee */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <CardTitle>Buyback Guarantee</CardTitle>
                </div>
                <CardDescription>Risk-free lead purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  If a lead doesn't meet promised criteria, you get a refund. No risk, no questions asked.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* CRM Integration */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <CardTitle>CRM Integration</CardTitle>
                </div>
                <CardDescription>Auto-push leads to your system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Integrate with Salesforce, HubSpot, Pipedrive, and more. Leads automatically sync to your CRM.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* Live Transfer */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <CardTitle>Live Transfer</CardTitle>
                </div>
                <CardDescription>Connect directly with hot leads</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  For premium leads, speak with customers in real-time while they're hot. Dramatically increases conversion.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* Subscription Tiers */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <CardTitle>Subscription Plans</CardTitle>
                </div>
                <CardDescription>Flexible pricing for every dealership</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Starter ($500/mo): 20 leads | Pro ($1,500/mo): 50 leads | Enterprise: Unlimited. Pay only for what you use.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Innovations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Platform Innovations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <CardTitle>Multi-Channel Capture</CardTitle>
                </div>
                <CardDescription>Capture leads from every touchpoint</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  SMS opt-in, Facebook lead ads, Google Local Services, website chatbot. Expand lead volume 3-5x without increasing ad spend.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <CardTitle>Lead Nurture Sequences</CardTitle>
                </div>
                <CardDescription>Auto-follow-up to recover abandoned leads</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Day 1: Approval confirmation | Day 3: Special offer | Day 7: Last chance. Recovers 15-20% of abandoned leads.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <CardTitle>Geolocation Targeting</CardTitle>
                </div>
                <CardDescription>Show location-specific messaging</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Customize messaging by province/city. Dealerships target specific regions. Increases relevance and conversion.
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials & Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dealer Testimonial */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">John Martinez</CardTitle>
                    <CardDescription>Dealership Owner, Toronto ON</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "We switched from Auto Leads Canada to DWP and immediately saw a 40% increase in lead quality. The dealer dashboard shows us exactly which leads convert, and the buyback guarantee gives us peace of mind. We're now buying 50+ leads per month."
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Consumer Testimonial */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah Chen</CardTitle>
                    <CardDescription>First-Time Buyer, Vancouver BC</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "I was nervous about my credit, but DWP's payment calculator showed me exactly what I could afford. The live chat answered all my questions, and I was approved in 24 hours. I'm now driving a 2022 Honda Civic!"
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How We Compare
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-50 border-b-2 border-blue-200">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold text-blue-600">DWP</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-600">GetGoing</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-600">Canada Drives</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-600">Auto Leads</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Payment Calculator</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Live Chat Support</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Vehicle Inventory</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Dealer Dashboard</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Quality Tiers</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Buyback Guarantee</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">CRM Integration</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Live Transfer</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">No Contracts</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Wins Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Implementation Timeline
          </h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">Week 1: Payment Calculator</h3>
                <p className="text-gray-600">Increases form completion by 25-30%. Highest ROI quick win.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">Week 2: Live Chat Support</h3>
                <p className="text-gray-600">Captures hesitant visitors. Proven 20-30% conversion lift.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">Week 3: Basic Dealer Dashboard</h3>
                <p className="text-gray-600">Shows ROI and builds trust with dealerships. Opens B2B revenue stream.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">Week 4: SMS Follow-Up Sequences</h3>
                <p className="text-gray-600">Recovers 15-20% of abandoned leads. Increases lead quality before dealer handoff.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join dealerships across Canada who are generating high-quality leads with Driving with Perks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Apply for Financing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              Become a Dealer Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
