import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: false,
  output: "export",
  basePath: '/puppalooza',
  reactStrictMode: true,
  // assetPrefix: '/puppalooza/',
  images: {
    // remotePatterns: [new URL('https://drive.google.com/thumbnail**')],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      }
    ],
  }
};

export default nextConfig;
