/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  
  /* config options here */
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: true,
    };
    return config;
  },
};


export default nextConfig;
