import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //  модуль обработки SVG-файлов через @svgr/webpack
  // добавялем webpack 
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
