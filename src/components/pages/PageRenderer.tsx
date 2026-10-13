import { ContentPage } from "@/components/pages/ContentPage";
import { HomePage } from "@/components/pages/HomePage";
import { HubPage } from "@/components/pages/HubPage";
import { WorkspacePage } from "@/components/pages/WorkspacePage";
import type { ModuleAdAnchor } from "@/components/ads/AdModuleSequence";
import type { PageContent } from "@/types/content";

function assertNever(value: never): never {
  throw new Error(`Unsupported page shell: ${JSON.stringify(value)}`);
}

/**
 * Mid-guide ad anchor placed after the first complete chapter so the slot
 * appears between real sections, not before the player's answer.
 */
function guideMidAdAnchors(page: PageContent): ModuleAdAnchor[] {
  if (page.pageType !== "guides") return [];
  const target = page.modules[0]?.id;
  if (!target) return [];
  return [{ after: target, slot: "guide-section-break" }];
}

export function PageRenderer({ page }: { page: PageContent }) {
  const presentation = page.presentation;

  switch (presentation.shell) {
    case "home":
      return <HomePage page={page} />;
    case "hub":
      return <HubPage page={page} />;
    case "content":
      return <ContentPage page={page} adAnchors={guideMidAdAnchors(page)} />;
    case "workspace":
      return <WorkspacePage page={page} />;
    default:
      return assertNever(presentation);
  }
}