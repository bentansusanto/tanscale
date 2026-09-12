"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Filter, Building2, MapPin, Check, MessageCircle } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import styles from "./CaseStudiesPage.module.css";

const categories = ["Semua", "Pertumbuhan Omset", "Lead Generation", "Otomasi Proses"] as const;

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const filtered = activeCategory === "Semua"
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeCategory);

  const waMessage = encodeURIComponent(
    "Halo Tanscale, saya telah melihat studi kasus klien dan ingin konsultasi mengenai implementasi scale-up untuk bisnis travel saya."
  );
  const waUrl = `https://wa.me/6288277450792?text=${waMessage}`;

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="eyebrowWrap">
              <span className="eyebrow eyebrow-gold">
                <Sparkles size={12} /> Bukti Transformasi Nyata
              </span>
            </div>

            <h1 className={`display-xl ${styles.heroHeading}`}>
              Hasil Nyata. <span className="text-gold">Dampak Terbukti.</span>
            </h1>

            <p className="text-lg" style={{ maxWidth: 640 }}>
              Pelajari bagaimana Tanscale bermitra dengan pemilik Biro Perjalanan &amp; Umroh di Indonesia untuk menembus rekor omset baru, menekan biaya akuisisi leads, dan mengotomasikan alur WhatsApp CS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Listing Section */}
      <section className={`section ${styles.listingSection}`}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div className={styles.filterRow}>
            <div className={styles.filterLabel}>
              <Filter size={14} /> Filter Berdasarkan Hasil:
            </div>
            <div className={styles.tabs}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.tab} ${activeCategory === cat ? styles.activeTab : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className={styles.grid}>
            {filtered.map((cs, i) => (
              <motion.div
                key={cs.slug}
                className={styles.caseCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Thumbnail Image Container */}
                <div className={styles.imgWrap}>
                  <img src={cs.heroImage} alt={cs.title} className={styles.cardImg} />
                  <div className={styles.metricBadge}>
                    <span className={styles.metricVal}>{cs.heroMetric}</span>
                    <span className={styles.metricSub}>{cs.heroMetricSub}</span>
                  </div>
                  <div className={styles.catBadge}>{cs.category}</div>
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  {/* Meta Bar */}
                  <div className={styles.metaRow}>
                    <span className={styles.metaClient}>
                      <Building2 size={12} color="var(--gold)" /> {cs.clientName}
                    </span>
                    <span className={styles.metaDivider}>·</span>
                    <span className={styles.metaLoc}>
                      <MapPin size={12} color="var(--text-muted)" /> {cs.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className={styles.cardTitle}>{cs.title}</h2>

                  {/* Short Summary Snippet */}
                  <p className={styles.cardSnippet}>{cs.summarySnippet}</p>

                  {/* Key Outcome Chips */}
                  <div className={styles.chipsRow}>
                    {cs.impactChips.map((chip, j) => (
                      <span key={j} className={styles.impactChip}>
                        <Check size={11} color="var(--sage)" /> {chip}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Link href={`/case-studies/${cs.slug}`} className={`btn btn-dark ${styles.readBtn}`}>
                    Baca Studi Kasus <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className="eyebrowWrap">
              <span className="eyebrow eyebrow-warm">Giliran Bisnis Anda Berikutnya</span>
            </div>

            <h2 className={`display-lg ${styles.ctaHeading}`}>
              Siap Mencapai Hasil Seperti Ini Pada Bisnis Travel Anda?
            </h2>

            <p className="text-lg" style={{ maxWidth: 540 }}>
              Jadwalkan konsultasi &amp; audit gratis 45 menit. Kami akan menganalisis hambatan penjualan Anda dan menyusun rencana aksi 90 hari.
            </p>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <MessageCircle size={16} /> Jadwalkan Audit via WhatsApp <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
