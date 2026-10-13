import type { ThemeConfig } from "@/types/theme";

// Forest/archipelago visual system for Among the Trolls
export const theme: ThemeConfig = {
  mode: "light",
  navigation: "header",
  tokens: {
    pageBg: "#f5f2ea",          // warm parchment / morning fog
    surface1: "#ffffff",        // reading surface
    surface2: "#ece6d6",        // card surface
    surface3: "#d8d0bb",        // muted surface
    surfaceInverse: "#1f2419",  // deep forest shadow
    textPrimary: "#1f2419",
    textMuted: "#5a5b4c",
    textInverse: "#f8f5ec",
    textOnAccentPrimary: "#f8f5ec",
    textLink: "#3d5a2a",        // mossy green
    focusRing: "#3d5a2a",
    line: "#c8c1ad",
    lineStrong: "#8d8770",
    accentPrimary: "#3d5a2a",   // mossy green
    accentSecondary: "#8a6a2b", // aged bronze (axe handle)
    accentBright: "#c1a35a",    // golden rune glint
    statusConfirmed: "#3d5a2a",
    statusCaution: "#a86b1f",
    statusUnknown: "#6b6b5a",
  },
  typography: {
    headingFamily: "'Cinzel', 'Trajan Pro', Georgia, serif",
    bodyFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
    headingWeight: 700,
  },
  shape: { radius: "6px", borderWidth: "1px", shadow: "0 1px 2px rgba(31, 36, 25, 0.08)", hoverLift: "2px" },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center" },
  variants: {
    home: "media-hero",
    hub: "grouped-list",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "organic", intensity: "low" },
};