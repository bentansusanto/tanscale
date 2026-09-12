"use client";

import styles from "./MarqueeSection.module.css";

const items = [
  "150+ Biro Travel & Umroh Berhasil Scale-Up",
  "3.2× Rata-Rata Kenaikan Omset",
  "Respon WhatsApp Otomatis < 60 Detik",
  "Slot Terbatas: Maks 3 Partner Baru / Bulan",
  "Proteksi Teritori Rute Anti-Kompetitor",
  "Biro Umroh & Haji Khusus",
  "Private Tour & Luxury Travel",
  "Open Trip Domestik & Internasional",
  "Corporate Gathering & Outbound Specialist",
  "Audit Strategi Pemasaran 100% Gratis",
];

export default function MarqueeSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
