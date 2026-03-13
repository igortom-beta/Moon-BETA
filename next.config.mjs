const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isProduction ? "/Moon-BETA" : "",
  assetPrefix: isProduction ? "/Moon-BETA/" : ""
};

export default nextConfig;
