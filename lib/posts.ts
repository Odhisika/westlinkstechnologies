export interface Post {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  excerpt: string;
  icon: 'Circle' | 'Square' | 'Plus' | 'Layers' | 'ShieldCheck' | 'Server';
  content: string; // paragraphs separated by \n\n; lines starting with "## " are headings
}

export const posts: Post[] = [
  {
    slug: 'why-we-build-our-own-infrastructure',
    title: 'Why we build our own infrastructure instead of renting it',
    tag: 'Technologies',
    date: '2026-07-14',
    readTime: '5 min read',
    excerpt:
      'Managed platforms are great - until your workload stops being average. Here\'s where we draw the line between renting and building.',
    icon: 'Server',
    content: `Every new company today starts on managed everything: managed databases, managed queues, managed auth. And that's usually the right call. Renting gets you to a working product fast, and speed matters more than elegance when you're still looking for product-market fit.

## Where renting breaks down

The problems show up at the edges of your workload. When LivestockOS needed deterministic offline reconciliation across shared devices, no off-the-shelf sync service handled our conflict rules without losing data in exactly the cases farms actually hit. When Price Monitor needed to crawl thousands of listings continuously without burning money on per-request pricing, the managed options priced us out of our own product's core loop.

That's the pattern: managed services are priced and designed for the median customer. The moment your differentiator lives outside the median, you're paying a premium for someone else's compromise.

## What we actually build

We don't rebuild what works. Postgres stays Postgres. We build the layer around it: provisioning as code, deployment pipelines, monitoring, and the boring glue that turns a collection of services into a system you can reason about. The goal isn't ownership for its own sake - it's control over the parts where our products win or lose.

## The rule we use

Build infrastructure when it encodes your competitive advantage or removes a hard dependency on someone else's roadmap. Rent it everywhere else. Every piece of custom infrastructure should pay rent in reliability, cost, or capability - and if it can't, it becomes a liability wearing an engineer's badge.`,
  },
  {
    slug: 'designing-for-patchy-connectivity',
    title: 'Inside LivestockOS: designing for users with patchy connectivity',
    tag: 'Product',
    date: '2026-07-28',
    readTime: '7 min read',
    excerpt:
      'Most farm software assumes Wi-Fi. Real barns don\'t. How we built offline-first sync that never loses a record.',
    icon: 'Square',
    content: `The first thing you learn standing in a cattle shed with a tablet is that the coverage map lied. Bars come and go between buildings, underground fiber doesn't reach the far paddock, and none of it matters to a farmhand who just needs to log a vaccination right now.

## The constraint shapes everything

Offline-first isn't a feature you add late; it dictates the architecture from day one. Every write in LivestockOS lands locally first, in an append-only queue with a timestamp, device ID, and conflict policy attached. The network is treated as an optimization, not a requirement. If connectivity never returns this hour - or this day - the tool keeps working.

## Conflicts are a product decision

Sync systems love to promise "automatic conflict resolution," but resolution rules are business logic wearing a technical costume. If two workers record different weights for the same animal, which one wins? There's no universal answer - there's only what the farmer considers correct. So we made the policies explicit: last-write-wins for measurements taken within a configurable window, merge-and-flag for anything ambiguous, and a review screen that surfaces conflicts instead of burying them.

## Shared devices mean shared state

Farms don't issue a phone per worker. One tablet moves between four people, so identity has to be cheap: quick PIN switching, per-user audit trails, and zero assumption that the device is single-tenant. Most consumer sync frameworks quietly assume one user per device. Removing that assumption was half the technologies work.

## The result

Records taken in the field reconcile automatically once signal returns, and since launch, the number of records lost to connectivity is zero. That's not a feature list - that's the entire point of the product.`,
  },
  {
    slug: 'technologies-principles',
    title: 'Our technologies principles, and why we wrote them down',
    tag: 'Company',
    date: '2026-08-04',
    readTime: '4 min read',
    excerpt:
      'Principles only matter when they cost you something. These four cost us the most - by design.',
    icon: 'Plus',
    content: `Every company claims to have principles. Most lists are interchangeable - innovation, quality, integrity - words chosen precisely because they commit you to nothing. We wrote ours down because they're expensive to follow, and expense is how you know they're real.

## Security is part of the schema

Not a review phase, not a checklist before launch. Access control, encryption boundaries, and audit trails are designed into the data model first. This costs us speed in the first weeks of every project and pays it back forever after. When a prospect asks to "skip compliance for the MVP," we lose deals over this. It stays.

## Design for year-three load

It's easy to architect for the demo and hard to justify capacity planning for traffic you don't have yet. But rearchitecting under load is ten times the cost of designing correctly upfront, and downtime during growth burns trust no marketing budget can buy back. We design for the load you'll have when the product succeeds.

## Boring technology on purpose

Every novel component must justify itself against a proven alternative. New tech is allowed when it solves a problem nothing else solves - never because it would look good in a blog post. Our stack looks unexciting in job postings. It also doesn't page anyone at 3 a.m.

## Write it down

Decisions that live in someone's head die when they leave. Architecture decisions get documents; trade-offs get named; the reasoning outlives the people. This document is part of that rule applying to itself.`,
  },
  {
    slug: 'component-library-before-five-designers',
    title: 'Designing a component library before you have five designers',
    tag: 'Technologies',
    date: '2026-08-11',
    readTime: '6 min read',
    excerpt:
      'Design systems aren\'t for big teams. They\'re for small teams that don\'t want to redesign the same button six times.',
    icon: 'Layers',
    content: `The common wisdom says design systems are a scale problem - something you earn the headcount to build later. We think that's backwards. A small team benefits most, because every inconsistency you prevent is a redesign you never do.

## Start with tokens, not components

Our library began as a tokens file: spacing scale, color palette, type ramp, radius values. No code, no components - just decisions written down once so nobody relitigates them per screen. That single file eliminated most of the visual drift that makes early products feel amateurish.

## Components encode decisions

When a component does get built, it carries its reasoning with it. The form input ships with focus states, error states, disabled states, and documentation of when each applies - because someone already decided. New screens assemble in hours instead of days, and they look like siblings instead of strangers.

## The multi-product dividend

The real payoff arrived when WestLinks grew past one product. LivestockOS, Price Monitor, and Exchange share a design language automatically. Users of one product feel at home in another. Marketing materials match the product. None of this required coordination meetings - the library enforced it structurally.

## Keep it small

The failure mode of design systems is becoming a museum: hundreds of unused variants maintained out of obligation. Ours fits in a folder. Every component earns its place by being used across at least two surfaces, or it gets deleted. Constraint keeps the system alive.`,
  },
  {
    slug: 'security-first-at-the-schema-level',
    title: 'What "security-first" actually means at the schema level',
    tag: 'Security',
    date: '2026-08-18',
    readTime: '8 min read',
    excerpt:
      'Everyone claims security-first. Here\'s what it concretely changes about your database design, API surface, and audit trails.',
    icon: 'ShieldCheck',
    content: `"Security-first" is usually marketing language for "we run a vulnerability scanner." We mean something more specific: security properties that exist in the data model itself, such that application bugs cannot easily violate them. For a FinTech portfolio, this distinction is the difference between passing an audit and losing custody of client funds.

## Append-only where money moves

Ledger tables in WestLinks Exchange are append-only at the database level. Corrections are compensating entries, never updates. Even if an attacker achieves full application-level access through some unknown flaw, rewriting history requires a second, separate breach of database permissions. Two independent failures instead of one.

## Ownership columns are not optional

Every row carries who created it and under what authority, enforced by defaults rather than developer discipline. Authorization checks reference these columns directly. When "can this user see this record?" reduces to a single indexed comparison, the check actually happens - complexity is where authorization bugs breed.

## Audit trails are writes, not logs

Application logs can be deleted, rotated away, or simply never written in the error path you didn't anticipate. Audit events in our schema are ordinary writes inside the same transaction as the action they describe. If the action committed, the trail exists. No configuration can silently undo that coupling.

## Encryption boundaries map to threat models

Encrypting everything against the database process sounds rigorous but defends against almost nothing realistic - anyone who can query the DB can call decrypt too. Meaningful encryption draws boundaries against specific threats: field-level encryption for identifiers that enable fraud, key separation between services, keys that the application layer holding them can't export. The threat model decides the boundary, not a compliance checkbox.

## What it costs

This approach adds real time to early development - probably twenty percent on the first months of any project. What it buys back is permanent: features that touch money ship faster because the guarantees underneath were never negotiable, and due-diligence questions become demonstrations instead of promises.`,
  },
  {
    slug: 'choosing-boring-technology-on-purpose',
    title: 'Choosing boring technology on purpose',
    tag: 'Infrastructure',
    date: '2026-08-21',
    readTime: '5 min read',
    excerpt:
      'Novelty has a maintenance bill that arrives monthly, forever. Here\'s the test we apply before adopting anything shiny.',
    icon: 'Circle',
    content: `There's a version of our stack that would impress on Hacker News: cutting-edge runtime, experimental database, framework released last quarter. It would also be a liability. We choose deliberately boring technology - and the word "deliberately" is doing heavy lifting.

## Novelty is deferred cost

Every new tool carries a maintenance bill that arrives monthly, indefinitely: upgrades, migration paths, security advisories, hiring pool shrinkage, Stack Overflow answers thinning out exactly when you need them at 2 a.m. Excitement fades in a week; the bill compounds for years. The question isn't "is this better?" - new things usually are, marginally. The question is "is this better enough to pay its bill?"

## The two-test rule

Before any new dependency enters our stack, it passes two tests. First, the problem test: does it solve a problem we actually have, that proven alternatives demonstrably don't? Second, the exit test: if it disappears tomorrow or stops being maintained, what does getting off it cost? Tools that fail either test wait until their answers improve. Most never pass.

## What boring buys you

Boring technology has sharp edges everyone already knows. Postgres behaves in documented ways under pathological load; the failure modes of Redis are folk knowledge at this point. Hiring is easier, incident response is calmer, and architectural advice is abundant and free. You inherit decades of other people's scar tissue.

## Boring isn't frozen

The trap on the other side is stagnation - running versions so old that upgrading becomes a cliff. Our discipline includes scheduled, incremental upgrades while they're still routine. Boring means well-trodden, not abandoned. The path stays paved precisely so that when we do need something new - and sometimes we do - we adopt it from a stable base instead of mid-crisis.`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
