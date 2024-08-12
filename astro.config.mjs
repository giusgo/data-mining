import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://giusgo.github.io",
  base: "data-mining",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
