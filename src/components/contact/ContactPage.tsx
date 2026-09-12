"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { trackMetaEvent } from "@/lib/metaPixel";
import styles from "./ContactPage.module.css";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp Senior Consultant",
    value: "+62 812 3456 7890",
    href: "https://wa.me/6281234567890",
    badge: "Fast Response < 15 Min",
  },
  {
    icon: Mail,
    label: "Email Partnership",
    value: "growth@tanscale.com",
    href: "mailto:growth@tanscale.com",
    badge: "Official Inquiries",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Jakarta Selatan, Indonesia",
    href: "#",
    badge: "Main Office",
  },
];

const serviceCategories = [
  "Biro Perjalanan Umroh & Haji Khusus",
  "Open Trip Domestik (Bromo, Labuan Bajo, Raja Ampat, dll.)",
  "Tour Internasional & Wisata Halal (Turki, Jepang, Eropa)",
  "Corporate Outbound & MICE Gathering",
  "Custom Private Trip Keluarga & VIP",
  "Lainnya / Ingin Konsultasi Umum",
];

function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    agencyName: "",
    fullName: "",
    whatsapp: "",
    email: "",
    service: "",
    revenue: "",
    message: "",
  });

  useEffect(() => {
    const waParam = searchParams.get("wa");
    const planParam = searchParams.get("plan");

    if (waParam) {
      setForm((prev) => ({ ...prev, whatsapp: waParam }));
    }

    if (planParam === "ads") {
      setForm((prev) => ({
        ...prev,
        message: "Saya sudah punya website, ingin konsultasi Audit Website & Kelola Iklan Meta (Rp 3,5 Juta / 1 Bulan)",
      }));
    } else if (planParam === "flagship") {
      setForm((prev) => ({
        ...prev,
        message: "Ingin konsultasi Paket Lengkap Website Baru + Setup Iklan Meta Gratis (Rp 6,5 Juta)",
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let cleanPhone = form.whatsapp.trim().replace(/[^0-9]/g, "");
    if (cleanPhone.startsWith("0")) {
      cleanPhone = "62" + cleanPhone.slice(1);
    } else if (!cleanPhone.startsWith("62")) {
      cleanPhone = "62" + cleanPhone;
    }

    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);

    const isAdsPlan = searchParams.get("plan") === "ads" || form.message.includes("3,5") || form.message.includes("2,5");
    const planName = isAdsPlan
      ? "Audit Website & Kelola Iklan Meta (Rp 3,5 Juta / 1 Bulan)"
      : "Paket Lengkap Website Baru + Setup Iklan Meta Gratis (Rp 6,5 Juta)";
    const planValue = isAdsPlan ? 3500000 : 6500000;

    // Fire Meta Pixel & Conversions API (CAPI) Lead event with hashed user data
    trackMetaEvent("Lead", {
      userData: {
        fullName: form.fullName,
        phone: cleanPhone,
        email: form.email,
      },
      customData: {
        content_name: form.service || planName,
        value: planValue,
        currency: "IDR",
      },
    });

    const payload = `Halo Tim Senior Consultant Tanscale, saya pemilik biro perjalanan dan ingin konsultasi ${planName}:

📋 DATA PENDAFTAR:
• Nama Agensi: ${form.agencyName}
• Nama Pemilik/PIC: ${form.fullName}
• WhatsApp: ${cleanPhone}
• Email Bisnis: ${form.email}
• Fokus Layanan/Rute: ${form.service || "Belum dipilih"}
• Omset Saat Ini: ${form.revenue || "Belum dipilih"}
• Rencana / Kebutuhan: ${form.message || "Ingin cepat closing dengan strategi digital"}

Mohon informasi ketersediaan slot bulan ini. Terima kasih.`;

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(payload)}`, "_blank");
  };

  return (
    <div className={styles.formContainer}>
      {submitted ? (
        <div className={styles.successState}>
          <div className={styles.successIconBox}>
            <CheckCircle2 size={48} color="#10B981" />
          </div>
          <h2 className={styles.successTitle}>Permintaan Terkirim!</h2>
          <p className={styles.successDesc}>
            Anda sedang diarahkan ke WhatsApp konsultan senior Tanscale. Jika tautan WhatsApp tidak terbuka otomatis, silakan klik tombol di bawah ini:
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-blue"
            style={{ marginTop: 20 }}
          >
            <span>Buka WhatsApp Sekarang</span>
            <ArrowRight size={17} />
          </a>
        </div>
      ) : (
        <>
          <div className={styles.formHeader}>
            <div className={styles.headerBadge}>
              <Sparkles size={13} color="#60A5FA" />
              <span>Sesi Diskusi 45 Menit · 100% Gratis</span>
            </div>
            <h2 className={styles.formTitle}>Formulir Kualifikasi &amp; Kuota 5 Slot</h2>
            <p className={styles.formSubtitle}>
              Lengkapi data di bawah ini agar konsultan kami dapat menyiapkan estimasi performa Meta Ads dan mengecek ketersediaan 1 dari 5 slot bulan ini sebelum sesi dimulai.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="agencyName">
                  Nama Biro Perjalanan / Agensi *
                </label>
                <input
                  id="agencyName"
                  name="agencyName"
                  type="text"
                  className={styles.input}
                  placeholder="Contoh: Barokah Umroh & Tour"
                  value={form.agencyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="fullName">
                  Nama Pemilik / PIC *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className={styles.input}
                  placeholder="Contoh: Pak Hendra / Bu Maya"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="whatsapp">
                  No. WhatsApp Aktif *
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  className={styles.input}
                  placeholder="Contoh: 081234567890 / 6281234567890"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  Email Bisnis *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="Contoh: owner@barokahtour.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="service">
                  Fokus Layanan / Rute Utama *
                </label>
                <select
                  id="service"
                  name="service"
                  className={styles.select}
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    -- Pilih Fokus Rute --
                  </option>
                  {serviceCategories.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="revenue">
                  Kisaran Omset Rata-Rata Bulanan
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  className={styles.select}
                  value={form.revenue}
                  onChange={handleChange}
                >
                  <option value="">-- Pilih Estimasi Omset --</option>
                  <option value="Di bawah 50 Juta">Di bawah Rp 50 Juta / bulan</option>
                  <option value="50 - 200 Juta">Rp 50 Juta – Rp 200 Juta / bulan</option>
                  <option value="200 Juta - 1 Miliar">Rp 200 Juta – Rp 1 Miliar / bulan</option>
                  <option value="Di atas 1 Miliar">Di atas Rp 1 Miliar / bulan</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Kendala Utama atau Target Khusus Anda Saat Ini
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Ceritakan kendala iklan, chat ghosting, atau rute mana yang paling ingin Anda scale-up..."
                rows={3}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.spinner} />
              ) : (
                <>
                  <span>Kirim Formulir &amp; Lanjut ke WhatsApp</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className={styles.formFooterNotes}>
              <div className={styles.noteItem}>
                <ShieldCheck size={14} color="#10B981" />
                <span>Data 100% Dijamin Rahasia &amp; Non-Spam</span>
              </div>
              <div className={styles.noteItem}>
                <Clock size={14} color="#10B981" />
                <span>Respon Verifikasi &lt; 60 Menit</span>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Top Ambient Glow */}
      <div className={styles.topGlow} aria-hidden="true" />

      {/* Hero Header */}
      <section className={`${styles.heroSection} bg-grid-pattern`}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.statusBadge}>
              <span className="status-dot-pulse" />
              <span>CONSULTATION PORTAL · JANUARI - DESEMBER 2026</span>
            </div>

            <h1 className={`h1-hero ${styles.mainHeading}`}>
              Konsultasi &amp; Amankan Slot <br />
              <span className="gradient-text">Website Flagship + Setup Meta Ads Gratis</span>
            </h1>

            <p className={styles.heroDescription}>
              Bedah tuntas titik kebocoran leads, siapkan strategi iklan Meta Ads yang cepat mendatangkan customer, dan amankan 1 dari 5 slot partner travel agency bulan ini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.portalGrid}>
            {/* Left Column: Contact info & value props */}
            <motion.div
              className={styles.infoColumn}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Direct Info Cards */}
              <div className={styles.cardsList}>
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoCard}
                    onClick={() =>
                      trackMetaEvent("Contact", {
                        customData: { content_name: info.label },
                      })
                    }
                  >
                    <div className={styles.infoIconBox}>
                      <info.icon size={20} color="#60A5FA" />
                    </div>
                    <div className={styles.infoText}>
                      <span className={styles.infoLabel}>{info.label}</span>
                      <span className={styles.infoValue}>{info.value}</span>
                    </div>
                    <span className={styles.infoBadge}>{info.badge}</span>
                  </a>
                ))}
              </div>

              {/* What You Get Card */}
              <div className={styles.benefitCard}>
                <div className={styles.scarcityBadge}>
                  <Flame size={14} color="#94A3B8" />
                  <span>Tersedia Maksimal 5 Slot Bulan Ini</span>
                </div>


                <h3 className={styles.benefitTitle}>
                  Yang Anda Dapatkan Dalam Sesi 45 Menit:
                </h3>

                <div className={styles.benefitList}>
                  {[
                    "Analisis titik kebocoran leads dan solusi anti chat 'P' yang ghosting.",
                    "Skema riset target audiens Meta Ads khusus calon jamaah & wisatawan kota Anda.",
                    "Strategi pengolahan dokumentasi foto/video galeri HP Anda menjadi materi iklan.",
                    "Pengecekan kuota ketersediaan 1 dari 5 slot partner travel agency bulan ini.",
                  ].map((item, i) => (
                    <div key={i} className={styles.benefitItem}>
                      <CheckCircle2 size={16} color="#10B981" className={styles.benefitCheck} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.guaranteeReminder}>
                  <ShieldCheck size={18} color="#10B981" />
                  <span>Conviction Nyata: Semua Terukur, Semua Kami Pantau Sampai Closing Pertama Datang.</span>
                </div>
              </div>


            </motion.div>

            {/* Right Column: Interactive Form */}
            <motion.div
              className={styles.formColumn}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Suspense fallback={<div className={styles.formLoading}>Memuat Formulir...</div>}>
                <ContactForm />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

