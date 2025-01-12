import type { NextConfig } from 'next';

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  experimental: {
    turboMode: false, // Отключаем Turbopack
  },
};

export default nextConfig;


export default nextConfig;
