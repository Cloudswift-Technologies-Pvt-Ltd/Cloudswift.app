"use client";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import styles from "./IntroCTA.module.css";
import GridBackground from "@/components/GridBackground";
import SplitWords from "@/components/SplitWords";
import { easeOut } from "@/lib/motion";

export default function IntroCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleRaw = useTransform(scrollYProgress, [0, 0.45, 1], [0.9, 1, 0.94]);
  const yRaw = useTransform(scrollYProgress, [0, 0.45, 1], [48, 0, -28]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.8, 1], [0.15, 1, 1, 0.5]);
  const scale = useSpring(scaleRaw, { stiffness: 80, damping: 24 });
  const y = useSpring(yRaw, { stiffness: 80, damping: 24 });

  return (
    <section className={styles.section} ref={ref} id="intro">
      <GridBackground subtle />
      <motion.div
        className={styles.center}
        style={reduce ? undefined : { scale, y, opacity }}
      >
        <p className={styles.tagline}>
          <SplitWords text="Cloud complexity is slowing your business. CloudSwift© migrates, secures, and operates the stack — so you scale without downtime drama." />
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.35, ease: easeOut }}
        >
          <Link href="/contact" className="link-btn">
            book a free consultation <span className="arrow">↗</span>
          </Link>
        </motion.div>

        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
        >
          Azure Expert MSP for 450+ enterprises across India, the Gulf, and
          the US. 99.97% uptime SLA. 15-minute critical response. Senior
          engineers — not a junior bench learning on your estate.
        </motion.p>
      </motion.div>
    </section>
  );
}
