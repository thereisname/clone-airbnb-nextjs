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
  }
  
  export default nextConfig
  