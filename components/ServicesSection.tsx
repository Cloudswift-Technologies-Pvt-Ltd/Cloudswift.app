"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { services } from "@/lib/data";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 70 }}
        >
          <span className="section-badge">
            <span className="sparkle" /> WHAT WE OFFER
          </span>
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 70, delay: 0.1 }}
        >
          Full catalogs of how we help —
          <br />
          enterprise services, managed cloud, AI, and platforms
        </motion.p>

        <div className={styles.list}>
          {services.map((service, i) => (
            <motion.div
              key={service.id}
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
              <Link href={service.href} className={styles.rowContent}>
                <div className={styles.titleWrap}>
                  <span className={styles.title}>{service.title}</span>
                  <sup className={styles.num}>{service.id}</sup>
                </div>
                <p className={styles.desc}>{service.description}</p>
                {service.tags?.length ? (
                  <ul className={styles.tags}>
                    {service.tags.map((tag) => (
                      <li key={tag} className={styles.tag}>
                        #{tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Link>
            </motion.div>
          ))}
          <hr className={styles.sep} />
        </div>
      </div>
    </section>
  );
}
