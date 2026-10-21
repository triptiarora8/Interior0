import Image from "next/image";
import Link from "next/link";
import Arrow from "./Arrow";

export default function Cta({ eyebrow, before, accent, after = "", button, image }) {
  return (
    <section className="cta">
      <div className="cta__bg">
        <Image src={image} alt="" fill sizes="100vw" data-parallax="0.12" />
      </div>
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h2>
          {before}
          <em>{accent}</em>
          {after}
        </h2>
        <Link href="/contact" className="btn btn--light">
          {button} <Arrow />
        </Link>
      </div>
    </section>
  );
}
