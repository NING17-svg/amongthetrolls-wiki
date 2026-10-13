import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "media-hero" },
  h1: "Among the Trolls Guides: Survival, Crafting, Combat, Lore",
  seoTitle: "Among the Trolls Guides: Survival, Crafting, Combat, Lore",
  metaDescription:
    "Among the Trolls guides covering demo walkthrough, world map, survival needs, Vaki and Lykky magic, crafting, archery, and Kalevala lore for island quests.",
  summary:
    "Plan Anna's first night in the archipelago: stabilize survival needs, learn the Vaki / Lykky balance, and start rebuilding the borders between worlds.",
  hero: {
    eyebrow: "Unofficial wiki",
    subtitle: site.tagline,
    assetId: "hero-panorama",
    ctas: [
      { label: "Read the demo walkthrough", href: "/guides/walkthrough" },
      { label: "Survival guide", href: "/guides/survival-guide" },
    ],
  },
  quickAnswer:
    "Start with the demo walkthrough to learn the four pillars, then follow Survival guide to keep Hunger, Thirst, Sleep, and Temperature alive while you learn Vaki, Lykky, kynnykset, and rituals.",
  quickAnswerContext:
    "The full Among the Trolls release is scheduled for October 14, 2026 on Steam (App ID 1675260). Until then the playable build is the February 12 demo, so every guide below is grounded in the demo's curated, non-consecutive slices of the archipelago. Use the topic-first system below to reach the answer that matches the moment you are stuck in.",
  keyFacts: [
    { label: "Game", value: site.gameName },
    { label: "Developer", value: "Avantgarden SRL" },
    { label: "Publisher", value: "505 Pulse / 505 Games" },
    { label: "Platform", value: "Steam" },
    { label: "Full release", value: "October 14, 2026" },
    { label: "Playable now", value: "Public demo (Feb 12, 2026)" },
  ],
  modules: [
    {
      id: "demo-and-progression",
      type: "guide-index",
      heading: "Demo, archipelago, and progression",
      columns: 1,
      groups: [
        {
          title: "Start here",
          items: [
            {
              label: "Demo walkthrough",
              href: "/guides/walkthrough",
              description: "The four pillars in order, verified beats, target-range practice, kynnys rules, and known demo issues.",
            },
            {
              label: "Map and locations",
              href: "/guides/map-overview",
              description: "How the Finnish archipelago is laid out, where kynnykset sit, and how bridges and the swim map work.",
            },
            {
              label: "Grandfather's cabin location",
              href: "/guides/grandfather-cabin-location",
              description: "Where Grandpa's cabin sits, why it is empty, and how Anna's route reaches it.",
            },
            {
              label: "Dungeon locations",
              href: "/guides/dungeon-locations",
              description: "How dungeons branch off the surface, the four dungeon types, and how alternate exits work.",
            },
          ],
        },
      ],
    },
    {
      id: "featured-system-pages",
      type: "featured-guides",
      heading: "Featured system guides",
      lead: {
        title: "Vaki and Lykky: the magic and luck system",
        href: "/guides/magic-and-luck",
        description: "Why every Vaki action nudges Lykky, and how to keep the two forces in balance.",
      },
      supporting: [
        {
          title: "Survival guide",
          href: "/guides/survival-guide",
          description: "Hunger, Thirst, Sleep, Temperature, and harsh-weather response.",
        },
        {
          title: "Crafting and building",
          href: "/guides/crafting-and-building",
          description: "Backpack craft grid, recipes, modular shelters and bridges, campfire cooking.",
        },
        {
          title: "Archery and hunting",
          href: "/guides/archery-and-hunting",
          description: "Bow loop, arrow crafting, target range, hunting small game, stealth.",
        },
        {
          title: "Combat against supernatural creatures",
          href: "/guides/combat-supernatural",
          description: "Kalevala enemies, bow and stealth play, Vaki potions, magic bridges, bug fixes.",
        },
      ],
    },
    {
      id: "complete-guide-index",
      type: "guide-index",
      heading: "Complete guide index",
      columns: 1,
      groups: [
        {
          title: "Mythology and story",
          items: [
            {
              label: "Kalevala creatures and forest spirits",
              href: "/guides/kalevala-creatures",
              description: "Ilmatar, Väinämöinen, Aallottaret, cupstones, familiars, and how broken borders spawn enemies.",
            },
            {
              label: "Rituals",
              href: "/guides/rituals",
              description: "Cupstone offerings, kynnys openings, dungeon exits, and Vaki-aligned potions.",
            },
            {
              label: "Anna and the missing grandfather story",
              href: "/guides/story-arc",
              description: "Anna's crossing, the empty cabin, Grandpa's shaman past, the talking Crow, and the worlds merging.",
            },
          ],
        },
      ],
    },
  ],
  faqIds: [],
  relatedPageIds: [
    "walkthrough",
    "map-overview",
    "grandfather-cabin-location",
    "dungeon-locations",
    "magic-and-luck",
    "survival-guide",
    "crafting-and-building",
    "archery-and-hunting",
    "combat-supernatural",
    "kalevala-creatures",
    "rituals",
    "story-arc",
  ],
  schemaTypes: ["WebSite", "CollectionPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-13",
};