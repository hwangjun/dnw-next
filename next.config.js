/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir:'build',
  reactStrictMode: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll:true
    }
  }
}

export default nextConfig
