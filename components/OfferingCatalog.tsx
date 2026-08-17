"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import TemplateMedia, { toneForCategory } from "@/components/TemplateMedia";
import type { OfferingCategory } from "@/lib/catalog";
import styles from "@/app/solutions/SolutionsGrid.module.css";
import local from "./OfferingCatalog.module.css";

export default function OfferingCatalog({
  title,
  yearLabel,
  description,
  basePath,
  categories,
}: {
  title: string;
  yearLabel: string;
  description: string;
  basePath: string;
  categories: OfferingCategory[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const flat = categories.flatMap((c) =>
    c.items.map((item) => ({ ...item, category: c.category }))
  );

  return (
    <>
      <section className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <motion.p
              className={styles.heroYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {yearLabel}
            </motion.p>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.h1>
          </div>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            {description}
          </motion.p>
        </div>

        <div className={local.cats} ref={ref}>
          {categories.map((cat) => (
            <div key={cat.category} className={local.catBlock}>
              <h2 className={local.catTitle}>{cat.category}</h2>
              <p className={local.catCount}>{cat.items.length} offerings</p>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {flat.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80, rotate: 2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 22,
                delay: Math.min(i * 0.04, 0.6),
              }}
            >
              <Link
                href={`${basePath}/${item.id}`}
                className={styles.card}
                data-cursor="view"
              >
                <div className={styles.cardImg}>
                  <TemplateMedia
                    src={item.image}
                    alt={item.title}
                    tone={toneForCategory(item.category, item.title)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardTitle}>{item.title}</span>
                  <span className={styles.cardCategory}>{item.category}</span>
                </div>
                <p className={local.excerpt}>{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
