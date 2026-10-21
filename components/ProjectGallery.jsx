"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Layout pattern for the four gallery images: full, half, half, full
const layout = ["full", "half", "half", "full"];

export default function ProjectGallery({ images, title }) {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="project-gallery">
        {images.map((src, i) => {
          const shape = layout[i % layout.length];
          return (
            <figure
              key={src + i}
              className={`${shape} reveal-img`}
              onClick={() => setOpen(src)}
              role="button"
              tabIndex={0}
              aria-label={`Enlarge image ${i + 1}`}
              onKeyDown={(e) => e.key === "Enter" && setOpen(src)}
            >
              <Image
                src={src}
                alt={`${title}, view ${i + 1}`}
                fill
                sizes={shape === "full" ? "(max-width: 1320px) 100vw, 1320px" : "(max-width: 600px) 100vw, 50vw"}
              />
            </figure>
          );
        })}
      </div>

      <div className={`lightbox${open ? " is-open" : ""}`} role="dialog" aria-label="Image preview" onClick={() => setOpen(null)}>
        <button className="lightbox__close" aria-label="Close">
          ×
        </button>
        {open && (
          // eslint-disable-next-line @next/next/no-img-element -- natural-size preview, dimensions unknown
          <img src={`${open}?auto=format&w=2000&q=80`} alt={`${title} enlarged`} onClick={(e) => e.stopPropagation()} />
        )}
      </div>
    </>
  );
}
