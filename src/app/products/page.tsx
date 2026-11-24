import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products, productCategories } from "@/lib/products";
import { ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | LV Switchgear & Distribution Board Catalogue UAE",
  description:
    "Browse BMQ Electrical Switchgear's complete product catalogue: MDB, SMDB, DB, MCC, DOL, Star-Delta, VFD, ATS, MTS, Capacitor Banks and more. Custom-manufactured in UAE.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-800 pt-32 pb-16">
        <div className="container-custom">
          <span className="section-label block mb-3">What We Manufacture</span>
          <h1 className="section-title-white mb-4">
            Complete Switchgear Product Catalogue
          </h1>
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            16 product types across five categories, all custom-manufactured to
            your project specifications and electrical requirements.
          </p>
        </div>
      </section>

      {/* Category Sections */}
      {productCategories.map((cat) => {
        const catProducts = products.filter((p) => p.categorySlug === cat.slug);
        return (
          <section
            key={cat.slug}
            id={cat.slug}
            className="py-16 even:bg-gray-50 odd:bg-white"
          >
            <div className="container-custom">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-navy-800">{cat.label}</h2>
                <div className="w-16 h-1 bg-amber-500 mt-2 rounded-full" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catProducts.map((product) => (
                  <div
                    key={product.slug}
                    className="card overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Product Image */}
                    <div className="h-48 relative overflow-hidden bg-navy-900">
                      <Image
                        src={product.image}
                        alt={`${product.name} - ${product.fullForm}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/15 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-xs font-bold font-mono bg-navy-900/85 text-amber-400 px-2.5 py-1 rounded border border-navy-700/60 backdrop-blur-sm shadow-sm">
                        {product.name}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-navy-800 font-bold text-lg mb-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-amber-500 font-semibold mb-3">
                        {product.fullForm}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                        {product.tagline}
                      </p>
                      <div className="flex gap-3">
                        <Link
                          href={`/products/${product.slug}`}
                          className="flex-1 text-center text-sm font-semibold text-navy-700 border border-navy-200 hover:bg-navy-700 hover:text-white hover:border-navy-700 py-2 rounded-lg transition-all"
                        >
                          View Details
                        </Link>
                        <Link
                          href={`/contact?product=${product.slug}#rfq`}
                          className="flex-1 text-center text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-navy-900 py-2 rounded-lg transition-colors"
                        >
                          Enquire
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Need a custom panel for your project?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            All BMQ products are custom-manufactured to your project
            specifications. Contact us with your requirements.
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
