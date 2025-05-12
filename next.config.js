/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // List of allowed domains for next/image
    domains: [
      "fonts.gstatic.com",
      "cdn.jsdelivr.net",
      "cdn.theayurvedaexperience.com",
      "cdn05.zipify.com",
    ],
  },
  // The 'experimental' block with 'appDir: true' has been removed
  // as the App Router is stable and enabled by default in recent Next.js versions.
  redirects: async () => [
    // Example redirect: sends users from /nail-n-mane to the homepage
    {
      source: "/nail-n-mane",
      destination: "/",
      permanent: true, // Use true for permanent redirects (SEO benefits)
    },
    // Add other redirects here if needed
  ],
};

module.exports = nextConfig;

