import { isLocale } from "../../lib/i18n/config";
import { translate } from "../../lib/i18n/translate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, specialPages, allPaths } from "../../lib/content";
import ContentPage from "../../components/content-page";
import { pageMetadata } from "../../lib/seo";

export function generateStaticParams() {
  return allPaths.map((path) => ({ slug: path.split("/") }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[]; lang: string }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;
  if (!isLocale(lang)) notFound();
  const path = slug.join("/");
  const data = articles[path] || specialPages[path];
  if (!data) notFound();
  return pageMetadata({
    path: `/${path}`, locale: lang,
    title: path === "contact" ? `${translate("Contact Us", lang)} — ${translate("Coming soon.", lang)}` : translate(data.title, lang),
    description: path === "contact" ? translate("We’re getting this part of BaliRabies ready.", lang) : translate(data.intro, lang),
  });
}

export default ContentPage;
