import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";
import { Media, PageHero } from "../../components/ui";
import { IconMail, IconPhone, IconPin } from "../../components/Icon";
import { site } from "../../site.config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Referrals, landlord enquiries, complaints and out-of-hours contact for Prospect Pathways in Birmingham.",
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }]}
        title="Contact Us"
        intro="Referrals, landlord enquiries, complaints and everything else. If it is urgent and out of hours, call the number at the bottom of this page."
      >
        <div className="row gap-14" style={{ paddingTop: "8px" }}>
          <Link className="btn btn--primary" href="/make-a-referral">
            Make a referral
          </Link>
          <Link className="btn btn--ghost" href="/landlord-enquiry">
            Landlord enquiry
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container grid grid--form">
          <ContactForm kind="general" />

          <div className="stack gap-20">
            <div className="contact-card">
              <div className="icon-chip">
                <IconPhone />
              </div>
              <div className="stack gap-8">
                <h3 className="h4" style={{ fontSize: "19px" }}>
                  Phone
                </h3>
                <p className="body">
                  <a href={site.phoneHref} style={{ textDecoration: "none" }}>
                    {site.phone}
                  </a>
                </p>
                <p className="note">{site.officeHours}</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-chip">
                <IconMail />
              </div>
              <div className="stack gap-8">
                <h3 className="h4" style={{ fontSize: "19px" }}>
                  Email
                </h3>
                <p className="body">{site.referralsEmail}</p>
                <p className="note">Referrals and general enquiries</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-chip">
                <IconPin />
              </div>
              <div className="stack gap-8">
                <h3 className="h4" style={{ fontSize: "19px" }}>
                  Office
                </h3>
                <p className="body">
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.region}
                  <br />
                  {site.address.postcode}
                </p>
                <p className="note">Visits by appointment only</p>
              </div>
            </div>

            <Media variant="map" label="Map of the office location" />
          </div>
        </div>
      </section>

      <section className="section section--deep section--tight">
        <div className="container grid grid--3">
          <div className="stack gap-12">
            <h2 className="h4" style={{ fontSize: "clamp(22px, 2.2vw, 26px)" }}>
              Out of hours
            </h2>
            <p className="body">
              Residents with an emergency outside office hours should call {site.outOfHoursPhone}. For
              a repair that is not an emergency, report it and we will attend the next working day.
            </p>
          </div>
          <div className="stack gap-12">
            <h2 className="h4" style={{ fontSize: "clamp(22px, 2.2vw, 26px)" }}>
              Complaints
            </h2>
            <p className="body">
              Tell us what went wrong and we will acknowledge it within{" "}
              {site.complaintsAcknowledgementDays} working days and give you a named person handling
              it. You can also escalate to your local authority commissioner.
            </p>
          </div>
          <div className="stack gap-12">
            <h2 className="h4" style={{ fontSize: "clamp(22px, 2.2vw, 26px)" }}>
              In an emergency
            </h2>
            <p className="body">
              If someone is at immediate risk of harm, call 999. To raise a safeguarding concern about
              an adult in Birmingham, contact Birmingham Adult Social Care.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
