"use client";

import { useEffect, useSyncExternalStore } from "react";
import { defaultLocale, isLocale } from "../lib/i18n/config";
import { LocaleProvider } from "./locale-provider";
import Header from "./header";
import NotFoundContent from "./not-found-content";

const subscribe = (callback: () => void) => {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
};
const getServerLocale = () => defaultLocale;
const getBrowserLocale = () => {
  const language = window.location.pathname.split("/")[1];
  return isLocale(language) ? language : defaultLocale;
};

export default function GlobalNotFoundContent() {
  const locale = useSyncExternalStore(subscribe, getBrowserLocale, getServerLocale);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  return <LocaleProvider locale={locale}>
    <Header />
    <main id="main"><NotFoundContent /></main>
  </LocaleProvider>;
}
