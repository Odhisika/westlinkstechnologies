# WestLinks — Next.js Site

A statically-exported Next.js (App Router) site for westlinks.tech, ready to deploy to Cloudflare Pages.

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
### Git integration (recommended)
1. Push this project to a GitHub/GitLab repo.
2. In Cloudflare Pages, create a new project from that repo.
3. Framework preset: **Next.js (static export)** or **None**.
4. Build command: `npm run build`
5. Build output directory: `out`
6. Add the environment variables from `.env.example` in the Cloudflare Pages build settings.
7. Set `NEXT_PUBLIC_SITE_URL` to your final Pages or custom domain URL, then rebuild.
8. Add your custom domain (for example `westlinks.tech`) once DNS is ready.

### Deploy from your machine with Wrangler
```bash
npm install -g wrangler
wrangler login
npm run build
npx wrangler pages deploy out --project-name=westlinks
```

Or use the included script:
```bash
npm run pages:deploy
```

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
