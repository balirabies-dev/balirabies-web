import type { MetadataRoute } from "next";
import { allPaths } from "./lib/content";
import { languages, localizedHref } from "./lib/i18n/config";
import { site } from "./lib/site";
import { isIndexablePath } from "./lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.indexingEnabled) return [];
  return languages.flatMap(({ code }) => ["", ...allPaths.filter((path) => isIndexablePath(`/${path}`))].map((path) => ({
    url: `${site.url}${localizedHref(`/${path}`, code)}`,
    alternates: { languages: { ...Object.fromEntries(languages.map(({ code: locale }) => [locale, `${site.url}${localizedHref(`/${path}`, locale)}`])), "x-default": `${site.url}${localizedHref(`/${path}`, "en")}` } },
  })));
}
