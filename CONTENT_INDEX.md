# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Site Identity

- Site name: Among the Trolls Wiki
- Domain: https://amongthetrolls.wiki
- Primary locale: en-US (root path)
- Game: Among the Trolls (Steam App ID 1675260; full release October 14, 2026; public demo launched February 12, 2026)

## Page Inventory

The rows below are the primary-locale baseline. This site ships only the en-US locale; secondary-locale routes are not generated.

| URL | Page type | Primary keyword | Player question answered | Primary module |
| --- | --- | --- | --- | --- |
| `/` | home | Among the Trolls guides | What is Among the Trolls and which guides cover its systems? | guide-index (Demo, archipelago, and progression) + featured-guides + guide-index (Mythology and story) |
| `/guides/walkthrough/` | guide | Among the Trolls walkthrough | What does the demo cover and how should a player progress through it? | prose (demo-scope-and-time-gate, four-pillars-in-order, verified-beats, known-issues) |
| `/guides/map-overview/` | guide | Among the Trolls map | What does the playable archipelago look like and where do surface landmarks sit? | prose (surface-forest-overworld, kynnykset, water-layer, cross-layer-rules) |
| `/guides/grandfather-cabin-location/` | guide | Among the Trolls grandfather cabin location | Where is Grandpa's cabin and how does Anna reach it? | prose (where-the-cabin-sits, behind-the-cabin, how-anna-reaches-it, why-cabin-empty) |
| `/guides/dungeon-locations/` | guide | Among the Trolls dungeon locations | Where do kynnys dungeons sit in the world and how do alternate exits work? | prose (how-to-reach, dungeon-identities, alternate-exits, why-dungeons-exist) |
| `/guides/magic-and-luck/` | guide | Among the Trolls magic and luck system | What do Vaki and Lykky actually do and how do they interact? | prose (Vaki, Lykky, system balance) |
| `/guides/survival-guide/` | guide | Among the Trolls survival guide | What are the four survival needs and how does a player survive harsh weather? | prose (Hunger, Thirst, Sleep, Temperature, harsh weather) |
| `/guides/crafting-and-building/` | guide | Among the Trolls crafting guide | How does crafting work and how does a player build shelter, bridges, and campfires? | prose (3D backpack grid, recipes, modular buildings) |
| `/guides/archery-and-hunting/` | guide | Among the Trolls archery | How does the bow work and what is the hunting loop? | prose (bow loop, arrow crafting, target range, hunting) |
| `/guides/combat-supernatural/` | guide | Among the Trolls combat against supernatural creatures | How does a player fight the supernatural creatures that come through broken borders? | prose (Kalevala enemies, bow + stealth, Vaki potions) |
| `/guides/kalevala-creatures/` | guide | Among the Trolls Kalevala creatures | Which Kalevala and Finnish-myth creatures appear and what roles do the forest spirits play? | prose (Ilmatar, Väinämöinen, Aallottaret, cupstones, familiars) |
| `/guides/rituals/` | guide | Among the Trolls rituals | How are rituals performed and how do they restore Lykky and the borders? | prose (cupstone offerings, kynnys openings, dungeon exits) |
| `/guides/story-arc/` | guide | Among the Trolls story explained | What is the main story and how does Anna's quest to find her grandfather unfold? | prose (Anna's crossing, the empty cabin, Grandpa's shaman past, the Crow) |
| `/faq/` | fixed | Among the Trolls FAQ | Quick answers to release/platform/wiki-scope/official-status questions | prose (release-faq, demo-limits-faq, wiki-scope-faq, official-status-faq) |
| `/about/` | fixed | about Among the Trolls Wiki | What this site covers, how sources are chosen, what readers should expect | prose (mission, sourcing, scope) |
| `/contact/` | fixed | contact Among the Trolls Wiki | Trust page for corrections and feedback | prose (contact-method, corrections) |
| `/privacy-policy/` | legal | Among the Trolls Wiki privacy policy | Analytics, advertising, and contact-message behavior | prose (data, contact, updates) |
| `/terms/` | legal | Among the Trolls Wiki terms of use | Unofficial status, accuracy, and acceptable use | prose (unofficial, accuracy, acceptable-use) |

## Content Clusters

- Home + system guides: `/`, `/guides/walkthrough/`, `/guides/survival-guide/`, `/guides/crafting-and-building/`, `/guides/magic-and-luck/`
- Map and locations cluster: `/guides/map-overview/`, `/guides/grandfather-cabin-location/`, `/guides/dungeon-locations/`
- Combat cluster: `/guides/archery-and-hunting/`, `/guides/combat-supernatural/`
- Lore and story cluster: `/guides/kalevala-creatures/`, `/guides/rituals/`, `/guides/story-arc/`
- Trust and policy: `/about/`, `/contact/`, `/privacy-policy/`, `/terms/`
- Short entry: `/faq/`

## Internal Linking Map

- Home links to every guide through the lead `guide-index` module, the `featured-guides` module, and the trailing `guide-index` (Mythology and story).
- The header `Guides` dropdown enumerates every guide page.
- Each guide's right-rail `relatedPageIds` keeps cluster-internal cross links.
- Footer points at `/about/`, `/contact/`, `/privacy-policy/`, `/terms/`.

## Open Questions

- No new content product question is pending at launch. The contact page advertises a placeholder route that future updates can replace with a real address.
## Guide Body Next Steps (2026-10-16)

Each guide offers a relevant next guide in the body section named below. The page-end related list remains supplementary.

| Guide URL | Body section | Next guide |
|---|---|---|
| `/guides/archery-and-hunting` | The Hunting Loop | `/guides/combat-supernatural/` |
| `/guides/combat-supernatural` | Weapons and Tools That Work | `/guides/magic-and-luck/` |
| `/guides/crafting-and-building` | What the Craft Grid Produces | `/guides/magic-and-luck/` |
| `/guides/dungeon-locations` | How Players Reach a Dungeon | `/guides/map-overview/` |
| `/guides/grandfather-cabin-location` | Why the Cabin Is Empty | `/guides/story-arc/` |
| `/guides/kalevala-creatures` | Forest Spirits and the Cupstone Network | `/guides/rituals/` |
| `/guides/magic-and-luck` | Vaki: The Magic / Animistic Power | `/guides/crafting-and-building/` |
| `/guides/map-overview` | Kynnykset (Threshold Arches) | `/guides/dungeon-locations/` |
| `/guides/rituals` | Kynnys (Threshold) Rituals | `/guides/dungeon-locations/` |
| `/guides/story-arc` | The Talking Crow and Early Guides | `/guides/magic-and-luck/` |
| `/guides/survival-guide` | How Weather Couples Into Lykky | `/guides/magic-and-luck/` |
| `/guides/walkthrough` | The Four Pillars in Order | `/guides/crafting-and-building/` |
