import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AllYonoGuru — Yono Game All Apps Directory",
    short_name: "AllYonoGuru",
    description:
      "Independent directory of Android skill-based game apps in the Yono game network.",
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#020817",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
