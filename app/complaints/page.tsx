import type { Metadata } from "next";
import PolicyStub from "../../components/PolicyStub";

export const metadata: Metadata = { title: "Complaints" };

export default function ComplaintsPage() {
  return (
    <PolicyStub
      title="Complaints"
      intro="How to tell us something has gone wrong, and what happens next."
      points={[
        "How to make a complaint — in person, by phone, by email or in writing",
        "Acknowledgement and response timescales at each stage",
        "Who investigates, and how to escalate if you are not satisfied",
        "How to escalate to the local authority commissioner or the Housing Ombudsman",
        "Support available to help someone make a complaint",
      ]}
    />
  );
}
