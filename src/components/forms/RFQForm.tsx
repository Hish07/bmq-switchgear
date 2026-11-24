"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const rfqSchema = z.object({
  customerName: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Phone number is required"),
  productRequired: z.string().min(1, "Please select a product"),
  quantity: z.string().optional(),
  projectLocation: z.string().min(2, "Project location is required"),
  technicalRequirements: z.string().optional(),
  message: z.string().min(10, "Please provide more detail about your requirement"),
});

type RFQData = z.infer<typeof rfqSchema>;

const products = [
  "MDB – Main Distribution Board",
  "SMDB – Sub-Main Distribution Board",
  "DB / FDB – Distribution Board",
  "Meter Cabinet",
  "Cut-out",
  "Socket Panel",
  "Capacitor Bank / APFC Panel",
  "MCC – Motor Control Centre",
  "DOL Starter",
  "Star-Delta Starter",
  "VFD Starter",
  "Swimming Pool Control Panel",
  "ATS – Automatic Transfer Switch",
  "MTS – Manual Transfer Switch",
  "Synchronizing Panel",
  "Isolator / Disconnecting Switch",
  "Multiple Products / Full Project",
  "Other – Please specify in message",
];

export default function RFQForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RFQData>({ resolver: zodResolver(rfqSchema) });

  const onSubmit = async (data: RFQData) => {
    setSubmitting(true);
    // Simulate a short delay; replace with actual API call when backend is configured
    await new Promise((r) => setTimeout(r, 1200));
    console.log("RFQ submitted:", data);
    setSubmitted(true);
    setSubmitting(false);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Enquiry Received
        </h3>
        <p className="text-green-700 mb-4 text-sm leading-relaxed">
          Thank you for your enquiry. BMQ will review your requirements and
          respond with a technical and commercial proposal.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left text-sm text-amber-800">
          <p className="font-semibold mb-1 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Backend Configuration Required
          </p>
          <p>
            This form is currently in demo mode. To activate email delivery,
            configure your email provider credentials in <code>.env.local</code>{" "}
            and implement the <code>/api/rfq</code> route. See{" "}
            <code>README.md</code> for setup instructions.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-green-700 underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy-700 mb-1">
            Customer Name *
          </label>
          <input
            {...register("customerName")}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            placeholder="Your name"
          />
          {errors.customerName && (
            <p className="text-xs text-red-500 mt-1">{errors.customerName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy-700 mb-1">
            Company Name *
          </label>
          <input
            {...register("companyName")}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            placeholder="Your company"
          />
          {errors.companyName && (
            <p className="text-xs text-red-500 mt-1">{errors.companyName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy-700 mb-1">
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            placeholder="email@company.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy-700 mb-1">
            Phone Number *
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            placeholder="+971 XX XXX XXXX"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy-700 mb-1">
            Product Required *
          </label>
          <select
            {...register("productRequired")}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-white"
          >
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.productRequired && (
            <p className="text-xs text-red-500 mt-1">{errors.productRequired.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy-700 mb-1">
            Quantity
          </label>
          <input
            {...register("quantity")}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            placeholder="Number of panels required"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-700 mb-1">
          Project Location *
        </label>
        <input
          {...register("projectLocation")}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
          placeholder="e.g. Dubai, Abu Dhabi, Sharjah, Northern Emirates"
        />
        {errors.projectLocation && (
          <p className="text-xs text-red-500 mt-1">{errors.projectLocation.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-700 mb-1">
          Technical Requirements
        </label>
        <input
          {...register("technicalRequirements")}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
          placeholder="e.g. current rating, IP rating, form of separation, single-phase/three-phase"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-700 mb-1">
          Message / Additional Information *
        </label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
          placeholder="Describe your project, any additional specifications or requirements..."
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* File upload note */}
      <div className="bg-navy-50 rounded-xl p-4 text-xs text-navy-600">
        <p className="font-semibold mb-1">Attach SLD / BOQ / Specifications</p>
        <p>
          File attachment will be available after backend configuration. In the
          meantime, please email your SLD or specifications directly to{" "}
          <strong>info@bmqswitchgear.com</strong> {/* PLACEHOLDER */}
          with your enquiry reference.
        </p>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full justify-center py-4 text-base"
      >
        {submitting ? (
          <>
            <div className="w-5 h-5 border-2 border-navy-700 border-t-transparent rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
}
