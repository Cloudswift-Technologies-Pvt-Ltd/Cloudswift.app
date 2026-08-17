"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import styles from "./ServicesSection.module.css";

const steps = [
  {
    id: "01",
    title: "Migrate",
    description:
      "Discovery-first cloud and Microsoft migrations — landing zones, wave plans, and cutovers your team can trust.",
  },
  {
    id: "02",
    title: "Secure",
    description:
      "Identity, monitoring, backups, and SOC-aligned operations so risk drops while compliance stays audit-ready.",
  },
  {
    id: "03",
    title: "Operate",
    description:
      "24/7 managed Azure, AWS, GCP, M365, and AI — 99.97% uptime SLA and 15-minute critical response.",
  },
];

export default function HowWeHelp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} ref={ref} id="how-we-help">
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 70 }}
        >
          <span className="section-badge">
            <span className="sparkle" /> HOW WE HELP
          </span>
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 70, delay: 0.1 }}
        >
          Cloud complexity slows growth. We take ownership of the stack
          <br />
          so your team ships product — not firefighting tickets.
        </motion.p>

        <div className={styles.list}>
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              className={styles.serviceRow}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 28,
                delay: 0.15 + i * 0.08,
              }}
            >
              <hr className={styles.sep} />
              <div className={styles.rowContent}>
                <div className={styles.titleWrap}>
                  <span className={styles.title}>{step.title}</span>
                  <sup className={styles.num}>{step.id}</sup>
                </div>
                <p className={styles.desc}>{step.description}</p>
              </div>
            </motion.div>
          ))}
          <hr className={styles.sep} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          style={{ marginTop: 32 }}
        >
          <Link href="/contact" className="link-btn">
            talk through your environment <span className="arrow">↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
