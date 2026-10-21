"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Wires up the class-based scroll effects (.reveal, [data-count], [data-parallax])
// for whatever page is currently mounted. Re-runs on every route change.
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const $$ = (sel) => Array.from(document.querySelectorAll(sel));

    /* Reveal on scroll */
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    $$(".reveal:not(.is-visible), .reveal-img:not(.is-visible), .process__step:not(.is-visible)").forEach((el) =>
      revealIO.observe(el)
    );

    /* Count-up numbers */
    const frames = [];
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / 1800, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4))) + suffix;
            if (p < 1) frames.push(requestAnimationFrame(tick));
          };
          frames.push(requestAnimationFrame(tick));
          countIO.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    $$("[data-count]").forEach((el) => countIO.observe(el));

    /* Subtle parallax */
    const parallax = $$("[data-parallax]");
    let onScroll;
    if (parallax.length && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const update = () =>
        parallax.forEach((el) => {
          const rect = el.parentElement.getBoundingClientRect();
          const speed = parseFloat(el.dataset.parallax) || 0.15;
          const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
          el.style.transform = `translate3d(0, ${-offset}px, 0)`;
        });
      onScroll = () => requestAnimationFrame(update);
      window.addEventListener("scroll", onScroll, { passive: true });
      update();
    }

    return () => {
      revealIO.disconnect();
      countIO.disconnect();
      frames.forEach(cancelAnimationFrame);
      if (onScroll) window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
