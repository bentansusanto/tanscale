"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { trackMetaEvent } from "@/lib/metaPixel";
import styles from "./TestimonialsSection.module.css";

const WA_PHONE = "6288277450792";
const waGuaranteeMessage = encodeURIComponent(
  "Halo Tanscale, aku mau amankan slot website & iklan Meta travel bulan ini."
);
const waGuaranteeUrl = `https://wa.me/${WA_PHONE}?text=${waGuaranteeMessage}`;

const conditions = [
  "Setup Iklan Meta Gratis: Nggak ada biaya jasa setting iklan. Budget saldo iklan kamu bayar langsung ke Meta.",
  "Data Terlacak Jelas: Meta Pixel & tracking konversi aku pasang rapi, jadi kamu tahu dari klik iklan sampai chat WA yang masuk.",
  "Dipantau Sampai Closing: Iklan jalan bukan ditinggal. Aku pantau performanya dan optimasi terus sampai closing pertama kamu datang.",
  "Fokus, Terbatas 5 Client / Bulan: Kuota dibatasi agar aku bisa fokus riset audiens, olah materi iklan, dan pantau hasilnya tiap hari.",
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
          <span className="gradient-text">Semua Terukur, Semua Aku Pantau</span>
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
          Aku nggak datang dengan janji muluk. Kamu dapat pendampingan langsung dariku: dari website siap pakai, iklan Meta ditayangkan, sampai closing pertama kamu datang.
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

          <div className={styles.guaranteeTag}>TRANSPARAN · TERUKUR · TERBATAS 5 CLIENT BULAN INI</div>

          <h3 className={styles.guaranteeMainText}>
            Komitmenku Buat Bisnis Travel Kamu
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
            <a
              href={waGuaranteeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-blue"
              onClick={() =>
                trackMetaEvent("Contact", {
                  customData: { content_name: "Jaminan Konsultasi Gratis" },
                })
              }
            >
              <span>Amankan Slot Bulan Ini</span>
              <ArrowRight size={17} />
            </a>
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
          Kalau kamu mau datangkan customer travel lewat alur yang jelas dan terukur, amankan slot kamu sebelum kuota 5 client bulan ini penuh.
        </motion.p>
      </div>
    </section>
  );
}




