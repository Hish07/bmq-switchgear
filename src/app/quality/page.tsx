import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Shield, FileText, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Standards | BMQ Electrical Switchgear LLC UAE",
  description:
    "BMQ's quality control approach covering incoming material inspection, assembly inspection, wiring verification, electrical testing and IEC standard references for LV switchgear.",
};

const qcSteps = [
  {
    icon: CheckCircle2,
    title: "Incoming Material Inspection",
    desc: "Electrical components and materials are inspected upon receipt to verify they match the specified brand, rating and type before being used in panel assembly.",
  },
  {
    icon: CheckCircle2,
    title: "Assembly Inspection",
    desc: "Completed mechanical assembly is inspected to verify correct component placement, secure mounting, busbar installation, cable trunking arrangement and overall workmanship.",
  },
  {
    icon: CheckCircle2,
    title: "Wiring Verification",
    desc: "Panel wiring is checked against the approved wiring diagram to verify all connections, cable sizing, colour coding and labelling before electrical testing.",
  },
  {
    icon: CheckCircle2,
    title: "Electrical Testing",
    desc: "Basic electrical tests including insulation resistance testing and continuity verification are performed to confirm the electrical integrity of the completed panel.",
  },
  {
    icon: CheckCircle2,
    title: "Functional Testing",
    desc: "Where applicable, functional testing is carried out to verify correct operation of control circuits, protection relays, interlocks and indication devices.",
  },
  {
    icon: FileText,
    title: "Documentation & Traceability",
    desc: "Panel documentation including wiring diagrams, component schedules and test records are prepared and delivered with each panel as part of the standard delivery package.",
  },
];

const standards = [
  {
    code: "IEC 61439-1",
    title: "Low-voltage switchgear and controlgear assemblies — General rules",
    note: "The primary international standard for LV switchgear assemblies. BMQ references this standard in the design and manufacture of distribution boards and control panels.",
  },
  {
    code: "IEC 61439-2",
    title: "Power switchgear and controlgear assemblies",
    note: "Covers power switchgear assemblies including MDBs, SMDBs and MCCs.",
  },
  {
    code: "IEC 60947",
    title: "Low-voltage switchgear and controlgear",
    note: "Covers individual devices used in panels including MCCBs, MCBs, contactors and motor protection relays.",
  },
  {
    code: "IEC 60529",
    title: "Degrees of protection provided by enclosures (IP Code)",
    note: "Governs the ingress protection rating of panel enclosures selected for the installation environment.",
  },
];

export default function QualityPage() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-16">
        <div className="container-custom max-w-3xl">
          <span className="section-label block mb-3">Our Standards</span>
          <h1 className="section-title-white mb-5">Quality & Standards</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            BMQ&apos;s quality control approach and the international standards
            that guide our panel design and manufacturing practices.
          </p>
        </div>
      </section>

      {/* Quality Approach */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="section-label block mb-3">Quality Control</span>
            <h2 className="section-title">Our Quality Control Approach</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              BMQ applies quality control at each stage of the manufacturing
              process to ensure panels meet the required standard before dispatch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qcSteps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6">
                <div className="p-2 bg-green-50 rounded-lg w-fit mb-3">
                  <Icon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-navy-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IEC Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="mb-10 text-center">
            <span className="section-label block mb-3">Standards Reference</span>
            <h2 className="section-title">Relevant IEC Standards</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              BMQ references the following IEC standards in the design and
              manufacture of low-voltage switchgear assemblies. Standard
              compliance requirements are determined based on each project&apos;s
              specification and applicable authority requirements.
            </p>
          </div>
          <div className="space-y-4">
            {standards.map((s) => (
              <div key={s.code} className="card p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="w-6 h-6 text-navy-500" />
                </div>
                <div>
                  <div className="font-mono text-sm text-amber-500 font-semibold mb-1">
                    {s.code}
                  </div>
                  <h3 className="font-bold text-navy-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-700 leading-relaxed">
            <strong>Note:</strong> BMQ references IEC standards as design guidelines
            for panel construction. BMQ does not currently hold formal third-party
            type-test certification or authority approval for its assembled panels.
            Customers requiring type-tested assemblies or authority-approved panels
            should discuss their specific project requirements with BMQ at the
            enquiry stage.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Need a panel built to your specification?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Submit your project requirements and our team will prepare a technical
            proposal tailored to your needs.
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
