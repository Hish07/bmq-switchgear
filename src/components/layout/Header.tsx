"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Zap } from "lucide-react";

const navLinks = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products", href: "/products" },
      { label: "Power Distribution Panels", href: "/products#power-distribution" },
      { label: "Motor Control Panels", href: "/products#motor-control" },
      { label: "Power Transfer & ATS", href: "/products#power-transfer" },
      { label: "Power Factor Correction", href: "/products#power-factor-correction" },
      { label: "Switching & Isolation", href: "/products#switching-isolation" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Quality", href: "/quality" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-800 shadow-lg" : "bg-navy-800/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo/bmq-logo.jpg"
                alt="BMQ Electrical Switchgear LLC"
                fill
                className="object-contain rounded"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight">BMQ</div>
              <div className="text-amber-400 text-xs font-medium leading-tight">
                Electrical Switchgear LLC
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-gray-200 hover:text-amber-400 px-4 py-2 text-sm font-medium transition-colors">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-200 hover:text-amber-400 px-4 py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact#rfq"
              className="hidden md:flex btn-primary text-sm py-2.5 px-5"
            >
              <Zap className="w-4 h-4" />
              Request a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white hover:text-amber-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-700">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block text-gray-200 hover:text-amber-400 py-3 text-sm font-medium border-b border-navy-700 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact#rfq"
                className="btn-primary w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                <Zap className="w-4 h-4" />
                Request a Quotation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
