import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudiesPage from "@/components/case-studies/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Studi Kasus — Hasil Nyata & Terbukti Klien Travel Agent | Tanscale",
  description:
    "Pelajari bagaimana Tanscale membantu bisnis travel & tour menembus batas omset dengan pemasaran berbasis data, akuisisi pelanggan, dan otomasi operasional.",
};

export default function CaseStudiesRoute() {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudiesPage />
      </main>
      <Footer />
    </>
  );
}
