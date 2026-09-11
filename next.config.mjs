/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/services/app-development',
        destination: '/services/mobile-app-development',
        permanent: true,
      },
      {
        source: '/services/seo',
        destination: '/services/search-engine-optimization',
        permanent: true,
      },
      {
        source: '/services/graphics-designing',
        destination: '/services/graphic-design',
        permanent: true,
      },
    ];
  },
};

export default nextConfig
