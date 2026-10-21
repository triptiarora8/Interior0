/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Unsplash resizes on its own CDN, so we hand it the width directly
    loader: "custom",
    loaderFile: "./lib/unsplash-loader.js",
  },
};

export default nextConfig;
