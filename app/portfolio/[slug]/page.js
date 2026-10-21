import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import { getProject, projects, testimonials } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.intro };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const quote = project.testimonial != null ? testimonials[project.testimonial] : null;
  const [h1, h2, h3] = project.headline;
  // last gallery photo sits beside the brief; the rest form the gallery below
  const briefImage = project.gallery.at(-1);
  const galleryImages = project.gallery.slice(0, -1);
  const titleWords = project.title.split(" ");
  const lastWord = titleWords.pop();

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg">
          <Image src={project.cover} alt={project.title} fill priority sizes="100vw" />
        </div>
        <div className="container">
          <span className="eyebrow">Case Study · {project.type}</span>
          <h1>
            {titleWords.join(" ")} <em>{lastWord}</em>
          </h1>
        </div>
      </section>

      <div className="container">
        <div className="project-meta">
          <div className="reveal"><span>Location</span><strong>{project.location}, India</strong></div>
          <div className="reveal reveal-delay-1"><span>Area</span><strong>{project.area}</strong></div>
          <div className="reveal reveal-delay-2"><span>Scope</span><strong>{project.scope}</strong></div>
          <div className="reveal reveal-delay-3"><span>Completed</span><strong>{project.year}</strong></div>
        </div>
      </div>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">The Brief</span>
            <h2>
              {h1}
              <em>{h2}</em>
              {h3}
            </h2>
            <div className="brief-img reveal-img">
              <Image src={briefImage} alt={`${project.title} detail`} fill sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <p className="lead">{project.intro}</p>
            {project.story.map((para) => (
              <p key={para.slice(0, 24)} className="muted">
                {para}
              </p>
            ))}

            <p className="form-label" style={{ marginTop: 40 }}>Material Palette</p>
            <div className="palette">
              {project.palette.map((c) => (
                <div key={c.name} style={{ background: c.hex, color: c.light ? "#fff" : "var(--ink)" }}>
                  {c.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--section)" }}>
        <div className="container">
          <ProjectGallery images={galleryImages} title={project.title} />
        </div>
      </section>

      {quote && (
        <section className="section section--sand">
          <div className="container">
            <div className="testimonial reveal">
              <span className="eyebrow">Client Words</span>
              <div className="testimonial__mark">“</div>
              <blockquote>{quote.quote}</blockquote>
              <div className="testimonial__author">
                <Image src={quote.photo} alt="" width={56} height={56} />
                <div>
                  <strong>{quote.name}</strong>
                  <span>Client</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Link href={`/portfolio/${next.slug}`} className="next-project">
        <Image src={next.cover} alt="" fill sizes="100vw" />
        <div className="next-project__text">
          <span className="eyebrow">Next Project</span>
          <h2>{next.title}</h2>
        </div>
      </Link>
    </>
  );
}
