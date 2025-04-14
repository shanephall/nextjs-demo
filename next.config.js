/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/nextjs-demo',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/nextjs-demo/',
}

module.exports = nextConfig