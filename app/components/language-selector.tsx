"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { languages, localizedHref, type Locale } from "../lib/i18n/config";
import { useLocale } from "./locale-provider";

export default function LanguageSelector() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const options = useRef<(HTMLButtonElement | null)[]>([]);
  const label = locale === "id" ? "Pilih bahasa" : "Choose language";

  useEffect(() => {
    if (!open) return;
    options.current[languages.findIndex((language) => language.code === locale)]?.focus();
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !container.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open, locale]);

  function chooseLanguage(next: Locale) {
    setOpen(false);
    trigger.current?.focus();
    if (next !== locale) {
      router.push(localizedHref(pathname, next) + window.location.search + window.location.hash);
    }
  }

  return (
    <div ref={container} className="language-selector"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          event.stopPropagation();
          setOpen(false);
          trigger.current?.focus();
        }
      }}>
      <button ref={trigger} type="button" className="language-trigger"
        aria-label={`${label}: ${languages.find((language) => language.code === locale)?.label}`}
        aria-haspopup="menu" aria-expanded={open} aria-controls={menuId}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
          }
        }}>
        <span>{languages.find((language) => language.code === locale)?.short}</span>
        <svg className="language-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <div id={menuId} className="language-menu" role="menu" aria-label={label}
        onKeyDown={(event) => {
          const current = options.current.findIndex((option) => option === document.activeElement);
          let next = current;
          if (event.key === "ArrowDown") next = (current + 1) % languages.length;
          else if (event.key === "ArrowUp") next = (current - 1 + languages.length) % languages.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = languages.length - 1;
          else return;
          event.preventDefault();
          options.current[next]?.focus();
        }}>
        {languages.map((language, index) => <button key={language.code} type="button"
          ref={(element) => { options.current[index] = element; }}
          role="menuitemradio" aria-checked={locale === language.code} tabIndex={-1}
          lang={language.code} onClick={() => chooseLanguage(language.code)}>
          <span>{language.label}</span>
          <span className="language-check" aria-hidden="true">{locale === language.code ? "✓" : ""}</span>
        </button>)}
      </div>}
    </div>
  );
}
