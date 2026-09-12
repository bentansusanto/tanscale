import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";


const footerLinks = {
  nav: [
    { href: "/#masalah", label: "Masalah" },
    { href: "/#analisa", label: "Solusi" },
    { href: "/#apa-yang-kami-lakukan", label: "Cara Kerja" },
    { href: "/#package", label: "Paket & Biaya" },
  ],
  support: [
    { href: "/#garansi", label: "Garansi" },
    { href: "/#faq", label: "FAQ" },
    { href: "/contact", label: "Konsultasi Gratis" },
  ],
};



export default function Footer() {
  const waMessage = encodeURIComponent(
    "Halo Tanscale, aku pemilik bisnis travel dan ingin konsultasi pembuatan website & iklan Meta Ads (5 Slot Bulan Ini)."
  );
  const waUrl = `https://wa.me/6288277450792?text=${waMessage}`;

  return (
    <footer className={styles.footer}>
      <div className="container-narrow">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoMark}>
                <Image
                  src="/tanscale-white-logo.svg"
                  alt="Tanscale Logo"
                  width={28}
                  height={28}
                  className={styles.logoImg}
                />
              </div>
              <span className={styles.logoText}>
                Tanscale
              </span>
            </Link>

            <p className={styles.tagline}>
              Bantu bisnis travel mendatangkan calon customer tertarget lewat kombinasi website teroptimasi dan iklan Meta Ads.
            </p>
            <div className={styles.contactList}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <MessageCircle size={15} color="#10B981" /> WhatsApp: +62 882 7745 0792
              </a>
              <a href="mailto:bennytansusanto@gmail.com" className={styles.contactItem}>
                <Mail size={15} color="#60A5FA" /> bennytansusanto@gmail.com
              </a>
              <span className={styles.contactItem}>
                <MapPin size={15} color="#94A3B8" /> Batam, Indonesia
              </span>
            </div>
          </div>


          {/* Nav Links */}
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Navigasi</h4>
            <ul className={styles.linkList}>
              {footerLinks.nav.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Jaminan &amp; Bantuan</h4>
            <ul className={styles.linkList}>
              {footerLinks.support.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Tanscale. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className={styles.disclaimer}>
            Didedikasikan untuk Kemajuan Pemilik Bisnis Travel di Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}

