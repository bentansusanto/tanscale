"use client";

import { motion } from "framer-motion";
import {
  Sparkles, Megaphone, Bot, Repeat,
  Check, ArrowRight, MessageCircle
} from "lucide-react";
import styles from "./ServicesPage.module.css";

const services = [
  {
    id: "growth",
    icon: Sparkles,
    color: "#F59E0B",
    colorBg: "rgba(245, 158, 11, 0.15)",
    colorBorder: "rgba(245, 158, 11, 0.3)",
    title: "1. Premium Offer & Brand Positioning",
    tagline: "Diferensiasi. Margin Tebal. Stop Perang Harga.",
    description:
      "Banyak bisnis travel stagnan bukan karena pelayanannya buruk, melainkan penawarannya tidak memiliki diferensiasi yang kuat sehingga terpaksa perang diskon. Kami merestrukturisasi penawaran paket wisata/umroh Anda menjadi pengalaman bernilai tinggi (*high-ticket*) yang tidak bisa dibandingkan dengan kompetitor murah.",
    deliverables: [
      "Audit positioning pasar & analisa kompetitor",
      "Restrukturisasi paket wisata/umroh high-ticket",
      "Strategi pricing psikologis ber-margin tebal",
      "Penyusunan Unique Value Proposition (UVP)",
      "Blueprint roadmap pertumbuhan 90 hari",
      "Sesi evaluasi target bulanan",
    ],
    timeline: "2 minggu penyerahan strategi",
    ideal: "Biro travel yang lelah perang harga murah dan ingin menaikkan margin profit",
  },
  {
    id: "marketing",
    icon: Megaphone,
    color: "#38BDF8",
    colorBg: "rgba(56, 189, 248, 0.15)",
    colorBorder: "rgba(56, 189, 248, 0.3)",
    title: "2. Precision Ads & Lead Filtering Funnel",
    tagline: "Tarik Wisatawan Berkualitas. Filter Prospek. Konversi Tinggi.",
    description:
      "Kami membangun sistem akuisisi digital berkonversi tinggi melalui Meta & Google Ads yang ditargetkan khusus ke wisatawan yang memiliki daya beli valid. Dilengkapi landing page interaktif yang menyaring leads 'ghosting' sebelum masuk ke WhatsApp CS Anda.",
    deliverables: [
      "Manajemen Iklan Meta & Google Ads Tersegmen",
      "Landing page mobile-first dengan filter kualifikasi",
      "Tracking server-side Conversion API akurat",
      "Copywriting penawaran berbasis psikologi pembeli",
      "Pembersihan leads tidak relevan (anti-ghosting)",
      "Laporan performa ROAS & CAC berkala",
    ],
    timeline: "Berjalan aktif dalam 2–3 minggu",
    ideal: "Biro travel yang sering iklan boncos dan hanya dapat chat tanya harga murah",
  },
  {
    id: "automation",
    icon: Bot,
    color: "#34D399",
    colorBg: "rgba(52, 211, 153, 0.15)",
    colorBorder: "rgba(52, 211, 153, 0.3)",
    title: "3. 24/7 Fast-Response WhatsApp CRM",
    tagline: "Respon Kilat < 60 Detik. Auto Follow-Up. Anti-Lead Bocor.",
    description:
      "Kecepatan adalah kunci closing dalam industri travel. Kami membangun sistem otomatisasi CRM WhatsApp yang merespon setiap pesan baru dalam tempo kurang dari 60 detik, mengirimkan brosur otomatis, dan mem-follow up calon pembeli yang belum transfer.",
    deliverables: [
      "Integrasi bot WhatsApp CRM respon < 60 detik",
      "Otomatisasi pengiriman brosur & itinerary dinamis",
      "Alur follow-up multi-pesan otomatis",
      "Struktur dashboard multi-CS terintegrasi",
      "Pelatihan SOP closing WhatsApp untuk tim sales",
      "Sistem pemulihan leads lama yang belum closing",
    ],
    timeline: "Implementasi penuh 2–3 minggu",
    ideal: "Owner travel yang sering kehilangan bookingan karena CS lambat balas di luar jam kerja",
  },
  {
    id: "analytics",
    icon: Repeat,
    color: "#FB923C",
    colorBg: "rgba(251, 146, 60, 0.15)",
    colorBorder: "rgba(251, 146, 60, 0.3)",
    title: "4. Traveler Retention & Referral Engine",
    tagline: "Repeat Order Rutin. Viral Referral. Stabil di Low Season.",
    description:
      "Mengubah jamaah atau wisatawan yang puas menjadi mesin promosi alami. Kami merancang sistem loyalty, reminder liburan berkala, dan referral otomatis yang menjaga arus kas dan pemesanan tetap deras bahkan di masa low season.",
    deliverables: [
      "Sistem database & segmentasi alumni trip",
      "Kampanye otomatis pengingat liburan tahunan",
      "Program reward referral keluarga & kolega",
      "Penawaran eksklusif rute baru (early bird)",
      "Strategi stabilisasi cashflow low season",
      "Dasbor retensi pelanggan terpadu",
    ],
    timeline: "Aktif dalam 2 minggu",
    ideal: "Travel agency yang sepi saat low season dan belum memaksimalkan database pelanggan lama",
  },
];

export default function ServicesPage() {
  const waMessage = encodeURIComponent(
    "Halo Tanscale, saya ingin konsultasi mengenai 4 Pilar Solusi Scale-Up untuk bisnis travel saya."
  );
  const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="eyebrowWrap">
              <span className="eyebrow eyebrow-gold">
                <Sparkles size={12} /> 4 Pilar Akselerasi Tanscale
              </span>
            </div>

            <h1 className={`display-xl ${styles.heroHeading}`}>
              Solusi Terintegrasi Khusus <span className="text-gold">Biro Perjalanan &amp; Umroh</span>
            </h1>

            <p className="text-lg" style={{ maxWidth: 600, margin: "0 auto" }}>
              Bukan sekadar agensi pasang iklan biasa. Kami membangun ekosistem penjualan terpadu dari hulu ke hilir untuk mengubah traffic menjadi bookingan bernilai tinggi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.servicesList}>
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                className={`card ${styles.serviceCard}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={styles.serviceLeft}>
                  <div
                    className={styles.serviceIcon}
                    style={{ background: service.colorBg, border: `1px solid ${service.colorBorder}` }}
                  >
                    <service.icon size={26} color={service.color} />
                  </div>

                  <div className={styles.serviceMeta}>
                    <div className={styles.serviceTimeline}>
                      <span className={styles.metaLabel}>Estimasi Waktu</span>
                      <span className={styles.metaValue}>{service.timeline}</span>
                    </div>
                    <div className={styles.serviceIdeal}>
                      <span className={styles.metaLabel}>Cocok Untuk</span>
                      <span className={styles.metaValue}>{service.ideal}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.serviceRight}>
                  <p className={styles.serviceTagline} style={{ color: service.color }}>
                    {service.tagline}
                  </p>
                  <h2 className={`display-md ${styles.serviceTitle}`}>{service.title}</h2>
                  <p className="text-base">{service.description}</p>

                  <div className={styles.deliverables}>
                    <h4 className={styles.deliverablesTitle}>Yang Anda Dapatkan:</h4>
                    <div className={styles.deliverablesList}>
                      {service.deliverables.map((d, j) => (
                        <div key={j} className={styles.deliverableItem}>
                          <div className={styles.checkIcon} style={{ background: service.colorBg, borderColor: service.colorBorder }}>
                            <Check size={12} color={service.color} strokeWidth={3} />
                          </div>
                          <span className="text-base" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                    style={{ alignSelf: "flex-start", marginTop: "var(--space-4)" }}
                  >
                    <MessageCircle size={15} /> Konsultasikan via WhatsApp <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className="display-lg" style={{ maxWidth: 600, color: "#ffffff" }}>
              Ingin Mengetahui Kebocoran Terbesar Pada Bisnis Anda?
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Jadwalkan sesi audit strategi 45 menit gratis dan mari temukan peluang terbesar bisnis travel Anda bersama.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <MessageCircle size={16} /> Jadwalkan Audit Gratis via WhatsApp <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
