/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable native Next.js image optimization with AVIF and WebP support
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache for static images
  },
  // Gzip / Brotli compression for all text assets and API responses
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/solutions/business-websites',
        destination: '/solutions/business-website-development',
        permanent: true,
      },
      {
        source: '/solutions/internal-business-tools',
        destination: '/solutions/custom-business-software',
        permanent: true,
      },
      {
        source: '/solutions/customer-lead-systems',
        destination: '/solutions/crm-lead-management',
        permanent: true,
      },
      {
        source: '/services/mobile-app-development',
        destination: '/services/app-development',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/services/digital-marketing',
        destination: '/services/paid-advertising',
        permanent: true,
      },
      {
        source: '/services/graphics-designing',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/services/graphic-design',
        destination: '/services/social-media-marketing',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
