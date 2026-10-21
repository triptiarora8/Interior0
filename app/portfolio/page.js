import Cta from "@/components/Cta";
import PageHero from "@/components/PageHero";
import PortfolioGallery from "@/components/PortfolioGallery";
import { categories, img, projects } from "@/data/site";

export const metadata = {
  title: "Portfolio",
  description: "Selected residential and commercial interior design projects by Interior0.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumb="Portfolio"
        title={<>Selected <em>work.</em></>}
        lead="Homes, kitchens, dining rooms and workplaces. Each one shaped around the people who use it."
        images={{ main: img("1617806118233-18e1de247200"), small: img("1616594039964-ae9021a400a0"), alt: "Dining room with emerald velvet chairs" }}
        style={{ paddingBottom: 80 }}
      />

      <section style={{ paddingBottom: "var(--section)" }}>
        <div className="container">
          <PortfolioGallery projects={projects} categories={categories} />
        </div>
      </section>

      <Cta
        eyebrow="Your Space Next"
        before="Imagine what we could "
        accent="create"
        after=" for you."
        button="Start Your Project"
        image={img("1600210492486-724fe5c67fb0")}
      />
    </>
  );
}
