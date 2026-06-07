import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/15CUK0FjRl1HLqExISN_VZZR_QZbFYJ3Y/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
