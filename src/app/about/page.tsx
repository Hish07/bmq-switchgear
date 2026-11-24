import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Wrench,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About BMQ Electrical Switchgear LLC | UAE LV Switchgear Manufacturer",
  description:
    "Learn about BMQ Electrical Switchgear LLC, a UAE-based specialist in the design, manufacturing and supply of low-voltage electrical distribution boards and control panels.",
};

const values = [
  {
    icon: CheckCircle2,
    title: "Quality",
    desc: "Every panel we manufacture is built with attention to quality in materials, assembly, wiring and testing.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    desc: "We work closely with clients to understand their project requirements and deliver panels that meet their specifications.",
  },
  {
    icon: Wrench,
    title: "Technical Competence",
    desc: "Our team applies engineering knowledge and manufacturing expertise to design and build reliable switchgear solutions.",
  },
  {
    icon: Heart,
    title: "Reliability",
    desc: "We are committed to consistent, dependable manufacturing and supply so our customers can trust BMQ for their projects.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-800 pt-32 pb-16">
        <div className="container-custom max-w-3xl">
          <span className="section-label block mb-3">Who We Are</span>
          <h1 className="section-title-white mb-5">About BMQ Electrical Switchgear LLC</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            UAE-based specialist in the design, manufacturing, assembly and supply
            of customised low-voltage electrical distribution boards and control
            panels.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">Company Overview</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              BMQ Electrical Switchgear LLC is a low-voltage electrical switchgear
              manufacturing and sales company based in the United Arab Emirates. The
              company specialises in the design, manufacturing, assembly and supply
              of customised low-voltage electrical distribution boards and control
              panels.
            </p>
            <p>
              BMQ manufactures and supplies electrical panels according to individual
              project requirements, electrical specifications and customer needs. The
              company&apos;s product portfolio covers power distribution, motor
              control, power factor correction, automatic and manual power transfer,
              electrical isolation and application-specific control panels.
            </p>
            <p>
              BMQ operates dedicated manufacturing equipment including a CNC
              hydraulic guillotine shear, panel and busbar punching machine, and
              sheet metal folding equipment, enabling in-house enclosure fabrication
              and copper busbar processing.
            </p>
            <p>
              The company serves clients including MEP contractors, main contractors,
              electrical consultants, facilities management companies, real estate
              developers and industrial operators across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="p-3 bg-navy-50 rounded-xl w-fit mb-4">
                <Eye className="w-7 h-7 text-navy-700" />
              </div>
              <h2 className="text-xl font-bold text-navy-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be a recognised and trusted low-voltage switchgear manufacturer
                in the UAE, known for quality manufacturing, reliable products and
                professional service to the construction and engineering industry.
              </p>
            </div>
            <div className="card p-8">
              <div className="p-3 bg-amber-50 rounded-xl w-fit mb-4">
                <Target className="w-7 h-7 text-amber-500" />
              </div>
              <h2 className="text-xl font-bold text-navy-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To design, manufacture and supply customised low-voltage electrical
                switchgear solutions that meet the technical requirements of our
                customers&apos; projects, delivered with professionalism, accuracy
                and consistent quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-label block mb-3">What Guides Us</span>
            <h2 className="section-title">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6 text-center">
                <div className="p-3 bg-amber-50 rounded-xl w-fit mx-auto mb-4">
                  <Icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-bold text-navy-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Approach */}
      <section className="py-16 bg-navy-800">
        <div className="container-custom max-w-3xl text-center">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest block mb-3">
            How We Work
          </span>
          <h2 className="section-title-white mb-5">
            Customisation & Manufacturing Approach
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            BMQ does not manufacture standard, off-the-shelf panel designs. Every
            panel is engineered and built to the specific requirements of the
            individual project.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            The process begins with a detailed review of the customer&apos;s
            electrical requirements, single line diagrams (SLD) and specifications.
            From this, BMQ prepares a technical proposal, general arrangement
            drawings and bill of materials before proceeding with manufacturing,
            assembly, inspection and delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/manufacturing" className="btn-primary text-sm">
              View Manufacturing Process
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact#rfq" className="btn-secondary text-sm">
              <Zap className="w-4 h-4" />
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
