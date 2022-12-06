/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: false,
  reactStrictMode: true,
  images: {
    domains: ["yt3.ggpht.com", "lh3.googleusercontent.com"],
  },
};
 
module.exports = nextConfig;
