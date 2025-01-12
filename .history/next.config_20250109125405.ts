import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //  модуль обработки SVG-файлов через @svgr/webpack
  // добавялем webpack config и добавляем новое правило
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // если мы видим файл svg
      issuer: { 
        test: /\.(js|ts)x?$/, // в файлах 
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
