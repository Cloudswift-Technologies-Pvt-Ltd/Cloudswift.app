"use client";
import { useEffect, useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./IntroCTA.module.css";

const pictures = [
  {
    src: "/images/float-1.jpg",
    className: styles.pic1,
    desktop: { x: 348, y: 160 },
    mobile: { x: 50, y: 90 },
    depth: 1.2,
  },
  {
    src: "/images/float-2.png",
    className: styles.pic2,
    desktop: { x: -336, y: 160 },
    mobile: { x: -50, y: 90 },
    depth: 0.85,
  },
  {
    src: "/images/float-3.png",
    className: styles.pic3,
    desktop: { x: -312, y: -200 },
    mobile: { x: 10, y: -90 },
    depth: 1.4,
  },
  {
    src: "/images/float-4.png",
    className: styles.pic4,
    desktop: { x: 303, y: -200 },
    mobile: { x: 10, y: -90 },
    depth: 1.0,
  },
];

function FloatingPic({
  src,
  className,
  fromX,
  fromY,
  depth,
  progress,
  mouseX,
  mouseY,
}: {
  src: string;
  className: string;
  fromX: number;
  fromY: number;
  depth: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
}) {
  // Settle into corners, then keep drifting (parallax) as you scroll past
  const xEnter = useTransform(progress, [0, 0.45, 1], [fromX, 0, 0]);
  const yEnter = useTransform(
    progress,
    [0, 0.45, 1],
    [fromY, 0, -55 * depth]
  );
  const scale = useTransform(progress, [0, 0.45, 1], [0.5, 1, 1]);
  const mx = useTransform(mouseX, [-0.5, 0.5], [-14 * depth, 14 * depth]);
  const my = useTransform(mouseY, [-0.5, 0.5], [-10 * depth, 10 * depth]);

  return (
    <motion.div
      className={`${styles.pic} ${styles.picLogo} ${className}`}
      style={{ x: xEnter, y: yEnter, scale }}
    >
      <motion.div className={styles.picInner} style={{ x: mx, y: my }}>
        <Image
          src={src}
          alt=""
          fill
          className={styles.picLogoImg}
          sizes="180px"
        />
      </motion.div>
    </motion.div>
  );
}

export default function IntroCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 50, damping: 18 });
  const smy = useSpring(my, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 809.98px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = ref.current;
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
    <section className={styles.section} ref={ref} id="intro">
      <div className={styles.stage}>
        {pictures.map((pic) => {
          const from = isMobile ? pic.mobile : pic.desktop;
          return (
            <FloatingPic
              key={pic.src}
              src={pic.src}
              className={pic.className}
              fromX={from.x}
              fromY={from.y}
              depth={pic.depth}
              progress={scrollYProgress}
              mouseX={smx}
              mouseY={smy}
            />
          );
        })}

        <div className={styles.center}>
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 70,
              delay: 0.15,
            }}
          >
            Cloud complexity is slowing your business. CloudSwift© migrates,
            secures, and operates the stack — so you scale without downtime drama.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 70,
              delay: 0.3,
            }}
          >
            <Link href="/contact" className="link-btn">
              book a free consultation <span className="arrow">↗</span>
            </Link>
          </motion.div>

          <motion.p
            className={styles.bio}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 70,
              delay: 0.4,
            }}
          >
            Azure Expert MSP for 450+ enterprises across India, the Gulf, and
            the US. 99.97% uptime SLA. 15-minute critical response. Senior
            engineers — not a junior bench learning on your estate.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
