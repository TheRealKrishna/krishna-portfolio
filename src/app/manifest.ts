import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.role}`,
    short_name: "Krishna",
    description: siteConfig.shortBio,
    start_url: "/",
    display: "standalone",
    background_color: "#050310",
    theme_color: "#050310",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
    ],
  };
}
