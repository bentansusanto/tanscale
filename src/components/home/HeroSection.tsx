"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Volume2,
  VolumeX,
} from "lucide-react";
import { trackMetaEvent } from "@/lib/metaPixel";
import styles from "./HeroSection.module.css";

const WA_PHONE = "6288277450792";
const waHeroMessage = encodeURIComponent(
  "Halo Tanscale, aku pemilik bisnis travel dan mau konsultasi cara mendatangkan customer dari iklan Meta Ads ke website."
);
const waHeroUrl = `https://wa.me/${WA_PHONE}?text=${waHeroMessage}`;

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
          <span>Khusus pemilik travel · Terbatas 5 client bulan ini</span>
        </motion.div>

        {/* Main Headline with metallic gradient */}
        <motion.h1
          className={`h1-hero ${styles.headline}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Website Bagus Tapi Sepi? <br className="hidden md:inline" />
          <span className="gradient-text">Datangkan Customer Travel Lewat Iklan Meta</span>
        </motion.h1>

        {/* Subheading - Short, Clear, Unambiguous */}
        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Aku bantu bisnis travel kamu mendatangkan calon customer tertarget dari iklan Meta Ads langsung ke website hingga checkout/WhatsApp.
        </motion.p>

        {/* CONVICTION & TRUST VIDEO SHOWCASE (CENTERPIECE) */}
        <motion.div
          className={styles.convictionWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
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
              Browser kamu tidak mendukung pemutar video HTML5.
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
          <a
            href={waHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-blue"
            onClick={() =>
              trackMetaEvent("Contact", {
                customData: { content_name: "Hero Section WhatsApp CTA" },
              })
            }
          >
            <span>Amankan Slot Bulan Ini</span>
            <ArrowRight size={17} />
          </a>
          <a href="#package" className="btn-cta-secondary">
            <span>Lihat Pilihan Paket &amp; Biaya</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span className="animate-pulse-subtle">Scroll ke bawah untuk pelajari alur kerja &amp; detail paket ↓</span>
        </div>
      </div>
    </section>
  );
}



