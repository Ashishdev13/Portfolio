import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

// If you are deploying to root domain (repo name is ashishdev13.github.io),
// basePath should be "".
// If deploying to a project page (repo name is portfolio), basePath should be "/portfolio".
const basePath = isGithubActions && repo !== "ashishdev13.github.io" ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true }, // GitHub Pages can't run Next image optimizer
};

export default nextConfig;
