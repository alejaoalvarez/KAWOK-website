/** A single course of bottle ends, used as a rule between sections. */
export default function Course({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`course ${className}`} />;
}
