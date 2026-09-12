"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lock, CheckCircle2, ShieldCheck, PhoneCall } from "lucide-react";
import { trackMetaEvent } from "@/lib/metaPixel";
import styles from "./CtaSection.module.css";

const options = [
  {
    letter: "A",
    title: "Tetap dengan Cara Lama",
    desc: "Biarkan website sepi tanpa pengunjung, posting medsos yang makin tenggelam, dan omset stagnan tanpa ada aliran customer baru.",
    recommended: false,
  },
  {
    letter: "B",
    title: "Coba Pasang Iklan Sendiri",
    desc: "Bakar budget jutaan di Ads Manager tanpa landing page penyaring, dapat ratusan chat 'P' yang ghosting, dan bingung meriset targeting sendiri.",
    recommended: false,
  },
  {
    letter: "C",
    title: "Bermitra dengan Tanscale",
    desc: "Website Flagship siap konversi + jasa setup iklan Meta Ads 100% GRATIS. Semua terukur dan kami dampingi sampai closing pertama datang. Kuota 5 slot/bulan.",
    recommended: true,
  },
];


export default function CtaSection() {
  const router = useRouter();
  const [quickWa, setQuickWa] = useState("");

  const handleLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = quickWa.trim().replace(/[^0-9]/g, "");
    if (cleanPhone) {
      trackMetaEvent("Lead", {
        userData: { phone: cleanPhone },
        customData: {
          content_name: "Quick WA Lead CTA",
          content_category: "Hero/Bottom CTA",
        },
      });
      router.push(`/contact?wa=${encodeURIComponent(cleanPhone)}`);
    } else {
      router.push("/contact");
    }
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
            <span>KEPUTUSAN STRATEGIS TRAVEL AGENCY</span>
          </div>

          <h2 className="h2-heading">
            Siap Datangkan Customer &amp; Jamaah Baru? <br className="hidden md:inline" />
            <span className="gradient-text">Jangan Banyak Mikir, Amankan Slotnya Sekarang</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 700, margin: "0 auto 36px", textAlign: "center" }}>
            Kami cuma buka 5 slot bulan ini agar riset audiens, materi iklan visual, dan pemantauan closing agensi Anda tertangani secara maksimal.
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
                <div className={styles.recommendedBadge}>REKOMENDASI TERBAIK</div>
              )}

              <div className={styles.letterBadge}>{opt.letter}</div>

              <h3 className={styles.optionTitle}>{opt.title}</h3>
              <p className={styles.optionDesc}>{opt.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* High-Converting SaaS Quick Portal to /contact */}
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
            <h3 className={styles.formTitle}>Konsultasi &amp; Amankan 1 dari 5 Slot Bulan Ini</h3>
            <p className={styles.formSubtitle}>
              Masukkan nomor WhatsApp aktif Anda untuk langsung membuka formulir kualifikasi biro travel Anda dan memastikan ketersediaan kuota bulan ini.
            </p>

          </div>

          <form onSubmit={handleLaunch} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="quickWa" className={styles.label}>
                Nomor WhatsApp Aktif Anda (Opsional untuk Pre-Fill)
              </label>
              <input
                type="tel"
                id="quickWa"
                name="quickWa"
                placeholder="Contoh: 081234567890 / 6281234567890"
                value={quickWa}
                onChange={(e) => setQuickWa(e.target.value)}
                className={styles.input}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span>Lanjut ke Formulir &amp; Amankan Slot</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <div className={styles.formGuarantees}>
            <div className={styles.guaranteeItem}>
              <ShieldCheck size={14} color="#10B981" />
              <span>SLA Response 60 Menit</span>
            </div>
            <div className={styles.guaranteeItem}>
              <CheckCircle2 size={14} color="#10B981" />
              <span>Limit 5 Slot per Bulan</span>
            </div>
            <div className={styles.guaranteeItem}>
              <Lock size={14} color="#10B981" />
              <span>100% Bebas Biaya Konsultasi</span>
            </div>
          </div>
        </motion.div>

        {/* P.S. Section */}
        <div className={styles.psSection}>
          <h4 className={styles.psHeading}>P.S. Penting Mengenai Batasan 5 Slot per Bulan:</h4>
          <p className={styles.psText}>
            Kami sengaja membatasi hanya 5 agensi travel per bulan untuk menjaga intensitas optimasi iklan dan pendampingan sampai closing pertama. Begitu kuota 5 partner bulan ini terisi, pendaftaran akan langsung ditutup sampai bulan berikutnya.
          </p>
        </div>
      </div>
    </section>
  );
}


