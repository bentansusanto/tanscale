"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Volume2,
  VolumeX,
} from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section className={`${styles.heroSection} bg-grid-pattern`}>
      {/* Top Ambient Glow Cone */}
      <div className={styles.glowSpotlight} aria-hidden="true" />

      <div className={`container ${styles.heroContainer}`}>
        {/* Conviction & Urgency Pill Badge */}
        <motion.div
          className={styles.techPill}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="status-dot-blue" />
          <span>SLOT BULAN INI TERBATAS 5 AGEN TRAVEL · JASA SETUP META ADS GRATIS</span>
        </motion.div>

        {/* Main Headline with metallic gradient */}
        <motion.h1
          className={`h1-hero ${styles.headline}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Website Bagus Tapi Sepi? <br className="hidden md:inline" />
          <span className="gradient-text">Bikin Web + Meta Ads Langsung Cepat Dapat Customer</span>
        </motion.h1>

        {/* Subheading - Confidence & Conviction */}
        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Masalahnya bukan di website-nya — masalahnya, <em>nggak ada yang lihat</em>. SEO bisa jawab ini, tapi Anda harus menunggu. Kalau Anda butuh customer sekarang, kami bangun Website Flagship travel dan <strong>langsung jalankan iklan Meta Ads (Facebook &amp; Instagram) secara GRATIS</strong>. Riset audiens, olah materi visual galeri, hingga tracking WhatsApp kami tangani penuh.
        </motion.p>

        {/* CONVICTION & TRUST VIDEO SHOWCASE (CENTERPIECE) */}
        <motion.div
          className={styles.convictionWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className={styles.convictionPill}>
            <ShieldCheck size={14} color="#60A5FA" />
            <span>KOMITMEN &amp; GARANSI LANGSUNG · 1 MENIT</span>
          </div>

          <p className={styles.convictionHint}>
            Tonton bagaimana kami bertanggung jawab mendampingi bisnis travel Anda sampai closing pertama:
          </p>

          <div className={styles.videoCard}>
            {/* Audio Toggle Button */}
            <button
              type="button"
              onClick={toggleAudio}
              className={styles.unmuteButton}
              aria-label={isMuted ? "Nyalakan Suara Video" : "Matikan Suara Video"}
            >
              {isMuted ? (
                <>
                  <VolumeX size={15} color="#60A5FA" />
                  <span>Nyalakan Suara</span>
                </>
              ) : (
                <>
                  <Volume2 size={15} color="#10B981" />
                  <span>Suara Aktif</span>
                </>
              )}
            </button>

            <video
              ref={videoRef}
              className={styles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster="https://res.cloudinary.com/de5vi67vo/video/upload/so_0,q_auto,f_auto,w_480/v1789200663/video-landingpage-test-01_tlotic.jpg"
            >
              {/* High-speed optimized stream (Auto WebM / Compressed MP4) */}
              <source
                src="https://res.cloudinary.com/de5vi67vo/video/upload/q_auto,f_auto,w_480/v1789200663/video-landingpage-test-01_tlotic.mp4"
                type="video/mp4"
              />
              {/* Direct MP4 Fallback */}
              <source
                src="https://res.cloudinary.com/de5vi67vo/video/upload/v1789200663/video-landingpage-test-01_tlotic.mp4"
                type="video/mp4"
              />
              {/* Direct MOV Fallback */}
              <source
                src="https://res.cloudinary.com/de5vi67vo/video/upload/v1789200663/video-landingpage-test-01_tlotic.mov"
                type="video/quicktime"
              />
              Browser Anda tidak mendukung pemutar video HTML5.
            </video>
          </div>
        </motion.div>

        {/* Dual CTA Buttons */}
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/contact" className="btn-cta-blue">
            <span>Amankan 1 dari 5 Slot Bulan Ini</span>
            <ArrowRight size={17} />
          </Link>
          <a href="#analisa" className="btn-cta-secondary">
            <span>Pelajari Cara Kerja &amp; Conviction Kami</span>
          </a>
        </motion.div>

        {/* Conviction Guarantee Micro-Badges */}
        <div className={styles.heroTrustBar}>
          <div className={styles.trustItem}>
            <CheckCircle2 size={14} color="#10B981" />
            <span>Jasa Iklan Meta Rp 0 (100% Gratis)</span>
          </div>
          <div className={styles.trustItem}>
            <CheckCircle2 size={14} color="#10B981" />
            <span>Dampingi Sampai Closing Pertama</span>
          </div>
          <div className={styles.trustItem}>
            <CheckCircle2 size={14} color="#10B981" />
            <span>Batas Ketat 5 Slot/Bulan</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span className="animate-pulse-subtle">Scroll untuk pelajari alur analisa &amp; detail paket ↓</span>
        </div>
      </div>
    </section>
  );
}



