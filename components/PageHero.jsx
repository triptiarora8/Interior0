import Image from "next/image";
import Link from "next/link";

// Pass `images={{ main, small, alt }}` to fill the right half with an arched photo collage.
export default function PageHero({ crumb, title, lead, images, style }) {
  const breadcrumb = (
    <div className="breadcrumb">
      <Link href="/">Home</Link> / {crumb}
    </div>
  );

  if (images) {
    return (
      <section className="page-hero page-hero--media" style={style}>
        <div className="container page-hero__grid">
          <div>
            {breadcrumb}
            <h1 className="reveal">{title}</h1>
            <p className="lead reveal reveal-delay-1">{lead}</p>
          </div>
          <div className="page-hero__collage">
            <div className="page-hero__collage-main">
              <Image src={images.main} alt={images.alt ?? ""} fill priority sizes="(max-width: 900px) 80vw, 35vw" />
            </div>
            <div className="page-hero__collage-small">
              <Image src={images.small} alt="" fill sizes="(max-width: 900px) 40vw, 16vw" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero" style={style}>
      <div className="container">
        {breadcrumb}
        <div className="page-hero__row">
          <h1 className="reveal">{title}</h1>
          <p className="lead reveal reveal-delay-1">{lead}</p>
        </div>
      </div>
    </section>
  );
}
