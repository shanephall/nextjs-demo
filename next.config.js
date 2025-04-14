/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: '/nextjs-demo',
  assetPrefix: '/nextjs-demo/',
  trailingSlash: true,
}

module.exports = nextConfig