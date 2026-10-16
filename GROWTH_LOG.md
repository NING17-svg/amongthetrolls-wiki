# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-13 — Adsterra codes integrated for the V4 inventory

- Filled the seven `ads.units` keys (`page-top-728x90`, `page-top-468x60`, `page-top-320x50`, `guide-section-break-728x90`, `guide-section-break-468x60`, `guide-section-break-320x50`, `footer-sponsored-smartlink`) with the platform codes returned by the Adsterra integration; same platform placements reused across both page families (`page-top`, `guide-section-break`) and the Smartlink keeps a single footer slot.
- No inventory, slot, page, layout, deployment or ownership change. Local `npm run verify` passes after the placeholder replacement.

### 2026-10-13 — Among the Trolls Wiki first launch

- First production build for `amongthetrolls.wiki` (Steam App 1675260). 18 public routes: home, 12 guides (`walkthrough`, `map-overview`, `grandfather-cabin-location`, `dungeon-locations`, `magic-and-luck`, `survival-guide`, `crafting-and-building`, `archery-and-hunting`, `combat-supernatural`, `kalevala-creatures`, `rituals`, `story-arc`), FAQ, About, Contact, Privacy Policy, Terms.
- Theme: forest / archipelago palette, Georgia body + Cinzel headings. Fixed AdSense trio kept intact; all `adsterra` keys empty.
- Hero image decisions: panoramic `library_hero.jpg` on home + walkthrough; `screenshot-log-cabin.jpg` on map, cabin, featured lead; `screenshot-carved-stone-monolith.jpg` on rituals + dungeons; `screenshot-first-person-bow-hunting.jpg` on archery; `screenshot-raven.jpg` on story.
- Sitemap, canonical, hreflang, OG, robots and `_headers` wired to `againstthetrolls.wiki`. No template `example.com` link or `localhost` link remains in production output.
- Module composition: home `media-hero` lead with one guide-index chooser, one featured-guides lead, one trailing guide-index (Mythology and story). All guide pages render with the `reading-right-rail` variant.
- `CONTENT_INDEX.md` rewritten with the real 18-row inventory and removed template examples.
- This entry records the launch composition; future edits should append new dated entries below.

### 2026-10-02 - V4 semantic ad inventory

- Replaced fixed six format bindings with independently named positions and container-fitting device alternatives; added 160x300 and mobile-home-only 300x250 capability. Guide bodies and desktop prohibit rectangles; Social Bar excluded.
- Page Builder reserves empty codes and uses local-only placeholders; Adsterra Integrator still supplies real codes via browser automation. Complete module anchors avoid splitting answers/tables/steps.
- No route, content, publisher ownership or site deployment change. Focused inventory, responsive execution and placement capture validation required.


### 2026-10-02 - Third V4 site: optional reference directory

- Scope: reusable object directory and assembly guidance extracted from Kingdom Rush 6; no site deployment or role/Skill change.
- Added: optional `ReferenceDirectory` for existing entity-grid inputs, source name/label/summary search, exact badge filters, count/reset/empty states, optional registered media and unique Unicode/duplicate-name anchors. Shared pure helpers support homepage previews. Plain same-page URLs can target the entry; existing fragments, queries and external targets remain intact.
- Design: semantic tokens and serializable localized labels; caller owns placement, categories, columns, fonts, palette and assets. Ordinary EntityGrid/ModuleRenderer and page routes/SEO remain unchanged.
- Verification: source/SSR conservation, registered media, empty/no-label datasets, link retention and anchor collisions; actual Chrome 1440px/390px search/filter/reset, independent localized directory, no overflow, and no-JS reading/fragment targets. Type/lint, template/content, V4 components/composition, static build and rendered SEO checked. Temporary browser fixtures are private runtime evidence, not production routes.
- Business boundary: component behavior only; no claims about game facts, search traffic, ad fill or revenue.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

### 2026-10-01 - V4 reading and page assembly

- Changes: task-led first homepage module, safe Markdown paragraphs/lists/links/tables, grouped navigation, compact content headers and mobile contents.
- Affected routes: all shells; route and locale contracts retained.
- Validation: regression fixture reproduces single-p failure; demand compositions and each built page's prose/steps/callout structures plus contents targets checked by validate:reading. Full shared-template verify required before publication.
- Adoption: central template only; existing sites require scoped migration and live verification.

## 2026-10-01 — V4 template composition and visual system

- Scope: shared template only; no role, Skill, production runtime or live-site migration.
- Added portal, reference-desk and visual-cover home compositions; recursive Wiki navigation; four editable themes and three self-hosted display fonts.
- Added grouped guide index, featured guides, progression and fact panels; optional media in steps.
- Kept supplementary homepage copy accessible in a disclosure; retained existing routes, content modules and static SEO/ad contracts.
- Missing optional media emits warnings and uses fallback. Local preview assets remain unbound to generic game data.
- Verification: npm run verify; desktop/mobile review of local showcase; native contents jumps; wide-table local scrolling; browser regression confirms a 404 image hides/falls back while a healthy image loads. This records template behavior, not game-fact or business validation.

## 2026-10-01 — Separate template capabilities from game design

- Removed production theme presets, named skins and bundled display fonts; retained free color/font/asset inputs, layout options and independent modules.
- Production default is a neutral runnable placeholder. Demo themes/fonts and assembly examples live only in scripts/fixtures and do not choose any site's design.
- Clarified that module choice/order, navigation and visual identity are decided for each game at invocation. No role or Skill changes.
- Verification: focused custom-theme propagation and composition regression; shared-template build/SEO/reading checks and independent showcase export.


## 2026-10-02 — Player content assembly and internal evidence boundary

- Removed automatic review dates, footer disclaimer, and entity source/version/remake modules; retained internal trace fields. Empty answer/fact sections are omitted. Task modules are optional, with an answer or useful player entry still required.
- Builder records current SHA-bound Writer/Collector answer and required-image mappings. The central gate checks every current manifest HTML, answer excerpts/context links and necessary local/built/live assets. Homepage platform/release/pricing facts belong on approved independent routes.
- Validation covers rendering boundaries, short lookup/entry-only pages, types/lint, static build, SEO metadata/sitemap, reading structure and V4 composition. Python regressions reject lost answers/images, hidden/non-body substitutions, stale inputs and claimed completion without local plus canonical live checks. Writer/Collector/Theme/Planner contract regressions passed.
- Maintenance branch only: no scheduler resumed, historical deployment, live visual or revenue result. Actual game facts, image meaning and computed visibility still require semantic and desktop/mobile visual acceptance.

## 2026-10-16 — Reader path and public-copy repair

- Added a context-specific body link to the next guide across 12 guide routes; the index above records the section and destination.
- Added executable, fact-grounded step modules to 3 process guides.
- Replaced the Contact placeholder with support@amongthetrolls.wiki.
- Preserved guide H1, SEO title, description, routes, ad placements, and page layout. Local typecheck, lint, static build, and rendered-link checks are the acceptance gates; search behavior needs later GA4 natural-search observation.
