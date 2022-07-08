/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // no https://
    // an array of whitelisted domains
    domains: ["placekitten.com"],
  },
};

module.exports = nextConfig;
