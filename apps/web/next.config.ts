import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: process.env.NEXT_PUBLIC_ALLOWED_DEV_ORIGINS?.split(",") ?? [],
  typedRoutes: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  transpilePackages: [
    "@repo/api",
    "@repo/auth",
    "@repo/db",
    "@repo/ui",
    "@repo/validators",
    "@repo/types",
    "@repo/utils",
    "@repo/assets",
  ],
};

export default nextConfig;
