import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  credit,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  imageAlt: string;
  credit?: string;
}) {
  return (
    <section className="relative bg-ink">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={imageAlt}
        fetchPriority="high"
        decoding="async"
        className="h-[clamp(20rem,52vh,32rem)] w-full object-cover opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25"
      />
      {credit && (
        <p className="caption absolute right-5 top-5 border border-parchment/25 bg-ink/45 px-3 py-1.5 !text-parchment/75 md:right-10">
          {credit}
        </p>
      )}
      <div className="absolute inset-x-0 bottom-0 pb-[clamp(2rem,5vw,3.5rem)] text-parchment">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow !text-amber mb-4">{eyebrow}</p>
            <h1 style={{ fontSize: "clamp(2.1rem,5.4vw,4rem)" }}>{title}</h1>
            {lede && <p className="lede mt-5 max-w-measure !text-parchment/80">{lede}</p>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
