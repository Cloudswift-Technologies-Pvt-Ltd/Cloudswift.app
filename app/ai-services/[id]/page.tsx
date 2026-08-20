import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AiServiceDetail from "@/components/AiServiceDetail";
import {
  catalogAiServices,
  findOffering,
  allAiItems,
} from "@/lib/catalog";

export function generateStaticParams() {
  return allAiItems.map((i) => ({ id: i.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = findOffering(catalogAiServices, id);
  if (!item) return {};
  return { title: item.title, description: item.desc };
}

export default async function AiServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = findOffering(catalogAiServices, id);
  if (!item) notFound();
  const related = allAiItems.filter((i) => i.id !== id).slice(0, 3);
  return (
    <AiServiceDetail
      item={item}
      category={item.category}
      basePath="/ai-services"
      related={related}
    />
  );
}
