import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Kontak Tanscale — Jadwalkan Sesi Audit & Konsultasi Gratis",
  description:
    "Jadwalkan sesi audit strategi 45 menit bersama tim Tanscale. Kami akan membedah alur pemasaran dan menemukan jalur tercepat menuju scale-up omset bisnis travel Anda.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
