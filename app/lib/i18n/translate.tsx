import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import indonesian from "./id.json";
import { localizedHref, type Locale } from "./config";

const catalogs: Record<Locale, Record<string, string>> = { en: {}, id: indonesian };
export function translate(text: string, locale: Locale): string {
  if (locale === "en") return text;
  const key = text.replace(/\s+/g, " ").trim();
  if (!key) return text;
  if (/^\d{1,3}(,\d{3})+$/.test(key)) return Number(key.replaceAll(",", "")).toLocaleString("id-ID");
  const translated = catalogs[locale][key];
  if (translated !== undefined) {
    return ( /^\s/.test(text) ? " " : "" ) + translated + ( /\s$/.test(text) ? " " : "" );
  }
  const numbered = key.match(/^(\d+\.\s+)(.+)$/);
  if (numbered && catalogs[locale][numbered[2]]) return numbered[1] + catalogs[locale][numbered[2]];
  return text;
}

// Translate rendered copy and accessible labels on both the server and client.
// A shared catalog keeps identical initial markup during hydration.
export function translateTree(node: ReactNode, locale: Locale): ReactNode {
  if (typeof node === "string") return translate(node, locale);
  if (Array.isArray(node)) return node.map((child) => translateTree(child, locale));
  if (!isValidElement<Record<string, unknown>>(node)) return node;
  const props: Record<string, unknown> = {};
  for (const key of ["aria-label", "alt", "placeholder", "title"]) {
    if (typeof node.props[key] === "string") props[key] = translate(node.props[key], locale);
  }
  if (typeof node.props.href === "string") props.href = localizedHref(node.props.href, locale);
  if (node.props.children !== undefined) {
    const children = node.props.children as ReactNode;
    props.children = typeof children === "string"
      ? translate(children, locale)
      : Children.map(children, (child) => translateTree(child, locale));
  }
  return cloneElement(node, props);
}
