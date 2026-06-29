import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/yono-game-spin",
          "/share-slots-yono",
        ],
      },
    ],
    sitemap: "https://allyonoguru.com/sitemap.xml",
  };
}
