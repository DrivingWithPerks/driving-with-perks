import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/manus-storage/dwp-logo_e7452409.jpg"
              alt="Driving with Perks"
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Helping all credit types get behind the wheel. We specialize in credit rebuilding and automotive financing solutions tailored to your situation.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-[var(--navy)] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/apply", label: "Apply Now" },
                { href: "/subprime", label: "Challenged Credit" },
                { href: "/prime", label: "Prime Financing" },
                { href: "/credit-education", label: "Credit Education" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--gold)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Subprime Auto Financing</li>
              <li>Prime Auto Loans</li>
              <li>Credit Rebuilding Programs</li>
              <li>Trade-In Assistance</li>
              <li>First-Time Buyer Programs</li>
              <li>Bankruptcy Recovery Financing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-[var(--gold)] shrink-0" />
                <span>(800) 555-DRIVE</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-[var(--gold)] shrink-0" />
                <span>info@drivinwithperks.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--gold)] shrink-0" />
                <span>Serving customers across Canada</span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white/80 text-xs leading-relaxed">
                <span className="text-[var(--gold)] font-semibold">Hours:</span> Mon–Fri 8am–8pm<br />
                Sat 9am–6pm · Sun Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Driving with Perks. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "FCRA Disclosure", href: "/fcra-disclosure" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-white/40 hover:text-white/70 text-xs transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
