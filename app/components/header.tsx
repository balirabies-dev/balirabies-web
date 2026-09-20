"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Brand, Icon } from "./ui";
import { doctorHref } from "../lib/site";
export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-nav"
          className={open ? "open" : ""}
          aria-label="Main navigation"
        >
          {[
            ["/", "Home"],
            ["/rabies-guide", "Rabies Guide"],
            ["/treatment", "Treatment"],
            ["/membership", "Membership"],
            ["/about", "About"],
          ].map(([url, label]) => (
            <Link
              key={url}
              href={url}
              onClick={() => setOpen(false)}
              aria-current={
                path === url || (url !== "/" && path.startsWith(url))
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
            Talk to a Doctor
          </Link>
        </nav>
      </div>
    </header>
  );
}
