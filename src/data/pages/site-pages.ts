import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Questions`,
    metaDescription:
      "Common questions about the Among the Trolls demo, release timing, platforms, and what this unofficial wiki covers.",
    summary:
      "Short answers to the launch questions players ask before reading a guide.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Quick answers to the questions players ask most about the demo, full release, and this unofficial wiki.",
      ctas: [{ label: "Read the walkthrough", href: "/guides/walkthrough" }],
    },
    quickAnswer:
      "This FAQ covers the demo status, the full release date, the supported platform, and what this unofficial wiki actually verifies.",
    keyFacts: [
      { label: "Game", value: site.gameName },
      { label: "Developer", value: "Avantgarden SRL" },
      { label: "Publisher", value: "505 Pulse / 505 Games" },
      { label: "Platform", value: "Steam (PC)" },
      { label: "Full release", value: "October 14, 2026" },
      { label: "Playable now", value: "Public demo (Feb 12, 2026)" },
    ],
    modules: [
      {
        id: "release-faq",
        type: "prose",
        heading: "Release and platform",
        body:
          "Full release is October 14, 2026 on Steam (App ID 1675260). The only playable build before that date is the public demo launched February 12, 2026 and patched February 23, 2026 for Steam Next Fest. The demo runs on Steam (PC) with WASD / ESDF only — no key rebinding — and 21:9 ultra-wide support is planned for full release.",
      },
      {
        id: "demo-limits-faq",
        type: "prose",
        heading: "Demo limits",
        body:
          "The demo has a roughly 2-hour time gate with no save function. It uses curated, non-consecutive slices of the archipelago, not a continuous route. The largest kynnys fights and the final boss are reserved for the full release.",
      },
      {
        id: "wiki-scope-faq",
        type: "prose",
        heading: "What this wiki covers",
        body:
          "Guides cover the demo walkthrough, the archipelago map and key locations (Grandpa's cabin, kynnys dungeons), survival and Lykky / Vaki systems, crafting, archery and hunting, supernatural combat, Kalevala creatures and forest spirits, rituals, and the story arc of Anna's search for her missing grandfather. Everything is grounded in the demo and the developer's confirmed descriptions; speculative claims are not added.",
      },
      {
        id: "official-status-faq",
        type: "prose",
        heading: "Official status",
        body:
          `${site.name} is unofficial and unaffiliated with Avantgarden SRL or 505 Pulse / 505 Games. Use the official Steam page for the final release information. The About and contact page above explain how corrections and feedback are routed.`,
      },
    ],
    faqIds: [],
    relatedPageIds: ["home", "walkthrough", "about"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About this unofficial Among the Trolls wiki: what it covers, how sources are chosen, and what readers should expect.",
    summary:
      "An unofficial fan wiki focused on the public demo and confirmed descriptions of Among the Trolls.",
    hero: {
      eyebrow: "About",
      subtitle:
        "What this unofficial Among the Trolls wiki covers, how sources are chosen, and what to expect from it.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial fan wiki. It documents the public demo, the archipelago map, the survival and Vaki / Lykky systems, crafting, archery, supernatural combat, Kalevala lore, rituals, and Anna's story arc — using the developer's confirmed descriptions and the demo's verified progression.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan wiki" },
      { label: "Editorial rule", value: "Confirmed demo and developer sources only" },
      { label: "Scope", value: "Guides, map, systems, story" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find clear answers to the questions they hit while playing the Among the Trolls public demo — without pretending to know more than the developer has confirmed.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Facts come from the Among the Trolls Steam store page, developer descriptions, and direct demo observation. Unconfirmed mechanics, item counts, and map details are left out instead of being guessed.",
      },
      {
        id: "scope",
        type: "prose",
        heading: "Scope",
        body:
          "The wiki focuses on the systems players can verify in the demo. Once the full release ships on October 14, 2026, new guides can be added without retrofitting speculation into existing pages.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms", "faq"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact page for corrections, official source updates, and site feedback about this Among the Trolls wiki.",
    summary:
      "A trust page for corrections, source updates, and feedback about this unofficial wiki.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page to send corrections, official source links, and site feedback about this unofficial Among the Trolls wiki.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Send corrections or feedback through the channel listed on this page once the site is published; the page currently holds the placeholder contact route for the launch Builder to fill.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and source updates" },
      { label: "Policy", value: "No game account credentials requested" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Add a working email address or contact form endpoint before publishing. This page exists so the site has a complete trust-page structure for the launch Builder to fill.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "Invite readers to send Steam or developer source links when facts change. Do not request private account information or game account credentials.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for this unofficial Among the Trolls wiki, including analytics and advertising behavior.",
    summary:
      "A starter privacy policy for this unofficial Among the Trolls wiki.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "What data this unofficial Among the Trolls wiki collects, why it is used, and how visitors can make contact.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage data. If advertising is enabled, the third-party advertising provider may process technical request data to deliver and measure ads.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a contact method is added, messages may include the information visitors choose to send. Do not request sensitive personal information.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for this unofficial Among the Trolls wiki, including scope, disclaimers, and acceptable use.",
    summary:
      "Starter terms for this unofficial Among the Trolls wiki.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Unofficial status, informational scope, and acceptable use for this Among the Trolls wiki.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "This is an unofficial Among the Trolls wiki. Guide information may change as official details are updated; use the official Steam page for final release and purchase decisions.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Trademarks", value: "Among the Trolls is owned by Avantgarden SRL / 505 Pulse / 505 Games" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with the developer Avantgarden SRL, the publisher 505 Pulse / 505 Games, Steam / Valve, or any trademark owner unless explicitly stated after launch. Among the Trolls and related marks belong to their respective owners.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use the official Steam store page for final release, platform, and purchase decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-13",
  },
];