import { Button } from "./components/ui";
export default function NotFound() {
  return (
    <section className="container page-intro">
      <span className="eyebrow">PAGE NOT FOUND</span>
      <h1>Let’s get you back on track.</h1>
      <p>This page does not exist. Visit the guide or return home.</p>
      <Button href="/">Back to home</Button>
    </section>
  );
}
