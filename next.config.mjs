/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, 
  },
  images: {
    domains: ["https://bxeymptieohwmqbyiwww.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bxeymptieohwmqbyiwww.supabase.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://roadsidecoder.created.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
