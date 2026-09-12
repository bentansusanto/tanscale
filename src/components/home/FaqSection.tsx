"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    q: "Kenapa fokus ke bikin Website + Meta Ads dan bukan hanya mengandalkan SEO?",
    a: "SEO adalah strategi jangka panjang yang bagus, namun butuh waktu berbulan-bulan untuk naik peringkat di Google. Jika biro perjalanan Anda membutuhkan customer baru dan perputaran cashflow sekarang, Meta Ads langsung menyuntikkan traffic calon jamaah/wisatawan sejak hari pertama website Anda live.",
  },
  {
    q: "Apakah budget saldo iklan Meta Ads sudah termasuk di dalam paket Rp 6,5 Juta?",
    a: "Investasi Rp 6,5 Juta adalah biaya all-in pembuatan Website Flagship lengkap, dan kami berikan jasa riset audiens, olah materi visual, serta setup kampanye Meta Ads secara 100% GRATIS. Untuk saldo budget iklan (misalnya Rp 50.000–Rp 100.000/hari), Anda membayarkannya langsung ke Meta melalui kartu debit/kredit bisnis Anda. Sistem ini 100% transparan tanpa markup atau potongan komisi.",
  },
  {
    q: "Kenapa kuota pengerjaan dibatasi hanya 5 slot setiap bulan?",
    a: "Karena kami tidak bekerja dengan template asal jadi. Tim kami meriset audiens spesifik rute kota Anda, memilah dokumentasi foto/video dari galeri Anda untuk dijadikan format iklan yang memikat, dan memantau performa iklan harian sampai closing pertama datang. Untuk menjaga fokus dan kualitas optimasi yang intensif, kami membatasi maksimal 5 klien travel agency per bulan.",
  },
  {
    q: "Materi iklan apa saja yang perlu saya siapkan dari biro travel saya?",
    a: "Sangat simpel. Anda cukup mengirimkan foto dan video dokumentasi perjalanan, suasana jamaah/wisatawan, atau fasilitas armada yang ada di galeri HP Anda. Tim kami yang akan memilah momen terbaik, mengeditnya menjadi visual iklan profesional, dan menyusun copywriting penawarannya.",
  },
  {
    q: "Bagaimana conviction dari Tanscale jika closing pertama belum datang?",
    a: "Nggak ada tebak-tebakan. Semua metrik kami pantau secara terbuka: dari jumlah klik iklan, pengunjung web, hingga tombol WhatsApp yang ditekan. Jika dalam beberapa hari pertama respon belum optimal, kami terus mengevaluasi penawaran dan mengoptimasi website Anda sampai closing pertama datang.",
  },
  {
    q: "Bagaimana jika setelah closing pertama kami ingin terus melanjutkan iklan (scale up)?",
    a: "Setelah closing pertama berhasil diraih dan Anda melihat ritme leads yang masuk, Anda memiliki fleksibilitas penuh: Anda bisa menjalankan iklannya sendiri secara mandiri, atau mempercayakan retainer manajemen iklan bulanan kepada tim Tanscale untuk terus memperbesar skala agensi Anda.",
  },
  {
    q: "Apakah tim admin/CS saya harus paham IT untuk mengoperasikannya?",
    a: "Sama sekali tidak. Tim Anda hanya perlu fokus melayani chat WhatsApp yang masuk dari calon pembeli yang sudah terkualifikasi. Seluruh urusan teknis server, website, dan kampanye iklan kami tangani sepenuhnya.",
  },
  {
    q: "Bagaimana cara memulai dan mengamankan 1 dari 5 slot bulan ini?",
    a: "Cukup isi nomor WhatsApp aktif Anda pada formulir di bawah ini atau klik tombol konsultasi. Kami akan segera menghubungi Anda untuk mengecek ketersediaan kuota slot partner bulan ini.",
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
          Pertanyaan yang Sering Ditanyakan <br className="hidden md:inline" />
          <span className="gradient-text">(Frequently Asked Questions)</span>
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

