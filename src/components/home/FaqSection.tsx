"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    q: "Apakah saldo budget iklan sudah termasuk di dalam paket?",
    a: "Belum. Biaya paket adalah untuk jasa pembuatan website atau audit & kelola iklan. Saldo budget iklan (minimal 1 juta - 1,5 juta) kamu bayar langsung ke Meta via kartu debit/kredit tanpa markup sepeserpun.",
  },
  {
    q: "Apa bedanya paket Rp 6,5 Juta dan Rp 3,5 Juta?",
    a: "Paket Rp 6,5 Juta (sekali bayar) untuk kamu yang belum punya website atau ingin ganti website lama dengan yang baru, sudah gratis jasa setup iklan Meta. Paket Rp 3,5 Juta untuk kamu yang sudah punya website dan butuh audit alur serta pengelolaan iklan intensif selama 1 bulan.",
  },
  {
    q: "Materi iklan apa saja yang perlu aku siapkan?",
    a: "Cukup kirim foto dan video dokumentasi perjalanan atau suasana tour yang ada di galeri HP kamu. Aku yang akan filter, edit jadi materi iklan yang menarik, dan buatkan copywriting penawarannya.",
  },
  {
    q: "Gimana kalau iklannya belum menghasilkan closing?",
    a: "Iklan nggak ditinggal begitu saja. Aku pantau datanya tiap hari, mulai dari klik iklan sampai chat WA yang masuk. Materi yang boncos kita ganti, dan alur penawaran terus kita optimasi sampai closing pertama kamu datang.",
  },
  {
    q: "Setelah closing pertama atau lewat 1 bulan, kelanjutannya gimana?",
    a: "Fleksibel. Kamu bisa lanjutkan jalankan iklannya sendiri secara mandiri, atau kalau kamu mau scale up dan nggak mau repot, kamu bisa pakai jasaku untuk kelola iklan tiap bulan.",
  },
  {
    q: "Kenapa kuotanya dibatasi hanya 5 client per bulan?",
    a: "Biar pengerjaannya fokus dan terukur. Aku nggak pakai template asal-asalan—semua diriset, materi diolah manual, dan iklan dipantau harian. Makanya kuota dibatasi maksimal 5 client per bulan.",
  },
  {
    q: "Apakah admin atau CS travel aku harus paham teknis?",
    a: "Nggak perlu. Semua urusan teknis website, pixel, dan setting iklan Meta aku yang tangani. Admin kamu cuma perlu fokus balas chat WhatsApp yang masuk dan closing-in customer.",
  },
  {
    q: "Gimana cara mulainya?",
    a: "Tinggal klik tombol 'Amankan Slot' atau hubungi via WhatsApp. Kita diskusi singkat soal kondisi travel kamu dan cek ketersediaan slot bulan ini.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="section-dark" id="faq">
      <div className="container-narrow">
        {/* H2 Headline */}
        <motion.h2
          className="h2-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          Pertanyaan yang Sering <br className="hidden md:inline" />
          <span className="gradient-text">Ditanyakan Pemilik Travel</span>
        </motion.h2>


        {/* FAQ Accordion List */}
        <div className={styles.faqList}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.faqHeader}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`${styles.toggleIcon} ${isOpen ? styles.iconRotated : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={styles.faqBody}
                    >
                      <div className={styles.answerInner}>
                        <p className={styles.answerText}>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

