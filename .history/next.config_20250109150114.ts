import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //  модуль обработки SVG-файлов через @svgr/webpack
  // добавялем webpack config и добавляем новое правило
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
