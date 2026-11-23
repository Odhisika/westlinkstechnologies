# WestLinks — Next.js Site

A statically-exported Next.js (App Router) site for westlinkstechnologies.com, ready to deploy to Cloudflare Pages.

## Pages
- `/` — Home (hero, capabilities, products, case studies, industries, values, stats, timeline, blog preview, contact, CTA)
- `/products` — Product ecosystem detail
- `/solutions` — Industries served + capabilities
- `/about` — Company story, values, timeline
- `/team` — Team profiles and values
- `/case-studies` — Client work
- `/pricing` — Engagement and rate guidance
- `/security` — Security approach
- `/careers` — Culture, hiring process, open roles
- `/blog` — Blog listing
- `/blog/[slug]` — Static article pages
- `/contact` — Contact form with email fallback
- `/privacy`, `/terms` — Draft legal pages (review with counsel before launch)
- `404` — Custom not-found page
- `sitemap.xml`, `robots.txt` — Generated SEO files

## Local development
```bash
npm install
cp .env.example .env.local   # optional, but recommended
npm run dev
```
Visit http://localhost:3000

## Environment variables
All `NEXT_PUBLIC_*` values are embedded at build time, so set them **before** building for production.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, robots and JSON-LD |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Address shown in the UI and used for mailto fallbacks |
| `NEXT_PUBLIC_CONTACT_PHONE` | Phone number shown in the UI in international format |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | JSON POST endpoint for the contact form. If unset, the form opens a prefilled email |
| `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` | JSON POST endpoint for newsletter signup. If unset, a mailto request link is shown |
| `NEXT_PUBLIC_BOOKING_URL` | Optional Cal.com / Calendly link |
| `NEXT_PUBLIC_GITHUB_URL` | Optional GitHub link; icon is hidden when empty |
| `NEXT_PUBLIC_LINKEDIN_URL` | Optional LinkedIn link; icon is hidden when empty |
| `NEXT_PUBLIC_CRISP_WEBSITE_ID` | Optional Crisp live-chat ID |

## Build a static site (for Cloudflare Pages)
```bash
npm run build
```
This outputs a fully static site to `out/` (via `output: 'export'` in `next.config.js`). The folder includes `404.html`, `sitemap.xml`, `robots.txt`, and a `_headers` file with Cloudflare security/cache rules.

## Deploy to Cloudflare Pages
### Deploy with Wrangler (current method)
> This is a static export (`output: 'export'` → `out/`), so deploy with `wrangler pages deploy`. Do **not** use `wrangler deploy` — that takes the Workers/OpenNext path, which requires a newer Next.js version and will fail.

One command builds and uploads the site:

```bash
npm run pages:deploy
```

This runs `npm run build` and then:

```bash
npx wrangler pages deploy out --project-name=westlinkstechnologies --branch=main
```

First-time setup:

```bash
npm install -g wrangler
wrangler login
```

The custom domain `westlinkstechnologies.com` is attached to this Pages project and is already active, so no DNS changes are needed for later deploys.

### Git integration (paused)
Pushing to GitHub alone does **not** update the live site. The Git build currently auto-detects plain "Next.js" and runs `npx wrangler deploy`, which fails because OpenNext needs Next.js ≥ 15 while this project is Next.js 14 static export.

If you want automatic deploys later, set the framework preset to **Next.js (Static HTML Export)**, build command `npm run build`, output directory `out`, and deploy command `npx wrangler pages deploy out --project-name=westlinkstechnologies --branch=main`. Until then, keep deploying with `npm run pages:deploy`.

## Structure
```
app/                  Route pages, metadata, sitemap, robots, 404
components/           Nav, Footer, shared UI
components/sections/  Homepage sections, reused across pages
lib/data.ts           Products, capabilities, team, testimonials
lib/posts.ts          Blog posts
lib/site.ts           URL, email, endpoint and social configuration
public/               Icons, images, video, web manifest, Cloudflare _headers
```

## Notes
- Colors, spacing, and type scale live in `tailwind.config.ts`.
- Copy avoids fabricated client logos, review badges, and invented metrics. Add real ones as they exist.
- The legal pages are drafts, not counsel-reviewed advice. Replace or approve them before public launch.
- Team names in `lib/data.ts` are role placeholders; replace with real names and photos before launch.
- Fonts (Inter, JetBrains Mono) load via Google Fonts links in `app/layout.tsx`. Self-host them if you want zero runtime dependency on Google.
