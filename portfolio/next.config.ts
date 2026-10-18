import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Pages that moved when the single-page site was split up. Old in-page
  // anchors (/#projects and so on) are handled client-side by HashRedirect,
  // because the hash never reaches the server.
  async redirects() {
    return [
      { source: "/work/more", destination: "/work", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/blog", destination: "/writing", permanent: true },
    ];
  },
};

export default nextConfig;
