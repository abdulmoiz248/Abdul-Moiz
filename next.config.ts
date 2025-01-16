import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/leetcode/:path*',
        destination: 'https://leetcode.com/:path*',
      },
    ];
  },
};

export default nextConfig;
