import type { Metadata } from "next";
import OfferingCatalog from "@/components/OfferingCatalog";
import { catalogServices } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Enterprise Services",
  description:
    "21 enterprise services from CloudSwift — applications, infrastructure, security, workplace, advisory, and transformation.",
};

export default function ServicesPage() {
  return (
    <OfferingCatalog
      title="Services"
      yearLabel="21 offerings"
      description="Enterprise services under one SLA — applications, cloud & infrastructure, network & security, digital workplace, advisory, and transformation."
      basePath="/services"
      categories={catalogServices}
    />
  );
}
