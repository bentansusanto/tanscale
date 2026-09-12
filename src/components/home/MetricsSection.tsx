"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import styles from "./MetricsSection.module.css";


const logicCards = [
  {
    num: 1,
    title: "Traffic Langsung Masuk di Hari Pertama Iklan Tayang",
    body: "Beda sama SEO yang butuh berbulan-bulan, Meta Ads langsung kirim traffic ke website kamu sejak iklan mulai di publish. Audiens yang lihat iklan kamu sudah tertarget, bukan orang random.",
    stat: "Hari ke-1 live, calon customer sudah bisa masuk",
  },
  {
    num: 2,
    title: "Foto & Video di HP Kamu Kita Ubah Jadi Materi Iklan yang Menghasilkan Penjualan",
    body: "Konten perjalanan kamu yang selama ini cuma jadi arsip kita filter, kita edit, dan kita jadiin creative iklan.",
    stat: "Konten nganggur jadi iklan yang perform",
  },
  {
    num: 3,
    title: "Semua Terlacak, dari Klik Iklan Sampai Chat WA Masuk",
    body: "Kita pasang Meta Pixel dan tracking konversi di website kamu. Jadi kita tahu persis berapa orang klik, berapa yang baca, dan berapa yang akhirnya chat ke WA.",
    stat: "Nggak ada yang cuma tebak-tebakan",
  },
  {
    num: 4,
    title: "Aku Pantau Iklan Sampai Closing Serta Menentukan Strategi Selanjutnya",
    body: "Iklan yang sudah tayang terus aku pantau performanya. Mana yang works kita scale, mana yang boncos kita stop dan ganti. Ketika ada penjualan, kita bisa tentukan langkah selanjutnya.",
    stat: "Iklan jalan, aku tetap pantau",
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
            <span>KENAPA WEBSITE + META ADS?</span>
          </div>
          <h2 className="h2-heading">
            Ini yang Bikin Iklan Travel Kamu{" "}
            <span className="gradient-text">Bisa Closing, Bukan Cuma Ramai.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 640, margin: "0 auto" }}>
            Kombinasi website yang dioptimasi + iklan Meta Ads yang tertarget bikin setiap rupiah budget iklan kamu berpotensi menghasilkan konversi.
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


