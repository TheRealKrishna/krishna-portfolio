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
          "https://drive.google.com/file/d/1Sj64IQy28kWttKVu6MXZ4wC5lPyBwJHp/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
