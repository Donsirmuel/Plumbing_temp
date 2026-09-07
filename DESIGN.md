# Ooh Jay Design Direction

## Surface mode

Persuade first, then help the visitor read and qualify the company. This is a commercial service website, not a portfolio-only experience and not an operational dashboard.

## Site architecture

This is a multi-page company website. Do not compress every job into one scrolling landing page.

- `/` Home: establish the company, audience, service promise, and one strong proof point.
- `/services` Services: help a homeowner or business identify the right plumbing service.
- `/work` Work: show evidence through projects, finished spaces, systems, and before/after context.
- `/process` Process: reduce uncertainty about scope, execution, testing, and handover.
- `/contact` Contact: make the quote conversation and direct contact details easy to act on.

Each page needs its own dominant job. Shared navigation, buttons, typography, and media behavior create continuity; repeated hero compositions and repeated section stacks should not.

Desktop navigation stays short: Services, Gallery, Process, Contact, and a distinct Request a quote action. No About page. Mobile uses a simple full-width menu with the quote action immediately available.

## Core direction

Build a confident, image-led plumbing services website with the presentation quality of the supplied TikTok references:

- Light, spacious surrounding canvas where useful
- Strong framed image compositions
- Rounded image treatments used selectively
- Clear hierarchy and generous breathing room
- Real work, equipment, buildings, and finished spaces as visual evidence
- Compact, legible navigation
- Direct calls to action
- Layered content only when it improves understanding

The references are a quality bar for composition and presentation. They are not a literal template to copy.

## Ooh Jay thesis

Ooh Jay should feel like a dependable service company with unusually good art direction. The work is the proof: contextual property imagery, visible care, clear systems, and finished spaces should carry more weight than decorative interface chrome.

The visual system is built on five decisions:

1. One dominant image or composition per page opening.
2. Quiet navigation that stays out of the way.
3. Short, plain positioning copy before technical detail.
4. Proof presented at useful scale through work, process, and measurable evidence.
5. A small number of strong section compositions instead of a long stack of equal cards.

The TikTok assets influence framing, image scale, whitespace, and confidence. They do not imply a dark studio scene, device mockup, portfolio reel, or editorial art direction for Ooh Jay.

## Visual signature

Ooh Jay's signature is dependable plumbing for homes and businesses: visible finished spaces supported by precise pipework, wet areas, plant rooms, pressure systems, and responsive service. Construction can appear as an additional capability without taking over the brand.

## Art direction

Prefer contextual images over isolated stock-like close-ups:

- Finished bathrooms and wet areas
- Homes, businesses, buildings, and active sites
- Plant rooms and installed systems
- Technicians working where available
- Clear before/after or problem/solution evidence

Use image framing, cropping, and overlays to create hierarchy. Avoid darkening every image until it becomes anonymous.

## Layout rules

- Design each section around one clear job.
- Use full-width bands and unframed page sections; reserve cards for repeated items and genuinely framed tools.
- Use a strong primary composition rather than many competing panels.
- Keep content widths readable and create deliberate rhythm between dense and open sections.
- Use rounded corners as a project-specific framing device, not on every element.
- Avoid nested cards, excessive pills, decorative HUD labels, and random floating ornaments.
- Avoid making every section look like a dashboard, archive, or feature grid.
- Let one lead image or project carry visual weight before introducing supporting items.
- Keep the quote action visible but do not let calls to action overpower evidence.

## Type rules

- Contemporary sans is the display voice: `Plus Jakarta Sans` 700/800, `tracking -0.04em`, `leading 0.95`. No global serif — serif (`Cormorant Garamond`) is an occasional accent, not the default (`src/index.css:20`).
- Use scale, weight, and line breaks for major headings rather than decorative serif.
- Do not use uppercase tracking for every label. Quiet label is `11px 600 0.14em uppercase #5B6B7A` (`src/index.css:24` `.eyebrow` / `text-xs tracking-[0.14em]`). Legacy `font-mono-meta 0.22em` is deprecated except where needed.
- Keep body copy short enough to scan (`max-w-prose`, `leading-6/7`, `text-sm/15px`) and cap long measures.
- Headings state business value before atmosphere. Avoid slogan pairs that could belong to any contractor.
- Never use typography as decoration when it reduces comprehension.

## Color rules (hardened 2026-09-07)

Tokens in `src/index.css:4-10`:
- `--bg-canvas: #F6F5F2` (cool light mineral, was warm `#F9F8F6` beige)
- `--bg-soft: #EFEDE8` / `--surface-card: #FFFFFF`
- `--ink: #0F1E2D` (and `--ink-soft: #2D3A4A`), `--muted: #5B6B7A`
- `--water: #1A5CFF` primary action (`hover #1448C6`, `active #123AA3`), accent `--amber: #C78D3F` restrained
- `--border: rgba(15,30,45,0.10)`
- Dark sections (`bg-[#0F1E2D]`) used for emphasis (Work intro, CTA, Process detail, Footer) not as default.
- Avoid purple gradients, AI beige palettes, one-hue tan. Let project imagery provide color variation. All text/controls meet contrast on new palette.

## Interaction and motion (hardened 2026-09-07 — Emil / Impeccable / Taste)

Every animation must have a purpose: explain hierarchy, preserve spatial continuity, show state, or add an occasional moment of character.

- Most UI transitions **under 300ms**. Slower only for large marketing compositions / scroll storytelling.
  - Hero frame `0.45s`, image `0.9s scale 1.02→1`, headline `0.4s y 12`, sub `0.35s`, CTA `0.3s` (`src/components/Hero.tsx:21`).
  - Cards: `0.45-0.5s y 14 stagger 0.06-0.08 power2.out` (`RecentProjects`, `WorkGallery`, `Testimonials`, `WhyOohJay`, `Process`).
  - Tabs/filter cross-fade `0.2-0.22s`, modals `overlay 0.2s / card 0.28s y 10 scale 0.98` (`ProjectDetailModal`, `RequestQuoteModal`), tooltip `0.22s` (`FloatingWhatsApp`).
- Never animate from `scale(0)` — use `scale 0.98` + `y 8-12` + `opacity` (`src/components/ProjectDetailModal.tsx:18`, `RequestQuoteModal`).
- No layout shift on hover: use `transform: translateY(-2px)` + `shadow` (`src/index.css:42 .card-hover`), image `scale 1.02` only, never margin/padding.
- Repeated actions feel immediate: `BeforeAfterSlider` drag updates `clipPath` instantly, no transition; buttons `duration-150`.
- Respect `prefers-reduced-motion: reduce` in every scroll trigger (`matchMedia` early return) + global `@media` `src/index.css:39`.
- Touch targets ≥44px (`min-h-11`, `h-12 w-12` floating), focus rings `focus-visible:ring-2 ring-[#1A5CFF]`, stable image `aspect-[16/10]` etc.
- Prevent hover flicker: `power2.out`, `overwrite:true` on toggles, no competing transitions.

## Responsive rules

- Treat mobile as a primary composition, not a collapsed desktop.
- Keep headlines and buttons inside their containers at all widths.
- Maintain stable image aspect ratios and predictable tap targets.
- Preserve the evidence and quote path when content stacks.
- Test long project names, large numbers, missing images, and narrow screens.

## Component language

Build reusable primitives for buttons, navigation, headings, media frames, project metadata, service summaries, proof blocks, modals, and form states. Components may share behavior and accessibility patterns without sharing identical visual treatment across every future project.

## Content and proof

Lead with residential and commercial plumbing evidence. Use construction work as supporting proof for the additional service. Use real locations, project scope, materials, process steps, and measurable specifications from the content source. Avoid unsupported superlatives such as best, unmatched, guaranteed, or world-class.

## Page composition (hardened multi-page, no About)

- Home persuades: one service promise, one strong framed image (`rounded-[2rem]` on `#F6F5F2`), slim 5-fact proof band, lead project (`lg:col-span-7`) + supports, one primary action (`Request a quote` water-blue).
- Services clarifies: intro `bg-[#EFF2F7]` + `CapabilitiesSection` (water-blue pill tabs, construction last) + `WhyOohJay` 4 standards + CTA.
- Gallery (`/work`, not Work): dark intro `bg-[#0F1E2D]` + `WorkGallery` filter `All/Plumbing/Construction` + `BeforeAfterSlider` + `TestimonialsSection`. Gallery is distinct from Home's Selected work.
- Process reassures: `bg-[#EFF2F7]` intro + `ProcessSection` 4 interactive steps (left nav + right dark detail) + CTA.
- Contact converts: `bg-[#EFF2F7]` stacked form + head-office card, water-blue quote CTA, WhatsApp/phone/email.

Do not duplicate the entire homepage stack on every route. Shared components carry behavior and brand continuity; page composition changes with intent. `FloatingWhatsApp` is now single `bg-[#1A5CFF]` bubble + tooltip (was two bubbles).

## Review checklist

- Does the first viewport explain Ooh Jay and show credible work?
- Is the page clearly a residential and commercial plumbing business in Nigeria & beyond (not Lagos & Abuja only)?
- Is construction visible as an additional service rather than the main identity (last tab/section)?
- Can a visitor find Services, Gallery, Process, Contact without hunting (quiet nav + single water-blue CTA)?
- Does each section have one dominant message?
- Are images contextual and legible (no crushing gradient, `F6F5F2` canvas lets imagery breathe)?
- Is the composition distinctive without decorative noise (no excessive pills/blobs/HUD)?
- Does mobile retain hierarchy and conversion paths (full-width drawer, proof band wraps, gallery `grid-cols-1 sm:grid-cols-2`)?
- Does motion improve understanding or simply announce itself (quick <300ms, no scale(0), no shift)?
- Are copy, claims, contrast, focus states, and reduced motion handled (plain voice, Nigeria & beyond, `focus-visible:ring`, `prefers-reduced-motion`)?

## Hardened v1 system (2026-09-07) — reusable for next two projects

**Why this is the base:** This pass made docs and code agree (was serif/ beige / Lagos & Abuja vs. docs). The system below is behavior + tokens, not a fixed look — future projects keep quality while varying art direction.

- **Tokens to carry:** `--bg-canvas`, `--ink`, `--water` + `--water-hover`, `--muted`, `--border`, `rounded-2xl / 1.5rem`, `shadow-[0_20px_60px_rgba(15,30,45,0.16)]` for framed hero.
- **Type:** `Plus Jakarta Sans` display, quiet `eyebrow 11px 600 0.14em`, `max-w-3xl/5xl` + `tracking -0.04em` for headlines.
- **Layout:** One dominant composition per page opening; framed hero on light canvas; lead + support for proof; filter pills as `rounded-full border` not default.
- **Motion character:** Quick, state-driven, taste-restrained (see Interaction and motion). Hard rule: no `scale(0)`, no layout-jumping hover, respect reduced motion.
- **Copy voice:** Plumbing-first, Nigeria & beyond, specific scope/materials over superlatives; testimonials kept verbatim (confirmed real).
- **To adapt per project:** Change palette/accent, image treatment, headline cadence, section rhythm — keep nav behavior, card hover (`transform` only), modal pattern (`0.98 scale`), focus/reduced-motion guards, and one-job-per-section discipline.
