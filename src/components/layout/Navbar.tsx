"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { trackMetaEvent } from "@/lib/metaPixel";
import styles from "./Navbar.module.css";

const WA_PHONE = "6288277450792";
const waNavbarMessage = encodeURIComponent(
  "Halo Tanscale, aku pemilik bisnis travel dan mau konsultasi pembuatan website & iklan Meta Ads."
);
const waNavbarUrl = `https://wa.me/${WA_PHONE}?text=${waNavbarMessage}`;

const navLinks = [
  { id: "masalah", href: "/#masalah", label: "Masalah" },
  { id: "analisa", href: "/#analisa", label: "Solusi" },
  { id: "apa-yang-kami-lakukan", href: "/#apa-yang-kami-lakukan", label: "Cara Kerja" },
  { id: "demo-template", href: "/#demo-template", label: "Portofolio" },
  { id: "package", href: "/#package", label: "Paket & Biaya" },
  { id: "garansi", href: "/#garansi", label: "Garansi" },
  { id: "faq", href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle scroll shadow and scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll-spy only on homepage
      if (window.location.pathname === "/") {
        const scrollPosition = window.scrollY + 160;
        let current = "";
        for (const item of navLinks) {
          const el = document.getElementById(item.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              current = item.id;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Smooth scroll handler for anchor links
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${id}`);
          setActiveSection(id);
          setMobileOpen(false);
        }
      } else {
        setMobileOpen(false);
      }
    },
    []
  );

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div className="container">
        <div className={styles.navbarInner}>
          {/* Brand Logo */}
          <Link href="/" className={styles.logo} aria-label="Tanscale Home">
            <div className={styles.logoIcon}>
              <Image
                src="/tanscale-white-logo.svg"
                alt="Tanscale Logo"
                width={28}
                height={28}
                className={styles.logoImg}
                priority
              />
            </div>
            <span className={styles.logoText}>Tanscale</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.navLinks} aria-label="Navigasi Utama">
            {navLinks.map((l) => {
              const isActive = activeSection === l.id;
              return (
                <Link
                  key={l.id}
                  href={l.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  onClick={(e) => handleAnchorClick(e, l.href, l.id)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className={styles.navActions}>
            <a
              href={waNavbarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              onClick={() =>
                trackMetaEvent("Contact", {
                  customData: { content_name: "Nav Konsultasi Gratis" },
                })
              }
            >
              <span>Konsultasi Gratis</span>
              <ArrowRight size={14} />
            </a>
            <button
              className={styles.burgerButton}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileOpen ? <X size={20} color="#F8FAFC" /> : <Menu size={20} color="#F8FAFC" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-drawer"
            className={styles.mobileDrawer}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Menu Navigasi Mobile"
          >
            <div className="container">
              <div className={styles.mobileLinksList}>
                {navLinks.map((l) => {
                  const isActive = activeSection === l.id;
                  return (
                    <Link
                      key={l.id}
                      href={l.href}
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
                      onClick={(e) => handleAnchorClick(e, l.href, l.id)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {l.label}
                    </Link>
                  );
                })}
                <a
                  href={waNavbarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileCtaBtn}
                  onClick={() => {
                    setMobileOpen(false);
                    trackMetaEvent("Contact", {
                      customData: { content_name: "Nav Konsultasi Gratis" },
                    });
                  }}
                >
                  <span>Mulai Konsultasi Gratis</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
