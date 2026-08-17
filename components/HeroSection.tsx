"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % cyclingWords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgClip} aria-hidden>
        <motion.div
          className={styles.bgWrap}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={springBg}
        >
          <Image
            src="/images/hero-gradient.png"
            alt=""
            fill
            priority
            unoptimized
            className={styles.bgImg}
            sizes="100vw"
          />
        </motion.div>
      </div>
      <div className={styles.plusGrid} aria-hidden />

      <div className={styles.socialStack}>
          <a
            href={company.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <Image src="/images/icon-linkedin.svg" alt="" width={32} height={32} />
          </a>
          <a
            href={company.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className={styles.socialLink}
          >
            <Image src="/images/icon-x.svg" alt="" width={32} height={32} />
          </a>
          <a
            href={company.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialLink}
          >
            <Image src="/images/icon-instagram.svg" alt="" width={32} height={32} />
          </a>
        </div>

      <div className={styles.inner}>
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
