import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    // Обработка SVG с помощью @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  experimental: {
    turboMode: false,
  },
};

export default nextConfig;
