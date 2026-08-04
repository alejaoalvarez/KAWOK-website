import Reveal from "./Reveal";

/**
 * An image with a caption. Every render on this site is captioned as a
 * concept render — that promise is kept here, in one place.
 */
export default function Figure({
  src,
  alt,
  caption,
  className = "",
  imgClassName = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <Reveal as="figure" className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`w-full ${imgClassName}`}
      />
      {caption && <figcaption className="caption mt-3">{caption}</figcaption>}
    </Reveal>
  );
}
