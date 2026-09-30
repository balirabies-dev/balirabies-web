import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, specialPages, allPaths } from "../lib/content";
import ComingSoon from "../components/coming-soon";

export function generateStaticParams() {
  return allPaths.map((path) => ({ slug: path.split("/") }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const path = (await params).slug.join("/");
  const data = articles[path] || specialPages[path];
  return {
    title: `${data?.eyebrow || "More care"} — Coming soon`,
    description: "We’re preparing this part of BaliRabies. Explore our home page while we get ready.",
    alternates: { canonical: `/${path}` },
    robots: { index: false, follow: true },
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const path = (await params).slug.join("/");
  const data = articles[path] || specialPages[path];
  if (!data) notFound();
  return <ComingSoon label={data.eyebrow} />;
}
