"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Lock, Search, Target, ShieldCheck, CheckCircle2 } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
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
          Masalahnya bukan di website-nya — masalahnya, <em>nggak ada yang lihat</em>. SEO bisa jawab ini, tapi Anda harus menunggu. Kalau Anda butuh customer sekarang, kami bangun Website Flagship travel dan <strong>langsung jalankan iklan Meta Ads (Facebook &amp; Instagram) secara GRATIS</strong>. Riset audiens, olah materi visual, hingga tracking WhatsApp kami tangani penuh.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <Link href="/contact" className="btn-cta-blue">
            <span>Amankan 1 dari 5 Slot Bulan Ini</span>
            <ArrowRight size={17} />
          </Link>
          <a href="#analisa" className="btn-cta-secondary">
            <span>Pelajari Cara Kerja &amp; Conviction Kami</span>
          </a>
        </motion.div>

        {/* EYE-CATCHING SAAS PRODUCT CONSOLE MOCKUP: META ADS & CONVERSION TRACKING ENGINE */}
        <motion.div
          className={styles.consoleWrapper}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        >
          <div className={styles.consoleWindow}>
            {/* Window Bar */}
            <div className={styles.consoleHeader}>
              <div className={styles.windowControls}>
                <span className={`${styles.dot} ${styles.dotRed}`} />
                <span className={`${styles.dot} ${styles.dotYellow}`} />
                <span className={`${styles.dot} ${styles.dotGreen}`} />
              </div>
              <div className={styles.urlBar}>
                <Lock size={12} color="#60A5FA" />
                <span>app.tanscale.io/meta-ads-tracking-engine</span>
              </div>
              <div className={styles.liveStatusBadge}>
                <span className="status-dot-pulse" />
                <span>SETUP IKLAN GRATIS · KUOTA 5 SLOT/BULAN</span>
              </div>
            </div>

            {/* Console Screen Body */}
            <div className={styles.consoleBody}>
              {/* Telemetry Row */}
              <div className={styles.telemetryGrid}>
                {/* Metric 1: Speed to Market */}
                <div className={styles.telemetryCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconBox}>
                      <Target size={16} color="#60A5FA" />
                    </div>
                    <span className={styles.badgeBlue}>Speed-to-Market</span>
                  </div>
                  <div className={styles.metricVal}>Hari Ke-1 Live <span className={styles.valSub}>Traffic Langsung Masuk</span></div>
                  <p className={styles.metricDesc}>Iklan Meta langsung menyalurkan audiens calon jamaah &amp; wisatawan begitu website tayang</p>
                  <div className={styles.sparklineContainer}>
                    <svg viewBox="0 0 200 40" className={styles.sparklineSvg}>
                      <path
                        d="M0 35 Q 30 30, 60 25 T 120 18 T 160 10 T 200 4"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M0 35 Q 30 30, 60 25 T 120 18 T 160 10 T 200 4 L 200 40 L 0 40 Z"
                        fill="rgba(59, 130, 246, 0.12)"
                      />
                    </svg>
                  </div>
                </div>

                {/* Metric 2: Setup Iklan Meta Ads Gratis */}
                <div className={styles.telemetryCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconBox}>
                      <Sparkles size={16} color="#60A5FA" />
                    </div>
                    <span className={styles.badgeBlue}>Setup Iklan Meta</span>
                  </div>
                  <div className={styles.metricVal}>Rp 0 <span className={styles.valSub}>Jasa Iklan 100% Gratis</span></div>
                  <p className={styles.metricDesc}>Riset target audiens, copywriting penawaran, &amp; olah materi visual galeri travel jadi ads</p>
                  <div className={styles.leadBar}>
                    <div className={styles.leadBarFill} style={{ width: "100%" }} />
                  </div>
                </div>

                {/* Metric 3: Conviction & Tracking Transparan */}
                <div className={styles.telemetryCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconBox}>
                      <ShieldCheck size={16} color="#60A5FA" />
                    </div>
                    <span className={styles.badgeBlue}>Conviction Nyata</span>
                  </div>
                  <div className={styles.metricVal}>100% Terukur <span className={styles.valSub}>Nggak Ada Tebak-Tebakan</span></div>
                  <p className={styles.metricDesc}>Semua traffic dilacak sampai chat WhatsApp masuk. Kami dampingi &amp; optimasi sampai closing pertama</p>
                  <div className={styles.speedPill}>
                    <CheckCircle2 size={13} color="#60A5FA" />
                    <span>Pantau Sampai Closing Datang</span>
                  </div>
                </div>
              </div>

              {/* Fast Execution Pipeline Bar */}
              <div className={styles.pipelineFooter}>
                 <div className={styles.pipelineTitle}>
                   <Sparkles size={14} color="#60A5FA" />
                   <span>Alur Eksekusi Cepat:</span>
                 </div>
                 <div className={styles.pipelineSteps}>
                   <div className={styles.pipeStep}>
                     <span className={styles.pipeDotActive} />
                     <span>1. Web Flagship Live</span>
                   </div>
                   <span className={styles.pipeArrow}>→</span>
                   <div className={styles.pipeStep}>
                     <span className={styles.pipeDotActive} />
                     <span>2. Setup Iklan Meta Gratis</span>
                   </div>
                   <span className={styles.pipeArrow}>→</span>
                   <div className={styles.pipeStep}>
                     <span className={styles.pipeDotActive} />
                     <span>3. Chat Masuk &amp; Optimasi Closing</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>

        </motion.div>


        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span className="animate-pulse-subtle">Scroll untuk pelajari alur sistem &amp; conviction ↓</span>
        </div>
      </div>
    </section>
  );
}



