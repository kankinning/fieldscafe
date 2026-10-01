"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
const links = [
  ["/menu", "Menu"],
  ["/about", "Our story"],
  ["/events", "Events & catering"],
  ["/little-fields", "Little Fields"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header>
      <Link href="/" className="wordmark" aria-label="Fields Café home">
        <img src="/assets/fields-logo.svg" alt="FIELDS" />
      </Link>
      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="nav" className={open ? "open" : ""} aria-label="Main navigation">
        {links.map(([url, label]) => (
          <a
            key={url}
            href={url}
            aria-current={path === url ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a className="button dark" href="/booking">
          Book a table
        </a>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <p className="footer-title">
          Good things
          <br />
          grow here.
        </p>
        <div>
          <h2>Find your Fields</h2>
          <a href="https://www.google.com/maps/search/?api=1&query=Fields+Cafe+4+Appian+Way+Albany">
            4 Appian Way, Albany
            <br />
            Auckland 0632
          </a>
          <a href="tel:+6494145888">09 414 5888</a>
        </div>
        <div>
          <h2>Stay a little longer</h2>
          <a href="/booking">Book a table</a>
          <a href="/events">Plan a gathering</a>
          <a href="/little-fields">Discover Little Fields</a>
          <a
            href="https://www.instagram.com/fieldscafe_albany/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram · @fieldscafe_albany
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Fields Café · A neighbourhood café by OKLA</span>
        <a href="/staff">Staff sign in</a>
        <span>Stay, play & take away.</span>
      </div>
    </footer>
  );
}
