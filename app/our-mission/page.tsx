import type { Metadata } from "next";
import { CtaBand, Eyebrow, PageHero } from "../../components/ui";
import { site } from "../../site.config";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "What Prospect Pathways is here to do, and the four commitments that follow from it.",
};

const COMMITMENTS = [
  {
    title: "We place people we can actually help",
    body: "If a referral needs more than our staffing and our properties can safely provide, we say so and help you find somewhere that can. A placement that breaks down in six weeks helps nobody.",
  },
  {
    title: "Support is planned, not incidental",
    body: "Every resident has a named worker, a written plan they contributed to, and keywork on a set cycle — not a knock on the door when something has already gone wrong.",
  },
  {
    title: "The building is never the problem",
    body: "Heating, damp, locks, fire safety and repairs are our responsibility and our cost. Nobody should be trying to rebuild their life in a cold house with a broken door.",
  },
  {
    title: "Move-on is the point, not the exception",
    body: "From the first review we are working towards the day someone leaves. Applications, references, deposits, furniture and a handover are part of the support, not an afterthought.",
  },
];

export default function OurMissionPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about-us" }]}
        title="Our Mission"
        intro="A mission is only worth writing down if someone can hold you to it. Here is ours, and what it commits us to every week."
      />

      <section className="section section--deep">
        <div className="container stack gap-32" style={{ alignItems: "center", textAlign: "center" }}>
          <Eyebrow light>Our mission</Eyebrow>
          <p
            className="h3"
            style={{ color: "#ffffff", maxWidth: "24ch", fontWeight: 500, lineHeight: 1.35, maxInlineSize: "1000px" }}
          >
            To give adults aged 18 to 65 a safe, well-run home and the practical support they need to
            keep one &mdash; and to hand them on to an independent tenancy in better shape than we
            found them.
          </p>
          <p className="note" style={{ color: "#9ccdd3" }}>
            Adopted by the board, reviewed annually. Last reviewed {site.policyReviewedOn}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container stack gap-48">
          <div className="stack gap-20">
            <Eyebrow>In practice</Eyebrow>
            <h2 className="h2">Four commitments that follow from it.</h2>
          </div>
          <div className="grid grid--2">
            {COMMITMENTS.map((c) => (
              <article key={c.title} className="card card--ground" style={{ padding: "clamp(28px, 3.4vw, 40px)" }}>
                <h3 className="h3">{c.title}</h3>
                <p className="body">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ground">
        <div className="container stack gap-40">
          <div className="stack gap-20">
            <Eyebrow>How we check ourselves</Eyebrow>
            <h2 className="h2">The numbers we report to our commissioners.</h2>
            <p className="note measure">
              Figures below to be completed from your latest quarterly performance report.
            </p>
          </div>
          <div className="grid grid--3">
            <div className="card">
              <span className="stats__value" style={{ fontSize: "clamp(30px, 3vw, 40px)" }}>
                {site.stats.plannedMoveOnPercent}
              </span>
              <p className="body">
                of residents move on in a planned way rather than through eviction or abandonment
              </p>
            </div>
            <div className="card">
              <span className="stats__value" style={{ fontSize: "clamp(30px, 3vw, 40px)" }}>
                {site.stats.reviewedOnTimePercent}
              </span>
              <p className="body">of support plans reviewed within the agreed period</p>
            </div>
            <div className="card">
              <span className="stats__value" style={{ fontSize: "clamp(30px, 3vw, 40px)" }}>
                {site.stats.emergencyRepairHours}
              </span>
              <p className="body">average time to attend an emergency repair</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Read what we are working towards, and the values underneath it."
        ctaLabel="Our Vision"
        ctaHref="/our-vision"
        secondary={{ label: "Our Values", href: "/our-values" }}
      />
    </>
  );
}
