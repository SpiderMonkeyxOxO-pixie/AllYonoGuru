import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /_next/ must stay crawlable: it serves the CSS and JS Google needs
        // to render pages. Only the API is excluded.
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://allyonoguru.com/sitemap.xml",
  };
}
