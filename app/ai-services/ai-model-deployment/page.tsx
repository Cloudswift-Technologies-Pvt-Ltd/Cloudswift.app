import type { Metadata } from "next";
import AiServiceDetail from "@/components/AiServiceDetail";
import JsonLd from "@/components/JsonLd";
import GtmAgentPage from "@/components/GtmAgentPage";
import {
  modelDeploymentPage,
  agentPageMetadata,
} from "@/lib/agentPages";

export const metadata: Metadata = agentPageMetadata(modelDeploymentPage);

export default function AiModelDeploymentPage() {
  return (
    <>
      <JsonLd page={modelDeploymentPage} />
      <GtmAgentPage page={modelDeploymentPage} />
      <AiServiceDetail page={modelDeploymentPage} />
    </>
  );
}
