import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Media, PageHero } from "../../components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A Birmingham supported housing provider for adults aged 18 to 65 — who we are, how a placement works, and how we are governed.",
};

const STAGES = [
  {
    n: "1",
    title: "Referral and screening",
    body: "You send the support needs and risk information you hold. We screen it against the property, the other residents and our staffing.",
  },
  {
    n: "2",
    title: "Sign-up and settling in",
    body: "Licence agreement explained in plain English, benefit claims started the same week, and a first keywork session within five working days.",
  },
  {
    n: "3",
    title: "Planned support",
    body: "A support plan the resident helps write, reviewed regularly, with keywork on income, health, tenancy skills and whatever is getting in the way.",
  },
  {
    n: "4",
    title: "Move-on",
    body: "Applications, references, deposits and furniture sorted before the move, then a handover to community services so nobody is dropped.",
  },
];

const GOVERNANCE = [
  {
    title: "Property compliance",
    body: "Gas, electrical, fire risk assessment, emergency lighting and HMO licensing tracked per property with renewal dates.",
  },
  {
    title: "Safeguarding",
    body: "A named safeguarding lead, mandatory training for all staff, and clear referral routes into adult social care.",
  },
  {
    title: "Support records",
    body: "Support plans, risk assessments and keywork notes recorded against each resident and reviewed on a set cycle.",
  },
  {
    title: "Policy framework",
    body: "A full policy suite covering the Care Act 2014, tenancy management, complaints, equality and data protection.",
  },
];

const NEXT = [
  { title: "Our Team", body: "The directors, the support team, and who holds which responsibility.", href: "/our-team", cta: "Meet the team" },
  { title: "Our Mission", body: "What we are here to do, stated plainly enough to be held to.", href: "/our-mission", cta: "Read the mission" },
  { title: "Our Vision", body: "The Birmingham we are working towards, and our part in it.", href: "/our-vision", cta: "Read the vision" },
  { title: "Our Values", body: "Five commitments, each with what it means in practice.", href: "/our-values", cta: "Read the values" },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }]}
        title="About Us"
        intro="Prospect Pathways was set up to do supported housing the way it is supposed to work: good buildings, honest referrals, support workers who stay long enough to be useful, and a clear route out to an independent tenancy."
      />

      <section className="section">
        <div className="container grid grid--split">
          <div className="stack gap-24">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="h2">Started because the standard was too low.</h2>
            <p className="body">
              Anyone who has worked in Birmingham housing has seen it: properties let to people with
              real support needs, then barely visited again. Rooms filled because a bed was empty, not
              because the placement was right. Residents who could not name their support worker.
            </p>
            <p className="body">
              We built Prospect Pathways to be the opposite of that. We keep the portfolio
              deliberately sized to what we can manage properly. We decline referrals we cannot safely
              meet. And we measure ourselves on how many people move on successfully, not on how many
              beds are full.
            </p>
            <p className="body">
              Today we house adults aged 18 to 65 across Birmingham in shared houses, ensuite studios
              and self-contained flats, working alongside local authority commissioners, probation,
              health and the voluntary sector.
            </p>
          </div>
          <Media variant="tall" label="Photo: the Prospect Pathways team outside a Birmingham property" />
        </div>
      </section>

      <section className="section section--ground">
        <div className="container stack gap-48">
          <div className="stack gap-20">
            <Eyebrow>How a placement works</Eyebrow>
            <h2 className="h2">From referral to move-on, in four stages.</h2>
          </div>
          <div className="grid grid--4">
            {STAGES.map((s) => (
              <article key={s.n} className="card">
                <div className="numbered">{s.n}</div>
                <h3 className="h4">{s.title}</h3>
                <p className="body-sm">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container grid grid--split-narrow">
          <div className="stack gap-20">
            <Eyebrow light>Governance</Eyebrow>
            <h2 className="h2">Inspectable on any day of the week.</h2>
            <p className="body">
              Our records are kept so that a commissioner, an auditor or a benefit officer can pick a
              property at random and find everything in order.
            </p>
          </div>
          <div className="grid grid--2" style={{ gap: "20px" }}>
            {GOVERNANCE.map((g) => (
              <div key={g.title} className="card card--deep">
                <h3 className="h4">{g.title}</h3>
                <p className="body-sm">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack gap-40">
          <h2 className="h2">Where to go next</h2>
          <div className="grid grid--4">
            {NEXT.map((n) => (
              <Link key={n.href} href={n.href} className="card card--ground" style={{ textDecoration: "none" }}>
                <h3 className="h4">{n.title}</h3>
                <p className="body-sm">{n.body}</p>
                <span className="card__spacer" style={{ fontWeight: 600, color: "var(--ink)" }}>
                  {n.cta} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
