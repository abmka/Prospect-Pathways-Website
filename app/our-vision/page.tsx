import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Media, PageHero } from "../../components/ui";

export const metadata: Metadata = {
  title: "Our Vision",
  description:
    "Where Prospect Pathways is trying to get to, and the three things we want to be true within five years.",
};

const HORIZONS = [
  {
    n: "01",
    title: "A move-on pathway that works",
    body: "Enough self-contained units of our own, and enough relationships with social and private landlords, that a resident who is ready to move on is never held back by a shortage of somewhere to go.",
  },
  {
    n: "02",
    title: "A workforce that stays",
    body: "Support work treated as a career: proper induction, funded qualifications, real supervision and caseloads that make good practice possible. Continuity of worker is what residents notice most.",
  },
  {
    n: "03",
    title: "Evidence, not assertion",
    body: "Outcomes published openly — planned move-ons, tenancy sustainment, resident feedback — so partners can judge us on results rather than on a brochure.",
  },
];

export default function OurVisionPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about-us" }]}
        title="Our Vision"
        intro="Where we are trying to get to, and what we are prepared to change about ourselves to get there."
      />

      <section className="section">
        <div className="container grid grid--split">
          <div className="stack gap-24">
            <Eyebrow>The vision</Eyebrow>
            <h2 className="h3" style={{ fontWeight: 500, lineHeight: 1.3 }}>
              A Birmingham where no adult is stuck in unsuitable housing because there was nowhere
              decent to go &mdash; and where supported accommodation is something people are glad to be
              referred to.
            </h2>
            <p className="body">
              Supported housing has a reputation problem in this city, and a good deal of it has been
              earned. We want to be part of the evidence that it can be done well: properties a
              commissioner would be happy to inspect unannounced, staff who stay, and residents who
              leave better off than they arrived.
            </p>
          </div>
          <Media variant="tall" label="Photo: a Birmingham street where we hold properties" />
        </div>
      </section>

      <section className="section section--deep">
        <div className="container stack gap-48">
          <div className="stack gap-20">
            <Eyebrow light>What we are building towards</Eyebrow>
            <h2 className="h2">Three things we want to be true within five years.</h2>
          </div>
          <div className="grid grid--3">
            {HORIZONS.map((h) => (
              <article key={h.n} className="card card--deep" style={{ padding: "clamp(28px, 3vw, 38px)" }}>
                <div className="index-num" style={{ color: "#45c1b7" }}>
                  {h.n}
                </div>
                <h3 className="h4">{h.title}</h3>
                <p className="body">{h.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ground">
        <div className="container stack gap-28" style={{ alignItems: "flex-start" }}>
          <h2 className="h2 measure">Residents shape this, not just the board.</h2>
          <p className="body measure">
            Our resident forum meets [FREQUENCY] and feeds directly into how properties are run: house
            rules, repairs priorities, communal standards and what support should look like. Where we
            can act on it, we do; where we cannot, we explain why.
          </p>
          <Link className="btn btn--primary" href="/contact-us">
            Talk to us about partnership
          </Link>
        </div>
      </section>
    </>
  );
}
