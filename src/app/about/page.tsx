import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "Tentang Tanscale — Misi Kami Melipatgandakan Omset Travel Agency",
  description:
    "Pelajari bagaimana Tanscale didirikan oleh praktisi berpengalaman untuk membantu biro perjalanan dan umroh menembus batas omset dengan sistem terukur.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
