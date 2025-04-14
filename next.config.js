/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/nextjs-demo',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig