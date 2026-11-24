import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries & Applications | BMQ Electrical Switchgear LLC UAE",
  description:
    "BMQ Electrical Switchgear supplies LV distribution boards, MCC panels and switchgear for residential, commercial, industrial, hospitality, healthcare, infrastructure and more across UAE.",
};

const industries = [
  {
    emoji: "🏢",
    title: "Commercial Buildings",
    desc: "Office towers, business parks and mixed-use developments require MDBs, SMDBs and final distribution boards for structured power distribution across multiple floors and tenancies.",
    products: ["MDB", "SMDB", "DB/FDB", "Meter Cabinet", "Capacitor Bank"],
  },
  {
    emoji: "🏗️",
    title: "Residential Complexes",
    desc: "Apartment buildings, residential towers and villas require metered distribution systems, tenant distribution boards and distribution infrastructure from utility supply to individual units.",
    products: ["MDB", "SMDB", "Meter Cabinet", "DB/FDB", "Cut-out"],
  },
  {
    emoji: "🏭",
    title: "Industrial Facilities",
    desc: "Factories, warehouses and industrial premises have significant motor loads requiring MCC panels, motor starters and VFD panels alongside main power distribution boards.",
    products: ["MCC", "MDB", "DOL Starter", "Star-Delta Starter", "VFD Starter", "Capacitor Bank", "ATS"],
  },
  {
    emoji: "🏨",
    title: "Hotels & Hospitality",
    desc: "Hotels and resorts require reliable power distribution throughout guest areas, plant rooms and service areas, along with generator backup systems for critical areas.",
    products: ["MDB", "SMDB", "DB/FDB", "ATS", "Swimming Pool Control Panel"],
  },
  {
    emoji: "🛍️",
    title: "Shopping Malls",
    desc: "Large retail developments require extensive power distribution networks, tenant metering and power factor correction to manage the demands of diverse retail tenants and common areas.",
    products: ["MDB", "SMDB", "Meter Cabinet", "Capacitor Bank", "ATS"],
  },
  {
    emoji: "🏥",
    title: "Hospitals & Healthcare",
    desc: "Healthcare facilities have critical power requirements including essential services supply. Automatic transfer switches ensure continuous power for critical areas during mains supply interruptions.",
    products: ["MDB", "SMDB", "ATS", "MTS", "Isolator"],
  },
  {
    emoji: "🌐",
    title: "Infrastructure & Utilities",
    desc: "Infrastructure projects including electrical substations, utility buildings and public facilities require robust distribution switchgear built to handle the demands of continuous operation.",
    products: ["MDB", "SMDB", "Isolator", "ATS", "Capacitor Bank"],
  },
  {
    emoji: "💧",
    title: "Water Treatment & Pumping",
    desc: "Water treatment plants and pumping stations operate multiple large motors requiring dedicated MCC panels and motor starter systems to control and protect pumping equipment.",
    products: ["MCC", "DOL Starter", "Star-Delta Starter", "VFD Starter", "ATS", "Capacitor Bank"],
  },
  {
    emoji: "🏊",
    title: "Swimming Pool Systems",
    desc: "Swimming pools and aquatic facilities require dedicated electrical control panels for filtration pump motor control, automatic operation timing and electrical safety provisions.",
    products: ["Swimming Pool Control Panel", "DOL Starter"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-16">
        <div className="container-custom max-w-3xl">
          <span className="section-label block mb-3">Sectors We Serve</span>
          <h1 className="section-title-white mb-5">Industries & Applications</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            BMQ Electrical Switchgear products serve a wide range of commercial,
            residential, industrial and infrastructure applications across the UAE.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map(({ emoji, title, desc, products }) => (
              <div key={title} className="card p-7">
                <div className="text-4xl mb-4">{emoji}</div>
                <h2 className="text-xl font-bold text-navy-800 mb-3">{title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{desc}</p>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                    Relevant Products
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {products.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-semibold bg-navy-50 text-navy-700 px-3 py-1 rounded-full border border-navy-100"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-navy-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Working on a project in one of these sectors?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Contact BMQ with your switchgear requirements and our team will
            prepare a technical and commercial proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact#rfq" className="btn-primary">
              <Zap className="w-4 h-4" />
              Request a Quotation
            </Link>
            <Link href="/products" className="btn-secondary">
              View Our Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
