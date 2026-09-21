# Prospect Pathways — website

Next.js 15 (App Router) + TypeScript. No CSS framework: all styling lives in one
stylesheet, `app/globals.css`, built on the Prospect Pathways design system tokens.

Supported accommodation and housing-related support for **adults aged 18 to 65** in
Birmingham. The copy throughout is written for that audience — this is not a young
people's service, and the homepage says so explicitly.

---

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

| command | what it does |
| --- | --- |
| `npm run build` | Production build. All pages prerender as static HTML; the forms run as server actions. |
| `npm start` | Serve the production build. |
| `npm run preview` | Regenerate `preview/index.html` — a single-file, clickable copy of the whole site (see below). |

Requires Node 20 or newer.

---

## Where to change things

### 1. Contact details and placeholders — `site.config.ts`

Everything in square brackets on the site comes from this one file: phone, email,
address, company number, out-of-hours number, performance figures. Change it here and
the header, footer, contact page and accessibility statement all update.

```ts
phone: "[YOUR PHONE]",
phoneHref: "tel:+44",            // e.g. "tel:+441210000000"
email: "[YOUR EMAIL]",
```

The `NAV` array at the bottom of the same file drives the header menus. Add a page to
the array and it appears in the nav and the mobile menu automatically.

### 2. Page copy — `app/<route>/page.tsx`

One file per page, plain readable JSX. Repeating content (service cards, values,
vacancies, criteria lists) is pulled out into arrays at the top of each file, so you
can edit the words without touching layout.

### 3. Colours and type — `app/globals.css`

The palette is defined once at the top:

```css
--teal-1: #0b4b55;   /* headers, footers, primary buttons */
--blue: #2996b7;
--bluegreen: #45c1b7;
--bluegreen-2: #23b296;  /* CTA bands, accents */
--bluegreen-3: #4fbfd3;
```

Text colours are deliberately darker than the brand accents so every text/background
pair clears 4.5:1 contrast. If you lighten `--body` or `--muted`, re-check contrast —
the site has a published accessibility statement to live up to.

Typeface is Poppins, self-hosted from the `@fontsource/poppins` package (no third-party font request).

### 4. Images

The logo files are the real PNGs from the design system:

- `public/logo.png` — full colour, used in the header
- `public/logo-white.png` — reversed, used in the footer

Every photo on the site is currently a **labelled placeholder** (`<Media label="..." />`
from `components/ui.tsx`) describing the shot that belongs there. Replace them with
`<img>` or `next/image` as the photography comes in.

---

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about-us` | About Us |
| `/our-team` | Our Team — draft names, titles and bios to confirm |
| `/our-mission` | Our Mission |
| `/our-vision` | Our Vision |
| `/our-values` | Our Values |
| `/what-we-do` | What We Do? |
| `/supported-accommodation` | Supported Accommodation |
| `/for-landlords` | For Landlords |
| `/careers` | Careers |
| `/contact-us` | Contact Us |
| `/news`, `/news/<slug>` | News listing and articles (Markdown files in `content/news/`) |
| `/make-a-referral` | Referral form — sends to your inbox once `DEPLOY.md` step 3 is done |
| `/landlord-enquiry` | Landlord property form |
| `/languages` | Key information in Arabic, Urdu, Punjabi, Bengali, Polish, Romanian, Farsi, Somali (draft translations) |
| `/accessibility` | Accessibility statement |
| `/privacy-policy`, `/cookies`, `/safeguarding`, `/complaints` | Footer policy pages — outlined, awaiting your text |

Every page has a **text size / high contrast / languages** bar above the header. Settings
are remembered per browser. `sitemap.xml`, `robots.txt`, Open Graph image, favicon and
Organization structured data are generated automatically.

Navigation structure: logo → Home · **About** ▾ (About Us, Our Team, Our Mission, Our Vision, Our
Values) · **Our Services** ▾ (What We Do?, Supported Accommodation, For Landlords) ·
News · Careers · Contact Us, plus a "Make a referral" button. Accessibility sits in the footer
legal row.

---

## The single-file preview

`npm run preview` renders **the same React components** the site uses into one
self-contained `preview/index.html`, with `#/about-us` style hash links and a page
picker in the bottom bar. It is generated from the real code, so it cannot drift from
the site. Useful for sending the whole thing to someone who can't run Node.

---

## Deploying

See **DEPLOY.md** — GitHub + Vercel step by step, including connecting the contact forms
to an inbox (Resend, free) and adding your own domain. The forms use a server action, so
the site needs a Node host (Vercel, Netlify, etc.) rather than a purely static one.

---

## Still to do before launch

- Replace every `[SQUARE BRACKET]` placeholder, starting with `site.config.ts`
- Real photography in place of the labelled placeholders
- Set the three form variables in Vercel (DEPLOY.md step 3) so enquiries reach an inbox
- Have the eight draft translations on `/languages` checked by a translator
- Paste in the four footer policies
- Run an accessibility audit and fill in the "Known issues" section honestly
