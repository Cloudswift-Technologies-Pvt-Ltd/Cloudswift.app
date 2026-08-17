/** Allow CloudSeek-sourced images (webp/svg) in the Nyro template. */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // AVIF often shifts warm golds into a light yellow cast on this gradient
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
