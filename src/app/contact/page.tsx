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
                        ICAD 1, Musaffah,<br />
                        P.O. Box 33160,<br />
                        Abu Dhabi, U.A.E
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
                      <p className="text-sm text-gray-700">Tel: (02) 5548641</p>
                      <p className="text-sm text-gray-700">Fax: (02) 5548642</p>
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
                      <a
                        href="mailto:info@switchgearuae.com"
                        className="text-sm text-gray-700 hover:text-amber-500 transition-colors"
                      >
                        info@switchgearuae.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Maps Embed */}
              <div className="card overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.5!2d54.4769!3d24.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIyJzMzLjIiTiA1NMKwMjgnMzYuOCJF!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                  width="100%"
                  height="192"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BMQ Electrical Switchgear LLC - ICAD 1, Musaffah, Abu Dhabi"
                />
              </div>

              {/* WhatsApp */}
              <div className="card p-5 bg-green-50 border-green-200">
                <p className="font-semibold text-green-800 mb-1 text-sm">
                  WhatsApp Enquiries
                </p>
                <p className="text-xs text-green-700 leading-relaxed mb-3">
                  Send us a WhatsApp message for quick enquiries and product questions.
                </p>
                <a
                  href="https://wa.me/971561499145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
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
