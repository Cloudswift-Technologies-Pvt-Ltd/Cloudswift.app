"use client";
import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import TemplateMedia, { toneForCategory } from "@/components/TemplateMedia";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const featured = projects.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.header} ref={headerRef}>
        <div className={styles.headerLeft}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 70 }}
          >
            <span className="section-badge">
              <span className="sparkle" /> WHAT WE RUN
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
            Platforms we migrate and manage day-to-day —
            <br />
            Azure, Microsoft 365, Dynamics, AWS, GCP, and more
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Link href="/solutions" className="link-btn">
            see all solutions <span className="arrow">↗</span>
          </Link>
        </motion.div>
      </div>

      <div className={styles.stack}>
        {featured.map((project, i) => (
          <StickyProjectCard
            key={project.slug}
            project={project}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

function StickyProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  });

  // Scroll-linked parallax (Framer sticky card feel)
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [120, 0, 0, -80]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [4, 0, 0, -1.5]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0.92, 1, 1, 0.97]
  );
  const imgY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.35, 1, 1, 0.85]
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
        style={{ y: springY, rotate: springR, scale, opacity }}
      >
        <Link
          href={`/solutions/${project.slug}`}
          className={styles.cardLink}
          data-cursor="view"
        >
          <div className={styles.cardImg}>
            <motion.div className={styles.coverWrap} style={{ y: imgY }}>
              <TemplateMedia
                src={project.coverImage}
                alt={project.title}
                tone={toneForCategory(project.category, project.title)}
                logo={project.logoImage}
                title={project.title}
                sizes="570px"
              />
            </motion.div>
          </div>
          <div className={styles.cardInfo}>
            <span className={styles.cardTitle}>{project.title}</span>
            <span className={styles.cardCategory}>{project.category}</span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
