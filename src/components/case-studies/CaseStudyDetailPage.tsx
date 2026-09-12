"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Building2, MapPin, Clock,
  CheckCircle2, TrendingUp, AlertTriangle, Sparkles, Quote, ShieldCheck, MessageCircle
} from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyDetailPage.module.css";

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseStudyDetailPage({ caseStudy: cs }: Props) {
  const waMessage = encodeURIComponent(
    `Halo Tanscale, saya telah membaca studi kasus ${cs.clientName} (${cs.heroMetric} ${cs.heroMetricSub}) dan ingin konsultasi mengenai implementasi sistem serupa untuk travel saya.`
  );
  const waUrl = `https://wa.me/6288277450792?text=${waMessage}`;

  return (
    <>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <Link href="/case-studies" className={styles.backLink}>
            <ArrowLeft size={16} /> Kembali ke Semua Studi Kasus
          </Link>

          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className={styles.categoryBadge}>Studi Kasus {cs.category}</div>

            <h1 className={`display-xl ${styles.title}`}>{cs.title}</h1>

            <div className={styles.clientMetaBar}>
              <div className={styles.metaItem}>
                <Building2 size={16} color="var(--gold)" />
                <div>
                  <span className={styles.metaLabel}>Klien</span>
                  <span className={styles.metaValue}>{cs.clientName}</span>
                </div>
              </div>

              <div className={styles.metaItem}>
                <MapPin size={16} color="var(--warm)" />
                <div>
                  <span className={styles.metaLabel}>Lokasi</span>
                  <span className={styles.metaValue}>{cs.location}</span>
                </div>
              </div>

              <div className={styles.metaItem}>
                <Clock size={16} color="var(--sage)" />
                <div>
                  <span className={styles.metaLabel}>Durasi</span>
                  <span className={styles.metaValue}>{cs.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.layout}>
            {/* LEFT MAIN COLUMN */}
            <div className={styles.mainCol}>
              {/* Featured Hero Metric Card */}
              <motion.div
                className={styles.heroMetricBox}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.metricBig}>{cs.heroMetric}</div>
                <div>
                  <div className={styles.metricLabel}>{cs.heroMetricSub}</div>
                  <div className={styles.metricDesc}>Bisa dicapai dalam 90 hari pertama pendampingan Tanscale</div>
                </div>
                <div className={styles.metricIconBox}>
                  <TrendingUp size={28} />
                </div>
              </motion.div>

              {/* 1. THE PROBLEM SECTION */}
              <div className={styles.sectionBlock} id="problem">
                <div className={styles.sectionBadge} style={{ background: "#FAEEE9", color: "#EA580C" }}>
                  <AlertTriangle size={14} /> Bagian 1: Masalah &amp; Kendala Awal
                </div>

                <h2 className={`display-lg ${styles.blockHeading}`}>{cs.problemTitle}</h2>
                <p className="text-base">{cs.problemDescription}</p>

                <div className={styles.pointsBox}>
                  <h4 className={styles.pointsTitle}>Tantangan Utama Sebelum Bergabung Dengan Tanscale:</h4>
                  <ul className={styles.pointsList}>
                    {cs.problemPoints.map((point, i) => (
                      <li key={i} className={styles.pointItem}>
                        <span className={styles.pointDot} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 2. THE SOLUTION SECTION */}
              <div className={styles.sectionBlock} id="solution">
                <div className={styles.sectionBadge} style={{ background: "#EDF0F7", color: "#0F172A" }}>
                  <Sparkles size={14} /> Bagian 2: Solusi Dari Tanscale
                </div>

                <h2 className={`display-lg ${styles.blockHeading}`}>{cs.solutionTitle}</h2>
                <p className="text-base">{cs.solutionDescription}</p>

                {/* Solution Timeline Phases */}
                <div className={styles.phasesList}>
                  {cs.solutionPhases.map((phase, i) => (
                    <div key={i} className={`card ${styles.phaseCard}`}>
                      <div className={styles.phaseHeader}>
                        <span className={styles.phaseTag}>{phase.phase}</span>
                      </div>
                      <h3 className={styles.phaseTitle}>{phase.title}</h3>
                      <p className="text-sm">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. THE ACHIEVEMENT & BEFORE vs AFTER TABLE */}
              <div className={styles.sectionBlock} id="achievement">
                <div className={styles.sectionBadge} style={{ background: "#EBF5F1", color: "#0D9488" }}>
                  <CheckCircle2 size={14} /> Bagian 3: Hasil &amp; Dampak Bisnis
                </div>

                <h2 className={`display-lg ${styles.blockHeading}`}>{cs.achievementTitle}</h2>
                <p className="text-base">{cs.achievementDescription}</p>

                {/* Before vs After Table */}
                <div className={styles.tableCard}>
                  <div className={styles.tableHeader}>
                    <span>Indikator Pertumbuhan</span>
                    <span>Sebelum Tanscale</span>
                    <span>Sesudah Tanscale</span>
                    <span>Peningkatan</span>
                  </div>
                  <div className={styles.tableBody}>
                    {cs.metricsTable.map((row, i) => (
                      <div key={i} className={styles.tableRow}>
                        <span className={styles.cellMetric}>{row.metric}</span>
                        <span className={styles.cellBefore}>{row.before}</span>
                        <span className={styles.cellAfter}>{row.after}</span>
                        <span className={styles.cellChange}>
                          {row.change}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Executive Endorsement Banner */}
              <div className={styles.quoteBanner}>
                <Quote size={40} className={styles.quoteIcon} />
                <p className={styles.quoteBody}>&quot;{cs.executiveQuote}&quot;</p>
                <div className={styles.quoteAuthorInfo}>
                  <div className={styles.avatarCircle}>{cs.avatarInitials}</div>
                  <div>
                    <div className={styles.authorName}>{cs.quoteAuthor}</div>
                    <div className={styles.authorTitle}>{cs.quoteRole}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT STICKY SIDEBAR */}
            <div className={styles.sidebarCol}>
              <div className={styles.stickySidebar}>
                {/* Snapshot Card */}
                <div className={`card ${styles.sidebarCard}`}>
                  <h3 className={styles.sidebarHeading}>Ringkasan Klien</h3>
                  <div className={styles.snapshotList}>
                    <div className={styles.snapshotRow}>
                      <span className={styles.snapLabel}>Nama Klien</span>
                      <span className={styles.snapVal}>{cs.clientName}</span>
                    </div>
                    <div className={styles.snapshotRow}>
                      <span className={styles.snapLabel}>Jenis Usaha</span>
                      <span className={styles.snapVal}>{cs.clientIndustry}</span>
                    </div>
                    <div className={styles.snapshotRow}>
                      <span className={styles.snapLabel}>Lokasi</span>
                      <span className={styles.snapVal}>{cs.location}</span>
                    </div>
                    <div className={styles.snapshotRow}>
                      <span className={styles.snapLabel}>Hasil Utama</span>
                      <span className={styles.snapVal} style={{ color: "var(--gold)", fontWeight: 700 }}>
                        {cs.heroMetric} {cs.heroMetricSub}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Audit CTA Widget */}
                <div className={styles.ctaWidget}>
                  <ShieldCheck size={28} color="var(--gold-light)" />
                  <h4 className={styles.widgetTitle}>Dapatkan Hasil Pertumbuhan Serupa</h4>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Kami akan mengaudit alur penjualan travel Anda dan menyusun rencana 90 hari — 100% gratis.
                  </p>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-gold ${styles.widgetBtn}`}>
                    <MessageCircle size={14} /> Konsultasi via WhatsApp <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Bottom CTA */}
      <section className={`section ${styles.bottomCtaSection}`}>
        <div className="container">
          <div className={styles.bottomCtaBox}>
            <h2 className={`display-lg ${styles.bottomHeading}`}>
              Terjebak Batas Stagnasi Omset Pada Bisnis Travel Anda?
            </h2>
            <p className="text-lg" style={{ maxWidth: 540 }}>
              Mari temukan hambatan penjualan Anda dan bangun sistem pertumbuhan terukur khusus untuk bisnis Anda.
            </p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              <MessageCircle size={16} /> Dapatkan Audit Gratis via WhatsApp <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
