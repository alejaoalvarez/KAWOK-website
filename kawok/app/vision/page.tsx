import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Course from "@/components/Course";
import SectionHeading from "@/components/SectionHeading";
import { img, pillars, culturalStatement } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Vision",
  description:
    "KAWOK honours cultural heritage while creating regenerative futures — through environmental stewardship, sustainable tourism, education, architecture and community.",
};

const values = [
  {
    title: "Cultural heritage",
    text: "Honouring, preserving and celebrating Indigenous knowledge, traditions, identity and living culture.",
  },
  {
    title: "Environmental stewardship",
    text: "Transforming waste into opportunity while restoring ecosystems and inspiring healthier relationships with the natural world.",
  },
  {
    title: "Regenerative impact",
    text: "Creating lasting social, cultural, environmental, educational and economic value for the generations after us.",
  },
  {
    title: "Community cooperation",
    text: "Building through collective responsibility, practical participation, knowledge-sharing and local leadership.",
  },
  {
    title: "Creative possibility",
    text: "Using architecture, art, storytelling and experimentation to make environmental action visible, memorable and inspiring.",
  },
];

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="The Vision"
        title="Heritage should shape innovation."
        lede="KAWOK exists to honour cultural heritage while creating regenerative futures — through environmental stewardship, tourism, education, architecture, creativity and community."
        image={img.chamber}
        imageAlt="The summit chamber of the temple, its doorway framed in coloured glass."
        />

      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="Mission"
            title="What we are for."
            lede={[
              "To honour cultural heritage while creating regenerative futures through environmental stewardship, sustainable tourism, education, architecture, creativity and community empowerment.",
              "The first chapter begins in Toledo District. It is not intended to be the last.",
            ]}
          />
          <Reveal className="mt-14 max-w-[46rem]">
            <p className="eyebrow mb-5">Vision</p>
            <p className="lede">
              A growing network of regenerative cultural landmarks that reconnect people to
              place, celebrate Indigenous knowledge, restore landscapes, generate community
              opportunity, and demonstrate that today&rsquo;s environmental problems can become
              tomorrow&rsquo;s greatest possibilities.
            </p>
          </Reveal>
          <Course className="mt-14" />
        </div>
      </section>

      <section className="band bg-limestone">
        <div className="wrap">
          <SectionHeading eyebrow="Three lines of work" title="Culture. Nature. Future." />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <span className="eyebrow !text-terracotta mb-4 block">{p.number}</span>
                <h3 className="h-sub">{p.title}</h3>
                <p className="mt-3 text-[0.98rem] text-ink/75">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we believe"
            title="A philosophy, not a policy."
            lede="People build communities. Communities restore landscapes. Landscapes inspire culture."
          />
          <div className="mt-12 border-t border-ink/15">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="grid gap-2 border-b border-ink/15 py-7 md:grid-cols-[16rem_1fr] md:gap-10">
                  <h3 className="text-[1.05rem]">{v.title}</h3>
                  <p className="text-[0.96rem] text-ink/75">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band band">
        <div className="wrap max-w-[48rem]">
          <Reveal>
            <p className="eyebrow mb-5">Cultural responsibility</p>
            <h2 className="h-section">{culturalStatement.heading}</h2>
            <div className="prose-kawok mt-7">
              {culturalStatement.paragraphs.map((p, i) => (
                <p key={i} className="lede">{p}</p>
              ))}
            </div>
            <Link href="/get-involved" className="btn btn-ghost on-dark mt-9 text-parchment">
              Get involved
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
