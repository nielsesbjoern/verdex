/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Tree-shake heavy icon/animation libs so only used code ships,
  // reducing unused JavaScript in the client bundle.
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/leistungen/sichtbarkeit",
        destination: "/leistungen/sicherheit",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
