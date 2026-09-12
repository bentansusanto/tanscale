"use client";

import { motion } from "framer-motion";
import { Target, Heart, Zap, Globe, ArrowRight, Users, MessageCircle } from "lucide-react";
import styles from "./AboutPage.module.css";

const values = [
  {
    icon: Target,
    title: "Hasil Nyata Di Atas Janji",
    desc: "Kami mengukur keberhasilan dari kenaikan omset dan profit Anda, bukan sekadar vanity metrics seperti impresi iklan. Setiap strategi dirancang untuk memberikan hasil terukur.",
  },
  {
    icon: Heart,
    title: "Transparansi Radikal",
    desc: "Kami menyampaikan secara jujur kendala apa yang terjadi di bisnis Anda, apa solusi yang kami lakukan, dan berapa lama hasilnya dapat dicapai tanpa istilah teknis yang membingungkan.",
  },
  {
    icon: Zap,
    title: "Kecepatan Eksekusi",
    desc: "Banyak agency terlalu lama berteori tetapi lambat mengeksekusi. Kami bergerak cepat, menguji hipotesis berbasis data, dan melakukan optimasi secara konstan.",
  },
  {
    icon: Globe,
    title: "Spesialisasi Industri Travel & Umroh",
    desc: "Kami hanya bekerja dengan bisnis Travel, Tour & Umroh. Ini berarti kami sudah memahami perilaku wisatawan, dinamika musim (high/low season), dan penawaran terbaik sebelum memulai.",
  },
];

const team = [
  { name: "Alex Tanaka", role: "Founder & Head of Growth", bg: "#0F172A", initials: "AT", expertise: "Strategi Scaling & Funnel" },
  { name: "Maya Chen", role: "Kepala Pemasaran Digital", bg: "#D97706", initials: "MC", expertise: "Iklan Meta & Google Ads" },
  { name: "Ravi Sharma", role: "Kepala Otomasi & CRM", bg: "#0D9488", initials: "RS", expertise: "WhatsApp Automation & CRM" },
  { name: "Lena Kowalski", role: "Analis Data Utama", bg: "#EA580C", initials: "LK", expertise: "Atribusi Data & Tracking ROI" },
];

export default function AboutPage() {
  const waMessage = encodeURIComponent(
    "Halo Tanscale, saya ingin konsultasi mengenai program akselerasi omset untuk bisnis travel saya."
  );
  const waUrl = `https://wa.me/6288277450792?text=${waMessage}`;

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="eyebrowWrap">
              <span className="eyebrow eyebrow-warm">
                <Users size={12} /> Tentang Tanscale
              </span>
            </div>

            <h1 className={`display-xl ${styles.heroHeading}`}>
              Didirikan Oleh Praktisi Pemasaran <span className="text-gold">Spesialis Industri Travel</span>
            </h1>

            <p className="text-lg" style={{ maxWidth: 680, margin: "0 auto" }}>
              Tanscale lahir setelah melihat banyak bisnis Travel &amp; Umroh hebat kalah bersaing bukan karena paket perjalanannya buruk — melainkan karena alur akuisisi dan respons WhatsApp yang belum terbangun dengan sistematis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <motion.div
              className={`card ${styles.missionCard}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.missionIcon} style={{ background: "#FEF3C7", color: "#D97706" }}>
                <Target size={24} />
              </div>
              <h2 className="display-md">Misi Kami</h2>
              <p className="text-base">
                Memberdayakan setiap pemilik bisnis Travel &amp; Umroh di Indonesia dengan kecerdasan pemasaran, sistem otomasi WhatsApp modern, dan eksekusi teruji agar mampu bersaing dan mendominasi pasar digital.
              </p>
            </motion.div>

            <motion.div
              className={`card ${styles.missionCard}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.missionIcon} style={{ background: "#CCFBF1", color: "#0D9488" }}>
                <Globe size={24} />
              </div>
              <h2 className="display-md">Visi Kami</h2>
              <p className="text-base">
                Mewujudkan ekosistem di mana biro travel dapat beroperasi secara otomatis, menarik jamaah dan wisatawan ideal secara konsisten, serta mencapai pertumbuhan omset yang terprediksi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Utama */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrowWrap">
              <span className="eyebrow eyebrow-gold"><Heart size={12} /> Prinsip Utama</span>
            </div>
            <h2 className={`display-lg`}>
              Nilai-Nilai Yang <span className="text-gold">Menjadi Pijakan Eksekusi Kami</span>
            </h2>
          </motion.div>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                className={`card ${styles.valueCard}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={styles.valueIcon}>
                  <v.icon size={22} color="var(--navy)" />
                </div>
                <h3 className="display-md" style={{ fontSize: "1.2rem" }}>{v.title}</h3>
                <p className="text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Ahli */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrowWrap">
              <span className="eyebrow eyebrow-sage"><Users size={12} /> Tim Ahli</span>
            </div>
            <h2 className={`display-lg`}>
              Para Pakar Yang <span className="text-gold">Memahami Pemasaran Travel</span>
            </h2>
          </motion.div>

          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <motion.div
                key={i}
                className={`card ${styles.teamCard}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={styles.teamAvatar}
                  style={{ background: `${member.bg}15`, border: `2px solid ${member.bg}40`, color: member.bg }}
                >
                  {member.initials}
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <span className={styles.expertise}>{member.expertise}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className="display-lg" style={{ maxWidth: 600 }}>Siap Mengakselerasi Pertumbuhan Bisnis Travel Anda?</h2>
            <p className="text-lg">Jadwalkan sesi audit strategi 45 menit gratis bersama tim ahli kami.</p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <MessageCircle size={16} /> Mulai Konsultasi via WhatsApp <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
