import type { Metadata } from "next";
import {
  HeroSection,
  TrustBar,
  CompanyIntro,
  ProductCategories,
  ManufacturingHighlight,
  IndustriesSection,
  WhyChooseBMQ,
  RFQBanner,
} from "@/components/home/HomeSections";

export const metadata: Metadata = {
  title: "BMQ Electrical Switchgear LLC | LV Switchgear Manufacturer UAE",
  description:
    "BMQ Electrical Switchgear LLC — UAE-based manufacturer and supplier of customised low-voltage electrical distribution boards, MDB, SMDB, MCC, ATS panels and switchgear solutions.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CompanyIntro />
      <ProductCategories />
      <ManufacturingHighlight />
      <IndustriesSection />
      <WhyChooseBMQ />
      <RFQBanner />
    </>
  );
}
