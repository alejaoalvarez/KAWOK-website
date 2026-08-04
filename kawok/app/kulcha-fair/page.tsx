import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Course from "@/components/Course";
import SectionHeading from "@/components/SectionHeading";
import { img } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Kulcha Fair",
  description:
    "Cacao, crafts, music, food and ceremony beside the ruins of Lubaantun — an eco-friendly culture fair in Toledo District, Belize.",
};

const strands = [
  { title: "Cacao", text: "Toledo grows some of the finest cacao in the Americas. At the fair it is drunk hot and cold, ground by hand, and talked about by the people who grow it." },
  { title: "Crafts", text: "Jippy jappa weaving, carved jade, bags upcycled from rice sacks — makers selling their own work, at their own prices." },
  { title: "Food", text: "Organic and locally sourced, served on compostable or reusable packaging, cooked by people from the villages around Lubaantun." },
  { title: "Music & ceremony", text: "Drumming, dance and Maya ceremony led by their own practitioners — not performed for an audience, but shared with one." },
];

const practices = [
  "Compostable or reusable food packaging",
  "Organic, locally sourced meals",
  "Composting bins throughout the fair",
  "Free water refill stations",
  "Direct support for small-scale artisans and farmers",
  "Every bottle recycled — you can see where they end up",
];

export default function KulchaFairPage() {
  return (
    <>
      <PageHero
        eyebrow="Project"
        title="The Kulcha Fair"
        lede="More than a festival: a community platform where Toledo's culture is bought, sold, cooked, played and passed on."
        image={img.photoBottleWall}
        imageAlt="Detail of a bottle wall with blue, green and amber bottle ends set into grey mortar."
        credit="Photograph"
      />

      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="What it is"
            title="Culture as something people do."
            lede={[
              "The Kulcha Fair is an eco-friendly culture fair held beside the ancient Maya city of Lubaantun. It brings together makers, growers, cooks, musicians and ceremonial practitioners from across Toledo District.",
              "It is not a display of heritage for visitors. It is a market and a gathering that happens to welcome them.",
            ]}
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {strands.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <h3 className="h-sub">{s.title}</h3>
                <p className="mt-3 text-[0.96rem] text-ink/75">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Course className="mt-16" />
        </div>
      </section>

      <section className="band bg-limestone">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="How it runs" title="An eco fair that means it." />
            <ul className="mt-10 grid gap-3">
              {practices.map((p, i) => (
                <Reveal key={p} delay={i * 50}>
                  <li className="flex items-start gap-3 border-b border-ink/12 pb-3 text-[0.96rem] text-ink/80">
                    <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-jade" />
                    {p}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal>
            <p className="eyebrow mb-5">Next edition</p>
            <h2 className="h-sub">Dates for the next fair are being confirmed.</h2>
            <p className="lede mt-5">
              The last fair ran over two days beside Lubaantun, with a Maya thanksgiving
              ceremony, a solstice ceremony at dawn, workshops, live demonstrations and a
              sacred cacao dance.
            </p>
            <p className="lede mt-4">
              Message us to be told when dates are set, or to apply as a vendor, maker,
              performer or volunteer.
            </p>
            <Link href="/contact" className="btn btn-solid mt-8">Ask about the next fair</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
