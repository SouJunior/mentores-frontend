/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['img.freepik.com', 'vagas-dev.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
