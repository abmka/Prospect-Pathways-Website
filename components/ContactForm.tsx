"use client";

import { useActionState } from "react";
import { submitEnquiry } from "../lib/actions";
import { initialFormState, type FormKind, type FormState } from "../lib/form-types";
import { site } from "../site.config";

type Props = { kind: FormKind };

function Field({
  id,
  label,
  hint,
  error,
  full,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "field field--full" : "field"}>
      <label htmlFor={id}>{label}</label>
      {hint && (
        <span className="hint" id={`${id}-hint`}>
          {hint}
        </span>
      )}
      {children}
      {error && (
        <span className="hint" id={`${id}-error`} role="alert" style={{ color: "#7a1f14" }}>
          {error}
        </span>
      )}
    </div>
  );
}

function Radios({ name, options, error }: { name: string; options: string[]; error?: string }) {
  return (
    <div className="field--radio" role="radiogroup" aria-describedby={error ? `${name}-error` : undefined}>
      {options.map((o) => (
        <label key={o}>
          <input type="radio" name={name} value={o} />
          {o}
        </label>
      ))}
      {error && (
        <span className="hint" id={`${name}-error`} role="alert" style={{ color: "#7a1f14", flexBasis: "100%" }}>
          {error}
        </span>
      )}
    </div>
  );
}

export default function ContactForm({ kind }: Props) {
  const action = submitEnquiry.bind(null, kind);
  const [state, formAction, pending] = useActionState<FormState, FormData>(action, initialFormState);
  const e = state.errors ?? {};

  if (state.ok) {
    return (
      <div className="form" aria-live="polite">
        <div className="form-status form-status--ok">{state.message}</div>
      </div>
    );
  }

  return (
    <form className="form" action={formAction} noValidate>
      {state.ok === false && (
        <div className="form-status form-status--error" role="alert">
          {state.message}
        </div>
      )}

      {/* Spam trap — hidden from people, filled by bots */}
      <div className="field field--hp" aria-hidden="true">
        <label htmlFor={`${kind}-website`}>Leave this empty</label>
        <input id={`${kind}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {kind === "general" && (
        <>
          <div className="stack gap-8">
            <h2 className="h3">Send us a message</h2>
            <p className="body-sm">
              We aim to reply within one working day. Please do not include sensitive personal
              details about a third party in this form.
            </p>
          </div>
          <Field id="enquiry" label="What is this about?">
            <select id="enquiry" name="enquiry" defaultValue="Something else">
              <option>Making a referral</option>
              <option>Landlord — letting a property to you</option>
              <option>I am looking for housing for myself</option>
              <option>Careers and recruitment</option>
              <option>Complaint or concern</option>
              <option>Something else</option>
            </select>
          </Field>
          <div className="form-grid">
            <Field id="name" label="Your name" error={e.name}>
              <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={!!e.name} />
            </Field>
            <Field id="org" label="Organisation (if any)">
              <input id="org" name="organisation" type="text" autoComplete="organization" />
            </Field>
            <Field id="email" label="Email" error={e.email}>
              <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!e.email} />
            </Field>
            <Field id="phone" label="Phone">
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </Field>
            <Field id="message" label="How can we help?" error={e.message} full>
              <textarea id="message" name="message" rows={6} required aria-invalid={!!e.message} />
            </Field>
          </div>
        </>
      )}

      {kind === "referral" && (
        <>
          <div className="stack gap-8">
            <h2 className="h3">Make a referral</h2>
            <p className="body-sm">
              Enough for us to say yes or no quickly. Do not include a date of birth, National
              Insurance number or medical detail here — once we confirm we can help, we will ask
              for the full referral pack by secure email.
            </p>
          </div>

          <fieldset className="fieldset">
            <legend>About you</legend>
            <div className="form-grid">
              <Field id="referrerName" label="Your name" error={e.referrerName}>
                <input id="referrerName" name="referrerName" type="text" autoComplete="name" required />
              </Field>
              <Field id="organisation" label="Organisation" error={e.organisation}>
                <input id="organisation" name="organisation" type="text" autoComplete="organization" required />
              </Field>
              <Field id="role" label="Your role">
                <input id="role" name="role" type="text" autoComplete="organization-title" />
              </Field>
              <Field id="localAuthority" label="Local authority area">
                <input id="localAuthority" name="localAuthority" type="text" placeholder="e.g. Birmingham" />
              </Field>
              <Field id="email" label="Work email" error={e.email}>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </Field>
              <Field id="phone" label="Phone" error={e.phone}>
                <input id="phone" name="phone" type="tel" autoComplete="tel" required />
              </Field>
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend>About the person you are referring</legend>
            <div className="form-grid">
              <Field id="firstName" label="First name or initials" error={e.firstName}>
                <input id="firstName" name="firstName" type="text" required />
              </Field>
              <Field id="ageBand" label="Age" error={e.ageBand}>
                <select id="ageBand" name="ageBand" defaultValue="" required>
                  <option value="" disabled>
                    Choose…
                  </option>
                  <option>18 to 25</option>
                  <option>26 to 40</option>
                  <option>41 to 65</option>
                  <option>Over 65</option>
                </select>
              </Field>
              <Field id="situation" label="Current situation" error={e.situation} full>
                <select id="situation" name="situation" defaultValue="" required>
                  <option value="" disabled>
                    Choose…
                  </option>
                  <option>Homeless or rough sleeping</option>
                  <option>Due for release from prison, or on licence</option>
                  <option>Ready for discharge from hospital</option>
                  <option>Fleeing domestic abuse</option>
                  <option>Leaving treatment or detox</option>
                  <option>In temporary accommodation</option>
                  <option>Tenancy has broken down</option>
                  <option>Other</option>
                </select>
              </Field>
            </div>
            <div className="field">
              <span className="field" style={{ gap: 0 }}>
                <label id="urgency-label">How soon is accommodation needed?</label>
              </span>
              <Radios name="urgency" options={["This week", "Within a month", "Planning ahead"]} error={e.urgency} />
            </div>
            <div className="field">
              <label id="accommodation-label">Accommodation that would suit</label>
              <Radios name="accommodation" options={["Shared house", "Ensuite studio", "Self-contained flat", "Any"]} />
            </div>
            <Field id="supportNeeds" label="Support needs, in brief" hint="What help they need to keep a tenancy — benefits, health appointments, budgeting, tenancy skills." error={e.supportNeeds}>
              <textarea id="supportNeeds" name="supportNeeds" rows={5} required />
            </Field>
            <Field id="risks" label="Known risks, in brief" hint="Anything we need to know to place them safely: risk to self, to others, or from others. Keep it high level here.">
              <textarea id="risks" name="risks" rows={4} />
            </Field>
          </fieldset>

          <div className="field field--check">
            <input id="consent" name="consent" type="checkbox" value="yes" required />
            <label htmlFor="consent">
              The person being referred knows this referral is being made and has agreed to it.
              {e.consent && (
                <span role="alert" style={{ display: "block", color: "#7a1f14" }}>
                  {e.consent}
                </span>
              )}
            </label>
          </div>
        </>
      )}

      {kind === "landlord" && (
        <>
          <div className="stack gap-8">
            <h2 className="h3">Tell us about your property</h2>
            <p className="body-sm">
              We will come back with a rent offer or a straight no, usually within a few working
              days. Photos are useful — we will ask for them by email.
            </p>
          </div>

          <fieldset className="fieldset">
            <legend>About you</legend>
            <div className="form-grid">
              <Field id="name" label="Your name" error={e.name}>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </Field>
              <Field id="company" label="Company (if any)">
                <input id="company" name="company" type="text" autoComplete="organization" />
              </Field>
              <Field id="email" label="Email" error={e.email}>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </Field>
              <Field id="phone" label="Phone" error={e.phone}>
                <input id="phone" name="phone" type="tel" autoComplete="tel" required />
              </Field>
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend>The property</legend>
            <div className="form-grid">
              <Field id="address" label="Address" error={e.address} full>
                <input id="address" name="address" type="text" autoComplete="street-address" required />
              </Field>
              <Field id="postcode" label="Postcode" error={e.postcode}>
                <input id="postcode" name="postcode" type="text" autoComplete="postal-code" required />
              </Field>
              <Field id="bedrooms" label="Bedrooms" error={e.bedrooms}>
                <select id="bedrooms" name="bedrooms" defaultValue="" required>
                  <option value="" disabled>
                    Choose…
                  </option>
                  <option>1 or 2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6 or more</option>
                </select>
              </Field>
              <Field id="propertyType" label="Property type" error={e.propertyType}>
                <select id="propertyType" name="propertyType" defaultValue="" required>
                  <option value="" disabled>
                    Choose…
                  </option>
                  <option>House</option>
                  <option>Flat</option>
                  <option>Block of flats</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field id="availableFrom" label="Available from">
                <input id="availableFrom" name="availableFrom" type="text" placeholder="e.g. now, or November" />
              </Field>
            </div>
            <div className="field">
              <label id="licensed-label">Is it licensed as an HMO?</label>
              <Radios name="hmoLicensed" options={["Yes", "No", "Not sure"]} />
            </div>
            <div className="field">
              <label id="condition-label">Condition</label>
              <Radios name="condition" options={["Ready to let", "Needs minor work", "Needs refurbishment"]} />
            </div>
            <Field id="message" label="Anything else we should know?">
              <textarea id="message" name="message" rows={4} />
            </Field>
          </fieldset>
        </>
      )}

      <div className="field field--check">
        <input id={`${kind}-privacy`} name="privacy" type="checkbox" value="yes" required />
        <label htmlFor={`${kind}-privacy`}>
          I am happy for {site.name} to contact me about this, in line with the privacy policy.
        </label>
      </div>

      <div>
        <button type="submit" className="btn btn--primary" disabled={pending}>
          {pending ? "Sending…" : kind === "referral" ? "Send referral" : kind === "landlord" ? "Send property details" : "Send message"}
        </button>
      </div>
    </form>
  );
}
