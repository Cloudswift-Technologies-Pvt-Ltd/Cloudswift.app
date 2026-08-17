"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/lib/data";
import styles from "./Navbar.module.css";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/managed-cloud", label: "Managed Cloud" },
  { href: "/ai-services", label: "AI Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const navSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 40,
  delay: 0.4,
  mass: 1,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        className={styles.nav}
        initial={{ opacity: 0.001, y: -160 }}
        animate={{ opacity: 1, y: 0 }}
        transition={navSpring}
        style={{ perspective: 1200 }}
      >
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo} aria-label={company.name}>
            <Image
              src={company.logo}
              alt={company.name}
              width={240}
              height={48}
              className={styles.logoImg}
              priority
            />
          </Link>

          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className={styles.menuLines}>
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
            </span>
            menu
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.drawer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.drawerInner}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                close
              </button>

              <nav className={styles.drawerNav}>
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 70,
                      delay: 0.1 + i * 0.07,
                    }}
                  >
                    <Link
                      href={link.href}
                      className={styles.drawerLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className={styles.drawerFooter}>
                <div className={styles.drawerSocials}>
                  <a
                    href={company.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Image
                      src="/images/icon-linkedin.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </a>
                  <a
                    href={company.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                  >
                    <Image
                      src="/images/icon-behance.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </a>
                  <a
                    href={company.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Image
                      src="/images/icon-dribbble.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </a>
                </div>
                <a href={`mailto:${company.email}`} className={styles.drawerEmail}>
                  {company.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
