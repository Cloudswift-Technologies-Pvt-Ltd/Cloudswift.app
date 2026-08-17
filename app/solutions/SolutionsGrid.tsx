"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import Footer from "@/components/Footer";
import TemplateMedia, { toneForCategory } from "@/components/TemplateMedia";
import styles from "./SolutionsGrid.module.css";

export default function SolutionsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <motion.p
              className={styles.heroYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              (2023–26©)
            </motion.p>

            <div className={styles.heroArrow}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                  d="M0 50 L50 0"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />
                <path
                  d="M0 0 L0 50"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Solutions
            </motion.h1>
          </div>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            Enterprise platforms we architect, secure, and operate — Azure, AWS,
            GCP, Microsoft 365, Dynamics 365, and Power BI under one SLA.
          </motion.p>
        </div>

        <div className={styles.grid} ref={ref}>
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 100, rotate: 3 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 22,
                delay: i * 0.08,
              }}
            >
              <Link href={`/solutions/${project.slug}`} className={styles.card} data-cursor="view">
                <div className={styles.cardImg}>
                  <TemplateMedia
                    src={project.coverImage}
                    alt={project.title}
                    tone={toneForCategory(project.category, project.title)}
                    logo={project.logoImage}
                    title={project.title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className={styles.cardInfo}>
                  <span className={styles.cardTitle}>{project.title}</span>
                  <span className={styles.cardCategory}>{project.category}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
