/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // ✅ works with Vercel runtime
};

module.exports = nextConfig;
