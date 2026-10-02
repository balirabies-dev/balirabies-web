import { notFound } from "next/navigation";
import { isLocale } from "../../lib/i18n/config";
import type { Metadata } from "next";
import ComingSoon from "../../components/coming-soon";
import { pageMetadata } from "../../lib/seo";
import { translate } from "../../lib/i18n/translate";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return pageMetadata({
    path: "/coming-soon", locale: lang,
    title: translate("Coming soon.", lang),
    description: translate("We’re getting this part of BaliRabies ready.", lang),
  });
}

export default async function ComingSoonPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <ComingSoon label="BaliRabies" locale={lang} />;
}
