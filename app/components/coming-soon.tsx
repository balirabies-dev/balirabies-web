import Image from "next/image";
import { Button } from "./ui";

export default function ComingSoon({ label }: { label: string }) {
  return (
    <section className="coming-soon-page" aria-labelledby="coming-soon-heading">
      <Image
        src="/images/bali.jpg"
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
  );
}
