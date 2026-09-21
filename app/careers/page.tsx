import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageHero, Step } from "../../components/ui";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Support worker, housing officer and maintenance roles at Prospect Pathways in Birmingham — caseloads sized so good practice is possible.",
};

const VACANCIES = [
  {
    title: "Housing Support Worker",
    body: "Keywork, support plans and risk assessments across a patch of properties in [AREA]. Driving licence preferred.",
    tags: ["Full time", "Birmingham", "[SALARY RANGE]"],
  },
  {
    title: "Housing Officer",
    body: "Sign-ups, licence management, rent and arrears, property inspections and anti-social behaviour casework.",
    tags: ["Full time", "Birmingham", "[SALARY RANGE]"],
  },
  {
    title: "Maintenance Operative",
    body: "Day-to-day repairs across the portfolio, void turnarounds, and support with compliance checks. Multi-trade experience welcome.",
    tags: ["Full time", "Birmingham", "[SALARY RANGE]"],
  },
];

const BENEFITS = [
  { title: "Real supervision", body: "Monthly one-to-ones with your line manager, plus reflective practice as a team." },
  { title: "Funded qualifications", body: "We fund relevant Level 3 and above qualifications and give you study time for them." },
  { title: "Full induction", body: "Safeguarding, mental health awareness, lone working, fire safety and first aid, all before you carry a caseload." },
  { title: "Predictable hours", body: "Rotas published [XX] weeks ahead, with on-call shared fairly and paid." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }]}
        title="Careers"
        intro="Most people leave this sector because the caseload makes good practice impossible. We size caseloads so that keywork happens on schedule, notes get written the same day, and nobody is covering four properties alone."
      />

      <section className="section">
        <div className="container stack gap-40">
          <div className="stack gap-20">
            <Eyebrow>Current vacancies</Eyebrow>
            <h2 className="h2">Open roles</h2>
            <p className="note measure">
              Roles below are placeholders &mdash; replace with your live vacancies, or link this
              section to your applicant tracking system.
            </p>
          </div>
          <div className="stack gap-20">
            {VACANCIES.map((v) => (
              <article key={v.title} className="vacancy">
                <div className="stack gap-10">
                  <h3 className="h3" style={{ fontSize: "clamp(20px, 2vw, 24px)" }}>
                    {v.title}
                  </h3>
                  <p className="body-sm">{v.body}</p>
                  <div className="row gap-10" style={{ paddingTop: "4px" }}>
                    {v.tags.map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link className="btn btn--primary btn--sm" href="/contact-us">
                  Apply
                </Link>
              </article>
            ))}
            <article className="vacancy vacancy--open">
              <div className="stack gap-8">
                <h3 className="h4">Nothing that fits?</h3>
                <p className="body-sm">
                  Send a CV anyway. We keep speculative applications on file for six months and
                  contact people first when a role opens.
                </p>
              </div>
              <Link className="btn btn--ghost btn--sm" href="/contact-us">
                Send a CV
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container grid grid--split-narrow">
          <div className="stack gap-20">
            <Eyebrow light>What we offer</Eyebrow>
            <h2 className="h2">The things that make people stay.</h2>
            <p className="body">Amend this list to match your actual terms before publishing.</p>
          </div>
          <div className="grid grid--2" style={{ gap: "20px" }}>
            {BENEFITS.map((b) => (
              <div key={b.title} className="card card--deep">
                <h3 className="h4" style={{ fontSize: "18px" }}>
                  {b.title}
                </h3>
                <p className="body-sm">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack gap-40">
          <h2 className="h2">How we recruit</h2>
          <div className="grid grid--4">
            <Step step="STEP 1" title="Application">
              CV and a short covering note. No unpaid exercises.
            </Step>
            <Step step="STEP 2" title="Interview">
              One conversation with the service manager, with scenario questions shared in advance.
            </Step>
            <Step step="STEP 3" title="Checks">
              Enhanced DBS, right to work and two references, including your most recent employer.
            </Step>
            <Step step="STEP 4" title="Start">
              Induction week, shadowing, then a caseload built up over your first month.
            </Step>
          </div>
          <p className="note measure">
            We welcome applications from people with lived experience of homelessness, the criminal
            justice system or the care system. All roles are subject to an enhanced DBS check; a
            criminal record does not automatically rule anyone out, and each case is considered
            individually.
          </p>
        </div>
      </section>
    </>
  );
}
