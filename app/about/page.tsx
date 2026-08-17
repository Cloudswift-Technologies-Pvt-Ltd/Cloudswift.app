"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { company, team } from "@/lib/data";
import styles from "../solutions/SolutionsGrid.module.css";
import aboutStyles from "./about.module.css";

export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <motion.p
              className={styles.heroYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Est. {company.founded}
            </motion.p>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              About
            </motion.h1>
          </div>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            {company.about}
          </motion.p>
        </div>

        <div className={aboutStyles.body} ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 120, damping: 24 }}
            className={aboutStyles.copy}
          >
            <p>
              Flagship work spans Azure managed services, cloud migration,
              Dynamics 365 &amp; Microsoft 365, Oracle cloud migration, and
              enterprise AI engineering — delivered with a 99.97% uptime SLA and
              15-minute critical response.
            </p>
            <p className={aboutStyles.muted}>
              Trust: {company.trust.join(" · ")}
            </p>
            <p className={aboutStyles.muted}>Head office: {company.address}</p>
            <Link href="/contact" className="link-btn">
              talk to an architect <span className="arrow">↗</span>
            </Link>
          </motion.div>

          <motion.div
            className={aboutStyles.team}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 24,
              delay: 0.1,
            }}
          >
            <span className="section-badge">
              <span className="sparkle" /> TEAM
            </span>
            <div className={aboutStyles.teamGrid}>
              {team.map((member) => (
                <div key={member.name} className={aboutStyles.person}>
                  <div className={aboutStyles.avatar}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={aboutStyles.avatarImg}
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <p className={aboutStyles.personName}>{member.name}</p>
                    <p className={aboutStyles.personRole}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
