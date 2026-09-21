import Link from "next/link";
import { site } from "../site.config";
import { IconFacebook, IconInstagram, IconLinkedIn } from "./Icon";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "Our Mission", href: "/our-mission" },
  { label: "Our Vision", href: "/our-vision" },
  { label: "Our Values", href: "/our-values" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
];

const SERVICE_LINKS = [
  { label: "What We Do?", href: "/what-we-do" },
  { label: "Supported Accommodation", href: "/supported-accommodation" },
  { label: "For Landlords", href: "/for-landlords" },
  { label: "Make a Referral", href: "/make-a-referral" },
  { label: "Landlord Enquiry", href: "/landlord-enquiry" },
];

const LEGAL_LINKS = [
  { label: "Accessibility", href: "/accessibility" },
  { label: "Languages", href: "/languages" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Safeguarding", href: "/safeguarding" },
  { label: "Complaints", href: "/complaints" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt={site.name} width={2212} height={639} />
            <p style={{ maxWidth: "330px" }}>{site.tagline}</p>
            <div className="social">
              <a href={site.social.facebook} aria-label="Facebook">
                <IconFacebook />
              </a>
              <a href={site.social.linkedin} aria-label="LinkedIn">
                <IconLinkedIn />
              </a>
              <a href={site.social.instagram} aria-label="Instagram">
                <IconInstagram />
              </a>
            </div>
          </div>

          <div className="site-footer__col">
            <h4>Quick links</h4>
            {QUICK_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="site-footer__col">
            <h4>Our services</h4>
            {SERVICE_LINKS.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="site-footer__col">
            <h4>Contact</h4>
            <p>
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.region}
              <br />
              {site.address.postcode}
            </p>
            <p>
              {site.phone}
              <br />
              {site.email}
            </p>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Registered in England &amp; Wales, company
            no. {site.companyNumber}
          </p>
          <nav aria-label="Legal">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
