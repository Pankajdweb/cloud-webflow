import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
if (process.env.ENABLE_OPENNEXT_CLOUDFLARE === 'true') {
  (async () => {
    const { initOpenNextCloudflareForDev } = await import("@opennextjs/cloudflare");
    initOpenNextCloudflareForDev();
  })();
}
