"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";
import SparkleIcon from "@/components/SparkleIcon";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 70 }}
          >
            <span className="section-badge">
              <SparkleIcon /> FAQ
            </span>
          </motion.div>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 70, delay: 0.1 }}
          >
            Common questions before a discovery call —
            <br />
            what we do, how support works, where we serve
          </motion.p>
        </div>

        {/* FAQ items */}
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 70,
                delay: 0.12 + i * 0.06,
              }}
            >
              <hr className={styles.sep} />
              <div
                className={styles.itemHeader}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className={styles.itemNum}>{faq.id}</span>
                <span className={styles.itemQuestion}>{faq.question}</span>
                <motion.span
                  className={styles.itemArrow}
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </div>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    className={styles.itemAnswer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className={styles.answerText}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <hr className={styles.sep} />
        </div>
      </div>
    </section>
  );
}
