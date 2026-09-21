import type { Metadata } from "next";
import { ArrowLink, CtaBand, Eyebrow, PageHero } from "../../components/ui";
import { IconHeart, IconHome, IconPath } from "../../components/Icon";
import { site } from "../../site.config";

export const metadata: Metadata = {
  title: "What We Do?",
  description:
    "Housing management, housing-related support and move-on — the three services Prospect Pathways delivers in-house.",
};

const SERVICES = [
  {
    icon: <IconHome size={28} />,
    title: "Housing management",
    intro:
      "Everything to do with the building and the licence, handled by us, from the day a resident moves in to the day they hand back the keys.",
    link: { href: "/supported-accommodation", label: "Our accommodation" },
    items: [
      { title: "Sign-up and licences", body: "Occupancy agreements explained in plain English, with charges set out line by line." },
      { title: "Repairs and maintenance", body: "Reported repairs triaged by priority, with emergencies attended out of hours." },
      { title: "Rent and arrears", body: "Housing Benefit claims set up at sign-up, monitored weekly, arrears worked through early." },
      { title: "Anti-social behaviour", body: "House rules applied consistently, with a documented escalation route and support first." },
    ],
  },
  {
    icon: <IconHeart size={28} />,
    title: "Housing-related support",
    intro:
      "Low to medium level support for adults who can live independently with the right help in place, delivered through planned keywork rather than crisis response.",
    items: [
      { title: "Income and benefits", body: "Universal Credit, PIP and Housing Benefit claims, appeals, and budgeting that survives a sanction." },
      { title: "Health and appointments", body: "Registering with a GP and dentist, attending appointments, and joining up with community health teams." },
      { title: "Tenancy skills", body: "Cooking, cleaning, utilities, paperwork and being a neighbour — the things a tenancy actually turns on." },
      { title: "Safeguarding and risk", body: "Live risk assessments, clear escalation, and referrals into adult social care where the need goes beyond us." },
    ],
  },
  {
    icon: <IconPath size={28} />,
    title: "Move-on and resettlement",
    intro:
      "Supported accommodation is a stage, not a destination. Move-on work starts at the first support plan review, not when notice is served.",
    items: [
      { title: "Housing applications", body: "Local authority registration, bidding, and realistic conversations about what is available and when." },
      { title: "Private rented access", body: "References, deposit and rent-in-advance schemes, and introductions to landlords we already work with." },
      { title: "Setting up a home", body: "Furniture and white goods, utility accounts, council tax and contents insurance sorted before move-in day." },
      { title: "Warm handover", body: "A planned handover to community services, and a period of follow-up contact so the tenancy holds." },
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
        title="What We Do?"
        intro="Prospect Pathways does two jobs at once: we are the housing provider and the support provider. Doing both means repairs, rent, risk and keywork are never somebody else's problem."
      />

      <section className="section">
        <div className="container stack gap-56">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="stack gap-56">
              {i > 0 && <div style={{ height: "1px", background: "var(--line-soft)" }} aria-hidden="true" />}
              <div className="grid grid--split-narrow">
                <div className="stack gap-18" style={{ gap: "18px" }}>
                  <div className="icon-chip">{s.icon}</div>
                  <h2 className="h3">{s.title}</h2>
                  <p className="body">{s.intro}</p>
                  {s.link && <ArrowLink href={s.link.href}>{s.link.label}</ArrowLink>}
                </div>
                <div className="grid grid--2" style={{ gap: "20px" }}>
                  {s.items.map((item) => (
                    <div key={item.title} className="card card--ground" style={{ gap: "8px", padding: "28px" }}>
                      <h3 className="h4" style={{ fontSize: "18px" }}>
                        {item.title}
                      </h3>
                      <p className="body-sm">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--deep">
        <div className="container stack gap-40">
          <div className="stack gap-20">
            <Eyebrow light>Working with us</Eyebrow>
            <h2 className="h2">What partners can expect from a referral.</h2>
          </div>
          <div className="grid grid--3">
            <div className="card card--deep">
              <h3 className="h4">A straight answer</h3>
              <p className="body-sm">
                An accept or decline within {site.stats.referralResponseHours.replace(" hrs", "")}{" "}
                working hours, with the reason given either way.
              </p>
            </div>
            <div className="card card--deep">
              <h3 className="h4">A named contact</h3>
              <p className="body-sm">
                One person you can call about that placement, who knows the resident and the property.
              </p>
            </div>
            <div className="card card--deep">
              <h3 className="h4">Reporting you can use</h3>
              <p className="body-sm">
                Support plans, reviews and outcome reporting shared on the cycle your contract
                requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have someone who needs housing and support?"
        ctaLabel="Make a referral"
        ctaHref="/make-a-referral"
      />
    </>
  );
}
