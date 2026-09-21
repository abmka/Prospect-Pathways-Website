import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import { Check, PageHero } from "../../components/ui";
import { site } from "../../site.config";

export const metadata: Metadata = {
  title: "Landlord Enquiry",
  description:
    "Send Prospect Pathways your property details for a guaranteed-rent lease offer in Birmingham.",
};

export default function LandlordEnquiryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "For Landlords", href: "/for-landlords" }]}
        title="Landlord Enquiry"
        intro="Send us the address and a few details and we will come back with a figure. No obligation, and no agency in the middle."
      />
      <section className="section">
        <div className="container grid grid--form">
          <ContactForm kind="landlord" />
          <div className="stack gap-20">
            <div className="card">
              <h3 className="h4">What you get</h3>
              <ul className="check-list">
                <Check>Rent paid monthly, whether the rooms are full or empty</Check>
                <Check>No management, tenant-find or renewal fees</Check>
                <Check>Licensing, certification and compliance handled by us</Check>
                <Check>Property back in the condition we agreed</Check>
              </ul>
            </div>
            <div className="card card--ground">
              <h3 className="h4">What we look for</h3>
              <p className="body-sm">
                Three to six bedroom houses or blocks of flats, structurally sound, near buses, shops
                and a GP, with lender and freeholder consent to a company let. We are actively
                acquiring across {site.targetAreas}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
