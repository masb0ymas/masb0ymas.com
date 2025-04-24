import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grs.masb0ymas.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  output: 'standalone',
}

export default nextConfig
