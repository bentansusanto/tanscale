"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Search, Smartphone, Award, TrendingUp } from "lucide-react";
import styles from "./WhyNowSection.module.css";

const timelineSteps = [
  {
    step: "Sekarang",
    title: "Audit & Blueprint",
    desc: "Identifikasi kebocoran traffic & positioning rute eksklusif travel Anda.",
    icon: Search,
  },
  {
    step: "30 Hari",
    title: "Website Live + Google Ready",
    desc: "Website berstandar tinggi siap melayani pemesanan & terhubung WhatsApp CRM.",
    icon: Smartphone,
  },
  {
    step: "60 Hari",
    title: "Mulai Dapat Organic Traffic",
    desc: "Calon jamaah & wisatawan yang mencari paket di Google mulai masuk otomatis.",
    icon: TrendingUp,
  },
  {
    step: "90 Hari",
    title: "Scale-Up & 5-8 Booking Baru",
    desc: "Pipeline booking stabil dan terprediksi tanpa ketergantungan pada iklan bakar uang.",
    icon: Award,
  },
];

export default function WhyNowSection() {
  return (
    <section className="section-dark" id="why-now">
      <div className="container-narrow">
        {/* H2 Headline */}
        <motion.h2
          className="h2-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          Kenapa Ini Jadi Masalah <span className="gradient-text">Kritis Hari Ini?</span>
        </motion.h2>

        {/* Before / After Comparison */}
        <div className={styles.comparisonGrid}>
          {/* Before Box */}
          <motion.div
            className={styles.beforeBox}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.comparisonTitleRed}>Legacy Era (2015-2020)</h3>
            <ul className={styles.comparisonList}>
              <li>Brosur cetak, pameran travel di mall, dan rekomendasi mulut-ke-mulut masih sangat efektif.</li>
              <li>Iklan Facebook masih murah meriah (biaya per lead di bawah Rp 5.000).</li>
              <li>Kompetitor travel online masih sedikit, jamaah membeli tanpa banyak membandingkan.</li>
              <li>Cukup punya kantor fisik dan nomor telepon tetap bisa closing puluhan paket.</li>
            </ul>
          </motion.div>

          {/* After Box */}
          <motion.div
            className={styles.afterBox}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className={styles.comparisonTitleBlue}>Tanscale Tech Era (2024-2026)</h3>
            <ul className={styles.comparisonList}>
              <li>89% calon jamaah &amp; wisatawan meriset kredibilitas travel Anda lewat Google sebelum transfer DP.</li>
              <li>Iklan berbayar makin mahal jika tidak punya landing page filter berkualitas tinggi.</li>
              <li>Kecepatan respon WhatsApp di bawah 60 detik menjadi penentu 78% konversi closing.</li>
              <li>Travel tanpa aset website profesional dianggap mencurigakan atau travel abal-abal.</li>
            </ul>
          </motion.div>
        </div>

        {/* Timeline Graphic */}
        <div className={styles.timelineWrapper}>
          <h3 className={styles.timelineHeading}>
            <Clock size={20} color="#60A5FA" />
            <span>Roadmap Pertumbuhan 90 Hari Bersama Tanscale:</span>
          </h3>

          <div className={styles.timelineGrid}>
            {timelineSteps.map((item, index) => (
              <div key={item.step} className={styles.timelineCard}>
                <div className={styles.stepBadge}>{item.step}</div>
                <div className={styles.iconCircle}>
                  <item.icon size={20} color="#60A5FA" />
                </div>
                <h4 className={styles.stepTitle}>{item.title}</h4>
                <p className={styles.stepDesc}>{item.desc}</p>
                {index < timelineSteps.length - 1 && <div className={styles.connectorLine} />}
              </div>
            ))}
          </div>
        </div>

        {/* Warning Box */}
        <motion.div
          className={styles.warningBox}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.warningIcon}>
            <AlertTriangle size={24} color="#94A3B8" />
          </div>

          <div>
            <h4 className={styles.warningTitle}>Jadi... intinya: Jangan tunda.</h4>
            <p className={styles.warningText}>
              Setiap bulan Anda menunda perbaikan sistem digital, calon jamaah dan wisatawan di kota Anda disapu bersih oleh agensi travel yang sudah siap di Google &amp; Meta Ads.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

