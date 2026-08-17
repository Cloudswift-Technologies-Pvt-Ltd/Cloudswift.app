"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats as statsData } from "@/lib/data";
import GridBackground from "@/components/GridBackground";
import styles from "./StatsSection.module.css";

const stats = statsData;

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let frame: number;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatRow({
  number,
  label,
  showBadge,
  delay,
}: {
  number: number;
  label: string;
  showBadge: boolean;
  delay: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { once: true, amount: 0.55, margin: "0px 0px -10% 0px" });
  const count = useCountUp(number, inView && showBadge, 1600 + delay * 200);

  return (
    <motion.div
      ref={rowRef}
      className={styles.statRow}
      initial={{ opacity: 0, y: 80, scale: 0.88, filter: "blur(16px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
        delay,
        mass: 0.85,
      }}
    >
      {showBadge && (
        <motion.div
          className={styles.badge}
          initial={{ scale: 0.6, rotate: -12 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14, delay: delay + 0.08 }}
        >
          <span className={styles.badgeGlass} aria-hidden />
          <span className={styles.badgeShine} aria-hidden />
          <span className={styles.badgeNum}>{count}</span>
        </motion.div>
      )}
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section className={styles.stats} ref={ref}>
      <GridBackground subtle />
      <div className={styles.inner}>
        {stats.map((stat, i) => (
          <StatRow
            key={stat.label}
            number={stat.number}
            label={stat.label}
            showBadge={stat.showBadge}
            delay={i * 0.12}
          />
        ))}
      </div>
    </section>
  );
}
