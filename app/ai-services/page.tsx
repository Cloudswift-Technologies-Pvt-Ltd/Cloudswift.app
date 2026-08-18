import type { Metadata } from "next";
import OfferingCatalog from "@/components/OfferingCatalog";
import { catalogAiServices } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "AI Services",
  description:
    "20 AI services from strategy to production — agents, generative AI, product development, and MLOps.",
};

export default function AiServicesPage() {
  return (
    <OfferingCatalog
      title="AI Services"
      yearLabel="5 AI practices"
      description="From readiness assessments to production agents — enterprise ChatGPT, document intelligence, multi-agent systems, and MLOps."
      basePath="/ai-services"
      categories={catalogAiServices}
      ctaLabel="View service"
    />
  );
}
