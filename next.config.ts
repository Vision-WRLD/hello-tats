import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/hello-tats',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
