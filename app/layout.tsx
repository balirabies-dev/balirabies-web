import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/header";
import { Brand } from "./components/ui";
import { site } from "./lib/site";
import "./globals.css";
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
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="topbar">
          <span>FOR YOUR LIFE IN BALI</span>
          <span>Personal care. Clear next steps.</span>
        </div>
        <Header />
        <main id="main">{children}</main>
        <footer>
          <div className="container footer-grid">
            <div>
              <Brand />
              <p>
                Make Bali home.
                <br />
                Keep care close.
              </p>
              <span className="preview-label">
                Development preview · contact not yet live
              </span>
            </div>
            <div>
              <h3>Explore</h3>
              <Link href="/rabies-guide">Rabies Guide</Link>
              <Link href="/treatment">Our care</Link>
              <Link href="/membership">Membership</Link>
              <Link href="/about">About us</Link>
            </div>
            <div>
              <h3>Here to help</h3>
              <Link href="/rabies-guide/after-exposure">
                After a bite or scratch
              </Link>
              <Link href="/exposure-guide">Exposure guide</Link>
              <Link href="/faq">Common questions</Link>
              <Link href="/contact">Contact & requests</Link>
            </div>
            <div>
              <h3>Good to know</h3>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/medical-disclaimer">Medical disclaimer</Link>
              <Link href="/sources">Sources</Link>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} BaliRabies</span>
            <span>
              General information. Individual care starts with a clinical
              assessment.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
