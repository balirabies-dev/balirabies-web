import type { Metadata } from "next";
import Link from "next/link";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import Header from "./components/header";
import { Brand } from "./components/ui";
import { site } from "./lib/site";
import "./globals.css";
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BaliRabies — Care close to home",
    template: "%s | BaliRabies",
  },
  description:
    "Rabies information, treatment inquiries, and ongoing care for your life in Bali.",
  robots: site.launchReady
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "BaliRabies",
    title: "BaliRabies — Care close to home",
    description: "Make Bali home. Keep care close.",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <footer className="simple-footer">
          <div className="container footer-main">
            <Brand />
            <div className="footer-links" aria-label="Footer links">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} BaliRabies</span>
            <Link href="/medical-disclaimer">General information · Clinical assessment required</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
