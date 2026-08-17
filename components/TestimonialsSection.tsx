"use client";
import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import styles from "./TestimonialsSection.module.css";

const rotations = [5, -5, 5];

export default function TestimonialsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className={styles.section}>
      <div className={styles.watermark} aria-hidden>
        <Image
          src="/images/feedback-text.png"
          alt=""
          width={2722}
          height={455}
          className={styles.watermarkImg}
          sizes="(max-width: 1800px) 100vw, 1800px"
        />
      </div>

      <div className={styles.header} ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 70 }}
        >
            <span className="section-badge">
              <span className="sparkle" /> CLIENT RESULTS
            </span>
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 70,
            delay: 0.1,
          }}
        >
          Results teams feel after we take ownership —
          <br />
          fewer outages, clearer spend, faster response
        </motion.p>
      </div>

      <div className={styles.stack}>
        {testimonials.map((t, i) => (
          <StickyTestimonial
            key={t.id}
            testimonial={t}
            index={i}
            baseRotate={rotations[i % rotations.length]}
          />
        ))}
      </div>
    </section>
  );
}

function StickyTestimonial({
  testimonial,
  index,
  baseRotate,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
  baseRotate: number;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [100, 0, 0, -60]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [baseRotate + 2, baseRotate, baseRotate, baseRotate - 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0.94, 1, 1, 0.98]
  );
  const springY = useSpring(y, { stiffness: 120, damping: 28 });
  const springR = useSpring(rotate, { stiffness: 120, damping: 28 });

  return (
    <div
      className={styles.stickyPanel}
      ref={panelRef}
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className={styles.card}
        style={{ y: springY, rotate: springR, scale }}
      >
        <div className={styles.cardTop}>
          <div className={styles.clientLogo}>
            <div className={styles.logoDot} />
            <div className={styles.logoDot} style={{ opacity: 0.6 }} />
            <div className={styles.logoDot} style={{ opacity: 0.4 }} />
            <div className={styles.logoDot} style={{ opacity: 0.2 }} />
          </div>
          <span className={styles.date}>{testimonial.date}</span>
        </div>

        <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>

        <div className={styles.author}>
          <span className={styles.authorName}>{testimonial.name}</span>
          <span className={styles.authorTitle}>{testimonial.title}</span>
        </div>
      </motion.div>
    </div>
  );
}
