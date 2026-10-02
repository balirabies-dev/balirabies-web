import { isLocale, localizedHref } from "../lib/i18n/config";
import { translate, translateTree } from "../lib/i18n/translate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Icon, FAQs } from "../components/ui";
import { doctorHref, site } from "../lib/site";
import { biteSteps, quickLinks } from "../lib/home";
import RabiesTrends from "../components/rabies-trends";
import { RabiesStats } from "../components/rabies-data";
import BaliMap from "../components/bali-map";
import heroImage from "../assets/bali-hero.webp";
import { absoluteUrl, pageMetadata } from "../lib/seo";
import StructuredData from "../components/structured-data";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return pageMetadata({
    path: "/", locale: lang,
    title: lang === "id" ? "Informasi Rabies untuk Wisatawan di Bali" : "Rabies Information for Travelers in Bali",
    description: translate("Clear, practical information about rabies in Bali: prevention, animal bites and scratches, vaccination, and how to seek treatment.", lang),
  });
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const whatsappReady = doctorHref.startsWith("https://wa.me/");
  return translateTree((
    <>
      <StructuredData data={{
        "@context": "https://schema.org", "@type": "WebSite",
        "@id": `${absoluteUrl(localizedHref("/", lang))}#website`,
        name: site.name, url: absoluteUrl(localizedHref("/", lang)), inLanguage: lang,
        description: translate("Clear, practical information about rabies in Bali: prevention, animal bites and scratches, vaccination, and how to seek treatment.", lang),
      }} />
      <section className="hero landing-hero traveler-hero" aria-labelledby="hero-heading">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Rabies information for travelers in Bali</span>
            <h1 id="hero-heading">Explore Bali<br />with Confidence</h1>
            <p>Get clear, practical information about rabies — what to do after an animal bite or scratch, the risks in Bali, and how to get the right treatment.</p>
            <div className="hero-actions">
              <Button href="/rabies-guide/after-exposure">I’ve Been Bitten or Scratched</Button>
              <Link className="hero-care-link" href="#explore-rabies">Explore rabies information <Icon name="arrow" size={18} /></Link>
            </div>
            <ul className="hero-trust" aria-label="About this information">
              {['Evidence-based information', 'For travelers in Bali', 'Independent & educational'].map((point) => <li key={point}><Icon name="check" size={16} />{point}</li>)}
            </ul>
          </div>
        </div>
        <div className="hero-visual"><Image src={heroImage} alt="Balinese temple beside a lake, surrounded by tropical greenery" fill preload sizes="100vw" /></div>
        <div className="container hero-bottom"><span className="hero-location">Bali, Indonesia</span><Link href="#explore-rabies" className="hero-discover">Find your next step ↓</Link></div>
      </section>

      <section id="explore-rabies" className="section container quick-access" aria-labelledby="quick-access-heading">
        <div className="section-heading"><div><span className="eyebrow">Start here</span><h2 id="quick-access-heading">Find the information you need.</h2></div><p>Before your trip or after an unexpected encounter — a clear next step.</p></div>
        <div className="quick-access-grid">
          {quickLinks.map((card, index) => <Link className="quick-access-card" href={card.href} key={card.title}><span className="access-number">0{index + 1}</span><h3>{card.title}</h3><p>{card.text}</p><span className="text-link">{card.cta}<Icon name="arrow" size={18} /></span></Link>)}
        </div>
      </section>

      <section className="bali-data-section" aria-labelledby="bali-data-heading">
        <div className="section container">
          <div className="data-intro"><div><span className="eyebrow">Rabies in Bali</span><h2 id="bali-data-heading">Rabies remains a public health concern in Bali.</h2></div><div><p>Rabies continues to be present in Bali, with tens of thousands of reported bites from animals capable of transmitting rabies each year.</p><p>The snapshot for 1 January–4 September 2026 reports 51,011 animal-bite exposures, 375 confirmed cases in animals, 37,903 vaccine administrations, and seven deaths.</p><p>For travelers, an animal bite or scratch should always be taken seriously. Prompt wound washing and medical assessment can be critical after a potential exposure.</p><Link className="text-link" href="/rabies-in-bali">See the latest data <Icon name="arrow" size={18} /></Link></div></div>
          <RabiesStats locale={lang} />
          <div className="map-heading"><div><span className="eyebrow">Bali map</span><h3>Rabies exposure occurs across Bali.</h3><p>Explore the island’s regencies and cities. Explore reported animal-bite exposures by regency and city, based on the 4 September 2026 snapshot.</p></div><Link className="text-link" href="/rabies-in-bali#regional-data">Explore the Map &amp; Trends <Icon name="arrow" size={18} /></Link></div>
          <BaliMap />
          <RabiesTrends locale={lang} />
        </div>
      </section>

      <section className="section container bite-guide" aria-labelledby="bite-guide-heading">
        <div className="section-heading"><div><span className="eyebrow">What to do after a bite or scratch</span><h2 id="bite-guide-heading">Quick Guide: 5 Key Steps</h2></div><p>Acting early can make a big difference.</p></div>
        <ol className="bite-steps">{biteSteps.map((step, index) => <li key={step.label}><span className="step-index">0{index + 1}</span><div><span className="step-label">{step.label}</span><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        <div className="guide-actions"><Button href="/rabies-guide/after-exposure">See Full Guide</Button><p>Seek medical attention promptly. Do not wait for symptoms or an online response.</p></div>
      </section>

      <section className="container traveler-contact" aria-labelledby="traveler-contact-heading">
        <div><span className="eyebrow">Travelers, you’re not alone</span><h2 id="traveler-contact-heading">Need rabies vaccination<br />or immunoglobulin in Bali?</h2><p>If you have been bitten or scratched while in Bali, our team can help you understand your treatment options and arrange access to rabies vaccination or rabies immunoglobulin when medically indicated.</p><p>We can also assist travelers who need post-exposure prophylaxis (PEP) after an animal exposure.</p></div>
        <div className="traveler-contact-action"><Button href={doctorHref}>{whatsappReady ? "Contact Us on WhatsApp" : "Contact Us"}</Button><p>{site.available24Hours ? "Quick response • Available 24/7" : "Response hours and treatment availability to be confirmed"}</p></div>
      </section>

      <section className="section container pre-travel" aria-labelledby="pre-travel-heading">
        <div><span className="eyebrow">Before you travel</span><h2 id="pre-travel-heading">Consider rabies vaccination before you travel.</h2></div><div><p>Pre-exposure prophylaxis (PrEP) may be recommended for travelers whose activities or itinerary could put them at increased risk of rabies exposure, particularly when access to prompt medical care may be limited.</p><p>PrEP does not eliminate the need for medical assessment or post-exposure treatment after a bite or scratch.</p><Button href="/rabies-guide/before-exposure" secondary>Learn About Pre-Exposure Vaccination</Button></div>
      </section>

      <section className="section container faq-section traveler-faq" aria-labelledby="faq-heading"><div><span className="eyebrow">Common questions</span><h2 id="faq-heading">A little clarity before your next step.</h2><Link href="/faq" className="text-link">View all FAQs <Icon name="arrow" size={18} /></Link></div><FAQs limit={3} /></section>
      <div className="container home-disclaimer"><strong>Medical information, with context.</strong><p>BaliRabies provides general education, not individualized medical advice. If you have been bitten, scratched, or otherwise exposed to a potentially rabid animal, seek medical attention promptly.</p><Link className="text-link" href="/medical-disclaimer">Read the medical disclaimer <Icon name="arrow" size={18} /></Link></div>
    </>
  ), lang);
}
