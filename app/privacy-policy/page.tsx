import type { Metadata } from "next";
import PolicyStub from "../../components/PolicyStub";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <PolicyStub
      title="Privacy Policy"
      intro="How Prospect Pathways collects, uses and protects personal information about residents, referrers, landlords and job applicants."
      points={[
        "What personal data we collect, and the lawful basis for each use",
        "How long we keep support records, tenancy files and CCTV footage",
        "Who we share information with — commissioners, health, police, social care",
        "How someone makes a subject access request, and who the data controller is",
        "ICO registration number and how to complain to the ICO",
      ]}
    />
  );
}
