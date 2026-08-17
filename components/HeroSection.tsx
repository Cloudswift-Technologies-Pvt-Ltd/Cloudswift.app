"use client";
import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import GridBackground from "@/components/GridBackground";
import { company } from "@/lib/data";
import styles from "./HeroSection.module.css";

const cyclingWords = ["Cloud", "Azure", "Microsoft", "AI"];

const springLine1 = {
  type: "spring" as const,
  stiffness: 200,
  damping: 70,
  delay: 0.4,
  mass: 1,
};

const springLine2 = {
  type: "spring" as const,
  stiffness: 200,
  damping: 70,
  delay: 0.6,
  mass: 1,
};

const springBg = {
  type: "spring" as const,
  bounce: 0,
  delay: 0,
  duration: 1.5,
};

function useWordStep() {
  const [step, setStep] = useState(168);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(max-width: 479.98px)").matches) setStep(72);
      else if (window.matchMedia("(max-width: 809.98px)").matches) setStep(90);
      else if (window.matchMedia("(max-width: 1199.98px)").matches) setStep(140);
      else setStep(168);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return step;
}

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const wordStep = useWordStep();
  const sectionRef = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgX = useTransform(smx, [-0.5, 0.5], ["-3%", "3%"]);
  const bgYMouse = useTransform(smy, [-0.5, 0.5], ["1%", "-2%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % cyclingWords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className={styles.hero} id="hero" ref={sectionRef}>
      {/* Exact Framer gradient asset — magenta / gold / red aurora */}
      <motion.div
        className={styles.bgWrap}
        initial={{ opacity: 0.2, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={springBg}
      >
        <motion.div
          className={styles.bgMove}
          style={{ x: bgX, y: scrollParallaxY }}
        >
          <motion.div className={styles.bgMouse} style={{ y: bgYMouse }}>
            <Image
              src="/images/hero-gradient.png"
              alt=""
              fill
              priority
              className={styles.bgImg}
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Plus-grid overlay — fades into the aurora like the Framer template */}
      <div className={styles.techGrid} aria-hidden />
      <GridBackground plus={false} />

      <div className={styles.inner}>
        <div className={styles.socialStack}>
          <a
            href={company.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <Image src="/images/icon-linkedin.svg" alt="" width={18} height={18} />
          </a>
          <a
            href={company.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className={styles.socialLink}
          >
            <Image src="/images/icon-behance.svg" alt="" width={18} height={18} />
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={styles.socialLink}
          >
            <Image src="/images/icon-dribbble.svg" alt="" width={18} height={18} />
          </a>
        </div>

        <div className={styles.headline}>
          <motion.h1
            className={styles.designing}
            initial={{ opacity: 0.001, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springLine1}
          >
            Running
          </motion.h1>

          <motion.div
            className={styles.forRow}
            initial={{ opacity: 0.001, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springLine2}
          >
            <span className={styles.forText}>for</span>
            <div className={styles.ticker} style={{ height: wordStep }}>
              <motion.div
                className={styles.tickerTrack}
                animate={{ y: -wordIndex * wordStep }}
                transition={{ type: "spring", stiffness: 180, damping: 28, mass: 0.9 }}
              >
                {[...cyclingWords, cyclingWords[0]].map((word, i) => (
                  <span
                    key={`${word}-${i}`}
                    className={styles.tickerWord}
                    style={{ height: wordStep }}
                  >
                    {word}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
