import Link from "next/link";
import { PageHero } from "./ui";

/**
 * Placeholder page for the footer legal links. Drop the real policy text into
 * `children` (or replace the page entirely) when you have it.
 */
export default function PolicyStub({
  title,
  intro,
  points,
}: {
  title: string;
  intro: string;
  points: string[];
}) {
  return (
    <>
      <PageHero crumbs={[{ label: "Home", href: "/" }]} title={title} intro={intro} />
      <section className="section">
        <div className="container stack gap-24" style={{ maxWidth: "820px" }}>
          <div className="card card--ground">
            <h2 className="h4">To be added before launch</h2>
            <p className="body">This page should cover:</p>
            <ul className="stack gap-12">
              {points.map((p) => (
                <li key={p} className="dot-item">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <p className="body">
            If you already hold this policy as a document, send it over and it can be dropped
            straight in.
          </p>
          <div>
            <Link className="btn btn--primary" href="/contact-us">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
