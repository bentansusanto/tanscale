"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertOctagon, TrendingDown, Clock, BarChart3, Database, ArrowRight, AlertCircle } from "lucide-react";

import styles from "./PainPointsSection.module.css";

const problems = [
  {
    num: 1,
    icon: TrendingDown,
    tag: "SOSMED ORGANIK · NGGAK CUKUP",
    title: "Rajin Posting di IG & FB, Tapi Nggak Ada yang Booking",
    desc: "Like banyak, follower nambah, tapi yang beneran tanya paket dan transfer DP hampir nggak ada. Sosmed organik bagus buat branding, tapi nggak bisa diandalkan buat mendatangkan customer secara konsisten.",
    impact: "Akibat: Waktu habis bikin konten, tapi kursi travel tetap kosong",
  },
  {
    num: 2,
    icon: AlertOctagon,
    tag: "PERNAH COBA IKLAN · TAPI BONCOS",
    title: "Iklan Udah Jalan, Budget Habis, Nggak Ada Closing",
    desc: "Pasang iklan sendiri, langsung ke WA. Yang masuk kebanyakan nanya harga lalu ghosting. Budget habis tapi nggak ada satu pun yang booking.",
    impact: "Akibat: Kapok pasang iklan, padahal masalahnya bukan di iklannya",
  },
  {
    num: 3,
    icon: Clock,
    tag: "WEBSITE ADA · TAPI SEPI",
    title: "Sudah Punya Website, Tapi Nggak Ada yang Masuk",
    desc: "Website bagus, tapi nggak ada traffic. Pengunjung dari iklan masuk, lihat sebentar, lalu keluar. Nggak ada alur yang jelas.",
    impact: "Akibat: Website jadi pajangan, nggak pernah menghasilkan konversi",
  },
  {
    num: 4,
    icon: BarChart3,
    tag: "KONTEN ADA · TAPI NGGAK NGONVERSI",
    title: "Konten di HP Numpuk, Tapi Nggak Tahu Mana yang Bisa Dijadiin Iklan",
    desc: "Foto & video perjalanan banyak, tapi bingung mau diapain. Nggak tahu audiens mana yang ditarget, angle iklan yang works, atau caption yang bikin orang mau klik.",
    impact: "Akibat: Konten bagus nganggur, iklan asal-asalan hasilnya zonk",
  },
  {
    num: 5,
    icon: Database,
    tag: "NGGAK ADA DATA · SERBA KIRA-KIRA",
    title: "Nggak Tahu Iklan Mana yang Works dan yang Boncos",
    desc: "Nggak ada data yang bisa dipegang. Nggak tahu cost per chat berapa, iklan mana yang perform, dan mana yang cuma ngabisin budget doang.",
    impact: "Akibat: Susah optimasi karena semua serba tebak-tebakan",
  },
];

export default function PainPointsSection() {
  return (
    <section className="section-dark-alt" id="masalah">
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
            <span>KENAPA IKLAN TRAVEL KAMU BELUM CLOSING?</span>
          </div>
          <h2 className="h2-heading">
            Masih Ngandalin Posting Sosmed?{" "}
            <span className="gradient-text">Ini yang Bikin Travel Kamu Susah Dapat Customer.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 680, margin: "0 auto 40px" }}>
            Posting organik nggak cukup buat mendatangkan customer secara konsisten. Dan kalau pernah coba iklan tapi nggak hasilnya, ini kemungkinan besar penyebabnya.
          </p>
        </motion.div>

        {/* 5 Problem Diagnostic Cards Grid */}
        <div className={styles.diagnosticGrid}>
          {problems.map((prob, idx) => (
            <motion.div
              key={prob.num}
              className={`${styles.diagCard} ${prob.num === 5 ? styles.fullWidthCard : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <prob.icon size={20} color="#94A3B8" />
                </div>
                <span className={styles.tagBadge}>
                  {prob.tag}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{prob.num}. {prob.title}</h3>
              <p className={styles.cardDesc}>{prob.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.impactText}>
                  <AlertCircle size={14} color="#64748B" style={{ flexShrink: 0 }} />
                  <span>{prob.impact}</span>
                </span>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Closing Action Banner */}
        <motion.div
          className={styles.closingBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.closingContent}>
            <h4 className={styles.closingHeading}>
              Kalau kamu ngerasain salah satu dari ini, berarti kita perlu ngobrol.
            </h4>
            <p className={styles.closingSub}>
              Aku bantu audit alur iklan kamu, dari materi, targeting, sampai website, terus kita perbaiki bareng. Slot bulan ini terbatas 5.
            </p>
          </div>
          <Link href="/contact" className="btn-cta-blue">
            <span>Konsultasi Gratis Sekarang</span>
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

