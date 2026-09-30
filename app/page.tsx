import Image from "next/image";
import Link from "next/link";
import ScrollReveals from "./components/scroll-reveals";
import { Button, Icon, ServiceCards, FAQs } from "./components/ui";
import { doctorHref } from "./lib/site";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <ScrollReveals>
      <section className="hero landing-hero" aria-labelledby="hero-heading">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="tiny-line" /> CARE IN BALI
            </span>
            <h1 id="hero-heading">
              Make Bali home.
              <br />
              Keep care <em>close.</em>
            </h1>
            <p>
              Rabies care and doctor support for your time in Bali.
            </p>
            <div className="hero-actions">
              <Button href={doctorHref}>Talk to a Doctor</Button>
              <Link className="hero-care-link" href="#our-care">
                Explore care <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/bali.jpg"
            alt="Lush tropical gardens and Balinese temple architecture beside the water"
            fill
            preload
            sizes="100vw"
          />
        </div>
        <div className="container hero-bottom">
          <span className="hero-location">
            <span className="location-dot" /> BALI, INDONESIA
          </span>
          <Link href="#our-care" className="hero-discover">
            Discover <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </section>
      <section id="our-care" className="section container home-care">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HERE FOR YOU</span>
            <h2>Care for your <em>island life.</em></h2>
          </div>
          <p>For residents and travelers. No membership needed.</p>
        </div>
        <ServiceCards />
      </section>
      <div className="container island-divider" aria-hidden="true">
        <span />
      </div>
      <section className="section container faq-section home-faq">
        <div>
          <span className="eyebrow">GOOD TO KNOW</span>
          <h2>A little <em>clarity.</em></h2>
          <Link href="/faq" className="text-link">
            All questions <Icon name="arrow" size={18} />
          </Link>
        </div>
        <FAQs limit={3} />
      </section>
      <section className="contact-banner container home-contact">
        <div>
          <span className="eyebrow">BALI, WITH PEACE OF MIND</span>
          <h2>Care starts with<br /><em>a conversation.</em></h2>
        </div>
        <Button href={doctorHref}>Talk to a Doctor</Button>
      </section>
    </ScrollReveals>
  );
}
