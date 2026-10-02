import type { Metadata } from "next";
import Link from "next/link";
import { sans } from "../lib/fonts";
import { notFound } from "next/navigation";
import { languages, isLocale } from "../lib/i18n/config";
import { translate, translateTree } from "../lib/i18n/translate";
import { LocaleProvider } from "../components/locale-provider";
import Header from "../components/header";
import NavigationScroll from "../components/navigation-scroll";
import GoogleAnalytics from "../components/google-analytics";
import { Brand } from "../components/ui";
import { site } from "../lib/site";
import "../globals.css";

const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BaliRabies — Travel Safe. Stay Informed.",
    template: "%s | BaliRabies",
  },
  description:
    "Practical rabies information for travelers in Bali: prevention, animal exposure, vaccination, and treatment.",
  robots: site.indexingEnabled
    ? { index: true, follow: true }
    : { index: false, follow: true },
  openGraph: {
    type: "website",
    siteName: "BaliRabies",
    title: "BaliRabies — Travel Safe. Stay Informed.",
    description: "Explore Bali with confidence.",
  },
};
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return {
    ...baseMetadata,
    title: { default: translate("BaliRabies — Travel Safe. Stay Informed.", lang), template: "%s | BaliRabies" },
    description: translate("Practical rabies information for travelers in Bali: prevention, animal exposure, vaccination, and treatment.", lang),
    icons: { icon: "/icon.svg" },
    openGraph: { type: "website", siteName: "BaliRabies", locale: lang === "id" ? "id_ID" : "en_US", title: translate("BaliRabies — Travel Safe. Stay Informed.", lang), description: translate("Explore Bali with confidence.", lang) },
  };
}

export function generateStaticParams() { return languages.map(({ code }) => ({ lang: code })); }
export const dynamicParams = false;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "G-ZERQ4TC868";
  const analyticsEnabled = process.env.NODE_ENV === "production"
    && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production")
    && /^G-[A-Z0-9]+$/.test(measurementId);
  return translateTree((
    <html lang={lang} className={sans.variable} data-scroll-behavior="smooth">
      <body>
        <LocaleProvider locale={lang}>
        <NavigationScroll />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <footer className="simple-footer">
          <div className="container footer-main">
            <Brand />
            <div className="footer-links" aria-label="Footer links">
              <Link href="/">Home</Link>
              <Link href="/rabies-guide">Rabies</Link>
              <Link href="/rabies-guide/after-exposure">After Exposure</Link>
              <Link href="/treatment">Treatment</Link>
              <Link href="/faq">FAQs</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} BaliRabies</span>
            <nav className="footer-legal" aria-label="Legal and sources"><Link href="/medical-disclaimer">Disclaimer</Link><Link href="/sources">Sources</Link><Link href="/privacy">Privacy Policy</Link></nav>
          </div>
        </footer>
      </LocaleProvider>
      {analyticsEnabled && <GoogleAnalytics measurementId={measurementId} hostname={new URL(site.url).hostname} />}
      </body>
    </html>
  ), lang);
}
