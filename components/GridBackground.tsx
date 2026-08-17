"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./GridBackground.module.css";

/** Optional section glows (hero aurora / mesh). */
export default function GridBackground({
  parallax = true,
  mesh = false,
  hero = false,
}: {
  parallax?: boolean;
  mesh?: boolean;
  hero?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? ["-8%", "10%"] : ["0%", "0%"]
  );

  if (!mesh && !hero) return null;

  return (
    <div className={styles.root} ref={ref} aria-hidden>
      {mesh ? (
        <motion.div className={styles.mesh} style={{ y }}>
          <Image
            src="/images/gradient-mesh.png"
            alt=""
            fill
            unoptimized
            className={styles.meshImg}
            sizes="100vw"
          />
        </motion.div>
      ) : null}
      {hero ? (
        <motion.div className={styles.heroGlow} style={{ y }}>
          <Image
            src="/images/hero-gradient.png"
            alt=""
            fill
            unoptimized
            className={styles.heroImg}
            sizes="100vw"
          />
        </motion.div>
      ) : null}
    </div>
  );
}
