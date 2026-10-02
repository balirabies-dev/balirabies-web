import { translateTree } from "../lib/i18n/translate";
import type { Locale } from "../lib/i18n/config";
import Image from "next/image";
import baliImage from "../assets/bali-hero.webp";
import { Button } from "./ui";

export default function ComingSoon({ label, locale = "en" }: { label: string; locale?: Locale }) {
  return translateTree((
    <section className="coming-soon-page" aria-labelledby="coming-soon-heading">
      <Image
        src={baliImage}
        alt="Balinese temple beside a lake, surrounded by tropical greenery"
        fill
        preload
        sizes="100vw"
        className="coming-soon-image"
      />
      <div className="container coming-soon-content">
        <span className="coming-soon-status"><span aria-hidden="true" /> IN THE MAKING</span>
        <p className="eyebrow">{label}</p>
        <h1 id="coming-soon-heading">Good things.<br /><em>Coming soon.</em></h1>
        <p>We’re getting this part of BaliRabies ready.<br />A little more care for your life on the island.</p>
        <Button href="/">Back to home</Button>
      </div>
    </section>
  ), locale);
}
