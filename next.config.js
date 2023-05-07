/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BRAND: process.env.BRAND,
  },
  output: 'standalone',
}

module.exports = nextConfig
