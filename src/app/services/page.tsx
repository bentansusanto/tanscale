import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Layanan & 4 Pilar Scaling — Tanscale Growth Partner",
  description:
    "Strategi diferensiasi paket high-ticket, iklan presisi Meta & Google, otomasi WhatsApp CRM 24/7, dan sistem retensi wisatawan untuk melipatgandakan omset travel agency.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
