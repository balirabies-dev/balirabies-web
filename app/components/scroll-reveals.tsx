"use client";

import { useEffect, useRef } from "react";

const targets = [
  ".section-heading",
  ".service-grid > *",
  ".follow-up",
  ".steps > *",
  ".membership-feature > *",
  ".resource-grid > *",
  ".values > *",
  ".faq-section > div:first-child",
  ".faqs > details",
  ".contact-banner",
].join(",");

export default function ScrollReveals({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = root.current;
    if (!container || !("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Map<Element, Animation>();
    let observer: IntersectionObserver | undefined;

    const stop = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };

    const start = () => {
      stop();
      if (preference.matches) return;

      observer = new IntersectionObserver((entries) => {
        const siblings = new Map<Element | null, number>();
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer?.unobserve(entry.target);

          // Never hide a focused control or replay content when scrolling upward.
          if (entry.boundingClientRect.top < 0 || entry.target.matches(":focus-within")) continue;

          const parent = entry.target.parentElement;
          const index = siblings.get(parent) ?? 0;
          siblings.set(parent, index + 1);
          const animation = entry.target.animate(
            [
              { opacity: 0, translate: "0 22px" },
              { opacity: 1, translate: "0 0" },
            ],
            {
              duration: 620,
              delay: Math.min(index * 75, 225),
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            },
          );
          animations.set(entry.target, animation);
          animation.onfinish = () => animations.delete(entry.target);
        }
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

      container.querySelectorAll(targets).forEach((element) => {
        // Content is visible by default, including without JS or on restored scroll positions.
        if (element.getBoundingClientRect().top >= window.innerHeight) observer?.observe(element);
      });
    };

    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest(targets);
      if (target) {
        observer?.unobserve(target);
        animations.get(target)?.cancel();
        animations.delete(target);
      }
    };

    start();
    preference.addEventListener("change", start);
    container.addEventListener("focusin", revealFocused);
    window.addEventListener("beforeprint", stop);
    return () => {
      stop();
      preference.removeEventListener("change", start);
      container.removeEventListener("focusin", revealFocused);
      window.removeEventListener("beforeprint", stop);
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
