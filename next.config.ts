/** Allow CloudSeek-sourced images (webp/svg) in the Nyro template. */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // AVIF often shifts warm golds into a light yellow cast on this gradient
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
    10|    qualities: [75, 90, 100],
  },
  async redirects() {
    return [
      {
        source: "/ai-services/ai-customer-agent",
        destination: "/ai-services/customer-support-agents",
        permanent: true,
      },
      {
        source: "/services/customer-experience-agents",
        destination: "/ai-services/customer-support-agents",
        permanent: true,
      },
      {
        source: "/ai-services/customer-experience-agents",
        destination: "/ai-services/customer-support-agents",
        permanent: true,
      },
      {
        source: "/services/customer-support-agents",
        destination: "/ai-services/customer-support-agents",
        permanent: true,
      },
      {
        source: "/services/customer-service-agents",
        destination: "/ai-services/customer-support-agents",
        permanent: true,
      },
      {
        source: "/services/customer-service-ai-agents",
        destination: "/ai-services/customer-support-agents",
        permanent: true,
      },
      {
        source: "/ai-services/ai-knowledge-agent",
        destination: "/ai-services/enterprise-knowledge-base-agents",
        permanent: true,
      },
      {
        source: "/services/enterprise-knowledge-base-agents",
        destination: "/ai-services/enterprise-knowledge-base-agents",
        permanent: true,
      },
      {
        source: "/services/enterprise-knowledge-agents",
        destination: "/ai-services/enterprise-knowledge-base-agents",
        permanent: true,
      },
      {
        source: "/ai-services/ai-deploy",
        destination: "/ai-services/ai-model-deployment",
        permanent: true,
      },
      {
        source: "/ai-model-deployment",
        destination: "/ai-services/ai-model-deployment",
        permanent: true,
      },
      {
        source: "/ai-services/model-deployment",
        destination: "/ai-services/ai-model-deployment",
        permanent: true,
      },
      {
        source: "/services/ai-model-deployment",
        destination: "/ai-services/ai-model-deployment",
        permanent: true,
      },
      {
        source: "/mlops/ai-model-deployment",
        destination: "/ai-services/ai-model-deployment",
        permanent: true,
      },
      {
        source: "/ai-operations/ai-model-deployment",
        destination: "/ai-services/ai-model-deployment",
        permanent: true,
      },
      {
        source: "/ai-operations/model-deployment",
        destination: "/ai-services/ai-model-deployment",
        permanent: true,
      },
      {
        source: "/ai-operations",
        destination: "/ai-services",
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
