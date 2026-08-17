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
import Link from "next/link";
import { projects } from "@/lib/data";
import SparkleIcon from "@/components/SparkleIcon";
import styles from "./FeaturedProjects.module.css";

const BRAND: Record<
  string,
  { glow: string; glow2: string; logoClass: string }
> = {
  "amazon-web-services": {
    glow: "rgba(255, 153, 0, 0.55)",
    glow2: "rgba(35, 47, 62, 0.9)",
    logoClass: styles.logoAws,
  },
  "google-cloud-platform": {
    glow: "rgba(66, 133, 244, 0.45)",
    glow2: "rgba(234, 67, 53, 0.28)",
    logoClass: styles.logoGcp,
  },
  "microsoft-azure": {
    glow: "rgba(0, 168, 255, 0.5)",
    glow2: "rgba(0, 90, 180, 0.35)",
    logoClass: styles.logoAzure,
  },
};

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
              <SparkleIcon /> WHAT WE RUN
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

  const y = useTransform(scrollYProgress, [0, 0.35, 0.62, 1], [80, 0, 0, -40]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.32, 0.62, 1],
    [0.94, 1, 1, 0.96]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.58, 0.82],
    [0, 1, 1, 0]
  );

  const springY = useSpring(y, { stiffness: 140, damping: 30 });
  const brand = BRAND[project.slug];

  return (
    <div
      className={styles.stickyPanel}
      ref={panelRef}
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className={styles.card}
        style={{ y: springY, scale, opacity }}
      >
        <Link
          href={`/solutions/${project.slug}`}
          className={styles.cardLink}
          data-cursor="view"
        >
          <div className={styles.cardFace}>
            <div
              className={styles.glow}
              style={{
                background: brand
                  ? `radial-gradient(ellipse at 50% 38%, ${brand.glow} 0%, transparent 58%),
                     radial-gradient(ellipse at 80% 80%, ${brand.glow2} 0%, #07080c 70%)`
                  : `radial-gradient(ellipse at 50% 40%, ${project.color}55, #07080c 70%)`,
              }}
              aria-hidden
            />
            <div className={styles.orb} aria-hidden />

            <div className={styles.logoStage}>
              {project.logoImage ? (
                <Image
                  src={project.logoImage}
                  alt=""
                  width={220}
                  height={120}
                  className={`${styles.logo} ${brand?.logoClass || ""}`}
                />
              ) : null}
            </div>

            <div className={styles.caption}>
              <span className={styles.cardTitle}>{project.title}</span>
              <span className={styles.cardCategory}>{project.category}</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
