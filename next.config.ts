import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
    // Add any external image domains you're using
  },
  // Enable static optimization
  reactStrictMode: true,
};

export default nextConfig;
