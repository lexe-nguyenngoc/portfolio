import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://storage.googleapis.com/**")]
  },
  output: "export",
  basePath: "/portfolio"
};

export default nextConfig;
