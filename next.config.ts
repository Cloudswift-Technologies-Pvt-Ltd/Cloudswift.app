/** Allow CloudSeek-sourced images (webp/svg) in the Nyro template. */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp", "image/avif"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
