import type { Metadata } from "next";
import Link from "next/link";
import { Check, CtaBand, Eyebrow, Media, PageHero } from "../../components/ui";

export const metadata: Metadata = {
  title: "Supported Accommodation",
  description:
    "Shared houses, ensuite studios and self-contained flats across Birmingham for adults aged 18 to 65, with housing management and support from one provider.",
};

const TYPES = [
  {
    title: "Shared houses",
    photo: "Photo: shared house kitchen",
    body: "Four to six bedrooms in a licensed HMO. Your own room with a lock, shared kitchen, lounge and bathrooms, with communal areas cleaned weekly.",
    points: [
      "Furnished room, bills included",
      "Weekly staff presence on site",
      "Suited to people who do better around others",
    ],
  },
  {
    title: "Ensuite studios",
    photo: "Photo: ensuite studio room",
    body: "Your own room with a private shower room and basin, plus a shared kitchen. Privacy without the isolation of a flat of your own.",
    points: [
      "Private washing facilities",
      "Good fit after a shared house",
      "Suited to people who need low-contact space",
    ],
  },
  {
    title: "Self-contained flats",
    photo: "Photo: self-contained flat",
    body: "Your own front door, kitchen and bathroom, with support that visits by arrangement. The step immediately before an independent tenancy.",
    points: [
      "Full independence, planned support visits",
      "Suitable for couples and people with access visits",
      "Move-on focused from day one",
    ],
  },
];

const INCLUDED = [
  "A furnished room: bed, storage, seating and curtains",
  "Gas, electricity, water and broadband included in the charge",
  "A lock on every bedroom door and a key of your own",
  "Fire detection, emergency lighting and a current fire risk assessment",
  "A named support worker and a support plan you help write",
  "An out-of-hours number for emergencies and repairs",
];

const NOT_SUITABLE = [
  "Someone needs waking night staff or personal care",
  "The risk to other residents cannot be managed in shared housing",
  "The placement would need a registered care setting",
];

export default function SupportedAccommodationPage() {
  return (
    <>
      <PageHero
        deep
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
        title="Supported Accommodation"
        intro="Furnished, licensed, compliant homes across Birmingham, with housing management and housing-related support from the same organisation. Shared houses, ensuite studios and self-contained flats, matched to the level of independence someone is ready for."
      >
        <div className="row gap-14" style={{ paddingTop: "8px" }}>
          <Link className="btn btn--mint" href="/contact-us">
            Check availability
          </Link>
          <Link className="btn btn--ghost-light" href="/what-we-do">
            How support works
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container stack gap-48">
          <div className="stack gap-20">
            <Eyebrow>Accommodation types</Eyebrow>
            <h2 className="h2">Pick the level of independence, not just the postcode.</h2>
          </div>
          <div className="grid grid--3">
            {TYPES.map((t) => (
              <article key={t.title} className="card card--media">
                <Media variant="card" label={t.photo} />
                <div className="card__body">
                  <h3 className="h4">{t.title}</h3>
                  <p className="body-sm">{t.body}</p>
                  <ul className="check-list card__spacer" style={{ gap: "9px" }}>
                    {t.points.map((p) => (
                      <li key={p} className="check-item" style={{ fontSize: "14px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" stroke="#0b4b55" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ground">
        <div className="container grid grid--2" style={{ gap: "clamp(40px, 5vw, 72px)", alignItems: "start" }}>
          <div className="stack gap-24">
            <Eyebrow>What is included</Eyebrow>
            <h2 className="h3">In every home we manage.</h2>
            <ul className="check-list">
              {INCLUDED.map((i) => (
                <Check key={i}>{i}</Check>
              ))}
            </ul>
          </div>
          <div className="stack gap-24">
            <Eyebrow>Eligibility</Eyebrow>
            <h2 className="h3">Who we can accept.</h2>
            <p className="body">
              We accept referrals for adults aged 18 to 65 with a housing need and a low to medium
              support need. Every referral is assessed against the property, the other residents and
              our staffing.
            </p>
            <div className="card">
              <h3 className="h4" style={{ fontSize: "19px" }}>
                We are usually not the right service when
              </h3>
              <ul className="stack gap-12">
                {NOT_SUITABLE.map((n) => (
                  <li key={n} className="dot-item">
                    {n}
                  </li>
                ))}
              </ul>
              <p className="note">
                If that is the case we will say so quickly and, where we can, point you to a service
                that fits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ask for this week's vacancy list."
        body="Sent as a simple list by property type, area and need level."
        ctaLabel="Request availability"
        ctaHref="/make-a-referral"
      />
    </>
  );
}
