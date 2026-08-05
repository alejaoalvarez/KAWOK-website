import Link from "next/link";
import Reveal from "@/components/Reveal";
import Course from "@/components/Course";
import Figure from "@/components/Figure";
import SectionHeading from "@/components/SectionHeading";
import {
  site,
  img,
  pillars,
  steps,
  templeFigures,
  milestones,
  projects,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.hero1600}
          srcSet={`${img.hero1000} 1000w, ${img.hero1600} 1600w`}
          sizes="100vw"
          alt="Concept render of a stepped temple built from recycled glass bottles, standing in a cleared field at Chaos Oasis in Toledo District, Belize."
          fetchPriority="high"
          decoding="async"
          className="h-[clamp(30rem,82vh,50rem)] w-full object-cover opacity-[0.86]"
          style={{ objectPosition: "center 42%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,24,15,.42) 0%, rgba(20,24,15,.12) 34%, rgba(20,24,15,.78) 100%)",
          }}
        />
        <p className="caption absolute right-5 top-5 border border-parchment/25 bg-ink/45 px-3 py-1.5 !text-parchment/75 md:right-10">
          Concept render
        </p>

        <div className="absolute inset-x-0 bottom-0 pb-[clamp(2.5rem,6vw,4.5rem)] text-parchment">
          <div className="wrap">
            {/* The headline is stepped, like the terraces of the temple. */}
            <h1 className="h-hero">
              <span className="block">Honouring the Past.</span>
              <span className="ml-[clamp(1rem,7vw,7rem)] block text-amber">
                Creating the Future.
              </span>
            </h1>
            <p className="lede mt-7 max-w-[31rem] !text-parchment/85">{site.strapline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/vision" className="btn btn-solid">
                Explore the vision
              </Link>
              <Link href="/toledo-temple-trail" className="btn btn-ghost on-dark text-parchment">
                See the first temple
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- PROVOCATION */}
      <section className="dark-band band">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem,4.6vw,3.4rem)" }}>
              What if waste could become a landmark?
            </h2>
            <div className="prose-kawok mt-7">
              <p className="lede">
                Every year, thousands of bottles and plastic containers pass through Toledo
                and end up in ditches, rivers and burn piles. We think they are building
                material.
              </p>
              <p className="lede">
                Compacted waste fills the core, where a structure only needs mass. Glass
                bottles and lime mortar form the skin, where a structure needs to be seen.
                Nothing is hidden. That is the point.
              </p>
            </div>
          </Reveal>
          <Figure
            src={img.cutaway}
            alt="Cutaway view of the temple showing compacted plastic waste filling the core beneath the bottle facade."
            caption="The core is packed with compacted non-biodegradable waste"
            imgClassName="max-w-[30rem]"
          />
        </div>
        <div className="wrap">
          <Course className="mt-16" />
        </div>
      </section>

      {/* -------------------------------------------------------- VISION */}
      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="What KAWOK is"
            title="A movement that sits between categories."
            lede={[
              "KAWOK is not an eco-resort, a conservation charity or a recycling scheme. It grew out of sixteen years of building, failing and rebuilding on a smallholding in southern Belize, and it exists to prove a simple idea: that the things we throw away can become the things we travel to see.",
              "Our work runs along three lines. They are not values on a wall. They are the three reasons anything gets built.",
            ]}
          />

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <span className="eyebrow !text-terracotta mb-4 block">{p.number}</span>
                <h3 className="h-sub">{p.title}</h3>
                <p className="mt-3 text-[0.98rem] text-ink/75">{p.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <Link href="/vision" className="btn btn-ghost">
              Read our philosophy
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- SITE */}
      <section className="band bg-limestone">
        <div className="wrap">
          <SectionHeading
            eyebrow="The first site"
            title="This field, and what it becomes."
            lede="The first temple will rise at Chaos Oasis in San Pedro Columbia, a few minutes' walk from the ancient Maya city of Lubaantun. The ground is cleared. The bottles are being sorted. Everything else is still drawings."
          />
          <div className="mt-12 grid gap-px bg-ink/15 md:grid-cols-2">
            <Figure
              className="bg-limestone pb-4"
              src={img.terrain}
              alt="The cleared field at Chaos Oasis where the first temple is planned, under open sky."
              caption="The site today"
              imgClassName="aspect-[3/2] object-cover"
            />
            <Figure
              className="bg-limestone pb-4"
              src={img.photoPyramid}
              alt="A small bottle-and-mortar pyramid already standing at Chaos Oasis."
              caption="Already standing at Chaos Oasis"
              imgClassName="aspect-[3/2] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- PROCESS */}
      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="How it works"
            title="Five steps, in order."
            lede="This sequence is the whole method. It has been tested for years on a smaller scale at Chaos Oasis, one wall at a time."
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

      {/* -------------------------------------------------------- TEMPLE */}
      <section className="dark-band band">
        <div className="wrap">
          <SectionHeading
            eyebrow="The Toledo Temple Trail"
            title="The first temple, by the numbers."
            lede="Sixteen feet high, three levels, a chamber at the summit set to catch the solstice sun through its doorway. Built by hand, by the community, from what the community threw away."
          />

          <Reveal className="mt-14">
            <span className="tag tag-dark">Design targets — concept stage</span>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {templeFigures.map((f, i) => (
              <Reveal key={f.label} delay={i * 80}>
                <div
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(2.1rem,4vw,3.1rem)", fontStretch: "118%" }}
                >
                  {f.value}
                </div>
                <div className="caption mt-3">{f.label}</div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="lede mt-8 max-w-[44rem] text-[0.92rem]">
              These are design estimates from the current concept drawings, not final
              engineering specifications. Bottle collection is under way; the running count
              will be published here once sorting is complete.
            </p>
          </Reveal>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <Figure
              src={img.diagram}
              alt="Concept drawing of the Toledo Eco Temple showing three levels, dimensions, human scale, foundation volume and a materials cross-section."
              caption="Concept drawing — dimensions and materials are preliminary and subject to professional review."
            />
            <Reveal>
              <h3 className="h-sub">Architecture that explains itself</h3>
              <div className="prose-kawok mt-4">
                <p className="lede text-[0.96rem]">
                  A four-foot foundation, packed with compacted waste, carries three stepped
                  levels of 26 × 14, 24 × 10 and 22 × 6 feet. A staircase eighteen feet wide
                  climbs the front face to a chamber at the top.
                </p>
                <p className="lede text-[0.96rem]">
                  The glass is not ornament. Set into lime mortar and lit from behind by the
                  sun, the bottle ends turn the whole face amber and green through the
                  afternoon, and the building changes colour as the day moves.
                </p>
              </div>
              <Link href="/toledo-temple-trail/architecture" className="btn btn-ghost mt-7">
                See the architecture
              </Link>
            </Reveal>
          </div>

          <div className="bottle-field mt-14" aria-hidden="true" />
        </div>
      </section>

      {/* ------------------------------------------------------ PROJECTS */}
      <section className="band">
        <div className="wrap">
          <SectionHeading eyebrow="Projects" title="Three initiatives, one idea." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col border border-ink/15 bg-parchment no-underline transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(20,24,15,0.10)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="tag mb-4 self-start">{p.tag}</span>
                    <h3 className="text-[1.4rem]">{p.title}</h3>
                    <p className="mt-3 text-[0.93rem] text-ink/72">{p.text}</p>
                    <span className="eyebrow !text-terracotta mt-6 block">{p.cta} →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- TRAIL VISION */}
      <section className="band bg-limestone">
        <div className="wrap">
          <Reveal className="max-w-[46rem]">
            <p className="eyebrow mb-5">The long view</p>
            <h2 style={{ fontSize: "clamp(2rem,4.6vw,3.4rem)" }}>
              One community. One temple. A trail of change.
            </h2>
            <div className="prose-kawok mt-7">
              <p className="lede">
                The first temple is being built at Chaos Oasis. The intention is that it will
                not be the last. Each village that joins would design its own monument, tell
                its own story, cook its own food and train the next village in turn — until
                Toledo is crossed by a route that visitors travel slowly, staying longer and
                spending locally at every stop.
              </p>
              <p className="lede">
                Neighbours from San Pedro Columbia have already joined us to collect and sort
                bottles. Nothing beyond the first site is agreed or committed yet, and no
                village will be named here until it has chosen to be named.
              </p>
            </div>
          </Reveal>
          <Course className="mt-14" />
        </div>
      </section>

      {/* ----------------------------------------------------- MILESTONES */}
      <section className="band">
        <div className="wrap">
          <SectionHeading eyebrow="How we got here" title="A slow accumulation." />
          <div className="mt-12 border-t border-ink/15">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 60}>
                <div className="grid gap-1 border-b border-ink/15 py-6 md:grid-cols-[8rem_1fr] md:gap-8">
                  <div className="font-display text-[1.05rem] text-terracotta" style={{ fontStretch: "100%" }}>
                    {m.when}
                  </div>
                  <div>
                    <h3 className="font-body text-[1.05rem] font-semibold tracking-normal">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-[0.93rem] text-ink/72">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- HELP */}
      <section className="dark-band band">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5">How you can help</p>
            <h2 className="h-section">Every bottle makes a difference.</h2>
            <p className="lede mt-6">
              There is no minimum contribution and no wrong way in. A crate of bottles saved
              from a bar in Punta Gorda is worth as much to this build as a cheque.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/get-involved" className="btn btn-solid">
                Ways to get involved
              </Link>
              <Link href="/contact" className="btn btn-ghost on-dark text-parchment">
                Get in touch
              </Link>
            </div>
          </Reveal>
          <Figure
            src={img.facade}
            alt="Close view of the temple facade: rows of green and amber bottle ends set into pale mortar."
          />
        </div>
      </section>
    </>
  );
}
