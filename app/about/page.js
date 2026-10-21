import Image from "next/image";
import Cta from "@/components/Cta";
import PageHero from "@/components/PageHero";
import { img, team } from "@/data/site";

export const metadata = {
  title: "About",
  description: "Meet the people and philosophy behind Interior0.",
};

const values = [
  {
    title: "Honest Materials",
    text: "Solid wood, natural stone, lime plaster and linen. Materials that age gracefully and get better with time.",
    icon: (
      <>
        <circle cx="28" cy="28" r="26" />
        <path d="M28 10c8 6 8 30 0 36M28 10c-8 6-8 30 0 36M4 28h48" />
      </>
    ),
  },
  {
    title: "Light First",
    text: "We plan every room around natural light, then layer lamps and fixtures for warmth after dark.",
    icon: (
      <>
        <circle cx="28" cy="28" r="10" />
        <path d="M28 2v8M28 46v8M2 28h8M46 28h8M9.6 9.6l5.7 5.7M40.7 40.7l5.7 5.7M9.6 46.4l5.7-5.7M40.7 15.3l5.7-5.7" />
      </>
    ),
  },
  {
    title: "Made for Life",
    text: "Beauty that works. Spaces should be easy to clean, kind to children and pets, and comfortable every day.",
    icon: (
      <>
        <path d="M6 50V22L28 6l22 16v28z" />
        <path d="M20 50V32h16v18" />
      </>
    ),
  },
];

const studioGallery = [
  { src: img("1524758631624-e2822e304c36"), caption: "The lounge" },
  { src: img("1497366216548-37526070297c"), caption: "Drawing studio" },
  { src: img("1513694203232-719a280e022f"), caption: "Sample library" },
  { src: img("1600585154340-be6161a56a0c"), caption: "The studio, after hours" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title={<>Designing with <em>heart</em> &amp; intent.</>}
        lead="Twelve years, 240+ projects and one belief that hasn't changed: the best rooms are made for the people living in them."
        images={{ main: img("1556228453-efd6c1ff04f6"), small: img("1618220179428-22790b461013"), alt: "Sunlit living room with blush armchairs" }}
      />

      <div className="page-hero__image reveal-img">
        <div className="page-hero__parallax" data-parallax="0.1">
          <Image src={img("1598928506311-c55ded91a20c")} alt="Bright living room with coffered ceiling" fill priority sizes="100vw" />
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container split split--center">
          <div className="reveal">
            <span className="eyebrow">Our Story</span>
              <h2>From a single room to a studio of <em>makers.</em></h2>
              <p className="lead">Interior0 began in 2014 with one living room, a borrowed sketchbook and a lot of curiosity.</p>
            <p className="muted">
              Founder Tripti Sharma trained as an architect. She left a large practice wanting to work closer to the people she designed for. That first living room led to a kitchen, then a whole home, then a boutique hotel.
            </p>
            <p className="muted">
              Today we are a team of designers, architects and project managers. We work with a close network of carpenters, weavers, metalworkers and stone masons. We still take on a small number of projects each year, so each one gets the attention it deserves.
            </p>
            <div className="signature">Tripti Sharma</div>
            <span className="muted">Founder &amp; Principal Designer</span>
          </div>
          <div className="split__img reveal-img">
            <Image src={img("1600494603989-9650cf6ddd3d")} alt="Green walled study with natural light" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Philosophy</span>
              <h2>What we <em>believe</em> in.</h2>
            </div>
            <p className="muted">Three principles guide every decision, from the first sketch to the final styled shelf.</p>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <div key={v.title} className={`value reveal${i ? ` reveal-delay-${i}` : ""}`}>
                <svg className="value__icon" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                  {v.icon}
                </svg>
                <h4>{v.title}</h4>
                <p className="muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section section--dark">
        <div className="container">
          <div className="stats" style={{ borderColor: "rgba(246,242,236,.15)", margin: 0 }}>
            <div><strong data-count="240" data-suffix="+">0</strong><span className="muted">Completed projects</span></div>
            <div><strong data-count="12">0</strong><span className="muted">Years of practice</span></div>
            <div><strong data-count="18">0</strong><span className="muted">Design awards</span></div>
          </div>
        </div>
      </section>

      {/* Studio gallery */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Inside the Studio</span>
              <h2>Where ideas take <em>shape.</em></h2>
            </div>
            <p className="muted">Our Gurugram studio is part library, part workshop: a place for samples, sketches and long conversations over chai.</p>
          </div>
          <div className="studio-gallery">
            {studioGallery.map((g, i) => (
              <figure key={g.src} className={`sg-${i + 1} reveal-img${i ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}>
                <Image src={g.src} alt={g.caption} fill sizes={i === 0 ? "(max-width: 900px) 100vw, 40vw" : "(max-width: 900px) 50vw, 30vw"} />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">The Team</span>
              <h2>The people behind the <em>work.</em></h2>
            </div>
            <p className="muted">A small, close-knit team. You&apos;ll know each of us by name.</p>
          </div>
          <div className="team">
            {team.map((m, i) => (
              <div key={m.name} className={`team-member reveal${i ? ` reveal-delay-${i}` : ""}`}>
                <div className="team-member__img">
                  <Image src={m.photo} alt={m.name} fill sizes="(max-width: 1100px) 50vw, 25vw" />
                </div>
                <h4>{m.name}</h4>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="section section--sand" style={{ padding: "80px 0" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 36 }}>As Featured In</p>
          <div className="press reveal">
            <span>Architectural Digest</span>
            <span className="sans">ELLE DECOR</span>
            <span><em style={{ color: "inherit" }}>Vogue Living</em></span>
            <span className="sans">DWELL</span>
            <span>House &amp; Garden</span>
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Work With Us"
        before="Your story, "
        accent="beautifully"
        after=" told."
        button="Start a Conversation"
        image={img("1616486338812-3dadae4b4ace")}
      />
    </>
  );
}
