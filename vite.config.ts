import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const enableSwInDev = env.VITE_ENABLE_SW_DEV === "true";

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "favicon-32.png", "favicon.png", "pwa-192x192.png", "pwa-512x512.png", "robots.txt", "sitemap.xml"],
        manifest: {
          name: "PMNT - Free Markdown Note Taker",
          short_name: "PMNT",
          description:
            "PMNT is a free, open-source markdown note-taking app. Write, organize, and export notes privately in your browser.",
          theme_color: "#000000",
          background_color: "#000000",
          display: "standalone",
          scope: "/",
          start_url: "/",
          icons: [
            {
              src: "/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
        workbox: {
          navigateFallback: "/index.html",
          globPatterns: ["**/*.{js,css,html,ico,png,svg,txt,woff2,json,webmanifest}"],
          runtimeCaching: [
            {
              urlPattern: /\/__l5e\/assets-v1\/.*\.mp4$/i,
              handler: "CacheFirst",
              options: {
                cacheName: "pmnt-video-cache",
                cacheableResponse: {
                  statuses: [0, 200],
                },
                expiration: {
                  maxEntries: 8,
                  maxAgeSeconds: 60 * 60 * 24 * 30,
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: enableSwInDev,
        },
      }),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
  };
});
