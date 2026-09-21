import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import { Check, PageHero } from "../../components/ui";
import { site } from "../../site.config";

export const metadata: Metadata = {
  title: "Make a Referral",
  description:
    "Refer an adult aged 18 to 65 for supported accommodation in Birmingham. A straight answer within working hours, either way.",
};

export default function MakeAReferralPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact-us" }]}
        title="Make a Referral"
        intro="For local authority housing teams, probation and prison release teams, hospital discharge, refuges and voluntary sector partners. If you are looking for housing for yourself, use the general contact form and we will call you back."
      />
      <section className="section">
        <div className="container grid grid--form">
          <ContactForm kind="referral" />
          <div className="stack gap-20">
            <div className="card">
              <h3 className="h4">What happens next</h3>
              <ul className="check-list">
                <Check>We check the referral against the property, the other residents and our staffing.</Check>
                <Check>You get an accept or decline within {site.stats.referralResponseHours.replace(" hrs", "")} working hours, with the reason either way.</Check>
                <Check>If it is a yes, we ask for the full referral pack by secure email and arrange a viewing.</Check>
                <Check>If it is a no, we tell you why and, where we can, suggest somewhere that fits.</Check>
              </ul>
            </div>
            <div className="card card--ground">
              <h3 className="h4">Who we can accept</h3>
              <p className="body-sm">
                Adults aged 18 to 65 with a housing need and a low to medium support need. We are
                usually not the right service for anyone who needs waking night staff, personal care
                or a registered care setting.
              </p>
            </div>
            <div className="card card--ground">
              <h3 className="h4">Prefer to talk it through?</h3>
              <p className="body-sm">
                Call {site.phone}, {site.officeHours.toLowerCase()}, or email {site.referralsEmail}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
