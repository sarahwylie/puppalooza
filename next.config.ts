import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: false,
  output: "export",
  basePath: '/puppalooza',
  reactStrictMode: true,
  // assetPrefix: '/puppalooza/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      }
    ],
  }
};

export default nextConfig;
