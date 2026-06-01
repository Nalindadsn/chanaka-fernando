import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  eslint: {
    // Allows production builds to successfully complete even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig as NextConfig;
