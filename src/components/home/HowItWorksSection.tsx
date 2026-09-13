"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MonitorSmartphone, Globe2, Bot, ShieldCheck, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { trackMetaEvent } from "@/lib/metaPixel";
import styles from "./HowItWorksSection.module.css";

const WA_PHONE = "6288277450792";
const waHowItWorksMessage = encodeURIComponent(
  "Halo Tanscale, aku mau tanya alur kerja dan amankan slot website & iklan Meta travel bulan ini."
);
const waHowItWorksUrl = `https://wa.me/${WA_PHONE}?text=${waHowItWorksMessage}`;

const methodologies = [
  {
    icon: MonitorSmartphone,
    tag: "LANGKAH 01 · BIKIN WEBSITE",
    title: "Website Travel Kamu Kita Bangun dari Nol",
    points: [
      "Desain modern, cepat dibuka di HP, dan enak dilihat",
      "Ada katalog paket, info harga, dan tombol WA langsung ke admin",
      "Layout dibuat khusus biar pengunjung nggak bingung dan langsung mau chat",
    ],
  },
  {
    icon: Sparkles,
    tag: "LANGKAH 02 · SIAPKAN MATERI IKLAN",
    title: "Foto & Video HP Kamu Kita Ubah Jadi Creative Iklan",
    points: [
      "Kita riset audiens mana yang paling potensial buat ditarget",
      "Foto & video perjalanan kamu kita filter dan edit jadi materi iklan",
      "Kita susun copywriting iklan yang bikin orang penasaran dan mau klik",
    ],
  },
  {
    icon: Globe2,
    tag: "LANGKAH 03 · SETUP & LAUNCH IKLAN",
    title: "Iklan Meta Ads Kita Setup dan Langsung Tayang",
    points: [
      "Setup kampanye di Facebook & Instagram Ads Manager, gratis jasa",
      "Pasang Meta Pixel dan tracking konversi di website kamu",
      "Iklan tayang, traffic langsung masuk ke website",
    ],
  },
  {
    icon: ShieldCheck,
    tag: "LANGKAH 04 · PANTAU & OPTIMASI",
    title: "Iklan Dipantau, yang Boncos Diganti, yang Works Di-scale",
    points: [
      "Performa iklan kita pantau tiap hari, bukan cuma ditinggal jalan sendiri",
      "Iklan yang nggak perform kita stop, yang bagus kita optimalkan",
      "Kalau kamu mau lanjut, kita bisa kelola iklannya setiap bulan",
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
            <span>CARA KERJANYA</span>
          </div>
          <h2 className="h2-heading">
            Dari Nol Sampai Iklan Tayang,{" "}
            <span className="gradient-text">Semua Kita Kerjain Bareng.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 640, margin: "0 auto 36px" }}>
            Kamu tinggal siapin foto & video perjalanan dari HP. Sisanya aku yang handle.
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
          <p className={styles.closingP}>Semua terukur. Kamu tahu iklan kamu lagi ngapain, dan hasilnya kelihatan.</p>
          <a
            href={waHowItWorksUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-blue"
            style={{ marginTop: 18 }}
            onClick={() =>
              trackMetaEvent("Contact", {
                customData: { content_name: "Alur Kerja Konsultasi Gratis" },
              })
            }
          >
            <span>Amankan Slot Bulan Ini</span>
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}



