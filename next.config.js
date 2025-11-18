/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };
    return config;
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
  ]
};

module.exports = nextConfig;