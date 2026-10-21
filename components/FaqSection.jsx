import Image from "next/image";
import Faq from "./Faq";

export default function FaqSection({ eyebrow, before, accent, items, image, alt }) {
  return (
    <section className="section">
      <div className="container faq-split">
        <div className="faq-split__media reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>
            {before}
            <em>{accent}</em>
          </h2>
          <div className="faq-split__img">
            <Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
        </div>
        <Faq items={items} />
      </div>
    </section>
  );
}
