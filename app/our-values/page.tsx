import type { Metadata } from "next";
import { Check, CtaBand, PageHero } from "../../components/ui";
import { site } from "../../site.config";

export const metadata: Metadata = {
  title: "Our Values",
  description:
    "Dignity, safety, honesty, independence and consistency — and what each one obliges Prospect Pathways to do in practice.",
};

const VALUES = [
  {
    n: "01",
    title: "Dignity",
    lead: "Everyone we house is an adult in their own home, and is spoken to that way — including when we are raising something difficult about rent, behaviour or risk.",
    points: [
      "Staff knock and wait, and give notice for planned visits except in an emergency.",
      "House rules are explained at sign-up, applied consistently, and never invented on the spot.",
      "Residents can see what is written about them and add their own view to it.",
    ],
  },
  {
    n: "02",
    title: "Safety",
    lead: "Safety is the part of this work with no room for judgement calls. Buildings are compliant, risks are assessed and shared, and concerns are acted on the day they are raised.",
    points: [
      "Fire risk assessments, gas and electrical certification current in every property.",
      "Risk assessments reviewed when anything changes, not only on a calendar date.",
      "A named safeguarding lead and a clear route into adult social care.",
    ],
  },
  {
    n: "03",
    title: "Honesty",
    lead: "We would rather lose a placement than take one we cannot do well. Partners get a straight answer about capacity, suitability and timescales.",
    points: [
      "Referrals declined with a reason, and a suggestion of where else to try.",
      "Charges, licence terms and what is included explained before anyone signs.",
      "When we get something wrong, we say so, in writing, and say what changed.",
    ],
  },
  {
    n: "04",
    title: "Independence",
    lead: "Good support makes itself less necessary. We do things with residents rather than for them, and we plan for the day they no longer need us.",
    points: [
      "Benefit claims, appointments and budgeting done alongside the resident, not on their behalf.",
      "Support plans set out what the resident wants, in their words, not a template.",
      "Move-on discussed from the first review, not the last month.",
    ],
  },
  {
    n: "05",
    title: "Consistency",
    lead: "The standard should not depend on which property you were placed in or which worker was on shift. Same checks, same records, same response times, everywhere.",
    points: [
      "The same property checks and communal standards in every home we manage.",
      "Keywork recorded the same way by every worker, so cover never means starting again.",
      `Complaints logged, answered within ${site.complaintsAcknowledgementDays} working days and reported to the board.`,
    ],
  },
];

export default function OurValuesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about-us" }]}
        title="Our Values"
        intro="Five words are easy. Underneath each one is what it actually obliges us to do, and what a resident or a partner should do if we fall short of it."
      />

      <section className="section">
        <div className="container">
          {VALUES.map((v) => (
            <div key={v.n} className="value-row">
              <div className="stack gap-14">
                <div className="index-num">{v.n}</div>
                <h2 className="h3">{v.title}</h2>
              </div>
              <div className="stack gap-16">
                <p className="lead">{v.lead}</p>
                <ul className="check-list">
                  {v.points.map((p) => (
                    <Check key={p}>{p}</Check>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        deep
        title="If we are not living up to this, tell us."
        body="Residents, families and partners can raise a concern directly with the service manager, or use our complaints procedure. Either way it is logged and answered."
        ctaLabel="Raise a concern"
        ctaHref="/contact-us"
      />
    </>
  );
}
