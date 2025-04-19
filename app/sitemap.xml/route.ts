// app/sitemap.xml/route.ts

import { MetadataRoute } from "next";

export async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://yourdomain.com"; // ⬅️ Replace with your actual domain

  // Example list of URLs — replace with dynamic data if needed
  const staticRoutes = ["" /* homepage */].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes];
}
