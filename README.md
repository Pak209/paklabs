# Pak Labs — pak-labs.com

Portfolio / hub landing page for Pak Labs. Built with Next.js (App Router),
TypeScript, and Tailwind CSS v4. Dark, mobile-first, zero runtime
dependencies beyond React — animations are pure CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production build check:

```bash
npm run build && npm start
```

## Deploy to Vercel

The project deploys cleanly with zero config:

1. Push this repo to GitHub.
2. In Vercel: **Add New Project** → import the repo → deploy (defaults are fine).
3. Add your `pak-labs.com` domain under **Project → Settings → Domains**.
4. (When ready) add the inquiry-form env vars — see below.

## Where to edit things

| What | File |
| --- | --- |
| Featured project cards (carousel) | [`src/lib/projects.ts`](src/lib/projects.ts) |
| Brand copy, launchpad cards, services, contact email, socials | [`src/lib/site.ts`](src/lib/site.ts) |
| Inquiry form delivery (Resend / Formspree / Supabase) | [`src/app/api/inquiry/route.ts`](src/app/api/inquiry/route.ts) |
| Theme colors & animations | [`src/app/globals.css`](src/app/globals.css) |
| SEO metadata & fonts | [`src/app/layout.tsx`](src/app/layout.tsx) |

### Featured projects

`src/lib/projects.ts` is the source of truth — add/remove/reorder entries in
the `featuredProjects` array. Each entry has a name, description, status
badge (`live` / `in-dev` / `prototype` / `experiment`), tech chips, optional
GitHub repo name, and optional live URL. Only mark a project `live` when the
link is a real working demo.

The carousel is also enriched from the GitHub API at build time
(`src/lib/github.ts` — adds "last pushed" dates, revalidates hourly). This is
purely additive: if the API is down or rate-limited, cards render fine from
the manual data. Set `GITHUB_TOKEN` in your env only if you ever hit rate
limits.

### Inquiry form routing

The form posts to `/api/inquiry`. With no configuration it validates,
logs the submission to the server console (Vercel → Functions logs), and
returns success — so the UI works end-to-end today. To deliver inquiries
for real, set env vars for **one** provider (locally in `.env.local`, on
Vercel under **Project → Settings → Environment Variables**):

**Resend** (recommended):

```
RESEND_API_KEY=re_...
INQUIRY_TO_EMAIL=you@example.com
INQUIRY_FROM_EMAIL=inquiries@pak-labs.com   # domain must be verified in Resend
```

**Formspree** (no-code alternative):

```
FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
```

**Supabase / custom DB:** replace the fallback block in
`src/app/api/inquiry/route.ts` (`deliver()`) with an insert into your table.

A hidden honeypot field silently drops basic spam bots.

## Component map

```
src/
  app/
    layout.tsx           # fonts, metadata, OG tags
    page.tsx             # section composition
    globals.css          # theme tokens, keyframes
    icon.svg             # favicon
    api/inquiry/route.ts # form endpoint
  components/
    Navbar.tsx           # sticky nav + mobile menu
    Hero.tsx             # headline, CTAs, animated cube
    ProjectCarousel.tsx  # snap-scroll project cards
    LaunchpadLinks.tsx   # quick-link cards
    InquiryForm.tsx      # contact form UI + submit states
    Footer.tsx
    Reveal.tsx           # scroll-reveal wrapper
    Icons.tsx            # shared inline SVG icons
  lib/
    site.ts              # brand/config data
    projects.ts          # featured projects data
    github.ts            # optional GitHub metadata fetch
```

## Still needs real credentials / setup

- **Inquiry delivery** — pick Resend or Formspree and set the env vars above;
  until then submissions are only logged.
- **Contact email** — currently `dankimoto8@gmail.com` in `src/lib/site.ts`;
  swap for a branded address when you have one.
- **OG image** — add `src/app/opengraph-image.png` (1200×630) for richer
  link previews.
