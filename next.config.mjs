/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/components/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/styles/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['a0.muscache.com'],
  },
}

export default nextConfig
