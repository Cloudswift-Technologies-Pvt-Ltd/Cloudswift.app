"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import styles from "./IntroCTA.module.css";

export default function IntroCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section className={styles.section} ref={ref} id="intro">
      <div className={styles.center}>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 70,
            delay: 0.15,
          }}
        >
          Cloud complexity is slowing your business. CloudSwift© migrates,
          secures, and operates the stack — so you scale without downtime drama.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 70,
            delay: 0.3,
          }}
        >
          <Link href="/contact" className="link-btn">
            book a free consultation <span className="arrow">↗</span>
          </Link>
        </motion.div>

        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 70,
            delay: 0.4,
          }}
        >
          Azure Expert MSP for 450+ enterprises across India, the Gulf, and
          the US. 99.97% uptime SLA. 15-minute critical response. Senior
          engineers — not a junior bench learning on your estate.
        </motion.p>
      </div>
    </section>
  );
}
