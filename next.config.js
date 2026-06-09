/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    qualities: [25, 50, 75],
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'vagas-dev.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
