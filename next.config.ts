import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This will make our build static
  images: {
    unoptimized: true, // Image optimization is disabled in static builds
  }
};

export default nextConfig;
