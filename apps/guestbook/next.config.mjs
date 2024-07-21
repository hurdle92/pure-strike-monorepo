/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ["ui"],
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
