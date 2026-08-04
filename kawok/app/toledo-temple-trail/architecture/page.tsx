import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Figure from "@/components/Figure";
import Course from "@/components/Course";
import SectionHeading from "@/components/SectionHeading";
import { img, dimensions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Concept dimensions, materials and construction logic for the first Toledo Temple Trail monument — a stepped structure of compacted waste faced in recycled glass.",
};

const layers = [
  { name: "Compacted waste core", text: "Non-biodegradable waste, cleaned, sorted and pounded down into dense mass. It carries weight, not load." },
  { name: "Drainage layer", text: "Gravel and stone beneath the structure, to move rainwater away from the core." },
  { name: "Glass bottle facade", text: "Recycled bottles laid end-on in lime mortar, so the outer face is made from the same waste it encloses." },
  { name: "Lime render", text: "Finished with natural pigments where the surface is not glass." },
  { name: "Planting pockets", text: "Recesses left for greening, so the structure ages into the landscape rather than against it." },
];

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        eyebrow="Toledo Temple Trail"
        title="Architecture &amp; engineering"
        lede="Everything on this page is concept work. Dimensions and quantities are estimates from current drawings, not verified engineering specifications."
        image={img.chamber}
        imageAlt="The summit chamber of the temple, doorway framed in coloured glass."
        credit="Concept render"
      />

      <section className="band">
        <div className="wrap">
          <Figure
            src={img.diagram}
            alt="Concept drawing of the Toledo Eco Temple: three levels, dimensions, human scale, foundation volume and a materials cross-section."
            caption="Concept drawing — preliminary, subject to professional structural review."
          />
        </div>
      </section>

      <section className="band bg-limestone">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Dimensions" title="Concept measurements." />
            <div className="mt-10 border-t border-ink/15">
              {dimensions.map((d, i) => (
                <Reveal key={d.part} delay={i * 50}>
                  <div className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-4">
                    <span className="text-[0.96rem] text-ink/80">{d.part}</span>
                    <span className="font-display text-[0.95rem] text-terracotta" style={{ fontStretch: "100%" }}>
                      {d.size}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-6 text-[0.88rem] text-ink/65">
                Total structure volume, including foundation: 3,664 cubic feet. Estimated
                materials: 12,000&ndash;20,000 recycled glass bottles and 20+ tonnes of
                compacted non-biodegradable waste.
              </p>
            </Reveal>
          </div>
          <div>
            <SectionHeading eyebrow="Materials" title="What it is made of, outside in." />
            <div className="mt-10 grid gap-6">
              {layers.map((l, i) => (
                <Reveal key={l.name} delay={i * 60}>
                  <h3 className="text-[1.02rem]">{l.name}</h3>
                  <p className="mt-1.5 text-[0.94rem] text-ink/75">{l.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dark-band band">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5">Light</p>
            <h2 className="h-section">The building changes through the day.</h2>
            <div className="prose-kawok mt-7">
              <p className="lede">
                Recovered glass does one thing that no other cheap building material does: it
                transforms sunlight. Set into mortar and lit from behind, bottle ends turn a
                grey wall amber, green and blue, and the colour moves as the sun does.
              </p>
              <p className="lede">
                The summit chamber is oriented so that light passes through the doorway around
                the solstice. This is contemporary symbolism drawn from Maya cosmology, offered
                as inspiration — not as a claim of archaeological or astronomical equivalence
                to ancient structures.
              </p>
            </div>
          </Reveal>
          <Figure
            src={img.facade}
            alt="Close view of the temple facade: rows of green and amber bottle ends catching low sunlight."
            caption="Bottle facade in afternoon light — concept render"
          />
        </div>
        <div className="wrap"><Course className="mt-16" /></div>
      </section>

      <section className="band">
        <div className="wrap max-w-[46rem]">
          <Reveal>
            <p className="eyebrow mb-5">Status</p>
            <h2 className="h-section">Nothing here is certified yet.</h2>
            <div className="prose-kawok mt-7">
              <p className="lede">
                The design has not been reviewed, approved or certified by a structural
                engineer, and we will not describe it as safe or ready to build until it has
                been. If you are an engineer, architect or builder who would like to look over
                the drawings, we would genuinely like to hear from you.
              </p>
            </div>
            <Link href="/contact" className="btn btn-solid mt-8">Offer your expertise</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
