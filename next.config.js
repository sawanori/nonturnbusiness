/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  nextConfig, 
  images: {
    remotePatterns: [
      { hostname: 'flowbite.s3.amazonaws.com' },
      { hostname: 'rpk6snz1bj3dcdnk.public.blob.vercel-storage.com' },
    ],
  }
}
