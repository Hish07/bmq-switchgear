import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

const productLinks = [
  { label: "Main Distribution Board (MDB)", href: "/products/mdb-main-distribution-board" },
  { label: "Sub-Main Distribution Board", href: "/products/smdb-sub-main-distribution-board" },
  { label: "Motor Control Centre (MCC)", href: "/products/mcc-motor-control-centre" },
  { label: "Automatic Transfer Switch", href: "/products/ats-automatic-transfer-switch" },
  { label: "Capacitor Bank / APFC", href: "/products/capacitor-bank-apfc-panel" },
  { label: "VFD Starter", href: "/products/vfd-starter" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Quality & Standards", href: "/quality" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo/bmq-logo.jpg"
                  alt="BMQ Electrical Switchgear LLC"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">BMQ</div>
                <div className="text-amber-400 text-xs font-medium">
                  Electrical Switchgear LLC
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Specialist manufacturer and supplier of low-voltage electrical
              distribution boards, switchgear panels and motor control panels in
              the United Arab Emirates.
            </p>
            <Link href="/contact#rfq" className="btn-primary text-sm py-2.5 px-4">
              <Zap className="w-4 h-4" />
              Request a Quote
            </Link>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Products
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  ICAD 1, Musaffah,<br />P.O. Box 33160,<br />Abu Dhabi, U.A.E
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Tel: (02) 5548641<br />Fax: (02) 5548642
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@switchgearuae.com"
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                >
                  info@switchgearuae.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} BMQ Electrical Switchgear LLC. All rights reserved.
          </p>
          <p>
            Low Voltage Switchgear Manufacturer &middot; United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
