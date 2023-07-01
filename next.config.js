/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.pexels.com', 'images.pexels.com'],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
