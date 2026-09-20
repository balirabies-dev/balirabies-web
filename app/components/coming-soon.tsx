import Image from "next/image";
import AnimalCompanions from "./animal-companions";

type ComingSoonProps = {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  footer?: string;
};

export default function ComingSoon({
  title = "Coming soon",
  imageSrc = "/images/bali.jpg",
  imageAlt = "A Balinese temple reflected in a tranquil lake, surrounded by tropical greenery",
  footer = "BALI, INDONESIA",
}: ComingSoonProps) {
  return (
    <main className="coming-soon">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="bali-image"
      />
      <div className="image-overlay" aria-hidden="true" />
      <header className="brand" aria-label="BaliRabies">
        <div>
          <span className="brand-name">Bali<span>Rabies</span></span>
        </div>
      </header>
      <section className="message" aria-labelledby="headline">
        <h1 id="headline" className="coming-title"><span>{title}</span></h1>
      </section>
      <AnimalCompanions />
      <footer>
        <span>{footer}</span>
      </footer>
    </main>
  );
}
