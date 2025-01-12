import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //  модуль обработки SVG-файлов через @svgr/webpack
  // добавялем webpack config и добавляем новое правило
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // если мы видим файл svg
      issuer: {
        test: /\.(js|ts|jsx|tsx)$/, // в файлах js / ts /jsx
      },
      use: ['@svgr/webpack'], // используем спец. загрузчик
    });
    return config;
  },
  experimental: {
    turboMode: false,
  },
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts|jsx|tsx)$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
