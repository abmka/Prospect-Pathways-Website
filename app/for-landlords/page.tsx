import type { Metadata } from "next";
import Link from "next/link";
import { Check, CtaBand, Eyebrow, Media, PageHero, Step } from "../../components/ui";
import { IconDoc, IconPath, IconPeople, IconShield, IconSpanner, IconWallet } from "../../components/Icon";
import { site } from "../../site.config";

export const metadata: Metadata = {
  title: "For Landlords",
  description:
    "Lease your Birmingham property to Prospect Pathways: guaranteed rent including voids, no fees, and full compliance and management handled.",
};

const OFFER = [
  {
    icon: <IconWallet />,
    title: "Rent paid every month",
    body: "A fixed monthly payment on the same date, whether the property is full, half full or empty. Voids are our risk, not yours.",
  },
  {
    icon: <IconShield />,
    title: "Compliance handled",
    body: "HMO licensing, gas and electrical certification, fire risk assessment, emergency lighting and EPC managed and evidenced by us.",
  },
  {
    icon: <IconSpanner />,
    title: "Maintenance covered",
    body: "Day-to-day repairs, communal cleaning, garden upkeep and minor works are ours. You keep responsibility for the structure and major systems.",
  },
  {
    icon: <IconPeople />,
    title: "No tenant contact",
    body: "Residents hold a licence with us, not a tenancy with you. Sign-ups, rent, arrears, behaviour and departures never reach your phone.",
  },
  {
    icon: <IconDoc />,
    title: "No fees, ever",
    body: "No management commission, no tenant-find fee, no renewal fee, no inventory charge. The rent we quote is the rent you receive.",
  },
  {
    icon: <IconPath />,
    title: "Handed back properly",
    body: "A photographic schedule of condition at the start, quarterly inspections throughout, and the property returned in the agreed condition.",
  },
];

const CRITERIA = [
  "Three to six bedroom houses, or blocks of flats",
  "Within reach of buses, shops and a GP surgery",
  "Sound structurally, with a working boiler and roof",
  "Empty, or vacant within a reasonable timescale",
  "Lender and freeholder consent to a company let",
  "Licensable as an HMO, or already licensed",
];

export default function ForLandlordsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container grid grid--split">
          <div className="stack gap-24">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Our Services</span>
              <span aria-hidden="true">/</span>
              <span aria-current="page">For Landlords</span>
            </nav>
            <h1 className="h1">
              Guaranteed rent, professional management, property back in good order.
            </h1>
            <p className="lead measure-sm">
              We lease houses and flats across Birmingham on three to five year agreements, pay the
              rent whether the rooms are occupied or not, and take full responsibility for management,
              compliance and day-to-day maintenance.
            </p>
            <div className="row gap-14">
              <Link className="btn btn--primary" href="/landlord-enquiry">
                Get a rent offer
              </Link>
              <Link className="btn btn--ghost" href="/supported-accommodation">
                See how we use properties
              </Link>
            </div>
          </div>
          <Media variant="tall" label="Photo: exterior of a leased property in Birmingham" />
        </div>
      </section>

      <section className="section">
        <div className="container stack gap-48">
          <div className="stack gap-20">
            <Eyebrow>The offer</Eyebrow>
            <h2 className="h2">What you get, and what you stop dealing with.</h2>
          </div>
          <div className="grid grid--3">
            {OFFER.map((o) => (
              <article key={o.title} className="card card--ground">
                <div className="icon-chip icon-chip--plain">{o.icon}</div>
                <h3 className="h4">{o.title}</h3>
                <p className="body-sm">{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container grid grid--split-narrow">
          <div className="stack gap-20">
            <Eyebrow light>What we look for</Eyebrow>
            <h2 className="h2">The kind of property that works.</h2>
            <p className="body">
              We are actively acquiring across {site.targetAreas}. If your property is close, tell us
              anyway &mdash; we would rather look than guess.
            </p>
          </div>
          <ul className="check-list--cols">
            {CRITERIA.map((c) => (
              <Check key={c} light>
                {c}
              </Check>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container stack gap-40">
          <h2 className="h2">From first call to first payment</h2>
          <div className="grid grid--4">
            <Step step="STEP 1" title="Tell us about the property">
              Address, number of rooms, condition and when it is available. A few photos help.
            </Step>
            <Step step="STEP 2" title="Viewing and offer">
              We visit within [XX] working days and put a written rent offer and lease term to you.
            </Step>
            <Step step="STEP 3" title="Paperwork">
              Company lease, schedule of condition, consents confirmed and compliance checks booked in.
            </Step>
            <Step step="STEP 4" title="Handover and rent">
              We take the keys, furnish and let the rooms, and your first payment starts on the agreed
              date.
            </Step>
          </div>
        </div>
      </section>

      <CtaBand
        title="Send us the address and we will come back with a figure."
        body="No obligation, and no agency in the middle."
        ctaLabel="Get a rent offer"
        ctaHref="/landlord-enquiry"
      />
    </>
  );
}
