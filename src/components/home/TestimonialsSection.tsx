"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight, SearchCheck, Sparkles } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const conditions = [
  "Jasa Setup Iklan Meta Ads 100% GRATIS: Anda tidak membayar biaya jasa sepeserpun. Saldo budget iklan Anda bayarkan langsung ke Meta secara transparan.",
  "Pelacakan Data Menyeluruh: Meta Pixel dan Conversion Tracking dipasang presisi. Anda melihat data riil dari klik iklan, pengunjung paket, hingga chat WhatsApp yang masuk.",
  "Optimasi Berkelanjutan Sampai Closing: Begitu website live dan iklan jalan, kerja kami belum selesai. Kami evaluasi data audiens dan optimasi website Anda sampai closing pertama datang.",
  "Limit Ketat 5 Slot per Bulan: Kami hanya menerima 5 travel agency per bulan agar tim kami bisa fokus meriset audiens, mengolah materi visual, dan memantau performa iklan harian Anda.",
];

export default function TestimonialsSection() {
  return (
    <section className="section-dark-alt" id="garansi">
      <div className="container-narrow">
        {/* H2 Headline */}
        <motion.h2
          className="h2-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          Nggak Ada Tebak-Tebakan. <br className="hidden md:inline" />
          <span className="gradient-text">Semua Terukur, Semua Kami Pantau</span>
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className="body-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: "center", margin: "0 auto 32px" }}
        >
          Kami tidak datang dengan janji muluk atau testimoni rekayasa. Ketika bermitra dengan Tanscale, Anda mendapatkan conviction kerja nyata: pendampingan terukur dari pembuatan website, setup iklan Meta Ads gratis, hingga closing pertama Anda tiba.
        </motion.p>

        {/* Main Guarantee Box */}
        <motion.div
          className={styles.guaranteeBox}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className={styles.shieldIconWrapper}>
            <ShieldCheck size={38} color="#10B981" />
          </div>

          <div className={styles.guaranteeTag}>TRANSPARANSI DATA · ZERO-RISK CONVICTION · LIMIT 5 SLOT/BULAN</div>

          <h3 className={styles.guaranteeMainText}>
            Komitmen Nyata Tanscale untuk Pertumbuhan Travel Agency Anda
          </h3>

          <div className={styles.conditionsList}>
            {conditions.map((item, idx) => (
              <div key={idx} className={styles.conditionItem}>
                <CheckCircle2 size={18} color="#10B981" className={styles.checkIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn-cta-blue">
              <span>Amankan 1 dari 5 Slot Bulan Ini</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>

        {/* Closing Text */}
        <motion.p
          className={styles.closingText}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Kalau Anda serius ingin mendatangkan customer dan jamaah baru tanpa harus menunggu berbulan-bulan, jangan banyak mikir. Amankan slot agensi Anda sekarang sebelum kuota 5 partner bulan ini penuh.
        </motion.p>
      </div>
    </section>
  );
}




