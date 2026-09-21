import Link from "next/link";
import { site } from "../site.config";
import { ArrowLink, Check, CtaBand, Eyebrow, Media } from "../components/ui";
import { IconHeart, IconHome, IconPath } from "../components/Icon";

const SUPPORTED = [
  "People who are homeless or rough sleeping",
  "People leaving prison or on probation licence",
  "People fleeing domestic abuse",
  "People moving on from treatment or detox",
  "People ready for discharge from hospital",
  "Refugees and people with recent leave to remain",
  "Care leavers aged 18 and over",
  "Adults whose tenancy has broken down",
];

const VALUES = [
  { n: "01", title: "Dignity", body: "Adults are spoken to as adults, in their own home." },
  { n: "02", title: "Safety", body: "Compliant buildings, live risk assessments, no exceptions." },
  { n: "03", title: "Honesty", body: "We say what we can do, and what we cannot." },
  { n: "04", title: "Independence", body: "Support that reduces over time, by design." },
  { n: "05", title: "Consistency", body: "The same standard in every property, every week." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container grid grid--split">
          <div className="stack gap-28">
            <Eyebrow light>Supported accommodation in Birmingham</Eyebrow>
            <h1 className="h1--hero">A place to live, and the support to move forward.</h1>
            <p className="lead measure-sm">
              {site.name} provides supported exempt accommodation and housing-related support for
              adults aged 18 to 65. Safe, well-managed homes, a named support worker, and a clear plan
              for what comes next.
            </p>
            <div className="row gap-14">
              <Link className="btn btn--mint" href="/make-a-referral">
                Make a referral
              </Link>
              <Link className="btn btn--ghost-light" href="/supported-accommodation">
                See our accommodation
              </Link>
            </div>
            <p className="note" style={{ color: "#9ccdd3", maxWidth: "52ch" }}>
              Referrals accepted from local authorities, probation and prison release teams, hospital
              discharge, and voluntary sector partners.
            </p>
          </div>
          <div className="hero__media-wrap">
            <Media
              deep
              variant="tall"
              label="Photo: a resident and support worker in a shared lounge"
            />
            <div className="hero__accent" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats">
          <div className="stats__cell">
            <span className="stats__value">18&ndash;65</span>
            <span className="stats__label">The age range we support</span>
          </div>
          <div className="stats__cell">
            <span className="stats__value">{site.stats.homes}</span>
            <span className="stats__label">Homes across Birmingham</span>
          </div>
          <div className="stats__cell">
            <span className="stats__value">24/7</span>
            <span className="stats__label">On-call response for residents</span>
          </div>
          <div className="stats__cell">
            <span className="stats__value">{site.stats.referralResponseHours}</span>
            <span className="stats__label">Typical response to a referral</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container grid grid--split">
          <Media variant="tall" label="Photo: exterior of a Prospect Pathways property" />
          <div className="stack gap-24">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="h2">Housing that is managed properly, and support that turns up.</h2>
            <p className="body">
              We are a Birmingham-based supported housing provider working with adults aged 18 to 65
              who need somewhere stable to live and practical help to keep it. Our residents come to
              us from local authority housing teams, probation, hospital discharge, refuges and
              outreach services.
            </p>
            <p className="body">
              Every property is ours to manage end to end: repairs, health and safety, anti-social
              behaviour, rent and arrears. Every resident has a named support worker, a support plan
              they helped write, and someone on call when things go wrong out of hours.
            </p>
            <ArrowLink href="/about-us">More about us</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section--ground">
        <div className="container stack gap-48">
          <div className="row row--between row--end gap-40">
            <div className="stack gap-20">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="h2">Three things, done thoroughly.</h2>
            </div>
            <Link className="btn btn--ghost btn--sm" href="/what-we-do">
              All our services
            </Link>
          </div>
          <div className="grid grid--3">
            <article className="card">
              <div className="icon-chip">
                <IconHome />
              </div>
              <h3 className="h4">Supported accommodation</h3>
              <p className="body-sm">
                Shared houses, ensuite studios and self-contained flats. Furnished, warm, compliant
                and ready to move into, with housing management that answers the phone.
              </p>
              <div className="card__spacer">
                <ArrowLink href="/supported-accommodation">Read more</ArrowLink>
              </div>
            </article>
            <article className="card">
              <div className="icon-chip">
                <IconHeart />
              </div>
              <h3 className="h4">Housing-related support</h3>
              <p className="body-sm">
                A named support worker, a personalised plan, and regular keywork covering benefits,
                budgeting, health appointments, tenancy skills, safeguarding and risk.
              </p>
              <div className="card__spacer">
                <ArrowLink href="/what-we-do">Read more</ArrowLink>
              </div>
            </article>
            <article className="card">
              <div className="icon-chip">
                <IconPath />
              </div>
              <h3 className="h4">Move-on and resettlement</h3>
              <p className="body-sm">
                Practical help to hold a home of your own: bidding and applications, references,
                deposits, furniture, and a warm handover to community services.
              </p>
              <div className="card__spacer">
                <ArrowLink href="/what-we-do">Read more</ArrowLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack gap-48">
          <div className="stack gap-20">
            <Eyebrow>Our accommodation</Eyebrow>
            <h2 className="h2">Three levels of independence, one standard of management.</h2>
          </div>
          <div className="grid grid--3">
            <article className="card card--media">
              <Media variant="card" label="Photo: shared house lounge" />
              <div className="card__body">
                <h3 className="h4">Shared houses</h3>
                <p className="body-sm">
                  Four to six bedrooms with a lock on every door, a shared kitchen, lounge and
                  bathrooms, and weekly communal cleaning. Best for people who benefit from other
                  people being around.
                </p>
              </div>
            </article>
            <article className="card card--media">
              <Media variant="card" label="Photo: ensuite studio" />
              <div className="card__body">
                <h3 className="h4">Ensuite studios</h3>
                <p className="body-sm">
                  Your own room with a private shower room and basin, plus a shared kitchen. More
                  privacy than a shared house, without the isolation of living entirely alone.
                </p>
              </div>
            </article>
            <article className="card card--media">
              <Media variant="card" label="Photo: self-contained flat" />
              <div className="card__body">
                <h3 className="h4">Self-contained flats</h3>
                <p className="body-sm">
                  Your own front door, kitchen and bathroom, with support that visits rather than
                  lives next door. The last step before an independent tenancy.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container grid grid--split-narrow">
          <div className="stack gap-20">
            <Eyebrow light>Who we support</Eyebrow>
            <h2 className="h2">Adults, aged 18 to 65.</h2>
            <p className="body">
              We are not a children&rsquo;s or young people&rsquo;s service. Everyone we house is an
              adult with a housing need and a level of support need we are commissioned and resourced
              to meet.
            </p>
          </div>
          <ul className="check-list--cols">
            {SUPPORTED.map((item) => (
              <Check key={item} light>
                {item}
              </Check>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container stack gap-40">
          <div className="row row--between row--end gap-40">
            <div className="stack gap-20">
              <Eyebrow>Our values</Eyebrow>
              <h2 className="h2">What residents can hold us to.</h2>
            </div>
            <Link className="btn btn--ghost btn--sm" href="/our-values">
              Our values in full
            </Link>
          </div>
          <div className="grid grid--5">
            {VALUES.map((v) => (
              <div key={v.n} className="card card--ground">
                <div className="index-num">{v.n}</div>
                <h3 className="h4">{v.title}</h3>
                <p className="note" style={{ color: "var(--body)" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ground">
        <div className="container grid grid--split">
          <div className="stack gap-24">
            <Eyebrow>For landlords</Eyebrow>
            <h2 className="h2">Let your property to us and stop chasing rent.</h2>
            <p className="body">
              We take three to five year leases on suitable houses and flats across Birmingham, pay
              the rent whether the rooms are full or empty, and hand the property back in the
              condition we agreed.
            </p>
            <ul className="check-list">
              <Check>Rent paid monthly, void periods included</Check>
              <Check>No management fees and no tenant-find fees</Check>
              <Check>Licensing, certification and compliance handled</Check>
            </ul>
            <div>
              <Link className="btn btn--primary" href="/for-landlords">
                See the landlord offer
              </Link>
            </div>
          </div>
          <Media label="Photo: landlord and housing manager at a property handover" />
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--2">
          <div className="card card--ground" style={{ padding: "clamp(32px, 4vw, 48px)" }}>
            <h3 className="h3">Work with us</h3>
            <p className="body">
              We hire support workers, housing officers and maintenance staff across Birmingham. Full
              training, real supervision, and caseloads that let you do the job properly.
            </p>
            <div className="card__spacer">
              <ArrowLink href="/careers">See current vacancies</ArrowLink>
            </div>
          </div>
          <div className="card card--ground" style={{ padding: "clamp(32px, 4vw, 48px)" }}>
            <h3 className="h3">Refer someone today</h3>
            <p className="body">
              Send us a referral with the support needs and risk information you hold. We will tell
              you honestly whether we can meet the need, and how quickly.
            </p>
            <div className="card__spacer">
              <ArrowLink href="/make-a-referral">Start a referral</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Somewhere safe tonight, and a plan for next year."
        body={`Talk to our referrals team on ${site.phone}, ${site.officeHours.toLowerCase()}.`}
        ctaLabel="Contact us"
        ctaHref="/contact-us"
      />
    </>
  );
}
