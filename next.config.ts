import type { NextConfig } from "next";

// module.exports = {
//   images: {
//     remotePatterns: [new URL('https://drive.google.com/thumbnail?id=**')],
//   },
// };

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: false,
  // output: "export",
  basePath: '/puppalooza',
  reactStrictMode: true,
  // assetPrefix: '/puppalooza/',
};

export default nextConfig;
