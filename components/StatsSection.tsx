"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats as statsData } from "@/lib/data";
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
  inView,
}: {
  number: number;
  label: string;
  showBadge: boolean;
  delay: number;
  inView: boolean;
}) {
  const count = useCountUp(number, inView && showBadge, 1400 + delay * 200);

  return (
    <motion.div
      className={styles.statRow}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 24,
        delay,
        mass: 1,
      }}
      style={{ perspective: 1200 }}
    >
      {showBadge && (
        <div className={styles.badge}>
          <span className={styles.badgeNum}>{count}</span>
        </div>
      )}
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <section className={styles.stats} ref={ref}>

      <div className={styles.inner}>
        {stats.map((stat, i) => (
          <StatRow
            key={stat.label}
            number={stat.number}
            label={stat.label}
            showBadge={stat.showBadge}
            delay={i * 0.1}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
}
