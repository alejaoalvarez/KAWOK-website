import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Course from "@/components/Course";
import SectionHeading from "@/components/SectionHeading";
import { img, waysToHelp } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Donate bottles, join a work day, give materials, share expertise or become a founding partner of the Toledo Temple Trail.",
};

const partnerBenefits = [
  "Recognition on this site and at the monument you support",
  "Regular project updates and photographs you are free to use",
  "Verified impact figures for the section you funded",
  "Volunteer days for your team, on site",
  "Adopt-a-section and adopt-a-monument arrangements",
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Every bottle makes a difference."
        lede="There is no minimum contribution and no wrong way in. A crate of bottles saved from a bar in Punta Gorda is worth as much to this build as a cheque."
        image={img.facade}
        imageAlt="Rows of green and amber bottle ends set into pale mortar."
        credit="Concept render"
      />

      <section className="band">
        <div className="wrap">
          <SectionHeading eyebrow="Ways in" title="Five things that genuinely help." />
          <div className="mt-12 border-t border-ink/15">
            {waysToHelp.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="grid gap-2 border-b border-ink/15 py-7 md:grid-cols-[3rem_1fr] md:gap-8">
                  <div className={`bottle-end !h-10 !w-10 ${i % 2 === 1 ? "bottle-end-amber" : ""}`}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-[1.08rem]">{w.title}</h3>
                    <p className="mt-1.5 text-[0.96rem] text-ink/75">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link href="/contact" className="btn btn-solid">Get in touch</Link>
          </Reveal>
        </div>
      </section>

      <section className="dark-band band">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5">For organisations</p>
            <h2 className="h-section">Founding partners.</h2>
            <div className="prose-kawok mt-7">
              <p className="lede">
                We are looking for companies, foundations and grant-makers who want a
                permanent, measurable stake in the first monuments on the trail — not a logo
                on a banner, but a wall, a staircase or a level that exists because of them.
              </p>
              <p className="lede">
                Partnerships are agreed individually. Talk to us about what would be
                meaningful for your organisation and what we can honestly deliver.
              </p>
            </div>
            <Link href="/contact" className="btn btn-solid mt-8">Start a conversation</Link>
          </Reveal>
          <Reveal delay={90}>
            <p className="eyebrow mb-5">What partners receive</p>
            <ul className="grid gap-3">
              {partnerBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 border-b border-parchment/15 pb-3 text-[0.96rem] text-parchment/80">
                  <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-amber" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="caption mt-6">
              We do not offer tax benefits, carbon offsets or certified ESG outcomes, and we
              will not claim to.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band bg-limestone">
        <div className="wrap">
          <SectionHeading
            eyebrow="Supporters"
            title="Given in bottles, and given in funds."
            lede="We keep two lists and treat them as equals. Someone who saved bottles for six months has given this project as much as someone who wrote a cheque, and both belong on the wall."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="eyebrow !text-terracotta mb-3">Materials &amp; bottles</h3>
              <p className="text-[0.98rem] text-ink/78">
                Volunteers from San Pedro Columbia, and everyone who has dropped off a crate.
                Named supporters will be listed here with their permission.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h3 className="eyebrow !text-terracotta mb-3">Funding &amp; partners</h3>
              <p className="text-[0.98rem] text-ink/78">
                Open now to founding partners, companies and grant-makers. Get in touch to
                talk about what a partnership could look like.
              </p>
            </Reveal>
          </div>
          <Course className="mt-14" />
        </div>
      </section>
    </>
  );
}
