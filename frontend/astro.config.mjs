import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://love-catalogue.pages.dev",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
