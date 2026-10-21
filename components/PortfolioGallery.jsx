"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function PortfolioGallery({ projects, categories }) {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="reveal">
        <div className="filters">
          {categories.map((c) => (
            <button key={c.key} className={filter === c.key ? "is-active" : undefined} onClick={() => setFilter(c.key)}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* keyed on the filter so the cards replay their entrance animation */}
      <div className="gallery" key={filter}>
        {visible.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            className={`gallery__item ${p.shape}`}
            sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"
            style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}
          />
        ))}
      </div>
    </>
  );
}
