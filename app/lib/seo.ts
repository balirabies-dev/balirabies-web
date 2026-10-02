import type { Metadata } from "next";
import { site } from "./site";
import { languageAlternates, localizedHref, type Locale } from "./i18n/config";

// Drafts and tools should not appear as completed services in search results.
const excludedPaths = new Set(["/contact", "/coming-soon", "/membership", "/terms", "/exposure-guide"]);
export function isIndexablePath(path: string) {
  return !excludedPaths.has(path);
}
export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
export function pageMetadata({ path, locale, title, description }: {
  path: string; locale: Locale; title: string; description: string;
}): Metadata {
  const url = absoluteUrl(localizedHref(path, locale));
  const image = absoluteUrl(localizedHref("/opengraph-image", locale));
  return {
    title,
    description,
    alternates: { canonical: url, languages: {
      ...Object.fromEntries(Object.entries(languageAlternates(path)).map(([language, href]) => [language, absoluteUrl(href)])),
      "x-default": absoluteUrl(localizedHref(path, "en")),
    } },
    robots: { index: site.indexingEnabled && isIndexablePath(path), follow: true },
    openGraph: {
      type: "website", siteName: site.name, title: `${title} | ${site.name}`,
      description, url, locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? "en_US" : "id_ID",
      images: [{ url: image, width: 1200, height: 630, alt: `${site.name} — ${title}` }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [image] },
  };
}
