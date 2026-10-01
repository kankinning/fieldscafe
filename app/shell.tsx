"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  ["/menu", "Menu"],
  ["/about", "Fields and OKLA Livana"],
  ["/events", "Events & catering"],
  ["/little-fields", "Little Fields"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header
      className={[
        path === "/" ? "on-hero" : "",
        scrolled ? "scrolled" : "",
        open ? "nav-is-open" : "",
      ].join(" ")}
    >
      <Link href="/" className="wordmark" aria-label="Fields Café home">
        <img
          src="/assets/fields-logo.svg"
          alt="FIELDS"
          width="200"
          height="52"
        />
      </Link>
      <button
        ref={menuButton}
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Explore"}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav id="nav" className={open ? "open" : ""} aria-label="Main navigation">
        {links.map(([url, label]) => (
          <Link
            key={url}
            href={url}
            aria-current={path === url ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          className="reserve-link"
          href="/booking"
          onClick={() => setOpen(false)}
        >
          Book a table
        </Link>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-invitation">
          <p className="eyebrow">YOUR PLACE, IN ALBANY</p>
          <p>
            Good things
            <br />
            <i>grow here.</i>
          </p>
          <a className="text-link light" href="/booking">
            Join us at Fields
          </a>
        </div>
        <div>
          <h2>Find us</h2>
          <a href="https://www.google.com/maps/search/?api=1&query=Fields+Cafe+4+Appian+Way+Albany">
            4 Appian Way, Albany
            <br />
            Auckland 0632
          </a>
          <a href="tel:+6494145888">09 414 5888</a>
          <a href="mailto:info@fieldscafe.co.nz">info@fieldscafe.co.nz</a>
          <a
            href="https://www.instagram.com/fieldscafe_albany/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram · @fieldscafe_albany
          </a>
        </div>
        <div>
          <h2>Make time</h2>
          <p>
            Monday — Friday
            <br />
            7am — 3pm
          </p>
          <p>
            Saturday — Sunday
            <br />
            8am — 4pm
          </p>
          <p className="small">
            Kitchen closes 2:10pm weekdays
            <br />
            and 2:30pm weekends.
          </p>
        </div>
      </div>
      <div className="footer-wordmark">
        <img src="/assets/fields-logo.svg" alt="" aria-hidden="true" />
      </div>
      <div className="footer-bottom">
        <span>A neighbourhood café by OKLA</span>
        <span>Stay, play & take away.</span>
        <a href="/staff">Staff sign in</a>
      </div>
    </footer>
  );
}
