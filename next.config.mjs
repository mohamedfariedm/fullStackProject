/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    // ✋ This makes Next.js throw an error on build if there are TS errors
    ignoreBuildErrors: false,
  },
  images: {
  },
};

export default nextConfig;
