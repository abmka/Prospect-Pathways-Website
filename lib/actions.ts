"use server";

import { Resend } from "resend";
import { site } from "../site.config";

import type { FormKind, FormState } from "./form-types";

const LABELS: Record<FormKind, string> = {
  general: "Website enquiry",
  referral: "New referral",
  landlord: "Landlord property enquiry",
};

const REQUIRED: Record<FormKind, string[]> = {
  general: ["name", "email", "message"],
  referral: ["referrerName", "organisation", "email", "phone", "firstName", "ageBand", "situation", "urgency", "supportNeeds", "consent"],
  landlord: ["name", "email", "phone", "address", "postcode", "propertyType", "bedrooms"],
};

const FRIENDLY: Record<string, string> = {
  name: "your name",
  referrerName: "your name",
  organisation: "your organisation",
  email: "an email address",
  phone: "a phone number",
  message: "a message",
  firstName: "the person's first name or initials",
  ageBand: "an age range",
  situation: "their current situation",
  urgency: "how urgent this is",
  supportNeeds: "a summary of support needs",
  consent: "confirmation that the person knows about this referral",
  address: "the property address",
  postcode: "the postcode",
  propertyType: "the property type",
  bedrooms: "the number of bedrooms",
};

function clean(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim().slice(0, 4000) : "";
}

export async function submitEnquiry(kind: FormKind, _prev: FormState, data: FormData): Promise<FormState> {
  // Honeypot: real browsers leave this hidden field empty.
  if (clean(data.get("website"))) {
    return { ok: true, message: "Thank you — we have received your message." };
  }

  const fields: Record<string, string> = {};
  for (const [k, v] of data.entries()) {
    if (k === "website") continue;
    fields[k] = clean(v);
  }

  const errors: Record<string, string> = {};
  for (const key of REQUIRED[kind]) {
    if (!fields[key]) errors[key] = `Please add ${FRIENDLY[key] ?? key}.`;
  }
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "That email address does not look right.";
  }
  if (Object.keys(errors).length) {
    return { ok: false, message: "A few things need filling in before we can send this.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? `${site.name} website <onboarding@resend.dev>`;

  if (!apiKey || !to) {
    // Not connected yet. Fail loudly rather than silently losing an enquiry.
    console.warn(`[contact form] Not configured. Would have sent a "${LABELS[kind]}":`, fields);
    return {
      ok: false,
      message: `The form is not connected to an inbox yet. Please email us directly at ${site.email} or call ${site.phone}.`,
    };
  }

  const lines = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()),
      replyTo: fields.email || undefined,
      subject: `${LABELS[kind]} — ${fields.name || fields.referrerName || fields.email}`,
      text: `${LABELS[kind]} from the ${site.name} website\n\n${lines}\n`,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[contact form] send failed", err);
    return {
      ok: false,
      message: `Sorry — that did not send. Please email us at ${site.email} or call ${site.phone}.`,
    };
  }

  const thanks: Record<FormKind, string> = {
    general: "Thank you — we have your message and will reply within one working day.",
    referral: `Thank you — the referral is with us. We will come back to you within ${site.stats.referralResponseHours.replace(" hrs", "")} working hours either way.`,
    landlord: "Thank you — we have the property details and will be in touch to arrange a viewing.",
  };
  return { ok: true, message: thanks[kind] };
}
