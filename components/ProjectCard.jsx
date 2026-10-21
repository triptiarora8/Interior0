import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, meta, className = "", sizes = "(max-width: 900px) 100vw, 50vw", style }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className={`project-card ${className}`} style={style}>
      <div className="project-card__img">
        <Image src={project.cover} alt={project.title} fill sizes={sizes} />
      </div>
      <div className="project-card__info">
        <h3>{project.title}</h3>
        <span>{meta ?? `${project.type} · ${project.location}`}</span>
      </div>
    </Link>
  );
}
