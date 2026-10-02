import type { Metadata } from "next";
import { sans } from "./lib/fonts";
import GlobalNotFoundContent from "./components/global-not-found-content";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — Page not found | BaliRabies",
  description: "The page you’re looking for may have moved or doesn’t exist.",
  robots: { index: false, follow: true },
  icons: { icon: "/icon.svg" },
};

export default function GlobalNotFound() {
  return <html lang="en" className={sans.variable} data-scroll-behavior="smooth">
    <body><GlobalNotFoundContent /></body>
  </html>;
}
