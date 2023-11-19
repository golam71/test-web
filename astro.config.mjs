import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import vercel from "@astrojs/vercel/serverless"; // Updated import

export default defineConfig({
  site: "https://salam.app",
  integrations: [tailwind(), sitemap(), solidJs(), compress()],
  vite: {
    ssr: {
      noExternal: ["solid-dismiss"],
    },
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
  output: 'server', // Adjusted output
  adapter: vercel({
    speedInsights: {
      enabled: true,
    },
    webAnalytics: true,
  }),
});

