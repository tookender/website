import type { MetadataRoute } from "next";
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://korino.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://korino.dev/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://korino.dev/doggo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}