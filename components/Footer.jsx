import Link from "next/link";
import { navLinks, studio } from "@/data/site";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Link href="/" className="logo">
              Interior0
            </Link>
            <p>A boutique interior design studio creating warm, timeless spaces for homes and businesses.</p>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              {navLinks.slice(1).map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li>{studio.addressLine1}</li>
              <li>{studio.city}</li>
              <li>
                <a href={studio.phoneHref}>{studio.phone}</a>
              </li>
              <li>
                <a href={`mailto:${studio.email}`}>{studio.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Newsletter</h5>
            <p>Design notes, new projects and studio news. Once a month, never spam.</p>
            <Newsletter />
          </div>
        </div>
        <div className="footer__big">Interior0</div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {studio.name}. All rights reserved.
          </span>
          <div className="socials">
            {studio.socials.map((s) => (
              <a key={s.label} href={s.href}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
