import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
      '@emails': path.resolve(__dirname, './emails'),
    };
    
    // Ignore missing modules during build
    config.externals = config.externals || [];
    if (isServer) {
      config.externals.push('geist/font/sans', 'geist/font/mono');
    }
    
    return config;
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
  transpilePackages: [
    'recharts',
    'd3-array',
    'd3-color', 
    'd3-ease',
    'd3-interpolate',
    'd3-path',
    'd3-scale',
    'd3-shape',
    'd3-time',
    'd3-timer'
  ],
  // Configuração para Vercel
  serverExternalPackages: ["@prisma/client", "prisma"],
};

export default nextConfig;

