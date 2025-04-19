/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "fonts.gstatic.com",
      "cdn.jsdelivr.net",
      "cdn.theayurvedaexperience.com",
      "cdn05.zipify.com",        
    ],
  },
  experimental: {
    appDir: true,
  },
  redirects: async () => [
    {
      source: "/nail-n-mane",
      destination: "/",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
