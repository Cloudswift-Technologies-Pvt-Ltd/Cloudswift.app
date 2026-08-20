import type { Metadata } from "next";
import AiServiceDetail from "@/components/AiServiceDetail";
import JsonLd from "@/components/JsonLd";
import GtmAgentPage from "@/components/GtmAgentPage";
import {
  customerExperiencePage,
  agentPageMetadata,
} from "@/lib/agentPages";

export const metadata: Metadata = agentPageMetadata(customerExperiencePage);

export default function CustomerExperienceAgentsPage() {
  return (
    <>
      <JsonLd page={customerExperiencePage} />
      <GtmAgentPage page={customerExperiencePage} />
      <AiServiceDetail page={customerExperiencePage} />
    </>
  );
}
