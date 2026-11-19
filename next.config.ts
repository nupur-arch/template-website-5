import type { NextConfig } from "next";
const nextConfig: NextConfig = {experimental:{webpackBuildWorker:false},images:{remotePatterns:[{protocol:"https",hostname:"images.unsplash.com"}]} };
export default nextConfig;
