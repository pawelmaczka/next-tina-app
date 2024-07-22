const isProd = process.env.NODE_ENV === 'production';

const config = {
  basePath: isProd ? '/tina-nextjs-starter' : '',
}

export default config;
