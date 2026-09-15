import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import MetricsSection from "@/components/home/MetricsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TemplateDemoSection from "@/components/home/TemplateDemoSection";
import ServicesSection from "@/components/home/ServicesSection";
import GuaranteeSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Seksi 1: Hero (Conviction di Awal) */}
        <HeroSection />

        {/* Below-the-fold sections dengan deferred rendering untuk kecepatan buka instan */}
        <div className="section-deferred">
          <PainPointsSection />
        </div>
        <div className="section-deferred">
          <MetricsSection />
        </div>
        <div className="section-deferred">
          <HowItWorksSection />
        </div>
        <div className="section-deferred">
          <TemplateDemoSection />
        </div>
        <div className="section-deferred">
          <ServicesSection />
        </div>
        <div className="section-deferred">
          <GuaranteeSection />
        </div>
        <div className="section-deferred">
          <FaqSection />
        </div>
        <div className="section-deferred">
          <CtaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}


