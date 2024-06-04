module.exports = {
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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
