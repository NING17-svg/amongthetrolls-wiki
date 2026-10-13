import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Among the Trolls Wiki",
  brandMark: "AT",
  gameName: "Among the Trolls",
  domain: "amongthetrolls.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://amongthetrolls.wiki").replace(/\/$/, ""),
  description:
    "Among the Trolls guides: demo walkthrough, Finnish archipelago map, survival needs, Vaki and Lykky magic system, crafting, archery, Kalevala lore, and rituals.",
  tagline:
    "Walk the Finnish archipelago, survive the first night, and rebuild the borders between worlds.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "Guide index",
        homeDetails: "About this guide and recent updates",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
  ],
  author: "Among the Trolls Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Among the Trolls on Steam",
      href: "https://store.steampowered.com/app/1675260/Among_the_Trolls/",
      description: "Official Steam store page for Among the Trolls.",
    },
  ],
  disclaimer:
    "Unofficial fan wiki. Among the Trolls and all related marks belong to Avantgarden SRL and 505 Pulse / 505 Games.",
};