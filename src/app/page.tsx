import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import MetricsSection from "@/components/home/MetricsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import GuaranteeSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Seksi 1: Hero (Conviction di Awal + Konsol Perhitungan Matematis SEO) */}
        <HeroSection />

        {/* Seksi 2: Problem (Diagnostik 5 Titik Kebocoran Nyata Travel Agency) */}
        <PainPointsSection />

        {/* Seksi 3: Solusi Berupa Analisa Secara Mendalam (Perhitungan Matematis SEO) */}
        <MetricsSection />

        {/* Seksi 4: Apa yang Kita Lakukan (Cetak Biru Eksekusi 40 Hari) */}
        <HowItWorksSection />

        {/* Seksi 5: Package (Investasi All-In Rp 6.500.000) */}
        <ServicesSection />

        {/* Seksi 6: Meyakinkan Calon Klien Kembali (Garansi + FAQ + Final Consultation Form) */}
        <GuaranteeSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}


