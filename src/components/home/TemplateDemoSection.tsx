"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Smartphone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Lock,
  Sparkles,
  TrendingUp,
  MousePointerClick,
  Users,
  Search,
  X,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { trackMetaEvent } from "@/lib/metaPixel";
import styles from "./TemplateDemoSection.module.css";

const WA_PHONE = "6288277450792";
const waDemoMessage = encodeURIComponent(
  "Halo Tanscale, aku pemilik bisnis travel dan mau konsultasi pembuatan website travel + iklan Meta seperti portofolio di website."
);
const waDemoUrl = `https://wa.me/${WA_PHONE}?text=${waDemoMessage}`;

const demoFeatures = [
  {
    icon: Smartphone,
    title: "Desain Modern & Buka Instan di HP",
    desc: "Lebih dari 80% calon customer travel buka lewat HP. Website yang aku buatkan ringan dan responsif tanpa bikin mereka menunggu loading.",
  },
  {
    icon: MessageCircle,
    title: "Tombol Chat WhatsApp Otomatis",
    desc: "Setiap paket tour langsung terhubung ke WhatsApp dengan format teks otomatis sesuai paket yang dipilih, jadi kamu nggak perlu tanya berulang.",
  },
  {
    icon: MapPin,
    title: "Struktur Itinerary & Fasilitas Jelas",
    desc: "Rincian rute wisata, fasilitas include/exclude, dan jadwal perjalanan tersusun rapi agar calon client cepat paham dan langsung yakin.",
  },
  {
    icon: ShieldCheck,
    title: "Meningkatkan Kredibilitas & Closing DP",
    desc: "Tampilan profesional membuat bisnis travel kamu terlihat kredibel, menghilangkan rasa ragu calon customer saat melakukan pembayaran uang muka.",
  },
];

export default function TemplateDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showProofModal, setShowProofModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showProofModal) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setShowProofModal(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [showProofModal]);

  const toggleAudio = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section className="section-dark" id="demo-template">
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
            <span>PORTOFOLIO</span>
          </div>

          <h2 className="h2-heading">
            Hasil Iklan Meta &amp;{" "}
            <span className="gradient-text">Web Template Siap Custom</span>
          </h2>

          <p className="body-text" style={{ maxWidth: 620, margin: "0 auto" }}>
            Ini data asli iklan Meta Ads saat aku mencari calon client, dan web template travel yang siap dicustom sesuai kebutuhan bisnismu.
          </p>
        </motion.div>

        {/* 1. REAL META ADS CASE STUDY / PROOF CARD */}
        <motion.div
          className={styles.proofCard}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
        >
          {/* Card Top Header */}
          <div className={styles.proofHeader}>
            <div className={styles.proofHeaderLeft}>
              <span className={styles.proofTag}>
                <TrendingUp size={13} />
                DATA IKLAN META ADS
              </span>
              <span className={styles.proofDateBadge}>
                Uji Coba Iklan Cari Calon Client
              </span>
            </div>
            <div className={styles.proofSpendBadge}>
              Modal Iklan Terpakai: Rp48.439
            </div>
          </div>

          {/* Full-Width Large Screenshot Image */}
          <div
            className={styles.proofImgContainer}
            onClick={() => setShowProofModal(true)}
            title="Klik untuk memperbesar screenshot asli Meta Ads"
          >
            <Image
              src="/meta-ads-dashboard-proof.png"
              alt="Screenshot Hasil Meta Ads Tanscale - CTR 10.07% dan CPC Rp835"
              width={2048}
              height={458}
              className={styles.proofImg}
              priority={false}
            />
            <div className={styles.zoomOverlay}>
              <Search size={13} />
              <span>Perbesar Bukti Data</span>
            </div>
          </div>

          {/* 3 Metrics Callout Pills (Full Width Across 3 Columns) */}
          <div className={styles.statRow}>
            <div className={styles.statPill}>
              <div className={styles.statValue}>
                <TrendingUp size={16} color="#34D399" />
                <span>10.07%</span>
              </div>
              <div className={styles.statLabel}>CTR (Click-Through Rate)</div>
            </div>

            <div className={styles.statPill}>
              <div className={styles.statValue}>
                <MousePointerClick size={16} color="#60A5FA" />
                <span>Rp835</span>
              </div>
              <div className={styles.statLabel}>Biaya Per Link Click</div>
            </div>

            <div className={styles.statPill}>
              <div className={styles.statValue}>
                <Users size={16} color="#F59E0B" />
                <span>34 Orang</span>
              </div>
              <div className={styles.statLabel}>Masuk ke Website</div>
            </div>
          </div>

          {/* Diagnosis & Insight Story Breakdown (3 Columns Below) */}
          <div className={styles.proofStoryWrap}>
            <div className={styles.storyList}>
              <div className={styles.storyItem}>
                <div className={styles.storyItemHeader}>
                  <div className={`${styles.storyIconWrap} ${styles.storyIconBlue}`}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div className={styles.storyTextTitle}>
                    Iklan Meta Efektif &amp; Murah
                  </div>
                </div>
                <p className={styles.storyTextDesc}>
                  CTR tembus <strong>10.07%</strong> (5x rata-rata industri) dengan biaya cuma <strong>Rp835/klik</strong>. Terbukti pesan iklan berhasil memikat calon client.
                </p>
              </div>

              <div className={styles.storyItem}>
                <div className={styles.storyItemHeader}>
                  <div className={`${styles.storyIconWrap} ${styles.storyIconAmber}`}>
                    <AlertCircle size={16} />
                  </div>
                  <div className={styles.storyTextTitle}>
                    Kenapa Kemarin Belum Closing?
                  </div>
                </div>
                <p className={styles.storyTextDesc}>
                  Karena saat uji coba kemarin website belum menampilkan running meta ads dan demo web template, <strong>sehingga calon client langsung keluar dari website</strong>.
                </p>
              </div>

              <div className={styles.storyItem}>
                <div className={styles.storyItemHeader}>
                  <div className={`${styles.storyIconWrap} ${styles.storyIconGreen}`}>
                    <Sparkles size={16} />
                  </div>
                  <div className={styles.storyTextTitle}>
                    Solusi untuk Travel Agency Kamu
                  </div>
                </div>
                <p className={styles.storyTextDesc}>
                  Web template travel di bawah siap aku custom sesuai brand dan paket bisnismu, lengkap dengan setup iklan Meta Ads agar bisnis travel kamu siap closing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. BROWSER WINDOW SHOWCASE (VIDEO DEMO TEMPLATE) */}
        <motion.div
          className={styles.browserWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Subtle Ambient Glow Behind Browser */}
          <div className={styles.browserGlow} />

          <div className={styles.browserFrame}>
            {/* Browser Header Bar */}
            <div className={styles.browserHeader}>
              <div className={styles.trafficLights}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>

              <div className={styles.urlBar}>
                <Lock size={12} color="#10B981" />
                <span className={styles.urlHost}>demo-travel.tanscale.com</span>
                <span className={styles.urlPath}>/paket-tour</span>
              </div>

              <div className={styles.headerActions}>
                <div className={styles.statusBadge}>
                  <span className={styles.livePulseDot} />
                  <span>Web Template Siap Custom</span>
                </div>

                <button
                  type="button"
                  onClick={toggleAudio}
                  className={styles.soundBtn}
                  aria-label={isMuted ? "Nyalakan Suara Video" : "Matikan Suara Video"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX size={14} color="#60A5FA" />
                      <span>Nyalakan Suara</span>
                    </>
                  ) : (
                    <>
                      <Volume2 size={14} color="#10B981" />
                      <span>Suara Aktif</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Video Container */}
            <div className={styles.videoContainer}>
              <video
                ref={videoRef}
                className={styles.demoVideo}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster="https://res.cloudinary.com/de5vi67vo/video/upload/so_0,q_auto,f_auto/v1789449803/video-demo-web-template-tanscale_q2jijj.jpg"
              >
                {/* Cloudinary Auto-optimized MP4/WebM stream */}
                <source
                  src="https://res.cloudinary.com/de5vi67vo/video/upload/q_auto,f_auto/v1789449803/video-demo-web-template-tanscale_q2jijj.mp4"
                  type="video/mp4"
                />
                {/* Direct MP4 Fallback */}
                <source
                  src="https://res.cloudinary.com/de5vi67vo/video/upload/v1789449803/video-demo-web-template-tanscale_q2jijj.mp4"
                  type="video/mp4"
                />
                {/* Original MOV Fallback */}
                <source
                  src="https://res.cloudinary.com/de5vi67vo/video/upload/v1789449803/video-demo-web-template-tanscale_q2jijj.mov"
                  type="video/quicktime"
                />
                Browser kamu tidak mendukung pemutar video HTML5.
              </video>
            </div>
          </div>
        </motion.div>

        {/* 3. 4 TRUST HIGHLIGHTS GRID */}
        <div className={styles.featuresGrid}>
          {demoFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className={styles.featureIconWrap}>
                  <Icon size={19} color="#60A5FA" />
                </div>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDesc}>{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 4. BOTTOM CALLOUT & DIRECT ACTION */}
        <motion.div
          className={styles.bottomCallout}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.calloutTextWrap}>
            <div className={styles.calloutTitle}>
              Belum Punya Website atau Website Lama Kamu Masih Berantakan?
            </div>
            <p className={styles.calloutSub}>
              Terima beres: website travel profesional siap pakai hak milik selamanya, gratis domain &amp; cloud hosting 1 tahun, plus gratis jasa setup iklan Meta Ads sampai closing pertama.
            </p>
          </div>

          <div className={styles.calloutActions}>
            <a
              href={waDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaDemoBtn}
              onClick={() =>
                trackMetaEvent("Contact", {
                  customData: { content_name: "Demo Portofolio Konsultasi Gratis" },
                })
              }
            >
              <span>Konsultasi Pembuatan Website</span>
              <ArrowRight size={16} />
            </a>

            <a href="#package" className={styles.seePricingBtn}>
              Lihat Pilihan Paket
            </a>
          </div>
        </motion.div>
      </div>

      {/* MODAL ZOOM FOR SCREENSHOT (PORTAL DIRECT TO BODY FOR 100% VIEWPORT CENTERING) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {showProofModal && (
              <motion.div
                className={styles.modalBackdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowProofModal(false)}
              >
                <motion.div
                  className={styles.modalContent}
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.modalHeader}>
                    <span className={styles.modalTitle}>
                      Bukti Nyata Dashboard Meta Ads · Uji Coba Tanscale
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowProofModal(false)}
                      className={styles.modalCloseBtn}
                      aria-label="Tutup preview"
                    >
                      <X size={15} />
                      <span>Tutup</span>
                    </button>
                  </div>

                  <div className={styles.modalImgWrap}>
                    <Image
                      src="/meta-ads-dashboard-proof.png"
                      alt="Detail Screenshot Meta Ads"
                      width={2048}
                      height={458}
                      className={styles.modalImg}
                      priority
                    />
                    <div className={styles.modalMobileHint}>
                      <span>👉 Geser tabel ke samping untuk melihat seluruh metrik</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
