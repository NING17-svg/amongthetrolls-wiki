import type { PageContent } from "@/types/content";

// 12 guide pages: one per markdown file under guide-editor/content/guides/.
// seoTitle / metaDescription / h1 are copied verbatim from frontmatter title,
// frontmatter description, and the first body H1 respectively.

export const guidePages: PageContent[] = [
  {
    id: "walkthrough",
    translationKey: "walkthrough",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/walkthrough",
    url: "/guides/walkthrough",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Walkthrough: Demo Beats and Four Pillars",
    seoTitle: "Among the Trolls Walkthrough: Demo Beats and Four Pillars",
    metaDescription:
      "Among the Trolls walkthrough of the public demo: the four pillars, verified beats, target-range practice, kynnys portal rules, demo limits, and known issues.",
    summary:
      "Among the Trolls is a first-person narrative-adventure with survival elements, drawn from Finnish and Kalevala mythology. The full release is scheduled for October 14, 2026 on Steam (App ID 1675260), so the only playable build right now is the public demo — that is what this walkthrough covers.",
    hero: {
      eyebrow: "Walkthrough",
      subtitle:
        "The full release is October 14, 2026; the only playable build right now is the public demo.",
      assetId: "hero-panorama",
      ctas: [
        { label: "Survival guide", href: "/guides/survival-guide" },
        { label: "Map overview", href: "/guides/map-overview" },
      ],
    },
    quickAnswer:
      "Both `Among the Trolls walkthrough` and `Among the Trolls demo walkthrough` point to the same curated, non-consecutive slices of the archipelago. Treat the demo as four pillars in order: Atmosphere, Survival and Crafting, Story, Supernatural.",
    keyFacts: [
      { label: "Full release", value: "October 14, 2026" },
      { label: "Demo launch", value: "February 12, 2026" },
      { label: "Pillars", value: "Atmosphere → Survival → Story → Supernatural" },
    ],
    modules: [
      {
        id: "demo-scope-and-time-gate",
        type: "prose",
        heading: "Demo Scope and Time Gate",
        body:
          "- Launched February 12, 2026; patched February 23, 2026 for Steam Next Fest.\n- Curated, non-consecutive slices of the archipelago rather than a continuous route.\n- Roughly 2-hour time gate with no save function.\n- No key rebinding (WASD/ESDF only); 21:9 ultra-wide support is planned for full release.\n- Y-axis mouse inversion is present and not yet patched.",
      },
      {
        id: "four-pillars-in-order",
        type: "prose",
        heading: "The Four Pillars in Order",
        body:
          "The demo walks through four pillars in this order: Atmosphere, Survival and Crafting, Story, and Supernatural. Treat each pillar as one progression block rather than four independent quests.\n\n1. **Atmosphere.** Explore the Finnish wilderness and partially interactive landmarks. This pillar establishes how to read the world and the audio cues (birdong is louder in clear weather, quieter under rain or strong wind).\n2. **Survival and Crafting.** Gather wood, build bridges, drag items into the 3D backpack's craft grid, follow recipes in Anna's journal, and cook at a campfire. Campfire food can burn to ash if overcooked. Track Hunger, Thirst, Sleep, and Temperature throughout.\n3. **Story.** Anna's early journey toward Grandpa's cabin, meeting the talking Crow that guides her, and learning that Grandpa was a shaman in the tietäjä tradition.\n4. **Supernatural.** A teaser of the kynnykset (Threshold arches) that lead into dungeons. The largest fights are reserved for the full release, so do not expect a final boss in the demo.",
        links: [{ label: "Among the Trolls Crafting Guide: Backpack, Shelters, Bridges", href: "/guides/crafting-and-building/" }],
      },
      {
        id: "verified-beats",
        type: "prose",
        heading: "Verified Beats to Hit in This Order",
        body:
          "- Cut down trees with an axe; carry the resulting logs, branches, and twigs for crafting or for bridge building.\n- Approach water carefully: axes, bows, and spears cannot be used while submerged, and hostile land enemies refuse to follow prey into the water.\n- Visit the target range directly behind Grandpa's cabin to practice the bow before any real hunt.\n- Open a kynnys by selecting the Portal Page whose word matches that kynnykset's destination.\n- Inside a dungeon, choose between returning to the entry point or taking an alternate exit; some alternate exits require an additional item before they activate.",
      },
      {
        id: "known-issues",
        type: "prose",
        heading: "Known Issues to Plan Around",
        body:
          "- The 2-hour cap with no save function means every choice counts; finish longer loops (campfire cooking, dungeon exploration) early in the run.\n- Quickslot arrows were not displayed on first bow equip; this has been fixed in a later demo patch but remains worth double-checking on an unpatched build.\n- Players could previously get stuck aiming the bow during a cutscene; this has been fixed.\n- Spear-throw damage was rebalanced in a hotfix, and melee-enemy pathfinding was improved; if an enemy ignores terrain, it is a known edge case in the demo, not a player mistake.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["map-overview", "survival-guide", "magic-and-luck", "crafting-and-building"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "map-overview",
    translationKey: "map-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/map-overview",
    url: "/guides/map-overview",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Map: Archipelago, Bridges and Kynnykset",
    seoTitle: "Among the Trolls Map: Archipelago, Bridges and Kynnykset",
    metaDescription:
      "Among the Trolls map of the Finnish archipelago: forest overworld, dungeon layer, kynnys portals, bridges between islands, and the swim map of lakes and ocean.",
    summary:
      "The Among the Trolls map is a forested Finnish archipelago rendered in first person, split into two layers: a surface forest overworld that goes on across many islands, and a network of ancient dungeons that branch off from it.",
    hero: {
      eyebrow: "Map and Locations",
      subtitle: "The Finnish archipelago in first person: forest overworld, dungeon layer, and water swim map.",
      assetId: "log-cabin",
      ctas: [
        { label: "Grandfather's cabin", href: "/guides/grandfather-cabin-location" },
        { label: "Dungeon locations", href: "/guides/dungeon-locations" },
      ],
    },
    quickAnswer:
      "Three layers: forest overworld reached on foot or by bridge, dungeon layer entered through kynnykset (Threshold arches), and a water swim map split into lakes, ocean, and Deep Sea.",
    keyFacts: [
      { label: "Surface", value: "Forest overworld, bridges, kynnykset" },
      { label: "Water", value: "Lakes, ocean, Deep Sea (Aallottaret)" },
      { label: "Dungeon", value: "Mystery / Tension / Survival / Prior human presence" },
    ],
    modules: [
      {
        id: "surface-forest-overworld",
        type: "prose",
        heading: "Surface Forest Overworld",
        body:
          "- The forest itself is described as going on forever, with trees that can be cut down and carried as logs, branches, and twigs across multiple islands.\n- Open sea crossings are not possible by swimming, so reaching another island always requires building or repairing a bridge.\n- Bridges come in two forms: standard wood bridges and repair-magic variants crafted via Vaki to restore mysteriously broken spans.\n- Wood is gathered on each island, then placed using a ghost-placement preview with smart anchor points so the bridge actually connects.",
      },
      {
        id: "kynnykset",
        type: "prose",
        heading: "Kynnykset (Threshold Arches)",
        body:
          "- Kynnykset are solitary stone portals scattered across the islands; each is bound to a destination word.\n- The kynnys opens only when the player selects the Portal Page whose word matches that destination; the wrong page leaves the arch closed.\n- Dungeon identities differ — mystery, tension, survival, and prior-human-presence zones all carry distinct moods — so the same kynnys is not interchangeable with another.\n- Some dungeons carry alternate exits; most alternate exits require an extra item or condition before they unlock.",
        links: [{ label: "Among the Trolls Dungeon Locations: Kynnys Portals and Exits", href: "/guides/dungeon-locations/" }],
      },
      {
        id: "water-layer",
        type: "prose",
        heading: "Water Layer and Swim Map",
        body:
          "The water layer is named by region and depth:\n\n- **Lakes** — smaller inland bodies; standard rules apply (no weapon use while submerged).\n- **Ocean** — coastal and open water; land enemies will not follow prey into it.\n- **Deep Sea** — a deeper region inhabited by Aallottaret, water nymphs drawn from local lore, tied to the swimming system rather than the surface combat loop.",
      },
      {
        id: "cross-layer-rules",
        type: "prose",
        heading: "Cross-Layer Rules",
        body:
          "- Axes, bows, and spears cannot be used while submerged.\n- Hostile land creatures refuse to follow prey into water, so a shoreline retreat is a real emergency exit.\n- Bridges are the only way to cross between landmasses without entering the swim map; both standard and repair-magic bridges count.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["grandfather-cabin-location", "dungeon-locations", "walkthrough", "crafting-and-building"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "grandfather-cabin-location",
    translationKey: "grandfather-cabin-location",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/grandfather-cabin-location",
    url: "/guides/grandfather-cabin-location",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Grandfather Cabin Location: How to Find It",
    seoTitle: "Among the Trolls Grandfather Cabin Location: How to Find It",
    metaDescription:
      "Among the Trolls grandfather cabin location deep in the forest, why the cabin is abandoned, the target range behind it, and how Anna's route reaches it.",
    summary:
      "Grandpa's cabin sits deep in the Finnish forest archipelago and is the first story location Anna reaches. It is abandoned when she arrives — both her grandfather and her brother are missing — and the immediate surroundings include the practice area that the game expects new players to use before any real hunt.",
    hero: {
      eyebrow: "Map and Locations",
      subtitle: "Where Grandpa's cabin sits, why it is empty, and how Anna's route reaches it.",
      assetId: "log-cabin",
      ctas: [
        { label: "Map overview", href: "/guides/map-overview" },
        { label: "Archery and hunting", href: "/guides/archery-and-hunting" },
      ],
    },
    quickAnswer:
      "The cabin sits deep in the forest, not on the coast, and is the anchor that every bridge, kynnys, and dungeon route is measured against. It is empty when Anna arrives; the target range sits directly behind it for bow practice.",
    keyFacts: [
      { label: "Location", value: "Deep in the forest overworld" },
      { label: "Status", value: "Abandoned when Anna arrives" },
      { label: "Practice area", value: "Target range directly behind the cabin" },
    ],
    modules: [
      {
        id: "where-the-cabin-sits",
        type: "prose",
        heading: "Where the Cabin Sits",
        body:
          "- Deep in the forest overworld, not on the coast; it is reached by traversing the archipelago on foot or by bridge rather than by swimming.\n- The cabin is the only fixed story location in the early game, so it is the anchor point that all subsequent bridge, kynnys, and dungeon routes are measured against.\n- When Anna arrives, the cabin is abandoned — no NPCs are present, and there is no fast travel marker to verify arrival beyond reading the cabin itself.",
      },
      {
        id: "behind-the-cabin",
        type: "prose",
        heading: "What Sits Directly Behind the Cabin",
        body:
          "- A small target range is positioned directly behind the cabin. The game explicitly directs new players there so they can calibrate the bow before any real hunting.\n- Practicing here uses real arrows; carrying a few spare sticks for arrow crafting is the cheapest way to keep the practice loop running without burning inventory.",
      },
      {
        id: "how-anna-reaches-it",
        type: "prose",
        heading: "How Anna Reaches It",
        body:
          "Anna crosses to Finland by rowboat to reach Grandpa's remote cabin; the boat is smashed by a giant pike-like creature, which drags her underwater, and she washes ashore alone. The first beats of the run are therefore:\n\n1. Stabilize the four survival needs — Hunger, Thirst, Sleep, and Temperature — because she washes ashore hungry, thirsty, and cold.\n2. Read the environment for the cabin's direction; the cabin is in the forest, not on the shoreline where she lands.\n3. Cut trees and carry logs, branches, and twigs forward to keep bridging and crafting alive while moving through the archipelago.\n4. Once at the cabin, use the target range behind it to calibrate the bow before any actual hunt.",
      },
      {
        id: "why-cabin-empty",
        type: "prose",
        heading: "Why the Cabin Is Empty",
        body:
          "- The cabin is the entry point for Anna's investigation of her grandfather and her brother's disappearance, not a place to expect conversation or quest NPCs.\n- Items and lore inside the cabin frame the rest of the run; players should treat it as a story anchor and a practice area rather than a settlement.\n- The talking Crow that acts as Anna's early guide appears on the route to and around the cabin, not inside it.",
        links: [{ label: "Among the Trolls Story: Anna Quest for Her Missing Grandpa", href: "/guides/story-arc/" }],
      },
    ],
    faqIds: [],
    relatedPageIds: ["map-overview", "walkthrough", "survival-guide", "story-arc"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "dungeon-locations",
    translationKey: "dungeon-locations",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/dungeon-locations",
    url: "/guides/dungeon-locations",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Dungeon Locations: Kynnys Portals and Exits",
    seoTitle: "Among the Trolls Dungeon Locations: Kynnys Portals and Exits",
    metaDescription:
      "Among the Trolls dungeon locations accessed through kynnys arches, how the word-bound Portal Page opens them, and how alternate exits and items unlock.",
    summary:
      "Dungeon locations in Among the Trolls are not standalone zones — they branch off the forest overworld through stone Threshold arches called kynnykset. Each kynnys sits somewhere on the surface map, is bound to a destination word, and only opens when the player carries the Portal Page whose word matches that kynnykset.",
    hero: {
      eyebrow: "Map and Locations",
      subtitle: "How kynnys portals branch off the forest, the four dungeon identities, and how alternate exits work.",
      assetId: "kynnys-stone",
      ctas: [
        { label: "Rituals guide", href: "/guides/rituals" },
        { label: "Kalevala creatures", href: "/guides/kalevala-creatures" },
      ],
    },
    quickAnswer:
      "Find a kynnys on the surface, then open it only with the Portal Page whose word matches that kynnykset's destination word. Inside, choose between returning to the entry point and taking an alternate exit; most alternate exits require an item or condition.",
    keyFacts: [
      { label: "Access", value: "Kynnys arch + matching Portal Page word" },
      { label: "Identities", value: "Mystery, Tension, Survival, Prior human presence" },
      { label: "Exit options", value: "Entry point or alternate exit (often item-gated)" },
    ],
    modules: [
      {
        id: "how-to-reach",
        type: "prose",
        heading: "How Players Reach a Dungeon",
        body:
          "- Find a kynnys on the surface; they are solitary stone arches scattered across the islands.\n- Check the Portal Page the player is carrying. If the page's word matches the kynnykset's destination word, the passage opens.\n- If the words do not match, the kynnys stays closed and the player has to keep searching the archipelago for the correct page.\n- The largest kynnys fights are reserved for the full release; the demo only teases the portal system.",
        links: [{ label: "Among the Trolls Map: Archipelago, Bridges and Kynnykset", href: "/guides/map-overview/" }],
      },
      {
        id: "field-checklist",
        type: "steps",
        heading: "What to do next",
        items: [
          { title: "Find the threshold arch", body: "Locate a kynnys on the island route." },
          { title: "Match the destination", body: "Select the Portal Page whose word belongs to that arch." },
          { title: "Plan the exit", body: "Inside the dungeon, check whether to return to the entry point or use an alternate exit." },
        ],
      },
      {
        id: "dungeon-identities",
        type: "prose",
        heading: "Dungeon Identities",
        body:
          "Different dungeons carry distinct identities that change what the player should expect inside:\n\n- **Mystery** — focused on discovery and lore reveals.\n- **Tension** — hostile encounters stacked into tighter spaces.\n- **Survival** — resource drain and stat pressure on top of the combat loop.\n- **Prior human presence** — dungeons built around remains, signs, or structures left by earlier visitors.\n\nEach dungeon identity changes the pacing inside but does not change the rule that the kynnys must be opened with the right Portal Page.",
      },
      {
        id: "alternate-exits",
        type: "prose",
        heading: "Alternate Exits Inside Dungeons",
        body:
          "- Inside any dungeon, the player is given a choice between returning to the entry point and taking an alternate exit.\n- Most alternate exits require an additional item or condition before they activate, so trying to push through without preparation usually fails.\n- An unlocked alternate exit can move the player to a new surface location, which then feeds back into the bridge-and-kynnys layer of the map.\n- If a dungeon ends in a dead end, retreat to the entry point is always available; it is not a soft-lock unless the player is out of healing items or potions.",
      },
      {
        id: "why-dungeons-exist",
        type: "prose",
        heading: "Why Dungeons Exist on the Map",
        body:
          "- They are the gameplay answer to broken borders between the human realm and the Kalevala realm; the player's job is to resolve them and rebuild those borders.\n- Each dungeon sits where the borders have broken down, so dungeon locations cluster where the forest shows corruption, hostile spirit activity, or worsened Lykky.\n- Reaching a dungeon also requires the Lykky balance to be healthy enough to survive the dungeon's stat drain; players who enter on empty Hunger, Thirst, Sleep, or Temperature will struggle.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["rituals", "map-overview", "magic-and-luck", "combat-supernatural"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "magic-and-luck",
    translationKey: "magic-and-luck",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/magic-and-luck",
    url: "/guides/magic-and-luck",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Magic and Luck: Vaki and Lykky Explained",
    seoTitle: "Among the Trolls Magic and Luck: Vaki and Lykky Explained",
    metaDescription:
      "Among the Trolls magic and luck system explained: how Vaki powers supernatural crafting, how Lykky shifts the world's response, and how the two forces couple.",
    summary:
      "The magic and luck system in Among the Trolls is a single coupled balance between Vaki and Lykky. Both are ancient, animistic forces that the player must keep aligned to survive, and neither behaves as a stand-alone meter: Vaki actions nudge Lykky, and Lykky in turn changes how effective the world's resources and creatures are.",
    hero: {
      eyebrow: "Magic and Stats",
      subtitle: "Why every Vaki action nudges Lykky, and how to keep the two forces balanced.",
      ctas: [
        { label: "Rituals", href: "/guides/rituals" },
        { label: "Crafting and building", href: "/guides/crafting-and-building" },
      ],
    },
    quickAnswer:
      "Vaki is the magic / animistic channel that fuels crafting; Lykky is each island's luck / life-energy. Heavy Vaki nudges Lykky down; cupstone offerings push it back up. Plan Vaki actions and offerings in pairs rather than separately.",
    keyFacts: [
      { label: "Vaki", value: "Animistic magic channel (potions, magic bridges)" },
      { label: "Lykky", value: "Per-island luck / life-energy" },
      { label: "Couple rule", value: "Vaki actions nudge Lykky; offerings restore it" },
    ],
    modules: [
      {
        id: "vaki",
        type: "prose",
        heading: "Vaki: The Magic / Animistic Power",
        body:
          "- Vaki is the magic channel that fuels the player's connection to the supernatural.\n- Vaki is invoked through crafting magical potions in Anna's 3D backpack; these potions let Anna survive dungeons, hostile creatures, and the effects of bad Lykky.\n- Vaki ties into the tietäjä (shamanic-keeper) tradition, including enchant settlements that calm corrupted areas of the forest.\n- Magic bridges are crafted via Vaki; they are how the player reaches smaller islands and repairs some mysteriously broken bridges.",
        links: [{ label: "Among the Trolls Crafting Guide: Backpack, Shelters, Bridges", href: "/guides/crafting-and-building/" }],
      },
      {
        id: "lykky",
        type: "prose",
        heading: "Lykky: The Luck / Life-Energy of Each Island",
        body:
          "- Lykky is the regional balance of each island. It rises or falls based on the player's actions.\n- When Lykky drops: wild animals grow more aggressive, gatherable resources become scarcer, and crafted tools wear out faster.\n- When Lykky drops hard enough, the sky darkens and malicious spirits actively hunt the player.\n- When Lykky is high: the forest rewards the player with better resources, and magical familiars can be summoned to assist exploration and crafting.",
      },
      {
        id: "vaki-lykky-couple",
        type: "prose",
        heading: "How Vaki and Lykky Couple",
        body:
          "- They are not parallel meters; they push back against each other and the world reacts in real time.\n- A heavy Vaki action (chopping trees, hunting) nudges Lykky downward if it is not balanced by offerings or restraint.\n- Sacrificing items to cupstone altars is the in-game way to recover Lykky after over-hunting or clear-cutting.\n- Adaptive music layers stack onto the system: extra layers add or remove in real time as Lykky rises and falls, with an additional layer stacked for active combat.",
      },
      {
        id: "in-practice",
        type: "prose",
        heading: "What This Means in Practice",
        body:
          "- Build Vaki actions (potions, magic bridges, dungeon prep) before pushing into hostile zones.\n- Pair Vaki use with cupstone offerings so Lykky does not collapse and turn the area against the player.\n- When Lykky is high, summon a familiar and gather; when Lykky is low, retreat, hunt less, and make offerings before pushing deeper.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["rituals", "crafting-and-building", "kalevala-creatures", "combat-supernatural"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "survival-guide",
    translationKey: "survival-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/survival-guide",
    url: "/guides/survival-guide",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Survival Guide: Needs and Weather Survival",
    seoTitle: "Among the Trolls Survival Guide: Needs and Weather Survival",
    metaDescription:
      "Among the Trolls survival guide covering Hunger, Thirst, Sleep, and Temperature, plus harsh-weather survival, fires, and the Lykky trade-off in bad weather.",
    summary:
      "Survival in Among the Trolls is built on four primary needs that drive gameplay: Hunger, Thirst, Sleep, and Temperature. The studio describes survival as \"a constant invitation to engage with the world\" rather than a punishment — both HUD bars and visual and audio cues (Anna's breathing, ambient fauna) communicate how badly a need is failing.",
    hero: {
      eyebrow: "Survival",
      subtitle: "Hunger, Thirst, Sleep, and Temperature — plus how harsh weather couples into Lykky.",
      ctas: [
        { label: "Walkthrough", href: "/guides/walkthrough" },
        { label: "Crafting and building", href: "/guides/crafting-and-building" },
      ],
    },
    quickAnswer:
      "Survival runs on four needs: Hunger, Thirst, Sleep, and Temperature. Harsh weather worsens Sleep and Temperature at once, so light a campfire and seek shelter before nightfall or storms.",
    keyFacts: [
      { label: "Needs", value: "Hunger, Thirst, Sleep, Temperature" },
      { label: "Weather", value: "Storms hurt Sleep and Temperature; Lykky sours" },
      { label: "Tells", value: "Birdong drops before rain and wind" },
    ],
    modules: [
      {
        id: "four-needs",
        type: "prose",
        heading: "The Four Primary Needs",
        body:
          "- **Hunger** — managed by hunting, foraging, and cooking at a campfire. Food can burn to ash if left on the fire too long.\n- **Thirst** — managed by drinking from water sources; treat every shoreline stop as a refill opportunity.\n- **Sleep** — gated by the in-game day/night cycle and can be shortened or disturbed by weather, especially storms.\n- **Temperature** — countered by fire or shelter; lighting a campfire or building a covered rest area both raise warmth.",
      },
      {
        id: "harsh-weather",
        type: "prose",
        heading: "How Harsh Weather Changes Survival",
        body:
          "- Weather interacts directly with Sleep: storms interrupt rest, so a planned sleep window can be cut short.\n- Weather interacts directly with Temperature: cold snaps drop warmth faster, so a campfire and shelter need to be ready before nightfall.\n- The standard recipe in bad weather is to seek or build shelter and keep a fire lit.\n- Birdong (forest birdsong) is noisier when it is sunny and quieter under strong wind or rain — a usable audio tell that a storm is coming.",
      },
      {
        id: "weather-couples-lykky",
        type: "prose",
        heading: "How Weather Couples Into Lykky",
        body:
          "- When bad weather persists, the Lykky balance sours; animals become more aggressive, resources thin out, and tools degrade faster.\n- Conversely, balanced play and good weather push Lykky back up.\n- Bad weather is therefore not just a stat-pressure event — it is a sign the player is also losing Lykky and should plan a cupstone offering soon.",
        links: [{ label: "Among the Trolls Magic and Luck: Vaki and Lykky Explained", href: "/guides/magic-and-luck/" }],
      },
      {
        id: "first-day-loop",
        type: "prose",
        heading: "First-Day Survival Loop",
        body:
          "When Anna washes ashore, she is hungry, thirsty, and cold, so the first beats are:\n\n1. Collect branches and twigs, light a fire, and cook something edible.\n2. Drink from the nearest shoreline or stream.\n3. Build or find a covered rest area so Sleep can be completed.\n4. On subsequent days, the loop is: gather wood and stone, hunt or forage for food (bow for small game, spear as a later option, axes and knives for harvest), repair the bow or craft fresh arrows, manage backpack weight, monitor weather cues, and prepare shelter before nightfall.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["walkthrough", "crafting-and-building", "magic-and-luck", "archery-and-hunting"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "crafting-and-building",
    translationKey: "crafting-and-building",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/crafting-and-building",
    url: "/guides/crafting-and-building",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Crafting Guide: Backpack, Shelters, Bridges",
    seoTitle: "Among the Trolls Crafting Guide: Backpack, Shelters, Bridges",
    metaDescription:
      "Among the Trolls crafting guide covering the 3D backpack grid, recipes in Anna's journal, campfire cooking, and modular building for shelters and bridges.",
    summary:
      "Crafting in Among the Trolls happens inside Anna's 3D backpack, which is described as \"one of the elements you'll use the most.\" Recipes are stored in Anna's journal, and the design intent is to let players physically experiment, succeed, fail, and learn recipes rather than memorize menus.",
    hero: {
      eyebrow: "Crafting and Building",
      subtitle: "Drag items into the 3D backpack craft grid; build modular shelters, bridges, and campfires.",
      ctas: [
        { label: "Survival guide", href: "/guides/survival-guide" },
        { label: "Magic and luck", href: "/guides/magic-and-luck" },
      ],
    },
    quickAnswer:
      "Drag two or more things into the backpack's 3D craft grid and let the journal recipe log confirm. Successful crafts consume inputs; failed attempts waste them. Cooking is separate and happens at a campfire.",
    keyFacts: [
      { label: "Crafting", value: "3D backpack craft grid + Anna's journal" },
      { label: "Building", value: "Modular bridges, shelters, campfires" },
      { label: "Cooking", value: "Separate loop at the campfire" },
    ],
    modules: [
      {
        id: "craft-grid",
        type: "prose",
        heading: "How the Craft Grid Works",
        body:
          "- The backpack shows a simple 2D overlay that gives contextual info on each item inside.\n- To craft, the player physically drags two or more items from the backpack into the backpack's craft grid.\n- Combining branches, twigs, sticks, stone, hide, and gathered plants produces tools, weapons, materials, and consumables.\n- Successful crafts consume the inputs; failed attempts waste them, so the player should plan ingredient order before dragging.",
      },
      {
        id: "field-checklist",
        type: "steps",
        heading: "What to do next",
        items: [
          { title: "Collect the needed materials", body: "Gather wood and other resources before opening the backpack craft grid." },
          { title: "Choose the right work area", body: "Use the grid for portable items, modular building for shelters and bridges, and a campfire for cooking." },
          { title: "Check the route after building", body: "A repaired or newly built bridge should connect the intended landmasses." },
        ],
      },
      {
        id: "what-grid-produces",
        type: "prose",
        heading: "What the Craft Grid Produces",
        body:
          "- **Arrows** — crafted from sticks; these are the only source of ranged ammo.\n- **Bow** — the bow starts as a permanent handle that always stays in the inventory and can break but never disappears; the player scavenges materials and rebuilds it through the craft grid.\n- **Axes, knives, spears** — craftable tools with upgrade tiers; the spear is introduced as a later weapon than the bow.\n- **Magical potions (Vaki-aligned)** — brewed through the craft grid to help survive dungeons, enemies, and bad Lykky.\n- **Magic bridges** — craftable via Vaki to reach smaller islands and to repair some mysteriously broken bridges.\n- **Cookable food** — placed at a campfire to prepare meals; ingredients must be physically carried to a campfire and placed there, separate from grid crafting.",
        links: [{ label: "Among the Trolls Magic and Luck: Vaki and Lykky Explained", href: "/guides/magic-and-luck/" }],
      },
      {
        id: "modular-building",
        type: "prose",
        heading: "Modular Building for Shelters and Bridges",
        body:
          "Building uses a modular, Subnautica-style system rather than fixed prefabs.\n\n- **Bridges** — built between islands using gathered wood via a ghost-placement preview with smart anchor points. The player physically carries logs to extend a bridge or shore up a structure.\n- **Shelters** — built to counter Temperature (cold) and Sleep loss; a covered rest area plus a fire is the standard recipe.\n- **Campfires and hearths** — placed for cooking and warmth; a campfire is required to cook food and to recover Temperature quickly.\n- **Tree physics** — felled trees fall and split into trunk, branch, and twig pieces; each part feeds different craftables or structural roles, so the player should chop with a use in mind rather than for raw wood.",
      },
      {
        id: "cooking-vs-grid",
        type: "prose",
        heading: "Cooking Versus Grid Crafting",
        body:
          "- Grid crafting happens inside the backpack and does not need a campfire.\n- Cooking is separate: ingredients must be physically carried to a campfire and placed there.\n- Campfire cooking can burn food to ash quickly if ignored, so the player should treat cooking as an active loop rather than a passive one.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["survival-guide", "magic-and-luck", "map-overview", "archery-and-hunting"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "archery-and-hunting",
    translationKey: "archery-and-hunting",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/archery-and-hunting",
    url: "/guides/archery-and-hunting",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Archery and Hunting: Bow, Arrows, Game",
    seoTitle: "Among the Trolls Archery and Hunting: Bow, Arrows, Game",
    metaDescription:
      "Among the Trolls archery and hunting: how the bow handle works, where to practice, arrow crafting, hunting small game with the bow, and stealth tactics.",
    summary:
      "The bow is Anna's long-term companion in Among the Trolls, and hunting is one of the four core demo pillars. Hunting is explicitly tied to Mielikki, the goddess of the woods and animals in Finnish lore, so the loop is as much about forest balance as it is about pulling arrows.",
    hero: {
      eyebrow: "Combat and Hunting",
      subtitle: "Bow loop, arrow crafting, hunting small game, and how Lykky changes hunting.",
      assetId: "bow-hunting",
      ctas: [
        { label: "Combat vs supernatural", href: "/guides/combat-supernatural" },
        { label: "Survival guide", href: "/guides/survival-guide" },
      ],
    },
    quickAnswer:
      "The bow's handle never disappears; rebuild arrows from sticks in the craft grid and practice on the target range behind Grandpa's cabin. Spear comes later, axes and knives handle skinning, and stealth matters for alert animals.",
    keyFacts: [
      { label: "Bow", value: "Permanent handle, rebuilt through craft grid" },
      { label: "Practice", value: "Target range behind Grandpa's cabin" },
      { label: "Stealth", value: "Required for alert animals like deer" },
    ],
    modules: [
      {
        id: "how-bow-works",
        type: "prose",
        heading: "How the Bow Works",
        body:
          "- Players start with the bow's handle already in the inventory — the handle never disappears, even when the bow breaks.\n- To bring the bow back after a break, the player scavenges materials and builds it through the 3D backpack's craft grid.\n- Arrows are crafted from sticks in the same craft grid; there is no other source of ranged ammo.\n- A known early bug was that quickslot arrows did not show on first bow equip; this has been fixed in later demo patches but is worth double-checking on an unpatched build.",
      },
      {
        id: "where-to-practice",
        type: "prose",
        heading: "Where to Practice",
        body:
          "- New players are directed to Grandpa's target range directly behind the cabin to practice aim before any real hunt.\n- The target range uses real arrows, so carrying a few spare sticks for arrow crafting keeps the practice loop affordable.\n- Practice clears the early bow feel out of the way before animals become reactive to missed shots.",
      },
      {
        id: "hunting-loop",
        type: "prose",
        heading: "The Hunting Loop",
        body:
          "- The bow is the primary hunting weapon for smaller, faster game.\n- The spear is a later weapon option for larger prey and is introduced after the bow is reliable.\n- Axes and knives are used for skinning and processing the kill, not for the chase itself.\n- Stealth is required for alert animals like deer: players crouch and move slowly to avoid detection.\n- Tools (axes, bows, spears) cannot be used while the player is submerged in water, so combat and hunting are limited to land.",
        links: [{ label: "Among the Trolls Combat Against Supernatural Creatures Guide", href: "/guides/combat-supernatural/" }],
      },
      {
        id: "lykky-hunting",
        type: "prose",
        heading: "How Lykky Changes Hunting",
        body:
          "- When Lykky is low, animals grow more aggressive and tools wear out faster, raising the cost of every encounter.\n- Heavy hunting without offering at cupstones will push Lykky downward, which then makes the next hunt harder.\n- Balanced play, paired with cupstone offerings when over-hunting, keeps animals reactive but not aggressive and keeps tools durable.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["combat-supernatural", "survival-guide", "crafting-and-building", "magic-and-luck"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "combat-supernatural",
    translationKey: "combat-supernatural",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/combat-supernatural",
    url: "/guides/combat-supernatural",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Combat Against Supernatural Creatures Guide",
    seoTitle: "Among the Trolls Combat Against Supernatural Creatures Guide",
    metaDescription:
      "Among the Trolls combat against supernatural creatures: how Kalevala enemies react, bow and stealth play, Vaki potions, magic bridges, and known bug fixes.",
    summary:
      "Combat against supernatural creatures in Among the Trolls is distinct from regular hunting. The supernatural enemies are the mythological figures of the Kalevala tradition — they adapt to the player, attack in packs or ambushes, and appear where the borders between the human realm and the mythological realm have broken down.",
    hero: {
      eyebrow: "Combat and Hunting",
      subtitle: "Kalevala enemies, bow and stealth play, Vaki potions, magic bridges, and known bug fixes.",
      ctas: [
        { label: "Archery and hunting", href: "/guides/archery-and-hunting" },
        { label: "Kalevala creatures", href: "/guides/kalevala-creatures" },
      ],
    },
    quickAnswer:
      "Supernatural enemies adapt to you and attack in packs or ambushes; rely on the bow plus stealth, brew Vaki potions before pushing in, and remember the dungeon entry point is always a legal retreat.",
    keyFacts: [
      { label: "Enemies", value: "Kalevala creatures that adapt and ambush" },
      { label: "Counter", value: "Bow, stealth, Vaki potions, magic bridges" },
      { label: "Retreat", value: "Dungeon entry point is always available" },
    ],
    modules: [
      {
        id: "enemy-behavior",
        type: "prose",
        heading: "How Supernatural Enemies Behave",
        body:
          "- Enemies are dynamic and reactive, adapting to surroundings and to the player's playstyle rather than following a fixed patrol.\n- Some supernatural creatures attack in packs; others use ambush tactics off the trail.\n- Combat deliberately uses a limited field of view as a realism decision by the developers, so peripheral vision is unreliable.\n- Patrolling enemies have been added near ruins, so ruins are never safe by default.",
      },
      {
        id: "weapons-and-tools",
        type: "prose",
        heading: "Weapons and Tools That Work",
        body:
          "- The bow is the primary defense against supernatural creatures, and the bow's handle never disappears even when the bow breaks — so the player can always re-equip and rebuild.\n- Stealth (crouching, slow movement) lets the player pick off alert supernatural creatures one at a time, especially the ambush-style ones.\n- Vaki-aligned magical potions are brewed in the backpack and are the portable counter to supernatural creatures in dungeon and on the surface.\n- Magic bridges can be placed to reach smaller islands or to repair broken bridges when creatures or events have cut off the path.",
        links: [{ label: "Among the Trolls Magic and Luck: Vaki and Lykky Explained", href: "/guides/magic-and-luck/" }],
      },
      {
        id: "bug-fixes",
        type: "prose",
        heading: "Known Bug Fixes That Affect Combat",
        body:
          "- Players could previously get stuck aiming the bow during a cutscene; this has been fixed.\n- Spear-throw damage was rebalanced in a hotfix so that spears feel like a meaningful later-weapon option rather than a downgrade.\n- Melee-enemy pathfinding was improved, so supernatural creatures that previously ignored terrain now use it correctly.\n- Food was added inside dungeons to keep stat-drain deaths from soft-locking runs, especially when the player relies on the bow alone.",
      },
      {
        id: "dungeon-survival",
        type: "prose",
        heading: "Survival Loop Inside Dungeons",
        body:
          "- Enter with full Hunger, Thirst, Sleep, and Temperature; dungeon stat drain is a separate layer from the surface loop.\n- Carry Vaki potions brewed from the backpack grid; they are the portable answer to dungeon stat pressure.\n- Retreat toward the dungeon's entry point is always available, so players who run out of healing should not push for an alternate exit.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["archery-and-hunting", "magic-and-luck", "kalevala-creatures", "dungeon-locations"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "kalevala-creatures",
    translationKey: "kalevala-creatures",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/kalevala-creatures",
    url: "/guides/kalevala-creatures",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Kalevala Creatures and Forest Spirits Guide",
    seoTitle: "Among the Trolls Kalevala Creatures and Forest Spirits Guide",
    metaDescription:
      "Among the Trolls Kalevala creatures and forest spirits: Ilmatar, Vainamoinen, Aallottaret, cupstones, familiars, and how broken borders spawn enemies.",
    summary:
      "Creatures in Among the Trolls are rooted in the classic Kalevala myths, described as \"creatures made of wood and stone, as if straight from the Kalevala.\" Some of these creatures help rebuild the borders of the worlds; others are hostile and corrupt the islands. Forest spirits operate through the cupstone network and reward respectful play with familiars.",
    hero: {
      eyebrow: "Mythology",
      subtitle: "Kalevala figures, water-side creatures, cupstones, familiars, and broken borders.",
      ctas: [
        { label: "Rituals", href: "/guides/rituals" },
        { label: "Story arc", href: "/guides/story-arc" },
      ],
    },
    quickAnswer:
      "Kalevala figures like Ilmatar and Väinämöinen frame the world's mythology; Aallottaret rule the water layer; cupstones route offerings that recover Lykky; familiars reward respectful play. Broken borders are why dungeons and hostile spirits appear.",
    keyFacts: [
      { label: "Lore figures", value: "Ilmatar, Väinämöinen (Aallottaret in water)" },
      { label: "Forest spirits", value: "Cupstone altars route offerings" },
      { label: "Familiars", value: "Talking Crow is the early guide" },
    ],
    modules: [
      {
        id: "confirmed-figures",
        type: "prose",
        heading: "Confirmed Kalevala Figures",
        body:
          "- **Ilmatar** — the air's daughter, who descended from the heavens into the sea, drifted heavy with child for nine ages, and from the shards of eggs laid on her knee by a goldeneye \"came the world.\"\n- **Väinämöinen** — the sage born from Ilmatar's womb after nine years on the waves, white-bearded and star-seeing, who, alongside Sampsa Pellervoinen, \"carved space for the seeds of life\" and became \"maker and memory\" of the world.\n- These figures frame the world and the lore rather than being direct combat encounters.",
      },
      {
        id: "water-side",
        type: "prose",
        heading: "Water-Side Creatures",
        body:
          "- **Aallottaret** — water nymphs drawn from local lore who inhabit lakes, the ocean, and a Deep Sea region.\n- They are encountered in the water layer and are tied to the swimming system.\n- Enemies refuse to follow prey into the water, so an Aallottaret encounter is mostly a navigation and lore event, not a forced combat.",
      },
      {
        id: "cupstone-network",
        type: "prose",
        heading: "Forest Spirits and the Cupstone Network",
        body:
          "- Cupstones are large rocks with carved indentations scattered around the archipelago.\n- The player makes offerings (sacrificing gathered items) at these altars to recover Lykky, ward off corrupted creatures, and keep the borders of the worlds intact.\n- Sacrificing items to cupstones after over-hunting or clear-cutting is the in-game way to make amends and avoid a permanent dark sky with hostile spirit hunts.",
        links: [{ label: "Among the Trolls Rituals: Cupstone Altars and Kynnys Doors", href: "/guides/rituals/" }],
      },
      {
        id: "familiars",
        type: "prose",
        heading: "Familiars",
        body:
          "- Familiars are spirit-creatures that can be summoned when the Lykky balance is healthy to assist with exploration and crafting.\n- A talking Crow in particular acts as an early guide for the player, appearing on the route toward Grandpa's cabin.\n- Magical familiars appear once Lykky is healthy; pushing them out by over-hunting or clear-cutting removes a real survival tool.",
      },
      {
        id: "broken-borders",
        type: "prose",
        heading: "How Broken Borders Spawn Enemies",
        body:
          "- The mixing between worlds — the merging of the human realm with the Kalevala realm — is the source of all supernatural encounters.\n- Hostile creatures appear where the borders have broken down, and the player's job is to repair that balance.\n- Repair happens by respecting the forest, making offerings at cupstones, and progressing through the dungeon network opened by the kynnykset.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["rituals", "magic-and-luck", "story-arc", "combat-supernatural"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "rituals",
    translationKey: "rituals",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/rituals",
    url: "/guides/rituals",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Rituals: Cupstone Altars and Kynnys Doors",
    seoTitle: "Among the Trolls Rituals: Cupstone Altars and Kynnys Doors",
    metaDescription:
      "Among the Trolls rituals: cupstone offerings that recover Lykky, kynnys arches opened by the right Portal Page, dungeon exits, and Vaki-aligned potions.",
    summary:
      "Rituals in Among the Trolls are the player's tools for restoring Lykky, keeping the borders between the human realm and the mythological realm intact, and unlocking the dungeon network behind the kynnykset. There are three ritual practices in the game: cupstone offerings, kynnys openings, and Vaki-aligned potion brewing.",
    hero: {
      eyebrow: "Rituals",
      subtitle: "Cupstone offerings, kynnys openings, and Vaki-aligned potions working together.",
      assetId: "kynnys-stone",
      ctas: [
        { label: "Magic and luck", href: "/guides/magic-and-luck" },
        { label: "Dungeon locations", href: "/guides/dungeon-locations" },
      ],
    },
    quickAnswer:
      "Three practices: sacrifice items at cupstones to recover Lykky, open kynnykset with the matching Portal Page, and brew Vaki-aligned potions for portable ritual support. Pair all three; do not rely on any single one.",
    keyFacts: [
      { label: "Cupstones", value: "Recover Lykky and rebuild borders" },
      { label: "Kynnys", value: "Opened only with the matching Portal Page" },
      { label: "Vaki potions", value: "Portable ritual support inside dungeons" },
    ],
    modules: [
      {
        id: "cupstone-altar",
        type: "prose",
        heading: "Cupstone Altar Rituals",
        body:
          "- Cupstones are large, ancient rocks with carved indentations found across the archipelago.\n- The player performs the ritual by sacrificing items — gathered resources, hunted game, branches, twigs — at the cupstone.\n- The result is that Lykky is recovered, corrupted creatures are warded off, and the borders between the human realm and the mythological realm are restored.\n- Sacrificing items to cupstones after over-hunting or clear-cutting is the in-game way to make amends and avoid a permanent dark sky with hostile spirit hunts.\n- Cupstone offerings are not a one-time fix: the player should treat them as a standing loop tied to how aggressively they have been hunting or chopping.",
      },
      {
        id: "field-checklist",
        type: "steps",
        heading: "What to do next",
        items: [
          { title: "Recover local balance", body: "Offer gathered items at a cupstone when Lykky has fallen." },
          { title: "Prepare the threshold", body: "Match the kynnys with its destination Portal Page before entering." },
          { title: "Carry portable support", body: "Craft Vaki potions in the backpack for the dungeon stretch between cupstones." },
        ],
      },
      {
        id: "kynnys-rituals",
        type: "prose",
        heading: "Kynnys (Threshold) Rituals",
        body:
          "- A kynnys is a solitary stone-arch portal bound to a destination and to its \"word.\"\n- Only the correct Portal Page can open the passage; the wrong Portal Page leaves the arch closed.\n- Inside a dungeon, the ritual is completed when the player chooses to return to the entry point or take an alternate exit.\n- Alternate exits often require an additional offering or item before they activate; trying to push through without preparation usually fails.\n- Adaptive music layers add or remove in real time as Lykky rises and falls, reinforcing the ritual mood.",
        links: [{ label: "Among the Trolls Dungeon Locations: Kynnys Portals and Exits", href: "/guides/dungeon-locations/" }],
      },
      {
        id: "vaki-potions",
        type: "prose",
        heading: "Vaki-Aligned Potion Rituals",
        body:
          "- Vaki-aligned potions are brewed in Anna's backpack through the 3D craft grid.\n- They are a more portable ritual practice than cupstones, helping survive dungeons, enemies, and bad Lykky effects in the moment.\n- Potion brewing consumes specific resources, so the player should plan the inputs rather than brewing on impulse.",
      },
      {
        id: "practices-together",
        type: "prose",
        heading: "How the Three Practices Work Together",
        body:
          "- Cupstone offerings recover Lykky so the forest rewards the player and familiars appear.\n- Kynnys openings require the Lykky balance to be healthy enough to survive the dungeon the kynnys leads into.\n- Vaki potions are the portable answer between cupstones, especially inside dungeons where the player cannot stop to gather altar offerings.\n- Pair all three rather than relying on any single ritual — that is how the borders stay rebuilt across the archipelago.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["magic-and-luck", "dungeon-locations", "kalevala-creatures", "crafting-and-building"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "story-arc",
    translationKey: "story-arc",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/story-arc",
    url: "/guides/story-arc",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Among the Trolls Story: Anna Quest for Her Missing Grandpa",
    seoTitle: "Among the Trolls Story: Anna Quest for Her Missing Grandpa",
    metaDescription:
      "Among the Trolls story explained: Anna's crossing to Finland, the empty cabin, Grandpa's shaman past, the talking Crow, and how her quest rebuilds the worlds.",
    summary:
      "Among the Trolls is a story-rich first-person adventure. Anna, a 35-year-old former lawyer turned forester, leaves her life in America after both her brother and her Grandpa go missing, crosses to Finland by rowboat to reach Grandpa's remote cabin, and finds the cabin abandoned. The whole archipelago and the broken Kalevala borders are the backdrop to her search.",
    hero: {
      eyebrow: "Story",
      subtitle: "Anna's crossing, the empty cabin, Grandpa's shaman past, the Crow, and worlds merging.",
      assetId: "raven-closeup",
      ctas: [
        { label: "Rituals", href: "/guides/rituals" },
        { label: "Kalevala creatures", href: "/guides/kalevala-creatures" },
      ],
    },
    quickAnswer:
      "Anna crosses to Finland, finds the cabin abandoned, learns her grandfather was a tietäjä shaman, and discovers the human and Kalevala realms are merging. Rebuilding Lykky, opening kynnykset, and resolving dungeons is how the story moves forward.",
    keyFacts: [
      { label: "Protagonist", value: "Anna, 35, former lawyer turned forester" },
      { label: "Mystery", value: "Grandfather (shaman / tietäjä) and brother missing" },
      { label: "Conflict", value: "Human realm and Kalevala realm are merging" },
    ],
    modules: [
      {
        id: "annas-crossing",
        type: "prose",
        heading: "Anna's Crossing",
        body:
          "- Anna crosses to Finland by rowboat to reach Grandpa's remote cabin.\n- The boat is smashed by a giant pike-like creature, which drags her underwater, and she washes ashore alone, without sight of the cabin or her grandparents.\n- She washes ashore hungry, thirsty, and cold, so the first beats of the run are stabilizing the four survival needs before any story progress.",
      },
      {
        id: "what-anna-finds",
        type: "prose",
        heading: "What Anna Finds at the Cabin",
        body:
          "- The cabin is abandoned; there is no conversation and no fast travel marker, only the cabin itself as a story anchor.\n- Inside the cabin, Anna learns that Grandpa was a shaman — a tietäjä — whose stories she remembers from childhood.\n- Anna's brother is also missing, and the two disappearances together push Anna's investigation forward.\n- The bracelet Grandpa gave Anna as a child has glyphs that match the runes carved on the archipelago's kynnykset, so the cabin is also the source of the dungeon-opening ritual.",
      },
      {
        id: "crow-guides",
        type: "prose",
        heading: "The Talking Crow and Early Guides",
        body:
          "- The talking Crow is an early guide for Anna, appearing on the route toward and around the cabin.\n- Magical familiars appear once Lykky is healthy, so meeting later guides is tied to keeping the forest balance intact.\n- The Crow is the first concrete companion the player has before the family mystery starts unfolding.",
        links: [{ label: "Among the Trolls Magic and Luck: Vaki and Lykky Explained", href: "/guides/magic-and-luck/" }],
      },
      {
        id: "worlds-merging",
        type: "prose",
        heading: "The Worlds Are Merging",
        body:
          "- Following her grandfather's footsteps into the wilderness, Anna discovers that \"the world as we know it and the one from the myths are now merging, creating an unsettling imbalance.\"\n- That imbalance is the source of every hostile supernatural creature and every dungeon reachable through a kynnys.\n- Rebuilding the borders — repairing Lykky, opening the right portals with the right Portal Pages, and resolving the dungeons the broken borders have left exposed — is the gameplay answer to the story question.",
      },
      {
        id: "how-quest-resolves",
        type: "prose",
        heading: "How Anna's Quest Resolves",
        body:
          "- The immediate goal is to find her missing grandfather and uncover why he and her brother disappeared.\n- The deeper resolution reshapes Anna's understanding of her family and her own destiny.\n- Story progress is gated by ritual practice: cupstone offerings recover Lykky, kynnys portals open the dungeons where the broken borders are most exposed, and Vaki potions carry Anna through both.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["rituals", "kalevala-creatures", "magic-and-luck", "walkthrough"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
];