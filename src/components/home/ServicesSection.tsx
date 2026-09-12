"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Check } from "lucide-react";
import styles from "./ServicesSection.module.css";

const packages = [
  {
    id: "flagship",
    badge: "PALING BANYAK DIPILIH · SEKALI BAYAR",
    isFeatured: true,
    title: "Paket Lengkap: Website Baru + Iklan Meta",
    targetAudience:
      "Untuk travel yang belum punya website, atau websitenya sudah jadul dan lemot di HP.",
    currency: "Rp",
    price: "6.500.000",
    billingCycle: "Sekali Bayar",
    note: "Bayar sekali, website jadi milik Anda selamanya. Jasa setting iklan Meta gratis.",
    features: [
      "Website travel siap pakai & cepat diakses di HP",
      "Gratis domain .com & cloud server 1 tahun",
      "Tombol WhatsApp otomatis langsung ke rute paket",
      "Gratis jasa setting iklan Facebook & Instagram",
      "Edit foto & video HP Anda jadi materi iklan",
      "Pasang Meta Pixel & pelacakan iklan rapi",
      "Didampingi & dipantau sampai closing pertama",
    ],
    ctaText: "Amankan Slot Web & Iklan Gratis",
    ctaLink: "/contact?plan=flagship",
    guaranteeText: "Kuota terbatas 5 travel per bulan",
    subNote: "*min budget iklan 1 juta - 1,5 juta",
    isBlueCheck: false,
  },
  {
    id: "ads-growth",
    badge: "KHUSUS SUDAH PUNYA WEB · PENGERJAAN 1 BULAN",
    isFeatured: false,
    title: "Audit Website & Kelola Iklan Meta",
    targetAudience:
      "Untuk travel yang sudah punya website, tapi sepi pengunjung atau iklannya belum closing.",
    currency: "Rp",
    price: "3.500.000",
    billingCycle: "(Pengerjaan 1 Bulan)",
    note: "Jasa pengerjaan & kelola iklan intensif 1 bulan penuh. Saldo iklan dibayar mandiri ke Meta.",
    features: [
      "Audit & perbaiki copywriting pada website",
      "Optimasi alur konversi dari iklan ke website hingga checkout/WhatsApp",
      "Cek & pasang Meta Pixel di website Anda",
      "Rekomendasi materi + script konten iklan siap pakai",
      "Riset audiens & setting kampanye iklan Meta",
      "Pantau & optimasi iklan harian selama 1 bulan",
      "Laporan performa mingguan & pendampingan strategi closing",
    ],
    ctaText: "Pilih Jasa Iklan (Rp 3,5 Juta)",
    ctaLink: "/contact?plan=ads",
    guaranteeText: "Saldo iklan fleksibel, bayar mandiri ke Meta",
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
            <span>PILIHAN PAKET SESUAI KEBUTUHAN</span>
          </div>
          <h2 className="h2-heading">
            Mau Bikin Website Baru, <br className="hidden md:inline" />
            <span className="gradient-text">atau Maksimalkan Website yang Sudah Ada?</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 640, margin: "0 auto" }}>
            Tinggal pilih sesuai kebutuhan Anda. Mau kami buatkan website baru yang langsung siap diiklankan, atau kami bantu audit dan iklankan website lama Anda biar cepat ramai.
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

              <Link
                href={pkg.ctaLink}
                className={`${styles.pricingCtaBtn} ${!pkg.isFeatured ? styles.pricingCtaBtnSecondary : ""}`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight size={18} className={styles.btnArrow} />
              </Link>

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




