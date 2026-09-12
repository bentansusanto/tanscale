"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MonitorSmartphone, Globe2, Bot, ShieldCheck, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import styles from "./HowItWorksSection.module.css";

const methodologies = [
  {
    icon: MonitorSmartphone,
    tag: "LANGKAH 01 · WEBSITE FLAGSHIP",
    title: "Pembangunan Website Flagship Berkonversi Tinggi",
    points: [
      "Website biro perjalanan berstandar modern & mobile-first (sub-second loading)",
      "Katalog paket tour & umroh interaktif, kalkulator DP, dan itinerary transparan",
      "Sistem WhatsApp lead filter otomatis untuk menyaring leads iseng sebelum masuk chat",
    ],
  },
  {
    icon: Sparkles,
    tag: "LANGKAH 02 · KONTEN & AUDIENS",
    title: "Riset Audiens & Olah Dokumentasi Jadi Iklan Menarik",
    points: [
      "Riset demografi audiens yang siap beli (jamaah umroh, keluarga liburan, gathering)",
      "Memilah foto & video dokumentasi perjalanan Anda dari galeri HP menjadi materi iklan",
      "Menyusun copywriting penawaran persuasif yang menggugah emosi dan memicu chat",
    ],
  },
  {
    icon: Globe2,
    tag: "LANGKAH 03 · SETUP IKLAN GRATIS",
    title: "Setup & Peluncuran Iklan Meta Ads (100% GRATIS)",
    points: [
      "Setup kampanye iklan di Facebook & Instagram Ads Manager tanpa biaya jasa",
      "Pemasangan Meta Pixel & Conversion Event Tracking di website Anda",
      "Pelacakan presisi dari klik iklan sampai tombol chat WhatsApp admin Anda",
    ],
  },
  {
    icon: ShieldCheck,
    tag: "LANGKAH 04 · CONVICTION & OPTIMASI",
    title: "Pemantauan Harian & Optimasi Sampai Closing Pertama",
    points: [
      "Nggak ada tebak-tebakan: semua metrik traffic dan chat dipantau secara transparan",
      "Optimasi website dan penawaran berdasar data riil pengunjung sampai closing pertama tiba",
      "Opsi scale-up manajemen iklan bulanan jika Anda ingin terus memperbesar omset",
    ],
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section-dark-alt" id="apa-yang-kami-lakukan">
      <div className="container">
        {/* H2 Headline */}
        <motion.div
          className={styles.headerWrap}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.sectionPill}>
            <Sparkles size={13} color="#94A3B8" />
            <span>ALUR EKSEKUSI CEPAT &amp; TERUKUR</span>
          </div>
          <h2 className="h2-heading">
            Apa yang Kami Kerjakan untuk Travel Agency Anda <br className="hidden md:inline" />
            <span className="gradient-text">Dari Website Siap Pakai Hingga Iklan Meta Berjalan</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 740, margin: "0 auto 36px" }}>
            Kami mengambil alih seluruh kerumitan teknis: membangun website kelas atas, meriset audiens, mengolah materi visual Anda, dan menyetel iklan Meta Ads secara gratis agar Anda bisa fokus melayani customer yang masuk.
          </p>
        </motion.div>

        {/* 4 Methodology Cards (2x2 Grid) */}
        <div className={styles.methodologyGrid}>
          {methodologies.map((item, idx) => (
            <motion.div
              key={item.title}
              className={styles.methodCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.cardTopRow}>
                <div className={styles.iconContainer}>
                  <item.icon size={22} color="#60A5FA" />
                </div>
                <span className={styles.moduleTag}>{item.tag}</span>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <ul className={styles.bulletList}>
                {item.points.map((pt, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <CheckCircle size={15} color="#10B981" className={styles.bulletCheck} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Closing Line & CTA */}
        <motion.div
          className={styles.closingLine}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className={styles.closingP}>Bukan spekulasi. Semua terukur, semua kami pantau sampai closing pertama datang.</p>
          <Link href="/contact" className="btn-cta-blue" style={{ marginTop: 18 }}>
            <span>Amankan 1 dari 5 Slot Bulan Ini</span>
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}



