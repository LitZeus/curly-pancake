import withMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = withMDX()({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
});

export default nextConfig;
