import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "lh3.googleusercontent.com", 
      "192.168.1.12", 
      "localhost", 
      "www.facebook.com", 
      "api.dicebear.com",
      "tcc-muscle-levels.vercel.app"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "https",
        hostname: "tcc-muscle-levels.vercel.app",
      },
    ],
  },
  // Configuração para Vercel
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  },
};

export default nextConfig;

