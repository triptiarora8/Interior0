import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import Cta from "@/components/Cta";
import FaqSection from "@/components/FaqSection";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import { img, packages, services, servicesFaq, servicesProcess } from "@/data/site";

export const metadata = {
  title: "Services",
  description: "Residential design, kitchens and baths, commercial interiors, styling and renovation by Interior0",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title={<>Everything your space <em>needs.</em></>}
        lead="One studio for concept, design, build management and the final styling. A single point of contact for the whole journey."
        images={{ main: img("1600607687939-ce8a6c25118c"), small: img("1507089947368-19c1da9775ae"), alt: "Open-plan villa living room" }}
      />

      {/* Service rows */}
      <section style={{ paddingBottom: "var(--section)" }}>
        <div className="container">
          {services.map((s, i) => (
            <div key={s.slug} id={s.slug} className="service-row" style={{ scrollMarginTop: 100 }}>
              <div className="service-row__media reveal-img">
                <div className="service-row__main">
                  <Image src={s.image} alt={s.alt} fill sizes="(max-width: 900px) 66vw, 33vw" />
                </div>
                {s.extras.map((x) => (
                  <div key={x.src} className="service-row__thumb">
                    <Image src={x.src} alt={x.alt} fill sizes="(max-width: 900px) 33vw, 16vw" />
                  </div>
                ))}
              </div>
              <div className="reveal">
                <span className="service-row__num">{String(i + 1).padStart(2, "0")} —</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.description}</p>
                <ul className="check-list">
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn">
                  Enquire <Arrow />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">The Journey</span>
              <h2>From idea to <em>reveal.</em></h2>
            </div>
            <p className="lead">A typical full-home project takes 12–20 weeks. Here&apos;s what to expect along the way.</p>
          </div>
          <Process steps={servicesProcess} />
        </div>
      </section>

      {/* Pricing */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Packages</span>
              <h2>Ways to <em>work</em> with us.</h2>
            </div>
            <p className="muted">Transparent starting points. Every project gets a detailed, itemised proposal after the first consultation.</p>
          </div>
          <div className="pricing">
            {packages.map((p, i) => (
              <div key={p.name} className={`price-card${p.featured ? " price-card--featured" : ""} reveal${i ? ` reveal-delay-${i}` : ""}`}>
                {p.featured && <span className="price-card__tag">Most Popular</span>}
                <h4>{p.name}</h4>
                <p className="muted">{p.tagline}</p>
                <div className="price-card__price">
                  {p.price} <small>{p.unit}</small>
                </div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow="FAQ"
        before="Good "
        accent="questions."
        items={servicesFaq}
        image={img("1552321554-5fefe8c9ef14")}
        alt="Bright bathroom with plants"
      />

      <Cta
        eyebrow="Free Consultation"
        before="Ready to begin your "
        accent="project?"
        button="Book a Call"
        image={img("1554995207-c18c203602cb")}
      />
    </>
  );
}
