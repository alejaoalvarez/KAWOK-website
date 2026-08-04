import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lede?: string | string[];
  className?: string;
}) {
  const paras = Array.isArray(lede) ? lede : lede ? [lede] : [];
  return (
    <Reveal className={`max-w-measure ${className}`}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="h-section">{title}</h2>
      {paras.length > 0 && (
        <div className="prose-kawok mt-6">
          {paras.map((p, i) => (
            <p key={i} className="lede">
              {p}
            </p>
          ))}
        </div>
      )}
    </Reveal>
  );
}
