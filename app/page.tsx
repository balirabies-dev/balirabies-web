import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Icon,
  Urgent,
  ServiceCards,
  FAQs,
  ContactBanner,
} from "./components/ui";
import { doctorHref } from "./lib/site";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="tiny-line" /> YOUR ISLAND. YOUR LIFE. YOUR CARE.
          </span>
          <h1>
            Make Bali home.
            <br />
            Keep care <em>close.</em>
          </h1>
          <p>
            Personal doctor support, rabies treatment, and follow-up care for
            your life in Bali.
          </p>
          <div className="hero-actions">
            <Button href={doctorHref}>Talk to a Doctor</Button>
            <Button secondary href="/treatment">
              Explore Our Care
            </Button>
          </div>
          <div className="hero-assurance">
            <Icon name="shield" size={20} />
            <span>
              For residents & travelers <i /> No membership required
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/bali.jpg"
            alt="Lush tropical gardens and Balinese temple architecture beside the water"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <div className="image-caption">
            <span className="location-dot" /> BALI, INDONESIA
          </div>
          <div className="floating-note">
            <span className="icon-box">
              <Icon name="home" />
            </span>
            <div>
              <strong>A little more peace of mind.</strong>
              <span>Wherever you call home in Bali.</span>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Urgent />
      </div>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THOUGHTFUL CARE, MADE SIMPLE</span>
            <h2>
              Here for the planned.
              <br />
              And the unexpected.
            </h2>
          </div>
          <p>
            From preparing for your stay to navigating an animal exposure, find
            a clear path to care.
          </p>
        </div>
        <ServiceCards />
        <div className="follow-up">
          <Icon name="check" size={18} />
          <span>
            Care doesn’t stop at the first visit. Ask us about treatment
            coordination and follow-up.
          </span>
          <Link href="/treatment">
            How we help <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="how-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A CLEAR PATH FORWARD</span>
              <h2>
                Less uncertainty.
                <br />
                One step at a time.
              </h2>
            </div>
            <Link className="text-link" href="/contact">
              Start a conversation <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="steps">
            {[
              [
                "Reach out",
                "Tell us what brings you here. You don’t need to have all the answers.",
              ],
              [
                "Talk it through",
                "Discuss your situation and questions with a doctor.",
              ],
              [
                "Arrange your care",
                "Confirm the right next steps, location, and availability.",
              ],
              [
                "Stay on track",
                "Keep your care plan and follow-up appointments close.",
              ],
            ].map(([title, text], i) => (
              <div key={title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container membership-feature">
        <div className="membership-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="member-card">
            <div className="member-card-top">
              <span>✚ BaliRabies</span>
              <Icon name="sun" />
            </div>
            <span className="member-label">A LITTLE MORE PEACE OF MIND</span>
            <h3>
              At home
              <br />
              in Bali.
            </h3>
            <div className="member-card-bottom">
              <span>MEMBERSHIP CONCEPT</span>
              <span>BALI · ID</span>
            </div>
          </div>
          <span className="art-caption">Made for your chapter in Bali.</span>
        </div>
        <div>
          <span className="eyebrow">
            STAY A LITTLE LONGER. FEEL A LITTLE CLOSER.
          </span>
          <h2>
            Your Bali life.
            <br />
            With care built in.
          </h2>
          <p>
            For those who call the island home, explore ongoing support and a
            familiar place to turn when questions come up.
          </p>
          <ul className="check-list">
            <li>
              <Icon name="check" size={18} /> Support navigating rabies-related
              care
            </li>
            <li>
              <Icon name="check" size={18} /> Treatment coordination and
              follow-up
            </li>
            <li>
              <Icon name="check" size={18} /> Proposed member pricing on
              treatment
            </li>
          </ul>
          <Button href="/membership">Discover Membership</Button>
          <small className="fine-print">
            Plans are being finalized. Treatment is charged separately.
            <br />
            Membership is not health insurance.
          </small>
        </div>
      </section>
      <section className="resources-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                KNOW A LITTLE. FEEL MORE PREPARED.
              </span>
              <h2>Your guide to safer island living.</h2>
            </div>
            <Link href="/rabies-guide" className="text-link">
              Explore the guide <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="resource-grid">
            {[
              [
                "01",
                "BEFORE EXPOSURE",
                "A little preparation goes a long way.",
                "Practical prevention and vaccination considerations.",
                "/rabies-guide/before-exposure",
                "sun",
              ],
              [
                "02",
                "AFTER EXPOSURE",
                "A bite or scratch? Know what’s next.",
                "First steps and when to seek professional care.",
                "/rabies-guide/after-exposure",
                "shield",
              ],
              [
                "03",
                "YOUR NEXT STEP",
                "Make sense of what happened.",
                "Prepare an exposure summary to discuss with a doctor.",
                "/exposure-guide",
                "chat",
              ],
            ].map(([n, label, title, text, href, icon]) => (
              <Link
                className={`resource-card resource-${n}`}
                href={href}
                key={n}
              >
                <div className="resource-art">
                  <Icon name={icon} size={56} />
                  <span>{n}</span>
                </div>
                <div className="resource-body">
                  <span className="eyebrow">{label}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="text-link">
                    Read more <Icon name="arrow" size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section container values">
        <div>
          <span className="eyebrow">CARE THAT MAKES SENSE</span>
          <h2>
            A clearer way
            <br />
            to find your care.
          </h2>
        </div>
        {[
          [
            "Clear information",
            "Accessible explanations, with trusted sources you can read for yourself.",
          ],
          [
            "Your care, your choice",
            "Explore treatment with or without membership. No account needed.",
          ],
          [
            "Practical next steps",
            "Prepare for a conversation and understand what needs to be confirmed.",
          ],
        ].map(([t, p]) => (
          <div key={t}>
            <Icon name="check" />
            <h3>{t}</h3>
            <p>{p}</p>
          </div>
        ))}
      </section>
      <section className="section container faq-section">
        <div>
          <span className="eyebrow">A LITTLE MORE CLARITY</span>
          <h2>
            Good questions.
            <br />
            Clear answers.
          </h2>
          <Link href="/faq" className="text-link">
            See all questions <Icon name="arrow" size={18} />
          </Link>
        </div>
        <FAQs limit={4} />
      </section>
      <ContactBanner />
    </>
  );
}
