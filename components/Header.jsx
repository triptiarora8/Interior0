"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, studio } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  // Project pages open on a dark full-bleed photo, so the header starts light
  const light = pathname.startsWith("/portfolio/");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 400);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const classes = ["header", light && "header--light", scrolled && "is-scrolled", hidden && !menuOpen && "is-hidden"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={classes}>
        <div className="container">
          <Link href="/" className="logo">
            Interior0
          </Link>
          <nav className="nav">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : undefined}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn">
              Let&apos;s Talk
            </Link>
          </nav>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className="mobile-menu" aria-hidden={!menuOpen}>
        {[...navLinks, { href: "/contact", label: "Contact" }].map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
            {l.label}
          </Link>
        ))}
        <div className="mobile-menu__foot">
          {studio.email} &nbsp;·&nbsp; {studio.phone}
        </div>
      </div>
    </>
  );
}
