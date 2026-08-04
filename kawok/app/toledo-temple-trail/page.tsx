import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Course from "@/components/Course";
import Figure from "@/components/Figure";
import SectionHeading from "@/components/SectionHeading";
import { img, steps, templeFigures } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Toledo Temple Trail",
  description:
    "A community-led environmental art initiative in southern Belize: heritage-inspired monuments built from recycled glass bottles and compacted waste. One community, one temple, a trail of change.",
};

const purposes = [
  "Remove and repurpose waste that would otherwise be burned or buried",
  "Celebrate Maya heritage respectfully, as living culture rather than history",
  "Create community-led tourism and local employment",
  "Engage young people in building something permanent",
  "Encourage visitors to stay longer in Toledo and spend locally",
  "Make recycling visible, at a scale nobody can ignore",
];

const faqs = [
  {
    q: "Are these replicas of Maya temples?",
    a: "No. They are contemporary environmental monuments inspired by the proportion and geometry of Maya architecture. They are not reconstructions, replicas or sacred structures, and they are not built on archaeological sites.",
  },
  {
    q: "Is the structure safe?",
    a: "The design is at concept stage. The dimensions and material quantities published here are estimates from the current drawings and have not yet been through professional structural review. That review happens before anything is built.",
  },
  {
    q: "Where is the first temple?",
    a: "At Chaos Oasis in San Pedro Columbia, Toledo District, a few minutes from the ancient Maya city of Lubaantun. The site is cleared and bottle collection is under way.",
  },
  {
    q: "Which villages are taking part?",
    a: "Volunteers from San Pedro Columbia have helped collect and sort bottles for the first temple. Beyond that, nothing is agreed. We will not name a village here until it has chosen to be named.",
  },
  {
    q: "Can I visit?",
    a: "Not yet — there is nothing built to visit. Chaos Oasis, where the bottle walls, arches and the first small pyramid already stand, is open to visitors today.",
  },
];

export default function TempleTrailPage() {
  return (
    <>
      <PageHero
        eyebrow="Project"
        title="The Toledo Temple Trail"
        lede="A community-led environmental art initiative that turns waste into landmarks. One community. One temple. A trail of change."
        image={img.stairs}
        imageAlt="Concept render of a wide staircase climbing a temple faced with bottle ends."
        credit="Concept render"
      />

      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="What it is"
            title="Monuments made of what we threw away."
            lede={[
              "The Toledo Temple Trail proposes a series of heritage-inspired environmental monuments across southern Belize, built from recovered materials — recycled glass bottles on the outside, compacted non-biodegradable waste within.",
              "They are architecture and sculpture, but they are also education, tourism infrastructure, community participation and a very large, very visible argument about rubbish.",
            ]}
          />
          <Reveal className="mt-12 max-w-[46rem]">
            <p className="eyebrow mb-4">What they are not</p>
            <p className="lede">
              They are not ancient temples, replicas of sacred structures, or archaeological
              reconstructions. They are contemporary works, built now, by the people who live
              here.
            </p>
          </Reveal>
          <Course className="mt-14" />
        </div>
      </section>

      <section className="band bg-limestone">
        <div className="wrap">
          <SectionHeading eyebrow="Purpose" title="What the trail is meant to do." />
          <ul className="mt-12 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
            {purposes.map((p, i) => (
              <li key={p} className="bg-limestone p-6">
                <Reveal delay={i * 50}>
                  <span className="font-display text-[0.75rem] tracking-[0.2em] text-terracotta" style={{ fontStretch: "100%" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-[0.98rem] text-ink/80">{p}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="How it works"
            title="Five steps, in order."
            lede="Tested for years on a smaller scale at Chaos Oasis, one wall at a time."
          />
          <div className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className={`bottle-end mb-5 ${i % 2 === 1 ? "bottle-end-amber" : ""}`}>
                  {s.numeral}
                </div>
                <h3 className="text-[1.12rem]">{s.title}</h3>
                <p className="mt-2 text-[0.92rem] text-ink/72">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band band">
        <div className="wrap">
          <SectionHeading
            eyebrow="The first temple"
            title="Sixteen feet, three levels, one chamber."
            lede="A chamber at the summit is set to catch the solstice sun through its doorway — contemporary symbolism, not a claim of astronomical equivalence to ancient Maya structures."
          />
          <Reveal className="mt-14">
            <span className="tag tag-dark">Design targets — concept stage</span>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {templeFigures.map((f, i) => (
              <Reveal key={f.label} delay={i * 80}>
                <div className="font-display leading-none" style={{ fontSize: "clamp(2.1rem,4vw,3.1rem)", fontStretch: "118%" }}>
                  {f.value}
                </div>
                <div className="caption mt-3">{f.label}</div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/toledo-temple-trail/architecture" className="btn btn-ghost on-dark mt-10 text-parchment">
              See the architecture
            </Link>
          </Reveal>
          <div className="bottle-field mt-14" aria-hidden="true" />
        </div>
      </section>

      <section className="band">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5">The long view</p>
            <h2 className="h-section">One community. One temple. A trail of change.</h2>
            <div className="prose-kawok mt-7">
              <p className="lede">
                Each village that joins would design its own monument, tell its own story,
                cook its own food, guide its own visitors and train the next village in turn.
              </p>
              <p className="lede">
                Over years, that becomes a route across Toledo that people travel slowly —
                staying longer, learning more and spending locally at every stop. That is the
                ambition. Today there is one cleared field and a great many bottles.
              </p>
            </div>
          </Reveal>
          <Figure
            src={img.facade}
            alt="Rows of green and amber bottle ends set into pale mortar on the temple facade."
            caption="Bottle facade — concept render"
          />
        </div>
      </section>

      <section className="band bg-limestone">
        <div className="wrap">
          <SectionHeading eyebrow="Questions" title="The things people ask first." />
          <div className="mt-12 border-t border-ink/15">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <div className="grid gap-2 border-b border-ink/15 py-7 md:grid-cols-[20rem_1fr] md:gap-10">
                  <h3 className="text-[1.02rem]">{f.q}</h3>
                  <p className="text-[0.96rem] text-ink/75">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link href="/get-involved" className="btn btn-solid">Help build it</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
