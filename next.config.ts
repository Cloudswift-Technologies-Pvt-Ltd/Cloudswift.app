/** Allow CloudSeek-sourced images (webp/svg) in the Nyro template. */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // AVIF often shifts warm golds into a light yellow cast on this gradient
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
    qualities: [75, 90, 100],
  },
  async redirects() {
    return [
      {
        source: "/ai-services/ai-customer-agent",
        destination: "/services/customer-experience-agents",
        permanent: true,
      },
      {
        source: "/ai-services/ai-knowledge-agent",
        destination: "/services/enterprise-knowledge-base-agents",
        permanent: true,
      },
      {
        source: "/services/customer-service-agents",
        destination: "/services/customer-experience-agents",
        permanent: true,
      },
      {
        source: "/services/customer-service-ai-agents",
        destination: "/services/customer-experience-agents",
        permanent: true,
      },
      {
        source: "/services/enterprise-knowledge-agents",
        destination: "/services/enterprise-knowledge-base-agents",
        permanent: true,
      },
      {
        source: "/platform",
        destination: "/ai-services",
        permanent: false,
      },
      {
        source: "/integrations",
        destination: "/services/integration",
        permanent: false,
      },
      {
        source: "/case-studies",
        destination: "/projects",
        permanent: false,
      },
      {
        source: "/pricing",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
