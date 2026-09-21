import type { Metadata } from "next";
import PolicyStub from "../../components/PolicyStub";

export const metadata: Metadata = { title: "Safeguarding" };

export default function SafeguardingPage() {
  return (
    <PolicyStub
      title="Safeguarding"
      intro="How Prospect Pathways protects adults at risk, and how anyone can raise a concern."
      points={[
        "Named safeguarding lead and deputy, with contact details",
        "What to do if you are worried about an adult at risk, in and out of hours",
        "How we work with Birmingham Adult Social Care and the police",
        "Staff training, DBS checks and supervision arrangements",
        "Our commitments under the Care Act 2014",
      ]}
    />
  );
}
