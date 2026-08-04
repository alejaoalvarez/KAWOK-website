import Link from "next/link";
import { site, img } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="dark-band bg-ink pb-12 pt-16 text-[0.92rem] text-parchment/72">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.word} alt="KAWOK" className="w-[150px] invert" />
            <p className="mt-5 max-w-sm">
              Honouring the past. Creating the future. A regenerative cultural movement in
              Toledo District, Belize.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[0.7rem] uppercase tracking-eyebrow text-amber">
              Explore
            </h4>
            <ul className="grid gap-2.5">
              <li><Link href="/vision" className="no-underline hover:text-parchment">The Vision</Link></li>
              <li><Link href="/toledo-temple-trail" className="no-underline hover:text-parchment">Toledo Temple Trail</Link></li>
              <li><Link href="/toledo-temple-trail/architecture" className="no-underline hover:text-parchment">Architecture</Link></li>
              <li><Link href="/chaos-oasis" className="no-underline hover:text-parchment">Chaos Oasis</Link></li>
              <li><Link href="/kulcha-fair" className="no-underline hover:text-parchment">The Kulcha Fair</Link></li>
              <li><Link href="/get-involved" className="no-underline hover:text-parchment">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[0.7rem] uppercase tracking-eyebrow text-amber">
              Contact
            </h4>
            <ul className="grid gap-2.5">
              <li><a href={site.whatsappLink} className="no-underline hover:text-parchment">WhatsApp {site.whatsappDisplay}</a></li>
              <li><a href={`mailto:${site.email}`} className="break-all no-underline hover:text-parchment">{site.email}</a></li>
              <li><a href={site.instagram} className="no-underline hover:text-parchment">{site.instagramHandle}</a></li>
              <li><a href={site.chaosOasis} className="no-underline hover:text-parchment">Chaos Oasis website</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-parchment/15 pt-6 text-[0.8rem] text-parchment/50">
          © {new Date().getFullYear()} KAWOK. Renders and drawings shown on this site are
          concept work, not completed structures. KAWOK does not speak on behalf of Maya
          communities; our monuments are contemporary works inspired by Maya architecture,
          not reconstructions of sacred sites.
        </p>
      </div>
    </footer>
  );
}
