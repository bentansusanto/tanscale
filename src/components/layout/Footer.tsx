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
    "Halo Tanscale, saya pemilik Travel Agency dan ingin konsultasi mengenai paket Website Flagship + Setup Meta Ads Gratis (5 Slot/Bulan)."
  );
  const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;


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
              Sistem Akselerasi Omset &amp; Solusi Digital Khusus Biro Perjalanan Wisata, Umroh, dan Tour Operator di Indonesia.
            </p>
            <div className={styles.contactList}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <MessageCircle size={15} color="#10B981" /> WhatsApp: +62 812 3456 7890
              </a>
              <a href="mailto:growth@tanscale.com" className={styles.contactItem}>
                <Mail size={15} color="#60A5FA" /> growth@tanscale.com
              </a>
              <span className={styles.contactItem}>
                <MapPin size={15} color="#94A3B8" /> Jakarta, Indonesia
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

