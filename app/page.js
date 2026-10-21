import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import Compare from "@/components/Compare";
import Cta from "@/components/Cta";
import Process from "@/components/Process";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import { featuredSlugs, getProject, homeProcess, img, services, testimonials } from "@/data/site";

const instaPhotos = [
  img("1615874959474-d609969a20ed"),
  img("1617104551722-3b2d51366400"),
  img("1540518614846-7eded433c457"),
  img("1556228453-efd6c1ff04f6"),
  img("1600494603989-9650cf6ddd3d"),
  img("1565183997392-2f6f122e5912"),
];

const marqueeItems = ["Residential", "Kitchens", "Hospitality", "Workspaces", "Styling", "Renovation", "Bespoke Furniture"];

export default function HomePage() {
  const featured = featuredSlugs.map(getProject);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">Interior Design Studio · Est. 2014</span>
            <h1>
              <span className="line"><span>Spaces that</span></span>
              <span className="line"><span>feel like <em>home,</em></span></span>
              <span className="line"><span>only better.</span></span>
            </h1>
            <p className="lead">
              We design calm, characterful interiors. Natural materials, considered light and pieces that will still feel right in twenty years.
            </p>
            <div className="hero__actions">
              <Link href="/portfolio" className="btn btn--solid">
                Explore Projects <Arrow />
              </Link>
              <Link href="/about" className="link-arrow">
                Our Story
              </Link>
            </div>
            <div className="hero__meta">
              <div><strong data-count="240" data-suffix="+">0</strong><span>Projects</span></div>
              <div><strong data-count="12">0</strong><span>Years</span></div>
              <div><strong data-count="18">0</strong><span>Awards</span></div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__img-main">
              <Image src={img("1618221195710-dd6b41faaea6")} alt="Warm modern living room with terracotta accents" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
            <div className="hero__img-small">
              <Image src={img("1631679706909-1844bbd07221")} alt="Soft neutral lounge with round mirrors" fill sizes="(max-width: 900px) 40vw, 18vw" />
            </div>
            <div className="hero__badge" aria-hidden="true">
              <svg viewBox="0 0 130 130">
                <defs>
                  <path id="circle" d="M65,65 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0" />
                </defs>
                <text>
                  <textPath href="#circle">Design · Craft · Comfort · Living ·</textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container intro">
          <div className="intro__images">
            <div className="img-a reveal-img">
              <Image src={img("1618220179428-22790b461013")} alt="Mustard sideboard with plants and orange chair" fill sizes="(max-width: 900px) 78vw, 35vw" />
            </div>
            <div className="img-b reveal-img reveal-delay-2">
              <Image src={img("1567016432779-094069958ea5")} alt="Burnt orange sofa detail" fill sizes="(max-width: 900px) 46vw, 20vw" />
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">About the Studio</span>
            <h2>Design rooted in how you <em>truly</em> live.</h2>
            <p className="lead"> Interior0 is a small, multidisciplinary studio. We believe a beautiful home starts with listening.</p>
            <p className="muted">
              Every project begins with your rituals: morning coffee, Sunday guests, the corner where you read. Then we shape layout, light and material around them. The result looks effortless and works hard every day.
            </p>
            <div className="stats">
              <div><strong data-count="98" data-suffix="%">0</strong><span>Client referrals</span></div>
              <div><strong data-count="35">0</strong><span>Artisans &amp; makers</span></div>
              <div><strong data-count="6">0</strong><span>Cities served</span></div>
            </div>
            <Link href="/about" className="btn">
              Meet the Studio <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2>Services, <em>tailored</em> to every space.</h2>
            </div>
            <p className="muted">From a single room refresh to a full turnkey build, we bring the same care and attention to detail.</p>
          </div>
          <div className="services-grid">
            {services.slice(0, 4).map((s, i) => (
              <div key={s.slug} className={`service-card reveal${i ? ` reveal-delay-${i}` : ""}`}>
                <div className="service-card__bg">
                  <Image src={s.image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                </div>
                <span className="service-card__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.short}</p>
                <Link href={`/services#${s.slug}`} className="link-arrow">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2>Recent <em>projects</em></h2>
            </div>
            <Link href="/portfolio" className="link-arrow">
              View all projects
            </Link>
          </div>
          <div className="projects-grid">
            {featured.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                meta={`${p.type} · ${p.year}`}
                className={`p${i + 1} reveal${i % 2 ? " reveal-delay-2" : ""}`}
                sizes={i % 3 === 0 ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 900px) 100vw, 35vw"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">How We Work</span>
              <h2>A clear, <em>calm</em> process.</h2>
            </div>
            <p className="lead">No surprises, no jargon. Four considered stages take you from first conversation to the day you move in.</p>
          </div>
          <Process steps={homeProcess} />
        </div>
      </section>

      {/* Before / After */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Transformation</span>
              <h2>Before &amp; <em>after</em></h2>
            </div>
            <p className="muted">Drag the handle to see how a dated apartment became a warm, light-filled family room.</p>
          </div>
          <div className="reveal">
            <Compare src={img("1600210492486-724fe5c67fb0")} alt="Living room" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--sand">
        <div className="container testimonial-wrap">
          <div className="float-photo float-photo--left reveal-img" aria-hidden="true">
            <Image src={img("1583847268964-b28dc8f51f92")} alt="" fill sizes="15vw" />
          </div>
          <div className="float-photo float-photo--right reveal-img reveal-delay-2" aria-hidden="true">
            <Image src={img("1595526114035-0d45ed16cfbf")} alt="" fill sizes="13vw" />
          </div>
          <div className="reveal">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      {/* Instagram strip */}
      <section className="section">
        <div className="container">
          <div className="insta-head reveal">
            <div>
              <span className="eyebrow">Follow Along</span>
              <h2><em>Interior0</em></h2>
            </div>
            <a href="#" className="link-arrow">
              Follow on Instagram
            </a>
          </div>
          <div className="insta">
            {instaPhotos.map((src, i) => (
              <a key={src} href="#" className={`reveal${i % 3 ? ` reveal-delay-${i % 3}` : ""}`} aria-label={`Instagram post ${i + 1}`}>
                <Image src={src} alt="" fill sizes="(max-width: 1100px) 33vw, 16vw" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Start Your Project"
        before="Let's create something "
        accent="beautiful"
        after=" together."
        button="Book a Consultation"
        image={img("1615873968403-89e068629265")}
      />
    </>
  );
}
