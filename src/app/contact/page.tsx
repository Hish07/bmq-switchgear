import type { Metadata } from "next";
import { Mail, Phone, MapPin, Zap } from "lucide-react";
import RFQForm from "@/components/forms/RFQForm";

export const metadata: Metadata = {
  title: "Contact & Request a Quotation | BMQ Electrical Switchgear LLC UAE",
  description:
    "Contact BMQ Electrical Switchgear LLC for LV switchgear quotations. Submit your MDB, SMDB, MCC, ATS or distribution board requirements for a technical proposal.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-800 pt-32 pb-16">
        <div className="container-custom max-w-3xl">
          <span className="section-label block mb-3">Get in Touch</span>
          <h1 className="section-title-white mb-5">Contact & Enquiries</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Submit your switchgear requirements using the Request for Quotation
            form below. BMQ will prepare a technical and commercial proposal for
            your project.
          </p>
        </div>
      </section>

      {/* Contact + RFQ */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card p-6">
                <h2 className="font-bold text-navy-800 mb-5 text-lg">Contact Information</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg flex-shrink-0">
                      <MapPin className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Address
                      </p>
                      <p className="text-sm text-gray-700">
                        {/* PLACEHOLDER */}
                        [Company Address],<br />
                        [Area], [Emirate],<br />
                        United Arab Emirates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg flex-shrink-0">
                      <Phone className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Telephone
                      </p>
                      {/* PLACEHOLDER: Replace with actual phone number */}
                      <p className="text-sm text-gray-700">+971 [XX] [XXX XXXX]</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg flex-shrink-0">
                      <Mail className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Email
                      </p>
                      {/* PLACEHOLDER: Replace with actual email */}
                      <p className="text-sm text-gray-700">info@bmqswitchgear.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="card overflow-hidden">
                <div className="bg-navy-100 h-48 flex items-center justify-center">
                  <div className="text-center px-4">
                    <MapPin className="w-8 h-8 text-navy-400 mx-auto mb-2" />
                    <p className="text-sm text-navy-500 font-medium">
                      Google Maps
                    </p>
                    <p className="text-xs text-navy-400">
                      Embed map once address is confirmed
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Placeholder */}
              <div className="card p-5 bg-green-50 border-green-200">
                <p className="font-semibold text-green-800 mb-1 text-sm">
                  WhatsApp Enquiries
                </p>
                <p className="text-xs text-green-700 leading-relaxed">
                  WhatsApp contact will be activated once the official BMQ
                  WhatsApp Business number is provided.
                </p>
              </div>
            </div>

            {/* RFQ Form */}
            <div id="rfq" className="lg:col-span-2">
              <div className="card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-50 rounded-xl">
                    <Zap className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy-800">
                      Request a Quotation
                    </h2>
                    <p className="text-xs text-gray-400">
                      All fields marked * are required
                    </p>
                  </div>
                </div>
                <RFQForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
