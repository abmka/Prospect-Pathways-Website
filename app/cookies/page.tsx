import type { Metadata } from "next";
import PolicyStub from "../../components/PolicyStub";

export const metadata: Metadata = { title: "Cookies" };

export default function CookiesPage() {
  return (
    <PolicyStub
      title="Cookies"
      intro="What this website stores on your device, and how to control it."
      points={[
        "Which cookies the site sets, and whether any are non-essential",
        "Any analytics or embedded maps, and the consent they require",
        "How to change or withdraw consent",
      ]}
    />
  );
}
