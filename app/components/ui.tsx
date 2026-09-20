import Link from "next/link";
import { doctorHref, faqs, services } from "../lib/site";
export function Icon({
  name = "shield",
  size = 24,
}: {
  name?: string;
  size?: number;
}) {
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
  return (
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
  );
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
  return (
    <Link className={`button ${secondary ? "secondary" : ""}`} href={href}>
      {children}
      <Icon name="arrow" size={18} />
    </Link>
  );
}
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="BaliRabies home">
      <span className="brand-mark">
        <Icon name="plus" size={28} />
      </span>
      <span>
        Bali<span className="brand-light">Rabies</span>
        <small>CARE CLOSE TO HOME</small>
      </span>
    </Link>
  );
}
export function Urgent() {
  return (
    <aside className="urgent">
      <span className="urgent-icon">!</span>
      <div>
        <strong>Animal bite or scratch?</strong>
        <p>Wash the wound for 15 minutes. Seek medical care promptly.</p>
      </div>
      <Link href="/rabies-guide/after-exposure">
        What to do now <Icon name="arrow" size={18} />
      </Link>
    </aside>
  );
}
export function ServiceCards() {
  return (
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
  );
}
export function FAQs({ limit = faqs.length }: { limit?: number }) {
  return (
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
  );
}
export function ContactBanner() {
  return (
    <section className="contact-banner container">
      <div>
        <span className="eyebrow">HERE FOR YOUR NEXT STEP</span>
        <h2>Let’s talk about your care.</h2>
        <p>Questions, plans, or something unexpected. Start a conversation.</p>
      </div>
      <Button href={doctorHref}>Talk to a Doctor</Button>
    </section>
  );
}
