/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BRAND: process.env.BRAND,
  },
}

module.exports = nextConfig
