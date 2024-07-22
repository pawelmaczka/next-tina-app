/** @type {import('next').NextConfig} */

import config from './config'

const nextConfig = {
  basePath: config.basePath,
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
