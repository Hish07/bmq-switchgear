import type { Metadata } from "next";
import Link from "next/link";
import { Zap, FolderOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | BMQ Electrical Switchgear LLC UAE",
  description:
    "BMQ Electrical Switchgear project portfolio — LV switchgear, distribution boards, MCC panels and electrical control panels supplied for UAE projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-16">
        <div className="container-custom max-w-3xl">
          <span className="section-label block mb-3">Our Work</span>
          <h1 className="section-title-white mb-5">Projects Portfolio</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            BMQ&apos;s completed switchgear supply and manufacturing projects
            across the UAE.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          {/* Placeholder notice */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl mb-10">
              <FolderOpen className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h2 className="font-bold text-navy-800 mb-2">
                Project Portfolio — Coming Soon
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                This section will be populated with verified BMQ project
                information including project name, location, sector, products
                supplied and project photographs. Only completed and verified
                BMQ projects will be listed here.
              </p>
            </div>

            {/* Sample project card layout */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
              Sample Project Card Layout (Placeholder)
            </p>
            <div className="card p-6 text-left opacity-50 pointer-events-none mb-10">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold bg-navy-100 text-navy-600 px-3 py-1 rounded-full">
                  Commercial
                </span>
                <span className="text-xs text-gray-400">[UAE Emirate]</span>
              </div>
              <h3 className="font-bold text-navy-800 mb-1">[Project Name]</h3>
              <p className="text-sm text-gray-500 mb-3">[Project Location]</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                  MDB
                </span>
                <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                  SMDB
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                [Project description — scope of supply and panel details]
              </p>
            </div>

            <Link href="/contact" className="btn-primary">
              <Zap className="w-4 h-4" />
              Discuss Your Project with BMQ
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
