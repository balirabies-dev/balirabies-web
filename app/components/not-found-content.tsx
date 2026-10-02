"use client";

import Image from "next/image";
import baliImage from "../assets/bali-hero.webp";
import { useLocale } from "./locale-provider";
import { translateTree } from "../lib/i18n/translate";
import { Button } from "./ui";

export default function NotFoundContent() {
  const locale = useLocale();
  return translateTree((
    <section className="coming-soon-page not-found-page" aria-labelledby="not-found-heading">
      <Image src={baliImage}
        alt="Balinese temple beside a lake, surrounded by tropical greenery"
        fill preload sizes="100vw" className="coming-soon-image" />
      <div className="container coming-soon-content not-found-content">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 id="not-found-heading"><span className="sr-only">404 — </span>Page not found.</h1>
        <p>The page you’re looking for may have moved or doesn’t exist.</p>
        <Button href="/">Back to home</Button>
      </div>
    </section>
  ), locale);
}
