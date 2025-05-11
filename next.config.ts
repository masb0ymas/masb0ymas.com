import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grs.masb0ymas.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    mdxRs: true,
  },
  output: 'standalone',
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
