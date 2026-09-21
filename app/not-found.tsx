import Link from "next/link";
import { PageHero } from "../components/ui";

export default function NotFound() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }]}
        title="Page not found"
        intro="That address does not exist on this site. It may have moved, or the link may have been typed wrongly."
      />
      <section className="section">
        <div className="container stack gap-24" style={{ alignItems: "flex-start" }}>
          <p className="body">Try one of these instead:</p>
          <div className="row gap-14">
            <Link className="btn btn--primary" href="/">Home</Link>
            <Link className="btn btn--ghost" href="/supported-accommodation">Supported accommodation</Link>
            <Link className="btn btn--ghost" href="/contact-us">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
