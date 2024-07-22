/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'development' ? '' : '/next-tina-app';

const nextConfig = {
  basePath: '/next-tina-app',
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
