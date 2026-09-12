"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import styles from "./MetricsSection.module.css";


const logicCards = [
  {
    num: 1,
    title: "Trafik Tertarget Instan Begitu Website Live (Zero Waiting Time)",
    body: "Berbeda dengan SEO yang butuh 3–6 bulan untuk naik peringkat, Meta Ads langsung menyuntikkan ribuan impresi ke audiens spesifik (keluarga, pencari paket umroh, dan wisatawan aktif) di hari pertama website Anda aktif. Anda tidak perlu menunggu lama untuk melihat hasil.",
    stat: "Hari Ke-1 Live Langsung Terhubung ke Calon Pembeli",
    footer: "Solusi cepat bagi agensi travel yang butuh perputaran cashflow sekarang.",
  },
  {
    num: 2,
    title: "Olah Dokumentasi Visual Anda Menjadi Iklan Berdaya Pikat Tinggi",
    body: "Dokumentasi foto dan video tour/umroh Anda yang menumpuk di handphone tidak dibiarkan menganggur. Tim kami memilah momen terbaik, meriset sudut emosional audiens, dan menyusun copywriting penawaran yang meyakinkan mereka untuk segera bertanya dan mendaftar.",
    stat: "Mengubah Galeri Handphone Jadi Creative Ads yang Menghasilkan",
    footer: "Sentuhan visual autentik travel Anda dipadukan dengan copywriting persuasif.",
  },
  {
    num: 3,
    title: "Pelacakan Presisi: Dari Klik Iklan Hingga Tombol Chat WhatsApp",
    body: "Kami memasang Meta Pixel dan custom conversion tracking di Website Flagship Anda. Semua data tercatat: berapa orang yang klik iklan, berapa yang membaca rincian paket, dan berapa yang menekan tombol chat ke admin. Tidak ada tebak-tebakan.",
    stat: "Semua Traffic Terlacak Sampai Chat WhatsApp Masuk",
    footer: "Nggak ada tebak-tebakan. Semua terukur, semua kami pantau secara transparan.",
  },
  {
    num: 4,
    title: "Conviction Nyata: Kami Dampingi & Optimasi Sampai Closing Pertama Datang",
    body: "Begitu closing pertama datang, kerja kami belum selesai. Kami mengevaluasi performa iklan dan mengoptimasi website Anda berdasarkan perilaku pengunjung riil. Dan jika Anda ingin terus scale up setiap bulan, kami juga siap memegang manajemen iklan bulanan Anda.",
    stat: "Setup Iklan Gratis + Optimasi Berkelanjutan Hingga Closing",
    footer: "Komitmen kemitraan nyata agar agensi Anda tidak jalan sendirian.",
  },
];

export default function MetricsSection() {
  return (
    <section className="section-dark" id="analisa">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.headerWrap}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.sectionPill}>
            <Sparkles size={13} color="#94A3B8" />
            <span>SOLUSI: ANALISA MENDALAM WEBSITE + META ADS</span>
          </div>
          <h2 className="h2-heading">
            Kenapa Kombinasi Website + Meta Ads <br className="hidden md:inline" />
            <span className="gradient-text">Langsung Menghasilkan Customer Cepat?</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 760, margin: "0 auto" }}>
            Kami memangkas masa tunggu berbulan-bulan. Dengan memadukan Website Flagship berkonversi tinggi dan iklan Meta Ads tertarget yang kami setup secara gratis, agensi Anda langsung siap menerima booking sejak hari pertama.
          </p>
        </motion.div>

        {/* 4 Logic Cards (2x2 Grid) */}
        <div className={styles.logicGrid}>
          {logicCards.map((card, idx) => (
            <motion.div
              key={card.num}
              className={styles.logicCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Card Number Badge (Top-Right) */}
              <div className={styles.numberBadge}>{card.num}</div>

              {/* Logic Headline */}
              <h3 className={styles.cardTitle}>{card.title}</h3>

              {/* Body */}
              <p className={styles.cardBody}>{card.body}</p>

              {/* Key Metric Stat */}
              <div className={styles.metricStat}>{card.stat}</div>

              {/* Footer Callout */}
              <div className={styles.footerCallout}>
                &quot;{card.footer}&quot;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


