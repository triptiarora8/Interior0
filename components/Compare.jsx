"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Compare({ src, alt }) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const box = useRef(null);

  const set = (clientX) => {
    const r = box.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={box}
      className="compare"
      style={{ "--pos": `${pos}%` }}
      role="slider"
      tabIndex={0}
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      onKeyDown={onKeyDown}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        set(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && set(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Image src={src} alt={`${alt} after redesign`} fill sizes="(max-width: 1320px) 100vw, 1320px" />
      <Image className="compare__before" src={src} alt={`${alt} before redesign`} fill sizes="(max-width: 1320px) 100vw, 1320px" />
      <div className="compare__handle"></div>
      <span className="compare__label compare__label--before">Before</span>
      <span className="compare__label compare__label--after">After</span>
    </div>
  );
}
