import { isLocale, localizedHref } from "../lib/i18n/config";
import { translate, translateTree } from "../lib/i18n/translate";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, specialPages } from "../lib/content";
import { membershipPlans, sources, doctorHref } from "../lib/site";
import {
  Button,
  FAQs,
  ServiceCards,
  ContactBanner,
  Icon,
} from "../components/ui";
import ExposureGuide from "../components/exposure-guide";
import ComingSoon from "./coming-soon";
import RabiesData from "./rabies-data";
import StructuredData from "./structured-data";
import { absoluteUrl } from "../lib/seo";
export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string[]; lang: string }>;
}) {
  const { slug, lang } = await params;
  if (!isLocale(lang)) notFound();
  const path = slug.join("/");
  const article = articles[path];
  const data = article || specialPages[path];
  const showCareSidebar = article?.medical || path.startsWith("treatment");
  if (!data) notFound();
  if (path === "contact") return <ComingSoon label="Contact Us" locale={lang} />;
  const breadcrumbs = [
    { name: translate("Home", lang), path: "/" },
    ...(path.includes("/") ? [{ name: translate(path.startsWith("rabies-guide") ? "Rabies Guide" : "Treatment", lang), path: `/${path.split("/")[0]}` }] : []),
    { name: translate(data.eyebrow, lang), path: `/${path}` },
  ];
  return translateTree((
    <>
      <StructuredData data={{
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem", position: index + 1, name: crumb.name,
          item: absoluteUrl(localizedHref(crumb.path, lang)),
        })),
      }} />
      <div className="container page-intro">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          {path.includes("/") && (
            <>
              <Link href={`/${path.split("/")[0]}`}>
                {path.startsWith("rabies-guide") ? "Rabies Guide" : "Treatment"}
              </Link>
              <span>/</span>
            </>
          )}
          <span>{data.eyebrow}</span>
        </div>
        <span className="eyebrow">{data.eyebrow}</span>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
      </div>
      <div className="container page-body">
        {article && (
          <div className={showCareSidebar ? "article-layout" : "article-layout legal-document"}>
            <article>
              {article.sections.map((s) => (
                <section key={s.title}>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </section>
              ))}
              {article.medical && (
                <div className="source-note">
                  <strong>
                    General education, not individual medical advice.
                  </strong>
                  <p>
                    Based on <a href={sources[0].url}>WHO rabies guidance</a>,{" "}
                    <a href={sources[1].url}>vaccination guidance</a>, and{" "}
                    <a href={sources[2].url}>animal-bite guidance</a>. These are general educational references; no individual assessment or clinician review is claimed.
                  </p>
                  <Link href="/medical-disclaimer">
                    Read the medical disclaimer →
                  </Link>
                </div>
              )}
            </article>
            {showCareSidebar && <aside className="article-aside">
              <Icon name="chat" size={30} />
              <h3>You don’t have to work it out alone.</h3>
              <p>
                Prepare your questions and discuss your situation with a
                healthcare professional.
              </p>
              <Button href={doctorHref}>Talk to a Doctor</Button>
              <Link href="/exposure-guide" className="text-link">
                Prepare an exposure summary →
              </Link>
            </aside>}
          </div>
        )}
        {path === "rabies-guide" && (
          <section className="subsection">
            <h2>Find the information you need.</h2>
            <div className="link-grid">
              {Object.entries(articles)
                .filter(([key]) => key.startsWith("rabies-guide/"))
                .map(([key, value]) => (
                  <Link href={`/${key}`} key={key}>
                    <h3>{value.title}</h3>
                    <Icon name="arrow" />
                  </Link>
                ))}
            </div>
          </section>
        )}
        {path === "treatment" && (
          <>
            <ServiceCards />
            <section className="subsection">
              <h2>Request a conversation about care.</h2>
              <p>
                Our form is a preview. Live appointment requests are not
                available yet.
              </p>
              <Button href="/contact">Request Treatment</Button>
            </section>
          </>
        )}
        {path === "membership" && (
          <>
            <div className="notice">
              <strong>Membership is in development.</strong>
              <p>
                The following concepts are drafts for discussion. Duration,
                prices, support priority, benefits, and activation terms are not
                approved. No purchase or enrollment is available.
              </p>
            </div>
            <div className="plan-grid">
              {membershipPlans.map((plan) => (
                <section className="plan" key={plan.name}>
                  <span className="eyebrow">{plan.status}</span>
                  <h2>{plan.name}</h2>
                  <p>{plan.audience}</p>
                  <strong className="plan-price">Details coming soon</strong>
                  <ul className="check-list">
                    {plan.benefits.map((b) => (
                      <li key={b}>
                        <Icon name="check" size={18} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact">Ask about membership</Button>
                </section>
              ))}
            </div>
            <section className="subsection">
              <h2>What membership would — and wouldn’t — mean.</h2>
              <div className="table-scroll">
                <table>
                  <caption>
                    Proposed access comparison · subject to approval
                  </caption>
                  <thead>
                    <tr>
                      <th>Care access</th>
                      <th>Without membership</th>
                      <th>Proposed membership</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Request consultation or treatment</th>
                      <td>Yes, subject to availability</td>
                      <td>Yes, subject to availability</td>
                    </tr>
                    <tr>
                      <th>Treatment costs</th>
                      <td>Charged separately</td>
                      <td>Charged separately; proposed member pricing</td>
                    </tr>
                    <tr>
                      <th>Ongoing support benefits</th>
                      <td>Confirm per service</td>
                      <td>Plan terms pending</td>
                    </tr>
                    <tr>
                      <th>Insurance or all-inclusive coverage</th>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Vaccines, immunoglobulin, clinic fees, transport, and other
                medical expenses are not represented as included. Final
                exclusions and any general consultation entitlement must be
                confirmed in writing.
              </p>
              <h3>How activation will work</h3>
              <p>
                Inquire about the final plan, review its approved terms and
                costs, then wait for explicit enrollment confirmation from the
                team. No activation, payment, or priority support is available
                in this preview.
              </p>
            </section>
            <FAQs />
          </>
        )}
        {path === "rabies-in-bali" && <RabiesData locale={lang} />}
        {path === "exposure-guide" && <ExposureGuide />}
        {path === "faq" && <FAQs />}
        {path === "sources" && (
          <article className="source-list">
            {sources.map((s) => (
              <section key={s.url}>
                <h2>
                  <a href={s.url}>{s.title} ↗</a>
                </h2>
                <p>{s.publisher} · reference</p>
              </section>
            ))}
            <section>
              <h2>How to use these resources</h2>
              <p>
                Clinical protocols and individual circumstances differ. These
                pages intentionally do not calculate risk, prescribe a vaccine
                schedule, or replace professional advice. Client clinical review
                is still required before launch.
              </p>
            </section>
          </article>
        )}
      </div>
      <ContactBanner />
    </>
  ), lang);
}
