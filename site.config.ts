/**
 * Prospect Pathways — one place for everything that changes.
 *
 * Every square-bracket value below is a placeholder. Replace them here and the
 * whole site updates: header, footer, contact page and accessibility statement.
 */

export const site = {
  name: "Prospect Pathways",
  legalName: "Prospect Pathways Limited",
  /** Public address of the live site — used for sitemap, canonical URLs and social previews. */
  url: "https://www.prospectpathways.co.uk",
  tagline:
    "Supported accommodation and housing-related support for adults aged 18 to 65 across Birmingham and the West Midlands.",

  // --- Contact details -------------------------------------------------
  phone: "[YOUR PHONE]",
  phoneHref: "tel:+44",            // e.g. "tel:+441210000000"
  outOfHoursPhone: "[YOUR OUT-OF-HOURS NUMBER]",
  email: "[YOUR EMAIL]",
  referralsEmail: "[YOUR REFERRALS EMAIL]",
  emailHref: "mailto:",            // e.g. "mailto:referrals@prospectpathways.co.uk"

  address: {
    line1: "[YOUR STREET ADDRESS]",
    city: "Birmingham",
    region: "West Midlands",
    postcode: "[POSTCODE]",
  },

  officeHours: "Monday to Friday, 9am to 5pm",
  companyNumber: "[YOUR COMPANY NO.]",

  // --- Social ----------------------------------------------------------
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },

  // --- Figures to confirm from your own reporting ----------------------
  // Left as placeholders on purpose — nothing here is invented.
  stats: {
    homes: "[XX]",
    referralResponseHours: "[XX] hrs",
    plannedMoveOnPercent: "[XX]%",
    reviewedOnTimePercent: "[XX]%",
    emergencyRepairHours: "[XX] hrs",
  },

  complaintsAcknowledgementDays: "[XX]",
  targetAreas: "[YOUR TARGET AREAS]",
  policyReviewedOn: "[MONTH YEAR]",
  accessibilityReviewedOn: "[DATE]",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Team", href: "/our-team" },
      { label: "Our Mission", href: "/our-mission" },
      { label: "Our Vision", href: "/our-vision" },
      { label: "Our Values", href: "/our-values" },
    ],
  },
  {
    label: "Our Services",
    children: [
      { label: "What We Do?", href: "/what-we-do" },
      { label: "Supported Accommodation", href: "/supported-accommodation" },
      { label: "For Landlords", href: "/for-landlords" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

/**
 * Languages offered on the /languages page and in the header menu.
 * `dir` is the text direction; `native` is the language's own name (what a
 * speaker looks for in a menu). Add or remove entries to match your residents.
 */
export const LANGUAGES = [
  { code: "en", native: "English", english: "English", dir: "ltr" },
  { code: "ar", native: "العربية", english: "Arabic", dir: "rtl" },
  { code: "ur", native: "اردو", english: "Urdu", dir: "rtl" },
  { code: "pa", native: "ਪੰਜਾਬੀ", english: "Punjabi", dir: "ltr" },
  { code: "bn", native: "বাংলা", english: "Bengali", dir: "ltr" },
  { code: "pl", native: "Polski", english: "Polish", dir: "ltr" },
  { code: "ro", native: "Română", english: "Romanian", dir: "ltr" },
  { code: "fa", native: "فارسی", english: "Farsi", dir: "rtl" },
  { code: "so", native: "Soomaali", english: "Somali", dir: "ltr" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];
