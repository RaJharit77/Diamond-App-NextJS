import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGithubPages && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    basePath: '/Diamond-App-NextJS',
  }),
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

