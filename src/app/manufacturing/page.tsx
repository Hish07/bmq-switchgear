import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Process | BMQ Electrical Switchgear LLC UAE",
  description:
    "Explore BMQ's switchgear manufacturing process — from customer enquiry and design through fabrication, copper busbar processing, wiring, inspection and delivery.",
};

const steps = [
  {
    num: "01",
    title: "Customer Enquiry & Requirement Analysis",
    desc: "The process begins when a customer submits their electrical requirements, SLD, specifications or BOQ. BMQ reviews the project scope, load schedules and applicable standards to understand the full panel requirement.",
  },
  {
    num: "02",
    title: "Technical Review & Electrical Design",
    desc: "Our technical team reviews the requirements and prepares the electrical design for the panel, including component selection, busbar sizing, internal arrangement and circuit protection coordination.",
  },
  {
    num: "03",
    title: "SLD, GA Drawings & BOM Preparation",
    desc: "A single line diagram (SLD), general arrangement drawing (GA) and bill of materials (BOM) are prepared for customer review and approval before manufacturing begins.",
  },
  {
    num: "04",
    title: "Material Procurement",
    desc: "Following drawing approval, components and materials are procured. BMQ uses components from established electrical brands appropriate to the panel specification and project requirements.",
  },
  {
    num: "05",
    title: "Enclosure Fabrication",
    desc: "Panel enclosures are fabricated in-house using our CNC hydraulic guillotine shear and pan-and-box folding machine. Steel sheets are cut, bent and formed to produce the panel enclosure.",
  },
  {
    num: "06",
    title: "Copper Busbar Processing",
    desc: "Copper busbars are cut, bent and punched to size using our dedicated busbar punching machine. Busbars are then cleaned, insulated and fitted into the panel enclosure.",
  },
  {
    num: "07",
    title: "Component Mounting",
    desc: "Electrical components including MCCBs, MCBs, contactors, relays and other devices are mounted and secured to the panel framework and DIN rails in accordance with the approved GA drawing.",
  },
  {
    num: "08",
    title: "Electrical Wiring & Assembly",
    desc: "All wiring is carried out using appropriately sized and colour-coded cables. Each connection is made in accordance with the wiring diagram, with cable identification labels applied throughout.",
  },
  {
    num: "09",
    title: "Inspection & Testing",
    desc: "Completed panels undergo inspection and testing to verify wiring continuity, insulation resistance, correct phasing, component function and overall assembly quality before dispatch.",
  },
  {
    num: "10",
    title: "Documentation & Delivery",
    desc: "Panel documentation including wiring diagrams, component schedules and test records are prepared and delivered with the panel to the customer.",
  },
];

const machines = [
  {
    img: "/images/machinery/shearing-machine.jpg",
    title: "CNC Hydraulic Guillotine Shear",
    desc: "Omega QC12Y-4×2500. Used for precision cutting of steel sheets for panel enclosure fabrication. 4mm capacity × 2500mm cutting width.",
  },
  {
    img: "/images/machinery/bending-machine.jpg",
    title: "Pan & Box Folder",
    desc: "Weida manual pan-and-box folding machine. Used for bending and forming steel sheets into panel enclosure boxes and covers.",
  },
  {
    img: "/images/machinery/busbar-punching-machine.jpg",
    title: "Panel & Busbar Punching Machine",
    desc: "Hydraulic punch press with panel punching and busbar punching functions. Used for cutting cable entry holes and punching copper busbars.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-800 pt-32 pb-16">
        <div className="container-custom max-w-3xl">
          <span className="section-label block mb-3">How We Build</span>
          <h1 className="section-title-white mb-5">Manufacturing Process</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            BMQ&apos;s complete panel manufacturing workflow — from initial
            customer enquiry through design, fabrication, wiring, testing and
            final delivery.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-navy-200 to-transparent hidden md:block" />
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.num} className="md:flex gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-navy-800 text-amber-400 font-black text-lg flex items-center justify-center shadow-lg z-10 relative">
                    {step.num}
                  </div>
                  <div className="mt-4 md:mt-0 card p-6 flex-1">
                    <h3 className="font-bold text-navy-800 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Equipment */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-label block mb-3">Our Equipment</span>
            <h2 className="section-title">In-House Manufacturing Equipment</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              BMQ operates dedicated fabrication equipment enabling in-house panel
              enclosure fabrication and copper busbar processing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {machines.map((m) => (
              <div key={m.title} className="card overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={m.img}
                    alt={m.title + " at BMQ Electrical Switchgear"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy-800 mb-2">{m.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Interested in BMQ&apos;s Manufacturing Capability?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Submit your project requirements and our team will prepare a technical
            proposal tailored to your specification.
          </p>
          <Link href="/contact#rfq" className="btn-primary">
            <Zap className="w-4 h-4" />
            Request a Quotation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
