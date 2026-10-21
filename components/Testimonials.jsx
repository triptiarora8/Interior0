"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Testimonials({ items }) {
  const [active, setActive] = useState(0);
  // bumping this restarts the autoplay timer after a manual pick
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, [items.length, cycle]);

  return (
    <div className="testimonial">
      <span className="eyebrow">Kind Words</span>
      <div className="testimonial__mark">“</div>
      <div className="testimonial__slides">
        {items.map((t, i) => (
          <div key={t.name} className={`testimonial__slide${i === active ? " is-active" : ""}`} aria-hidden={i !== active}>
            <blockquote>{t.quote}</blockquote>
            <div className="testimonial__author">
              <Image src={t.photo} alt="" width={56} height={56} />
              <div>
                <strong>{t.name}</strong>
                <span>{t.project}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial__dots">
        {items.map((t, i) => (
          <button
            key={t.name}
            className={i === active ? "is-active" : undefined}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => {
              setActive(i);
              setCycle((c) => c + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
}
