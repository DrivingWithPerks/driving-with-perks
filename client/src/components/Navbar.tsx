import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const isDark = location === "/" || location === "/subprime" || location === "/prime";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/apply", label: "Apply Now" },
    { href: "/subprime", label: "Challenged Credit" },
    { href: "/prime", label: "Prime Financing" },
    { href: "/credit-education", label: "Credit Education" },
  ];

  const baseNav = isDark && !scrolled
    ? "bg-transparent text-white"
    : "bg-white/95 backdrop-blur-md text-[var(--navy)] shadow-luxury";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${baseNav}`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/manus-storage/dwp-logo_e7452409.jpg"
              alt="Driving with Perks"
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-[var(--gold)] font-semibold"
                    : isDark && !scrolled
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-[var(--navy)] hover:text-[var(--gold)] hover:bg-[var(--secondary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="bg-gold text-[var(--navy-dark)] hover:opacity-90 font-semibold px-6 shadow-sm"
            >
              <Link href="/apply">Get Pre-Approved</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--border)] shadow-luxury-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "bg-[var(--secondary)] text-[var(--gold)] font-semibold"
                    : "text-[var(--navy)] hover:bg-[var(--secondary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[var(--border)] mt-2">
              <Button
                asChild
                className="w-full bg-gold text-[var(--navy-dark)] hover:opacity-90 font-semibold"
              >
                <Link href="/apply" onClick={() => setIsOpen(false)}>Get Pre-Approved</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
