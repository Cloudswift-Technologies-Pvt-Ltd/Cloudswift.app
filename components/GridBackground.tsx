"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./GridBackground.module.css";

/**
 * Nyro atmosphere: plus-sign technical grid + film grain.
 * Gradients live on each section (hero aurora / mesh) so they can
 * parallax independently; this layer is the grid the template is known for.
 */
export default function GridBackground({
  parallax = true,
  plus = true,
}: {
  parallax?: boolean;
  plus?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const grainY = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? ["-6%", "6%"] : ["0%", "0%"]
  );

  return (
    <div className={styles.root} ref={ref} aria-hidden>
      {plus ? <div className={styles.plusGrid} /> : null}
      <motion.div className={styles.grain} style={{ y: grainY }} />
    </div>
  );
}
