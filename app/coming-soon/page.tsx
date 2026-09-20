import type { Metadata } from "next";
import ComingSoon from "../components/coming-soon";

export const metadata: Metadata = {
  title: "BaliRabies — Coming Soon",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
