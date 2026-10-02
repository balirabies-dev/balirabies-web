"use client";
import LanguageSelector from "./language-selector";
import { unlocalizedPath } from "../lib/i18n/config";
import { useLocale } from "./locale-provider";
import { translateTree } from "../lib/i18n/translate";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Brand, Icon } from "./ui";
import { doctorHref } from "../lib/site";
export default function Header() {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const path = unlocalizedPath(usePathname());
  const menuButton = useRef<HTMLButtonElement>(null);
  return translateTree((
    <header
      className="container site-header glass-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="header-inner">
        <Brand />
        <nav
          id="main-nav"
          className={open ? "open" : ""}
          aria-label="Main navigation"
        >
          {[
            ["/", "Home"],
            ["/rabies-guide", "Rabies"],
            ["/treatment", "Treatment"],
            ["/rabies-guide/after-exposure", "After Exposure"],
            ["/faq", "FAQs"],
            ["/about", "About"],
          ].map(([url, label]) => (
            <Link
              key={url}
              href={url}
              onClick={() => setOpen(false)}
              aria-current={
                path === url || (url === "/treatment" && path.startsWith("/treatment/"))
                  ? "page"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href={doctorHref}
            className="button header-contact"
            onClick={() => setOpen(false)}
          >
            <Icon name="chat" size={18} />
            Contact Us
          </Link>
        </nav>
        <div className="header-controls">
          <LanguageSelector />
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="menu-toggle-label">{open ? "Close" : "Menu"}</span>{" "}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        </div>
      </div>
    </header>
  ), locale);
}
