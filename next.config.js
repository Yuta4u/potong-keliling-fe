/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    esmExternals: false, // THIS IS THE FLAG THAT MATTERS
  },
}

module.exports = nextConfig
