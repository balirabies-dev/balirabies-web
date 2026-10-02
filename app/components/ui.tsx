"use client";
import { useLocale } from "./locale-provider";
import { translateTree } from "../lib/i18n/translate";
import Link from "next/link";
import { doctorHref, faqs, services } from "../lib/site";
export function Icon({
  name = "shield",
  size = 24,
}: {
  name?: string;
  size?: number;
}) {
  const locale = useLocale();
  const paths: Record<string, React.ReactNode> = {
    shield: (
      <>
        <path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    chat: (
      <>
        <path d="M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 0 1 19 0Z" />
        <path d="M7 10h10M7 14h6" />
      </>
    ),
    syringe: (
      <>
        <path d="m15 3 6 6M17 5l-5 5m3 3 5-5M3 21l4-4m-2-3 7-7 5 5-7 7-5-5Z" />
        <path d="m9 10 3 3" />
      </>
    ),
    home: (
      <>
        <path d="m3 10 9-7 9 7v11H3V10Z" />
        <path d="M9 21v-8h6v8" />
      </>
    ),
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    plus: <path d="M12 4v16M4 12h16" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" />
      </>
    ),
  };
  return translateTree((
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.shield}
    </svg>
  ), locale);
}
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  const locale = useLocale();
  return translateTree((
    <Link className={`button ${secondary ? "secondary" : ""}`} href={href}>
      {children}
      <Icon name="arrow" size={18} />
    </Link>
  ), locale);
}
export function Brand() {
  const locale = useLocale();
  return translateTree((
    <Link href="/" className="brand" aria-label="BaliRabies home">
      <span>
        Bali<span className="brand-light">Rabies</span>
        <small>TRAVEL SAFE. STAY INFORMED.</small>
      </span>
    </Link>
  ), locale);
}

export function ServiceCards() {
  const locale = useLocale();
  return translateTree((
    <div className="service-grid">
      {services.map((s, i) => (
        <Link className="service-card" href={s.href} key={s.title}>
          <div className="card-top">
            <span className="icon-box">
              <Icon name={s.icon} />
            </span>
            <span className="card-number">0{i + 1}</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <span className="text-link">
            Explore care <Icon name="arrow" size={17} />
          </span>
        </Link>
      ))}
    </div>
  ), locale);
}
export function FAQs({ limit = faqs.length }: { limit?: number }) {
  const locale = useLocale();
  return translateTree((
    <div className="faqs">
      {faqs.slice(0, limit).map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <Icon name="plus" size={18} />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  ), locale);
}
export function ContactBanner() {
  const locale = useLocale();
  return translateTree((
    <section className="contact-banner container">
      <div>
        <span className="eyebrow">HERE FOR YOUR NEXT STEP</span>
        <h2>Questions about rabies care in Bali?</h2>
        <p>Ask about vaccination, immunoglobulin, and your next steps.</p>
      </div>
      <Button href={doctorHref}>Contact Us</Button>
    </section>
  ), locale);
}
