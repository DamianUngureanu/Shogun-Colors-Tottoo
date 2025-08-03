import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase this as needed
    },
  },
};

export default nextConfig;
