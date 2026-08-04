import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Course from "@/components/Course";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message KAWOK about bottle drop-offs, work days, visits, partnerships, press and grants. Toledo District, Belize.",
};

const details = [
  { label: "WhatsApp", value: site.whatsappDisplay, href: site.whatsappLink },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Instagram", value: site.instagramHandle, href: site.instagram },
  { label: "Facebook", value: "The Chaos Oasis Belize", href: site.facebook },
  { label: "Where we are", value: site.location },
  { label: "Chaos Oasis", value: "chaosoasisbelize.com", href: site.chaosOasis },
];

export default function ContactPage() {
  return (
    <section className="band">
      <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-5">Contact</p>
          <h1 style={{ fontSize: "clamp(2.1rem,5vw,3.6rem)" }}>
            Become part of Belize&rsquo;s next landmark.
          </h1>
          <div className="prose-kawok mt-7">
            <p className="lede">
              Message us on WhatsApp for anything quick — bottle drop-offs, work days, visits.
              Email is better for partnerships, press, grants and anything with an attachment.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.whatsappLink} className="btn btn-solid">Message on WhatsApp</a>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">Send an email</a>
          </div>
          <Course className="mt-14" />
        </Reveal>

        <Reveal delay={90}>
          <dl className="grid gap-6">
            {details.map((d) => (
              <div key={d.label}>
                <dt className="eyebrow !text-ink/55">{d.label}</dt>
                <dd className="mt-1 text-[1.05rem]">
                  {d.href ? (
                    <a href={d.href} className="border-b border-terracotta/40 text-terracotta no-underline hover:border-terracotta">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
