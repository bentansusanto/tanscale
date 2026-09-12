"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Globe2,
  Bot,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Rocket,
  TrendingUp,
  Award,
  Server,
  FileCode2,
  Smartphone,
  ShieldAlert,
  Headphones,
  ShieldCheck,
  Check,
} from "lucide-react";
import styles from "./ServicesSection.module.css";

const pillars = [
  {
    num: "01",
    phase: "PILAR 01 · WEBSITE FLAGSHIP",
    icon: MonitorSmartphone,
    title: "High-Converting Digital Flagship",
    desc: "Website biro perjalanan berstandar enterprise, mobile-first, dan berkecepatan tinggi untuk membangun kredibilitas instan di mata calon jamaah & wisatawan.",
    features: [
      "Halaman katalog rute wisata & umroh interaktif",
      "Kalkulator DP & rincian itinerary transparan",
      "Galeri social proof, legalitas izin & video testimoni",
      "Sub-second loading speed di jaringan seluler 4G/5G",
    ],
  },
  {
    num: "02",
    phase: "PILAR 02 · SETUP META ADS (100% GRATIS)",
    icon: Sparkles,
    title: "Riset Audiens & Setup Iklan Meta Ads",
    desc: "Jasa setup iklan GRATIS: Kami meriset audiens pembeli di kota Anda, mengolah materi visual galeri Anda, dan menyetel kampanye iklan di Facebook & Instagram.",
    features: [
      "Riset mendalam audiens demografi siap booking",
      "Olah materi foto/video galeri HP jadi format iklan",
      "Copywriting penawaran emosional & persuasif",
      "Setup Ads Manager & penempatan iklan yang optimal",
    ],
  },
  {
    num: "03",
    phase: "PILAR 03 · CONVICTION & TRACKING",
    icon: ShieldCheck,
    title: "Tracking Pixel Presisi & Optimasi Closing",
    desc: "Nggak ada tebak-tebakan. Semua traffic kami lacak dari klik iklan hingga chat WhatsApp masuk, serta kami dampingi sampai closing pertama datang.",
    features: [
      "Pemasangan Meta Pixel & Custom Conversion Tracking",
      "Sistem filter WhatsApp otomatis (Zero chat 'P')",
      "Pelacakan data transparan tanpa spekulasi",
      "Optimasi website berkelanjutan sampai closing pertama",
    ],
  },
];

const resultsTimeline = [
  {
    day: "Hari 1",
    badge: "START & RISET",
    title: "Onboarding & Olah Materi",
    desc: "Kirimkan dokumentasi foto/video galeri HP Anda, kami langsung mulai meriset audiens & menyiapkan struktur website.",
    icon: Rocket,
  },
  {
    day: "Hari 7",
    badge: "WEB FLAGSHIP LIVE",
    title: "Website Live & Siap Booking",
    desc: "Website biro perjalanan resmi tayang, katalog paket aktif, dan WhatsApp lead filter siap menerima calon pembeli.",
    icon: TrendingUp,
  },
  {
    day: "Hari 8",
    badge: "ADS LAUNCH GRATIS",
    title: "Iklan Meta Aktif & Trafik Masuk",
    desc: "Kampanye Facebook & Instagram Ads resmi jalan, langsung menyalurkan audiens tertarget ke penawaran paket Anda.",
    icon: CheckCircle2,
  },
  {
    day: "Hari 14+",
    badge: "CLOSING & SCALE",
    title: "Closing Pertama & Optimasi",
    desc: "Chat terfilter masuk, closing pertama tercapai. Evaluasi website berlanjut dan opsi scale-up manajemen iklan bulanan.",
    icon: Award,
  },
];

const includedDeliverables = [
  {
    icon: Server,
    title: "Domain .com & Cloud Server 1 Tahun",
    desc: "Infrastruktur server enterprise cepat dengan uptime 99.9% dan sertifikat SSL aktif.",
  },
  {
    icon: Sparkles,
    title: "Jasa Setup Iklan Meta Ads 100% GRATIS",
    desc: "Setup kampanye iklan di Facebook & Instagram Ads tanpa biaya jasa (senilai jutaan rupiah).",
  },
  {
    icon: FileCode2,
    title: "Olah Dokumentasi Jadi Format Iklan",
    desc: "Foto dan video dokumentasi di galeri HP Anda diolah menjadi materi iklan yang bernilai konversi.",
  },
  {
    icon: Smartphone,
    title: "Desain Mobile-First Responsif",
    desc: "Dirancang optimal untuk kenyamanan 80%+ calon pelanggan yang mengakses via ponsel.",
  },
  {
    icon: Bot,
    title: "Integrasi Tombol WhatsApp Pre-Filled Filter",
    desc: "Data prospek terformat rapi sebelum chat dimulai, mengeliminasi leads iseng.",
  },
  {
    icon: ShieldCheck,
    title: "Conviction: Dampingi Sampai Closing Pertama",
    desc: "Nggak ada tebak-tebakan. Semua metrik dilacak dan website dioptimasi sampai closing pertama datang.",
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
            <span>INVESTASI TRANSPARAN ALL-IN · HANYA 5 SLOT / BULAN</span>
          </div>
          <h2 className="h2-heading">
            Paket Website Travel Flagship <br className="hidden md:inline" />
            <span className="gradient-text">+ Jasa Setup Iklan Meta Ads 100% GRATIS</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 760, margin: "0 auto 48px" }}>
            Satu kali investasi terukur Rp 6,5 Juta tanpa biaya jasa tersembunyi. Dapatkan website siap konversi dan kami setup iklannya secara gratis agar langsung cepat mendatangkan customer baru.
          </p>
        </motion.div>


        {/* 3 Pillar Architectural Cards */}
        <div className={styles.pillarsGrid}>
          {pillars.map((p, idx) => (
            <motion.div
              key={p.num}
              className={styles.pillarCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Card Top Row with Lucide Icon Box & Tech Phase Tag */}
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <p.icon size={22} color="#60A5FA" />
                </div>
                <div className={styles.phaseBadge}>
                  <span>{p.phase}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>

              {/* Feature List with Lucide Check Icons */}
              <div className={styles.featureContainer}>
                <span className={styles.featureLabel}>KEMAMPUAN SISTEM:</span>
                <ul className={styles.featureList}>
                  {p.features.map((feat, i) => (
                    <li key={i} className={styles.featureItem}>
                      <div className={styles.checkDot}>
                        <Check size={13} color="#38BDF8" strokeWidth={3} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ENTERPRISE ROI & DELIVERABLES CONSOLE */}
        <motion.div
          className={styles.consoleBox}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Console Header */}
          <div className={styles.consoleHeader}>
            <div className={styles.consolePill}>
              <Sparkles size={13} color="#34D399" />
              <span>PROYEKSI DAMPAK &amp; EKSEKUSI CEPAT</span>
            </div>
            <h3 className={styles.consoleTitle}>
              Milestone Nyata: Dari Hari Pertama Hingga Closing
            </h3>
            <p className={styles.consoleSubtitle}>
              Alur pengerjaan cepat agar agensi travel Anda tidak perlu membuang waktu menunggu berbulan-bulan.
            </p>
          </div>

          {/* 4-Stage Milestone Stepper */}
          <div className={styles.milestoneGrid}>
            {resultsTimeline.map((item) => (
              <div key={item.day} className={styles.milestoneCard}>
                <div className={styles.milestoneTop}>
                  <div className={styles.milestoneIconWrap}>
                    <item.icon size={18} color="#60A5FA" />
                  </div>
                  <span className={styles.milestoneDay}>{item.day}</span>
                </div>
                <div className={styles.milestoneBadge}>{item.badge}</div>
                <h4 className={styles.milestoneTitle}>{item.title}</h4>
                <p className={styles.milestoneDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Enterprise Package & Deliverables Layout (2 Columns) */}
          <div className={styles.packageGrid}>
            {/* Left: Investment Card */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingTag}>INVESTASI ALL-IN · SETUP IKLAN GRATIS</div>
              <div className={styles.priceAmount}>
                <span className={styles.currency}>Rp</span>
                <span className={styles.amount}>6.500.000</span>
              </div>
              <p className={styles.priceNote}>
                Satu kali investasi 6,5 Juta untuk Website Flagship lengkap. Jasa setup iklan Meta Ads kami berikan 100% GRATIS. Saldo iklan Anda bayarkan langsung ke Meta secara transparan.
              </p>

              <Link href="/contact" className={styles.pricingCtaBtn}>
                <span>Amankan 1 dari 5 Slot Bulan Ini</span>
                <ArrowRight size={19} className={styles.btnArrow} />
              </Link>

              <div className={styles.guaranteeTagWrap}>
                <ShieldCheck size={16} color="#10B981" />
                <span>Conviction: Dipantau &amp; Dioptimasi Sampai Closing Pertama Datang</span>
              </div>
            </div>




            {/* Right: Deliverables Checklist */}
            <div className={styles.deliverablesListWrap}>
              <h4 className={styles.deliverablesHeading}>
                Sudah Termasuk Seluruh Fitur &amp; Jasa:
              </h4>
              <div className={styles.deliverablesGrid}>
                {includedDeliverables.map((item, idx) => (
                  <div key={idx} className={styles.deliverableItem}>
                    <div className={styles.deliverableIcon}>
                      <item.icon size={16} color="#60A5FA" />
                    </div>
                    <div className={styles.deliverableText}>
                      <span className={styles.deliverableTitle}>{item.title}</span>
                      <span className={styles.deliverableDesc}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




