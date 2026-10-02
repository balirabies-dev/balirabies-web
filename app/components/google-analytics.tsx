"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const serverSnapshot = () => false;

export default function GoogleAnalytics({ measurementId, hostname }: {
  measurementId: string; hostname: string;
}) {
  const enabled = useSyncExternalStore(subscribe, () => {
    const productionHost = hostname.replace(/^www\./, "");
    return window.location.protocol === "https:"
      && window.location.hostname.replace(/^www\./, "") === productionHost
      && !["localhost", "127.0.0.1", "[::1]"].includes(productionHost);
  }, serverSnapshot);

  if (!enabled) return null;

  return <>
    <Script id="google-analytics-loader"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive" />
    <Script id="google-analytics-config" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${JSON.stringify(measurementId)}, {
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    `}</Script>
  </>;
}
