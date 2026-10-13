import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  {
    href: "/guides",
    labels: { "en-US": "Guides" },
    children: [
      { href: "/guides/walkthrough", labels: { "en-US": "Walkthrough" } },
      { href: "/guides/map-overview", labels: { "en-US": "Map & Locations" } },
      { href: "/guides/survival-guide", labels: { "en-US": "Survival" } },
      { href: "/guides/crafting-and-building", labels: { "en-US": "Crafting" } },
      { href: "/guides/archery-and-hunting", labels: { "en-US": "Archery & Hunting" } },
      { href: "/guides/magic-and-luck", labels: { "en-US": "Magic & Luck" } },
      { href: "/guides/kalevala-creatures", labels: { "en-US": "Kalevala" } },
      { href: "/guides/rituals", labels: { "en-US": "Rituals" } },
      { href: "/guides/story-arc", labels: { "en-US": "Story" } },
    ],
  },
  { href: "/guides/walkthrough", labels: { "en-US": "Walkthrough" } },
  { href: "/guides/map-overview", labels: { "en-US": "Map" } },
  { href: "/guides/survival-guide", labels: { "en-US": "Survival" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}