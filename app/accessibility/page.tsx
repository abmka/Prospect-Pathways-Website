import type { Metadata } from "next";
import Link from "next/link";
import { Check, PageHero } from "../../components/ui";
import { site } from "../../site.config";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "The Prospect Pathways accessibility statement: how to use the site, other formats, known issues and how to report a problem.",
};

const CAN_DO = [
  "Navigate the whole site using a keyboard alone, with a visible focus outline",
  "Zoom in up to 300% without text spilling off the screen",
  "Listen to the site with a screen reader, including headings and form labels",
  "Read text at a contrast ratio of at least 4.5:1 against its background",
  "Use the site on a phone or tablet without horizontal scrolling",
];

const TOC = [
  { id: "using", label: "Using this website" },
  { id: "formats", label: "Other formats" },
  { id: "known", label: "Known issues" },
  { id: "feedback", label: "Feedback and contact" },
  { id: "enforcement", label: "Enforcement" },
  { id: "buildings", label: "Accessible accommodation" },
];

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }]}
        title="Accessibility"
        intro={`This statement applies to the ${site.name} website. We want everyone to be able to use it, including people using screen readers, keyboard navigation, magnification or speech recognition software.`}
        meta={`Last reviewed ${site.accessibilityReviewedOn}.`}
      />

      <section className="section">
        <div className="container grid grid--aside">
          <nav aria-label="On this page" className="toc">
            <h2>On this page</h2>
            {TOC.map((t) => (
              <a key={t.id} href={`#${t.id}`}>
                {t.label}
              </a>
            ))}
          </nav>

          <div className="stack gap-48">
            <div id="using" className="stack gap-16">
              <h2 className="h3">Using this website</h2>
              <p className="body">We have built this site so that you should be able to:</p>
              <ul className="check-list">
                {CAN_DO.map((c) => (
                  <Check key={c}>{c}</Check>
                ))}
              </ul>
              <p className="body">
                AbilityNet has advice on making your device easier to use if you have a disability.
              </p>
            </div>

            <div id="formats" className="stack gap-16">
              <h2 className="h3">Other formats</h2>
              <p className="body">
                If you need any information on this site &mdash; a policy, a referral form, a licence
                agreement or a complaints leaflet &mdash; in large print, easy read, audio, braille or
                another language, contact us and we will provide it. Tell us the format you need and
                we will confirm how long it will take.
              </p>
            </div>

            <div id="known" className="stack gap-16">
              <h2 className="h3">Known issues</h2>
              <p className="body">
                We aim to meet WCAG 2.2 level AA. Where we fall short, we list it here rather than
                leaving you to find out. Replace the items below with the findings of your own audit
                before this page goes live.
              </p>
              <div className="card card--ground">
                <p className="body">
                  <strong style={{ color: "var(--ink)" }}>[ISSUE 1]</strong> &mdash; what is wrong,
                  which WCAG criterion it fails, and when we expect to fix it.
                </p>
                <p className="body">
                  <strong style={{ color: "var(--ink)" }}>[ISSUE 2]</strong> &mdash; what is wrong,
                  which WCAG criterion it fails, and when we expect to fix it.
                </p>
                <p className="body">
                  <strong style={{ color: "var(--ink)" }}>[ISSUE 3]</strong> &mdash; what is wrong,
                  which WCAG criterion it fails, and when we expect to fix it.
                </p>
              </div>
            </div>

            <div id="feedback" className="stack gap-16">
              <h2 className="h3">Feedback and contact</h2>
              <p className="body">
                If you find something on this site you cannot use, tell us. Include the page address
                and what went wrong, and we will acknowledge it within{" "}
                {site.complaintsAcknowledgementDays} working days.
              </p>
              <div className="row gap-28">
                <div className="stack gap-8">
                  <span className="note">Email</span>
                  <span className="lead" style={{ color: "var(--ink)", fontWeight: 500 }}>
                    {site.email}
                  </span>
                </div>
                <div className="stack gap-8">
                  <span className="note">Phone</span>
                  <span className="lead" style={{ color: "var(--ink)", fontWeight: 500 }}>
                    {site.phone}
                  </span>
                </div>
              </div>
              <div>
                <Link className="btn btn--primary" href="/contact-us">
                  Report an accessibility problem
                </Link>
              </div>
            </div>

            <div id="enforcement" className="stack gap-16">
              <h2 className="h3">Enforcement</h2>
              <p className="body">
                If you contact us about an accessibility problem and you are not happy with our
                response, you can contact the Equality Advisory and Support Service, which handles
                complaints under the Equality Act 2010.
              </p>
            </div>

            <div id="buildings" className="stack gap-16">
              <h2 className="h3">Accessible accommodation</h2>
              <p className="body">
                Accessibility is not only about the website. Some of our properties have step-free
                access or ground floor rooms, and some do not. Tell us about mobility needs, sensory
                needs or communication needs at the point of referral and we will be honest about
                whether a property is suitable rather than placing someone somewhere that will not
                work.
              </p>
              <p className="body">
                Where a reasonable adjustment would make a placement work &mdash; a grab rail, a
                different room, written rather than verbal communication, an interpreter at sign-up
                &mdash; ask, and we will do what we reasonably can.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
