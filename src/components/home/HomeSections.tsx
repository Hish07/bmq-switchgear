import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Factory,
  Shield,
  Settings,
  Building2,
  Cpu,
  ToggleLeft,
  Battery,
  Wrench,
  CheckCircle2,
  Users,
  Clock,
  Award,
} from "lucide-react";

// ─── Hero Section ───────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/machinery/shearing-machine.jpg"
          alt="BMQ Electrical Switchgear manufacturing facility UAE"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Deep navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-800/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-32 pt-40">
        <div className="max-w-3xl">
          <span className="section-label block mb-4">
            Low Voltage Switchgear Manufacturer · United Arab Emirates
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
            Powering Every{" "}
            <span className="text-amber-400">Connection.</span>
            <br />
            Engineering Every{" "}
            <span className="text-amber-400">Detail.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
            Reliable Low Voltage Switchgear Solutions, Designed and Manufactured
            for Your Requirements. From MDBs and MCCs to ATS panels and capacitor
            banks — customised to your project specifications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="btn-primary text-base py-4 px-8">
              Explore Our Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact#rfq" className="btn-secondary text-base py-4 px-8">
              <Zap className="w-5 h-5" />
              Request a Quotation
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-gray-400 animate-pulse" />
      </div>
    </section>
  );
}

// ─── Trust Bar ───────────────────────────────────────────────────────────────
const trustItems = [
  { icon: Factory, label: "In-house Manufacturing" },
  { icon: Settings, label: "Custom-Built Panels" },
  { icon: Shield, label: "Quality Assured" },
  { icon: Wrench, label: "Full Documentation" },
  { icon: Clock, label: "Fast Estimation" },
  { icon: Award, label: "IEC Standards Reference" },
];

export function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container-custom py-5">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-navy-700">
              <Icon className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Company Intro ───────────────────────────────────────────────────────────
export function CompanyIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="section-label block mb-3">Who We Are</span>
            <h2 className="section-title mb-6">
              UAE-Based Low Voltage Switchgear Manufacturer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              BMQ Electrical Switchgear LLC is a UAE-based specialist in the
              design, manufacturing, assembly and supply of customised low-voltage
              electrical distribution boards and control panels.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We manufacture and supply electrical panels according to individual
              project requirements, electrical specifications and customer needs.
              Our product portfolio covers power distribution, motor control, power
              factor correction, automatic and manual power transfer, electrical
              isolation and application-specific control panels.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              BMQ is committed to providing reliable, professionally assembled
              electrical switchgear solutions for commercial, residential,
              industrial and infrastructure applications across the UAE.
            </p>
            <div className="flex gap-4">
              <Link href="/about" className="btn-outline text-sm">
                About BMQ
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/manufacturing" className="text-navy-700 hover:text-amber-500 font-semibold text-sm flex items-center gap-1 transition-colors">
                Our Manufacturing →
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/shop/shop-front.jpg"
              alt="BMQ Electrical Switchgear LLC facility UAE"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 bg-amber-500 text-navy-900 px-4 py-2 rounded-lg">
              <p className="font-bold text-sm">BMQ Electrical Switchgear LLC</p>
              <p className="text-xs opacity-80">United Arab Emirates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Product Categories ──────────────────────────────────────────────────────
const categories = [
  {
    icon: Building2,
    label: "Power Distribution Panels",
    desc: "MDB, SMDB, DB/FDB, Meter Cabinet, Cut-out, Socket Panel",
    href: "/products#power-distribution",
    count: 6,
  },
  {
    icon: Battery,
    label: "Power Factor Correction",
    desc: "Capacitor Banks and APFC panels for reactive power compensation",
    href: "/products#power-factor-correction",
    count: 1,
  },
  {
    icon: Cpu,
    label: "Motor Control Panels",
    desc: "MCC, DOL, Star-Delta, VFD Starters and Pool Control Panels",
    href: "/products#motor-control",
    count: 5,
  },
  {
    icon: Zap,
    label: "Power Transfer & Source Management",
    desc: "ATS, MTS and Synchronizing Panels for supply changeover",
    href: "/products#power-transfer",
    count: 3,
  },
  {
    icon: ToggleLeft,
    label: "Switching & Isolation",
    desc: "Isolators and disconnecting switches for safe isolation",
    href: "/products#switching-isolation",
    count: 1,
  },
];

export function ProductCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-label block mb-3">What We Manufacture</span>
          <h2 className="section-title">Complete Switchgear Product Range</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            16 product types across five categories, all custom-built to your
            project specifications and electrical requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, label, desc, href, count }) => (
            <Link
              key={href}
              href={href}
              className="card p-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-navy-50 rounded-xl group-hover:bg-navy-700 transition-colors">
                  <Icon className="w-6 h-6 text-navy-700 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-semibold text-amber-500 bg-amber-50 px-2 py-1 rounded-full">
                  {count} {count === 1 ? "product" : "products"}
                </span>
              </div>
              <h3 className="text-navy-800 font-bold mb-2 group-hover:text-navy-700">
                {label}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
              <span className="text-sm font-semibold text-amber-500 group-hover:text-amber-600 flex items-center gap-1 transition-colors">
                View Products <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
          {/* Full catalogue CTA */}
          <Link
            href="/products"
            className="card p-6 bg-navy-800 border-navy-700 group hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            <Zap className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-white font-bold mb-2">View Full Catalogue</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Browse all 16 products with technical details and enquiry options
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Manufacturing Highlight ─────────────────────────────────────────────────
const machines = [
  {
    img: "/images/machinery/shearing-machine.jpg",
    title: "CNC Hydraulic Guillotine Shear",
    model: "Omega QC12Y-4×2500",
    desc: "4mm capacity × 2500mm cutting width for precision steel sheet cutting and panel blank preparation.",
  },
  {
    img: "/images/machinery/bending-machine.jpg",
    title: "Pan & Box Folder",
    model: "Weida Manual Folder",
    desc: "Sheet metal bending and forming for enclosure fabrication and panel box construction.",
  },
  {
    img: "/images/machinery/busbar-punching-machine.jpg",
    title: "Panel & Busbar Punching Machine",
    model: "Hydraulic Punch Press",
    desc: "Precision punching for panel cutouts, cable entries and copper busbar hole punching.",
  },
];

export function ManufacturingHighlight() {
  return (
    <section className="py-20 bg-navy-800 clip-diagonal-down">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest block mb-3">
            In-House Manufacturing
          </span>
          <h2 className="section-title-white">Our Manufacturing Capability</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            BMQ operates dedicated manufacturing equipment for in-house panel
            fabrication, busbar processing and enclosure preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {machines.map((m) => (
            <div
              key={m.title}
              className="bg-navy-900/60 rounded-xl overflow-hidden border border-navy-600 hover:border-amber-500/50 transition-colors group"
            >
              <div className="relative h-52">
                <Image
                  src={m.img}
                  alt={m.title + " at BMQ Electrical Switchgear"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
              </div>
              <div className="p-5">
                <div className="font-mono text-amber-400 text-xs mb-1">{m.model}</div>
                <h3 className="text-white font-bold mb-2">{m.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/manufacturing"
            className="btn-secondary text-sm"
          >
            View Manufacturing Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Industries Served ───────────────────────────────────────────────────────
const industries = [
  { icon: "🏢", label: "Commercial Buildings" },
  { icon: "🏗️", label: "Residential Complexes" },
  { icon: "🏭", label: "Industrial Facilities" },
  { icon: "🏨", label: "Hotels & Hospitality" },
  { icon: "🛍️", label: "Shopping Malls" },
  { icon: "🏥", label: "Hospitals & Healthcare" },
  { icon: "🌐", label: "Infrastructure & Utilities" },
  { icon: "💧", label: "Water Treatment & Pumping" },
  { icon: "🏊", label: "Swimming Pool Systems" },
];

export function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-label block mb-3">Sectors We Serve</span>
          <h2 className="section-title">Industries & Applications</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            BMQ switchgear products serve a wide range of commercial, residential,
            industrial and infrastructure applications across the UAE.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map(({ icon, label }) => (
            <div
              key={label}
              className="card p-5 text-center hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <p className="text-sm font-semibold text-navy-700">{label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/industries" className="btn-outline text-sm">
            View All Applications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose BMQ ──────────────────────────────────────────────────────────
const reasons = [
  {
    icon: Factory,
    title: "In-House Fabrication",
    desc: "We manufacture panel enclosures and process copper busbars in-house using dedicated fabrication equipment.",
  },
  {
    icon: Settings,
    title: "Custom to Your Specification",
    desc: "Every panel is designed and built to your project's electrical requirements, not from a generic template.",
  },
  {
    icon: Shield,
    title: "Quality Focused",
    desc: "Each panel undergoes inspection and testing before dispatch to verify assembly, wiring and functionality.",
  },
  {
    icon: Users,
    title: "Direct Manufacturer",
    desc: "Working directly with the manufacturer ensures clear communication, faster revisions and reliable supply.",
  },
  {
    icon: Wrench,
    title: "Full Documentation",
    desc: "We provide wiring diagrams, schematic drawings and test records as part of the panel delivery package.",
  },
  {
    icon: CheckCircle2,
    title: "UAE-Based Operations",
    desc: "Local manufacturing and operations mean faster lead times, easier site access and local support across the UAE.",
  },
];

export function WhyChooseBMQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-label block mb-3">Our Strengths</span>
          <h2 className="section-title">Why Choose BMQ?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-6">
              <div className="p-3 bg-amber-50 rounded-xl w-fit mb-4">
                <Icon className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-navy-800 font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── RFQ CTA Banner ──────────────────────────────────────────────────────────
export function RFQBanner() {
  return (
    <section className="py-20 bg-navy-800">
      <div className="container-custom text-center">
        <Zap className="w-12 h-12 text-amber-400 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Have a Project? Get a Quotation Today.
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
          Share your requirements, SLD or BOQ and our team will prepare a
          technical and commercial proposal for your panel requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact#rfq" className="btn-primary text-base py-4 px-8">
            <Zap className="w-5 h-5" />
            Request a Quotation
          </Link>
          <Link href="/contact" className="btn-secondary text-base py-4 px-8">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
