/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.accupass.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig; 