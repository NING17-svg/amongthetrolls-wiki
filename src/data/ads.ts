import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Page Builder replaces the sample inventory and leaves matching codes empty;
// only Adsterra Integrator supplies real codes.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "<script>\n  atOptions = {\n    'key' : '97831ee19133358b459cffe5b16b169f',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/97831ee19133358b459cffe5b16b169f\"></script>",
    "page-top-468x60": "<script>\n  atOptions = {\n    'key' : 'e53b5ed5bdf8d724f6a2e2b509d4380f',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e53b5ed5bdf8d724f6a2e2b509d4380f\"></script>",
    "page-top-320x50": "<script>\n  atOptions = {\n    'key' : '0bb71d2dc72dbe7b53d7b3a4679413a9',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/0bb71d2dc72dbe7b53d7b3a4679413a9\"></script>",
    "guide-section-break-728x90": "<script>\n  atOptions = {\n    'key' : '97831ee19133358b459cffe5b16b169f',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/97831ee19133358b459cffe5b16b169f\"></script>",
    "guide-section-break-468x60": "<script>\n  atOptions = {\n    'key' : 'e53b5ed5bdf8d724f6a2e2b509d4380f',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e53b5ed5bdf8d724f6a2e2b509d4380f\"></script>",
    "guide-section-break-320x50": "<script>\n  atOptions = {\n    'key' : '0bb71d2dc72dbe7b53d7b3a4679413a9',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/0bb71d2dc72dbe7b53d7b3a4679413a9\"></script>",
    "footer-sponsored-smartlink": "https://araplhn.org/4/b4c33502b4a5329f0ec8f153fb55414c",
  },
};

export const adInventory = inventory;
