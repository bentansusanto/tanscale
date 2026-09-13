"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { trackMetaEvent } from "@/lib/metaPixel";
import styles from "./ServicesSection.module.css";

const WA_PHONE = "6288277450792";
const waFlagshipMessage = encodeURIComponent(
  "Halo Tanscale, aku tertarik dengan Paket Website Baru + Setup Iklan Meta (Rp 6,5 Juta). Mau konsultasi dan amankan slot bulan ini."
);
const waAdsMessage = encodeURIComponent(
  "Halo Tanscale, aku sudah punya website dan tertarik dengan Paket Audit Website & Kelola Iklan Meta (Rp 3,5 Juta). Mau konsultasi dan amankan slot bulan ini."
);

const packages = [
  {
    id: "flagship",
    badge: "PALING BANYAK DIPILIH · SEKALI BAYAR",
    isFeatured: true,
    title: "Website Baru + Setup Iklan Meta",
    targetAudience:
      "Cocok kalau kamu belum punya website, atau website lama lemot dan sepi.",
    currency: "Rp",
    price: "6.500.000",
    billingCycle: "Sekali Bayar",
    note: "Bayar sekali, website jadi milik kamu selamanya. Jasa setup iklan Meta gratis.",
    features: [
      "Website travel modern & cepat dibuka di HP",
      "Gratis domain .com & cloud hosting 1 tahun",
      "Tombol WhatsApp otomatis langsung ke paket tour",
      "Gratis jasa setup iklan Facebook & Instagram",
      "Edit foto & video HP kamu jadi materi iklan",
      "Pasang Meta Pixel & event tracking konversi",
      "Dipantau & didampingi sampai closing pertama",
    ],
    ctaText: "Amankan Slot Sekarang",
    ctaLink: `https://wa.me/${WA_PHONE}?text=${waFlagshipMessage}`,
    guaranteeText: "Slot terbatas 5 travel bulan ini",
    subNote: "*min budget iklan 1 juta - 1,5 juta",
    isBlueCheck: false,
  },
  {
    id: "ads-growth",
    badge: "SUDAH PUNYA WEB · PENGERJAAN 1 BULAN",
    isFeatured: false,
    title: "Audit Website & Kelola Iklan Meta",
    targetAudience:
      "Cocok kalau kamu sudah punya website, tapi sepi pengunjung atau iklan belum closing.",
    currency: "Rp",
    price: "3.500.000",
    billingCycle: "(Pengerjaan 1 Bulan)",
    note: "Kelola iklan intensif 1 bulan penuh. Saldo iklan dibayar langsung ke Meta.",
    features: [
      "Audit alur website & copywriting penawaran",
      "Optimasi alur konversi dari iklan ke WhatsApp",
      "Cek & pasang Meta Pixel di website kamu",
      "Rekomendasi materi & script iklan siap tayang",
      "Riset audiens & setup kampanye iklan Meta",
      "Pantau & optimasi iklan harian selama 1 bulan",
      "Laporan performa mingguan & evaluasi hasil",
    ],
    ctaText: "Pilih Kelola Iklan (Rp 3,5 Juta)",
    ctaLink: `https://wa.me/${WA_PHONE}?text=${waAdsMessage}`,
    guaranteeText: "Saldo iklan fleksibel, bayar langsung ke Meta",
    subNote: "*min budget iklan 1 juta - 1,5 juta",
    isBlueCheck: true,
  },
];

export default function ServicesSection() {
  return (
    <section className="section-dark" id="package">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.sectionPill}>
            <Sparkles size={13} color="#94A3B8" />
            <span>PILIHAN PAKET</span>
          </div>
          <h2 className="h2-heading">
            Mau Bikin Website Baru, <br className="hidden md:inline" />
            <span className="gradient-text">atau Maksimalkan Website yang Ada?</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 640, margin: "0 auto" }}>
            Pilih sesuai kondisi travel kamu saat ini: bangun website baru yang siap diiklankan, atau optimasi website lama kamu biar cepat closing.
          </p>
        </motion.div>

        {/* 2-Tier Comparative Pricing Cards Layout */}
        <motion.div
          className={styles.pricingCardsGrid}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${styles.pricingCard} ${pkg.isFeatured ? styles.pricingCardFeatured : ""}`}
            >
              <div
                className={`${styles.pricingTag} ${pkg.isFeatured ? styles.pricingTagFeatured : ""}`}
              >
                {pkg.badge}
              </div>

              <h3 className={styles.planTitle}>{pkg.title}</h3>
              <div className={styles.planAudience}>{pkg.targetAudience}</div>

              <div className={styles.priceAmount}>
                <span className={styles.currency}>{pkg.currency}</span>
                <span className={styles.amount}>{pkg.price}</span>
                <span className={styles.billingCycle}>{pkg.billingCycle}</span>
              </div>

              <p className={styles.priceNote}>{pkg.note}</p>

              <div className={styles.planFeaturesList}>
                {pkg.features.map((feat, i) => (
                  <div key={i} className={styles.planFeatureItem}>
                    <div
                      className={`${styles.featureCheckIcon} ${pkg.isBlueCheck ? styles.featureCheckIconBlue : ""}`}
                    >
                      <Check
                        size={13}
                        color={pkg.isBlueCheck ? "#60A5FA" : "#10B981"}
                        strokeWidth={3}
                      />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href={pkg.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackMetaEvent("Contact", {
                    customData: {
                      content_name: `Paket ${pkg.title}`,
                      content_category: "Pilihan Paket",
                      value: pkg.id === "flagship" ? 6500000 : 3500000,
                      currency: "IDR",
                    },
                  })
                }
                className={`${styles.pricingCtaBtn} ${!pkg.isFeatured ? styles.pricingCtaBtnSecondary : ""}`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight size={18} className={styles.btnArrow} />
              </a>

              <div
                className={`${styles.guaranteeTagWrap} ${pkg.isBlueCheck ? styles.guaranteeTagBlue : ""}`}
              >
                <ShieldCheck
                  size={16}
                  color={pkg.isBlueCheck ? "#60A5FA" : "#10B981"}
                />
                <span>{pkg.guaranteeText}</span>
              </div>

              {pkg.subNote && (
                <div className={styles.cardSubNote}>
                  <span>{pkg.subNote}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}




