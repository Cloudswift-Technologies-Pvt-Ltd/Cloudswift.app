"use client";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.leftCol}>
            <Link href="/" className={styles.brand} aria-label={company.name}>
              <Image
                src={company.logo}
                alt={company.name}
                width={260}
                height={56}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.avatarTitle}>Azure Expert MSP</p>

            <div className={styles.contactBlock}>
              <p className={styles.contactLabel}>Contact us</p>
              <a href={`mailto:${company.email}`} className={styles.email}>
                {company.email}
              </a>
            </div>

            <hr className={styles.sep} />

            <div className={styles.socials}>
              <a
                href={company.socials.linkedin}
                className={styles.socialIcon}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icon-linkedin.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
              <a
                href={company.socials.github}
                className={styles.socialIcon}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icon-behance.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
            </div>

            <a
              href={company.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookCall}
            >
              book a free consultation <span>↗</span>
            </a>
          </div>

          <div className={styles.rightCol}>
            <p className={styles.ctaLabel}>Ready to secure and scale</p>
            <h2 className={styles.ctaHeadline}>
              your enterprise cloud
              <br />
              with confidence
            </h2>
            <p className={styles.ctaTagline}>
              Speak with a senior cloud architect — no hard sell.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bigText} aria-hidden>
        <Image
          src="/images/lets-talk.png"
          alt=""
          width={2712}
          height={510}
          className={styles.bigTextImg}
          sizes="(max-width: 1800px) 100vw, 1800px"
        />
      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © {company.legalName} {new Date().getFullYear()} | All Rights Reserved
        </span>
        <div className={styles.bottomLinks}>
          <Link href="/terms-of-service" className={styles.bottomLink}>
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className={styles.bottomLink}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
