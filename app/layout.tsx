import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
    ...(siteUrl
        ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } }
        : {}),
    title: "BaliRabies — Coming Soon",
    description:
        "Make Bali home. Keep care close. A little more peace of mind for your life in Bali. Coming soon.",
    openGraph: {
        title: "BaliRabies — Coming Soon",
        description:
            "Make Bali home. Keep care close. Something thoughtful is on its way.",
        type: "website",
        siteName: "BaliRabies",
        ...(siteUrl ? { url: siteUrl } : {}),
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Analytics />
            <body>{children}</body>
        </html>
    );
}
