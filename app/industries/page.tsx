import type { Metadata } from "next";
import OfferingCatalog from "@/components/OfferingCatalog";
import { industries } from "@/lib/industries";

const industryGroups = [
  {
    category: "Operations & Commerce",
    items: industries.filter((industry) =>
      ["manufacturing", "retail", "security"].includes(industry.id)
    ),
  },
  {
    category: "People & Public",
    items: industries.filter((industry) =>
      ["healthcare", "education", "non-profit"].includes(industry.id)
    ),
  },
  {
    category: "Financial Services",
    items: industries.filter((industry) =>
      ["banking", "insurance"].includes(industry.id)
    ),
  },
];

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-focused cloud, data, application, and managed technology services from CloudSwift.",
};

export default function IndustriesPage() {
  return (
    <OfferingCatalog
      title="Industries"
      yearLabel="8 industries we serve"
      description="Technology solutions shaped around the operating realities, customers, and compliance needs of your industry."
      basePath="/industries"
      categories={industryGroups}
      ctaLabel="View industry"
    />
  );
}