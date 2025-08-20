import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ⚠️ This disables ESLint checks during `next build`
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⚠️ This disables type checking during `next build`
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
