import type { AgentPage } from "@/lib/agentPages";
import { agentPageJsonLd } from "@/lib/agentPages";

export default function JsonLd({ page }: { page: AgentPage }) {
  const data = agentPageJsonLd(page);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
