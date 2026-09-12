"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  CheckCircle2,
  ArrowRight,
  Flame,
  Plane,
  Building2,
  Sparkles,
  RefreshCw,
  MessageSquare,
} from "lucide-react";
import styles from "./LeadFilterSection.module.css";

const categories = [
  { id: "umroh", label: "Biro Umroh & Haji Khusus", icon: "🕋" },
  { id: "opentrip", label: "Open Trip Domestik & Internasional", icon: "✈️" },
  { id: "privatetour", label: "Private Tour & Luxury Travel", icon: "🏝️" },
  { id: "corporate", label: "Corporate Gathering & Outbound", icon: "🏢" },
  { id: "custom", label: "Custom / Inbound Tour Operator", icon: "🗺️" },
];

const revenueRanges = [
  { id: "under50m", label: "Di bawah Rp 50 Juta / bulan", desc: "Tahap awal / butuh sistem akuisisi teruji" },
  { id: "50m-200m", label: "Rp 50 Juta – Rp 200 Juta / bulan", desc: "Sedang berkembang / butuh stabilisasi leads" },
  { id: "200m-1b", label: "Rp 200 Juta – Rp 1 Miliar / bulan", desc: "Siap scale-up / butuh otomatisasi CRM" },
  { id: "above1b", label: "Di atas Rp 1 Miliar / bulan", desc: "Market leader / butuh dominasi & retensi" },
];

const bottlenecks = [
  { id: "ads_ghosting", label: "Iklan Boncos & Leads 'Ghosting'", desc: "Chat banyak tapi cuma nawar murah lalu hilang" },
  { id: "slow_cs", label: "CS Lambat & Lupa Follow-up Manual", desc: "Leads kabur ke kompetitor karena telat dibalas" },
  { id: "price_war", label: "Terjebak Perang Banting Harga", desc: "Margin tipis karena kompetitor jual paket murah" },
  { id: "low_season", label: "Omset Mati Suri Saat Low Season", desc: "Cashflow megap-megap saat musim liburan usai" },
];

export default function LeadFilterSection() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [revenue, setRevenue] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [travelName, setTravelName] = useState("");
  const [city, setCity] = useState("");

  const selectedCategoryObj = categories.find((c) => c.id === category);
  const selectedRevenueObj = revenueRanges.find((r) => r.id === revenue);
  const selectedBottleneckObj = bottlenecks.find((b) => b.id === bottleneck);

  const generateWaLink = () => {
    const text = `Halo Tim Tanscale, saya pemilik Travel Agency dan telah mengisi filter kelayakan di website.

*PROFIL BISNIS TRAVEL:*
• *Nama Owner:* ${ownerName || "Owner"}
• *Nama Travel:* ${travelName || "Travel Agency"}
• *Kota Operasional:* ${city || "Indonesia"}
• *Kategori Bisnis:* ${selectedCategoryObj?.label || "-"}
• *Omset Saat Ini:* ${selectedRevenueObj?.label || "-"}
• *Kendala Terbesar:* ${selectedBottleneckObj?.label || "-"}

Saya ingin mengklaim *Sesi Audit Strategi 45 Menit Gratis* dan mengecek ketersediaan slot batch bulan ini. Terima kasih!`;

    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  const resetForm = () => {
    setStep(1);
    setCategory("");
    setRevenue("");
    setBottleneck("");
    setOwnerName("");
    setTravelName("");
    setCity("");
  };

  return (
    <section className={`section ${styles.section}`} id="lead-filter">
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrowWrap}>
            <span className="eyebrow eyebrow-gold">
              <Filter size={12} /> Filter Kualifikasi Calon Partner
            </span>
          </div>
          <h2 className={`display-lg ${styles.heading}`}>
            Cek Apakah Bisnis Travel Anda<br />
            <span className="text-gold">Layak Mengikuti Program Scale-Up 90 Hari</span>
          </h2>
          <p className="text-lg" style={{ maxWidth: 640, margin: "0 auto" }}>
            Kami hanya menerima <strong>3 Travel Agency baru per bulan</strong> demi menjamin hasil dan proteksi rute eksklusif. Jawab 3 langkah cepat di bawah ini:
          </p>
        </motion.div>

        {/* Filter Card Container */}
        <div className={styles.filterWrapper}>
          <div className={`card ${styles.filterCard}`}>
            {/* Step Indicators */}
            <div className={styles.stepsIndicator}>
              <div className={`${styles.stepIndicatorItem} ${step >= 1 ? styles.stepActive : ""}`}>
                <span className={styles.stepNum}>1</span>
                <span className={styles.stepLabel}>Kategori Travel</span>
              </div>
              <div className={styles.stepLine} />
              <div className={`${styles.stepIndicatorItem} ${step >= 2 ? styles.stepActive : ""}`}>
                <span className={styles.stepNum}>2</span>
                <span className={styles.stepLabel}>Omset Bisnis</span>
              </div>
              <div className={styles.stepLine} />
              <div className={`${styles.stepIndicatorItem} ${step >= 3 ? styles.stepActive : ""}`}>
                <span className={styles.stepNum}>3</span>
                <span className={styles.stepLabel}>Kendala Utama</span>
              </div>
              <div className={styles.stepLine} />
              <div className={`${styles.stepIndicatorItem} ${step >= 4 ? styles.stepActive : ""}`}>
                <span className={styles.stepNum}>4</span>
                <span className={styles.stepLabel}>Hasil & WA</span>
              </div>
            </div>

            {/* Step 1: Category */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={styles.stepBody}
                >
                  <h3 className={styles.stepQuestion}>
                    Apa fokus utama bisnis perjalanan Anda saat ini?
                  </h3>
                  <div className={styles.optionsGrid}>
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className={`${styles.optionBtn} ${category === c.id ? styles.optionSelected : ""}`}
                        onClick={() => setCategory(c.id)}
                      >
                        <span className={styles.optionIcon}>{c.icon}</span>
                        <span className={styles.optionText}>{c.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className={styles.actionRow}>
                    <div className={styles.hintText}>Pilih salah satu yang paling dominan</div>
                    <button
                      type="button"
                      className="btn btn-dark"
                      disabled={!category}
                      onClick={() => setStep(2)}
                    >
                      Lanjut ke Langkah 2 <ArrowRight size={15} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Revenue */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={styles.stepBody}
                >
                  <h3 className={styles.stepQuestion}>
                    Berapa rata-rata omset kotor bisnis travel Anda per bulan?
                  </h3>
                  <div className={styles.verticalOptions}>
                    {revenueRanges.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        className={`${styles.verticalOptionBtn} ${revenue === r.id ? styles.optionSelected : ""}`}
                        onClick={() => setRevenue(r.id)}
                      >
                        <div className={styles.radioCircle}>
                          {revenue === r.id && <div className={styles.radioDot} />}
                        </div>
                        <div className={styles.verticalOptionText}>
                          <span className={styles.optionHeading}>{r.label}</span>
                          <span className={styles.optionDesc}>{r.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className={styles.actionRow}>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setStep(1)}
                    >
                      Kembali
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      disabled={!revenue}
                      onClick={() => setStep(3)}
                    >
                      Lanjut ke Langkah 3 <ArrowRight size={15} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Bottleneck */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={styles.stepBody}
                >
                  <h3 className={styles.stepQuestion}>
                    Apa kebocoran atau masalah paling mendesak yang ingin Anda selesaikan?
                  </h3>
                  <div className={styles.verticalOptions}>
                    {bottlenecks.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        className={`${styles.verticalOptionBtn} ${bottleneck === b.id ? styles.optionSelected : ""}`}
                        onClick={() => setBottleneck(b.id)}
                      >
                        <div className={styles.radioCircle}>
                          {bottleneck === b.id && <div className={styles.radioDot} />}
                        </div>
                        <div className={styles.verticalOptionText}>
                          <span className={styles.optionHeading}>{b.label}</span>
                          <span className={styles.optionDesc}>{b.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className={styles.actionRow}>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setStep(2)}
                    >
                      Kembali
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      disabled={!bottleneck}
                      onClick={() => setStep(4)}
                    >
                      Lihat Hasil Kualifikasi <ArrowRight size={15} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Qualification Result + Direct to WA */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className={styles.stepBody}
                >
                  {/* Result Header Badge */}
                  <div className={styles.qualifiedBadge}>
                    <CheckCircle2 size={20} color="#10B981" />
                    <span>STATUS: TERKUALIFIKASI UNTUK BATCH AKSELERASI 90 HARI</span>
                  </div>

                  <h3 className={styles.resultTitle}>
                    Bisnis Anda Berpotensi Naik <span className="text-gold">2.5× hingga 4× Lipat</span>
                  </h3>
                  <p className={styles.resultDesc}>
                    Berdasarkan kendala <strong>&quot;{selectedBottleneckObj?.label}&quot;</strong> pada kategori <strong>{selectedCategoryObj?.label}</strong>, kami telah menyiapkan kerangka kerja (*growth roadmap*) khusus untuk memulihkan kebocoran omset Anda.
                  </p>

                  {/* Form Input for WA Personalization */}
                  <div className={styles.personalizeBox}>
                    <div className={styles.personalizeHeader}>
                      <MessageSquare size={16} color="#F59E0B" />
                      <span>Lengkapi data singkat sebelum terhubung ke WhatsApp:</span>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Nama Anda (Owner/Leader) *</label>
                        <input
                          type="text"
                          className={styles.textInput}
                          placeholder="Contoh: Pak Hendra / Ibu Maya"
                          value={ownerName}
                          onChange={(e) => setOwnerName(e.target.value)}
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Nama Brand Travel Agent *</label>
                        <input
                          type="text"
                          className={styles.textInput}
                          placeholder="Contoh: Barokah Umroh Tour"
                          value={travelName}
                          onChange={(e) => setTravelName(e.target.value)}
                        />
                      </div>
                      <div className={styles.inputGroupFull}>
                        <label className={styles.inputLabel}>Kota Domisili Operasional *</label>
                        <input
                          type="text"
                          className={styles.textInput}
                          placeholder="Contoh: Jakarta / Surabaya / Bandung"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Scarcity Alert Box */}
                  <div className={styles.scarcityBox}>
                    <div className={styles.scarcityIcon}>
                      <Flame size={20} color="#EF4444" />
                    </div>
                    <div>
                      <div className={styles.scarcityTitle}>Perhatian Mengenai Slot Partner:</div>
                      <div className={styles.scarcityDesc}>
                        Kami menerapkan <strong>Anti-Cannibalization Policy</strong> (tidak menerima 2 travel agency dengan rute/target pasar sama di kota Anda). Slot bulan ini tersisa <strong>2 kuota</strong>.
                      </div>
                    </div>
                  </div>

                  {/* Direct WhatsApp CTA Button */}
                  <div className={styles.ctaWaWrapper}>
                    <a
                      href={generateWaLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-dark ${styles.btnDirectWa}`}
                    >
                      <Sparkles size={18} />
                      Kirim Profil Bisnis & Klaim Sesi Audit ke WhatsApp
                      <ArrowRight size={18} />
                    </a>

                    <button
                      type="button"
                      className={styles.btnReset}
                      onClick={resetForm}
                    >
                      <RefreshCw size={12} /> Ulangi Kualifikasi
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
