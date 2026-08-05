import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Course from "@/components/Course";
import SectionHeading from "@/components/SectionHeading";
import { img, site, kulcha, kulchaGallery, kulchaVideos } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Kulcha Fair",
  description:
    "Belize's eco-friendly culture fair beside the ruins of Lubaantun — Maya heritage, artisan craftsmanship, cacao traditions, ceremony, food and music in Toledo District.",
};

export default function KulchaFairPage() {
  return (
    <>
      <PageHero
        eyebrow="Project"
        title="The Kulcha Fair"
        lede={kulcha.strapline}
        image={img.photoBottleWall}
        imageAlt="Detail of a bottle wall with blue, green and amber bottle ends set into grey mortar."
      />

      {/* ------------------------------------------------------ WHAT IT IS */}
      <section className="band">
        <div className="wrap">
          <SectionHeading
            eyebrow="What it is"
            title="Culture as something people do."
            lede={[
              "The Kulcha Fair is an eco-friendly culture fair held beside the ancient Maya city of Lubaantun, bringing together makers, growers, cooks, musicians and ceremonial practitioners from across Toledo District.",
              "It is a market and a gathering that welcomes visitors, rather than a display staged for them.",
            ]}
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {kulcha.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <h3 className="h-sub">{h.title}</h3>
                <p className="mt-3 text-[0.96rem] text-ink/75">{h.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-16 max-w-[42rem] border-y border-ink/15 py-10 text-center">
            <p className="lede">{kulcha.communityNote}</p>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- GALLERY */}
      {kulchaGallery.length > 0 && (
        <section className="band bg-limestone">
          <div className="wrap">
            <SectionHeading eyebrow="Gallery" title="From the last fair." />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {kulchaGallery.map((g, i) => (
                <Reveal as="figure" key={g.src} delay={i * 60}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {g.caption && <figcaption className="caption mt-3">{g.caption}</figcaption>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --------------------------------------------------------- VIDEOS */}
      {kulchaVideos.length > 0 && (
        <section className="band">
          <div className="wrap">
            <SectionHeading eyebrow="Watch" title="The fair in motion." />
            <ul className="mt-12 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
              {kulchaVideos.map((v, i) => (
                <li key={v.url} className="bg-parchment">
                  <Reveal delay={i * 60}>
                    <a
                      href={v.url}
                      className="flex items-center gap-4 p-6 no-underline transition-colors hover:bg-limestone"
                    >
                      <span
                        aria-hidden="true"
                        className="bottle-end bottle-end-amber !h-11 !w-11 shrink-0"
                      >
                        &#9654;
                      </span>
                      <span>
                        <span className="block text-[1.02rem] text-ink">{v.title}</span>
                        {v.note && <span className="caption mt-1 block">{v.note}</span>}
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------ LAST FAIR */}
      <section className="dark-band band">
        <div className="wrap">
          <SectionHeading
            eyebrow="What happens over the weekend"
            title={kulcha.lastEdition.label}
            lede="Two days, opening at dawn with ceremony and closing in the late afternoon. This is the shape the next fair will take."
          />
          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            {kulcha.lastEdition.days.map((day, di) => (
              <Reveal key={day.label} delay={di * 100}>
                <h3 className="eyebrow !text-amber mb-6">{day.label}</h3>
                <div className="border-t border-parchment/20">
                  {day.events.map((e) => (
                    <div key={e.title} className="border-b border-parchment/20 py-5">
                      <div className="flex items-baseline gap-4">
                        <span
                          className="font-display text-[0.95rem] text-amber"
                          style={{ fontStretch: "100%" }}
                        >
                          {e.time}
                        </span>
                        <h4 className="text-[1.05rem]">{e.title}</h4>
                      </div>
                      <p className="mt-2 text-[0.93rem] text-parchment/72">{e.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Course className="mt-16" />
        </div>
      </section>

      {/* ----------------------------------------------------- LOW IMPACT */}
      <section className="band bg-limestone">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="How it runs"
              title="A low-impact celebration."
              lede={kulcha.lowImpact.text}
            />
          </div>
          <ul className="grid gap-3 self-center">
            {kulcha.lowImpact.practices.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 50}>
                <span className="flex items-start gap-3 border-b border-ink/12 pb-3 text-[0.96rem] text-ink/80">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-jade"
                  />
                  {p}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------- NEXT FAIR */}
      <section className="band">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5">Coming up</p>
            <h2 className="h-section">{kulcha.next.heading}</h2>
            <p className="lede mt-6">{kulcha.next.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.whatsappLink} className="btn btn-solid">
                Message us on WhatsApp
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Other ways to reach us
              </Link>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <p className="eyebrow mb-5">Get in touch about</p>
            <ul className="grid gap-3">
              {kulcha.next.calls.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 border-b border-ink/12 pb-3 text-[0.98rem] text-ink/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-terracotta"
                  />
                  {c}
                </li>
              ))}
            </ul>
            <p className="caption mt-6">
              Follow the fair on Instagram at {site.instagramHandle}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
