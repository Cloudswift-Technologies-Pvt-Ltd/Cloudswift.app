import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: January 1, 2025</p>

        <section className={styles.section}>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as your name, email address, and project details when you contact us through our website or other channels.</p>
        </section>

        <section className={styles.section}>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, communicate with you about projects, and send you updates or promotional materials (with your consent).</p>
        </section>

        <section className={styles.section}>
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or transfer your personally identifiable information to outside parties. We may share information with trusted third parties who assist us in operating our website, so long as they agree to keep this information confidential.</p>
        </section>

        <section className={styles.section}>
          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to maintain the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Cookies</h2>
          <p>Our website may use cookies to enhance user experience. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at the email below.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Contact</h2>
          <p>For questions about this Privacy Policy, contact us at <a href="mailto:nyro@example.com">nyro@example.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
