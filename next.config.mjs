import githubMarkdown from "remark-gfm";
import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [githubMarkdown],
  },
});

const nextConfig = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  compress: true,
});

export default nextConfig;
