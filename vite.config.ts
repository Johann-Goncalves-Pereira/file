import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikReact } from "@builder.io/qwik-react/vite";

import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";

import postcss from "./postcss.config.js";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      qwikReact(),
      tsconfigPaths(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
    server: {
      host: "0.0.0.0",
      port: 5123,
    },
    preview: {
      // port: 8080,
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    css: {
      postcss,
    },
  };
});
