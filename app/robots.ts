import type { MetadataRoute } from "next";
import { site } from "./lib/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // Crawlers must be able to read page-level noindex directives.
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
