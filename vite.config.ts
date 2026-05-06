import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Configured for Vercel deployment.
// - cloudflare plugin disabled (was used for Cloudflare Workers)
// - tanstackStart target set to "vercel" so the build emits a Vercel-compatible output
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
});
