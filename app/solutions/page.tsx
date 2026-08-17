import type { Metadata } from "next";
import SolutionsGrid from "./SolutionsGrid";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Enterprise solutions from CloudSwift — Azure, AWS, GCP, Microsoft 365, Dynamics 365, and Power BI.",
};

export default function SolutionsPage() {
  return <SolutionsGrid />;
}
