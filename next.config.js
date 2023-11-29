/** @type {import('next').NextConfig} */
const nextConfig = {
  metadata: {
    metadataBase: process.env.BASE_URL || 'http://localhost:3001',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'agency.teamrabbil.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
