export const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
] as const;
export type Locale = (typeof languages)[number]["code"];
export const defaultLocale: Locale = "en";
export function isLocale(value: string): value is Locale {
  return languages.some((language) => language.code === value);
}
export function unlocalizedPath(path: string) {
  for (const language of languages) {
    if (path === `/${language.code}`) return "/";
    if (path.startsWith(`/${language.code}/`)) return path.slice(language.code.length + 1);
  }
  return path;
}
export function localizedHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  // Public assets and API paths are shared across languages.
  if (/\.[a-z0-9]+(?:[?#]|$)/i.test(href) || href.startsWith("/_next/") || href.startsWith("/api/")) return href;
  const path = unlocalizedPath(href);
  return locale === defaultLocale ? path : `/${locale}${path === "/" ? "" : path}`;
}

export function languageAlternates(path: string) {
  return Object.fromEntries(languages.map(({ code }) => [code, localizedHref(path, code)]));
}
