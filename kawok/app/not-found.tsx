import Link from "next/link";

export default function NotFound() {
  return (
    <section className="band">
      <div className="wrap max-w-measure">
        <p className="eyebrow mb-5">404</p>
        <h1 className="h-section">That page is not here.</h1>
        <p className="lede mt-6">
          The link may be old, or the page may have moved. The main sections are all reachable
          from the menu above.
        </p>
        <Link href="/" className="btn btn-solid mt-8">Back to the home page</Link>
      </div>
    </section>
  );
}
