"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { trackMetaEvent } from "@/lib/metaPixel";
import styles from "./CtaSection.module.css";

const options = [
  {
    letter: "A",
    title: "Tetap dengan Cara Lama",
    desc: "Cuma ngandelin posting sosmed organik yang reach-nya makin turun, nunggu orang mampir, dan omzet travel jalan di tempat.",
    recommended: false,
  },
  {
    letter: "B",
    title: "Coba Pasang Iklan Sendiri",
    desc: "Bakar budget jutaan tanpa website yang teroptimasi, dapat chat orang iseng nanya harga lalu ghosting, dan akhirnya boncos.",
    recommended: false,
  },
  {
    letter: "C",
    title: "Kerja Bareng Aku",
    desc: "Alur jelas dari iklan Meta ke website sampai closing. Nggak ada tebak-tebakan, semua dipantau bareng. Kuota terbatas 5 client bulan ini.",
    recommended: true,
  },
];

export default function CtaSection() {
  const waMessage = encodeURIComponent(
    "Halo Tanscale, aku pemilik bisnis travel dan mau konsultasi pembuatan website & iklan Meta Ads (5 Slot Bulan Ini)."
  );
  const waUrl = `https://wa.me/6288277450792?text=${waMessage}`;

  const handleWaClick = () => {
    trackMetaEvent("Contact", {
      customData: {
        content_name: "Footer Konsultasi Gratis",
        content_category: "Direct WhatsApp",
      },
    });
  };

  return (
    <section className="section-dark" id="form-cta">
      <div className="container-narrow">
        {/* H2 Headline */}
        <motion.div
          className={styles.headerWrap}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.sectionPill}>
            <span>LANGKAH SELANJUTNYA</span>
          </div>

          <h2 className="h2-heading">
            Siap Datangkan Customer Travel? <br className="hidden md:inline" />
            <span className="gradient-text">Amankan Slot Kamu Bulan Ini</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 640, margin: "0 auto 36px", textAlign: "center" }}>
            Aku cuma buka 5 slot bulan ini biar riset audiens, materi iklan, dan optimasi closing travel kamu benar-benar maksimal.
          </p>
        </motion.div>

        {/* 3 Options (A, B, C) */}
        <div className={styles.optionsGrid}>
          {options.map((opt, idx) => (
            <motion.div
              key={opt.letter}
              className={`${styles.optionCard} ${opt.recommended ? styles.recommendedCard : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {opt.recommended && (
                <div className={styles.recommendedBadge}>PILIHAN TERBAIK</div>
              )}

              <div className={styles.letterBadge}>{opt.letter}</div>

              <h3 className={styles.optionTitle}>{opt.title}</h3>
              <p className={styles.optionDesc}>{opt.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* High-Converting Direct WhatsApp Card */}
        <motion.div
          className={styles.formWrapper}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.formHeader}>
            <div className={styles.portalIconWrap}>
              <PhoneCall size={24} color="#60A5FA" />
            </div>
            <h3 className={styles.formTitle}>Konsultasi &amp; Amankan Slot Kamu</h3>
            <p className={styles.formSubtitle}>
              Langsung terhubung ke WhatsApp untuk konsultasi dan cek sisa slot bulan ini.
            </p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWaClick}
            className={styles.submitBtn}
          >
            <span>Konsultasi Sekarang</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* P.S. Section */}
        <div className={styles.psSection}>
          <h4 className={styles.psHeading}>P.S. Kenapa Kuota Dibatasi 5 Client per Bulan?</h4>
          <p className={styles.psText}>
            Aku sengaja batasi 5 travel per bulan biar fokus riset audiens, olah materi iklan, dan dampingi sampai closing pertama kamu datang. Begitu 5 slot bulan ini terisi, pendaftaran langsung ditutup sampai bulan berikutnya.
          </p>
        </div>
      </div>
    </section>
  );
}


