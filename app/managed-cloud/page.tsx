import type { Metadata } from "next";
import OfferingCatalog from "@/components/OfferingCatalog";
import { catalogManagedCloud } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Managed Cloud",
  description:
    "25 managed cloud services — Azure, AWS, GCP, Microsoft 365, Oracle, private cloud, security, and data centre.",
};

export default function ManagedCloudPage() {
  return (
    <OfferingCatalog
      title="Managed Cloud"
      yearLabel="6 cloud domains"
      description="Public, private, hybrid, and Oracle cloud — operated by certified engineers under a 99.97% uptime SLA."
      basePath="/managed-cloud"
      categories={catalogManagedCloud}
      ctaLabel="View service"
    />
  );
}
