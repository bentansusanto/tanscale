"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertOctagon, TrendingDown, Clock, BarChart3, Database, ArrowRight, AlertCircle } from "lucide-react";

import styles from "./PainPointsSection.module.css";

const problems = [
  {
    num: 1,
    icon: AlertOctagon,
    tag: "ZERO TRAFFIC · RUMAH KOSONG",
    tagType: "red",
    title: "Punya Website Bagus, Tapi Seperti Rumah Kosong Tanpa Pengunjung",
    desc: "Masalahnya bukan di website-nya — masalahnya, nggak ada yang lihat. Menaruh link website di bio profil saja tidak akan pernah cukup untuk mendatangkan puluhan calon jamaah atau wisatawan setiap minggu.",
    impact: "Impact: Website mahal teronggok pasif tanpa pernah menghasilkan booking",
  },
  {
    num: 2,
    icon: Clock,
    tag: "SEO WAITING GAME · 3-6 BULAN",
    tagType: "amber",
    title: "Mengandalkan SEO Terlalu Lama, Padahal Butuh Customer Sekarang",
    desc: "SEO itu bagus untuk jangka panjang, tapi Anda harus menunggu berbulan-bulan agar terindeks. Kalau Anda butuh customer dan kuota seat terisi sekarang, bukan 30–90 hari lagi, Anda butuh cara lain yang langsung mendatangkan audiens.",
    impact: "Impact: Biaya operasional armada & gaji tim terus berjalan tiap hari",
  },
  {
    num: 3,
    icon: TrendingDown,
    tag: "BUDGET BONCOS · 90% GHOSTING",
    tagType: "red",
    title: "Pernah Coba Pasang Iklan Sendiri Tapi Cuma Dapat Chat 'P' Lalu Hilang",
    desc: "Memasang iklan sembarangan langsung diarahkan ke nomor WhatsApp tanpa landing page penyaring. Akibatnya ratusan penonton iseng cuma nanya 'P', minta pricelist, lalu langsung ghosting saat dibalas.",
    impact: "Impact: Uang iklan hangus di Meta tanpa ada satu pun transaksi closing",
  },
  {
    num: 4,
    icon: BarChart3,
    tag: "UNOPTIMIZED ASSETS · KONTEN MUBADIR",
    tagType: "amber",
    title: "Dokumentasi Foto & Video Menumpuk di HP Tanpa Diolah Jadi Format Iklan",
    desc: "Anda punya banyak dokumentasi bahagia jamaah atau wisatawan di galeri handphone, tapi tidak tahu cara meriset audiens yang tepat dan mengolahnya menjadi copywriting penawaran yang memicu transfer DP.",
    impact: "Impact: Kalah bersaing dengan biro lain yang iklannya lebih masif & menarik",
  },
  {
    num: 5,
    icon: Database,
    tag: "NO TRACKING · BUTA DATA",
    tagType: "blue",
    title: "Tebak-Tebakan Tanpa Pelacakan Data yang Jelas & Terukur",
    desc: "Tidak pernah tahu berapa biaya riil per chat masuk yang valid, berapa rasio konversi pengunjung website, dan materi iklan mana yang benar-benar menghasilkan closing. Semuanya serba kira-kira.",
    impact: "Impact: Sulit melakukan scale-up karena tidak punya data metrik yang pasti",
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
            <span>DIAGNOSTIK BISNIS TRAVEL AGENCY</span>
          </div>
          <h2 className="h2-heading">
            Website Bagus Tapi Sepi? <br className="hidden md:inline" />
            <span className="gradient-text">Masalahnya Bukan di Website-nya — Nggak Ada yang Lihat.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 740, margin: "0 auto 40px" }}>
            SEO bisa menjawab masalah kunjungan, tapi Anda harus menunggu berbulan-bulan. Kalau agensi Anda butuh customer sekarang, inilah 5 kebocoran nyata yang wajib diselesaikan dengan kombinasi Website Flagship dan Meta Ads tertarget.
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
              Jangan Biarkan Website Anda Menjadi Rumah Kosong Tanpa Pembeli
            </h4>
            <p className={styles.closingSub}>
              Bangun Website Flagship dan dapatkan setup iklan Meta Ads 100% gratis. Kuota kami batasi ketat hanya 5 slot per bulan agar fokus dan terukur.
            </p>
          </div>
          <Link href="/contact" className="btn-cta-blue">
            <span>Amankan 1 dari 5 Slot Bulan Ini</span>
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

