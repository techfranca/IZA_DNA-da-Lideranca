import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080],
    imageSizes: [200, 384, 400, 500],
  },
};

export default nextConfig;
