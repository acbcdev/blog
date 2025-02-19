import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import {
  transformerNotationDiff,
  // ...
} from "@shikijs/transformers";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: "static",
  integrations: [
    mdx({
      optimize: {
        ignoreElementNames: ["pre"],
      },
      syntaxHighlight: "shiki",
    }),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: "shiki",
    extendDefaultShikiSetup: true,

    shikiConfig: {
      theme: "tokyo-night",
      wrap: true,
      transformers: [transformerNotationDiff],
    },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
  devToolbar: {
    enabled: false,
  },
});
