/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configure external image domains (add yours here if needed)
  images: {
    domains: [
      "fonts.gstatic.com", // Google Fonts CDN
      "cdn.jsdelivr.net",  // If using JS/CSS libraries via CDN
      "images.unsplash.com", // Example: Unsplash
      "cdn.theayurvedaexperience.com", // If pulling product images from TAE's backend
      "res.cloudinary.com", // Example: Cloudinary (optional)
    ],
  },

  experimental: {
    appDir: true, // Enable Next.js App Router support
  },
};

module.exports = nextConfig;
