# Putting the site live — step by step

You do not need to know how any of this works. Follow the numbered steps; each one is a
few minutes.

**Short answer to "Vercel or GitHub?"** — both, and they do different jobs:

- **GitHub** stores the code (like Dropbox for code, with history). Free.
- **Vercel** turns the code into a live website with a web address. Free for a site this size.

Vercel watches the GitHub repository; every time the code changes, the site updates itself
in about a minute. You never upload anything by hand.

---

## Step 1 — Put the code on GitHub (10 minutes, once)

1. Create a free account at **github.com** if you do not have one.
2. Click **New repository**. Name it `prospect-pathways`. Set it to **Private**. Do not tick
   any of the "initialise" boxes. Click **Create repository**.
3. Install **GitHub Desktop** (desktop.github.com) and sign in.
4. In GitHub Desktop: **File → Add local repository** → choose the unzipped
   `prospect-pathways` folder. It will say it is not a repository and offer to
   **create a repository** here — accept.
5. Click **Publish repository**, keep it private, and choose the `prospect-pathways` repo
   you made in step 2.

That is it. The code is now on GitHub. Whenever I send you an updated zip, replace the
folder contents, then in GitHub Desktop write a one-line summary and click **Commit** then
**Push**. Vercel does the rest.

*(The `.gitignore` file already stops `node_modules`, `.next` and `.env.local` from being
uploaded — you never need to think about that.)*

---

## Step 2 — Connect Vercel (5 minutes, once)

1. Go to **vercel.com** and sign up **with your GitHub account** (the "Continue with GitHub"
   button). This is what lets Vercel see the code.
2. Click **Add New → Project**. Pick `prospect-pathways` from the list and click **Import**.
3. Leave every setting as it is — Vercel recognises Next.js automatically. Click **Deploy**.
4. About a minute later you get a live address like
   `https://prospect-pathways-xxxx.vercel.app`. That is your test site: send it to anyone.

Every commit you push after this creates a fresh preview address, and the `main` branch is
what the public address shows.

---

## Step 3 — Make the contact forms send email (10 minutes, once)

The forms are already built and will tell people "not connected yet" until you do this.

1. Sign up free at **resend.com** (3,000 emails a month free; the forms will use a handful).
2. In Resend: **API Keys → Create API Key**. Copy it — it starts `re_`.
3. In Vercel: open your project → **Settings → Environment Variables**. Add these three:

   | Name | Value |
   | --- | --- |
   | `RESEND_API_KEY` | the key from Resend |
   | `CONTACT_TO_EMAIL` | the inbox that should receive enquiries — e.g. `referrals@…` (comma-separate for more than one) |
   | `CONTACT_FROM_EMAIL` | leave blank for now — see below |

4. Go to **Deployments → ⋯ → Redeploy** so the site picks the settings up.

Enquiries now arrive in that inbox, with the sender's address set as reply-to, so you can
just hit reply. Referral and landlord submissions are labelled in the subject line.

**Sending from your own domain (optional, later):** in Resend, **Domains → Add domain**, add
the DNS records it shows to your domain provider, then set `CONTACT_FROM_EMAIL` to
`Prospect Pathways website <website@yourdomain.co.uk>`. Until then Resend sends from its own
shared address, which is fine for testing.

---

## Step 4 — Your own domain (when you are ready)

1. In Vercel: **Settings → Domains → Add**. Type `prospectpathways.co.uk` (or whatever you own).
2. Vercel shows one or two DNS records. Add them wherever you bought the domain
   (123-reg, GoDaddy, Cloudflare…). It takes minutes to a few hours.
3. Update `url` at the top of `site.config.ts` to match, commit and push.

HTTPS is automatic and free.

---

## Where things live

| I want to… | Do this |
| --- | --- |
| Change the phone number, address, email | Edit `site.config.ts` |
| Change page text | Send me the content spreadsheet, or edit `app/<page>/page.tsx` |
| Add a news post | Add a `.md` file to `content/news/` — copy an existing one |
| Add a photo | Drop it in `public/` and reference it as `/filename.jpg` |
| See the site on my own computer | `npm install` then `npm run dev`, open `http://localhost:3000` |
| Refresh the single-file preview | `npm run preview` → `preview/index.html` |

---

## News: how it works, and what a "plugin" would add

News is built in — no plugin needed. Each post is a small text file in `content/news/`
with a heading block at the top (title, date, category, summary) and the article below in
plain Markdown. Drafts (`draft: true`) never publish. Nothing to hack, nothing to pay for,
nothing to update.

If you want staff to write posts **in a browser** rather than editing files, the two free,
well-regarded options that sit on top of exactly this setup are:

- **Keystatic** — free, open source, saves each post straight into `content/news/` via
  GitHub. Nice editor, no database, no separate account. My recommendation.
- **Decap CMS** — same idea, older and more widely used, slightly plainer editor.

Both are a one-hour job to add once the site is on GitHub. Say the word.
