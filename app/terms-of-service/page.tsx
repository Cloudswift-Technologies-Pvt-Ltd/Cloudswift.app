import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.updated}>Last updated: January 1, 2025</p>

        <section className={styles.section}>
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of the terms, you may not access our services.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Services</h2>
          <p>Nyro Silvan provides UX/UI design, web design, branding, and Framer development services. The scope, timeline, and deliverables of each project are defined in individual project agreements.</p>
        </section>

        <section className={styles.section}>
          <h2>3. Intellectual Property</h2>
          <p>All designs and deliverables become the property of the client upon full payment. Nyro Silvan retains the right to showcase completed work in portfolio and promotional materials unless explicitly agreed otherwise.</p>
        </section>

        <section className={styles.section}>
          <h2>4. Payment Terms</h2>
          <p>Payment schedules are outlined in individual project agreements. Late payments may incur additional fees. Work will not be delivered until payment is received in full.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Revisions</h2>
          <p>Each project includes a specified number of revision rounds as outlined in the project agreement. Additional revisions beyond the agreed scope will be billed at the standard hourly rate.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Limitation of Liability</h2>
          <p>Nyro Silvan shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Contact</h2>
          <p>For questions about these Terms, contact us at <a href="mailto:nyro@example.com">nyro@example.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
