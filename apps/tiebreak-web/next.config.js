/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supzxhsocoxyxyfszruz.supabase.co",
      },
      {
        protocol: "https",
        hostname: "mblogthumb-phinf.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "gsqubspdsrnvkpdpmbyg.supabase.co",
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
