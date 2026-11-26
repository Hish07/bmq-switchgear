import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://switchgearuae.com"),
  title: {
    default: "BMQ Electrical Switchgear LLC",
    template: "%s | BMQ Electrical Switchgear LLC",
  },
  icons: {
    icon: "/images/logo/bmq-logo.jpg",
    shortcut: "/images/logo/bmq-logo.jpg",
    apple: "/images/logo/bmq-logo.jpg",
  },
  description:
    "BMQ Electrical Switchgear LLC is a UAE-based manufacturer and supplier of low-voltage electrical distribution boards, switchgear panels and motor control panels. MDB, SMDB, MCC, ATS and more.",
  keywords: [
    "low voltage switchgear manufacturer UAE",
    "electrical distribution board manufacturer UAE",
    "MDB panel manufacturer UAE",
    "SMDB panel manufacturer UAE",
    "electrical control panel manufacturer UAE",
    "motor control centre manufacturer UAE",
    "capacitor bank panel UAE",
    "electrical switchgear supplier UAE",
    "LV switchgear UAE",
    "distribution board UAE",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://switchgearuae.com",
    siteName: "BMQ Electrical Switchgear LLC",
    title: "BMQ Electrical Switchgear LLC | LV Switchgear Manufacturer UAE",
    description:
      "Reliable Low Voltage Switchgear Solutions, Designed and Manufactured for Your Requirements. UAE-based manufacturer of MDB, SMDB, MCC, ATS and more.",
    images: [
      {
        url: "/images/logo/bmq-logo.jpg",
        width: 1200,
        height: 630,
        alt: "BMQ Electrical Switchgear LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMQ Electrical Switchgear LLC | LV Switchgear Manufacturer UAE",
    description:
      "Reliable Low Voltage Switchgear Solutions, Designed and Manufactured for Your Requirements.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BMQ Electrical Switchgear LLC",
    description:
      "UAE-based manufacturer and supplier of low-voltage electrical distribution boards, switchgear panels and motor control panels.",
    url: "https://switchgearuae.com",
    logo: "https://switchgearuae.com/images/logo/bmq-logo.jpg",
    image: "https://switchgearuae.com/images/logo/bmq-logo.jpg",
    telephone: "+971-2-554-8641",
    faxNumber: "+971-2-554-8642",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ICAD 1, Musaffah",
      addressLocality: "Abu Dhabi",
      addressRegion: "Abu Dhabi",
      postalCode: "33160",
      addressCountry: "AE",
    },
    areaServed: "United Arab Emirates",
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
