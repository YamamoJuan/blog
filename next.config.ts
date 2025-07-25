// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Matikan error ESLint saat build
  },
}

export default nextConfig
