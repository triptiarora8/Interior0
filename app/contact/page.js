import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import PageHero from "@/components/PageHero";
import { contactFaq, img, studio } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Start your interior design project with Interior0. Book a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title={<>Let&apos;s talk about your <em>space.</em></>}
        lead="Tell us a little about your project. We reply to every enquiry within one working day."
        images={{ main: img("1615873968403-89e068629265"), small: img("1631679706909-1844bbd07221"), alt: "Living room with emerald feature wall" }}
        style={{ paddingBottom: 80 }}
      />

      <section style={{ paddingBottom: "var(--section)" }}>
        <div className="container contact-grid">
          <aside className="contact-info reveal">
            <div className="contact-block">
              <span>Email</span>
              <a href={`mailto:${studio.email}`}>{studio.email}</a>
            </div>
            <div className="contact-block">
              <span>Phone</span>
              <a href={studio.phoneHref}>{studio.phone}</a>
            </div>
            <div className="contact-block">
              <span>Studio</span>
              <p>
                {studio.addressLine1}
                <br />
                {studio.addressLine2}
              </p>
            </div>
            <div className="contact-block">
              <span>Hours</span>
              <p>{studio.hours}</p>
              <small className="muted">Visits by appointment</small>
            </div>
          </aside>

          <div className="reveal reveal-delay-1">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Studio visit */}
      <section className="map reveal-img">
        <Image src={img("1600566753190-17f0baa2a6c3")} alt="The Interior0 studio building" fill sizes="100vw" />
        <div className="map__card">
          <span className="eyebrow">Visit the Studio</span>
          <h4 style={{ marginTop: 14 }}>Coffee&apos;s on us.</h4>
          <p className="muted">See material samples, flip through finished projects and meet the team in person.</p>
          <a
            href="https://maps.google.com/?q=Sector+29+Gurugram"
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
            style={{ marginTop: 18 }}
          >
            Get Directions
          </a>
        </div>
      </section>

      <FaqSection
        eyebrow="Before You Write"
        before="Quick "
        accent="answers."
        items={contactFaq}
        image={img("1513694203232-719a280e022f")}
        alt="Minimal room with plants and a white dresser"
      />
    </>
  );
}
