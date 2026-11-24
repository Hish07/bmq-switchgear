import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Wrench,
  MapPin,
  Info,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.fullForm} (${product.name}) | BMQ Electrical Switchgear UAE`,
    description: `${product.intro.slice(0, 155)}…`,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.relatedSlugs);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 pt-32 pb-16">
        <div className="container-custom">
          <div className="text-sm text-gray-400 mb-4">
            <Link href="/products" className="hover:text-amber-400 transition-colors">
              Products
            </Link>
            {" / "}
            <span className="text-gray-300">{product.category}</span>
            {" / "}
            <span className="text-white">{product.name}</span>
          </div>
          <span className="section-label block mb-2">{product.category}</span>
          <h1 className="section-title-white mb-2">
            {product.name} — {product.fullForm}
          </h1>
          <p className="text-amber-400 text-lg font-medium mb-6">{product.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`/contact?product=${product.slug}#rfq`} className="btn-primary">
              <Zap className="w-4 h-4" />
              Request a Quotation
            </Link>
            <Link href="/contact" className="btn-secondary">
              General Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Product Featured Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-navy-950">
                <Image
                  src={product.image}
                  alt={`${product.name} - ${product.fullForm} Manufactured by BMQ Electrical Switchgear LLC`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-navy-900/85 backdrop-blur-md px-4 py-2 rounded-lg border border-navy-700/60 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                  <span className="text-amber-400 font-mono font-bold">{product.name}</span>
                  <span className="text-gray-300">| Custom Manufactured Assembly · UAE</span>
                </div>
              </div>

              {/* Introduction */}
              <div>
                <h2 className="text-xl font-bold text-navy-800 mb-3">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">{product.intro}</p>
              </div>

              {/* Purpose */}
              <div>
                <h2 className="text-xl font-bold text-navy-800 mb-3">
                  Purpose & Working Principle
                </h2>
                <p className="text-gray-600 leading-relaxed">{product.purpose}</p>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-xl font-bold text-navy-800 mb-4">
                  Common Applications
                </h2>
                <ul className="space-y-2">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Components */}
              <div>
                <h2 className="text-xl font-bold text-navy-800 mb-4">
                  Main Components
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.components.map((comp) => (
                    <div
                      key={comp}
                      className="flex items-center gap-2 bg-navy-50 rounded-lg px-4 py-2.5"
                    >
                      <Wrench className="w-3.5 h-3.5 text-navy-500 flex-shrink-0" />
                      <span className="text-sm text-navy-700">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Configurations */}
              <div>
                <h2 className="text-xl font-bold text-navy-800 mb-4">
                  Available Configurations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.configurations.map((config) => (
                    <span
                      key={config}
                      className="text-sm bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full"
                    >
                      {config}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Specs Note */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex gap-3">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-blue-800 mb-1">
                    Technical Specifications
                  </p>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Electrical specifications for this product — including current
                    ratings, voltage levels, breaking capacity, IP rating, busbar
                    sizing and form of internal separation — are project-dependent
                    and are determined during the technical review and design stage.
                    Please submit your enquiry with your project requirements for a
                    detailed technical proposal.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Enquiry Card */}
              <div className="card p-6 border-amber-200 bg-amber-50">
                <h3 className="font-bold text-navy-800 mb-2">
                  Request a Quotation
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Submit your project requirements and we will prepare a technical
                  and commercial proposal.
                </p>
                <Link
                  href={`/contact?product=${product.slug}#rfq`}
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  <Zap className="w-4 h-4" />
                  Request a Quote
                </Link>
              </div>

              {/* Product Info Card */}
              <div className="card p-6">
                <h3 className="font-bold text-navy-800 mb-4">Product Details</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      Product Name
                    </dt>
                    <dd className="font-semibold text-navy-700">{product.name}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      Full Form
                    </dt>
                    <dd className="text-gray-700">{product.fullForm}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      Category
                    </dt>
                    <dd className="text-gray-700">{product.category}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                      Available In
                    </dt>
                    <dd className="flex items-center gap-1 text-gray-700">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      United Arab Emirates
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-14 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-xl font-bold text-navy-800 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <div key={p.slug} className="card overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                  <div className="h-40 relative overflow-hidden bg-navy-950">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-xs font-mono font-bold bg-navy-900/80 text-amber-400 px-2 py-0.5 rounded border border-navy-700/50">
                      {p.name}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-amber-500 mb-1 block">
                      {p.category}
                    </span>
                    <h3 className="font-bold text-navy-800 mb-1">{p.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">{p.fullForm}</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                      {p.tagline}
                    </p>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-sm font-semibold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
