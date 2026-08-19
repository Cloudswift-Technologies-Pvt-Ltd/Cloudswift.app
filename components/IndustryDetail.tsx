"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import TemplateMedia, { toneForCategory } from "@/components/TemplateMedia";
import type { Industry } from "@/lib/industries";
import styles from "@/app/solutions/[slug]/SolutionDetail.module.css";
import local from "./IndustryDetail.module.css";

export default function IndustryDetail({ industry }: { industry: Industry }) {
  return (
    <>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <motion.p className={styles.date} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              INDUSTRY
            </motion.p>
            <motion.h1 className={styles.title} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }}>
              {industry.title}
            </motion.h1>
            <Link href="/contact" className={styles.visitBtn}>
              Talk to us <span aria-hidden>↗</span>
            </Link>
          </div>
          <div className={local.heroMedia}>
            <TemplateMedia
              src={industry.image}
              alt={`${industry.title} industry technology services`}
              tone={toneForCategory("Industry", industry.title)}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </section>

        <main className={local.content}>
          <section className={local.section}>
            <p className={local.eyebrow}>01 / Context</p>
            <h2>Overview</h2>
            <div className={local.copy}>
              {industry.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section className={local.section}>
            <p className={local.eyebrow}>02 / Capabilities</p>
            <h2>Solutions</h2>
            <p className={local.intro}>{industry.solutionsIntro}</p>
            <ul className={local.solutions}>
              {industry.capabilities.map((solution, index) => (
                <li key={solution} className={local.solution}>
                  <span className={local.solutionIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={local.cta}>
            <p>Ready to move forward?</p>
            <h2>Talk to us about {industry.title}</h2>
            <Link href="/contact" className={styles.visitBtn}>Start a conversation <span aria-hidden>↗</span></Link>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}