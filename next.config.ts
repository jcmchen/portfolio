// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const repoName = "portfolio"

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = withMDX({
  // 讓 Next.js 支援 .mdx 與 .md
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // 其他 Next.js 設定可保留
  reactStrictMode: true,

  // github pages
  output: "export",

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

});

export default nextConfig;
