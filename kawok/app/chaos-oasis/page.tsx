import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Figure from "@/components/Figure";
import Course from "@/components/Course";
import SectionHeading from "@/components/SectionHeading";
import { img, site, milestones } from "@/lib/content";

export const metadata: Metadata = {
  title: "Chaos Oasis",
  description:
    "Chaos Oasis is where KAWOK began: an off-grid home, organic farm and recycling experiment in San Pedro Columbia, Belize, built from tyres, bottles and tins since 2010.",
};

export default function ChaosOasisPage() {
  return (
    <>
      <PageHero
        eyebrow="Where it started"
        title="Chaos Oasis"
        lede="A place where ideas became reality — and the reason anyone should believe the rest of this is possible."
        image={img.photoBuilding}
        imageAlt="A person building a bottle-and-mortar wall by hand at Chaos Oasis."
        credit="Photograph"
      />

      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="The origin"
            title="Sixteen years of working it out."
            lede={[
              "In 2010 a family arrived in San Pedro Columbia and started building a house out of things other people had thrown away. What followed was an off-grid home, an organic farm, a butterfly house, a great many bottle walls and a long, unglamorous education in what actually works when you build with waste.",
              "The Toledo Temple Trail did not arrive as an idea. It arrived as the obvious next step after years of physical experimentation, failure and repair.",
            ]}
          />
          <div className="mt-14 grid gap-px bg-ink/15 md:grid-cols-3">
            <Figure className="bg-parchment pb-4" src={img.photoPyramid} alt="A small bottle-and-mortar pyramid standing at Chaos Oasis." caption="The first pyramid — photograph" imgClassName="aspect-[4/3] object-cover" />
            <Figure className="bg-parchment pb-4" src={img.photoBottleWall} alt="Detail of a bottle wall with blue, green and amber bottle ends set into grey mortar." caption="Bottle wall — photograph" imgClassName="aspect-[4/3] object-cover" />
            <Figure className="bg-parchment pb-4" src={img.photoStairs} alt="Steps built from bottle ends set in mortar, edged with plants." caption="Bottle steps — photograph" imgClassName="aspect-[4/3] object-cover" />
          </div>
          <Course className="mt-14" />
        </div>
      </section>

      <section className="band bg-limestone">
        <div className="wrap">
          <SectionHeading eyebrow="What was learned there" title="Proof, not theory." />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <Reveal>
              <h3 className="h-sub">The technique works</h3>
              <p className="mt-3 text-[0.98rem] text-ink/75">Bottle walls, arches, steps and a small pyramid have stood through more than a decade of tropical rain, heat and hurricane season.</p>
            </Reveal>
            <Reveal delay={90}>
              <h3 className="h-sub">People will help</h3>
              <p className="mt-3 text-[0.98rem] text-ink/75">Schools, universities, volunteers and television crews have all come through. The idea is not hard to explain — you point at a wall.</p>
            </Reveal>
            <Reveal delay={180}>
              <h3 className="h-sub">Waste is a resource</h3>
              <p className="mt-3 text-[0.98rem] text-ink/75">Tyres, bottles, tins and plastic that would have been burned or buried are instead holding up a house, a farm and a butterfly enclosure.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <SectionHeading eyebrow="Timeline" title="How Chaos Oasis became KAWOK." />
          <div className="mt-12 border-t border-ink/15">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 60}>
                <div className="grid gap-1 border-b border-ink/15 py-6 md:grid-cols-[8rem_1fr] md:gap-8">
                  <div className="font-display text-[1.05rem] text-terracotta" style={{ fontStretch: "100%" }}>{m.when}</div>
                  <div>
                    <h3 className="font-body text-[1.05rem] font-semibold tracking-normal">{m.title}</h3>
                    <p className="mt-1 text-[0.93rem] text-ink/72">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The threshold: this is where visitors cross to the Chaos Oasis site. */}
      <section className="dark-band band">
        <div className="wrap max-w-[46rem]">
          <Reveal>
            <p className="eyebrow mb-5">Continue</p>
            <h2 className="h-section">Chaos Oasis has its own home.</h2>
            <div className="prose-kawok mt-7">
              <p className="lede">
                This page is only the short version. Chaos Oasis is a working place you can
                visit today — tours, the butterfly house, the farm, the cafe, the full story
                and far more photographs live on its own website.
              </p>
            </div>
            <a href={site.chaosOasis} className="btn btn-solid mt-9">
              Visit the Chaos Oasis website
            </a>
            <p className="caption mt-5">You will be taken to chaosoasisbelize.com</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
