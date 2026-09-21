import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import AccessibilityBar from "../components/AccessibilityBar";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { getAllPosts } from "../lib/news";

import Home from "../app/page";
import AboutUs from "../app/about-us/page";
import OurTeam from "../app/our-team/page";
import OurMission from "../app/our-mission/page";
import OurVision from "../app/our-vision/page";
import OurValues from "../app/our-values/page";
import WhatWeDo from "../app/what-we-do/page";
import SupportedAccommodation from "../app/supported-accommodation/page";
import ForLandlords from "../app/for-landlords/page";
import News from "../app/news/page";
import NewsArticle from "../app/news/[slug]/page";
import Careers from "../app/careers/page";
import ContactUs from "../app/contact-us/page";
import MakeAReferral from "../app/make-a-referral/page";
import LandlordEnquiry from "../app/landlord-enquiry/page";
import Languages from "../app/languages/page";
import Accessibility from "../app/accessibility/page";
import PrivacyPolicy from "../app/privacy-policy/page";
import Cookies from "../app/cookies/page";
import Safeguarding from "../app/safeguarding/page";
import Complaints from "../app/complaints/page";
import NotFound from "../app/not-found";

type Page = { path: string; title: string; render: () => Promise<React.ReactNode> | React.ReactNode };

const sync = (Comp: () => React.ReactNode) => () => React.createElement(Comp);

export const PAGES: Page[] = [
  { path: "/", title: "Home", render: sync(Home) },
  { path: "/about-us", title: "About Us", render: sync(AboutUs) },
  { path: "/our-team", title: "Our Team", render: sync(OurTeam) },
  { path: "/our-mission", title: "Our Mission", render: sync(OurMission) },
  { path: "/our-vision", title: "Our Vision", render: sync(OurVision) },
  { path: "/our-values", title: "Our Values", render: sync(OurValues) },
  { path: "/what-we-do", title: "What We Do?", render: sync(WhatWeDo) },
  { path: "/supported-accommodation", title: "Supported Accommodation", render: sync(SupportedAccommodation) },
  { path: "/for-landlords", title: "For Landlords", render: sync(ForLandlords) },
  { path: "/news", title: "News", render: sync(News) },
  ...getAllPosts().map((p) => ({
    path: `/news/${p.slug}`,
    title: `News: ${p.title}`,
    render: () => NewsArticle({ params: Promise.resolve({ slug: p.slug }) }),
  })),
  { path: "/careers", title: "Careers", render: sync(Careers) },
  { path: "/contact-us", title: "Contact Us", render: sync(ContactUs) },
  { path: "/make-a-referral", title: "Make a Referral", render: sync(MakeAReferral) },
  { path: "/landlord-enquiry", title: "Landlord Enquiry", render: sync(LandlordEnquiry) },
  { path: "/languages", title: "Languages", render: sync(Languages) },
  { path: "/accessibility", title: "Accessibility", render: sync(Accessibility) },
  { path: "/privacy-policy", title: "Privacy Policy", render: sync(PrivacyPolicy) },
  { path: "/cookies", title: "Cookies", render: sync(Cookies) },
  { path: "/safeguarding", title: "Safeguarding", render: sync(Safeguarding) },
  { path: "/complaints", title: "Complaints", render: sync(Complaints) },
  { path: "/404", title: "Page not found", render: sync(NotFound) },
];

export async function renderAll(): Promise<{ path: string; title: string; html: string }[]> {
  const out: { path: string; title: string; html: string }[] = [];
  for (const { path, title, render } of PAGES) {
    (globalThis as any).__PP_PATH__ = path;
    const content = await render();
    const html = renderToStaticMarkup(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(AccessibilityBar),
        React.createElement(SiteHeader),
        React.createElement("main", { id: "main" }, content),
        React.createElement(SiteFooter)
      )
    );
    out.push({ path, title, html });
  }
  return out;
}
